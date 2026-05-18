# Infrastructure — Extra Websites Deployment

Deploys all sites under `extra-websites/` to **Google Cloud Run** using **Google Buildpacks** (no Dockerfile needed).

---

## Directory Layout

```
monoatomlabs_dev_root/
├── extra-websites/
│   ├── catalog/
│   │   ├── ceraphene/
│   │   ├── graffisol/
│   │   ├── graphacrete/
│   │   └── hdgpe/
│   ├── flex-banner/
│   │   ├── ceraphene/
│   │   ├── graffisol/
│   │   ├── graphacrete/
│   │   └── hdgpe/
│   └── box/
│       ├── box-content/    ← static HTML (no build step)
│       ├── ceraphene/
│       ├── graffisol/
│       ├── graphacrete/
│       └── hdgpe/
└── infrastructure/
    ├── deploy.sh           ← one-shot build + deploy script
    ├── main.tf
    ├── variables.tf
    ├── outputs.tf
    ├── terraform.tfvars
    └── LINKS.md            ← generated after deploy
```

---

## Option 1 — Shell Script (Recommended for First Deploy)

Builds every site, deploys to Cloud Run, and writes `LINKS.md`.

```bash
bash infrastructure/deploy.sh
```

**What it does per site:**
1. `npm install && npm run build` (skipped for static HTML sites)
2. Copies `dist/` into a temp directory
3. Adds a `package.json` with `npx serve` as the start script
4. Runs `gcloud run deploy --source <tmpdir>` (Buildpacks — no Dockerfile)
5. Captures the Service URL and appends it to `LINKS.md`

**Output:** `infrastructure/LINKS.md` — a markdown table with all 13 service links.

---

## Option 2 — Terraform (Declarative / Ongoing Management)

Use Terraform after images have been built and pushed to Artifact Registry (either by the shell script above or a CI pipeline).

### Prerequisites

- [Terraform](https://developer.hashicorp.com/terraform/install) >= 1.5
- Images already pushed to:
  ```
  us-central1-docker.pkg.dev/globql-freelance/cloud-run-source-deploy/<service-name>:latest
  ```

### Commands

```bash
cd infrastructure

# Authenticate
gcloud auth activate-service-account \
  --key-file="path/to/dev-sa-key.json"

export GOOGLE_APPLICATION_CREDENTIALS="path/to/dev-sa-key.json"

# Init, plan, apply
terraform init
terraform plan
terraform apply
```

### Get all links after apply

```bash
# Print JSON map of service → URL
terraform output service_urls

# Generate LINKS.md directly
terraform output -raw links_markdown > LINKS.md
```

---

## Adding a New Site

1. Create the site folder under `extra-websites/<category>/<site-name>/`
2. Add an entry to `locals.services` in `main.tf`:
   ```hcl
   "catalog-newsite" = { category = "catalog", site = "newsite" }
   ```
3. Run `bash infrastructure/deploy.sh` or `terraform apply`

---

## Service Naming Convention

```
<category>-<site>
```

| Service Name             | Category    | Site         |
|--------------------------|-------------|--------------|
| `catalog-ceraphene`      | catalog     | ceraphene    |
| `catalog-graffisol`      | catalog     | graffisol    |
| `catalog-graphacrete`    | catalog     | graphacrete  |
| `catalog-hdgpe`          | catalog     | hdgpe        |
| `flex-banner-ceraphene`  | flex-banner | ceraphene    |
| `flex-banner-graffisol`  | flex-banner | graffisol    |
| `flex-banner-graphacrete`| flex-banner | graphacrete  |
| `flex-banner-hdgpe`      | flex-banner | hdgpe        |
| `box-ceraphene`          | box         | ceraphene    |
| `box-graffisol`          | box         | graffisol    |
| `box-graphacrete`        | box         | graphacrete  |
| `box-hdgpe`              | box         | hdgpe        |
| `box-box-content`        | box         | box-content  |

---

## Notes

- All services scale to **0 instances** when idle (no cost when not in use)
- Re-running `deploy.sh` redeploys all sites; Cloud Run creates a new revision automatically
- `LINKS.md` is overwritten on each run with fresh URLs
