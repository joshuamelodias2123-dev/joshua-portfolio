# Personalization Checklist

Everything below is either an educated guess or a stand-in you should replace with your real details. Work through it top to bottom — most items take under a minute.

## 🔴 Must fix before sharing the site

| # | What | Where | Currently |
|---|------|-------|-----------|
| 1 | **LinkedIn URL** | `index.html` (contact section, 2 places) and `resume.html` | Guessed as `linkedin.com/in/joshua-melodias` — replace with your exact profile URL from LinkedIn → Me → View Profile |
| 2 | **Live site URL** | `index.html` head — canonical link, `og:url`, `og:image`, `twitter:image` (4 spots) | `https://joshua-melodias.vercel.app/` — replace with the real URL Vercel gives you after deploying |
| 3 | ~~Experience details~~ | ✅ Done | Roger (QA, Mar 2023–Jul 2024) and Jades Cargo (Admin Assistant, Jul 2023–Jul 2024) filled in on the site and all resumes |
| 4 | ~~Education dates~~ | ✅ Done | San Pedro College (grad Mar 2022, licensed Feb 2023) and NAIT 2024–2026 — confirmed by Joshua |

## 🟡 Should update soon

| # | What | Where | Notes |
|---|------|-------|-------|
| 5 | **Everwell live link** | `index.html` (featured project "View the live site" button) | Currently points at the production build bundled in `projects/everwell/` (source: `C:\Users\joshu\rolandwebsite\everwell\everwell`). When Everwell is deployed to its own domain, point the button there instead |
| 6 | **Project screenshots** | `index.html` (featured project left panel) | The Everwell preview is drawn with CSS. For extra polish, replace the `project-visual` div with a real screenshot of the finished site |
| 9 | **Resume PDF** | `resume.html` works as-is via the "Save as PDF" button, but you can also export it once and link a static PDF: put `Joshua-Melodias-Resume.pdf` in `assets/` and change the resume buttons in `index.html` to `href="assets/Joshua-Melodias-Resume.pdf" download` |

## 🟢 Optional polish

| # | What | Notes |
|---|------|-------|
| 10 | **Your photo** | Your headshot is in the About section (`assets/headshot.jpg`), with the original background replaced by a cool blue-gray studio gradient. To use a different photo, replace that file (keep it roughly 4:5 portrait) |
| 11 | **Sample projects → real projects** | The three sample project cards (lead automation, marketing tracker, content calendar) are honest "how I think" demos. As you finish real work — NAIT projects, freelance gigs — replace them one at a time |
| 12 | **Marketing portfolio samples** | The four copy samples are real writing created for this portfolio. Swap in pieces from actual campaigns as you produce them |
| 13 | **Phone number** | Intentionally omitted everywhere. Add one to the contact section and resume if you're comfortable publishing it |
| 14 | **Contact form upgrade** | See "Upgrading the contact form" in README.md — Formspree delivers messages to your inbox directly (free tier: 50/month) |
| 15 | **Custom domain** | `joshuamelodias.ca` or similar, ~$15/year — connect it in Vercel → Settings → Domains |

## What is already real (no changes needed)

- Your email address (`joshua.melodias2123@gmail.com`) — used in the contact section, form, resume, and footer
- The Everwell client site (`projects/everwell/`) — the real production build of your React site, with working Jane App booking, real photos, and insurer logos
- Your headshot in the About section — real photo with a brand-matched background
- The social sharing image (`assets/og-image.png`) and favicon
- All copy in the About, Skills, AI Services, and Marketing Portfolio sections — written for you, edit only if you want a different tone
