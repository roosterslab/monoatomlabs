# Graphacrete ROI Calculator — Formula Documentation (v3)

**File:** `website/src/data/graphacreteData.js` → `roiCalculatorConfig.calculations(inputs)`
**Component:** `website/src/components/product-infographics/ROICalculator.jsx`
**Last updated:** 2026-02-18 (v3 — dual always-visible cards, renamed fields, null ROI)

---

## What changed in each version

| Area | v1 (wrong) | v2 (fixed) | v3 (current) |
|------|-----------|------------|--------------|
| ROI timing | Amortised over 5 years | Instant (construction-phase) | ← unchanged |
| Cement reduction | Hardcoded 17.5% | User slider 15–20%, default 15% | ← unchanged |
| Negative savings | Showed "−₹X" hero | "Quality Upgrade Premium" framing | ← unchanged |
| Payback display | Months calculation | "Immediate" or "Quality Upgrade" | "Immediate" or "Quality+" |
| Brochure alignment | No toggle | "All-in" vs "Grade-only" mode toggle | **Both cards always visible — no toggle** |
| ROI when negative | Showed 0% | Showed 0% (floored) | **null → UI shows "Quality+"** |
| Field naming | mixed | `primaryDelta*`, `gradeOnlyDelta*` | **`netSavings*`, `gradeOnlySavings*`** |
| Lifecycle constants | Opaque magic constants | Simplified, defensible, labeled "Estimates" | ← unchanged |

---

## 1. Source Claims (Graphacrete Brochure)

| Claim | Value | Source |
|-------|-------|--------|
| Additive price | ₹235/L | Brochure |
| Dosage | 2 L/m³ | Brochure |
| Additive cost | ₹470/m³ (2 × 235) | Derived |
| Cement reduction | 15–20% | NABL certified |
| **Default used** | **15%** | Conservative & defensible |
| NABL result | M30 + Graphacrete ≈ M50 | NABL test |
| Grade-only savings at M50 | ₹430/m³ (at ₹320/bag) | Brochure headline |
| Net (all-in) savings at M50, 15% | ₹730/m³ | Calculator default |
| Net (all-in) savings at M50, 20% | ₹830/m³ | Calculator at 20% |

> **₹430 vs ₹730 explained:**
> - ₹430 = grade-only (brochure method): `targetCost − (baseCost + 470)`
> - ₹730 = all-in/net at 15%: `targetCost − (baseCost − 300 + 470)`
>
> **Both figures are shown simultaneously in the UI** — BROCHURE card and ALL-IN card.
> No toggle needed; buyers see full transparency.

---

## 2. Grade Data Table

```
gradeCost(grade, P) = fixed[grade] + bags[grade] × P
```

`P` = cement price per 50 kg bag. `fixed` = all non-cement costs (aggregate, water,
labour, formwork). These are **typical Indian RMC market assumptions**, not strict IS 456/10262 values.

| Grade | Bags/m³ | Fixed (₹) | Cost @ ₹280 | Cost @ ₹320 | Cost @ ₹350 |
|-------|---------|-----------|-------------|-------------|-------------|
| M20   | 5.00    | 2,000     | ₹3,400      | ₹3,600      | ₹3,750      |
| M30   | 6.25    | 2,050     | ₹3,800      | ₹4,050      | ₹4,238      |
| M40   | 7.50    | 2,050     | ₹4,150      | ₹4,450      | ₹4,675      |
| M50   | 8.50    | 2,230     | ₹4,610      | ₹4,950      | ₹5,205      |
| M60   | 10.00   | 2,350     | ₹5,150      | ₹5,550      | ₹5,850      |

---

## 3. NABL Grade Upgrade Mapping

```javascript
baseGradeFor = {
  20: 20,   // no upgrade — cement savings + enhanced durability only
  30: 30,   // no upgrade — cement savings + enhanced durability only
  40: 30,   // M30 + Graphacrete → M40 performance
  50: 30,   // M30 + Graphacrete → M50 (NABL certified)
  60: 40    // M40 + Graphacrete → M60 performance
}
```

When `targetGrade === baseGrade` (M20, M30): no grade step-up value. Net savings are
negative at current Indian cement prices — displayed as "Quality Upgrade Premium" with
value bullets (durability, permeability, cracking, maintenance).

**Breakeven cement price for M30 to turn net-positive:**
```
6.25 × cementReductionFrac × P = 470
At 15%: 6.25 × 0.15 × P = 470 → P = ₹501/bag
At 20%: 6.25 × 0.20 × P = 470 → P = ₹376/bag
```
M30 turns net-positive at ≈₹500/bag (15%) or ≈₹376/bag (20%).
Current Indian market (₹300–₹380) keeps M30 in quality-premium zone at 15%.

---

## 4. Core Formula (Step by Step)

### Step 1 — Cement savings per m³

```
cementReductionFrac   = cementReductionPct / 100       (user input: 15–20, default 15)
cementSavedBagsPerM3  = bags[baseGrade] × cementReductionFrac
cementSavingsValuePerM3 = round(cementSavedBagsPerM3 × cementPrice)
```

| Base Grade | At 15%, ₹320 | At 17.5%, ₹320 | At 20%, ₹320 |
|------------|-------------|----------------|--------------|
| M20 base   | ₹240        | ₹280           | ₹320         |
| M30 base   | ₹300        | ₹350           | ₹400         |
| M40 base   | ₹360        | ₹420           | ₹480         |

### Step 2 — Method A: Grade-only savings (BROCHURE card)

No cement reduction netting — matches the brochure headline directly.

```
gradeOnlySavingsPerM3 = round(targetCost − (baseCost + additiveCostPerM3))
gradeOnlySavingsTotal = round(gradeOnlySavingsPerM3 × projectVolume)
```

At M50/₹320: `4950 − (4050 + 470) = +₹430` ← brochure headline figure.

### Step 3 — Method B: Net/all-in savings (ALL-IN card)

Cement reduction is folded into the actual cost, giving the true material spend.

```
netCostWithGraphacretePerM3 = baseCost − cementSavingsValuePerM3 + additiveCostPerM3
netSavingsPerM3             = round(targetCost − netCostWithGraphacretePerM3)
netSavingsTotal             = round(netSavingsPerM3 × projectVolume)
```

Full expansion:
```
netSavingsPerM3 = (targetCost − baseCost) + cementSavingsValuePerM3 − additiveCostPerM3
                =  Grade step value        + Cement savings           − Additive cost
```

#### Net savings by grade @ ₹320/bag, 15% default:

| Target | Base | Grade step | Cement saving | Additive | **netSavingsPerM3** |
|--------|------|-----------|---------------|----------|---------------------|
| M20    | M20  | ₹0        | ₹240          | −₹470    | **−₹230** (Quality+)|
| M30    | M30  | ₹0        | ₹300          | −₹470    | **−₹170** (Quality+)|
| M40    | M30  | ₹400      | ₹300          | −₹470    | **+₹230**           |
| M50    | M30  | ₹900      | ₹300          | −₹470    | **+₹730**           |
| M60    | M40  | ₹1,100    | ₹360          | −₹470    | **+₹990**           |

### Step 4 — ROI (instant, not amortised)

```
productCostTotal = round(additiveCostPerM3 × projectVolume)    // 470 × volume

// null when not positive — never display negative ROI %
roiPercentage    = netSavingsTotal > 0 && productCostTotal > 0
                   ? round(netSavingsTotal / productCostTotal × 100)
                   : null

paybackLabel     = netSavingsPerM3 > 0 ? 'Immediate' : 'Quality+'
```

**Why instant?** Primary savings are construction-phase material cost differences. The money
is not spent and is available immediately — there is no waiting period. Amortising over 5
years (v1 approach) was financially incorrect.

**Why null, not 0?** Showing `0%` ROI for premium grades is misleading — it implies no
return, when the actual value is in durability and performance. `null` lets the UI display
"Quality+" instead, framing it as a quality investment rather than a financial failure.

### Step 5 — Marketing label helpers

```javascript
gradeOnlyLabel = gradeOnlySavingsPerM3 > 0 ? 'Savings'     : 'Premium'
netLabel       = netSavingsPerM3       > 0 ? 'Net Savings' : 'Quality Upgrade Premium'
```

### Step 6 — Cement & CO₂ stats

```
totalCementBags = round(cementSavedBagsPerM3 × projectVolume)
totalCementKg   = totalCementBags × 50               (50 kg/bag)
co2AvoidedKg    = round(totalCementKg × 0.9)          (0.9 kg CO₂/kg cement, IPCC AR6)
```

---

## 5. Secondary (Lifecycle) Savings — Simplified & Defensible

All lifecycle items are labeled **"Estimates"** in the UI. Shown in collapsed accordion only.

### C — Waterproofing avoidance (off by default)

```
waterproofingArea    = round(projectVolume × 0.25)           m²
reapplications       = floor(analysisPeriod / 7)             every ~7 yr
waterproofingSavings = waterproofingArea × rate × 0.70 × (1 + reapplications)
```

Only active when `waterproofing` toggle is ON. Rate = user-adjustable ₹100–₹300/m².

### D — Construction schedule savings

```
constructionSavings = round((volume / 30) × 0.17 × laborCost × 1.5)
```

`volume/30` = project days at 30 m³/day. 17% schedule acceleration. 1.5× multiplier
for site overhead (equipment + supervision).

### E — Service life extension

```
structureValue        = projectVolume × 15,000    (₹/m³ replacement cost)
lifeExtensionSavings  = round(structureValue × 0.03)
```

3% is the mid-point of the defensible 2–6% range for deferred replacement value.

### F — Thermal / cooling savings

```
coolingRate    = 120 ₹/m²/yr (commercial)  OR  60 ₹/m²/yr (residential)
thermalSavings = round(volume × 2 × coolingRate × 0.07 × analysisPeriod)
```

Not calculated for infrastructure. `volume × 2` = rough floor area estimate.

### G — Maintenance reduction

```
maintenanceSavings = round(structureValue × 0.004 × analysisPeriod)
```

0.4% of structure value per year (saving vs traditional 0.8%/yr).

---

## 6. 10-Year Projection Chart

```
Year 0: cumulative = netSavingsTotal                (instant construction outcome)
Year N: cumulative = netSavingsTotal + annualLifecycle × N
        where annualLifecycle = lifecycle.total / analysisPeriod
```

**Year 0 semantics:** Positive = construction-phase savings realised immediately.
Negative = quality premium paid. The crossover at y=0 for premium grades shows
when accumulated lifecycle savings offset the upfront premium.

Chart title adapts:
- `netSavingsPerM3 > 0` → "10-Year Financial Projection"
- `netSavingsPerM3 ≤ 0` → "Lifecycle Value Recovery"

---

## 7. Return Object (v3 — current)

```javascript
{
  // ── Core costs ────────────────────────────────────────────────────
  baseGrade,
  targetGrade,
  isNABL,                          // true if targetGrade === 50
  baseCostPerM3,
  targetCostPerM3,
  additiveCostPerM3,               // ₹470 (constant)
  cementSavingsValuePerM3,         // ₹/m³ cement saved (was cementSavingPerM3 in v2)
  netCostWithGraphacretePerM3,     // actual cost paid (was withGraphacreteCostPerM3 in v2)

  // ── Savings — BOTH methods always returned, always shown ──────────
  gradeOnlySavingsPerM3,           // ₹/m³ grade-only (brochure ₹430 at M50/₹320)
  gradeOnlySavingsTotal,           // ₹ project total  (was gradeOnlyDeltaTotal in v2)
  netSavingsPerM3,                 // ₹/m³ all-in net  (was primaryDeltaPerM3 in v2)
  netSavingsTotal,                 // ₹ project total  (was primaryDeltaTotal in v2)

  // ── Marketing label helpers ───────────────────────────────────────
  gradeOnlyLabel,                  // 'Savings' | 'Premium'
  netLabel,                        // 'Net Savings' | 'Quality Upgrade Premium'

  // ── ROI ──────────────────────────────────────────────────────────
  roiPercentage,                   // % | null  (null when not positive — was floored at 0 in v2)
  paybackLabel,                    // 'Immediate' | 'Quality+'  (was 'Quality Upgrade' in v2)
  productCostTotal,                // ₹ total additive investment (470 × volume)

  // ── Cement & CO₂ ─────────────────────────────────────────────────
  cementSavedBags,
  cementSavedKg,
  co2AvoidedKg,

  // ── Lifecycle (estimates, accordion) ─────────────────────────────
  lifecycle: {
    waterproofing, construction, lifeExtension, thermal, maintenance,
    total
  },
  totalAllInDelta,                 // netSavingsTotal + lifecycle.total
  totalAllInRoiPct,                // % | null (null when not positive)

  // ── Legacy aliases (used by other page components) ────────────────
  savingsPerUnit,                  // { label, value: netSavingsPerM3 }
  cementSaved,                     // = cementSavedBags
  co2Reduced,                      // = co2AvoidedKg
  strengthIncrease,                // string e.g. "+67%"
  waterResistance,                 // '+30-45%'
  summary                          // 3-item array for stat cards
}
```

---

## 8. UI Framing Rules (v3)

| Condition | ALL-IN card | ALL-IN colour | Payback | ROI display | Chart title |
|-----------|------------|---------------|---------|-------------|-------------|
| `netSavingsPerM3 > 0` | "Net Savings" | Green | "Immediate" | `${roiPercentage}%` | "10-Year Financial Projection" |
| `netSavingsPerM3 ≤ 0` | "Quality Upgrade Premium" + 4 value bullets | Amber | "Quality+" | "Quality+" | "Lifecycle Value Recovery" |

**BROCHURE card** (Grade-Only) is always shown alongside the ALL-IN card — no toggle.

**Never show negative ROI numbers.** `roiPercentage` is `null` when not positive; the UI
renders "Quality+" instead. Negative net savings are framed as a quality investment.

---

## 9. Validation Checks @ ₹320/bag, 15% cement reduction

### M50 (NABL sweet spot)

```
baseCost                    = 2050 + 6.25×320       = ₹4,050
cementSavingsValuePerM3     = 6.25 × 0.15 × 320    = ₹300
netCostWithGraphacretePerM3 = 4050 − 300 + 470      = ₹4,220
targetCost (M50)            = 2230 + 8.5×320        = ₹4,950
netSavingsPerM3             = 4950 − 4220           = +₹730    ✓
gradeOnlySavingsPerM3       = 4950 − (4050 + 470)   = +₹430    ✓ matches brochure
roiPercentage               = 730×500 / 470×500 × 100 = ~155%  ✓ (at 500 m³)
```

### M40

```
netCostWithGraphacretePerM3 = 4050 − 300 + 470      = ₹4,220
targetCost (M40)            = 2050 + 7.5×320        = ₹4,450
netSavingsPerM3             = 4450 − 4220           = +₹230    ✓ positive
gradeOnlySavingsPerM3       = 4450 − (4050 + 470)   = −₹70     ← grade-only is negative
```

Note: for M40, grade-only is negative but net is positive — both shown; ALL-IN wins.

### M30 (quality premium)

```
netCostWithGraphacretePerM3 = 4050 − 300 + 470      = ₹4,220
targetCost (M30)            = ₹4,050
netSavingsPerM3             = 4050 − 4220           = −₹170    ✓ honest quality premium
roiPercentage               = null                             ✓ displays "Quality+"
paybackLabel                = 'Quality+'                       ✓
```

### M20 (quality premium)

```
baseCost (M20)              = 2000 + 5.0×320        = ₹3,600
cementSavingsValuePerM3     = 5.0 × 0.15 × 320     = ₹240
netCostWithGraphacretePerM3 = 3600 − 240 + 470      = ₹3,830
targetCost (M20)            = ₹3,600
netSavingsPerM3             = 3600 − 3830           = −₹230    ✓ quality premium
gradeOnlySavingsPerM3       = 3600 − (3600 + 470)   = −₹470    ✓ both negative
```

---

*End of formula documentation v3.*
