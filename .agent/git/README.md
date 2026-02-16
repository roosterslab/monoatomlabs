# Git Operations Documentation

> Comprehensive git documentation for Monoatom Labs Development Root

---

## 📚 Documentation Index

### 1. [OPERATING_INSTRUCTIONS.md](./OPERATING_INSTRUCTIONS.md)
**Complete operational guide covering:**
- Repository structure and architecture
- Submodule configuration details
- Common operations and maintenance
- Authentication setup
- Troubleshooting guide
- File locations and references

**Use this for:** Detailed understanding of the entire git setup

---

### 2. [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
**Quick command reference:**
- Daily workflow commands
- Remote URLs
- Common git commands
- Quick troubleshooting
- Authentication setup snippets

**Use this for:** Quick command lookups during daily work

---

### 3. [CONFIGURATION.md](./CONFIGURATION.md)
**Current configuration snapshot:**
- Repository hierarchy
- Remote configurations
- Branch structures
- Authentication matrix
- Current state and sync status
- File statistics

**Use this for:** Understanding current setup and state

---

### 4. [WORKFLOWS.md](./WORKFLOWS.md)
**Visual workflow diagrams:**
- Website development & deployment
- Pulling latest changes
- Initial clone & setup
- Adding new submodules
- Resolving conflicts
- Emergency rollback procedures
- Decision trees

**Use this for:** Step-by-step workflow guidance

---

## 🚀 Quick Start

### For New Users
1. Read: [OPERATING_INSTRUCTIONS.md](./OPERATING_INSTRUCTIONS.md) - Section "Initial Setup"
2. Follow: [WORKFLOWS.md](./WORKFLOWS.md) - "Workflow 3: Initial Clone & Setup"
3. Bookmark: [QUICK_REFERENCE.md](./QUICK_REFERENCE.md) for daily use

### For Daily Development
1. Open: [QUICK_REFERENCE.md](./QUICK_REFERENCE.md)
2. Follow: [WORKFLOWS.md](./WORKFLOWS.md) - "Workflow 1: Website Development"
3. Troubleshoot: [OPERATING_INSTRUCTIONS.md](./OPERATING_INSTRUCTIONS.md) - "Troubleshooting"

### For Configuration Changes
1. Update: [CONFIGURATION.md](./CONFIGURATION.md)
2. Document: Changes in relevant workflow
3. Test: Verify all operations still work

---

## 🎯 Common Tasks

| Task | Document | Section |
|------|----------|---------|
| Commit website changes | QUICK_REFERENCE.md | Daily Workflow |
| Push to mono repo | WORKFLOWS.md | Workflow 1 |
| Push to publish repo | WORKFLOWS.md | Workflow 1 |
| Setup authentication | OPERATING_INSTRUCTIONS.md | Authentication Setup |
| Add new submodule | WORKFLOWS.md | Workflow 4 |
| Resolve conflicts | WORKFLOWS.md | Workflow 5 |
| Clone on new machine | WORKFLOWS.md | Workflow 3 |
| Update submodules | QUICK_REFERENCE.md | Common Commands |

---

## ⚡ Emergency Procedures

### Push Fails
1. Check: [WORKFLOWS.md](./WORKFLOWS.md) - "Authentication Decision Tree"
2. Verify: [CONFIGURATION.md](./CONFIGURATION.md) - "Authentication Matrix"
3. Fix: [OPERATING_INSTRUCTIONS.md](./OPERATING_INSTRUCTIONS.md) - "Authentication Setup"

### Submodule Out of Sync
1. Follow: [WORKFLOWS.md](./WORKFLOWS.md) - "Workflow 5: Resolving Submodule Conflicts"
2. Reference: [OPERATING_INSTRUCTIONS.md](./OPERATING_INSTRUCTIONS.md) - "Troubleshooting"

### Need to Rollback
1. **STOP** - Coordinate with team
2. Follow: [WORKFLOWS.md](./WORKFLOWS.md) - "Workflow 6: Emergency Rollback"
3. Document the incident

---

## 📋 Repository Overview

```
monoatomlabs_dev_root/
│
├── .git/                          # Main repository
├── .gitmodules                    # Submodule definitions
├── .agent/git/                    # THIS DOCUMENTATION
│   ├── README.md                  # This file
│   ├── OPERATING_INSTRUCTIONS.md  # Complete guide
│   ├── QUICK_REFERENCE.md         # Command reference
│   ├── CONFIGURATION.md           # Current config
│   └── WORKFLOWS.md               # Visual workflows
│
├── visiting-card-dev/             # Submodule 1
│   └── [Branch: visiting-card-dev-main]
│
└── website/                       # Submodule 2
    ├── [Branch: website-main]
    ├── Remote: origin (mono repo)
    └── Remote: publish (standalone)
```

---

## 🔑 Key Concepts

### Mono Repo Structure
- **One repository** contains multiple projects
- Projects managed as **git submodules**
- Each submodule is an independent repository
- Parent tracks specific commits of submodules

### Dual Remote Strategy (Website)
- **origin**: Source of truth, mono repo integration
- **publish**: Deployment target, standalone repo
- Always push to origin first
- Publish is optional, for deployment

### Two-Step Push Process
1. **Submodule**: Commit and push changes
2. **Parent**: Update reference to new submodule commit

---

## 🛠️ Maintenance

### Weekly
- Update submodules: `git submodule update --remote`
- Review: [CONFIGURATION.md](./CONFIGURATION.md) - verify it's current
- Check: Authentication tokens haven't expired

### Monthly
- Review and update documentation
- Archive old branches
- Cleanup unused remotes

### When Adding New Features
- Document in appropriate workflow
- Update configuration if structure changes
- Test all documented procedures

---

## 📞 Support

### Internal Resources
- This documentation directory
- Team git experts
- Git configuration files

### External Resources
- Git Documentation: https://git-scm.com/doc
- GitHub Guides: https://guides.github.com/
- Git Submodules: https://git-scm.com/book/en/v2/Git-Tools-Submodules

---

## 📝 Documentation Standards

When updating these documents:

1. **Keep CONFIGURATION.md current** - Update after any config changes
2. **Add new workflows to WORKFLOWS.md** - Visual diagrams help
3. **Update QUICK_REFERENCE.md** - For frequently used commands
4. **Expand OPERATING_INSTRUCTIONS.md** - For detailed procedures
5. **Update this README** - When adding new documents

---

## 🎓 Learning Path

### Beginner
1. Read OPERATING_INSTRUCTIONS.md - "Repository Structure"
2. Practice with QUICK_REFERENCE.md - "Daily Workflow"
3. Understand WORKFLOWS.md - "Workflow 1"

### Intermediate
1. Master all workflows in WORKFLOWS.md
2. Understand submodule mechanics
3. Learn authentication troubleshooting

### Advanced
1. Modify git configuration
2. Create new workflows
3. Handle complex merge conflicts
4. Manage multiple submodules

---

## 🔒 Security Notes

- **Never commit** tokens or passwords to git
- **Always use** Git Credential Manager
- **Rotate tokens** regularly (every 90 days)
- **Limit token scope** to minimum required
- **Use SSH** when possible for automation

---

## 📊 Statistics

**Documentation Coverage:**
- ✅ Repository structure
- ✅ Submodule operations
- ✅ Authentication
- ✅ Common workflows
- ✅ Troubleshooting
- ✅ Emergency procedures
- ✅ Best practices

---

*Maintained by: Claude Sonnet 4.5*
*Created: 2026-02-16*
*Last Updated: 2026-02-16*

**Version**: 1.0.0
