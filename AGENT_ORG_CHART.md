# Zeke Agent Org Chart

```
                                    ┌─────────────────────────────────┐
                                    │         ZEKE AI SYSTEM          │
                                    │    29 Agents · 6 Departments    │
                                    └─────────────────────────────────┘
                                                    │
        ┌───────────────┬───────────────┬──────────┴───────────┬───────────────┬───────────────┐
        │               │               │                      │               │               │
        ▼               ▼               ▼                      ▼               ▼               ▼
┌───────────────┐┌───────────────┐┌───────────────┐  ┌───────────────┐┌───────────────┐┌───────────────┐
│ CORE PRODUCT  ││ INSPECTOR PRO ││ GTM/MARKETING │  │   SALES/BD    ││  OPERATIONS   ││   INTERNAL    │
│   7 Agents    ││   5 Agents    ││   5 Agents    │  │   4 Agents    ││   5 Agents    ││   3 Agents    │
│  (5 MVP)      ││  (3 MVP)      ││  (3 MVP)      │  │  (1 MVP)      ││  (2 MVP)      ││  (0 MVP)      │
└───────────────┘└───────────────┘└───────────────┘  └───────────────┘└───────────────┘└───────────────┘
```

---

## CORE PRODUCT DEPARTMENT
*What homeowners interact with*

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              CORE PRODUCT (7)                                   │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                    │
│  │  ⭐ Q&A AGENT           │    │  ⭐ HOME PROFILE AGENT  │                    │
│  │  ────────────────────   │    │  ────────────────────   │                    │
│  │  The brain. Answers     │    │  Builds & maintains     │                    │
│  │  homeowner questions    │    │  knowledge of YOUR      │                    │
│  │  using home context.    │    │  specific home.         │                    │
│  │                         │    │                         │                    │
│  │  MVP: Week 1            │    │  MVP: Week 1            │                    │
│  └─────────────────────────┘    └─────────────────────────┘                    │
│                                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                    │
│  │  ⭐ DIAGNOSTIC AGENT    │    │  ⭐ PRO MATCHING AGENT  │                    │
│  │  ────────────────────   │    │  ────────────────────   │                    │
│  │  Assesses severity:     │    │  Connects to vetted     │                    │
│  │  DIY? Pro? Emergency?   │    │  local professionals    │                    │
│  │  Safety first.          │    │  when DIY won't cut it. │                    │
│  │                         │    │                         │                    │
│  │  MVP: Week 2            │    │  MVP: Week 3            │                    │
│  └─────────────────────────┘    └─────────────────────────┘                    │
│                                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                    │
│  │  ⭐ PRODUCT REC AGENT   │    │  PROACTIVE AGENT        │                    │
│  │  ────────────────────   │    │  ────────────────────   │                    │
│  │  Recommends specific    │    │  Reaches out with       │                    │
│  │  parts & tools with     │    │  seasonal reminders     │                    │
│  │  affiliate links.       │    │  before things break.   │                    │
│  │                         │    │                         │                    │
│  │  MVP: Week 4            │    │  Later: Month 2         │                    │
│  └─────────────────────────┘    └─────────────────────────┘                    │
│                                                                                 │
│  ┌─────────────────────────┐                                                   │
│  │  MEMORY AGENT           │                                                   │
│  │  ────────────────────   │                                                   │
│  │  Long-term memory       │                                                   │
│  │  across sessions.       │                                                   │
│  │  "Last time we talked…" │                                                   │
│  │                         │                                                   │
│  │  Later: Month 3         │                                                   │
│  └─────────────────────────┘                                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## INSPECTOR PRO DEPARTMENT
*Tools for home inspectors (primary GTM channel)*

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              INSPECTOR PRO (5)                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                    │
│  │  ⭐ REPORT INGESTION    │    │  ⭐ CLIENT HANDOFF      │                    │
│  │  ────────────────────   │    │  ────────────────────   │                    │
│  │  Parses inspection PDF  │    │  Creates QR code/link   │                    │
│  │  → structured home      │    │  for inspector to give  │                    │
│  │  profile automatically. │    │  client. Pre-loads Zeke.│                    │
│  │                         │    │                         │                    │
│  │  MVP: Week 2            │    │  MVP: Week 2            │                    │
│  └─────────────────────────┘    └─────────────────────────┘                    │
│                                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                    │
│  │  ⭐ CLIENT FOLLOW-UP    │    │  REPORT ASSISTANT       │                    │
│  │  ────────────────────   │    │  ────────────────────   │                    │
│  │  6-month check-ins:     │    │  Helps inspectors       │                    │
│  │  "How's that roof?"     │    │  write reports faster   │                    │
│  │  Keeps inspector        │    │  from field notes.      │                    │
│  │  connected for referrals│    │                         │                    │
│  │                         │    │                         │                    │
│  │  MVP: Week 4            │    │  Later: Month 3         │                    │
│  └─────────────────────────┘    └─────────────────────────┘                    │
│                                                                                 │
│  ┌─────────────────────────┐                                                   │
│  │  INSPECTOR Q&A          │                                                   │
│  │  ────────────────────   │                                                   │
│  │  Handles "Ask Your      │                                                   │
│  │  Inspector" questions   │                                                   │
│  │  with inspector review. │                                                   │
│  │                         │                                                   │
│  │  Later: Month 2         │                                                   │
│  └─────────────────────────┘                                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## GTM/MARKETING DEPARTMENT
*Powers growth and content*

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                              GTM/MARKETING (5)                                  │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                    │
│  │  ⭐ CONTENT FLYWHEEL    │    │  ⭐ CONTENT GENERATION  │                    │
│  │  ────────────────────   │    │  ────────────────────   │                    │
│  │  Logs every question.   │    │  Writes SEO articles    │                    │
│  │  Finds patterns.        │    │  from user questions.   │                    │
│  │  Prioritizes for SEO.   │    │  South Shore specific.  │                    │
│  │  THE GROWTH ENGINE.     │    │                         │                    │
│  │                         │    │                         │                    │
│  │  MVP: Week 3            │    │  MVP: Week 4            │                    │
│  └─────────────────────────┘    └─────────────────────────┘                    │
│                                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                    │
│  │  LOCAL SEO AGENT        │    │  EMAIL MARKETING        │                    │
│  │  ────────────────────   │    │  ────────────────────   │                    │
│  │  Optimizes for South    │    │  Welcome sequences,     │                    │
│  │  Shore local search.    │    │  nurture campaigns,     │                    │
│  │  "Best plumber Hingham" │    │  re-engagement.         │                    │
│  │                         │    │                         │                    │
│  │  Later: Month 2         │    │  Later: Month 2         │                    │
│  └─────────────────────────┘    └─────────────────────────┘                    │
│                                                                                 │
│  ┌─────────────────────────┐                                                   │
│  │  SOCIAL MEDIA           │                                                   │
│  │  ────────────────────   │                                                   │
│  │  Monitors local FB      │                                                   │
│  │  groups. Engages with   │                                                   │
│  │  home questions.        │                                                   │
│  │                         │                                                   │
│  │  Later: Month 3         │                                                   │
│  └─────────────────────────┘                                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## SALES/BD DEPARTMENT
*Partner and customer acquisition*

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                SALES/BD (4)                                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                    │
│  │  ⭐ INSPECTOR OUTREACH  │    │  AGENT OUTREACH         │                    │
│  │  ────────────────────   │    │  ────────────────────   │                    │
│  │  Pulls ASHI directory.  │    │  Same playbook for      │                    │
│  │  Personalizes cold      │    │  real estate agents     │                    │
│  │  emails. Tracks         │    │  once inspector         │                    │
│  │  follow-ups. Scores     │    │  channel is working.    │                    │
│  │  leads for founder.     │    │                         │                    │
│  │                         │    │                         │                    │
│  │  MVP: Week 1            │    │  Later: Month 2         │                    │
│  └─────────────────────────┘    └─────────────────────────┘                    │
│                                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                    │
│  │  PARTNERSHIP DEV        │    │  LEAD QUALIFICATION     │                    │
│  │  ────────────────────   │    │  ────────────────────   │                    │
│  │  Researches insurance,  │    │  Scores inbound leads.  │                    │
│  │  title, warranty cos.   │    │  Routes to right        │                    │
│  │  Prepares pitch decks.  │    │  follow-up path.        │                    │
│  │                         │    │                         │                    │
│  │  Later: Month 4         │    │  Later: Month 2         │                    │
│  └─────────────────────────┘    └─────────────────────────┘                    │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## OPERATIONS DEPARTMENT
*Keeps the system running*

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                               OPERATIONS (5)                                    │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                    │
│  │  ⭐ PRO NETWORK MGMT    │    │  ⭐ CONTENT QA          │                    │
│  │  ────────────────────   │    │  ────────────────────   │                    │
│  │  Tracks pro onboarding, │    │  Fact-checks AI         │                    │
│  │  lead delivery, reviews,│    │  content. Flags         │                    │
│  │  quality issues.        │    │  safety issues.         │                    │
│  │                         │    │  Routes to human.       │                    │
│  │                         │    │                         │                    │
│  │  MVP: Week 4            │    │  MVP: Week 4            │                    │
│  └─────────────────────────┘    └─────────────────────────┘                    │
│                                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                    │
│  │  CUSTOMER SUCCESS       │    │  ANALYTICS              │                    │
│  │  ────────────────────   │    │  ────────────────────   │                    │
│  │  Monitors user health.  │    │  Auto-generates         │                    │
│  │  Identifies churn risk. │    │  reports. Finds         │                    │
│  │  Triggers re-engage.    │    │  anomalies. Answers     │                    │
│  │                         │    │  data questions.        │                    │
│  │                         │    │                         │                    │
│  │  Later: Month 3         │    │  Later: Month 3         │                    │
│  └─────────────────────────┘    └─────────────────────────┘                    │
│                                                                                 │
│  ┌─────────────────────────┐                                                   │
│  │  SUPPORT TRIAGE         │                                                   │
│  │  ────────────────────   │                                                   │
│  │  Classifies support     │                                                   │
│  │  requests. Auto-solves  │                                                   │
│  │  common issues. Routes  │                                                   │
│  │  complex to human.      │                                                   │
│  │                         │                                                   │
│  │  Later: Month 2         │                                                   │
│  └─────────────────────────┘                                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## INTERNAL DEPARTMENT
*Team productivity*

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                INTERNAL (3)                                     │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  ┌─────────────────────────┐    ┌─────────────────────────┐                    │
│  │  MARKET RESEARCH        │    │  MEETING PREP           │                    │
│  │  ────────────────────   │    │  ────────────────────   │                    │
│  │  Monitors competitors.  │    │  Researches attendees.  │                    │
│  │  Tracks industry news.  │    │  Prepares briefs and    │                    │
│  │  Answers research Qs.   │    │  talking points.        │                    │
│  │                         │    │                         │                    │
│  │  Later: Month 2         │    │  Later: Month 4         │                    │
│  └─────────────────────────┘    └─────────────────────────┘                    │
│                                                                                 │
│  ┌─────────────────────────┐                                                   │
│  │  DOCUMENTATION          │                                                   │
│  │  ────────────────────   │                                                   │
│  │  Keeps internal docs    │                                                   │
│  │  current. Updates       │                                                   │
│  │  playbooks from         │                                                   │
│  │  learnings.             │                                                   │
│  │                         │                                                   │
│  │  Later: Month 4         │                                                   │
│  └─────────────────────────┘                                                   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## AGENT INTERACTION MAP

```
                                USER ASKS QUESTION
                                        │
                                        ▼
                            ┌───────────────────────┐
                            │     Q&A AGENT         │◄──── Home Profile Agent
                            │  (answers question)   │       (provides context)
                            └───────────────────────┘
                                        │
                        ┌───────────────┼───────────────┐
                        ▼               ▼               ▼
                   ┌─────────┐    ┌─────────┐    ┌─────────┐
                   │  DIY    │    │  PRO    │    │EMERGENCY│
                   │ Answer  │    │ NEEDED  │    │  FLAG   │
                   └─────────┘    └─────────┘    └─────────┘
                        │               │               │
                        ▼               ▼               ▼
              ┌─────────────────┐ ┌─────────────┐ ┌─────────────┐
              │ Product Rec     │ │ Pro Match   │ │ Human       │
              │ Agent           │ │ Agent       │ │ Escalation  │
              │ (affiliate $)   │ │ (referral $)│ │             │
              └─────────────────┘ └─────────────┘ └─────────────┘
                        │               │
                        └───────┬───────┘
                                ▼
                    ┌───────────────────────┐
                    │  Content Flywheel     │
                    │  (logs ALL questions) │
                    └───────────────────────┘
                                │
                                ▼
                    ┌───────────────────────┐
                    │  Content Generation   │──────► Content QA ──────► PUBLISH
                    │  (writes articles)    │
                    └───────────────────────┘
                                │
                                ▼
                         Google ranks it
                                │
                                ▼
                         New user finds it
                                │
                                ▼
                         Signs up for Zeke
                                │
                                ▼
                        ASKS A QUESTION ─────────────────────────────────┐
                                                                         │
                                                                   (loop repeats)
```

---

## INSPECTOR WORKFLOW

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│ INSPECTOR       │     │ INSPECTOR       │     │ CLIENT          │
│ OUTREACH AGENT  │────►│ SIGNS UP        │────►│ HANDOFF AGENT   │
│                 │     │ (founder demo)  │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │ REPORT          │
                                               │ INGESTION AGENT │
                                               │ (parses PDF)    │
                                               └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │ Homeowner gets  │
                                               │ Zeke pre-loaded │
                                               │ with inspection │
                                               └─────────────────┘
                                                        │
                                                        ▼
                                               ┌─────────────────┐
                                               │ CLIENT          │
                                               │ FOLLOW-UP AGENT │
                                               │ (6mo check-in)  │
                                               └─────────────────┘
```

---

## MVP AGENTS BY WEEK

```
WEEK 1                    WEEK 2                    WEEK 3                    WEEK 4
───────                   ───────                   ───────                   ───────
┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐      ┌─────────────────┐
│ ⭐ Q&A Agent    │      │ ⭐ Report       │      │ ⭐ Content      │      │ ⭐ Content      │
│                 │      │   Ingestion    │      │   Flywheel     │      │   Generation   │
├─────────────────┤      ├─────────────────┤      ├─────────────────┤      ├─────────────────┤
│ ⭐ Home Profile │      │ ⭐ Client       │      │ ⭐ Pro Matching │      │ ⭐ Product Rec  │
│                 │      │   Handoff      │      │                 │      │                 │
├─────────────────┤      ├─────────────────┤      └─────────────────┘      ├─────────────────┤
│ ⭐ Inspector    │      │ ⭐ Diagnostic   │                               │ ⭐ Follow-Up    │
│   Outreach     │      │                 │                               │                 │
└─────────────────┘      └─────────────────┘                               ├─────────────────┤
                                                                           │ ⭐ Pro Network  │
 3 agents                 3 agents                 2 agents                │                 │
                                                                           ├─────────────────┤
                                                                           │ ⭐ Content QA   │
                                                                           └─────────────────┘

                                                                            5 agents
                                                                           ─────────────────
                                                                           TOTAL: 14 MVP
```

---

## QUICK REFERENCE

| Agent | One-Line Description | MVP? |
|-------|---------------------|------|
| **CORE PRODUCT** | | |
| Q&A Agent | Answers homeowner questions with home context | ⭐ Wk1 |
| Home Profile Agent | Knows YOUR home - systems, age, issues | ⭐ Wk1 |
| Diagnostic Agent | DIY or Pro? Routine or Emergency? | ⭐ Wk2 |
| Pro Matching Agent | Connects to vetted South Shore pros | ⭐ Wk3 |
| Product Rec Agent | "Here's the part you need" + affiliate link | ⭐ Wk4 |
| Proactive Agent | "October - time to winterize" | Mo2 |
| Memory Agent | Remembers past conversations | Mo3 |
| **INSPECTOR PRO** | | |
| Report Ingestion | PDF → structured home profile | ⭐ Wk2 |
| Client Handoff | QR code inspector gives to client | ⭐ Wk2 |
| Client Follow-Up | 6-month automated check-ins | ⭐ Wk4 |
| Report Assistant | Helps write inspection reports faster | Mo3 |
| Inspector Q&A | "Ask Your Inspector" with routing | Mo2 |
| **GTM/MARKETING** | | |
| Content Flywheel | Every question → potential article | ⭐ Wk3 |
| Content Generation | Writes SEO articles from questions | ⭐ Wk4 |
| Local SEO | "Best plumber Hingham MA" | Mo2 |
| Email Marketing | Sequences, nurture, re-engagement | Mo2 |
| Social Media | Local Facebook group monitoring | Mo3 |
| **SALES/BD** | | |
| Inspector Outreach | Cold email + follow-up automation | ⭐ Wk1 |
| Agent Outreach | Same playbook for real estate agents | Mo2 |
| Partnership Dev | Insurance, title company research | Mo4 |
| Lead Qualification | Score and route inbound leads | Mo2 |
| **OPERATIONS** | | |
| Pro Network Mgmt | Track pros, leads, quality | ⭐ Wk4 |
| Content QA | Fact-check before publish | ⭐ Wk4 |
| Customer Success | Churn risk, health scores | Mo3 |
| Analytics | Auto-reports, anomaly detection | Mo3 |
| Support Triage | Classify, auto-solve, route | Mo2 |
| **INTERNAL** | | |
| Market Research | Competitor monitoring, research | Mo2 |
| Meeting Prep | Attendee research, talking points | Mo4 |
| Documentation | Keep playbooks current | Mo4 |
