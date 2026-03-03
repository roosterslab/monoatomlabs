import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Sun, Shield, Beaker, ArrowRight, Zap, Target, Activity, FlaskConical, Atom } from 'lucide-react';
import ProductLightbox from '../ui/ProductLightbox';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { products as productsData } from '../../data/content';

const commercialProducts = [
    {
        id: 'graphacrete',
        title: 'Graphacrete',
        category: 'Construction',
        icon: Layers,
        description: 'High-Performance Concrete Additive',
        features: ['40-50% Strength Gain', '15-20% Cement Savings', '30-45% Water Resistance'],
        detail: 'Transform standard concrete into high-performance material with 50% strength increase, 15-20% cement reduction, and excellent crack resistance. NABL certified: M30 + Graphacrete ≈ M50.',
        stats: [{ label: 'Strength', value: '+50%' }, { label: 'Cement Savings', value: '15-20%' }],
        image: productsData.graphacrete.image
    },
    {
        id: 'graffisol',
        title: 'Graffisol',
        category: 'Solar Energy',
        icon: Sun,
        description: 'Next-Generation Solar Panel Coating',
        features: ['8-12% Energy Output Increase', 'Thermal Dissipation', 'Hydrophobic & Anti-Soiling'],
        detail: '8-12% increase in solar panel energy output (field & lab validated). Reduced surface reflection for improved light harvesting and long-lasting durability.',
        stats: [{ label: 'Energy Output', value: '+8-12%' }, { label: 'ROI Period', value: '18mo' }],
        image: productsData.graffisol.image
    },
    {
        id: 'ceraphene',
        title: 'Ceraphene',
        category: 'Automotive',
        icon: Shield,
        description: 'Ultra-Durable Ceramic Coating',
        features: ['9H+ Scratch Resistance', '3-4+ Years Lifecycle', 'Ultra-Hydrophobic'],
        detail: 'Graphene-enhanced ceramic coating with 9H+ hardness providing industry-leading protection at 60-70% lower cost than premium alternatives.',
        stats: [{ label: 'Hardness', value: '9H+' }, { label: 'Life', value: '3-4yr+' }],
        image: productsData.ceraphene.image
    },
    {
        id: 'hdgpe',
        title: 'HD-G-PE',
        category: 'Industrial Polymers',
        icon: Beaker,
        description: 'Graphene-Reinforced Polymer Enhancer',
        features: ['+30% Tensile Strength', 'Enhanced Thermal Stability', 'Improved Barrier Properties'],
        detail: 'Transform HDPE materials with 30% strength improvement, enhanced thermal stability, and improved barrier properties for pipes, films, and packaging.',
        stats: [{ label: 'Strength', value: '+30%' }, { label: 'Thermal', value: 'Enhanced' }],
        image: productsData.hdgpe.image
    }
];

const pipelineProducts = [
    { id: 'rustene', title: 'Rustene', category: 'Anti-Corrosion', status: 'R&D Pipeline', path: '/products/pipeline/rustene', image: '/images/pipeline/studio/Rustene.png' },
    { id: 'graphyre', title: 'Graphyre', category: 'Performance Tyres', status: 'R&D Pipeline', path: '/products/pipeline/graphyre', image: '/images/pipeline/studio/Graphyre.png' },
    { id: 'graphosite', title: 'Graphosite', category: 'Structural Composites', status: 'R&D Pipeline', path: '/products/pipeline/graphosite', image: '/images/pipeline/studio/Graphosite.png' },
    { id: 'thermaphene', title: 'Thermaphene', category: 'Smart Thermal', status: 'R&D Pipeline', path: '/products/pipeline/thermaphene', image: '/images/pipeline/studio/thermophene.png' },
    { id: 'armophene', title: 'Armophene', category: 'Ballistics', status: 'R&D Pipeline', path: '/products/pipeline/armophene', image: '/images/pipeline/studio/Armophene.png' },
    { id: 'graphenode', title: 'Graphenode', category: 'Energy Storage', status: 'R&D Pipeline', path: '/products/pipeline/graphenode', image: '/images/pipeline/studio/Graphosite.png' },
    { id: 'hydrogen-membranes', title: 'Gryogen', category: 'Hydrogen Separation', status: 'Pilot Trial', path: '/products/pipeline/hydrogen-membranes', image: '/images/pipeline/studio/Gryogen.png' },
    { id: 'desalination-membranes', title: 'Mariphene', category: 'Desalination', status: 'Pilot Trial', path: '/products/pipeline/desalination-membranes', image: '/images/pipeline/studio/mariphene.png' },
    { id: 'atmospheric-harvesting', title: 'Aerophenter', category: 'Atmospheric Water', status: 'Pilot Trial', path: '/products/pipeline/atmospheric-harvesting', image: '/images/pipeline/studio/Gryogen.png' },
    { id: 'graphene-glass-fibres', title: 'Glasphene', category: 'Glass Fibres', status: 'Pilot Trial', path: '/products/pipeline/graphene-glass-fibres', image: '/images/pipeline/studio/Glasephene.png' },
    { id: 'battery-storage', title: 'Voltaphene', category: 'Battery Storage', status: 'Pilot Trial', path: '/products/pipeline/battery-storage', image: '/images/pipeline/studio/Voltaphene.png' },
];

const PipelineTile = ({ product }) => (
    <Link to={product.path} className="group block">
        <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden hover:border-neutral-400 hover:shadow-md transition-all duration-200">
            <div className="h-32 bg-neutral-50 flex items-center justify-center p-4 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="p-4">
                <div className={`inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider mb-2 ${product.status === 'Pilot Trial' ? 'bg-purple-50 text-purple-600' : 'bg-blue-50 text-blue-600'}`}>
                    {product.status}
                </div>
                <h4 className="text-sm font-bold text-neutral-900 mb-0.5 group-hover:text-blue-600 transition-colors">{product.title}</h4>
                <p className="text-xs text-neutral-400 font-mono">{product.category}</p>
            </div>
        </div>
    </Link>
);

const ProductsSection = () => {
    const [activeProduct, setActiveProduct] = useState(0);
    const [activeTab, setActiveTab] = useState('commercial');

    return (
        <section className="py-24 px-6 bg-white border-b border-neutral-200 relative overflow-hidden">
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeading
                    number="02"
                    title="Product Suite"
                    subtitle="Commercially viable graphene solutions — from market-ready products to the next generation in development."
                    theme="light"
                />

                {/* Tab Switcher */}
                <div className="flex items-center gap-1 mt-10 mb-8 bg-neutral-100 rounded-xl p-1 w-fit">
                    <button
                        onClick={() => setActiveTab('commercial')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === 'commercial' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        Commercial Ready
                        <span className="text-xs font-mono text-neutral-400">4</span>
                    </button>
                    <button
                        onClick={() => setActiveTab('pipeline')}
                        className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${activeTab === 'pipeline' ? 'bg-white text-neutral-900 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
                    >
                        <FlaskConical className="w-3.5 h-3.5" />
                        In Development
                        <span className="text-xs font-mono text-neutral-400">11</span>
                    </button>
                </div>

                {/* Commercial Tab */}
                {activeTab === 'commercial' && (
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 min-h-[500px]">
                        {/* Selector List */}
                        <div className="md:col-span-1 lg:col-span-4 flex flex-col gap-3">
                            {commercialProducts.map((product, idx) => {
                                const isActive = activeProduct === idx;
                                return (
                                    <div
                                        key={product.id}
                                        onClick={() => setActiveProduct(idx)}
                                        className={`group relative p-6 cursor-pointer transition-all duration-300 border ${isActive ? 'bg-white border-neutral-200 shadow-xl border-l-4 border-l-blue-600 translate-x-2' : 'bg-white border-neutral-100 hover:bg-neutral-50 hover:border-neutral-200'}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-4">
                                                <div className={`p-2 rounded-sm ${isActive ? 'bg-blue-50 text-blue-600' : 'bg-neutral-100 text-neutral-400 group-hover:text-neutral-600'}`}>
                                                    {React.createElement(product.icon, { size: 20 })}
                                                </div>
                                                <div>
                                                    <h3 className={`font-display font-medium text-lg leading-none mb-1 ${isActive ? 'text-neutral-900' : 'text-neutral-500 group-hover:text-neutral-800'}`}>
                                                        {product.title}
                                                    </h3>
                                                    <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">{product.category}</span>
                                                </div>
                                            </div>
                                            <ArrowRight className={`w-4 h-4 transition-all ${isActive ? 'text-blue-600 opacity-100' : 'text-neutral-400 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-50'}`} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Detail View */}
                        <div className="md:col-span-2 lg:col-span-8 relative">
                            <div className="h-full bg-white border border-neutral-200 shadow-2xl p-8 md:p-12 flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                    <Target className="w-24 h-24 text-neutral-900" strokeWidth={0.5} />
                                </div>
                                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
                                    <div className="flex flex-col justify-between">
                                        <div>
                                            <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-50 border border-green-100 rounded-full text-xs font-mono text-green-700 mb-6">
                                                <Activity size={12} />
                                                <span>COMMERCIAL READY</span>
                                            </div>
                                            <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 tracking-tight">
                                                {commercialProducts[activeProduct].title}
                                            </h2>
                                            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                                                {commercialProducts[activeProduct].detail}
                                            </p>
                                            <div className="space-y-3 mb-8">
                                                {commercialProducts[activeProduct].features.map((feat, i) => (
                                                    <div key={i} className="flex items-center space-x-3">
                                                        <Zap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                                        <span className="text-neutral-700 font-medium">{feat}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="pt-8 border-t border-neutral-100">
                                            <Link to={`/products/${commercialProducts[activeProduct].id === 'hdgpe' ? 'hd-g-pe' : commercialProducts[activeProduct].id}`}>
                                                <Button variant="primary" theme="light" className="shadow-lg w-full sm:w-auto">
                                                    View Technical Data
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-6">
                                        <ProductLightbox
                                            src={commercialProducts[activeProduct].image}
                                            alt={commercialProducts[activeProduct].title}
                                            className="aspect-[4/3] w-full"
                                        />
                                        <div className="grid grid-cols-2 gap-4">
                                            {commercialProducts[activeProduct].stats.map((stat, i) => (
                                                <div key={i} className="p-4 bg-neutral-50 rounded-xl border border-neutral-100">
                                                    <div className="text-2xl md:text-3xl font-mono text-neutral-900 mb-1">{stat.value}</div>
                                                    <div className="text-xs uppercase tracking-widest text-neutral-500">{stat.label}</div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Pipeline Tab */}
                {activeTab === 'pipeline' && (
                    <div>
                        {/* R&D Pipeline */}
                        <div className="mb-10">
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">R&D Pipeline</h3>
                                <div className="flex-1 h-px bg-neutral-100"></div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {pipelineProducts.filter(p => p.status === 'R&D Pipeline').map(p => (
                                    <PipelineTile key={p.id} product={p} />
                                ))}
                            </div>
                        </div>

                        {/* Pilot Trials */}
                        <div>
                            <div className="flex items-center gap-3 mb-5">
                                <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                                <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400">Pilot Trials</h3>
                                <div className="flex-1 h-px bg-neutral-100"></div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                                {pipelineProducts.filter(p => p.status === 'Pilot Trial').map(p => (
                                    <PipelineTile key={p.id} product={p} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsSection;
