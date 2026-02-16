import React from 'react';
import SectionHeading from '../ui/SectionHeading';

const VisionMission = () => {
    return (
        <section className="py-24 px-6 bg-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
                        Advanced Nanomaterials for Better Quality of Life
                    </h2>
                    <p className="text-xl md:text-2xl text-neutral-600 max-w-4xl mx-auto leading-relaxed font-light">
                        To create commercially viable graphene solutions for industrial applications. We develop, validate, and make commercial-scale manufacturing of graphene innovations to provide clean air, clean water, clean energy, and better life.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-8 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-lg transition-all">
                        <h3 className="text-xl font-display font-bold mb-4 text-neutral-900">Scientific Excellence</h3>
                        <p className="text-neutral-600 font-light">IISc, IIT, NCL partnerships with state-of-the-art R&D labs</p>
                    </div>
                    <div className="p-8 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-lg transition-all">
                        <h3 className="text-xl font-display font-bold mb-4 text-neutral-900">Industrial Scale</h3>
                        <p className="text-neutral-600 font-light">5+ commercially available manufacturing-ready products</p>
                    </div>
                    <div className="p-8 bg-neutral-50 border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-lg transition-all">
                        <h3 className="text-xl font-display font-bold mb-4 text-neutral-900">Proven Performance</h3>
                        <p className="text-neutral-600 font-light">NABL certified, field-tested with 60-70% cost savings</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
