# Quick Start Guide

Get the Zeke marketing site running in 5 minutes.

## 1. Install Dependencies

```bash
cd marketing-site
npm install
```

## 2. Run Development Server

```bash
npm run dev
```

Visit http://localhost:3000

## 3. What You'll See

- **Home** (`/`) - Full landing page with hero, features, testimonials
- **Blog** (`/blog`) - 14 pre-written SEO articles
- **About** (`/about`) - Company information
- **Demo Request** (`/demo-request`) - Lead capture form

## 4. Test All Routes

```bash
# Home page
http://localhost:3000

# Blog listing
http://localhost:3000/blog

# Sample blog post
http://localhost:3000/blog/first-year-homeowner-south-shore

# About page
http://localhost:3000/about

# Demo request
http://localhost:3000/demo-request

# Sitemap (auto-generated)
http://localhost:3000/sitemap.xml

# Robots.txt (auto-generated)
http://localhost:3000/robots.txt
```

## 5. Make Your First Edit

Edit the home page hero text:

```bash
# Open in your editor
marketing-site/app/page.tsx

# Find the Hero component (line 9-20)
# Change the title or subtitle
# Save and see live updates
```

## 6. Add a New Blog Post

```bash
# Create new file
marketing-site/content/blog/my-new-post.mdx
```

Add this content:

```mdx
---
title: "My New Post"
description: "This is a test post to see how easy it is"
date: "2026-02-14"
category: "Test"
tags: ["test", "demo"]
author: "Zeke"
---

# My New Post

This is the content of my post.

## A Section

Some more content here.
```

Visit http://localhost:3000/blog to see your new post!

## 7. Deploy to Vercel (Optional)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts, done!
```

Or push to GitHub and import on https://vercel.com

## Common Commands

```bash
# Development
npm run dev          # Start dev server

# Production
npm run build        # Build for production
npm start            # Start production server

# Linting
npm run lint         # Check for errors
```

## File Structure Overview

```
marketing-site/
├── app/
│   ├── page.tsx              # Home page ✓
│   ├── blog/
│   │   ├── page.tsx          # Blog listing ✓
│   │   └── [slug]/page.tsx   # Blog posts ✓
│   ├── about/page.tsx        # About page ✓
│   └── demo-request/page.tsx # Demo form ✓
├── components/ui/            # Reusable components
├── content/blog/             # 14 MDX articles
└── public/                   # Images, logo
```

## Next Steps

1. Read [README.md](./README.md) for full documentation
2. Read [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment options
3. Customize colors in `app/globals.css`
4. Update content in each page
5. Add your logo to `public/logo.svg`
6. Set up analytics (see DEPLOYMENT.md)

## Need Help?

- Check console for errors
- Read error messages (Next.js has great errors!)
- See full docs in README.md
- Email: hello@zeke.ai

## Troubleshooting

**Port 3000 already in use?**
```bash
# Use different port
npm run dev -- -p 3001
```

**Build errors?**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
```

**TypeScript errors?**
```bash
# Check types
npx tsc --noEmit
```

---

That's it! You're ready to customize and deploy. 🚀
