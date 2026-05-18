import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, FlaskConical, Rocket, CheckCircle, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

const defaultCopy = {
    sectionHeading: {
        number: '02',
        title: 'How We Work Together',
        subtitle: 'A clear, structured process from discovery to deployment—designed to minimize risk and maximize results',
    },
    steps: [
        {
            step: '1',
            title: 'Discovery Call',
            subtitle: 'Understanding Your Needs',
            icon: 'Phone',
            duration: '1 Week',
            color: 'blue',
            activities: [
                'Initial consultation to understand your requirements',
                'Recommend appropriate product solutions',
                'Share technical specifications and performance data',
                'Discuss pricing and implementation options',
            ],
        },
        {
            step: '2',
            title: 'Sample & Testing',
            subtitle: 'Proof of Performance',
            icon: 'FlaskConical',
            duration: '2-4 Weeks',
            color: 'purple',
            activities: [
                'Provide product samples for your evaluation',
                'Support pilot testing in your environment',
                'Analyze results and optimize formulation',
                'Address technical questions from your team',
            ],
        },
        {
            step: '3',
            title: 'Pilot Deployment',
            subtitle: 'Small-Scale Implementation',
            icon: 'Rocket',
            duration: '1-2 Months',
            color: 'emerald',
            activities: [
                'Limited production run or site trial',
                'Monitor performance metrics closely',
                'Optimize application process',
                'Train your team on best practices',
            ],
        },
        {
            step: '4',
            title: 'Full Rollout',
            subtitle: 'Scale to Production',
            icon: 'CheckCircle',
            duration: 'Ongoing',
            color: 'orange',
            activities: [
                'Manufacturing partnership or technology licensing',
                'Full-scale production integration',
                'Continuous technical support',
                'Performance monitoring and optimization',
            ],
        },
    ],
    bottomCards: {
        left: {
            title: 'Partnership Models',
            items: [
                {
                    title: 'Technology Licensing',
                    description:
                        'Integrate our IP into your production lines with full technical support and royalty-based model',
                },
                {
                    title: 'JV-SPV Model',
                    description:
                        'Joint ventures for co-development, manufacturing, and commercialization with shared IP value',
                },
            ],
        },
        right: {
            title: 'What You Get',
            items: [
                'NABL-certified performance guarantees',
                'Full technical documentation',
                'Application training for your team',
                'Ongoing optimization support',
                'Access to R&D expertise',
                'Manufacturing process guidance',
            ],
        },
    },
};

const iconByKey = {
    Phone,
    FlaskConical,
    Rocket,
    CheckCircle,
};

const CustomerJourney = ({ copy = defaultCopy }) => {
    const steps = (copy.steps ?? defaultCopy.steps).map((s) => ({
        ...s,
        icon: iconByKey[s.icon] ?? Phone,
    }));

    const getColorClasses = (color) => {
        const colors = {
            blue: {
                gradient: 'bg-gradient-to-br from-blue-500 to-cyan-600',
                border: 'border-blue-200',
                hoverBorder: 'hover:border-blue-400'
            },
            purple: {
                gradient: 'bg-gradient-to-br from-purple-500 to-pink-600',
                border: 'border-purple-200',
                hoverBorder: 'hover:border-purple-400'
            },
            emerald: {
                gradient: 'bg-gradient-to-br from-green-500 to-emerald-600',
                border: 'border-emerald-200',
                hoverBorder: 'hover:border-emerald-400'
            },
            orange: {
                gradient: 'bg-gradient-to-br from-orange-500 to-red-600',
                border: 'border-orange-200',
                hoverBorder: 'hover:border-orange-400'
            }
        };
        return colors[color];
    };

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-white to-neutral-50 border-b border-neutral-200">
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    number={copy.sectionHeading?.number ?? '02'}
                    title={copy.sectionHeading?.title ?? 'How We Work Together'}
                    subtitle={
                        copy.sectionHeading?.subtitle ??
                        'A clear, structured process from discovery to deployment—designed to minimize risk and maximize results'
                    }
                    theme="light"
                />

                <div className="relative mt-16">
                    {/* Timeline connector */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-neutral-200 -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 relative">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            const colors = getColorClasses(step.color);
                            const isLast = index === steps.length - 1;

                            return (
                                <div key={index} className="relative">
                                    <div className={`bg-white border-2 ${colors.border} rounded-2xl p-8 ${colors.hoverBorder} hover:shadow-2xl transition-all h-full`}>
                                        <div className={`inline-flex p-4 ${colors.gradient} rounded-xl mb-6`}>
                                            <Icon className="w-8 h-8 text-white" />
                                        </div>

                                        <div className="text-4xl font-display font-bold text-neutral-900 mb-2">{step.step}</div>
                                        <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2">{step.title}</h3>
                                        <p className="text-neutral-600 mb-4">{step.subtitle}</p>

                                        <div className="inline-flex items-center gap-2 bg-neutral-100 px-3 py-1 rounded-full mb-6">
                                            <span className="text-sm font-bold text-neutral-600">{step.duration}</span>
                                        </div>

                                        <ul className="space-y-3">
                                            {step.activities.map((activity, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-neutral-700">
                                                    <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                                                    <span>{activity}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {!isLast && (
                                        <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-neutral-400 -translate-y-1/2 z-10" />
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-neutral-900 text-white rounded-2xl p-10">
                        <h3 className="text-2xl font-display font-bold mb-4">{copy.bottomCards?.left?.title ?? 'Partnership Models'}</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold mb-2">{copy.bottomCards?.left?.items?.[0]?.title ?? 'Technology Licensing'}</h4>
                                <p className="text-neutral-300 text-sm font-light">
                                    {copy.bottomCards?.left?.items?.[0]?.description ??
                                        'Integrate our IP into your production lines with full technical support and royalty-based model'}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-bold mb-2">{copy.bottomCards?.left?.items?.[1]?.title ?? 'JV-SPV Model'}</h4>
                                <p className="text-neutral-300 text-sm font-light">
                                    {copy.bottomCards?.left?.items?.[1]?.description ??
                                        'Joint ventures for co-development, manufacturing, and commercialization with shared IP value'}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-10">
                        <h3 className="text-2xl font-display font-bold text-neutral-900 mb-4">{copy.bottomCards?.right?.title ?? 'What You Get'}</h3>
                        <ul className="space-y-3">
                            {(copy.bottomCards?.right?.items ?? [
                                'NABL-certified performance guarantees',
                                'Full technical documentation',
                                'Application training for your team',
                                'Ongoing optimization support',
                                'Access to R&D expertise',
                                'Manufacturing process guidance',
                            ]).map((item, idx) => (
                                <li key={idx} className="flex items-center gap-2 text-neutral-700">
                                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                    <span className="font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CustomerJourney;
