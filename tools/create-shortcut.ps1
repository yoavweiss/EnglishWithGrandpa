# Creates a desktop shortcut named "English at Ease" (in Hebrew) that opens the app
# in its own window, with the app icon. Run via Create-Desktop-Shortcut.bat.
$ErrorActionPreference = "Stop"

$root = Split-Path -Parent $PSScriptRoot
$index = Join-Path $root "index.html"
$icon = Join-Path $root "icon.ico"
$url = "file:///" + ($index -replace "\\", "/")

# Hebrew name built from character codes so this file stays plain ASCII
$name = -join ([char[]](0x05D0,0x05E0,0x05D2,0x05DC,0x05D9,0x05EA,0x0020,0x05D1,0x05E0,0x05D7,0x05EA))

$candidates = @(
  "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
  "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
  "${env:ProgramFiles(x86)}\Google\Chrome\Application\chrome.exe",
  "$env:LocalAppData\Google\Chrome\Application\chrome.exe"
)
$browser = $candidates | Where-Object { $_ -and (Test-Path $_) } | Select-Object -First 1

$desktop = [Environment]::GetFolderPath("Desktop")
$shell = New-Object -ComObject WScript.Shell
$lnk = $shell.CreateShortcut((Join-Path $desktop "$name.lnk"))
if ($browser) {
  $lnk.TargetPath = $browser
  $lnk.Arguments = "--app=`"$url`" --window-size=1200,900"
  $lnk.WorkingDirectory = Split-Path -Parent $browser
} else {
  $lnk.TargetPath = $index
}
$lnk.IconLocation = "$icon,0"
$lnk.Description = $name
$lnk.Save()

Write-Host ""
Write-Host "Done. A shortcut was created on the desktop." -ForegroundColor Green
if (-not $browser) { Write-Host "Edge/Chrome not found - the shortcut opens the default browser." }
