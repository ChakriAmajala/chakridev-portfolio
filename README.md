# Chakravarthy Amajala — Portfolio Website
### chakridev.dev | AWS Cloud DevOps Engineer

A premium, production-ready personal portfolio built with modern web technologies.

---

## Features

- **Premium dark design system** — deep near-black canvas, blue → violet → cyan gradient accents, subtle animated mesh glow background, and film-grain texture
- **Scroll-linked progress bar + glass navigation** that blurs and elevates on scroll, with active-section tracking
- **Cinematic hero entrance** — staggered fade/slide-up reveals, gradient headline, glowing photo card with floating stat chips
- **Auto-scrolling tech marquee** beneath the hero, showcasing the core stack at a glance
- **Scroll-triggered reveal animations** throughout every section (IntersectionObserver-based, GPU-friendly)
- **Animated skill progress bars** and **animated stat counters** triggered on scroll into view
- **Cursor-follow ambient glow** and **magnetic button hover** micro-interactions (desktop only, auto-disabled on touch)
- **Fully responsive** from mobile to ultrawide, with dedicated mobile navigation
- **Respects `prefers-reduced-motion`** — all animations disable gracefully
- **SEO optimized** with meta tags, OG tags, robots.txt, sitemap.xml
- **Zero dependencies** — pure HTML + CSS + Vanilla JS, no framework, no build step
- **Photo support** — replace `profile.png` (or the `SPD00966.JPG` fallback) with any profile photo

---

## File Structure

```
portfolio/
├── index.html                  # Complete portfolio (all styles + scripts inline)
├── assets/
│   ├── css/style.css           # Reference copy of design tokens (not loaded by index.html)
│   ├── js/main.js              # Reference copy of core JS functions
│   ├── images/                 # profile.png, SPD00966.JPG (fallback), og-image.png
│   └── icons/                  # favicons, apple-touch-icon, android chrome icons
├── Chakravarthy-Resume.pdf     # Resume (served by the Download Resume button)
├── robots.txt                  # SEO crawler directives
├── sitemap.xml                 # XML sitemap for Google indexing
├── site.webmanifest            # PWA manifest (theme color, icons)
├── _redirects                  # Cloudflare Pages routing rules
└── README.md                   # This file
```

> **Note:** `index.html` is intentionally self-contained (all CSS/JS embedded) for zero-dependency, instant-load hosting on any static host. The files in `assets/css` and `assets/js` are kept as readable reference copies of the current design tokens and core functions — update both together if you change the design.

---

## Quick Start (Local Preview)

```bash
# Serve locally with Python (no install needed)
cd portfolio/
python3 -m http.server 8080

# Then open: http://localhost:8080
```

Or use VS Code Live Server / any static server.

---

## Deploying to Cloudflare Pages

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/ChakriAmajala/portfolio.git
git push -u origin main
```

### Step 2: Connect to Cloudflare Pages

1. Go to [dash.cloudflare.com](https://dash.cloudflare.com)
2. Click **Workers & Pages** → **Create application** → **Pages**
3. Click **Connect to Git** and select your repository
4. Build settings:
   - **Framework preset**: None
   - **Build command**: *(leave empty)*
   - **Build output directory**: `/` (root)
5. Click **Save and Deploy**

### Step 3: Custom Domain (chakridev.dev)

1. In Cloudflare Pages → your project → **Custom domains**
2. Click **Set up a custom domain** → enter `chakridev.dev`
3. If your domain is already on Cloudflare DNS, it auto-configures
4. If not: update your domain registrar nameservers to Cloudflare's

### Step 4: (Optional) Add Resume PDF

1. Name your resume PDF: `Chakravarthy-Resume.pdf`
2. Place it in the portfolio root folder
3. Push to GitHub — Cloudflare Pages will serve it automatically
4. The **Download CV** button will auto-serve it

---

## Customization Guide

### Profile Photo
Replace `assets/images/profile.png` with your photo (same filename), or update the `<img src="...">` tag in the Hero section to point to your new filename. `SPD00966.JPG` is used automatically as a fallback if `profile.png` fails to load.

### Update Contact Info
All contact details are in the `index.html`. Search for:
- `chakridevops16@gmail.com`
- `8712358118`
- `chakravarthy-amajala-a4602b399`
- `ChakriAmajala`

### Add Certifications
Find the Achievements section and add a new `.achievement-card` block:
```html
<div class="achievement-card">
  <div class="achievement-icon">🏆</div>
  <div class="achievement-metric">AWS SAA</div>
  <h3>AWS Solutions Architect</h3>
  <p>Associate level certification demonstrating core AWS architecture knowledge.</p>
</div>
```

### Change Color Palette
Edit the CSS variables at the top of the first `<style>` block in `index.html` (the `:root` design tokens):
```css
--blue:   #5b8def;
--violet: #8b7cff;
--cyan:   #22d3ee;
--green:  #34d399;
--amber:  #fbbf24;
```
The `--grad-1` and `--grad-text` gradients are built from these — update them too if you change the base colors.

---

## SEO Checklist

- [x] `<title>` tag with name + role
- [x] `<meta name="description">` with targeted keywords
- [x] `<meta name="keywords">` with DevOps terms
- [x] Open Graph (`og:title`, `og:description`, `og:url`, `og:image`)
- [x] Twitter Card meta tags
- [x] `<link rel="canonical">` pointing to chakridev.dev
- [x] `robots.txt` allowing all crawlers
- [x] `sitemap.xml` with all page sections
- [ ] Add `og-image.png` (1200×630px) for social sharing previews
- [ ] Verify in Google Search Console after launch

---

## Performance Tips

- The portfolio is a single HTML file — no JS framework, no build step, instant load
- Non-critical images (logos, secondary project art) are lazy-loaded; the hero photo loads eagerly for a fast first paint
- All motion (cursor glow, magnetic buttons, mesh drift, marquee) uses CSS transforms/opacity or `requestAnimationFrame`, and is GPU-friendly
- All animations respect `prefers-reduced-motion` and disable automatically
- Fonts are preloaded via `<link rel="preconnect">` for faster render

---

## License

Personal portfolio — all content copyright Chakravarthy Amajala.
Code structure is free to adapt for your own portfolio.

---

*Built for chakridev.dev · AWS Cloud DevOps Engineer · India*
