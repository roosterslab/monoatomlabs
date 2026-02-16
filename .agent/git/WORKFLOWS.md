# Git Workflows - Monoatom Labs

## Workflow 1: Website Development & Deployment

```
┌─────────────────────────────────────────────────────────────┐
│ WEBSITE DEVELOPMENT WORKFLOW                                │
└─────────────────────────────────────────────────────────────┘

1. WORK ON WEBSITE
   ┌──────────────────────────┐
   │ cd website/              │
   │ [make changes]           │
   │ git add .                │
   │ git commit -m "..."      │
   └──────────────────────────┘
                │
                ▼
2. PUSH TO MONO REPO (Required)
   ┌──────────────────────────────────┐
   │ git push origin website-main     │
   └──────────────────────────────────┘
                │
                ├───────────────────────────┐
                ▼                           ▼
3a. UPDATE PARENT (Required)    3b. PUBLISH (Optional)
   ┌──────────────────────┐        ┌─────────────────────────────┐
   │ cd ..                │        │ git push publish            │
   │ git add website      │        │   website-main:main         │
   │ git commit -m "..."  │        │                             │
   │ git push origin      │        │ Requires vrocky auth        │
   └──────────────────────┘        └─────────────────────────────┘
                │
                ▼
          ┌─────────┐
          │  DONE   │
          └─────────┘
```

---

## Workflow 2: Pulling Latest Changes

```
┌─────────────────────────────────────────────────────────────┐
│ SYNC WITH REMOTE CHANGES                                    │
└─────────────────────────────────────────────────────────────┘

1. UPDATE PARENT REPOSITORY
   ┌──────────────────────────────────────┐
   │ cd monoatomlabs_dev_root/            │
   │ git pull origin monoatomlabs_dev_root│
   └──────────────────────────────────────┘
                │
                ▼
2. UPDATE SUBMODULES
   ┌──────────────────────────────────────┐
   │ git submodule update --remote        │
   │                                      │
   │ OR                                   │
   │                                      │
   │ cd website/                          │
   │ git pull origin website-main         │
   └──────────────────────────────────────┘
                │
                ▼
          ┌─────────┐
          │  SYNCED │
          └─────────┘
```

---

## Workflow 3: Initial Clone & Setup

```
┌─────────────────────────────────────────────────────────────┐
│ NEW MACHINE SETUP                                           │
└─────────────────────────────────────────────────────────────┘

1. CLONE MAIN REPOSITORY
   ┌────────────────────────────────────────┐
   │ git clone                              │
   │   https://github.com/roosterslab/     │
   │   monoatomlabs.git                     │
   └────────────────────────────────────────┘
                │
                ▼
2. CHECKOUT BRANCH
   ┌────────────────────────────────────────┐
   │ cd monoatomlabs/                       │
   │ git checkout monoatomlabs_dev_root     │
   └────────────────────────────────────────┘
                │
                ▼
3. INITIALIZE SUBMODULES
   ┌────────────────────────────────────────┐
   │ git submodule init                     │
   │ git submodule update --recursive       │
   └────────────────────────────────────────┘
                │
                ▼
4. SETUP WEBSITE PUBLISH REMOTE
   ┌────────────────────────────────────────┐
   │ cd website/                            │
   │ git remote add publish                 │
   │   https://github.com/vrocky/           │
   │   monoatoms-websites.git               │
   └────────────────────────────────────────┘
                │
                ▼
5. CONFIGURE AUTHENTICATION (if needed)
   ┌────────────────────────────────────────┐
   │ git config --local                     │
   │   credential.https://github.com/vrocky │
   │   .username vrocky                     │
   │                                        │
   │ [Setup PAT or SSH]                     │
   └────────────────────────────────────────┘
                │
                ▼
          ┌─────────┐
          │  READY  │
          └─────────┘
```

---

## Workflow 4: Adding New Submodule

```
┌─────────────────────────────────────────────────────────────┐
│ ADD NEW SUBMODULE                                           │
└─────────────────────────────────────────────────────────────┘

1. CREATE BRANCH IN MONO REPO
   ┌────────────────────────────────────────┐
   │ # On mono repo                         │
   │ git checkout -b new-project-main       │
   │ [commit project files]                 │
   │ git push origin new-project-main       │
   └────────────────────────────────────────┘
                │
                ▼
2. ADD AS SUBMODULE TO PARENT
   ┌────────────────────────────────────────┐
   │ cd monoatomlabs_dev_root/              │
   │ git submodule add                      │
   │   -b new-project-main                  │
   │   https://github.com/roosterslab/      │
   │   monoatomlabs.git                     │
   │   new-project                          │
   └────────────────────────────────────────┘
                │
                ▼
3. COMMIT SUBMODULE ADDITION
   ┌────────────────────────────────────────┐
   │ git add .gitmodules new-project        │
   │ git commit -m "Add new-project         │
   │   submodule"                           │
   │ git push origin monoatomlabs_dev_root  │
   └────────────────────────────────────────┘
                │
                ▼
          ┌─────────┐
          │  DONE   │
          └─────────┘
```

---

## Workflow 5: Resolving Submodule Conflicts

```
┌─────────────────────────────────────────────────────────────┐
│ SUBMODULE OUT OF SYNC                                       │
└─────────────────────────────────────────────────────────────┘

SYMPTOM: Parent shows "modified content" for submodule

1. CHECK SUBMODULE STATUS
   ┌────────────────────────────────────────┐
   │ cd website/                            │
   │ git status                             │
   └────────────────────────────────────────┘
                │
                ├─────────────────┬──────────────────┐
                ▼                 ▼                  ▼
        HAS UNCOMMITTED    DETACHED HEAD    BEHIND REMOTE
        CHANGES

2a. COMMIT CHANGES     2b. CHECKOUT BRANCH   2c. PULL UPDATES
   ┌────────────┐         ┌──────────────┐      ┌─────────────┐
   │ git add .  │         │ git checkout │      │ git pull    │
   │ git commit │         │ website-main │      │   origin    │
   │ git push   │         └──────────────┘      │   website-  │
   └────────────┘                               │   main      │
        │                      │                 └─────────────┘
        └──────────────────────┴────────────────────┘
                              │
                              ▼
3. UPDATE PARENT REFERENCE
   ┌────────────────────────────────────────┐
   │ cd ..                                  │
   │ git add website                        │
   │ git commit -m "Update website          │
   │   submodule reference"                 │
   │ git push origin monoatomlabs_dev_root  │
   └────────────────────────────────────────┘
                │
                ▼
          ┌─────────┐
          │ RESOLVED│
          └─────────┘
```

---

## Workflow 6: Emergency Rollback

```
┌─────────────────────────────────────────────────────────────┐
│ ROLLBACK TO PREVIOUS VERSION                               │
└─────────────────────────────────────────────────────────────┘

1. FIND COMMIT TO ROLLBACK TO
   ┌────────────────────────────────────────┐
   │ cd website/                            │
   │ git log --oneline                      │
   │ # Note the commit hash                 │
   └────────────────────────────────────────┘
                │
                ▼
2. RESET TO COMMIT
   ┌────────────────────────────────────────┐
   │ git reset --hard COMMIT_HASH           │
   │                                        │
   │ WARNING: This discards changes         │
   └────────────────────────────────────────┘
                │
                ▼
3. FORCE PUSH (CAREFUL!)
   ┌────────────────────────────────────────┐
   │ git push --force origin website-main   │
   │                                        │
   │ Confirm with team before force push!   │
   └────────────────────────────────────────┘
                │
                ▼
4. UPDATE PARENT
   ┌────────────────────────────────────────┐
   │ cd ..                                  │
   │ git add website                        │
   │ git commit -m "Rollback website"       │
   │ git push origin monoatomlabs_dev_root  │
   └────────────────────────────────────────┘
```

---

## Decision Tree: Where to Push?

```
START: Made changes to website
│
├─ Is this a hotfix/urgent deployment?
│  ├─ YES → Push to both origin AND publish
│  └─ NO  → Continue
│
├─ Is this ready for production?
│  ├─ YES → Push to both origin AND publish
│  └─ NO  → Push to origin only
│
└─ Is this experimental/testing?
   └─ Push to origin only (mono repo)

ALWAYS: Update parent repository after pushing submodule
```

---

## Authentication Decision Tree

```
PUSH FAILS WITH 401 UNAUTHORIZED
│
├─ Pushing to origin (roosterslab)?
│  └─ Check: gh auth status
│     ├─ Not logged in → Run: gh auth login
│     └─ Token expired → Refresh token
│
└─ Pushing to publish (vrocky)?
   └─ Run: git credential fill
      ├─ Shows roosterslab → Wrong account!
      │  └─ Setup vrocky credentials:
      │     1. Create PAT on GitHub (as vrocky)
      │     2. Store with: git credential approve
      │
      └─ Shows vrocky → Token may be invalid
         └─ Generate new PAT and update
```

---

## Best Practices

1. **Always Pull Before Push**
   ```bash
   git pull origin website-main
   # resolve conflicts if any
   git push origin website-main
   ```

2. **Never Force Push to Main Branches** (unless emergency)
   - Coordinate with team
   - Document the reason
   - Notify all developers

3. **Keep Submodules in Sync**
   ```bash
   # Weekly maintenance
   git submodule update --remote
   git add website visiting-card-dev
   git commit -m "Update submodules to latest"
   ```

4. **Test Before Publishing**
   ```bash
   # Test locally first
   npm run build
   npm run preview

   # Then push to origin
   git push origin website-main

   # Only after verification, push to publish
   git push publish website-main:main
   ```

---

*Comprehensive workflow documentation*
*Last Updated: 2026-02-16*
