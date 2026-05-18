import React from 'react';
import { Microscope, ClipboardCheck } from 'lucide-react';

const SpecItem = ({ children }) => (
    <li className="flex items-start text-neutral-600 gap-3 group">
        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 group-hover:bg-blue-600 group-hover:scale-125 transition-all"></span>
        <span className="group-hover:text-neutral-900 transition-colors">{children}</span>
    </li>
);

const Facilities = () => {
    return (
        <section id="facilities" className="py-24 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6">
                            03 — Infrastructure
                        </div>
                        <h2 className="text-4xl font-display font-medium text-neutral-900">Facilities & Capabilities</h2>
                    </div>
                    <p className="text-neutral-500 max-w-md text-right md:text-left">
                        State-of-the-art research, testing, and manufacturing facilities designed for scaling deep-tech.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Facility 01 */}
                    <div className="border border-neutral-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-neutral-50/50">
                        <div className="flex items-center justify-between mb-8 pb-8 border-b border-neutral-200">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center text-blue-600 shadow-sm">
                                    <Microscope className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Unit 01</div>
                                    <h3 className="text-xl font-bold text-neutral-900">Nanomaterials R&D</h3>
                                </div>
                            </div>
                            <div className="px-3 py-1 bg-white border border-neutral-200 rounded text-xs font-medium text-neutral-500">
                                Operational
                            </div>
                        </div>

                        <p className="text-neutral-600 mb-8 font-light">
                            Focused on graphene processing, dispersion technologies, and high-purity nano-additive
                            development.
                        </p>

                        <ul className="space-y-2">
                            <SpecItem>Surface chemistry modification</SpecItem>
                            <SpecItem>Advanced characterization (SEM, TEM, Raman)</SpecItem>
                            <SpecItem>Pilot-scale dispersion & functionalization</SpecItem>
                        </ul>
                    </div>

                    {/* Facility 02 */}
                    <div className="border border-neutral-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-neutral-50/50">
                        <div className="flex items-center justify-between mb-8 pb-8 border-b border-neutral-200">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center text-blue-600 shadow-sm">
                                    <ClipboardCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Unit 02</div>
                                    <h3 className="text-xl font-bold text-neutral-900">Application & Testing</h3>
                                </div>
                            </div>
                            <div className="px-3 py-1 bg-white border border-neutral-200 rounded text-xs font-medium text-neutral-500">
                                Operational
                            </div>
                        </div>

                        <p className="text-neutral-600 mb-8 font-light">
                            Real-industry testing for coatings, concrete, composites, energy systems, and bio-chemical
                            applications.
                        </p>

                        <ul className="space-y-2">
                            <SpecItem>Mechanical & durability testing</SpecItem>
                            <SpecItem>Thermal & electrical conductivity labs</SpecItem>
                            <SpecItem>Prototype fabrication & field-simulation</SpecItem>
                        </ul>
                    </div>
                </div>

                {/* Equipment Specs */}
                <div className="mt-8 border border-neutral-200 rounded-2xl p-8 bg-white">
                    <h4 className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-6">Equipment Specs</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            'Graphene synthesis',
                            'Process development',
                            'Nanomaterial functionalization',
                            'Quality control systems',
                            'Advanced characterization',
                            'Coating application',
                            'Dispersion technology',
                            'Material testing',
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="px-4 py-3 bg-neutral-50 rounded border border-neutral-100 text-sm text-neutral-600"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
