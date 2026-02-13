# Terraform AWS Amplify Deployment

This Terraform configuration deploys the website-home-page-content-lab project to AWS Amplify.

## Prerequisites

1. **AWS Account** with appropriate permissions
2. **Terraform** installed (version >= 1.0)
3. **AWS CLI** configured with credentials
4. **Git repository** (GitHub, GitLab, or Bitbucket) containing your code

## Setup Instructions

### 1. Configure AWS Credentials

```bash
aws configure
```

Or set environment variables:
```bash
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
export AWS_DEFAULT_REGION="us-east-1"
```

### 2. Create OAuth Token for Repository Access

Amplify needs access to your repository. Create a personal access token:

- **GitHub**: Settings → Developer settings → Personal access tokens → Generate new token
  - Required scopes: `repo`, `admin:repo_hook`

- **GitLab**: User Settings → Access Tokens
  - Required scopes: `api`, `read_repository`

Store the token securely and reference it in your Terraform:

```bash
export TF_VAR_repository_token="your-oauth-token"
```

### 3. Configure Variables

Copy the example file and customize it:

```bash
cp terraform.tfvars.example terraform.tfvars
```

Edit `terraform.tfvars` with your values:
- Update `repository_url` with your Git repository URL
- Set the correct `framework` (React, Vue, Next.js, etc.)
- Adjust `build_output_dir` based on your build configuration
- Configure environment variables if needed

### 4. Initialize Terraform

```bash
cd terraform
terraform init
```

### 5. Review the Plan

```bash
terraform plan
```

### 6. Apply the Configuration

```bash
terraform apply
```

Type `yes` when prompted to create the resources.

### 7. Access Your Deployed App

After successful deployment, Terraform will output:
- `amplify_app_id`: The Amplify app ID
- `amplify_branch_url`: The URL where your app is deployed
- `amplify_default_domain`: The default Amplify domain

## Connecting Repository with OAuth

If you need to connect the repository with OAuth token, you can add this to `main.tf`:

```hcl
resource "aws_amplify_app" "website_home_page" {
  # ... existing configuration ...

  access_token = var.repository_token  # GitHub/GitLab personal access token
}
```

And add to `variables.tf`:

```hcl
variable "repository_token" {
  description = "OAuth token for repository access"
  type        = string
  sensitive   = true
}
```

## Customization Options

### Build Specification

The default build spec assumes:
- Node.js/npm project
- `npm ci` for dependencies
- `npm run build` for building
- Output in the directory specified by `build_output_dir`

Modify the `build_spec` in `main.tf` if your project uses different commands.

### Custom Domain

To add a custom domain, add this resource to `main.tf`:

```hcl
resource "aws_amplify_domain_association" "custom_domain" {
  app_id      = aws_amplify_app.website_home_page.id
  domain_name = "yourdomain.com"

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = ""
  }

  sub_domain {
    branch_name = aws_amplify_branch.main.branch_name
    prefix      = "www"
  }
}
```

### Environment Variables

Add environment variables in `terraform.tfvars`:

```hcl
environment_variables = {
  REACT_APP_API_URL = "https://api.example.com"
  NODE_ENV          = "production"
  NEXT_PUBLIC_KEY   = "your-public-key"
}
```

## Useful Commands

```bash
# View current state
terraform show

# View outputs
terraform output

# Update infrastructure
terraform apply

# Destroy infrastructure
terraform destroy

# Format code
terraform fmt

# Validate configuration
terraform validate
```

## Troubleshooting

### Build Failures

Check the Amplify console for build logs:
1. Go to AWS Console → Amplify
2. Select your app
3. View build history and logs

### Repository Connection Issues

Ensure your OAuth token has the correct permissions and hasn't expired.

### Branch Not Building

Check that `enable_branch_auto_build` is set to `true` in your variables.

## Security Best Practices

1. **Never commit** `terraform.tfvars` if it contains secrets
2. Use AWS Secrets Manager or Parameter Store for sensitive values
3. Enable MFA on your AWS account
4. Use least-privilege IAM policies
5. Store OAuth tokens securely (e.g., in environment variables or secret managers)

## Additional Resources

- [AWS Amplify Documentation](https://docs.aws.amazon.com/amplify/)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [Terraform Amplify Resources](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/amplify_app)
