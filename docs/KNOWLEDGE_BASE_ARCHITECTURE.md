# Knowledge Base Architecture

> Scaling local knowledge from 1 market to 400+ US metros

## Overview

The knowledge base is what makes Zeke's answers **locally specific** instead of generic. It's the difference between:

**Generic AI:**
> "Ice dams are caused by heat loss. You should add insulation."

**Zeke with knowledge base:**
> "Ice dams are a big problem for colonials like yours in Hingham. Your 1985 home likely has balloon framing which lets warm air into the attic. Insulation upgrade runs $800-2,000 on the South Shore - I know 3 contractors who specialize in this."

---

## Knowledge Hierarchy

```
/knowledge
├── /national              # Universal (applies everywhere)
│   ├── hvac-basics.md
│   ├── plumbing-basics.md
│   ├── electrical-basics.md
│   └── safety-rules.md    # Never override
│
├── /regional              # Climate zones (8 zones)
│   ├── /northeast         # Zones 4-6: Cold winters, ice dams
│   ├── /southeast         # Zones 2-3: Humidity, hurricanes
│   ├── /midwest           # Zones 4-5: Extreme temps
│   ├── /southwest         # Zones 2-3: Extreme heat, dry
│   ├── /mountain          # Zone 5-6: Altitude, hail
│   ├── /pacific           # Zones 3-4: Earthquakes, mild
│   ├── /northwest         # Zone 4: Rain, moisture
│   └── /tropical          # Zone 1: Hurricane, humidity
│
├── /state                 # 50 states
│   ├── /massachusetts
│   │   ├── codes.md       # MA building codes
│   │   ├── permits.md     # When permits required
│   │   └── regulations.md # Septic, historic districts
│   ├── /texas
│   ├── /california
│   └── /[47 more states]
│
└── /metro                 # 400+ metros (generated)
    ├── /boston-south-shore  # Hand-curated (pilot)
    ├── /denver              # Template + API
    ├── /austin
    └── /[397 more metros]
```

---

## The Four Layers of Local Knowledge

### Layer 1: Climate (Auto-Generated from APIs)

**Sources:**
- NOAA Climate Data API
- Weather.gov
- IECC Climate Zone database

**Data Points:**
```python
def get_climate_context(zip_code):
    return {
        "climate_zone": "5A",           # IECC zone
        "heating_degree_days": 5800,    # Annual HDD
        "cooling_degree_days": 700,     # Annual CDD
        "avg_snowfall_inches": 48,
        "hurricane_risk": "low",        # none/low/moderate/high
        "freeze_dates": {
            "first": "Oct 15",
            "last": "Apr 20"
        },
        "humidity_class": "humid",      # dry/moderate/humid
        "special_risks": ["ice_dams", "frozen_pipes", "noreasters"]
    }
```

**How Climate Triggers Content:**

| Climate Factor | Triggers |
|----------------|----------|
| Zone 5+ | Ice dam prevention, winterization, heating focus |
| Zone 1-2 | Hurricane prep, AC focus, humidity control |
| High snowfall | Roof load warnings, snow removal |
| Coastal | Salt damage, storm surge, flood prep |
| High altitude | UV damage, furnace altitude adjustment |
| Dry climate | Swamp cooler content, stucco care |

---

### Layer 2: Costs (Learned from Data)

**Sources (in priority order):**
1. Our pro network (highest confidence)
2. User-reported costs ("I paid $X")
3. BLS regional wage data
4. HomeAdvisor/Angi (if API available)
5. National average × COL multiplier (fallback)

**Cost Model:**
```python
class MetroCosts:
    def __init__(self, metro_id):
        self.base_rates = self.get_bls_wages(metro_id)
        self.pro_reported = self.get_pro_network_prices(metro_id)
        self.user_reported = self.get_user_prices(metro_id)
        self.col_multiplier = self.get_col_index(metro_id)

    def estimate(self, service_type):
        """
        Returns cost estimate with confidence score.
        Blends sources with weighting:
        - Pro network: 50% weight
        - User reported: 30% weight
        - BLS + COL: 20% weight (fallback)
        """
        estimates = []

        if self.pro_reported.get(service_type):
            estimates.append({
                "source": "pro_network",
                "low": ..., "mid": ..., "high": ...,
                "weight": 0.5,
                "sample_size": len(self.pro_reported[service_type])
            })

        # ... blend and return

        return {
            "low": calculated_low,
            "mid": calculated_mid,
            "high": calculated_high,
            "confidence": 0.85,  # Based on sample size
            "sources": ["pro_network", "user_reported"],
            "last_updated": "2024-01-15"
        }
```

**Sample Output:**
```json
{
  "service": "hvac_tuneup",
  "metro": "boston-south-shore",
  "estimate": {
    "low": 89,
    "mid": 125,
    "high": 175
  },
  "confidence": 0.85,
  "sample_size": 47,
  "vs_national": "+12%"
}
```

**The Flywheel:** Every pro referral completion teaches us local pricing.

---

### Layer 3: Codes & Permits (Structured Database)

**Sources:**
- ICC (International Code Council) database
- State contractor licensing boards
- Municipal building department websites (scraping)
- User corrections and updates

**Database Schema:**
```sql
CREATE TABLE building_codes (
    id SERIAL PRIMARY KEY,
    state VARCHAR(2) NOT NULL,
    municipality VARCHAR(100),  -- NULL = statewide
    code_type VARCHAR(50),      -- electrical, plumbing, hvac, roofing
    requirement TEXT,
    permit_required BOOLEAN,
    permit_threshold DECIMAL,   -- e.g., "projects over $5000"
    license_required VARCHAR(100), -- "master electrician"
    effective_date DATE,
    source_url TEXT,
    last_verified DATE,
    confidence DECIMAL          -- 0.0-1.0
);

-- Indexes
CREATE INDEX idx_codes_state ON building_codes(state);
CREATE INDEX idx_codes_type ON building_codes(code_type);

-- Example data
INSERT INTO building_codes VALUES (
    1, 'MA', NULL, 'roofing',
    'Ice and water shield required 24 inches from eave',
    true, 0, NULL, '2021-01-01',
    'https://mass.gov/building-code', '2024-01-01', 0.95
);
```

**Query Example:**
```sql
SELECT requirement, permit_required
FROM building_codes
WHERE state = 'MA'
  AND (municipality IS NULL OR municipality = 'Hingham')
  AND code_type = 'electrical'
ORDER BY municipality NULLS LAST;  -- Local overrides state
```

---

### Layer 4: Common Issues (Learned from Users)

**This is the magic.** User questions automatically become local knowledge.

**Process:**
```python
def learn_local_issues(metro_id, lookback_days=90):
    """
    Analyze questions from a metro to identify common issues.
    Run weekly as a batch job.
    """
    # 1. Get all questions from metro
    questions = db.query("""
        SELECT question_text, topic_tags, created_at
        FROM questions
        WHERE metro_id = %s
          AND created_at > NOW() - INTERVAL '%s days'
    """, [metro_id, lookback_days])

    # 2. Cluster by topic using embeddings
    clusters = cluster_by_embedding(questions)

    # 3. Extract top issues
    issues = []
    for cluster in clusters:
        if cluster.size >= 10:  # Minimum threshold
            issues.append({
                "topic": extract_topic_name(cluster),
                "count": cluster.size,
                "example_questions": cluster.top_examples(3),
                "trend": calculate_trend(cluster)  # rising/stable/falling
            })

    # 4. Generate markdown summary
    return generate_issues_markdown(metro_id, issues)
```

**Output Example (auto-generated):**
```markdown
# Denver Common Issues
*Auto-generated from 1,247 questions (last 90 days)*

## Top Concerns

### 1. Hail Damage (87 mentions, trending up)
Colorado's Front Range sees frequent hail. Common questions:
- "Should I file insurance claim for hail damage?"
- "How do I know if my roof has hail damage?"
- "Best roofers for hail damage repair?"

### 2. Evaporative Coolers (45 mentions, stable)
Swamp coolers are common in Denver's dry climate:
- "When should I switch from AC to swamp cooler?"
- "How do I winterize my evaporative cooler?"

### 3. Radon Mitigation (34 mentions, stable)
Front Range has elevated radon levels:
- "Do I need a radon mitigation system?"
- "How much does radon mitigation cost?"
```

---

## Scaling Strategy

### Phase 1: Manual (1 market) - NOW
- Hand-curate South Shore knowledge
- Effort: 40 hours
- Output: Template + learnings for next markets

**Files to create:**
- `/knowledge/metro/boston-south-shore/climate.md`
- `/knowledge/metro/boston-south-shore/costs.md`
- `/knowledge/metro/boston-south-shore/issues.md`
- `/knowledge/state/massachusetts/codes.md`

### Phase 2: Template + API (10 markets) - Month 2-3
- Create metro config YAML
- Auto-generate climate from NOAA API
- Seed costs from BLS + national averages
- Manual review and adjustment
- Effort: 4 hours per market

**Metro config template:**
```yaml
# /knowledge/metro/denver/config.yaml
metro_id: "denver-aurora-lakewood"
display_name: "Denver Metro"
state: "CO"
climate_zone: "5B"
region: "mountain"

# Data source overrides
data_sources:
  climate: "noaa_api"      # auto-generate
  costs: "bls_seed"        # seed from BLS, learn from users
  codes: "colorado_state"  # inherit from state
  issues: "auto_learn"     # learn from questions

# Local specifics (manual)
special_considerations:
  - "High altitude affects furnace combustion"
  - "Hail damage is #1 roof issue"
  - "Radon is common - test before buying"
  - "Expansive soils cause foundation movement"
```

### Phase 3: Auto-Generated (50+ markets) - Month 4-6
- Fully automated from data sources
- Spot-check only
- Issues learned from user questions
- Effort: 30 min per market

### Phase 4: Fully Learned (400+ markets) - Month 6+
- Zero marginal effort
- Climate from API
- Costs from pro network + users
- Issues from question clustering
- Codes from database

---

## Runtime Knowledge Assembly

When a user asks a question, the orchestrator assembles context:

```python
def get_knowledge_context(user_id, question, metro_id):
    """
    Assemble all relevant knowledge for this question.
    """
    # 1. Get user's home profile
    home = get_home_profile(user_id)

    # 2. Determine relevant topics from question
    topics = extract_topics(question)  # ["ice_dams", "roof", "insulation"]

    # 3. Retrieve knowledge layers (with caching)
    context = {
        "national": retrieve_national(topics),
        "regional": retrieve_regional(home.climate_zone, topics),
        "state": retrieve_state(home.state, topics),
        "metro": retrieve_metro(metro_id, topics),
        "learned": retrieve_learned(metro_id, topics),
        "home": home.to_context()
    }

    # 4. Merge with precedence
    # learned > metro > state > regional > national
    merged = merge_with_precedence(context)

    # 5. Trim to fit context window
    return trim_to_tokens(merged, max_tokens=4000)
```

**Precedence Rules:**
1. **Learned** (from local users) overrides all - most recent/relevant
2. **Metro** overrides state - local specifics
3. **State** overrides regional - codes and regulations
4. **Regional** overrides national - climate patterns
5. **National** is the base - universal knowledge

---

## Data Sources Matrix

| Data Type | Source | Coverage | Update | Method |
|-----------|--------|----------|--------|--------|
| Climate zones | IECC/DOE | 100% US | Static | One-time load |
| Weather patterns | NOAA API | 100% US | Real-time | API call |
| Heating/cooling days | NOAA | 100% US | Annual | API call |
| Cost of living | BLS COLI | 100% metros | Quarterly | API/scrape |
| Trade wages | BLS OES | 100% metros | Annual | API |
| Building codes | ICC | 50 states | As changed | Database |
| Permit requirements | Municipal | Top 100 | Monthly | Scraping |
| Common issues | User questions | Where we have users | Continuous | ML clustering |
| Local costs | Pro network | Where we have pros | Continuous | Direct input |

---

## Database Schema (Full)

```sql
-- Climate data (from NOAA)
CREATE TABLE climate_data (
    zip_code VARCHAR(5) PRIMARY KEY,
    metro_id VARCHAR(50),
    climate_zone VARCHAR(3),
    heating_degree_days INT,
    cooling_degree_days INT,
    avg_snowfall_inches DECIMAL,
    avg_rainfall_inches DECIMAL,
    hurricane_risk VARCHAR(10),
    tornado_risk VARCHAR(10),
    earthquake_risk VARCHAR(10),
    first_freeze_date DATE,
    last_freeze_date DATE,
    humidity_class VARCHAR(10),
    updated_at TIMESTAMP
);

-- Metro cost estimates
CREATE TABLE metro_costs (
    id SERIAL PRIMARY KEY,
    metro_id VARCHAR(50),
    service_type VARCHAR(100),  -- hvac_tuneup, roof_replacement, etc.
    unit VARCHAR(20),           -- per_hour, per_sqft, flat
    low_estimate DECIMAL,
    mid_estimate DECIMAL,
    high_estimate DECIMAL,
    sample_size INT,
    confidence DECIMAL,
    sources JSONB,              -- ["pro_network", "user_reported"]
    vs_national_pct DECIMAL,
    updated_at TIMESTAMP,
    UNIQUE(metro_id, service_type)
);

-- User-reported costs (feeds into metro_costs)
CREATE TABLE user_cost_reports (
    id SERIAL PRIMARY KEY,
    user_id INT,
    metro_id VARCHAR(50),
    service_type VARCHAR(100),
    amount DECIMAL,
    year INT,
    contractor_name VARCHAR(200),
    satisfaction_rating INT,    -- 1-5
    created_at TIMESTAMP
);

-- Pro network pricing (highest confidence)
CREATE TABLE pro_pricing (
    id SERIAL PRIMARY KEY,
    pro_id INT,
    metro_id VARCHAR(50),
    service_type VARCHAR(100),
    min_price DECIMAL,
    max_price DECIMAL,
    typical_price DECIMAL,
    unit VARCHAR(20),
    updated_at TIMESTAMP
);

-- Learned common issues (from question clustering)
CREATE TABLE metro_issues (
    id SERIAL PRIMARY KEY,
    metro_id VARCHAR(50),
    topic VARCHAR(100),
    mention_count INT,
    trend VARCHAR(20),          -- rising, stable, falling
    example_questions JSONB,
    generated_summary TEXT,
    last_updated TIMESTAMP
);

-- Building codes (from ICC + state boards)
CREATE TABLE building_codes (
    id SERIAL PRIMARY KEY,
    state VARCHAR(2),
    municipality VARCHAR(100),
    code_type VARCHAR(50),
    requirement TEXT,
    permit_required BOOLEAN,
    permit_threshold DECIMAL,
    license_required VARCHAR(100),
    effective_date DATE,
    source_url TEXT,
    last_verified DATE,
    confidence DECIMAL
);
```

---

## Implementation Roadmap

### Week 1-2: Foundation
- [ ] Set up PostgreSQL with schema
- [ ] Load IECC climate zones (one-time)
- [ ] Integrate NOAA API for weather data
- [ ] Create South Shore pilot files manually

### Week 3-4: State Layer
- [ ] Load Massachusetts building codes
- [ ] Create state template for other states
- [ ] Build code lookup API endpoint

### Week 5-6: Metro Layer
- [ ] Create metro config YAML template
- [ ] Build cost estimation service
- [ ] Seed South Shore costs from research

### Week 7-8: Learning Layer
- [ ] Implement question clustering pipeline
- [ ] Build auto-generation for common issues
- [ ] Create review queue for generated content

### Week 9-10: Integration
- [ ] Build knowledge assembly service
- [ ] Integrate with Q&A agent
- [ ] Add caching layer (Redis)
- [ ] Test with real user questions

### Week 11-12: Second Market
- [ ] Pick market #2 (Denver or Austin)
- [ ] Apply template + API approach
- [ ] Measure time and quality
- [ ] Refine process

---

## Quality Assurance

### Automated Checks
- Cost estimates within 2x of national average (flag outliers)
- Climate data matches zip code (verify API)
- Code references have valid source URLs

### Human Review Triggers
- New market activation (spot-check generated content)
- User reports inaccuracy
- Cost estimate confidence < 0.6
- Unusual question clusters

### Feedback Loop
```
User flags bad answer
        ↓
Review queue created
        ↓
Human reviews knowledge source
        ↓
Knowledge updated
        ↓
Re-index for retrieval
```

---

## Success Metrics

| Metric | Target (Month 3) | Target (Month 6) |
|--------|------------------|------------------|
| Markets with full knowledge | 5 | 25 |
| % queries with local context | 80% | 95% |
| Cost estimate accuracy (±20%) | 70% | 85% |
| User "locally relevant" rating | 4.0/5 | 4.5/5 |
| Auto-generated content accuracy | 85% | 92% |

---

## Summary

The knowledge base scales through four mechanisms:

1. **APIs** - Climate data auto-generated for any US location
2. **Databases** - Codes and permits from structured sources
3. **Learning** - Costs and issues learned from users/pros
4. **Templates** - New markets inherit regional + state knowledge

The first market (South Shore) requires 40 hours of manual work. The 100th market requires zero marginal effort - it's fully auto-generated and learned from user activity.
