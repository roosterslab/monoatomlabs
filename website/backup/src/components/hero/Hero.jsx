import React from 'react';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import StatCard from '../ui/StatCard';
import GrapheneLattice from './GrapheneLattice';

const Hero = () => {
    return (
        <section className="relative pt-32 pb-24 md:pt-52 md:pb-40 px-6 bg-black overflow-hidden border-b border-neutral-800">
            {/* 3D GRAPHENE LATTICE CANVAS */}
            <GrapheneLattice />

            {/* Heavy radial gradient to focus attention on center and text */}
            <div className="absolute inset-0 z-0 bg-radial-gradient from-transparent to-black pointer-events-none" style={{ background: 'radial-gradient(circle at center, transparent 0%, #000 90%)' }}></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10 text-center md:text-left fade-in">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur mb-8 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                    <span className="text-xs font-bold text-neutral-300 tracking-wide uppercase">Unlocking Trillion Dollar Economy</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium text-white tracking-tighter leading-tight mb-8 drop-shadow-xl">
                    Structured for <br />
                    <span className="text-neutral-500">Performance.</span>
                </h1>

                <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mb-12 font-light leading-relaxed">
                    We design graphene at the atomic level. Creating materials that are stronger, conductive, and exponentially more efficient.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-20">
                    <Button variant="primary" theme="dark" icon={ArrowRight}>Our Technology</Button>
                    <Button variant="secondary" theme="dark">View Documentation</Button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-8">
                    <StatCard value="C₆" label="Carbon Basis" theme="dark" />
                    <StatCard value="sp²" label="Hybridization" theme="dark" />
                    <StatCard value="1 TPa" label="Young's Modulus" theme="dark" />
                    <StatCard value="5300" label="W/m·K Thermal" theme="dark" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
