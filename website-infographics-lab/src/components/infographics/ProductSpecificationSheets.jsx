import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Sun, Layers, Package, FileText, CheckCircle2, AlertCircle, Download } from 'lucide-react';

const ProductSpecificationSheets = () => {
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');

  const products = {
    graphacrete: {
      icon: Building2,
      name: 'Graphacrete',
      tagline: 'High-Performance Concrete Additive',
      color: 'from-purple-500 to-pink-500',
      description: 'Graphene-enhanced nano-admixture for superior concrete strength and durability',

      physicalProperties: {
        appearance: 'Dark gray powder',
        solubility: 'Water dispersible',
        density: '2.3-2.5 g/cm³',
        particleSize: '1-10 μm',
        shelfLife: '24 months',
      },

      technicalSpecs: {
        composition: 'Graphene oxide derivative + proprietary surfactants',
        grapheneContent: '60-70% by weight',
        dosage: '0.03-0.05% by cement weight',
        compatibility: 'OPC, PPC, PSC, SRC (all cement types)',
        mixingTime: 'Standard (no change required)',
        curingPeriod: 'Standard 28 days',
      },

      performance: {
        strengthGain: '+50% compressive strength',
        achievable: 'M50 from M30 base mix',
        cementReduction: '15-20%',
        waterResistance: '30-45% reduction in permeability',
        durability: '3× improvement in chloride resistance',
        crackResistance: 'Reduced micro-cracking by 40%',
      },

      applications: [
        'High-rise commercial buildings',
        'Residential construction',
        'Infrastructure (bridges, flyovers)',
        'Industrial flooring',
        'Pre-cast concrete elements',
        'Marine structures',
      ],

      certifications: [
        'NABL Accredited Testing',
        'IS 456:2000 Compliant',
        'IS 9103:1999 Admixtures Standard',
        'IGBC Green Building Approved',
        'CE Marking (Export)',
      ],

      storage: 'Store in cool, dry place. Avoid direct sunlight. Keep container tightly sealed.',
      packaging: 'Available in 1kg, 5kg, 25kg, and bulk packaging',
      safety: 'Non-toxic, Non-hazardous. Use standard PPE during handling.',
    },

    graffisol: {
      icon: Sun,
      name: 'Graffisol',
      tagline: 'Solar Panel Performance Coating',
      color: 'from-yellow-500 to-orange-500',
      description: 'Graphene-based nano-coating for enhanced solar panel efficiency and self-cleaning',

      physicalProperties: {
        appearance: 'Clear to light amber liquid',
        solubility: 'Water-based dispersion',
        density: '1.0-1.1 g/cm³',
        viscosity: '5-15 cP at 25°C',
        shelfLife: '18 months',
      },

      technicalSpecs: {
        composition: 'Graphene nanoplatelets + hydrophobic polymers',
        grapheneContent: '2-5% by weight',
        coverage: '100-120 ml per m² panel area',
        applicationMethod: 'Spray, roller, or brush',
        curingTime: '24 hours at ambient temperature',
        durability: '10+ years outdoor exposure',
      },

      performance: {
        energyGain: '10-12% output increase',
        tempReduction: '6-8°C panel temperature',
        cleaningReduction: '60% fewer cleanings required',
        antiReflective: '2-3% light transmission gain',
        hydrophobicity: 'Contact angle >110°',
        abrasionResistance: 'Taber test: <50mg loss/1000 cycles',
      },

      applications: [
        'Utility-scale solar farms',
        'Commercial rooftop installations',
        'Residential solar systems',
        'Industrial solar arrays',
        'Off-grid installations',
        'Floating solar panels',
      ],

      certifications: [
        'IEC 61215 Module Testing Compatible',
        'Field Validated: 1+ MW installations',
        'ISO 9001:2015 Manufacturing',
        'RoHS Compliant',
        'UV Resistance: ASTM G154',
      ],

      storage: 'Store at 10-30°C. Protect from freezing. Shake well before use.',
      packaging: 'Available in 1L, 5L, 20L containers and bulk drums',
      safety: 'Low VOC, Eco-friendly. Avoid eye contact. Use in ventilated area.',
    },

    ceraphene: {
      icon: Layers,
      name: 'Ceraphene',
      tagline: 'Affordable Graphene Material',
      color: 'from-cyan-500 to-blue-500',
      description: 'Cost-effective graphene for industrial applications at 1/3rd premium graphene cost',

      physicalProperties: {
        appearance: 'Black powder',
        solubility: 'Water/solvent dispersible',
        density: '2.0-2.2 g/cm³',
        bulkDensity: '0.03-0.08 g/cm³',
        shelfLife: '36 months',
      },

      technicalSpecs: {
        composition: 'Few-layer graphene oxide derivative',
        purity: '>95%',
        layerCount: '5-10 graphene layers',
        lateralSize: '1-5 μm',
        surfaceArea: '400-600 m²/g',
        electricalConductivity: '800-1200 S/m',
      },

      performance: {
        costAdvantage: '60-70% cheaper than premium graphene',
        conductivity: 'Comparable to premium grades',
        dispersibility: 'Excellent in water and organic solvents',
        thermalConductivity: '2000-3000 W/mK',
        mechanicalReinforcement: '+30-50% in polymer composites',
        electrochemical: 'Suitable for battery/supercapacitor electrodes',
      },

      applications: [
        'Electronics: Conductive inks, EMI shielding',
        'Energy Storage: Battery electrodes, supercapacitors',
        'Composites: Polymer reinforcement',
        'Coatings: Anti-corrosion, conductive paints',
        'Sensors: Chemical and biosensors',
        'Thermal Management: Heat spreaders',
      ],

      certifications: [
        'ISO 9001:2015 Quality Management',
        'Material Safety Data Sheet (MSDS)',
        'Raman Spectroscopy Validated',
        'SEM/TEM Characterized',
        'Electrical Testing: IEC Standards',
      ],

      storage: 'Store in airtight container in dry environment. Inert gas atmosphere recommended.',
      packaging: 'Available in 100g, 500g, 1kg, 5kg, and custom bulk quantities',
      safety: 'Inert material. Avoid inhalation of dust. Use dust mask and gloves.',
    },

    hdgpe: {
      icon: Package,
      name: 'HD-G-PE',
      tagline: 'Graphene-Enhanced HDPE',
      color: 'from-green-500 to-teal-500',
      description: 'High-density polyethylene enhanced with graphene for superior mechanical properties',

      physicalProperties: {
        appearance: 'Natural/pigmented pellets',
        density: '0.95-0.97 g/cm³',
        meltFlowIndex: '0.2-0.8 g/10min (190°C, 2.16kg)',
        meltingPoint: '125-132°C',
        shelfLife: 'Indefinite (if stored properly)',
      },

      technicalSpecs: {
        composition: 'HDPE + 0.5-2% graphene nanoplatelets',
        grapheneType: 'Few-layer graphene',
        processingTemp: '180-220°C',
        compatibility: 'Standard HDPE processing equipment',
        recyclability: 'Fully recyclable',
        colorOptions: 'Natural, black, custom colors available',
      },

      performance: {
        elongationGain: '20× improvement (5% → 100%)',
        tensileStrength: '+30% vs standard HDPE',
        impactResistance: '+40% notched Izod',
        lifespanExtension: '+20-50% depending on application',
        abrasionResistance: '3× better than standard',
        chemicalResistance: 'Enhanced acid/alkali resistance',
      },

      applications: [
        'Packaging: Food films, industrial wraps',
        'Agriculture: Greenhouse films, mulch',
        'Pipes: Water, gas, industrial conduits',
        'Containers: Tanks, industrial storage',
        'Films: Blown and cast film applications',
        'Injection Molding: Industrial parts',
      ],

      certifications: [
        'FDA Food Contact Compliant',
        'ISO 15270:2008 Plastics Testing',
        'ASTM D1505 Density Testing',
        'ASTM D1238 MFI Testing',
        'NSF 61 Drinking Water System Components',
      ],

      storage: 'Store away from direct sunlight and heat. Protect from moisture.',
      packaging: 'Supplied in 25kg bags, 500kg supersacks, or bulk railcars',
      safety: 'Non-hazardous polymer. Standard plastics handling precautions apply.',
    },
  };

  const product = products[selectedProduct];
  const Icon = product.icon;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-teal-400/50 bg-teal-400/10 backdrop-blur mb-6">
            <FileText className="w-4 h-4 text-teal-300 animate-pulse" />
            <span className="text-xs font-bold text-teal-300 tracking-wide uppercase">
              Technical Specifications
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Product Data Sheets
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Complete technical specifications, certifications, and application guidelines
          </p>
        </motion.div>

        {/* Product Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(products).map(([key, value]) => {
            const ProductIcon = value.icon;
            return (
              <button
                key={key}
                onClick={() => setSelectedProduct(key)}
                className={`p-6 rounded-xl transition-all ${
                  selectedProduct === key
                    ? `bg-gradient-to-br ${value.color} shadow-2xl scale-105`
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <ProductIcon className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-white font-semibold text-center">{value.name}</div>
              </button>
            );
          })}
        </div>

        {/* Specification Sheet */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Header Card */}
            <div className={`bg-gradient-to-br ${product.color} rounded-2xl p-8`}>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/20 rounded-xl">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-4xl font-display font-bold text-white mb-2">
                    {product.name}
                  </h2>
                  <p className="text-xl text-white/90 mb-4">{product.tagline}</p>
                  <p className="text-white/80">{product.description}</p>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-all font-semibold">
                  <Download className="w-4 h-4" />
                  Download PDF
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Physical Properties */}
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-teal-400" />
                  Physical Properties
                </h3>
                <div className="space-y-3">
                  {Object.entries(product.physicalProperties).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-start p-3 bg-white/5 rounded-lg">
                      <span className="text-sm text-neutral-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm font-semibold text-white text-right ml-4">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications */}
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <FileText className="w-6 h-6 text-blue-400" />
                  Technical Specifications
                </h3>
                <div className="space-y-3">
                  {Object.entries(product.technicalSpecs).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-start p-3 bg-white/5 rounded-lg">
                      <span className="text-sm text-neutral-300 capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </span>
                      <span className="text-sm font-semibold text-white text-right ml-4">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Performance Metrics
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.entries(product.performance).map(([key, value]) => (
                  <div key={key} className="p-4 bg-gradient-to-br from-teal-500/10 to-blue-500/10 border border-teal-500/30 rounded-lg">
                    <div className="text-xs text-teal-300 uppercase tracking-wide mb-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-lg font-bold text-white">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Applications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.applications.map((app, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white/5 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white">{app}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Certifications & Standards
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {product.certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Storage & Safety */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-400" />
                  Storage
                </h4>
                <p className="text-sm text-blue-100">{product.storage}</p>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Package className="w-5 h-5 text-purple-400" />
                  Packaging
                </h4>
                <p className="text-sm text-purple-100">{product.packaging}</p>
              </div>

              <div className="bg-orange-500/10 border border-orange-500/30 rounded-xl p-6">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-400" />
                  Safety
                </h4>
                <p className="text-sm text-orange-100">{product.safety}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <p className="text-sm text-neutral-400">
                For technical support, custom formulations, or bulk orders, contact our technical team.
              </p>
              <div className="flex justify-center gap-4 mt-4">
                <button className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-all">
                  Request Sample
                </button>
                <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
                  Contact Technical Team
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductSpecificationSheets;
