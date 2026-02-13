variable "aws_region" {
  description = "AWS region to deploy resources"
  type        = string
  default     = "us-east-1"
}

variable "app_name" {
  description = "Name of the Amplify application"
  type        = string
  default     = "website-home-page-content-lab"
}

variable "repository_url" {
  description = "GitHub/GitLab/Bitbucket repository URL"
  type        = string
}

variable "github_token" {
  description = "GitHub personal access token for repository access"
  type        = string
  sensitive   = true
}

variable "branch_name" {
  description = "Branch name to deploy"
  type        = string
  default     = "main"
}

variable "framework" {
  description = "Framework of the application (e.g., React, Vue, Angular, Next.js)"
  type        = string
  default     = "React"
}

variable "stage" {
  description = "Stage for the branch (PRODUCTION, BETA, DEVELOPMENT, EXPERIMENTAL, PULL_REQUEST)"
  type        = string
  default     = "PRODUCTION"
}

variable "build_output_dir" {
  description = "Directory where build artifacts are generated"
  type        = string
  default     = "build"
}

variable "environment_variables" {
  description = "Environment variables for the Amplify app"
  type        = map(string)
  default     = {}
}

variable "enable_auto_branch_creation" {
  description = "Enable automatic branch creation for pull requests"
  type        = bool
  default     = false
}

variable "enable_branch_auto_build" {
  description = "Enable automatic builds for branches"
  type        = bool
  default     = true
}

variable "enable_branch_auto_deletion" {
  description = "Enable automatic deletion of branches"
  type        = bool
  default     = false
}

variable "custom_rules" {
  description = "Custom rewrite and redirect rules"
  type = list(object({
    source = string
    target = string
    status = string
  }))
  default = [
    {
      source = "/<*>"
      target = "/index.html"
      status = "404-200"
    }
  ]
}

variable "create_amplify_role" {
  description = "Create IAM role for Amplify (needed for backend deployments)"
  type        = bool
  default     = false
}

variable "tags" {
  description = "Tags to apply to resources"
  type        = map(string)
  default = {
    Project     = "website-home-page-content-lab"
    ManagedBy   = "Terraform"
    Environment = "production"
  }
}
