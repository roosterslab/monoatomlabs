# Workflows — Monoatom Labs Dev Root

---

## Workflow 1: Website Development & Deploy

```
START
  │
  ▼
cd website/main
  │
  ▼
Make changes (edit files)
  │
  ▼
git add <files>
git commit -m "feat: ..."
  │
  ▼
git push origin website-main ──────────────► roosterslab/monoatomlabs (website-main)
  │
  ▼
cd ../..  (back to parent)
  │
  ▼
git add website/main
git commit -m "chore: update website submodule pointer"
git push origin monoatomlabs_dev_root ────► roosterslab/monoatomlabs (monoatomlabs_dev_root)
  │
  ├─── [Deploy?] ──► git push publish website-main:main
  │                    └── vrocky/monoatoms-websites (main)
  ▼
DONE
```

---

## Workflow 2: Pull Latest Changes

```
START
  │
  ▼
cd monoatomlabs_dev_root
  │
  ▼
git pull origin monoatomlabs_dev_root
  │
  ▼
git submodule update --init --recursive
  │        (checks out commits the parent references)
  ▼
[Need latest submodule commits?]
  │
  ├── YES ──► git submodule update --remote --merge
  │
  └── NO  ──► Done
```

---

## Workflow 3: Clone on New Machine

```
git clone --recurse-submodules \
  -b monoatomlabs_dev_root \
  https://github.com/roosterslab/monoatomlabs.git \
  monoatomlabs_dev_root
  │
  ▼
cd monoatomlabs_dev_root
  │
  ▼
npm install   (installs all workspace packages)
  │
  ▼
Verify:
  git submodule status          ── should show clean (no + prefix)
  cd website/main && npm run dev
```

---

## Workflow 4: Add New Project as Submodule

```
# On GitHub: create new branch from an orphan or existing branch
git checkout --orphan <new-branch>
git rm -rf .
# add your project files
git add .
git commit -m "init: new project"
git push origin <new-branch>

# Back in parent repo:
git submodule add -b <new-branch> \
  https://github.com/roosterslab/monoatomlabs.git \
  <local-path>

git add .gitmodules <local-path>
git commit -m "chore: add <project> submodule"
git push origin monoatomlabs_dev_root
```

---

## Workflow 5: Rename Branch (new naming convention)

```
# Inside the submodule repo
cd <submodule-path>

# Create new branch from current
git checkout -b <new-branch-name>
git push origin <new-branch-name>

# Delete old branch on remote (confirm first!)
git push origin --delete <old-branch-name>

# Update parent .gitmodules
# Edit: branch = <new-branch-name>

# Commit .gitmodules update
cd <root>
git add .gitmodules <submodule-path>
git commit -m "chore: rename branch to <new-branch-name>"
git push origin monoatomlabs_dev_root
```

---

## Workflow 6: Emergency Rollback

```
STOP — coordinate with team first
  │
  ▼
# Rollback submodule to previous commit
cd <submodule-path>
git log --oneline -10          ── find safe commit
git checkout <safe-commit>

# Update parent pointer
cd <root>
git add <submodule-path>
git commit -m "revert: rollback <project> to <safe-commit>"
git push origin monoatomlabs_dev_root
  │
  ▼
Document the incident
```

---

## Branch Naming Convention (target)

```
<dir-name>__<project-name>

Examples:
  website__main
  website__staging
  website__backup
  extra-websites__visiting-card
  extra-websites__company-profile
  extra-websites__box-design
  extra-websites__id-card
  content__source
  infrastructure__maker-app
```

---

## Authentication Decision Tree

```
Push fails?
  │
  ├── "Authentication failed"
  │     └── Git Credential Manager prompt should appear
  │         If not: git credential reject → retry push
  │
  ├── "Permission denied"
  │     └── Check you have write access to the repo/branch
  │         For publish remote: may need separate vrocky account token
  │
  └── "Remote rejected"
        └── Pull first: git pull --rebase origin <branch>
            Then retry push
```

---

*Last updated: 2026-03-04*
