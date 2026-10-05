#!/bin/bash
# Runs the Udupi Commerce Committee demo (Next.js dev server) at http://localhost:3000
cd "$(dirname "$0")"
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
[ -s "$HOME/.nvm/nvm.sh" ] && . "$HOME/.nvm/nvm.sh"
if ! command -v npm >/dev/null 2>&1; then
  echo "Node.js is not installed. Download it from https://nodejs.org (LTS), install, then double-click this file again."
  open "https://nodejs.org"
  read -n 1; exit 1
fi
if [ ! -d node_modules ] || [ package.json -nt node_modules/.package-lock.json ]; then
  echo "Installing packages (first run or after updates, ~1 minute)..."
  npm install || { echo "npm install failed"; read -n 1; exit 1; }
fi
( sleep 6; open "http://localhost:3000" ) &
npm run dev
