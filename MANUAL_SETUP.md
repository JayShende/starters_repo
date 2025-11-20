# Manual Setup Guide

When you clone this repository for a new project, follow these steps:

## 1. Update Project Name

Edit `package.json` in the root directory:
- Change the `"name"` field from `"inventra"` to your new project name

## 2. Update Git Remote

Remove the old remote and add your new repository:

```bash
# Remove old remote (if exists)
git remote remove origin

# Add your new repository
git remote add origin https://github.com/your-username/your-new-repo.git

# Or if using SSH
git remote add origin git@github.com:your-username/your-new-repo.git
```

## 3. Update README (Optional)

Edit `README.md` to reflect your new project name and description.

## 4. Make Initial Commit

```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

## Summary

That's it! The main things to change are:
- ✅ Project name in `package.json`
- ✅ Git remote URL

Everything else can stay the same.

