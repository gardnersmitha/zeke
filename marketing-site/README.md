# Zeke Marketing Website

A modern, SEO-optimized marketing website for Zeke - the AI homeowner assistant for South Shore Massachusetts.

## Features

- **Modern Tech Stack**: Next.js 14+ with App Router, React 19, TypeScript
- **Optimized for SEO**: Structured data, sitemap, robots.txt, semantic HTML
- **Blog System**: MDX-powered blog with 14 pre-written articles
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Performance Focused**: Optimized for Core Web Vitals
- **Easy Deployment**: Ready for Vercel, Netlify, or static hosting

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

## Pages

### Home Page (`/`)
- Hero section with value proposition
- Features/benefits overview
- How it works section
- Social proof/testimonials
- Use cases and CTAs

### Blog (`/blog`)
- Lists all 14 blog articles with category filtering
- Responsive card grid, SEO optimized

### Blog Posts (`/blog/[slug]`)
- Dynamic routes for all articles
- MDX content rendering
- Related posts section
- Article structured data

### About (`/about`)
- Company story and values
- What makes Zeke different
- Contact information

### Demo Request (`/demo-request`)
- Lead capture form with validation
- Location and home type selectors
- Success state

## Blog Content

The site includes 14 SEO-optimized articles covering South Shore homeowner topics:
- First-Year Homeowner Guide
- Ice Dam Prevention
- Basement Waterproofing
- Seasonal Maintenance Checklists
- Finding Reliable Contractors
- And more...

### Adding New Blog Posts

Create a new `.mdx` file in `content/blog/`:

```mdx
---
title: "Your Post Title"
description: "SEO description (150-160 characters)"
date: "2026-02-14"
category: "Category Name"
tags: ["tag1", "tag2", "tag3"]
author: "Zeke"
---

# Your Post Title

Your content here...
```

The blog listing and sitemap update automatically.

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy to Vercel

1. Push to GitHub
2. Import on Vercel
3. Deploy (no configuration needed!)

### Quick Deploy to Netlify

1. Push to GitHub
2. Import on Netlify
3. Build command: `npm run build`
4. Publish directory: `.next`

## Environment Variables

Create a `.env.local` file:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

For production, set `NEXT_PUBLIC_SITE_URL` to your domain.

## SEO Features

- ✅ Server-side rendering & static generation
- ✅ Meta tags and OpenGraph on all pages
- ✅ JSON-LD structured data (LocalBusiness, Article)
- ✅ Auto-generated sitemap and robots.txt
- ✅ Semantic HTML5 markup
- ✅ Mobile-responsive design
- ✅ Accessible (WCAG AA)

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5+
- **Styling**: Tailwind CSS 4
- **Content**: MDX for blog posts

## Project Structure

```
marketing-site/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── blog/              # Blog listing and posts
│   ├── demo-request/      # Lead capture form
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   └── ui/               # UI components
├── content/
│   └── blog/             # Blog posts (MDX)
├── lib/
│   └── blog.ts           # Blog utilities
└── public/               # Static assets
```

## Support

For questions or issues:
- Email: hello@zeke.ai
- See [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help

---

Built for South Shore homeowners
