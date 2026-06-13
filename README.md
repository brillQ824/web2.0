# BrillQ - Advanced AI & Machine Learning Solutions

Official website for BrillQ - Advanced AI, Machine Learning, Deep Learning and LLM solutions company.

🌐 **Live Site:** [brillQ.today](https://brillQ.today)

---

## 📋 Overview

Modern, high-performance website built with Next.js 14 App Router, featuring comprehensive SEO optimization, multilingual support (Polish/English), and exceptional web performance.

### Key Features

- ✅ **Next.js 14 App Router** - Latest React framework with server components
- ✅ **TypeScript** - Type-safe development
- ✅ **Tailwind CSS** - Utility-first styling with custom design system
- ✅ **Framer Motion** - Smooth animations and interactions
- ✅ **Sanity CMS** - Headless CMS for content management
- ✅ **i18n Support** - Polish and English languages
- ✅ **SEO Optimized** - Complete Schema.org markup, Open Graph tags
- ✅ **Performance Optimized** - CLS < 0.1, LCP < 2.5s, modern browser targeting
- ✅ **Google Analytics** - Integrated tracking
- ✅ **Contact Form** - Email integration with Resend API
- ✅ **Mobile-First** - Fully responsive, optimized for mobile performance

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/brillQ/brilQ_web.git
   cd brilQ_web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` and add:
   - `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID
   - `RESEND_API_KEY` - Resend API key for contact form
   - `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project ID (if using CMS)

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

---

## 📁 Project Structure

```
brilQ_web/
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── [lang]/                   # Internationalized routes
│   │   │   ├── layout.tsx            # Root layout with analytics
│   │   │   ├── page.tsx              # Homepage
│   │   │   ├── kontakt/              # Contact page
│   │   │   ├── produkty/             # Products page
│   │   │   ├── kompetencje/          # Competences page
│   │   │   └── ...                   # Other pages
│   │   ├── api/                      # API routes
│   │   │   └── contact/              # Contact form handler
│   │   └── globals.css               # Global styles
│   │
│   ├── components/                   # React components
│   │   ├── shared/                   # Shared components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── GoogleAnalytics.tsx
│   │   │   └── ...
│   │   └── pages/                    # Page-specific components
│   │       ├── home/
│   │       └── contact/
│   │
│   ├── lib/                          # Utilities and helpers
│   │   ├── i18n.ts                   # Internationalization
│   │   ├── rate-limit.ts             # API rate limiting
│   │   └── utils/
│   │
│   ├── i18n/                         # Translation files
│   │   └── config.ts
│   │
│   └── middleware.ts                 # Next.js middleware (i18n)
│
├── public/                           # Static assets
│   ├── favicon.ico
│   ├── icon.svg
│   └── apple-touch-icon.png
│
├── .env.local                        # Environment variables (not in git)
├── .env.example                      # Example environment variables
├── next.config.mjs                   # Next.js configuration
├── tailwind.config.ts                # Tailwind CSS configuration
└── package.json                      # Dependencies and scripts
```

---

## 🔧 Technical Stack

### Core
- **Framework:** Next.js 14.2.5 (App Router)
- **Language:** TypeScript 5.x
- **Styling:** Tailwind CSS 3.x
- **Animations:** Framer Motion 11.x

### Features
- **CMS:** Sanity.io
- **Analytics:** Google Analytics (gtag.js)
- **Email:** Resend API
- **Forms:** React Hook Form + Zod validation
- **Icons:** Lucide React

### Performance
- **CSS Optimization:** Next.js experimental `optimizeCss` with Critters
- **Font Loading:** next/font with fallback strategy
- **Modern Browsers:** Chrome 90+, Firefox 88+, Safari 14+
- **Bundle Optimization:** Package imports optimization

---

## 📊 Performance Optimizations

### Recent Improvements
- ✅ **CSS Loading** - Experimental optimizeCss enabled, ~400ms LCP improvement
- ✅ **CLS Reduction** - Hero section layout containment, minHeight reservations
- ✅ **Scroll Handlers** - requestAnimationFrame throttling, passive listeners
- ✅ **Font Loading** - Optimized with fallback strategy and adjustFontFallback
- ✅ **Modern Targeting** - .browserslistrc for reduced polyfills (-10.6 KiB)

### Metrics Goals
- **LCP:** < 2.5s
- **CLS:** < 0.1
- **FCP:** < 1.8s
- **Speed Index:** < 3.4s

---

## 🌍 Internationalization

Supported languages:
- 🇵🇱 Polski (default)
- 🇬🇧 English

Routes are prefixed with language code:
- `/pl` - Polish homepage
- `/en` - English homepage
- `/pl/kontakt` - Polish contact page
- `/en/contact` - English contact page

---

## 📧 Contact Form

The contact form uses Resend API for email delivery.

### Setup
1. Sign up at [resend.com](https://resend.com)
2. Get your API key from [resend.com/api-keys](https://resend.com/api-keys)
3. Add to `.env.local`:
   ```
   RESEND_API_KEY=re_your_key_here
   ```
4. (Optional) Verify your domain for custom sender email

### Features
- ✅ Rate limiting (5 requests per hour per IP)
- ✅ Honeypot spam protection
- ✅ Form validation with Zod
- ✅ Email sent to: hello@brillQ.today
- ✅ Reply-to set to sender's email

---

## 🚢 Deployment

### Netlify (Current)

The site is deployed on Netlify with automatic deployments from the `main` branch.

**Environment Variables to Set:**
1. `NEXT_PUBLIC_GA_ID=G-2Z8WRFVX3R`
2. `RESEND_API_KEY=your_resend_key`
3. `NEXT_PUBLIC_SITE_URL=https://brillQ.today`

**Build Settings:**
- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18+

### Other Options
- **Vercel:** Native Next.js support, zero-config deployment
- **Custom Server:** Export static or use Node.js server

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server (port 3000)
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Making Changes

1. **Edit source files** in `src/`
2. **Test locally** with `npm run dev`
3. **Commit changes** following conventional commits:
   ```bash
   git commit -m "feat: add new feature"
   git commit -m "fix: fix bug"
   git commit -m "perf: improve performance"
   ```
4. **Push to GitHub** - Netlify auto-deploys from `main`

### Code Style
- TypeScript for type safety
- Tailwind CSS for styling (avoid inline styles when possible)
- Component-based architecture
- Mobile-first responsive design
- Accessibility-first (semantic HTML, ARIA labels)

---

## 📈 SEO Features

### Schema.org Structured Data
- ✅ Organization Schema with contact info
- ✅ WebSite Schema with search action
- ✅ BreadcrumbList Schema (all pages)
- ✅ Article/Service Schema (competences)

### Meta Tags
- ✅ Unique titles and descriptions per page
- ✅ Open Graph tags (Facebook, LinkedIn, Twitter)
- ✅ Canonical URLs
- ✅ Keywords optimization
- ✅ Favicon set (ICO, SVG, Apple Touch Icon)

### Performance
- ✅ Optimized images with Next.js Image
- ✅ Code splitting and lazy loading
- ✅ Modern browser targeting
- ✅ Optimized CSS delivery

---

## 🔒 Security

- ✅ API rate limiting (Upstash Redis or in-memory fallback)
- ✅ Honeypot spam protection on forms
- ✅ CSRF protection on API routes
- ✅ Environment variables for secrets
- ✅ Content Security Policy headers (via next.config.mjs)
- ✅ Cookie consent implementation

---

## 🤝 Contact

For questions or contributions:
- **Email:** hello@brillQ.today
- **Website:** [brillQ.today](https://brillQ.today)

---

## 📄 License

Proprietary - Copyright (c) 2026 BrillQ

---

**Status:** 🟢 Production Live

**Last Updated:** 2026-02-02

**Version:** 1.0.0
