import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, Atom, Layers, Zap, TrendingUp, Factory, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const Industry40Enabler = () => {
    const industry40Features = [
        {
            icon: Atom,
            title: 'Smart Materials',
            description: 'Graphene-enhanced solutions with programmable properties'
        },
        {
            icon: Layers,
            title: 'Nano-Engineering',
            description: 'Atomic-level precision for next-gen applications'
        },
        {
            icon: Zap,
            title: 'Performance Boost',
            description: '40-50% improvements in strength, conductivity, efficiency'
        },
        {
            icon: TrendingUp,
            title: 'Scale Ready',
            description: 'From pilot to mass manufacturing deployment'
        }
    ];

    const industry40Applications = [
        'Smart Manufacturing & Automation',
        'IoT-Enabled Infrastructure',
        'Advanced Robotics & Composites',
        'Clean Energy Systems',
        'Next-Gen Transportation',
        'Digital Supply Chains'
    ];

    return (
        <section className="py-24 px-6 bg-white border-b border-neutral-200 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeading
                    number="01"
                    title="Industry 4.0 Enabler"
                    subtitle="Advanced Materials for the 4th Industrial Revolution"
                    theme="light"
                />

                {/* Main Value Prop */}
                <div className="bg-gradient-to-br from-neutral-50 via-white to-blue-50/30 border border-neutral-200 rounded-2xl p-8 md:p-10 mb-16 text-center shadow-sm hover:shadow-lg transition-all">
                    <p className="text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto text-neutral-700 font-light">
                        Our breakthrough materials deliver <strong className="text-neutral-900 font-medium">superior strength, conductivity, durability, and
                        environmental efficiency</strong>—the essential building blocks for smart manufacturing,
                        IoT infrastructure, and autonomous systems. We bridge cutting-edge nanomaterial science
                        with industrial-scale deployment.
                    </p>
                </div>

                {/* Industry 4.0 Features Grid */}
                <div className="grid md:grid-cols-4 gap-6 mb-16">
                    {industry40Features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white border border-neutral-200 rounded-2xl p-6 text-center hover:border-blue-300 hover:shadow-xl transition-all group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 mx-auto mb-4 group-hover:bg-blue-100 transition-colors">
                                    <Icon className="w-7 h-7" />
                                </div>
                                <h4 className="text-lg font-medium mb-2 text-neutral-900">{feature.title}</h4>
                                <p className="text-sm text-neutral-600 font-light">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Industry 4.0 Applications */}
                <div className="mb-16">
                    <h3 className="text-3xl font-display font-bold text-center mb-8 text-neutral-900">
                        Powering Industry 4.0 Applications
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                        {industry40Applications.map((app, index) => (
                            <div
                                key={index}
                                className="bg-white border border-neutral-200 rounded-xl p-4 flex items-center gap-3 hover:border-blue-300 hover:bg-blue-50/50 transition-all"
                            >
                                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                                <span className="font-medium text-neutral-700">{app}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Key Differentiator */}
                <div className="bg-gradient-to-br from-neutral-900 via-neutral-800 to-blue-900 rounded-3xl p-8 md:p-12 mb-12 text-center text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="relative z-10">
                        <Factory className="w-16 h-16 mx-auto mb-6 text-blue-400" />
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            From Lab Prototype to Mass Manufacturing
                        </h3>
                        <p className="text-lg text-neutral-300 max-w-4xl mx-auto leading-relaxed font-light">
                            Unlike academic research that never leaves the lab, we ensure every innovation can scale to
                            industrial production. Our approach bridges deep-tech expertise with real-world deployment,
                            supply-chain integration, and national-scale manufacturing.
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                    <Link to="/industries">
                        <Button variant="primary" theme="light" icon={ArrowRight}>
                            Explore Industry 4.0 Solutions
                        </Button>
                    </Link>
                    <Link to="/partnership">
                        <Button variant="secondary" theme="light">
                            Partner With Us
                        </Button>
                    </Link>
                </div>

                {/* Tagline */}
                <p className="text-center text-lg text-neutral-600 italic font-light">
                    "Building the material foundation for the next industrial revolution"
                </p>
            </div>
        </section>
    );
};

export default Industry40Enabler;
