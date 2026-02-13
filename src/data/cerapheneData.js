import { Car, Shield, Sparkles, Droplet, TrendingUp, Wrench } from 'lucide-react';

/**
 * Ceraphene Product Infographic Data
 * Automotive ceramic coating - all interactive component data
 */

// ROI Calculator Configuration
export const roiCalculatorConfig = {
  productName: 'Ceraphene',
  defaultInputs: {
    vehicleCount: {
      label: 'Number of Vehicles',
      min: 1,
      max: 100,
      step: 1,
      unit: 'vehicles',
      default: 5
    },
    competitorCost: {
      label: 'Competitor Coating Cost (₹)',
      min: 10000,
      max: 25000,
      step: 1000,
      unit: '₹',
      default: 15000
    }
  },
  calculations: (inputs) => {
    const { vehicleCount, competitorCost } = inputs;

    const cerapheneCost = 5000; // per vehicle
    const savingsPerVehicle = competitorCost - cerapheneCost;
    const totalSavings = savingsPerVehicle * vehicleCount;

    // Maintenance savings over 4 years
    const annualWashSavings = 3000; // Less frequent washing needed
    const protectionValue = 8000; // Paint protection value
    const lifetimeSavings = (annualWashSavings * 4) + protectionValue;

    const totalBenefit = totalSavings + (lifetimeSavings * vehicleCount);

    return {
      totalSavings: Math.round(totalBenefit),
      savingsPerUnit: {
        label: 'Savings per Vehicle',
        value: Math.round(savingsPerVehicle + lifetimeSavings),
        description: `vs. ₹${competitorCost.toLocaleString()} premium coating`
      },
      paybackPeriod: 'Immediate',
      roiPercentage: Math.round((savingsPerVehicle / cerapheneCost) * 100),
      durability: '3-4+ years',
      hardness: '9H+',
      costSavings: '60-70%',
      summary: [
        { label: 'Upfront Savings', value: `₹${savingsPerVehicle.toLocaleString()}` },
        { label: 'Durability', value: '3-4+ years' },
        { label: 'Cost Advantage', value: '60-70%' }
      ]
    };
  },
  impactMetrics: [
    { key: 'durability', label: 'Lifespan', unit: '', trend: 'up', description: '3-4+ years protection' },
    { key: 'hardness', label: 'Hardness', unit: '', trend: 'up', description: '9H+ scratch resistance' },
    { key: 'costSavings', label: 'Cost Advantage', unit: '', trend: 'down', description: 'vs. premium competitors' }
  ]
};

// How It Works
export const howItWorksSteps = [
  {
    title: 'Surface Preparation',
    description: 'Thorough washing, decontamination, and paint correction to ensure perfect bonding surface.',
    duration: '2-3 hours',
    icon: Wrench
  },
  {
    title: 'Coating Application',
    description: 'Apply Ceraphene in thin, even layers. Graphene-enhanced formula creates molecular bond with paint.',
    duration: '3-4 hours',
    icon: Droplet
  },
  {
    title: 'Curing Process',
    description: 'Coating cures to form ultra-hard, hydrophobic layer. Graphene provides exceptional durability.',
    duration: '12-24 hours',
    icon: Shield
  },
  {
    title: 'Long-Term Protection',
    description: 'Enjoy 9H+ hardness, water beading, UV protection, and brilliant shine for 3-4+ years.',
    duration: '3-4+ years',
    icon: Sparkles
  }
];

// 30-Day Performance Pilot
export const pilotProgramData = {
  productName: 'Ceraphene',
  pilotDetails: [
    {
      title: 'Fleet Trial Package',
      description: 'Coat 3-5 vehicles from your fleet'
    },
    {
      title: 'Professional Application',
      description: 'Certified detailer applies coating properly'
    },
    {
      title: 'Documentation',
      description: 'Before/after photos and water beading tests'
    },
    {
      title: 'Usage Tracking',
      description: 'Monitor wash frequency and appearance over 30 days'
    },
    {
      title: 'Performance Report',
      description: 'Detailed assessment vs. uncoated vehicles'
    }
  ],
  benefits: [
    {
      title: 'Fleet Validation',
      description: 'Test on your actual vehicles',
      icon: Car
    },
    {
      title: 'See the Difference',
      description: 'Compare coated vs. uncoated',
      icon: Shield
    },
    {
      title: 'Verify Claims',
      description: 'Confirm durability and performance',
      icon: TrendingUp
    }
  ],
  pricing: {
    cost: 'From ₹15,000',
    description: 'Trial for 3 vehicles including application',
    note: '* Fleet discounts available for larger trials'
  }
};

// Market Opportunity Data
export const marketOpportunityData = {
  productName: 'Ceraphene',
  marketData: {
    tamSize: '₹8,000 Cr',
    cagr: '15% CAGR',
    targetCustomers: '50,000+',
    marketShare: '2-5%'
  },
  industries: [
    {
      id: 'luxury-automotive',
      name: 'Luxury Auto Segment',
      description: 'Premium car owners seeking best-in-class protection at accessible pricing.',
      keyPoints: [
        'Growing luxury car market in India',
        'High willingness to pay for protection',
        'Performance comparable to ₹15k+ coatings'
      ],
      marketSize: '₹3,000 Cr',
      revenuePotential: '₹90-180 Cr',
      growthRate: '18% CAGR'
    },
    {
      id: 'detailing-studios',
      name: 'Detailing Studios',
      description: 'Professional detailers offering premium services with better margins.',
      keyPoints: [
        'Growing detailing industry',
        'Higher margins vs. traditional coatings',
        'Customer satisfaction from longevity'
      ],
      marketSize: '₹2,500 Cr',
      revenuePotential: '₹60-120 Cr',
      growthRate: '20% CAGR'
    },
    {
      id: 'fleet-operators',
      name: 'Fleet Operators',
      description: 'Commercial fleets seeking cost-effective vehicle protection.',
      keyPoints: [
        'Large fleet sizes need economies of scale',
        'Reduced wash frequency saves costs',
        'Better resale value protection'
      ],
      marketSize: '₹1,500 Cr',
      revenuePotential: '₹30-60 Cr',
      growthRate: '12% CAGR'
    }
  ],
  growthMetrics: [
    {
      title: 'Auto Market Growth',
      description: 'Indian automotive market expansion',
      value: '8% annually'
    },
    {
      title: 'Premium Segment',
      description: 'Luxury car sales growth',
      value: '15% CAGR'
    },
    {
      title: 'Aftermarket Services',
      description: 'Car care services market',
      value: '₹15,000 Cr by 2025'
    }
  ]
};

// TCO Analysis Data
export const tcoAnalysisData = {
  productName: 'Ceraphene',
  timeframe: '4 years',
  traditionalSolution: {
    breakdown: {
      'Wax/Sealant (Annual)': 48000,
      'Frequent Washing': 60000,
      'Paint Correction': 35000,
      'Resale Value Loss': 80000
    },
    total: 223000
  },
  productSolution: {
    breakdown: {
      'Ceraphene Application': 25000,
      'Reduced Washing': 24000,
      'No Paint Correction': 0,
      'Maintained Value': 20000
    },
    total: 69000,
    paybackPeriod: '6-8 months'
  },
  breakdown: [
    {
      category: 'Initial Protection',
      description: 'One-time coating vs. annual wax',
      traditional: 12000,
      withProduct: 25000
    },
    {
      category: 'Maintenance (4 years)',
      description: 'Washing and upkeep',
      traditional: 60000,
      withProduct: 24000
    },
    {
      category: 'Paint Correction',
      description: 'Scratch removal and polishing',
      traditional: 35000,
      withProduct: 0
    },
    {
      category: 'Resale Impact',
      description: 'Paint condition affects value',
      traditional: 80000,
      withProduct: 20000
    }
  ]
};

// Long-Term Savings
export const longTermSavingsData = {
  productName: 'Ceraphene',
  savingsPerUnit: {
    calculation: (vehicleCount) => {
      const annualMaintenance = 6000; // Saved per vehicle per year
      return Math.round(annualMaintenance);
    }
  },
  volumeOptions: {
    label: 'Fleet Size',
    min: 1,
    max: 200,
    step: 1,
    unit: 'vehicles',
    default: 10
  }
};

// Environmental Impact
export const environmentalImpactData = {
  productName: 'Ceraphene',
  impacts: [
    { type: 'water', value: '60%', label: 'Water Saved' },
    { type: 'waste', value: '50%', label: 'Less Chemicals' },
    { type: 'energy', value: '3-4 years', label: 'Durability' },
    { type: 'carbon', value: '70%', label: 'Fewer Washes' }
  ],
  carbonCredits: {
    value: 'Reduced Footprint',
    description: 'Significantly lower water and chemical usage'
  }
};

// Certifications & Quality
export const certificationsData = {
  productName: 'Ceraphene',
  certifications: [
    {
      name: '9H+ Hardness',
      description: 'Industry-leading scratch resistance',
      certNumber: 'H-9PLUS'
    },
    {
      name: 'Lab Tested',
      description: 'Comprehensive durability and performance testing',
      certNumber: 'LT-2024'
    },
    {
      name: 'ISO 9001:2015',
      description: 'Quality management certified',
      certNumber: 'ISO-9001'
    }
  ],
  testingStandards: [
    {
      name: 'Hardness Testing',
      description: 'Pencil hardness test confirms 9H+ rating',
      code: 'ASTM D3363'
    },
    {
      name: 'Hydrophobicity',
      description: 'Contact angle measurement for water beading',
      code: 'JIS R3257'
    },
    {
      name: 'UV Resistance',
      description: 'Accelerated weathering test',
      code: 'ASTM G154'
    },
    {
      name: 'Chemical Resistance',
      description: 'Resistance to acids, alkalines, and solvents',
      code: 'ASTM D1308'
    }
  ],
  qualityMetrics: [
    { value: '9H+', label: 'Hardness' },
    { value: '3-4 years', label: 'Durability' },
    { value: '110°+', label: 'Contact Angle' },
    { value: 'UV Stable', label: 'Protection' }
  ]
};

// Trial to Deployment
export const trialToDeploymentData = {
  productName: 'Ceraphene',
  stages: [
    {
      type: 'trial',
      title: 'Single Vehicle Test',
      description: 'Try on one personal or fleet vehicle',
      duration: '30 days',
      investment: '₹5,000',
      details: [
        'Professional application',
        'Before/after documentation',
        'Performance evaluation'
      ]
    },
    {
      type: 'validation',
      title: 'Small Fleet',
      description: 'Coat 3-5 vehicles for comparison',
      duration: '60 days',
      investment: '₹15,000-25,000',
      details: [
        'Multiple vehicle types',
        'Usage tracking',
        'Wash frequency monitoring'
      ]
    },
    {
      type: 'scale',
      title: 'Fleet Rollout',
      description: 'Expand to 10-50 vehicles',
      duration: '3-6 months',
      investment: 'Volume pricing',
      details: [
        'Fleet-wide deployment',
        'Maintenance schedule',
        'Performance tracking'
      ]
    },
    {
      type: 'deployment',
      title: 'Full Fleet',
      description: 'Complete fleet protection program',
      duration: 'Ongoing',
      investment: 'Enterprise pricing',
      details: [
        'All vehicles coated',
        'Re-application program',
        'Long-term partnership'
      ]
    }
  ]
};

// Impact Map
export const impactMapData = {
  productName: 'Ceraphene',
  nationalData: {
    locations: [
      { city: 'Mumbai', state: 'Maharashtra', projects: 15 },
      { city: 'Bangalore', state: 'Karnataka', projects: 12 },
      { city: 'Delhi NCR', state: 'Delhi', projects: 18 },
      { city: 'Hyderabad', state: 'Telangana', projects: 8 },
      { city: 'Pune', state: 'Maharashtra', projects: 10 },
      { city: 'Chennai', state: 'Tamil Nadu', projects: 7 }
    ],
    marketPenetration: '0.8%',
    penetrationDescription: 'Growing presence in metro cities',
    partnerships: '40+',
    partnershipDescription: 'Certified detailing studios',
    reach: '12 cities',
    reachDescription: 'Major metros and tier-1 cities'
  },
  internationalData: {
    locations: [
      { city: 'Dubai', state: 'UAE', projects: 4 }
    ],
    marketPenetration: '0.2%',
    penetrationDescription: 'Initial international presence',
    partnerships: '6+',
    partnershipDescription: 'Premium detailing partners',
    reach: '1 country',
    reachDescription: 'Middle East expansion'
  },
  stats: [
    { value: '70+', label: 'Projects' },
    { value: '5,000+', label: 'Vehicles Coated' },
    { value: '13', label: 'Cities' },
    { value: '46+', label: 'Partner Studios' }
  ]
};

// Product Data Sheet
export const dataSheetData = {
  productName: 'Ceraphene',
  specifications: [
    { parameter: 'Hardness', value: '9H+', testMethod: 'ASTM D3363' },
    { parameter: 'Durability', value: '3-4+ years', testMethod: 'Field validation' },
    { parameter: 'Hydrophobicity', value: '110°+ contact angle', testMethod: 'JIS R3257' },
    { parameter: 'UV Resistance', value: 'Excellent', testMethod: 'ASTM G154' },
    { parameter: 'Chemical Resistance', value: 'pH 2-12', testMethod: 'ASTM D1308' },
    { parameter: 'Application Temp', value: '15-25°C', testMethod: 'Application guide' },
    { parameter: 'Coverage', value: '30-40 ml per vehicle', testMethod: 'Application test' },
    { parameter: 'Curing Time', value: '12-24 hours', testMethod: 'Lab protocol' }
  ],
  documents: [
    {
      title: 'Technical Data Sheet',
      description: 'Complete specifications and properties',
      fileSize: '1.8 MB',
      format: 'PDF',
      filename: 'Ceraphene-TDS.pdf',
      url: '#'
    },
    {
      title: 'Application Guide',
      description: 'Professional application procedures',
      fileSize: '3.2 MB',
      format: 'PDF',
      filename: 'Ceraphene-Application-Guide.pdf',
      url: '#'
    },
    {
      title: 'Test Results',
      description: 'Independent lab testing reports',
      fileSize: '2.5 MB',
      format: 'PDF',
      filename: 'Ceraphene-Test-Report.pdf',
      url: '#'
    },
    {
      title: 'Safety Data Sheet',
      description: 'Material safety information',
      fileSize: '0.9 MB',
      format: 'PDF',
      filename: 'Ceraphene-SDS.pdf',
      url: '#'
    }
  ]
};

// Industry Solutions
export const industrySolutionsData = {
  productName: 'Ceraphene',
  industries: [
    {
      name: 'Luxury Car Owners',
      icon: 'automotive',
      description: 'Premium protection for high-value vehicles at a fraction of competitor costs.',
      useCases: [
        { title: 'New Car Protection', description: 'Protect paint from day one' },
        { title: 'Show Cars', description: 'Maintain pristine appearance' },
        { title: 'Daily Drivers', description: 'Durable protection for regular use' }
      ],
      benefits: [
        { title: '60-70% Cost Savings', description: 'vs. ₹15k+ premium coatings' },
        { title: 'Comparable Performance', description: 'Same 9H+ hardness and durability' },
        { title: 'Resale Value', description: 'Maintain paint condition' }
      ],
      metrics: [
        { value: '₹10,000', label: 'Saved' },
        { value: '9H+', label: 'Hardness' },
        { value: '3-4 years', label: 'Lasts' },
        { value: '95%', label: 'Satisfaction' }
      ]
    },
    {
      name: 'Fleet Operators',
      icon: 'manufacturing',
      description: 'Commercial fleets reducing maintenance costs and improving vehicle appearance.',
      useCases: [
        { title: 'Taxi Fleets', description: 'Reduce wash frequency and costs' },
        { title: 'Corporate Fleets', description: 'Maintain professional appearance' },
        { title: 'Rental Cars', description: 'Protect against wear and tear' }
      ],
      benefits: [
        { title: 'Lower Maintenance', description: '60% reduction in washing' },
        { title: 'Better Resale', description: 'Protected paint increases value' },
        { title: 'Professional Image', description: 'Always looking sharp' }
      ],
      metrics: [
        { value: '₹36,000', label: 'Saved/4yr' },
        { value: '-60%', label: 'Washing' },
        { value: '+15%', label: 'Resale Value' },
        { value: '100+', label: 'Fleet Size' }
      ]
    },
    {
      name: 'Detailing Studios',
      icon: 'construction',
      description: 'Professional detailers offering premium services with better profit margins.',
      useCases: [
        { title: 'Premium Packages', description: 'Top-tier coating offering' },
        { title: 'Fleet Contracts', description: 'Volume business opportunities' },
        { title: 'Specialty Services', description: 'Unique value proposition' }
      ],
      benefits: [
        { title: 'Higher Margins', description: '40-50% vs. competitor coatings' },
        { title: 'Customer Satisfaction', description: 'Long-lasting results' },
        { title: 'Repeat Business', description: 'Re-application after 3-4 years' }
      ],
      metrics: [
        { value: '45%', label: 'Margins' },
        { value: '200+', label: 'Vehicles/year' },
        { value: '4.8/5', label: 'Rating' },
        { value: '80%', label: 'Retention' }
      ]
    }
  ]
};

// Science Explained
export const scienceExplainedData = {
  productName: 'Ceraphene',
  sections: [
    {
      icon: 'mechanism',
      title: 'Graphene-Enhanced Formula',
      summary: 'How graphene nano-platelets create superior ceramic coating',
      content: [
        'Ceraphene combines traditional ceramic coating chemistry (silica and siloxane) with graphene nano-platelets. The graphene adds mechanical strength, flexibility, and durability that pure ceramic coatings cannot achieve.',
        'Graphene\'s 2D structure creates a nano-reinforcement mesh within the ceramic matrix, similar to rebar in concrete. This prevents microcracking and provides exceptional scratch resistance.',
        'The result is a coating that combines the best of both worlds: the hardness and gloss of ceramic with the flexibility and durability of graphene.'
      ],
      keyPoints: [
        {
          title: '9H+ Hardness',
          description: 'Exceeds pure ceramic coatings'
        },
        {
          title: 'Flexibility',
          description: 'Graphene prevents brittle failure'
        },
        {
          title: 'Extended Life',
          description: '25-40% longer than traditional coatings'
        }
      ],
      technicalData: {
        'GNP Content': 'Proprietary blend',
        'Ceramic Matrix': 'SiO2 + Si-O-Si',
        'Layer Thickness': '2-3 microns'
      }
    },
    {
      icon: 'properties',
      title: 'Performance Characteristics',
      summary: 'Measurable benefits of Ceraphene coating',
      content: [
        '9H+ hardness rating means exceptional scratch resistance. Most daily scratches (from washing, tree branches, etc.) cannot penetrate the coating.',
        'Ultra-hydrophobic surface (110°+ contact angle) causes water to bead and roll off, carrying dirt and contaminants with it. This self-cleaning effect dramatically reduces wash frequency.',
        'UV stability ensures the coating doesn\'t degrade or yellow over time. Paint underneath remains protected from UV-induced fading.',
        '3-4+ year lifespan is validated through accelerated aging tests and real-world field data from thousands of vehicles.'
      ],
      keyPoints: [
        {
          title: 'Scratch Protection',
          description: '9H+ hardness blocks daily damage'
        },
        {
          title: 'Self-Cleaning',
          description: 'Hydrophobic surface repels dirt'
        },
        {
          title: 'UV Protection',
          description: 'Prevents paint fading and oxidation'
        },
        {
          title: 'Long-Lasting',
          description: '3-4+ years of protection'
        }
      ],
      technicalData: {
        'Hardness': '9H+ (ASTM D3363)',
        'Contact Angle': '110°+',
        'UV Stability': '>99% after 2000h',
        'Durability': '3-4+ years field'
      }
    },
    {
      icon: 'science',
      title: 'Application & Bonding',
      summary: 'How Ceraphene bonds to automotive paint',
      content: [
        'Ceraphene forms a molecular bond with automotive clear coat through siloxane chemistry. The Si-O bonds create a permanent attachment that won\'t wash or peel off.',
        'Proper surface preparation is critical. Paint must be decontaminated and polished to remove embedded contaminants and create a smooth bonding surface.',
        'Once applied, the coating undergoes a 12-24 hour curing process. During this time, the ceramic matrix cross-links and the graphene platelets align to form the protective layer.'
      ],
      keyPoints: [
        {
          title: 'Molecular Bond',
          description: 'Permanent attachment to clear coat'
        },
        {
          title: 'Surface Preparation',
          description: 'Critical for proper bonding'
        },
        {
          title: 'Curing Process',
          description: '12-24 hours for full hardness'
        }
      ],
      technicalData: {
        'Bond Type': 'Si-O covalent',
        'Cure Time': '12-24 hours',
        'Full Hardness': '7 days',
        'Application Temp': '15-25°C'
      }
    }
  ]
};
