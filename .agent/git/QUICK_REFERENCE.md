# Git Quick Reference - Monoatom Labs

## Daily Workflow

### Working on Website

```bash
# Navigate to website
cd /c/Users/globql-ws/Documents/projects-2/monoatomlabs/monoatomlabs_dev_root/website

# Check status
git status

# Make changes, then commit
git add .
git commit -m "Your changes"

# Push to mono repo
git push origin website-main

# Push to publish repo (optional)
git push publish website-main:main

# Update parent repository
cd ..
git add website
git commit -m "Update website submodule"
git push origin monoatomlabs_dev_root
```

---

## Remote URLs

### Website Submodule
- **origin**: `https://github.com/roosterslab/monoatomlabs.git` (branch: website-main)
- **publish**: `https://github.com/vrocky/monoatoms-websites.git` (branch: main)

### Parent Repository
- **origin**: `https://github.com/roosterslab/monoatomlabs.git` (branch: monoatomlabs_dev_root)

---

## Common Commands

```bash
# View all remotes
git remote -v

# View current branch
git branch -vv

# View submodule status
git submodule status

# Update submodules
git submodule update --remote

# View commit history
git log --oneline -10

# View changes
git diff
```

---

## Troubleshooting

```bash
# Check credentials
git config --get credential.helper

# Test credentials for vrocky repo
echo "url=https://github.com/vrocky/monoatoms-websites.git" | git credential fill

# Reset submodule
git submodule update --init --force website
```

---

## Authentication

### Current Setup
- **roosterslab**: Authenticated via Git Credential Manager
- **vrocky**: Needs manual token setup for publish remote

### Setup vrocky Token
```bash
# 1. Create token at https://github.com/settings/tokens/new
# 2. Store it:
cd website
git credential approve << EOF
protocol=https
host=github.com
username=vrocky
password=YOUR_TOKEN
EOF
```

---

*Quick reference for common git operations*
