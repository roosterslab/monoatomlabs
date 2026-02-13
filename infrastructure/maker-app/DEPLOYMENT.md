# Deployment Guide - Visiting Card Maker

## Branch Strategy

This project uses a multi-branch deployment strategy:

### Branches

1. **maker-app** (Development)
   - Auto-deploys on push
   - Used for testing and development
   - Preview URL: `https://maker-app.[amplify-domain]`

2. **visiting-card-maker-live** (Production)
   - Protected branch
   - Requires approval for deployment
   - Production URL: `https://visiting-card-maker-live.[amplify-domain]`
   - Custom domain: `https://app.yourdomain.com` (if configured)

## Deployment Process

### Development Deployment

Automatic on push to `maker-app`:

```bash
git checkout maker-app
git add .
git commit -m "Your changes"
git push origin maker-app
```

The GitHub Actions workflow will automatically:
1. Run CI checks
2. Build the application
3. Deploy to AWS Amplify (development)

### Production Deployment

#### Option 1: Merge from Development

```bash
# 1. Ensure development branch is working
git checkout maker-app
git pull origin maker-app

# 2. Switch to production branch
git checkout visiting-card-maker-live
git pull origin visiting-card-maker-live

# 3. Merge from development
git merge maker-app

# 4. Push to trigger deployment
git push origin visiting-card-maker-live
```

#### Option 2: Manual Trigger via GitHub Actions

1. Go to: https://github.com/roosterslab/monoatomlabs/actions
2. Select "Maker App - Deploy to Production"
3. Click "Run workflow"
4. Enter "DEPLOY" to confirm
5. Click "Run workflow"

## Infrastructure Setup

### Initial Setup

```bash
cd infrastructure/maker-app
./setup.sh  # Unix/Mac
# or
.\setup.ps1  # Windows
```

The setup script will:
- Create Amplify app
- Configure both branches (dev and prod)
- Set up webhooks
- Configure GitHub secrets

### Environment Configuration

The Terraform configuration supports multiple branches:

```hcl
# terraform.tfvars
create_develop_branch = false
create_production_branch = true
production_branch_name = "visiting-card-maker-live"
production_domain_prefix = "app"
```

### Required GitHub Secrets

```
AWS_ACCESS_KEY_ID                 # AWS credentials
AWS_SECRET_ACCESS_KEY             # AWS credentials
AWS_REGION                        # e.g., us-east-1
AMPLIFY_WEBHOOK_URL               # Development webhook
AMPLIFY_PRODUCTION_WEBHOOK_URL    # Production webhook
AMPLIFY_DEFAULT_DOMAIN            # From Terraform output
```

## Monitoring Deployments

### Via GitHub Actions

- Go to: https://github.com/roosterslab/monoatomlabs/actions
- View workflow runs
- Check logs for any issues

### Via AWS Amplify Console

```bash
# Get console URL
cd infrastructure/maker-app
terraform output amplify_console_url
```

Or visit: https://console.aws.amazon.com/amplify/

## Branch URLs

After deployment, your applications will be available at:

### Development
```bash
terraform output main_branch_url
```

### Production
```bash
terraform output production_branch_url
```

### Custom Domain
```bash
terraform output application_url
```

## Rollback Procedure

If production deployment fails or has issues:

### Option 1: Revert Commit

```bash
git checkout visiting-card-maker-live
git revert HEAD
git push origin visiting-card-maker-live
```

### Option 2: Amplify Console Rollback

1. Go to AWS Amplify Console
2. Select the application
3. Click on "visiting-card-maker-live" branch
4. Find the previous successful build
5. Click "Redeploy this version"

### Option 3: Reset to Previous Version

```bash
git checkout visiting-card-maker-live
git reset --hard <previous-commit-sha>
git push origin visiting-card-maker-live --force
```

⚠️ **Warning**: Force push should be used carefully

## Troubleshooting

### Deployment Failed

1. Check GitHub Actions logs
2. Check AWS Amplify build logs
3. Verify environment variables
4. Check build configuration in `amplify.yml`

### Application Not Loading

1. Check CloudFront distribution status
2. Verify DNS records (if using custom domain)
3. Check browser console for errors
4. Verify build artifacts were uploaded

### Branch Not Deploying

1. Verify webhook is configured
2. Check Amplify app settings
3. Ensure branch is connected in Amplify
4. Verify GitHub token has correct permissions

## Best Practices

1. **Always test in development** before deploying to production
2. **Use pull requests** for code review
3. **Tag releases** for production deployments:
   ```bash
   git tag -a v1.0.0 -m "Release version 1.0.0"
   git push origin v1.0.0
   ```
4. **Monitor metrics** after deployment
5. **Keep dependencies updated** regularly
6. **Document changes** in commit messages

## Terraform Commands

### View Current Infrastructure

```bash
cd infrastructure/maker-app
terraform show
```

### Update Infrastructure

```bash
terraform plan
terraform apply
```

### Add New Branch

```bash
# Update terraform.tfvars
terraform apply
```

### Destroy Infrastructure

```bash
terraform destroy
```

⚠️ **Warning**: This will delete all resources

## Support

For deployment issues:
- Check AWS Amplify documentation
- Review GitHub Actions documentation
- Contact: support@monoatomlabs.com
