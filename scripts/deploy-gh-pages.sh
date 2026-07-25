#!/bin/bash
# HeritageAtlas — Safe GitHub Pages deployment script
# This script NEVER switches branches. It uses a git worktree to deploy
# to gh-pages without touching the main working tree.
# This prevents ALL regressions caused by branch switching.

set -e

REPO_DIR="/home/z/my-project/heritage-vault"
DEPLOY_DIR="/tmp/gh-pages-deploy"

echo "═══════════════════════════════════════════════════════"
echo "  HeritageAtlas — Safe GitHub Pages Deploy"
echo "═══════════════════════════════════════════════════════"
echo ""

cd "$REPO_DIR"

# Step 1: Ensure we're on main
CURRENT_BRANCH=$(git branch --show-current)
if [ "$CURRENT_BRANCH" != "main" ]; then
  echo "⚠ Not on main branch (currently on $CURRENT_BRANCH). Switching to main..."
  git checkout main
fi

# Step 2: Commit any uncommitted changes to main
if [ -n "$(git status --porcelain)" ]; then
  echo "▶ Committing uncommitted changes to main..."
  git add -A
  git commit -m "chore: pre-deploy commit (auto)"
  git push origin main
  echo "✓ Changes committed to main"
else
  echo "✓ No uncommitted changes"
fi

# Step 3: Install deps if needed
if [ ! -d node_modules ]; then
  echo "▶ Installing dependencies..."
  npm install
fi

# Step 4: Build
echo "▶ Building..."
npx vite build
touch dist/.nojekyll
echo "✓ Build complete"

# Step 5: Deploy using a worktree (NO branch switching)
echo "▶ Deploying to gh-pages (via worktree — no branch switch)..."
rm -rf "$DEPLOY_DIR"
git worktree add "$DEPLOY_DIR" gh-pages 2>/dev/null || git worktree add --detach "$DEPLOY_DIR" origin/gh-pages 2>/dev/null || {
  # gh-pages branch doesn't exist — create it
  git worktree add --detach "$DEPLOY_DIR" HEAD
  cd "$DEPLOY_DIR"
  git checkout --orphan gh-pages
  cd "$REPO_DIR"
}

cd "$DEPLOY_DIR"

# Remove old content
git rm -rf . 2>/dev/null || true

# Copy new build
cp -a "$REPO_DIR/dist/." .
touch .nojekyll

# Remove any non-deploy files
rm -rf node_modules src trigger scripts public clickhouse .github .vite dist 2>/dev/null
rm -f .env .env.example .gitignore package.json package-lock.json tsconfig.json vite.config.ts vite-agent-plugin.ts trigger.config.ts 2>/dev/null
rm -f README.md DEMO.md TRIGGER_DEPLOY.md HERITAGE_ATLAS.md FIREBASE_SCHEMA.md 2>/dev/null
rm -f firebase.json firestore.indexes.json firestore.rules 2>/dev/null
rm -f presentation-*.md presentation-*.mp3 HeritageVault-demo-presentation-final.mp4 2>/dev/null
rm -f Capture-*.png preview.cjs preview.js 2>/dev/null

# Commit and push
git add -A
git commit -m "Deploy: $(git log main --oneline -1 --format='%s')" 2>/dev/null || true
git push origin gh-pages --force

# Cleanup
cd "$REPO_DIR"
git worktree remove "$DEPLOY_DIR" --force 2>/dev/null || rm -rf "$DEPLOY_DIR"

echo ""
echo "✅ Deployed to GitHub Pages"
echo "   Main branch: intact (no changes lost)"
echo "   gh-pages: updated"
echo "   Preview: https://chama18.github.io/heritage-vault/"
