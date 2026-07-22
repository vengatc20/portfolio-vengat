# Vengatesh Chakravarthy — Portfolio

A static, single-page portfolio site with every piece of work filed under a
fixed set of category headings, plus a full resume-based About/Skills
section. Built with plain HTML/CSS/JS — no build step, no dependencies —
so it publishes directly on **GitHub Pages**.

## What changed in this update

- **Brighter accent** — orange bumped from a muted clay tone to a vivid
  `#FF6A1A`. The "." after "Vengatesh" in the hero now matches it too, same
  as the chip dots and every other highlight on the page.
- **Section number labels removed** — "01 — Selected Work", "02 — About",
  "03 — Skills & Tools", "04 — Get In Touch" no longer appear; each section
  now leads straight with its title.
- **Contact section simplified** — the "Let's Print Something New." heading
  and the "Open to freelance..." line are gone; the section is just the
  contact links now.
- **Mobile responsiveness pass** — added a sub-480px breakpoint tightening
  side padding and grid columns so cards don't crowd on small phones, and
  fixed the "Résumé" tab's styling inside the open mobile menu (it was
  losing its pill shape at that breakpoint). The `download` attribute is
  used everywhere the résumé is linked, which triggers a real download on
  Android/Chrome and a save-able preview on iOS Safari (a platform
  limitation, not something HTML can override).
- **Résumé PDF re-exported** with the brighter accent to match.

## Earlier changes (still in effect)

- **Accent colour added** — a Claude-type clay orange (`#CC785C`) now carries
  every highlight: section numbers, hover states, tags, buttons, the résumé
  tab. Base palette is still white / black / grey.
- **Skills are now capsules, not tables.** Both skill groups (Design &
  Presentation / Communication & Business) render as wrapped pill tags.
- **Tools are now an infographic grid** — one card per tool category, each
  with a two-letter monogram badge and its tools as small tags, instead of
  a dense table.
- **PowerPoint Toolkit is now an 11-card icon grid** — numbered cards with a
  short title and one-line description each, instead of a bulleted block.
- **"Resume" is a nav tab.** It sits in the top navigation and downloads
  the PDF directly (`download` attribute) rather than opening a new tab —
  same behaviour on the About-section button and the Contact-section link.
- **The résumé PDF itself was redesigned** — `assets/resume/
  Vengatesh_Chakravarthy_Resume.pdf` is no longer the original plain
  document; it's a single-page, two-column résumé built in the same
  white/black/grey/orange system as the site (Inter type, capsule skill
  tags, accent section markers). Generated from `resume.html` in this
  repo's design so it can be edited as HTML and re-exported any time.

- **Notepad category removed.** The category list is: Badges,
  Certificates, Design Digital, Emailers, Logo, Newsletter, Social Media,
  Standees, Team Background, Web Ads.
- **Badges section filled in** with the 5 recognition badges supplied
  (Customer Excellence Champion, Dance Club, Creative Writing Club,
  Competency Excellence Leader, ACE Project).
- **Contact info** — email `vengatc20@gmail.com`, mobile
  `+91 97509 75073`, LinkedIn
  `https://www.linkedin.com/in/vengatesh-c-66398a16/`.
- **About section** built from the résumé: summary, a 5-role experience
  timeline (BMC Software, VMware, Accenture, Infosys, Wipro), and education
  (Leeds Beckett University, University of Madras).

## What's inside

```
index.html                  the whole site (one page)
assets/
  css/style.css              design system + layout (white / black / grey, Inter)
  js/data.js                 every work item: title, category, spec, dimensions
  js/main.js                 renders category blocks, lightbox, reveal animation
  img/full/                  web-sized images shown in the lightbox (max 1800px)
  img/thumb/                 small grid thumbnails (max 700px)
  pdf/                       the presentation decks, linked directly
  pdf_thumb/                 cover-page thumbnails for each deck
  resume/                    Vengatesh_Chakravarthy_Resume.pdf
```

## Moving a piece to a different category

Open `assets/js/data.js`, find the item by its `title`, and change its
`"cat"` value to one of: `badges`, `certificates`, `design-digital`,
`emailers`, `logo`, `newsletter`, `social-media`, `standees`,
`team-background`, `web-ads`. Save, refresh — no rebuild step.

## Before you publish — a couple of things worth checking

1. **Skim the About/Skills copy** — it's built directly from your résumé
   and the tools list you provided; check names, dates and tool names read
   the way you want.
2. **Page title / meta description** — top of `index.html`, inside `<head>`.

## Publish it on GitHub Pages

**Option A — GitHub's web UI (no command line needed)**
1. Create a new repository on GitHub, e.g. `vengatesh-portfolio`.
2. On the repo page, click **Add file → Upload files**, then drag in
   everything from this folder (`index.html`, `assets/`, `README.md`).
   Commit the upload.
3. Go to **Settings → Pages**. Under "Build and deployment", set
   **Source: Deploy from a branch**, branch **main**, folder **/ (root)**.
   Save.
4. Wait a minute, then your site is live at:
   `https://<your-username>.github.io/vengatesh-portfolio/`

**Option B — command line / git**
```bash
cd vengatesh-portfolio        # this folder
git init
git add .
git commit -m "Portfolio launch"
git branch -M main
git remote add origin https://github.com/<your-username>/vengatesh-portfolio.git
git push -u origin main
```
Then enable Pages the same way as step 3 above.

## Notes

- Everything is a static file — no server, database, or framework needed.
  Preview locally by opening `index.html` directly, or run
  `python3 -m http.server` from this folder.
- Font (Inter) loads from Google Fonts via a `<link>` in `index.html`.
- Total repo size is roughly 77MB, mostly from the PDF decks — well within
  GitHub's limits.
