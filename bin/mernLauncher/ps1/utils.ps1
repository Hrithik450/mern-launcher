function Show-Menu {
    param (
        [string]$Prompt,
        [string[]]$Items
    )

    $index = 0
    $selected = $false

    while (-not $selected) {
        Clear-Host
        Write-Host "$Prompt`n" -ForegroundColor Cyan

        for ($i = 0; $i -lt $Items.Length; $i++) {
            if ($i -eq $index) {
                Write-Host "> " -NoNewline -ForegroundColor Yellow
                Write-Host $Items[$i] -ForegroundColor Green
            } else {
                Write-Host "  " -NoNewline
                Write-Host $Items[$i] -ForegroundColor White
            }
        }

        $key = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown").VirtualKeyCode

        switch ($key) {
            38 { 
                if ($index -gt 0) { $index-- }
            }
            40 { 
                if ($index -lt $Items.Length - 1) { $index++ }
            }
            13 { 
                $selected = $true
            }
        }
    }

    return $Items[$index]
}