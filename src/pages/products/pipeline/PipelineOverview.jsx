import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight, Beaker, Shield, Zap, Layers, Wind, Droplets, Battery,
  Microscope, ChevronRight, Activity, Thermometer, X, Cpu, Globe, Filter
} from 'lucide-react';
import PageHeader from '../../../components/ui/PageHeader';
import Button from '../../../components/ui/Button';

// --- DATA SOURCE ---
// Product Images (Icons + Studio photos for slideshow)
const productImages = {
  rustene: ['/images/pipeline/application-icon/rustene_studio.png', '/images/pipeline/application-icon/rustene_hero.png', '/images/pipeline/studio/Rustene.png'],
  graphyre: ['/images/pipeline/application-icon/graphyre_studio.png', '/images/pipeline/studio/Graphyre.png', '/images/pipeline/studio/Graphyre-2.png'],
  graphosite: ['/images/pipeline/application-icon/graphosite_studio.png', '/images/pipeline/studio/Graphosite.png'],
  thermaphene: ['/images/pipeline/application-icon/thermaphene-icon.png', '/images/pipeline/application-icon/thermaphene_hero.png', '/images/pipeline/studio/thermophene.png', '/images/pipeline/studio/thermophene-2.png'],
  armophene: ['/images/pipeline/application-icon/armophene_studio.png', '/images/pipeline/studio/Armophene.png', '/images/pipeline/studio/Armophene-2.png'],
  hydrogen: ['/images/pipeline/application-icon/hydrogen_membrane_studio.png', '/images/pipeline/studio/Gryogen.png', '/images/pipeline/studio/HydrogenMembranes.png'],
  desalination: ['/images/pipeline/application-icon/desalination_membrane_studio.png', '/images/pipeline/studio/DesalinationMembranes.png', '/images/pipeline/studio/mariphene.png'],
  glass: ['/images/pipeline/application-icon/graphene_glass_fibres_studio.png', '/images/pipeline/studio/Glasephene.png', '/images/pipeline/studio/Glasephene-2.png', '/images/pipeline/studio/Glasephene-3.png'],
  battery: ['/images/pipeline/application-icon/battery_storage_studio.png', '/images/pipeline/studio/Voltaphene.png'],
  aerowater: ['/images/pipeline/application-icon/atmospheric_harvesting_studio.png', '/images/pipeline/studio/aerophenter_studio.png', '/images/pipeline/studio/AtmosphericHarvesting-2.png']
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
        name: 'Gryogen',
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
        name: 'Mariphene',
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
        name: 'Aerophenter',
        subtitle: 'Atmospheric Harvesting',
        description: 'Graphene membranes engineered to harvest atmospheric moisture and convert air into potable water efficiently.',
        status: 'Pilot Trial',
        type: 'Pilot',
        icon: Wind,
        image: productImages.aerowater,
        specs: ['Moisture Harvesting', 'Air-to-Water', 'Energy Efficient'],
        impact: 'Water Scarcity'
      },
      {
        id: 'glassphen',
        name: 'Glasphene',
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
        name: 'Voltaphene',
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

// Combine all items
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

  // slideshow logic
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = Array.isArray(item.image) ? item.image : (item.image ? [item.image] : []);
  const hasMultipleImages = images.length > 1;

  useEffect(() => {
    let interval;
    if (hasMultipleImages) {
      interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [hasMultipleImages, images.length]);

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
            <AnimatePresence mode="wait">
              {images.length > 0 ? (
                <motion.img
                  key={currentImageIndex}
                  src={images[currentImageIndex]}
                  alt={item.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover opacity-80"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-neutral-800">
                  <item.icon size={64} className="text-neutral-700" />
                </div>
              )}
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent"></div>

            {/* Dots for slideshow */}
            {hasMultipleImages && (
              <div className="absolute top-4 left-4 flex gap-1 z-20">
                {images.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/30'}`}
                  />
                ))}
              </div>
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

  // slideshow logic — idle on first image, activates on hover
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = React.useRef(null);
  const images = Array.isArray(item.image) ? item.image : (item.image ? [item.image] : []);
  const hasMultipleImages = images.length > 1;

  const handleMouseEnter = () => {
    if (!hasMultipleImages) return;
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 1200);
  };

  const handleMouseLeave = () => {
    clearInterval(intervalRef.current);
    setCurrentImageIndex(0);
  };

  useEffect(() => () => clearInterval(intervalRef.current), []);

  return (
    <Link to={productRoute} className="block h-full">
      <motion.div
        layout
        layoutId={`card-${item.id}`}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
        className="group relative h-full aspect-square rounded-3xl overflow-hidden cursor-pointer border border-neutral-200 bg-white hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col"
        whileHover={{ y: -5 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Full Card Image Background with gradient overlay */}
        <div className="absolute inset-0 bg-neutral-100">
          <AnimatePresence mode="wait">
            {images.length > 0 ? (
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex]}
                alt={item.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover p-8 group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                <item.icon size={64} className="text-neutral-300" />
              </div>
            )}
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

          {/* Dots for slideshow */}
          {hasMultipleImages && (
            <div className="absolute top-4 right-4 flex gap-1 z-20">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/30'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end p-8">
          {/* Status Badge */}
          <div className="absolute top-6 left-6">
            <motion.div layoutId={`status-${item.id}`} className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border backdrop-blur-md ${isPilot ? 'bg-purple-500/80 border-purple-400 text-white' : 'bg-blue-600/80 border-blue-400 text-white'
              }`}>
              {item.status}
            </motion.div>
          </div>

          <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <motion.p layoutId={`subtitle-${item.id}`} className="text-xs font-mono text-neutral-300 uppercase tracking-wide mb-2">{item.subtitle}</motion.p>
            <div className="flex justify-between items-end">
              <motion.h3 layoutId={`title-${item.id}`} className="text-3xl font-display font-medium text-white mb-2">{item.name}</motion.h3>
              <div className="bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                <ArrowRight className="text-white" size={20} />
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
    <div className="min-h-screen">
      <PageHeader
        category="R&D"
        title="Innovation Pipeline"
        subtitle="Exploring the frontiers of material science. Discover our next-generation technologies currently in development."
      />

      {/* Floating Filter Bar */}
      <div className="sticky top-32 z-30 px-6 mb-12">
        <div className="max-w-fit mx-auto bg-white/80 backdrop-blur-xl border border-white/20 shadow-xl shadow-black/5 rounded-full p-1.5 flex items-center gap-1">
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'all' ? 'bg-neutral-900 text-white shadow-md' : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/50'}`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter('r&d')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'r&d' ? 'bg-blue-600 text-white shadow-md' : 'text-neutral-500 hover:text-blue-600 hover:bg-blue-50'}`}
          >
            R&D Pipeline
          </button>
          <button
            onClick={() => setFilter('pilot')}
            className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${filter === 'pilot' ? 'bg-purple-600 text-white shadow-md' : 'text-neutral-500 hover:text-purple-600 hover:bg-purple-50'}`}
          >
            Pilot Trials
          </button>
        </div>
      </div>

      {/* Grid Section */}
      <section className="py-24 px-6 bg-neutral-50 min-h-[800px] border-t border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-display font-medium text-neutral-900">
              Active Development
            </h2>
            <div className="text-sm text-neutral-500 font-mono">
              {filteredItems.length} Projects Loaded
            </div>
          </div>

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

      {/* Footer Section */}
      <section className="py-32 px-6 bg-white border-t border-neutral-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent opacity-50"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 text-xs font-mono font-medium tracking-wider uppercase mb-8">
            <Cpu className="w-3 h-3" />
            R&D Partnership
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
            Engineer The Future With Us
          </h2>
          <p className="text-xl text-neutral-500 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Our R&D philosophy is built on iteration, validation, and scale. We don't just invent materials; we engineer solutions for the world's most complex problems.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/partnership">
              <Button variant="primary" className="px-8 py-4">Partner With R&D</Button>
            </Link>
            <Link to="/contact">
              <Button variant="secondary" className="px-8 py-4">Contact Labs</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PipelineOverview;
