# Deployment Guide

Deploy the Zeke app to production in minutes.

## Vercel (Recommended - Easiest)

Vercel is the creator of Next.js and offers the best deployment experience.

### Prerequisites
- GitHub account
- Vercel account (free tier available)

### Steps

1. **Push to GitHub**
   ```bash
   cd /Users/ags/Code/zeke
   git add web/app/
   git commit -m "Add Phase 1 Zeke mobile app"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Select the `web/app` directory as the root

3. **Configure Build**
   Vercel auto-detects Next.js, but verify:
   - Framework Preset: **Next.js**
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`
   - Root Directory: `web/app`

4. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Your app is live!

5. **Get Your URL**
   - Default: `zeke-app.vercel.app`
   - Add custom domain in settings

### Automatic Deployments

- Every push to `main` = automatic deployment
- Pull requests = preview deployments
- No CI/CD configuration needed

### Environment Variables

For Phase 2 (when adding backend):
```bash
# In Vercel dashboard > Settings > Environment Variables
NEXT_PUBLIC_API_URL=https://api.zeke.com
CLAUDE_API_KEY=sk-xxx
DATABASE_URL=postgresql://...
```

## Netlify (Alternative)

### Steps

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build Locally**
   ```bash
   cd /Users/ags/Code/zeke/web/app
   npm run build
   ```

3. **Deploy**
   ```bash
   netlify deploy --prod
   ```

4. **Or Connect GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Import from GitHub
   - Build settings:
     - Base directory: `web/app`
     - Build command: `npm run build`
     - Publish directory: `.next`

## AWS Amplify

### Steps

1. **Install Amplify CLI**
   ```bash
   npm install -g @aws-amplify/cli
   amplify configure
   ```

2. **Initialize Amplify**
   ```bash
   cd /Users/ags/Code/zeke/web/app
   amplify init
   ```

3. **Add Hosting**
   ```bash
   amplify add hosting
   amplify publish
   ```

## Digital Ocean App Platform

### Steps

1. **Create App**
   - Go to DigitalOcean dashboard
   - Create new App
   - Connect GitHub repository

2. **Configure**
   - Source: `web/app`
   - Build command: `npm run build`
   - Run command: `npm start`
   - Port: 3000

3. **Deploy**
   - Click "Deploy"
   - Wait for build

## Docker (Self-Hosted)

### Dockerfile

Create `/Users/ags/Code/zeke/web/app/Dockerfile`:

```dockerfile
FROM node:18-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
EXPOSE 3000
CMD ["node", "server.js"]
```

### Deploy

```bash
# Build image
docker build -t zeke-app .

# Run container
docker run -p 3000:3000 zeke-app

# Or use docker-compose
docker-compose up -d
```

## Performance Optimizations

### Before Deploying

1. **Optimize Images**
   - Use Next.js Image component
   - Add real PWA icons (see ASSETS_TODO.md)

2. **Enable Compression**
   - Vercel/Netlify do this automatically
   - For self-hosting, enable gzip

3. **Add Analytics** (Optional)
   ```bash
   npm install @vercel/analytics
   ```

   In `app/layout.tsx`:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';

   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

## Testing Before Deploy

### 1. Build Locally
```bash
npm run build
npm start
```

### 2. Test Production Build
- Open http://localhost:3000
- Test all features
- Check for console errors
- Test on mobile device

### 3. Run Lighthouse
- Open DevTools
- Go to Lighthouse tab
- Run audit
- Aim for 90+ scores

## Post-Deployment Checklist

- [ ] App loads correctly
- [ ] All navigation works
- [ ] Chat interface functional
- [ ] Home profile saves data
- [ ] PWA installable on mobile
- [ ] No console errors
- [ ] Performance is good
- [ ] Mobile responsive
- [ ] Icons display correctly

## Custom Domain Setup

### Vercel

1. Go to project settings
2. Add domain
3. Configure DNS:
   ```
   Type: CNAME
   Name: app (or @)
   Value: cname.vercel-dns.com
   ```

### Netlify

1. Go to domain settings
2. Add custom domain
3. Configure DNS:
   ```
   Type: CNAME
   Name: app (or @)
   Value: your-app.netlify.app
   ```

## SSL/HTTPS

All modern platforms (Vercel, Netlify, etc.) provide:
- ✅ Free SSL certificates (Let's Encrypt)
- ✅ Automatic renewal
- ✅ HTTPS by default

No configuration needed!

## Monitoring & Analytics

### Add to Vercel

1. Install package:
   ```bash
   npm install @vercel/analytics
   ```

2. Add to layout:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';
   ```

### Add to Any Platform

Use Google Analytics:
```bash
npm install react-ga4
```

Or PostHog, Mixpanel, etc.

## Rollback Strategy

### Vercel
- Go to deployments
- Click previous deployment
- Click "Promote to Production"

### Git-based Platforms
```bash
git revert HEAD
git push
```

## Troubleshooting

### Build Fails

**Check:**
- Node version (need 18+)
- Dependencies installed correctly
- No TypeScript errors: `npm run build`

**Fix:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### App Won't Load

**Check:**
- Browser console for errors
- Network tab for failed requests
- Deployment logs for issues

**Fix:**
- Redeploy
- Check environment variables
- Verify build output

### PWA Not Installing

**Check:**
- HTTPS enabled (required for PWA)
- manifest.json accessible
- Icons exist and load

**Fix:**
- Add real icon files (see ASSETS_TODO.md)
- Test with Lighthouse PWA audit

## Cost Estimates

### Vercel (Hobby - Free)
- ✅ Unlimited deployments
- ✅ SSL included
- ✅ 100GB bandwidth/month
- ✅ Perfect for Phase 1

### Vercel (Pro - $20/month)
- For production with traffic
- Priority support
- Analytics included
- Team collaboration

### Netlify (Free)
- 100GB bandwidth
- 300 build minutes
- Good for testing

### Digital Ocean ($5-12/month)
- More control
- Better for custom backend
- Fixed cost

## Scaling Considerations

Phase 1 (current):
- Static site + client-side storage
- Can handle 10,000+ users on free tier

Phase 2 (with backend):
- Will need database
- API server
- Consider: Vercel Pro + Supabase

Phase 3 (high traffic):
- CDN caching
- Database scaling
- Load balancing

## Recommended Stack

For Phase 1-2:
- **Frontend**: Vercel (free → $20/mo)
- **Database**: Supabase (free → $25/mo)
- **API**: Vercel Serverless Functions
- **Storage**: Supabase Storage
- **Total**: $0-45/month

## Ready to Deploy?

```bash
# Quick deploy to Vercel
cd /Users/ags/Code/zeke/web/app
npm install -g vercel
vercel

# Follow prompts
# Your app will be live in 2 minutes!
```

🚀 **That's it!** Your Zeke app is now live and accessible worldwide.
