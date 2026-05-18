import React from 'react';
import { FlaskConical, Factory, CheckCircle } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { aboutPresentation } from '../../presentation/pages/about.copy';

const ThreePillars = () => {
    const copy = aboutPresentation;

    const iconMap = {
        flask: FlaskConical,
        factory: Factory,
        check: CheckCircle
    };

    const pillars = (copy.threePillars?.pillars || []).map((pillar) => ({
        ...pillar,
        icon: iconMap[pillar.iconKey] || FlaskConical
    }));

    const getColorClasses = (color) => {
        const colors = {
            blue: {
                bg: 'bg-blue-50',
                border: 'border-blue-200',
                hoverBorder: 'hover:border-blue-400',
                text: 'text-blue-600'
            },
            emerald: {
                bg: 'bg-emerald-50',
                border: 'border-emerald-200',
                hoverBorder: 'hover:border-emerald-400',
                text: 'text-emerald-600'
            },
            purple: {
                bg: 'bg-purple-50',
                border: 'border-purple-200',
                hoverBorder: 'hover:border-purple-400',
                text: 'text-purple-600'
            }
        };
        return colors[color];
    };

    return (
        <section className="py-24 px-6 bg-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-display font-medium text-center mb-16 text-neutral-900">
                    {copy.threePillars.heading}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {pillars.map((pillar, index) => {
                        const Icon = pillar.icon;
                        const colors = getColorClasses(pillar.color);

                        return (
                            <div key={index} className="text-center">
                                <div className={`w-16 h-16 mx-auto mb-6 ${colors.bg} rounded-xl flex items-center justify-center border-2 ${colors.border}`}>
                                    <Icon className={`w-8 h-8 ${colors.text}`} />
                                </div>
                                <h3 className="text-2xl font-display font-bold mb-6 text-neutral-900">{pillar.title}</h3>
                                <ul className="text-left text-neutral-600 space-y-3">
                                    {pillar.items.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <CheckCircle className="w-5 h-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                            <span className="font-light">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ThreePillars;
