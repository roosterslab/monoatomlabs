# Submodule Plans — Monoatom Labs Monorepo

Each project gets its own branch on `rebuildworkflows/monoatomlabs.git`
and is registered as a submodule in the parent repo.

---

## Module Tiers

Projects are grouped into 3 tiers based on their maturity and tech stack:

| Tier | Description | Submodule? |
|------|-------------|-----------|
| **Active** | Has `package.json` + `vite.config.js` — runnable project | Yes — full submodule |
| **Static** | Has `index.html` only — no build step | Yes — lightweight submodule |
| **Content** | Markdown / assets / docs only — no code | Optional — tracked as submodule or plain dir |

---

## Module Registry

### Tier 1 — Active (Vite + React/HTML, runnable)

| # | Path | Branch | Package name | Dev port |
|---|------|--------|-------------|----------|
| 1 | `website/main` | `website__main` | *(main website)* | 5173 |
| 2 | `extra-websites/company-profile` | `extra-websites__company-profile` | `monoatomlabs-company-profile` | 5174 |
| 3 | `extra-websites/homepage-content-lab` | `extra-websites__homepage-content-lab` | `monoatom-homepage-content-lab` | 5175 |
| 4 | `extra-websites/box-design-infographics` | `extra-websites__box-design-infographics` | *(tbd)* | 5176 |
| 5 | `extra-websites/infographics-lab` | `extra-websites__infographics-lab` | *(tbd)* | 5177 |
| 6 | `extra-websites/infographics-data-lab` | `extra-websites__infographics-data-lab` | *(tbd)* | 5178 |

### Tier 2 — Static (HTML only, no build step)

| # | Path | Branch | Notes |
|---|------|--------|-------|
| 7 | `extra-websites/visiting-card` | `extra-websites__visiting-card` | Has nested `maker/` submodule |
| 8 | `extra-websites/id-card` | `extra-websites__id-card` | Simple HTML + assets |
| 9 | `website/staged` | `website__staged` | Staging snapshot of website |
| 10 | `website/backup` | `website__backup` | Backup snapshot of website |

### Tier 3 — Content / Infra (no runnable code)

| # | Path | Branch | Notes |
|---|------|--------|-------|
| 11 | `extra-websites/box-design` | `extra-websites__box-design` | Images + maker subdir only |
| 12 | `extra-websites/herosection-lab` | `extra-websites__herosection-lab` | README + variations only |
| 13 | `content/` | `content__source` | Branding, brochures, source assets |
| 14 | `infrastructure/maker-app` | `infrastructure__maker-app` | Terraform + Amplify IaC |

### Root

| # | Path | Branch | Notes |
|---|------|--------|-------|
| 15 | *(repo root)* | `root__monoatomlabs` | Parent — tracks all submodule pointers |

---

## Target .gitmodules

This is the full `.gitmodules` the parent (`root__monoatomlabs`) will have
after all submodules are registered:

```ini
# ── website ──────────────────────────────────────────────────────────
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

# ── extra-websites ───────────────────────────────────────────────────
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

# ── content ──────────────────────────────────────────────────────────
[submodule "content"]
    path   = content
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = content__source

# ── infrastructure ───────────────────────────────────────────────────
[submodule "infrastructure/maker-app"]
    path   = infrastructure/maker-app
    url    = https://github.com/rebuildworkflows/monoatomlabs.git
    branch = infrastructure__maker-app
```

---

## Final Repo Structure (post-migration)

```
rebuildworkflows/monoatomlabs.git
│
├── root__monoatomlabs          ← parent, tracks all submodule pointers
│
├── website__main               ← Tier 1: Vite + React, main website
├── website__staged             ← Tier 2: staging snapshot
├── website__backup             ← Tier 2: backup snapshot
│
├── extra-websites__visiting-card          ← Tier 2: static HTML card
├── extra-websites__company-profile        ← Tier 1: Vite + React
├── extra-websites__box-design             ← Tier 3: images + assets
├── extra-websites__box-design-infographics ← Tier 1: Vite
├── extra-websites__herosection-lab        ← Tier 3: lab variations
├── extra-websites__homepage-content-lab   ← Tier 1: Vite
├── extra-websites__id-card                ← Tier 2: static HTML
├── extra-websites__infographics-lab       ← Tier 1: Vite
├── extra-websites__infographics-data-lab  ← Tier 1: Vite
│
├── content__source             ← Tier 3: branding, brochures, assets
│
└── infrastructure__maker-app   ← Tier 3: Terraform + Amplify IaC
```

---

## npm Workspace Plan (root package.json)

```json
{
  "name": "monoatomlabs",
  "private": true,
  "version": "1.0.0",
  "workspaces": [
    "website/main",
    "website/staged",
    "extra-websites/company-profile",
    "extra-websites/box-design-infographics",
    "extra-websites/homepage-content-lab",
    "extra-websites/infographics-lab",
    "extra-websites/infographics-data-lab"
  ]
}
```

> Only Tier 1 projects (with `package.json`) are in workspaces.
> Static and content modules are excluded.

---

## Execution Order

1. **Create** `rebuildworkflows/monoatomlabs` on GitHub (empty)
2. **Run** `BRANCH_RENAME_PLAN.md` → push all 15 branches
3. **Update** `.gitmodules` → replace `roosterslab` URLs with `rebuildworkflows`
4. **Update** `package.json` → adjust workspaces if needed
5. **Test** clone: `git clone --recurse-submodules -b root__monoatomlabs <url>`
6. **Verify** all 15 branches visible on GitHub

---

*Created: 2026-03-04*
*Depends on: BRANCH_RENAME_PLAN.md*
