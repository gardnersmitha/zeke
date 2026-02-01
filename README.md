# Zeke - AI Homeowner Assistant

> Your home knows you. Now it can talk to you.

Zeke is an AI-powered assistant that helps homeowners manage, maintain, and understand their homes. Unlike generic AI, Zeke knows YOUR specific home - its age, systems, location, and history - delivering personalized advice, connecting you with local pros, and proactively reminding you before things break.

## Quick Links

| Document | Description |
|----------|-------------|
| [STRATEGY.md](./STRATEGY.md) | Business model, revenue streams, GTM strategy |
| [LAUNCH_PLAN_SOUTH_SHORE.md](./LAUNCH_PLAN_SOUTH_SHORE.md) | Hingham, MA launch plan |
| [prototype/index.html](./prototype/index.html) | Interactive app prototype |

---

## What Makes Zeke Different

| Generic AI | Zeke |
|------------|------|
| Knows about homes in general | Knows about YOUR home specifically |
| Stateless - starts fresh every time | Remembers your home, history, past issues |
| Gives information | Connects to action (pros, products, scheduling) |
| Reactive - you have to ask | Proactive - reaches out with seasonal reminders |
| Generic advice | Localized to your climate, codes, and costs |

---

## Project Structure

```
/zeke
├── 📋 Strategy & Planning
│   ├── STRATEGY.md              # Business model, revenue, GTM
│   ├── LAUNCH_PLAN_SOUTH_SHORE.md # Hingham-specific launch
│   ├── AGENT_ARCHITECTURE.md    # 29 AI agents specification
│   ├── AGENT_ORG_CHART.md       # Visual agent organization
│   └── TECHNICAL_ARCHITECTURE.md # How agents work together
│
├── 📱 Product Design (/docs)
│   ├── APP_DESIGN.md            # Screens, components, UX flows
│   ├── DATA_ENRICHMENT.md       # Address → auto-populate profile
│   └── ONBOARDING_REQUIREMENTS.md # Entry flows, gamification
│
├── 🎨 Prototype (/prototype)
│   └── index.html               # Working interactive demo
│
├── 📝 Content (/content)
│   ├── ice-dam-prevention-south-shore.md
│   ├── winterizing-guide-massachusetts.md
│   ├── first-year-homeowner-south-shore.md
│   └── historic-home-maintenance-massachusetts.md
│
├── 🧠 Knowledge Base (/knowledge)
│   ├── /corpus                  # General home maintenance (TODO)
│   ├── /local                   # South Shore specific (TODO)
│   └── /safety                  # Critical safety rules ✓
│
├── 🤖 Agent Definitions (/agents)
│   ├── /core                    # Q&A, Profile, Diagnostic, etc.
│   ├── /inspector               # Report ingestion, handoff, etc.
│   ├── /gtm                     # Content flywheel, SEO, etc.
│   ├── /sales                   # Outreach agents
│   └── /ops                     # Network management, QA
│
├── 📝 Prompts (/prompts)
│   ├── /core                    # System prompts for core agents
│   └── /inspector               # Inspector agent prompts
│
├── 🔧 Tools (/tools)
│   ├── /database                # DB read/write tools
│   ├── /external                # External API tools
│   └── /workflow                # Human review, scheduling
│
├── ⚙️ Services (/services)
│   ├── /orchestrator            # Agent routing
│   └── /llm                     # Claude API client
│
├── 🔬 Research (/research)
│   └── (Inspector contacts, pro network - TODO)
│
└── ⚙️ Config (/config)
    ├── agents.config.yaml       # Agent registry
    └── models.config.yaml       # Model tier assignments
```

---

## The Vision

### Phase 1: Prove It Works (South Shore MA)
- Launch in Hingham/South Shore market
- Inspector wedge strategy (10 inspectors → 400 users)
- Prove the Q&A + pro referral model

### Phase 2: Monetize
- Pro referral revenue
- Product affiliate links
- Content flywheel driving SEO traffic

### Phase 3: Scale
- Insurance B2B2C partnerships
- Real estate transaction integration
- National expansion with auto-generated local knowledge

---

## Revenue Model

| Stream | Model | Priority |
|--------|-------|----------|
| Pro Referrals | $15-50 per qualified lead | Primary |
| Product Affiliate | 1-4% commission on purchases | Secondary |
| Insurance B2B2C | $2-5 per policyholder/year | Scale |
| Inspector SaaS | $50-100/month | Channel |
| Premium Consumer | $5-10/month | Later |

---

## Try the Prototype

```bash
# Open in browser
open prototype/index.html

# Or start a local server
cd prototype && python3 -m http.server 8000
# Visit http://localhost:8000
```

**Demo queries to try:**
- "How do I prevent ice dams?"
- "Tell me about my furnace"

---

## Agent Architecture

Zeke runs on 29 specialized AI agents across 6 departments:

| Department | Agents | Purpose |
|------------|--------|---------|
| Core Product | 7 | Q&A, home profile, diagnostics |
| Inspector Pro | 5 | Report ingestion, client handoff |
| GTM/Marketing | 5 | Content flywheel, SEO, email |
| Sales/BD | 4 | Outreach, partnerships |
| Operations | 5 | Pro network, QA, analytics |
| Internal | 3 | Research, docs |

See [AGENT_ARCHITECTURE.md](./AGENT_ARCHITECTURE.md) for details.

---

## Key Differentiators

1. **Home Profile** - We know your 1985 colonial with the aging furnace
2. **Local Knowledge** - South Shore costs, codes, and common issues
3. **Action-Oriented** - Not just answers, but pros and products
4. **Proactive** - "October in MA - time to winterize"
5. **Inspector Integration** - Pre-loaded from your inspection report

---

## Status

| Area | Status |
|------|--------|
| Strategy & Planning | ✅ Complete |
| Product Design | ✅ Complete |
| Prototype | ✅ Working |
| SEO Content | ✅ 4 articles |
| Safety Rules | ✅ Complete |
| Knowledge Base | 🔄 In progress |
| Agent Prompts | ⏳ Pending |
| Inspector Research | ⏳ Pending |

---

## Tech Stack (Planned)

- **Frontend:** Next.js / React (PWA)
- **Backend:** Node.js or Python (FastAPI)
- **Database:** PostgreSQL + pgvector
- **LLM:** Claude API (Haiku/Sonnet/Opus tiered)
- **Queue:** Redis + BullMQ

---

## Contact

Built for South Shore homeowners, by a South Shore homeowner.

---

*"Zeke belongs to the modern homeowner."*
