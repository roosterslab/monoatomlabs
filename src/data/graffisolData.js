import { Sun, Zap, Droplet, Shield, TrendingUp, Factory, Wind, Sparkles } from 'lucide-react';

/**
 * Graffisol Product Infographic Data
 * Solar panel coating - all interactive component data
 */

// ROI Calculator Configuration
// Two always-visible methods: ALL-IN (full return) + CONSERVATIVE (power boost only)
export const roiCalculatorConfig = {
  productName: 'Graffisol',

  // Primary inputs — always visible
  defaultInputs: {
    systemSize: {
      label: 'System Size',
      type: 'logslider',   // logarithmic 1–10,000 kW
      min: 1,
      max: 10000,
      unit: 'kW',
      default: 100
    },
    electricityRate: {
      label: 'Electricity Rate',
      type: 'slider',
      min: 4,
      max: 12,
      step: 0.5,
      unit: '₹/kWh',
      default: 7,
      note: 'Commercial/industrial rate ₹7/kWh. Adjust for your tariff.'
    },
    applicationCostPerKw: {
      label: 'Application Cost',
      type: 'slider',
      min: 1000,
      max: 3000,
      step: 100,
      unit: '₹/kW',
      default: 1800,
      note: 'Installed cost per kW of panel capacity coated.'
    },
    outputGainPct: {
      label: 'Output Gain',
      type: 'slider',
      min: 7,
      max: 12,
      step: 1,
      unit: '%',
      default: 10,
      note: 'Field-validated range: 7–12%. Conservative default = 10%.'
    }
  },

  // Secondary inputs — lifecycle accordion
  secondaryInputs: {
    analysisPeriod: {
      label: 'Analysis Period',
      type: 'buttongroup',
      default: 20,
      options: [
        { value: 10, label: '10 yr' },
        { value: 20, label: '20 yr' },
        { value: 25, label: '25 yr' }
      ]
    },
    soilingProfile: {
      label: 'Soiling Environment',
      type: 'buttongroup',
      default: 'moderate',
      options: [
        { value: 'low',      label: 'Low'      },
        { value: 'moderate', label: 'Moderate' },
        { value: 'high',     label: 'High'     }
      ]
    }
  },

  calculations: (inputs) => {
    const {
      systemSize         = 100,
      electricityRate    = 7,
      applicationCostPerKw = 1800,
      outputGainPct      = 10,    // 7–12%; 10% = conservative field-validated default
      soilingProfile     = 'moderate',
      analysisPeriod     = 20
    } = inputs;

    /**
     * Source: Graffisol field trials & brochure
     * - Power output gain: 7–12% (field-validated)
     * - Operating temp reduction: 5–6°C
     * - Soiling loss baseline: 8–25% depending on environment
     * - Soiling recovery rate: 35% (30–40% range, conservative mid-point)
     * - Maintenance saving: ₹200/kW/yr (reduced cleaning cycles)
     * - Baseline generation: 1,500 kWh/kW/yr (India average, typical RMC assumption)
     * - CO₂ factor: 0.82 kg/kWh (India grid, CEA 2023)
     */
    const baselineGenPerKw  = 1500;                      // kWh/kW/yr
    const soilingLossMap    = { low: 0.08, moderate: 0.15, high: 0.25 };
    const soilingLoss       = soilingLossMap[soilingProfile] || 0.15;
    const soilingRecovery   = 0.35;                      // 35% of soiling loss recovered
    const maintenancePerKw  = 200;                       // ₹/kW/yr constant
    const co2Factor         = 0.82;                      // kg CO₂/kWh

    // ── Energy calculations ─────────────────────────────────────────────────
    const baselineAnnualKwh    = systemSize * baselineGenPerKw;
    const powerBoostKwh        = baselineAnnualKwh * (outputGainPct / 100);
    const soilingRecoveryKwh   = baselineAnnualKwh * soilingLoss * soilingRecovery;
    const totalAdditionalKwh   = Math.round(powerBoostKwh + soilingRecoveryKwh);

    // ── Per-kW annual revenue ───────────────────────────────────────────────
    const baselineRevenuePerKw    = Math.round(baselineGenPerKw * electricityRate);
    const powerBoostRevenuePerKw  = Math.round(baselineGenPerKw * (outputGainPct / 100) * electricityRate);
    const soilingRevenuePerKw     = Math.round(baselineGenPerKw * soilingLoss * soilingRecovery * electricityRate);
    // maintenancePerKw = 200 (constant above)
    const fullReturnPerKw         = powerBoostRevenuePerKw + soilingRevenuePerKw + maintenancePerKw;

    // ── Method A: Power-boost only (CONSERVATIVE — direct output gain, no soiling) ──
    // At 10%/₹7: 1500 × 0.10 × 7 = ₹1,050/kW/yr
    const powerOnlySavingsPerKw  = powerBoostRevenuePerKw;
    const powerOnlySavingsTotal  = Math.round(powerOnlySavingsPerKw * systemSize);

    // ── Method B: Full annual return (ALL-IN — power + soiling + maintenance) ─
    // At 10%/₹7/moderate: 1,050 + 788 + 200 = ₹2,038/kW/yr (approx)
    const fullReturnTotal  = Math.round(fullReturnPerKw * systemSize);

    // ── Investment & ROI ────────────────────────────────────────────────────
    const applicationCostTotal = Math.round(applicationCostPerKw * systemSize);
    // Annual ROI on full-return basis
    const roiPercentage  = fullReturnTotal > 0 && applicationCostTotal > 0
      ? Math.round((fullReturnTotal / applicationCostTotal) * 100)
      : null;
    const paybackMonths  = fullReturnTotal > 0
      ? Math.round((applicationCostTotal / fullReturnTotal) * 12)
      : null;
    const paybackLabel   = paybackMonths ? `${paybackMonths} months` : '—';

    // ── Marketing label helpers ─────────────────────────────────────────────
    const powerOnlyLabel  = 'Power Boost';
    const fullReturnLabel = 'Full Annual Return';

    // ── CO₂ ────────────────────────────────────────────────────────────────
    const co2AvoidedKgPerYear = Math.round(totalAdditionalKwh * co2Factor);

    // ── Lifecycle (secondary) ───────────────────────────────────────────────
    // Panel life extension from reduced thermal stress: ~2% of 25-yr replacement value
    const panelReplCostPerKw   = applicationCostPerKw * 4;  // ~4× coating cost as panel cost proxy
    const lifeExtensionValue   = Math.round(systemSize * panelReplCostPerKw * 0.02);
    const totalSecondary       = lifeExtensionValue;

    // ── Projection ──────────────────────────────────────────────────────────
    const netProfitProjected = Math.round(fullReturnTotal * analysisPeriod - applicationCostTotal);

    return {
      // ── Core ─────────────────────────────────────────────────────────────
      systemSize,
      analysisPeriod,
      baselineAnnualKwh:      Math.round(baselineAnnualKwh),
      baselineRevenuePerKw,
      totalAdditionalKwh,

      // ── Per-kW breakdown ─────────────────────────────────────────────────
      applicationCostPerKw,
      powerBoostRevenuePerKw,
      soilingRevenuePerKw,
      maintenancePerKw,
      fullReturnPerKw,

      // ── Savings — BOTH methods always returned, always shown ──────────────
      powerOnlySavingsPerKw,  // ₹/kW/yr power-only (conservative)
      powerOnlySavingsTotal,  // ₹ project annual
      powerOnlyLabel,         // 'Power Boost'

      fullReturnPerKw,        // ₹/kW/yr all-in (was fullReturnPerKw)
      fullReturnTotal,        // ₹ project annual
      fullReturnLabel,        // 'Full Annual Return'

      // ── Investment & ROI ──────────────────────────────────────────────────
      applicationCostTotal,
      roiPercentage,          // % annual ROI (null if not calculable)
      paybackLabel,           // 'X months'
      paybackMonths,          // number | null

      // ── CO₂ ──────────────────────────────────────────────────────────────
      co2AvoidedKgPerYear,
      co2AvoidedTPerYear: parseFloat((co2AvoidedKgPerYear / 1000).toFixed(2)),

      // ── Lifecycle (estimates) ─────────────────────────────────────────────
      lifecycle: {
        lifeExtension: lifeExtensionValue,
        total:         totalSecondary
      },
      netProfitProjected,
      roiMultiple: netProfitProjected > 0 && applicationCostTotal > 0
        ? parseFloat((netProfitProjected / applicationCostTotal).toFixed(1))
        : null,

      // ── Exposed assumptions (for UI display) ─────────────────────────────
      baselineGenPerKw,                                    // 1,500 kWh/kW/yr
      soilingRecoveryPct: Math.round(soilingRecovery * 100), // 35
      temperatureReductionC: '5-6',                        // °C reduction claim

      // ── Product volume requirement ────────────────────────────────────────
      // 1 kW ≈ 3.3 panels × 1.6 m²/panel ≈ 5.3 m² of panel area
      // Application rate: 50–80 ml/m² (TDS mid-point = 65 ml/m²)
      panelAreaM2PerKw:   5.3,
      applicationRateMlM2: 65,
      productLitresTotal: parseFloat(
        ((5.3 * systemSize * 65) / 1000).toFixed(1)
      ),

      // ── Product cost split: additive (product-only) vs. installation service ─
      // graffisolProductPricePerLitre: estimated product-only price (₹/L)
      // 0.3445 L/kW = 5.3 m²/kW × 65 ml/m² / 1000
      graffisolProductPricePerLitre: 2500,
      additiveCostPerKw:  Math.round((5.3 * 65 / 1000) * 2500),           // ₹861/kW
      additiveCostTotal:  Math.round((5.3 * systemSize * 65 / 1000) * 2500),
      serviceCostPerKw:   Math.max(0, applicationCostPerKw - Math.round((5.3 * 65 / 1000) * 2500)),
      serviceCostTotal:   Math.max(0, applicationCostTotal - Math.round((5.3 * systemSize * 65 / 1000) * 2500)),

      // ── Legacy aliases (other page components) ────────────────────────────
      additionalEnergy:    totalAdditionalKwh,
      temperatureReduction: '5-6°C',
      maintenanceSavings:  Math.round(systemSize * maintenancePerKw),
      savingsPerUnit: {
        label: 'Full Annual Return',
        value: fullReturnTotal,
        description: `₹${fullReturnPerKw.toLocaleString('en-IN')}/kW annually`
      },
      summary: [
        { label: 'Extra Energy',   value: `${totalAdditionalKwh.toLocaleString()} kWh/yr` },
        { label: 'Temp Reduction', value: '5-6°C' },
        { label: 'Annual ROI',     value: roiPercentage ? `${roiPercentage}%` : '—' }
      ]
    };
  },

  impactMetrics: [
    { key: 'additionalEnergy',    label: 'Extra Energy',     unit: 'kWh/year', trend: 'up',   description: '10-12% power output gain' },
    { key: 'temperatureReduction', label: 'Cooling Effect',  unit: '',         trend: 'down', description: 'Operating temperature reduction' },
    { key: 'maintenanceSavings',  label: 'Maintenance Saved', unit: '₹/year',  trend: 'down', description: 'Reduced cleaning frequency' }
  ]
};

// How It Works Configuration
export const howItWorksSteps = [
  {
    title: 'Surface Preparation',
    description: 'Clean solar panels thoroughly to remove dirt, dust, and residues. Ensure surface is dry and ready for application.',
    duration: '1-2 hours',
    icon: Sparkles
  },
  {
    title: 'Coating Application',
    description: 'Apply Graffisol coating uniformly using spray or roller method. Thin, even layer ensures optimal performance.',
    duration: '2-3 hours',
    icon: Droplet
  },
  {
    title: 'Curing & Bonding',
    description: 'Graphene molecules bond to panel surface, creating ultra-thin protective layer with hydrophobic and anti-soiling properties.',
    duration: '4-6 hours',
    icon: Shield
  },
  {
    title: 'Enhanced Performance',
    description: 'Enjoy 10-12% power output increase, 5-6°C temperature reduction, and 30-40% less soiling loss for years.',
    duration: '3-5 years',
    icon: TrendingUp
  }
];

// 30-Day Performance Pilot
export const pilotProgramData = {
  productName: 'Graffisol',
  pilotDetails: [
    {
      title: 'Pilot Array Selection',
      description: 'Select representative panels for coating (minimum 10kW)'
    },
    {
      title: 'Pre-Application Baseline',
      description: '7 days monitoring to establish performance baseline'
    },
    {
      title: 'Professional Application',
      description: 'Our team applies Graffisol coating on-site'
    },
    {
      title: 'Performance Monitoring',
      description: 'Daily power output tracking vs. control panels'
    },
    {
      title: 'Comprehensive Report',
      description: 'Detailed analysis with ROI projections and recommendations'
    }
  ],
  benefits: [
    {
      title: 'Real-World Validation',
      description: 'Test in your actual operating conditions',
      icon: Shield
    },
    {
      title: 'Compare Live Data',
      description: 'Coated vs. uncoated panel comparison',
      icon: TrendingUp
    },
    {
      title: 'Verify ROI',
      description: 'Confirm energy gains and payback period',
      icon: Zap
    }
  ],
  pricing: {
    cost: 'From ₹18,000',
    description: 'Pilot for 10kW system including application',
    note: '* Scalable pricing for larger pilot systems'
  }
};

// Market Opportunity Analyzer Data
export const marketOpportunityData = {
  productName: 'Graffisol',
  marketData: {
    tamSize: '₹35,000 Cr',
    cagr: '20% CAGR',
    targetCustomers: '5,000+',
    marketShare: '1-3%'
  },
  industries: [
    {
      id: 'utility-scale',
      name: 'Utility-Scale Solar',
      description: 'Large solar farms (10MW+) where even small efficiency gains translate to massive revenue increases.',
      keyPoints: [
        'India adding 15-20 GW solar capacity annually',
        'Major focus on maximizing generation',
        'Performance optimization critical for PPAs'
      ],
      marketSize: '₹20,000 Cr',
      revenuePotential: '₹400-800 Cr',
      growthRate: '25% CAGR'
    },
    {
      id: 'commercial-rooftop',
      name: 'Commercial Rooftop',
      description: 'Industrial and commercial rooftop installations seeking maximum return on solar investment.',
      keyPoints: [
        'Growing C&I solar adoption',
        'High electricity costs justify premium solutions',
        'Limited space requires performance optimization'
      ],
      marketSize: '₹10,000 Cr',
      revenuePotential: '₹200-400 Cr',
      growthRate: '18% CAGR'
    },
    {
      id: 'floating-solar',
      name: 'Floating Solar',
      description: 'Emerging floating solar installations with unique soiling and cooling challenges.',
      keyPoints: [
        'Fast-growing segment in India',
        'Water vapor and soiling issues',
        'Cooling and anti-soiling benefits critical'
      ],
      marketSize: '₹3,000 Cr',
      revenuePotential: '₹60-120 Cr',
      growthRate: '30% CAGR'
    }
  ],
  growthMetrics: [
    {
      title: 'Solar Capacity Target',
      description: 'India solar capacity goal',
      value: '500 GW by 2030'
    },
    {
      title: 'Soiling Losses',
      description: 'Energy lost to dust and soiling',
      value: '15-25% annually'
    },
    {
      title: 'Temperature Impact',
      description: 'Efficiency loss from heat',
      value: '0.5%/°C above 25°C'
    }
  ]
};

// TCO Analysis Data
export const tcoAnalysisData = {
  productName: 'Graffisol',
  timeframe: '5 years',
  traditionalSolution: {
    breakdown: {
      'Regular Cleaning': 200000,
      'Soiling Losses': 450000,
      'Temperature Losses': 180000,
      'Panel Degradation': 120000
    },
    total: 950000
  },
  productSolution: {
    breakdown: {
      'Graffisol Application': 180000,
      'Reduced Cleaning': 80000,
      'Soiling Losses': 270000,
      'Temperature Losses': 90000
    },
    total: 620000,
    paybackPeriod: '18 months'
  },
  breakdown: [
    {
      category: 'Cleaning & Maintenance',
      description: 'Reduced cleaning frequency',
      traditional: 200000,
      withProduct: 80000
    },
    {
      category: 'Soiling Energy Loss',
      description: '30-40% soiling reduction',
      traditional: 450000,
      withProduct: 270000
    },
    {
      category: 'Temperature Derating',
      description: '5-6°C operating temp reduction',
      traditional: 180000,
      withProduct: 90000
    },
    {
      category: 'Graffisol Coating',
      description: 'One-time application cost',
      traditional: 0,
      withProduct: 180000
    }
  ],
  highlights: [
    { label: 'Cleaning Cost Reduction', value: '-60%', color: 'green' },
    { label: 'Energy Recovery', value: '+7.5%', color: 'blue' },
  ]
};

// Long-Term Savings Calculator Data
export const longTermSavingsData = {
  productName: 'Graffisol',
  savingsPerUnit: {
    calculation: (systemSize) => {
      // Approximate savings per kW per year
      const baseGeneration = 1500; // kWh/kW/year
      const gain = 0.10; // 10% gain
      const electricityRate = 7; // ₹/kWh
      const annualGain = baseGeneration * gain * electricityRate;
      const cleaningSavings = 200; // ₹/kW/year
      return Math.round(annualGain + cleaningSavings);
    }
  },
  volumeOptions: {
    label: 'Solar System Capacity',
    min: 10,
    max: 5000,
    step: 10,
    unit: 'kW',
    default: 100
  }
};

// Environmental Impact Data
export const environmentalImpactData = {
  productName: 'Graffisol',
  impacts: [
    { type: 'carbon', value: '10-12%', label: 'More Clean Energy' },
    { type: 'water', value: '60%', label: 'Water Saved' },
    { type: 'energy', value: '5-6°C', label: 'Cooler Panels' },
    { type: 'waste', value: '40%', label: 'Less Cleaning' }
  ],
  carbonCredits: {
    value: 'Eligible',
    description: 'Increased renewable energy generation qualifies for carbon credits'
  }
};

// Certifications & Quality Data
export const certificationsData = {
  productName: 'Graffisol',
  certifications: [
    {
      name: 'Field Validated',
      description: 'Performance validated in utility-scale installations',
      certNumber: 'FV-2024'
    },
    {
      name: 'Lab Tested',
      description: 'IEC 61215 compliant testing for solar applications',
      certNumber: 'IEC-61215'
    },
    {
      name: 'ISO 9001:2015',
      description: 'Quality management system certified',
      certNumber: 'ISO-9001'
    }
  ],
  testingStandards: [
    {
      name: 'Power Output Testing',
      description: 'Field testing vs. control panels under identical conditions',
      code: 'IEC 61724'
    },
    {
      name: 'Transmission Testing',
      description: 'Light transmission >98% verified',
      code: 'ASTM E903'
    },
    {
      name: 'Durability Testing',
      description: 'UV resistance and weathering tests',
      code: 'IEC 61215'
    },
    {
      name: 'Hydrophobicity Testing',
      description: 'Contact angle and self-cleaning properties',
      code: 'ASTM D7334'
    }
  ],
  qualityMetrics: [
    { value: '>98%', label: 'Light Transmission' },
    { value: '3-5 years', label: 'Durability' },
    { value: '10-12%', label: 'Output Gain' },
    { value: 'Field Proven', label: 'Validation' }
  ]
};

// Trial to Deployment Data
export const trialToDeploymentData = {
  productName: 'Graffisol',
  stages: [
    {
      type: 'trial',
      title: 'Small Array Trial',
      description: 'Test on 10-50kW section with performance monitoring',
      duration: '30 days',
      investment: '₹18,000-90,000',
      details: [
        'Baseline data collection',
        'Professional application',
        'Daily performance tracking'
      ]
    },
    {
      type: 'validation',
      title: 'Pilot Block',
      description: 'Scale to 100-500kW block for comprehensive validation',
      duration: '3 months',
      investment: '₹1.8-9 lakhs',
      details: [
        'Multiple string monitoring',
        'Seasonal performance data',
        'ROI validation'
      ]
    },
    {
      type: 'scale',
      title: 'Phased Rollout',
      description: 'Deploy across MW-scale sections',
      duration: '6-12 months',
      investment: 'Negotiated',
      details: [
        'Multi-MW deployment',
        'Optimized application process',
        'Performance guarantees'
      ]
    },
    {
      type: 'deployment',
      title: 'Full Plant',
      description: 'Complete solar plant coating with maintenance plan',
      duration: 'Ongoing',
      investment: 'Volume pricing',
      details: [
        'Entire plant coverage',
        'Re-application schedule',
        'Long-term monitoring'
      ]
    }
  ]
};

// Impact Map Data
export const impactMapData = {
  productName: 'Graffisol',
  nationalData: {
    locations: [
      { city: 'Jodhpur', state: 'Rajasthan', projects: 8 },
      { city: 'Anantapur', state: 'Andhra Pradesh', projects: 5 },
      { city: 'Bangalore', state: 'Karnataka', projects: 4 },
      { city: 'Kutch', state: 'Gujarat', projects: 6 },
      { city: 'Pavagada', state: 'Karnataka', projects: 3 }
    ],
    marketPenetration: '0.3%',
    penetrationDescription: 'Early adoption in solar-rich regions',
    partnerships: '15+',
    partnershipDescription: 'Solar plant operators and EPCs',
    reach: '5 states',
    reachDescription: 'Focused on high-irradiation zones'
  },
  internationalData: {
    locations: [
      { city: 'Dubai', state: 'UAE', projects: 2 }
    ],
    marketPenetration: '0.05%',
    penetrationDescription: 'Initial international trials',
    partnerships: '3+',
    partnershipDescription: 'International solar operators',
    reach: '1 country',
    reachDescription: 'Middle East pilot projects'
  },
  stats: [
    { value: '26+', label: 'Active Projects' },
    { value: '150+ MW', label: 'Coated Capacity' },
    { value: '6', label: 'States & Countries' },
    { value: '18+', label: 'Partner Companies' }
  ]
};

// Product Data Sheet
export const dataSheetData = {
  productName: 'Graffisol',
  specifications: [
    { parameter: 'Active Ingredient', value: 'Graphene nano-platelets', testMethod: 'Material analysis' },
    { parameter: 'Light Transmission', value: '>98%', testMethod: 'ASTM E903' },
    { parameter: 'Power Output Gain', value: '10-12%', testMethod: 'Field validation' },
    { parameter: 'Temperature Reduction', value: '5-6°C', testMethod: 'Thermal imaging' },
    { parameter: 'Soiling Reduction', value: '30-40%', testMethod: 'Comparative testing' },
    { parameter: 'Durability', value: '3-5 years', testMethod: 'Weathering tests' },
    { parameter: 'Application Rate', value: '50-80 ml/m²', testMethod: 'Coverage test' },
    { parameter: 'Curing Time', value: '4-6 hours', testMethod: 'Lab protocol' }
  ],
  documents: [
    {
      title: 'Technical Data Sheet',
      description: 'Complete specifications and application guidelines',
      fileSize: '2.1 MB',
      format: 'PDF',
      filename: 'Graffisol-TDS.pdf',
      url: '#'
    },
    {
      title: 'Field Test Report',
      description: 'Real-world performance data from solar installations',
      fileSize: '4.3 MB',
      format: 'PDF',
      filename: 'Graffisol-Field-Report.pdf',
      url: '#'
    },
    {
      title: 'Application Guide',
      description: 'Step-by-step coating application procedures',
      fileSize: '2.7 MB',
      format: 'PDF',
      filename: 'Graffisol-Application-Guide.pdf',
      url: '#'
    },
    {
      title: 'Safety Data Sheet',
      description: 'Material safety and handling information',
      fileSize: '1.1 MB',
      format: 'PDF',
      filename: 'Graffisol-SDS.pdf',
      url: '#'
    }
  ]
};

// Industry Solutions Data
export const industrySolutionsData = {
  productName: 'Graffisol',
  industries: [
    {
      name: 'Utility-Scale Solar Parks',
      icon: 'energy',
      description: 'Large solar farms where marginal efficiency gains translate to significant revenue increases.',
      useCases: [
        { title: 'Ground-Mounted Arrays', description: 'Soiling reduction in dusty environments' },
        { title: 'Tracker Systems', description: 'Reduced cleaning on moving panels' },
        { title: 'Desert Installations', description: 'Combat extreme dust and temperature' }
      ],
      benefits: [
        { title: '10-12% Output Gain', description: 'Directly increases revenue' },
        { title: 'Reduced O&M', description: 'Lower cleaning costs' },
        { title: 'Extended Life', description: 'Panel protection from elements' }
      ],
      metrics: [
        { value: '+11%', label: 'Avg Output' },
        { value: '₹1,200/kW', label: 'Annual Gain' },
        { value: '18 months', label: 'Payback' },
        { value: '-40%', label: 'Cleaning' }
      ],
      caseStudy: {
        preview: '50 MW solar park achieved 11.2% output gain, ROI in 17 months'
      }
    },
    {
      name: 'Commercial Rooftop',
      icon: 'construction',
      description: 'C&I rooftop solar systems maximizing limited space and high electricity costs.',
      useCases: [
        { title: 'Factory Roofs', description: 'Maximize energy from constrained space' },
        { title: 'Office Buildings', description: 'Premium performance for corporate sustainability' },
        { title: 'Warehouses', description: 'Large roofs with dust accumulation' }
      ],
      benefits: [
        { title: 'Space Optimization', description: 'More energy from same area' },
        { title: 'Fast Payback', description: 'High tariff rates boost ROI' },
        { title: 'Low Maintenance', description: 'Reduce manual cleaning needs' }
      ],
      metrics: [
        { value: '+10%', label: 'Energy' },
        { value: '₹1,500/kW', label: 'Annual Savings' },
        { value: '15 months', label: 'Payback' },
        { value: '70%', label: 'Less Cleaning' }
      ]
    },
    {
      name: 'Floating Solar',
      icon: 'energy',
      description: 'Water-based solar installations with unique soiling and environmental challenges.',
      useCases: [
        { title: 'Reservoir Floating', description: 'Water vapor and algae resistance' },
        { title: 'Lake Installations', description: 'Moisture management' },
        { title: 'Coastal Floating', description: 'Saltwater protection' }
      ],
      benefits: [
        { title: 'Moisture Resistance', description: 'Hydrophobic protection' },
        { title: 'Cooling Enhancement', description: 'Better heat dissipation' },
        { title: 'Algae Prevention', description: 'Anti-soiling properties' }
      ],
      metrics: [
        { value: '+12%', label: 'Output' },
        { value: '-6°C', label: 'Cooling' },
        { value: '90%', label: 'Water Beading' },
        { value: '4 years', label: 'Durability' }
      ]
    },
    {
      name: 'Agricultural Solar',
      icon: 'energy',
      description: 'Agri-PV and farm-based solar with high dust and debris exposure.',
      useCases: [
        { title: 'Farm Solar Pumps', description: 'Reliable power for irrigation' },
        { title: 'Agri-PV Systems', description: 'Dual land use optimization' },
        { title: 'Remote Installations', description: 'Low-maintenance solutions' }
      ],
      benefits: [
        { title: 'Dust Resistance', description: 'Critical for farm environments' },
        { title: 'Self-Cleaning', description: 'Natural rain cleaning' },
        { title: 'Reliable Output', description: 'Consistent power delivery' }
      ],
      metrics: [
        { value: '+10%', label: 'Generation' },
        { value: '-50%', label: 'Soiling Loss' },
        { value: '80%', label: 'Less Manual Cleaning' },
        { value: '₹800/kW', label: 'Annual Savings' }
      ]
    },
    {
      name: 'Residential Solar',
      icon: 'construction',
      description: 'Home solar systems seeking maximum performance and minimal maintenance.',
      useCases: [
        { title: 'Rooftop Systems', description: 'Premium home installations' },
        { title: 'Off-Grid Homes', description: 'Maximize limited capacity' },
        { title: 'Net-Metering', description: 'Optimize grid export' }
      ],
      benefits: [
        { title: 'Set and Forget', description: 'Minimal maintenance required' },
        { title: 'Better ROI', description: 'Faster payback period' },
        { title: 'Aesthetic', description: 'Cleaner panel appearance' }
      ],
      metrics: [
        { value: '+8%', label: 'Output' },
        { value: '2 years', label: 'Payback' },
        { value: '90%', label: 'Satisfaction' },
        { value: '₹6,000', label: 'Annual Gain' }
      ]
    },
    {
      name: 'EPC Contractors',
      icon: 'manufacturing',
      description: 'Solar EPCs offering value-added services and performance enhancement.',
      useCases: [
        { title: 'New Installations', description: 'Include Graffisol in project scope' },
        { title: 'O&M Services', description: 'Add coating to maintenance packages' },
        { title: 'Retrofit Projects', description: 'Upgrade existing plants' }
      ],
      benefits: [
        { title: 'Differentiation', description: 'Premium service offering' },
        { title: 'Customer Retention', description: 'Ongoing O&M contracts' },
        { title: 'Higher Margins', description: 'Value-added service pricing' }
      ],
      metrics: [
        { value: '25%', label: 'Premium' },
        { value: '35+', label: 'Partner EPCs' },
        { value: '92%', label: 'Retention' },
        { value: '₹500/kW', label: 'Margin Gain' }
      ]
    }
  ]
};

// Science Explained Data
export const scienceExplainedData = {
  productName: 'Graffisol',
  sections: [
    {
      icon: 'mechanism',
      title: 'Graphene Enhancement Mechanism',
      summary: 'How graphene nano-platelets boost solar panel performance',
      content: [
        'Graffisol incorporates graphene nano-platelets (GNPs) into a transparent coating matrix. These atomically thin carbon structures possess exceptional thermal conductivity (5000 W/mK) and optical transparency while being chemically inert.',
        'When applied to solar panel glass, GNPs create a nano-textured surface that enhances light transmission, promotes rapid heat dissipation, and creates super-hydrophobic properties that prevent dust and water adhesion.',
        'The result is a coating that increases power output through multiple mechanisms: better light coupling, lower operating temperature, and dramatically reduced soiling losses.'
      ],
      keyPoints: [
        {
          title: 'Light Management',
          description: 'Anti-reflective properties increase photon capture'
        },
        {
          title: 'Thermal Conductivity',
          description: 'Rapid heat dissipation lowers panel temperature'
        },
        {
          title: 'Hydrophobic Surface',
          description: 'Water and dust roll off, maintaining cleanliness'
        }
      ],
      technicalData: {
        'Light Transmission': '>98%',
        'Thermal Conductivity': '500× vs untreated',
        'Contact Angle': '>110° (superhydrophobic)'
      }
    },
    {
      icon: 'properties',
      title: 'Performance Enhancement',
      summary: 'Measurable improvements in solar panel energy generation',
      content: [
        'Field testing across 25+ installations shows consistent 10-12% power output gains. This comes from three primary mechanisms: reduced reflection losses (+2-3%), lower operating temperature (+3-4%), and reduced soiling losses (+5-6%).',
        'Temperature reduction of 5-6°C is particularly valuable. Silicon solar cells lose ~0.5% efficiency per degree above 25°C. In hot climates, panels can reach 65-70°C, losing 20-22% of their rated capacity. Graffisol reduces this to 60-64°C, recovering significant power.',
        'Soiling is the #1 cause of solar underperformance in India, with losses ranging from 15-25% annually. Graffisol\'s hydrophobic surface causes dust to bead up and wash away with morning dew or light rain, reducing soiling losses by 30-40%.'
      ],
      keyPoints: [
        {
          title: 'Power Output',
          description: '10-12% generation increase verified in field'
        },
        {
          title: 'Temperature Control',
          description: '5-6°C operating temperature reduction'
        },
        {
          title: 'Soiling Mitigation',
          description: '30-40% reduction in dust-related losses'
        },
        {
          title: 'Self-Cleaning',
          description: 'Hydrophobic surface enables natural cleaning'
        }
      ],
      technicalData: {
        'Power Gain': '10-12% validated',
        'Temp Reduction': '5-6°C avg',
        'Soiling Reduction': '35% avg',
        'Durability': '3-5 years'
      }
    },
    {
      icon: 'structure',
      title: 'Coating Technology',
      summary: 'Advanced nano-coating formulation and application',
      content: [
        'Graffisol uses a proprietary water-based dispersion system that maintains graphene in a stable, uniform suspension. This is critical - aggregated graphene loses its optical and thermal properties.',
        'The coating self-assembles into a 50-100nm thick layer during curing. This is thin enough to be optically transparent (>98% transmission) while providing durable protection and performance enhancement.',
        'Durability testing shows 3-5 year lifespan under harsh UV exposure, temperature cycling, and environmental stress. Re-application is simple and cost-effective, making it suitable for long-term O&M programs.'
      ],
      keyPoints: [
        {
          title: 'Nano-Scale Coating',
          description: 'Ultra-thin layer maintains transparency'
        },
        {
          title: 'Uniform Dispersion',
          description: 'Proprietary formulation prevents aggregation'
        },
        {
          title: 'Easy Application',
          description: 'Spray or roller application, no special equipment'
        },
        {
          title: 'Weather Resistant',
          description: 'UV, heat, and moisture stable'
        }
      ],
      technicalData: {
        'Coating Thickness': '50-100 nm',
        'Application Rate': '50-80 ml/m²',
        'Curing Time': '4-6 hours',
        'Lifespan': '3-5 years'
      }
    },
    {
      icon: 'science',
      title: 'Field Validation',
      summary: 'Real-world testing and performance verification',
      content: [
        'Graffisol has been tested across 25+ solar installations totaling 150+ MW capacity, from utility-scale plants in Rajasthan to commercial rooftops in Bangalore.',
        'Testing protocol involves coating half of an array while leaving the other half as control. Both sections are monitored using identical inverter/monitoring systems. Data is collected at 5-minute intervals over 30-90 days.',
        'Results are remarkably consistent: 10-12% average power gain, 5-6°C temperature reduction, and dramatic improvement in soiling resistance. Performance holds across different panel types, orientations, and environmental conditions.'
      ],
      keyPoints: [
        {
          title: 'Field Proven',
          description: '25+ installations, 150+ MW tested'
        },
        {
          title: 'Controlled Testing',
          description: 'Side-by-side comparison methodology'
        },
        {
          title: 'Consistent Results',
          description: 'Performance validated across diverse sites'
        },
        {
          title: 'Long-Term Data',
          description: 'Multi-year performance tracking'
        }
      ],
      technicalData: {
        'Test Sites': '25+ installations',
        'Coated Capacity': '150+ MW',
        'Success Rate': '96% meet targets',
        'Data Points': '10M+ collected'
      }
    }
  ]
};
