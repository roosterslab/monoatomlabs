import React from 'react';
import { ArrowRight, FileText, Calendar, MessageSquare, Phone, Mail } from 'lucide-react';
import { DarkHexBackground } from '../backgrounds';

const CTAHub = () => {
    return (
        <section className="py-24 px-6 bg-black border-t border-neutral-800 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            {/* Giant glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

                    {/* Primary Action Card */}
                    <div className="bg-neutral-900/50 border border-neutral-800 p-10 md:p-16 rounded-3xl backdrop-blur-md flex flex-col justify-between group hover:border-brand-500/30 transition-all duration-500">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 border border-brand-500/20 text-xs font-bold uppercase tracking-wider mb-8">
                                <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                                Recommended
                            </div>

                            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6 leading-tight">
                                Ready to deploy<br />
                                <span className="text-neutral-500">Infrastructure 2.0?</span>
                            </h2>
                            <p className="text-xl text-neutral-400 max-w-md mb-12">
                                Start with a pilot program. Verify performance on your site with zero risk.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-white text-black rounded-xl font-bold hover:bg-neutral-200 transition-colors">
                                Book Pilot Demo <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="flex-1 flex items-center justify-center gap-3 px-8 py-5 bg-neutral-800 text-white border border-neutral-700 rounded-xl font-bold hover:bg-neutral-700 transition-colors">
                                Talk to Engineer <MessageSquare className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    {/* Secondary Actions Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="bg-neutral-900/30 border border-neutral-800 p-8 rounded-3xl hover:bg-neutral-800/50 hover:border-neutral-700 transition-all cursor-pointer group/card flex flex-col justify-between min-h-[240px]">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover/card:scale-110 transition-transform">
                                <FileText className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Technical Specs</h3>
                                <p className="text-sm text-neutral-500 mb-6">Download detailed datasheets.</p>
                                <span className="text-brand-400 text-sm font-bold flex items-center gap-2">Download PDF <ArrowRight className="w-4 h-4" /></span>
                            </div>
                        </div>

                        <div className="bg-neutral-900/30 border border-neutral-800 p-8 rounded-3xl hover:bg-neutral-800/50 hover:border-neutral-700 transition-all cursor-pointer group/card flex flex-col justify-between min-h-[240px]">
                            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover/card:scale-110 transition-transform">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Sales Inquiry</h3>
                                <p className="text-sm text-neutral-500 mb-6">Volume pricing & quotes.</p>
                                <span className="text-brand-400 text-sm font-bold flex items-center gap-2">Contact Sales <ArrowRight className="w-4 h-4" /></span>
                            </div>
                        </div>

                        <div className="col-span-1 sm:col-span-2 bg-gradient-to-r from-brand-900/20 to-neutral-900/30 border border-neutral-800 p-8 rounded-3xl flex items-center justify-between group/card hover:border-brand-500/20 transition-all">
                            <div className="flex items-center gap-6">
                                <div className="hidden sm:flex w-12 h-12 rounded-full border-2 border-brand-500/20 items-center justify-center">
                                    <Mail className="w-5 h-5 text-brand-400" />
                                </div>
                                <div>
                                    <div className="text-sm text-brand-400 font-bold uppercase tracking-wider mb-1">Direct Line</div>
                                    <div className="text-xl text-white font-mono">info@monoatoms.com</div>
                                </div>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover/card:bg-brand-500 group-hover/card:text-black transition-all">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTAHub;
