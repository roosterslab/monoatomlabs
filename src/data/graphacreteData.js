import { Building2, TestTube, TrendingUp, Package, Shield, Truck, Sparkles, Factory } from 'lucide-react';

/**
 * Graphacrete Product Infographic Data
 * All data for interactive components on the Graphacrete product page
 */

// ROI Calculator Configuration
// Data verified from: Graphacrete-Brochure-01.md & PRODUCT-CATALOG.md
export const roiCalculatorConfig = {
  productName: 'Graphacrete',

  // Primary inputs — always visible in calculator
  defaultInputs: {
    projectVolume: {
      label: 'Concrete Volume',
      type: 'logslider',   // logarithmic 1–10,000 m³
      min: 1,
      max: 10000,
      unit: 'm³',
      default: 500
    },
    targetStrength: {
      label: 'Target Grade',
      type: 'select',
      unit: '',
      default: 50,         // M50 — NABL certified sweet spot
      options: [
        { value: 20, label: 'M20', description: 'Residential foundations & slabs' },
        { value: 30, label: 'M30', description: 'General structural — most common' },
        { value: 40, label: 'M40', description: 'High-load beams & columns' },
        { value: 50, label: 'M50', description: 'Premium structural', badge: 'NABL Sweet Spot' },
        { value: 60, label: 'M60', description: 'Bridges & high-rise cores' }
      ]
    },
    cementPrice: {
      label: 'Cement Price',
      type: 'slider',
      min: 280,
      max: 350,
      step: 5,
      unit: '₹/bag',
      default: 320,
      note: 'Market rate ₹320/bag (50 kg). Adjust for your region.'
    },
    cementReductionPct: {
      label: 'Cement Reduction',
      type: 'slider',
      min: 15,
      max: 20,
      step: 1,
      unit: '%',
      default: 15,
      note: 'NABL certified 15–20%. Conservative default = 15%.'
    }
  },

  // Secondary inputs — collapsed accordion, less prominent
  secondaryInputs: {
    waterproofing: {
      label: 'Waterproofing Needed',
      type: 'toggle',
      default: false
    },
    waterproofingRate: {
      label: 'Waterproofing Cost',
      type: 'slider',
      min: 100,
      max: 300,
      step: 10,
      unit: '₹/m²',
      default: 150,
      note: 'Dr. Fixit / equivalent system cost per m²',
      showWhen: { key: 'waterproofing', value: true }
    },
    laborCost: {
      label: 'Daily Site Labour Cost',
      type: 'slider',
      min: 5000,
      max: 50000,
      step: 1000,
      unit: '₹/day',
      default: 15000
    },
    projectType: {
      label: 'Project Type',
      type: 'buttongroup',
      default: 'residential',
      options: [
        { value: 'residential', label: 'Residential' },
        { value: 'commercial', label: 'Commercial' },
        { value: 'infrastructure', label: 'Infrastructure' }
      ]
    },
    analysisPeriod: {
      label: 'Analysis Period',
      type: 'buttongroup',
      default: 10,
      options: [
        { value: 5, label: '5 yr' },
        { value: 10, label: '10 yr' },
        { value: 20, label: '20 yr' }
      ]
    }
  },

  calculations: (inputs) => {
    const {
      projectVolume      = 500,
      targetStrength     = 50,
      cementPrice        = 320,
      cementReductionPct = 15,   // 15–20%; 15% = conservative NABL-certified default
      waterproofing      = false,
      waterproofingRate  = 150,
      laborCost          = 15000,
      projectType        = 'residential',
      analysisPeriod     = 10
    } = inputs;

    /**
     * Source: Graphacrete-Brochure-01.md & NABL test report
     * - Additive: ₹235/L × 2 L/m³ = ₹470/m³ (fixed)
     * - NABL certified: M30 + Graphacrete ≈ M50
     * - Cement reduction: 15–20% (15% default = conservative & defensible)
     * - Grade cost model: gradeCost(G, P) = fixed[G] + bags[G] × P
     *   (typical Indian RMC market assumptions, not IS 456 citation)
     */
    const additiveCostPerM3 = 470; // 2 L × ₹235/L

    // Typical Indian RMC market cost components (fixed at ₹320/bag baseline)
    const gradeData = {
      20: { bags: 5.00, fixed: 2000 }, // 5.00×320+2000 = 3600
      30: { bags: 6.25, fixed: 2050 }, // 6.25×320+2050 = 4050
      40: { bags: 7.50, fixed: 2050 }, // 7.50×320+2050 = 4450
      50: { bags: 8.50, fixed: 2230 }, // 8.50×320+2230 = 4950
      60: { bags: 10.0, fixed: 2350 }  // 10.0×320+2350 = 5550
    };

    // NABL grade upgrade mapping: base grade used with Graphacrete to reach target
    const baseGradeFor = {
      20: 20, // no upgrade; value = cement savings + enhanced durability
      30: 30, // no upgrade; value = cement savings + enhanced durability
      40: 30, // M30 + Graphacrete → M40 performance
      50: 30, // M30 + Graphacrete → M50 (NABL certified sweet spot)
      60: 40  // M40 + Graphacrete → M60 performance
    };

    const gradeCost = (grade, P) => gradeData[grade].fixed + gradeData[grade].bags * P;

    const baseGrade  = baseGradeFor[targetStrength];
    const targetCost = gradeCost(targetStrength, cementPrice);
    const baseCost   = gradeCost(baseGrade, cementPrice);

    // ── Method 1: Grade-only savings (brochure method — no cement netting) ─────
    // At M50/₹320: 4950 − (4050 + 470) = ₹430  ← headline brochure figure
    const gradeOnlySavingsPerM3 = Math.round(targetCost - (baseCost + additiveCostPerM3));
    const gradeOnlySavingsTotal = Math.round(gradeOnlySavingsPerM3 * projectVolume);

    // ── Method 2: Net savings / all-in (cement reduction included) ────────────
    const cementReductionFrac    = cementReductionPct / 100;
    const baseBags               = gradeData[baseGrade].bags;
    const cementSavedBagsPerM3   = baseBags * cementReductionFrac;
    const cementSavingsValuePerM3 = Math.round(cementSavedBagsPerM3 * cementPrice);

    // Net cost with Graphacrete: base mix − cement saved + additive
    // At M50/₹320/15%: 4050 − 300 + 470 = ₹4,220  (vs M50 ₹4,950 → saves ₹730)
    // At M30/₹320/15%: 4050 − 300 + 470 = ₹4,220  (vs M30 ₹4,050 → premium ₹170)
    const netCostWithGraphacrete = baseCost - cementSavingsValuePerM3 + additiveCostPerM3;
    const netSavingsPerM3        = Math.round(targetCost - netCostWithGraphacrete);
    const netSavingsTotal        = Math.round(netSavingsPerM3 * projectVolume);

    // ── Investment & ROI ──────────────────────────────────────────────────────
    const productCostTotal = Math.round(additiveCostPerM3 * projectVolume);
    // ROI is null (not shown) when net savings are not positive
    const roiPercentage    = netSavingsTotal > 0 && productCostTotal > 0
      ? Math.round((netSavingsTotal / productCostTotal) * 100)
      : null;
    const paybackLabel     = netSavingsPerM3 > 0 ? 'Immediate' : 'Quality+';

    // ── Marketing presentation labels ─────────────────────────────────────────
    const gradeOnlyLabel = gradeOnlySavingsPerM3 > 0 ? 'Savings'       : 'Premium';
    const netLabel       = netSavingsPerM3       > 0 ? 'Net Savings'   : 'Quality Upgrade Premium';

    // ── Cement & CO₂ display stats ────────────────────────────────────────────
    const totalCementBags = Math.round(cementSavedBagsPerM3 * projectVolume);
    const totalCementKg   = totalCementBags * 50;           // 50 kg/bag
    const co2AvoidedKg    = Math.round(totalCementKg * 0.9); // 0.9 kg CO₂/kg cement (IPCC)

    // ── Lifecycle savings (optional, shown in accordion, labeled "Estimates") ──

    // C: Waterproofing avoidance (project-dependent, off by default)
    const waterproofingArea    = Math.round(projectVolume * 0.25);
    const reapplications       = Math.floor(analysisPeriod / 7);
    const waterproofingSavings = waterproofing
      ? waterproofingArea * waterproofingRate * 0.70 * (1 + reapplications)
      : 0;

    // D: Construction schedule — 17% faster cycles → site overhead saved
    const constructionSavings = Math.round((projectVolume / 30) * 0.17 * laborCost * 1.5);

    // E: Service life extension — 3% of replacement value (mid of 2–6% defensible range)
    const structureValue       = projectVolume * 15000;
    const lifeExtensionSavings = Math.round(structureValue * 0.03);

    // F: Thermal / cooling savings — 7% reduction (residential/commercial only)
    const coolingRate    = projectType === 'commercial' ? 120 : 60;
    const thermalSavings = projectType !== 'infrastructure'
      ? Math.round(projectVolume * 2 * coolingRate * 0.07 * analysisPeriod)
      : 0;

    // G: Maintenance reduction — 0.4% of structure value/yr saved
    const maintenanceSavings = Math.round(structureValue * 0.004 * analysisPeriod);

    const totalSecondary = Math.round(
      waterproofingSavings + constructionSavings +
      lifeExtensionSavings + thermalSavings + maintenanceSavings
    );
    const totalAllInDelta  = Math.round(netSavingsTotal + totalSecondary);
    const totalAllInRoiPct = productCostTotal > 0 && totalAllInDelta > 0
      ? Math.round((totalAllInDelta / productCostTotal) * 100)
      : null;

    return {
      // ── Core costs ────────────────────────────────────────────────────────────
      baseGrade,
      targetGrade:                 targetStrength,
      isNABL:                      targetStrength === 50,
      baseCostPerM3:               Math.round(baseCost),
      targetCostPerM3:             Math.round(targetCost),
      additiveCostPerM3,
      cementSavingsValuePerM3,
      netCostWithGraphacretePerM3: Math.round(netCostWithGraphacrete),

      // ── Savings — BOTH methods always returned ────────────────────────────────
      gradeOnlySavingsPerM3,   // ₹/m³ grade-only (brochure ₹430 at M50/₹320)
      gradeOnlySavingsTotal,   // ₹ project total
      netSavingsPerM3,         // ₹/m³ all-in net (+ve = savings, −ve = quality premium)
      netSavingsTotal,         // ₹ project total

      // ── Marketing presentation helpers ────────────────────────────────────────
      gradeOnlyLabel,          // 'Savings' | 'Premium'
      netLabel,                // 'Net Savings' | 'Quality Upgrade Premium'
      roiPercentage,           // % (null when not positive — never show negative ROI)
      paybackLabel,            // 'Immediate' | 'Quality+'

      // ── Investment ────────────────────────────────────────────────────────────
      productCostTotal,

      // ── Cement & CO₂ ─────────────────────────────────────────────────────────
      cementSavedBags: totalCementBags,
      cementSavedKg:   totalCementKg,
      co2AvoidedKg,

      // ── Lifecycle ─────────────────────────────────────────────────────────────
      lifecycle: {
        waterproofing:  Math.round(waterproofingSavings),
        construction:   constructionSavings,
        lifeExtension:  lifeExtensionSavings,
        thermal:        thermalSavings,
        maintenance:    maintenanceSavings,
        total:          totalSecondary
      },
      totalAllInDelta,
      totalAllInRoiPct,

      // ── Legacy (used by other page components) ────────────────────────────────
      savingsPerUnit:   { label: 'Net savings per m³', value: netSavingsPerM3 },
      cementSaved:      totalCementBags,
      co2Reduced:       co2AvoidedKg,
      strengthIncrease: targetStrength > baseGrade
        ? `+${Math.round(((targetStrength - baseGrade) / baseGrade) * 100)}%`
        : '+45%',
      waterResistance: '+30-45%',
      summary: [
        { label: 'Base Mix',  value: `M${baseGrade} + Graphacrete` },
        { label: 'Achieves',  value: `M${targetStrength} Performance` },
        { label: netSavingsPerM3 > 0 ? 'Net Savings' : 'Quality Premium',
          value: `₹${Math.abs(netSavingsPerM3)}/m³` }
      ]
    };
  },

  impactMetrics: [
    {
      key: 'cementSaved',
      label: 'Cement Saved',
      unit: 'bags',
      trend: 'down',
      description: '15–20% cement reduction (NABL certified)'
    },
    {
      key: 'co2Avoided',
      label: 'CO₂ Emissions Avoided',
      unit: 'kg',
      trend: 'down',
      description: 'Reduced carbon footprint'
    },
    {
      key: 'strengthIncrease',
      label: 'Strength Gain',
      unit: '',
      trend: 'up',
      description: '40–50% compressive strength increase'
    },
    {
      key: 'waterResistance',
      label: 'Water Resistance',
      unit: '',
      trend: 'up',
      description: '30–45% permeability reduction'
    }
  ]
};

// How It Works Configuration
export const howItWorksSteps = [
  {
    title: 'Dispersion',
    description: 'Proprietary graphene nano-platelets uniformly dispersed in water-based medium for easy mixing with concrete.',
    duration: '5-10 minutes',
    icon: Package
  },
  {
    title: 'Mixing',
    description: 'Add Graphacrete to concrete mix at optimal dosage (0.05-0.10% by weight of cement) during standard batching process.',
    duration: 'Standard mix time',
    icon: Sparkles
  },
  {
    title: 'Nano-Reinforcement',
    description: 'Graphene platelets fill micro-voids and create dense nano-mesh network within cement matrix, enhancing mechanical properties.',
    duration: 'During curing',
    icon: Shield
  },
  {
    title: 'Superior Performance',
    description: 'Achieve 40-50% strength gain, superior crack resistance, and enhanced durability with reduced cement content.',
    duration: '28 days curing',
    icon: TrendingUp
  }
];

// 30-Day Performance Pilot
export const pilotProgramData = {
  productName: 'Graphacrete',
  pilotDetails: [
    {
      title: 'Pilot Quantity Supply',
      description: '100-500L Graphacrete for trial concrete batches'
    },
    {
      title: 'Technical Training',
      description: 'On-site training for mixing and application procedures'
    },
    {
      title: 'Testing Support',
      description: 'Guidance on cube preparation and strength testing protocols'
    },
    {
      title: 'Performance Monitoring',
      description: 'Weekly check-ins and data collection support'
    },
    {
      title: 'Comprehensive Report',
      description: 'Detailed analysis of performance vs. control samples'
    }
  ],
  benefits: [
    {
      title: 'Zero Risk Trial',
      description: 'Test in real conditions before committing',
      icon: Shield
    },
    {
      title: 'Proven Results',
      description: 'Validate 40-50% strength gain in your mix',
      icon: TestTube
    },
    {
      title: 'Cost Verification',
      description: 'Confirm cement savings and ROI projections',
      icon: TrendingUp
    }
  ],
  pricing: {
    cost: 'From ₹25,000',
    description: 'Pilot program including technical support',
    note: '* Cost adjustable based on project scale and duration'
  }
};

// Market Opportunity Analyzer Data
export const marketOpportunityData = {
  productName: 'Graphacrete',
  marketData: {
    tamSize: '₹50,000 Cr',
    cagr: '12% CAGR',
    targetCustomers: '10,000+',
    marketShare: '2-5%'
  },
  industries: [
    {
      id: 'infrastructure',
      name: 'Infrastructure',
      description: 'Roads, highways, bridges, and large-scale civil infrastructure projects requiring high-strength, durable concrete.',
      keyPoints: [
        'Government infrastructure spend: ₹10+ lakh crore annually',
        'Growing demand for high-performance concrete',
        'Sustainability mandates driving adoption'
      ],
      marketSize: '₹25,000 Cr',
      revenuePotential: '₹500-1,000 Cr',
      growthRate: '15% CAGR'
    },
    {
      id: 'highrise',
      name: 'High-Rise Construction',
      description: 'Premium residential and commercial towers requiring superior strength and reduced structural weight.',
      keyPoints: [
        'Metro cities adding 100+ high-rises annually',
        'Weight reduction enables taller structures',
        'Premium segment willing to pay for quality'
      ],
      marketSize: '₹15,000 Cr',
      revenuePotential: '₹300-600 Cr',
      growthRate: '18% CAGR'
    },
    {
      id: 'precast',
      name: 'Precast Manufacturing',
      description: 'Precast concrete manufacturers producing structural elements, panels, and specialized components.',
      keyPoints: [
        'Growing precast market in India',
        'Quality differentiation opportunity',
        'Reduced cement costs improve margins'
      ],
      marketSize: '₹8,000 Cr',
      revenuePotential: '₹150-300 Cr',
      growthRate: '20% CAGR'
    }
  ],
  growthMetrics: [
    {
      title: 'Urbanization',
      description: 'Rapid urban growth driving construction demand',
      value: '40% urban by 2030'
    },
    {
      title: 'Infrastructure Push',
      description: 'Government infrastructure investment',
      value: '₹111 lakh Cr by 2025'
    },
    {
      title: 'Sustainability Focus',
      description: 'Carbon reduction mandates',
      value: 'Net Zero 2070'
    }
  ]
};

// TCO Analysis Data
export const tcoAnalysisData = {
  productName: 'Graphacrete',
  timeframe: '5 years',
  traditionalSolution: {
    breakdown: {
      'Material Cost': 850000,
      'Labor & Application': 120000,
      'Maintenance & Repairs': 180000,
      'Quality Control': 50000
    },
    total: 1200000
  },
  productSolution: {
    breakdown: {
      'Material Cost (with Graphacrete)': 650000,
      'Labor & Application': 120000,
      'Maintenance & Repairs': 80000,
      'Quality Control': 50000
    },
    total: 900000,
    paybackPeriod: '12-18 months'
  },
  breakdown: [
    {
      category: 'Cement Cost',
      description: '15-20% cement reduction',
      traditional: 400000,
      withProduct: 320000
    },
    {
      category: 'Graphacrete Additive',
      description: 'Nano-platelet dosage',
      traditional: 0,
      withProduct: 47000
    },
    {
      category: 'Maintenance',
      description: 'Reduced due to superior durability',
      traditional: 180000,
      withProduct: 80000
    },
    {
      category: 'Rework & Repairs',
      description: 'Lower failure rates',
      traditional: 120000,
      withProduct: 40000
    }
  ]
};

// Long-Term Savings Calculator Data
export const longTermSavingsData = {
  productName: 'Graphacrete',
  savingsPerUnit: {
    calculation: (volume) => 430 // ₹430 per m³ net savings
  },
  volumeOptions: {
    label: 'Annual Concrete Volume',
    min: 500,
    max: 100000,
    step: 500,
    unit: 'm³',
    default: 10000
  }
};

// Environmental Impact Data
export const environmentalImpactData = {
  productName: 'Graphacrete',
  impacts: [
    { type: 'carbon', value: '15-20%', label: 'CO₂ Reduction' },
    { type: 'cement', value: '15-20%', label: 'Cement Saved' },
    { type: 'water', value: '30-45%', label: 'Permeability Reduction' },
    { type: 'waste', value: '25%', label: 'Less Material Waste' }
  ],
  carbonCredits: {
    value: 'Eligible',
    description: 'Cement reduction qualifies for carbon credit programs'
  }
};

// Certifications & Quality Data
export const certificationsData = {
  productName: 'Graphacrete',
  certifications: [
    {
      name: 'NABL Accredited',
      description: 'Global Lab, Bhubaneswar — independent third-party testing',
      certNumber: 'BNR-1127-TR-790403'
    },
    {
      name: 'NABL Accredited',
      description: 'M-20 without Graphene (control mix)',
      certNumber: 'BNR-1140-TR-793018'
    },
    {
      name: 'NABL Accredited',
      description: 'M-30 Graphene admixture — R&D mix',
      certNumber: 'BNR-1101-TR-823120'
    }
  ],
  testingStandards: [
    {
      name: 'Concrete Mix Design',
      description: 'Standard method for concrete mix proportioning',
      code: 'IS 10262 : 2019'
    },
    {
      name: 'Plain & Reinforced Concrete',
      description: 'Code of practice for structural concrete',
      code: 'IS 456 : 2000 (RA 2021 Amd-5)'
    },
    {
      name: 'Accelerated Curing Test',
      description: 'ACT by boiling water method — equivalent 28-day prediction',
      code: 'IS 9013 : 1978 (RA 2013)'
    },
    {
      name: 'Coarse & Fine Aggregates',
      description: 'Specification for aggregates used in concrete',
      code: 'IS 383 : 2016'
    },
    {
      name: 'Cube Compression Testing',
      description: 'Method of tests for strength of concrete',
      code: 'IS 516 Part-1 Sec-1'
    }
  ],
  qualityMetrics: [
    { value: '29 MPa', label: 'M-20 28-Day (actual)' },
    { value: '49.5 MPa', label: 'M-30 ACT Equiv.' },
    { value: '10.8%', label: 'Cement Saved (M-20)' },
    { value: '0.37', label: 'W/C Ratio (M-30)' }
  ]
};

// Trial to Deployment Data
export const trialToDeploymentData = {
  productName: 'Graphacrete',
  stages: [
    {
      type: 'trial',
      title: 'Lab Trial',
      description: 'Small-scale testing with control samples to validate strength gains',
      duration: '2-3 weeks',
      investment: 'From ₹25,000',
      details: [
        '10-20 cube samples',
        'Technical training provided',
        'Strength testing at 7, 14, 28 days'
      ]
    },
    {
      type: 'validation',
      title: 'Field Validation',
      description: 'On-site pilot batch with real project conditions',
      duration: '4-6 weeks',
      investment: '₹1-2 lakhs',
      details: [
        '100-500L pilot quantity',
        'Application support on-site',
        'Performance monitoring'
      ]
    },
    {
      type: 'scale',
      title: 'Scaled Deployment',
      description: 'Partial project deployment with established protocols',
      duration: '2-3 months',
      investment: '₹5-10 lakhs',
      details: [
        'Multiple batches/structures',
        'Quality assurance process',
        'Cost-benefit validation'
      ]
    },
    {
      type: 'deployment',
      title: 'Full Production',
      description: 'Complete integration into standard operations',
      duration: 'Ongoing',
      investment: 'Negotiated pricing',
      details: [
        'Bulk supply agreements',
        'Long-term technical support',
        'Performance guarantees'
      ]
    }
  ]
};

// Impact Map Data
export const impactMapData = {
  productName: 'Graphacrete',
  nationalData: {
    locations: [
      { city: 'Ahmedabad', state: 'Gujarat', projects: 12 },
      { city: 'Mumbai', state: 'Maharashtra', projects: 8 },
      { city: 'Bangalore', state: 'Karnataka', projects: 6 },
      { city: 'Hyderabad', state: 'Telangana', projects: 5 },
      { city: 'Delhi NCR', state: 'Delhi', projects: 7 },
      { city: 'Pune', state: 'Maharashtra', projects: 4 }
    ],
    marketPenetration: '0.5%',
    penetrationDescription: 'Early adoption in metro markets',
    partnerships: '25+',
    partnershipDescription: 'Active construction partners',
    reach: '6 states',
    reachDescription: 'Expanding across India'
  },
  internationalData: {
    locations: [
      { city: 'Dubai', state: 'UAE', projects: 3 },
      { city: 'Singapore', state: 'Singapore', projects: 2 }
    ],
    marketPenetration: '0.1%',
    penetrationDescription: 'International trials underway',
    partnerships: '5+',
    partnershipDescription: 'Strategic international partners',
    reach: '2 countries',
    reachDescription: 'Initial international presence'
  },
  stats: [
    { value: '42+', label: 'Active Projects' },
    { value: '50,000+', label: 'Cubic Meters' },
    { value: '8', label: 'States & Countries' },
    { value: '30+', label: 'Partner Companies' }
  ]
};

// Product Data Sheet
export const dataSheetData = {
  productName: 'Graphacrete',
  specifications: [
    { parameter: 'Purity', value: '~99%', testMethod: 'XRD Analysis' },
    { parameter: 'Thickness (Z)', value: '5-10 nm', testMethod: 'TEM Imaging' },
    { parameter: 'Lateral Size (X&Y)', value: '~20 µm', testMethod: 'SEM Analysis' },
    { parameter: 'Surface Area', value: '200 m²/g', testMethod: 'BET Method' },
    { parameter: 'Bulk Density', value: '0.12 g/cm³', testMethod: 'ASTM D1895' },
    { parameter: 'Dosage', value: '0.05-0.10%', testMethod: 'By cement weight' },
    { parameter: 'Form', value: 'Liquid dispersion', testMethod: 'Visual' },
    { parameter: 'Storage', value: '6-12 months', testMethod: 'Shelf life test' }
  ],
  documents: [
    {
      title: 'Technical Data Sheet',
      description: 'Complete specifications and application guidelines',
      fileSize: '2.4 MB',
      format: 'PDF',
      filename: 'Graphacrete-TDS.pdf',
      url: '#'
    },
    {
      title: 'NABL Test Report',
      description: 'Certified lab test results for strength and durability',
      fileSize: '5.8 MB',
      format: 'PDF',
      filename: 'Graphacrete-NABL-Report.pdf',
      url: '#'
    },
    {
      title: 'Safety Data Sheet (SDS)',
      description: 'Material safety and handling information',
      fileSize: '1.2 MB',
      format: 'PDF',
      filename: 'Graphacrete-SDS.pdf',
      url: '#'
    },
    {
      title: 'Application Guide',
      description: 'Step-by-step mixing and application procedures',
      fileSize: '3.1 MB',
      format: 'PDF',
      filename: 'Graphacrete-Application-Guide.pdf',
      url: '#'
    }
  ]
};

// Industry Solutions Data
export const industrySolutionsData = {
  productName: 'Graphacrete',
  industries: [
    {
      name: 'Infrastructure',
      icon: 'construction',
      description: 'High-performance concrete for roads, bridges, highways, and large-scale infrastructure demanding superior strength and durability.',
      useCases: [
        {
          title: 'Highway Construction',
          description: 'Enhanced load-bearing capacity and reduced maintenance'
        },
        {
          title: 'Bridge Decks',
          description: 'Superior crack resistance and longer service life'
        },
        {
          title: 'Tunnels',
          description: 'Improved water resistance and structural integrity'
        }
      ],
      benefits: [
        { title: '40-50% Higher Strength', description: 'Better load capacity' },
        { title: '30-45% Water Resistance', description: 'Enhanced durability' },
        { title: '15-20% Cement Savings', description: 'Cost and carbon reduction' }
      ],
      metrics: [
        { value: '+50%', label: 'Strength' },
        { value: '15-20%', label: 'Cost Savings' },
        { value: '25+ years', label: 'Service Life' },
        { value: '-20%', label: 'Maintenance' }
      ],
      caseStudy: {
        preview: 'Major highway project achieved M50 strength with M30 mix, saving ₹2.5 Cr'
      }
    },
    {
      name: 'High-Rise Buildings',
      icon: 'construction',
      description: 'Premium residential and commercial towers requiring reduced weight with superior structural performance.',
      useCases: [
        {
          title: 'Structural Columns',
          description: 'Higher strength enables slender designs'
        },
        {
          title: 'Slabs & Beams',
          description: 'Weight reduction without compromising strength'
        },
        {
          title: 'Foundation',
          description: 'Enhanced load transfer and durability'
        }
      ],
      benefits: [
        { title: 'Reduced Dead Load', description: 'Enables taller structures' },
        { title: 'Faster Construction', description: 'Higher early strength' },
        { title: 'Premium Quality', description: 'Market differentiation' }
      ],
      metrics: [
        { value: '+45%', label: 'Strength' },
        { value: '-12%', label: 'Weight' },
        { value: '+30%', label: 'Floor Space' },
        { value: '₹500/m³', label: 'Savings' }
      ]
    },
    {
      name: 'Precast Manufacturing',
      icon: 'manufacturing',
      description: 'Precast concrete products requiring consistent quality, reduced curing time, and cost optimization.',
      useCases: [
        {
          title: 'Structural Elements',
          description: 'Beams, columns, walls with enhanced properties'
        },
        {
          title: 'Architectural Panels',
          description: 'Thinner panels with superior finish'
        },
        {
          title: 'Paving Blocks',
          description: 'Higher durability and wear resistance'
        }
      ],
      benefits: [
        { title: 'Quality Consistency', description: 'Batch-to-batch uniformity' },
        { title: 'Faster Demolding', description: 'Higher early strength' },
        { title: 'Product Differentiation', description: 'Premium quality positioning' }
      ],
      metrics: [
        { value: '+48%', label: 'Strength' },
        { value: '-25%', label: 'Curing Time' },
        { value: '+35%', label: 'Throughput' },
        { value: '18%', label: 'Margin Gain' }
      ]
    },
    {
      name: 'Marine Structures',
      icon: 'construction',
      description: 'Coastal and underwater structures requiring extreme durability and corrosion resistance.',
      useCases: [
        {
          title: 'Ports & Jetties',
          description: 'Saltwater resistance and superior strength'
        },
        {
          title: 'Offshore Platforms',
          description: 'Enhanced durability in harsh environments'
        },
        {
          title: 'Seawalls',
          description: 'Superior water resistance and longevity'
        }
      ],
      benefits: [
        { title: 'Superior Permeability', description: '30-45% water resistance' },
        { title: 'Corrosion Protection', description: 'Denser microstructure' },
        { title: 'Extended Life', description: '2-3× longer service life' }
      ],
      metrics: [
        { value: '+40%', label: 'Durability' },
        { value: '-45%', label: 'Permeability' },
        { value: '50+ years', label: 'Life Span' },
        { value: '70%', label: 'Maintenance ↓' }
      ]
    },
    {
      name: 'Ready-Mix Concrete',
      icon: 'manufacturing',
      description: 'RMC suppliers seeking product differentiation and performance enhancement.',
      useCases: [
        {
          title: 'Premium Mix Design',
          description: 'High-performance concrete offerings'
        },
        {
          title: 'Special Applications',
          description: 'Custom solutions for demanding projects'
        },
        {
          title: 'Sustainable Concrete',
          description: 'Low-carbon, high-performance mixes'
        }
      ],
      benefits: [
        { title: 'Product Differentiation', description: 'Premium pricing opportunity' },
        { title: 'Customer Retention', description: 'Superior performance' },
        { title: 'Sustainability Edge', description: 'Green building compliance' }
      ],
      metrics: [
        { value: '+25%', label: 'Premium' },
        { value: '40+', label: 'New Customers' },
        { value: '95%', label: 'Retention' },
        { value: '₹800/m³', label: 'Value Add' }
      ]
    },
    {
      name: 'Repair & Rehabilitation',
      icon: 'construction',
      description: 'Structural repairs and retrofitting requiring high bond strength and durability.',
      useCases: [
        {
          title: 'Structural Repairs',
          description: 'Enhanced bond and superior strength'
        },
        {
          title: 'Surface Protection',
          description: 'Durable protective coatings'
        },
        {
          title: 'Crack Filling',
          description: 'Superior micro-crack control'
        }
      ],
      benefits: [
        { title: 'Stronger Bond', description: 'Better adhesion to substrate' },
        { title: 'Longer Lasting', description: 'Reduced re-repair frequency' },
        { title: 'Cost Effective', description: 'Less material, better results' }
      ],
      metrics: [
        { value: '+55%', label: 'Bond Strength' },
        { value: '3-5 years', label: 'Repair Life' },
        { value: '-30%', label: 'Material Cost' },
        { value: '90%', label: 'Success Rate' }
      ]
    }
  ]
};

// Science Explained Data
export const scienceExplainedData = {
  productName: 'Graphacrete',
  sections: [
    {
      icon: 'mechanism',
      title: 'Mechanism of Action',
      summary: 'How graphene nano-platelets enhance concrete performance at the molecular level',
      content: [
        'Graphacrete introduces graphene nano-platelets (GNPs) into the cement matrix. These atomically thin, two-dimensional carbon structures possess extraordinary mechanical properties: 200× stronger than steel, yet flexible and only nanometers thick.',
        'During hydration, GNPs uniformly disperse throughout the cement paste, creating a nano-reinforcement network. This network bridges micro-cracks, densifies the microstructure, and creates additional nucleation sites for calcium silicate hydrate (C-S-H) formation.',
        'The result is a denser, stronger cement matrix with superior mechanical properties and enhanced durability characteristics.'
      ],
      keyPoints: [
        {
          title: 'Nano-Bridging Effect',
          description: 'GNPs bridge micro-cracks, preventing propagation and failure'
        },
        {
          title: 'Nucleation Enhancement',
          description: 'More C-S-H formation sites lead to denser microstructure'
        },
        {
          title: 'Pore Refinement',
          description: 'Reduction in porosity improves water resistance'
        }
      ],
      technicalData: {
        'GNP Thickness': '3-10 graphene layers',
        'Dispersion Quality': '>95% uniformity',
        'Dosage': '0.05-0.10% by cement weight'
      }
    },
    {
      icon: 'structure',
      title: 'Microstructural Enhancement',
      summary: 'Changes in concrete microstructure that lead to superior performance',
      content: [
        'Traditional concrete has inherent micro-voids and weak transition zones between cement paste and aggregates. These are failure initiation points under load.',
        'Graphacrete\'s GNPs fill these micro-voids and strengthen the interfacial transition zone (ITZ). SEM imaging shows a 40% reduction in porosity and significantly denser C-S-H gel formation.',
        'This microstructural densification translates directly into measurable performance gains: higher compressive and flexural strength, reduced permeability, and superior crack resistance.'
      ],
      keyPoints: [
        {
          title: 'ITZ Strengthening',
          description: 'Strongest bond between cement and aggregate'
        },
        {
          title: 'Porosity Reduction',
          description: '30-40% fewer micro-voids in the matrix'
        },
        {
          title: 'Crack Path Deflection',
          description: 'GNPs deflect cracks, dissipating energy'
        }
      ],
      technicalData: {
        'Porosity Reduction': '30-40%',
        'ITZ Enhancement': 'Up to 50%',
        'C-S-H Density': '+25%'
      }
    },
    {
      icon: 'properties',
      title: 'Enhanced Properties',
      summary: 'Measurable improvements in concrete performance characteristics',
      content: [
        'Graphacrete delivers 40-50% compressive strength gains compared to control mixes. A standard M30 mix with Graphacrete achieves M50-equivalent strength, enabling significant cement reduction while maintaining performance.',
        'Water permeability drops by 30-45%, dramatically improving durability in aggressive environments. This is critical for marine structures, underground construction, and infrastructure exposed to moisture.',
        'Flexural strength increases by 35-40%, improving crack resistance under dynamic loads. This is particularly valuable in pavements, bridge decks, and industrial floors.'
      ],
      keyPoints: [
        {
          title: 'Compressive Strength',
          description: '40-50% increase validated by NABL testing'
        },
        {
          title: 'Water Resistance',
          description: '30-45% permeability reduction'
        },
        {
          title: 'Flexural Performance',
          description: '35-40% higher flexural strength'
        },
        {
          title: 'Durability',
          description: 'Extended service life in harsh conditions'
        }
      ],
      technicalData: {
        'Compressive Gain': '40-50% @ 28 days',
        'Permeability': '-35% avg',
        'Flexural Gain': '+38% avg',
        'Durability Index': '+45%'
      }
    },
    {
      icon: 'science',
      title: 'Scientific Validation',
      summary: 'Independent testing and research backing Graphacrete technology',
      content: [
        'All Graphacrete performance claims are validated through NABL-certified laboratory testing following IS and ASTM standards. Testing includes compressive strength (IS 516), water permeability (IS 3085), and durability assessments.',
        'Microstructural analysis using Scanning Electron Microscopy (SEM), Transmission Electron Microscopy (TEM), and X-Ray Diffraction (XRD) confirms the mechanism of GNP-enhanced concrete.',
        'Field trials across 40+ projects provide real-world validation of lab results, with consistent 40-50% strength gains and superior long-term durability.'
      ],
      keyPoints: [
        {
          title: 'NABL Certified',
          description: 'All testing at accredited labs'
        },
        {
          title: 'Field Validated',
          description: '40+ successful projects'
        },
        {
          title: 'Peer Reviewed',
          description: 'Published research papers'
        }
      ],
      technicalData: {
        'NABL Reports': 'BNR-1127 · BNR-1140 · BNR-1101',
        'M-20 Actual 28-Day': '29.0 MPa avg (3 cubes)',
        'M-30 ACT Equiv.': '49.5 MPa avg (3 cubes)'
      }
    }
  ]
};

// Competitive Advantage Matrix Data
// Source: Graphacrete-Brochure-01.md (Page 2)
export const competitiveMatrixData = {
  productName: 'Graphacrete',
  competitors: ['UltraTech Admixture', 'Sika Admixture', 'PureGraph'],
  metrics: [
    {
      metric: 'Cement Saving',
      productValue: '15-20%',
      competitorValues: ['0%', '0%', '3-5%']
    },
    {
      metric: 'Water Resistance',
      productValue: '30-45%',
      competitorValues: ['<10%', '10-20%', '20-30%']
    },
    {
      metric: 'Dosage Required',
      productValue: '0.05-0.10%',
      competitorValues: ['0.2-1.0%', '0.2-1.0%', '0.2-0.5%']
    },
    {
      metric: 'Compressive Strength Gain',
      productValue: '40-50%',
      competitorValues: ['5-15%', '8-15%', '10-25%']
    },
    {
      metric: 'Micro-Crack Control',
      productValue: 'Excellent',
      competitorValues: ['Low', 'Medium', 'Medium']
    }
  ],
  differentiators: [
    {
      title: 'Highest Performance',
      description: 'Best strength gain (40-50%) at lowest dosage (0.05-0.10%) in the industry'
    },
    {
      title: 'Complete Solution',
      description: 'Only product offering strength + durability + waterproofing + cement reduction'
    },
    {
      title: 'Best Value',
      description: 'Superior cost-to-performance ratio with environmental benefits'
    }
  ]
};
