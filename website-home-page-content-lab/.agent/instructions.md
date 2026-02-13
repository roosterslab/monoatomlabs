# Agent Instructions: Monoatom Labs Homepage Content Lab

## Project Overview

**Project Name**: Website Home Page Content Lab
**Purpose**: Testing environment for Monoatom Labs home page content variations
**Tech Stack**: Vite + React 19 + Tailwind CSS + Framer Motion
**Deployment**: AWS Amplify (automated via Terraform)
**Repository**: https://github.com/roosterslab/website-home-page-content-lab
**Live URL**: https://master.d1fp0qgpo4nzyp.amplifyapp.com
**AWS Account**: 617802321689
**Region**: us-east-1
**Amplify App ID**: d1fp0qgpo4nzyp

## Project Structure

```
website-home-page-content-lab/
├── src/
│   ├── components/
│   │   └── variations/          # Content variation components
│   ├── data/
│   │   ├── homePageVariations.js   # Variation metadata
│   │   └── monoatomData.js         # Company data
│   ├── pages/
│   │   ├── Catalog.jsx          # Variation catalog view
│   │   └── VariationView.jsx    # Individual variation view
│   ├── App.jsx                  # Main app component
│   └── main.jsx                 # App entry point
├── terraform/                   # Infrastructure as Code
├── .agentic-instructions-records/  # Detailed setup guides
├── Taskfile.yml                # Task automation
└── package.json                # Dependencies
```

## Quick Start Commands

```bash
# Development
task dev                        # Start dev server
task build                      # Build for production

# Deployment
task deploy -- "message"        # Full deploy (build + commit + push)
task amplify:jobs              # Check build status
task amplify:open              # Open live site

# Infrastructure
task tf:plan                   # Preview changes
task tf:apply                  # Apply changes

# Monitoring
task health                    # Check all systems
task monitor                   # Watch builds live
```

## Common Operations

### Deploy Changes
```bash
# Make your changes, then:
task deploy -- "Your commit message"

# Or step by step:
git add .
git commit -m "Your message"
task git:push
```

### Check Deployment Status
```bash
task amplify:jobs      # Recent builds
task amplify:logs      # Detailed logs
task amplify:open      # Open live URL
```

### Infrastructure Updates
```bash
# Edit terraform/main.tf or terraform/terraform.tfvars
task tf:validate       # Validate syntax
task tf:plan          # Preview changes
task tf:apply         # Apply (asks for confirmation)
```

### Troubleshooting
```bash
task health           # Check all services
task amplify:logs     # Get build logs
task setup:aws        # Verify AWS credentials
task setup:gh         # Verify GitHub auth
```

## Critical Build Configuration

**The build spec MUST include `--production=false`:**
```yaml
preBuild:
  commands:
    - npm install --production=false
```

This ensures Vite (in devDependencies) is installed. Without it, builds fail with "vite: command not found".

## Common Issues & Solutions

### "vite: command not found"
- **Fix**: Ensure `npm install --production=false` in terraform/main.tf
- **Rebuild**: `task amplify:build`

### Git push fails (403 error)
- **Fix**: `task setup:gh` then `task git:push`

### Only 12 packages installed
- **Fix**: Build spec missing `--production=false`
- **Rebuild**: `task amplify:build`

### Changes not deploying
- **Check**: `task amplify:jobs` for build status
- **Trigger**: `task amplify:build` to force rebuild

## Best Practices for AI Agents

1. **Always use Task commands** when available (not raw CLI)
2. **Check health first**: `task health` before troubleshooting
3. **Read files before editing** to understand structure
4. **Test locally**: `task dev` before deploying
5. **Monitor deployments**: `task monitor` after deploying
6. **Never auto-approve** infrastructure changes without user consent
7. **Commit frequently** with clear, descriptive messages
8. **Verify deployments** using `task amplify:open`

## Security Notes

**Never commit:**
- `terraform/terraform.tfvars`
- `terraform/.terraform/`
- `.env` files
- GitHub tokens or AWS credentials

**Always commit:**
- `terraform/*.tf` files
- `terraform/.terraform.lock.hcl`
- Source code changes

## Workflow Examples

### Adding a New Content Variation
```bash
# 1. Create component
# src/components/variations/hero/HeroNewStyle.jsx

# 2. Add to metadata
# src/data/homePageVariations.js

# 3. Test locally
task dev

# 4. Deploy
task deploy -- "Add new hero variation"
```

### Updating Infrastructure
```bash
# 1. Edit Terraform files
vim terraform/main.tf

# 2. Validate & plan
task tf:validate
task tf:plan

# 3. Apply changes
task tf:apply

# 4. Trigger rebuild
task amplify:build
```

### Emergency Rollback
```bash
# 1. Find previous commit
git log --oneline

# 2. Checkout and force push (with user approval!)
git checkout <commit-hash>
git push --force
```

## Key URLs

- **Live**: https://master.d1fp0qgpo4nzyp.amplifyapp.com
- **Repo**: https://github.com/roosterslab/website-home-page-content-lab
- **AWS Console**: https://console.aws.amazon.com/amplify/home?region=us-east-1#/d1fp0qgpo4nzyp

## For More Details

See `.agentic-instructions-records/setup-amplify-automation.md` for comprehensive setup documentation.

---

**Remember**: This is a rapid iteration environment. Prioritize speed while maintaining quality. Use Task commands for consistency.
