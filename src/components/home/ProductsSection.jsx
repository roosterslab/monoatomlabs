import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layers, Sun, Shield, Beaker, ArrowRight, Zap, Target, Activity, Wind, Droplets, Heart } from 'lucide-react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';
import { DarkHexBackground } from '../backgrounds';

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
            ]
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
            ]
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
            ]
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
            ]
        }
    ];

    return (
        <DarkHexBackground id="products" className="py-24 px-6">
            <div className="max-w-7xl mx-auto">
                {/* Mission Impact Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur mb-6">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        <span className="text-xs font-bold text-white tracking-wide uppercase">
                            Our Mission
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                        Advanced Nanomaterials for
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-white">
                            Better Quality of Life
                        </span>
                    </h2>

                    <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed mb-12">
                        We create commercially viable graphene solutions that address humanity's most pressing challenges
                        across four critical pillars of sustainable development.
                    </p>

                    {/* Four Pillars - Compact & Colorful */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
                        <div className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-cyan-500/10 hover:border-cyan-500/50 transition-all duration-300">
                            <Wind className="w-8 h-8 text-neutral-400 group-hover:text-cyan-400 mx-auto mb-3 transition-colors" strokeWidth={1.5} />
                            <h3 className="text-sm font-display font-bold text-neutral-300 group-hover:text-white transition-colors">Clean Air</h3>
                        </div>
                        <div className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-blue-600/10 hover:border-blue-500/50 transition-all duration-300">
                            <Droplets className="w-8 h-8 text-neutral-400 group-hover:text-blue-400 mx-auto mb-3 transition-colors" strokeWidth={1.5} />
                            <h3 className="text-sm font-display font-bold text-neutral-300 group-hover:text-white transition-colors">Clean Water</h3>
                        </div>
                        <div className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-amber-500/10 hover:border-amber-500/50 transition-all duration-300">
                            <Zap className="w-8 h-8 text-neutral-400 group-hover:text-amber-400 mx-auto mb-3 transition-colors" strokeWidth={1.5} />
                            <h3 className="text-sm font-display font-bold text-neutral-300 group-hover:text-white transition-colors">Clean Energy</h3>
                        </div>
                        <div className="group bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 hover:bg-rose-500/10 hover:border-rose-500/50 transition-all duration-300">
                            <Heart className="w-8 h-8 text-neutral-400 group-hover:text-rose-400 mx-auto mb-3 transition-colors" strokeWidth={1.5} />
                            <h3 className="text-sm font-display font-bold text-neutral-300 group-hover:text-white transition-colors">Better Life</h3>
                        </div>
                    </div>
                </div>

                {/* Product Suite Section */}
                <SectionHeading
                    number="02"
                    title="Product Suite"
                    subtitle="Commercially viable graphene solutions deploying specifically for Construction, Energy, and Industrial sectors."
                    theme="dark"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto min-h-[600px] mt-12">

                    {/* SELECTION LIST (Left Side - 4 Cols) */}
                    <div className="lg:col-span-4 flex flex-col gap-3">
                        {products.map((product, idx) => {
                            const isActive = activeProduct === idx;
                            return (
                                <div
                                    key={product.id}
                                    onClick={() => setActiveProduct(idx)}
                                    className={`
                                        group relative p-6 cursor-pointer transition-all duration-300 border backdrop-blur-sm
                                        ${isActive
                                            ? 'bg-white/10 border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.1)] translate-x-2'
                                            : 'bg-neutral-900/40 border-neutral-800 hover:bg-neutral-800/60 hover:border-neutral-600'}
                                    `}
                                >
                                    {/* Active Glow Bar */}
                                    {isActive && (
                                        <div className="absolute left-0 top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_white]"></div>
                                    )}

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-4">
                                            <div className={`p-2 rounded-sm ${isActive ? 'bg-white text-black' : 'bg-neutral-800 text-neutral-400 group-hover:text-white'}`}>
                                                {React.createElement(product.icon, { size: 20 })}
                                            </div>
                                            <div>
                                                <h3 className={`font-display font-medium text-lg leading-none mb-1 ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-neutral-200'}`}>
                                                    {product.title}
                                                </h3>
                                                <span className="text-xs uppercase tracking-wider text-neutral-600 font-mono">
                                                    {product.category}
                                                </span>
                                            </div>
                                        </div>
                                        <ArrowRight className={`w-4 h-4 transition-all ${isActive ? 'text-white opacity-100' : 'text-neutral-600 opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-50'}`} />
                                    </div>
                                </div>
                            );
                        })}

                        {/* Pipeline Box */}
                        <div className="mt-auto p-6 border border-dashed border-neutral-800 rounded-sm bg-neutral-900/20 backdrop-blur-sm text-center">
                            <h4 className="text-xs uppercase font-bold tracking-widest text-neutral-500 mb-2">Innovation Pipeline</h4>
                            <div className="flex flex-wrap justify-center gap-2 text-xs text-neutral-400 font-mono">
                                <span>Rustene</span>
                                <span className="text-neutral-700">•</span>
                                <span>Graphyre</span>
                                <span className="text-neutral-700">•</span>
                                <span>Graphosite</span>
                                <span className="text-neutral-700">•</span>
                                <span>Thermaphene</span>
                                <span className="text-neutral-700">•</span>
                                <span>Armophene</span>
                            </div>
                        </div>
                    </div>

                    {/* DETAIL VIEW (Right Side - 8 Cols) */}
                    <div className="lg:col-span-8 relative">
                        <div className="h-full bg-neutral-900/60 border border-neutral-800 backdrop-blur-md p-8 md:p-12 flex flex-col justify-between relative overflow-hidden">

                            {/* Decorative HUD Elements */}
                            <div className="absolute top-0 right-0 p-4 opacity-20">
                                <Target className="w-24 h-24 text-white" strokeWidth={0.5} />
                            </div>
                            <div className="absolute bottom-4 right-4 flex space-x-1 opacity-30">
                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10">
                                <div className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-mono text-white mb-6">
                                    <Activity size={12} />
                                    <span>COMMERCIAL READY</span>
                                </div>

                                <div className="flex items-start justify-between mb-8">
                                    <div>
                                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4 tracking-tight">
                                            {products[activeProduct].title}
                                        </h2>
                                        <p className="text-xl text-neutral-400 max-w-2xl leading-relaxed">
                                            {products[activeProduct].detail}
                                        </p>
                                    </div>
                                </div>

                                {/* Stats & Features Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                                    {/* Stats */}
                                    <div className="flex space-x-8">
                                        {products[activeProduct].stats.map((stat, i) => (
                                            <div key={i}>
                                                <div className="text-3xl md:text-4xl font-mono text-white mb-1">{stat.value}</div>
                                                <div className="text-xs uppercase tracking-widest text-neutral-500">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Features */}
                                    <div className="space-y-3">
                                        {products[activeProduct].features.map((feat, i) => (
                                            <div key={i} className="flex items-center space-x-3">
                                                <Zap className="w-4 h-4 text-white" />
                                                <span className="text-neutral-300 font-medium">{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Action Area */}
                            <div className="relative z-10 pt-8 border-t border-white/10 flex flex-wrap items-center gap-6">
                                <Link to={`/products/${products[activeProduct].id === 'hdgpe' ? 'hd-g-pe' : products[activeProduct].id}`}>
                                    <Button variant="primary" theme="dark" className="shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-shadow">
                                        View Technical Data
                                    </Button>
                                </Link>
                                <span className="text-sm text-neutral-500 font-mono">
                                    ID: {products[activeProduct].id.toUpperCase()}_REV_2.4
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </DarkHexBackground>
    );
};

export default ProductsSection;
