# Branch Rename & Monorepo Migration Plan

**Target remote**: `https://github.com/rebuildworkflows/monoatomlabs.git`
**Convention**: `<dir-name>__<project-name>`
**Status**: Waiting for target repo to be created on GitHub

---

## Pre-flight Checklist

- [x] All submodules clean and pushed (`website/main`, `extra-websites/visiting-card`)
- [x] Parent repo clean and pushed (`monoatomlabs_dev_root`)
- [ ] `rebuildworkflows/monoatomlabs` repo created on GitHub (empty, no README)

---

## Full Branch Map

| # | Source | Source Branch (origin) | New Branch Name | Action |
|---|--------|----------------------|-----------------|--------|
| 1 | root (parent repo) | `monoatomlabs_dev_root` | `root__monoatomlabs` | push with new name |
| 2 | `website/main` | `website-main` | `website__main` | push with new name |
| 3 | `website/backup` | `website-backup-branch` | `website__backup` | push with new name |
| 4 | `website/staged` | *(no branch — local dir)* | `website__staged` | create orphan from `website/staged/` |
| 5 | `extra-websites/visiting-card` | `dev` (active) | `extra-websites__visiting-card` | push with new name |
| 6 | `extra-websites/company-profile` | *(no branch — local dir)* | `extra-websites__company-profile` | create orphan from dir |
| 7 | `extra-websites/box-design` | *(no branch — local dir)* | `extra-websites__box-design` | create orphan from dir |
| 8 | `extra-websites/box-design-infographics` | *(no branch — local dir)* | `extra-websites__box-design-infographics` | create orphan from dir |
| 9 | `extra-websites/herosection-lab` | *(no branch — local dir)* | `extra-websites__herosection-lab` | create orphan from dir |
| 10 | `extra-websites/homepage-content-lab` | *(no branch — local dir)* | `extra-websites__homepage-content-lab` | create orphan from dir |
| 11 | `extra-websites/id-card` | *(no branch — local dir)* | `extra-websites__id-card` | create orphan from dir |
| 12 | `extra-websites/infographics-lab` | *(no branch — local dir)* | `extra-websites__infographics-lab` | create orphan from dir |
| 13 | `extra-websites/infographics-data-lab` | *(no branch — local dir)* | `extra-websites__infographics-data-lab` | create orphan from dir |
| 14 | `content/` | `source-contents-branch` | `content__source` | push with new name |
| 15 | `infrastructure/maker-app` | `maker-app` | `infrastructure__maker-app` | push with new name |

**Total: 15 branches** (6 renamed from existing, 9 new orphan branches)

---

## Execution Steps

### Step 1 — Add remote to parent repo

```bash
cd monoatomlabs_dev_root/
git remote add rebuildworkflows https://github.com/rebuildworkflows/monoatomlabs.git
git ls-remote --heads rebuildworkflows   # verify access
```

### Step 2 — Add remote to submodules

```bash
cd website/main
git remote add rebuildworkflows https://github.com/rebuildworkflows/monoatomlabs.git

cd ../../extra-websites/visiting-card
git remote add rebuildworkflows https://github.com/rebuildworkflows/monoatomlabs.git
```

### Step 3 — Push existing branches with new names

All pushes go to `rebuildworkflows`. Source branches are fetched from `origin` if not locally present.

```bash
# From parent repo root
cd monoatomlabs_dev_root/

# 1. root__monoatomlabs
git push rebuildworkflows monoatomlabs_dev_root:root__monoatomlabs

# 14. content__source
git fetch origin source-contents-branch
git push rebuildworkflows origin/source-contents-branch:refs/heads/content__source

# 15. infrastructure__maker-app
git fetch origin maker-app
git push rebuildworkflows origin/maker-app:refs/heads/infrastructure__maker-app

# 3. website__backup
git fetch origin website-backup-branch
git push rebuildworkflows origin/website-backup-branch:refs/heads/website__backup

# 2. website__main (from inside submodule)
cd website/main
git push rebuildworkflows website-main:website__main

# 5. extra-websites__visiting-card (from inside submodule, on dev branch)
cd ../../extra-websites/visiting-card
git push rebuildworkflows dev:extra-websites__visiting-card
```

### Step 4 — Create orphan branches for plain directories

Uses `git worktree --orphan` (requires git ≥ 2.40 — confirmed 2.52 ✓).
A temp worktree dir is created, files are copied in, committed, pushed, then cleaned up.

```bash
cd monoatomlabs_dev_root/
REMOTE=https://github.com/rebuildworkflows/monoatomlabs.git
WT_BASE=/c/Users/globql-ws/Documents/projects-2/monoatomlabs/_worktrees

mkdir -p $WT_BASE

# For each project:
# git worktree add --orphan -b <branch> <worktree-path>
# cp -r <source-dir>/. <worktree-path>/
# cd <worktree-path> && git add . && git commit -m "init: <project>"
# git push $REMOTE <branch>
# cd back && git worktree remove <worktree-path>
```

**Projects (9 orphan branches):**

| Branch | Source Dir |
|--------|-----------|
| `website__staged` | `website/staged/` |
| `extra-websites__company-profile` | `extra-websites/company-profile/` |
| `extra-websites__box-design` | `extra-websites/box-design/` |
| `extra-websites__box-design-infographics` | `extra-websites/box-design-infographics/` |
| `extra-websites__herosection-lab` | `extra-websites/herosection-lab/` |
| `extra-websites__homepage-content-lab` | `extra-websites/homepage-content-lab/` |
| `extra-websites__id-card` | `extra-websites/id-card/` |
| `extra-websites__infographics-lab` | `extra-websites/infographics-lab/` |
| `extra-websites__infographics-data-lab` | `extra-websites/infographics-data-lab/` |

### Step 5 — Update .gitmodules to use new branch names

After all branches are pushed, update `.gitmodules` in the parent repo:

```ini
[submodule "website"]
    path = website/main
    url  = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = website__main

[submodule "visiting-card-dev"]
    path = extra-websites/visiting-card
    url  = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = extra-websites__visiting-card
```

Then commit and push the `.gitmodules` change to `rebuildworkflows`:

```bash
git add .gitmodules
git commit -m "chore: update submodule urls and branch names for rebuildworkflows"
git push rebuildworkflows monoatomlabs_dev_root:root__monoatomlabs
```

### Step 6 — Verify

```bash
# List all branches on new remote
git ls-remote --heads rebuildworkflows

# Should show all 15 branches:
# refs/heads/root__monoatomlabs
# refs/heads/website__main
# refs/heads/website__backup
# refs/heads/website__staged
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
```

---

## What is NOT migrated (old origin branches)

These branches on `roosterslab/monoatomlabs` are legacy and not mapped to a directory.
They stay on `origin` only — not pushed to `rebuildworkflows`.

| Branch | Reason |
|--------|--------|
| `dev` | Visiting card dev — superseded by `extra-websites__visiting-card` |
| `dev2` | Experimental — no active directory |
| `visiting-card-dev-branch` | Older visiting card branch |
| `visiting-card-maker-live` | No corresponding directory |
| `visiting-card-dev-main` | Superseded by `extra-websites__visiting-card` |
| `website-branch` | Legacy |
| `website-content-branch` | Legacy |
| `website-home-page-content-lab-branch` | Legacy |

---

## Rollback

If anything goes wrong, `rebuildworkflows` is a new remote — `origin` (`roosterslab/monoatomlabs`) is untouched throughout this entire plan. No destructive operations on origin.

---

*Created: 2026-03-04*
*Status: PENDING — waiting for rebuildworkflows/monoatomlabs repo creation*
