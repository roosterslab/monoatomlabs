# Master Plan — Monoatom Labs Monorepo Migration


**Target**: `https://github.com/rebuildworkflows/monoatomlabs.git`
**Convention**: `<dir-name>__<project-name>` for all branches
**Date**: 2026-03-04

---

## Current State

```
roosterslab/monoatomlabs.git   ← existing remote (origin)
│
├── monoatomlabs_dev_root       ← parent repo (root)
├── website-main                ← website submodule
├── visiting-card-dev-main      ← visiting card submodule (active on: dev)
├── source-contents-branch      ← content directory
├── maker-app                   ← infrastructure
├── website-backup-branch       ← website backup
└── ... (legacy branches)
```

Local directories with NO branch yet:
- `extra-websites/company-profile`
- `extra-websites/box-design`
- `extra-websites/box-design-infographics`
- `extra-websites/herosection-lab`
- `extra-websites/homepage-content-lab`
- `extra-websites/id-card`
- `extra-websites/infographics-lab`
- `extra-websites/infographics-data-lab`
- `website/staged`

---

## Target State

```
rebuildworkflows/monoatomlabs.git   ← new remote
│
├── root__monoatomlabs
├── website__main
├── website__staged
├── website__backup
├── extra-websites__visiting-card
├── extra-websites__company-profile
├── extra-websites__box-design
├── extra-websites__box-design-infographics
├── extra-websites__herosection-lab
├── extra-websites__homepage-content-lab
├── extra-websites__id-card
├── extra-websites__infographics-lab
├── extra-websites__infographics-data-lab
├── content__source
└── infrastructure__maker-app
```

---

## Phase 0 — Prerequisites

### 0.1 Create GitHub repo

1. Go to `https://github.com/new`
2. Owner: `rebuildworkflows`
3. Name: `monoatomlabs`
4. Visibility: Private (recommended) or Public
5. **Leave completely empty** — no README, no .gitignore, no license
6. Click **Create repository**

### 0.2 Verify access

```bash
git ls-remote --heads https://github.com/rebuildworkflows/monoatomlabs.git
# Expected: empty output (no branches yet) — NOT "Repository not found"
```

---

## Phase 1 — Add Remote to All Repos

```bash
# Parent repo
cd /c/Users/globql-ws/Documents/projects-2/monoatomlabs/monoatomlabs_dev_root
git remote add rebuildworkflows https://github.com/rebuildworkflows/monoatomlabs.git

# website/main submodule
cd website/main
git remote add rebuildworkflows https://github.com/rebuildworkflows/monoatomlabs.git

# extra-websites/visiting-card submodule
cd /c/Users/globql-ws/Documents/projects-2/monoatomlabs/monoatomlabs_dev_root/extra-websites/visiting-card
git remote add rebuildworkflows https://github.com/rebuildworkflows/monoatomlabs.git
```

---

## Phase 2 — Push Existing Branches (Renamed)

These already exist on `origin`. Push them to `rebuildworkflows` with new names.
No files change — just new branch names on the new remote.

```bash
ROOT=/c/Users/globql-ws/Documents/projects-2/monoatomlabs/monoatomlabs_dev_root
cd $ROOT

# Fetch all from origin first
git fetch origin
cd website/main && git fetch origin && git fetch publish
cd $ROOT/extra-websites/visiting-card && git fetch origin
cd $ROOT

# 1. root__monoatomlabs  (from: monoatomlabs_dev_root)
git push rebuildworkflows monoatomlabs_dev_root:root__monoatomlabs

# 2. website__main  (from: website-main, inside submodule)
cd website/main
git push rebuildworkflows website-main:website__main

# 3. website__backup  (from: website-backup-branch on origin)
git push rebuildworkflows origin/website-backup-branch:refs/heads/website__backup

# 4. extra-websites__visiting-card  (from: dev, inside submodule)
cd $ROOT/extra-websites/visiting-card
git push rebuildworkflows dev:extra-websites__visiting-card

# 5. content__source  (from: source-contents-branch on origin)
cd $ROOT
git push rebuildworkflows origin/source-contents-branch:refs/heads/content__source

# 6. infrastructure__maker-app  (from: maker-app on origin)
git push rebuildworkflows origin/maker-app:refs/heads/infrastructure__maker-app
```

**Result after Phase 2: 6 branches on rebuildworkflows**

---

## Phase 3 — Create Orphan Branches (New)

These directories exist locally but have no git branch.
Each gets an **orphan branch** (no commit history, clean root) containing only that directory's files.

Uses `git worktree --orphan` (git 2.52 confirmed ✓).
Worktrees are created in `_worktrees/` outside the repo, cleaned up after each push.

```bash
ROOT=/c/Users/globql-ws/Documents/projects-2/monoatomlabs/monoatomlabs_dev_root
WT=/c/Users/globql-ws/Documents/projects-2/monoatomlabs/_worktrees
REMOTE=https://github.com/rebuildworkflows/monoatomlabs.git

mkdir -p $WT
cd $ROOT
```

### 3.1 website__staged

```bash
git worktree add --orphan -b website__staged $WT/website__staged
cp -r website/staged/. $WT/website__staged/
cd $WT/website__staged
git add .
git commit -m "init: website/staged snapshot"
git push $REMOTE website__staged
cd $ROOT && git worktree remove $WT/website__staged
```

### 3.2 extra-websites__company-profile

```bash
git worktree add --orphan -b extra-websites__company-profile $WT/company-profile
cp -r extra-websites/company-profile/. $WT/company-profile/
cd $WT/company-profile
git add .
git commit -m "init: extra-websites/company-profile"
git push $REMOTE extra-websites__company-profile
cd $ROOT && git worktree remove $WT/company-profile
```

### 3.3 extra-websites__box-design

```bash
git worktree add --orphan -b extra-websites__box-design $WT/box-design
cp -r extra-websites/box-design/. $WT/box-design/
cd $WT/box-design
git add .
git commit -m "init: extra-websites/box-design"
git push $REMOTE extra-websites__box-design
cd $ROOT && git worktree remove $WT/box-design
```

### 3.4 extra-websites__box-design-infographics

```bash
git worktree add --orphan -b extra-websites__box-design-infographics $WT/box-design-infographics
cp -r extra-websites/box-design-infographics/. $WT/box-design-infographics/
cd $WT/box-design-infographics
git add .
git commit -m "init: extra-websites/box-design-infographics"
git push $REMOTE extra-websites__box-design-infographics
cd $ROOT && git worktree remove $WT/box-design-infographics
```

### 3.5 extra-websites__herosection-lab

```bash
git worktree add --orphan -b extra-websites__herosection-lab $WT/herosection-lab
cp -r extra-websites/herosection-lab/. $WT/herosection-lab/
cd $WT/herosection-lab
git add .
git commit -m "init: extra-websites/herosection-lab"
git push $REMOTE extra-websites__herosection-lab
cd $ROOT && git worktree remove $WT/herosection-lab
```

### 3.6 extra-websites__homepage-content-lab

```bash
git worktree add --orphan -b extra-websites__homepage-content-lab $WT/homepage-content-lab
cp -r extra-websites/homepage-content-lab/. $WT/homepage-content-lab/
cd $WT/homepage-content-lab
git add .
git commit -m "init: extra-websites/homepage-content-lab"
git push $REMOTE extra-websites__homepage-content-lab
cd $ROOT && git worktree remove $WT/homepage-content-lab
```

### 3.7 extra-websites__id-card

```bash
git worktree add --orphan -b extra-websites__id-card $WT/id-card
cp -r extra-websites/id-card/. $WT/id-card/
cd $WT/id-card
git add .
git commit -m "init: extra-websites/id-card"
git push $REMOTE extra-websites__id-card
cd $ROOT && git worktree remove $WT/id-card
```

### 3.8 extra-websites__infographics-lab

```bash
git worktree add --orphan -b extra-websites__infographics-lab $WT/infographics-lab
cp -r extra-websites/infographics-lab/. $WT/infographics-lab/
cd $WT/infographics-lab
git add .
git commit -m "init: extra-websites/infographics-lab"
git push $REMOTE extra-websites__infographics-lab
cd $ROOT && git worktree remove $WT/infographics-lab
```

### 3.9 extra-websites__infographics-data-lab

```bash
git worktree add --orphan -b extra-websites__infographics-data-lab $WT/infographics-data-lab
cp -r extra-websites/infographics-data-lab/. $WT/infographics-data-lab/
cd $WT/infographics-data-lab
git add .
git commit -m "init: extra-websites/infographics-data-lab"
git push $REMOTE extra-websites__infographics-data-lab
cd $ROOT && git worktree remove $WT/infographics-data-lab
```

**Result after Phase 3: 15 branches on rebuildworkflows**

---

## Phase 4 — Update .gitmodules

Replace the current `.gitmodules` in the parent repo:

```ini
[submodule "website/main"]
    path   = website/main
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = website__main

[submodule "website/staged"]
    path   = website/staged
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = website__staged

[submodule "website/backup"]
    path   = website/backup
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = website__backup

[submodule "extra-websites/visiting-card"]
    path   = extra-websites/visiting-card
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = extra-websites__visiting-card

[submodule "extra-websites/company-profile"]
    path   = extra-websites/company-profile
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = extra-websites__company-profile

[submodule "extra-websites/box-design"]
    path   = extra-websites/box-design
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = extra-websites__box-design

[submodule "extra-websites/box-design-infographics"]
    path   = extra-websites/box-design-infographics
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = extra-websites__box-design-infographics

[submodule "extra-websites/herosection-lab"]
    path   = extra-websites/herosection-lab
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = extra-websites__herosection-lab

[submodule "extra-websites/homepage-content-lab"]
    path   = extra-websites/homepage-content-lab
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = extra-websites__homepage-content-lab

[submodule "extra-websites/id-card"]
    path   = extra-websites/id-card
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = extra-websites__id-card

[submodule "extra-websites/infographics-lab"]
    path   = extra-websites/infographics-lab
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = extra-websites__infographics-lab

[submodule "extra-websites/infographics-data-lab"]
    path   = extra-websites/infographics-data-lab
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = extra-websites__infographics-data-lab

[submodule "content"]
    path   = content
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = content__source

[submodule "infrastructure/maker-app"]
    path   = infrastructure/maker-app
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = infrastructure__maker-app
```

Commit and push:

```bash
cd $ROOT
git add .gitmodules
git commit -m "chore: migrate all submodules to rebuildworkflows with new branch names"
git push rebuildworkflows monoatomlabs_dev_root:root__monoatomlabs
git push origin monoatomlabs_dev_root   # also keep origin in sync
```

---

## Phase 5 — Verify

```bash
# List all 15 branches on new remote
git ls-remote --heads https://github.com/rebuildworkflows/monoatomlabs.git

# Expected output:
# refs/heads/root__monoatomlabs
# refs/heads/website__main
# refs/heads/website__staged
# refs/heads/website__backup
# refs/heads/extra-websites__visiting-card
# refs/heads/extra-websites__company-profile
# refs/heads/extra-websites__box-design
# refs/heads/extra-websites__box-design-infographics
# refs/heads/extra-websites__herosection-lab
# refs/heads/extra-websites__homepage-content-lab
# refs/heads/extra-websites__id-card
# refs/heads/extra-websites__infographics-lab
# refs/heads/extra-websites__infographics-data-lab
# refs/heads/content__source
# refs/heads/infrastructure__maker-app

# Test full clone
git clone --recurse-submodules \
  -b root__monoatomlabs \
  https://github.com/rebuildworkflows/monoatomlabs.git \
  monoatomlabs-test-clone
```

---

## Summary

| Phase | Action | Branches |
|-------|--------|----------|
| 0 | Create GitHub repo | — |
| 1 | Add `rebuildworkflows` remote to 3 repos | — |
| 2 | Push 6 existing branches with new names | 6 |
| 3 | Create 9 orphan branches from local dirs | +9 = 15 |
| 4 | Update `.gitmodules`, commit, push | — |
| 5 | Verify all 15 branches + test clone | — |

**origin (`roosterslab`) is never modified — full rollback available at any point.**

---

## Notes on node_modules

The orphan branch copies will include `node_modules/` from local dirs unless excluded.
Each project should have a `.gitignore` with `node_modules/`.
Before Phase 3, verify:

```bash
for d in extra-websites/company-profile extra-websites/box-design-infographics \
          extra-websites/homepage-content-lab extra-websites/infographics-lab \
          extra-websites/infographics-data-lab; do
  echo "$d: $(test -f $d/.gitignore && echo has .gitignore || echo NO .gitignore)"
done
```

If any are missing a `.gitignore`, add one before running Phase 3.

---

*Created: 2026-03-04*
*Status: PENDING — Phase 0 (create GitHub repo) required before execution*
