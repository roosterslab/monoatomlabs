import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Beaker, Shield, Zap, Layers, Wind, Droplets, Battery,
  Microscope, ChevronRight, Activity, Thermometer, X, Cpu, Globe
} from 'lucide-react';
import PageHeader from '../../../components/ui/PageHeader';
import SectionHeading from '../../../components/ui/SectionHeading';
import Button from '../../../components/ui/Button';
import PilotTechnologies from '../../../components/pipeline/PilotTechnologies';

// --- DATA SOURCE ---
// Product Images (Using existing assets where available, otherwise generic placeholders)
const productImages = {
  rustene: 'file:///C:/Users/globql-ws/.gemini/antigravity/brain/f9a3c1bb-0c1f-4026-b16d-cfa064ce4158/rustene_coating_demo_1770299350202.png',
  graphyre: 'file:///C:/Users/globql-ws/.gemini/antigravity/brain/f9a3c1bb-0c1f-4026-b16d-cfa064ce4158/graphyre_tire_concept_1770299415833.png',
  graphosite: 'file:///C:/Users/globql-ws/.gemini/antigravity/brain/f9a3c1bb-0c1f-4026-b16d-cfa064ce4158/graphosite_fiber_structure_1770299515135.png',
  thermaphene: 'file:///C:/Users/globql-ws/.gemini/antigravity/brain/f9a3c1bb-0c1f-4026-b16d-cfa064ce4158/thermaphene_heating_fabric_1770299604729.png',
  armophene: 'file:///C:/Users/globql-ws/.gemini/antigravity/brain/f9a3c1bb-0c1f-4026-b16d-cfa064ce4158/armophene_ballistic_plate_1770299683940.png',
  hydrogen: 'file:///C:/Users/globql-ws/.gemini/antigravity/brain/f9a3c1bb-0c1f-4026-b16d-cfa064ce4158/hydrogen_membrane_unit_1770300104145.png',
  desalination: 'file:///C:/Users/globql-ws/.gemini/antigravity/brain/f9a3c1bb-0c1f-4026-b16d-cfa064ce4158/desalination_membrane_closeup_1770300134932.png',
  glass: 'file:///C:/Users/globql-ws/.gemini/antigravity/brain/f9a3c1bb-0c1f-4026-b16d-cfa064ce4158/graphene_glass_fibre_spool_1770300183554.png',
  battery: 'file:///C:/Users/globql-ws/.gemini/antigravity/brain/f9a3c1bb-0c1f-4026-b16d-cfa064ce4158/battery_storage_module_1770300213143.png'
};

const pipelineCategories = [
  {
    id: 'pipeline',
    title: 'Products in Pipeline',
    description: 'Advanced material solutions addressing critical industrial challenges.',
    items: [
      {
        id: 'rustene',
        name: 'Rustene',
        subtitle: 'Anti-Corrosion Shield',
        description: 'Graphene-based anti-rusting paint forms an ultra-thin barrier preventing corrosion and extending metal lifespan.',
        status: 'Development',
        type: 'R&D',
        icon: Droplets,
        image: productImages.rustene,
        specs: ['Ultra-thin Barrier', 'Corrosion Prevention', 'Metal Lifespan Extension'],
        impact: 'Infrastructure Protection'
      },
      {
        id: 'graphyre',
        name: 'Graphyre',
        subtitle: 'Reinforced Performance Tyres',
        description: 'Graphene-reinforced composites delivering higher strength, lower rolling resistance, and extended service life.',
        status: 'Development',
        type: 'R&D',
        icon: Wind,
        image: productImages.graphyre,
        specs: ['Reduced Rolling Resistance', 'Enhanced Wear Life', 'High Tensile Strength'],
        impact: 'Automotive Efficiency'
      },
      {
        id: 'graphosite',
        name: 'Graphosite',
        subtitle: 'Structural Composites',
        description: 'Lightweight, high-strength graphene-reinforced fibres engineered for next-generation structural composites.',
        status: 'Development',
        type: 'R&D',
        icon: Layers,
        image: productImages.graphosite,
        specs: ['Lightweighting', 'High Strength-to-Weight', 'Structural Integrity'],
        impact: 'Aerospace & Automotive'
      },
      {
        id: 'thermaphene',
        name: 'Thermaphene',
        subtitle: 'Smart Thermal Fabrics',
        description: 'Graphene-based heating solution enabling lightweight and high-performance winter wear.',
        status: 'Development',
        type: 'R&D',
        icon: Thermometer,
        image: productImages.thermaphene,
        specs: ['Rapid Heating', 'Flexible Integration', 'Lightweight Design'],
        impact: 'Performance Apparel'
      },
      {
        id: 'armophene',
        name: 'Armophene',
        subtitle: 'Next-Gen Ballistics',
        description: 'Graphene-infused bulletproof jacket delivering lightweight, flexible armor with superior ballistic protection compared to Kevlar.',
        status: 'Development',
        type: 'R&D',
        icon: Shield,
        image: productImages.armophene,
        specs: ['High Kinetic Dissipation', 'Superior to Kevlar', 'Flexible Armor'],
        impact: 'Defense & Security'
      }
    ]
  },
  {
    id: 'pilots',
    title: 'Field-Scale Pilot Trials',
    description: 'Technologies currently undergoing real-world validation and commercial scaling.',
    items: [
      {
        id: 'hydrogen',
        name: 'H2-Sep',
        subtitle: 'Hydrogen Selection Membrane',
        description: 'High-selectivity graphene membranes enabling efficient hydrogen separation and production with reduced energy losses.',
        status: 'Pilot Trial',
        type: 'Pilot',
        icon: Activity,
        image: productImages.hydrogen,
        specs: ['High Selectivity', 'Energy Efficient', 'Pure H2 Separator'],
        impact: 'Green Energy'
      },
      {
        id: 'desalination',
        name: 'AquaGraphene',
        subtitle: 'Desalination Membrane',
        description: 'Ultra-thin graphene membranes delivering high-flux, low-energy seawater desalination and industrial water purification.',
        status: 'Pilot Trial',
        type: 'Pilot',
        icon: Droplets,
        image: productImages.desalination,
        specs: ['High Flux', 'Low Energy', 'Salt Rejection'],
        impact: 'Water Security'
      },
      {
        id: 'aerowater',
        name: 'AeroWater',
        subtitle: 'Atmospheric Harvesting',
        description: 'Graphene membranes engineered to harvest atmospheric moisture and convert air into potable water efficiently.',
        status: 'Pilot Trial',
        type: 'Pilot',
        icon: Wind,
        image: null,
        specs: ['Moisture Harvesting', 'Air-to-Water', 'Energy Efficient'],
        impact: 'Water Scarcity'
      },
      {
        id: 'glassphen',
        name: 'GlassPhen',
        subtitle: 'Reinforced Glass Fibres',
        description: 'Graphene-reinforced glass fibres offering enhanced strength, durability, and multifunctional performance in composites.',
        status: 'Pilot Trial',
        type: 'Pilot',
        icon: Layers,
        image: productImages.glass,
        specs: ['Enhanced Strength', 'Durability', 'Multifunctional'],
        impact: 'Materials Engineering'
      },
      {
        id: 'voltagraphene',
        name: 'VoltaGraphene',
        subtitle: 'Energy Storage Systems',
        description: 'Graphene-enabled battery storage systems delivering higher power density, faster response, and extended lifecycle.',
        status: 'Pilot Trial',
        type: 'Pilot',
        icon: Battery,
        image: productImages.battery,
        specs: ['High Power Density', 'Fast Response', 'Extended Lifecycle'],
        impact: 'Energy Storage'
      }
    ]
  }
];

// Combine all items for the grid
const allItems = [...pipelineCategories[0].items, ...pipelineCategories[1].items];

// Map product IDs to routes
const getProductRoute = (id) => {
  const routeMap = {
    'rustene': '/products/pipeline/rustene',
    'graphyre': '/products/pipeline/graphyre',
    'graphosite': '/products/pipeline/graphosite',
    'thermaphene': '/products/pipeline/thermaphene',
    'armophene': '/products/pipeline/armophene',
    'hydrogen': '/products/pipeline/hydrogen-membranes',
    'desalination': '/products/pipeline/desalination-membranes',
    'aerowater': '/products/pipeline/atmospheric-harvesting',
    'glassphen': '/products/pipeline/graphene-glass-fibres',
    'voltagraphene': '/products/pipeline/battery-storage'
  };
  return routeMap[id] || '/products/pipeline';
};

// --- COMPONENTS ---

const DetailModal = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 md:p-8"
      onClick={onClose}
    >
      <motion.div
        layoutId={`card-${item.id}`}
        className="w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Left/Top: Visuals */}
        <div className="w-full md:w-2/5 relative h-64 md:h-auto bg-neutral-900 overflow-hidden">
          <motion.div className="absolute inset-0" layoutId={`image-container-${item.id}`}>
            {item.image ? (
              <img src={item.image} alt={item.name} className="w-full h-full object-cover opacity-80" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-neutral-800">
                <item.icon size={64} className="text-neutral-700" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>

            {/* Overlay Patterns */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            {item.type === 'R&D' && (
              <div className="absolute inset-0 bg-[size:20px_20px] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]"></div>
            )}
          </motion.div>

          <div className="absolute bottom-0 left-0 p-8 w-full z-10">
            <motion.div layoutId={`status-${item.id}`} className={`inline-flex px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase border mb-4 ${item.status === 'Pilot Trial' ? 'bg-purple-500/20 border-purple-500/30 text-purple-200' : 'bg-blue-500/20 border-blue-500/30 text-blue-200'
              }`}>
              {item.status}
            </motion.div>
            <motion.h2 layoutId={`title-${item.id}`} className="text-4xl font-display font-medium text-white mb-2">{item.name}</motion.h2>
            <motion.p layoutId={`subtitle-${item.id}`} className="text-neutral-400">{item.subtitle}</motion.p>
          </div>

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors z-20"
          >
            <X size={20} />
          </button>
        </div>

        {/* Right/Bottom: Details */}
        <motion.div
          className="w-full md:w-3/5 p-8 md:p-12 overflow-y-auto bg-white custom-scrollbar"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8 pb-8 border-b border-neutral-100">
            <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-100">
              <item.icon className="w-6 h-6 text-neutral-900" />
            </div>
            <div>
              <div className="text-xs text-neutral-400 uppercase tracking-widest font-bold">Project ID</div>
              <div className="text-lg font-mono text-neutral-900">{item.id.toUpperCase()}</div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-4">Mission Brief</h3>
            <p className="text-lg text-neutral-600 leading-relaxed font-light">
              {item.description}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
            <div>
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Technical Targets</h3>
              <ul className="space-y-3">
                {item.specs.map((spec, idx) => (
                  <li key={idx} className="flex items-center text-neutral-700 text-sm">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3 shrink-0"></div>
                    {spec}
                  </li>
                ))}
              </ul>

              {/* TRL Meter */}
              <div className="mt-8 pt-6 border-t border-neutral-100">
                <div className="flex justify-between items-end mb-2">
                  <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Readiness Level (TRL {item.trl})</h3>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border uppercase ${item.type === 'Pilot' ? 'bg-purple-100 text-purple-700 border-purple-200' : 'bg-blue-100 text-blue-700 border-blue-200'
                    }`}>{item.trlLabel}</span>
                </div>
                <div className="flex gap-1 h-2">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((level) => (
                    <div
                      key={level}
                      className={`flex-1 rounded-full ${level <= item.trl
                          ? (item.type === 'Pilot' ? 'bg-purple-500' : 'bg-blue-500')
                          : 'bg-neutral-100'
                        }`}
                    ></div>
                  ))}
                </div>
                <div className="flex justify-between mt-1 text-[10px] text-neutral-400 font-mono">
                  <span>Concept</span>
                  <span>Validated</span>
                  <span>Commercial</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-4">Sector Impact</h3>
              <div className="p-4 bg-neutral-900 rounded-xl text-white">
                <div className="text-2xl font-display font-medium mb-1">{item.impact}</div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">Primary Application</div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-neutral-100 flex justify-end">
            <Button variant="secondary" onClick={onClose} className="mr-4">Close View</Button>
            <Link to="/contact">
              <Button variant="primary">Request Technical Sheet</Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

const PipelineCard = ({ item, onClick }) => {
  const isPilot = item.type === 'Pilot';
  const productRoute = getProductRoute(item.id);

  const handleClick = (e) => {
    // Allow modal on click, but also navigation via link
    if (e.target.closest('a')) {
      return; // Let the link handle navigation
    }
    onClick(item);
  };

  return (
    <Link to={productRoute} className="block h-full">
      <motion.div
        layout
        layoutId={`card-${item.id}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
        className={`group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer border transition-all duration-500 ${isPilot ? 'border-neutral-200 hover:border-purple-300' : 'border-neutral-200 hover:border-blue-300'
          }`}
        whileHover={{ y: -5, boxShadow: "0 20px 40px -10px rgba(0,0,0,0.1)" }}
      >
      {/* Background Image */}
      <motion.div className="absolute inset-0 bg-neutral-900" layoutId={`image-container-${item.id}`}>
        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 transform"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <item.icon size={80} className="text-neutral-800" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-900/40 to-transparent"></div>

        {/* Overlay Effects */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

        {/* R&D Grid Pattern */}
        {!isPilot && (
          <div className="absolute inset-0 bg-[size:40px_40px] bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        )}

        {/* Pilot Scan Line */}
        {isPilot && (
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/10 to-transparent h-[10%] w-full -translate-y-full group-hover:translate-y-[200%] transition-transform duration-1000"></div>
        )}
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex items-center justify-between mb-3">
            <motion.div layoutId={`status-${item.id}`} className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border backdrop-blur-md ${isPilot ? 'bg-purple-500/20 border-purple-500/30 text-purple-200' : 'bg-blue-500/20 border-blue-500/30 text-blue-200'
              }`}>
              {item.status}
            </motion.div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <ArrowRight className="text-white w-5 h-5" />
            </div>
          </div>

          <motion.h3 layoutId={`title-${item.id}`} className="text-3xl font-display font-medium text-white mb-2 leading-tight">{item.name}</motion.h3>
          <motion.p layoutId={`subtitle-${item.id}`} className="text-neutral-400 text-sm mb-4 line-clamp-2">{item.subtitle}</motion.p>

          {/* Hover Details */}
          <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-300 opacity-0 group-hover:opacity-100">
            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
              {item.specs.slice(0, 2).map((spec, i) => (
                <span key={i} className="text-[10px] text-neutral-300 bg-white/5 px-2 py-1 rounded border border-white/10">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
    </Link>
  );
};

const PipelineOverview = () => {
  const [filter, setFilter] = useState('all'); // all, r&d, pilot
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredItems = filter === 'all'
    ? allItems
    : allItems.filter(item => filter === 'r&d' ? item.type === 'R&D' : item.type === 'Pilot');

  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        category="R&D"
        title="Innovation Pipeline"
        subtitle="Exploring the frontiers of material science. Discover our next-generation technologies currently in development."
      />

      {/* Hero / Filter Section */}
      <section className="py-12 border-b border-neutral-100 sticky top-0 bg-white/80 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <h2 className="text-2xl font-display font-medium text-neutral-900">Lab Projects</h2>

          <div className="flex p-1 bg-neutral-100 rounded-full border border-neutral-200">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === 'all' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter('r&d')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === 'r&d' ? 'bg-white text-blue-600 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
            >
              R&D Pipeline
            </button>
            <button
              onClick={() => setFilter('pilot')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === 'pilot' ? 'bg-white text-purple-600 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
            >
              Pilot Trials
            </button>
          </div>
        </div>
      </section>

      {/* Pilot Technologies Showcase */}
      <PilotTechnologies />

      {/* Grid Section */}
      <section className="py-12 px-6 min-h-[800px] bg-neutral-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredItems.map(item => (
                <PipelineCard key={item.id} item={item} onClick={setSelectedProject} />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <DetailModal item={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <section className="py-24 px-6 bg-white border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <Cpu className="w-12 h-12 text-neutral-300 mx-auto mb-6" />
          <h2 className="text-3xl font-display font-medium text-neutral-900 mb-6">Engineering The Future</h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Our R&D philosophy is built on iteration, validation, and scale. We don't just invent materials; we engineer solutions for the world's most complex problems.
          </p>
          <Link to="/partnership">
            <Button variant="primary">Partner With R&D</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PipelineOverview;
