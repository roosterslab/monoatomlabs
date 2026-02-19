# ROI Calculator Slider Design & Accuracy Framework

**Date**: 2026-02-17
**Purpose**: Design optimal slider configurations and data visualization for accurate, trustworthy ROI calculators
**Status**: Design Proposal

---

## 🎯 Core Design Principles

### 1. **Data Integrity Hierarchy**
All calculator inputs must be classified into one of three categories:

```
┌─────────────────────────────────────────────────────────┐
│ TIER 1: Source-Backed (Green)                          │
│ - Fixed values from validated sources                  │
│ - Display only (no slider)                             │
│ - Show source citation                                 │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ TIER 2: Validated Ranges (Yellow)                      │
│ - Ranges from test reports/field data                  │
│ - Constrained slider within validated bounds           │
│ - Show confidence interval                             │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ TIER 3: Customer Inputs (Blue)                         │
│ - User-specific operational data                       │
│ - Wide range slider with typical value markers         │
│ - No validation required                               │
└─────────────────────────────────────────────────────────┘
┌─────────────────────────────────────────────────────────┐
│ TIER 4: Estimates/Assumptions (Red/Orange)             │
│ - Assumptions requiring internal validation            │
│ - Adjustable slider with clear disclaimer              │
│ - Marked as "Preliminary Estimate"                     │
└─────────────────────────────────────────────────────────┘
```

---

## 📊 Product-Specific Slider Configurations

### **CERAPHENE - Automotive Ceramic Coating**

#### Fixed Values (Display Only - No Slider)
```javascript
const sourceBackedValues = {
  ceraphenePrice: {
    value: 5000,
    unit: '₹/50ml',
    source: 'Product brochure 2024',
    display: 'Ceraphene Price: ₹5,000/50ml ✓',
    tier: 'SOURCE-BACKED'
  },
  competitorAverage: {
    value: 15000,
    unit: '₹/50ml',
    source: 'Market survey Q4 2023',
    display: 'Competitor Average: ₹15,000/50ml',
    tier: 'SOURCE-BACKED'
  },
  durability: {
    value: [3, 4],
    unit: 'years',
    source: 'Field validation reports',
    display: 'Durability: 3-4+ years',
    tier: 'SOURCE-BACKED'
  },
  hardness: {
    value: '9H+',
    source: 'NABL test report',
    display: 'Hardness: 9H+',
    tier: 'SOURCE-BACKED'
  }
}
```

#### Validated Range Sliders
```javascript
const validatedRanges = {
  durabilityYears: {
    min: 3,
    max: 4,
    default: 3.5,
    step: 0.5,
    unit: 'years',
    label: 'Expected Durability',
    tier: 'VALIDATED-RANGE',
    confidence: '95%',
    tooltip: 'Field data shows 3-4 years typical lifespan'
  }
}
```

#### Customer Input Sliders
```javascript
const customerInputs = {
  monthlyApplications: {
    min: 1,
    max: 500,
    default: 50,
    step: 5,
    unit: 'units/month',
    label: 'Monthly Applications',
    tier: 'CUSTOMER-INPUT',
    markers: [
      { value: 10, label: 'Small Shop' },
      { value: 50, label: 'Medium' },
      { value: 200, label: 'Large Fleet' }
    ]
  },
  competitorPriceAdjust: {
    min: 10000,
    max: 20000,
    default: 15000,
    step: 1000,
    unit: '₹/50ml',
    label: 'Your Competitor Price',
    tier: 'CUSTOMER-INPUT',
    tooltip: 'Adjust based on your local market pricing'
  }
}
```

#### Missing Data (Needs Stakeholder Input)
```javascript
const missingData = {
  competitorDurability: {
    status: 'NEEDS-DATA',
    priority: 'HIGH',
    currentAssumption: '1-2 years',
    requiredFor: 'TCO comparison over 5-year horizon',
    stakeholder: 'Marketing & Product Team',
    impact: 'Cannot calculate full lifecycle value without this'
  },
  coveragePerBottle: {
    status: 'NEEDS-DATA',
    priority: 'MEDIUM',
    requiredFor: 'Cost per vehicle calculation',
    stakeholder: 'Technical Team',
    impact: 'More accurate per-application costing'
  }
}
```

---

### **GRAFFISOL - Solar Panel Coating**

#### Fixed Values (Display Only)
```javascript
const sourceBackedValues = {
  powerGainRange: {
    value: [7, 8],
    unit: '%',
    source: 'Field validation: 1+ MW installations',
    display: 'Energy Gain: 7-8% ✓',
    tier: 'SOURCE-BACKED',
    fieldValidated: true
  },
  temperatureReduction: {
    value: [5, 6],
    unit: '°C',
    source: 'Thermal imaging studies',
    display: 'Operating Temp Reduction: 5-6°C',
    tier: 'SOURCE-BACKED'
  },
  soilingReduction: {
    value: [30, 40],
    unit: '%',
    source: 'Soiling loss studies',
    display: 'Soiling Loss Reduction: 30-40%',
    tier: 'SOURCE-BACKED'
  },
  lightTransmission: {
    value: '>98',
    unit: '%',
    source: 'Optical testing',
    display: 'Light Transmission: >98%',
    tier: 'SOURCE-BACKED'
  }
}
```

#### Validated Range Sliders
```javascript
const validatedRanges = {
  energyGainPercent: {
    min: 7.0,
    max: 8.0,
    default: 7.5,
    step: 0.1,
    unit: '%',
    label: 'Expected Energy Gain',
    tier: 'VALIDATED-RANGE',
    source: 'Field data from 1+ MW installations',
    tooltip: 'Conservative: 7% | Expected: 7.5% | Optimal: 8%'
  }
}
```

#### Customer Input Sliders
```javascript
const customerInputs = {
  solarCapacity: {
    min: 10,
    max: 10000,
    default: 500,
    step: 10,
    unit: 'kW',
    label: 'Solar Plant Capacity',
    tier: 'CUSTOMER-INPUT',
    logarithmic: true, // Use log scale for wide range
    markers: [
      { value: 50, label: 'Residential' },
      { value: 500, label: 'Commercial' },
      { value: 5000, label: 'Utility Scale' }
    ]
  },
  electricityTariff: {
    min: 3,
    max: 12,
    default: 6,
    step: 0.5,
    unit: '₹/kWh',
    label: 'Electricity Tariff',
    tier: 'CUSTOMER-INPUT',
    tooltip: 'Your PPA rate or grid tariff'
  },
  soilingEnvironment: {
    type: 'select',
    options: [
      { value: 'low', label: 'Low (Clean Areas)', factor: 0.07 },
      { value: 'medium', label: 'Medium (Urban)', factor: 0.075 },
      { value: 'high', label: 'High (Dusty/Industrial)', factor: 0.08 }
    ],
    default: 'medium',
    tier: 'CUSTOMER-INPUT'
  }
}
```

#### Missing Data (Needs Stakeholder Input)
```javascript
const missingData = {
  installedCoatingCost: {
    status: 'NEEDS-INTERNAL-DATA',
    priority: 'CRITICAL',
    currentAssumption: '₹500/kW (placeholder)',
    requiredFor: 'Payback period calculation',
    stakeholder: 'Operations & Finance Team',
    impact: 'Cannot provide accurate ROI without real cost structure',
    requiredBreakdown: [
      'Material cost per m²',
      'Labor cost per m²',
      'Equipment/travel overhead',
      'Warranty/service cost',
      'Volume-based pricing tiers'
    ]
  },
  baseGenerationByRegion: {
    status: 'NEEDS-VALIDATION',
    priority: 'HIGH',
    currentAssumption: '1500 kWh/kW/year (India average)',
    requiredFor: 'Accurate energy baseline',
    stakeholder: 'Technical Team',
    impact: 'Varies by region (1200-1800 kWh/kW/year)',
    recommendation: 'Add regional selector with validated irradiation data'
  }
}
```

---

### **GRAPHACRETE - Concrete Additive**

#### Fixed Values (Display Only)
```javascript
const sourceBackedValues = {
  graphacretePrice: {
    value: 235,
    unit: '₹/L',
    source: 'Product pricing sheet (MOQ 1000L)',
    display: 'Graphacrete Price: ₹235/L ✓',
    tier: 'SOURCE-BACKED'
  },
  dosageExample: {
    value: 2,
    unit: 'L/m³',
    source: 'Technical brochure',
    display: 'Typical Dosage: 2 L/m³',
    tier: 'SOURCE-BACKED',
    note: 'Example value - may vary by application'
  },
  additiveCostPerM3: {
    value: 470,
    unit: '₹/m³',
    calculation: '2 L × ₹235/L = ₹470/m³',
    display: 'Additive Cost: ₹470/m³',
    tier: 'SOURCE-BACKED'
  },
  strengthGainRange: {
    value: [40, 50],
    unit: '%',
    source: 'Test reports',
    display: 'Strength Gain: 40-50%',
    tier: 'SOURCE-BACKED'
  },
  cementSavingRange: {
    value: [15, 20],
    unit: '%',
    source: 'Mix design studies',
    display: 'Cement Saving Potential: 15-20%',
    tier: 'SOURCE-BACKED'
  },
  concreteGradeExamples: {
    M30: {
      price: 4050,
      unit: '₹/m³',
      source: 'Market survey Q1 2024',
      tier: 'REFERENCE-ONLY'
    },
    M50: {
      price: 4950,
      unit: '₹/m³',
      source: 'Market survey Q1 2024',
      tier: 'REFERENCE-ONLY'
    }
  }
}
```

#### Validated Range Sliders
```javascript
const validatedRanges = {
  cementSavingPercent: {
    min: 15,
    max: 20,
    default: 17.5,
    step: 0.5,
    unit: '%',
    label: 'Expected Cement Savings',
    tier: 'VALIDATED-RANGE',
    source: 'Mix design test data',
    tooltip: 'Conservative: 15% | Expected: 17.5% | Optimal: 20%'
  },
  strengthGainPercent: {
    min: 40,
    max: 50,
    default: 45,
    step: 1,
    unit: '%',
    label: 'Compressive Strength Gain',
    tier: 'VALIDATED-RANGE',
    source: 'NABL test reports'
  }
}
```

#### Customer Input Sliders
```javascript
const customerInputs = {
  concreteVolume: {
    min: 100,
    max: 50000,
    default: 5000,
    step: 100,
    unit: 'm³',
    label: 'Project Concrete Volume',
    tier: 'CUSTOMER-INPUT',
    logarithmic: true,
    markers: [
      { value: 500, label: 'Small Project' },
      { value: 5000, label: 'Medium' },
      { value: 20000, label: 'Large Infrastructure' }
    ]
  },
  cementCostPerKg: {
    min: 5,
    max: 15,
    default: 8,
    step: 0.5,
    unit: '₹/kg',
    label: 'Local Cement Cost',
    tier: 'CUSTOMER-INPUT',
    tooltip: 'Your current cement procurement price'
  },
  targetGrade: {
    type: 'select',
    options: [
      { value: 'M20', label: 'M20 (Standard)' },
      { value: 'M25', label: 'M25 (Medium)' },
      { value: 'M30', label: 'M30 (Common)' },
      { value: 'M40', label: 'M40 (High)' },
      { value: 'M50', label: 'M50 (Premium)' }
    ],
    default: 'M30',
    tier: 'CUSTOMER-INPUT'
  },
  localM30Price: {
    min: 3000,
    max: 5000,
    default: 4050,
    step: 50,
    unit: '₹/m³',
    label: 'Local M30 RMC Price',
    tier: 'CUSTOMER-INPUT',
    tooltip: 'Your ready-mix concrete supplier quote'
  },
  localM50Price: {
    min: 4000,
    max: 6000,
    default: 4950,
    step: 50,
    unit: '₹/m³',
    label: 'Local M50 RMC Price',
    tier: 'CUSTOMER-INPUT',
    tooltip: 'Your ready-mix concrete supplier quote'
  }
}
```

#### Missing Data (Needs Stakeholder Input)
```javascript
const missingData = {
  cementContentByGrade: {
    status: 'NEEDS-ENGINEERING-DATA',
    priority: 'HIGH',
    currentAssumption: '400 kg/m³ for M30 (industry standard)',
    requiredFor: 'Accurate cement savings calculation',
    stakeholder: 'Technical/R&D Team',
    impact: 'Cannot calculate kg cement saved without baseline',
    requiredData: {
      M20: 'X kg/m³',
      M25: 'X kg/m³',
      M30: 'X kg/m³',
      M40: 'X kg/m³',
      M50: 'X kg/m³'
    }
  },
  co2EmissionFactor: {
    status: 'NEEDS-STANDARD-SELECTION',
    priority: 'MEDIUM',
    currentAssumption: '0.9 kgCO₂/kg cement (global average)',
    requiredFor: 'Environmental impact calculation',
    stakeholder: 'Sustainability Team',
    impact: 'Cannot show carbon savings',
    recommendation: 'Use India-specific emission factors or validated standards'
  },
  dosageRangeByGrade: {
    status: 'NEEDS-TECHNICAL-VALIDATION',
    priority: 'MEDIUM',
    currentAssumption: '2 L/m³ for all grades',
    requiredFor: 'Grade-specific recommendations',
    stakeholder: 'Technical Team',
    impact: 'May over/under-dose for different applications'
  }
}
```

---

### **HD-G-PE - HDPE Polymer Enhancer**

#### Fixed Values (Display Only)
```javascript
const sourceBackedValues = {
  tensileStrengthGain: {
    value: 30,
    unit: '%',
    source: 'ASTM test reports',
    display: 'Tensile Strength Gain: +30% ✓',
    tier: 'SOURCE-BACKED'
  },
  elongationImprovement: {
    value: 20,
    unit: '× improvement',
    source: 'Lab validation',
    display: 'Elongation Strength: 20× ✓',
    tier: 'SOURCE-BACKED'
  },
  lifespanIncrease: {
    value: 20,
    unit: '%',
    source: 'Accelerated aging tests',
    display: 'Lifespan Increase: +20% ✓',
    tier: 'SOURCE-BACKED'
  },
  applications: {
    value: ['HDPE pipes', 'Films/packaging', 'Extrusion'],
    source: 'Technical datasheet',
    tier: 'SOURCE-BACKED'
  }
}
```

#### Customer Input Sliders
```javascript
const customerInputs = {
  annualProduction: {
    min: 10,
    max: 5000,
    default: 500,
    step: 10,
    unit: 'tonnes/year',
    label: 'Annual HDPE Production',
    tier: 'CUSTOMER-INPUT',
    logarithmic: true,
    markers: [
      { value: 50, label: 'Small' },
      { value: 500, label: 'Medium' },
      { value: 2000, label: 'Large' }
    ]
  },
  currentScrapRate: {
    min: 1,
    max: 20,
    default: 5,
    step: 0.5,
    unit: '%',
    label: 'Current Scrap/Rejection Rate',
    tier: 'CUSTOMER-INPUT',
    tooltip: 'Your current product failure rate'
  },
  annualScrapCost: {
    min: 100000,
    max: 50000000,
    default: 5000000,
    step: 100000,
    unit: '₹/year',
    label: 'Annual Scrap Cost',
    tier: 'CUSTOMER-INPUT',
    logarithmic: true,
    tooltip: 'Total cost of rejected/failed products'
  },
  annualWarrantyCost: {
    min: 50000,
    max: 20000000,
    default: 2000000,
    step: 50000,
    unit: '₹/year',
    label: 'Annual Warranty/Claims Cost',
    tier: 'CUSTOMER-INPUT',
    logarithmic: true
  },
  baseHDPEPrice: {
    min: 80,
    max: 250,
    default: 130,
    step: 5,
    unit: '₹/kg',
    label: 'Base HDPE Material Cost',
    tier: 'CUSTOMER-INPUT'
  }
}
```

#### Missing Data (Needs Stakeholder Input)
```javascript
const missingData = {
  dosageByApplication: {
    status: 'NEEDS-INTERNAL-DATA',
    priority: 'CRITICAL',
    currentAssumption: 'Generic 1% dosage',
    requiredFor: 'Cost calculation',
    stakeholder: 'R&D & Manufacturing Team',
    impact: 'Cannot calculate actual additive cost',
    requiredData: {
      pipes: 'X% dosage',
      films: 'X% dosage',
      packaging: 'X% dosage',
      extrusion: 'X% dosage'
    }
  },
  additivePricePerKg: {
    status: 'NEEDS-INTERNAL-DATA',
    priority: 'CRITICAL',
    currentAssumption: '₹5/kg (placeholder)',
    requiredFor: 'ROI calculation',
    stakeholder: 'Finance & Pricing Team',
    impact: 'Cannot provide accurate cost-benefit analysis',
    requiredBreakdown: [
      'Base price per kg',
      'Volume-based pricing tiers',
      'MOQ requirements'
    ]
  },
  scrapReductionFactor: {
    status: 'NEEDS-FIELD-DATA',
    priority: 'HIGH',
    currentAssumption: 'TBD - not assumed',
    requiredFor: 'Value calculation',
    stakeholder: 'Technical Team / Customer Pilots',
    impact: 'Cannot calculate scrap savings without this',
    recommendation: 'Run pilot with 3-5 customers, track failure rates'
  },
  warrantyReductionFactor: {
    status: 'NEEDS-FIELD-DATA',
    priority: 'HIGH',
    currentAssumption: 'TBD - not assumed',
    requiredFor: 'Value calculation',
    stakeholder: 'Technical Team / Customer Pilots',
    impact: 'Cannot calculate warranty savings',
    recommendation: 'Track customer claims before/after HD-G-PE adoption'
  }
}
```

---

## 🎨 UI/UX Design Patterns for Sliders

### **Tier-Based Visual Design**

```javascript
const sliderStyles = {
  'SOURCE-BACKED': {
    // Display only, no interaction
    display: 'badge',
    icon: '✓',
    color: 'green',
    bgColor: 'green-50',
    borderColor: 'green-500',
    showSource: true,
    interactive: false
  },

  'VALIDATED-RANGE': {
    // Constrained slider
    sliderColor: 'yellow-500',
    trackColor: 'yellow-100',
    thumbColor: 'yellow-600',
    showRange: true,
    showConfidence: true,
    icon: '📊',
    tooltip: 'Value based on test data'
  },

  'CUSTOMER-INPUT': {
    // Wide range slider
    sliderColor: 'blue-500',
    trackColor: 'blue-100',
    thumbColor: 'blue-600',
    showMarkers: true,
    icon: '⚙️',
    tooltip: 'Your specific value'
  },

  'NEEDS-VALIDATION': {
    // Assumption with disclaimer
    sliderColor: 'orange-500',
    trackColor: 'orange-100',
    thumbColor: 'orange-600',
    showWarning: true,
    icon: '⚠️',
    disclaimer: 'Preliminary estimate - subject to validation'
  }
}
```

### **Slider Component Template**

```jsx
<SliderInput
  name="energyGainPercent"
  tier="VALIDATED-RANGE"
  min={7.0}
  max={8.0}
  default={7.5}
  step={0.1}
  unit="%"
  label="Expected Energy Gain"
  source="Field validation: 1+ MW installations"
  confidence="95%"
  tooltip="Conservative: 7% | Expected: 7.5% | Optimal: 8%"
  onChange={handleChange}
  markers={[
    { value: 7.0, label: 'Conservative' },
    { value: 7.5, label: 'Expected' },
    { value: 8.0, label: 'Optimal' }
  ]}
/>
```

### **Multi-Tier Display**

```
┌─────────────────────────────────────────────────────────────┐
│ INPUT PARAMETERS                                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│ ✓ Ceraphene Price: ₹5,000/50ml  [Source: Product Brochure] │
│   ─────────────────────────────────────────────────────     │
│                                                             │
│ 📊 Expected Durability (3-4 years)                          │
│   ├─────●──────┤  3.5 years                               │
│   3.0         4.0                                          │
│   [95% Confidence from field data]                         │
│                                                             │
│ ⚙️ Monthly Applications                                     │
│   ├─────────────────●─────────────────────────────┤        │
│   1             50              200           500          │
│        Small    Medium         Large                       │
│                                                             │
│ ⚠️ Competitor Durability (Estimated)                        │
│   ├──●──┤  1.5 years                                      │
│   1.0    2.0                                               │
│   [⚠️ Assumption - requires validation]                     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 📈 Accuracy Enhancement Strategies

### **1. Range-Based Calculations**

Instead of single-point estimates, show ranges:

```javascript
// BAD: Single point estimate
const roi = calculateROI(7.5); // Results: 235%

// GOOD: Range with confidence
const roiRange = {
  conservative: calculateROI(7.0),  // 210%
  expected: calculateROI(7.5),      // 235%
  optimal: calculateROI(8.0),       // 260%
  confidence: '95%'
};

// Display
"Expected ROI: 210-260% (95% confidence)"
"Most Likely: 235%"
```

### **2. Scenario Analysis**

```javascript
const scenarios = {
  conservative: {
    label: 'Conservative',
    description: 'Worst-case validated values',
    parameters: {
      energyGain: 7.0,
      soiling: 'low',
      degradation: 'high'
    }
  },
  expected: {
    label: 'Expected',
    description: 'Typical field performance',
    parameters: {
      energyGain: 7.5,
      soiling: 'medium',
      degradation: 'medium'
    }
  },
  optimal: {
    label: 'Optimal',
    description: 'Best-case validated values',
    parameters: {
      energyGain: 8.0,
      soiling: 'high',
      degradation: 'low'
    }
  }
};
```

### **3. Sensitivity Analysis Display**

Show which inputs have the biggest impact:

```
Impact on ROI (sorted by sensitivity):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Electricity Tariff     ████████████ 65%
Solar Capacity         ████████     45%
Energy Gain %          ██████       35%
Coating Cost           ████         25%
Base Generation        ███          18%
```

### **4. Data Quality Indicators**

```jsx
<DataQualityBadge
  tier="VALIDATED-RANGE"
  source="Field data: 1+ MW installations"
  confidence="95%"
  lastUpdated="2024-01-15"
  sampleSize="5 installations"
/>
```

### **5. Progressive Disclosure**

```
[Simple Mode]
→ Show only customer inputs
→ Use expected values for everything else

[Advanced Mode]
→ Show validated range sliders
→ Allow scenario comparison

[Expert Mode]
→ Show all assumptions
→ Allow full customization
→ Display sensitivity analysis
```

---

## 🔒 Validation Framework

### **Pre-Launch Checklist**

```javascript
const validationChecklist = {
  ceraphene: {
    sourceBackedValues: [
      '✓ Price verified against current pricing sheet',
      '✓ Competitor average from market survey (date: ___)',
      '✓ Durability from field reports (n=___ vehicles)',
      '✗ Competitor durability - NEEDS DATA'
    ],
    assumptions: [
      '⚠️ Coverage per bottle - using estimate',
      '⚠️ Reapplication frequency - needs validation'
    ],
    signoff: {
      technical: '____',
      marketing: '____',
      finance: '____'
    }
  }
};
```

### **Continuous Validation**

```javascript
const dataRefreshSchedule = {
  pricing: 'Quarterly',
  fieldPerformance: 'Semi-annually',
  marketBenchmarks: 'Annually',
  customerInputDefaults: 'Continuous (from usage data)'
};
```

---

## 🎯 Recommended Slider Configurations by Product

### **Ceraphene Final Config**

```javascript
const cerapheneSliders = {
  // TIER 1: Fixed displays (no sliders)
  displays: [
    'Ceraphene Price: ₹5,000/50ml ✓',
    'Average Competitor: ₹15,000/50ml',
    'Durability: 3-4 years ✓',
    'Hardness: 9H+ ✓'
  ],

  // TIER 2: Validated range sliders
  validatedSliders: [
    {
      name: 'durabilityYears',
      range: [3, 4],
      default: 3.5,
      label: 'Expected Ceraphene Lifespan'
    }
  ],

  // TIER 3: Customer input sliders
  customerSliders: [
    {
      name: 'monthlyApplications',
      range: [1, 500],
      default: 50,
      label: 'Monthly Coating Applications',
      logarithmic: true
    },
    {
      name: 'competitorPrice',
      range: [10000, 20000],
      default: 15000,
      label: 'Your Competitor Price (₹/50ml)'
    }
  ],

  // TIER 4: Assumptions needing validation
  assumptions: [
    {
      name: 'competitorDurability',
      range: [1, 2.5],
      default: 1.5,
      label: 'Competitor Coating Lifespan (years)',
      warning: '⚠️ Estimated value - recommend field validation'
    }
  ]
};
```

### **Graffisol Final Config**

```javascript
const graffisolSliders = {
  displays: [
    'Energy Gain: 7-8% (field-validated) ✓',
    'Temp Reduction: 5-6°C ✓',
    'Soiling Reduction: 30-40% ✓',
    'Light Transmission: >98% ✓'
  ],

  validatedSliders: [
    {
      name: 'energyGainPercent',
      range: [7.0, 8.0],
      default: 7.5,
      label: 'Expected Energy Gain (%)',
      markers: ['Conservative 7%', 'Expected 7.5%', 'Optimal 8%']
    }
  ],

  customerSliders: [
    {
      name: 'solarCapacity',
      range: [10, 10000],
      default: 500,
      label: 'Solar Plant Capacity (kW)',
      logarithmic: true
    },
    {
      name: 'electricityTariff',
      range: [3, 12],
      default: 6,
      label: 'Electricity Tariff (₹/kWh)'
    },
    {
      name: 'soilingEnvironment',
      type: 'select',
      options: ['Low', 'Medium', 'High'],
      default: 'Medium'
    }
  ],

  assumptions: [
    {
      name: 'coatingCostPerKW',
      range: [300, 800],
      default: 500,
      label: 'Installed Coating Cost (₹/kW)',
      warning: '⚠️ Preliminary estimate - final cost varies by project size and location'
    },
    {
      name: 'baseGeneration',
      range: [1200, 1800],
      default: 1500,
      label: 'Base Generation (kWh/kW/year)',
      warning: '⚠️ Regional average - actual varies by location and weather'
    }
  ]
};
```

### **Graphacrete Final Config**

```javascript
const graphacreteSliders = {
  displays: [
    'Graphacrete Price: ₹235/L ✓',
    'Typical Dosage: 2 L/m³',
    'Additive Cost: ₹470/m³ ✓',
    'Strength Gain: 40-50% ✓',
    'Cement Savings: 15-20% ✓'
  ],

  validatedSliders: [
    {
      name: 'cementSavingPercent',
      range: [15, 20],
      default: 17.5,
      label: 'Expected Cement Savings (%)'
    },
    {
      name: 'strengthGainPercent',
      range: [40, 50],
      default: 45,
      label: 'Compressive Strength Gain (%)'
    }
  ],

  customerSliders: [
    {
      name: 'concreteVolume',
      range: [100, 50000],
      default: 5000,
      label: 'Project Volume (m³)',
      logarithmic: true
    },
    {
      name: 'cementCostPerKg',
      range: [5, 15],
      default: 8,
      label: 'Cement Cost (₹/kg)'
    },
    {
      name: 'localM30Price',
      range: [3000, 5000],
      default: 4050,
      label: 'Local M30 RMC Price (₹/m³)'
    },
    {
      name: 'localM50Price',
      range: [4000, 6000],
      default: 4950,
      label: 'Local M50 RMC Price (₹/m³)'
    }
  ],

  assumptions: [
    {
      name: 'cementContentM30',
      range: [300, 450],
      default: 400,
      label: 'Cement Content in M30 (kg/m³)',
      warning: '⚠️ Industry standard - actual varies by mix design'
    }
  ]
};
```

### **HD-G-PE Final Config**

```javascript
const hdgpeSliders = {
  displays: [
    'Tensile Strength Gain: +30% ✓',
    'Elongation: 20× improvement ✓',
    'Lifespan Increase: +20% ✓'
  ],

  customerSliders: [
    {
      name: 'annualProduction',
      range: [10, 5000],
      default: 500,
      label: 'Annual HDPE Production (tonnes)',
      logarithmic: true
    },
    {
      name: 'currentScrapRate',
      range: [1, 20],
      default: 5,
      label: 'Current Scrap/Rejection Rate (%)'
    },
    {
      name: 'annualScrapCost',
      range: [100000, 50000000],
      default: 5000000,
      label: 'Annual Scrap Cost (₹)',
      logarithmic: true
    },
    {
      name: 'annualWarrantyCost',
      range: [50000, 20000000],
      default: 2000000,
      label: 'Annual Warranty Cost (₹)',
      logarithmic: true
    }
  ],

  assumptions: [
    {
      name: 'additiveCostPerKg',
      range: [3, 10],
      default: 5,
      label: 'HD-G-PE Additive Cost (₹/kg)',
      warning: '⚠️ Preliminary estimate - contact sales for actual pricing'
    },
    {
      name: 'dosagePercent',
      range: [0.5, 2.0],
      default: 1.0,
      label: 'Dosage (% by weight)',
      warning: '⚠️ Recommended dosage varies by application - consult technical team'
    },
    {
      name: 'scrapReductionPercent',
      range: [10, 50],
      default: 25,
      label: 'Expected Scrap Reduction (%)',
      warning: '⚠️ Based on improved properties - actual results vary. Pilot recommended.'
    }
  ]
};
```

---

## 🚀 Implementation Roadmap

### **Phase 1: Data Integrity (Week 1-2)**
- [x] Add source-backed validation comments to all calculators
- [x] Fix critical formula errors (Graphacrete ₹470/m³, Graffisol 7-8%)
- [ ] Create data tier classification for all parameters
- [ ] Add visual indicators (✓, ⚠️, 📊, ⚙️)

### **Phase 2: Enhanced Sliders (Week 3-4)**
- [ ] Implement tiered slider components
- [ ] Add range-based calculations (conservative/expected/optimal)
- [ ] Add data quality badges
- [ ] Implement logarithmic scales for wide-range sliders

### **Phase 3: Stakeholder Data Collection (Week 5-6)**
- [ ] Document all missing data requirements
- [ ] Create formal requests to stakeholders
- [ ] Set up data refresh schedule
- [ ] Establish validation protocols

### **Phase 4: Advanced Features (Week 7-8)**
- [ ] Add scenario comparison view
- [ ] Implement sensitivity analysis
- [ ] Add progressive disclosure (Simple/Advanced/Expert modes)
- [ ] Create downloadable reports with assumptions documented

---

## ✅ Success Criteria

1. **Data Integrity**: 100% of values either source-backed or clearly marked as assumptions
2. **Transparency**: Users can see the source/confidence level of every input
3. **Accuracy**: Conservative estimates never overstate, expected estimates match field data
4. **Stakeholder Buy-in**: All missing data requirements documented and acknowledged
5. **User Trust**: Clear disclaimers on all preliminary estimates

---

**Next Actions Required:**
1. Review and approve slider configuration recommendations
2. Provide missing data or commit to data collection timeline
3. Approve visual design for tiered data display
4. Sign off on validation framework before launch
