# Chakravarthy Amajala — Portfolio Website
### chakridev.dev | AWS Cloud DevOps Engineer

A premium, production-ready personal portfolio built with modern web technologies.

---

## Features

- **Glassmorphism dark design** with black, blue, and purple palette
- **Animated particle background** with connected node network
- **Typewriter hero section** cycling through DevOps role descriptions
- **Animated counters** triggered on scroll into view
- **Smooth scroll reveal** animations throughout
- **Fully responsive** from mobile to ultrawide
- **SEO optimized** with meta tags, OG tags, robots.txt, sitemap.xml
- **Zero dependencies** — pure HTML + CSS + Vanilla JS, no framework required
- **Photo support** — replace SPD00966.JPG with any profile photo

---

## File Structure

```
portfolio/
├── index.html          # Complete portfolio (all-in-one file)
├── SPD00966.JPG        # Profile photo (replace with your photo)
├── Chakravarthy-Resume.pdf  # Your resume (for download button)
├── robots.txt          # SEO crawler directives
├── sitemap.xml         # XML sitemap for Google indexing
├── _redirects          # Cloudflare Pages routing rules
└── README.md           # This file
```

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
Replace `SPD00966.JPG` with your photo file — or update the `<img src="...">` tag in the Hero section to point to your new filename. The circular animated frame will auto-size.

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
Edit the CSS variables at the top of the `<style>` block:
```css
--accent-blue: #3b82f6;
--accent-purple: #8b5cf6;
--accent-violet: #6366f1;
--accent-cyan: #06b6d4;
```

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
- Images are lazy-loaded by default in modern browsers
- The particle canvas uses `requestAnimationFrame` for 60fps efficiency
- Fonts are preloaded via `<link rel="preconnect">` for faster render

---

## License

Personal portfolio — all content copyright Chakravarthy Amajala.
Code structure is free to adapt for your own portfolio.

---

*Built for chakridev.dev · AWS Cloud DevOps Engineer · India*
