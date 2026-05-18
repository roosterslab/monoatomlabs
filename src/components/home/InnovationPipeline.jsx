import React from 'react';
import { Rocket, FlaskConical, Package, CircleDot, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { filterVisibleProducts } from '../../utils/productVisibility';

const defaultInnovationPipelineCopy = {
    sectionHeading: {
        number: '08',
        title: 'Innovation Pipeline',
        subtitle: 'Pushing the boundaries of material science from lab to market.',
        theme: 'light',
    },
    phases: [
        {
            icon: 'Package',
            title: 'Market Ready',
            subtitle: 'Deployed & generating revenue',
            color: 'emerald',
            step: 1,
            products: [
                { name: 'Graphacrete', category: 'Construction', status: 'READY', icon: '🏗️' },
                { name: 'Graffisol', category: 'Solar Yield', status: 'READY', icon: '☀️' },
                { name: 'Ceraphene', category: 'Coatings', status: 'READY', icon: '💎' },
                { name: 'HD-G-PE', category: 'Polymers', status: 'READY', icon: '📦' },
            ],
        },
        {
            icon: 'Rocket',
            title: 'In Pipeline',
            subtitle: 'Scaling for industrial pilots',
            color: 'blue',
            step: 2,
            products: [
                { name: 'Rustene', category: 'Anti-Corrosion', status: 'DEV', icon: '🛡️' },
                { name: 'Graphyre', category: 'Automotive', status: 'DEV', icon: '🚗' },
                { name: 'Thermaphene', category: 'Textiles', status: 'DEV', icon: '🔥' },
                { name: 'Armophene', category: 'Defense', status: 'DEV', icon: '🎖️' },
            ],
        },
        {
            icon: 'FlaskConical',
            title: 'Future Pilots',
            subtitle: 'Breakthrough R&D Concepts',
            color: 'purple',
            step: 3,
            products: [
                { name: 'H₂ Membranes', category: 'Energy', status: 'PILOT', icon: '⚡' },
                { name: 'Desalination', category: 'Water', status: 'PILOT', icon: '💧' },
                { name: 'Li-Ion+', category: 'Storage', status: 'PILOT', icon: '🔋' },
                { name: 'Bio-Sensors', category: 'Medical', status: 'PILOT', icon: '🧬' },
            ],
        },
    ],
    bottomBanner: {
        title: 'The Future is Built on Graphene',
        description:
            'We are continuously expanding our portfolio. Have a specific challenge? Our materials science team can engineer a solution.',
        buttonLabel: 'View Tech Roadmap',
    },
    labels: {
        stepPrefix: 'Step',
    },
};

function mergeCopy(defaults, overrides) {
    if (!overrides) return defaults;

    const out = { ...defaults };
    for (const key of Object.keys(overrides)) {
        const overrideValue = overrides[key];
        const defaultValue = defaults[key];

        if (
            overrideValue &&
            typeof overrideValue === 'object' &&
            !Array.isArray(overrideValue) &&
            defaultValue &&
            typeof defaultValue === 'object' &&
            !Array.isArray(defaultValue)
        ) {
            out[key] = mergeCopy(defaultValue, overrideValue);
        } else {
            out[key] = overrideValue;
        }
    }

    return out;
}

const ProductStrip = ({ name, category, status, icon, color }) => (
    <div className={`group flex items-center gap-4 bg-white border border-neutral-100 rounded-xl p-4 hover:border-${color}-500 hover:shadow-lg transition-all duration-300 cursor-default`}>
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-xl bg-${color}-50 text-${color}-600 group-hover:bg-${color}-500 group-hover:text-white transition-colors`}>
            {icon}
        </div>

        <div className="flex-1">
            <h4 className="text-base font-bold text-neutral-900 group-hover:text-${color}-600 transition-colors">
                {name}
            </h4>
            <p className="text-xs text-neutral-500 font-medium uppercase tracking-wide">{category}</p>
        </div>

        <div className={`w-2 h-2 rounded-full bg-${color}-500`}></div>
    </div>
);

const PhaseColumn = ({ icon: Icon, title, subtitle, products, color, step, isLast, stepPrefix = 'Step' }) => (
    <div className="relative">
        {/* Connector Line (Desktop) */}
        {!isLast && (
            <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-neutral-200 to-neutral-100 -z-10 transform translate-x-1/2"></div>
        )}

        {/* Header Ribbon */}
        <div className="flex flex-col items-center text-center mb-8 relative z-10">
            <div className={`w-16 h-16 rounded-2xl bg-white border-2 border-${color}-100 flex items-center justify-center text-${color}-600 shadow-xl shadow-${color}-100/50 mb-4`}>
                <Icon className="w-8 h-8" strokeWidth={1.5} />
            </div>

            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-${color}-50 text-${color}-700 text-xs font-bold uppercase tracking-wider mb-2`}>
                <CircleDot className="w-3 h-3" /> {stepPrefix} 0{step}
            </div>

            <h3 className="text-2xl font-display font-bold text-neutral-900">{title}</h3>
            <p className="text-sm text-neutral-500 font-medium">{subtitle}</p>
        </div>

        {/* Product Stack */}
        <div className="space-y-3 relative z-10">
            <div className={`absolute inset-0 bg-gradient-to-b from-${color}-50/50 to-transparent -z-10 rounded-3xl -m-4`}></div>
            {products.map((product, index) => (
                <ProductStrip key={index} {...product} color={color} />
            ))}
        </div>
    </div>
);

const InnovationPipeline = ({ copy: copyOverrides }) => {
    const copy = mergeCopy(defaultInnovationPipelineCopy, copyOverrides);

    const iconMap = { Package, Rocket, FlaskConical };
    const phases = Array.isArray(copy.phases) ? copy.phases : defaultInnovationPipelineCopy.phases;
    const visiblePhases = phases.map((phase) => ({
        ...phase,
        products: filterVisibleProducts(phase?.products),
    }));

    return (
        <section className="py-24 px-6 bg-white border-b border-neutral-100 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    number={copy.sectionHeading?.number}
                    title={copy.sectionHeading?.title}
                    subtitle={copy.sectionHeading?.subtitle}
                    theme={copy.sectionHeading?.theme}
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16 relative">
                    {/* Background Grid for Tech Feel */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 pointer-events-none"></div>

                    {visiblePhases.map((phase, index) => {
                        const Icon =
                            typeof phase.icon === 'string'
                                ? iconMap[phase.icon]
                                : phase.icon;

                        return (
                            <PhaseColumn
                                key={index}
                                icon={Icon}
                                title={phase.title}
                                subtitle={phase.subtitle}
                                products={phase.products}
                                color={phase.color}
                                step={phase.step}
                                isLast={index === visiblePhases.length - 1}
                                stepPrefix={copy.labels?.stepPrefix}
                            />
                        );
                    })}
                </div>

                {/* Bottom Stats Banner */}
                <div className="mt-20 relative rounded-2xl overflow-hidden bg-neutral-900 text-white p-12">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    <div className="absolute right-0 top-0 w-96 h-96 bg-brand-500/20 rounded-full blur-[100px]"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-3xl font-display font-bold mb-2">{copy.bottomBanner?.title}</h3>
                            <p className="text-neutral-400 max-w-xl">
                                {copy.bottomBanner?.description}
                            </p>
                        </div>
                        <button className="flex items-center gap-3 px-8 py-4 bg-white text-neutral-900 font-bold rounded-xl hover:bg-neutral-200 transition-colors">
                            {copy.bottomBanner?.buttonLabel} <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InnovationPipeline;
