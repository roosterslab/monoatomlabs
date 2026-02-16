import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Sun, Shield, Beaker, ArrowRight, Zap, Target, Activity, Wind, Droplets, Heart } from 'lucide-react';
import ProductLightbox from '../ui/ProductLightbox';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { products as productsData } from '../../data/content';

const ProductsSection = () => {
    const [activeProduct, setActiveProduct] = useState(0);

    const products = [
        {
            id: 'graphacrete',
            title: 'Graphacrete',
            category: 'Construction',
            icon: Layers,
            description: 'High-Performance Concrete Additive',
            features: ['40-50% Strength Gain', '15-20% Cement Savings', '30-45% Water Resistance'],
            detail: 'Transform standard concrete into high-performance material with 50% strength increase, 15-20% cement reduction, and excellent crack resistance. NABL certified: M30 + Graphacrete ≈ M50.',
            stats: [
                { label: 'Strength', value: '+50%' },
                { label: 'Cement Savings', value: '15-20%' }
            ],
            image: productsData.graphacrete.image
        },
        {
            id: 'graffisol',
            title: 'Graffisol',
            category: 'Solar Energy',
            icon: Sun,
            description: 'Next-Generation Solar Panel Coating',
            features: ['10-12% Energy Output Increase', 'Thermal Dissipation', 'Hydrophobic & Anti-Soiling'],
            detail: '10-12% increase in solar panel energy output (field & lab validated). Reduced surface reflection for improved light harvesting, better thermal dissipation minimizing heat-induced losses, and long-lasting durability.',
            stats: [
                { label: 'Energy Output', value: '+10-12%' },
                { label: 'ROI Period', value: '18mo' }
            ],
            image: productsData.graffisol.image
        },
        {
            id: 'ceraphene',
            title: 'Ceraphene',
            category: 'Automotive',
            icon: Shield,
            description: 'Ultra-Durable Ceramic Coating',
            features: ['9H+ Scratch Resistance', '3-4+ Years Lifecycle', 'Ultra-Hydrophobic'],
            detail: 'Graphene-enhanced ceramic coating with 9H+ hardness providing industry-leading protection at 60-70% lower cost than premium alternatives. ₹5,000/50ml vs ₹15,000 competitors.',
            stats: [
                { label: 'Hardness', value: '9H+' },
                { label: 'Life', value: '3-4yr+' }
            ],
            image: productsData.ceraphene.image
        },
        {
            id: 'hdgpe',
            title: 'HD-G-PE',
            category: 'Industrial Polymers',
            icon: Beaker,
            description: 'Graphene-Reinforced Polymer Enhancer',
            features: ['+30% Tensile Strength', '20× Elongation Improvement', '+20% Lifespan'],
            detail: 'Transform HDPE materials with 30% strength improvement and 20× elongation enhancement for pipes, films, and packaging applications.',
            stats: [
                { label: 'Tensile', value: '+30%' },
                { label: 'Elongation', value: '20×' }
            ],
            image: productsData.hdgpe.image
        }
    ];

    return (
        <section className="py-24 px-6 bg-white border-b border-neutral-200 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50"></div>

            <div className="absolute bottom-20 left-0 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50"></div>



            <div className="max-w-7xl mx-auto relative z-10">
                {/* Mission Impact Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-200 bg-neutral-50 mb-6">
                        <span className="w-2 h-2 rounded-full bg-neutral-400 animate-pulse"></span>
                        <span className="text-xs font-bold text-neutral-600 tracking-wide uppercase">
                            Our Mission
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-neutral-900 mb-6 leading-tight">
                        Advanced Nanomaterials for
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500">
                            Better Quality of Life
                        </span>
                    </h2>

                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed mb-12">
                        We create commercially viable graphene solutions that address humanity's most pressing challenges
                        across four critical pillars of sustainable development.
                    </p>

                    {/* Four Pillars */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
                        <div className="group bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg hover:border-cyan-200 transition-all duration-300">
                            <Wind className="w-8 h-8 text-neutral-400 group-hover:text-cyan-500 mx-auto mb-3 transition-colors" strokeWidth={1.5} />
                            <h3 className="text-sm font-display font-bold text-neutral-600 group-hover:text-neutral-900 transition-colors">Clean Air</h3>
                        </div>
                        <div className="group bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300">
                            <Droplets className="w-8 h-8 text-neutral-400 group-hover:text-blue-500 mx-auto mb-3 transition-colors" strokeWidth={1.5} />
                            <h3 className="text-sm font-display font-bold text-neutral-600 group-hover:text-neutral-900 transition-colors">Clean Water</h3>
                        </div>
                        <div className="group bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg hover:border-amber-200 transition-all duration-300">
                            <Zap className="w-8 h-8 text-neutral-400 group-hover:text-amber-500 mx-auto mb-3 transition-colors" strokeWidth={1.5} />
                            <h3 className="text-sm font-display font-bold text-neutral-600 group-hover:text-neutral-900 transition-colors">Clean Energy</h3>
                        </div>
                        <div className="group bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-lg hover:border-rose-200 transition-all duration-300">
                            <Heart className="w-8 h-8 text-neutral-400 group-hover:text-rose-500 mx-auto mb-3 transition-colors" strokeWidth={1.5} />
                            <h3 className="text-sm font-display font-bold text-neutral-600 group-hover:text-neutral-900 transition-colors">Better Life</h3>
                        </div>
                    </div>
                </div>

                {/* Product Suite Section */}
                <SectionHeading
                    number="02"
                    title="Product Suite"
                    subtitle="Commercially viable graphene solutions deploying specifically for Construction, Energy, and Industrial sectors."
                    theme="light"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-6 h-auto min-h-[400px] md:min-h-[600px] mt-12">

                    {/* SELECTION LIST (Left Side - 4 Cols) */}
                    <div className="md:col-span-1 lg:col-span-4 flex flex-col gap-3">
                        {products.map((product, idx) => {
                            const isActive = activeProduct === idx;
                            return (
                                <div
                                    key={product.id}
                                    onClick={() => setActiveProduct(idx)}
                                    className={`
                                        group relative p-6 cursor-pointer transition-all duration-300 border
                                        ${isActive
                                            ? 'bg-white border-neutral-200 shadow-xl border-l-4 border-l-blue-600 translate-x-2'
                                            : 'bg-white border-neutral-100 hover:bg-neutral-50 hover:border-neutral-200'}
                                    `}
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
                                                <span className="text-xs uppercase tracking-wider text-neutral-400 font-mono">
                                                    {product.category}
                                                </span>
                                            </div>
                                        </div>
                                        <ArrowRight className={`w-4 h-4 transition-all ${isActive ? 'text-blue-600 opacity-100' : 'text-neutral-400 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-50'}`} />
                                    </div>
                                </div>
                            );
                        })}

                        {/* Pipeline Box */}
                        <div className="mt-auto p-6 border border-dashed border-neutral-200 rounded-sm bg-neutral-50 text-center">
                            <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-400 mb-2">Innovation Pipeline</h4>
                            <div className="flex flex-wrap justify-center gap-2 text-xs text-neutral-400 font-mono">
                                <span>Rustene</span>
                                <span className="text-neutral-300">•</span>
                                <span>Graphyre</span>
                                <span className="text-neutral-300">•</span>
                                <span>Graphosite</span>
                                <span className="text-neutral-300">•</span>
                                <span>Thermaphene</span>
                                <span className="text-neutral-300">•</span>
                                <span>Armophene</span>
                            </div>
                        </div>
                    </div>

                    {/* DETAIL VIEW (Right Side - 8 Cols) */}
                    <div className="md:col-span-2 lg:col-span-8 relative">
                        <div className="h-full bg-white border border-neutral-200 shadow-2xl p-8 md:p-12 flex flex-col relative overflow-hidden">
                            {/* Decorative HUD Elements */}
                            <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                <Target className="w-24 h-24 text-neutral-900" strokeWidth={0.5} />
                            </div>

                            {/* Content Grid */}
                            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
                                {/* Left Column: Info */}
                                <div className="flex flex-col justify-between">
                                    <div>
                                        <div className="inline-flex items-center space-x-2 px-3 py-1 bg-blue-50 border border-blue-100 rounded-full text-xs font-mono text-blue-700 mb-6">
                                            <Activity size={12} />
                                            <span>COMMERCIAL READY</span>
                                        </div>

                                        <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-6 tracking-tight">
                                            {products[activeProduct].title}
                                        </h2>
                                        <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                                            {products[activeProduct].detail}
                                        </p>

                                        {/* Features List */}
                                        <div className="space-y-3 mb-8">
                                            {products[activeProduct].features.map((feat, i) => (
                                                <div key={i} className="flex items-center space-x-3">
                                                    <Zap className="w-4 h-4 text-blue-600 flex-shrink-0" />
                                                    <span className="text-neutral-700 font-medium">{feat}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Action Area */}
                                    <div className="pt-8 border-t border-neutral-100">
                                        <Link to={`/products/${products[activeProduct].id === 'hdgpe' ? 'hd-g-pe' : products[activeProduct].id}`}>
                                            <Button variant="primary" theme="light" className="shadow-lg hover:shadow-xl transition-shadow w-full sm:w-auto">
                                                View Technical Data
                                            </Button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Right Column: Image & Stats */}
                                <div className="flex flex-col gap-6">
                                    {/* Product Image */}
                                    <ProductLightbox
                                        src={products[activeProduct].image}
                                        alt={products[activeProduct].title}
                                        className="aspect-[4/3] w-full"
                                    />

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-2 gap-4">
                                        {products[activeProduct].stats.map((stat, i) => (
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
            </div>
        </section>
    );
};

export default ProductsSection;
