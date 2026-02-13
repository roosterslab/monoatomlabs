# Visiting Card Maker - Infrastructure

This directory contains Terraform configuration for deploying the Visiting Card Maker application to AWS Amplify with GitHub Actions CI/CD.

## Architecture

- **AWS Amplify**: Hosts the React application with automatic builds and deployments
- **GitHub Actions**: CI/CD pipelines for building, testing, and deploying
- **Terraform**: Infrastructure as Code for reproducible deployments

## Prerequisites

1. **AWS Account** with appropriate permissions
2. **GitHub Personal Access Token** with repo access
3. **Terraform** >= 1.0
4. **AWS CLI** configured with credentials

## Quick Start

### 1. Configure Terraform Variables

```bash
cd infrastructure/maker-app
cp terraform.tfvars.example terraform.tfvars
```

Edit `terraform.tfvars` with your values:
- AWS region
- GitHub repository URL
- GitHub access token (or use environment variable)

### 2. Initialize Terraform

```bash
terraform init
```

### 3. Review the Plan

```bash
terraform plan
```

### 4. Apply Infrastructure

```bash
terraform apply
```

### 5. Configure GitHub Secrets

Add these secrets to your GitHub repository:

```
AWS_ACCESS_KEY_ID          = <your-aws-access-key>
AWS_SECRET_ACCESS_KEY      = <your-aws-secret-key>
AWS_REGION                 = us-east-1
AMPLIFY_WEBHOOK_URL        = <from-terraform-output>
```

## GitHub Actions Workflows

### CI Workflow (`maker-app-ci.yml`)
- Triggers on PR and push to `maker-app` branch
- Runs linting, tests, and builds
- Uploads build artifacts

### Deploy Workflow (`maker-app-deploy.yml`)
- Triggers on push to `maker-app` branch
- Builds and deploys to AWS Amplify
- Can be manually triggered for specific environments

### Infrastructure Workflow (`terraform-infrastructure.yml`)
- Manages Terraform infrastructure
- Runs plan on PRs
- Applies changes on merge to main

## Terraform Files

- `amplify.tf` - Main Amplify app configuration
- `amplify-variables.tf` - Input variables
- `amplify-outputs.tf` - Output values
- `amplify.yml` - Amplify build specification
- `main.tf` - Legacy S3+CloudFront config (optional)
- `variables.tf` - Legacy variables
- `outputs.tf` - Legacy outputs

## Deployment Process

1. **Commit code** to `maker-app` branch
2. **GitHub Actions** runs CI checks
3. **Amplify** automatically builds and deploys
4. **Preview URLs** created for feature branches

## Accessing the Application

After deployment, get the URL:

```bash
terraform output application_url
```

Or check AWS Amplify Console:
```bash
terraform output amplify_console_url
```

## Custom Domain Setup

1. Add domain configuration to `terraform.tfvars`:
```hcl
domain_name   = "maker.monoatomlabs.com"
domain_prefix = ""  # for root domain
```

2. Apply changes:
```bash
terraform apply
```

3. Update DNS records in Route 53 or your DNS provider

## Amplify Build Settings

Build configuration is in `amplify.yml`:
- Uses Node.js 18
- Installs dependencies with `npm ci`
- Builds with `npm run build`
- Outputs to `dist/` directory

## Environment Variables

Set environment variables in Terraform:

```hcl
environment_variables = {
  VITE_API_URL = "https://api.example.com"
  VITE_ENV     = "production"
}
```

## Troubleshooting

### Build Failures
1. Check Amplify Console logs
2. Verify `amplify.yml` paths are correct
3. Ensure environment variables are set

### Deployment Issues
1. Verify GitHub token has correct permissions
2. Check AWS credentials
3. Review Terraform state

### Domain Not Working
1. Verify DNS records are propagated
2. Check ACM certificate status
3. Wait for Amplify domain verification (can take 24-48 hours)

## Cleanup

To destroy all infrastructure:

```bash
terraform destroy
```

Or use GitHub Actions workflow with 'destroy' action.

## Cost Estimation

AWS Amplify pricing (approximate):
- Build minutes: $0.01 per minute
- Hosting: $0.15 per GB stored, $0.15 per GB served
- Average monthly cost: $5-20 for small apps

## Support

For issues or questions:
- Check AWS Amplify documentation
- Review GitHub Actions logs
- Contact: support@monoatomlabs.com
