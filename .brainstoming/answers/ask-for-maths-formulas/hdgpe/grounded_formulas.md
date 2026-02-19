# HD-G-PE — Grounded Formulas (source-contents validation layer)

Scope rule: Only constants/claims present in `source-contents/` are treated as factual. All other constants from the template formula doc must be replaced with variables.

## Source-backed performance claims (OK to use)
- Tensile & flexural strength improvement: +30%
- Elongation strength improvement: 20×
- Lifespan/durability increase: +20%
- Reduced crack propagation and improved UV stability (qualitative)
- Application areas: HDPE pipes, films/packaging, extrusion applications

## NOT source-backed (do not hardcode)
- Dosage range (0.5–2.0%) and “typical dosage 1%”
- Product price per kg
- Any “lab report IDs” and statistical claims (n=30, p-values, etc.)
- Market sizes and CAGR figures by application (₹ Cr tables)
- Any assumed base HDPE costs and additive costs (e.g., ₹800/kg)

---

## Safe formulas (customer calculator-ready)

### A) Additive cost model (parameterized)
Inputs:
- Production volume: $Q$ (kg/year)
- Dosage fraction: $d$ (kg additive per kg product) — NEEDS INTERNAL DATA
- Additive unit price: $P$ (₹/kg) — NEEDS INTERNAL DATA

Formulas:
- Additive mass: $M = Q \times d$
- Additive cost: $C_{add} = M \times P$

### B) Value model (scrap/failure/warranty driven)
Customer inputs:
- Baseline scrap cost: $C_{scrap}$ (₹/year)
- Baseline warranty/claims cost: $C_{w}$ (₹/year)

Internal/customer-agreed assumptions:
- Scrap reduction fraction: $r_s$ — NEEDS PILOT DATA
- Warranty reduction fraction: $r_w$ — NEEDS PILOT DATA

Formulas:
- Savings: $S = (C_{scrap} \times r_s) + (C_{w} \times r_w)$
- Net value: $NV = S - C_{add}$
- Payback (years): $T = C_{add} / S$ (if $S>0$)

### C) Performance reporting (no extra modeling)
You can display the +30%, 20×, and +20% as “expected improvements” from source-contents, but do not convert them into a dosage-response curve without internal lab datasets.

---

## Minimum evidence pack to upgrade formulas
- Standard dosage guidance by application (pipes vs films) with processing constraints
- ASTM/ISO test reports that tie dosage → performance
- Field pilots with failure-rate reductions and cost impacts
- Pricing and MOQ policy for commercial calculator deployment
