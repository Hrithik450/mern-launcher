#!/bin/bash
RED='\033[0;31m'       
GREEN='\033[0;32m'   
YELLOW='\033[0;33m'    
BLUE='\033[0;34m' 

CurrentDir=$(pwd)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

source "$SCRIPT_DIR/base_setup.sh"
source "$SCRIPT_DIR/backend_setup.sh"
source "$SCRIPT_DIR/frontend_setup.sh"

echo "✅ Basic MERN platform setup completed successfully!"
echo "Navigate to 'backend' and run 'npm run dev' to start the backend."
echo "Navigate to 'frontend' and run 'npm run dev' to start the frontend."
echo "👉 Before navigating, make sure update your env files."