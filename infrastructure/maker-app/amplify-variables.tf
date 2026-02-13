variable "aws_region" {
  description = "AWS region for resources"
  type        = string
  default     = "us-east-1"
}

variable "environment" {
  description = "Environment name (dev, staging, prod)"
  type        = string
  default     = "dev"
}

variable "project_name" {
  description = "Project name for resource naming"
  type        = string
  default     = "monoatom-maker"
}

variable "github_repository" {
  description = "GitHub repository URL (e.g., https://github.com/roosterslab/monoatomlabs)"
  type        = string
  default     = "https://github.com/roosterslab/monoatomlabs"
}

variable "github_access_token" {
  description = "GitHub personal access token for repository access"
  type        = string
  sensitive   = true
}

variable "main_branch_name" {
  description = "Main branch name to deploy"
  type        = string
  default     = "maker-app"
}

variable "create_develop_branch" {
  description = "Whether to create a development branch"
  type        = bool
  default     = false
}

variable "enable_auto_branch_creation" {
  description = "Enable automatic branch creation for feature branches"
  type        = bool
  default     = true
}

variable "enable_branch_auto_build" {
  description = "Enable automatic builds for branches"
  type        = bool
  default     = true
}

variable "enable_branch_auto_deletion" {
  description = "Enable automatic branch deletion when PR is merged"
  type        = bool
  default     = true
}

variable "enable_pull_request_preview" {
  description = "Enable pull request previews"
  type        = bool
  default     = true
}

variable "auto_branch_creation_patterns" {
  description = "Patterns for automatic branch creation"
  type        = list(string)
  default     = ["feature/*", "bugfix/*", "hotfix/*"]
}

variable "domain_name" {
  description = "Custom domain name for the application (optional)"
  type        = string
  default     = ""
}

variable "domain_prefix" {
  description = "Subdomain prefix for main branch (leave empty for root domain)"
  type        = string
  default     = ""
}

variable "environment_variables" {
  description = "Additional environment variables for the build"
  type        = map(string)
  default     = {}
}
