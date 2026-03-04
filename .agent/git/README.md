# Git Documentation — Monoatom Labs Dev Root

> Agent-maintained reference for the `monoatomlabs_dev_root` monorepo.

---

## Documentation Index

| File | Purpose |
|------|---------|
| [README.md](./README.md) | This file — overview and index |
| [CONFIGURATION.md](./CONFIGURATION.md) | Current repo/submodule/remote config snapshot |
| [OPERATING_INSTRUCTIONS.md](./OPERATING_INSTRUCTIONS.md) | Complete operational guide |
| [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) | Daily command cheat-sheet |
| [WORKFLOWS.md](./WORKFLOWS.md) | Step-by-step visual workflows |

---

## Repository Overview

```
monoatomlabs_dev_root/               ← root repo  (branch: monoatomlabs_dev_root)
│                                       remote origin → roosterslab/monoatomlabs.git
│
├── .agent/git/                      ← THIS documentation
├── .gitmodules                      ← submodule definitions (2 submodules)
├── package.json                     ← npm workspaces: website/*, extra-websites/*
├── amplify.yml                      ← AWS Amplify CI/CD config
│
├── website/                         ← website workspace
│   ├── main/       [SUBMODULE]      ← branch: website-main
│   │                                   origin  → roosterslab/monoatomlabs.git
│   │                                   publish → vrocky/monoatoms-websites.git
│   ├── staged/     [untracked]      ← staging copy (not committed to parent)
│   └── backup/                      ← backup snapshot
│
├── extra-websites/                  ← extra-websites workspace
│   └── visiting-card/ [SUBMODULE]  ← branch: visiting-card-dev-main
│                                       origin → roosterslab/monoatomlabs.git
│
├── content/                         ← static/source content (not a submodule)
│   ├── branding/
│   ├── brochures/
│   ├── look-nd-feel/
│   ├── source/
│   ├── website/
│   └── website-new/
│
└── infrastructure/                  ← infra config (Amplify, Dockerfile, etc.)
```

---

## Key Concepts

### Single Remote, Multiple Branches
Both submodules (`website/main` and `extra-websites/visiting-card`) point to the **same GitHub repo** (`roosterslab/monoatomlabs.git`) but track different branches. This is the core of the monorepo strategy.

### Dual Remote (website/main only)
The website submodule has two remotes:
- `origin` — mono repo integration (source of truth)
- `publish` — standalone deployment repo (`vrocky/monoatoms-websites.git`)

Always push to `origin` first. Push to `publish` for deployment.

### npm Workspaces
Root `package.json` declares workspaces for `website/*` and `extra-websites/*`. This enables shared tooling and `npm install` from the root.

### Two-Step Commit Flow
1. Commit + push inside the **submodule**
2. Commit the updated **submodule pointer** in the parent repo

---

## Quick Start

**Daily work on the website:**
→ See [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)

**Full understanding of the setup:**
→ See [OPERATING_INSTRUCTIONS.md](./OPERATING_INSTRUCTIONS.md)

**Current config/state:**
→ See [CONFIGURATION.md](./CONFIGURATION.md)

**Workflows (clone, deploy, rollback):**
→ See [WORKFLOWS.md](./WORKFLOWS.md)

---

## Current State (as of 2026-03-04)

| Item | State |
|------|-------|
| Parent branch | `monoatomlabs_dev_root` |
| Parent vs origin | **2 commits ahead** (needs push) |
| `website/main` submodule | ahead of parent pointer (+) |
| `visiting-card` submodule | ahead of parent pointer (+), currently on `dev` branch |
| `website/staged/` | untracked in parent (intentional staging area) |

---

*Maintained by: Claude Sonnet 4.6*
*Created: 2026-03-04*
*Last Updated: 2026-03-04*
