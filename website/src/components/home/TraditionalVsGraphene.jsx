import React from 'react';
import { X, Check, ArrowRight, Layers, Sun, Shield } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const ComparisonCard = ({ title, icon: Icon, traditional, graphene }) => (
    <div className="group relative bg-white border border-neutral-200 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col h-full">
        {/* Header */}
        <div className="p-8 pb-6 border-b border-neutral-100 bg-neutral-50/50">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 shadow-sm">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-display font-bold text-neutral-900">{title}</h3>
            </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 flex flex-col">
            {/* Traditional (The Problem) */}
            <div className="p-8 pt-6 pb-6 border-b border-neutral-100 bg-white opacity-80 group-hover:opacity-60 transition-opacity">
                <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">Traditional Standard</span>
                </div>
                <ul className="space-y-3">
                    {traditional.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                            <X className="w-4 h-4 text-neutral-300 mt-1 flex-shrink-0" />
                            <span className="text-sm text-neutral-500 font-medium line-through decoration-neutral-300">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Graphene (The Solution) - Premium Dark Block */}
            <div className="flex-1 p-8 bg-neutral-900 text-white relative overflow-hidden group-hover:bg-neutral-950 transition-colors duration-500">
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none"></div>

                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                        <span className="text-xs font-bold text-green-400 uppercase tracking-wider">Monoatom Enhanced</span>
                        <div className="px-2 py-1 rounded bg-green-500/20 text-green-400 text-[10px] font-bold border border-green-500/30">
                            PROVEN
                        </div>
                    </div>

                    <ul className="space-y-4">
                        {graphene.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="mt-0.5 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 flex-shrink-0">
                                    <Check className="w-3 h-3" strokeWidth={3} />
                                </div>
                                <span className="text-sm text-neutral-200 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
);

const TraditionalVsGraphene = () => {
    const comparisons = [
        {
            title: "Concrete (Graphacrete)",
            icon: Layers,
            traditional: [
                "Heavy cement usage",
                "High micro-crack risk",
                "Water permeable",
                "High carbon footprint"
            ],
            graphene: [
                "20% Cement Reduction",
                "Zero Micro-cracks",
                "Water Resistant",
                "LEED Credit Points"
            ]
        },
        {
            title: "Solar (Graffisol)",
            icon: Sun,
            traditional: [
                "15-20% Soiling Loss",
                "Overheating Panels",
                "Monthly Cleaning",
                "Standard Output"
            ],
            graphene: [
                "Self-Cleaning Surface",
                "Thermal Dissipation",
                "Annual Maintenance",
                "+12% Efficiency"
            ]
        },
        {
            title: "Coating (Ceraphene)",
            icon: Shield,
            traditional: [
                "Expensive (₹15k+)",
                "2-Year Lifespan",
                "Professional Only",
                "Standard Gloss"
            ],
            graphene: [
                "Accessible (₹5k)",
                "5-Year Durability",
                "Easy Application",
                "9H+ Hardness"
            ]
        }
    ];

    return (
        <section className="py-24 px-6 bg-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    number="02"
                    title="The Performance Gap"
                    subtitle="Why traditional materials can't compete with atomic engineering."
                    theme="light"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                    {comparisons.map((item, index) => (
                        <ComparisonCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TraditionalVsGraphene;
