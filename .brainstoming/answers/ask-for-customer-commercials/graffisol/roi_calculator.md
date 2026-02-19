# Graffisol — ROI Calculator (customer-facing, source-contents grounded)

`source-contents/` provides performance deltas and a typical payback statement, but not the installed coating cost. This calculator is therefore **parameterized**.

## Inputs
- Baseline annual generation: E_base (kWh/year)
- Expected gain (field): g = 0.07 to 0.08
- Tariff: r (₹/kWh)
- Installed coating cost: C_coat (₹) — NEEDS INTERNAL DATA

## Calculations
- Additional energy: ΔE = E_base × g
- Additional annual revenue: ΔR = ΔE × r
- Simple payback (years): T = C_coat / ΔR

## Sanity check from source-contents
- Typical payback for 1 MW plant: ~18 months (depends on irradiation and tariff).

## Output
- Conservative / expected scenarios using g = 0.07 and g = 0.08
