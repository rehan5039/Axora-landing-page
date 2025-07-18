#!/bin/bash

# Colors for terminal output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}=== Axora Deployment Helper ===${NC}"
echo -e "${YELLOW}This script will help you deploy your Axora website to GitHub and Netlify${NC}"
echo ""

# Check if git is installed
if ! command -v git &> /dev/null; then
    echo -e "${YELLOW}Git is not installed. Please install Git first.${NC}"
    exit 1
fi

# Check if the directory is a git repository
if [ ! -d .git ]; then
    echo -e "${YELLOW}Initializing Git repository...${NC}"
    git init
    echo -e "${GREEN}Git repository initialized!${NC}"
fi

# Ask for GitHub repository URL
echo -e "${YELLOW}Enter your GitHub repository URL (e.g., https://github.com/yourusername/axora.git):${NC}"
read REPO_URL

# Add all files to git
echo -e "${YELLOW}Adding files to Git...${NC}"
git add .

# Commit changes
echo -e "${YELLOW}Enter a commit message (e.g., 'Initial commit'):${NC}"
read COMMIT_MESSAGE
git commit -m "$COMMIT_MESSAGE"
echo -e "${GREEN}Changes committed!${NC}"

# Add remote repository if not already added
if ! git remote | grep -q "origin"; then
    echo -e "${YELLOW}Adding remote repository...${NC}"
    git remote add origin "$REPO_URL"
    echo -e "${GREEN}Remote repository added!${NC}"
fi

# Push to GitHub
echo -e "${YELLOW}Pushing to GitHub...${NC}"
git push -u origin master || git push -u origin main
echo -e "${GREEN}Successfully pushed to GitHub!${NC}"

# Open Netlify deploy page
echo -e "${YELLOW}Opening Netlify deploy page...${NC}"
echo -e "${GREEN}To deploy to Netlify:${NC}"
echo -e "1. Sign in to Netlify"
echo -e "2. Click 'Import from Git'"
echo -e "3. Select your GitHub repository"
echo -e "4. Configure build settings (build command: 'npm run build', publish directory: 'dist')"
echo -e "5. Click 'Deploy site'"

# Open Netlify in browser based on OS
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open "https://app.netlify.com/start"
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "win32" ]]; then
    # Windows
    start "https://app.netlify.com/start"
else
    # Linux
    xdg-open "https://app.netlify.com/start"
fi

echo -e "${GREEN}Deployment process completed!${NC}" 