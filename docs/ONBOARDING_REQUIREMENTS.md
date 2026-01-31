# Zeke Onboarding Requirements

**Document Version:** 1.0
**Last Updated:** January 2026
**Status:** Product Requirements Document

---

## Table of Contents

1. [Overview](#1-overview)
2. [Entry Points](#2-entry-points)
3. [Home Profile Setup](#3-home-profile-setup)
4. [Inspector Handoff Flow](#4-inspector-handoff-flow)
5. [Gamification & Journey](#5-gamification--journey)
6. [First Value Moment](#6-first-value-moment)
7. [Screen-by-Screen Flows](#7-screen-by-screen-flows)
8. [Data Model](#8-data-model)
9. [Success Metrics](#9-success-metrics)
10. [Edge Cases & Error States](#10-edge-cases--error-states)

---

## 1. Overview

### 1.1 Purpose

This document defines the complete onboarding experience for Zeke, designed to:
- Get users to value as fast as possible (< 2 minutes to first answered question)
- Build comprehensive home profiles progressively (not all upfront)
- Support multiple entry points with tailored experiences
- Create engagement through gamification and guided discovery
- Maximize activation and retention in the critical first week

### 1.2 Design Principles

| Principle | Description |
|-----------|-------------|
| **Progressive Disclosure** | Collect information when it's contextually relevant, not all upfront |
| **Value Before Investment** | Users get value before we ask for profile data |
| **Entry-Appropriate** | Different flows for different entry points |
| **Mobile-First** | Primary use case is phone, often on-site at home |
| **Delight Early** | Gamification creates engagement, not friction |

### 1.3 Target Completion Metrics

| Metric | Target |
|--------|--------|
| Time to first question answered | < 2 minutes |
| Time to basic profile complete | < 5 minutes |
| Day 1 retention | > 60% |
| Day 7 retention | > 40% |
| Home profile 50% complete | Day 7 |
| First task completed | Day 1 |

---

## 2. Entry Points

### 2.1 Entry Point Overview

```
+------------------+     +-------------------+     +------------------+
|  DIRECT SIGNUP   |     | INSPECTOR HANDOFF |     |   AGENT GIFT     |
|  (Organic/SEO)   |     |   (QR Code)       |     | (Closing Gift)   |
+--------+---------+     +--------+----------+     +--------+---------+
         |                        |                         |
         v                        v                         v
+--------+---------+     +--------+----------+     +--------+---------+
| Create Account   |     | Pre-Loaded Home   |     | Pre-Loaded Home  |
| (Email/Google)   |     | Inspection Data   |     | Purchase Data    |
+--------+---------+     +--------+----------+     +--------+---------+
         |                        |                         |
         +------------------------+-------------------------+
                                  |
                                  v
                        +---------+---------+
                        |   UNIFIED CORE    |
                        |   ONBOARDING      |
                        +-------------------+
```

---

### 2.2 Direct Signup (Organic, Content, Referral)

**Entry Sources:**
- SEO content (blog article, how-to guide)
- Social media / word of mouth
- Referral from friend/neighbor
- Marketing campaign

**User Context:**
- No pre-existing data about their home
- May arrive with a specific question in mind
- No relationship with inspector or agent
- Varying levels of home knowledge

**Flow Characteristics:**
- Must capture value prop quickly
- Should allow immediate question-asking
- Profile building is optional/progressive
- Gamification drives profile completion

**Key Screens:**
1. Landing / Value Prop
2. Quick Question (optional - demonstrate value first)
3. Account Creation (email or Google OAuth)
4. Minimal Home Setup (address only)
5. First Question CTA
6. Gamified checklist introduction

---

### 2.3 Inspector Handoff (QR Code from Inspection)

**Entry Sources:**
- QR code on printed inspection report
- Text message link from inspector
- Email link from inspector
- Inspector's website/portal

**User Context:**
- Just had home inspection (buying home or routine)
- Has detailed inspection report data available
- Knows their inspector (trust transfer)
- Likely anxious about home condition/issues
- Ready to take action on findings

**Flow Characteristics:**
- Home profile is largely pre-populated
- Inspection findings drive initial engagement
- "Ask your inspector" feature prominent
- Issue prioritization and action items featured
- Faster time to value (data already exists)

**Key Screens:**
1. Inspector-branded landing
2. One-click account creation
3. "Your inspection summary" (pre-loaded)
4. Issue prioritization walkthrough
5. First action item or question
6. Gamified journey introduction

---

### 2.4 Agent Gift (Closing Gift from Real Estate Agent)

**Entry Sources:**
- QR code on closing gift card
- Email from agent post-closing
- Text message link
- Agent's client portal

**User Context:**
- Just closed on home purchase
- May have inspection data (from purchase process)
- Moving in / first weeks of ownership
- Peak question period ("where's the shutoff?")
- Emotional moment (excitement + anxiety)

**Flow Characteristics:**
- Agent-branded welcome experience
- Congratulatory tone
- Move-in focused checklist prominent
- Basic home data may be pre-populated (from MLS/agent)
- First-time homeowner resources available
- Agent connection maintained

**Key Screens:**
1. Agent-branded congratulations
2. Quick account creation
3. "About your new home" (pre-populated if available)
4. Move-in checklist introduction
5. First question or task
6. Gamified journey introduction

---

## 3. Home Profile Setup

### 3.1 Progressive Profiling Strategy

**Core Principle:** Never ask for data without context. Collect information when it's relevant to the user's current task or question.

```
+------------------+     +------------------+     +------------------+
|   TIER 1         |     |   TIER 2         |     |   TIER 3         |
|   REQUIRED       |     |   CONTEXTUAL     |     |   ENRICHMENT     |
|   (Onboarding)   |     |   (Progressive)  |     |   (Over Time)    |
+------------------+     +------------------+     +------------------+
| - Address        |     | - HVAC details   |     | - Pro history    |
| - Home type      |     | - Plumbing type  |     | - Project photos |
| - Year built*    |     | - Electrical     |     | - Receipts       |
| - Own/Rent       |     | - Roof details   |     | - Warranties     |
|                  |     | - Water heater   |     | - Past repairs   |
|                  |     | - Appliances     |     | - Vendor contacts|
+------------------+     +------------------+     +------------------+
        |                        |                        |
        v                        v                        v
    ONBOARDING              AS RELEVANT            ONGOING PROMPTS
    (Minutes 1-5)           (Days 1-30)            (Months 1+)

* Auto-enriched from address when possible
```

---

### 3.2 Required Fields (Tier 1)

Collected during initial onboarding. Keep minimal to reduce friction.

| Field | Required | Auto-Enrichable | How Collected |
|-------|----------|-----------------|---------------|
| Address | Yes | N/A | User input + Google Places autocomplete |
| Home Type | Yes | Sometimes (Zillow) | Picker: House, Condo, Townhouse, Multi-family |
| Year Built | Optional at start | Yes (county/Zillow) | Auto-fill or user input |
| Own/Rent | Yes | No | Toggle |
| Email | Yes | No | Account creation |
| Phone | Optional | No | For pro contact/alerts |

**Total Time:** 60-90 seconds

---

### 3.3 Address Lookup & Auto-Enrichment

**Process:**
1. User begins typing address
2. Google Places API provides autocomplete suggestions
3. On selection, trigger enrichment pipeline:

```
Address Selected
       |
       v
+------+------+
| ENRICHMENT  |
| PIPELINE    |
+------+------+
       |
       +----> Zillow API: beds, baths, sqft, year built, home type, Zestimate
       |
       +----> County Records API: year built (confirm), lot size, last sale date
       |
       +----> Climate Zone Lookup: USDA zone, heating/cooling degree days
       |
       +----> Local Context: coastal flag, historic district, HOA likelihood
       |
       v
+------+------+
| MERGE &     |
| DISPLAY     |
+-------------+
       |
       v
"Your 1985 Colonial in Hingham, MA - 4 bed, 2.5 bath"
"Coastal location - we'll remind you about salt damage prevention"
```

**Enrichment Fields:**

| Field | Source | Confidence | User Editable |
|-------|--------|------------|---------------|
| Year Built | County records, Zillow | High | Yes |
| Square Footage | Zillow, MLS | Medium | Yes |
| Beds/Baths | Zillow, MLS | High | Yes |
| Lot Size | County records | High | Yes |
| Last Sale Date | County records | High | No (display only) |
| Home Value Estimate | Zillow | Medium | No (display only) |
| Climate Zone | USDA lookup | High | No |
| Coastal Flag | Geographic calc | High | No |

**Display Pattern:**
- Show auto-enriched data with confidence indicator
- "We found some info about your home. Does this look right?"
- Allow easy correction
- Explain what we'll use this for ("helps us give better maintenance advice")

---

### 3.4 System Information Collection (Tier 2)

Collected progressively as contextually relevant. Never all at once.

#### 3.4.1 HVAC System

**Trigger Contexts:**
- User asks heating/cooling question
- Seasonal reminder (fall = heating prep)
- First winter/summer in new home
- Inspector data references HVAC

**Fields:**

| Field | Input Method | Why We Need It |
|-------|--------------|----------------|
| Heating Type | Picker: Forced air, Boiler/Radiator, Heat pump, Electric baseboard, Other | Maintenance schedule, issue diagnosis |
| Heating Fuel | Picker: Natural gas, Oil, Propane, Electric | Safety alerts, cost estimates |
| AC Type | Picker: Central, Window units, Mini-split, None | Seasonal prep, efficiency advice |
| HVAC Brand | Text input + autocomplete (Carrier, Trane, Lennox, etc.) | Part lookup, common issues |
| HVAC Age | Numeric or "I don't know" | Replacement planning, reliability estimates |
| Last Serviced | Date picker or "I don't know" | Maintenance reminders |
| Known Issues | Free text | Contextual answers |

**Collection UI:**
```
+-----------------------------------------------+
|  Let's learn about your heating system        |
|  (This helps me give you better advice)       |
+-----------------------------------------------+
|                                               |
|  What kind of heating do you have?            |
|                                               |
|  [Forced Air Gas]  [Forced Air Electric]      |
|  [Boiler/Radiator] [Heat Pump]                |
|  [Electric Baseboard] [I'm not sure]          |
|                                               |
+-----------------------------------------------+
|  Not sure? Here's how to tell:                |
|  [Photo guide showing vent vs radiator]       |
+-----------------------------------------------+
```

#### 3.4.2 Plumbing

**Trigger Contexts:**
- User asks plumbing question
- Water heater question/issue
- Winter freeze warnings (South Shore)
- Inspector data references plumbing

**Fields:**

| Field | Input Method |
|-------|--------------|
| Water Heater Type | Picker: Tank (gas), Tank (electric), Tankless, Unknown |
| Water Heater Age | Numeric or "I don't know" |
| Water Heater Location | Picker: Basement, Garage, Utility closet, Attic |
| Main Shutoff Location | Photo upload or description |
| Septic vs Sewer | Picker |
| Known Plumbing Issues | Free text |

#### 3.4.3 Electrical

**Trigger Contexts:**
- User asks electrical question
- Inspector data references electrical
- Home is pre-1970 (common issues)
- Adding new appliances/circuits

**Fields:**

| Field | Input Method |
|-------|--------------|
| Panel Type | Picker: Circuit breakers, Fuses, Unknown |
| Panel Location | Text or photo |
| Service Size | Picker: 100 amp, 200 amp, Unknown |
| Wiring Type | Picker: Copper, Aluminum, Unknown (photo helper) |
| Known Issues | Free text |

#### 3.4.4 Roof

**Trigger Contexts:**
- User asks roof question
- Storm damage season (South Shore nor'easters)
- Home is 15+ years old
- Inspector data references roof

**Fields:**

| Field | Input Method |
|-------|--------------|
| Roof Material | Picker: Asphalt shingle, Wood shingle, Metal, Slate, Tile |
| Roof Age | Numeric or "I don't know" |
| Last Inspection | Date or "Never" |
| Known Issues | Free text (leaks, missing shingles) |

---

### 3.5 Photo Upload for System Identification

**Purpose:** Help users identify systems they don't know about by taking photos.

#### 3.5.1 Supported Photo Identification

| Photo Target | What We Identify | User Prompt |
|--------------|------------------|-------------|
| Water Heater | Type, brand, model, age (from label) | "Snap a photo of your water heater label" |
| HVAC Unit | Brand, model, type, age | "Snap a photo of your furnace/AC unit label" |
| Electrical Panel | Panel type, brand, service size | "Snap a photo of your electrical panel (door open)" |
| Thermostat | Brand, model, smart/manual | "Snap a photo of your thermostat" |
| Exterior | Home style, siding type, roof visible | "Snap a photo of your home's front" |

#### 3.5.2 Photo Upload Flow

```
+-----------------------------------------------+
|  Can you snap a photo of your water heater?   |
|                                               |
|  We'll identify the brand, model, and age     |
|  so we can give you better maintenance tips.  |
+-----------------------------------------------+
|                                               |
|  +-------------------+  +-------------------+ |
|  |                   |  |                   | |
|  |  [Camera Icon]    |  |  [Gallery Icon]   | |
|  |  Take Photo       |  |  Upload Photo     | |
|  |                   |  |                   | |
|  +-------------------+  +-------------------+ |
|                                               |
+-----------------------------------------------+
|  Where to find it:                            |
|  [Diagram showing typical water heater        |
|   locations with label highlighted]           |
+-----------------------------------------------+
|  [Skip for now - I'll do this later]          |
+-----------------------------------------------+
```

#### 3.5.3 Photo Processing

**Process:**
1. Image uploaded to secure storage
2. AI vision model extracts:
   - Brand (logo recognition)
   - Model number (OCR from label)
   - Serial number (OCR - contains manufacture date)
   - Visible condition notes
3. Parse serial number for manufacture date (brand-specific formats)
4. Cross-reference with product database for specs
5. Display findings for user confirmation

**Output Example:**
```
+-----------------------------------------------+
|  Found it!                                    |
|                                               |
|  [Photo thumbnail]                            |
|                                               |
|  Brand: Rheem                                 |
|  Model: XG50T06EC36U1                         |
|  Type: Gas Tank Water Heater                  |
|  Capacity: 50 gallons                         |
|  Age: ~8 years (manufactured 2018)            |
|                                               |
|  [This looks right]  [Let me correct this]    |
+-----------------------------------------------+
|                                               |
|  Good to know: Gas water heaters typically    |
|  last 8-12 years. Yours is in the mid-range.  |
|  We'll remind you about annual flushing.      |
|                                               |
+-----------------------------------------------+
```

---

## 4. Inspector Handoff Flow

### 4.1 Inspector-Side Setup

Before homeowners can be handed off, inspectors configure their Zeke Pro account:

**Inspector Configuration:**
- Company name and logo
- Inspector name and contact info
- Branded QR code generated
- Email/SMS templates customized
- "Ask your inspector" response preferences

### 4.2 Handoff Trigger Points

| Trigger | Method | Timing |
|---------|--------|--------|
| End of inspection | QR code on printed summary sheet | Immediately |
| Report delivery | Link in report delivery email | 24-48 hours post-inspection |
| Inspector follow-up | SMS/email with Zeke invite | 1-7 days post-inspection |
| Inspector app | Share button from client list | Any time |

### 4.3 QR Code Scan Experience

**Step 1: QR Code Scan**
User scans QR code from inspection report or materials.

**URL Structure:**
```
https://zeke.ai/i/[INSPECTOR_CODE]/[INSPECTION_ID]
```

**Step 2: Inspector-Branded Landing**

```
+-----------------------------------------------+
|  [Inspector Logo]                             |
|                                               |
|  Welcome from [Inspector Name]                |
|  [Inspector Company]                          |
+-----------------------------------------------+
|                                               |
|  Your home inspection report is ready to      |
|  explore with Zeke, your AI home assistant.   |
|                                               |
|  Zeke knows what [Inspector Name] found       |
|  and can help you understand and prioritize   |
|  your next steps.                             |
|                                               |
+-----------------------------------------------+
|                                               |
|  [Get Started - View My Inspection Summary]   |
|                                               |
+-----------------------------------------------+
|  +-----+ +-----------+ +-----+                |
|  |     | |           | |     |                |
|  | 1   | | 2         | | 3   |                |
|  |     | |           | |     |                |
|  +-----+ +-----------+ +-----+                |
|  Issues   Questions    Proactive              |
|  Found    Answered     Reminders              |
+-----------------------------------------------+
```

**Step 3: Quick Account Creation**

```
+-----------------------------------------------+
|  Create your free account                     |
+-----------------------------------------------+
|                                               |
|  [Continue with Google]                       |
|                                               |
|  ──────────── or ────────────                 |
|                                               |
|  Email:    [________________________]         |
|  Password: [________________________]         |
|                                               |
|  [Create Account]                             |
|                                               |
+-----------------------------------------------+
|  By continuing, you agree to our Terms and    |
|  Privacy Policy. Your inspector can see your  |
|  questions if you choose "Ask Your Inspector."|
+-----------------------------------------------+
```

### 4.4 Inspection Data Pre-Population

**Data Flow:**
```
Inspector uploads/enters report
         |
         v
+--------+--------+
| REPORT PARSING  |
| AGENT           |
+-----------------+
         |
         v
+--------+--------+
| STRUCTURED      |
| FINDINGS        |
+-----------------+
    |    |    |
    v    v    v
 Issues  Systems  Recommendations
```

**What Gets Extracted:**

| Category | Examples | Used For |
|----------|----------|----------|
| **Home Details** | Address, year built, sqft, beds/baths | Profile pre-population |
| **Systems Found** | HVAC type, water heater type, electrical panel | System profile |
| **System Conditions** | Furnace age, roof condition, etc. | Health score, maintenance schedule |
| **Issues - Safety** | Missing GFCI, gas leak, structural | Priority alerts |
| **Issues - Major** | Roof damage, foundation crack, HVAC failure | Action items |
| **Issues - Minor** | Caulking needed, filter change, etc. | Maintenance checklist |
| **Recommendations** | "Service HVAC annually" | Proactive reminders |

### 4.5 "Your Inspector Noted These Items" Screen

```
+-----------------------------------------------+
|  Your Inspection Summary                      |
|  Inspected: January 15, 2026                  |
|  By: [Inspector Name], [Company]              |
+-----------------------------------------------+
|                                               |
|  [Photo: Front of Home]                       |
|  123 Main Street, Hingham, MA                 |
|  1985 Colonial | 2,400 sqft | 4 bed, 2.5 bath |
|                                               |
+-----------------------------------------------+
|  PRIORITY ITEMS                 [Filter v]    |
+-----------------------------------------------+
|                                               |
|  [!] SAFETY - Address Soon         2 items    |
|  +------------------------------------------+ |
|  | Missing GFCI outlets in bathrooms        | |
|  | [Learn More] [Find an Electrician]       | |
|  +------------------------------------------+ |
|  | Water heater lacking proper venting      | |
|  | [Learn More] [Ask Your Inspector]        | |
|  +------------------------------------------+ |
|                                               |
|  [!] MAJOR - Plan to Address       3 items    |
|  +------------------------------------------+ |
|  | Roof showing wear (est. 5-8 years left)  | |
|  | [Learn More] [Get Roof Inspection Quote] | |
|  +------------------------------------------+ |
|  | Furnace is 18 years old                  | |
|  | [Learn More] [Schedule Tune-Up]          | |
|  +------------------------------------------+ |
|                                               |
|  [i] MINOR - Routine Maintenance   12 items   |
|  +------------------------------------------+ |
|  | Caulking around windows needs refresh    | |
|  | Dryer vent needs cleaning                | |
|  | + 10 more items                          | |
|  +------------------------------------------+ |
|                                               |
+-----------------------------------------------+
|                                               |
|  [Ask Zeke a Question About Your Home]        |
|                                               |
+-----------------------------------------------+
```

### 4.6 Issue Prioritization Logic

**Priority Levels:**

| Level | Criteria | UI Treatment | Timeframe |
|-------|----------|--------------|-----------|
| **SAFETY** | Immediate risk to occupants | Red, top of list, push notification | Address within days |
| **MAJOR** | Significant cost or damage if ignored | Orange, high visibility | Address within weeks/months |
| **MODERATE** | Should be addressed but not urgent | Yellow | Address within 6-12 months |
| **MINOR** | Routine maintenance items | Gray | Address as convenient |
| **MONITOR** | Watch for changes | Blue | Check periodically |

**Sorting Algorithm:**
1. Safety items first (sorted by severity)
2. Major items (sorted by cost of delay)
3. Quick wins under $100 (encourages action)
4. Remaining by category

### 4.7 "Ask Your Inspector" Connection

**Purpose:** Maintain inspector-homeowner relationship while reducing inspector's repetitive Q&A burden.

**Flow:**
```
User asks question
       |
       v
+------+------+
| AI ANSWERS  |
| (90% of Qs) |
+------+------+
       |
       v
Was this helpful? [Yes] [No] [Ask My Inspector]
       |                            |
       v                            v
   End of flow            +--------+--------+
                          | ESCALATE TO     |
                          | INSPECTOR       |
                          +-----------------+
                                  |
                                  v
                          Inspector notified
                          (email/app notification)
                                  |
                                  v
                          Inspector can respond
                          in-app or mark "AI handled"
```

**Inspector Dashboard View:**
```
+-----------------------------------------------+
|  Client Questions                    [Filter] |
+-----------------------------------------------+
|                                               |
|  [New] John Smith - 123 Main St               |
|  "Is the crack in my foundation normal?"      |
|  Inspection: Jan 15 | Asked: Jan 22           |
|  [View Context] [Respond] [AI Handled Well]   |
|                                               |
+-----------------------------------------------+
```

**Escalation Criteria:**
- User explicitly clicks "Ask My Inspector"
- Safety-related questions
- Questions directly referencing specific inspection findings
- User expresses confusion after AI response

---

## 5. Gamification & Journey

### 5.1 Gamification Philosophy

**Goals:**
- Drive profile completion without nagging
- Create engagement in the critical first 7 days
- Make home maintenance feel achievable, not overwhelming
- Build habits around seasonal/routine maintenance

**Mechanics Used:**
- Points (Zeke Points or "Home Health Points")
- Day-based progression (Day 1, Day 7, Day 30)
- Achievement badges
- Checklists with completion tracking
- Seasonal unlocks
- Streaks (optional, later)

### 5.2 Points System

**Point Structure:**

| Action | Points | Category |
|--------|--------|----------|
| **Profile Building** | | |
| Complete basic profile | 50 | Setup |
| Add a system (HVAC, plumbing, etc.) | 25 each | Setup |
| Upload a system photo | 30 each | Setup |
| Complete first week checklist | 100 | Setup |
| **Engagement** | | |
| Ask first question | 20 | Engagement |
| Ask 5 questions | 50 | Engagement |
| Return after 24 hours | 15 | Engagement |
| 7-day streak | 75 | Engagement |
| **Actions** | | |
| Complete a maintenance task | 25 | Action |
| Mark issue as resolved | 30 | Action |
| Get a pro quote | 20 | Action |
| Leave a pro review | 40 | Action |
| **Discovery** | | |
| Find main water shutoff | 50 | Discovery |
| Find electrical panel | 30 | Discovery |
| Find furnace filter size | 25 | Discovery |

**Point Display:**
```
+-----------------------------------------------+
|  [Profile Avatar]                             |
|  Welcome, Sarah!                              |
|  123 Main St, Hingham                         |
+-----------------------------------------------+
|                                               |
|  +------------------+  +------------------+   |
|  |     275          |  |  Home Rookie     |   |
|  |  Home Points     |  |  [Badge Icon]    |   |
|  +------------------+  +------------------+   |
|                                               |
+-----------------------------------------------+
```

### 5.3 Day-Based Progression

**Day 1 (Today)**
```
+-----------------------------------------------+
|  DAY 1: Know Your Home                        |
|  -------------------------------------------- |
|                                               |
|  [ ] Find your main water shutoff       50 pts|
|      (We'll show you where to look)           |
|                                               |
|  [ ] Ask Zeke your first question       20 pts|
|      (Try: "When should I change my filter?") |
|                                               |
|  [ ] Snap a photo of your water heater  30 pts|
|      (We'll identify the brand and age)       |
|                                               |
|  -------------------------------------------- |
|  Complete Day 1: Unlock Day 2 Checklist       |
|  Bonus: Complete all in 24 hours = +50 pts    |
+-----------------------------------------------+
```

**Day 2-7 Progression:**

| Day | Theme | Tasks |
|-----|-------|-------|
| Day 1 | Know Your Home | Water shutoff, first question, water heater photo |
| Day 2 | Safety First | Smoke detector check, CO detector check, fire extinguisher location |
| Day 3 | Climate Control | Thermostat photo, furnace filter size, HVAC details |
| Day 4 | Electrical Basics | Panel location, circuit breaker test, GFCI test |
| Day 5 | Plumbing Essentials | Under-sink check, toilet maintenance, drain cleaning |
| Day 6 | Exterior Walk | Roof visual check, gutter inspection, foundation perimeter |
| Day 7 | Your Maintenance Plan | Review recommendations, set reminders, connect with pros |

**Day 12, Day 30, Day 90 Milestones:**
- Day 12: First seasonal check-in
- Day 30: "First Month" badge + comprehensive status review
- Day 90: Quarterly maintenance check

### 5.4 Achievement Badges

**Badge Categories:**

| Badge | Requirement | Description |
|-------|-------------|-------------|
| **Setup Badges** | | |
| Home Rookie | Complete account + address | "Welcome to homeownership!" |
| Profile Builder | 50% profile complete | "You're getting to know your home" |
| Home Expert | 100% profile complete | "You know your home inside and out" |
| **Discovery Badges** | | |
| Shutoff Master | Find water + gas shutoffs | "You can stop a disaster" |
| Control Central | Locate all utility controls | "You know where everything is" |
| System Sleuth | Photo ID all major systems | "Your home has no secrets" |
| **Engagement Badges** | | |
| First Question | Ask your first question | "Curiosity is key" |
| Question Quest | Ask 25 questions | "Always learning" |
| Weekly Regular | Return 7 days in a row | "Building great habits" |
| **Action Badges** | | |
| Task Tackler | Complete 5 maintenance tasks | "Taking care of business" |
| DIY Champion | Complete 10 DIY fixes | "Handy homeowner" |
| Pro Connector | Get 3 pro quotes | "Building your team" |
| **Seasonal Badges** | | |
| Winter Ready | Complete winter prep checklist | "Bring on the cold!" |
| Summer Set | Complete summer prep checklist | "Ready to chill" |
| Storm Prepper | Complete storm prep checklist | "Nor'easter ready" |

**Badge Display:**
```
+-----------------------------------------------+
|  Your Badges (7 of 24)                        |
+-----------------------------------------------+
|                                               |
|  [Home Rookie] [Shutoff Master] [First Q]     |
|  [Profile Builder] [Task Tackler] [Winter]    |
|  [Weekly Regular]                             |
|                                               |
|  +------------------------------------------+ |
|  | NEXT BADGE: System Sleuth                | |
|  | Photo ID 3 more systems to unlock        | |
|  | Progress: [======    ] 4/7               | |
|  +------------------------------------------+ |
|                                               |
+-----------------------------------------------+
```

### 5.5 First-Week Checklist (Default - Non-Inspector)

```
+-----------------------------------------------+
|  FIRST WEEK ESSENTIALS                        |
|  Complete these to really know your home      |
|  -------------------------------------------- |
|  Progress: [==========       ] 6/15           |
+-----------------------------------------------+
|                                               |
|  SAFETY (Do First)                            |
|  [x] Test smoke detectors                     |
|  [x] Locate fire extinguisher                 |
|  [ ] Test CO detector                         |
|  [ ] Find main water shutoff                  |
|  [ ] Find gas shutoff (if applicable)         |
|  [ ] Find electrical panel                    |
|                                               |
|  CLIMATE                                      |
|  [x] Check/replace furnace filter             |
|  [ ] Set thermostat schedule                  |
|  [x] Note HVAC brand and age                  |
|                                               |
|  PLUMBING                                     |
|  [x] Know water heater location               |
|  [ ] Check for leaks under sinks              |
|  [ ] Locate clean-out access                  |
|                                               |
|  EXTERIOR                                     |
|  [x] Walk the perimeter                       |
|  [ ] Check gutters and downspouts             |
|  [ ] Note any visible damage                  |
|                                               |
+-----------------------------------------------+
|  [Mark All Complete]  [Skip for Now]          |
+-----------------------------------------------+
```

### 5.6 Seasonal Unlocks

**Mechanic:** Certain content, tasks, and badges unlock based on season and geography.

**South Shore MA Seasonal Calendar:**

| Month | Unlock | Content |
|-------|--------|---------|
| Sep-Oct | Fall Prep | Heating system check, gutter cleaning, storm prep |
| Nov | Winter Prep | Pipe insulation, ice dam prevention, emergency kit |
| Dec-Feb | Winter Active | Frozen pipe alerts, ice dam monitoring, heating issues |
| Mar | Spring Thaw | Post-winter inspection, damage assessment |
| Apr-May | Spring Prep | AC prep, exterior paint check, landscaping |
| Jun-Aug | Summer Active | Humidity control, pest prevention, deck maintenance |
| Aug | Storm Season | Hurricane prep for coastal homes |

**Seasonal Unlock UI:**
```
+-----------------------------------------------+
|  [UNLOCKED] Fall Prep Season                  |
|  September 15 - November 15                   |
+-----------------------------------------------+
|                                               |
|  New checklist unlocked!                      |
|                                               |
|  FALL PREP FOR SOUTH SHORE HOMES              |
|  [ ] Schedule heating system tune-up          |
|  [ ] Clean gutters and downspouts             |
|  [ ] Check weatherstripping on doors          |
|  [ ] Drain outdoor faucets                    |
|  [ ] Service snow blower / stock ice melt     |
|  [ ] Check attic for ice dam prevention       |
|                                               |
|  Complete for "Winter Ready" badge!           |
|                                               |
+-----------------------------------------------+
```

---

## 6. First Value Moment

### 6.1 Defining "Value Moment"

**Primary Value Moment:** User gets a useful answer to a home question
**Secondary Value Moments:**
- User learns something about their specific home
- User finds their water shutoff (peace of mind)
- User gets a proactive reminder they didn't know they needed
- User connects with a quality pro

### 6.2 Time to Value Targets

| Entry Point | Target Time to Value | Primary Value Moment |
|-------------|---------------------|---------------------|
| Direct Signup | < 2 minutes | Question answered |
| Inspector Handoff | < 30 seconds | See prioritized inspection findings |
| Agent Gift | < 1 minute | Move-in checklist + question answered |

### 6.3 First Question Answered

**Design Priority:** Get users to ask a question as fast as possible.

**Prompt Patterns:**

For new homeowners:
```
+-----------------------------------------------+
|  Ask Zeke anything about your home            |
+-----------------------------------------------+
|                                               |
|  [Try: "Where is my water shutoff usually?"]  |
|  [Try: "When should I change my furnace       |
|         filter?"]                             |
|  [Try: "Is this crack in my wall normal?"]    |
|                                               |
|  [__________________________________ Send]    |
|                                               |
+-----------------------------------------------+
```

For inspector handoff:
```
+-----------------------------------------------+
|  Your inspector found 15 items.               |
|  Ask me anything about them.                  |
+-----------------------------------------------+
|                                               |
|  [Ask: "What should I fix first?"]            |
|  [Ask: "How much will the roof repair cost?"] |
|  [Ask: "Is the electrical issue dangerous?"]  |
|                                               |
|  [__________________________________ Send]    |
|                                               |
+-----------------------------------------------+
```

### 6.4 First Task Completed

**Easy Win Tasks (< 5 minutes):**
1. Find your water shutoff valve
2. Check/replace your furnace filter
3. Test your smoke detectors
4. Take a photo of your water heater label

**Task Completion Flow:**
```
Task: Find your water shutoff valve

+-----------------------------------------------+
|  Your main water shutoff is usually:          |
+-----------------------------------------------+
|                                               |
|  [Illustration showing common locations]      |
|                                               |
|  - Near water heater                          |
|  - In basement, along front wall              |
|  - In crawl space near where water enters     |
|  - In utility closet                          |
|                                               |
|  For your 1985 Colonial in Hingham:           |
|  Most likely in the basement, front wall.     |
|                                               |
+-----------------------------------------------+
|                                               |
|  [I Found It! +50 pts]                        |
|  [I Need Help Finding It]                     |
|                                               |
+-----------------------------------------------+
```

### 6.5 First Proactive Reminder

**Trigger:** Based on home profile + season + geography.

**Example (South Shore, October):**
```
PUSH NOTIFICATION:
"Hi Sarah! October in Hingham means it's time to drain your outdoor
faucets before the first freeze. Takes 5 minutes. Tap for how."

IN-APP:
+-----------------------------------------------+
|  SEASONAL TIP for 123 Main St                 |
+-----------------------------------------------+
|                                               |
|  Time to winterize your outdoor faucets       |
|                                               |
|  South Shore typically sees first freeze      |
|  in mid-November. Drain now to avoid          |
|  burst pipes later.                           |
|                                               |
|  [Show Me How]  [Already Done]  [Remind Later]|
|                                               |
+-----------------------------------------------+
```

---

## 7. Screen-by-Screen Flows

### 7.1 Flow A: Direct Signup

**Total Screens:** 7
**Estimated Time:** 3-4 minutes

---

#### Screen A1: Landing Page

**URL:** zeke.ai or zeke.ai/signup

```
+-----------------------------------------------+
|  [Zeke Logo]                          [Login] |
+-----------------------------------------------+
|                                               |
|  Your home has questions.                     |
|  Zeke has answers.                            |
|                                               |
|  AI-powered assistant that knows YOUR home.   |
|  Personalized advice, maintenance reminders,  |
|  and pro connections when you need them.      |
|                                               |
+-----------------------------------------------+
|                                               |
|  [Get Started - Free]                         |
|                                               |
|  or ask a question now:                       |
|  [__________________________________ Send]    |
|                                               |
+-----------------------------------------------+
|                                               |
|  [How it works] [Pricing] [For Inspectors]    |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** None
**Time:** 10 seconds

---

#### Screen A2: Quick Question (Optional Demo)

**Purpose:** Let user experience value before creating account

```
+-----------------------------------------------+
|  Ask Zeke anything about your home            |
+-----------------------------------------------+
|                                               |
|  User: "How often should I change my          |
|         furnace filter?"                      |
|                                               |
|  Zeke: "Most furnace filters should be        |
|  changed every 1-3 months, depending on:      |
|                                               |
|  - Filter type (basic vs HEPA)                |
|  - Pets in the home                           |
|  - Allergies                                  |
|  - Season (more often in high-use seasons)    |
|                                               |
|  For a more personalized recommendation,      |
|  tell me about your HVAC system."             |
|                                               |
+-----------------------------------------------+
|                                               |
|  [Create Free Account for Personalized Tips]  |
|  [Ask Another Question]                       |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** Question text (stored for later association)
**Time:** 30-60 seconds

---

#### Screen A3: Account Creation

```
+-----------------------------------------------+
|  Create your free Zeke account                |
+-----------------------------------------------+
|                                               |
|  [Continue with Google]                       |
|                                               |
|  [Continue with Apple]                        |
|                                               |
|  ──────────── or ────────────                 |
|                                               |
|  Email:    [________________________]         |
|  Password: [________________________]         |
|                                               |
|  [Create Account]                             |
|                                               |
+-----------------------------------------------+
|  By continuing, you agree to our Terms of     |
|  Service and Privacy Policy.                  |
+-----------------------------------------------+
```

**Data Collected:** Email, password (or OAuth)
**Time:** 20-30 seconds

---

#### Screen A4: Home Address

```
+-----------------------------------------------+
|  Where's your home?                           |
+-----------------------------------------------+
|                                               |
|  We'll use this to personalize your           |
|  maintenance tips, find local pros, and       |
|  send weather-related reminders.              |
|                                               |
|  [Start typing your address...             ]  |
|                                               |
|  Autocomplete dropdown:                       |
|  +------------------------------------------+ |
|  | 123 Main Street, Hingham, MA 02043       | |
|  | 123 Main Street, Norwell, MA 02061       | |
|  | 123 Main Avenue, Weymouth, MA 02188      | |
|  +------------------------------------------+ |
|                                               |
+-----------------------------------------------+
|  [I'm a renter]  [I manage multiple homes]    |
+-----------------------------------------------+
```

**Data Collected:** Full address
**Enrichment Triggered:** Zillow, county records
**Time:** 15-20 seconds

---

#### Screen A5: Home Confirmation

```
+-----------------------------------------------+
|  Is this right?                               |
+-----------------------------------------------+
|                                               |
|  123 Main Street                              |
|  Hingham, MA 02043                            |
|                                               |
|  [Street view or satellite image]             |
|                                               |
|  We found:                                    |
|  +------------------------------------------+ |
|  | Built: 1985                              | |
|  | Style: Colonial                          | |
|  | Size: 2,400 sqft                         | |
|  | Beds: 4  |  Baths: 2.5                   | |
|  +------------------------------------------+ |
|                                               |
|  [Yes, this is my home]                       |
|  [Something's not right - let me edit]        |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** Confirmation of auto-enriched data
**Time:** 10 seconds

---

#### Screen A6: Home Type & Ownership

```
+-----------------------------------------------+
|  A few quick details                          |
+-----------------------------------------------+
|                                               |
|  Do you own or rent?                          |
|  [Own]  [Rent]                                |
|                                               |
|  Home type: (pre-selected: House)             |
|  [House] [Condo] [Townhouse] [Multi-family]   |
|                                               |
+-----------------------------------------------+
|                                               |
|  Optional: How long have you lived here?      |
|  [Just moved in]  [< 1 year]  [1-5 years]     |
|  [5+ years]                                   |
|                                               |
+-----------------------------------------------+
|                                               |
|  [Continue]                                   |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** Own/rent, home type, tenure
**Time:** 10 seconds

---

#### Screen A7: Onboarding Complete / Dashboard

```
+-----------------------------------------------+
|  Welcome to Zeke!                             |
|  You've earned 50 Home Points                 |
+-----------------------------------------------+
|                                               |
|  123 Main Street, Hingham                     |
|  1985 Colonial | 2,400 sqft                   |
|                                               |
+-----------------------------------------------+
|  YOUR FIRST WEEK CHECKLIST        2/15 done   |
|  [See checklist]                              |
+-----------------------------------------------+
|                                               |
|  ASK ZEKE ANYTHING                            |
|  [What should I know about my 1985 home?   ]  |
|                                               |
+-----------------------------------------------+
|  QUICK TASKS                                  |
|  [ ] Find your water shutoff         +50 pts  |
|  [ ] Snap your water heater          +30 pts  |
|  [ ] Check your furnace filter       +25 pts  |
+-----------------------------------------------+
|  SEASONAL: Fall Prep                          |
|  [ ] Drain outdoor faucets                    |
|  [ ] Schedule heating tune-up                 |
+-----------------------------------------------+
```

**Data Collected:** None (display only)
**Time:** N/A (user exploration)

---

### 7.2 Flow B: Inspector Handoff

**Total Screens:** 5
**Estimated Time:** 2-3 minutes

---

#### Screen B1: Inspector Landing

**URL:** zeke.ai/i/[INSPECTOR_CODE]/[INSPECTION_ID]

```
+-----------------------------------------------+
|  [Inspector Company Logo]                     |
+-----------------------------------------------+
|                                               |
|  Your inspection report is ready              |
|                                               |
|  [Inspector Photo]                            |
|  Inspected by: Mike Smith                     |
|  ABC Home Inspections                         |
|  January 15, 2026                             |
|                                               |
+-----------------------------------------------+
|                                               |
|  Zeke will help you understand your           |
|  inspection findings and know what to         |
|  do next.                                     |
|                                               |
|  [View My Inspection Summary]                 |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** None (viewing only)
**Time:** 5 seconds

---

#### Screen B2: Quick Account Creation

```
+-----------------------------------------------+
|  Create your account to access your           |
|  inspection findings anytime                  |
+-----------------------------------------------+
|                                               |
|  Email from inspection: [john@email.com    ]  |
|  (pre-filled if provided to inspector)        |
|                                               |
|  [Continue with Google]                       |
|                                               |
|  ──────────── or ────────────                 |
|                                               |
|  Create password: [____________________]      |
|                                               |
|  [Create Account & View Inspection]           |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** Email, password
**Time:** 15-20 seconds

---

#### Screen B3: Pre-Populated Home Profile

```
+-----------------------------------------------+
|  Your Home Profile                            |
|  Pre-loaded from your inspection              |
+-----------------------------------------------+
|                                               |
|  [Photo from inspection or street view]       |
|                                               |
|  123 Main Street, Hingham, MA                 |
|  Built: 1985 | 2,400 sqft | Colonial          |
|                                               |
+-----------------------------------------------+
|  SYSTEMS IDENTIFIED                           |
|  +------------------------------------------+ |
|  | HVAC: Gas forced air furnace (~12 yrs)   | |
|  | Water Heater: Gas tank (Rheem, 8 yrs)    | |
|  | Electrical: 200A panel, updated          | |
|  | Roof: Asphalt shingle (~15 yrs)          | |
|  +------------------------------------------+ |
+-----------------------------------------------+
|                                               |
|  [This looks right - Show me the findings]    |
|  [I need to make corrections]                 |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** Confirmation of pre-populated data
**Time:** 10 seconds

---

#### Screen B4: Inspection Findings Summary

```
+-----------------------------------------------+
|  Your Inspection Findings                     |
|  Mike Smith noted 15 items for your attention |
+-----------------------------------------------+
|                                               |
|  NEEDS ATTENTION NOW                 2 items  |
|  +------------------------------------------+ |
|  | [!] Missing GFCI outlets - bathrooms     | |
|  |     Safety issue - recommend electrician | |
|  |     [Learn More] [Find Electrician]      | |
|  +------------------------------------------+ |
|  | [!] Water heater venting issue           | |
|  |     Potential CO risk                    | |
|  |     [Learn More] [Ask Inspector]         | |
|  +------------------------------------------+ |
|                                               |
|  PLAN TO ADDRESS                     3 items  |
|  +------------------------------------------+ |
|  | Roof wear - 5-8 years remaining          | |
|  | Furnace age - 18 years, near end of life | |
|  | Deck boards showing rot                  | |
|  +------------------------------------------+ |
|                                               |
|  MINOR / MAINTENANCE                12 items  |
|  [View all 12 items]                          |
|                                               |
+-----------------------------------------------+
|                                               |
|  [Ask Zeke a question about these findings]   |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** Issue views/clicks tracked
**Time:** 60-90 seconds (exploration)

---

#### Screen B5: Ask About Findings

```
+-----------------------------------------------+
|  Ask Zeke about your inspection               |
+-----------------------------------------------+
|                                               |
|  User: "How dangerous is the GFCI issue?"     |
|                                               |
|  Zeke: "The missing GFCI outlets in your      |
|  bathrooms are a moderate safety concern.     |
|                                               |
|  GFCIs protect against electrical shock in    |
|  wet areas. Without them, there's increased   |
|  risk of shock if an appliance falls in water |
|  or you touch something while wet.            |
|                                               |
|  **Recommendation:** Have an electrician      |
|  install GFCIs within the next few weeks.     |
|  Typical cost: $150-300 for 2-3 outlets.      |
|                                               |
|  This is code-required for bathrooms in       |
|  homes sold since 1975, so it's also a good   |
|  investment for resale."                      |
|                                               |
+-----------------------------------------------+
|                                               |
|  [Find an Electrician] [Ask Another Question] |
|  [Ask My Inspector About This]                |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** Questions, pro referral clicks
**Time:** Variable (ongoing use)

---

### 7.3 Flow C: Agent Gift

**Total Screens:** 6
**Estimated Time:** 2-3 minutes

---

#### Screen C1: Agent Gift Landing

**URL:** zeke.ai/gift/[AGENT_CODE] or zeke.ai/g/[GIFT_ID]

```
+-----------------------------------------------+
|                                               |
|  Congratulations on your new home!            |
|                                               |
+-----------------------------------------------+
|  [Agent Photo]                                |
|  A gift from Sarah Johnson                    |
|  Coldwell Banker Hingham                      |
+-----------------------------------------------+
|                                               |
|  Welcome to homeownership! I'm gifting you    |
|  Zeke, an AI assistant that will help you     |
|  take care of your new home.                  |
|                                               |
|  Ask questions, get reminders, and find       |
|  trusted pros whenever you need them.         |
|                                               |
|  [Activate My Gift]                           |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** Gift redemption tracked
**Time:** 5 seconds

---

#### Screen C2: Quick Account Creation

```
+-----------------------------------------------+
|  Let's set up your account                    |
+-----------------------------------------------+
|                                               |
|  [Continue with Google]                       |
|                                               |
|  [Continue with Apple]                        |
|                                               |
|  ──────────── or ────────────                 |
|                                               |
|  Email:    [________________________]         |
|  Password: [________________________]         |
|                                               |
|  [Create Account]                             |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** Email, password
**Time:** 15-20 seconds

---

#### Screen C3: Home Address

```
+-----------------------------------------------+
|  Where's your new home?                       |
+-----------------------------------------------+
|                                               |
|  [Start typing your address...             ]  |
|                                               |
+-----------------------------------------------+
|  Is this a:                                   |
|  [New Purchase] [Just Moved In] [Other]       |
+-----------------------------------------------+
|                                               |
|  [Continue]                                   |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** Address, purchase status
**Time:** 15 seconds

---

#### Screen C4: Home Confirmation

```
+-----------------------------------------------+
|  Welcome to 123 Main Street!                  |
+-----------------------------------------------+
|                                               |
|  [Street view image]                          |
|                                               |
|  Here's what we know about your new home:     |
|  +------------------------------------------+ |
|  | Built: 1985                              | |
|  | Style: Colonial                          | |
|  | Size: 2,400 sqft                         | |
|  | 4 beds, 2.5 baths                        | |
|  +------------------------------------------+ |
|                                               |
|  [Yes, this is right]                         |
|  [Make corrections]                           |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** Confirmation
**Time:** 10 seconds

---

#### Screen C5: Move-In Checklist Introduction

```
+-----------------------------------------------+
|  Moving in? Here's your first-week checklist  |
+-----------------------------------------------+
|                                               |
|  These are the essential things every new     |
|  homeowner should know about their home:      |
|                                               |
|  KNOW WHERE THINGS ARE                        |
|  [ ] Main water shutoff valve                 |
|  [ ] Electrical panel                         |
|  [ ] Gas shutoff (if applicable)              |
|  [ ] Thermostat                               |
|                                               |
|  SAFETY FIRST                                 |
|  [ ] Test smoke detectors                     |
|  [ ] Test CO detectors                        |
|  [ ] Locate fire extinguisher                 |
|                                               |
|  CLIMATE CONTROL                              |
|  [ ] Find furnace filter size                 |
|  [ ] Set thermostat schedule                  |
|                                               |
|  [Start My Checklist]                         |
|                                               |
+-----------------------------------------------+
```

**Data Collected:** Checklist viewed
**Time:** 15 seconds

---

#### Screen C6: Dashboard with Agent Attribution

```
+-----------------------------------------------+
|  Welcome to Zeke!                             |
|  Gifted by Sarah Johnson, Coldwell Banker     |
+-----------------------------------------------+
|                                               |
|  123 Main Street, Hingham                     |
|  1985 Colonial | 2,400 sqft                   |
|                                               |
+-----------------------------------------------+
|  MOVE-IN CHECKLIST                 0/12 done  |
|  [Start your first task]                      |
+-----------------------------------------------+
|                                               |
|  ASK ZEKE ANYTHING                            |
|  Common new homeowner questions:              |
|  ["Where's my water shutoff?"]                |
|  ["What maintenance should I do first?"]      |
|  ["What's this switch for?"]                  |
|                                               |
|  [__________________________________ Send]    |
|                                               |
+-----------------------------------------------+
|  SEASONAL: Fall Prep for New Homeowners       |
|  [ ] Get heating system inspected             |
|  [ ] Find your furnace filter size            |
+-----------------------------------------------+
```

**Data Collected:** Dashboard view
**Time:** Ongoing use

---

## 8. Data Model

### 8.1 User Object

```javascript
{
  id: "uuid",
  email: "user@example.com",
  created_at: "2026-01-15T10:30:00Z",

  // Entry source tracking
  entry_point: "inspector_handoff" | "direct_signup" | "agent_gift",
  source_code: "INSPECTOR_ABC123" | "AGENT_SJ456" | null,
  source_name: "Mike Smith, ABC Inspections" | "Sarah Johnson, Coldwell",
  referral_code: "FRIEND123" | null,

  // Engagement
  points: 275,
  badges: ["home_rookie", "shutoff_master", "first_question"],
  streak_days: 5,
  last_active: "2026-01-20T14:22:00Z",

  // Preferences
  notification_preferences: {
    email_reminders: true,
    push_notifications: true,
    sms_alerts: false
  }
}
```

### 8.2 Home Profile Object

```javascript
{
  id: "uuid",
  user_id: "user_uuid",

  // Basic Info (Tier 1)
  address: {
    street: "123 Main Street",
    city: "Hingham",
    state: "MA",
    zip: "02043",
    lat: 42.2418,
    lng: -70.8898
  },
  home_type: "single_family" | "condo" | "townhouse" | "multi_family",
  ownership: "own" | "rent",
  year_built: 1985,
  sqft: 2400,
  beds: 4,
  baths: 2.5,

  // Location context
  climate_zone: "5A",
  coastal: true,
  flood_zone: false,

  // Systems (Tier 2 - Progressive)
  systems: {
    hvac: {
      heating_type: "forced_air_gas",
      cooling_type: "central_ac",
      brand: "Carrier",
      model: "58CTW090---16",
      age_years: 12,
      last_serviced: "2025-10-15",
      photo_url: "https://...",
      known_issues: ["Noisy on startup"],
      condition: "good"
    },
    water_heater: {
      type: "tank_gas",
      brand: "Rheem",
      model: "XG50T06EC36U1",
      capacity_gallons: 50,
      age_years: 8,
      location: "basement",
      photo_url: "https://...",
      condition: "good"
    },
    electrical: {
      panel_type: "breakers",
      service_size_amps: 200,
      panel_location: "basement",
      wiring_type: "copper",
      known_issues: []
    },
    plumbing: {
      water_source: "municipal",
      sewer_type: "municipal",
      main_shutoff_location: "basement, front wall",
      shutoff_photo_url: "https://...",
      known_issues: []
    },
    roof: {
      material: "asphalt_shingle",
      age_years: 15,
      last_inspection: "2026-01-15",
      known_issues: ["Wear on south-facing slope"],
      condition: "fair"
    }
  },

  // Inspection data (if applicable)
  inspection: {
    inspector_id: "inspector_uuid",
    inspection_date: "2026-01-15",
    report_url: "https://...",
    findings: [/* array of finding objects */]
  },

  // Profile completion
  profile_completion: {
    basic: 100,
    hvac: 85,
    plumbing: 60,
    electrical: 40,
    roof: 70,
    overall: 62
  },

  created_at: "2026-01-15T10:30:00Z",
  updated_at: "2026-01-20T14:22:00Z"
}
```

### 8.3 Finding Object (from Inspection)

```javascript
{
  id: "uuid",
  home_id: "home_uuid",
  inspection_id: "inspection_uuid",

  // Classification
  category: "electrical" | "plumbing" | "hvac" | "roof" | "structural" | "exterior" | "interior",
  severity: "safety" | "major" | "moderate" | "minor" | "monitor",

  // Content
  title: "Missing GFCI outlets in bathrooms",
  description: "Bathrooms on first and second floor lack GFCI protection on outlets near water sources.",
  recommendation: "Install GFCI outlets or GFCI breakers for bathroom circuits.",

  // Cost/effort estimates
  estimated_cost_low: 150,
  estimated_cost_high: 300,
  diy_feasible: false,
  urgency: "weeks",

  // Status
  status: "open" | "in_progress" | "resolved" | "dismissed",
  resolved_date: null,
  resolution_notes: null,

  // Tracking
  viewed: true,
  asked_question: true,
  requested_pro: false,

  created_at: "2026-01-15T10:30:00Z"
}
```

### 8.4 Task/Checklist Object

```javascript
{
  id: "uuid",
  user_id: "user_uuid",
  home_id: "home_uuid",

  // Task info
  type: "onboarding" | "seasonal" | "maintenance" | "custom",
  category: "safety" | "discovery" | "maintenance" | "improvement",
  title: "Find your main water shutoff",
  description: "Locate and test your main water shutoff valve so you can quickly stop water in an emergency.",

  // Scheduling
  due_date: "2026-01-22",
  seasonal_trigger: "fall",
  day_number: 1,  // For day-based progression

  // Rewards
  points: 50,
  badge_unlock: "shutoff_master",

  // Status
  status: "pending" | "completed" | "skipped",
  completed_at: "2026-01-16T11:00:00Z",

  // Evidence
  photo_url: "https://...",
  notes: "Found it behind the water heater",

  created_at: "2026-01-15T10:30:00Z"
}
```

---

## 9. Success Metrics

### 9.1 Onboarding Funnel Metrics

| Stage | Metric | Target | Measurement |
|-------|--------|--------|-------------|
| Landing | Bounce rate | < 50% | % who leave without action |
| Account | Creation rate | > 60% | % who create account after landing |
| Profile | Address completion | > 95% | % who enter address |
| Profile | Basic profile complete | > 90% | % with type + ownership |
| Activation | First question asked | > 70% | % who ask question in session 1 |
| Activation | First task completed | > 50% | % who complete a task in session 1 |

### 9.2 Engagement Metrics (First Week)

| Metric | Target |
|--------|--------|
| Day 1 return rate | > 40% |
| Day 3 return rate | > 30% |
| Day 7 return rate | > 25% |
| Questions per user (week 1) | > 3 |
| Tasks completed (week 1) | > 3 |
| Profile completion (week 1) | > 50% |

### 9.3 Entry Point Comparison

| Metric | Direct | Inspector | Agent Gift |
|--------|--------|-----------|------------|
| Activation rate | 60% | 80% | 70% |
| Day 7 retention | 25% | 45% | 35% |
| Profile completion (D7) | 40% | 75% | 55% |
| First pro referral | 5% | 15% | 8% |
| NPS (30-day) | 40 | 55 | 45 |

### 9.4 Gamification Metrics

| Metric | Target |
|--------|--------|
| Avg points earned (week 1) | > 150 |
| % completing day 1 checklist | > 40% |
| % completing first week checklist | > 20% |
| Badges earned (avg, month 1) | > 3 |
| Photo uploads (month 1) | > 2 |

---

## 10. Edge Cases & Error States

### 10.1 Address Edge Cases

| Scenario | Handling |
|----------|----------|
| Address not found in autocomplete | Allow manual entry, skip enrichment |
| Enrichment returns conflicting data | Show both, ask user to confirm |
| New construction (no records) | Skip enrichment, prompt for manual entry |
| Multi-unit building | Ask for unit number, limit enrichment |
| PO Box entered | Prompt for physical address |

### 10.2 Inspector Handoff Edge Cases

| Scenario | Handling |
|----------|----------|
| Inspection link expired | Show friendly error, option to contact inspector |
| No inspection data found | Fall back to direct signup flow |
| User already has account | Merge inspection data with existing profile |
| Multiple inspections for same home | Show most recent, archive older |
| Inspector account deactivated | Show data but remove "Ask Inspector" option |

### 10.3 Account Edge Cases

| Scenario | Handling |
|----------|----------|
| Email already in use | Offer login, password reset, or merge |
| OAuth fails | Fall back to email signup |
| User closes mid-onboarding | Save progress, resume on return |
| Existing user scans inspector QR | Add inspection to existing profile |
| Gift code already redeemed | Show friendly message, offer regular signup |

### 10.4 Error States

**Network Error:**
```
+-----------------------------------------------+
|  [Wifi icon with X]                           |
|                                               |
|  Couldn't connect                             |
|                                               |
|  Check your internet connection and try       |
|  again.                                       |
|                                               |
|  [Try Again]                                  |
+-----------------------------------------------+
```

**Service Error:**
```
+-----------------------------------------------+
|  [Wrench icon]                                |
|                                               |
|  Something went wrong on our end              |
|                                               |
|  We're looking into it. Please try again      |
|  in a few minutes.                            |
|                                               |
|  [Try Again]  [Contact Support]               |
+-----------------------------------------------+
```

**Invalid Link:**
```
+-----------------------------------------------+
|  This link isn't working                      |
|                                               |
|  The inspection link may have expired or      |
|  been used already.                           |
|                                               |
|  [Contact Your Inspector]                     |
|  [Sign Up for Zeke Instead]                   |
+-----------------------------------------------+
```

---

## Appendix A: API Endpoints for Enrichment

### A.1 Address Autocomplete
- **Provider:** Google Places Autocomplete API
- **Trigger:** On keypress in address field (debounced)
- **Response:** Address suggestions with place_id

### A.2 Zillow Property Data
- **Provider:** Zillow API or data partner
- **Trigger:** On address confirmation
- **Data:** Year built, sqft, beds, baths, home type, Zestimate
- **Fallback:** County records

### A.3 County Records
- **Provider:** Local county assessor APIs or aggregator
- **Trigger:** On address confirmation
- **Data:** Year built, lot size, last sale date, owner name

### A.4 Climate Zone
- **Provider:** USDA Plant Hardiness Zone API or lookup table
- **Trigger:** On address confirmation
- **Data:** Zone number, heating/cooling degree days

---

## Appendix B: Notification Schedule

### B.1 Onboarding Notifications

| Timing | Channel | Message |
|--------|---------|---------|
| +1 hour (if incomplete) | Push | "Finish setting up your home profile - just 2 minutes!" |
| +24 hours | Email | "Your Day 1 checklist is waiting" |
| +48 hours (if no return) | Push | "Found your water shutoff yet? Here's how" |
| +72 hours | Email | "Your home has questions. Zeke has answers." |
| +7 days | Email | "Week 1 recap + what's next for your home" |

### B.2 Inspector Handoff Notifications

| Timing | Channel | Message |
|--------|---------|---------|
| +2 hours | Push | "Have questions about your inspection? Ask Zeke" |
| +24 hours | Email | "Your inspection summary + next steps" |
| +7 days | Email | "How's progress on your inspection items?" |
| +30 days | Email | "One month check-in: inspection items status" |
| +6 months | Email | "6-month post-inspection: time for a check-up" |

---

## Appendix C: Copy Guidelines

### C.1 Tone of Voice

- **Friendly but competent:** Like a knowledgeable neighbor, not a contractor
- **Reassuring:** Home stuff can be scary; we make it approachable
- **Action-oriented:** Always lead to next step
- **Concise:** Mobile-first means brevity matters

### C.2 Examples

**Good:** "Let's find your water shutoff - it could save you thousands in an emergency."

**Bad:** "Please input the location of your primary water supply shutoff valve for optimal emergency preparedness."

**Good:** "Your furnace is 18 years old. Most last 15-20. Let's schedule a tune-up."

**Bad:** "WARNING: Your HVAC system is approaching end of expected service life."

---

*Document End*
