import React from 'react';
import { Target, Zap, Droplets, Wind, Heart, Sparkles } from 'lucide-react';

const ICONS = {
    wind: Wind,
    droplets: Droplets,
    zap: Zap,
    heart: Heart,
};

const DEFAULT_COPY = {
    visionBadge: 'Our Vision',
    visionTitleLine1: 'Advanced Nanomaterials for',
    visionTitleHighlight: 'Better Quality of Life',
    visionBody:
        'We see graphene and advanced nanomaterials as the foundation of a transformation that will touch every aspect of human life—from the air we breathe to the energy we consume.',
    missionTitle: 'Our Mission',
    missionBody:
        'To create commercially viable graphene solutions for industrial applications. We develop, validate, and commercialize graphene innovations to provide:',
    missionTiles: [
        { iconKey: 'wind', label: 'Clean Air' },
        { iconKey: 'droplets', label: 'Clean Water' },
        { iconKey: 'zap', label: 'Clean Energy' },
        { iconKey: 'heart', label: 'Better Life' },
    ],
    coreIdentityLabel: 'Core Identity',
    coreIdentityP1:
        'Monoatom Labs develops breakthrough materials engineered for the future—graphene derivatives, functional nanomaterials, bio-inspired chemistries, and performance-enhancing additives.',
    coreIdentityP2:
        'Our innovations are designed to deliver superior strength, conductivity, durability, and environmental efficiency, enabling enterprises to rapidly transition into Industry 4.0.',
};

const VisionMissionNorthStar = ({ copy }) => {
    const c = { ...DEFAULT_COPY, ...(copy || {}) };
    return (
        <section className="py-24 px-6 bg-white text-neutral-900 relative overflow-hidden border-b border-neutral-200">
            <div className="max-w-5xl mx-auto relative z-10 text-center mb-24">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-8">
                    <Sparkles className="w-3 h-3" />
                    {c.visionBadge}
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8">
                    {c.visionTitleLine1} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600">
                        {c.visionTitleHighlight}
                    </span>
                </h2>
                <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
                    {c.visionBody}
                </p>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-3xl font-display font-medium mb-8 flex items-center gap-4 text-neutral-900">
                            <Target className="w-8 h-8 text-blue-600" />
                                {c.missionTitle}
                        </h3>
                        <p className="text-lg text-neutral-600 font-light leading-relaxed mb-10">
                                {c.missionBody}
                        </p>

                        <div className="grid grid-cols-2 gap-4">
                            {(Array.isArray(c.missionTiles) ? c.missionTiles : []).map((item, i) => {
                                const Icon = ICONS[item.iconKey] || Wind;
                                return (
                                <div
                                    key={i}
                                    className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-blue-300 transition-colors flex items-center gap-3"
                                >
                                        <Icon className="w-5 h-5 text-blue-600" />
                                        <span className="font-medium text-neutral-900">{item.label}</span>
                                </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-10 blur-lg"></div>
                        <div className="relative bg-white border border-neutral-200 rounded-2xl p-10 shadow-sm">
                            <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6 border-b border-neutral-100 pb-4">
                                {c.coreIdentityLabel}
                            </h4>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                {c.coreIdentityP1}
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                {c.coreIdentityP2}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMissionNorthStar;
