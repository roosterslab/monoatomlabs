# Graphacrete ROI Calculator — PM Expansion Plan

> Inspired by Coalorix ROI Calculator pattern. All additions are net-new. Nothing existing is removed.
> Date: 2026-02-19

---

## 1. Current State Gaps vs Coalorix

| Feature | Coalorix | Graphacrete (current) | Gap |
|---|---|---|---|
| Reset to defaults | ✅ RefreshCw button | ❌ | Add |
| Adjustable efficiency/gain % | ✅ Coal Savings slider | ❌ Cement reduction only | Add strength gain sliders |
| Verified formula badge | ✅ Blue pill with bullets | ❌ | Add NABL formula pill |
| Fixed parameter display | ✅ CAPEX card (prominent) | ❌ | Add additive cost fixed card |
| Daily / Monthly / Annual columns | ✅ 3-col breakdown | ❌ Only project total | Add Per-m³ / Per-Pour / Project |
| ROI Multiple (Nx) | ✅ `returns / capex` | ❌ Shows % only | Add |
| N-year total dark hero card | ✅ Dark gradient card | ❌ Only line chart | Add |
| Strength/performance data | ❌ N/A | ❌ Completely absent | **Core gap for concrete product** |
| Contractor margin view | ❌ N/A | ❌ | Add toggle |
| Carbon credit value | ❌ N/A | ❌ | Add |
| Result card animation | ✅ key= + scale | ❌ | Add (trivial) |

---

## 2. New Primary Inputs (Always Visible, User-Adjustable)

These go into `defaultInputs` in `graphacreteData.js`. Same pattern as Coalorix's efficiency sliders.

### 2a. `strengthGain28` — Compressive Strength Gain at 28 Days
```
Label:    "28-Day Strength Gain"
Default:  50 %
Min:      30 %
Max:      67 %
Step:     1 %
Unit:     %
Note:     "NABL field data: 40–67%. 50% = conservative default."
```
**Why:** This is the headline technical claim. Currently buried in NABL badge text. Making it a slider lets engineers validate against their own mix data.

**Implication:** M30 base (30 MPa) × 1.50 = 45 MPa at 28 days. At 67%: 30 × 1.67 = 50.1 MPa = M50. Users see exactly what grade performance they're getting.

### 2b. `strengthGain7` — Early Strength Gain at 7 Days
```
Label:    "7-Day Early Strength Gain"
Default:  22 %
Min:      10 %
Max:      40 %
Step:     1 %
Unit:     %
Note:     "Critical for formwork striking time. Default = conservative field value."
```
**Why:** Higher 7-day strength = faster striking of formwork = shorter floor cycle = real ₹ savings for contractors. This is currently modelled as a flat "17% faster cycles" in lifecycle. Deriving it from 7-day gain is far more credible.

---

## 3. New Calculations (Data Layer — `graphacreteData.js`)

All additive. No existing formula changes.

### 3a. Strength Performance Metrics

```js
// Inputs
const strengthGain28 = inputs.strengthGain28 || 50;  // %
const strengthGain7  = inputs.strengthGain7  || 22;  // %

// Base MPa values (grade = MPa for standard concrete)
const baseMPa            = baseGrade;                           // e.g. 30 MPa for M30
const targetMPa          = targetStrength;                      // e.g. 50 MPa for M50

// Standard 7-day/28-day ratio for Indian concrete ≈ 0.75
const sevenDayRatio      = 0.75;
const baseAt7DayMPa      = parseFloat((baseMPa * sevenDayRatio).toFixed(1));       // 22.5 MPa
const targetAt7DayMPa    = parseFloat((targetMPa * sevenDayRatio).toFixed(1));     // 37.5 MPa

// Graphacrete-enhanced values
const graphAt28DayMPa    = parseFloat((baseMPa * (1 + strengthGain28 / 100)).toFixed(1));  // 45 MPa @ 50%
const graphAt7DayMPa     = parseFloat((baseAt7DayMPa * (1 + strengthGain7 / 100)).toFixed(1)); // 27.5 MPa @ 22%

// Strength gain labels
const strengthGrade28Label = graphAt28DayMPa >= targetMPa - 1
  ? `≈ M${targetStrength}`          // "≈ M50" — close enough
  : `≈ M${Math.floor(graphAt28DayMPa / 5) * 5}`;   // "≈ M45" — honest
```

### 3b. Formwork Striking / Construction Schedule

```js
// Minimum striking strength per IS 456: 15 MPa for vertical forms
const strikingThresholdMPa = 15;

// Traditional: how many days to reach 15 MPa?
// Assume linear early-strength ramp: day_traditional = 15 / (baseMPa * 0.75) * 7
const tradDaysToStrike = parseFloat(((strikingThresholdMPa / baseAt7DayMPa) * 7).toFixed(1));

// Graphacrete: same ramp but faster
const graphDaysToStrike = parseFloat(((strikingThresholdMPa / graphAt7DayMPa) * 7).toFixed(1));

// Days saved per pour (floor cycle)
const deshutterDaysSaved  = Math.max(0, parseFloat((tradDaysToStrike - graphDaysToStrike).toFixed(1)));

// For a project: floor count ≈ projectVolume / 300 (rough: 300 m³/floor typical RMC)
const estimatedFloors     = Math.max(1, Math.round(projectVolume / 300));
const totalCycleDaysSaved = Math.round(deshutterDaysSaved * estimatedFloors);
const cycleSavingsValue   = Math.round(totalCycleDaysSaved * laborCost);
```

### 3c. Per-Pour / Time-Horizon Breakdown (Coalorix-style)

```js
// Per-Pour view (one standard RMC truck = ~6 m³ or one pour = vary; use 30 m³ as default pour)
const defaultPourM3        = 30;
const netSavingsPerPour    = Math.round(netSavingsPerM3 * defaultPourM3);
const additiveCostPerPour  = Math.round(additiveCostPerM3 * defaultPourM3);
const cementSavedPerPour   = Math.round(cementSavedBagsPerM3 * defaultPourM3);   // bags
```

### 3d. Investor / ROI Multiple Metrics

```js
// ROI Multiple: net savings / additive investment
const roiMultiple = netSavingsTotal > 0 && productCostTotal > 0
  ? parseFloat((netSavingsTotal / productCostTotal).toFixed(1))
  : null;

// All-in multiple including lifecycle
const allInMultiple = totalAllInDelta > 0 && productCostTotal > 0
  ? parseFloat((totalAllInDelta / productCostTotal).toFixed(1))
  : null;
```

### 3e. Carbon Credit Value

```js
// India carbon credit market rate (BEE/VCS verified)
const carbonCreditRatePerTon   = 500;     // ₹/tCO₂ (conservative — market ₹400–800)
const carbonCreditValueTotal   = Math.round((co2AvoidedKg / 1000) * carbonCreditRatePerTon);
```

### 3f. Contractor Margin Metrics

```js
// Contractor charges client at target grade price, pours at base+G cost
const contractorRevenuePerM3   = Math.round(targetCost);                // ₹4,950/m³ at M50
const contractorCostPerM3      = Math.round(netCostWithGraphacrete);    // ₹4,220/m³
const contractorMarginPerM3    = contractorRevenuePerM3 - contractorCostPerM3;  // ₹730/m³
const contractorMarginTotal    = Math.round(contractorMarginPerM3 * projectVolume);
const contractorNetOfAdditive  = Math.round((contractorMarginPerM3 - additiveCostPerM3) * projectVolume); // after additive cost
```

---

## 4. New UI Sections (JSX — Purely Additive)

### 4a. Strength Performance Panel (RIGHT side — major new section)

**Where:** Insert before the bar chart. This is the product's #1 technical claim and should lead the right panel.

**What it shows:**
```
┌─────────────────────────────────────────────────────────────┐
│  COMPRESSIVE STRENGTH PERFORMANCE       [NABL Certified]   │
├──────────────────┬──────────────────┬───────────────────────┤
│  7-Day Strength  │  28-Day Strength │  vs. Traditional M50  │
│                  │                  │                       │
│  M30: 22.5 MPa   │  M30: 30 MPa     │  M50: 37.5 MPa (7d)  │
│  M30+G: 27.5 MPa │  M30+G: 45 MPa   │  M50: 50 MPa (28d)   │
│  +22% ↑          │  +50% ↑          │                       │
│  [green bar]     │  [green bar]     │  [grey bar baseline]  │
└──────────────────┴──────────────────┴───────────────────────┘
  Striking at 5.4d (−1.6d vs standard) · Saves X floor cycles
```

**Visual:** Grouped mini-bars or side-by-side stat cards.

**Three-column cards (no new chart needed — just 3 metric cards):**
- Card 1: **7-Day: M30+G = {graphAt7DayMPa} MPa** · `+{strengthGain7}% vs standard M30` · Striking at {graphDaysToStrike} days
- Card 2: **28-Day: M30+G = {graphAt28DayMPa} MPa** · `+{strengthGain28}% vs standard M30` · `≈ {strengthGrade28Label} performance`
- Card 3: **Cycle Time Saved** · `{deshutterDaysSaved} days/floor` · `{totalCycleDaysSaved} days total` · `{fmt(cycleSavingsValue)} saved`

### 4b. Reset + NABL Formula Bar (between inputs and main grid)

**Where:** A slim bar between the 4-slider inputs grid and the main 12-col grid.

```
[ ✓ NABL Certified · M30+G≈M50 · 15-20% cement reduction · 2L/m³ @ ₹235/L ]   [Reset ↺]
```

Styled: light indigo background, `text-[10px]`, indigo text left, reset button right.

### 4c. Fixed Additive Cost Card (Coalorix CAPEX equivalent)

**Where:** In the left panel, above the "Additive Requirement" box. Shows the fixed cost prominently.

```
┌─────────────────────────────────────────────────────┐
│  ADDITIVE COST (FIXED)                              │
│  ₹470/m³                                            │
│  2 L/m³ × ₹235/L — does not change with grade       │
└─────────────────────────────────────────────────────┘
```

Styled: indigo-50 bg, indigo-200 border.

### 4d. Per-m³ / Per-Pour / Project Breakdown (Coalorix Daily/Monthly/Annual)

**Where:** Below the existing "Project Totals" card in the LEFT panel.

```
┌────────────────────────────────────────────────────────────┐
│  SAVINGS BREAKDOWN                                         │
├──────────────┬──────────────┬───────────────────────────── │
│  Per m³      │  Per Pour    │  Project Total               │
│              │  (30 m³)     │  ({projectVolume} m³)        │
│  Additive:   │  Additive:   │  Additive:                   │
│  ₹470        │  ₹14,100     │  {fmt(productCostTotal)}     │
│  Savings:    │  Savings:    │  Savings:                    │
│  ₹{net}/m³   │  ₹{netPour}  │  {fmt(netSavingsTotal)}      │
│  Net:        │  Net:        │  Net:                        │
│  ₹{n}/m³     │  ₹{n×30}     │  {fmt(net)}                  │
└──────────────┴──────────────┴──────────────────────────────┘
```

### 4e. ROI Multiple + Carbon Credit (2-card row)

**Where:** After existing ROI + Payback 2-card row (currently 2 cols). Add as a NEW 2-col row below it.

- **Left:** Return Multiple `{roiMultiple}×` — "net savings / additive cost" — indigo accent
- **Right:** Carbon Credit Value `{fmt(carbonCreditValueTotal)}` — "{co2AvoidedKg/1000} t CO₂ @ ₹{carbonCreditRatePerTon}/t" — emerald accent

### 4f. Dark Investor Hero Card (after projection chart)

**Where:** Below the 10-year projection line chart, before the disclaimer.

```
┌─────────────────────────────────────────────────────────────┐
│  bg-neutral-900 (dark card)                                 │
│                                                             │
│  Total Value over {analysisPeriod} yr        ROI Multiple  │
│  ₹{fmt(totalAllInDelta)}                     {allInMultiple}× │
│  Construction + lifecycle · {volume} m³      on additive    │
└─────────────────────────────────────────────────────────────┘
```

Only shown when `totalAllInDelta > 0`.

### 4g. Contractor Mode Toggle

**Where:** Small pill/switch in the NABL banner row (top of calculator, right side).

```
[Owner View]  [Contractor View]  ← toggle
```

**Owner View (current):** Shows savings vs building M50 traditionally
**Contractor View (new):** Shows:
- "You charge: ₹{targetCostPerM3}/m³ (M{targetGrade} rate)"
- "You pour: M{baseGrade} + Graphacrete = ₹{netCostPerM3}/m³"
- "Your margin: ₹{contractorMarginPerM3}/m³"
- "Graphacrete pays for itself in: {margin/additiveCost × 100}% of your margin"
- **Total additional margin: `{fmt(contractorMarginTotal)}`** over {volume} m³

This flips the entire LEFT panel content when toggled. The same project totals section becomes a contractor P&L.

### 4h. Strength Chart (Grouped Bar — Right panel)

**Where:** Replace or supplement the current grade cost bar chart with an alternate tab, OR add as a second chart below it.

**Two tabs:** `[Cost / m³]` `[Strength (MPa)]`

Strength chart data:
```js
[
  { name: '7-Day',  base: baseAt7DayMPa, withG: graphAt7DayMPa, target: targetAt7DayMPa },
  { name: '28-Day', base: baseMPa,        withG: graphAt28DayMPa, target: targetMPa      }
]
```

Three grouped bars per time period: grey (M30 standard), green (M30+G), blue (M50 standard baseline). Very visual.

---

## 5. New Input: Adjustable Pour Size

**Why:** Needed for the Per-Pour breakdown column.

```
Label:    "Pour Size"
Default:  30 m³
Min:      5 m³  (small residential pour)
Max:      200 m³ (large RMC batch)
Step:     5 m³
Unit:     m³/pour
Note:     "Default = typical RMC batch. Adjust for your project."
```

Goes into **secondary inputs** (accordion), not primary.

---

## 6. Updated Input Grid Layout

### Current (4 primary inputs):
```
[Volume]  [Grade]  [Cement Price]  [Cement Reduction]
```

### Proposed (6 primary inputs, 2×3 grid):
```
[Volume]            [Grade]               [Cement Price]
[Cement Reduction]  [28-Day Gain %]       [7-Day Gain %]
```

The two new strength sliders go in Row 2 Col 2 and Col 3.

---

## 7. What Goes Where — Summary Map

```
┌─────────────────────────────────────────────────────────────┐
│  NABL BANNER (existing)                 [Owner | Contractor]│ ← 4g toggle
├─────────────────────────────────────────────────────────────┤
│  INPUT GRID (6 sliders)                                     │ ← 2a 2b new
│  [Vol] [Grade] [CemPrice] [CemRed%] [28d%] [7d%]           │
├──────────── Reset bar ────────────────────────── [↺ Reset] ─┤ ← 4b
├────────────────────────┬────────────────────────────────────┤
│  LEFT PANEL            │  RIGHT PANEL                       │
│                        │                                    │
│  [Fixed Additive Card] │  [Strength Performance Cards ← 4a]│
│    ₹470/m³             │  7d | 28d | Cycle time saved       │
│                        │                                    │
│  [Per-m³ cost cards]   │  [Chart Tabs: Cost | Strength ←4h]│
│  (existing)            │  (grouped bar chart — new)         │
│                        │                                    │
│  [Additive Req Box]    │  [3 Savings Cards] (existing)      │
│  (existing)            │                                    │
│                        │  [ROI + Payback] (existing)        │
│  [Graphacrete net]     │                                    │
│  (existing)            │  [ROI Multiple + Carbon Credit←4e]│
│                        │                                    │
│  [Project Totals]      │  [Projection Chart] (existing)     │
│  (existing)            │                                    │
│                        │  [Dark Hero Card ← 4f]             │
│  [Per-Pour Breakdown   │                                    │
│   ← 4d]                │  [Disclaimer] (existing)           │
│                        │                                    │
│  (if Contractor Mode:  │                                    │
│   Contractor P&L cards │                                    │
│   ← 4g)                │                                    │
└────────────────────────┴────────────────────────────────────┘
│  LIFECYCLE ACCORDION (existing)                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 8. Implementation Priority

### Phase 1 — Quick Wins (< 2 hrs, high impact)
| # | Item | Effort | Impact |
|---|------|--------|--------|
| P1.1 | Reset button + formula bar (4b) | 20 min | UX |
| P1.2 | ROI Multiple + Carbon Credit 2-card (4e) | 30 min | Investor |
| P1.3 | Dark hero card (4f) | 30 min | Visual anchor |
| P1.4 | Add `roiMultiple`, `carbonCreditValueTotal` to data | 15 min | Data |

### Phase 2 — Core Strength Data (2-3 hrs, very high impact)
| # | Item | Effort | Impact |
|---|------|--------|--------|
| P2.1 | `strengthGain28` + `strengthGain7` sliders to inputs (2a, 2b) | 45 min | Product truth |
| P2.2 | Strength calculation metrics to data layer (3a, 3b) | 30 min | Data |
| P2.3 | Strength Performance 3-card panel (4a) | 1 hr | Core new feature |

### Phase 3 — Business Context (2-3 hrs)
| # | Item | Effort | Impact |
|---|------|--------|--------|
| P3.1 | Per-Pour breakdown columns (4d, 2 new input) | 1 hr | Site engineer |
| P3.2 | Contractor mode toggle + P&L view (4g) | 2 hr | New audience |

### Phase 4 — Visual Polish
| # | Item | Effort | Impact |
|---|------|--------|--------|
| P4.1 | Strength grouped bar chart with tabs (4h) | 1.5 hr | Visual |
| P4.2 | Fixed additive card (4c) | 20 min | Clarity |

---

## 9. Data Layer New Return Fields Summary

```js
return {
  // ... existing fields unchanged ...

  // ── Strength performance ──────────────────────────────────────────────────
  strengthGain28,              // user input, % (default 50)
  strengthGain7,               // user input, % (default 22)
  baseMPa,                     // e.g. 30 MPa for M30
  targetMPa,                   // e.g. 50 MPa for M50
  baseAt7DayMPa,               // e.g. 22.5 MPa
  targetAt7DayMPa,             // e.g. 37.5 MPa
  graphAt28DayMPa,             // e.g. 45 MPa  (+50%)
  graphAt7DayMPa,              // e.g. 27.5 MPa (+22%)
  strengthGrade28Label,        // "≈ M50" or "≈ M45"

  // ── Construction schedule ─────────────────────────────────────────────────
  tradDaysToStrike,            // e.g. 4.7 days
  graphDaysToStrike,           // e.g. 3.8 days
  deshutterDaysSaved,          // e.g. 0.9 days per floor
  estimatedFloors,             // derived from project volume
  totalCycleDaysSaved,         // floors × days saved
  cycleSavingsValue,           // ₹ value of faster schedule

  // ── Per-pour breakdown ────────────────────────────────────────────────────
  netSavingsPerPour,           // ₹ net at default 30 m³ pour
  additiveCostPerPour,         // ₹ additive cost per pour
  cementSavedPerPour,          // bags saved per pour

  // ── Investor metrics ──────────────────────────────────────────────────────
  roiMultiple,                 // net savings / additive cost (e.g. 1.6×)
  allInMultiple,               // total all-in / additive cost (e.g. 8.4×)
  carbonCreditRatePerTon: 500, // ₹/tCO₂ (India carbon market)
  carbonCreditValueTotal,      // ₹ value of CO₂ avoided

  // ── Contractor view ───────────────────────────────────────────────────────
  contractorRevenuePerM3,      // target grade rate per m³
  contractorCostPerM3,         // M30+G cost per m³
  contractorMarginPerM3,       // per-m³ gross margin
  contractorMarginTotal,       // total project margin
  contractorNetOfAdditive,     // margin net of additive cost
}
```

---

## 10. Default Values Reference Card

| Parameter | Default | Range | Source |
|---|---|---|---|
| Project Volume | 500 m³ | 1–10,000 m³ | — |
| Target Grade | M50 | M20–M60 | NABL sweet spot |
| Cement Price | ₹320/bag | ₹280–₹350 | Market rate |
| Cement Reduction | 15% | 15–20% | NABL certified |
| **28-Day Strength Gain** | **50%** | **30–67%** | **Graphacrete brochure** |
| **7-Day Strength Gain** | **22%** | **10–40%** | **Field data** |
| **Pour Size** | **30 m³** | **5–200 m³** | **RMC batch typical** |
| Labour Cost | ₹15,000/day | ₹5k–₹50k | Secondary |
| Analysis Period | 10 yr | 5–20 yr | Secondary |
| Carbon Credit Rate | ₹500/tCO₂ | Fixed | India BEE |

---

## 11. Key Messaging this Unlocks

1. **"M30+Graphacrete achieves 45 MPa at 28 days — that's M45/M50 performance at M30 cost"**
   → Derived from `graphAt28DayMPa` with user-tunable `strengthGain28`

2. **"Strike formwork 0.9 days earlier per floor — save {totalCycleDaysSaved} days on a {estimatedFloors}-floor project"**
   → Derived from 7-day strength gain, directly linked to slider

3. **"Your ₹470/m³ additive earns you ₹730/m³ back — that's a 1.6× return at the pour"**
   → `roiMultiple` shown prominently

4. **"Contractor margin: ₹{contractorMarginPerM3}/m³ by pricing at M50, pouring at M30+G"**
   → Contractor mode toggle unlocks this view

5. **"CO₂ avoided: {co2Tonnes} t — worth ₹{carbonCreditValueTotal} in carbon credits"**
   → New metric for ESG-conscious clients

6. **"Total value over 10 years: ₹{totalAllInDelta} — {allInMultiple}× your additive spend"**
   → Dark hero card — the closing statement

---

*Ready for implementation. Confirm phases to proceed.*
