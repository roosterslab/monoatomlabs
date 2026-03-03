import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Factory, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
// Background now global in MainLayout

const LabToManufacturing = () => {
    const journeyStages = [
        {
            number: '1',
            icon: FlaskConical,
            title: 'Lab Prototype',
            description: 'Breakthrough innovation',
            color: 'blue'
        },
        {
            number: '2',
            icon: CheckCircle2,
            title: 'Field Validation',
            description: 'Real-world testing',
            color: 'indigo'
        },
        {
            number: '3',
            icon: TrendingUp,
            title: 'Scale-Up',
            description: 'Process optimization',
            color: 'purple'
        },
        {
            number: '4',
            icon: Factory,
            title: 'Mass Production',
            description: 'Industrial scale',
            color: 'emerald'
        }
    ];

    const getColorClasses = (color) => {
        const colors = {
            blue: {
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                hoverBorder: 'hover:border-blue-400',
                iconBg: 'bg-blue-600',
                iconText: 'text-blue-600',
                arrow: 'text-blue-400'
            },
            indigo: {
                bg: 'bg-indigo-50',
                border: 'border-indigo-200',
                hoverBorder: 'hover:border-indigo-400',
                iconBg: 'bg-indigo-600',
                iconText: 'text-indigo-600',
                arrow: 'text-indigo-400'
            },
            purple: {
                bg: 'bg-purple-50',
                border: 'border-purple-200',
                hoverBorder: 'hover:border-purple-400',
                iconBg: 'bg-purple-600',
                iconText: 'text-purple-600',
                arrow: 'text-purple-400'
            },
            emerald: {
                bg: 'bg-emerald-50',
                border: 'border-emerald-200',
                hoverBorder: 'hover:border-emerald-400',
                iconBg: 'bg-emerald-600',
                iconText: 'text-emerald-600',
                arrow: 'text-emerald-400'
            }
        };
        return colors[color];
    };

    return (
        <section className="py-24 px-6 border-b border-neutral-900 bg-black/10 relative">
            <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
                <div className="inline-block bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 text-neutral-200 font-semibold mb-6">
                    From Lab to Manufacturing
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight tracking-tight text-white">
                    We Don't Just Innovate<br />
                    <span className="text-neutral-400">We Scale to Market</span>
                </h2>

                <p className="text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto text-neutral-300 font-light">
                    We don't just innovate in the lab—we ensure every breakthrough can scale from prototype
                    to mass manufacturing. Our approach bridges deep-tech expertise with real-world industrial
                    deployment, supply-chain integration, and national-scale production.
                </p>
            </div>

            {/* Journey Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                {journeyStages.map((stage, index) => {
                    const Icon = stage.icon;
                    const colors = getColorClasses(stage.color);
                    const isLast = index === journeyStages.length - 1;

                    return (
                        <div key={index} className="relative">
                            <div className={`bg-black/40 backdrop-blur-sm border-2 ${colors.border} rounded-2xl p-6 hover:bg-black/60 transition-all group ${colors.hoverBorder}`}>
                                <div className={`${colors.iconBg} w-12 h-12 rounded-full flex items-center justify-center mb-4 mx-auto`}>
                                    <span className="text-2xl font-bold text-white">{stage.number}</span>
                                </div>
                                <Icon className={`w-10 h-10 mx-auto mb-3 ${colors.iconText}`} />
                                <h3 className="text-center font-medium mb-2 text-white">{stage.title}</h3>
                                <p className="text-sm text-center text-neutral-300">{stage.description}</p>
                            </div>
                            {!isLast && (
                                <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 z-20">
                                    <ArrowRight className={`w-6 h-6 ${colors.arrow}`} />
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>

            </div>
        </section>
    );
};

export default LabToManufacturing;
