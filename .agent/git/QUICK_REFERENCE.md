# Quick Reference — Monoatom Labs Dev Root

---

## Remotes

| Remote | URL |
|--------|-----|
| `origin` (mono repo) | `https://github.com/roosterslab/monoatomlabs.git` |
| `publish` (website deploy) | `https://github.com/vrocky/monoatoms-websites.git` |

---

## Daily Workflow

### Website changes
```bash
# 1. Work inside submodule
cd website/main
git add <files>
git commit -m "feat: your change"
git push origin website-main

# 2. Update parent pointer
cd ../..
git add website/main
git commit -m "chore: update website submodule pointer"
git push origin monoatomlabs_dev_root
```

### Visiting card changes
```bash
cd extra-websites/visiting-card
git add <files>
git commit -m "feat: your change"
git push origin visiting-card-dev-main

cd ../..
git add extra-websites/visiting-card
git commit -m "chore: update visiting-card submodule pointer"
git push origin monoatomlabs_dev_root
```

### Push website to deploy (publish remote)
```bash
cd website/main
git push publish website-main:main
```

---

## Submodule Commands

```bash
# Check status of all submodules
git submodule status

# Pull latest for all submodules
git submodule update --remote --merge

# Init submodules after fresh clone
git submodule update --init --recursive

# Enter a submodule
cd website/main
# or
cd extra-websites/visiting-card
```

---

## Common Git Commands

```bash
# Full status (parent + submodules)
git status
git submodule status

# Pull parent + sync submodule pointers
git pull origin monoatomlabs_dev_root
git submodule update --init --recursive

# View branch mapping
git branch -a

# Push parent
git push origin monoatomlabs_dev_root
```

---

## Branch Map

| Project | Branch |
|---------|--------|
| Root / parent | `monoatomlabs_dev_root` |
| `website/main` | `website-main` |
| `extra-websites/visiting-card` | `visiting-card-dev-main` |
| Content / source | `source-contents-branch` |
| Maker app | `maker-app` |

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| Submodule shows `modified` but nothing changed | `git add <submodule-path>` then commit pointer |
| Detached HEAD in submodule | `cd <submodule> && git checkout <branch>` |
| Push rejected | `git pull --rebase origin <branch>` then push |
| Submodule directory empty | `git submodule update --init --recursive` |
| Token expired | Re-run any push — GCM will prompt |

---

*Last updated: 2026-03-04*
