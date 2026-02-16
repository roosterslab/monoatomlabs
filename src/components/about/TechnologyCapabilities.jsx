import React from 'react';
import { Atom, FlaskConical, Microscope, Factory } from 'lucide-react';

const CapabilityCard = ({ icon: Icon, title, description, benefits }) => (
    <div className="p-8 bg-white border border-neutral-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
        <Icon className="w-10 h-10 text-neutral-400 mb-6 group-hover:text-blue-600 transition-colors" />
        <h3 className="text-xl font-display font-medium text-neutral-900 mb-4">{title}</h3>
        <p className="text-neutral-600 mb-6 leading-relaxed font-light">{description}</p>
        <ul className="space-y-2">
            {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start text-sm text-neutral-600">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    {benefit}
                </li>
            ))}
        </ul>
    </div>
);

const TechnologyCapabilities = () => {
    return (
        <section className="py-24 px-6 border-b border-neutral-200 bg-neutral-50">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6">
                        04 — Technology
                    </div>
                    <h2 className="text-4xl font-display font-medium text-neutral-900 mb-4">Core Technology Platform</h2>
                    <p className="text-neutral-600 max-w-3xl text-lg font-light">
                        A comprehensive technology platform transforming graphene science into verified commercial reality through integrated synthesis, functionalization, and application development.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
    );
};

export default TechnologyCapabilities;
