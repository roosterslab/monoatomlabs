variable "project_id" {
  description = "GCP project ID"
  type        = string
}

variable "region" {
  description = "Cloud Run deployment region"
  type        = string
  default     = "us-central1"
}

variable "image_tag" {
  description = "Docker image tag to deploy (updated by CI after each build)"
  type        = string
  default     = "latest"
}

variable "artifact_registry_repo" {
  description = "Artifact Registry repository name (in the same region as Cloud Run)"
  type        = string
  default     = "cloud-run-source-deploy"
}
