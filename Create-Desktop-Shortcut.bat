@echo off
rem Creates a desktop shortcut for "English at Ease". Run once.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0tools\create-shortcut.ps1"
echo.
pause
