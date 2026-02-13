# Quick Start Guide

## Automated Setup (Recommended)

### For Unix/Linux/Mac:
```bash
cd infrastructure/maker-app
./setup.sh
```

### For Windows (PowerShell):
```powershell
cd infrastructure/maker-app
.\setup.ps1
```

## What the Setup Script Does

1. **Checks prerequisites**: Verifies `gh`, `aws`, `terraform` are installed
2. **Gets AWS info**: Retrieves account ID, region, and verifies permissions
3. **Gets GitHub info**: Retrieves repository details and authentication
4. **Creates terraform.tfvars**: Generates configuration from CLI data
5. **Sets GitHub secrets**: Configures AWS credentials in repository
6. **Runs Terraform**: Initializes, plans, and applies infrastructure
7. **Configures webhooks**: Sets up Amplify deployment webhook

## Manual Setup

If you prefer manual setup:

### 1. Install Prerequisites
```bash
# GitHub CLI
brew install gh  # or scoop install gh on Windows

# AWS CLI
brew install awscli  # or follow AWS docs

# Terraform
brew install terraform  # or follow HashiCorp docs
```

### 2. Authenticate

**GitHub:**
```bash
gh auth login
```

**AWS:**
```bash
aws configure
```

### 3. Run Setup Script
```bash
cd infrastructure/maker-app
./setup.sh  # Unix/Mac
# OR
.\setup.ps1  # Windows
```

## What You Need

- **AWS Account** with Amplify permissions
- **GitHub Repository** access
- **GitHub Personal Access Token** (created automatically by script)

## After Setup

1. **Push to trigger deployment:**
```bash
git push origin maker-app
```

2. **Monitor deployment:**
- Check GitHub Actions tab
- Check AWS Amplify Console

3. **Access your app:**
- URL will be provided in setup output
- Or check: `terraform output application_url`

## Troubleshooting

### "gh: command not found"
Install GitHub CLI: https://cli.github.com/

### "aws: command not found"
Install AWS CLI: https://aws.amazon.com/cli/

### "terraform: command not found"
Install Terraform: https://www.terraform.io/downloads

### Permission errors
Ensure your AWS user has Amplify permissions:
```json
{
  "Version": "2012-10-17",
  "Statement": [{
    "Effect": "Allow",
    "Action": "amplify:*",
    "Resource": "*"
  }]
}
```

## Support

For issues:
- Check the full README.md
- Review AWS Amplify logs
- Check GitHub Actions logs
