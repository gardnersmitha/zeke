# 🚀 START HERE

Welcome to the Zeke mobile app! This is your **3-step quick start** guide.

---

## Step 1: Install Dependencies (2 minutes)

Open your terminal and run:

```bash
cd /Users/ags/Code/zeke/web/app
npm install
```

This will install:
- Next.js (framework)
- React (UI library)
- TypeScript (type safety)
- Tailwind CSS (styling)
- Lucide React (icons)

**Expected output:** Installation completes successfully, no errors.

---

## Step 2: Start Development Server (30 seconds)

```bash
npm run dev
```

You should see:
```
✓ Ready in 1.2s
○ Local: http://localhost:3000
```

**If port 3000 is in use:**
```bash
npm run dev -- -p 3001
```

---

## Step 3: Open in Browser

Go to: **http://localhost:3000**

You should see:
- ✅ Chat screen with Zeke welcome message
- ✅ Bottom tab navigation (Chat, Tasks, Home)
- ✅ Home context card at the top

---

## 🎮 Test the Features

### 1. Try the Chat
- Type a question: **"How do I prevent ice dams?"**
- Press Send
- See AI response with DIY and Pro recommendation cards
- Try other questions

### 2. View Home Profile
- Click **Home** tab (house icon)
- See your home details (1985 Colonial in Hingham, MA)
- View systems inventory (heating, cooling, etc.)

### 3. Edit a System
- Click any system card (e.g., "Heating")
- Edit the details (brand, model, year, condition)
- Click "Save System"
- See changes reflected immediately

### 4. Add a New System
- Scroll down to "Add another system"
- Click it
- Fill in the form (e.g., add a "Plumbing" system)
- Save
- See it appear in your systems list

### 5. Check Tasks
- Click **Tasks** tab
- See "Coming soon" placeholder
- (Full implementation in Phase 2)

---

## 📱 Test on Mobile

### Using Chrome DevTools
1. Press `F12` (or `Cmd+Option+I` on Mac)
2. Click device toolbar icon (or `Ctrl+Shift+M`)
3. Select "iPhone 12 Pro" or similar
4. Interact with the mobile interface

### On Real Phone
1. Find your computer's IP:
   ```bash
   # Mac/Linux
   ifconfig | grep "inet " | grep -v 127.0.0.1

   # Windows
   ipconfig
   ```
2. On phone, open browser to: `http://[YOUR_IP]:3000`
3. Test the app
4. Add to home screen for PWA experience

---

## ✅ Everything Working?

Great! You've successfully:
- ✅ Installed the app
- ✅ Started the dev server
- ✅ Tested core features
- ✅ Seen it on mobile

---

## 📚 Next Steps

### Learn More
- **Full documentation**: [README.md](./README.md)
- **Deployment guide**: [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Project overview**: [PROJECT_SUMMARY.md](./PROJECT_SUMMARY.md)

### Customize
- Edit colors in `tailwind.config.ts`
- Modify home profile in `lib/mockData.ts`
- Add more AI responses in `lib/mockData.ts`

### Deploy
Quick deploy to Vercel:
```bash
npm install -g vercel
vercel
```

---

## 🐛 Troubleshooting

### "Command not found: npm"
Install Node.js from https://nodejs.org (v18 or higher)

### "Port 3000 in use"
Kill the process or use different port:
```bash
lsof -ti:3000 | xargs kill -9
npm run dev -- -p 3001
```

### "Module not found" errors
Clear and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript errors
Ignore during development (hot reload still works)
Or build to check:
```bash
npm run build
```

---

## 💬 Questions?

Check these docs in order:
1. **START_HERE.md** (this file) - Quick start
2. **QUICKSTART.md** - Detailed 5-minute guide
3. **README.md** - Complete documentation
4. **PROJECT_SUMMARY.md** - Project overview

---

## 🎯 Quick Reference

### Common Commands
```bash
npm run dev       # Start development server
npm run build     # Build for production
npm start         # Start production server
npm run lint      # Check code quality
```

### Important Files
```
app/page.tsx              # Chat screen
app/home/page.tsx         # Home profile screen
components/               # Reusable components
lib/mockData.ts          # AI responses (edit here!)
tailwind.config.ts       # Design system colors
```

### URLs
```
http://localhost:3000           # Main app
http://localhost:3000/home      # Home profile
http://localhost:3000/tasks     # Tasks
```

---

**Ready? Let's go!** 🚀

```bash
cd /Users/ags/Code/zeke/web/app
npm install
npm run dev
```

Then open http://localhost:3000 and start exploring!
