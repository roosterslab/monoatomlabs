import React from 'react';
import { Wind, Droplets, Zap, Heart } from 'lucide-react';

const PillarCard = ({ icon: Icon, title, color, delay }) => (
    <div
        className={`group relative overflow-hidden bg-gradient-to-br ${color} rounded-2xl p-8 hover:scale-105 transition-all duration-500 cursor-pointer`}
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="relative z-10">
            <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
            </div>
            <h3 className="text-2xl font-display font-bold text-white mb-2">
                {title}
            </h3>
            <div className="h-1 w-16 bg-white/40 rounded-full group-hover:w-full transition-all duration-500"></div>
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-white/5 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
    </div>
);

const MissionImpact = () => {
    return (
        <section className="relative py-32 px-6 bg-gradient-to-br from-black via-neutral-900 to-black overflow-hidden">
            {/* Animated background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>

            {/* Gradient orbs */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-neutral-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur mb-6">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
                        <span className="text-xs font-bold text-neutral-300 tracking-wide uppercase">
                            Our Mission
                        </span>
                    </div>

                    <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                        Advanced Nanomaterials for
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-white">
                            Better Quality of Life
                        </span>
                    </h2>

                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        We create commercially viable graphene solutions that address humanity's most pressing challenges
                        across four critical pillars of sustainable development.
                    </p>
                </div>

                {/* Four Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <PillarCard
                        icon={Wind}
                        title="Clean Air"
                        color="from-blue-600 to-blue-700"
                        delay={0}
                    />
                    <PillarCard
                        icon={Droplets}
                        title="Clean Water"
                        color="from-cyan-600 to-cyan-700"
                        delay={100}
                    />
                    <PillarCard
                        icon={Zap}
                        title="Clean Energy"
                        color="from-yellow-500 to-orange-600"
                        delay={200}
                    />
                    <PillarCard
                        icon={Heart}
                        title="Better Life"
                        color="from-rose-600 to-pink-700"
                        delay={300}
                    />
                </div>

                {/* Bottom tagline */}
<div className="mt-20 text-center">
                    <p className="text-neutral-500 text-sm font-medium tracking-wide">
                        World's only <span className="text-white font-bold">Trillion Dollar Nanomaterial</span> — Now Accessible
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MissionImpact;
