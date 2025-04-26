Write-Host "Enter the directory name where you want to install the project (from current location)" -ForegroundColor Cyan
Write-Host "Current Directory: $CurrentDir" -ForegroundColor Green
Write-Host "(You can enter '.' for current dir, or '..' to go back one level, or a full path for a custom location)" -ForegroundColor Yellow

$UserInput = Read-Host "Enter the directory"
$ProjectName = Read-Host "Enter project name"

if ($UserInput -eq ".") {
    $RootPath = Join-Path -Path $CurrentDir -ChildPath $ProjectName
}
elseif ($UserInput -match "^\.\.(\/\.\.)*$") {
    $TargetDir = Resolve-Path -Path $UserInput -ErrorAction SilentlyContinue
    if ($TargetDir) {
        $RootPath = Join-Path -Path $TargetDir -ChildPath $ProjectName 
    } else {
        Write-Host "Invalid path! Installing in the current directory instead." -ForegroundColor Red
        $RootPath = Join-Path -Path $CurrentDir -ChildPath $ProjectName 
    }
}
elseif ($UserInput -match "^([A-Za-z]:\\|/).*$") {
    $RootPath = Join-Path -Path $UserInput -ChildPath $ProjectName 
}
else {
    $RootPath = Join-Path -Path $CurrentDir -ChildPath $ProjectName
}

if (!(Test-Path -Path $RootPath)) {
    New-Item -ItemType Directory -Path $RootPath -Force | Out-Null
}

Set-Location -Path $RootPath

New-Item -ItemType Directory -Path "$RootPath\backend" | Out-Null
New-Item -ItemType Directory -Path "$RootPath\frontend" | Out-Null

Write-Host "Installing project in: $RootPath" -ForegroundColor Green
Write-Host "Setting up MERN platform..." -ForegroundColor Cyan