import React from 'react';

const COLOR_CLASS = {
    blue: 'text-blue-600',
    emerald: 'text-emerald-600',
    indigo: 'text-indigo-600',
    purple: 'text-purple-600',
    amber: 'text-amber-600',
    pink: 'text-pink-600',
};

const DEFAULT_STATS = [
    { value: '100+', label: 'Installations', color: 'blue' },
    { value: '50M+', label: 'kg CO₂ Saved', color: 'emerald' },
    { value: '5', label: 'Core Products', color: 'indigo' },
    { value: '15+', label: 'Validations', color: 'purple' },
    { value: '2', label: 'R&D Facilities', color: 'amber' },
    { value: '99.5%', label: 'Satisfaction', color: 'pink' },
];

const KeyMetricsStrip = ({ copy }) => {
    const stats = Array.isArray(copy?.stats) ? copy.stats : DEFAULT_STATS;
    return (
        <div className="relative -mt-8 mb-24 z-10 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-8 grid grid-cols-2 lg:grid-cols-6 gap-8 divide-x divide-neutral-100/50">
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className={`text-center ${i % 2 !== 0 ? 'border-none md:border-l lg:border-none' : ''}`}
                        >
                            <div
                                className={`text-3xl md:text-4xl font-display font-bold ${COLOR_CLASS[stat.color] || 'text-blue-600'} mb-1`}
                            >
                                {stat.value}
                            </div>
                            <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KeyMetricsStrip;
