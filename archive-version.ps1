param([Parameter(Mandatory=$true)][string]$Version)

$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $MyInvocation.MyCommand.Path
$target = Join-Path $root "versions/v$Version"

if (Test-Path -LiteralPath $target) {
  throw "版本 v$Version 已存在。历史快照不可覆盖。"
}

New-Item -ItemType Directory -Path $target | Out-Null
@('index.html','app.js','styles.css','metric-details.js','conversation-trace.js','conversation-trace.css','session-data.js','session-data.css','ai-call-records.js','ai-call-records.css','scene-strategy.js','scene-strategy.css','knowledge-readonly.js','knowledge-readonly.css','customer-management.js','customer-management.css','dashboard-effects.js','DESIGN_SYSTEM.md','README.md') | ForEach-Object {
  if (-not (Test-Path -LiteralPath (Join-Path $root $_))) { return }
  Copy-Item -LiteralPath (Join-Path $root $_) -Destination $target
}

Write-Host "已归档 v$Version → $target"





