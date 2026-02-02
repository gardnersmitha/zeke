# Zeke App Design & Core Functionality

## Design Philosophy

**Evolution from Original:**
- Keep: Friendly personality, gamification, visual education, task-based learning
- Add: AI chat as primary interface, home profile personalization, pro/product commerce

**Core Principle:** Chat-first, but tasks remain for guided learning and proactive engagement.

---

## Information Architecture

```
ZEKE APP
│
├── 💬 CHAT (Primary - Tab 1)
│   ├── Conversation thread
│   ├── Quick actions (photo, voice)
│   └── Response cards (DIY, Pro, Product)
│
├── 📋 TASKS (Secondary - Tab 2)
│   ├── Active tasks (your list)
│   ├── Completed tasks
│   └── Seasonal suggestions
│
├── 🏠 HOME (Profile - Tab 3)
│   ├── Home overview
│   ├── Systems inventory
│   ├── Maintenance history
│   └── Documents (inspection, etc.)
│
└── ⚙️ SETTINGS (Menu)
    ├── Account
    ├── Notifications
    ├── Inspector connection
    └── Help
```

---

## Screen Specifications

### 1. CHAT SCREEN (Primary Interface)

**Purpose:** Ask anything, get instant personalized answers

```
┌─────────────────────────────────────────┐
│ ← Back              Zeke           ⚙️   │
├─────────────────────────────────────────┤
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ 🏠 1985 Colonial · Hingham, MA    │  │
│  │    "Ask me anything about your    │  │
│  │     home - I'm here to help!"     │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ You                          2:14p│  │
│  │ How do I prevent ice dams?        │  │
│  └───────────────────────────────────┘  │
│                                         │
│  ┌───────────────────────────────────┐  │
│  │ Zeke                         2:14p│  │
│  │                                   │  │
│  │ Ice dams are common in Hingham,   │  │
│  │ especially on colonials like      │  │
│  │ yours. Here's what causes them    │  │
│  │ and how to prevent them:          │  │
│  │                                   │  │
│  │ [IMAGE: Ice dam diagram]          │  │
│  │                                   │  │
│  │ **Why it happens:**               │  │
│  │ Heat escapes through your roof,   │  │
│  │ melts snow, refreezes at edge...  │  │
│  │                                   │  │
│  │ **Prevention options:**           │  │
│  │                                   │  │
│  │ ┌─────────────────────────────┐   │  │
│  │ │ 🛠️ DIY: Heat Cables         │   │  │
│  │ │ $45-80 · Easy install       │   │  │
│  │ │ [See on Amazon →]           │   │  │
│  │ └─────────────────────────────┘   │  │
│  │                                   │  │
│  │ ┌─────────────────────────────┐   │  │
│  │ │ 👷 Pro: Insulation upgrade  │   │  │
│  │ │ $800-2,000 · Fixes root     │   │  │
│  │ │ [See 3 local pros →]        │   │  │
│  │ └─────────────────────────────┘   │  │
│  │                                   │  │
│  │ 👍  👎  Save to Tasks            │  │
│  └───────────────────────────────────┘  │
│                                         │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │ 📷  🎤  Ask a question...        → │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│   💬 Chat      📋 Tasks      🏠 Home   │
└─────────────────────────────────────────┘
```

**Components:**

1. **Header**
   - Back button (if deep linked)
   - "Zeke" title
   - Settings gear

2. **Home Context Card** (top of chat)
   - Shows current home profile summary
   - Reminds user Zeke knows their home
   - Tappable to edit home profile

3. **Message Bubbles**
   - User messages (right aligned, blue)
   - Zeke messages (left aligned, white/gray)
   - Timestamp on each

4. **Response Cards** (embedded in Zeke messages)
   - **DIY Card:** Product recommendation with affiliate link
   - **Pro Card:** Local pro recommendations
   - **Task Card:** "Add to your list"
   - **Content Card:** Link to detailed article

5. **Input Bar**
   - Text input field
   - Camera button (photo diagnosis)
   - Microphone button (voice input - future)
   - Send button

6. **Feedback Row**
   - Thumbs up/down on answers
   - "Save to Tasks" action

7. **Tab Bar**
   - Chat (active)
   - Tasks
   - Home

---

### 2. TASKS SCREEN (Gamified To-Do List)

**Purpose:** Guided journey through homeownership, seasonal reminders

```
┌─────────────────────────────────────────┐
│ ← Back           My Tasks          ⚙️   │
├─────────────────────────────────────────┤
│ ┌─────────────────────────────────────┐ │
│ │          🎯 Day 12                  │ │
│ │   "Things are shaping up nicely!"  │ │
│ │                                     │ │
│ │   ████████████░░░░  68% complete   │ │
│ │   142 points earned                 │ │
│ └─────────────────────────────────────┘ │
├─────────────────────────────────────────┤
│                                         │
│  THIS WEEK                              │
│  ─────────────────────────────────────  │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ ☐ Find the master water shutoff    ││
│  │   🔵 Activity · 2 pts         →    ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ ☐ Check outdoor outlets            ││
│  │   🟡 Reminder · 3 pts         →    ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ ☐ Snap a photo of your boiler      ││
│  │   🔵 Activity · 5 pts         →    ││
│  └─────────────────────────────────────┘│
│                                         │
│  SEASONAL (Winter)                      │
│  ─────────────────────────────────────  │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ ☐ Winterize outdoor faucets        ││
│  │   🟡 Reminder · 3 pts         →    ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ ☐ Schedule furnace tune-up         ││
│  │   📅 Appointment · 5 pts      →    ││
│  └─────────────────────────────────────┘│
│                                         │
│  COMPLETED ✓                            │
│  ─────────────────────────────────────  │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ ✓ Set up your home profile         ││
│  │   🔵 Activity · 10 pts   Done ✓    ││
│  └─────────────────────────────────────┘│
│                                         │
├─────────────────────────────────────────┤
│   💬 Chat      📋 Tasks      🏠 Home   │
└─────────────────────────────────────────┘
```

**Task Types (Color-Coded):**

| Type | Color | Icon | Example |
|------|-------|------|---------|
| Activity | Blue | ✓ | "Find the master water shutoff" |
| Reminder | Yellow | 🔔 | "Check outdoor outlets" |
| Content | Green | 📄 | "Read this 5 min insurance primer" |
| Purchase | Red | 🎁 | "Buy a great LED lantern" |
| Appointment | Purple | 📅 | "Schedule furnace tune-up" |

**Progress System:**
- Day counter (Day 1, Day 12, etc.)
- Points for completing tasks
- Progress bar (% of onboarding complete)
- Badges/achievements (future)

---

### 3. TASK DETAIL SCREEN

**Purpose:** Educational content with Why/How structure (from original)

```
┌─────────────────────────────────────────┐
│ ← List                              ⚙️  │
├─────────────────────────────────────────┤
│                                         │
│  Find the master water shutoff          │
│  🔵 Activity · 2 Points                 │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  **Why?**                               │
│                                         │
│  It's important to know where this is   │
│  so you can quickly stop a leak or      │
│  outflow of water into your house.      │
│  Water damage is one of the most        │
│  expensive types of home repairs.       │
│                                         │
│  **How?**                               │
│                                         │
│  The shutoff valve is usually in the    │
│  basement, probably nearest to the      │
│  street. Look for a copper pipe with    │
│  a red or yellow rubber handle.         │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │  [Photo 1]        [Photo 2]        ││
│  │  Gate valve       Ball valve       ││
│  └─────────────────────────────────────┘│
│                                         │
│  💡 **For your 1985 Colonial:**         │
│  Older colonials often have the         │
│  shutoff near the front foundation      │
│  wall, close to where the main          │
│  enters from the street.                │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │  💬 Ask Zeke a question about this ││
│  └─────────────────────────────────────┘│
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────────┐│
│  │           ✓ Found it!              ││
│  └─────────────────────────────────────┘│
│                                         │
└─────────────────────────────────────────┘
```

**Key Elements:**
- **Why section:** Explains importance (motivation)
- **How section:** Step-by-step instructions
- **Photos:** Visual examples
- **Personalized tip:** Context for THEIR home type
- **Ask Zeke:** Link to chat for follow-up questions
- **Completion CTA:** "Found it!" / "Done!" / "Completed"

---

### 4. HOME PROFILE SCREEN

**Purpose:** View and manage home information

```
┌─────────────────────────────────────────┐
│ ← Back           My Home           ✏️   │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────────┐│
│  │         🏠                         ││
│  │    123 Main Street                 ││
│  │    Hingham, MA 02043               ││
│  │                                    ││
│  │    Colonial · Built 1985           ││
│  │    2,400 sq ft · 4 bed, 2.5 bath  ││
│  └─────────────────────────────────────┘│
│                                         │
│  SYSTEMS                                │
│  ─────────────────────────────────────  │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ 🔥 Heating                         ││
│  │    Gas Furnace · Carrier           ││
│  │    Installed ~2012 (12 years)      ││
│  │    ⚠️ Consider tune-up        →    ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ ❄️ Cooling                         ││
│  │    Central AC · Lennox             ││
│  │    Installed ~2012 (12 years)      ││
│  │    ✓ Good condition           →    ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ 💧 Water Heater                    ││
│  │    Tank · 50 gal · AO Smith        ││
│  │    Installed ~2018 (6 years)       ││
│  │    ✓ Good condition           →    ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ 🏠 Roof                            ││
│  │    Asphalt shingle                 ││
│  │    Installed ~2015 (9 years)       ││
│  │    ✓ Good condition           →    ││
│  └─────────────────────────────────────┘│
│                                         │
│  + Add another system                   │
│                                         │
│  DOCUMENTS                              │
│  ─────────────────────────────────────  │
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ 📄 Inspection Report (2024)    →   ││
│  └─────────────────────────────────────┘│
│                                         │
│  + Upload document                      │
│                                         │
├─────────────────────────────────────────┤
│   💬 Chat      📋 Tasks      🏠 Home   │
└─────────────────────────────────────────┘
```

**System Cards:**
- Icon + System name
- Brand and model (if known)
- Age / install date
- Condition indicator (✓ Good, ⚠️ Aging, 🔴 Issue)
- Tap for details and maintenance history

---

### 5. PRO MATCHING SCREEN

**Purpose:** Connect to local professionals

```
┌─────────────────────────────────────────┐
│ ← Back        Local Pros            ⚙️  │
├─────────────────────────────────────────┤
│                                         │
│  Roofers near Hingham, MA               │
│  For: Ice dam prevention/insulation     │
│                                         │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ ⭐ TOP MATCH                       ││
│  │                                    ││
│  │ South Shore Roofing                ││
│  │ ⭐⭐⭐⭐⭐ 4.9 (47 reviews)          ││
│  │                                    ││
│  │ "Specializes in ice dam fixes      ││
│  │  for older South Shore homes"      ││
│  │                                    ││
│  │ 📍 Weymouth · 8 mi away            ││
│  │ 💰 $$ · Est. $800-1,500            ││
│  │                                    ││
│  │ ┌─────────────────────────────────┐││
│  │ │    📞 Call    |    💬 Text     │││
│  │ └─────────────────────────────────┘││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ Hingham Home Services              ││
│  │ ⭐⭐⭐⭐ 4.7 (23 reviews)            ││
│  │ 📍 Hingham · 2 mi away             ││
│  │ 💰 $$$ · Est. $1,000-2,000         ││
│  │                     [Contact →]    ││
│  └─────────────────────────────────────┘│
│                                         │
│  ┌─────────────────────────────────────┐│
│  │ ABC Roofing & Insulation           ││
│  │ ⭐⭐⭐⭐ 4.5 (89 reviews)            ││
│  │ 📍 Quincy · 12 mi away             ││
│  │ 💰 $ · Est. $600-1,200             ││
│  │                     [Contact →]    ││
│  └─────────────────────────────────────┘│
│                                         │
│  ─────────────────────────────────────  │
│  These pros are vetted by Zeke users    │
│  in the South Shore area.               │
│                                         │
└─────────────────────────────────────────┘
```

---

## Component Library

### Color Palette

```
Primary Blue:     #4086FC (from original)
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

```
Headers:          SF Pro Display / Noto Sans (from original)
Body:             SF Pro Text / Noto Sans
Accent:           Merriweather (from original - for quotes/tips)

Sizes:
- H1: 24px bold
- H2: 20px semibold
- H3: 17px semibold
- Body: 15px regular
- Caption: 13px regular
- Small: 11px regular
```

### Common Components

**1. Task Card**
```
┌─────────────────────────────────────────┐
│ [Icon] Task title                       │
│        Type badge · X pts          →    │
└─────────────────────────────────────────┘
```

**2. System Card**
```
┌─────────────────────────────────────────┐
│ [Icon] System name                      │
│        Brand · Model                    │
│        Age · Status indicator      →    │
└─────────────────────────────────────────┘
```

**3. Pro Card**
```
┌─────────────────────────────────────────┐
│ Business Name                           │
│ ⭐⭐⭐⭐⭐ Rating (X reviews)              │
│ 📍 Location · 💰 Price range            │
│                          [Contact]      │
└─────────────────────────────────────────┘
```

**4. Product Card** (affiliate)
```
┌─────────────────────────────────────────┐
│ [Product Image]                         │
│ Product Name                            │
│ $XX.XX · ⭐ 4.5                         │
│                    [View on Amazon →]   │
└─────────────────────────────────────────┘
```

**5. Chat Message Bubble**
```
User (right, blue background):
┌─────────────────────────────────────────┐
│                           Message text  │
│                                   Time  │
└─────────────────────────────────────────┘

Zeke (left, white/gray background):
┌─────────────────────────────────────────┐
│ Message text                            │
│ Time                                    │
└─────────────────────────────────────────┘
```

---

## Core Functionality Requirements

### MVP Features (Week 1-4)

#### Chat / Q&A
- [ ] Text input for questions
- [ ] AI-powered responses using Claude API
- [ ] Home profile context injected into every query
- [ ] Response cards (DIY, Pro, Product)
- [ ] Thumbs up/down feedback
- [ ] Save to tasks action
- [ ] Photo upload for diagnosis (basic)

#### Tasks
- [ ] Display task list (grouped by: This Week, Seasonal, Completed)
- [ ] Task detail view with Why/How structure
- [ ] Mark task complete
- [ ] Points tracking
- [ ] Day counter
- [ ] Progress bar

#### Home Profile
- [ ] Address entry with autocomplete
- [ ] Home type, year built, square footage
- [ ] System inventory (add/edit/delete)
- [ ] Age and condition tracking
- [ ] Basic data enrichment from address

#### Inspector Integration
- [ ] QR code generation for inspector
- [ ] Handoff landing page
- [ ] Pre-populate profile from inspection data
- [ ] "Your inspector noted" issue list
- [ ] "Ask your inspector" escalation button

### Phase 2 Features (Week 5-8)

- [ ] Pro matching with local network
- [ ] Affiliate product links
- [ ] Proactive notifications
- [ ] Photo system identification
- [ ] Voice input
- [ ] Inspector dashboard (B2B)
- [ ] Seasonal task unlocks

---

## Technical Implementation Notes

### Frontend Stack
- **Web:** Next.js (React) - works on mobile browsers
- **Mobile:** Progressive Web App initially, native later
- **UI Library:** Tailwind CSS + custom components

### Backend Stack
- **API:** Node.js or Python (FastAPI)
- **Database:** PostgreSQL + pgvector
- **LLM:** Claude API via orchestrator
- **Queue:** Redis + BullMQ for async tasks

### Key Integrations
- Claude API (chat, agents)
- Address autocomplete (Google Places or Smarty)
- Property data (Zillow API or similar)
- Affiliate networks (Amazon, Home Depot)
- Email/SMS (SendGrid, Twilio)

---

## User Flows

### Flow 1: Ask a Question
```
Chat Screen → Type question → Send
    → Loading state
    → Receive AI response
    → View response cards (DIY/Pro/Product)
    → [Optional] Save to tasks
    → [Optional] View pro matches
    → [Optional] Click affiliate link
```

### Flow 2: Complete a Task
```
Tasks Screen → Tap task
    → Task Detail Screen
    → Read Why/How
    → [Optional] Ask Zeke follow-up
    → Tap "Found it!" / "Done!"
    → Points awarded
    → Return to Tasks Screen (task moved to Completed)
```

### Flow 3: Inspector Handoff
```
Inspector generates QR code
    → Homeowner scans
    → Landing: "Welcome! [Inspector] set up Zeke for you"
    → View pre-loaded home profile
    → View issues from inspection
    → Create account (email)
    → Enter app with populated data
```

---

## Success Metrics

| Metric | Target (Week 4) | Target (Week 12) |
|--------|-----------------|------------------|
| Questions asked | 500 | 5,000 |
| Tasks completed | 200 | 2,000 |
| Home profiles created | 100 | 500 |
| Pro referrals | 5 | 50 |
| Affiliate clicks | 50 | 500 |
| Inspector handoffs | 20 | 200 |
