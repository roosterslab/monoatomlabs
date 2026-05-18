import React from 'react';

const DEFAULT_COPY = {
    badge: '01 — Why Us',
    heading: 'What Makes Us Different',
    cards: [
        {
            title: 'Deep Scientific Expertise',
            desc: 'Combined materials science, chemical engineering, and nanotechnology expertise from IISc, IIT, and NCL.',
        },
        {
            title: 'Industrial Scale Capability',
            desc: 'Scaling from prototype to mass manufacturing with pilot-scale facilities and process optimization.',
        },
        {
            title: 'Real-World Validation',
            desc: 'Rigorous field trials, NABL-certified lab testing, and independent third-party validation.',
        },
        {
            title: 'IP-Driven Innovation',
            desc: 'Proprietary technology, formulation patents, and trade secrets protecting our dispersion technologies.',
        },
    ],
};

const Differentiators = ({ copy }) => {
    const c = { ...DEFAULT_COPY, ...(copy || {}) };
    const cards = Array.isArray(c.cards) ? c.cards : DEFAULT_COPY.cards;
    return (
        <section className="py-24 px-6 bg-neutral-50 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 border border-neutral-300 text-neutral-600 text-xs font-mono font-medium tracking-wider uppercase mb-6">
                        {c.badge}
                    </div>
                    <h2 className="text-4xl font-display font-medium text-neutral-900">{c.heading}</h2>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {cards.map((item, i) => (
                        <div
                            key={i}
                            className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group"
                        >
                            <h3 className="text-lg font-bold text-neutral-900 mb-4 group-hover:text-blue-700 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Differentiators;
