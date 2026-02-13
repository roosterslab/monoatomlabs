output "s3_bucket_name" {
  description = "Name of the S3 bucket"
  value       = aws_s3_bucket.maker_app.id
}

output "s3_bucket_website_endpoint" {
  description = "S3 bucket website endpoint"
  value       = aws_s3_bucket_website_configuration.maker_app.website_endpoint
}

output "cloudfront_distribution_id" {
  description = "CloudFront distribution ID"
  value       = aws_cloudfront_distribution.maker_app.id
}

output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.maker_app.domain_name
}

output "cloudfront_url" {
  description = "Full CloudFront URL"
  value       = "https://${aws_cloudfront_distribution.maker_app.domain_name}"
}

output "application_url" {
  description = "Application access URL"
  value       = var.domain_name != "" ? "https://${var.domain_name}" : "https://${aws_cloudfront_distribution.maker_app.domain_name}"
}

output "deployment_command" {
  description = "Command to deploy the built application"
  value       = "aws s3 sync ./dist s3://${aws_s3_bucket.maker_app.id}/ --delete --cache-control max-age=31536000,public && aws cloudfront create-invalidation --distribution-id ${aws_cloudfront_distribution.maker_app.id} --paths '/*'"
}
