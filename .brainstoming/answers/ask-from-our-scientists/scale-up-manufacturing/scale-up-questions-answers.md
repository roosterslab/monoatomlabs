# Scale-Up & Manufacturing — Draft Answers (All Products)

Scope rule: This is a process-engineering answer pack. Numbers in the question bank (current/target capacities) are treated as **NEEDS INTERNAL CONFIRMATION** unless they also exist in `source-contents/`.

## Q1.1: [CRITICAL] Dispersion Process Scale-Up
- Draft answer: Main scale-up risks are non-uniform energy density, dead zones, heat removal, and residence-time distribution. The safe approach is to scale by specific energy input (kJ/L or kWh/kg) and verify dispersion CQAs at each scale step.
- NEEDS INTERNAL DATA: current dispersion route per product (rotor-stator, bead mill, ultrasonics), batch logs, measured PSD/agglomerate metrics.
- Next actions: define CQAs (PSD, viscosity, solids, sedimentation index) + CPPs (shear rate, temp, time) and implement scale-up trials at 5×/10×.

## Q1.2: [HIGH] Energy Efficiency & Cost Optimization
- Draft answer: Optimize by minimizing over-processing: stop mixing when QC metric plateaus; consider multi-stage (pre-dispersion + finishing). Benchmark kWh/kg per batch.
- NEEDS INTERNAL DATA: measured kWh per batch and cycle times.
- Next actions: run time-to-quality experiments and build an energy-per-spec curve.

## Q1.3: [HIGH] Continuous vs. Batch Processing
- Draft answer: Continuous is attractive when (1) formulation is stable, (2) QC can be in-line, and (3) demand justifies. Batch is better for frequent changeovers and tight formulation IP control.
- NEEDS INTERNAL DATA: SKU variety, changeover frequency, batch failure cost.
- Next actions: create a decision matrix per product and pilot a semi-continuous loop if feasible.

## Q2.1: [CRITICAL] Real-Time Quality Monitoring
- Draft answer: Implement PAT around CQAs: inline viscosity, density, temperature, flow rate; optional optical spectroscopy depending on formulation. Use SPC to detect drift.
- NEEDS INTERNAL DATA: what correlates best with performance (strength gain, optical gain, etc.).
- Next actions: correlation study between fast QC signals and slow performance tests; set control limits.

## Q2.2: [HIGH] Batch-to-Batch Consistency
- Draft answer: Variability sources: raw graphene variability, dispersant variability, equipment wear, operator differences, ambient conditions. Mitigate via tighter incoming specs + calibrated energy input + operator SOP.
- NEEDS INTERNAL DATA: variance history and customer complaints.
- Next actions: establish CoA requirements, retain samples, and implement SPC charts on CQAs.

## Q2.3: [HIGH] Accelerated Stability Testing for QC
- Draft answer: Use accelerated protocols (centrifuge, heat aging, freeze-thaw) only after demonstrating correlation to real-time storage outcomes.
- NEEDS INTERNAL DATA: current shelf-life expectations per product.
- Next actions: run correlation program: accelerated indicators vs 1/3/6/12‑month stability.

## Q3.1: [CRITICAL] Equipment Selection & Specification
- Draft answer: Select equipment by required shear/energy and by sensitivity to contamination. Standardize on modular units when possible (same PAT sensors and control philosophy).
- NEEDS INTERNAL DATA: viscosity ranges, solids, solvent compatibility, and required throughput.
- Next actions: produce a URS per product and request vendor proposals for 2–3 candidate technologies.

## Q3.2: [HIGH] Facility Layout & Design
- Draft answer: Layout should enforce flow: incoming QC → dispersion/compounding → in-process QC → packaging → retain samples. Separate dusty handling (graphene powders) from clean zones.
- NEEDS INTERNAL DATA: number of SKUs, packaging formats.
- Next actions: draft process flow diagrams (PFD) and P&IDs for the top 2 products first.

## Q3.3: [MEDIUM] Automation & Control Systems
- Draft answer: Automate dosing, temperature control, and time/energy integration; log all CPPs for traceability.
- NEEDS INTERNAL DATA: existing automation maturity.
- Next actions: choose PLC/SCADA stack and minimum data historian requirements.

## Q4.1: [CRITICAL] Raw Material Quality & Consistency
- Draft answer: Define incoming specifications for graphene (PSD, layers, purity, moisture, ash) and for binders/solvents/additives. Require CoAs + periodic third-party verification.
- NEEDS INTERNAL DATA: current supplier list and spec sheets.
- Next actions: incoming QC SOP + supplier qualification process.

## Q4.2: [HIGH] Supply Chain Optimization
- Draft answer: Reduce risk via dual sourcing and inventory policies tied to lead times; qualify alternates for critical items.
- NEEDS INTERNAL DATA: lead times, MOQ, storage limits.
- Next actions: risk register + mitigation plan.

## Q5.1: [CRITICAL] Cost of Goods Sold (COGS) at Scale
- Draft answer: COGS will be dominated by raw materials (graphene + solvents/polymers), energy for dispersion/compounding, labor, yield losses, and QC. Build a bottom-up model per SKU.
- NEEDS INTERNAL DATA: BOM, yields, cycle times, kWh usage.
- Next actions: spreadsheet cost model with sensitivity analysis (graphene price, yield, energy).

## Q5.2: [HIGH] Capital Investment & ROI Analysis
- Draft answer: Capex justification should be tied to (1) throughput, (2) quality risk reduction, and (3) margin expansion. Compare outsource vs in-house manufacturing scenarios.
- NEEDS INTERNAL DATA: demand forecast, target margin.
- Next actions: capex options with NPV/IRR and risk adjustments.

## Q6.1: [CRITICAL] Safety & Environmental Compliance
- Draft answer: Treat graphene powders as a high-control dust; implement containment, HEPA, PPE, and waste handling. Solvent handling requires ventilation and fire safety.
- NEEDS INTERNAL DATA: SDS for all materials.
- Next actions: EHS hazard analysis (HAZOP-lite) and compliance checklist.

## Q6.2: [HIGH] Manufacturing Quality Standards
- Draft answer: Implement ISO-style QMS with batch records, traceability, retain samples, and CAPA.
- NEEDS INTERNAL DATA: current QMS status.
- Next actions: define batch record templates and deviation management.

## Q7.1: [HIGH] Staffing Requirements
- Draft answer: Minimum staffing: process engineer, QC chemist/engineer, production supervisor, operators, maintenance, EHS.
- NEEDS INTERNAL DATA: shift model and throughput.
- Next actions: org design tied to ramp plan.

## Q7.2: [HIGH] Training & Skill Development
- Draft answer: Training must cover handling nanoparticles, mixing energy/temperature control, QC sampling, and deviation response.
- NEEDS INTERNAL DATA: current SOP maturity.
- Next actions: training modules + competency signoff.

## Q8.1: [CRITICAL] Commissioning Plan
- Draft answer: Commission in phases: utilities → water/solvent runs → placebo batches → product batches → performance verification. Define acceptance criteria per unit operation.
- NEEDS INTERNAL DATA: site constraints.
- Next actions: commissioning checklist and FAT/SAT plan.

## Q8.2: [HIGH] Production Ramp-Up Strategy
- Draft answer: Ramp should prioritize one SKU at a time to stabilize CQAs; then add SKUs once SPC is stable.
- NEEDS INTERNAL DATA: market priorities.
- Next actions: 90-day ramp plan with KPIs (yield, Cpk, on-time delivery).
