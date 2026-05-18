# All service URLs — printed after `terraform apply`
output "service_urls" {
  description = "Public URLs for every deployed Cloud Run service"
  value = {
    for k, v in google_cloud_run_v2_service.sites : k => v.uri
  }
}

# Flat markdown table — pipe to a file with:
#   terraform output -raw links_markdown > LINKS.md
output "links_markdown" {
  description = "Markdown table of all service links"
  value = join("\n", concat(
    ["# Cloud Run Deployment Links\n", "| Service | Category | URL |", "|---------|----------|-----|"],
    [
      for k, v in google_cloud_run_v2_service.sites :
      "| `${k}` | ${local.services[k].category} | ${v.uri} |"
    ]
  ))
}
