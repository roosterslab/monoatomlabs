# Ceraphene — Grounded Formulas (source-contents validation layer)

Scope rule: Only constants/claims present in `source-contents/` are treated as factual. Any other constants from the template formula doc must be treated as variables.

## Source-backed constants (OK to use)
- Ceraphene price: ₹5,000 / 50 ml
- Competitor average price (as stated in source materials): ₹15,000 / 50 ml
- Durability claim: 3–4+ years
- Hardness claim: 9H+

## Conflicts to resolve
- The template formula doc references ₹8,000–12,000/50 ml for Ceraphene. This conflicts with the source-backed ₹5,000/50 ml and should not be used unless the higher range also exists in `source-contents` or is confirmed internally with a dated pricing catalog.

## NOT source-backed (do not hardcode)
- Coverage (m² per 50 ml)
- Coating thickness, curing time
- Hydrophobic contact angle values
- UV resistance %, chemical resistance standards, heat resistance values
- Any payback-month claims derived from those missing variables

---

## Safe formulas (customer calculator-ready)

### A) Price savings per application
Inputs:
- Ceraphene price: $P_c = 5000$ (₹/50 ml)
- Competitor price: $P_k = 15000$ (₹/50 ml)

Formulas:
- Savings per 50 ml application: $S = P_k - P_c = 10{,}000$
- Savings percent vs competitor: $S_{\%} = (S / P_k) \times 100$

### B) Cost per protection-year
Inputs:
- Durability (years): $Y$ in [3, 4+] (use 3 and 4 for range display)

Formulas:
- Cost per year: $CPY = P_c / Y$
  - If $Y=3$: $CPY = 1{,}666.67$ ₹/year
  - If $Y=4$: $CPY = 1{,}250$ ₹/year

### C) TCO over horizon (parameterized)
Inputs:
- Horizon: $H$ (years)
- Applications needed:
  - Ceraphene: $N_c = \lceil H / Y \rceil$
  - Competitor: $N_k$ — NEEDS EXTERNAL/INTERNAL INPUT (depends on competitor durability)

Formulas:
- TCO: $TCO_c = N_c \times P_c$
- TCO competitor: $TCO_k = N_k \times P_k$

---

## Minimum evidence pack to upgrade claims
- Standardized test report IDs for 9H+ and durability with test conditions
- Real coverage rate per vehicle and per m² for different surface types
- Customer cohort durability tracking (inspection intervals, reapplication rate)
