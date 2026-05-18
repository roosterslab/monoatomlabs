import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Repeat, Zap, Factory, ArrowRight, Network, Bot, Leaf, Truck, Package } from 'lucide-react';
import Button from '../ui/Button';
import SectionHeading from '../ui/SectionHeading';

const defaultCopy = {
    badge: '01 — Industry 4.0 Enabler',
    titleAccent: 'Advanced',
    titleLine1: 'Materials for the',
    titleLine2: '4th Industrial Revolution',
    valueProp: {
        before: 'Our breakthrough materials deliver',
        emphasis: 'superior strength, conductivity, and durability',
        after: '—essential building blocks for smart manufacturing and autonomous systems.',
    },
    features: [
        {
            title: 'Ultra Strong but Light',
            description:
                '200x stronger than steel at a fraction of the weight — enabling structures that were previously impossible to build.',
        },
        {
            title: 'Super Hard but Flexible',
            description:
                'The hardest material known, yet it bends without breaking — delivering durability and adaptability at the atomic scale.',
        },
        {
            title: 'Highly Conductive but Stable',
            description:
                'Exceptional electrical and thermal conductivity with outstanding chemical stability — performing reliably in extreme conditions.',
        },
    ],
    applicationsTitle: 'Applications',
    applications: [
        'Smart Manufacturing & Automation',
        'IoT-Enabled Infrastructure',
        'Advanced Robotics & Composites',
        'Clean Energy Systems',
        'Next-Gen Transportation',
        'Digital Supply Chains',
    ],
    differentiator: {
        headingLine1: 'From Lab Prototype to',
        headingHighlight: 'Mass Manufacturing',
        description:
            'Unlike academic research that never leaves the lab, we ensure every innovation scales. Our approach bridges deep-tech expertise with real-world deployment.',
        ctaLabel: 'View Solutions',
        ctaTo: '/products',
    },
    tagline: 'Building the material foundation for tomorrow',
};

const Industry40Enabler = ({ copy = defaultCopy }) => {

    const industry40Features = [
        {
            icon: Shield,
            title: copy.features?.[0]?.title ?? defaultCopy.features[0].title,
            description: copy.features?.[0]?.description ?? defaultCopy.features[0].description,
        },
        {
            icon: Repeat,
            title: copy.features?.[1]?.title ?? defaultCopy.features[1].title,
            description: copy.features?.[1]?.description ?? defaultCopy.features[1].description,
        },
        {
            icon: Zap,
            title: copy.features?.[2]?.title ?? defaultCopy.features[2].title,
            description: copy.features?.[2]?.description ?? defaultCopy.features[2].description,
        }
    ];

    const industry40Applications = [
        { title: copy.applications?.[0] ?? defaultCopy.applications[0], icon: Factory },
        { title: copy.applications?.[1] ?? defaultCopy.applications[1], icon: Network },
        { title: copy.applications?.[2] ?? defaultCopy.applications[2], icon: Bot },
        { title: copy.applications?.[3] ?? defaultCopy.applications[3], icon: Leaf },
        { title: copy.applications?.[4] ?? defaultCopy.applications[4], icon: Truck },
        { title: copy.applications?.[5] ?? defaultCopy.applications[5], icon: Package }
    ];

    return (
        <section className="py-16 md:py-24 lg:py-32 px-6 bg-white border-b border-neutral-200 relative overflow-hidden">
            {/* Background decoration - Enhanced for depth */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl opacity-60 pointer-events-none -translate-y-1/2 translate-x-1/4"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-neutral-100/80 rounded-full blur-3xl opacity-60 pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header - Custom Product Manager Style */}
                <div className="mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        {copy.badge ?? defaultCopy.badge}
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-medium tracking-tight text-neutral-900 leading-[1.1] mb-6 max-w-4xl">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">{copy.titleAccent ?? defaultCopy.titleAccent}</span> {copy.titleLine1 ?? defaultCopy.titleLine1}
                        <br className="hidden md:block" /> {copy.titleLine2 ?? defaultCopy.titleLine2}
                    </h2>
                </div>

                {/* Main Value Prop - Cleaner, focusing on typography */}
                <div className="grid md:grid-cols-12 gap-12 mb-24">
                    <div className="md:col-span-8">
                        <p className="text-2xl md:text-3xl leading-relaxed text-neutral-600 font-light">
                            {copy.valueProp?.before ?? defaultCopy.valueProp.before}{' '}
                            <span className="text-neutral-900 font-medium border-b-2 border-blue-200">{copy.valueProp?.emphasis ?? defaultCopy.valueProp.emphasis}</span>
                            {copy.valueProp?.after ?? defaultCopy.valueProp.after}
                        </p>
                    </div>
                    <div className="md:col-span-4 flex items-end">
                        <div className="w-full h-px bg-neutral-200 mb-6"></div>
                    </div>
                </div>

                {/* Industry 4.0 Features Grid - Modern Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-24">
                    {industry40Features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <div
                                key={index}
                                className="group p-8 bg-neutral-50 rounded-2xl border border-neutral-100 hover:bg-white hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300"
                            >
                                <div className="mb-6 inline-flex p-3 rounded-lg bg-white border border-neutral-200 text-neutral-900 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors">
                                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                                </div>
                                <h4 className="text-lg font-bold mb-3 text-neutral-900 group-hover:text-blue-700 transition-colors">{feature.title}</h4>
                                <p className="text-neutral-500 leading-relaxed font-light">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>

                {/* Applications & Differentiator Split */}
                <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
                    {/* Left: Applications Specs Grid */}
                    <div>
                        <h3 className="text-sm font-mono font-semibold text-neutral-400 uppercase tracking-widest mb-8">
                            {copy.applicationsTitle ?? defaultCopy.applicationsTitle}
                        </h3>
                        <div className="grid grid-cols-1 gap-3">
                            {industry40Applications.map((app, index) => {
                                const Icon = app.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center p-4 border-b border-neutral-200"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600">
                                                <Icon className="w-5 h-5" strokeWidth={1.5} />
                                            </div>
                                            <span className="text-lg text-neutral-700 font-light">{app.title}</span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Key Differentiator Card */}
                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-[2rem] opacity-10 blur-xl"></div>
                        <div className="relative bg-neutral-900 rounded-[1.5rem] p-10 md:p-12 text-white overflow-hidden">
                            {/* Noise Texture */}
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <Factory className="w-12 h-12 text-blue-400 mb-8" strokeWidth={1.5} />

                                <h3 className="text-3xl font-display font-bold mb-6 leading-tight">
                                    From Lab Prototype to <br />
                                    <span className="text-blue-400">Mass Manufacturing</span>
                                </h3>

                                <p className="text-neutral-300 leading-relaxed font-light mb-10">
                                    {copy.differentiator?.description ?? defaultCopy.differentiator.description}
                                </p>

                                <div className="mt-auto pt-8 border-t border-white/10 flex flex-wrap gap-4">
                                    <Link to={copy.differentiator?.ctaTo ?? defaultCopy.differentiator.ctaTo}>
                                        <Button variant="primary" theme="dark" icon={ArrowRight}>
                                            {copy.differentiator?.ctaLabel ?? defaultCopy.differentiator.ctaLabel}
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Tagline */}
                <div className="text-center pt-8 border-t border-neutral-100">
                    <p className="text-sm font-mono text-neutral-400 uppercase tracking-widest">
                        {copy.tagline ?? defaultCopy.tagline}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Industry40Enabler;
