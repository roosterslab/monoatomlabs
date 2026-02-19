import { Package, TrendingUp, Shield, Zap, Factory, Wrench } from 'lucide-react';

/**
 * HD-G-PE Product Infographic Data
 * Graphene-reinforced polymer enhancer - all interactive component data
 */

// ROI Calculator Configuration — v3
export const roiCalculatorConfig = {
  productName: 'HD-G-PE',
  defaultInputs: {
    annualProduction: {
      label: 'Annual Production (Tons)',
      logSlider: true,
      min: 10,
      max: 10000,
      default: 500,
      unit: 'tons',
      ticks: [10, 100, 500, 2000, 10000]
    },
    dosagePercent: {
      label: 'HD-G-PE Dosage',
      min: 0.5,
      max: 2.0,
      step: 0.1,
      unit: '%',
      default: 0.5
    },
    application: {
      label: 'Application Type',
      type: 'select',
      options: [
        { value: 'pipes', label: 'Pipes & Fittings' },
        { value: 'packaging', label: 'Films & Packaging' },
        { value: 'molding', label: 'Injection Molding' }
      ],
      default: 'pipes'
    }
  },
  secondaryInputs: {
    analysisPeriod: {
      label: 'Analysis Period',
      type: 'buttongroup',
      options: [
        { value: 1, label: '1 yr' },
        { value: 3, label: '3 yr' },
        { value: 5, label: '5 yr' }
      ],
      default: 3
    },
    qualityReturnRate: {
      label: 'Current Defect / Return Rate',
      min: 0.5,
      max: 5.0,
      step: 0.5,
      unit: '%',
      default: 2.0
    }
  },
  calculations: (inputs) => {
    const {
      annualProduction,
      dosagePercent,
      application,
      analysisPeriod    = 3,
      qualityReturnRate = 2.0,
    } = inputs;

    const HD_COST_PER_KG = 1200;          // ₹/kg masterbatch
    const BASE_POLYMER_PER_TON = 100000;  // ₹100/kg × 1000 = ₹100,000/ton HDPE baseline

    // --- Additive cost ---
    const dosageKgPerTon = (dosagePercent / 100) * 1000;
    const additiveCostPerTon = dosageKgPerTon * HD_COST_PER_KG;
    const annualAdditiveCost = annualProduction * additiveCostPerTon;

    // --- Application-specific gross benefits ---
    // pipes:     sell enhanced pipe at 12% premium over base; no downgauging
    // packaging: no price premium (commodity), but 15% less material = 15% cost saving
    // molding:   15% premium for quality-grade resin + 10% material reduction
    const appMap = {
      pipes:     { premiumPerTon: 12000, downgaugeFactor: 0.00, label: 'Pipes & Fittings' },
      packaging: { premiumPerTon:     0, downgaugeFactor: 0.15, label: 'Films & Packaging' },
      molding:   { premiumPerTon: 15000, downgaugeFactor: 0.10, label: 'Injection Molding' },
    };
    const app = appMap[application] || appMap.pipes;
    const downgaugeSavingsPerTon = BASE_POLYMER_PER_TON * app.downgaugeFactor;
    const grossBenefitPerTon = app.premiumPerTon + downgaugeSavingsPerTon;

    // --- Method A: NET MARGIN (conservative) ---
    // Revenue uplift or material savings minus additive cost
    const netMarginPerTon = grossBenefitPerTon - additiveCostPerTon;
    const netMarginSavingsTotal = netMarginPerTon * annualProduction;

    // --- Method B: ALL-IN ---
    // Net margin + quality/returns improvement (HDGPE reduces defects/returns by ~60%)
    const qualityReturnFraction = qualityReturnRate / 100;
    const returnsSavingsPerTon = BASE_POLYMER_PER_TON * qualityReturnFraction * 0.60;
    const annualReturnsSavings = returnsSavingsPerTon * annualProduction;
    const allInSavingsPerTon = netMarginPerTon + returnsSavingsPerTon;
    const allInSavingsTotal = netMarginSavingsTotal + annualReturnsSavings;

    // --- ROI & payback on additive investment ---
    const roiPercentage = netMarginSavingsTotal > 0 && annualAdditiveCost > 0
      ? Math.round((netMarginSavingsTotal / annualAdditiveCost) * 100)
      : null;
    const paybackMonths = netMarginSavingsTotal > 0
      ? Math.ceil((annualAdditiveCost / netMarginSavingsTotal) * 12)
      : null;
    const paybackLabel = paybackMonths !== null
      ? paybackMonths <= 1 ? '< 1 month' : `${paybackMonths} months`
      : 'Reduce dosage';

    // --- Projection (cumulative net margin, not capital-investment framing) ---
    const projectionData = Array.from({ length: analysisPeriod + 1 }, (_, yr) => ({
      year: yr === 0 ? 'Start' : `Yr ${yr}`,
      netMargin: Math.round(netMarginSavingsTotal * yr),
      allIn: Math.round(allInSavingsTotal * yr),
    }));

    // --- Environmental: CO2 saved via material reduction ---
    const materialSavedTons = annualProduction * app.downgaugeFactor;
    const co2SavedTons = Math.round(materialSavedTons * 1.8); // 1.8 kg CO2 per kg HDPE production

    return {
      additiveCostPerTon:      Math.round(additiveCostPerTon),
      annualAdditiveCost:      Math.round(annualAdditiveCost),
      grossBenefitPerTon:      Math.round(grossBenefitPerTon),
      premiumPerTon:           app.premiumPerTon,
      downgaugeSavingsPerTon:  Math.round(downgaugeSavingsPerTon),
      netMarginPerTon:         Math.round(netMarginPerTon),
      netMarginSavingsTotal:   Math.round(netMarginSavingsTotal),
      returnsSavingsPerTon:    Math.round(returnsSavingsPerTon),
      annualReturnsSavings:    Math.round(annualReturnsSavings),
      allInSavingsPerTon:      Math.round(allInSavingsPerTon),
      allInSavingsTotal:       Math.round(allInSavingsTotal),
      roiPercentage,
      paybackLabel,
      paybackMonths,
      projectionData,
      materialSavedTons:       Math.round(materialSavedTons),
      co2SavedTons,
      appLabel:                app.label,
      analysisPeriod,
    };
  },
};

// How It Works
export const howItWorksSteps = [
  {
    title: 'Master Batch Preparation',
    description: 'HD-G-PE masterbatch contains uniformly dispersed graphene nano-platelets ready for polymer processing.',
    duration: 'Pre-prepared',
    icon: Package
  },
  {
    title: 'Polymer Blending',
    description: 'Add HD-G-PE masterbatch (0.5-2%) during compounding or extrusion. Mix thoroughly for uniform distribution.',
    duration: 'Standard process',
    icon: Factory
  },
  {
    title: 'Nano-Reinforcement',
    description: 'Graphene platelets integrate into polymer matrix, creating nano-reinforcement network throughout material.',
    duration: 'During processing',
    icon: Shield
  },
  {
    title: 'Enhanced Performance',
    description: 'Final product exhibits +30% strength, 20× elongation, superior UV stability, and extended lifespan.',
    duration: 'Product lifetime',
    icon: TrendingUp
  }
];

// 30-Day Performance Pilot
export const pilotProgramData = {
  productName: 'HD-G-PE',
  pilotDetails: [
    {
      title: 'Pilot Quantity Supply',
      description: '50-100 kg HD-G-PE masterbatch for trials'
    },
    {
      title: 'Technical Consultation',
      description: 'Dosage optimization and process integration guidance'
    },
    {
      title: 'Sample Production',
      description: 'Create test batches with varying dosages'
    },
    {
      title: 'Performance Testing',
      description: 'Mechanical testing vs. control samples'
    },
    {
      title: 'Comprehensive Analysis',
      description: 'Detailed report with recommendations and ROI projections'
    }
  ],
  benefits: [
    {
      title: 'Risk-Free Testing',
      description: 'Validate in your production process',
      icon: Shield
    },
    {
      title: 'Performance Proof',
      description: 'Verify strength and durability gains',
      icon: TrendingUp
    },
    {
      title: 'Cost Validation',
      description: 'Confirm value proposition',
      icon: Zap
    }
  ],
  pricing: {
    cost: 'From ₹60,000',
    description: 'Pilot including technical support and testing',
    note: '* Customized for your polymer type and application'
  }
};

// Market Opportunity Data
export const marketOpportunityData = {
  productName: 'HD-G-PE',
  marketData: {
    tamSize: '₹45,000 Cr',
    cagr: '8% CAGR',
    targetCustomers: '2,000+',
    marketShare: '1-2%'
  },
  industries: [
    {
      id: 'pipes',
      name: 'HDPE Pipe Manufacturing',
      description: 'Enhance pipe strength, pressure rating, and lifespan for municipal and industrial applications.',
      keyPoints: [
        'Growing infrastructure demand',
        'Premium pricing for enhanced pipes',
        'Longer warranty periods possible'
      ],
      marketSize: '₹18,000 Cr',
      revenuePotential: '₹180-360 Cr',
      growthRate: '10% CAGR'
    },
    {
      id: 'packaging',
      name: 'Films & Packaging',
      description: 'Stronger, thinner films for packaging applications with material savings.',
      keyPoints: [
        'Growing packaging industry',
        'Downgauging opportunities',
        'Improved barrier properties'
      ],
      marketSize: '₹15,000 Cr',
      revenuePotential: '₹150-300 Cr',
      growthRate: '12% CAGR'
    },
    {
      id: 'injection',
      name: 'Injection Molding',
      description: 'Enhanced mechanical properties for automotive, consumer goods, and industrial parts.',
      keyPoints: [
        'Quality differentiation',
        'Lightweight but strong components',
        'Premium product positioning'
      ],
      marketSize: '₹10,000 Cr',
      revenuePotential: '₹100-200 Cr',
      growthRate: '7% CAGR'
    }
  ],
  growthMetrics: [
    {
      title: 'Polymer Market',
      description: 'Indian polymer consumption',
      value: '15 MT by 2025'
    },
    {
      title: 'Infrastructure Spend',
      description: 'Driving pipe demand',
      value: '₹111 lakh Cr'
    },
    {
      title: 'Packaging Growth',
      description: 'Films and packaging',
      value: '10% CAGR'
    }
  ]
};

// TCO Analysis Data
export const tcoAnalysisData = {
  productName: 'HD-G-PE',
  timeframe: '5 years',
  traditionalSolution: {
    breakdown: {
      'Base Polymer Cost': 4500000,
      'Product Returns': 450000,
      'Quality Issues': 280000,
      'Warranty Claims': 320000
    },
    total: 5550000
  },
  productSolution: {
    breakdown: {
      'Base Polymer + HD-G-PE': 4680000,
      'Product Returns': 180000,
      'Quality Issues': 80000,
      'Warranty Claims': 100000
    },
    total: 5040000,
    paybackPeriod: '6-9 months'
  },
  breakdown: [
    {
      category: 'Raw Material Cost',
      description: 'HD-G-PE additive cost',
      traditional: 4500000,
      withProduct: 4680000
    },
    {
      category: 'Product Returns',
      description: 'Reduced failures',
      traditional: 450000,
      withProduct: 180000
    },
    {
      category: 'Quality Issues',
      description: 'Better consistency',
      traditional: 280000,
      withProduct: 80000
    },
    {
      category: 'Warranty Claims',
      description: 'Extended product life',
      traditional: 320000,
      withProduct: 100000
    }
  ],
  highlights: [
    { label: 'Quality Cost Reduction', value: '-60%', color: 'green' },
    { label: 'Lifespan Multiplier', value: '2.5x', color: 'blue' },
  ]
};

// Long-Term Savings
export const longTermSavingsData = {
  productName: 'HD-G-PE',
  savingsPerUnit: {
    calculation: (annualTons) => {
      const savingsPerTon = 1000; // ₹1000/ton net benefit
      return Math.round(savingsPerTon);
    }
  },
  volumeOptions: {
    label: 'Annual Polymer Production',
    min: 10,
    max: 10000,
    step: 10,
    unit: 'tons',
    default: 500
  }
};

// Environmental Impact
export const environmentalImpactData = {
  productName: 'HD-G-PE',
  impacts: [
    { type: 'waste', value: '+20%', label: 'Longer Life' },
    { type: 'energy', value: '30%', label: 'Strength Gain' },
    { type: 'carbon', value: 'UV Stable', label: 'Durability' },
    { type: 'waste', value: '-15%', label: 'Material Waste' }
  ],
  carbonCredits: {
    value: 'Reduced Waste',
    description: 'Extended product life reduces replacement frequency'
  }
};

// Certifications & Quality
export const certificationsData = {
  productName: 'HD-G-PE',
  certifications: [
    {
      name: 'Lab Tested',
      description: 'Comprehensive mechanical and durability testing',
      certNumber: 'LT-2024'
    },
    {
      name: 'ISO 9001:2015',
      description: 'Quality management certified',
      certNumber: 'ISO-9001'
    },
    {
      name: 'Material Safety',
      description: 'Food-grade polymer compatible',
      certNumber: 'FDA-COMPATIBLE'
    }
  ],
  testingStandards: [
    {
      name: 'Tensile Strength',
      description: 'ASTM D638 testing for tensile properties',
      code: 'Ref: ASTM D638'
    },
    {
      name: 'Elongation at Break',
      description: 'Flexibility and toughness measurement',
      code: 'Ref: ASTM D638'
    },
    {
      name: 'UV Stability',
      description: 'Weathering resistance testing',
      code: 'Ref: ASTM G154'
    },
    {
      name: 'Thermal Stability',
      description: 'Heat resistance and processing stability',
      code: 'Ref: ASTM D648'
    }
  ],
  qualityMetrics: [
    { value: '+30%', label: 'Strength' },
    { value: '20×', label: 'Elongation' },
    { value: '+20%', label: 'Lifespan' },
    { value: 'Superior', label: 'UV Stability' }
  ]
};

// Trial to Deployment
export const trialToDeploymentData = {
  productName: 'HD-G-PE',
  stages: [
    {
      type: 'trial',
      title: 'Lab-Scale Trial',
      description: 'Small batch testing with mechanical characterization',
      duration: '2-3 weeks',
      investment: '₹60,000',
      details: [
        '50-100 kg trial quantity',
        'Dosage optimization',
        'Mechanical testing'
      ]
    },
    {
      type: 'validation',
      title: 'Production Trial',
      description: 'Full-scale production runs with quality monitoring',
      duration: '4-6 weeks',
      investment: '₹2-4 lakhs',
      details: [
        '500-1000 kg production',
        'Process integration',
        'Performance validation'
      ]
    },
    {
      type: 'scale',
      title: 'Commercial Production',
      description: 'Regular production with HD-G-PE integration',
      duration: '3-6 months',
      investment: 'Volume pricing',
      details: [
        'Multi-ton orders',
        'Supply chain integration',
        'Quality assurance'
      ]
    },
    {
      type: 'deployment',
      title: 'Full Integration',
      description: 'HD-G-PE as standard additive in formulations',
      duration: 'Ongoing',
      investment: 'Bulk contracts',
      details: [
        'Long-term supply agreements',
        'Technical support',
        'Performance guarantees'
      ]
    }
  ]
};

// Impact Map
export const impactMapData = {
  productName: 'HD-G-PE',
  nationalData: {
    locations: [
      { city: 'Ahmedabad', state: 'Gujarat', projects: 8 },
      { city: 'Mumbai', state: 'Maharashtra', projects: 6 },
      { city: 'Bangalore', state: 'Karnataka', projects: 4 },
      { city: 'Delhi NCR', state: 'Delhi', projects: 5 },
      { city: 'Hyderabad', state: 'Telangana', projects: 3 }
    ],
    marketPenetration: '0.4%',
    penetrationDescription: 'Early adoption in polymer manufacturing',
    partnerships: '18+',
    partnershipDescription: 'Polymer manufacturers and compounders',
    reach: '5 states',
    reachDescription: 'Key manufacturing hubs'
  },
  internationalData: {
    locations: [
      { city: 'Dubai', state: 'UAE', projects: 2 }
    ],
    marketPenetration: '0.1%',
    penetrationDescription: 'Initial international presence',
    partnerships: '4+',
    partnershipDescription: 'Regional polymer manufacturers',
    reach: '1 country',
    reachDescription: 'Middle East trials'
  },
  stats: [
    { value: '26+', label: 'Active Projects' },
    { value: '12,000+', label: 'Tons Enhanced' },
    { value: '6', label: 'States & Countries' },
    { value: '22+', label: 'Partner Companies' }
  ]
};

// Product Data Sheet
export const dataSheetData = {
  productName: 'HD-G-PE',
  specifications: [
    { parameter: 'Form', value: 'Masterbatch pellets', testMethod: 'Visual' },
    { parameter: 'GNP Content', value: '5-15%', testMethod: 'Material composition' },
    { parameter: 'Recommended Dosage', value: '0.5-2.0%', testMethod: 'Application guide' },
    { parameter: 'Tensile Strength Gain', value: '+30%', testMethod: 'ASTM D638' },
    { parameter: 'Elongation Improvement', value: '20× baseline', testMethod: 'ASTM D638' },
    { parameter: 'Processing Temperature', value: '180-240°C', testMethod: 'Processing guide' },
    { parameter: 'Carrier Polymer', value: 'HDPE', testMethod: 'Material spec' },
    { parameter: 'Shelf Life', value: '12 months', testMethod: 'Stability testing' }
  ],
  documents: [
    {
      title: 'Technical Data Sheet',
      description: 'Complete specifications and properties',
      fileSize: '2.3 MB',
      format: 'PDF',
      filename: 'HDGPE-TDS.pdf',
      url: '#'
    },
    {
      title: 'Processing Guide',
      description: 'Compounding and extrusion guidelines',
      fileSize: '3.5 MB',
      format: 'PDF',
      filename: 'HDGPE-Processing-Guide.pdf',
      url: '#'
    },
    {
      title: 'Test Results',
      description: 'Independent lab testing reports',
      fileSize: '4.1 MB',
      format: 'PDF',
      filename: 'HDGPE-Test-Report.pdf',
      url: '#'
    },
    {
      title: 'Safety Data Sheet',
      description: 'Material safety information',
      fileSize: '1.0 MB',
      format: 'PDF',
      filename: 'HDGPE-SDS.pdf',
      url: '#'
    }
  ]
};

// Industry Solutions
export const industrySolutionsData = {
  productName: 'HD-G-PE',
  industries: [
    {
      name: 'HDPE Pipe Manufacturing',
      icon: 'manufacturing',
      description: 'Enhanced pipes with higher pressure ratings and extended service life.',
      useCases: [
        { title: 'Water Supply Pipes', description: 'Municipal water distribution' },
        { title: 'Gas Distribution', description: 'High-pressure gas lines' },
        { title: 'Industrial Pipes', description: 'Chemical and process industries' }
      ],
      benefits: [
        { title: '+30% Strength', description: 'Higher pressure ratings' },
        { title: '+20% Lifespan', description: 'Extended warranty periods' },
        { title: 'Premium Pricing', description: 'Quality differentiation' }
      ],
      metrics: [
        { value: '+30%', label: 'Strength' },
        { value: '+20%', label: 'Life' },
        { value: '₹1,200/ton', label: 'Value Add' },
        { value: '98%', label: 'Quality' }
      ]
    },
    {
      name: 'Films & Packaging',
      icon: 'packaging',
      description: 'Stronger, thinner films with material savings and improved barrier properties.',
      useCases: [
        { title: 'Stretch Films', description: 'Pallet wrapping and bundling' },
        { title: 'Shopping Bags', description: 'Retail and grocery bags' },
        { title: 'Agricultural Films', description: 'Greenhouse and mulch films' }
      ],
      benefits: [
        { title: 'Downgauging', description: '15-20% material savings' },
        { title: 'Better Performance', description: 'Tear and puncture resistance' },
        { title: 'Sustainability', description: 'Less material, same performance' }
      ],
      metrics: [
        { value: '+35%', label: 'Tear Strength' },
        { value: '-18%', label: 'Material Use' },
        { value: '₹800/ton', label: 'Savings' },
        { value: '2.5×', label: 'Puncture Resist' }
      ]
    },
    {
      name: 'Injection Molded Parts',
      icon: 'manufacturing',
      description: 'Enhanced mechanical properties for automotive, consumer, and industrial components.',
      useCases: [
        { title: 'Automotive Parts', description: 'Interior and under-hood components' },
        { title: 'Consumer Goods', description: 'Appliances and housewares' },
        { title: 'Industrial Components', description: 'Gears, housings, and brackets' }
      ],
      benefits: [
        { title: 'Lightweight Design', description: 'Strength without weight' },
        { title: 'Cost Reduction', description: 'Material efficiency' },
        { title: 'Quality Upgrade', description: 'Premium product positioning' }
      ],
      metrics: [
        { value: '+32%', label: 'Impact Strength' },
        { value: '+28%', label: 'Tensile' },
        { value: '-12%', label: 'Weight' },
        { value: '₹1,500/ton', label: 'Premium' }
      ]
    }
  ]
};

// Science Explained
export const scienceExplainedData = {
  productName: 'HD-G-PE',
  sections: [
    {
      icon: 'mechanism',
      title: 'Nano-Reinforcement Mechanism',
      summary: 'How graphene platelets enhance polymer properties',
      content: [
        'HD-G-PE introduces graphene nano-platelets (GNPs) into the polymer matrix. These 2D carbon structures have extraordinary properties: 200× stronger than steel, yet atomically thin and flexible.',
        'During processing (extrusion or injection molding), GNPs uniformly disperse throughout the polymer melt. They align along flow direction, creating a nano-reinforcement network.',
        'This network bridges polymer chains, increases crystallinity, and provides mechanical reinforcement at the molecular level - similar to rebar in concrete but at nanoscale.'
      ],
      keyPoints: [
        {
          title: 'Molecular Bridging',
          description: 'GNPs connect polymer chains'
        },
        {
          title: 'Load Transfer',
          description: 'Stress distributed across network'
        },
        {
          title: 'Crystallinity',
          description: 'Nucleation sites increase crystalline content'
        }
      ],
      technicalData: {
        'GNP Loading': '0.5-2.0% by weight',
        'Aspect Ratio': '500-1000',
        'Dispersion': '>95% uniform'
      }
    },
    {
      icon: 'properties',
      title: 'Enhanced Properties',
      summary: 'Measurable improvements in polymer performance',
      content: [
        '+30% tensile and flexural strength allows for lightweighting or higher load-bearing capacity. This is achieved with minimal dosage (0.5-2%), making it cost-effective.',
        '20× elongation improvement means dramatically better toughness and impact resistance. Products become more flexible and less brittle.',
        'Superior UV stability from graphene\'s UV-absorbing properties extends outdoor service life by 20%+. This is critical for pipes, films, and outdoor applications.',
        'Enhanced thermal conductivity improves heat dissipation and dimensional stability during processing.'
      ],
      keyPoints: [
        {
          title: 'Mechanical Strength',
          description: '+30% tensile, flexural, and impact'
        },
        {
          title: 'Flexibility',
          description: '20× elongation at break'
        },
        {
          title: 'Durability',
          description: '+20% service life, superior UV'
        },
        {
          title: 'Processing',
          description: 'Better thermal stability'
        }
      ],
      technicalData: {
        'Tensile Strength': '+30% (ASTM D638)',
        'Elongation': '20× baseline',
        'UV Stability': '+20% life',
        'Thermal Conductivity': '3× improvement'
      }
    },
    {
      icon: 'science',
      title: 'Processing & Compatibility',
      summary: 'Easy integration into existing polymer processing',
      content: [
        'HD-G-PE comes as ready-to-use masterbatch pellets. No special equipment or process changes required - simply add to hopper during compounding or direct processing.',
        'Compatible with all standard polymer processing methods: extrusion, injection molding, blow molding, film blowing. Processing temperatures and conditions remain unchanged.',
        'Dosage optimization is straightforward. Start at 0.5%, test mechanical properties, adjust as needed. Most applications find optimal performance at 0.5-1.5%.'
      ],
      keyPoints: [
        {
          title: 'Masterbatch Form',
          description: 'Ready-to-use pellets'
        },
        {
          title: 'Drop-In Solution',
          description: 'No process changes needed'
        },
        {
          title: 'Universal Compatibility',
          description: 'All polymer processing methods'
        }
      ],
      technicalData: {
        'Dosage Range': '0.5-2.0%',
        'Processing Temp': '180-240°C',
        'Compatibility': 'PE, PP, PS, ABS',
        'Equipment': 'Standard processing'
      }
    }
  ]
};
