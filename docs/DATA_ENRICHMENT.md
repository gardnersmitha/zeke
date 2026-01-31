# Home Profile Data Enrichment

## Overview

When a user enters their address, Zeke automatically enriches their home profile using public data sources and AI vision on available photos. This reduces onboarding friction from "answer 20 questions" to "confirm what we found."

---

## Data Sources

### 1. Property Data APIs

**Zillow / Redfin / Realtor.com (via APIs or scraping)**

| Data Point | Source | Confidence |
|------------|--------|------------|
| Home type (colonial, cape, ranch) | Listing data | High |
| Year built | Tax records | High |
| Square footage | Tax records | High |
| Bedrooms / Bathrooms | Listing data | High |
| Lot size | Tax records | High |
| Last sale date / price | Public records | High |
| Zestimate / value estimate | Zillow | Medium |
| Prior listing photos | MLS archives | High |

**API Options:**
- Zillow API (limited, deprecated for some uses)
- Redfin (no public API, scraping possible)
- Realtor.com API
- ATTOM Data (paid, comprehensive)
- CoreLogic (paid, enterprise)
- Estated API (affordable, good coverage)

### 2. County/Municipal Records

**Permit History (Gold Mine for System Ages)**

| Permit Type | What It Tells Us |
|-------------|------------------|
| Roofing permit | Roof replacement date |
| HVAC permit | Furnace/AC install date |
| Electrical permit | Panel upgrade date |
| Plumbing permit | Water heater, repiping |
| Building permit | Additions, renovations |

**Access Methods:**
- Many counties have online permit search
- Some aggregate APIs (BuildFax, PermitData)
- Manual lookup as fallback

**Example for Hingham, MA:**
- Plymouth County Registry of Deeds
- Hingham Building Department permits

### 3. Visual Data

**Google Street View**
- Exterior condition
- Roof visible (partial)
- Siding type and condition
- Driveway, landscaping
- Approximate home style

**Google/Bing Satellite**
- Roof shape and coverage
- Pool (yes/no)
- Lot layout
- Outbuildings

**Prior Listing Photos (AI Vision Analysis)**

When listing photos are available, AI can identify:

| System | Visual Cues |
|--------|-------------|
| Furnace | Brand logo, model plate, style |
| Water heater | Tank size, brand, type (gas/electric) |
| AC unit | Outdoor condenser brand, size |
| Electrical panel | Amp rating, brand, breaker style |
| Appliances | Brand, approximate age |
| Windows | Style, material, condition |
| Roof (from inside) | Condition in attic photos |

---

## Enrichment Flow

```
User enters address
        │
        ▼
┌───────────────────────────────────────────────────────┐
│              PARALLEL DATA FETCHES                     │
├───────────────────────────────────────────────────────┤
│                                                       │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐   │
│  │  Property   │  │   County    │  │   Visual    │   │
│  │    API      │  │   Records   │  │    Data     │   │
│  └─────────────┘  └─────────────┘  └─────────────┘   │
│         │                │                │          │
│         ▼                ▼                ▼          │
│  Year, sqft,      Permit history    Street view,    │
│  beds/baths,      (system ages)     listing photos  │
│  sale history                                       │
│                                                       │
└───────────────────────────────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────────────────────┐
│              AI VISION ANALYSIS                        │
│  (If listing photos available)                        │
├───────────────────────────────────────────────────────┤
│                                                       │
│  Photo of basement → "Carrier furnace, ~2015 model"  │
│  Photo of utility  → "50-gal AO Smith water heater"  │
│  Photo of exterior → "Asphalt shingle roof"          │
│                                                       │
└───────────────────────────────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────────────────────┐
│              COMPILED PROFILE                          │
├───────────────────────────────────────────────────────┤
│                                                       │
│  123 Main St, Hingham MA                             │
│  Colonial · 1985 · 2,400 sqft · 4 bed, 2.5 bath      │
│                                                       │
│  Systems (auto-detected):                            │
│  ├── Furnace: Carrier (2015) ← permit + photo        │
│  ├── AC: Lennox (2015) ← permit                      │
│  ├── Water Heater: AO Smith 50gal (2018) ← photo     │
│  ├── Roof: Asphalt shingle (2012) ← permit           │
│  └── Electrical: 200 amp (original) ← photo          │
│                                                       │
└───────────────────────────────────────────────────────┘
        │
        ▼
┌───────────────────────────────────────────────────────┐
│              USER CONFIRMATION                         │
├───────────────────────────────────────────────────────┤
│                                                       │
│  "We found this about your home. Look right?"        │
│                                                       │
│  ☑️ 1985 Colonial, 2,400 sqft       [Edit]           │
│  ☑️ Gas furnace ~2015               [Edit]           │
│  ☑️ Central AC ~2015                [Edit]           │
│  ☑️ Water heater ~2018              [Edit]           │
│  ☐ Roof - we couldn't determine     [Add]            │
│                                                       │
│            [Looks Good! Continue →]                   │
│                                                       │
└───────────────────────────────────────────────────────┘
```

---

## AI Vision Prompts

### Furnace/HVAC Identification

```
Analyze this photo of a home's mechanical room or basement.
Identify any HVAC equipment visible:

1. Furnace: Brand, approximate model year, type (gas/electric)
2. AC handler: Brand, type
3. Any visible model numbers or data plates

Return structured data:
{
  "furnace": {
    "brand": "Carrier",
    "type": "gas",
    "estimated_year": 2015,
    "confidence": 0.85,
    "notes": "Model number partially visible: 58CTW..."
  }
}
```

### Water Heater Identification

```
Analyze this photo for water heater information:

1. Type: Tank or tankless
2. Brand (look for logo)
3. Capacity (gallons, usually on label)
4. Fuel type: Gas (has vent pipe) or Electric
5. Approximate age based on style

Return structured data with confidence scores.
```

### Electrical Panel Identification

```
Analyze this photo of an electrical panel:

1. Amperage rating (usually on main breaker)
2. Brand (Square D, Siemens, GE, etc.)
3. Panel type (breakers vs fuses)
4. Approximate age
5. Any visible concerns (rust, double-tapped breakers)

Note: If panel appears to have safety issues, flag for professional inspection.
```

---

## Data Confidence Levels

| Confidence | Display | Action |
|------------|---------|--------|
| High (>85%) | Show as fact with edit option | Auto-populate |
| Medium (60-85%) | Show with "?" and verify prompt | Ask to confirm |
| Low (<60%) | Don't show, ask user | Prompt for input |

---

## Enrichment by Address Only (No Photos)

Even without listing photos, we can populate:

| Data Point | Source | Typical Availability |
|------------|--------|---------------------|
| Year built | Property API | 95%+ |
| Square footage | Property API | 95%+ |
| Beds/baths | Property API | 90%+ |
| Home type | Property API | 85%+ |
| Lot size | Property API | 90%+ |
| Last sale | Public records | 95%+ |
| Roof age | Permit records | 40-60% |
| HVAC age | Permit records | 30-50% |
| Climate zone | Address | 100% |
| Typical issues | Climate + home type | 100% |

**Minimum Viable Profile from Address:**
```
123 Main St, Hingham MA 02043
├── Colonial (from property data)
├── Built 1985 (from tax records)
├── 2,400 sqft, 4 bed, 2.5 bath
├── Climate Zone 5A (cold, humid)
└── Common issues: Ice dams, frozen pipes, heating costs
```

---

## Inspector Handoff Enrichment

When an inspector provides data, we get even more:

```
INSPECTOR DATA (highest confidence)
├── Roof: 15 years old, asphalt, fair condition
├── HVAC: Carrier furnace, 2012, working but aging
├── Water heater: AO Smith, 2018, good condition
├── Electrical: 200 amp, updated 2005
├── Plumbing: Copper supply, PVC drain, no issues
├── Foundation: Minor crack in basement, monitor
└── Issues noted:
    ├── Roof shingles curling (replace in 3-5 years)
    ├── Dryer vent needs cleaning
    └── Caulk around tub failing
```

Inspector data **overrides** inferred data with high confidence.

---

## Privacy Considerations

1. **Only use publicly available data** - MLS listings, tax records, permits
2. **User owns their data** - Can delete profile anytime
3. **Disclose sources** - "Based on public records and your 2020 listing"
4. **Don't store photos** - Process and discard, keep only extracted data
5. **Opt-in to enrichment** - User confirms before we fetch

---

## Implementation Priority

### MVP (Week 1-2)
- [ ] Address autocomplete (Google Places)
- [ ] Basic property data (Estated API or similar)
- [ ] Manual system entry

### Phase 2 (Week 3-4)
- [ ] Permit lookup (start with Hingham/South Shore)
- [ ] Listing photo fetch (if available)
- [ ] Basic AI vision on photos

### Phase 3 (Week 5-8)
- [ ] Advanced AI vision (model number extraction)
- [ ] Multi-source data merging
- [ ] Confidence scoring and display
- [ ] "Snap a photo of your water heater" feature

---

## API Cost Estimates

| Service | Cost | Usage |
|---------|------|-------|
| Estated Property API | $0.10-0.50/lookup | Per address |
| Google Places | $0.003/autocomplete | Per keystroke |
| Google Street View | $0.007/image | Per address |
| OpenAI Vision / Claude | $0.01-0.05/image | Per photo analyzed |

**Per-user enrichment cost: ~$0.50-2.00** (one-time at signup)

---

## Example: Full Enrichment Output

**Input:** "123 Main St, Hingham, MA 02043"

**Output:**
```json
{
  "address": {
    "street": "123 Main St",
    "city": "Hingham",
    "state": "MA",
    "zip": "02043",
    "county": "Plymouth"
  },
  "property": {
    "type": "Single Family",
    "style": "Colonial",
    "year_built": 1985,
    "sqft": 2400,
    "bedrooms": 4,
    "bathrooms": 2.5,
    "lot_sqft": 15000,
    "confidence": 0.95,
    "source": "property_api"
  },
  "climate": {
    "zone": "5A",
    "heating_degree_days": 5800,
    "cooling_degree_days": 700,
    "typical_issues": ["ice_dams", "frozen_pipes", "heating_costs", "humidity"]
  },
  "systems": {
    "hvac": {
      "type": "gas_furnace",
      "brand": "Carrier",
      "estimated_year": 2015,
      "confidence": 0.75,
      "source": "permit_records"
    },
    "water_heater": {
      "type": "tank",
      "brand": "AO Smith",
      "capacity_gallons": 50,
      "fuel": "gas",
      "estimated_year": 2018,
      "confidence": 0.80,
      "source": "listing_photo_ai"
    },
    "roof": {
      "material": "asphalt_shingle",
      "estimated_year": 2012,
      "confidence": 0.70,
      "source": "permit_records"
    },
    "electrical": {
      "amperage": 200,
      "confidence": 0.60,
      "source": "listing_photo_ai"
    }
  },
  "history": {
    "last_sale": {
      "date": "2020-06-15",
      "price": 650000
    },
    "permits": [
      {"type": "roofing", "date": "2012-09-01"},
      {"type": "hvac", "date": "2015-03-15"},
      {"type": "plumbing", "date": "2018-07-20"}
    ]
  },
  "photos_analyzed": 12,
  "enrichment_cost": 1.25
}
```

---

## User Experience

**Before (traditional):**
> "Tell us about your home" → 15 form fields → User gives up

**After (enriched):**
> "Enter your address" → "We found this - look right?" → One tap confirm

**Time to profile:**
- Before: 5-10 minutes (if they finish)
- After: 30 seconds
