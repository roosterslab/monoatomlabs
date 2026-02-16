# Git Operating Instructions - Monoatom Labs Development Root

## Repository Structure

This is a **mono repository** with multiple projects managed as git submodules, including **nested submodules** (second-order).

```
monoatomlabs_dev_root/
├── .git/                    # Main repository
├── .gitmodules              # Submodule configuration (Level 1)
├── visiting-card-dev/       # Submodule: visiting card project (Level 1)
│   ├── .gitmodules          # Nested submodule configuration (Level 2)
│   └── maker/               # Nested Submodule: maker app (Level 2)
└── website/                 # Submodule: main website project (Level 1)
```

### Main Repository
- **Repository**: `https://github.com/roosterslab/monoatomlabs.git`
- **Branch**: `monoatomlabs_dev_root`
- **Purpose**: Container for all submodules

---

## Submodules Configuration

### 1. visiting-card-dev (Level 1)
```ini
[submodule "visiting-card-dev"]
    path = visiting-card-dev
    url = https://github.com/roosterslab/monoatomlabs.git
    branch = visiting-card-dev-main
```

#### Nested Submodule: maker (Level 2)
The `visiting-card-dev` submodule contains its own nested submodule:

**Location**: `visiting-card-dev/maker/`

```ini
[submodule "maker"]
    path = maker
    url = https://github.com/roosterslab/monoatomlabs.git
    branch = maker-app
```

This is a **second-order nested submodule** - a submodule within a submodule. When working with visiting-card-dev, use `--recursive` flag to ensure nested submodules are also initialized and updated.

### 2. website (Level 1)
```ini
[submodule "website"]
    path = website
    url = https://github.com/roosterslab/monoatomlabs.git
    branch = website-main
```

---

## Website Submodule Details

### Remote Configuration
The website submodule has **two remotes**:

1. **origin** (mono repo)
   - URL: `https://github.com/roosterslab/monoatomlabs.git`
   - Branch: `website-main`
   - Purpose: Primary version control within mono repo structure

2. **publish** (standalone repo)
   - URL: `https://github.com/vrocky/monoatoms-websites.git`
   - Branch: `main` (maps from `website-main`)
   - Purpose: Standalone deployment repository
   - **Authentication**: Requires vrocky account credentials

### Branch Structure
- **website-main**: Primary development branch in mono repo
- **main**: Target branch in publish repository

---

## Common Operations

### Initial Setup / Clone Repository

```bash
# Clone main repository
git clone https://github.com/roosterslab/monoatomlabs.git
cd monoatomlabs
git checkout monoatomlabs_dev_root

# Initialize and update all submodules
git submodule init
git submodule update --remote --recursive
```

### Working with Website Submodule

#### Navigate to Website
```bash
cd /c/Users/globql-ws/Documents/projects-2/monoatomlabs/monoatomlabs_dev_root/website
```

#### Check Status
```bash
git status
git remote -v
git branch -vv
```

#### Commit Changes in Website
```bash
# Inside website directory
git add .
git commit -m "Your commit message

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

#### Push to Mono Repo (origin)
```bash
# Push to origin (mono repo)
git push origin website-main

# Update parent repository to point to new commit
cd ..
git add website
git commit -m "Update website submodule to latest commit"
git push origin monoatomlabs_dev_root
```

#### Push to Publish Repository
```bash
# Push to standalone repository (requires vrocky credentials)
git push publish website-main:main
```

---

## Authentication Setup

### For roosterslab Account
Already configured via Git Credential Manager.

### For vrocky Account (Publish Repository)

**Option 1: Personal Access Token**
```bash
cd website

# Create token at: https://github.com/settings/tokens/new
# Scopes needed: repo

# Store credentials
git credential approve << EOF
protocol=https
host=github.com
username=vrocky
password=YOUR_TOKEN_HERE
EOF
```

**Option 2: SSH Authentication**
```bash
# Change publish remote to SSH
git remote set-url publish git@github.com:vrocky/monoatoms-websites.git

# Ensure SSH keys are set up for vrocky account
```

---

## Submodule Maintenance

### Update Submodule to Latest Remote Changes
```bash
# From parent directory
git submodule update --remote website

# Or from within submodule
cd website
git pull origin website-main
```

### Add New Submodule
```bash
# From parent directory
git submodule add -b BRANCH_NAME REPO_URL PATH

# Example:
git submodule add -b new-project-main https://github.com/roosterslab/monoatomlabs.git new-project
```

### Remove Submodule
```bash
# From parent directory
git submodule deinit -f PATH
git rm -f PATH
rm -rf .git/modules/PATH
```

---

## Commit Message Format

Standard format for commits:
```
Brief description of changes

Detailed explanation of what changed and why.
- Bullet points for specific changes
- Keep it clear and concise

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>
```

---

## Troubleshooting

### Submodule Not Updating
```bash
# Force update
git submodule update --init --recursive --force
```

### Detached HEAD in Submodule
```bash
cd website
git checkout website-main
git pull origin website-main
```

### Authentication Failures

**401 Unauthorized**
- Check credentials are stored for correct account
- Verify token/password hasn't expired
- Test with: `echo "url=https://github.com/vrocky/monoatoms-websites.git" | git credential fill`

**Repository Not Found**
- Verify repository exists
- Check you have access permissions
- Confirm URL is correct

### Parent Repo Shows "modified content" for Submodule
```bash
# This means submodule has new commits
cd website
git status  # Check if changes need committing

# If clean, update parent to point to current commit
cd ..
git add website
git commit -m "Update website submodule reference"
```

---

## Quick Reference Commands

### Status Check (All Levels)
```bash
# Parent repo status
git status

# All submodules status
git submodule status

# Detailed submodule status
git submodule foreach 'git status'
```

### Push Everything
```bash
# Push submodule first
cd website
git push origin website-main

# Update and push parent
cd ..
git add website
git commit -m "Update website submodule"
git push origin monoatomlabs_dev_root
```

### Pull Everything
```bash
# Pull parent
git pull origin monoatomlabs_dev_root

# Update all submodules
git submodule update --remote --recursive
```

---

## Important Notes

1. **Always commit submodule changes first** before updating parent repository
2. **Parent repo tracks specific commits** of submodules, not branches
3. **Two-step push required**: Push submodule, then update parent reference
4. **Publish remote requires vrocky authentication** - separate from roosterslab
5. **Submodules are independent repos** - each has its own branches and commits

---

## File Locations

- **Main Repository**: `C:\Users\globql-ws\Documents\projects-2\monoatomlabs\monoatomlabs_dev_root`
- **Visiting Card Submodule**: `C:\Users\globql-ws\Documents\projects-2\monoatomlabs\monoatomlabs_dev_root\visiting-card-dev`
  - **Nested Maker Submodule**: `C:\Users\globql-ws\Documents\projects-2\monoatomlabs\monoatomlabs_dev_root\visiting-card-dev\maker`
- **Website Submodule**: `C:\Users\globql-ws\Documents\projects-2\monoatomlabs\monoatomlabs_dev_root\website`
- **Git Config**: `.git/config` (in each repository)
- **Submodule Config**: `.gitmodules` (in parent and visiting-card-dev repositories)

---

## Contact & Support

- Repository Owner: roosterslab
- Publish Repository: vrocky
- GitHub Issues: https://github.com/roosterslab/monoatomlabs/issues

---

*Last Updated: 2026-02-16*
*Generated by: Claude Sonnet 4.5*
