import React from 'react';
import { Microscope, Factory, TrendingUp, Award, CheckCircle2, Zap, BarChart3 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const ThreePillars = () => {
    return (
        <section className="py-24 px-6 bg-white border-b border-neutral-200 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-neutral-100 rounded-full blur-3xl opacity-50"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <SectionHeading
                    number="01"
                    title="The MonoAtoms Edge"
                    subtitle="Bridging the gap between atomic potential and industrial scale."
                    theme="light"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-16 auto-rows-[minmax(200px,auto)]">

                    {/* PILLAR 1: Deep Science (Tall Dark Card) - LEFT */}
                    <div className="lg:col-span-5 lg:row-span-2 bg-neutral-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden group flex flex-col justify-between shadow-2xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500">
                        {/* Decorative Background */}
                        <div className="absolute top-0 right-0 p-12 opacity-5 scale-150 transform group-hover:rotate-12 transition-transform duration-1000 pointer-events-none">
                            <Microscope size={240} strokeWidth={0.5} />
                        </div>
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                        <div className="absolute bottom-0 left-0 w-full h-2/3 bg-gradient-to-t from-black to-transparent pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur border border-white/20 text-xs font-medium tracking-wider uppercase mb-8">
                                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                                Lab-to-Life
                            </div>

                            <h3 className="text-4xl md:text-5xl font-display font-medium mb-6 leading-tight">
                                Deep Science<br />
                                <span className="text-neutral-500">Heritage</span>
                            </h3>

                            <p className="text-neutral-400 text-lg leading-relaxed mb-8 max-w-sm">
                                Born from 14+ years of rigorous R&D. We don't just use graphene; we engineer it.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-4 border-t border-white/10 pt-8">
                            {[
                                { text: "6× President Awards", icon: Award },
                                { text: "NASA Recognized Tech", icon: Zap },
                                { text: "NABL Validated", icon: CheckCircle2 }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group/item">
                                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover/item:border-brand-500/50 group-hover/item:bg-brand-500/10 transition-colors">
                                        <item.icon className="w-5 h-5 text-neutral-400 group-hover/item:text-brand-400 transition-colors" />
                                    </div>
                                    <span className="text-lg text-neutral-200 font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* PILLAR 2: Manufacturing (Wide Light Card) - RIGHT TOP */}
                    <div className="lg:col-span-7 bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 hover:border-neutral-300 hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-100/50 transition-colors"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100">
                                    <Factory className="w-7 h-7" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-500 text-xs font-bold uppercase tracking-wide">
                                    Industrial Scale
                                </div>
                            </div>

                            <h3 className="text-3xl font-display font-bold text-neutral-900 mb-4">Manufacturing Mastery</h3>
                            <p className="text-neutral-500 mb-8 max-w-lg text-lg">
                                We've solved the "Graphene Bottleneck"—scaling from grams to tons without compromising quality.
                            </p>

                            <div className="flex gap-4">
                                <div className="flex-1 p-5 bg-neutral-50 rounded-2xl border border-neutral-100 group-hover:border-blue-200 transition-colors">
                                    <div className="text-4xl font-display font-bold text-neutral-900 mb-1">Ton</div>
                                    <div className="text-xs text-neutral-500 uppercase tracking-wide font-bold">Scale Capacity</div>
                                </div>
                                <div className="flex-1 p-5 bg-neutral-50 rounded-2xl border border-neutral-100 group-hover:border-blue-200 transition-colors">
                                    <div className="text-4xl font-display font-bold text-neutral-900 mb-1">99.9%</div>
                                    <div className="text-xs text-neutral-500 uppercase tracking-wide font-bold">Purity Control</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* PILLAR 3: Economics (Wide Gradient Card) - RIGHT BOTTOM */}
                    <div className="lg:col-span-7 bg-gradient-to-br from-neutral-50 via-white to-emerald-50/30 border border-neutral-200 rounded-3xl p-8 md:p-12 hover:border-emerald-200 hover:shadow-xl transition-all duration-300 relative group overflow-hidden">
                        <div className="absolute bottom-0 right-0 w-64 h-64 bg-emerald-50/50 rounded-full blur-[80px] translate-y-1/2 translate-x-1/2"></div>

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100">
                                    <TrendingUp className="w-7 h-7" />
                                </div>
                                <div className="px-3 py-1 rounded-full bg-emerald-100/50 text-emerald-700 text-xs font-bold uppercase tracking-wide border border-emerald-200/50">
                                    Market Viable
                                </div>
                            </div>

                            <h3 className="text-3xl font-display font-bold text-neutral-900 mb-4">Commanding Economics</h3>
                            <p className="text-neutral-500 mb-8 max-w-lg text-lg">
                                Not just better performance—better pricing. We deliver ROI that makes adoption an obvious choice.
                            </p>

                            <div className="flex flex-wrap gap-3">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-700 rounded-lg text-sm font-bold border border-emerald-100 shadow-sm">
                                    <BarChart3 className="w-4 h-4" /> 60% Cost Reduction
                                </span>
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-700 rounded-lg text-sm font-bold border border-emerald-100 shadow-sm">
                                    <Zap className="w-4 h-4" /> 18-Mo Payback
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ThreePillars;
