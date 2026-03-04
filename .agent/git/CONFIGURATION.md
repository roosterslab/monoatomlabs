# Git Configuration Snapshot — Monoatom Labs Dev Root

*Last updated: 2026-03-04*

---

## Parent Repository

| Field | Value |
|-------|-------|
| Local path | `monoatomlabs_dev_root/` |
| Active branch | `monoatomlabs_dev_root` |
| Remote | `origin` → `https://github.com/roosterslab/monoatomlabs.git` |
| Tracking | `origin/monoatomlabs_dev_root` |
| Ahead/behind | **2 commits ahead** of origin (as of 2026-03-04) |

### .gitmodules

```ini
[submodule "visiting-card-dev"]
    path = extra-websites/visiting-card
    url  = https://github.com/roosterslab/monoatomlabs.git
    branch = visiting-card-dev-main

[submodule "website"]
    path = website/main
    url  = https://github.com/roosterslab/monoatomlabs.git
    branch = website-main
```

---

## Submodule 1 — website/main

| Field | Value |
|-------|-------|
| Local path | `website/main/` |
| Active branch | `website-main` |
| Remote `origin` | `https://github.com/roosterslab/monoatomlabs.git` |
| Remote `publish` | `https://github.com/vrocky/monoatoms-websites.git` |
| Parent pointer | `6c5d79a` (ahead of parent — new commits exist) |
| Tech stack | Vite + React + Tailwind CSS |

### Branches (website/main)

| Branch | Remote | Purpose |
|--------|--------|---------|
| `website-main` | `origin/website-main` | Development branch (source of truth) |
| — | `publish/main` | Standalone deploy target |
| — | `publish/website-main` | Mirror on publish remote |

### Key files (website/main)

```
website/main/
├── src/
│   ├── pages/Home.jsx               ← home page
│   ├── components/home/             ← section components
│   └── components/backgrounds/     ← HexagonWave, DarkBackground
├── package.json
├── vite.config.js
├── tailwind.config.js
├── Dockerfile
└── nginx.conf
```

---

## Submodule 2 — extra-websites/visiting-card

| Field | Value |
|-------|-------|
| Local path | `extra-websites/visiting-card/` |
| Configured branch | `visiting-card-dev-main` |
| **Active branch** | `dev` ⚠️ (differs from configured — see note) |
| Remote `origin` | `https://github.com/roosterslab/monoatomlabs.git` |
| Parent pointer | `2fd9af6` (ahead of parent — new commits exist) |
| Tech stack | HTML / static (digital visiting card) |

> **Note**: This submodule is currently checked out on `dev` instead of the configured `visiting-card-dev-main`. When running `git submodule update --remote`, it will switch to `visiting-card-dev-main`. The `dev` branch appears to be the active development branch; confirm with team which is canonical.

### Branches (visiting-card)

| Branch | Notes |
|--------|-------|
| `dev` | Currently active |
| `dev2` | Experimental |
| `visiting-card-dev-main` | Configured tracking branch |
| `visiting-card-dev-branch` | Older branch |
| `monoatomlabs_dev_root` | Legacy (same as root) |

---

## npm Workspaces

```json
{
  "workspaces": ["website/*", "extra-websites/*"]
}
```

Packages discovered:
- `website/main/` — `@monoatomlabs/website` (or similar)
- `extra-websites/visiting-card/` — static (may not have package.json)

---

## Infrastructure

| File | Purpose |
|------|---------|
| `amplify.yml` | AWS Amplify CI/CD build config (root) |
| `website/main/Dockerfile` | Docker container for website |
| `website/main/nginx.conf` | Nginx config for containerized deploy |

---

## Authentication Matrix

| Remote | Protocol | Auth method |
|--------|----------|-------------|
| `roosterslab/monoatomlabs` | HTTPS | Git Credential Manager / PAT |
| `vrocky/monoatoms-websites` | HTTPS | Git Credential Manager / PAT |

---

## Directory Map (non-submodule)

```
content/
├── branding/           ← logos, brand assets
├── brochures/          ← PDF/print materials
├── look-nd-feel/       ← design reference
├── source/             ← source files (Figma exports, etc.)
├── website/            ← website content drafts
└── website-new/        ← new website content

website/
├── main/               ← [submodule]
├── staged/             ← staging copy (untracked in parent)
└── backup/             ← backup snapshot

extra-websites/
├── visiting-card/      ← [submodule]
├── box-design/
├── box-design-infographics/
├── company-profile/
├── herosection-lab/
├── homepage-content-lab/
├── id-card/
├── infographics-data-lab/
├── infographics-lab/
└── infographics-lab (dupe?)
```

---

## Sync Status Summary (2026-03-04)

| Component | Status | Action needed |
|-----------|--------|--------------|
| Parent repo | 2 commits ahead of origin | `git push` |
| `website/main` submodule | New commits, parent pointer stale | Commit pointer update in parent |
| `visiting-card` submodule | New commits, on wrong branch | Confirm branch; commit pointer update |
| `website/staged/` | Untracked | Decide: add to .gitignore or commit |
