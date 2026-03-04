# Operating Instructions — Monoatom Labs Dev Root

Complete guide for working with the monorepo.

---

## Repository Architecture

### How it works

The root repo (`monoatomlabs_dev_root`) is the **parent** that contains two git submodules. Both submodules live inside the same GitHub repository (`roosterslab/monoatomlabs.git`) but on different branches. This is a single-remote multi-branch monorepo pattern.

```
GitHub: roosterslab/monoatomlabs.git
│
├── Branch: monoatomlabs_dev_root   ← parent repo
├── Branch: website-main            ← website submodule
├── Branch: visiting-card-dev-main  ← visiting card submodule
├── Branch: visiting-card-dev-branch
├── Branch: maker-app
└── Branch: source-contents-branch
```

The parent repo **does not contain the submodule files directly** — it stores a pointer (commit hash) to each submodule's branch. When you clone the parent or run `git submodule update`, git checks out those commits into the submodule directories.

---

## Initial Setup (Clone on New Machine)

```bash
# Clone with all submodules in one step
git clone --recurse-submodules -b monoatomlabs_dev_root \
  https://github.com/roosterslab/monoatomlabs.git \
  monoatomlabs_dev_root

cd monoatomlabs_dev_root

# Verify submodules are checked out
git submodule status

# Install all npm workspace packages
npm install
```

If you already cloned without `--recurse-submodules`:
```bash
git submodule update --init --recursive
```

---

## Daily Development — Website

### 1. Start dev server
```bash
cd website/main
npm run dev        # starts on http://localhost:5173
```

### 2. Make changes, then commit inside the submodule
```bash
cd website/main
git add <files>
git commit -m "feat: description of change"
git push origin website-main
```

### 3. Update parent repo's submodule pointer
```bash
cd ../..           # back to monoatomlabs_dev_root/
git add website/main
git commit -m "chore: update website submodule pointer"
git push origin monoatomlabs_dev_root
```

### 4. (Optional) Push to publish/deploy remote
```bash
cd website/main
git push publish website-main:main
```

---

## Daily Development — Visiting Card

```bash
cd extra-websites/visiting-card
# make changes
git add <files>
git commit -m "feat: update visiting card"
git push origin visiting-card-dev-main

# back in parent
cd ../..
git add extra-websites/visiting-card
git commit -m "chore: update visiting-card submodule pointer"
git push origin monoatomlabs_dev_root
```

---

## Pulling Latest Changes

### Pull everything (parent + all submodules)
```bash
# Recommended: pull parent then update submodule pointers
git pull origin monoatomlabs_dev_root
git submodule update --init --recursive

# Alternative: also pull submodules to their latest remote commits
git pull origin monoatomlabs_dev_root
git submodule update --remote --merge
```

**Difference:**
- `--init --recursive` → checks out the commit the **parent references** (safe, reproducible)
- `--remote --merge` → pulls the **latest commit from the tracking branch** (may be ahead of parent)

---

## Submodule Branch Management

### Check which branch a submodule is on
```bash
cd website/main && git branch
cd extra-websites/visiting-card && git branch
```

### Visiting card branch issue
The visiting-card submodule is currently on `dev` instead of the configured `visiting-card-dev-main`. To align:
```bash
cd extra-websites/visiting-card
git checkout visiting-card-dev-main
git merge dev   # or cherry-pick specific commits
```

Or, if `dev` should be the canonical branch, update `.gitmodules`:
```ini
[submodule "visiting-card-dev"]
    branch = dev
```

---

## Authentication Setup

All remotes use HTTPS. Use Git Credential Manager (GCM) — it handles token storage automatically on Windows.

```bash
# Verify GCM is active
git config --global credential.helper

# Should output: manager

# Force re-authentication (if token expired)
git credential reject
# Then run any git push — it will prompt for new credentials
```

For `vrocky/monoatoms-websites.git` (publish remote), you may need a separate PAT if the account differs from `roosterslab`.

---

## Adding a New Submodule

```bash
# From root of parent repo
git submodule add -b <branch-name> \
  https://github.com/roosterslab/monoatomlabs.git \
  <local-path>

# Example: add a new extra-website
git submodule add -b new-feature-branch \
  https://github.com/roosterslab/monoatomlabs.git \
  extra-websites/new-feature

# Commit the new .gitmodules and submodule pointer
git add .gitmodules extra-websites/new-feature
git commit -m "chore: add new-feature submodule"
git push origin monoatomlabs_dev_root
```

---

## Removing a Submodule

```bash
# 1. Remove from .gitmodules
git config -f .gitmodules --remove-section submodule.<name>

# 2. Remove from .git/config
git config --remove-section submodule.<name>

# 3. Stage the .gitmodules change
git add .gitmodules

# 4. Remove the submodule directory
git rm --cached <path>
rm -rf <path>
rm -rf .git/modules/<name>

# 5. Commit
git commit -m "chore: remove <name> submodule"
```

---

## Managing website/staged/

`website/staged/` is currently untracked. It appears to be a staging copy of the website for pre-deployment testing. Options:

**Option A — Keep it untracked (current behavior)**
Add to `.gitignore` so it doesn't appear in git status:
```bash
echo "website/staged/" >> .gitignore
```

**Option B — Track it as another submodule**
If staged should pull from a staging branch:
```bash
git submodule add -b website-staging \
  https://github.com/roosterslab/monoatomlabs.git \
  website/staged
```

**Option C — Track it as regular files**
```bash
git add website/staged/
git commit -m "chore: add staged website snapshot"
```

---

## Troubleshooting

### Submodule shows modified but no changes inside
The parent pointer is out of date. The submodule has new commits that the parent doesn't reference yet.
```bash
git submodule status       # shows + prefix if ahead
git add website/main       # or extra-websites/visiting-card
git commit -m "chore: update submodule pointer"
```

### Detached HEAD in submodule
```bash
cd website/main
git checkout website-main
git pull origin website-main
```

### Push rejected
```bash
git pull --rebase origin <branch>
# resolve conflicts if any
git push origin <branch>
```

### Submodule directory is empty after clone
```bash
git submodule update --init --recursive
```

### Wrong branch in visiting-card (on `dev` instead of `visiting-card-dev-main`)
```bash
cd extra-websites/visiting-card
git checkout visiting-card-dev-main
```

---

## Security Notes

- Never commit tokens, passwords, or `.env` files
- Rotate GitHub PATs every 90 days
- Use minimum required token scopes (repo only)
- The `publish` remote (`vrocky/`) requires its own authentication

---

## npm Workspace Commands

```bash
# From root: install all packages
npm install

# Run script in a specific workspace
npm run dev --workspace=website/main

# Install a package into a specific workspace
npm install <pkg> --workspace=website/main
```

---

*Last updated: 2026-03-04*
