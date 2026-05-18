# Deploy the main React build (website/main/dist) to Google Cloud Run using Buildpacks.
#
# Examples:
#   .\infrastructure\deploy-main-website.ps1
#   .\infrastructure\deploy-main-website.ps1 -ProjectId gen-lang-client-0281949687 -Region us-west1 -ServiceName monoatoms2 -KeyFile "C:\path\to\key.json"

param(
  [Parameter(Mandatory = $false)]
  [string]$ProjectId = 'globql-freelance',

  [Parameter(Mandatory = $false)]
  [string]$Region = 'us-central1',

  [Parameter(Mandatory = $false)]
  [string]$ServiceName = 'monoatomlabs-main',

  [Parameter(Mandatory = $false)]
  [string]$KeyFile = 'C:\Users\globql-ws\Documents\projects-2\cloud-run-static-html\.credentials\dev-sa-key.json',

  [Parameter(Mandatory = $false)]
  [switch]$UseActiveLogin,

  [Parameter(Mandatory = $false)]
  [string]$DistPath
)

$ErrorActionPreference = 'Stop'

$ROOT = Split-Path $PSScriptRoot -Parent
$DIST = if ($DistPath) { $DistPath } else { (Join-Path $ROOT 'website\main\dist') }
$DEPLOY_DIR = Join-Path $PSScriptRoot '.deploy'
$STAGE      = Join-Path $DEPLOY_DIR $ServiceName
$LOGS_DIR   = Join-Path $PSScriptRoot 'logs'
$LOG_FILE   = Join-Path $LOGS_DIR ($ServiceName + '.log')

function Write-Log($msg) {
  $line = "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] $msg"
  $line | Tee-Object -FilePath $LOG_FILE -Append
}

if (-not (Test-Path $LOGS_DIR)) { New-Item -ItemType Directory -Path $LOGS_DIR | Out-Null }
if (-not (Test-Path $DEPLOY_DIR)) { New-Item -ItemType Directory -Path $DEPLOY_DIR | Out-Null }

Write-Log "Deploying main website dist to Cloud Run"
Write-Log "Project: $ProjectId"
Write-Log "Region : $Region"
Write-Log "Service: $ServiceName"
Write-Log "Dist   : $DIST"

if (-not $UseActiveLogin) {
  if (-not (Test-Path $KeyFile)) {
    throw "Service account key not found: $KeyFile"
  }
}

if (-not (Test-Path (Join-Path $DIST 'index.html'))) {
  throw "Build output not found. Expected: $DIST\\index.html. Run: cd website\\main; npm run build"
}

Write-Log "Authenticating with gcloud..."
if (-not $UseActiveLogin) {
  & gcloud auth activate-service-account --key-file="$KeyFile" --quiet | Out-Null
} else {
  Write-Log "Using active gcloud login (no service-account activation)"
}
& gcloud config set project $ProjectId --quiet | Out-Null
& gcloud config set run/region $Region --quiet | Out-Null

Write-Log "Staging dist into: $STAGE"
if (Test-Path $STAGE) { Remove-Item $STAGE -Recurse -Force }
New-Item -ItemType Directory -Path $STAGE | Out-Null
Copy-Item (Join-Path $DIST '*') $STAGE -Recurse -Force

# Minimal Node static server (no npm install during runtime)
$utf8NoBom = [System.Text.UTF8Encoding]::new($false)
$pkgJson = '{ "name": "monoatomlabs-main", "version": "1.0.0", "scripts": { "start": "node server.js" } }'
[System.IO.File]::WriteAllText((Join-Path $STAGE 'package.json'), $pkgJson, $utf8NoBom)

$serverJs = @'
const http = require('http');
const fs   = require('fs');
const path = require('path');

const PORT = parseInt(process.env.PORT || '8080', 10);
const ROOT = __dirname;

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript',
  '.css':  'text/css',
  '.json': 'application/json',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg':  'image/svg+xml',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2':'font/woff2',
  '.ttf':  'font/ttf',
  '.webp': 'image/webp',
};

http.createServer((req, res) => {
  let filePath = path.join(ROOT, req.url.split('?')[0]);

  // Serve / as index.html
  if (req.url === '/' || req.url === '') {
    filePath = path.join(ROOT, 'index.html');
  }

  // If file missing or directory, fallback to index.html (SPA-friendly)
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(ROOT, 'index.html');
  }

  const ext = path.extname(filePath).toLowerCase();
  const type = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': type });
    res.end(data);
  });
}).listen(PORT, () => console.log('Listening on port ' + PORT));
'@

[System.IO.File]::WriteAllText((Join-Path $STAGE 'server.js'), $serverJs, $utf8NoBom)

Write-Log "Deploying via gcloud run deploy --source ..."
$deployOut = & gcloud run deploy $ServiceName `
  --source $STAGE `
  --region $Region `
  --allow-unauthenticated `
  --project $ProjectId `
  --quiet 2>&1

$deployOut | ForEach-Object { Write-Log "[gcloud] $_" }

$urlLine = $deployOut | Select-String 'Service URL:'
if (-not $urlLine) {
  throw "Deploy finished but Service URL was not found in output. Check log: $LOG_FILE"
}

$url = $urlLine.ToString().Split(' ')[-1].Trim()
Write-Log "SUCCESS: $url"

# Print URL to console (last line)
$url
