# Zeke AI Agent Architecture

## Executive Summary

This document outlines the complete AI agent system needed to execute the Zeke homeowner assistant business. The architecture encompasses 29 specialized agents organized across 6 functional areas, designed to work as an interconnected system.

**Key Design Principles:**
1. **Modularity** - Each agent has a single, well-defined purpose
2. **Data Flow** - Agents share context through a central knowledge layer
3. **Human-in-the-Loop** - Critical decisions route to humans before action
4. **Density Focus** - Agents optimize for South Shore MA market first
5. **Iterative Deployment** - MVP agents ship first, advanced capabilities later

---

## System Overview

```
                                    +------------------+
                                    |   ZEKE CENTRAL   |
                                    |   KNOWLEDGE HUB  |
                                    +------------------+
                                            |
            +-------------------------------------------------------+
            |                       |                |              |
     +------+------+        +------+------+   +-----+-----+  +-----+-----+
     | HOME DATA   |        | USER DATA   |   | PRO DATA  |  | CONTENT   |
     | LAYER       |        | LAYER       |   | LAYER     |  | LAYER     |
     +-------------+        +-------------+   +-----------+  +-----------+
```

---

## Agent Categories

| Category | MVP Agents | Total Agents | Purpose |
|----------|------------|--------------|---------|
| Core Product | 5 | 7 | What homeowners interact with |
| Inspector Pro | 3 | 5 | Tools for home inspectors |
| GTM/Marketing | 3 | 5 | Growth and content |
| Sales/BD | 1 | 4 | Partner acquisition |
| Operations | 2 | 5 | Keep the system running |
| Internal | 0 | 3 | Team productivity |
| **Total** | **14** | **29** | |

---

## 1. CORE PRODUCT AGENTS

### 1.1 Homeowner Q&A Agent ⭐ MVP Critical

**Purpose:** The primary AI that answers homeowner questions

**What It Does:**
- Receives natural language questions from homeowners
- Retrieves context from home profile (age, systems, location)
- Generates accurate, actionable answers
- Knows when to DIY vs call a pro vs escalate urgency
- Maintains conversational memory within sessions

**Inputs:**
- User question (text)
- Home profile data
- Conversation history
- Local context (South Shore climate, codes, costs)
- Knowledge base

**Outputs:**
- Answer with confidence level
- Action type (DIY, Pro Referral, Emergency, Info Only)
- Product recommendations when relevant
- Question logged for content flywheel

**Priority:** Week 1

---

### 1.2 Home Profile Agent ⭐ MVP Critical

**Purpose:** Builds and maintains knowledge of each user's specific home

**What It Does:**
- Guides users through initial home setup
- Extracts home details from conversations
- Ingests inspection reports
- Tracks all systems: HVAC, plumbing, electrical, appliances
- Records maintenance history and known issues

**Inputs:**
- User-provided information
- Extracted entities from conversations
- Uploaded inspection reports
- Public data APIs (address lookups)

**Outputs:**
- Structured home profile
- System inventory with ages and conditions
- Known issues tracker
- Home "health score"

**Priority:** Week 1

---

### 1.3 Diagnostic/Triage Agent ⭐ MVP High

**Purpose:** Assesses severity and urgency to determine appropriate response

**What It Does:**
- Classifies issues (cosmetic → emergency)
- Identifies safety concerns
- Determines DIY feasibility
- Routes to appropriate action path

**Outputs:**
- Severity (1-5)
- Urgency (routine, soon, urgent, emergency)
- DIY feasibility score
- Safety warnings

**Priority:** Week 2

---

### 1.4 Pro Matching Agent ⭐ MVP High

**Purpose:** Connects homeowners with vetted local professionals

**What It Does:**
- Identifies right trade for the job
- Matches to available South Shore pros
- Considers ratings, specialties, availability
- Provides context to pros

**Outputs:**
- Ranked list of 3 pros
- Estimated cost range
- Lead package for pro

**Priority:** Week 3

---

### 1.5 Product Recommendation Agent ⭐ MVP Medium

**Purpose:** Recommends specific products for DIY fixes

**What It Does:**
- Identifies parts/tools needed
- Generates affiliate links
- Considers compatibility with home
- Tracks conversions

**Priority:** Week 4

---

### 1.6 Proactive Outreach Agent (Later)

**Purpose:** Reaches out with timely maintenance reminders

**What It Does:**
- Seasonal reminders (South Shore specific)
- Personalized alerts based on home profile
- Follows up on unresolved issues
- Re-engages dormant users

**Priority:** Month 2

---

### 1.7 Conversation Memory Agent (Later)

**Purpose:** Long-term memory across sessions

**Priority:** Month 3

---

## 2. INSPECTOR PRO AGENTS

### 2.1 Inspection Report Ingestion Agent ⭐ MVP High

**Purpose:** Parses inspection reports into structured home profiles

**What It Does:**
- Accepts PDF report uploads
- Extracts findings, issues, recommendations
- Identifies systems with conditions
- Flags critical issues

**Priority:** Week 2

---

### 2.2 Client Handoff Agent ⭐ MVP Critical

**Purpose:** Creates seamless inspector → homeowner handoff

**What It Does:**
- Generates client summary from inspection
- Creates QR code / link for inspector
- Pre-loads Zeke with inspection highlights
- Maintains "ask your inspector" connection

**Outputs:**
- QR code and handoff link
- Pre-configured Zeke for client
- Inspector-branded welcome

**Priority:** Week 2

---

### 2.3 Inspector Client Follow-Up Agent ⭐ MVP High

**Purpose:** Automates check-ins with past clients

**What It Does:**
- 6-month post-inspection check-ins
- References original inspection findings
- Identifies referral opportunities
- Surfaces engaged clients to inspector

**Priority:** Week 4

---

### 2.4 Inspector Report Assistance Agent (Later)

**Purpose:** Helps write inspection reports faster

**Priority:** Month 3

---

### 2.5 Inspector Q&A Agent (Later)

**Purpose:** Handles "Ask Your Inspector" with oversight

**Priority:** Month 2

---

## 3. GTM/MARKETING AGENTS

### 3.1 Content Flywheel Agent ⭐ MVP Critical

**Purpose:** Transforms user questions into SEO content

**What It Does:**
- Logs every user question
- Identifies patterns and popular questions
- Prioritizes for content creation
- Generates SEO-optimized articles

**The Flywheel:**
```
User Question → Log → Pattern ID → Article Draft → QA → Publish →
→ Google Ranks → New User Finds → Signs Up → Asks Question...
```

**Priority:** Week 3

---

### 3.2 Content Generation Agent ⭐ MVP High

**Purpose:** Creates home maintenance content

**What It Does:**
- How-to articles from questions
- Seasonal guides (South Shore specific)
- Cost guides with local data
- System explainers

**Priority:** Week 4

---

### 3.3 Local SEO Agent (Later)

**Purpose:** Optimizes for South Shore local search

**Priority:** Month 2

---

### 3.4 Email Marketing Agent (Later)

**Purpose:** Manages email sequences and campaigns

**Priority:** Month 2

---

### 3.5 Social Media Agent (Later)

**Purpose:** Monitors and engages in local communities

**Priority:** Month 3

---

## 4. SALES/BD AGENTS

### 4.1 Inspector Outreach Agent ⭐ MVP Critical

**Purpose:** Automates outreach to home inspectors

**What It Does:**
- Manages prospect list (ASHI directory)
- Generates personalized outreach
- Tracks status and follow-ups
- Identifies warm leads for founder
- Researches inspectors before outreach

**Outputs:**
- Personalized messages
- Follow-up sequences
- Lead scoring
- Meeting scheduling

**Priority:** Week 1

---

### 4.2 Agent Outreach Agent (Later)

**Purpose:** Outreach to real estate agents

**Priority:** Month 2

---

### 4.3 Partnership Development Agent (Later)

**Purpose:** Supports insurance/title partnerships

**Priority:** Month 4

---

### 4.4 Lead Qualification Agent (Later)

**Purpose:** Scores and routes inbound leads

**Priority:** Month 2

---

## 5. OPERATIONS AGENTS

### 5.1 Pro Network Management Agent ⭐ MVP High

**Purpose:** Manages local professional network

**What It Does:**
- Tracks pro onboarding
- Monitors lead outcomes
- Collects reviews
- Identifies quality issues

**Priority:** Week 4

---

### 5.2 Content QA Agent ⭐ MVP High

**Purpose:** Reviews AI content before publication

**What It Does:**
- Fact-checks against knowledge base
- Flags inaccuracies or safety issues
- Routes to human review
- Tracks quality metrics

**Priority:** Week 4

---

### 5.3 Customer Success Agent (Later)

**Priority:** Month 3

---

### 5.4 Analytics Agent (Later)

**Priority:** Month 3

---

### 5.5 Support Triage Agent (Later)

**Priority:** Month 2

---

## 6. INTERNAL PRODUCTIVITY AGENTS

### 6.1 Market Research Agent (Later)

**Priority:** Month 2

---

### 6.2 Meeting Prep Agent (Later)

**Priority:** Month 4

---

### 6.3 Documentation Agent (Later)

**Priority:** Month 4

---

## MVP Agent Implementation Order

### Week 1: Core + GTM Engine
| Agent | Purpose |
|-------|---------|
| Homeowner Q&A Agent | Core product |
| Home Profile Agent | Differentiation |
| Inspector Outreach Agent | GTM channel |

### Week 2: Inspector Workflow
| Agent | Purpose |
|-------|---------|
| Inspection Report Ingestion | Parse reports |
| Client Handoff Agent | Inspector → homeowner |
| Diagnostic/Triage Agent | Answer quality |

### Week 3: Growth Engine
| Agent | Purpose |
|-------|---------|
| Content Flywheel Agent | SEO growth setup |
| Pro Matching Agent | Revenue model |

### Week 4: Revenue + Quality
| Agent | Purpose |
|-------|---------|
| Content Generation Agent | Organic growth |
| Product Recommendation Agent | Affiliate revenue |
| Inspector Client Follow-Up Agent | Inspector value |
| Pro Network Management Agent | Quality control |
| Content QA Agent | Content quality |

---

## Critical Data Flows

### User Question Flow
```
User Question
    → Q&A Agent (+ Home Profile context)
    → Diagnostic Agent (severity)
    → [DIY Response] OR [Pro Matching → Referral]
    → Product Recommendations (if DIY)
    → Content Flywheel (question logged)
    → Revenue Tracking
```

### Inspector Onboarding Flow
```
Inspector Outreach Agent → Response
    → Lead Qualification → Prioritization
    → Founder Demo → Agreement
    → Account Setup
    → Client Handoff Agent (materials)
    → First Handoff → Homeowner Created
```

### Content Flywheel
```
User Questions (aggregate)
    → Content Flywheel Agent (patterns)
    → Content Generation Agent (drafts)
    → Content QA Agent (review)
    → Human Approval
    → Published Article
    → SEO Traffic
    → New User Signup
    → User Questions... (loop)
```

---

## Human-in-the-Loop Checkpoints

These actions require human approval:

1. **Content publication** - QA flags, human approves
2. **Outreach sends** - Review before sending (initially)
3. **Pro referrals** - Verify match quality early on
4. **Emergency escalations** - Human backup for true emergencies
5. **Partnership communications** - Always human-sent

---

## Shared Knowledge Hub

All agents access central knowledge:

| Layer | Contents |
|-------|----------|
| Home Knowledge | Maintenance corpus, South Shore specifics, DIY guides, safety |
| User Data | Home profiles, history, engagement, preferences |
| Pro Network | Profiles, services, ratings, availability |
| Content | Articles, SEO data, internal links |
| Operations | Leads, revenue, metrics |

---

## Technical Stack Suggestions

- **LLM Backend:** Claude API (Sonnet for most, Opus for complex reasoning)
- **Knowledge Base:** Vector DB (Pinecone) + Postgres
- **Agent Framework:** LangChain or custom orchestration
- **Queue:** Simple job queue for async agents
- **Frontend:** Modernize existing PHP incrementally

---

## Day 1 Metrics

Track from the start:
- Questions answered per day
- Home profile completion rate
- Inspector conversion (outreach → signed)
- Client handoff rate (inspector → activation)
- Question-to-content conversion
- First revenue (any amount)

---

## Summary

**14 MVP agents** ship in first 6 weeks to prove the model.

**The critical path:**
1. Q&A + Home Profile (Week 1) → Core product works
2. Report Ingestion + Handoff (Week 2) → Inspector workflow works
3. Inspector Outreach (Week 1-2) → GTM engine running
4. Content Flywheel (Week 3-4) → Growth initialized
5. Pro Matching (Week 3-4) → Revenue provable

This architecture executes the full strategy while maintaining South Shore focus.
