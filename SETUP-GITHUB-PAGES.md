# GitHub Pages Setup - Complete Guide

Your portfolio code is pushed to GitHub, but Pages isn't deployed yet. Follow these exact steps:

## Step 1: Add Workflow File (GitHub Web Interface)

1. Open: **https://github.com/MusaInc/AbdulMusa**
2. Click the **Add file** dropdown → **Create new file**
3. In the "Name your file..." field, type exactly:
   ```
   .github/workflows/deploy.yml
   ```
4. Copy and paste the **entire YAML content** from the section below into the file editor
5. Scroll down and click **Commit changes...**
6. Click **Commit changes** in the dialog

### Workflow File Content (copy everything below):

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

## Step 2: Enable GitHub Pages

1. Go to **https://github.com/MusaInc/AbdulMusa/settings/pages**
2. Under **Build and deployment**:
   - **Source**: Click dropdown and select **GitHub Actions**
3. The page will auto-save

## Step 3: Monitor Deployment

1. Go to **https://github.com/MusaInc/AbdulMusa/actions**
2. You should see a workflow run starting (may take 10-30 seconds to appear)
3. Click on the workflow run to watch progress
4. Wait for the green checkmark (usually takes 1-2 minutes)

## Step 4: Visit Your Live Site

Once the workflow completes successfully, your site will be live at:

### **https://musainc.github.io/AbdulMusa/**

---

## Troubleshooting

**If the workflow doesn't start:**
- Go to Actions tab → Click "I understand my workflows, go ahead and enable them"
- Then manually trigger: Actions → Deploy to GitHub Pages → Run workflow

**If you see "404 - There isn't a GitHub Pages site here":**
- Wait 1-2 minutes after workflow completes
- Clear browser cache and refresh
- Verify Settings → Pages shows "Your site is live at..."

**If the build fails:**
- Check the Actions tab for error details
- Ensure `package.json` has all dependencies
- Verify `next.config.ts` has `output: 'export'`

---

## What's Deployed

✅ Home page with hero section
✅ Work section with 6 projects
✅ About section
✅ Contact section
✅ Individual project pages:
   - `/work/iq-league`
   - `/work/charades`
   - `/work/would-you-rather`
   - `/work/money-up`
   - `/work/sooqlina`
   - `/work/foundersflow`

## Making Updates

After setup, any push to the `main` branch will automatically rebuild and redeploy your site.

```bash
# Make changes locally
git add .
git commit -m "Update portfolio"
git push
```

The workflow will run automatically and deploy in 1-2 minutes.
