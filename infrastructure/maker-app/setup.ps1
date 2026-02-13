# PowerShell Setup Script for Windows
$ErrorActionPreference = "Stop"

Write-Host "=== Visiting Card Maker - Automated Setup ===" -ForegroundColor Green
Write-Host ""

# Function to check if command exists
function Test-Command {
    param($Command)
    $exists = $null -ne (Get-Command $Command -ErrorAction SilentlyContinue)
    if ($exists) {
        Write-Host "✓ $Command is installed" -ForegroundColor Green
    } else {
        Write-Host "✗ $Command is not installed" -ForegroundColor Red
        Write-Host "Please install $Command and try again"
        exit 1
    }
    return $exists
}

Write-Host "Checking required tools..."
Test-Command "gh"
Test-Command "aws"
Test-Command "terraform"

Write-Host ""
Write-Host "=== Step 1: AWS Configuration ===" -ForegroundColor Green

# Get AWS account information
$AWS_ACCOUNT_ID = (aws sts get-caller-identity --query Account --output text)
$AWS_REGION = (aws configure get region)
if ([string]::IsNullOrEmpty($AWS_REGION)) { $AWS_REGION = "us-east-1" }
$AWS_USER_ARN = (aws sts get-caller-identity --query Arn --output text)

Write-Host "AWS Account ID: $AWS_ACCOUNT_ID"
Write-Host "AWS Region: $AWS_REGION"
Write-Host "AWS User: $AWS_USER_ARN"

# Verify AWS permissions
Write-Host ""
Write-Host "Verifying AWS permissions..."
try {
    aws amplify list-apps --region $AWS_REGION 2>&1 | Out-Null
    Write-Host "✓ AWS Amplify access confirmed" -ForegroundColor Green
} catch {
    Write-Host "⚠ Warning: Cannot access AWS Amplify" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Step 2: GitHub Configuration ===" -ForegroundColor Green

# Check GitHub authentication
try {
    gh auth status 2>&1 | Out-Null
} catch {
    Write-Host "GitHub CLI not authenticated. Please login..."
    gh auth login
}

# Get repository information
$REPO_OWNER = (gh repo view --json owner --jq '.owner.login')
$REPO_NAME = (gh repo view --json name --jq '.name')
$REPO_URL = "https://github.com/$REPO_OWNER/$REPO_NAME"

Write-Host "Repository: $REPO_URL"
Write-Host "Owner: $REPO_OWNER"
Write-Host "Name: $REPO_NAME"

# Check current branch
$CURRENT_BRANCH = (git branch --show-current)
Write-Host "Current Branch: $CURRENT_BRANCH"

Write-Host ""
Write-Host "=== Step 3: Getting GitHub Token ===" -ForegroundColor Green

$GH_TOKEN = (gh auth token)
Write-Host "✓ Using existing GitHub token" -ForegroundColor Green

Write-Host ""
Write-Host "=== Step 4: Generating terraform.tfvars ===" -ForegroundColor Green

# Get user input
$ENVIRONMENT = Read-Host "Environment (dev/staging/prod) [dev]"
if ([string]::IsNullOrEmpty($ENVIRONMENT)) { $ENVIRONMENT = "dev" }

$PROJECT_NAME = Read-Host "Project name [monoatom-maker]"
if ([string]::IsNullOrEmpty($PROJECT_NAME)) { $PROJECT_NAME = "monoatom-maker" }

$HAS_DOMAIN = Read-Host "Do you have a custom domain? (y/n)"
if ($HAS_DOMAIN -eq "y") {
    $DOMAIN_NAME = Read-Host "Domain name (e.g., maker.monoatomlabs.com)"
    $DOMAIN_PREFIX = Read-Host "Domain prefix (leave empty for root)"
} else {
    $DOMAIN_NAME = ""
    $DOMAIN_PREFIX = ""
}

# Generate terraform.tfvars
$tfvarsContent = @"
# AWS Configuration
aws_region  = "$AWS_REGION"
environment = "$ENVIRONMENT"

# Project Configuration
project_name = "$PROJECT_NAME"

# GitHub Configuration
github_repository    = "$REPO_URL"
github_access_token  = "$GH_TOKEN"
main_branch_name     = "maker-app"

# Branch Configuration
create_develop_branch          = false
enable_auto_branch_creation    = true
enable_branch_auto_build       = true
enable_branch_auto_deletion    = true
enable_pull_request_preview    = true
auto_branch_creation_patterns  = ["feature/*", "bugfix/*", "hotfix/*"]

"@

if (![string]::IsNullOrEmpty($DOMAIN_NAME)) {
    $tfvarsContent += @"
# Domain Configuration
domain_name   = "$DOMAIN_NAME"
domain_prefix = "$DOMAIN_PREFIX"

"@
}

$tfvarsContent += @"
# Environment Variables for Build
environment_variables = {
  VITE_APP_NAME = "Visiting Card Maker"
  NODE_ENV      = "production"
}
"@

$tfvarsContent | Out-File -FilePath "terraform.tfvars" -Encoding UTF8
Write-Host "✓ terraform.tfvars generated" -ForegroundColor Green

Write-Host ""
Write-Host "=== Step 5: Setting GitHub Secrets ===" -ForegroundColor Green

# Get AWS credentials
$AWS_ACCESS_KEY_ID = (aws configure get aws_access_key_id)
$AWS_SECRET_ACCESS_KEY = (aws configure get aws_secret_access_key)

# Set GitHub secrets
Write-Host "Setting GitHub repository secrets..."

echo $AWS_ACCESS_KEY_ID | gh secret set AWS_ACCESS_KEY_ID
echo $AWS_SECRET_ACCESS_KEY | gh secret set AWS_SECRET_ACCESS_KEY
echo $AWS_REGION | gh secret set AWS_REGION

Write-Host "✓ GitHub secrets configured" -ForegroundColor Green

Write-Host ""
Write-Host "=== Step 6: Initializing Terraform ===" -ForegroundColor Green

terraform init

Write-Host ""
Write-Host "=== Step 7: Planning Infrastructure ===" -ForegroundColor Green

terraform plan -out=tfplan

Write-Host ""
Write-Host "=== Review the plan above ===" -ForegroundColor Yellow
$APPLY_PLAN = Read-Host "Apply this Terraform plan? (y/n)"

if ($APPLY_PLAN -eq "y") {
    Write-Host ""
    Write-Host "=== Step 8: Applying Infrastructure ===" -ForegroundColor Green

    terraform apply tfplan

    Write-Host ""
    Write-Host "=== Step 9: Retrieving Outputs ===" -ForegroundColor Green

    # Get outputs
    $AMPLIFY_APP_ID = (terraform output -raw amplify_app_id)
    $WEBHOOK_URL = (terraform output -raw webhook_url)
    $APP_URL = (terraform output -raw application_url)

    # Set webhook as GitHub secret
    Write-Host "Setting Amplify webhook URL as GitHub secret..."
    echo $WEBHOOK_URL | gh secret set AMPLIFY_WEBHOOK_URL

    Write-Host ""
    Write-Host "=== ✓ Setup Complete! ===" -ForegroundColor Green
    Write-Host ""
    Write-Host "Application Details:"
    Write-Host "  - Amplify App ID: $AMPLIFY_APP_ID"
    Write-Host "  - Application URL: $APP_URL"
    Write-Host "  - Console: https://console.aws.amazon.com/amplify/home?region=$AWS_REGION#/$AMPLIFY_APP_ID"
    Write-Host ""
    Write-Host "Next steps:"
    Write-Host "  1. Push to maker-app branch to trigger deployment"
    Write-Host "  2. Monitor deployment in AWS Amplify Console"
    Write-Host "  3. Access your app at: $APP_URL"

} else {
    Write-Host ""
    Write-Host "Setup paused. To apply later, run:" -ForegroundColor Yellow
    Write-Host "  terraform apply tfplan"
}

Write-Host ""
Write-Host "Setup script completed!" -ForegroundColor Green
