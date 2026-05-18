terraform {
  required_version = ">= 1.5"

  required_providers {
    google = {
      source  = "hashicorp/google"
      version = "~> 5.0"
    }
  }
}

provider "google" {
  project = var.project_id
  region  = var.region
}

# ── Service definitions ───────────────────────────────────────────────────────
# Add or remove entries here as new sites are created.
# key   = Cloud Run service name (must be unique, max 49 chars)
# value = { category, site } used to locate the container image

locals {
  services = {
    # catalog
    "catalog-ceraphene"   = { category = "catalog", site = "ceraphene" }
    "catalog-graffisol"   = { category = "catalog", site = "graffisol" }
    "catalog-graphacrete" = { category = "catalog", site = "graphacrete" }
    "catalog-hdgpe"       = { category = "catalog", site = "hdgpe" }

    # flex-banner
    "flex-banner-ceraphene"   = { category = "flex-banner", site = "ceraphene" }
    "flex-banner-graffisol"   = { category = "flex-banner", site = "graffisol" }
    "flex-banner-graphacrete" = { category = "flex-banner", site = "graphacrete" }
    "flex-banner-hdgpe"       = { category = "flex-banner", site = "hdgpe" }

    # box
    "box-ceraphene"   = { category = "box", site = "ceraphene" }
    "box-graffisol"   = { category = "box", site = "graffisol" }
    "box-graphacrete" = { category = "box", site = "graphacrete" }
    "box-hdgpe"       = { category = "box", site = "hdgpe" }
    "box-box-content" = { category = "box", site = "box-content" }
  }

  # Image path convention:
  # REGION-docker.pkg.dev/PROJECT/REPO/SERVICE_NAME:TAG
  image_base = "${var.region}-docker.pkg.dev/${var.project_id}/${var.artifact_registry_repo}"
}

# ── Cloud Run services ────────────────────────────────────────────────────────
resource "google_cloud_run_v2_service" "sites" {
  for_each = local.services

  name     = each.key
  location = var.region
  project  = var.project_id

  template {
    containers {
      image = "${local.image_base}/${each.key}:${var.image_tag}"

      ports {
        container_port = 8080
      }

      resources {
        limits = {
          cpu    = "1"
          memory = "512Mi"
        }
      }
    }

    scaling {
      min_instance_count = 0
      max_instance_count = 3
    }
  }

  traffic {
    percent = 100
    type    = "TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST"
  }
}

# ── Public access (allow unauthenticated) ─────────────────────────────────────
resource "google_cloud_run_v2_service_iam_member" "public" {
  for_each = local.services

  project  = var.project_id
  location = var.region
  name     = google_cloud_run_v2_service.sites[each.key].name
  role     = "roles/run.invoker"
  member   = "allUsers"
}
