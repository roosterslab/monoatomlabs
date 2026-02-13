/**
 * Structured Content Data
 * All website content extracted from markdown files and organized for React components
 */

// Company Information
export const companyInfo = {
  name: 'Monoatom Labs',
  tagline: 'Building the future of advanced materials, one atom at a time',
  taglineAlt: "Unlocking Trillion Dollar Economy",
  founded: 2025,
  mission: 'Creating commercially viable graphene solutions for industrial applications',
  vision: 'Advanced Nanomaterials for Better Quality of Life',
  focus: ['Clean Air', 'Clean Water', 'Clean Energy', 'Better Life'],

  contact: {
    email: 'info@monoatomlabs.com',
    phone: '+91-989-919-9809',
    website: 'www.monoatomlabs.com',
    address: {
      line1: '3rd Floor, iHub',
      line2: 'Ahmedabad-380015',
      line3: 'Gujarat, India',
      full: '3rd Floor, iHub, Ahmedabad-380015, Gujarat, India'
    },
    businessHours: {
      weekdays: 'Monday - Friday: 9:00 AM - 6:00 PM IST',
      saturday: 'Saturday: 9:00 AM - 2:00 PM IST',
      sunday: 'Closed'
    }
  },

  departments: {
    partnerships: 'partnerships@monoatomlabs.com',
    products: 'products@monoatomlabs.com',
    construction: 'construction@monoatomlabs.com',
    solar: 'solar@monoatomlabs.com',
    automotive: 'automotive@monoatomlabs.com',
    materials: 'materials@monoatomlabs.com',
    research: 'research@monoatomlabs.com',
    sales: 'sales@monoatomlabs.com',
    media: 'media@monoatomlabs.com',
    support: 'support@monoatomlabs.com'
  }
};

// Products Data
export const products = {
  // Commercial Products
  ceraphene: {
    id: 'ceraphene',
    name: 'Ceraphene',
    category: 'Ceramic Coating',
    status: 'Commercial',
    tagline: 'Ultra-Durable Ceramic Coating',
    description: 'Graphene-enhanced ceramic coating providing industry-leading protection, hardness, and surface performance at 60-70% lower cost than premium alternatives.',
    shortDescription: 'Premium protection at accessible pricing',
    image: '/images/ceraphene-01.jpg',

    keyMetrics: [
      { label: 'Hardness', value: '9H+' },
      { label: 'Durability', value: '3-4+ years' },
      { label: 'Cost Savings', value: '60-70%' },
      { label: 'Price', value: '₹5,000/50ml' }
    ],

    benefits: [
      {
        title: '9H+ hardness with extreme scratch resistance',
        description: 'Exceeds industry standards for hardness and superior protection against scratches and abrasions'
      },
      {
        title: 'Enhanced UV, heat, and chemical durability',
        description: 'Protects against UV degradation, heat exposure, and chemical environments'
      },
      {
        title: 'Ultra-hydrophobic, anti-static & stain-resistant barrier',
        description: 'Excellent water repellency with anti-static properties and stain resistance'
      },
      {
        title: 'Extends coating lifecycle by 25-40%',
        description: 'Longer-lasting protection with premium finish quality'
      },
      {
        title: '3-4+ years durability',
        description: 'Long-lasting performance with reduced re-coating frequency'
      },
      {
        title: 'Excellent gloss and color depth',
        description: 'Enhanced surface appearance with mirror-like finish quality'
      },
      {
        title: 'Low maintenance frequency',
        description: 'Self-cleaning properties reduce cleaning requirements'
      },
      {
        title: 'Very high cost effectiveness',
        description: '60-70% lower cost than premium competitors with superior value proposition'
      }
    ],

    specifications: {
      hardness: '9H+ (exceeds industry standards)',
      durability: '3-4+ years',
      hydrophobicity: 'Excellent (>110° contact angle)',
      uvResistance: 'Excellent',
      heatResistance: 'Excellent',
      chemicalResistance: 'Enhanced',
      antiStatic: 'Yes',
      maintenanceFrequency: 'Low',
      coverage: '1 vehicle per 50ml',
      price: '₹5,000/50ml'
    },

    applications: [
      'Automotive exterior paint surfaces',
      'Two-wheelers & premium motorcycles',
      'Luxury & commercial vehicles',
      'Marine painted surfaces',
      'Exterior painted metal & alloy surfaces',
      'Architectural painted panels & façades',
      'Industrial painted equipment & enclosures'
    ],

    markets: ['Automotive', 'Marine', 'Industrial', 'Architectural']
  },

  graphacrete: {
    id: 'graphacrete',
    name: 'Graphacrete',
    category: 'Construction Additive',
    status: 'Commercial',
    tagline: 'High-Performance Concrete Additive',
    description: 'Graphene nano-platelet additive that transforms standard concrete grades into high-performance materials with superior strength, durability, and water resistance.',
    shortDescription: 'Transform standard concrete into high-performance material',
    image: '/images/graphacrete-01.jpg',

    keyMetrics: [
      { label: 'Strength Gain', value: '40-50%' },
      { label: 'Cement Reduction', value: '15-20%' },
      { label: 'Dosage', value: '0.05-0.10%' },
      { label: 'Performance', value: 'M30 → M50' }
    ],

    benefits: [
      {
        title: '50% increase in compressive & flexural strength',
        description: 'M30 grade + Graphacrete ≈ M50 performance (NABL certified)'
      },
      {
        title: 'Improved crack resistance and durability',
        description: 'Excellent micro-crack control with enhanced structural integrity'
      },
      {
        title: '30-45% lower permeability & higher chemical resistance',
        description: 'Superior water resistance ideal for marine and harsh environments'
      },
      {
        title: '15-20% cement reduction',
        description: 'Reduced carbon footprint with significant environmental benefits'
      },
      {
        title: 'Enhanced thermal dissipation',
        description: 'Better heat management in structures with energy savings'
      },
      {
        title: 'Excellent micro-crack control',
        description: 'Prevents crack propagation and reduces maintenance needs'
      }
    ],

    specifications: {
      dosage: '0.05-0.10% (by weight of cement)',
      strengthGain: '40-50%',
      waterResistance: '30-45% improvement',
      cementSaving: '15-20%',
      microCrackControl: 'Excellent',
      certification: 'NABL certified',
      compatibility: 'PCC, RCC, Precast mixes'
    },

    applications: [
      'High-rise buildings and infrastructure',
      'Bridges and flyovers',
      'Marine structures and coastal construction',
      'Industrial flooring and warehouses',
      'Precast concrete manufacturing',
      'Underground construction and tunnels',
      'Water-retaining structures'
    ],

    markets: ['Construction', 'Infrastructure', 'Precast', 'Marine']
  },

  graffisol: {
    id: 'graffisol',
    name: 'Graffisol',
    category: 'Solar Coating',
    status: 'Commercial',
    tagline: 'Solar Panel Efficiency Enhancement',
    description: 'Graphene-based transparent coating that enhances solar panel efficiency through superior light transmission, thermal management, and self-cleaning properties.',
    shortDescription: 'Boost solar panel efficiency and longevity',
    image: '/images/graffisol-01.jpg',

    keyMetrics: [
      { label: 'Efficiency Gain', value: '8-12%' },
      { label: 'Self-Cleaning', value: 'Yes' },
      { label: 'UV Protection', value: 'Excellent' },
      { label: 'Durability', value: '5+ years' }
    ],

    benefits: [
      {
        title: '8-12% efficiency improvement',
        description: 'Enhanced light transmission and reduced reflection losses'
      },
      {
        title: 'Superior thermal management',
        description: 'Graphene\'s thermal conductivity reduces panel temperature'
      },
      {
        title: 'Self-cleaning hydrophobic surface',
        description: 'Reduces soiling and maintenance requirements'
      },
      {
        title: 'Enhanced UV protection',
        description: 'Protects panel surfaces from UV degradation'
      },
      {
        title: '5+ year durability',
        description: 'Long-lasting performance in harsh outdoor conditions'
      },
      {
        title: 'Anti-soiling properties',
        description: 'Maintains efficiency by preventing dust accumulation'
      }
    ],

    specifications: {
      efficiencyGain: '8-12%',
      lightTransmission: '>95%',
      hydrophobicity: 'Excellent',
      thermalConductivity: 'Enhanced',
      uvResistance: 'Excellent',
      durability: '5+ years',
      maintenance: 'Reduced by 40-50%'
    },

    applications: [
      'Rooftop solar installations',
      'Solar farms and utility-scale projects',
      'Building-integrated photovoltaics (BIPV)',
      'Automotive solar integrations',
      'Off-grid solar systems',
      'Solar water heating systems'
    ],

    markets: ['Solar Energy', 'Renewable Energy', 'Automotive', 'Construction']
  },

  hdgpe: {
    id: 'hd-g-pe',
    name: 'HD-G-PE',
    category: 'Polymer Enhancer',
    status: 'Commercial',
    tagline: 'Graphene-Enhanced Polymer Additive',
    description: 'High-performance graphene additive for polyethylene and other polymers, delivering enhanced mechanical, thermal, and barrier properties.',
    shortDescription: 'Enhance polymer performance with graphene',
    image: '/images/hd-g-pe-01.jpg',

    keyMetrics: [
      { label: 'Strength Increase', value: '30%' },
      { label: 'Thermal Stability', value: 'Enhanced' },
      { label: 'Dosage', value: 'Low' },
      { label: 'Compatibility', value: 'Wide' }
    ],

    benefits: [
      {
        title: '30% increase in mechanical strength',
        description: 'Enhanced tensile, flexural, and impact strength'
      },
      {
        title: 'Improved thermal stability',
        description: 'Better performance at elevated temperatures'
      },
      {
        title: 'Enhanced barrier properties',
        description: 'Improved resistance to gas and moisture permeation'
      },
      {
        title: 'Better electrical conductivity',
        description: 'Enables anti-static and conductive applications'
      },
      {
        title: 'Lightweight solutions',
        description: 'Achieve higher performance without weight penalty'
      },
      {
        title: 'Low dosage effectiveness',
        description: 'Significant improvements at minimal loading'
      }
    ],

    specifications: {
      dosage: '0.5-2% (by weight)',
      strengthIncrease: '30%',
      thermalStability: 'Enhanced',
      barrierImprovement: 'Significant',
      compatibility: 'PE, PP, PVC, and other polymers',
      processing: 'Standard polymer processing'
    },

    applications: [
      'Automotive plastic components',
      'Packaging materials',
      'Pipes and fittings',
      'Wire and cable insulation',
      'Consumer goods',
      'Industrial components'
    ],

    markets: ['Automotive', 'Packaging', 'Construction', 'Industrial']
  }
};

// Pipeline Products
export const pipelineProducts = {
  armophene: {
    id: 'armophene',
    name: 'Armophene',
    category: 'Ballistic Protection',
    status: 'Pipeline',
    tagline: 'Advanced Ballistic Protection',
    description: 'Graphene-reinforced composite for lightweight, high-performance ballistic protection.',
    markets: ['Defense', 'Security', 'Aerospace']
  },

  graphosite: {
    id: 'graphosite',
    name: 'Graphosite',
    category: 'Composite Material',
    status: 'Pipeline',
    tagline: 'High-Performance Composites',
    description: 'Graphene-enhanced composites for aerospace and advanced applications.',
    markets: ['Aerospace', 'Automotive', 'Industrial']
  },

  graphyre: {
    id: 'graphyre',
    name: 'Graphyre',
    category: 'Tire Technology',
    status: 'Pipeline',
    tagline: 'Next-Generation Tire Technology',
    description: 'Graphene-reinforced tire technology for improved durability and fuel efficiency.',
    markets: ['Automotive', 'Commercial Vehicles']
  },

  rustene: {
    id: 'rustene',
    name: 'Rustene',
    category: 'Anti-Corrosion',
    status: 'Pipeline',
    tagline: 'Advanced Anti-Corrosion Coating',
    description: 'Graphene-based anti-corrosion coating for extended metal protection.',
    markets: ['Automotive', 'Marine', 'Industrial', 'Infrastructure']
  },

  thermaphene: {
    id: 'thermaphene',
    name: 'Thermaphene',
    category: 'Thermal Management',
    status: 'Pipeline',
    tagline: 'Thermal Management Solution',
    description: 'Graphene-based thermal interface material for electronics and batteries.',
    markets: ['Electronics', 'Energy Storage', 'Automotive']
  }
};

// Industries Data
export const industries = {
  construction: {
    id: 'construction',
    name: 'Construction & Infrastructure',
    tagline: 'Building Stronger, More Sustainable Infrastructure',
    description: 'Graphene-enhanced concrete additives deliver superior strength, durability, and sustainability for modern construction.',
    challenges: [
      'High cement consumption and carbon footprint',
      'Durability and crack resistance requirements',
      'Water ingress and corrosion issues',
      'Need for high-performance at competitive costs'
    ],
    solutions: ['Graphacrete'],
    benefits: [
      '40-50% strength increase',
      '15-20% cement reduction',
      'Superior crack resistance',
      'Enhanced water resistance',
      'Reduced carbon footprint'
    ]
  },

  solar: {
    id: 'solar',
    name: 'Solar & Clean Energy',
    tagline: 'Maximizing Solar Energy Generation',
    description: 'Advanced coatings enhance solar panel efficiency, reduce maintenance, and improve long-term performance.',
    challenges: [
      'Efficiency losses from soiling and temperature',
      'High maintenance costs',
      'Panel degradation over time',
      'Need for improved ROI'
    ],
    solutions: ['Graffisol'],
    benefits: [
      '8-12% efficiency improvement',
      'Self-cleaning properties',
      'Reduced maintenance costs',
      'Extended panel lifespan',
      'Better thermal management'
    ]
  },

  automotive: {
    id: 'automotive',
    name: 'Automotive & Coatings',
    tagline: 'Premium Protection at Accessible Prices',
    description: 'Graphene-enhanced coatings provide superior protection, durability, and aesthetics at fraction of premium costs.',
    challenges: [
      'Premium coatings are expensive',
      'Traditional coatings lack durability',
      'High maintenance requirements',
      'Market differentiation challenges'
    ],
    solutions: ['Ceraphene', 'HD-G-PE', 'Graphyre (Pipeline)', 'Rustene (Pipeline)'],
    benefits: [
      '9H+ scratch resistance',
      '60-70% cost savings',
      '3-4+ year durability',
      'Low maintenance',
      'Premium aesthetics'
    ]
  },

  advancedMaterials: {
    id: 'advanced-materials',
    name: 'Advanced Materials & Polymers',
    tagline: 'Enhancing Polymer Performance',
    description: 'Graphene additives transform standard polymers into high-performance materials.',
    challenges: [
      'Need for stronger, lighter materials',
      'Thermal management requirements',
      'Barrier property improvements',
      'Cost-effective enhancement solutions'
    ],
    solutions: ['HD-G-PE', 'Graphosite (Pipeline)'],
    benefits: [
      '30% strength increase',
      'Enhanced thermal stability',
      'Improved barrier properties',
      'Lightweight solutions',
      'Low dosage effectiveness'
    ]
  }
};

// Technology Platform
export const technology = {
  pillars: [
    {
      title: 'Graphene Synthesis & Processing',
      description: 'High-quality graphene at scale with customizable properties',
      capabilities: [
        'Purity up to 99%+',
        'Thickness control: 5-10 nm',
        'Multiple graphene types (GNP, GO, rGO)',
        'Batch-to-batch consistency',
        'Scalable production'
      ]
    },
    {
      title: 'Nanomaterial Functionalization',
      description: 'Tailoring graphene for specific applications',
      capabilities: [
        'Chemical functionalization',
        'Non-covalent functionalization',
        'Surface charge modification',
        'Polymer grafting',
        'Compatibility optimization'
      ]
    },
    {
      title: 'Advanced Dispersion Technologies',
      description: 'Uniform graphene distribution in various matrices',
      capabilities: [
        'Proprietary dispersion methods',
        'Matrix-specific optimization',
        'Stable suspensions',
        'Scale-up capability',
        'Quality control protocols'
      ]
    },
    {
      title: 'Application Development & Testing',
      description: 'Lab to market validation and scale-up',
      capabilities: [
        'NABL-certified testing',
        'Field validation programs',
        'Pilot-scale production',
        'Performance optimization',
        'Technical support'
      ]
    }
  ],

  capabilities: [
    'Materials Innovation',
    'Application Development',
    'Manufacturing Scale-Up',
    'Quality Control & Testing',
    'Technical Support & Training'
  ],

  facilities: {
    headquarters: 'Ahmedabad, Gujarat',
    facilities: [
      'Corporate headquarters',
      'R&D and innovation center',
      'Testing and characterization laboratories',
      'Pilot-scale production facilities',
      'Meeting and demonstration spaces'
    ]
  }
};

// Partnership Models
export const partnership = {
  models: [
    {
      name: 'Technology Licensing',
      description: 'License proven graphene technologies for your products',
      benefits: [
        'IP protection',
        'Technical know-how transfer',
        'Ongoing R&D support',
        'Flexible terms'
      ],
      suitableFor: 'Manufacturers seeking to enhance products'
    },
    {
      name: 'Joint Venture / SPV',
      description: 'Co-create dedicated manufacturing entities',
      benefits: [
        'Shared investment',
        'Risk mitigation',
        'Market access',
        'Scalable growth'
      ],
      suitableFor: 'Strategic partners for market development'
    },
    {
      name: 'Contract Manufacturing',
      description: 'We manufacture, you market under your brand',
      benefits: [
        'No capex required',
        'Quality assurance',
        'Scalable production',
        'Focus on sales'
      ],
      suitableFor: 'Companies with market access'
    },
    {
      name: 'Co-Development',
      description: 'Custom material development for specific needs',
      benefits: [
        'Tailored solutions',
        'Shared IP',
        'Technical collaboration',
        'Market exclusivity options'
      ],
      suitableFor: 'Innovation-focused organizations'
    }
  ]
};

// About Content
export const about = {
  company: {
    overview: 'Monoatom Labs develops breakthrough materials engineered for the future—graphene derivatives, functional nanomaterials, bio-inspired chemistries, and performance-enhancing additives.',
    differentiators: [
      {
        title: 'Deep Scientific Expertise',
        description: 'Team from IISc, IIT, and National Chemical Laboratory'
      },
      {
        title: 'Industrial Scale Capability',
        description: 'Pilot-scale to commercial manufacturing capability'
      },
      {
        title: 'Real-World Validation',
        description: 'NABL-certified testing and field-validated results'
      },
      {
        title: 'IP-Driven Innovation',
        description: 'Patented formulations and proprietary processes'
      }
    ]
  },

  founders: {
    sushanthPaatnaik: {
      name: 'Sushanth Paatnaik',
      role: 'Co-Founder',
      background: 'Innovation journey starting from age 11, multiple Presidential awards',
      expertise: 'Materials Science, Graphene Technology'
    },
    aayushBansal: {
      name: 'Aayush Bansal',
      role: 'Co-Founder',
      background: '38+ years of manufacturing experience',
      expertise: 'Industrial Operations, Business Development'
    }
  },

  facilities: {
    location: 'Ahmedabad, Gujarat, India',
    capabilities: [
      'Corporate headquarters',
      'R&D and innovation center',
      'Testing and characterization laboratories',
      'Pilot-scale production facilities',
      'Meeting and demonstration spaces'
    ]
  }
};

// Navigation Structure
export const navigation = {
  main: [
    { label: 'Home', path: '/' },
    {
      label: 'Products',
      path: '/products',
      submenu: [
        { label: 'All Products', path: '/products' },
        { label: 'Ceraphene', path: '/products/ceraphene' },
        { label: 'Graphacrete', path: '/products/graphacrete' },
        { label: 'Graffisol', path: '/products/graffisol' },
        { label: 'HD-G-PE', path: '/products/hd-g-pe' },
        { label: 'Pipeline Products', path: '/products/pipeline' }
      ]
    },
    {
      label: 'Industries',
      path: '/industries',
      submenu: [
        { label: 'Construction', path: '/industries/construction' },
        { label: 'Solar Energy', path: '/industries/solar-energy' },
        { label: 'Automotive', path: '/industries/automotive' },
        { label: 'Advanced Materials', path: '/industries/advanced-materials' }
      ]
    },
    {
      label: 'Technology',
      path: '/technology',
      submenu: [
        { label: 'Platform', path: '/technology/platform' },
        { label: 'Capabilities', path: '/technology/capabilities' },
        { label: 'Pilot Projects', path: '/technology/pilot-projects' }
      ]
    },
    {
      label: 'About',
      path: '/about',
      submenu: [
        { label: 'Company', path: '/about/company' },
        { label: 'Founders & Team', path: '/about/founders-team' },
        { label: 'Facilities', path: '/about/facilities' }
      ]
    },
    { label: 'Partnership', path: '/partnership' },
    { label: 'Contact', path: '/contact' }
  ],

  footer: {
    company: [
      { label: 'About Us', path: '/about/company' },
      { label: 'Founders & Team', path: '/about/founders-team' },
      { label: 'Facilities', path: '/about/facilities' },
      { label: 'Partnership', path: '/partnership' }
    ],
    products: [
      { label: 'Ceraphene', path: '/products/ceraphene' },
      { label: 'Graphacrete', path: '/products/graphacrete' },
      { label: 'Graffisol', path: '/products/graffisol' },
      { label: 'HD-G-PE', path: '/products/hd-g-pe' },
      { label: 'Pipeline', path: '/products/pipeline' }
    ],
    industries: [
      { label: 'Construction', path: '/industries/construction' },
      { label: 'Solar Energy', path: '/industries/solar-energy' },
      { label: 'Automotive', path: '/industries/automotive' },
      { label: 'Advanced Materials', path: '/industries/advanced-materials' }
    ],
    technology: [
      { label: 'Platform', path: '/technology/platform' },
      { label: 'Capabilities', path: '/technology/capabilities' },
      { label: 'Pilot Projects', path: '/technology/pilot-projects' }
    ],
    resources: [
      { label: 'Contact', path: '/contact' },
      { label: 'Partnership', path: '/partnership' }
    ]
  }
};

// Export all data
export default {
  companyInfo,
  products,
  pipelineProducts,
  industries,
  technology,
  partnership,
  about,
  navigation
};
