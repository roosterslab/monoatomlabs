import React from 'react';
import { Hexagon } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const TechnologySection = () => {
    return (
        <section id="technology" className="py-24 px-6 bg-neutral-50 relative overflow-hidden border-b border-neutral-200">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
                <div>
                    <SectionHeading
                        number="10"
                        title="From Lab to Manufacturing"
                        subtitle="We don't just innovate in the lab—we ensure every breakthrough can scale from prototype to mass manufacturing."
                        theme="light"
                    />
                    <div className="space-y-12">
                        <div className="flex gap-6 group">
                            <div className="w-16 h-16 flex items-center justify-center bg-white border border-neutral-200 text-neutral-900 font-light text-2xl shrink-0 rounded-sm shadow-sm group-hover:bg-neutral-900 group-hover:text-white transition-colors">1</div>
                            <div>
                                <h4 className="text-neutral-900 text-xl font-medium mb-2">Nanomaterials R&D Facility</h4>
                                <p className="text-neutral-500 text-base leading-relaxed">Graphene processing and dispersion technologies, surface chemistry modification, advanced characterization with SEM, TEM, Raman, and pilot-scale functionalization units.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 group">
                            <div className="w-16 h-16 flex items-center justify-center bg-white border border-neutral-200 text-neutral-900 font-light text-2xl shrink-0 rounded-sm shadow-sm group-hover:bg-neutral-900 group-hover:text-white transition-colors">2</div>
                            <div>
                                <h4 className="text-neutral-900 text-xl font-medium mb-2">Application & Testing Facility</h4>
                                <p className="text-neutral-500 text-base leading-relaxed">Real-industry testing across multiple sectors. Mechanical, thermal, electrical conductivity labs. Prototype fabrication, field simulation, and performance validation.</p>
                            </div>
                        </div>
                        <div className="flex gap-6 group">
                            <div className="w-16 h-16 flex items-center justify-center bg-neutral-900 border border-neutral-900 text-white font-light text-2xl shrink-0 rounded-sm shadow-md">3</div>
                            <div>
                                <h4 className="text-neutral-900 text-xl font-medium mb-2">Industrial Deployment</h4>
                                <p className="text-neutral-500 text-base leading-relaxed">Deep-tech expertise with real-world industrial deployment, supply-chain integration, and national-scale production capabilities.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Visual Diagram - Light Theme */}
                <div className="relative h-full min-h-[400px] border border-neutral-200 bg-white/50 backdrop-blur-sm p-8 flex items-center justify-center rounded-sm">
                    <div className="relative z-10 text-center">
                        <Hexagon className="w-32 h-32 text-neutral-900 mx-auto mb-6 animate-spin-slow" strokeWidth={0.5} />
                        <h5 className="text-neutral-900 font-mono text-sm tracking-widest uppercase mb-2">Graphene Nano-Platelets</h5>
                        <p className="text-neutral-500 text-xs">High Aspect Ratio • High Purity</p>
                    </div>

                    {/* Orbiting particles */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] border border-neutral-300 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-40"></div>
                        <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] border border-neutral-200 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-30"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechnologySection;
