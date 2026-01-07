# GitHub Pages Deployment Guide

Your portfolio has been successfully pushed to: **https://github.com/MusaInc/AbdulMusa**

## Setup Instructions

### 1. Add GitHub Actions Workflow

The workflow file couldn't be pushed due to token permissions. Add it manually:

1. Go to your repository: https://github.com/MusaInc/AbdulMusa
2. Click on **Add file** > **Create new file**
3. Name it: `.github/workflows/deploy.yml`
4. Copy the content below:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Add .nojekyll
        run: touch ./out/.nojekyll

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

5. Commit the file

### 2. Enable GitHub Pages

1. Go to your repository **Settings**
2. Navigate to **Pages** (in the left sidebar)
3. Under **Build and deployment**:
   - Source: **GitHub Actions**
4. Save

### 3. Your Site Will Be Live At

**https://musainc.github.io/AbdulMusa/**

The GitHub Action will run automatically after adding the workflow file.

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Updating Projects

Edit `lib/projects.ts` to add or modify projects.
