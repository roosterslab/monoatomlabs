import React from 'react';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import { Building2, Sun, ShieldCheck, Zap, Cog, Hammer } from 'lucide-react';

const IndustrySection = ({ title, description, icon: Icon, applications, benefits, reverse }) => (
    <div className={`flex flex-col lg:flex-row gap-12 lg:gap-24 items-start py-24 border-b border-neutral-200 last:border-0 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
        <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 flex items-center justify-center rounded-sm">
                    <Icon className="w-6 h-6 text-neutral-700" strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-display font-medium text-neutral-900">{title}</h3>
            </div>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
                {description}
            </p>

            <div className="mb-8">
                <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-4">Key Applications</h4>
                <div className="flex flex-wrap gap-2">
                    {applications.map((app, i) => (
                        <span key={i} className="px-3 py-1 bg-neutral-100 text-neutral-700 text-sm border border-neutral-200">
                            {app}
                        </span>
                    ))}
                </div>
            </div>

            <div>
                <h4 className="text-sm font-semibold text-neutral-900 uppercase tracking-wide mb-4">Graphene Advantage</h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center text-sm text-neutral-600">
                            <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-2"></span>
                            {benefit}
                        </li>
                    ))}
                </ul>
            </div>
        </div>

        {/* Visual / Image Placeholder */}
        <div className="w-full lg:w-5/12 aspect-[4/3] bg-neutral-100 border border-neutral-200 relative overflow-hidden flex items-center justify-center">
            <Icon className="w-24 h-24 text-neutral-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" strokeWidth={0.5} />
            <div className="absolute bottom-6 right-6 p-4 bg-white/90 border border-neutral-200 backdrop-blur-md">
                <div className="text-xs text-neutral-500 uppercase tracking-wide mb-1">Impact</div>
                <div className="text-xl font-display font-medium text-neutral-900">Validating Performance</div>
            </div>
        </div>
    </div>
);

const Industries = () => {
    return (
        <div className="min-h-screen">
            <PageHeader
                category="Applications"
                title="Industries We Serve"
                subtitle="From construction to clean energy, we engineer specific graphene solutions to solve critical industry challenges."
            />

            <div className="max-w-7xl mx-auto px-6">
                <IndustrySection
                    title="Construction & Infrastructure"
                    description="The construction industry faces dual pressures: needing higher performance materials while drastically reducing carbon footprint. Our graphene additives bridge this gap."
                    icon={Building2}
                    applications={['High-Rise Buildings', 'Roads & Bridges', 'Marine Structures', 'Pre-cast Concrete']}
                    benefits={['40-50% Strength Increase', 'Reduced Cement Usage', 'Lower Permeability', 'Crack Resistance']}
                />

                <IndustrySection
                    title="Solar & Clean Energy"
                    description="Efficiency is the currency of the energy sector. Our nanocoatings unlock trapped potential in solar assets through advanced surface engineering."
                    icon={Sun}
                    applications={['Utility Scale Solar Farms', 'Rooftop Solar', 'Floating Solar', 'BIPV']}
                    benefits={['7-8% Power Gain', 'Thermal Management', 'Anti-Soiling', 'Self-Cleaning']}
                    reverse={true}
                />

                <IndustrySection
                    title="Advanced Materials"
                    description="We strive to push the boundaries of material science, creating composites and coatings that defy conventional performance limits."
                    icon={ShieldCheck}
                    applications={['Automotive Coatings', 'Aerospace Composites', 'Defense Armor', 'Industrial Polymers']}
                    benefits={['9H+ Hardness', 'Ballistic Protection', 'Lightweighting', 'Corrosion Resistance']}
                />
            </div>
        </div>
    );
};

export default Industries;
