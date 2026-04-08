# Lamtoso

A personal demo and learning lab. I'm using this repo to:
- Learn Git and GitHub
- Build with Next.js and React
- Explore components from [21st.dev](https://21st.dev)

---

## Tech Stack

| Tool | What it is |
|------|-----------|
| **Next.js** | A React framework — React gives you components, Next.js adds routing, file structure, and more |
| **TypeScript** | JavaScript with types — helps catch mistakes before you run the code |
| **Tailwind CSS** | Style things by adding class names directly in your HTML/JSX, instead of writing a separate CSS file |
| **shadcn/ui** | A library of pre-built, copy-paste React components |
| **21st.dev** | A marketplace of beautiful UI components built on shadcn/ui |

---

## Getting Started

```bash
# 1. Install dependencies (creates node_modules/)
npm install

# 2. Run the dev server
npm run dev

# 3. Open your browser to:
# http://localhost:3000
```

---

## Git Quick Reference

> **Git** lives on your computer. **GitHub** is the cloud backup + collaboration layer.

### The 3-step commit loop
Every time you make changes you want to save:

```bash
# Step 1: See what changed
git status

# Step 2: Stage the changes (choose what to include in this commit)
git add .                     # add everything
git add src/app/page.tsx      # or add a specific file

# Step 3: Save a snapshot with a message
git commit -m "feat: describe what you did"
```

### Push to GitHub
```bash
# Send your commits to GitHub (the cloud)
git push
```

### Branches
A branch is a parallel copy of your code. You work on it without affecting the main version.

```bash
git checkout -b feature/my-new-thing   # create + switch to a new branch
git checkout main                       # switch back to main
git merge feature/my-new-thing          # merge changes back in
```

### Useful commands
```bash
git log --oneline       # see commit history (compact)
git diff                # see what changed since last commit
git stash               # temporarily hide changes
git stash pop           # bring them back
```

### Good commit message format
```
type: short description

Types:
  feat     - a new feature
  fix      - a bug fix
  chore    - setup, config, maintenance
  docs     - documentation only
  style    - formatting, no logic change
  refactor - restructuring code without changing behavior
```

---

## VSCode Tips

Install these extensions for the best experience:

| Extension | Why |
|-----------|-----|
| **GitLens** | See who changed what, visual Git history |
| **ESLint** | Highlights code problems as you type |
| **Tailwind CSS IntelliSense** | Autocomplete for Tailwind class names |
| **Prettier** | Auto-formats your code on save |

**Keyboard shortcuts:**
- `Ctrl+Shift+G` — Open the Source Control panel (commit without terminal)
- `` Ctrl+` `` — Open the integrated terminal
- `Ctrl+Shift+P` — Command palette (search for anything)

---

## Learning Log

Track what you've learned here:

- [ ] Understand what Git is vs. GitHub
- [ ] Make my first commit
- [ ] Push to GitHub
- [ ] Create a branch
- [ ] Open a Pull Request
- [ ] See GitHub Actions run automatically
- [ ] Add my first 21st.dev component
