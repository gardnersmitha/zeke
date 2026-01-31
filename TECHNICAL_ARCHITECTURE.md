# Zeke Technical Architecture

## Overview

This document defines how to structure the Zeke codebase to support 29 AI agents across 6 departments while maintaining simplicity and shared context.

**Key Insight:** Agents are configurations, not separate codebases. They share a common runtime, knowledge base, and tool library.

---

## Architecture Principles

1. **Agents = Prompts + Tools + Model** - An agent is a configuration, not a service
2. **Shared Knowledge Layer** - All agents access the same knowledge base
3. **Shared Data Layer** - All agents can read/write to shared user and home data
4. **Right-sized Models** - Use Haiku for simple tasks, Sonnet for most, Opus for complex reasoning
5. **Human Checkpoints** - Critical actions require human approval before execution
6. **Single Deployment** - One codebase, one deployment, multiple agent personas

---

## Project Structure

```
/zeke
├── /agents                    # Agent definitions
│   ├── /core                  # Core product agents
│   │   ├── qa.agent.yaml              # Q&A Agent config
│   │   ├── home-profile.agent.yaml    # Home Profile Agent
│   │   ├── diagnostic.agent.yaml      # Diagnostic/Triage Agent
│   │   ├── pro-matching.agent.yaml    # Pro Matching Agent
│   │   ├── product-rec.agent.yaml     # Product Recommendation Agent
│   │   ├── proactive.agent.yaml       # Proactive Outreach Agent
│   │   └── memory.agent.yaml          # Conversation Memory Agent
│   │
│   ├── /inspector             # Inspector Pro agents
│   │   ├── report-ingestion.agent.yaml    # Report parsing
│   │   ├── client-handoff.agent.yaml      # Handoff materials
│   │   ├── client-followup.agent.yaml     # Automated check-ins
│   │   ├── report-assistant.agent.yaml    # Report writing help
│   │   └── inspector-qa.agent.yaml        # Ask Your Inspector
│   │
│   ├── /gtm                   # GTM/Marketing agents
│   │   ├── content-flywheel.agent.yaml    # Question → content pipeline
│   │   ├── content-generation.agent.yaml  # Article writing
│   │   ├── local-seo.agent.yaml           # Local optimization
│   │   ├── email-marketing.agent.yaml     # Email sequences
│   │   └── social-media.agent.yaml        # Social engagement
│   │
│   ├── /sales                 # Sales/BD agents
│   │   ├── inspector-outreach.agent.yaml  # Inspector cold outreach
│   │   ├── agent-outreach.agent.yaml      # Real estate agent outreach
│   │   ├── partnership-dev.agent.yaml     # B2B partnerships
│   │   └── lead-qualification.agent.yaml  # Lead scoring
│   │
│   ├── /ops                   # Operations agents
│   │   ├── pro-network.agent.yaml         # Pro management
│   │   ├── content-qa.agent.yaml          # Content review
│   │   ├── customer-success.agent.yaml    # User health
│   │   ├── analytics.agent.yaml           # Reporting
│   │   └── support-triage.agent.yaml      # Support routing
│   │
│   └── /internal              # Internal productivity agents
│       ├── market-research.agent.yaml     # Competitive intel
│       ├── meeting-prep.agent.yaml        # Meeting briefs
│       └── documentation.agent.yaml       # Doc maintenance
│
├── /prompts                   # System prompts (referenced by agents)
│   ├── /core
│   │   ├── qa-system.md               # Q&A Agent system prompt
│   │   ├── qa-examples.md             # Few-shot examples
│   │   └── ...
│   ├── /inspector
│   ├── /gtm
│   ├── /sales
│   ├── /ops
│   └── /internal
│
├── /tools                     # Shared tools agents can use
│   ├── /database              # DB read/write tools
│   │   ├── home-profile.tool.ts       # Home profile CRUD
│   │   ├── user.tool.ts               # User management
│   │   ├── question.tool.ts           # Question logging
│   │   └── pro-network.tool.ts        # Pro database
│   │
│   ├── /external              # External API tools
│   │   ├── zillow.tool.ts             # Property data lookup
│   │   ├── weather.tool.ts            # Weather/climate data
│   │   ├── affiliate.tool.ts          # Affiliate link generation
│   │   └── email.tool.ts              # Email sending
│   │
│   ├── /content               # Content tools
│   │   ├── publish.tool.ts            # CMS publishing
│   │   ├── seo-check.tool.ts          # SEO validation
│   │   └── image-gen.tool.ts          # Image generation
│   │
│   └── /workflow              # Workflow tools
│       ├── human-review.tool.ts       # Queue for human approval
│       ├── schedule.tool.ts           # Scheduling/cron
│       └── notify.tool.ts             # Notifications
│
├── /knowledge                 # Knowledge base
│   ├── /corpus                # Home maintenance knowledge
│   │   ├── hvac.md
│   │   ├── plumbing.md
│   │   ├── electrical.md
│   │   ├── roofing.md
│   │   ├── foundation.md
│   │   └── ...
│   │
│   ├── /local                 # South Shore specific knowledge
│   │   ├── climate.md                 # Climate zone, seasonal issues
│   │   ├── codes.md                   # Local building codes
│   │   ├── costs.md                   # Local cost data
│   │   └── pros.md                    # Local pro directory
│   │
│   ├── /safety                # Safety rules (never override)
│   │   ├── emergency-triggers.md      # When to escalate
│   │   ├── disclaimers.md             # Required caveats
│   │   └── prohibited-advice.md       # What never to recommend
│   │
│   └── /embeddings            # Vector embeddings for RAG
│       └── (generated from above)
│
├── /services                  # Shared backend services
│   ├── /orchestrator          # Agent routing and coordination
│   │   ├── router.ts                  # Routes requests to agents
│   │   ├── context-builder.ts         # Builds agent context
│   │   └── workflow-engine.ts         # Multi-step workflows
│   │
│   ├── /llm                   # LLM abstraction layer
│   │   ├── client.ts                  # Claude API client
│   │   ├── model-selector.ts          # Choose Haiku/Sonnet/Opus
│   │   └── token-tracker.ts           # Usage tracking
│   │
│   ├── /rag                   # Retrieval augmented generation
│   │   ├── embedder.ts                # Generate embeddings
│   │   ├── retriever.ts               # Retrieve relevant docs
│   │   └── reranker.ts                # Rerank results
│   │
│   ├── /data                  # Data access layer
│   │   ├── db.ts                      # Database connection
│   │   ├── cache.ts                   # Redis/cache layer
│   │   └── migrations/                # Schema migrations
│   │
│   └── /queue                 # Job queue for async agents
│       ├── worker.ts                  # Process background jobs
│       └── jobs/                      # Job definitions
│
├── /web                       # Frontend application
│   ├── /app                   # Main consumer app
│   │   ├── /chat                      # Q&A interface
│   │   ├── /profile                   # Home profile setup
│   │   └── /settings                  # User settings
│   │
│   ├── /inspector             # Inspector Pro dashboard
│   │   ├── /clients                   # Client management
│   │   ├── /reports                   # Report tools
│   │   └── /analytics                 # Inspector analytics
│   │
│   ├── /admin                 # Internal admin
│   │   ├── /content                   # Content review queue
│   │   ├── /pros                      # Pro network management
│   │   └── /analytics                 # Business analytics
│   │
│   └── /api                   # API routes
│       ├── /chat                      # Chat endpoints
│       ├── /webhooks                  # External webhooks
│       └── /internal                  # Internal APIs
│
├── /scripts                   # Utility scripts
│   ├── seed-knowledge.ts              # Populate knowledge base
│   ├── generate-embeddings.ts         # Build vector index
│   └── migrate-data.ts                # Data migrations
│
├── /tests                     # Test suites
│   ├── /agents                        # Agent behavior tests
│   ├── /tools                         # Tool unit tests
│   └── /e2e                           # End-to-end tests
│
├── /docs                      # Documentation
│   ├── STRATEGY.md                    # Business strategy
│   ├── LAUNCH_PLAN_SOUTH_SHORE.md     # Launch plan
│   ├── AGENT_ARCHITECTURE.md          # Agent design
│   ├── AGENT_ORG_CHART.md             # Agent visual
│   └── TECHNICAL_ARCHITECTURE.md      # This document
│
└── /config                    # Configuration
    ├── agents.config.yaml             # Agent registry
    ├── models.config.yaml             # Model assignments
    └── env.example                    # Environment template
```

---

## Agent Definition Format

Each agent is defined in a YAML file:

```yaml
# /agents/core/qa.agent.yaml

name: "qa"
display_name: "Homeowner Q&A Agent"
description: "Answers homeowner questions using home context"

# Model selection
model:
  default: "sonnet"           # claude-3-5-sonnet
  complex_reasoning: "opus"   # escalate for complex cases

# System prompt (reference to file)
prompt:
  system: "/prompts/core/qa-system.md"
  examples: "/prompts/core/qa-examples.md"

# Tools this agent can use
tools:
  - "database/home-profile"    # Read home profile
  - "database/question"        # Log questions
  - "external/weather"         # Get weather data
  - "workflow/human-review"    # Escalate to human

# Knowledge retrieval
knowledge:
  collections:
    - "corpus"                 # General home knowledge
    - "local"                  # South Shore specific
    - "safety"                 # Safety rules (always included)
  top_k: 5                     # Retrieve top 5 relevant docs

# Input/output schema
input:
  required:
    - question: string
    - user_id: string
  optional:
    - conversation_history: array

output:
  - answer: string
  - confidence: float
  - action_type: enum[diy, pro_referral, emergency, info_only]
  - follow_up_questions: array
  - product_recommendations: array

# Routing rules
triggers:
  - type: "api"
    endpoint: "/api/chat"
  - type: "internal"
    from: ["diagnostic", "inspector-qa"]

# Downstream connections
emits:
  - event: "question_logged"
    to: "content-flywheel"
  - event: "pro_needed"
    to: "pro-matching"
  - event: "emergency"
    to: "human-review"

# Guardrails
guardrails:
  max_tokens: 2000
  timeout_ms: 30000
  require_safety_check: true
```

---

## Model Tiering Strategy

Not every agent needs the most powerful model:

| Tier | Model | Cost | Use For |
|------|-------|------|---------|
| **Haiku** | claude-3-haiku | $0.25/MTok in | Simple classification, routing, extraction |
| **Sonnet** | claude-3-5-sonnet | $3/MTok in | Most agents - good balance |
| **Opus** | claude-3-opus | $15/MTok in | Complex reasoning, nuanced advice |

### Model Assignments

```yaml
# /config/models.config.yaml

agents:
  # HAIKU - Fast, cheap, simple tasks
  haiku:
    - "lead-qualification"      # Binary scoring
    - "support-triage"          # Classification
    - "content-qa"              # Checklist validation

  # SONNET - Default for most agents
  sonnet:
    - "qa"                      # Main Q&A (most queries)
    - "home-profile"            # Profile building
    - "diagnostic"              # Triage (with safety rules)
    - "pro-matching"            # Matching algorithm
    - "product-rec"             # Product recommendations
    - "content-flywheel"        # Pattern identification
    - "content-generation"      # Article writing
    - "inspector-outreach"      # Email personalization
    - "client-handoff"          # Material generation
    - "client-followup"         # Check-in messages
    - "pro-network"             # Network management
    - "email-marketing"         # Email sequences

  # OPUS - Complex, nuanced, high-stakes
  opus:
    - "qa:complex"              # Escalated complex questions
    - "diagnostic:safety"       # Safety-critical assessments
    - "report-ingestion"        # Document understanding
    - "partnership-dev"         # Strategic analysis
    - "report-assistant"        # Professional reports
```

---

## Orchestration Layer

The orchestrator routes requests to the right agent:

```typescript
// /services/orchestrator/router.ts

interface AgentRequest {
  type: 'chat' | 'internal' | 'scheduled' | 'webhook';
  payload: any;
  context?: {
    user_id?: string;
    home_id?: string;
    conversation_id?: string;
  };
}

class AgentRouter {
  async route(request: AgentRequest): Promise<AgentResponse> {
    // 1. Determine which agent handles this request
    const agent = this.selectAgent(request);

    // 2. Build context for the agent
    const context = await this.buildContext(request, agent);

    // 3. Retrieve relevant knowledge
    const knowledge = await this.retrieveKnowledge(request, agent);

    // 4. Select appropriate model tier
    const model = this.selectModel(agent, context);

    // 5. Execute agent
    const response = await this.executeAgent(agent, {
      ...request,
      context,
      knowledge,
      model
    });

    // 6. Handle downstream events
    await this.handleEmits(agent, response);

    return response;
  }

  private selectAgent(request: AgentRequest): Agent {
    // Route based on request type and content
    if (request.type === 'chat') {
      return this.agents.get('qa');
    }
    // ... more routing logic
  }

  private selectModel(agent: Agent, context: Context): Model {
    // Upgrade to Opus for complex cases
    if (agent.name === 'qa' && this.isComplexQuery(context)) {
      return 'opus';
    }
    if (agent.name === 'diagnostic' && this.isSafetyRelated(context)) {
      return 'opus';
    }
    return agent.model.default;
  }
}
```

---

## Inter-Agent Communication

Agents communicate through events:

```typescript
// Agent A completes and emits an event
const response = await qaAgent.run(request);
if (response.action_type === 'pro_referral') {
  eventBus.emit('pro_needed', {
    user_id: request.user_id,
    job_description: response.job_summary,
    urgency: response.urgency
  });
}

// Agent B listens and activates
eventBus.on('pro_needed', async (payload) => {
  await proMatchingAgent.run(payload);
});
```

### Event Catalog

| Event | Emitted By | Consumed By | Payload |
|-------|------------|-------------|---------|
| `question_logged` | Q&A | Content Flywheel | question, answer, metadata |
| `pro_needed` | Q&A, Diagnostic | Pro Matching | job details, urgency |
| `product_needed` | Q&A | Product Rec | product type, home context |
| `emergency` | Diagnostic | Human Review | issue, contact info |
| `content_ready` | Content Gen | Content QA | article draft |
| `content_approved` | Content QA | Publish | article, metadata |
| `lead_received` | Outreach | Lead Qualification | lead data |
| `inspection_uploaded` | Handoff | Report Ingestion | report file |
| `profile_updated` | Report Ingestion | Home Profile | extracted data |

---

## Shared Context System

All agents access shared context:

```typescript
// /services/orchestrator/context-builder.ts

interface AgentContext {
  // User context
  user: {
    id: string;
    email: string;
    created_at: Date;
    preferences: UserPreferences;
  };

  // Home context (the differentiator)
  home: {
    id: string;
    address: string;
    type: 'colonial' | 'cape' | 'ranch' | 'condo' | ...;
    year_built: number;
    square_feet: number;
    systems: {
      hvac: SystemInfo;
      plumbing: SystemInfo;
      electrical: SystemInfo;
      roof: SystemInfo;
      // ...
    };
    known_issues: Issue[];
    maintenance_history: MaintenanceRecord[];
  };

  // Local context
  local: {
    climate_zone: number;
    typical_issues: string[];      // Ice dams, salt damage, etc.
    cost_multiplier: number;       // vs national average
    available_pros: ProSummary[];
  };

  // Conversation context
  conversation: {
    id: string;
    messages: Message[];
    extracted_facts: Fact[];       // Things learned in this convo
  };
}
```

---

## Human-in-the-Loop Workflows

Critical actions queue for human approval:

```typescript
// /tools/workflow/human-review.tool.ts

interface HumanReviewRequest {
  type: 'content_publish' | 'outreach_send' | 'emergency' | 'pro_referral';
  agent: string;
  payload: any;
  urgency: 'low' | 'medium' | 'high' | 'critical';
  auto_approve_after?: number;    // Hours until auto-approve (optional)
}

// Queue for review
await humanReview.queue({
  type: 'content_publish',
  agent: 'content-generation',
  payload: {
    title: 'How to Prevent Ice Dams in Hingham',
    content: '...',
    seo_metadata: {...}
  },
  urgency: 'low',
  auto_approve_after: 24          // Auto-publish after 24h if not reviewed
});

// Admin reviews in /web/admin/content
```

### Review Queues

| Queue | Reviews | SLA | Auto-Approve |
|-------|---------|-----|--------------|
| Content | Article drafts | 24h | Yes, after 24h |
| Outreach | Cold emails (initially) | 4h | After 100 good sends |
| Pro Referral | Match quality (initially) | 1h | After 20 good matches |
| Emergency | Safety escalations | Immediate | Never |

---

## Development Workflow

### Adding a New Agent

1. **Create agent config** in `/agents/{department}/{name}.agent.yaml`
2. **Write system prompt** in `/prompts/{department}/{name}-system.md`
3. **Add any new tools** in `/tools/` if needed
4. **Register in config** at `/config/agents.config.yaml`
5. **Add routing rules** in orchestrator
6. **Write tests** in `/tests/agents/{name}.test.ts`

### Modifying Agent Behavior

1. **Update the prompt** - Most changes are prompt engineering
2. **Adjust tools** - Add/remove tool access
3. **Tune model** - Upgrade/downgrade model tier
4. **Add guardrails** - New safety rules if needed

### Testing Agents

```bash
# Test single agent
npm run test:agent qa

# Test agent interaction
npm run test:flow "question → diagnostic → pro-matching"

# Test with real LLM (costs money)
npm run test:live qa --query "How do I prevent ice dams?"
```

---

## Deployment Architecture

### MVP (Single Server)

```
┌─────────────────────────────────────────────────────┐
│                   Single Server                      │
├─────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │
│  │   Web App   │  │ Orchestrator│  │   Workers   │ │
│  │   (Next.js) │  │             │  │  (Queue)    │ │
│  └─────────────┘  └─────────────┘  └─────────────┘ │
│         │                │                │         │
│  ┌──────┴────────────────┴────────────────┴──────┐ │
│  │                 PostgreSQL                     │ │
│  └───────────────────────────────────────────────┘ │
│  ┌───────────────────────────────────────────────┐ │
│  │              Vector DB (pgvector)              │ │
│  └───────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────┘
              │
              ▼
    ┌─────────────────┐
    │   Claude API    │
    └─────────────────┘
```

### Scale (When Needed)

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Web App   │     │   Web App   │     │   Web App   │
└─────────────┘     └─────────────┘     └─────────────┘
       │                  │                   │
       └──────────────────┼───────────────────┘
                          │
                    ┌─────┴─────┐
                    │   Load    │
                    │  Balancer │
                    └─────┬─────┘
                          │
              ┌───────────┼───────────┐
              │           │           │
       ┌──────┴──────┐ ┌──┴───┐ ┌────┴─────┐
       │ Orchestrator│ │Worker│ │  Worker  │
       │   Cluster   │ │  1   │ │    2     │
       └─────────────┘ └──────┘ └──────────┘
              │           │           │
       ┌──────┴───────────┴───────────┴──────┐
       │            PostgreSQL               │
       │            (Primary)                │
       └─────────────────────────────────────┘
```

---

## Cost Management

### Token Budget by Agent Type

| Agent Type | Est. Tokens/Call | Calls/Day (MVP) | Daily Cost |
|------------|------------------|-----------------|------------|
| Q&A (Sonnet) | 2,000 | 100 | $0.60 |
| Diagnostic (Sonnet) | 1,000 | 50 | $0.15 |
| Content Gen (Sonnet) | 4,000 | 5 | $0.06 |
| Outreach (Sonnet) | 500 | 20 | $0.03 |
| Report Ingestion (Opus) | 10,000 | 5 | $0.75 |
| **MVP Daily Total** | | | **~$2-5/day** |

### Cost Controls

```yaml
# /config/agents.config.yaml

cost_controls:
  daily_budget: 50.00           # Hard stop at $50/day

  alerts:
    - threshold: 25.00
      notify: "founder@zeke.com"
    - threshold: 40.00
      notify: "founder@zeke.com"
      action: "downgrade_to_haiku"

  per_user_limits:
    free_tier: 5                # Questions per day
    core_tier: 50
    premium_tier: unlimited
```

---

## Migration Path from Existing Code

The current PHP codebase can be incrementally migrated:

### Phase 1: Wrap Existing (Week 1)
```
┌─────────────────────────────────────────┐
│          New Orchestrator               │
│  ┌─────────────────────────────────┐   │
│  │     Claude API (Q&A Agent)      │   │
│  └─────────────────────────────────┘   │
│                  │                      │
│                  ▼                      │
│  ┌─────────────────────────────────┐   │
│  │    Existing PHP (functions.php) │   │ ← Keep for now
│  │    - User management            │   │
│  │    - Question storage           │   │
│  │    - Basic routing              │   │
│  └─────────────────────────────────┘   │
└─────────────────────────────────────────┘
```

### Phase 2: Extract Services (Weeks 2-4)
- Move user/home/question logic to new services
- Replace PHP DB calls with new data layer
- Keep PHP frontend temporarily

### Phase 3: New Frontend (Weeks 4-6)
- Build new web app (Next.js or similar)
- Deprecate PHP frontend
- Full agent orchestration

---

## Summary

**Key Decisions:**

1. **Monorepo** - Single codebase, agents are configs not services
2. **YAML Agent Definitions** - Easy to modify, version control prompts
3. **Shared Knowledge Layer** - All agents access same home maintenance corpus
4. **Event-Based Communication** - Agents emit events, others listen
5. **Model Tiering** - Right-size LLM for each task (Haiku → Sonnet → Opus)
6. **Human Checkpoints** - Critical actions require approval
7. **Incremental Migration** - Wrap existing PHP, migrate piece by piece

**This structure allows:**
- One developer to manage 29 agents
- Easy prompt iteration without code changes
- Shared context across all agents
- Cost-effective model selection
- Clear separation without over-engineering
