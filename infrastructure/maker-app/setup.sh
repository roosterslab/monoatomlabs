#!/bin/bash
set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${GREEN}=== Visiting Card Maker - Automated Setup ===${NC}"
echo ""

# Check if required CLIs are installed
check_cli() {
    if ! command -v $1 &> /dev/null; then
        echo -e "${RED}Error: $1 is not installed${NC}"
        echo "Please install $1 and try again"
        exit 1
    fi
    echo -e "${GREEN}✓${NC} $1 is installed"
}

echo "Checking required tools..."
check_cli "gh"
check_cli "aws"
check_cli "terraform"
check_cli "jq"

echo ""
echo -e "${GREEN}=== Step 1: AWS Configuration ===${NC}"

# Get AWS account information
AWS_ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text)
AWS_REGION=$(aws configure get region || echo "us-east-1")
AWS_USER_ARN=$(aws sts get-caller-identity --query Arn --output text)

echo "AWS Account ID: $AWS_ACCOUNT_ID"
echo "AWS Region: $AWS_REGION"
echo "AWS User: $AWS_USER_ARN"

# Verify AWS permissions
echo ""
echo "Verifying AWS permissions..."
if aws amplify list-apps --region $AWS_REGION &> /dev/null; then
    echo -e "${GREEN}✓${NC} AWS Amplify access confirmed"
else
    echo -e "${YELLOW}⚠${NC} Warning: Cannot access AWS Amplify. You may need additional permissions."
fi

echo ""
echo -e "${GREEN}=== Step 2: GitHub Configuration ===${NC}"

# Check GitHub authentication
if ! gh auth status &> /dev/null; then
    echo "GitHub CLI not authenticated. Please login..."
    gh auth login
fi

# Get repository information
REPO_OWNER=$(gh repo view --json owner --jq '.owner.login')
REPO_NAME=$(gh repo view --json name --jq '.name')
REPO_URL="https://github.com/$REPO_OWNER/$REPO_NAME"

echo "Repository: $REPO_URL"
echo "Owner: $REPO_OWNER"
echo "Name: $REPO_NAME"

# Check current branch
CURRENT_BRANCH=$(git branch --show-current)
echo "Current Branch: $CURRENT_BRANCH"

echo ""
echo -e "${GREEN}=== Step 3: Creating GitHub Token for Amplify ===${NC}"

# Create a token for Amplify with repo scope
echo "Creating GitHub token with repo scope..."
GH_TOKEN=$(gh auth token)
echo -e "${GREEN}✓${NC} Using existing GitHub token"

# Store token in AWS Secrets Manager (optional but recommended)
echo ""
read -p "Store GitHub token in AWS Secrets Manager? (y/n): " STORE_TOKEN
if [ "$STORE_TOKEN" = "y" ]; then
    SECRET_NAME="github-token-amplify-$REPO_NAME"

    if aws secretsmanager describe-secret --secret-id $SECRET_NAME --region $AWS_REGION &> /dev/null; then
        echo "Updating existing secret..."
        aws secretsmanager update-secret \
            --secret-id $SECRET_NAME \
            --secret-string $GH_TOKEN \
            --region $AWS_REGION
    else
        echo "Creating new secret..."
        aws secretsmanager create-secret \
            --name $SECRET_NAME \
            --description "GitHub token for Amplify access to $REPO_NAME" \
            --secret-string $GH_TOKEN \
            --region $AWS_REGION
    fi

    SECRET_ARN=$(aws secretsmanager describe-secret --secret-id $SECRET_NAME --region $AWS_REGION --query ARN --output text)
    echo -e "${GREEN}✓${NC} Token stored in Secrets Manager: $SECRET_ARN"
    USE_SECRETS_MANAGER="true"
else
    USE_SECRETS_MANAGER="false"
fi

echo ""
echo -e "${GREEN}=== Step 4: Generating terraform.tfvars ===${NC}"

# Determine environment
read -p "Environment (dev/staging/prod) [dev]: " ENVIRONMENT
ENVIRONMENT=${ENVIRONMENT:-dev}

# Determine project name
read -p "Project name [monoatom-maker]: " PROJECT_NAME
PROJECT_NAME=${PROJECT_NAME:-monoatom-maker}

# Ask about custom domain
read -p "Do you have a custom domain? (y/n): " HAS_DOMAIN
if [ "$HAS_DOMAIN" = "y" ]; then
    read -p "Domain name (e.g., maker.monoatomlabs.com): " DOMAIN_NAME
    read -p "Domain prefix (leave empty for root): " DOMAIN_PREFIX
else
    DOMAIN_NAME=""
    DOMAIN_PREFIX=""
fi

# Generate terraform.tfvars
cat > terraform.tfvars <<EOF
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

EOF

# Add domain configuration if provided
if [ ! -z "$DOMAIN_NAME" ]; then
    cat >> terraform.tfvars <<EOF
# Domain Configuration
domain_name   = "$DOMAIN_NAME"
domain_prefix = "$DOMAIN_PREFIX"

EOF
fi

# Add environment variables section
cat >> terraform.tfvars <<EOF
# Environment Variables for Build
environment_variables = {
  VITE_APP_NAME = "Visiting Card Maker"
  NODE_ENV      = "production"
}
EOF

echo -e "${GREEN}✓${NC} terraform.tfvars generated"

echo ""
echo -e "${GREEN}=== Step 5: Setting GitHub Secrets ===${NC}"

# Get AWS credentials
AWS_ACCESS_KEY_ID=$(aws configure get aws_access_key_id)
AWS_SECRET_ACCESS_KEY=$(aws configure get aws_secret_access_key)

# Set GitHub secrets
echo "Setting GitHub repository secrets..."

gh secret set AWS_ACCESS_KEY_ID --body "$AWS_ACCESS_KEY_ID"
gh secret set AWS_SECRET_ACCESS_KEY --body "$AWS_SECRET_ACCESS_KEY"
gh secret set AWS_REGION --body "$AWS_REGION"

echo -e "${GREEN}✓${NC} GitHub secrets configured"

echo ""
echo -e "${GREEN}=== Step 6: Initializing Terraform ===${NC}"

terraform init

echo ""
echo -e "${GREEN}=== Step 7: Planning Infrastructure ===${NC}"

terraform plan -out=tfplan

echo ""
echo -e "${YELLOW}=== Review the plan above ===${NC}"
read -p "Apply this Terraform plan? (y/n): " APPLY_PLAN

if [ "$APPLY_PLAN" = "y" ]; then
    echo ""
    echo -e "${GREEN}=== Step 8: Applying Infrastructure ===${NC}"

    terraform apply tfplan

    echo ""
    echo -e "${GREEN}=== Step 9: Retrieving Outputs ===${NC}"

    # Get outputs
    AMPLIFY_APP_ID=$(terraform output -raw amplify_app_id)
    WEBHOOK_URL=$(terraform output -raw webhook_url)
    APP_URL=$(terraform output -raw application_url)

    # Set webhook as GitHub secret
    echo "Setting Amplify webhook URL as GitHub secret..."
    gh secret set AMPLIFY_WEBHOOK_URL --body "$WEBHOOK_URL"

    echo ""
    echo -e "${GREEN}=== ✓ Setup Complete! ===${NC}"
    echo ""
    echo "Application Details:"
    echo "  - Amplify App ID: $AMPLIFY_APP_ID"
    echo "  - Application URL: $APP_URL"
    echo "  - Console: https://console.aws.amazon.com/amplify/home?region=$AWS_REGION#/$AMPLIFY_APP_ID"
    echo ""
    echo "Next steps:"
    echo "  1. Push to maker-app branch to trigger deployment"
    echo "  2. Monitor deployment in AWS Amplify Console"
    echo "  3. Access your app at: $APP_URL"

else
    echo ""
    echo -e "${YELLOW}Setup paused. To apply later, run:${NC}"
    echo "  terraform apply tfplan"
fi

echo ""
echo -e "${GREEN}Setup script completed!${NC}"
