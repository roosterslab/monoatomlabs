import {
  Activity, Wind, Zap, Gauge, Filter, Droplets, Factory, Layers, Beaker, CheckCircle2,
  FlaskConical, Battery, Calculator, Droplet, Waves, Globe, Sprout, Box, ShieldCheck,
  Clock, Repeat, Server, Smartphone, Car, Plane, Shield, Lock, UserCheck, Truck, Target,
  BarChart3, DollarSign, Anchor, Construction, Thermometer, Flame, Shirt, Component,
  Cuboid, Hammer, Weight, HardHat, Building, Ship, Sun, Leaf, Settings, Sparkles
} from 'lucide-react';

export const pipelineProducts = {
  hydrogenMembranes: {
    id: 'hydrogenMembranes',
    title: 'Hydrogen Membranes',
    subtitle: 'High-selectivity graphene membranes enabling efficient hydrogen separation and production with reduced energy losses for clean energy infrastructure.',
    category: 'Pilot Trials',
    categoryColor: 'bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30',
    heroImages: ['/images/hydrogen_hero.png'],
    accentColor: 'teal',

    introduction: {
      title: 'The Challenge',
      subtitle: 'Purity is the key to the hydrogen economy.',
      description: [
        'Producing high-purity hydrogen is energy-intensive and expensive. Current separation methods like pressure swing adsorption are bulky and inefficient.',
        'Our graphene membranes offer a molecular sieve solution. With precise atomic-scale pores, they allow small hydrogen molecules to pass through while blocking larger contaminants like CO2 and methane, slashing energy costs by up to 50%.'
      ],
      images: ['/images/pipeline/studio/Gryogen.png', '/images/pipeline/studio/HydrogenMembranes.png']
    },

    processFlow: {
      title: 'How It Works',
      subtitle: 'Atomic precision filtering.',
      steps: [
        { icon: Activity, title: 'Synthesis', description: 'Growing high-quality single-layer graphene on copper substrates.' },
        { icon: Filter, title: 'Perforation', description: 'Creating precise nano-pores using focused ion beams.' },
        { icon: Layers, title: 'Transfer', description: 'Transferring graphene onto a porous support structure.' },
        { icon: Gauge, title: 'Assembly', description: 'Stacking membranes into high-throughput separation modules.' }
      ]
    },

    features: {
      title: 'Core Performance',
      subtitle: 'Efficiency at scale.',
      hero: {
        icon: Filter,
        title: 'Tunable Selectivity',
        description: 'By controlling pore size at the angstrom level, we can tune our membranes to separate specific gases with unprecedented selectivity, far surpassing polymeric membranes.'
      },
      stats: [
        { value: '99.9%', label: 'Purity', description: 'Meeting fuel cell grade standards directly.' },
        { icon: Zap, title: 'Low Energy', description: 'Passive separation process requires no heat or phase change.' }
      ],
      metrics: [
        { value: '>1000', label: 'Selectivity (H2/CO2)' },
        { value: 'High', label: 'Permeance' },
        { value: '500°C', label: 'Thermal Stability' },
        { value: 'Compact', label: 'Footprint' }
      ]
    },

    gallery: {
      title: 'Product Gallery',
      subtitle: 'Visualizing the future of hydrogen.',
      images: [
        '/images/pipeline/studio/HydrogenMembranes.png',
        '/images/pipeline/studio/Gryogen.png',
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/jo5_zAQJozQ',
          label: 'Hydrogen Membrane Technology Demo'
        }
      ]
    },

    timeline: {
      title: 'Development Roadmap',
      subtitle: 'Fueling the future.',
      events: [
        { phase: 'Phase 1: R&D', title: 'Pore Size Control', description: 'Achieving sub-nanometer precision to allow only H2 molecules to pass.', status: 'completed', date: 'Q3 2024' },
        { phase: 'Phase 2: Pilot', title: 'Small-Scale Reactor', description: 'Testing separation efficiency in a continuous flow setup.', status: 'current', date: 'Q4 2025' },
        { phase: 'Phase 3: Scale-Up', title: 'Industrial Module', description: 'Developing large-area membranes for commercial hydrogen plants.', status: 'upcoming', date: '2027' }
      ]
    },

    applications: {
      title: 'Applications',
      subtitle: 'Clean energy infrastructure.',
      items: [
        { title: 'Hydrogen Production', description: 'Purifying hydrogen from natural gas reforming or electrolysis.', icon: Factory },
        { title: 'Fuel Cells', description: 'Ensuring ultra-pure hydrogen fuel for vehicle stacks.', icon: Zap },
        { title: 'Carbon Capture', description: 'Separating CO2 from industrial flue gases.', icon: Wind },
        { title: 'Gas Processing', description: 'Refining natural gas and biogas streams.', icon: Droplets }
      ]
    },

    cta: {
      title: 'Accelerate the H2 economy.',
      description: 'Efficient separation is the missing link for affordable hydrogen. Join us in scaling this critical technology.',
      primaryButton: { text: 'Partner with Us', link: '/contact' },
      secondaryButton: { text: 'Back to Pipeline', link: '/products/pipeline' },
      gradient: 'from-indigo-900/30 via-indigo-950/20 to-black'
    },

    // Special sections (optional)
    extraSections: [
      {
        id: 'seawater-electrolyzer',
        number: '04',
        type: 'custom',
        title: 'Seawater Electrolyzer - Experimental Validation',
        subtitle: 'Direct hydrogen generation from raw seawater without filtration.',
        // This will be rendered with custom JSX in the template
      },
      {
        id: 'energy-generation',
        number: '05',
        type: 'custom',
        title: 'Energy Generation from Hydrogen',
        subtitle: 'Fuel cell efficiency and electrical output calculations.',
        // This will be rendered with custom JSX in the template
      }
    ]
  },

  desalinationMembranes: {
    id: 'desalinationMembranes',
    title: 'Mariphene',
    subtitle: 'Desalination Membranes | Solving the global water crisis with ultra-permeable graphene membranes that desalinate seawater at a fraction of the energy cost.',
    category: 'Pilot Trials',
    categoryColor: 'bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30',
    heroImages: ['/images/desalination_hero.png'],
    accentColor: 'teal',

    introduction: {
      title: 'The Challenge',
      subtitle: 'Water is abundant, but fresh water is scarce.',
      description: [
        'Current desalination technologies require immense amounts of energy to force water through thick polymer membranes. This makes desalinated water expensive and environmentally taxing.',
        'Our graphene membranes are just one atom thick. This extreme thinness offers minimal resistance to water flow while perfectly blocking salt ions, reducing energy consumption by up to 40%.'
      ],
      images: ['/images/pipeline/studio/DesalinationMembranes.png']
    },

    processFlow: {
      title: 'How It Works',
      subtitle: 'Sieving salt at the atomic scale.',
      steps: [
        { icon: Waves, title: 'Intake', description: 'Seawater is pre-treated and pressurized.' },
        { icon: Filter, title: 'Filtration', description: 'Water passes through graphene nanopores rejected salt ions.' },
        { icon: Zap, title: 'Efficiency', description: 'Low friction allows high flow rates at lower pressures.' },
        { icon: Droplet, title: 'Fresh Water', description: 'Pure water is collected for municipal or industrial use.' }
      ]
    },

    features: {
      title: 'Core Performance',
      subtitle: 'More flow. Less energy.',
      hero: {
        icon: Droplet,
        title: 'High-Flux Permeability',
        description: 'Water molecules pass through our graphene membranes 100x faster than through traditional polymers, allowing for smaller plants and lower operating pressures.',
        gradient: 'from-cyan-900 via-cyan-950 to-black',
        iconBg: 'bg-cyan-500/20 border border-cyan-400/30',
        iconColor: 'text-cyan-300'
      },
      stats: [
        { value: '-40%', label: 'Energy Use', description: 'Drastically lowering the cost of water.', bg: 'bg-gradient-to-br from-cyan-50 to-cyan-100/50', border: 'border-cyan-200', color: 'text-cyan-700' },
        { icon: Gauge, title: 'Durability', description: 'Resistant to chlorine and bio-fouling.', iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50 border border-emerald-100' }
      ],
      metrics: [
        { value: '99.7%', label: 'Salt Rejection', labelColor: 'text-cyan-400' },
        { value: 'High', label: 'Flow Rate', labelColor: 'text-cyan-400' },
        { value: 'Low', label: 'Pressure Req', labelColor: 'text-cyan-400' },
        { value: 'Long', label: 'Lifespan', labelColor: 'text-cyan-400' }
      ]
    },

    gallery: {
      title: 'Product Gallery',
      subtitle: 'Visualizing the future of desalination.',
      images: [
        { type: 'single', image: '/images/pipeline/studio/DesalinationMembranes.png', label: 'Studio Module', bg: 'bg-neutral-100' },
        { type: 'single', image: '/images/desalination_hero.png', label: 'Operational Environment', overlay: true }
      ]
    },

    timeline: {
      title: 'Development Roadmap',
      subtitle: 'Flowing towards the future.',
      events: [
        { phase: 'Phase 1: Lab', title: 'Membrane Synthesis', description: 'Creating large-area single-layer graphene supports.', status: 'completed', date: 'Q2 2024' },
        { phase: 'Phase 2: Prototype', title: 'Module Testing', description: 'Validating salt rejection rates of >99% in test cells.', status: 'current', date: 'Q4 2025' },
        { phase: 'Phase 3: Pilot', title: 'Desalination Plant Trial', description: 'Installing pilot modules at a coastal desalination facility.', status: 'upcoming', date: '2027' }
      ]
    },

    applications: {
      title: 'Applications',
      subtitle: 'Water for a thirsty world.',
      items: [
        { title: 'Municipal Water', description: 'Providing potable water for coastal cities.', icon: Globe },
        { title: 'Industrial Treatment', description: 'Purifying process water for manufacturing.', icon: Factory },
        { title: 'Agriculture', description: 'Desalinating brackish water for irrigation.', icon: Sprout },
        { title: 'Emergency Relief', description: 'Portable desalination units for disaster zones.', icon: Activity }
      ]
    },

    cta: {
      title: 'Partner for water security.',
      description: 'Help us bring affordable, clean water to the world. We are looking for pilot partners.',
      primaryButton: { text: 'Inquire Now', link: '/contact' },
      secondaryButton: { text: 'Back to Pipeline', link: '/products/pipeline' },
      gradient: 'from-cyan-900/30 via-cyan-950/20 to-black'
    }
  },

  atmosphericHarvesting: {
    id: 'atmosphericHarvesting',
    title: 'Aerophenter',
    subtitle: 'Atmospheric Moisture Harvesting | Graphene membranes engineered to harvest atmospheric moisture and convert air into potable water efficiently for sustainable water production.',
    category: 'Pilot Trials',
    categoryColor: 'bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30',
    heroImages: ['/images/atmospheric_hero.png'],
    accentColor: 'teal',

    introduction: {
      title: 'The Challenge',
      subtitle: 'Water scarcity is a growing global crisis.',
      description: [
        'Traditional water sources are depleting, and desalination is energy-intensive. Billions of people lack access to clean drinking water, especially in arid regions. We need a decentralized, sustainable solution that taps into the moisture present in the air all around us.',
        'Our Graphene-Enhanced Atmospheric Water Generator (AWG) utilizes the extraordinary surface area and hydrophilic properties of graphene to capture moisture even at low humidity levels, delivering clean water with minimal energy consumption.'
      ],
      images: ['/images/pipeline/studio/aerophenter_studio.png', '/images/pipeline/studio/AtmosphericHarvesting-2.png']
    },

    processFlow: {
      title: 'How It Works',
      subtitle: 'From thin air to pure water.',
      steps: [
        { icon: Wind, title: 'Air Intake', description: 'Ambient air is drawn through a specialized intake system.' },
        { icon: Box, title: 'Graphene Filtration', description: 'Air passes through graphene oxide membranes that selectively adsorb moisture.' },
        { icon: Droplet, title: 'Condensation', description: 'Captured moisture is released and condensed into pure, liquid water.' },
        { icon: ShieldCheck, title: 'Purification', description: 'Final mineralization and filtration ensure potable quality.' }
      ]
    },

    features: {
      title: 'Core Technology',
      subtitle: 'Breakthrough efficiency driven by graphene.',
      hero: {
        icon: Droplet,
        title: 'Hyper-Efficient Adsorption',
        description: 'Our graphene oxide framework enables moisture capture at humidity levels as low as 20%, significantly outperforming conventional desiccant wheels.',
        gradient: 'from-teal-900 via-teal-950 to-black',
        iconBg: 'bg-teal-500/20 border border-teal-400/30',
        iconColor: 'text-teal-300'
      },
      stats: [
        { value: '30%', label: 'More Energy Efficient', description: 'Compared to standard compression-based AWGs.', bg: 'bg-gradient-to-br from-teal-50 to-teal-100/50', border: 'border-teal-200', color: 'text-teal-700' },
        { icon: Zap, title: 'Solar Ready', description: 'Designed for full integration with solar PV systems for zero-carbon operation.', iconColor: 'text-amber-600', iconBg: 'bg-amber-50 border border-amber-100' }
      ],
      metrics: [
        { value: '50L', label: 'Daily Output (Unit)' },
        { value: '99.9%', label: 'Purity Level' },
        { value: '24/7', label: 'Operation Cycle' },
        { value: '<0.3', label: 'kWh per Liter' }
      ]
    },

    gallery: {
      title: 'Product Gallery',
      subtitle: 'Visualizing the future of water security.',
      images: [
        '/images/pipeline/studio/aerophenter_studio.png',
        '/images/pipeline/studio/AtmosphericHarvesting-2.png',
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/P25aS8s4ar0',
          label: 'Product Demo Video'
        }
      ]
    },

    timeline: {
      title: 'Development Roadmap',
      subtitle: 'Path to commercialization.',
      events: [
        { phase: 'Phase 1: Lab', title: 'Material Synthesis', description: 'Development of high-surface-area graphene oxide frameworks for maximum moisture adsorption.', status: 'completed', date: 'Q3 2024' },
        { phase: 'Phase 2: Prototype', title: 'Small-Scale AWG Unit', description: 'Engineering a portable unit capable of harvesting 10L/day in arid conditions.', status: 'current', date: 'Q2 2025' },
        { phase: 'Phase 3: Pilot', title: 'Field Deployment', description: 'Deployment of community-scale units in water-scarce regions for real-world validation.', status: 'upcoming', date: '2026' }
      ]
    },

    applications: {
      title: 'Applications',
      subtitle: 'Solving water scarcity everywhere.',
      items: [
        { title: 'Arid & Desert Regions', description: 'Providing a reliable water source in areas with low humidity and no groundwater.', icon: Globe },
        { title: 'Emergency Relief', description: 'Rapidly deployable water stations for disaster zones and refugee camps.', icon: ShieldCheck },
        { title: 'Off-Grid Communities', description: 'Sustainable water independence for remote villages and eco-resorts.', icon: Zap },
        { title: 'Military Operations', description: 'Reducing logistical burden by generating water on-site for deployed forces.', icon: Box }
      ]
    },

    cta: {
      title: 'Partner with us.',
      description: 'We are currently seeking pilot partners for our Atmospheric Water Generators. Join us in solving the global water crisis.',
      primaryButton: { text: 'Deploy Pilot', link: '/contact' },
      secondaryButton: { text: 'Back to Pipeline', link: '/products/pipeline' },
      gradient: 'from-teal-900/30 via-teal-950/20 to-black'
    }
  },

  batteryStorage: {
    id: 'batteryStorage',
    title: 'Voltaphene',
    subtitle: 'Graphene Battery Storage | Supercharging energy storage with graphene-enhanced electrodes that deliver higher density, faster charging, and longer lifecycles.',
    category: 'Pilot Trials',
    categoryColor: 'bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30',
    heroImages: ['/images/battery_hero.png'],
    accentColor: 'teal',

    introduction: {
      title: 'The Challenge',
      subtitle: 'The bottleneck of the electric future.',
      description: [
        'Current lithium-ion batteries are reaching their theoretical limits. They take too long to charge, degrade too quickly, and are heavy. This limits the adoption of EVs and renewable energy.',
        'By integrating graphene into battery electrodes, we drastically improve electrical conductivity and structural stability. This allows for faster electron flow (charging) and prevents the material from cracking during expansion (longevity).'
      ],
      images: ['/images/pipeline/studio/Voltaphene.png']
    },

    processFlow: {
      title: 'How It Works',
      subtitle: 'Conductivity at the speed of graphene.',
      steps: [
        { icon: Activity, title: 'Anode', description: 'Graphene-silicon composite anodes for higher capacity.' },
        { icon: Zap, title: 'Cathode', description: 'Conductive graphene networks improve electron transport.' },
        { icon: Layers, title: 'Assembly', description: 'Precision stacking of electrodes and separators.' },
        { icon: Gauge, title: 'Cycling', description: 'Rigorous charge/discharge testing to ensure longevity.' }
      ]
    },

    features: {
      title: 'Core Performance',
      subtitle: 'Charge faster. Drive farther.',
      hero: {
        icon: Zap,
        title: 'Rapid Charge Kinetic',
        description: 'Graphene\'s exceptional conductivity allows for ultra-fast charging rates (5C+) without overheating, enabling an 80% charge in under 15 minutes.',
        gradient: 'from-amber-900 via-amber-950 to-black',
        iconBg: 'bg-amber-500/20 border border-amber-400/30',
        iconColor: 'text-amber-300'
      },
      stats: [
        { value: '3x', label: 'Capacity', description: 'Versus standard graphite anodes.', bg: 'bg-gradient-to-br from-amber-50 to-amber-100/50', border: 'border-amber-200', color: 'text-amber-700' },
        { icon: Repeat, title: 'Lifecycle', description: 'Retains 90% capacity after 1000 cycles.', iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50 border border-emerald-100' }
      ],
      metrics: [
        { value: '20 Min', label: 'Charge Time (0-80%)' },
        { value: '400 Wh/kg', label: 'Energy Density' },
        { value: 'High', label: 'Thermal Safety' },
        { value: '-30°C', label: 'Low Temp Perf' }
      ]
    },

    gallery: {
      title: 'Product Gallery',
      subtitle: 'Visualizing the future of energy storage.',
      images: [
        { type: 'carousel', images: ['/images/pipeline/studio/Voltaphene.png'], label: 'Studio Module', bg: 'bg-neutral-100' },
        { type: 'single', image: '/images/battery_hero.png', label: 'Pack Integration', overlay: true }
      ]
    },

    timeline: {
      title: 'Development Roadmap',
      subtitle: 'Energizing the transition.',
      events: [
        { phase: 'Phase 1: Lab', title: 'Anode Optimization', description: 'Achieving 3x capacity of graphite anodes using graphene-silicon.', status: 'completed', date: 'Q4 2023' },
        { phase: 'Phase 2: Prototype', title: 'Pouch Cell Testing', description: 'Validating 1000+ cycles at high charging rates (5C).', status: 'current', date: 'Q2 2025' },
        { phase: 'Phase 3: Pilot', title: 'EV Pack Integration', description: 'Demonstrating a 500-mile range battery pack prototype.', status: 'upcoming', date: '2026' }
      ]
    },

    applications: {
      title: 'Applications',
      subtitle: 'Power for every scale.',
      items: [
        { title: 'Electric Vehicles', description: 'Faster charging and longer range for next-gen EVs.', icon: Car },
        { title: 'Grid Storage', description: 'Stabilizing renewable energy grids with rapid response.', icon: Server },
        { title: 'Consumer Electronics', description: 'Longer lasting batteries for phones and laptops.', icon: Smartphone },
        { title: 'Drones', description: 'High power-to-weight ratio for extended flight times.', icon: Plane }
      ]
    },

    cta: {
      title: 'Power the revolution.',
      description: 'We are seeking automotive and grid partners to validate our next-gen battery cells.',
      primaryButton: { text: 'Partner Inquiry', link: '/contact' },
      secondaryButton: { text: 'Back to Pipeline', link: '/products/pipeline' },
      gradient: 'from-amber-900/30 via-amber-950/20 to-black'
    }
  },

  grapheneGlassFibres: {
    id: 'grapheneGlassFibres',
    title: 'Graphene Glass Fibres',
    subtitle: 'Revolutionizing composites with graphene-enhanced sizing that bridges the gap between glass and carbon fibre performance at a fraction of the cost.',
    category: 'Pilot Trials',
    categoryColor: 'bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30',
    heroImages: ['/images/glass_fibres_hero.png'],
    accentColor: 'teal',

    introduction: {
      title: 'The Challenge',
      subtitle: 'The limits of glass fibre.',
      description: [
        'Glass fibre is the workhorse of the composites industry, but it lacks the stiffness and fatigue resistance of carbon fibre. Its weak point is often the interface between the fibre and the resin matrix.',
        'Our solution coats standard glass fibres with graphene. This nano-engineered "sizing" dramatically improves adhesion, transforming affordable glass fibre into a high-performance material that rivals carbon fibre for many structural applications.'
      ],
      images: ['/images/pipeline/studio/Glasephene.png', '/images/pipeline/studio/Glasephene-2.png']
    },

    processFlow: {
      title: 'How It Works',
      subtitle: 'Strengthening the interface.',
      steps: [
        { icon: Component, title: 'Coating', description: 'Glass fibres are coated with a graphene-enhanced sizing agent.' },
        { icon: Layers, title: 'Bonding', description: 'Graphene improves the interface between fibre and resin.' },
        { icon: Gauge, title: 'Dispersion', description: 'Ensuring uniform distribution along the fibre length.' },
        { icon: Cuboid, title: 'Curing', description: 'Forming a composite with superior mechanical properties.' }
      ]
    },

    features: {
      title: 'Core Performance',
      subtitle: 'Bridging the gap to carbon.',
      hero: {
        icon: Layers,
        title: 'Interfacial Toughness',
        description: 'The graphene coating acts as a chemical bridge, increasing the interlaminar shear strength by up to 35%. This prevents delamination, the most common failure mode in composites.',
        gradient: 'from-purple-900 via-purple-950 to-black',
        iconBg: 'bg-purple-500/20 border border-purple-400/30',
        iconColor: 'text-purple-300'
      },
      stats: [
        { value: '+50%', label: 'Fatigue Life', description: 'Withstanding more cycles under load.', bg: 'bg-gradient-to-br from-purple-50 to-purple-100/50', border: 'border-purple-200', color: 'text-purple-700' },
        { icon: Cuboid, title: 'Cost Effective', description: 'Performance boost without the high price of carbon fibre.', iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50 border border-emerald-100' }
      ],
      metrics: [
        { value: 'High', label: 'Tensile Strength' },
        { value: 'Yes', label: 'Drop-in Ready' },
        { value: 'Low', label: 'Moisture Absorption' },
        { value: 'Light', label: 'Weight Impact' }
      ]
    },

    gallery: {
      title: 'Product Gallery',
      subtitle: 'Visualizing the future of composites.',
      images: [
        {
          type: 'carousel',
          images: ['/images/pipeline/studio/Glasephene.png', '/images/pipeline/studio/Glasephene-2.png'],
          label: 'Studio Module',
          bg: 'bg-neutral-100'
        },
        { type: 'single', image: '/images/glass_fibres_hero.png', label: 'Industrial Application', overlay: true }
      ]
    },

    timeline: {
      title: 'Development Roadmap',
      subtitle: 'Strengthening industries.',
      events: [
        { phase: 'Phase 1: Lab', title: 'Sizing Formulation', description: 'Developing a stable graphene-based sizing for glass fibres.', status: 'completed', date: 'Q1 2024' },
        { phase: 'Phase 2: Prototype', title: 'Composite Testing', description: 'Demonstrating 35% increase in interlaminar shear strength.', status: 'current', date: 'Q3 2025' },
        { phase: 'Phase 3: Pilot', title: 'Wind Blade Trial', description: 'Manufacturing full-scale wind turbine blade sections.', status: 'upcoming', date: '2026' }
      ]
    },

    applications: {
      title: 'Applications',
      subtitle: 'Versatile reinforcement.',
      items: [
        { title: 'Wind Energy', description: 'Lighter, longer, and stronger turbine blades.', icon: Wind },
        { title: 'Marine', description: 'Osmosis-resistant hulls for boats and yachts.', icon: Anchor },
        { title: 'Automotive', description: 'Lightweight body panels and leaf springs.', icon: Zap },
        { title: 'Infrastructure', description: 'Corrosion-free rebars for bridges and tunnels.', icon: Component }
      ]
    },

    cta: {
      title: 'Reinforce your future.',
      description: 'Upgrade your composites today. Contact us for sample materials and technical data.',
      primaryButton: { text: 'Request Samples', link: '/contact' },
      secondaryButton: { text: 'Back to Pipeline', link: '/products/pipeline' },
      gradient: 'from-purple-900/30 via-purple-950/20 to-black'
    }
  },

  armophene: {
    id: 'armophene',
    title: 'Armophene',
    subtitle: 'Improving personal protection with graphene-reinforced ballistics that are lighter, stronger, and more flexible than traditional aramid fibers.',
    category: 'R&D Pipeline',
    categoryColor: 'bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30',
    heroImages: ['/images/armophene_hero.png'],
    accentColor: 'teal',
    textColorClass: 'text-slate-700',

    introduction: {
      title: 'The Challenge',
      subtitle: 'Protection usually comes at the cost of mobility.',
      description: [
        'Traditional body armor is heavy, hot, and restrictive. Soldiers and officers often have to choose between maximum protection and the ability to move freely.',
        'Armophene changes the equation. By reinforcing ballistic fibers with graphene, we drastically increase the energy absorption capacity of the material. This allows for thinner, lighter plates that stop the same threats.'
      ],
      images: ['/images/pipeline/studio/Armophene.png', '/images/pipeline/studio/Armophene-2.png']
    },

    processFlow: {
      title: 'How It Works',
      subtitle: 'Dissipating kinetic energy instantly.',
      accentColor: 'teal',
      steps: [
        { icon: Activity, title: 'Synthesis', description: 'Graphene oxide reduced to pristine graphene nanoplatelets.' },
        { icon: Shield, title: 'Composite', description: 'Graphene is embedded into ultra-high-molecular-weight polyethylene (UHMWPE).' },
        { icon: Layers, title: 'Lamination', description: 'Layers are cross-plied and fused under high pressure.' },
        { icon: Target, title: 'Testing', description: 'Ballistic verification against NIJ standards.' }
      ]
    },

    features: {
      title: 'Core Performance',
      subtitle: 'Lighter. Stronger. Safer.',
      hero: {
        icon: Shield,
        title: 'Hyper-Velocity Dispersion',
        description: 'When a projectile strikes Armophene, the graphene network distributes the impact energy spreads laterally at speeds of 22 km/s—faster than the speed of sound in the material—preventing penetration.',
        gradient: 'from-slate-900 to-black',
        iconBg: 'bg-slate-800/50 border border-slate-700',
        iconColor: 'text-emerald-400',
        overlay: 'bg-[url(\'/grid.svg\')] opacity-10',
        badge: { text: 'Tested at 900 m/s', color: 'emerald' }
      },
      stats: [
        { value: '-35%', label: 'Weight Reduction', description: 'Significantly lighter than equivalent ceramic plates, reducing fatigue.', bg: 'bg-slate-50', border: 'border-slate-200', color: 'text-slate-900' },
        { icon: Zap, title: 'Multi-Hit Capable', description: 'Maintains structural integrity after multiple direct impacts, exceeding standard specs.', iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50' }
      ],
      metrics: [
        { value: 'Level IV', label: 'Protection Capable', labelColor: 'text-slate-400' },
        { value: 'High', label: 'Flexibility', labelColor: 'text-slate-400' },
        { value: 'Yes', label: 'Stab Resistant', labelColor: 'text-slate-400' },
        { value: '10 Yr', label: 'Shelf Life', labelColor: 'text-slate-400' }
      ],
      darkBg: 'bg-slate-900',
      darkBorder: 'border-slate-800'
    },

    gallery: {
      title: 'Product Gallery',
      subtitle: 'Visualizing the future of protection.',
      images: [
        {
          type: 'carousel',
          images: ['/images/pipeline/studio/Armophene.png', '/images/pipeline/studio/Armophene-2.png'],
          label: 'Studio Module',
          bg: 'bg-slate-100'
        },
        { type: 'single', image: '/images/armophene_hero.png', label: 'Tactical Context', overlay: true }
      ]
    },

    timeline: {
      title: 'Development Roadmap',
      subtitle: 'Protecting those who serve.',
      accentColor: 'teal',
      events: [
        { phase: 'Phase 1: Lab', title: 'Impact Resistance', description: 'Micro-ballistic testing showing 200% improvement over Kevlar per unit weight.', status: 'completed', date: 'Q2 2024' },
        { phase: 'Phase 2: Prototype', title: 'Vest Fabrication', description: 'Creating full tactical vest prototypes for flexibility testing.', status: 'current', date: 'Q1 2026' },
        { phase: 'Phase 3: Certification', title: 'NIJ Certification', description: 'Official ballistic certification for Level III and IV protection.', status: 'upcoming', date: '2026' }
      ]
    },

    applications: {
      title: 'Applications',
      subtitle: 'Defense and security solutions.',
      items: [
        { title: 'Defense', description: 'Next-gen body armor for infantry and special forces.', icon: Shield },
        { title: 'Law Enforcement', description: 'Lightweight, concealable vests for daily patrol use.', icon: Lock },
        { title: 'Vehicle Armor', description: 'Up-armoring for light tactical vehicles without compromising mobility.', icon: Truck },
        { title: 'Personal Security', description: 'Discreet protection for VIPs and security personnel.', icon: UserCheck }
      ],
      cardHoverEffect: true
    },

    cta: {
      title: 'Equip the future.',
      description: 'Interested in testing Armophene for your defense applications? Contact our specialized government liaison team.',
      primaryButton: { text: 'Request Datasheet', link: '/contact', variant: 'white' },
      secondaryButton: { text: 'Back to Pipeline', link: '/products/pipeline', variant: 'outline-dark' },
      gradient: 'from-slate-800 via-slate-900 to-black',
      gradientType: 'radial'
    }
  },

  graphyre: {
    id: 'graphyre',
    title: 'Graphyre',
    subtitle: 'Next-generation graphene-enhanced rubber compounds for tyres that deliver superior durability, lower rolling resistance, and smart sensing capabilities.',
    category: 'Prototype',
    categoryColor: 'bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30',
    heroImages: ['/images/graphyre_hero.png'],
    accentColor: 'teal',

    introduction: {
      title: 'The Challenge',
      subtitle: 'Tyre wear is a major environmental and economic issue.',
      description: [
        'Tyres release microplastics as they wear down, and frequent replacements cost fleet operators billions. Balancing grip, durability, and fuel efficiency has always been an engineering compromise.',
        'Graphyre eliminates this compromise. By integrating graphene into the rubber matrix, we increase tensile strength and heat dissipation simultaneously. This results in a tyre that lasts longer, grips better, and saves fuel.'
      ],
      images: ['/images/pipeline/studio/Graphyre.png', '/images/pipeline/studio/Graphyre-2.png']
    },

    processFlow: {
      title: 'How It Works',
      subtitle: 'Reinforcing rubber at the molecular level.',
      accentColor: 'teal',
      steps: [
        { icon: Activity, title: 'Integration', description: 'Graphene is dispersed into the rubber compound during mixing.' },
        { icon: Zap, title: 'Bonding', description: 'Graphene forms a reinforcing network within the polymer matrix.' },
        { icon: Gauge, title: 'Vulcanization', description: 'Standard curing locks in the high-performance properties.' },
        { icon: Truck, title: 'Mapping', description: 'Smart sensors embedded in the tyre provide real-time data.' }
      ]
    },

    features: {
      title: 'Core Performance',
      subtitle: 'Breaking the magic triangle of tyre performance.',
      hero: {
        icon: Gauge,
        title: 'Hyper-Alert Sensing',
        description: 'Graphyre isn\'t just tough; it\'s smart. The graphene network acts as a conductive sensor, providing real-time data on tread depth, temperature, and pressure directly to the driver.',
        gradient: 'from-amber-900 via-orange-950 to-black',
        iconBg: 'bg-amber-500/20 border border-amber-400/30',
        iconColor: 'text-amber-300'
      },
      stats: [
        { value: '30%', label: 'More Mileage', description: 'Significantly extending tyre lifespan.', bg: 'bg-gradient-to-br from-amber-50 to-orange-100/50', border: 'border-amber-200', color: 'text-amber-700' },
        { icon: DollarSign, title: 'Fuel Savings', description: 'Reduced rolling resistance lowers fuel consumption by up to 10%.', iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50 border border-emerald-100' }
      ],
      metrics: [
        { value: 'A+', label: 'Wet Grip Rating', labelColor: 'text-amber-500' },
        { value: '-10%', label: 'Rolling Resistance', labelColor: 'text-amber-500' },
        { value: 'Real-time', label: 'Wear Monitoring', labelColor: 'text-amber-500' },
        { value: 'High', label: 'Heat Dissipation', labelColor: 'text-amber-500' }
      ]
    },

    gallery: {
      title: 'Product Gallery',
      subtitle: 'Visualizing the future of tire technology.',
      images: [
        {
          type: 'carousel',
          images: ['/images/pipeline/studio/Graphyre.png', '/images/pipeline/studio/Graphyre-2.png'],
          label: 'Studio Module',
          bg: 'bg-neutral-100'
        },
        { type: 'single', image: '/images/graphyre_hero.png', label: 'Performance Test', overlay: true }
      ]
    },

    timeline: {
      title: 'Development Roadmap',
      subtitle: 'Rolling out the future.',
      events: [
        { phase: 'Phase 1: Lab', title: 'Compound Development', description: 'Optimizing the graphene-rubber interface for maximum wear resistance.', status: 'completed', date: 'Q1 2024' },
        { phase: 'Phase 2: Prototype', title: 'Track Testing', description: 'Performance validation on test tracks showing 30% wear reduction.', status: 'current', date: 'Q3 2025' },
        { phase: 'Phase 3: Commercial', title: 'Fleet Partnerships', description: 'Pilot programs with major logistics fleets to validate fuel savings.', status: 'upcoming', date: '2026' }
      ]
    },

    applications: {
      title: 'Applications',
      subtitle: 'Powering the next generation of transport.',
      items: [
        { title: 'Commercial Logistics', description: 'Extending tyre life for long-haul trucking fleets.', icon: Truck },
        { title: 'Electric Vehicles', description: 'Handling the higher torque and weight of EVs with ease.', icon: Zap },
        { title: 'Motorsport', description: 'High-grip, durable compounds for competitive racing.', icon: Gauge },
        { title: 'Mining & Heavy Industry', description: 'Extreme durability for off-road industrial vehicles.', icon: Activity }
      ],
      noIconWrapper: true
    },

    cta: {
      title: 'Drive with us.',
      description: 'We are looking for fleet partners to pilot Graphyre smart tyres. Experience the future of mobility.',
      primaryButton: { text: 'Partner Inquiry', link: '/contact' },
      secondaryButton: { text: 'Back to Pipeline', link: '/products/pipeline' },
      gradient: 'from-amber-900/30 via-amber-950/20 to-black'
    }
  },

  graphosite: {
    id: 'graphosite',
    title: 'Graphosite',
    subtitle: 'Advanced graphene-reinforced composite materials delivering unmatched strength-to-weight ratios for aerospace, automotive, and industrial applications.',
    category: 'Prototype',
    categoryColor: 'bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30',
    heroImages: ['/images/graphosite_hero.png'],
    accentColor: 'teal',
    textColorClass: 'text-slate-700',

    introduction: {
      title: 'The Challenge',
      subtitle: 'Weight is the enemy of efficiency.',
      description: [
        'In aerospace and automotive industries, every kilogram saved translates to fuel efficiency and performance. Traditional carbon fiber is light, but it can be brittle and prone to delamination.',
        'Graphosite solves this. By reinforcing the polymer matrix with graphene, we create a composite that is not only lighter but significantly tougher and more resistant to impact. It\'s the next evolution of structural materials.'
      ],
      images: ['/images/pipeline/studio/Graphosite.png']
    },

    processFlow: {
      title: 'How It Works',
      subtitle: 'Synergy between carbon fiber and graphene.',
      accentColor: 'teal',
      steps: [
        { icon: Layers, title: 'Layering', description: 'Graphene sheets are interleaved with carbon fiber layers.' },
        { icon: Zap, title: 'Infusion', description: 'Resin is infused under vacuum to ensure void-free composites.' },
        { icon: Cuboid, title: 'Curing', description: 'High-temperature curing activates the graphene reinforcement.' },
        { icon: Hammer, title: 'Shaping', description: 'Precision machining to final component specifications.' }
      ]
    },

    features: {
      title: 'Core Performance',
      subtitle: 'Stronger. Lighter. Tougher.',
      hero: {
        icon: Weight,
        title: 'Interlaminar Reinforcement',
        description: 'Graphene bridges the gaps between carbon fibers, preventing micro-cracks from propagating and significantly improving the composite\'s resistance to delamination and fatigue.',
        gradient: 'from-purple-900 to-black',
        iconBg: 'bg-white/10 border border-white/20',
        iconColor: 'text-purple-300',
        overlay: 'bg-[url(\'/grid.svg\')] opacity-10'
      },
      stats: [
        { value: '40%', label: 'Stronger', description: 'Higher tensile strength than standard composites.', bg: 'bg-purple-50', border: 'border-purple-100', color: 'text-purple-600', labelColor: 'text-purple-900' },
        { icon: Zap, title: 'Conductive', description: 'Built-in lightning strike protection for aircraft.', iconColor: 'text-amber-500', iconBg: 'bg-amber-50' }
      ],
      metrics: [
        { value: '-20%', label: 'Weight Reduction', labelColor: 'text-slate-400' },
        { value: 'High', label: 'Impact Resistance', labelColor: 'text-slate-400' },
        { value: 'Excellent', label: 'Fatigue Life', labelColor: 'text-slate-400' },
        { value: 'Yes', label: 'Recyclable', labelColor: 'text-slate-400' }
      ],
      darkBg: 'bg-slate-900',
      darkBorder: 'border-slate-800'
    },

    gallery: {
      title: 'Product Gallery',
      subtitle: 'Visualizing the future of composites.',
      images: [
        { type: 'carousel', images: ['/images/pipeline/studio/Graphosite.png'], label: 'Studio Module', bg: 'bg-neutral-100' },
        { type: 'single', image: '/images/graphosite_hero.png', label: 'Application Context', overlay: true }
      ]
    },

    timeline: {
      title: 'Development Roadmap',
      subtitle: 'Taking flight.',
      accentColor: 'teal',
      events: [
        { phase: 'Phase 1: R&D', title: 'Matrix Optimization', description: 'Achieving uniform graphene dispersion in epoxy resins.', status: 'completed', date: 'Q4 2023' },
        { phase: 'Phase 2: Prototype', title: 'Structural Testing', description: 'Validating a 40% increase in tensile strength over standard carbon fiber.', status: 'current', date: 'Q3 2025' },
        { phase: 'Phase 3: Pilot', title: 'Aerospace Certification', description: 'Beginning rigorous testing for aerospace component approval.', status: 'upcoming', date: '2026' }
      ]
    },

    applications: {
      title: 'Applications',
      subtitle: 'Redefining structural limits.',
      items: [
        { title: 'Aerospace', description: 'Lightweight wing structures and fuselage components.', icon: Plane },
        { title: 'Automotive', description: 'Chassis and body panels for high-performance vehicles.', icon: Cuboid },
        { title: 'Sports Equipment', description: 'Next-gen tennis rackets, golf clubs, and bicycle frames.', icon: Zap },
        { title: 'Construction', description: 'Corrosion-resistant rebars and structural beams.', icon: Construction }
      ],
      cardHoverEffect: true,
      hoverColors: 'purple'
    },

    cta: {
      title: 'Build lighter. Build stronger.',
      description: 'We are working with aerospace and automotive leaders to validate Graphosite components. Join our pilot program.',
      primaryButton: { text: 'Collaborate', link: '/contact', variant: 'white' },
      secondaryButton: { text: 'Back to Pipeline', link: '/products/pipeline', variant: 'outline-dark' },
      gradient: 'from-purple-900/40 via-slate-900 to-black',
      gradientType: 'radial'
    }
  },

  rustene: {
    id: 'rustene',
    title: 'Rustene',
    subtitle: 'Graphene-based anti-rusting paint that forms an ultra-thin barrier preventing corrosion and extending metal lifespan.',
    category: 'R&D Pipeline',
    categoryColor: 'bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30',
    heroImages: ['/images/rustene_hero.png'],
    accentColor: 'teal',

    introduction: {
      title: 'The Challenge',
      subtitle: 'Corrosion costs the global economy $2.5 trillion annually.',
      description: [
        'Traditional anti-corrosion coatings often rely on heavy metals like zinc or toxic chromates, and they eventually degrade, leading to structural failure and costly repairs.',
        'Rustene changes the game by utilizing the impermeability of graphene. It creates a zig-zag path for corrosive elements, effectively blocking oxygen and moisture from reaching the metal surface, extending asset lifespan by up to 5x.'
      ],
      images: ['/images/pipeline/studio/Rustene.png']
    },

    processFlow: {
      title: 'How It Works',
      subtitle: 'Impermeable protection at the atomic scale.',
      steps: [
        { icon: Shield, title: 'Surface Prep', description: 'Standard cleaning and preparation of the metal surface.' },
        { icon: Construction, title: 'Application', description: 'Rustene is applied like standard primer, creating an impermeable graphene barrier.' },
        { icon: CheckCircle2, title: 'Curing', description: 'Rapid curing process forms a covalent bond with the substrate.' },
        { icon: Shield, title: 'Protection', description: 'Long-term resistance against moisture, salt, and chemical corrosion.' }
      ]
    },

    features: {
      title: 'Core Performance',
      subtitle: 'Redefining durability standards.',
      hero: {
        icon: Shield,
        title: 'The Tortuous Path Effect',
        description: 'Graphene platelets within the coating create a complex maze that corrosive molecules must navigate, increasing the effective diffusion path length by orders of magnitude.',
        gradient: 'from-blue-900 via-blue-950 to-black',
        iconBg: 'bg-blue-500/20 border border-blue-400/30',
        iconColor: 'text-blue-300'
      },
      stats: [
        { value: '5x', label: 'Lifespan Extension', description: 'Significantly reducing maintenance cycles.', bg: 'bg-gradient-to-br from-blue-50 to-blue-100/50', border: 'border-blue-200', color: 'text-blue-700' },
        { icon: ShieldCheck, title: 'Self-Healing', description: 'Smart polymer matrix can self-repair micro-cracks before rust begins.', iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50 border border-emerald-100' }
      ],
      metrics: [
        { value: '5000h+', label: 'Salt Spray Test', labelColor: 'text-blue-500' },
        { value: '<15μm', label: 'Coating Thickness', labelColor: 'text-blue-500' },
        { value: '100%', label: 'UV Stable', labelColor: 'text-blue-500' },
        { value: 'Low VOC', label: 'Eco-Friendly', labelColor: 'text-blue-500' }
      ]
    },

    gallery: {
      title: 'Product Gallery',
      subtitle: 'Visualizing the future of corrosion protection.',
      images: [
        { type: 'carousel', images: ['/images/pipeline/studio/Rustene.png'], label: 'Studio Module', bg: 'bg-neutral-100' },
        { type: 'single', image: '/images/rustene_hero.png', label: 'Applied Coating', overlay: true }
      ]
    },

    timeline: {
      title: 'Development Roadmap',
      subtitle: 'Path to market.',
      events: [
        { phase: 'Phase 1: R&D', title: 'Formulation Optimization', description: 'Developing the optimal graphene-to-polymer ratio for maximum adhesion and barrier properties.', status: 'completed', date: 'Q2 2024' },
        { phase: 'Phase 2: Testing', title: 'ISO Salt Spray Tests', description: 'Achieving 5000+ hours in accelerated weathering tests with zero corrosion.', status: 'current', date: 'Q4 2025' },
        { phase: 'Phase 3: Pilot', title: 'Industrial Trials', description: 'Field testing on marine vessels and bridge infrastructure.', status: 'upcoming', date: '2026' }
      ]
    },

    applications: {
      title: 'Applications',
      subtitle: 'Protecting critical infrastructure.',
      items: [
        { title: 'Marine Vessels', description: 'Protecting hulls and decks from aggressive saltwater corrosion.', icon: Anchor },
        { title: 'Infrastructure', description: 'Extending the life of bridges, pipelines, and steel structures.', icon: Construction },
        { title: 'Automotive', description: 'Underbody coating for rust prevention in harsh climates.', icon: Truck },
        { title: 'Industrial Equipment', description: 'Durability for machinery exposed to chemical environments.', icon: Shield }
      ]
    },

    cta: {
      title: 'Protect your assets.',
      description: 'Looking to extend the life of your infrastructure? We are looking for industrial partners for pilot applications.',
      primaryButton: { text: 'Inquire Now', link: '/contact' },
      secondaryButton: { text: 'Back to Pipeline', link: '/products/pipeline' },
      gradient: 'from-blue-900/30 via-blue-950/20 to-black'
    }
  },

  thermaphene: {
    id: 'thermaphene',
    title: 'Thermaphene',
    subtitle: 'Ultra-thin graphene heating technology delivering lightweight, efficient, and flexible thermal regulation for wearables and industry.',
    category: 'Prototype',
    categoryColor: 'bg-gradient-to-r from-brand-600 to-brand-700 shadow-lg shadow-brand-500/30',
    heroImages: ['/images/thermaphene_hero.png'],
    accentColor: 'teal',

    introduction: {
      title: 'The Challenge',
      subtitle: 'Cold is inevitable. Discomfort shouldn\'t be.',
      description: [
        'Traditional heating solutions, whether in clothing or machinery, rely on bulky copper wires that are heavy, prone to breakage, and create uneven "hot spots."',
        'Thermaphene replaces wires with a printable graphene coating. It covers the entire surface area, providing uniform radiant heat that feels more natural and efficient. It\'s washable, flexible, and virtually weightless.'
      ],
      images: ['/images/pipeline/studio/Thermophene.png']
    },

    processFlow: {
      title: 'How It Works',
      subtitle: 'Electrifying carbon at the atomic level.',
      steps: [
        { icon: Activity, title: 'Dispersion', description: 'Graphene is dispersed into a conductive ink or coating.' },
        { icon: Shirt, title: 'Integration', description: 'The coating is printed or applied onto textiles or surfaces.' },
        { icon: Zap, title: 'Activation', description: 'Low-voltage current passes through the graphene network.' },
        { icon: Flame, title: 'Radiation', description: 'Efficient far-infrared heat is radiated evenly.' }
      ]
    },

    features: {
      title: 'Core Performance',
      subtitle: 'Warmth without weight.',
      hero: {
        icon: Flame,
        title: 'Far-Infrared Heating',
        description: 'Unlike resistive wires that heat the air, Thermaphene emits far-infrared radiation that penetrates and warms objects directly, mimicking the feeling of sunlight.',
        gradient: 'from-orange-900 via-orange-950 to-black',
        iconBg: 'bg-orange-500/20 border border-orange-400/30',
        iconColor: 'text-orange-300'
      },
      stats: [
        { value: '99%', label: 'Efficiency', description: 'Almost zero energy loss in conversion.', bg: 'bg-gradient-to-br from-orange-50 to-orange-100/50', border: 'border-orange-200', color: 'text-orange-700' },
        { icon: Battery, title: 'Low Power', description: 'Runs effectively on standard 5V/12V battery packs.', iconColor: 'text-emerald-600', iconBg: 'bg-emerald-50 border border-emerald-100' }
      ],
      metrics: [
        { value: '<1mm', label: 'Thickness', labelColor: 'text-orange-500' },
        { value: '10s', label: 'Time to Heat', labelColor: 'text-orange-500' },
        { value: 'Yes', label: 'Machine Washable', labelColor: 'text-orange-500' },
        { value: 'Zero', label: 'Hot Spots', labelColor: 'text-orange-500' }
      ]
    },

    gallery: {
      title: 'Product Gallery',
      subtitle: 'Visualizing the future of thermal wear.',
      images: [
        { type: 'carousel', images: ['/images/pipeline/studio/Thermophene.png'], label: 'Studio Module', bg: 'bg-neutral-100' },
        { type: 'single', image: '/images/thermaphene_hero.png', label: 'Thermal Imaging', overlay: true }
      ]
    },

    timeline: {
      title: 'Development Roadmap',
      subtitle: 'Heating up the market.',
      events: [
        { phase: 'Phase 1: Lab', title: 'Ink Formulation', description: 'Creating a stable, washable graphene ink for textiles.', status: 'completed', date: 'Q1 2024' },
        { phase: 'Phase 2: Prototype', title: 'Heated Jacket Prototype', description: 'Demonstrating uniform heating with a 5V battery pack.', status: 'current', date: 'Q4 2025' },
        { phase: 'Phase 3: Commercial', title: 'Apparel Partnerships', description: 'Collaborating with outdoor brands for winter 2026 collections.', status: 'upcoming', date: '2026' }
      ]
    },

    applications: {
      title: 'Applications',
      subtitle: 'Versatile thermal solutions.',
      items: [
        { title: 'Smart Apparel', description: 'Lightweight heated jackets and gloves for extreme cold.', icon: Shirt },
        { title: 'Automotive', description: 'Efficient seat and steering wheel heating systems.', icon: Zap },
        { title: 'Aerospace', description: 'De-icing solutions for wings and sensors.', icon: Wind },
        { title: 'Healthcare', description: 'Therapeutic wearable heat pads for pain relief.', icon: Activity }
      ]
    },

    cta: {
      title: 'Feel the warmth.',
      description: 'Thermaphene is redefining thermal management. Partner with us to integrate this technology into your next product line.',
      primaryButton: { text: 'Get Started', link: '/contact' },
      secondaryButton: { text: 'Back to Pipeline', link: '/products/pipeline' },
      gradient: 'from-orange-900/30 via-orange-950/20 to-black'
    }
  }
};
