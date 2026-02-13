# AWS Amplify Deployment Automation Setup

## Overview
This document provides step-by-step instructions for setting up automated deployment of a Vite + React application to AWS Amplify using Terraform infrastructure-as-code.

## Project Context
- **Project**: Monoatom Labs Homepage Content Lab
- **Tech Stack**: Vite + React + Tailwind CSS
- **Repository**: https://github.com/roosterslab/website-home-page-content-lab
- **Deployment Platform**: AWS Amplify
- **Infrastructure Tool**: Terraform
- **AWS Account**: 617802321689
- **Region**: us-east-1

## Prerequisites

### Required Tools
1. **AWS CLI** - Configured with credentials
   ```bash
   aws configure
   # Or verify existing credentials:
   aws sts get-caller-identity
   ```

2. **GitHub CLI (gh)** - For repository management
   ```bash
   gh auth login
   gh auth status
   ```

3. **Terraform** - Version >= 1.0
   ```bash
   terraform --version
   ```

4. **Git** - For version control
   ```bash
   git --version
   ```

### Required Access
- AWS IAM user with Amplify permissions
- GitHub account with repository access
- GitHub personal access token with `repo` and `admin:repo_hook` scopes

## Step-by-Step Setup Instructions

### Phase 1: Repository Setup

#### 1.1 Initialize Git Repository (if not already done)
```bash
cd /path/to/project
git init
git add .
git commit -m "Initial commit: Project setup"
```

#### 1.2 Create GitHub Repository
```bash
# Using GitHub CLI
gh repo create website-home-page-content-lab \
  --public \
  --description "Monoatom Labs homepage content testing environment" \
  --source=. \
  --remote=origin \
  --push
```

#### 1.3 Verify Repository
```bash
git remote -v
git log --oneline
```

### Phase 2: Terraform Infrastructure Setup

#### 2.1 Create Terraform Directory Structure
```
terraform/
├── main.tf              # Main Amplify resources
├── variables.tf         # Input variables
├── outputs.tf           # Output values
├── terraform.tfvars     # Variable values (gitignored)
├── terraform.tfvars.example  # Example configuration
├── .gitignore          # Ignore sensitive files
└── README.md           # Documentation
```

#### 2.2 Configure Main Terraform Resources (main.tf)
Key resources to create:
1. **aws_amplify_app** - The Amplify application
   - Connect to GitHub repository
   - Configure build specification
   - Set environment variables
   - Define custom rules for SPA routing

2. **aws_amplify_branch** - Branch configuration
   - Enable auto-build
   - Set framework type
   - Configure deployment stage

3. **aws_iam_role** (optional) - For backend features
   - IAM role for Amplify service
   - Policy attachments

#### 2.3 Critical Build Specification
**IMPORTANT**: The build spec must handle Vite correctly:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm install --production=false  # Critical: Include devDependencies
    build:
      commands:
        - npm run build  # Uses package.json scripts
  artifacts:
    baseDirectory: dist  # Vite default output directory
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

**Why `--production=false` is critical**:
- AWS Amplify build environment may set NODE_ENV=production
- This causes npm to skip devDependencies
- Vite is in devDependencies, so build fails without this flag
- Alternative: Use `npm ci --include=dev` or move Vite to dependencies

#### 2.4 Configure Variables (terraform.tfvars)
```hcl
aws_region = "us-east-1"
app_name = "website-home-page-content-lab"
repository_url = "https://github.com/roosterslab/website-home-page-content-lab"
branch_name = "master"
framework = "React"
build_output_dir = "dist"  # Vite default
stage = "PRODUCTION"

environment_variables = {
  NODE_ENV = "production"
}

enable_auto_branch_creation = false
enable_branch_auto_build = true
enable_branch_auto_deletion = false

custom_rules = [
  {
    source = "/<*>"
    target = "/index.html"
    status = "404-200"  # SPA routing support
  }
]

create_amplify_role = false

tags = {
  Project     = "website-home-page-content-lab"
  ManagedBy   = "Terraform"
  Environment = "production"
  Company     = "Monoatom Labs"
}
```

#### 2.5 GitHub Token Management
```bash
# Get current GitHub token
export GITHUB_TOKEN=$(gh auth token)

# Use as Terraform variable
export TF_VAR_github_token=$GITHUB_TOKEN
```

**Security**: Never commit `terraform.tfvars` if it contains tokens. Use environment variables instead.

### Phase 3: Terraform Deployment

#### 3.1 Initialize Terraform
```bash
cd terraform
terraform init
```

This downloads the AWS provider and sets up the backend.

#### 3.2 Validate Configuration
```bash
terraform validate
terraform fmt
```

#### 3.3 Plan Deployment
```bash
TF_VAR_github_token=$GITHUB_TOKEN terraform plan
```

Review the plan output carefully:
- Check that 2 resources will be created (app + branch)
- Verify repository URL is correct
- Confirm build spec is properly configured

#### 3.4 Apply Infrastructure
```bash
TF_VAR_github_token=$GITHUB_TOKEN terraform apply -auto-approve
```

Expected output:
- Amplify app created
- Branch configured
- Default domain assigned
- Build triggered automatically

#### 3.5 Capture Outputs
```bash
terraform output
```

Save these values:
- `amplify_app_id` - For AWS CLI commands
- `amplify_branch_url` - Live deployment URL
- `amplify_default_domain` - Amplify domain

### Phase 4: Verify Deployment

#### 4.1 Monitor Build Status
```bash
# Check latest build
aws amplify list-jobs \
  --app-id <amplify_app_id> \
  --branch-name master \
  --region us-east-1 \
  --max-results 1

# Get detailed job status
aws amplify get-job \
  --app-id <amplify_app_id> \
  --branch-name master \
  --job-id <job_id> \
  --region us-east-1
```

#### 4.2 Check Build Logs
If build fails, fetch logs:
```bash
aws amplify get-job \
  --app-id <amplify_app_id> \
  --branch-name master \
  --job-id <job_id> \
  --region us-east-1 \
  --query 'job.steps[*].[stepName,status,logUrl]' \
  --output table
```

#### 4.3 Test Live Site
Visit the deployment URL and verify:
- Site loads correctly
- SPA routing works (refresh on any route)
- Assets load properly
- No console errors

### Phase 5: Enable Continuous Deployment

#### 5.1 Configure Git Authentication
```bash
# Use GitHub CLI for git operations
gh auth setup-git
```

This ensures git push uses GitHub CLI credentials.

#### 5.2 Test Automatic Deployment
```bash
# Make a change
echo "test" > test.txt
git add test.txt
git commit -m "Test auto-deploy"
git push

# Watch build trigger automatically
aws amplify list-jobs \
  --app-id <amplify_app_id> \
  --branch-name master \
  --region us-east-1
```

#### 5.3 Commit Terraform Configuration
```bash
git add terraform/main.tf terraform/variables.tf terraform/.terraform.lock.hcl
git commit -m "Add AWS Amplify deployment with Terraform

- Configure Amplify app with GitHub integration
- Add support for Vite + React build configuration
- Include SPA routing support
- Add Terraform lock file for provider versions"
git push
```

## Common Issues and Solutions

### Issue 1: "vite: command not found"
**Symptom**: Build fails with exit code 127
**Cause**: npm skipping devDependencies
**Solution**: Use `npm install --production=false` in build spec

### Issue 2: Only 12-13 packages installed
**Symptom**: Build log shows very few packages installed
**Cause**: NODE_ENV=production or corrupted cache
**Solutions**:
1. Add `--production=false` flag
2. Clear Amplify cache (trigger new build)
3. Use `npm install` instead of `npm ci`

### Issue 3: GitHub Push Permission Denied
**Symptom**: `fatal: unable to access ... 403`
**Cause**: Wrong git credentials cached
**Solution**:
```bash
gh auth setup-git
git push
```

### Issue 4: Terraform Access Token Issues
**Symptom**: Repository connection fails
**Cause**: Missing or expired GitHub token
**Solution**:
```bash
# Regenerate token
export TF_VAR_github_token=$(gh auth token)
terraform apply
```

### Issue 5: Build Succeeds but Site Shows 404
**Symptom**: Site loads but routes return 404
**Cause**: Missing SPA redirect rule
**Solution**: Ensure custom_rules includes:
```hcl
{
  source = "/<*>"
  target = "/index.html"
  status = "404-200"
}
```

### Issue 6: Module Resolution Errors
**Symptom**: "Cannot find package 'vite'"
**Cause**: Vite installed via npx at runtime
**Solution**: Use `npm run build` which uses locally installed Vite

## Build Optimization Tips

### 1. Faster Builds
- Keep `node_modules` in cache
- Use `npm ci` when package-lock is stable
- Minimize dependencies

### 2. Smaller Bundle Size
- Use production build
- Enable tree-shaking
- Optimize images

### 3. Better Caching
```yaml
cache:
  paths:
    - node_modules/**/*
    - .vite/**/*  # Vite cache
```

## Infrastructure Updates

### Updating Build Spec
```bash
# Edit terraform/main.tf
# Modify build_spec block

terraform plan
terraform apply
```

Changes apply immediately to future builds.

### Triggering Manual Build
```bash
aws amplify start-job \
  --app-id <amplify_app_id> \
  --branch-name master \
  --job-type RELEASE \
  --region us-east-1
```

### Destroying Infrastructure
```bash
cd terraform
terraform destroy
```

**WARNING**: This deletes the Amplify app and all deployments.

## Cost Considerations

### AWS Amplify Pricing (as of 2026)
- **Build minutes**: First 1,000 minutes free/month
- **Hosting**: First 15GB served free/month
- **Storage**: First 5GB free/month

### Cost Optimization
1. Delete old branches when not needed
2. Disable auto-build on non-production branches
3. Use caching to reduce build times
4. Monitor usage in AWS Console

## Security Best Practices

### 1. Sensitive Data Management
- Never commit `terraform.tfvars`
- Use environment variables for tokens
- Rotate GitHub tokens regularly
- Use AWS Secrets Manager for production

### 2. Access Control
- Use minimal IAM permissions
- Enable MFA on AWS account
- Restrict repository access
- Review GitHub webhooks

### 3. Build Security
- Pin dependency versions in package-lock.json
- Audit dependencies regularly: `npm audit`
- Use Dependabot for updates
- Review Amplify build logs

## Monitoring and Maintenance

### Regular Checks
1. **Weekly**: Review build status and errors
2. **Monthly**: Check AWS costs and usage
3. **Quarterly**: Update dependencies and Terraform
4. **Annually**: Rotate access tokens

### Useful Commands
```bash
# List all apps
aws amplify list-apps --region us-east-1

# Get app details
aws amplify get-app --app-id <app_id> --region us-east-1

# List all jobs
aws amplify list-jobs \
  --app-id <app_id> \
  --branch-name master \
  --region us-east-1

# View Amplify Console
# https://console.aws.amazon.com/amplify/home?region=us-east-1
```

## Success Criteria

After completing this setup, you should have:
- ✅ GitHub repository with code
- ✅ Terraform infrastructure code
- ✅ AWS Amplify app deployed
- ✅ Live URL accessible
- ✅ Automatic deployments on git push
- ✅ Build logs accessible
- ✅ SPA routing working
- ✅ No build errors

## Reference Links

### Documentation
- [AWS Amplify Docs](https://docs.aws.amazon.com/amplify/)
- [Terraform AWS Provider](https://registry.terraform.io/providers/hashicorp/aws/latest/docs)
- [Vite Documentation](https://vitejs.dev/)
- [GitHub CLI Docs](https://cli.github.com/manual/)

### Terraform Resources
- [aws_amplify_app](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/amplify_app)
- [aws_amplify_branch](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/amplify_branch)

## Final Deployment Summary

**Project**: website-home-page-content-lab
**Amplify App ID**: d1fp0qgpo4nzyp
**Live URL**: https://master.d1fp0qgpo4nzyp.amplifyapp.com
**Repository**: https://github.com/roosterslab/website-home-page-content-lab
**Region**: us-east-1
**Build Time**: ~94 seconds
**Status**: ✅ Production Ready

---

**Created**: 2026-02-10
**Last Updated**: 2026-02-10
**Agent**: Claude Sonnet 4.5
**Version**: 1.0
