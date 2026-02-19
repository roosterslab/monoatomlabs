# Graphacrete — Grounded Formulas (source-contents validation layer)

Scope rule: Only constants/claims present in `source-contents/` are treated as factual. All other constants from the template formula doc must be replaced with variables and backed by internal/external citations before using in a customer-facing calculator.

## Source-backed constants (OK to use)
- Unit price (example): ₹235/L (MOQ 1000L)
- Example usage: 2 L per 1 m³ concrete
- Example additive cost: ₹470/m³ (2 × 235)
- Performance claims (ranges):
  - Compressive strength gain: 40–50%
  - Cement saving potential: 15–20%
  - Water resistance improvement: 30–45%
- Mix applicability: PCC, RCC, precast
- Example concrete cost anchors shown in source-contents:
  - M30 ≈ ₹4,050/m³
  - M50 ≈ ₹4,950/m³
  - Stated benefit example for M50 target: ≈ ₹430/m³ when using M30 + Graphacrete vs buying M50

## NOT source-backed (do not hardcode)
- Any “NABL report IDs”, “40+ field trials” counts, or certification identifiers
- Cement content per m³ by grade (e.g., 320 kg/m³ for M30) unless cited in `source-contents`
- CO₂ per kg cement (e.g., 0.9 kgCO₂/kg) unless cited in `source-contents`
- Regional ready-mix market rate tables beyond the brochure’s illustrative example

---

## Safe formulas (customer calculator-ready)

### A) Additive cost
Inputs:
- Concrete volume: $V$ (m³)
- Price per liter: $P$ (₹/L) = 235 (source-backed)
- Dosage: $D$ (L/m³) = 2 (source-backed example)

Formulas:
- Additive cost per m³: $C_{add} = P \times D$
- Total additive cost: $C_{add,total} = V \times C_{add}$

### B) Cost comparison (illustrative, using brochure example costs)
Inputs:
- Base concrete cost (M30): $c_{M30}$ = ₹4,050/m³ (illustrative in source)
- Target concrete cost (M50): $c_{M50}$ = ₹4,950/m³ (illustrative in source)

Formulas:
- Effective cost with additive: $c_{eff} = c_{M30} + C_{add}$
- Savings per m³: $S_{unit} = c_{M50} - c_{eff}$
- Total savings: $S_{total} = V \times S_{unit}$

Note: Use these costs only as an example; for real proposals replace $c_{M30}$ and $c_{M50}$ with local supplier quotes.

### C) Cement saving (parameterized)
Source-contents provides a % range (15–20%) but not baseline cement kg/m³.

Inputs:
- Baseline cement content: $m_{cement,base}$ (kg/m³) — NEEDS ENGINEERING INPUT
- Cement reduction fraction: $r$ in [0.15, 0.20]

Formulas:
- Cement saved per m³: $m_{saved} = m_{cement,base} \times r$
- Total cement saved: $M_{saved,total} = V \times m_{saved}$

### D) CO₂ avoided (parameterized)
Inputs:
- Emissions factor for cement: $EF$ (kgCO₂/kg cement) — NEEDS EXTERNAL STANDARD SELECTION

Formulas:
- CO₂ avoided: $CO2_{saved} = M_{saved,total} \times EF$

---

## Minimum evidence pack to “upgrade” formulas to hardcoded constants
- Test reports (IDs) that justify the 40–50% strength gain range and conditions
- Dosing guidance beyond the 2 L/m³ example (bounds, mix types, temperature, curing)
- Field dataset tying cement reduction to achieved strength grade (mix designs + results)
- Any environmental impact factors used (cement EF) with citations and region selection
