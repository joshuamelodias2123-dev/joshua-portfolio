# Joshua Melodias — Portfolio Website

A fast, modern, fully responsive portfolio site built with plain **HTML, CSS, and JavaScript** — no frameworks, no build step, nothing to install. Every file is human-readable, so editing content is as simple as opening a file and changing the text.

## What's inside

```
joshua-portfolio/
├── index.html                  ← The main portfolio page (all sections)
├── resume.html                 ← Printable resume (Save as PDF button built in)
├── projects/
│   └── everwell/               ← Everwell Therapeutic Massage — production build of the real client site
├── vercel.json                 ← Routing rule so the Everwell services page survives a refresh on Vercel
├── css/
│   └── styles.css              ← All styling. Colors/fonts are at the top.
├── js/
│   └── main.js                 ← Mobile nav, animations, contact form
├── assets/
│   ├── favicon.svg             ← Browser tab icon ("JM" monogram)
│   └── og-image.png            ← Social sharing preview image (1200×630)
├── README.md                   ← This file
└── CUSTOMIZE.md                ← Checklist of everything to personalize
```

## Why no framework?

This is a deliberate professional choice, not a shortcut. A content portfolio has no dynamic data, no user accounts, and no state — React or Next.js would add a build pipeline, dependencies to update, and complexity with zero benefit. Plain HTML/CSS/JS means:

- **You can edit everything yourself** — open a file in Notepad/VS Code, change the words, save.
- **It loads instantly** and scores ~100 on Lighthouse performance.
- **It deploys anywhere for free** with zero configuration.
- **It never breaks** from a dependency update.

---

## Running it locally

**Option 1 — just open it (simplest):**
Double-click `index.html`. It opens in your browser and everything works.

**Option 2 — local server (exactly matches how Vercel serves it):**
If you have Node.js installed, run this from the `joshua-portfolio` folder:

```
npx serve .
```

Then open the URL it prints (usually `http://localhost:3000`).

---

## Publishing it free with GitHub + Vercel

### Step 1 — Create a GitHub account and repository
1. Go to [github.com](https://github.com) and sign up (free) if you don't have an account.
2. Click the **+** icon (top right) → **New repository**.
3. Name it `joshua-portfolio`, leave it **Public**, and click **Create repository**.

### Step 2 — Upload the site to GitHub

**Easiest way (no commands):**
1. On your new empty repository page, click **"uploading an existing file"**.
2. Drag the *entire contents* of the `joshua-portfolio` folder (not the folder itself) into the upload area — including the `css`, `js`, `assets`, and `projects` folders.
3. Click **Commit changes**.

**Or with Git commands** (from inside the `joshua-portfolio` folder):
```
git init
git add .
git commit -m "Initial portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/joshua-portfolio.git
git push -u origin main
```

### Step 3 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) and click **Sign Up** → **Continue with GitHub** (free Hobby plan).
2. Click **Add New… → Project**.
3. Find `joshua-portfolio` in the list and click **Import**.
4. Leave every setting at its default (Vercel auto-detects a static site — no framework, no build command).
5. Click **Deploy**. About 30 seconds later your site is live at `https://joshua-portfolio-xxxx.vercel.app`.

### Step 4 — After deploying
1. Copy your live URL from Vercel.
2. In `index.html`, replace `https://joshua-melodias.vercel.app/` (it appears 4 times: canonical link, `og:url`, and the two `og:image`/`twitter:image` URLs) with your real URL.
3. Re-upload the changed file to GitHub (or `git add . && git commit -m "Update URLs" && git push`). Vercel redeploys automatically on every push.

**Optional — nicer address:** In Vercel → your project → **Settings → Domains**, you can rename the free subdomain (e.g. `joshua-melodias.vercel.app`) or connect a custom domain like `joshuamelodias.ca` (~$15/year from a registrar).

---

## Editing content later

| What you want to change | Where |
|---|---|
| Headline, about text, any wording | `index.html` — it's all plain text between tags |
| Colors, fonts, spacing | Top of `css/styles.css` (the `:root { }` block) |
| Resume content | `resume.html` |
| Add/remove a project card | Copy/paste a `<article class="project-card">…</article>` block in `index.html` |
| Everwell client site | Source lives at `C:\Users\joshu\rolandwebsite\everwell\everwell` (React + Vite). After editing it, rebuild and re-copy: `npm run build -- --base=/projects/everwell/` then copy `dist\*` into `projects\everwell\` here. Don't edit the files in `projects/everwell/` directly — they're generated |
| Contact email address | Search `joshua.melodias2123@gmail.com` in `index.html` and `js/main.js` |

After any edit: save the file, push to GitHub, and Vercel updates the live site automatically.

## Upgrading the contact form (optional, 5 minutes)

The form currently opens the visitor's email app with the message pre-filled — it works with no server. To have messages delivered straight to your inbox instead:

1. Sign up free at [formspree.io](https://formspree.io) and create a form — you'll get a URL like `https://formspree.io/f/abcd1234`.
2. In `index.html`, change the form tag to:
   `<form class="contact-form" id="contact-form" action="https://formspree.io/f/abcd1234" method="POST">`
3. In `js/main.js`, delete the whole "4. Contact form" section (the form now submits natively).

## Features checklist

- ✅ Responsive on desktop, tablet, and mobile (hamburger menu under 860px)
- ✅ SEO: title, description, keywords, canonical, Open Graph + Twitter cards, JSON-LD Person schema
- ✅ Accessibility: skip link, semantic landmarks, ARIA on the menu, visible focus states, reduced-motion support, WCAG-checked contrast
- ✅ Subtle scroll-reveal animations
- ✅ Zero dependencies, zero build step
