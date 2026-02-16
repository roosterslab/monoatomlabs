# Graffisol — Market Research & Impact Analysis (Answer, grounded)

Scope rule: This response only treats information present in `source-contents/` as factual. Anything else is explicitly marked as **NEEDS EXTERNAL RESEARCH** or **NEEDS INTERNAL DATA**.

## Product facts we can state (from source-contents)
- Product: Graffisol (solar panel enhancement coating)
- Status: commercially available
- Performance claims:
  - Real-world power output gain: 7–8%
  - Operating temperature reduction: 5–6°C
  - Soiling loss reduction: 30–40%
  - Light transmission: >98%
- ROI statement: 1 MW plant payback typically within ~18 months depending on irradiation and tariff

---

## 1) Market size & opportunity
**NEEDS EXTERNAL RESEARCH**
- Global solar panel market size + forecasts
- Annual capacity additions by region; installed base
- Solar O&M market sizing
- Solar coating/enhancement products market size
- Segment sizing: utility-scale vs C&I rooftop vs residential vs floating solar
- “High-dust zones” market sizing and geography

**What we can contribute now (model-ready framing)**
- Define TAM using addressable treated capacity:
  - TAM (₹) = (Addressable installed capacity in MW) × (coating price per MW)
  - Split into new installs vs retrofit opportunities
- Define SOM using realistic channel constraints:
  - SOM = SAM × penetration curve × conversion from pilot → rollout

---

## 2) Competitive landscape
**From source-contents (limited)**
- Claims that Graffisol delivers 7–8% gains; competitor gains in request (2–3%) require external verification.

**NEEDS EXTERNAL RESEARCH**
- Competitor landscape, shares, real pricing, procurement acceptance
- Independent head-to-head trial comparisons
- Performance durability curves and warranty considerations

---

## 3) Customer segments & insights
**NEEDS EXTERNAL RESEARCH**
- Number of operators/EPCs/O&M providers by region
- Typical O&M budgets and cleaning costs
- Procurement patterns and sales cycle lengths

**NEEDS INTERNAL DATA**
- Current pilots, reference sites, conversion rates, renewal/reapplication cycle

---

## 4) Impact metrics & validation
### Energy & revenue impact (calculable framework)
**From source-contents**
- Output gain range: g = 0.07 to 0.08

**Customer/site inputs needed**
- Baseline annual generation: E_base (kWh/year) for the plant or per MW
- Tariff: r (₹/kWh)

**Calculations**
- Additional energy: ΔE = E_base × g
- Additional revenue: ΔR = ΔE × r

### Environmental impact (framework)
**NEEDS EXTERNAL RESEARCH / CUSTOMER INPUTS**
- Grid emission factor for region: EF (kg CO2/kWh)
- CO2 avoided: CO2_saved = ΔE × EF
- Water savings from reduced cleaning: requires baseline cleaning water use + frequency

### Economic impact / ROI
**From source-contents**
- Typical payback reference: ~18 months for a 1 MW plant (depends on irradiation and tariff)

**NEEDS INTERNAL DATA**
- Installed coating cost (₹/MW or ₹/m²)

### Performance validation
**NEEDS INTERNAL DATA / THIRD-PARTY TESTS**
- Before/after generation with irradiance normalization (PR-based analysis)
- IR thermography logs for temperature delta
- Soiling measurements and cleaning interval validation
- Light transmission test report(s)
- Durability tracking (12–24 months) across multiple climates

---

## 5) Pricing & unit economics
**NEEDS INTERNAL DATA**
- Pricing model (per MW / per panel / per m²)
- COGS + application labor + equipment costs
- Gross margin targets and break-even volume

**Suggested price-to-value framing (parameterized)**
- Value per MW-year = (E_base_per_MW × g × r) + (cleaning_cost_saved)
- Price ceiling can be a fraction of value to hit a target payback (e.g., 12–24 months)

---

## 6) Go-to-market strategy data
**NEEDS EXTERNAL RESEARCH**
- Channel economics and partnership norms (EPC/O&M)
- Market access via tenders and government programs

**NEEDS INTERNAL DATA**
- Current partner list and preferred go-to-market motion
- Pilot program structure, warranties, liabilities

---

## 7) Research & development
**NEEDS INTERNAL DATA**
- Long-term durability data, formulation iteration roadmap

**NEEDS EXTERNAL RESEARCH**
- Patent landscape and freedom-to-operate analysis

---

## 8) Regulatory & standards
**NEEDS EXTERNAL RESEARCH**
- Applicable IEC/ASTM/IS tests for coatings on PV modules
- Warranty implications and insurer requirements

**NEEDS INTERNAL DATA**
- SDS and product handling compliance pack

---

## 9) Supply chain & manufacturing
**NEEDS INTERNAL DATA**
- Production capacity, batch QC, lead time
- Consumption per MW (liters or m² coverage)
- Training + deployment model for field application

---

## 10) Success metrics & KPIs
**NEEDS INTERNAL DATA**
- MW treated per quarter, pilot-to-rollout conversion
- Median achieved gain (%) and variance across sites
- Repeat application rate
- NPS / customer satisfaction

---

## Deliverables to commission (external research brief)
- Solar market sizing (global + India + 3 target regions) with installed base and additions
- O&M cost benchmarks (cleaning costs, water usage, downtime) in high-dust areas
- Competitor matrix: price per MW, verified performance, durability, warranty stance
- Standards map: which IEC/ASTM/IS tests are required to support each claim
