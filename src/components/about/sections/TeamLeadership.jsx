import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Factory, Users, Globe, ArrowRight } from 'lucide-react';

const AccoladeBadge = ({ children }) => (
    <span className="inline-flex items-center px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-[10px] font-mono font-medium text-neutral-600 uppercase tracking-wide">
        {children}
    </span>
);

const compositionIcons = [GraduationCap, Factory, Users, Globe];

const TeamLeadership = ({ copy }) => {
    return (
        <>
            <section id="team" className="py-24 px-6 bg-white text-neutral-900 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 border-b border-neutral-200 pb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-500 text-xs font-mono font-medium tracking-wider uppercase mb-6">
                            01 — Leadership
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-4">{copy.heading}</h2>
                        <p className="text-neutral-600 max-w-2xl text-lg font-light">{copy.subheading}</p>
                    </div>

                    <div className="space-y-24">
                        {copy.leaders.map((leader) => (
                            <div key={leader.name} className="grid md:grid-cols-5 gap-12 items-start">
                                <div className="md:col-span-2">
                                    <img
                                        src={leader.image}
                                        alt={leader.name}
                                        loading="lazy"
                                        className="w-full aspect-[4/5] object-cover bg-neutral-100 border border-neutral-200 rounded-2xl"
                                    />
                                </div>

                                <div className="md:col-span-3">
                                    <h3 className="text-3xl font-display font-medium text-neutral-900 mb-1">{leader.name}</h3>
                                    <p className="text-neutral-500 font-mono text-sm uppercase tracking-wider mb-8">{leader.role}</p>
                                    <p className="text-neutral-600 leading-relaxed font-light mb-8">{leader.bio}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {leader.tags.map((tag) => (
                                            <AccoladeBadge key={tag}>{tag}</AccoladeBadge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-neutral-50 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto">
                    <h3 className="text-2xl font-display font-medium text-neutral-900 mb-10">Team Composition</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-neutral-200 border border-neutral-200 rounded-2xl overflow-hidden">
                        {copy.composition.map((item, i) => {
                            const Icon = compositionIcons[i];
                            return (
                                <div key={item.title} className="bg-white p-8 hover:bg-neutral-50 transition-colors group">
                                    <Icon className="w-8 h-8 text-neutral-500 group-hover:text-neutral-900 mb-6 transition-colors" strokeWidth={1.5} />
                                    <h4 className="text-neutral-900 font-medium mb-2">{item.title}</h4>
                                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-white text-neutral-900 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h3 className="text-2xl font-display font-medium text-neutral-900 mb-2">{copy.recognitions.title}</h3>
                        <p className="text-neutral-600">{copy.recognitions.subtitle}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {copy.recognitions.items.map(({ award, highlight }) => (
                            <div
                                key={award}
                                className={`px-4 py-4 border text-sm text-center transition-all hover:shadow-sm ${highlight ? 'bg-neutral-900 text-white border-neutral-900' : 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400'}`}
                            >
                                {award}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-24 px-6 bg-neutral-950 text-white">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                    <div className="max-w-2xl">
                        <h3 className="text-3xl md:text-4xl font-display font-medium mb-4">{copy.nextSteps.title}</h3>
                        <p className="text-neutral-400 text-lg font-light">{copy.nextSteps.subtitle}</p>
                    </div>
                    <div className="flex flex-wrap gap-4">
                        <Link
                            to={copy.nextSteps.primary.to}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors"
                        >
                            {copy.nextSteps.primary.label}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                        <Link
                            to={copy.nextSteps.secondary.to}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-neutral-700 text-sm font-medium text-white hover:bg-neutral-800 transition-colors"
                        >
                            {copy.nextSteps.secondary.label}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TeamLeadership;
