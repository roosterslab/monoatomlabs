import React from 'react';
import Button from '../ui/Button';
import StatCard from '../ui/StatCard';
import SectionHeading from '../ui/SectionHeading';

const Introduction = () => {
    return (
        <section className="py-24 px-6 bg-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <SectionHeading
                            number="01"
                            title="Our Mission"
                            subtitle="Accelerating the transition to Industry 4.0 with atomic precision."
                            theme="light"
                        />
                    </div>
                    <div>
                        <p className="text-xl text-neutral-600 font-light leading-relaxed mb-8">
                            Monoatom Labs develops breakthrough materials engineered for the future—graphene derivatives, functional nanomaterials, bio-inspired chemistries, and performance-enhancing additives.
                        </p>
                        <p className="text-lg text-neutral-500 font-light leading-relaxed mb-10">
                            Our innovations deliver superior strength, conductivity, durability, and environmental efficiency, enabling enterprises to rapidly transition into the next era of industrial production. We don't just supply materials; we provide the blueprint for the next generation of infrastructure.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-200">
                            <div>
                                <div className="text-3xl font-light text-neutral-900 mb-2">10+</div>
                                <div className="text-xs text-neutral-500 uppercase tracking-widest">Global Innovations</div>
                            </div>
                            <div>
                                <div className="text-3xl font-light text-neutral-900 mb-2">5+</div>
                                <div className="text-xs text-neutral-500 uppercase tracking-widest">Commercial Products</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
