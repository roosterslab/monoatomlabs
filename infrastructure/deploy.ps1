# deploy.ps1 - Build all extra-websites and deploy to Cloud Run in parallel
# Live feed streams all job logs to console in real-time.
# Run:    .\infrastructure\deploy.ps1
# Logs:   infrastructure\logs\<service-name>.log
# Output: infrastructure\LINKS.md

$PROJECT_ID = "globql-freelance"
$REGION     = "us-central1"
$KEY_FILE   = "C:\Users\globql-ws\Documents\projects-2\cloud-run-static-html\.credentials\dev-sa-key.json"
$ROOT       = Split-Path $PSScriptRoot -Parent
$WEBSITES   = "$ROOT\extra-websites"
$OUTPUT     = "$PSScriptRoot\LINKS.md"
$LOGS_DIR   = "$PSScriptRoot\logs"
$DEPLOY_DIR = "$PSScriptRoot\.deploy"
$SKIP       = @("node_modules", "dist", "src", ".git")
$DIVIDER    = "-" * 70
$PALETTE    = @("Cyan","Green","Yellow","Magenta","Blue","DarkCyan","DarkGreen","DarkYellow","DarkMagenta","White","DarkBlue","Gray","DarkGray")
$BASE_PORT  = 4000   # each site gets BASE_PORT + index for local health check

# -- Prepare dirs --------------------------------------------------------------
if (-not (Test-Path $LOGS_DIR))   { New-Item -ItemType Directory -Path $LOGS_DIR   | Out-Null }
if (-not (Test-Path $DEPLOY_DIR)) { New-Item -ItemType Directory -Path $DEPLOY_DIR | Out-Null }

# -- Auth ----------------------------------------------------------------------
Write-Host "Authenticating..." -ForegroundColor Cyan
gcloud auth activate-service-account --key-file="$KEY_FILE" --quiet
gcloud config set project $PROJECT_ID --quiet
Write-Host "Authenticated`n" -ForegroundColor Green

# -- Collect sites -------------------------------------------------------------
$sites = @()
foreach ($category in @("catalog", "flex-banner", "box")) {
    $catPath = "$WEBSITES\$category"
    if (-not (Test-Path $catPath)) { continue }
    Get-ChildItem -Path $catPath -Directory | ForEach-Object {
        $site = $_.Name
        if ($SKIP -contains $site) { return }
        if (-not (Test-Path "$($_.FullName)\package.json") -and
            -not (Test-Path "$($_.FullName)\index.html")) { return }
        $sites += [PSCustomObject]@{
            Category    = $category
            Site        = $site
            Path        = $_.FullName
            ServiceName = "$category-$site"
            Port        = 0   # assigned below
        }
    }
}

# Assign unique local ports for health checks
for ($i = 0; $i -lt $sites.Count; $i++) { $sites[$i].Port = $BASE_PORT + $i }

Write-Host "Found $($sites.Count) sites to deploy:" -ForegroundColor Cyan
$sites | ForEach-Object { Write-Host "  $($_.ServiceName)  (health-check port $($_.Port))" }
Write-Host ""

# -- Deploy script block -------------------------------------------------------
$deployBlock = {
    param($s, $PROJECT_ID, $REGION, $LOGS_DIR, $DEPLOY_DIR, $Port)

    $logFile = "$LOGS_DIR\$($s.ServiceName).log"
    $sep     = "=" * 60

    function L($msg) {
        "[$(Get-Date -Format 'HH:mm:ss')] $msg" | Add-Content $logFile -Encoding UTF8
    }

    $sep                                                    | Set-Content  $logFile -Encoding UTF8
    "Service : $($s.ServiceName)"                          | Add-Content  $logFile -Encoding UTF8
    "Started : $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" | Add-Content  $logFile -Encoding UTF8
    $sep                                                    | Add-Content  $logFile -Encoding UTF8

    $result = [PSCustomObject]@{
        ServiceName   = $s.ServiceName
        Category      = $s.Category
        Site          = $s.Site
        URL           = ""
        Status        = "failed"
        HealthCheck   = "not run"
        LogFile       = $logFile
    }

    try {
        if (Test-Path "$($s.Path)\package.json") {
            L "npm install..."
            $o = & npm install --prefix $s.Path 2>&1
            $o | ForEach-Object { L "  [install] $_" }

            L "npm run build..."
            $o = & npm run build --prefix $s.Path 2>&1
            $o | ForEach-Object { L "  [build] $_" }

            if ($LASTEXITCODE -ne 0) { throw "Build failed (exit $LASTEXITCODE)" }
            L "Build OK."
        } else {
            L "Static site - skipping build."
        }

        $src = "$($s.Path)\dist"
        if (-not (Test-Path $src)) { $src = $s.Path }
        L "Source: $src"

        # Stage into .deploy/<service-name>
        $stagePath = "$DEPLOY_DIR\$($s.ServiceName)"
        if (Test-Path $stagePath) { Remove-Item $stagePath -Recurse -Force }
        New-Item -ItemType Directory -Path $stagePath | Out-Null
        Copy-Item "$src\*" $stagePath -Recurse -Force
        L "Staged to: $stagePath"

        # Zero-dependency Node.js static server — no npm install, no npx, no downloads
        $utf8NoBom = [System.Text.UTF8Encoding]::new($false)
        $pkgJson = '{ "name": "static-site", "version": "1.0.0", "scripts": { "start": "node server.js" } }'
        [System.IO.File]::WriteAllText("$stagePath\package.json", $pkgJson, $utf8NoBom)

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
        [System.IO.File]::WriteAllText("$stagePath\server.js", $serverJs, $utf8NoBom)

        # -- Health check: verify staged output has index.html and assets -------
        L "Health check: verifying staged output..."
        $checkPassed = $false
        $indexFile  = "$stagePath\index.html"
        $assetsDir  = "$stagePath\assets"

        if (-not (Test-Path $indexFile)) {
            L "Health check FAILED: index.html not found in staged folder"
        } elseif ((Get-Item $indexFile).Length -eq 0) {
            L "Health check FAILED: index.html is empty"
        } else {
            $assetCount = if (Test-Path $assetsDir) { (Get-ChildItem $assetsDir).Count } else { 0 }
            L "Health check PASSED: index.html found, $assetCount asset(s) in /assets"
            $checkPassed = $true
        }

        $result.HealthCheck = if ($checkPassed) { "PASSED" } else { "FAILED" }
        if (-not $checkPassed) { throw "Health check failed - staged output is incomplete. Skipping deploy." }

        # -- Deploy to Cloud Run -----------------------------------------------
        L "gcloud run deploy $($s.ServiceName) ..."
        $deployOut = gcloud run deploy $s.ServiceName `
            --source $stagePath `
            --region $REGION `
            --allow-unauthenticated `
            --project $PROJECT_ID `
            --quiet 2>&1

        $deployOut | ForEach-Object { L "  [gcloud] $_" }

        $urlLine = $deployOut | Select-String "Service URL:"
        if (-not $urlLine) { throw "Service URL not found in gcloud output" }

        $url = $urlLine.ToString().Split(" ")[-1].Trim()
        $result.URL    = $url
        $result.Status = "ok"
        L "SUCCESS: $url"

    } catch {
        L "FAILED: $($_.Exception.Message)"
    }

    $sep                                                    | Add-Content $logFile -Encoding UTF8
    "Finished: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')" | Add-Content $logFile -Encoding UTF8
    "Status  : $($result.Status.ToUpper())"               | Add-Content $logFile -Encoding UTF8
    "URL     : $($result.URL)"                             | Add-Content $logFile -Encoding UTF8
    $sep                                                    | Add-Content $logFile -Encoding UTF8

    return $result
}

# -- Assign colors and pre-create log files ------------------------------------
$colorMap = @{}
$logFiles = @{}
$filePos  = @{}

for ($i = 0; $i -lt $sites.Count; $i++) {
    $s   = $sites[$i]
    $log = "$LOGS_DIR\$($s.ServiceName).log"
    $colorMap[$s.ServiceName] = $PALETTE[$i % $PALETTE.Count]
    $logFiles[$s.ServiceName] = $log
    $filePos[$log]            = 0
    "" | Set-Content $log -Encoding UTF8
}

# -- Launch all jobs -----------------------------------------------------------
Write-Host "Launching $($sites.Count) parallel jobs..." -ForegroundColor Cyan
Write-Host $DIVIDER -ForegroundColor DarkGray

$jobs = $sites | ForEach-Object {
    $s = $_
    Start-Job -ScriptBlock $deployBlock -ArgumentList $s, $PROJECT_ID, $REGION, $LOGS_DIR, $DEPLOY_DIR, $s.Port
}

# -- Live feed: poll all log files until all jobs done -------------------------
$label = 30

while ($true) {
    foreach ($svc in $logFiles.Keys) {
        $log   = $logFiles[$svc]
        $color = $colorMap[$svc]
        if (-not (Test-Path $log)) { continue }

        $lines = Get-Content $log -Encoding UTF8 -ErrorAction SilentlyContinue
        if (-not $lines) { continue }

        $prev = $filePos[$log]
        if ($lines.Count -gt $prev) {
            $lines[$prev..($lines.Count - 1)] | ForEach-Object {
                Write-Host "$( "[$svc]".PadRight($label) ) $_" -ForegroundColor $color
            }
            $filePos[$log] = $lines.Count
        }
    }

    $running = $jobs | Where-Object { $_.State -eq "Running" }
    if (-not $running) { break }

    Start-Sleep -Milliseconds 300
}

# -- Final flush ---------------------------------------------------------------
foreach ($svc in $logFiles.Keys) {
    $log   = $logFiles[$svc]
    $color = $colorMap[$svc]
    if (-not (Test-Path $log)) { continue }
    $lines = Get-Content $log -Encoding UTF8 -ErrorAction SilentlyContinue
    if (-not $lines) { continue }
    $prev = $filePos[$log]
    if ($lines.Count -gt $prev) {
        $lines[$prev..($lines.Count - 1)] | ForEach-Object {
            Write-Host "$( "[$svc]".PadRight($label) ) $_" -ForegroundColor $color
        }
    }
}

# -- Collect results -----------------------------------------------------------
$results = @()
foreach ($job in $jobs) {
    $r = Receive-Job -Job $job -Wait -AutoRemoveJob
    $results += $r
}

# -- Summary -------------------------------------------------------------------
Write-Host ""
Write-Host $DIVIDER -ForegroundColor DarkGray
Write-Host "SUMMARY" -ForegroundColor Cyan
Write-Host $DIVIDER -ForegroundColor DarkGray

foreach ($r in ($results | Sort-Object ServiceName)) {
    if ($r.Status -eq "ok") {
        Write-Host "  [OK  ] $($r.ServiceName.PadRight(30)) $($r.URL)" -ForegroundColor Green
    } else {
        Write-Host "  [FAIL] $($r.ServiceName.PadRight(30)) check logs\$($r.ServiceName).log" -ForegroundColor Red
    }
}

# -- Write LINKS.md ------------------------------------------------------------
$mdLines = @(
    "# Cloud Run Deployment Links",
    "",
    "Generated: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')",
    "",
    "| Service | Category | Site | Status | URL |",
    "|---------|----------|------|--------|-----|"
)
foreach ($r in ($results | Sort-Object ServiceName)) {
    $urlVal    = if ($r.URL)             { $r.URL } else { "n/a" }
    $statusVal = if ($r.Status -eq "ok") { "OK" }   else { "FAILED" }
    $mdLines  += "| $($r.ServiceName) | $($r.Category) | $($r.Site) | $statusVal | $urlVal |"
}
$mdLines | Set-Content $OUTPUT -Encoding UTF8

Write-Host ""
Write-Host "Links : $OUTPUT" -ForegroundColor Cyan
Write-Host "Logs  : $LOGS_DIR"
