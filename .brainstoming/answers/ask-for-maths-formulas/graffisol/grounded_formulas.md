# Graffisol — Grounded Formulas (source-contents validation layer)

Scope rule: Only constants/claims present in `source-contents/` are treated as factual. All other constants from the template formula doc must be replaced with variables and backed by internal/external citations before use.

## Source-backed constants (OK to use)
- Power output gain (real-world): 7–8%
- Operating temperature reduction: 5–6°C
- Soiling loss reduction: 30–40%
- Light transmission: >98%
- Typical payback statement: ~18 months for a 1 MW plant (depends on irradiation and tariff)

## NOT source-backed (do not hardcode)
- Coating cost per kW (e.g., ₹500/kW)
- “India average irradiation = 1500 kWh/kW/year” and region tables
- Performance ratio default values (e.g., PR = 0.75)
- Temperature coefficient values for PV modules
- “Energy gain base = 11%” and any component breakdown numbers (3–4%, 4–5%, etc.)
- Cleaning frequency/cost benchmarks unless backed by `source-contents`

---

## Safe formulas (customer calculator-ready)

### A) Incremental energy and revenue
Inputs:
- Baseline annual generation (measured): $E_{base}$ (kWh/year)
- Gain fraction: $g$ in [0.07, 0.08]
- Tariff: $r$ (₹/kWh)

Formulas:
- Additional energy: $\Delta E = E_{base} \times g$
- Additional annual revenue: $\Delta R = \Delta E \times r$

### B) Payback (parameterized)
Inputs:
- Installed coating cost: $C_{coat}$ (₹) — NEEDS INTERNAL DATA

Formulas:
- Payback (years): $T = C_{coat} / \Delta R$
- Payback (months): $T_{months} = 12 \times T$

Sanity check: Result should be in the neighborhood of ~18 months for 1 MW when $E_{base}$ and $C_{coat}$ match the company’s observed deployments.

### C) Optional: soiling and temperature as explanatory drivers
You can report the 5–6°C and 30–40% soiling reduction as supporting evidence, but do not convert them into extra % gains unless you have a validated mapping function and dataset.

---

## Minimum evidence pack to convert to a fully-parameterized product calculator
- Installed cost model: ₹/MW or ₹/m² including labor, travel, equipment, consumables
- Field performance datasets: before/after generation normalized by irradiance (PR method)
- Durability curve: performance retention over time and reapplication cadence
- Site archetypes: dusty zones vs coastal/urban with measured variance in $g$
