import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import { Microscope, FlaskConical, Atom, ShieldCheck, Factory, Lightbulb } from 'lucide-react';

const CapabilityCard = ({ icon: Icon, title, description, benefits }) => (
    <div className="p-8 bg-neutral-50 border border-neutral-200 hover:border-neutral-300 transition-colors group shadow-sm">
        <Icon className="w-10 h-10 text-neutral-400 mb-6 group-hover:text-neutral-900 transition-colors" />
        <h3 className="text-xl font-display font-medium text-neutral-900 mb-4">{title}</h3>
        <p className="text-neutral-600 mb-6 leading-relaxed">{description}</p>
        <ul className="space-y-2">
            {benefits.map((benefit, index) => (
                <li key={index} className="flex items-center text-sm text-neutral-500">
                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-2"></span>
                    {benefit}
                </li>
            ))}
        </ul>
    </div>
);

const Technology = () => {
    return (
        <div className="min-h-screen">
            <PageHeader
                category="R&D Platform"
                title="Technology & Methodology"
                subtitle="A comprehensive technology platform transforming graphene science into verified commercial reality through integrated synthesis, functionalization, and application development."
            />

            {/* Core Pillars */}
            <section className="py-24 px-6 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading number="01" title="Core Technology Pillars" theme="light" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        <CapabilityCard
                            icon={Atom}
                            title="Graphene Synthesis"
                            description="Proprietary processes to synthesize high-purity graphene tailored for commercial scalability."
                            benefits={['99%+ Purity', 'Consistent Batch Quality', 'Cost-Effective Scale-up']}
                        />
                        <CapabilityCard
                            icon={FlaskConical}
                            title="Functionalization"
                            description="Surface chemistry modification to ensure graphene integrates perfectly with host materials."
                            benefits={['Covalent Bonding', 'Polymer Compatibility', 'Dispersion Stability']}
                        />
                        <CapabilityCard
                            icon={Microscope}
                            title="Advanced Characterization"
                            description="Atomic-scale analysis ensuring every batch meets rigorous performance standards."
                            benefits={['SEM & TEM Imaging', 'Raman Spectroscopy', 'Mechanical Testing']}
                        />
                        <CapabilityCard
                            icon={Factory}
                            title="Commercial Scale-up"
                            description="Bridging the gap between lab innovation and industrial mass production."
                            benefits={['Pilot Production', 'Process Engineering', 'Quality Assurance']}
                        />
                    </div>
                </div>
            </section>

            {/* Pilot Projects */}
            <section className="py-24 px-6 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading number="02" title="Pilot Projects & Field Trials" theme="light" subtitle="Validating innovation in the real world." />

                    <div className="space-y-12 mt-16">
                        {/* Hydrogen */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1">
                                <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">Hydrogen Separation Membranes</h3>
                                <p className="text-neutral-600 leading-relaxed mb-6">
                                    High-selectivity graphene membranes for efficient hydrogen production. Our technology enables cost-effective green hydrogen by significantly reducing the energy required for purification.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white border border-neutral-200 shadow-sm">
                                        <div className="text-2xl font-mono text-neutral-900 mb-1">99.9%</div>
                                        <div className="text-xs text-neutral-500 uppercase tracking-wide">Purity Potential</div>
                                    </div>
                                    <div className="p-4 bg-white border border-neutral-200 shadow-sm">
                                        <div className="text-2xl font-mono text-neutral-900 mb-1">Low</div>
                                        <div className="text-xs text-neutral-500 uppercase tracking-wide">Energy Cost</div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 h-64 lg:h-80 bg-neutral-100 border border-neutral-200 relative overflow-hidden flex items-center justify-center">
                                {/* Abstract Visual for Membrane */}
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.03)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[shimmer_3s_infinite]"></div>
                                <ShieldCheck className="w-20 h-20 text-neutral-300" strokeWidth={1} />
                            </div>
                        </div>

                        {/* Desalination */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="h-64 lg:h-80 bg-neutral-100 border border-neutral-200 relative overflow-hidden flex items-center justify-center">
                                <ActivityVisual />
                            </div>
                            <div>
                                <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">Seawater Desalination</h3>
                                <p className="text-neutral-600 leading-relaxed mb-6">
                                    Ultra-thin graphene membranes that allow water to pass while rejecting salt ions. This next-generation filtration promises to reduce the energy cost of desalination by up to 50%.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white border border-neutral-200 shadow-sm">
                                        <div className="text-2xl font-mono text-neutral-900 mb-1">100x</div>
                                        <div className="text-xs text-neutral-500 uppercase tracking-wide">Higher Flux</div>
                                    </div>
                                    <div className="p-4 bg-white border border-neutral-200 shadow-sm">
                                        <div className="text-2xl font-mono text-neutral-900 mb-1">-40%</div>
                                        <div className="text-xs text-neutral-500 uppercase tracking-wide">Op. Efficiency</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Battery Materials */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center border-t border-neutral-200 pt-12">
                            <div className="order-2 lg:order-1">
                                <h3 className="text-2xl font-display font-medium text-neutral-900 mb-4">Graphene Battery Materials</h3>
                                <p className="text-neutral-600 leading-relaxed mb-6">
                                    Advanced anode and cathode materials designed to improve LFP cell performance. Our graphene-enhanced solution enables ultra-fast charging, extended lifespan, and enhanced thermal safety without changing existing manufacturing lines.
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white border border-neutral-200 shadow-sm">
                                        <div className="text-xl font-mono text-neutral-900 mb-1">Ultra-Fast</div>
                                        <div className="text-xs text-neutral-500 uppercase tracking-wide">Charging Speed</div>
                                    </div>
                                    <div className="p-4 bg-white border border-neutral-200 shadow-sm">
                                        <div className="text-xl font-mono text-neutral-900 mb-1">~99%</div>
                                        <div className="text-xs text-neutral-500 uppercase tracking-wide">Material Purity</div>
                                    </div>
                                </div>
                            </div>
                            <div className="order-1 lg:order-2 h-64 lg:h-80 bg-neutral-100 border border-neutral-200 relative overflow-hidden flex items-center justify-center">
                                {/* Abstract Battery Visual */}
                                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-neutral-200/50"></div>
                                <div className="z-10 bg-white p-4 border border-neutral-300 rounded shadow-sm">
                                    <div className="flex space-x-1">
                                        <div className="w-3 h-8 bg-neutral-800 rounded-sm"></div>
                                        <div className="w-3 h-8 bg-neutral-800 rounded-sm"></div>
                                        <div className="w-3 h-8 bg-neutral-800 rounded-sm"></div>
                                        <div className="w-3 h-8 bg-neutral-300 rounded-sm animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

// Simple placeholder visual
const ActivityVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0,transparent_70%)]"></div>
        <Lightbulb className="w-20 h-20 text-neutral-300" strokeWidth={1} />
    </div>
);

export default Technology;
