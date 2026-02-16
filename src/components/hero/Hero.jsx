import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';
import StatCard from '../ui/StatCard';
import GrapheneLatticeOptimized from './GrapheneLatticeOptimized';

const Hero = () => {
    return (
        <section className="relative pt-40 pb-24 md:pt-56 md:pb-40 px-6 bg-black overflow-hidden border-b border-neutral-800">
            {/* 3D GRAPHENE LATTICE CANVAS - OPTIMIZED */}
            <GrapheneLatticeOptimized />

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
                    <Link to="/technology">
                        <Button variant="primary" theme="dark" icon={ArrowRight}>Our Technology</Button>
                    </Link>
                    <Link to="/technology/platform">
                        <Button variant="secondary" theme="dark">View Documentation</Button>
                    </Link>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-8">
                    <StatCard value="10+" label="Breakthrough Innovations" theme="dark" />
                    <StatCard value="5+" label="Commercial Products" theme="dark" />
                    <StatCard value="2" label="Advanced Facilities" theme="dark" />
                    <StatCard value="5" label="Pilot Technologies" theme="dark" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
