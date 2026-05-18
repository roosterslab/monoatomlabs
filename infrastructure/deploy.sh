#!/bin/bash
# =============================================================================
# deploy.sh — Build all extra-websites and deploy each to Cloud Run
# Usage: bash infrastructure/deploy.sh
# Output: infrastructure/LINKS.md
# =============================================================================
set -euo pipefail

# ── Config ────────────────────────────────────────────────────────────────────
PROJECT_ID="globql-freelance"
REGION="us-central1"
KEY_FILE="C:/Users/globql-ws/Documents/projects-2/cloud-run-static-html/.credentials/dev-sa-key.json"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
WEBSITES_DIR="$ROOT_DIR/extra-websites"
OUTPUT_FILE="$SCRIPT_DIR/LINKS.md"

CATEGORIES=("catalog" "flex-banner" "box")

# ── Auth ──────────────────────────────────────────────────────────────────────
echo "Authenticating..."
gcloud auth activate-service-account --key-file="$KEY_FILE" --quiet
gcloud config set project "$PROJECT_ID" --quiet
echo "Authenticated as: $(gcloud config get-value account)"

# ── Init output doc ───────────────────────────────────────────────────────────
cat > "$OUTPUT_FILE" <<EOF
# Cloud Run Deployment Links

Generated: $(date)

| Service | Category | Site | URL |
|---------|----------|------|-----|
EOF

# ── Deploy function ───────────────────────────────────────────────────────────
deploy_site() {
  local category="$1"
  local site="$2"
  local site_path="$3"
  # Cloud Run service name: e.g. catalog-ceraphene, flex-banner-hdgpe
  local service_name="${category}-${site}"

  echo ""
  echo "┌─── $service_name ────────────────────────"

  # Build if package.json present
  if [ -f "$site_path/package.json" ]; then
    echo "│  Installing dependencies..."
    (cd "$site_path" && npm install --silent 2>/dev/null)
    echo "│  Building..."
    (cd "$site_path" && npm run build --silent 2>/dev/null)
  else
    echo "│  Static site (no build step)"
  fi

  # Pick dist/ if it exists, otherwise deploy the whole folder
  local src_dir="$site_path/dist"
  if [ ! -d "$src_dir" ]; then
    src_dir="$site_path"
  fi

  # Temp deploy directory: dist contents + serve wrapper
  local tmp_dir
  tmp_dir=$(mktemp -d)

  cp -r "$src_dir/." "$tmp_dir/"

  cat > "$tmp_dir/package.json" <<'PKGJSON'
{
  "name": "static-site",
  "version": "1.0.0",
  "scripts": {
    "start": "npx serve -s . --listen $PORT"
  }
}
PKGJSON

  echo "│  Deploying to Cloud Run..."
  local deploy_output
  deploy_output=$(gcloud run deploy "$service_name" \
    --source "$tmp_dir" \
    --region "$REGION" \
    --allow-unauthenticated \
    --project "$PROJECT_ID" \
    --quiet 2>&1)

  rm -rf "$tmp_dir"

  local url
  url=$(echo "$deploy_output" | grep "Service URL:" | awk '{print $3}')

  echo "│  URL: $url"
  echo "└───────────────────────────────────────────"

  # Append to LINKS.md
  echo "| \`$service_name\` | $category | $site | $url |" >> "$OUTPUT_FILE"
}

# ── Loop all categories ───────────────────────────────────────────────────────
for category in "${CATEGORIES[@]}"; do
  category_dir="$WEBSITES_DIR/$category"

  if [ ! -d "$category_dir" ]; then
    echo "Warning: $category_dir not found, skipping."
    continue
  fi

  echo ""
  echo "════════════════════════════════════════════"
  echo "  Category: $category"
  echo "════════════════════════════════════════════"

  for site_dir in "$category_dir"/*/; do
    [ -d "$site_dir" ] || continue
    site=$(basename "$site_dir")

    # Skip non-project directories
    [[ "$site" == "node_modules" ]] && continue
    [[ "$site" == "dist" ]] && continue
    [[ "$site" == "src" ]] && continue
    [[ "$site" == ".git" ]] && continue

    # Only deploy if it has a package.json or index.html
    if [ ! -f "$site_dir/package.json" ] && [ ! -f "$site_dir/index.html" ]; then
      echo "  Skipping $site (no package.json or index.html)"
      continue
    fi

    deploy_site "$category" "$site" "$site_dir"
  done
done

# ── Done ──────────────────────────────────────────────────────────────────────
echo ""
echo "════════════════════════════════════════════"
echo "  All deployments complete!"
echo "  Links saved to: $OUTPUT_FILE"
echo "════════════════════════════════════════════"
