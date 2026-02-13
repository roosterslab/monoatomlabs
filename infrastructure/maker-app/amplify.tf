terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }

  backend "s3" {
    # Configure with your state bucket
    # bucket = "your-terraform-state-bucket"
    # key    = "maker-app-amplify/terraform.tfstate"
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

# AWS Amplify App
resource "aws_amplify_app" "maker_app" {
  name       = "${var.project_name}-${var.environment}"
  repository = var.github_repository

  # GitHub personal access token stored in AWS Secrets Manager or SSM
  access_token = var.github_access_token

  # Build settings
  build_spec = file("${path.module}/amplify.yml")

  # Environment variables
  environment_variables = merge(
    {
      VITE_APP_NAME = "Visiting Card Maker"
      NODE_VERSION  = "18"
    },
    var.environment_variables
  )

  # Custom rules for SPA routing
  custom_rule {
    source = "/<*>"
    status = "404-200"
    target = "/index.html"
  }

  # Enable auto branch creation
  enable_auto_branch_creation = var.enable_auto_branch_creation
  enable_branch_auto_build    = var.enable_branch_auto_build
  enable_branch_auto_deletion = var.enable_branch_auto_deletion

  # Auto branch creation patterns
  auto_branch_creation_patterns = var.auto_branch_creation_patterns

  # Auto branch creation config
  auto_branch_creation_config {
    enable_auto_build           = true
    enable_pull_request_preview = var.enable_pull_request_preview
    framework                   = "React"
    stage                       = "DEVELOPMENT"
  }

  tags = {
    Name = "Visiting Card Maker Amplify App"
  }
}

# Amplify Branch for main/master
resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.maker_app.id
  branch_name = var.main_branch_name

  enable_auto_build = true
  stage             = var.environment == "prod" ? "PRODUCTION" : "DEVELOPMENT"

  framework = "React"

  environment_variables = {
    ENV = var.environment
  }

  tags = {
    Name        = "Main Branch"
    Environment = var.environment
  }
}

# Amplify Branch for development (optional)
resource "aws_amplify_branch" "develop" {
  count = var.create_develop_branch ? 1 : 0

  app_id      = aws_amplify_app.maker_app.id
  branch_name = "develop"

  enable_auto_build = true
  stage             = "DEVELOPMENT"

  framework = "React"

  environment_variables = {
    ENV = "development"
  }

  tags = {
    Name        = "Development Branch"
    Environment = "development"
  }
}

# Amplify Branch for production (visiting-card-maker-live)
resource "aws_amplify_branch" "production" {
  count = var.create_production_branch ? 1 : 0

  app_id      = aws_amplify_app.maker_app.id
  branch_name = var.production_branch_name

  enable_auto_build = true
  stage             = "PRODUCTION"

  framework = "React"

  environment_variables = {
    ENV = "production"
  }

  tags = {
    Name        = "Production Branch"
    Environment = "production"
  }
}

# Amplify Domain Association (if custom domain provided)
resource "aws_amplify_domain_association" "maker_app" {
  count = var.domain_name != "" ? 1 : 0

  app_id      = aws_amplify_app.maker_app.id
  domain_name = var.domain_name

  # Main branch subdomain
  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = var.domain_prefix
  }

  # WWW subdomain
  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = "www"
  }

  # Development branch subdomain (if enabled)
  dynamic "sub_domain" {
    for_each = var.create_develop_branch ? [1] : []
    content {
      branch_name = aws_amplify_branch.develop[0].branch_name
      prefix      = "dev"
    }
  }

  # Production branch subdomain (if enabled)
  dynamic "sub_domain" {
    for_each = var.create_production_branch ? [1] : []
    content {
      branch_name = aws_amplify_branch.production[0].branch_name
      prefix      = var.production_domain_prefix
    }
  }

  wait_for_verification = false
}

# Amplify Webhook for CI/CD - Main
resource "aws_amplify_webhook" "main" {
  app_id      = aws_amplify_app.maker_app.id
  branch_name = aws_amplify_branch.main.branch_name
  description = "Webhook for main branch deployments"
}

# Amplify Webhook for CI/CD - Production
resource "aws_amplify_webhook" "production" {
  count = var.create_production_branch ? 1 : 0

  app_id      = aws_amplify_app.maker_app.id
  branch_name = aws_amplify_branch.production[0].branch_name
  description = "Webhook for production branch deployments"
}
