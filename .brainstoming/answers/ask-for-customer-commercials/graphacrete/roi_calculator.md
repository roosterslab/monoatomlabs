# Graphacrete — ROI Calculator (customer-facing, source-contents grounded)

This calculator uses only numbers present in the Graphacrete brochure extraction.

## Inputs
- Concrete volume: V (m³)
- Graphacrete price: p = ₹235/L
- Example dosage: d = 2 L/m³ (example in brochure)
- M30 price (example): c_M30 = ₹4,050/m³
- M50 price (example): c_M50 = ₹4,950/m³

## Core calculations
- Additive cost per m³: C_add = d × p = 2 × 235 = ₹470/m³
- M30 + additive effective cost per m³: c_eff = c_M30 + C_add = 4,050 + 470 = ₹4,520/m³
- Savings per m³ vs M50: S_unit = c_M50 − c_eff = 4,950 − 4,520 = ₹430/m³

## Project totals
- Total additive cost: C_total_add = V × ₹470
- Total savings vs M50: S_total = V × ₹430

## Example
If V = 5,000 m³:
- Additive cost = 5,000 × 470 = ₹23,50,000
- Savings vs M50 = 5,000 × 430 = ₹21,50,000

## What this calculator does NOT include
- Transport, storage, and mixing overheads
- Cement-savings monetization (needs baseline cement usage and cement price)
- Lifecycle maintenance savings (requires customer-specific data)
