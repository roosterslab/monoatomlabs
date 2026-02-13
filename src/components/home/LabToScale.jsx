import React from 'react';
import { Microscope, Beaker, Factory, ArrowRight, Sparkles } from 'lucide-react';
import { AtomsToIndustryBackground } from '../backgrounds';

const ProcessCard = ({ icon: Icon, number, title, description, features, isLast }) => (
    <>
        <div className="group relative">
            {/* Card */}
            <div className="relative bg-neutral-900/40 border border-neutral-700/50 rounded-2xl p-8 hover:bg-neutral-800/60 hover:border-brand-500/30 hover:shadow-2xl transition-all duration-500 h-full backdrop-blur-md">
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-brand-600 to-brand-800 text-white font-display font-bold text-xl rounded-full flex items-center justify-center shadow-lg z-10 border border-brand-500/30">
                    {number}
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                    <div className="inline-flex p-4 bg-white/5 rounded-2xl text-neutral-400 group-hover:bg-brand-500 group-hover:text-white transition-all duration-500 group-hover:scale-110 transform border border-white/10 group-hover:border-brand-400">
                        <Icon className="w-10 h-10" strokeWidth={1.5} />
                    </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-brand-400 transition-colors">
                    {title}
                </h3>

                <p className="text-neutral-400 mb-6 leading-relaxed">
                    {description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-brand-500 transition-colors flex-shrink-0"></div>
                            <p className="text-sm text-neutral-400 group-hover:text-neutral-300 transition-colors">{feature}</p>
                        </div>
                    ))}
                </div>

                {/* Decorative gradient */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-brand-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tl-full pointer-events-none"></div>
            </div>
        </div>

        {/* Arrow Connector */}
        {!isLast && (
            <div className="hidden lg:flex items-center justify-center">
                <div className="relative">
                    <ArrowRight className="w-8 h-8 text-neutral-600" strokeWidth={2} />
                    <div className="absolute inset-0 bg-brand-500 blur-2xl opacity-0 group-hover:opacity-20 animate-pulse transition-opacity"></div>
                </div>
            </div>
        )}
    </>
);

const LabToScale = () => {
    const processes = [
        {
            icon: Microscope,
            number: 1,
            title: "Research & Innovation",
            description: "World-class nanomaterials R&D with advanced characterization and testing capabilities",
            features: [
                "Graphene synthesis & functionalization",
                "Surface chemistry modification",
                "Advanced testing (SEM, TEM, Raman)",
                "Pilot-scale dispersion technology"
            ]
        },
        {
            icon: Beaker,
            number: 2,
            title: "Application Development",
            description: "Real-world testing across multiple industrial sectors with rigorous validation protocols",
            features: [
                "Multi-sector application testing",
                "Mechanical & durability analysis",
                "Thermal & electrical characterization",
                "Field-scale performance validation"
            ]
        }
    ];

    return (
        <section className="relative py-32 px-6 bg-neutral-950 border-t border-neutral-900 overflow-hidden">
            {/* Static Background for Testing (Animation Disabled) */}
            <div className="absolute inset-0 bg-neutral-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-neutral-950"></div>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6 backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-brand-400" />
                        <span className="text-xs font-bold text-neutral-300 tracking-wide uppercase">
                            Our Process
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight drop-shadow-xl">
                        From Atomic Scale to
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-brand-100 to-brand-300 pb-2 inline-block drop-shadow-md">
                            Industrial Reality
                        </span>
                    </h2>

                    <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
                        We don't just innovate in the lab—we ensure every breakthrough scales from prototype to mass manufacturing,
                        bridging the critical gap between nanoscale research and real-world impact.
                    </p>
                </div>

                {/* Process Flow - 2 Steps Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-center mb-16 max-w-5xl mx-auto">
                    {processes.map((process, index) => (
                        <ProcessCard
                            key={index}
                            {...process}
                            isLast={index === processes.length - 1}
                        />
                    ))}
                </div>

                {/* Bottom Stats */}
                <div className="bg-neutral-900/60 border border-neutral-800 text-white rounded-3xl p-12 backdrop-blur-md relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-500/5 to-transparent opacity-50"></div>

                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                        <div className="group">
                            <div className="text-5xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">2</div>
                            <div className="text-sm text-neutral-500 uppercase tracking-wide group-hover:text-brand-400 transition-colors">State-of-the-Art Facilities</div>
                        </div>
                        <div className="group">
                            <div className="text-5xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">14+</div>
                            <div className="text-sm text-neutral-500 uppercase tracking-wide group-hover:text-brand-400 transition-colors">Years R&D Experience</div>
                        </div>
                        <div className="group">
                            <div className="text-5xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">Ton</div>
                            <div className="text-sm text-neutral-500 uppercase tracking-wide group-hover:text-brand-400 transition-colors">Scale Production</div>
                        </div>
                        <div className="group">
                            <div className="text-5xl font-display font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                            <div className="text-sm text-neutral-500 uppercase tracking-wide group-hover:text-brand-400 transition-colors">Quality Validated</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LabToScale;
