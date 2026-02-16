# Git Configuration - Monoatom Labs

## Repository Hierarchy

```
monoatomlabs (mono repo)
│
├── Branch: monoatomlabs_dev_root (parent)
│   ├── Submodule: visiting-card-dev (Branch: visiting-card-dev-main) [Level 1]
│   │   └── Nested Submodule: maker (Branch: maker-app) [Level 2]
│   │       └── Remote: origin → roosterslab/monoatomlabs.git
│   │
│   └── Submodule: website (Branch: website-main) [Level 1]
│       ├── Remote: origin → roosterslab/monoatomlabs.git
│       └── Remote: publish → vrocky/monoatoms-websites.git
```

---

## Parent Repository Configuration

**Repository**: monoatomlabs_dev_root
**Location**: `C:\Users\globql-ws\Documents\projects-2\monoatomlabs\monoatomlabs_dev_root`

### Remote
```ini
[remote "origin"]
    url = https://github.com/roosterslab/monoatomlabs.git
    fetch = +refs/heads/*:refs/remotes/origin/*
```

### Branch
```ini
[branch "monoatomlabs_dev_root"]
    remote = origin
    merge = refs/heads/monoatomlabs_dev_root
```

---

## Website Submodule Configuration

**Location**: `C:\Users\globql-ws\Documents\projects-2\monoatomlabs\monoatomlabs_dev_root\website`
**Commits**: 2 commits on website-main branch

### Commits History
1. `bfc5942` - Update Claude settings (post-submodule setup)
2. `86cdc53` - Update Claude settings
3. `d8f4efa` - Initial commit: Monoatom Labs website project (201 files, 42,894 insertions)

### Remotes
```ini
[remote "origin"]
    url = https://github.com/roosterslab/monoatomlabs.git
    fetch = +refs/heads/*:refs/remotes/origin/*

[remote "publish"]
    url = https://github.com/vrocky/monoatoms-websites.git
    fetch = +refs/heads/*:refs/remotes/publish/*
```

### Branch
```ini
[branch "website-main"]
    remote = origin
    merge = refs/heads/website-main
```

### Credentials
```ini
[credential "https://github.com/vrocky"]
    username = vrocky
```

---

## Visiting Card Submodule Configuration

**Location**: `C:\Users\globql-ws\Documents\projects-2\monoatomlabs\monoatomlabs_dev_root\visiting-card-dev`
**Branch**: visiting-card-dev-main

### Nested Submodule (Level 2)
**Path**: `visiting-card-dev/maker/`
**Branch**: maker-app

This is a **second-order nested submodule** - a submodule within a submodule.

### Nested Submodule Definition (visiting-card-dev/.gitmodules)
```ini
[submodule "maker"]
    path = maker
    url = https://github.com/roosterslab/monoatomlabs.git
    branch = maker-app
```

---

## Submodules Definition (.gitmodules)

```ini
[submodule "visiting-card-dev"]
    path = visiting-card-dev
    url = https://github.com/roosterslab/monoatomlabs.git
    branch = visiting-card-dev-main

[submodule "website"]
    path = website
    url = https://github.com/roosterslab/monoatomlabs.git
    branch = website-main
```

---

## Authentication Matrix

| Repository | Account | Status | Method |
|------------|---------|--------|--------|
| roosterslab/monoatomlabs | roosterslab | ✅ Configured | Git Credential Manager |
| vrocky/monoatoms-websites | vrocky | ⚠️ Manual Setup Required | Personal Access Token |

---

## Push Targets

### Website Changes
1. **Primary**: `origin/website-main` (mono repo) - Always push here first
2. **Secondary**: `publish/main` (standalone) - Optional, for deployment

### Parent Repository
- **Target**: `origin/monoatomlabs_dev_root`
- **Purpose**: Update submodule commit references

---

## Current State (as of 2026-02-16)

### Parent Repository
- **Branch**: monoatomlabs_dev_root
- **Status**: Up to date with origin
- **Last Commit**: 54cc21a - Update website submodule to latest commit

### Website Submodule
- **Branch**: website-main
- **Status**: Up to date with origin
- **Last Commit**: bfc5942 - Update Claude settings (post-submodule setup)
- **Tracking**: origin/website-main

### Visiting Card Submodule
- **Status**: ce8a0dc (heads/dev)

---

## Sync Status

✅ **origin** (mono repo): Fully synchronized
⚠️ **publish** (standalone): Authentication pending for vrocky account

---

## File Statistics

### Website Submodule
- **Total Files**: 201 files
- **Total Lines**: 42,894 insertions
- **Primary Language**: JavaScript/JSX
- **Framework**: React + Vite

### Key Directories
- `src/components/` - React components
- `src/pages/` - Page components
- `public/` - Static assets
- `docs/` - Documentation

---

*Configuration snapshot generated: 2026-02-16 06:51 UTC*
