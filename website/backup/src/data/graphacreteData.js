import { Building2, TestTube, TrendingUp, Package, Shield, Truck, Sparkles, Factory } from 'lucide-react';

/**
 * Graphacrete Product Infographic Data
 * All data for interactive components on the Graphacrete product page
 */

// ROI Calculator Configuration
// Data verified from: Graphacrete-Brochure-01.md & PRODUCT-CATALOG.md
export const roiCalculatorConfig = {
  productName: 'Graphacrete',
  defaultInputs: {
    projectVolume: {
      label: 'Project Volume (m³)',
      min: 100,
      max: 50000,
      step: 100,
      unit: 'm³',
      default: 1000
    },
    targetStrength: {
      label: 'Target Strength Grade (M-Grade)',
      min: 30,
      max: 60,
      step: 10,
      unit: '',
      default: 50  // M50 - Most common grade, NABL certified M30+Graphacrete≈M50
    }
  },
  calculations: (inputs) => {
    const { projectVolume, targetStrength = 50 } = inputs;

    /**
     * SOURCE DATA (from Graphacrete-Brochure-01.md):
     * - Product Price: ₹235/L (1000L MOQ)
     * - Dosage: 2L per m³ = ₹470 per m³
     * - NABL Report: M30 + Graphacrete ≈ M50 performance
     * - Cost Benefit: ₹430/m³
     * - Cement Saving: 15-20%
     * - Strength Gain: 40-50%
     */

    // Graphacrete cost per m³ (verified from source)
    const graphacreteCostPerM3 = 470; // 2L × ₹235/L

    // Traditional concrete costs per m³ (market rates)
    const traditionalCosts = {
      30: 4050,  // M30 = ₹4,050/m³
      40: 4450,  // M40 = ₹4,450/m³
      50: 4950,  // M50 = ₹4,950/m³
      60: 5550   // M60 = ₹5,550/m³
    };

    // With Graphacrete: Use lower grade + additive to achieve higher grade
    // M30 + Graphacrete ≈ M50 (NABL certified)
    const baseGradeFor = {
      30: 30,  // M30 → stay M30 (but with improved properties)
      40: 30,  // M30 + Graphacrete → M40
      50: 30,  // M30 + Graphacrete → M50 (NABL certified)
      60: 40   // M40 + Graphacrete → M60
    };

    const targetCostTraditional = traditionalCosts[targetStrength];
    const baseGrade = baseGradeFor[targetStrength];
    const baseCost = traditionalCosts[baseGrade];
    const costWithGraphacrete = baseCost + graphacreteCostPerM3;

    // Cost savings per m³
    const savingsPerM3 = targetCostTraditional - costWithGraphacrete;

    // Total project costs
    const productCost = graphacreteCostPerM3 * projectVolume;
    const traditionalCost = targetCostTraditional * projectVolume;
    const withProductCost = costWithGraphacrete * projectVolume;
    const totalSavings = savingsPerM3 * projectVolume;

    // Cement calculations (15-20% reduction, using 17.5% average)
    const cementReductionPercent = 0.175;
    const avgCementBagsPerM3 = {
      30: 6.25,
      40: 7.5,
      50: 8.5,
      60: 10.0
    };

    const baseCementBags = avgCementBagsPerM3[baseGrade];
    const cementSavedPerM3 = baseCementBags * cementReductionPercent;
    const totalCementSaved = cementSavedPerM3 * projectVolume;

    // Environmental impact (0.9 kg CO₂ per kg cement, 50 kg per bag)
    const co2Reduced = Math.round(totalCementSaved * 50 * 0.9); // kg CO₂

    // Financial metrics
    const paybackMonths = totalSavings > 0 ? Math.round((productCost / (totalSavings / 12))) : 0;
    const roi = productCost > 0 ? Math.round((totalSavings / productCost) * 100) : 0;

    // Performance improvements (from source data)
    const strengthGainPercent = targetStrength > baseGrade ?
      Math.round(((targetStrength - baseGrade) / baseGrade) * 100) : 45;

    return {
      // Financial metrics
      totalSavings: Math.round(totalSavings),
      productCost: Math.round(productCost),
      traditionalCost: Math.round(traditionalCost),
      withProductCost: Math.round(withProductCost),
      savingsPerUnit: {
        label: 'Savings per m³',
        value: Math.round(savingsPerM3),
        description: `Using M${baseGrade} + Graphacrete instead of M${targetStrength}`
      },
      paybackPeriod: Math.max(1, paybackMonths),
      roiPercentage: Math.max(0, roi),

      // Environmental & performance metrics
      cementReduction: Math.round(totalCementSaved),
      co2Reduction: co2Reduced,
      cementSaved: Math.round(totalCementSaved),
      co2Reduced: co2Reduced,
      strengthIncrease: `+${strengthGainPercent}%`,
      waterResistance: '+30-45%',

      // Summary metrics
      summary: [
        { label: 'Base Mix', value: `M${baseGrade} + Graphacrete` },
        { label: 'Achieves', value: `M${targetStrength} Performance` },
        { label: 'Cost Benefit', value: `₹${Math.round(savingsPerM3)}/m³` }
      ]
    };
  },
  impactMetrics: [
    {
      key: 'cementReduction',
      label: 'Cement Saved',
      unit: 'bags',
      trend: 'down',
      description: '15-20% cement reduction (NABL certified)'
    },
    {
      key: 'co2Reduction',
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
      description: '40-50% compressive strength increase'
    },
    {
      key: 'waterResistance',
      label: 'Water Resistance',
      unit: '',
      trend: 'up',
      description: '30-45% permeability reduction'
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
      name: 'ISO 9001:2015',
      description: 'Quality management certified',
      certNumber: 'ISO-9001'
    },
    {
      name: 'Material Safety',
      description: 'Food-grade polymer compatible',
      certNumber: 'FDA-COMPATIBLE'
    },
    {
      name: 'NABL Accredited',
      description: 'Lab Tested',
      certNumber: 'LT-2024'
    }
  ],
  testingStandards: [
    {
      name: 'Tensile Strength',
      description: 'ASTM D638 testing for tensile properties',
      code: 'ASTM D638'
    },
    {
      name: 'Elongation at Break',
      description: 'Flexibility and toughness measurement',
      code: 'ASTM D638'
    },
    {
      name: 'UV Stability',
      description: 'Weathering resistance testing',
      code: 'ASTM G154'
    },
    {
      name: 'Thermal Stability',
      description: 'Heat resistance and processing stability',
      code: 'ASTM D648'
    }
  ],
  qualityMetrics: [
    { value: '+30%', label: 'Strength' },
    { value: '20×', label: 'Elongation' },
    { value: '+20%', label: 'Lifespan' },
    { value: 'Superior', label: 'UV Stability' }
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
        'Test Samples': '500+ cubes tested',
        'Projects': '40+ field trials',
        'Success Rate': '98% meet targets'
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
