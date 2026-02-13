terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    # Configure this with your own S3 bucket for state storage
    # bucket = "your-terraform-state-bucket"
    # key    = "maker-app/terraform.tfstate"
    # region = "us-east-1"
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "MonoatomLabs"
      Application = "VisitingCardMaker"
      ManagedBy   = "Terraform"
      Environment = var.environment
    }
  }
}

# S3 bucket for static website hosting
resource "aws_s3_bucket" "maker_app" {
  bucket = "${var.project_name}-${var.environment}"

  tags = {
    Name = "Visiting Card Maker - ${var.environment}"
  }
}

# S3 bucket public access block configuration
resource "aws_s3_bucket_public_access_block" "maker_app" {
  bucket = aws_s3_bucket.maker_app.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# S3 bucket website configuration
resource "aws_s3_bucket_website_configuration" "maker_app" {
  bucket = aws_s3_bucket.maker_app.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"  # SPA routing
  }
}

# S3 bucket policy for public read access
resource "aws_s3_bucket_policy" "maker_app" {
  bucket = aws_s3_bucket.maker_app.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.maker_app.arn}/*"
      }
    ]
  })

  depends_on = [aws_s3_bucket_public_access_block.maker_app]
}

# CloudFront Origin Access Identity
resource "aws_cloudfront_origin_access_identity" "maker_app" {
  comment = "OAI for ${var.project_name}-${var.environment}"
}

# CloudFront distribution
resource "aws_cloudfront_distribution" "maker_app" {
  enabled             = true
  is_ipv6_enabled     = true
  comment             = "Visiting Card Maker - ${var.environment}"
  default_root_object = "index.html"
  price_class         = var.cloudfront_price_class
  aliases             = var.domain_name != "" ? [var.domain_name] : []

  origin {
    domain_name = aws_s3_bucket.maker_app.bucket_regional_domain_name
    origin_id   = "S3-${aws_s3_bucket.maker_app.id}"

    s3_origin_config {
      origin_access_identity = aws_cloudfront_origin_access_identity.maker_app.cloudfront_access_identity_path
    }
  }

  default_cache_behavior {
    allowed_methods  = ["GET", "HEAD", "OPTIONS"]
    cached_methods   = ["GET", "HEAD"]
    target_origin_id = "S3-${aws_s3_bucket.maker_app.id}"

    forwarded_values {
      query_string = false

      cookies {
        forward = "none"
      }
    }

    viewer_protocol_policy = "redirect-to-https"
    min_ttl                = 0
    default_ttl            = 3600
    max_ttl                = 86400
    compress               = true
  }

  # Custom error response for SPA routing
  custom_error_response {
    error_code         = 404
    response_code      = 200
    response_page_path = "/index.html"
  }

  custom_error_response {
    error_code         = 403
    response_code      = 200
    response_page_path = "/index.html"
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    cloudfront_default_certificate = var.domain_name == "" ? true : false
    acm_certificate_arn            = var.acm_certificate_arn
    ssl_support_method             = var.domain_name != "" ? "sni-only" : null
    minimum_protocol_version       = "TLSv1.2_2021"
  }

  tags = {
    Name = "Visiting Card Maker CloudFront - ${var.environment}"
  }
}

# Route53 record (if domain is provided)
resource "aws_route53_record" "maker_app" {
  count = var.domain_name != "" && var.route53_zone_id != "" ? 1 : 0

  zone_id = var.route53_zone_id
  name    = var.domain_name
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.maker_app.domain_name
    zone_id                = aws_cloudfront_distribution.maker_app.hosted_zone_id
    evaluate_target_health = false
  }
}
