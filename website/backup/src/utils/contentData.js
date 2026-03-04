// Content data parsed from markdown files
// This file centralizes all content for the website

export const contentData = {
  // About Section
  about: {
    company: {
      title: "About Monoatom Labs",
      pageTitle: "About Monoatom Labs | Company Story & Mission",
      metaDescription: "Learn about Monoatom Labs' mission to develop commercially viable graphene solutions for clean air, water, and energy. Advanced nanomaterials for better quality of life.",
      breadcrumb: "Home > About > Company",
      founded: "2025",
      headquarters: "Ahmedabad, Gujarat, India",
      focus: "Advanced Nanomaterials for Better Quality of Life",
      tagline: "Unlocking Trillion Dollar Economy",
      vision: "Advanced Nanomaterials for Better Quality of Life",
      mission: "Creating Commercially Viable Graphene Solutions",
      content: {} // Full content to be populated from markdown
    },
    founders: {
      title: "Founders & Team",
      pageTitle: "Founders & Team | Monoatom Labs Leadership",
      metaDescription: "Meet the visionary founders and expert team behind Monoatom Labs' breakthrough graphene technologies.",
      breadcrumb: "Home > About > Founders & Team",
      content: {}
    },
    facilities: {
      title: "Facilities & Capabilities",
      pageTitle: "Facilities & Capabilities | Monoatom Labs R&D",
      metaDescription: "Explore Monoatom Labs' advanced research and testing facilities enabling breakthrough nanomaterial innovations.",
      breadcrumb: "Home > About > Facilities",
      content: {}
    }
  },

  // Products Section
  products: {
    overview: {
      title: "Products Overview",
      pageTitle: "Products | Monoatom Labs - Advanced Graphene Solutions",
      metaDescription: "Explore Monoatom Labs' portfolio of commercially ready graphene products including Graphacrete, Graffisol, Ceraphene, and HD-G-PE.",
      breadcrumb: "Home > Products"
    },
    graphacrete: {
      title: "Graphacrete - High-Performance Concrete Additive",
      pageTitle: "Graphacrete | Graphene Concrete Additive for Superior Strength & Durability",
      metaDescription: "Graphacrete delivers 40-50% compressive strength gain, 15-20% cement reduction, and excellent crack resistance. NABL certified.",
      breadcrumb: "Home > Products > Graphacrete",
      category: "Construction & Infrastructure Additive",
      status: "Commercially Available",
      keyBenefits: [
        "50% increase in compressive & flexural strength",
        "Improved crack resistance and durability",
        "30-45% lower permeability & higher chemical resistance",
        "15-20% cement reduction - reduced carbon footprint",
        "Enhanced thermal dissipation",
        "Excellent micro-crack control"
      ],
      pricing: {
        price: "₹235/L",
        moq: "1000L",
        dosage: "2L per m³ concrete",
        costPerM3: "₹470"
      }
    },
    graffisol: {
      title: "Graffisol - Next-Generation Solar Panel Coating",
      pageTitle: "Graffisol | Graphene Solar Panel Coating for Maximum Efficiency",
      metaDescription: "Graffisol enhances solar panel efficiency by 7-8% with improved thermal management and anti-soiling properties.",
      breadcrumb: "Home > Products > Graffisol",
      category: "Solar & Clean Energy",
      status: "Commercially Available"
    },
    ceraphene: {
      title: "Ceraphene - Ultra-Durable Ceramic Coating",
      pageTitle: "Ceraphene | Graphene-Enhanced Ceramic Coating",
      metaDescription: "Ceraphene provides 9H+ hardness protection at 60-70% lower cost than premium alternatives.",
      breadcrumb: "Home > Products > Ceraphene",
      category: "Automotive & Coatings",
      status: "Commercially Available"
    },
    hdgpe: {
      title: "HD-G-PE - Graphene-Reinforced Polymer Enhancer",
      pageTitle: "HD-G-PE | Graphene HDPE Enhancement",
      metaDescription: "Transform HDPE materials with 30% strength improvement and 20× elongation enhancement.",
      breadcrumb: "Home > Products > HD-G-PE",
      category: "Polymer & Manufacturing",
      status: "Commercially Available"
    }
  },

  // Pipeline Products
  pipeline: {
    overview: {
      title: "Innovation Pipeline",
      pageTitle: "Innovation Pipeline | Next-Generation Graphene Products",
      metaDescription: "Explore Monoatom Labs' pipeline of next-generation graphene products in development.",
      breadcrumb: "Home > Products > Pipeline"
    },
    rustene: {
      title: "Rustene - Anti-Corrosion Paint",
      pageTitle: "Rustene | Graphene Anti-Corrosion Coating",
      metaDescription: "Graphene-based anti-rusting paint forming ultra-thin barrier for extended metal lifespan.",
      breadcrumb: "Home > Products > Pipeline > Rustene",
      status: "Pipeline/Development"
    },
    graphyre: {
      title: "Graphyre - Tire Technology",
      pageTitle: "Graphyre | Graphene-Reinforced Tire Technology",
      metaDescription: "Graphene-reinforced tyres delivering higher strength, lower rolling resistance, and extended service life.",
      breadcrumb: "Home > Products > Pipeline > Graphyre",
      status: "Pipeline/Development"
    },
    graphosite: {
      title: "Graphosite - Advanced Composites",
      pageTitle: "Graphosite | Graphene Composite Materials",
      metaDescription: "Lightweight, high-strength graphene-reinforced fibres for next-generation structural composites.",
      breadcrumb: "Home > Products > Pipeline > Graphosite",
      status: "Pipeline/Development"
    },
    thermaphene: {
      title: "Thermaphene - Heating Solutions",
      pageTitle: "Thermaphene | Graphene Heating Technology",
      metaDescription: "Graphene-based heating solution enabling lightweight and high-performance winter wear.",
      breadcrumb: "Home > Products > Pipeline > Thermaphene",
      status: "Pipeline/Development"
    },
    armophene: {
      title: "Armophene - Protective Armor",
      pageTitle: "Armophene | Graphene Ballistic Protection",
      metaDescription: "Graphene-infused bulletproof jacket delivering lightweight, flexible armor with superior ballistic protection.",
      breadcrumb: "Home > Products > Pipeline > Armophene",
      status: "Pipeline/Development"
    }
  },

  // Technology Section
  technology: {
    platform: {
      title: "Technology Platform",
      pageTitle: "Technology Platform | Monoatom Labs",
      metaDescription: "Discover Monoatom Labs' advanced graphene technology platform enabling breakthrough material innovations.",
      breadcrumb: "Home > Technology > Platform"
    },
    pilotProjects: {
      title: "Pilot Projects",
      pageTitle: "Pilot Projects | Field-Scale Validations",
      metaDescription: "Explore Monoatom Labs' field-scale pilot projects validating graphene technology performance.",
      breadcrumb: "Home > Technology > Pilot Projects"
    },
    capabilities: {
      title: "Technical Capabilities",
      pageTitle: "Capabilities | Research & Development",
      metaDescription: "Learn about Monoatom Labs' comprehensive technical capabilities and R&D infrastructure.",
      breadcrumb: "Home > Technology > Capabilities"
    }
  },

  // Partnership
  partnership: {
    title: "Partnership Opportunities",
    pageTitle: "Partnership | Collaborate with Monoatom Labs",
    metaDescription: "Explore flexible partnership models including Joint Ventures and Technology Licensing with Monoatom Labs.",
    breadcrumb: "Home > Partnership",
    models: {
      jv: "Joint Venture - SPV Model",
      licensing: "Technology Licensing"
    }
  },

  // Industries Section
  industries: {
    overview: {
      title: "Industries We Serve",
      pageTitle: "Industries | Monoatom Labs Applications",
      metaDescription: "Discover how Monoatom Labs' graphene solutions transform multiple industries.",
      breadcrumb: "Home > Industries"
    },
    construction: {
      title: "Construction & Infrastructure",
      pageTitle: "Construction Solutions | Monoatom Labs",
      metaDescription: "High-performance concrete and durable materials for construction and infrastructure.",
      breadcrumb: "Home > Industries > Construction"
    },
    solarEnergy: {
      title: "Solar & Clean Energy",
      pageTitle: "Solar Energy Solutions | Monoatom Labs",
      metaDescription: "Efficiency enhancement and thermal management solutions for solar energy.",
      breadcrumb: "Home > Industries > Solar Energy"
    },
    automotive: {
      title: "Automotive & Coatings",
      pageTitle: "Automotive Solutions | Monoatom Labs",
      metaDescription: "Protective coatings and advanced materials for automotive applications.",
      breadcrumb: "Home > Industries > Automotive"
    },
    advancedMaterials: {
      title: "Advanced Materials",
      pageTitle: "Advanced Materials | Monoatom Labs",
      metaDescription: "Breakthrough materials for aerospace, defense, and specialized applications.",
      breadcrumb: "Home > Industries > Advanced Materials"
    }
  },

  // Contact
  contact: {
    title: "Contact Us",
    pageTitle: "Contact | Get in Touch with Monoatom Labs",
    metaDescription: "Contact Monoatom Labs for product inquiries, technical support, or partnership opportunities.",
    breadcrumb: "Home > Contact",
    email: "info@monoatomlabs.com",
    phone: "+91-989-919-9809",
    address: "3rd Floor, iHub, Ahmedabad-380015, Gujarat, India",
    website: "www.monoatomlabs.com"
  }
};

export default contentData;
