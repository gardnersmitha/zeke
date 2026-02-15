# Zeke Marketing Site Deployment Guide

This marketing site is built with Next.js 14+ and optimized for easy deployment to various platforms.

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment Options

### Option 1: Vercel (Recommended)

The easiest way to deploy this Next.js app is through Vercel:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure everything
4. Set environment variables (see below)
5. Deploy!

**Advantages:**
- Zero configuration required
- Automatic deployments on git push
- Built-in CDN and edge optimization
- Free SSL certificates
- Preview deployments for PRs

### Option 2: Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
4. Set environment variables
5. Deploy!

### Option 3: Static Export

For hosting on any static site host (AWS S3, Cloudflare Pages, etc.):

1. Update `next.config.ts` to add:
   ```typescript
   const nextConfig: NextConfig = {
     output: 'export',
     // ... rest of config
   };
   ```

2. Build the static site:
   ```bash
   npm run build
   ```

3. The static files will be in the `out/` directory

4. Upload the `out/` directory to your static host

**Note:** Static export doesn't support:
- API routes
- Image optimization (images will be unoptimized)
- Dynamic SSR features

### Option 4: Docker

1. Create a `Dockerfile`:
   ```dockerfile
   FROM node:20-alpine AS base

   # Dependencies
   FROM base AS deps
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci

   # Builder
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   # Runner
   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV production

   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs

   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next ./.next
   COPY --from=builder /app/node_modules ./node_modules
   COPY --from=builder /app/package.json ./package.json

   USER nextjs
   EXPOSE 3000
   ENV PORT 3000

   CMD ["npm", "start"]
   ```

2. Build and run:
   ```bash
   docker build -t zeke-marketing .
   docker run -p 3000:3000 zeke-marketing
   ```

## Environment Variables

Set these environment variables for production:

```bash
# Required
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Optional
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # Google Analytics
```

## SEO Optimization

The site includes:
- ✅ Dynamic meta tags for all pages
- ✅ OpenGraph tags for social sharing
- ✅ Structured data (JSON-LD) for search engines
- ✅ Automatic sitemap generation at `/sitemap.xml`
- ✅ Robots.txt at `/robots.txt`
- ✅ Semantic HTML throughout

### Setting Up Google Search Console

1. Deploy your site
2. Go to [Google Search Console](https://search.google.com/search-console)
3. Add your property
4. Verify ownership
5. Submit your sitemap: `https://yourdomain.com/sitemap.xml`

## Performance Optimization

The site is already optimized with:
- Static generation for all pages
- Image optimization (on Vercel/Netlify)
- Efficient bundle splitting
- CSS optimization with Tailwind
- Fast font loading with next/font

### Measuring Performance

```bash
# Lighthouse audit
npm install -g lighthouse
lighthouse https://yourdomain.com --view

# Or use https://pagespeed.web.dev/
```

**Target scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## Content Management

### Adding New Blog Posts

1. Create a new `.mdx` file in `/content/blog/`
2. Add frontmatter:
   ```yaml
   ---
   title: "Your Post Title"
   description: "Brief description (150-160 chars for SEO)"
   date: "2026-02-14"
   category: "Category Name"
   tags: ["tag1", "tag2"]
   author: "Zeke"
   ---
   ```
3. Write your content in MDX (Markdown + React components)
4. The blog listing and sitemap update automatically

### Updating Pages

- Home: `/app/page.tsx`
- About: `/app/about/page.tsx`
- Blog listing: `/app/blog/page.tsx`
- Demo request: `/app/demo-request/page.tsx`

## Analytics Integration

### Google Analytics 4

1. Get your GA4 Measurement ID
2. Add to your project:

Create `/app/components/GoogleAnalytics.tsx`:
```tsx
import Script from 'next/script';

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
```

3. Add to `/app/layout.tsx`:
```tsx
import GoogleAnalytics from '@/components/GoogleAnalytics';

// In the component:
{process.env.NEXT_PUBLIC_GA_ID && (
  <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
)}
```

## Form Submission

The demo request form currently logs to console. To connect to a backend:

### Option 1: Vercel Forms
- Use Vercel's built-in form handling
- No configuration needed

### Option 2: Form Services
- [Formspree](https://formspree.io)
- [Form-Data](https://form-data.com)
- [Basin](https://usebasin.com)

### Option 3: Custom API
1. Create `/app/api/demo-request/route.ts`
2. Handle POST requests
3. Send to CRM/email service

## Maintenance

### Regular Updates

```bash
# Check for outdated packages
npm outdated

# Update dependencies
npm update

# Major version updates
npm install next@latest react@latest react-dom@latest
```

### Backup Content

Your blog content in `/content/blog/` should be version controlled with git. Always:
- Commit changes before deploying
- Tag releases: `git tag -a v1.0.0 -m "Release v1.0.0"`
- Push tags: `git push --tags`

## Troubleshooting

### Build Errors

**MDX import errors:**
- Ensure all blog MDX files have valid frontmatter
- Check for syntax errors in MDX content

**Type errors:**
- Run `npm run build` locally first
- Check TypeScript version compatibility

### Performance Issues

**Slow page loads:**
- Check image sizes (optimize before uploading)
- Use Next.js Image component for automatic optimization
- Enable Vercel/Netlify CDN

**Large bundle size:**
- Analyze bundle: `npm run build` shows bundle sizes
- Remove unused dependencies
- Use dynamic imports for heavy components

## Support

For questions or issues:
- Email: hello@zeke.ai
- Check Next.js docs: https://nextjs.org/docs
- Vercel support: https://vercel.com/support
