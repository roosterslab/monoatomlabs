import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Beaker, Shield, Zap, Layers, Wind, Droplets, Battery, Activity, Thermometer, Cpu, Box, Sun, ShieldCheck } from 'lucide-react';
import PageHeader from '../../components/ui/PageHeader';
import { products } from '../../data/content';

// --- ALL PRODUCT DATA ---
const allProducts = [
    // Commercial Ready
    {
        id: 'graphacrete',
        name: 'Graphacrete',
        subtitle: 'High-Performance Concrete Additive',
        description: 'Transform standard concrete into high-performance material with 50% strength increase and NABL-certified results.',
        status: 'Commercial Ready',
        type: 'Commercial',
        icon: Layers,
        images: [products.graphacrete.image],
        specs: ['+40-50% Strength', '15-20% Cement Savings', 'NABL Certified'],
        impact: 'Construction',
        path: '/products/graphacrete',
    },
    {
        id: 'graffisol',
        name: 'Graffisol',
        subtitle: 'Next-Generation Solar Panel Coating',
        description: '8-12% increase in solar panel energy output with improved thermal dissipation and long-lasting hydrophobic protection.',
        status: 'Commercial Ready',
        type: 'Commercial',
        icon: Sun,
        images: [products.graffisol.image],
        specs: ['+8-12% Energy Output', 'Thermal Dissipation', 'Anti-Soiling'],
        impact: 'Solar Energy',
        path: '/products/graffisol',
    },
    {
        id: 'ceraphene',
        name: 'Ceraphene',
        subtitle: 'Ultra-Durable Ceramic Coating',
        description: 'Graphene-enhanced 9H+ ceramic coating delivering industry-leading protection at 60-70% lower cost than premium alternatives.',
        status: 'Commercial Ready',
        type: 'Commercial',
        icon: ShieldCheck,
        images: [products.ceraphene.image],
        specs: ['9H+ Hardness', '3-4yr Lifecycle', 'Ultra-Hydrophobic'],
        impact: 'Automotive',
        path: '/products/ceraphene',
    },
    {
        id: 'hdgpe',
        name: 'HD-G-PE',
        subtitle: 'Graphene-Reinforced Polymer Enhancer',
        description: 'Transforms HDPE with 30% strength improvement, enhanced thermal stability, and improved barrier properties.',
        status: 'Commercial Ready',
        type: 'Commercial',
        icon: Box,
        images: [products.hdgpe.image],
        specs: ['+30% Tensile Strength', 'Thermal Stability', 'Barrier Properties'],
        impact: 'Industrial Polymers',
        path: '/products/hd-g-pe',
    },
    // R&D Pipeline
    {
        id: 'rustene',
        name: 'Rustene',
        subtitle: 'Anti-Corrosion Shield',
        description: 'Graphene-based anti-rusting paint forms an ultra-thin barrier preventing corrosion and extending metal lifespan.',
        status: 'R&D Pipeline',
        type: 'R&D',
        icon: Droplets,
        images: ['/images/pipeline/application-icon/rustene_studio.png', '/images/pipeline/application-icon/rustene_hero.png', '/images/pipeline/studio/Rustene.png'],
        specs: ['Ultra-thin Barrier', 'Corrosion Prevention', 'Metal Lifespan Extension'],
        impact: 'Infrastructure',
        path: '/products/pipeline/rustene',
    },
    {
        id: 'graphyre',
        name: 'Graphyre',
        subtitle: 'Reinforced Performance Tyres',
        description: 'Graphene-reinforced composites delivering higher strength, lower rolling resistance, and extended service life.',
        status: 'R&D Pipeline',
        type: 'R&D',
        icon: Wind,
        images: ['/images/pipeline/application-icon/graphyre_studio.png', '/images/pipeline/studio/Graphyre.png', '/images/pipeline/studio/Graphyre-2.png'],
        specs: ['Reduced Rolling Resistance', 'Enhanced Wear Life', 'High Tensile Strength'],
        impact: 'Automotive',
        path: '/products/pipeline/graphyre',
    },
    {
        id: 'graphosite',
        name: 'Graphosite',
        subtitle: 'Structural Composites',
        description: 'Lightweight, high-strength graphene-reinforced fibres for next-generation structural composites.',
        status: 'R&D Pipeline',
        type: 'R&D',
        icon: Layers,
        images: ['/images/pipeline/application-icon/graphosite_studio.png', '/images/pipeline/studio/Graphosite.png'],
        specs: ['Lightweighting', 'High Strength-to-Weight', 'Structural Integrity'],
        impact: 'Aerospace & Auto',
        path: '/products/pipeline/graphosite',
    },
    {
        id: 'thermaphene',
        name: 'Thermaphene',
        subtitle: 'Smart Thermal Fabrics',
        description: 'Graphene-based heating solution enabling lightweight and high-performance winter wear.',
        status: 'R&D Pipeline',
        type: 'R&D',
        icon: Thermometer,
        images: ['/images/pipeline/application-icon/thermaphene-icon.png', '/images/pipeline/application-icon/thermaphene_hero.png', '/images/pipeline/studio/thermophene.png', '/images/pipeline/studio/thermophene-2.png'],
        specs: ['Rapid Heating', 'Flexible Integration', 'Lightweight Design'],
        impact: 'Performance Apparel',
        path: '/products/pipeline/thermaphene',
    },
    {
        id: 'armophene',
        name: 'Armophene',
        subtitle: 'Next-Gen Ballistics',
        description: 'Graphene-infused bulletproof jacket delivering lightweight, flexible armor superior to Kevlar.',
        status: 'R&D Pipeline',
        type: 'R&D',
        icon: Shield,
        images: ['/images/pipeline/application-icon/armophene_studio.png', '/images/pipeline/studio/Armophene.png', '/images/pipeline/studio/Armophene-2.png'],
        specs: ['High Kinetic Dissipation', 'Superior to Kevlar', 'Flexible Armor'],
        impact: 'Defense & Security',
        path: '/products/pipeline/armophene',
    },
    {
        id: 'graphenode',
        name: 'Graphenode',
        subtitle: 'Nanoplatelet Electrode Material',
        description: 'High-purity graphene nanoplatelet material engineered as a superior anode for lithium-ion batteries and supercapacitors.',
        status: 'R&D Pipeline',
        type: 'R&D',
        icon: Battery,
        images: ['/images/pipeline/application-icon/graphenode-icon.png', '/images/pipeline/studio/Graphenode.png', '/images/pipeline/studio/graphenodes.png', '/images/pipeline/studio/Graphenodes-2.png'],
        specs: ['>99% Purity', 'NRG-70 & NRG-150 Grades', '5,000-Cycle Durability'],
        impact: 'Energy Storage',
        path: '/products/pipeline/graphenode',
    },
    // Pilot Trials
    {
        id: 'hydrogen',
        name: 'Gryogen',
        subtitle: 'Hydrogen Selection Membrane',
        description: 'High-selectivity graphene membranes enabling efficient hydrogen separation with reduced energy losses.',
        status: 'Pilot Trial',
        type: 'Pilot',
        icon: Activity,
        images: ['/images/pipeline/application-icon/hydrogen_membrane_studio.png', '/images/pipeline/studio/Gryogen.png', '/images/pipeline/studio/HydrogenMembranes.png'],
        specs: ['High Selectivity', 'Energy Efficient', 'Pure H₂ Separator'],
        impact: 'Green Energy',
        path: '/products/pipeline/hydrogen-membranes',
    },
    {
        id: 'desalination',
        name: 'Mariphene',
        subtitle: 'Desalination Membrane',
        description: 'Ultra-thin graphene membranes delivering high-flux, low-energy seawater desalination.',
        status: 'Pilot Trial',
        type: 'Pilot',
        icon: Droplets,
        images: ['/images/pipeline/application-icon/mariphene.png', '/images/pipeline/studio/mariphene.png', '/images/desalination_hero.png'],
        specs: ['High Flux', 'Low Energy', 'Salt Rejection'],
        impact: 'Water Security',
        path: '/products/pipeline/desalination-membranes',
    },
    {
        id: 'aerowater',
        name: 'Aerophenter',
        subtitle: 'Atmospheric Harvesting',
        description: 'Graphene membranes engineered to harvest atmospheric moisture and convert air into potable water.',
        status: 'Pilot Trial',
        type: 'Pilot',
        icon: Wind,
        images: ['/images/pipeline/application-icon/atmospheric_harvesting_studio.png', '/images/pipeline/studio/aerophenter_studio.png', '/images/pipeline/studio/AtmosphericHarvesting-2.png'],
        specs: ['Moisture Harvesting', 'Air-to-Water', 'Energy Efficient'],
        impact: 'Water Scarcity',
        path: '/products/pipeline/atmospheric-harvesting',
    },
    {
        id: 'glassphen',
        name: 'Glasphene',
        subtitle: 'Reinforced Glass Fibres',
        description: 'Graphene-reinforced glass fibres offering enhanced strength, durability, and multifunctional performance.',
        status: 'Pilot Trial',
        type: 'Pilot',
        icon: Layers,
        images: ['/images/pipeline/application-icon/graphene_glass_fibres_studio.png', '/images/pipeline/studio/Glasephene.png', '/images/pipeline/studio/Glasephene-2.png', '/images/pipeline/studio/Glasephene-3.png'],
        specs: ['Enhanced Strength', 'Durability', 'Multifunctional'],
        impact: 'Materials Engineering',
        path: '/products/pipeline/graphene-glass-fibres',
    },
    {
        id: 'voltaphene',
        name: 'Voltaphene',
        subtitle: 'Energy Storage Systems',
        description: 'Graphene-enabled battery systems delivering higher power density, faster response, and extended lifecycle.',
        status: 'Pilot Trial',
        type: 'Pilot',
        icon: Battery,
        images: ['/images/pipeline/application-icon/battery_storage_studio.png', '/images/pipeline/studio/Voltaphene.png'],
        specs: ['High Power Density', 'Fast Response', 'Extended Lifecycle'],
        impact: 'Energy Storage',
        path: '/products/pipeline/battery-storage',
    },
];

const statusStyle = {
    'Commercial Ready': 'bg-green-500/80 border-green-400 text-white',
    'R&D Pipeline':     'bg-blue-600/80 border-blue-400 text-white',
    'Pilot Trial':      'bg-purple-500/80 border-purple-400 text-white',
};

const FILTERS = [
    { key: 'all',        label: 'All Products',      color: 'bg-neutral-900 text-white' },
    { key: 'Commercial', label: 'Commercial Ready',  color: 'bg-green-600 text-white'   },
    { key: 'R&D',        label: 'R&D Pipeline',      color: 'bg-blue-600 text-white'    },
    { key: 'Pilot',      label: 'Pilot Trials',      color: 'bg-purple-600 text-white'  },
];

// --- PRODUCT CARD (same look as PipelineOverview) ---
const ProductCard = ({ item }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef(null);
    const images = item.images || [];
    const hasMultipleImages = images.length > 1;

    const handleMouseEnter = () => {
        if (!hasMultipleImages) return;
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % images.length);
        }, 1200);
    };

    const handleMouseLeave = () => {
        clearInterval(intervalRef.current);
        setCurrentImageIndex(0);
    };

    useEffect(() => () => clearInterval(intervalRef.current), []);

    return (
        <Link to={item.path} className="block h-full">
            <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                className="group relative aspect-square rounded-3xl overflow-hidden cursor-pointer border border-neutral-200 bg-white hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-500 flex flex-col"
                whileHover={{ y: -5 }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {/* Full-card image background */}
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
                            <div className="w-full h-full flex items-center justify-center">
                                <item.icon size={64} className="text-neutral-300" />
                            </div>
                        )}
                    </AnimatePresence>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Image dots */}
                    {hasMultipleImages && (
                        <div className="absolute top-4 right-4 flex gap-1 z-20">
                            {images.map((_, idx) => (
                                <div key={idx} className={`w-1.5 h-1.5 rounded-full transition-colors ${idx === currentImageIndex ? 'bg-white' : 'bg-white/30'}`} />
                            ))}
                        </div>
                    )}
                </div>

                {/* Content overlay */}
                <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    {/* Status badge */}
                    <div className="absolute top-5 left-5">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase border backdrop-blur-md ${statusStyle[item.status]}`}>
                            {item.status}
                        </span>
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-xs font-mono text-neutral-300 uppercase tracking-wide mb-1">{item.subtitle}</p>
                        <div className="flex justify-between items-end">
                            <h3 className="text-2xl font-display font-medium text-white">{item.name}</h3>
                            <div className="bg-white/10 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-x-4 group-hover:translate-x-0">
                                <ArrowRight className="text-white" size={18} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

// --- PAGE ---
const ProductsOverview = () => {
    const [filter, setFilter] = useState('all');

    const filtered = filter === 'all' ? allProducts : allProducts.filter(p => p.type === filter);

    const count = (key) => key === 'all' ? allProducts.length : allProducts.filter(p => p.type === key).length;

    return (
        <div className="min-h-screen">
            <PageHeader
                category="Portfolio"
                title="All Products"
                subtitle="Market-available graphene solutions and next-generation innovations — from commercial deployments to cutting-edge R&D."
                transparent={true}
            />

            {/* Sticky Filter Bar */}
            <div className="sticky top-24 z-30 px-6 mb-12 mt-4">
                <div className="max-w-fit mx-auto bg-white/80 backdrop-blur-xl border border-neutral-200 shadow-xl shadow-black/5 rounded-full p-1.5 flex items-center gap-1">
                    {FILTERS.map(f => (
                        <button
                            key={f.key}
                            onClick={() => setFilter(f.key)}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === f.key ? `${f.color} shadow-md` : 'text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/50'}`}
                        >
                            {f.label}
                            <span className={`ml-2 text-xs font-mono ${filter === f.key ? 'opacity-70' : 'text-neutral-400'}`}>
                                {count(f.key)}
                            </span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <section className="py-8 px-6 pb-24 bg-neutral-50 border-t border-neutral-200">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-10">
                        <h2 className="text-2xl font-display font-medium text-neutral-900">
                            {FILTERS.find(f => f.key === filter)?.label}
                        </h2>
                        <span className="text-sm text-neutral-400 font-mono">{filtered.length} products</span>
                    </div>

                    <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        <AnimatePresence>
                            {filtered.map(item => (
                                <ProductCard key={item.id} item={item} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default ProductsOverview;
