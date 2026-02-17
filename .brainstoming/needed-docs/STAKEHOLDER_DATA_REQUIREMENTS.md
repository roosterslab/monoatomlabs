# Data Requirements for ROI Calculator Validation

**Document Type**: Formal Stakeholder Request
**Date Issued**: 2026-02-17
**Priority**: High
**Requested By**: Product Marketing & Digital Team
**Review Date**: 2026-03-03 (2 weeks)

---

## Executive Summary

This document outlines critical data requirements needed to ensure accuracy, credibility, and regulatory compliance of customer-facing ROI calculators for Monoatom Labs' commercial products. Current calculator implementations contain assumptions that require validation or replacement with verified data to maintain stakeholder trust and avoid misrepresentation.

**Current Status**: Several calculators use placeholder values that are not source-backed, creating potential liability and credibility risks.

**Impact**: Until validated data is provided, calculators must display prominent disclaimers that may reduce customer confidence and conversion rates.

---

## 🎯 Priority Classification

| Priority | Definition | Response Timeline | Impact if Missing |
|----------|------------|-------------------|-------------------|
| **P0-CRITICAL** | Calculator cannot function accurately without this data | 1 week | Calculator should be disabled or marked "Preliminary" |
| **P1-HIGH** | Significantly affects accuracy and customer trust | 2 weeks | Major disclaimer required |
| **P2-MEDIUM** | Improves precision and user experience | 4 weeks | Minor disclaimer acceptable |
| **P3-LOW** | Nice-to-have enhancement | 8 weeks | No disclaimer needed |

---

## 📋 PRODUCT 1: CERAPHENE (Automotive Ceramic Coating)

### Current Status: 62% Validated

### REQUIRED DATA

#### P1-HIGH: Competitor Product Durability Benchmarks
**Requested From**: Marketing Team / Market Research
**Current Assumption**: 1-2 years (unvalidated)
**Required Data**:
- Average lifespan of competitor coatings by price segment:
  - Premium segment (₹12,000-₹20,000): ___ years
  - Mid-range (₹8,000-₹12,000): ___ years
  - Economy (₹5,000-₹8,000): ___ years
- Source: Market surveys, competitor technical datasheets, customer reports

**Impact**: Critical for TCO (Total Cost of Ownership) comparison. Without this, we can only show immediate price savings, not long-term value.

**Recommended Action**:
- Conduct competitor product testing (sample n=5 top competitors)
- Survey existing customers on reapplication frequency
- Review competitor warranty claims

**Timeline**: 2 weeks

---

#### P2-MEDIUM: Coverage Rate per Application
**Requested From**: Technical / R&D Team
**Current Assumption**: Not calculated
**Required Data**:
- Coverage area per 50ml bottle by surface type:
  - Small car (sedan): ___ m² coverage
  - Medium car (SUV): ___ m² coverage
  - Large vehicle (van/truck): ___ m² coverage
- Number of coats recommended: ___
- Typical thickness per coat: ___ microns

**Impact**: Enables per-vehicle cost calculation instead of per-bottle pricing.

**Recommended Action**:
- Lab testing: measure actual coverage on standardized panels
- Field validation: track application data from partner workshops

**Timeline**: 4 weeks

---

#### P3-LOW: Hydrophobic Contact Angle Values
**Requested From**: Technical Team
**Current Assumption**: Not specified
**Required Data**:
- Initial contact angle: ___ degrees
- After 1 year: ___ degrees
- After 2 years: ___ degrees
- Test standard used: ___

**Impact**: Enhances technical credibility, useful for marketing materials.

**Timeline**: 8 weeks

---

## 📋 PRODUCT 2: GRAFFISOL (Solar Panel Coating)

### Current Status: 40% Validated

### REQUIRED DATA

#### P0-CRITICAL: Installed Coating Cost Structure
**Requested From**: Operations, Finance & Sales Teams
**Current Assumption**: ₹500/kW (placeholder - NOT VALIDATED)
**Required Data**:
- Material cost: ₹___ per m² or per kW
- Labor cost: ₹___ per m² (application time: ___ hours/kW)
- Equipment/travel overhead: ₹___ per project
- Minimum project size: ___ kW
- Volume-based pricing tiers:
  - 10-100 kW: ₹___/kW
  - 100-500 kW: ₹___/kW
  - 500-1000 kW: ₹___/kW
  - 1+ MW: ₹___/kW

**Impact**: **CRITICAL** - Payback period calculations are meaningless without accurate cost data. This is the #1 question customers ask.

**Recommended Action**:
- Finance team to provide cost breakdown from recent installations
- Sales team to provide standard quote template
- Operations to validate labor hours and travel costs

**Timeline**: 1 week (URGENT)

---

#### P1-HIGH: Regional Base Generation Rates
**Requested From**: Technical Team
**Current Assumption**: 1500 kWh/kW/year (India average - needs validation)
**Required Data**:
- Validate 1500 kWh/kW/year as national baseline: ☐ Confirmed ☐ Needs adjustment
- Regional variations:
  - North India (high irradiation): ___ kWh/kW/year
  - South India: ___ kWh/kW/year
  - West India: ___ kWh/kW/year
  - East India: ___ kWh/kW/year
  - Rajasthan/Gujarat (highest): ___ kWh/kW/year
- Source/standard: ___ (e.g., MNRE data, NREL database)

**Impact**: Base generation significantly affects ROI calculations. A 20% error in baseline creates a 20% error in energy gain projections.

**Recommended Action**:
- Technical team to provide validated irradiation data by region
- Consider adding regional selector to calculator

**Timeline**: 2 weeks

---

#### P2-MEDIUM: Coating Durability and Reapplication Schedule
**Requested From**: Technical Team / Field Service
**Current Assumption**: Not specified
**Required Data**:
- Expected coating lifespan: ___ years
- Performance degradation curve:
  - Year 1: ___% of initial performance
  - Year 2: ___% of initial performance
  - Year 3: ___% of initial performance
  - Year 4: ___% of initial performance
  - Year 5: ___% of initial performance
- Recommended reapplication frequency: Every ___ years
- Warranty period: ___ years

**Impact**: Affects long-term ROI projections beyond first year.

**Recommended Action**:
- Track performance data from existing installations (1+ MW reference)
- Plan accelerated weathering tests

**Timeline**: 4 weeks (initial data), ongoing monitoring

---

## 📋 PRODUCT 3: GRAPHACRETE (Concrete Additive)

### Current Status: 30% Validated

### REQUIRED DATA

#### P1-HIGH: Cement Content by Concrete Grade
**Requested From**: Technical / R&D Team
**Current Assumption**: 400 kg/m³ for M30 (industry standard, not validated for our calculations)
**Required Data**:
- Cement content (kg/m³) for each grade:
  - M20: ___ kg/m³
  - M25: ___ kg/m³
  - M30: ___ kg/m³
  - M35: ___ kg/m³
  - M40: ___ kg/m³
  - M50: ___ kg/m³
- Based on: ☐ IS 10262 standard mix designs ☐ Company-specific mix designs ☐ Partner RMC supplier data

**Impact**: Cannot accurately calculate cement savings (kg) without baseline cement content. Currently only calculating % savings.

**Recommended Action**:
- Technical team to provide standard mix designs used in calculator
- Validate against IS 10262 or partner RMC supplier specifications

**Timeline**: 2 weeks

---

#### P1-HIGH: Dosage Range by Application and Grade
**Requested From**: Technical / R&D Team
**Current Assumption**: 2 L/m³ for all applications (from brochure example)
**Required Data**:
- Dosage range by concrete grade:
  - M20-M30: ___ to ___ L/m³
  - M35-M40: ___ to ___ L/m³
  - M50+: ___ to ___ L/m³
- Dosage by application type:
  - Precast concrete: ___ L/m³
  - Ready-mix (PCC): ___ L/m³
  - Ready-mix (RCC): ___ L/m³
  - High-performance applications: ___ L/m³
- Maximum dosage limit: ___ L/m³
- Minimum dosage for effect: ___ L/m³

**Impact**: Fixed 2 L/m³ may over/under-dose for different applications, affecting cost accuracy.

**Recommended Action**:
- R&D to provide dosage guidelines from lab testing
- Field validation from customer projects

**Timeline**: 2 weeks

---

#### P2-MEDIUM: CO₂ Emission Factor for Cement
**Requested From**: Sustainability Team / Technical Team
**Current Assumption**: 0.9 kgCO₂/kg cement (global average)
**Required Data**:
- India-specific emission factor: ___ kgCO₂/kg cement
- Source/standard: ___ (e.g., BIS, GIZ India, industry association)
- OPC vs PPC variation: ___ kgCO₂/kg

**Impact**: Required for environmental impact calculations and carbon savings claims.

**Recommended Action**:
- Sustainability team to select appropriate emission factor standard
- Verify compliance with any green building certification requirements (LEED, IGBC)

**Timeline**: 4 weeks

---

#### P3-LOW: Mix Design Case Studies
**Requested From**: Technical Team
**Current Assumption**: Generic M30→M50 upgrade example
**Required Data**:
- 3-5 validated mix designs showing:
  - Base grade → Target grade achieved
  - Cement content baseline vs with Graphacrete
  - Actual dosage used
  - Compressive strength results (7-day, 28-day)
  - Cost breakdown

**Impact**: Provides real-world examples for calculator validation and case studies.

**Timeline**: 8 weeks

---

## 📋 PRODUCT 4: HD-G-PE (HDPE Polymer Enhancer)

### Current Status: 50% Validated

### REQUIRED DATA

#### P0-CRITICAL: Additive Pricing Structure
**Requested From**: Finance & Pricing Team
**Current Assumption**: ₹5/kg (placeholder - NOT VALIDATED)
**Required Data**:
- Base price per kg: ₹___/kg
- Volume-based pricing tiers:
  - 1-10 tonnes: ₹___/kg
  - 10-50 tonnes: ₹___/kg
  - 50-100 tonnes: ₹___/kg
  - 100+ tonnes: ₹___/kg
- MOQ (Minimum Order Quantity): ___ kg
- Payment terms affecting price: ___
- Any long-term contract discounts: ___

**Impact**: **CRITICAL** - Cannot calculate ROI without accurate cost data.

**Recommended Action**:
- Finance/Pricing team to provide official pricing sheet
- Sales team to validate against typical customer quotes

**Timeline**: 1 week (URGENT)

---

#### P0-CRITICAL: Recommended Dosage by Application
**Requested From**: Technical / R&D Team
**Current Assumption**: 1% generic (not validated)
**Required Data**:
- Dosage by application (% by weight):
  - HDPE pipes: ___% (range: ___ to ___ %)
  - Packaging films: ___% (range: ___ to ___ %)
  - Extrusion applications: ___% (range: ___ to ___ %)
  - Blow molding: ___% (range: ___ to ___ %)
- Processing temperature impact: ___
- Compatibility with other additives: ___

**Impact**: **CRITICAL** - Dosage directly affects cost calculation. 0.5% vs 2% dosage = 4× cost difference.

**Recommended Action**:
- R&D to provide dosing guidelines from formulation studies
- Technical team to validate against customer trials

**Timeline**: 1 week (URGENT)

---

#### P1-HIGH: Field Performance Data - Scrap/Failure Rate Reduction
**Requested From**: Technical Team / Customer Success
**Current Assumption**: Not quantified (cannot calculate value without this)
**Required Data**:
- Pilot/customer data showing:
  - Baseline scrap rate: ___%
  - Scrap rate with HD-G-PE: ___%
  - Reduction: ___% ± ___% (with confidence interval)
  - Sample size: n = ___ (number of customer pilots)
  - Time period tracked: ___ months
- By application if available:
  - Pipes: ___% reduction
  - Films: ___% reduction
  - Packaging: ___% reduction

**Impact**: This is the PRIMARY value driver. Without field data, calculator can only show cost, not value.

**Current State**: Using revenue premium model as placeholder, but grounded_formulas.md recommends scrap/warranty reduction model.

**Recommended Action**:
- **Option A (Preferred)**: Run 3-5 customer pilots, track failure rates for 3-6 months
- **Option B (Interim)**: Use lab test data to estimate theoretical improvement, mark as "Lab-validated estimate pending field confirmation"

**Timeline**:
- Option A: 12-24 weeks (pilot-dependent)
- Option B: 2 weeks (lab data compilation)

---

#### P1-HIGH: Warranty/Claims Reduction Data
**Requested From**: Technical Team / Customer Success
**Current Assumption**: Not quantified
**Required Data**:
- Customer data showing:
  - Baseline warranty claim rate: ___%
  - Claim rate with HD-G-PE: ___%
  - Reduction: ___% ± ___%
  - Average claim cost: ₹___
  - Sample size: n = ___ customers
  - Tracking period: ___ months

**Impact**: Second major value driver alongside scrap reduction.

**Recommended Action**:
- Customer success team to track warranty data from pilot customers
- Estimate based on improved lifespan (+20%) if direct data unavailable

**Timeline**: 12-24 weeks (customer-dependent)

---

#### P2-MEDIUM: Processing Parameter Guidelines
**Requested From**: Technical Team
**Current Assumption**: Not specified
**Required Data**:
- Optimal processing temperatures by application
- Mixing time requirements
- Compatibility with standard HDPE extrusion equipment
- Any special handling requirements

**Impact**: Affects customer implementation ease, indirectly affects value proposition.

**Timeline**: 4 weeks

---

## 📊 Summary of Critical Data Gaps

### Immediate Action Required (P0-CRITICAL) - 1 Week Deadline

| Product | Data Requirement | Stakeholder | Status |
|---------|------------------|-------------|---------|
| **Graffisol** | Installed coating cost structure (₹/kW) | Operations, Finance, Sales | ⚠️ BLOCKING |
| **HD-G-PE** | Additive pricing (₹/kg) + tiers | Finance, Pricing | ⚠️ BLOCKING |
| **HD-G-PE** | Dosage by application (% weight) | R&D, Technical | ⚠️ BLOCKING |

**Impact**: These three items are **blocking accurate ROI calculations** for Graffisol and HD-G-PE. Calculators should display "Contact Sales for Custom Quote" until data is provided.

---

### High Priority (P1-HIGH) - 2 Week Deadline

| Product | Data Requirement | Stakeholder | Status |
|---------|------------------|-------------|---------|
| **Ceraphene** | Competitor durability benchmarks | Marketing, Market Research | ⏳ Pending |
| **Graffisol** | Regional base generation rates | Technical | ⏳ Pending |
| **Graphacrete** | Cement content by grade (kg/m³) | Technical, R&D | ⏳ Pending |
| **Graphacrete** | Dosage range by application | Technical, R&D | ⏳ Pending |
| **HD-G-PE** | Scrap reduction field data | Technical, Customer Success | ⏳ Pending (or 12-24 week pilot) |
| **HD-G-PE** | Warranty reduction field data | Technical, Customer Success | ⏳ Pending (or 12-24 week pilot) |

---

## 🎯 Recommended Stakeholder Actions

### 1. Finance & Pricing Team
**Timeline**: 1 week
**Deliverables**:
- [ ] Graffisol: Installed coating cost breakdown (material, labor, overhead) by project size
- [ ] HD-G-PE: Official pricing sheet with volume tiers and MOQ
- [ ] Both: Payment terms or contract structures affecting pricing

**Format**: Spreadsheet or pricing document
**Contact**: _____________
**Review Meeting**: _____________

---

### 2. Technical / R&D Team
**Timeline**: 2 weeks
**Deliverables**:
- [ ] Graphacrete: Cement content by grade (M20-M50)
- [ ] Graphacrete: Dosage guidelines by application and grade
- [ ] HD-G-PE: Dosage recommendations by application with processing guidelines
- [ ] Graffisol: Validate base generation rate, provide regional variations
- [ ] Ceraphene: Coverage rate testing data

**Format**: Technical specifications document
**Contact**: _____________
**Review Meeting**: _____________

---

### 3. Operations Team
**Timeline**: 1 week
**Deliverables**:
- [ ] Graffisol: Labor hours per kW installation
- [ ] Graffisol: Equipment and travel cost models by project size/location

**Format**: Operational cost analysis
**Contact**: _____________
**Review Meeting**: _____________

---

### 4. Sales Team
**Timeline**: 1 week
**Deliverables**:
- [ ] Graffisol: Sample quotes for different project sizes (to validate cost model)
- [ ] HD-G-PE: Typical customer quote examples
- [ ] All products: Customer objections related to ROI claims

**Format**: Quote templates + notes
**Contact**: _____________
**Review Meeting**: _____________

---

### 5. Marketing / Market Research Team
**Timeline**: 2 weeks
**Deliverables**:
- [ ] Ceraphene: Competitor product durability benchmarks (testing or secondary research)
- [ ] All products: Validation of default customer input values (typical project sizes, etc.)

**Format**: Market research report
**Contact**: _____________
**Review Meeting**: _____________

---

### 6. Customer Success Team
**Timeline**: 2 weeks (planning), 12-24 weeks (pilot execution)
**Deliverables**:
- [ ] HD-G-PE: Identify 3-5 pilot customers willing to track scrap/warranty metrics
- [ ] HD-G-PE: Establish baseline metrics collection protocol
- [ ] Graffisol: Track performance data from existing installations

**Format**: Pilot program plan + data tracking template
**Contact**: _____________
**Review Meeting**: _____________

---

### 7. Sustainability Team
**Timeline**: 4 weeks
**Deliverables**:
- [ ] Graphacrete: Approved CO₂ emission factor for cement (India-specific)
- [ ] All products: Carbon footprint calculation methodology if needed

**Format**: Sustainability guidelines document
**Contact**: _____________
**Review Meeting**: _____________

---

## 📝 Data Submission Templates

### Template 1: Pricing Data
```
Product: _______________
Data Type: Pricing Structure

Base Price: ₹___ per ___
Volume Tiers:
  - Tier 1: ___ to ___ units → ₹___/unit
  - Tier 2: ___ to ___ units → ₹___/unit
  - Tier 3: ___ to ___ units → ₹___/unit

MOQ: ___ units
Payment Terms: _______________
Regional Variations: ☐ Yes ☐ No
If yes, specify: _______________

Source/Authority: _______________
Last Updated: _______________
Approved By: _______________ (Name, Title)
```

### Template 2: Technical Performance Data
```
Product: _______________
Parameter: _______________

Validated Value: ___ ± ___ (units: ___)
Range: Min ___ to Max ___
Confidence Level: ___%

Source:
☐ Lab testing (Report ID: ___)
☐ Field data (n=___ samples)
☐ Industry standard (Standard ID: ___)
☐ Supplier specification
☐ Other: _______________

Test Conditions: _______________
Sample Size: n = ___
Date of Testing/Validation: _______________

Approved By: _______________ (Name, Title)
```

### Template 3: Field Performance Data
```
Product: _______________
Metric: _______________ (e.g., scrap reduction, warranty claims)

Baseline (without product): ___%
With Product: ___%
Improvement: ___% ± ___%

Customer/Site Details:
  - Number of sites: ___
  - Total volume tracked: ___
  - Time period: ___ months
  - Application type: _______________

Statistical Confidence: ___%
Data Collection Method: _______________

Approved for External Use: ☐ Yes ☐ No (requires customer approval)
Approved By: _______________ (Name, Title)
```

---

## 🚨 Interim Measures (Until Data Provided)

### For Calculators with Critical Data Gaps

**Option 1: Disable Calculator** (Recommended for P0 gaps)
```
Display: "Custom Quote Required"
Message: "ROI varies significantly by project size and requirements.
         Contact our sales team for a detailed analysis tailored to your needs."
CTA: "Request Custom ROI Analysis" → Lead form
```

**Option 2: Display with Strong Disclaimer** (For P1 gaps)
```
Display: Calculator functional with disclaimer
Warning Banner: "⚠️ Preliminary Estimate Only
This calculator uses industry averages and assumptions.
Actual costs and savings will be provided in a custom quote.
Results shown are for illustrative purposes only."

All assumption values marked with ⚠️ icon
```

**Option 3: Range-Based Estimates** (Preferred interim approach)
```
Instead of single values, show ranges:
  "Estimated ROI: 150-300% (depending on application and volume)"
  "Payback Period: 12-24 months (varies by project size)"

Encourage user to request detailed analysis for precise numbers.
```

---

## 📞 Escalation & Review Process

### Weekly Status Updates
**Meeting Schedule**: Every Friday, 2:00 PM
**Duration**: 30 minutes
**Attendees**: Product Marketing, Technical Lead, Finance Representative, Operations Lead

**Agenda**:
1. Data received this week
2. Blockers/delays
3. Next week priorities
4. Calculator accuracy impact assessment

---

### Final Sign-Off Requirements

Before any calculator goes live without disclaimers, require sign-off from:
- [ ] **Technical Lead** - All performance values validated
- [ ] **Finance/Pricing** - All cost data verified
- [ ] **Legal/Compliance** - No misleading claims, appropriate disclaimers in place
- [ ] **Sales Leadership** - Values align with actual sales promises
- [ ] **Product Marketing** - Overall accuracy and messaging

**Sign-Off Document Template**: Attached separately

---

## 📈 Success Metrics

1. **Data Completeness**: % of calculator inputs that are source-backed
   - Target: 80% minimum by end of Month 1
   - Target: 95% by end of Month 3

2. **Stakeholder Response Time**: Average days to fulfill data requests
   - Target: <7 days for P0, <14 days for P1

3. **Calculator Credibility**: Customer feedback on ROI accuracy
   - Target: <10% variance between calculator estimate and final quote
   - Track: Customer complaints about misleading estimates

4. **Conversion Impact**: Lead quality from calculator vs general inquiries
   - Track: Close rate, deal size, sales cycle length

---

## Appendix A: Regulatory & Compliance Considerations

### India Advertising Standards Council (ASCI) Guidelines
- Performance claims must be substantiated with evidence
- Comparisons with competitors must be factual and not misleading
- Disclaimers must be clear, prominent, and in the same language as the claim

### Recommendations:
1. All "% savings" claims must reference source (test reports, field data)
2. Competitor comparisons require market survey or third-party verification
3. "Results may vary" disclaimer required for customer-specific calculations
4. Calculator should log user inputs for potential audit trail

---

## Appendix B: Change Log

| Date | Version | Changes | Approved By |
|------|---------|---------|-------------|
| 2026-02-17 | 1.0 | Initial document | - |
| | | | |

---

## Appendix C: Contact Information

| Department | Contact Person | Email | Phone |
|------------|----------------|-------|-------|
| Product Marketing | _____________ | _____________ | _____________ |
| Technical/R&D | _____________ | _____________ | _____________ |
| Finance | _____________ | _____________ | _____________ |
| Operations | _____________ | _____________ | _____________ |
| Sales | _____________ | _____________ | _____________ |
| Customer Success | _____________ | _____________ | _____________ |
| Legal/Compliance | _____________ | _____________ | _____________ |

---

**Document Owner**: Product Marketing Team
**Review Frequency**: Bi-weekly until all P0/P1 data collected, then quarterly
**Next Review Date**: 2026-03-03

---

## Acknowledgments

This document was prepared following a comprehensive audit of all ROI calculators against source-backed data validation requirements outlined in the grounded_formulas.md specifications. All stakeholders are requested to treat data provision as a high-priority initiative to support accurate customer communication and maintain brand credibility.

**Thank you for your cooperation.**
