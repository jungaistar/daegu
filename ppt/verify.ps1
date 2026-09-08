# 슬라이드를 PNG 로 내보내 눈으로 확인한다 (PowerPoint COM)
param([string]$Pptx, [string]$OutDir)
$ErrorActionPreference = 'Stop'
if (Test-Path $OutDir) { Remove-Item $OutDir -Recurse -Force }
New-Item -ItemType Directory -Path $OutDir | Out-Null
$app = New-Object -ComObject PowerPoint.Application
$pres = $app.Presentations.Open($Pptx, $true, $false, $false)
$pres.Export($OutDir, "PNG", 1600, 900)
$pres.Close()
$app.Quit()
[System.Runtime.InteropServices.Marshal]::ReleaseComObject($app) | Out-Null
Write-Output ("exported: " + (Get-ChildItem $OutDir -Filter *.PNG).Count)
