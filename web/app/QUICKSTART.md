# Zeke App - Quick Start Guide

Get the Zeke mobile app running in 5 minutes.

## 1. Install Dependencies

```bash
cd /Users/ags/Code/zeke/web/app
npm install
```

This will install:
- Next.js 15
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

## 2. Start Development Server

```bash
npm run dev
```

The app will be available at: **http://localhost:3000**

## 3. Explore the App

### Chat Screen (Main)
- Default route: http://localhost:3000
- Try asking: "How do I prevent ice dams?"
- The AI will respond with helpful cards

### Home Profile Screen
- Navigate to the Home tab (house icon)
- View and edit your home systems
- Add new systems with the "Add another system" button

### Tasks Screen
- Navigate to the Tasks tab (checklist icon)
- Shows "Coming Soon" - will be implemented in Phase 2

## 4. Test on Mobile

### Option A: Using DevTools
1. Open Chrome DevTools (F12)
2. Click the device toolbar icon (Ctrl+Shift+M)
3. Select a mobile device (iPhone 12 Pro, etc.)
4. Interact with the mobile interface

### Option B: On Real Device
1. Find your local IP: `ifconfig | grep inet` (Mac/Linux) or `ipconfig` (Windows)
2. Start dev server: `npm run dev`
3. Open on phone: `http://[YOUR_IP]:3000`
4. Add to home screen for PWA experience

## 5. Understanding the Data

All data is stored in **localStorage**:
- Home profile (address, systems, etc.)
- Chat message history
- Persists across page refreshes

**Reset Data**: Clear browser localStorage or incognito mode

## 6. Customize Your Home

1. Go to Home tab
2. Click the edit icon (✏️) on the home overview card
3. Modify systems:
   - Click any system to edit
   - Change brand, model, installed year
   - Update condition status
   - Delete if needed
4. Add new systems:
   - Click "Add another system"
   - Choose category (heating, cooling, etc.)
   - Fill in details
   - Save

## 7. Chat with Zeke

The chat uses intelligent pattern matching for mock responses:

**Try these queries:**
- "How do I prevent ice dams?" → Full response with DIY/Pro cards
- "What's wrong with my furnace?" → General advice
- "How do I maintain my roof?" → General advice
- Any other question → Generic helpful response

**Note**: Real Claude AI integration comes in Phase 2

## 8. Development Tips

### Hot Reload
- Changes to files automatically reload the page
- Component changes appear instantly
- No need to restart the server

### File Structure
```
app/
  page.tsx          → Chat screen
  home/page.tsx     → Home profile
  tasks/page.tsx    → Tasks (stub)
  layout.tsx        → Root layout

components/
  Button.tsx        → Reusable button
  Card.tsx          → Reusable card
  chat/             → Chat components
  home/             → Home components

lib/
  storage.ts        → localStorage wrapper
  mockData.ts       → Mock AI responses
  utils.ts          → Helper functions

types/
  index.ts          → TypeScript definitions
```

### Adding New Features

**Add a new page:**
1. Create `app/new-page/page.tsx`
2. Add to TabBar navigation if needed

**Add a new component:**
1. Create `components/MyComponent.tsx`
2. Import where needed

**Add mock data:**
1. Edit `lib/mockData.ts`
2. Add new response patterns

## 9. Build for Production

```bash
npm run build
npm start
```

The optimized production build will be ready to deploy.

## 10. Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo to Vercel for automatic deployments.

## Common Issues

### Port 3000 already in use
```bash
# Kill the process
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Module not found errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
```bash
# Check types
npm run build

# The dev server is more lenient
npm run dev
```

## Need Help?

- Check the full README: `/Users/ags/Code/zeke/web/app/README.md`
- Design spec: `/Users/ags/Code/zeke/docs/APP_DESIGN.md`

## What's Next?

Phase 1 is complete! Phase 2 will add:
- Real Claude AI integration
- Full task management system
- Pro matching
- Photo upload and analysis
- Voice input
- Backend API
- User authentication

Start building Phase 2 or polish the current UI based on testing feedback.
