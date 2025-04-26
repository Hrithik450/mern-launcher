echo -e "\e[36mEnter the directory name where you want to install the project (from current location)\e[0m"
echo -e "\e[32mCurrent Directory: $CurrentDir\e[0m"
echo -e "\e[33m(You can enter '.' for current dir, '..' to go back one level, or a full path for a custom location)\e[0m"

read -p "Enter the directory: " UserInput
read -p "Enter project name: " ProjectName

if [[ "$UserInput" == "." ]]; then
    RootPath="$CurrentDir/$ProjectName"
elif [[ "$UserInput" =~ ^\.\.(\/\.\.)*$ ]]; then
    TargetDir=$(realpath "$UserInput" 2>/dev/null)
    if [[ -d "$TargetDir" ]]; then
        RootPath="$TargetDir/$ProjectName"
    else
        echo -e "\e[31mInvalid path! Installing in the current directory instead.\e[0m"
        RootPath="$CurrentDir/$ProjectName"
    fi
elif [[ "$UserInput" =~ ^/.* || "$UserInput" =~ ^[A-Za-z]:\\.* ]]; then
    RootPath="$UserInput/$ProjectName"
else
    RootPath="$CurrentDir/$ProjectName"
fi

mkdir -p "$RootPath"
cd "$RootPath" || exit

echo -e "\e[32mInstalling project in: $RootPath\e[0m"
echo "Setting up MERN platform..."