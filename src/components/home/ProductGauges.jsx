import React from 'react';
import SectionHeading from '../ui/SectionHeading';

const GaugeCard = ({ name, category, metric, value, percentage, color, icon }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDashoffset = circumference - (circumference * percentage) / 100;

    return (
        <div className="group bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-neutral-400 hover:shadow-2xl transition-all duration-500">
            <div className="text-center">
                {/* Circular Gauge */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                    <svg className="w-full h-full transform -rotate-90">
                        {/* Background circle */}
                        <circle
                            cx="64"
                            cy="64"
                            r="45"
                            className="fill-none stroke-neutral-100"
                            strokeWidth="8"
                        />
                        {/* Progress circle */}
                        <circle
                            cx="64"
                            cy="64"
                            r="45"
                            className={`fill-none stroke-${color}-500 transition-all duration-1000`}
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray={circumference}
                            strokeDashoffset={strokeDashoffset}
                            style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                        />
                    </svg>

                    {/* Center text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                            <div className="text-3xl font-display font-bold text-neutral-900">{value}</div>
                            <div className="text-xs text-neutral-500 uppercase tracking-wide">{metric}</div>
                        </div>
                    </div>
                </div>

                {/* Product info */}
                <div className="mb-4">
                    <span className="text-2xl mb-2 block">{icon}</span>
                    <h3 className="text-xl font-display font-bold text-neutral-900 mb-1 group-hover:text-brand-600 transition-colors">
                        {name}
                    </h3>
                    <p className="text-xs text-neutral-500 uppercase tracking-wide font-semibold">
                        {category}
                    </p>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-neutral-100 rounded-full overflow-hidden">
                    <div
                        className={`h-full bg-gradient-to-r from-${color}-500 to-${color}-600 transition-all duration-1000 ease-out`}
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

const ProductGauges = () => {
    const products = [
        {
            name: "Graphacrete",
            category: "Construction",
            metric: "Strength",
            value: "+50%",
            percentage: 90,
            color: "blue",
            icon: "🏗️"
        },
        {
            name: "Graffisol",
            category: "Solar Energy",
            metric: "Output",
            value: "+10%",
            percentage: 85,
            color: "amber",
            icon: "☀️"
        },
        {
            name: "Ceraphene",
            category: "Automotive",
            metric: "Hardness",
            value: "9H+",
            percentage: 95,
            color: "purple",
            icon: "💎"
        },
        {
            name: "HD-G-PE",
            category: "Polymers",
            metric: "Elongation",
            value: "20×",
            percentage: 100,
            color: "green",
            icon: "📦"
        }
    ];

    return (
        <section className="py-24 px-6 bg-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    number="03"
                    title="Product Performance Gauges"
                    subtitle="Market-ready solutions with validated, measurable performance improvements."
                    theme="light"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
                    {products.map((product, index) => (
                        <GaugeCard key={index} {...product} />
                    ))}
                </div>

                {/* Bottom info */}
                <div className="mt-16 text-center">
                    <p className="text-neutral-600 mb-6">
                        All products are <span className="font-bold text-brand-600">NABL certified</span> and <span className="font-bold text-brand-600">field-validated</span>
                    </p>
                    <button className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-700 text-white font-semibold rounded-xl hover:bg-neutral-800 hover:shadow-lg transition-all duration-300">
                        View Detailed Specifications
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ProductGauges;
