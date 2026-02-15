import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, Users, Award, Leaf } from 'lucide-react';
// Background now global in MainLayout

const ImpactMetricsDashboard = () => {
    const metrics = [
        {
            icon: Leaf,
            value: 50,
            suffix: 'M+',
            unit: 'kg',
            label: 'CO₂ Saved',
            description: 'Carbon emissions prevented through graphene-enhanced materials',
            color: 'from-green-500 to-emerald-600'
        },
        {
            icon: Users,
            value: 100,
            suffix: '+',
            unit: '',
            label: 'Installations',
            description: 'Active deployments across construction, solar, and industrial sectors',
            color: 'from-blue-500 to-cyan-600'
        },
        {
            icon: TrendingUp,
            value: 25,
            suffix: '%',
            unit: '',
            label: 'Cost Reduction',
            description: 'Average cost savings achieved by customers vs traditional solutions',
            color: 'from-purple-500 to-pink-600'
        },
        {
            icon: Award,
            value: 99.5,
            suffix: '%',
            unit: '',
            label: 'Satisfaction',
            description: 'Customer satisfaction rating based on post-deployment surveys',
            color: 'from-orange-500 to-red-600'
        }
    ];

    const AnimatedCounter = ({ value, suffix, unit }) => {
        const [count, setCount] = useState(0);
        const [hasAnimated, setHasAnimated] = useState(false);
        const ref = useRef(null);

        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        const duration = 2000;
                        const steps = 60;
                        const increment = value / steps;
                        let current = 0;

                        const timer = setInterval(() => {
                            current += increment;
                            if (current >= value) {
                                setCount(value);
                                clearInterval(timer);
                            } else {
                                setCount(Math.floor(current * 10) / 10);
                            }
                        }, duration / steps);

                        return () => clearInterval(timer);
                    }
                },
                { threshold: 0.1 }
            );

            if (ref.current) {
                observer.observe(ref.current);
            }

            return () => {
                if (ref.current) {
                    observer.unobserve(ref.current);
                }
            };
        }, [value, hasAnimated]);

        return (
            <div ref={ref} className="text-6xl font-display font-bold">
                {count.toFixed(value % 1 !== 0 ? 1 : 0)}
                {suffix}
                {unit && <span className="text-3xl ml-1">{unit}</span>}
            </div>
        );
    };

    return (
        <section className="py-24 px-6 border-b border-neutral-900 text-white bg-black/10 relative">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-2 rounded-full mb-6">
                        <TrendingUp className="w-4 h-4 text-green-400" />
                        <span className="text-sm font-bold text-green-300 uppercase tracking-wide">Real Impact</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-medium mb-6 leading-tight tracking-tight">
                        Making a Measurable Difference
                    </h2>
                    <p className="text-xl md:text-2xl text-neutral-300 max-w-3xl mx-auto font-light">
                        Our graphene nano-platelets aren't just advanced materials—they're delivering real-world results across industries
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => {
                        const Icon = metric.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm border-2 border-white/10 rounded-2xl p-8 hover:border-white/30 hover:bg-white/10 transition-all"
                            >
                                <div className={`inline-flex p-4 bg-gradient-to-br ${metric.color} rounded-xl mb-6`}>
                                    <Icon className="w-8 h-8 text-white" />
                                </div>

                                <AnimatedCounter
                                    value={metric.value}
                                    suffix={metric.suffix}
                                    unit={metric.unit}
                                />

                                <h3 className="text-2xl font-bold mt-4 mb-2">{metric.label}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed font-light">
                                    {metric.description}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                        <div className="text-3xl font-display font-bold text-green-400 mb-2">5+</div>
                        <h4 className="text-lg font-bold mb-2">Commercial Products</h4>
                        <p className="text-neutral-400 text-sm font-light">Market-ready solutions deployed across industries</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                        <div className="text-3xl font-display font-bold text-blue-400 mb-2">15+</div>
                        <h4 className="text-lg font-bold mb-2">Field Validations</h4>
                        <p className="text-neutral-400 text-sm font-light">Independent testing and NABL certification</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                        <div className="text-3xl font-display font-bold text-purple-400 mb-2">₹430</div>
                        <h4 className="text-lg font-bold mb-2">Avg. Savings per m³</h4>
                        <p className="text-neutral-400 text-sm font-light">Cost reduction for concrete applications</p>
                    </div>
                </div>

            <div className="text-center mt-12">
                <p className="text-neutral-500 text-sm font-light">
                    Data updated monthly • Last updated: February 2026
                </p>
            </div>
            </div>
        </section>
    );
};

export default ImpactMetricsDashboard;
