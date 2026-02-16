# HD-G-PE — ROI Calculator (customer-facing, parameterized)

`source-contents/` provides performance improvement claims but does not provide dosage and price. This ROI calculator is therefore parameterized.

## Inputs (NEEDS INTERNAL DATA)
- Dosage: d (% by weight)
- Additive price: p (₹/kg)

## Customer inputs
- Annual production: V (tonnes/year)
- Baseline scrap/failure cost: C_fail (₹/year)
- Baseline warranty/claims cost: C_w (₹/year)

## Calculations
- Additive mass: Q = V × d
- Additive cost: C_add = Q × p
- Net annual value: S = (C_fail_saved + C_w_saved) − C_add

## Evidence needed
- Field/pilot dataset: failure rate reduction and warranty reduction under controlled dosing.
