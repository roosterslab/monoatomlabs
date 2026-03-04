# CERAPHENE — Box Design Infographics & Brainstorming Lab

A dedicated playground for exploring how to brand the CERAPHENE Graphene Ceramic Coating box cover — alternative layouts, infographics, data arrangements, marketing copy, and brand widgets.

## Purpose

This lab lets you:
- Explore different **box side alternatives** (front, back, side panels)
- Test **infographic ideas** adapted to box dimensions
- Compare **data arrangement styles** for CERAPHENE specs
- Evaluate **marketing copy variants** (tone, voice, message)
- Preview **brand badge/widget** concepts

All ideas are designed to be **print-ready** — suitable for box cover artwork at 300dpi offset print.

## Quick Start

```bash
npm install
npm run dev
```

Opens at `http://localhost:5175`

## Project Structure

```
src/
├── components/ideas/          # Idea components (one per idea)
│   ├── FrontPanelAlternatives.jsx  # 6 front panel approaches
│   ├── BackPanelConcepts.jsx       # 5 back panel content strategies
│   ├── SidePanelIdeas.jsx          # 5 side panel concepts
│   ├── HardnessScaleViz.jsx        # 9H+ pencil hardness visual
│   ├── ThreatWheelViz.jsx          # 9-threat wheel (3 styles)
│   ├── WaterBeadScience.jsx        # 115° contact angle (3 styles)
│   ├── MolecularLayerDiagram.jsx   # Cross-section layer diagram
│   ├── DurabilityTimeline.jsx      # 4yr durability line chart
│   ├── CostComparisonViz.jsx       # ₹5k vs ₹15k (4 styles)
│   ├── CompetitorMatrix.jsx        # vs Gtechniq/CarPro/CeramicPro
│   ├── KeyMetricsArrangements.jsx  # 5 numbers, 6 layouts
│   ├── SpecSheetLayout.jsx         # Spec table (5 styles)
│   ├── TaglineExplorer.jsx         # 7 taglines with scores
│   ├── MarketingCopyVariants.jsx   # 5 tone variants (back panel text)
│   └── ShieldBadgeIdeas.jsx        # 6 badge/widget concepts
├── data/
│   ├── catalog.js             # Idea catalog (add new ideas here)
│   └── cerapheneData.js       # Verified product data
└── pages/
    └── Catalog.jsx            # Dark sidebar + content shell
```

## Box Panel Dimensions (at scale=1, 96dpi)

| Panel | Width | Height | Notes |
|---|---|---|---|
| Back Panel | 1494px | 638px | Widest — richest canvas |
| Front Panel | 499px | 638px | Primary brand impression |
| Side Panel | 204px | 638px | Narrow — vertical text / data strip |
| Flap | 499px | 204px | Short horizontal — contents + logo |
| QR Panel | 605px | 492px | QR code + claim |

## How to Add New Ideas

### Step 1: Create a component

```jsx
// src/components/ideas/MyNewIdea.jsx
import React from 'react'

const C = '#64748B'  // CERAPHENE slate accent

export default function MyNewIdea() {
  return (
    <div style={{ padding: 32 }}>
      {/* Your idea here */}
    </div>
  )
}
```

### Step 2: Register in catalog

```js
// src/data/catalog.js
import MyNewIdea from '../components/ideas/MyNewIdea'

export const catalog = [
  // ...existing ideas...
  {
    id: 'my-new-idea',
    name: 'My New Idea',
    category: 'Box Side Concepts',  // or other category
    description: 'What this idea explores',
    component: MyNewIdea,
    thumbnail: '🎨',
    icon: SomeIcon,
    impact: 'HIGH',  // or 'MEDIUM'
  },
]
```

That's it — the sidebar and home page update automatically.

## Print Readiness Notes

- **Resolution**: All layout dimensions are at 96dpi screen. Final print files should be exported at 300dpi (scale by ×3.125).
- **Colour**: Dark theme uses near-black `#050505`. In print: use rich black (C:40 M:30 Y:30 K:100).
- **Minimum line weight**: Avoid strokes thinner than 0.25pt on final print artwork.
- **Fonts**: Rajdhani (headlines/numbers), Inter (body). Both available as Google Fonts or can be purchased for commercial print.
- **Safe zone**: Keep critical content 5mm+ from trim edge.
- **Bleed**: Add 3mm bleed on all edges for print file export.

## CERAPHENE Key Data

| Spec | Value |
|---|---|
| Hardness | 9H+ |
| Water Contact Angle | 115° |
| Thickness | 3–4 μm |
| Heat Resistance | 700°C |
| Durability | 4+ years |
| Chemical Resistance | pH 2–12 |
| Price | ₹5,000 / 50ml |
| Competitor Price | ₹15,000 / 50ml |
| Cost Saving | 60–70% |

---

**Monoatom Labs · CERAPHENE Box Design Lab**
**React 19 + Vite 6 + Tailwind CSS 3**
