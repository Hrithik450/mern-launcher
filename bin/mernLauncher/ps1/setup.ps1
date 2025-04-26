$CurrentDir = (Get-Location).Path

# utils setup
. "$PSScriptRoot\utils.ps1"

# core setup
. "$PSScriptRoot\base_setup.ps1"

# Backend setup
. "$PSScriptRoot\backend_setup.ps1"

# Frontend setup
. "$PSScriptRoot\frontend_setup.ps1"

Write-Host "✅ Basic MERN platform setup completed successfully!" -ForegroundColor Green
Write-Host "👉 Navigate to 'backend' and run 'npm run dev' to start the backend." -ForegroundColor Yellow
Write-Host "👉 Navigate to 'frontend' and run 'npm run dev' to start the frontend." -ForegroundColor Yellow
Write-Host "👉 Before navigating, make sure update your env files." -ForegroundColor Cyan