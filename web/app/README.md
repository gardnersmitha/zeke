# Zeke Mobile App (Phase 1)

A Progressive Web App (PWA) built with Next.js 15 that serves as an AI homeowner assistant. This is Phase 1 featuring the core Chat and Home Profile functionality.

## Features

### Implemented (Phase 1)

- **Chat Screen**: Primary interface with AI assistant
  - Message bubbles (user and AI)
  - Home context card showing current home profile
  - Response cards (DIY, Pro, Product recommendations)
  - Photo and voice input UI (placeholders)
  - Mock AI responses with intelligent pattern matching
  - Feedback actions (thumbs up/down, save to tasks)

- **Home Profile Screen**: Manage home information
  - Home overview card (address, type, year built, size)
  - Systems inventory (heating, cooling, water heater, roof, etc.)
  - Add/edit/delete systems with detailed forms
  - Condition tracking (good, aging, issue)
  - Age calculation for systems
  - Documents section (UI ready)

- **Tasks Screen**: Placeholder for Phase 2
  - Coming soon message
  - Preview of planned features

- **Core Infrastructure**
  - Next.js 15 App Router
  - TypeScript throughout
  - Tailwind CSS with Zeke brand colors
  - PWA manifest configuration
  - localStorage for data persistence
  - Responsive mobile-first design
  - Component library (Button, Card, Input, etc.)
  - Bottom tab navigation (Chat, Tasks, Home)

### Coming in Phase 2

- Task management system with gamification
- Real Claude AI integration
- Pro matching
- Affiliate product links
- Photo system identification
- Voice input
- Push notifications

## Tech Stack

- **Framework**: Next.js 15.0.0
- **Language**: TypeScript 5.3.3
- **Styling**: Tailwind CSS 3.4.1
- **Icons**: Lucide React 0.344.0
- **Runtime**: React 18.3.1

## Project Structure

```
/Users/ags/Code/zeke/web/app/
├── app/
│   ├── page.tsx              # Chat screen (main)
│   ├── home/
│   │   └── page.tsx          # Home profile screen
│   ├── tasks/
│   │   └── page.tsx          # Tasks screen (stub)
│   ├── layout.tsx            # Root layout with metadata
│   └── globals.css           # Global styles
├── components/
│   ├── Button.tsx            # Reusable button component
│   ├── Card.tsx              # Reusable card component
│   ├── Input.tsx             # Reusable input components
│   ├── Header.tsx            # Page header component
│   ├── TabBar.tsx            # Bottom navigation
│   ├── chat/
│   │   ├── HomeContextCard.tsx    # Home profile summary in chat
│   │   ├── MessageBubble.tsx      # Chat message display
│   │   ├── ResponseCard.tsx       # AI response cards
│   │   └── ChatInput.tsx          # Message input with actions
│   └── home/
│       ├── SystemCard.tsx         # System display card
│       └── SystemForm.tsx         # Add/edit system form
├── types/
│   └── index.ts              # TypeScript type definitions
├── lib/
│   ├── storage.ts            # localStorage utilities
│   └── mockData.ts           # Mock data and AI responses
├── public/
│   └── manifest.json         # PWA manifest
├── package.json
├── tsconfig.json
├── tailwind.config.ts        # Tailwind with Zeke colors
├── next.config.js
└── README.md
```

## Design System

### Color Palette

```css
Primary Blue:     #4086FC
Light Blue:       #91BAFF
Dark Blue:        #2C5AA0

Activity:         #4086FC (blue)
Reminder:         #F5A623 (yellow/orange)
Content:          #7ED321 (green)
Purchase:         #D0021B (red)
Appointment:      #9013FE (purple)

Background:       #F5F5F5
Card Background:  #FFFFFF
Text Primary:     #333333
Text Secondary:   #888888

Success:          #7ED321
Warning:          #F5A623
Error:            #D0021B
```

### Typography

- **Headers**: SF Pro Display / Noto Sans
- **Body**: SF Pro Text / Noto Sans
- **Accent**: Merriweather (for quotes/tips)

## Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Navigate to the app directory:
   ```bash
   cd /Users/ags/Code/zeke/web/app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to:
   ```
   http://localhost:3000
   ```

### Other Commands

- **Build for production**: `npm run build`
- **Start production server**: `npm start`
- **Lint code**: `npm run lint`

## Usage Guide

### Chat Screen

1. The chat screen is the main interface (default route `/`)
2. A home context card at the top shows your current home profile
3. Type questions in the input field at the bottom
4. The AI will respond with helpful information and action cards
5. Try asking about "ice dams" to see a full response with DIY/Pro cards
6. Use thumbs up/down to provide feedback
7. Click "Save to Tasks" to save responses (UI only in Phase 1)

### Home Profile Screen

1. Navigate to the Home tab (house icon in bottom navigation)
2. View your home overview (address, type, year, size)
3. Browse your systems inventory
4. Click any system card to edit it
5. Click "Add another system" to add new systems
6. Fill in the form with system details (category, brand, model, year, condition)
7. All data is saved to localStorage automatically

### Tasks Screen

1. Navigate to the Tasks tab (checklist icon)
2. Currently shows a "Coming Soon" placeholder
3. Phase 2 will include the full task management system

## Data Persistence

All data is stored in the browser's localStorage:
- **Home Profile**: Stores all home information and systems
- **Chat Messages**: Stores conversation history
- Data persists across sessions
- Clear browser data to reset

## Testing the PWA

### On Desktop

1. Open Chrome DevTools
2. Go to Application > Manifest
3. Verify the manifest is loaded correctly
4. Test responsive design with device emulation

### On Mobile

1. Open the app in Chrome (Android) or Safari (iOS)
2. Add to Home Screen:
   - **iOS**: Tap Share > Add to Home Screen
   - **Android**: Tap Menu > Add to Home Screen
3. The app will open in standalone mode (full screen)

## Known Limitations (Phase 1)

- AI responses are mocked (no real Claude API integration yet)
- Tasks screen is a placeholder
- Photo upload is UI only (no actual upload)
- Voice input is UI only (no actual recording)
- Documents can't be uploaded yet
- No backend or database (localStorage only)
- No user authentication
- No push notifications

## Next Steps for Phase 2

1. Integrate Claude API for real AI responses
2. Implement full task management system with:
   - Task list with categories
   - Task detail screens with Why/How structure
   - Points and progress tracking
   - Day counter and gamification
3. Add pro matching functionality
4. Integrate affiliate product links
5. Implement photo upload and system identification
6. Add voice input support
7. Set up backend API and database
8. Add user authentication

## Browser Support

- Chrome/Edge 90+
- Safari 14+
- Firefox 88+
- Mobile browsers (iOS Safari, Chrome Android)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Next.js and deploy
4. Domain: `zeke-app.vercel.app` (or custom domain)

### Other Platforms

- Netlify
- AWS Amplify
- Digital Ocean App Platform

## Design Reference

Full design specification: `/Users/ags/Code/zeke/docs/APP_DESIGN.md`

## Contributing

This is Phase 1 of the Zeke app. The goal is to establish the core UI/UX foundation before adding backend integration and advanced features.

## License

Proprietary - Zeke AI Homeowner Assistant
