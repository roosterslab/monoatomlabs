output "amplify_app_id" {
  description = "The ID of the Amplify app"
  value       = aws_amplify_app.website_home_page.id
}

output "amplify_app_arn" {
  description = "The ARN of the Amplify app"
  value       = aws_amplify_app.website_home_page.arn
}

output "amplify_default_domain" {
  description = "The default domain for the Amplify app"
  value       = aws_amplify_app.website_home_page.default_domain
}

output "amplify_branch_url" {
  description = "The URL for the deployed branch"
  value       = "https://${var.branch_name}.${aws_amplify_app.website_home_page.default_domain}"
}

output "amplify_app_name" {
  description = "The name of the Amplify app"
  value       = aws_amplify_app.website_home_page.name
}

output "iam_role_arn" {
  description = "The ARN of the IAM role created for Amplify"
  value       = var.create_amplify_role ? aws_iam_role.amplify_role[0].arn : null
}
