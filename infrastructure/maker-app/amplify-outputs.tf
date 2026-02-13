output "amplify_app_id" {
  description = "Amplify App ID"
  value       = aws_amplify_app.maker_app.id
}

output "amplify_app_arn" {
  description = "Amplify App ARN"
  value       = aws_amplify_app.maker_app.arn
}

output "amplify_default_domain" {
  description = "Amplify default domain"
  value       = aws_amplify_app.maker_app.default_domain
}

output "main_branch_url" {
  description = "Main branch URL"
  value       = "https://${aws_amplify_branch.main.branch_name}.${aws_amplify_app.maker_app.default_domain}"
}

output "application_url" {
  description = "Application access URL"
  value       = var.domain_name != "" ? "https://${var.domain_prefix != "" ? "${var.domain_prefix}." : ""}${var.domain_name}" : "https://${aws_amplify_branch.main.branch_name}.${aws_amplify_app.maker_app.default_domain}"
}

output "webhook_url" {
  description = "Webhook URL for CI/CD triggers"
  value       = aws_amplify_webhook.main.url
  sensitive   = true
}

output "amplify_console_url" {
  description = "AWS Amplify Console URL"
  value       = "https://console.aws.amazon.com/amplify/home?region=${var.aws_region}#/${aws_amplify_app.maker_app.id}"
}

output "production_branch_url" {
  description = "Production branch URL"
  value       = var.create_production_branch ? "https://${aws_amplify_branch.production[0].branch_name}.${aws_amplify_app.maker_app.default_domain}" : "Not created"
}

output "production_webhook_url" {
  description = "Webhook URL for production branch CI/CD triggers"
  value       = var.create_production_branch ? aws_amplify_webhook.production[0].url : "Not created"
  sensitive   = true
}
