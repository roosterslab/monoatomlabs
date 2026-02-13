terraform {
  required_version = ">= 1.0"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# Amplify App
resource "aws_amplify_app" "website_home_page" {
  name         = var.app_name
  repository   = var.repository_url
  access_token = var.github_token

  # IAM role (if enabled)
  iam_service_role_arn = var.create_amplify_role ? aws_iam_role.amplify_role[0].arn : null

  # Build settings
  build_spec = <<-EOT
    version: 1
    frontend:
      phases:
        preBuild:
          commands:
            - npm install --production=false
        build:
          commands:
            - npm run build
      artifacts:
        baseDirectory: ${var.build_output_dir}
        files:
          - '**/*'
      cache:
        paths:
          - node_modules/**/*
  EOT

  # Environment variables
  environment_variables = var.environment_variables

  # Enable auto branch creation for pull requests
  enable_auto_branch_creation = var.enable_auto_branch_creation
  enable_branch_auto_build    = var.enable_branch_auto_build
  enable_branch_auto_deletion = var.enable_branch_auto_deletion

  # Custom rules for redirects/rewrites
  dynamic "custom_rule" {
    for_each = var.custom_rules
    content {
      source = custom_rule.value.source
      target = custom_rule.value.target
      status = custom_rule.value.status
    }
  }

  tags = var.tags
}

# Amplify Branch
resource "aws_amplify_branch" "main" {
  app_id      = aws_amplify_app.website_home_page.id
  branch_name = var.branch_name

  enable_auto_build = true

  framework = var.framework
  stage     = var.stage

  tags = var.tags
}

# IAM Role for Amplify (if needed for backend)
resource "aws_iam_role" "amplify_role" {
  count = var.create_amplify_role ? 1 : 0
  name  = "${var.app_name}-amplify-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Action = "sts:AssumeRole"
        Effect = "Allow"
        Principal = {
          Service = "amplify.amazonaws.com"
        }
      }
    ]
  })

  tags = var.tags
}

resource "aws_iam_role_policy_attachment" "amplify_backend_deployment" {
  count      = var.create_amplify_role ? 1 : 0
  role       = aws_iam_role.amplify_role[0].name
  policy_arn = "arn:aws:iam::aws:policy/AdministratorAccess-Amplify"
}

