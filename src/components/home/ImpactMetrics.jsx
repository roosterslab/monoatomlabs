import React from 'react';
import { Leaf, Trees, Car, Home, TrendingUp, Info } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const MetricCard = ({ icon: Icon, value, unit, label, color, delay }) => (
    <div
        className="relative group bg-white border border-neutral-100 p-8 rounded-3xl hover:border-neutral-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 overflow-hidden"
        style={{ animationDelay: `${delay}ms` }}
    >
        {/* Glow Effect */}
        <div className={`absolute -top-20 -right-20 w-40 h-40 bg-${color}-500/10 rounded-full blur-[80px] group-hover:bg-${color}-500/20 transition-all duration-700`}></div>

        <div className="relative z-10 flex flex-col h-full justify-between">
            <div className="flex justify-between items-start mb-8">
                <div className={`p-3 rounded-2xl bg-${color}-50 text-${color}-600 border border-${color}-100 group-hover:scale-110 transition-transform duration-500`}>
                    <Icon className="w-8 h-8" strokeWidth={1.5} />
                </div>
                <TrendingUp className={`w-5 h-5 text-${color}-500 opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform`} />
            </div>

            <div>
                <div className="flex items-baseline gap-2 mb-2">
                    <span className={`text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-neutral-900 tracking-tighter group-hover:text-${color}-600 transition-colors`}>
                        {value}
                    </span>
                    <span className={`text-sm font-bold text-${color}-600 uppercase tracking-widest`}>{unit}</span>
                </div>
                <p className="text-neutral-500 text-sm font-medium leading-relaxed group-hover:text-neutral-700 transition-colors">
                    {label}
                </p>
            </div>
        </div>
    </div>
);

const EquivalentRow = ({ icon: Icon, value, label, description, color }) => (
    <div className="flex items-center gap-6 p-6 bg-white border border-neutral-100 rounded-2xl hover:border-neutral-300 hover:shadow-lg transition-all duration-300 group">
        <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-${color}-50 flex items-center justify-center text-${color}-600 border border-${color}-100 transition-colors`}>
            <Icon className="w-6 h-6" />
        </div>

        <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div>
                <div className="text-lg font-bold text-neutral-900 mb-1">{label}</div>
                <div className="text-xs text-neutral-500 font-mono">{description}</div>
            </div>
            <div className="text-right md:text-right">
                <span className={`text-3xl font-display font-bold text-${color}-600`}>{value}</span>
            </div>
        </div>
    </div>
);

const ImpactMetrics = () => {
    const metrics = [
        {
            icon: Leaf,
            value: "25K+",
            unit: "TONS",
            label: "CO₂ Emissions Eliminated",
            color: "emerald",
            delay: 0
        },
        {
            icon: Trees,
            value: "1.2M",
            unit: "TREES",
            label: "Equivalent Forest Impact",
            color: "green",
            delay: 100
        },
        {
            icon: Car,
            value: "5.4K",
            unit: "CARS",
            label: "Passenger Vehicles off Road",
            color: "cyan",
            delay: 200
        },
        {
            icon: Home,
            value: "8K+",
            unit: "HOMES",
            label: "Annual Energy Powered",
            color: "amber",
            delay: 300
        }
    ];

    const equivalents = [
        {
            icon: Leaf,
            value: "₹25 Cr",
            label: "Carbon Credit Value",
            description: "Market potential at $20/ton",
            color: "emerald"
        },
        {
            icon: Trees,
            value: "42,000 ha",
            label: "Forest Conservation",
            description: "Land area required for same offset",
            color: "green"
        },
        {
            icon: Car,
            value: "54M km",
            label: "Distance Saved",
            description: "Total zero-emission mileage",
            color: "cyan"
        },
        {
            icon: Home,
            value: "195 GWh",
            label: "Direct Energy Savings",
            description: "From solar efficiency gains",
            color: "amber"
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-neutral-50 border-t border-neutral-200 relative overflow-hidden">
            {/* Background Noise/Grid - Light Mode */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black_70%,transparent_100%)]"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div>
                    </div>
                    <p className="text-neutral-500 max-w-sm text-lg leading-relaxed mb-2">
                        Tracking the real-time environmental benefits of every kilogram of Monoatom material deployed globally.
                    </p>
                </div>

                {/* Main Dashboard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {metrics.map((metric, index) => (
                        <MetricCard key={index} {...metric} />
                    ))}
                </div>

                {/* Detailed Breakdown */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-20">
                    <div className="bg-white border border-neutral-100 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-500">
                        <h3 className="text-2xl font-display font-bold text-neutral-900 mb-8 flex items-center gap-3">
                            <Info className="w-5 h-5 text-neutral-400" />
                            Equivalent Impact
                        </h3>
                        <div className="space-y-4">
                            {equivalents.map((item, index) => (
                                <EquivalentRow key={index} {...item} />
                            ))}
                        </div>
                    </div>

                    <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-50 to-white border border-emerald-100 p-10 flex flex-col justify-center shadow-sm">
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40"></div>
                        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-emerald-200 rounded-full blur-[100px] opacity-60"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-display font-bold text-emerald-900 mb-6">
                                Sustainability as a Service
                            </h3>
                            <p className="text-neutral-600 text-lg leading-relaxed mb-10">
                                Investing in graphene isn't just about performance—it's the most efficient way to decarbonize industrial supply chains.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <div className="px-5 py-3 rounded-xl bg-white border border-emerald-100 text-emerald-700 font-mono text-sm shadow-sm font-bold">
                                    ESG Compliant
                                </div>
                                <div className="px-5 py-3 rounded-xl bg-white border border-emerald-100 text-emerald-700 font-mono text-sm shadow-sm font-bold">
                                    Carbon Negative
                                </div>
                                <div className="px-5 py-3 rounded-xl bg-white border border-emerald-100 text-emerald-700 font-mono text-sm shadow-sm font-bold">
                                    LEED Credits
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ImpactMetrics;
