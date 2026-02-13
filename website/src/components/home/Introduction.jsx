
import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import { Wind, Droplets, Zap, Heart } from 'lucide-react';

const themeStyles = {
    cyan: { icon: 'text-cyan-600', bg: 'bg-cyan-50', border: 'group-hover:border-cyan-400', glow: 'bg-cyan-500/10' },
    blue: { icon: 'text-blue-600', bg: 'bg-blue-50', border: 'group-hover:border-blue-400', glow: 'bg-blue-500/10' },
    amber: { icon: 'text-amber-600', bg: 'bg-amber-50', border: 'group-hover:border-amber-400', glow: 'bg-amber-500/10' },
    rose: { icon: 'text-rose-600', bg: 'bg-rose-50', border: 'group-hover:border-rose-400', glow: 'bg-rose-500/10' }
};

const PillarStep = ({ icon: Icon, title, subtitle, color }) => {
    const theme = themeStyles[color] || themeStyles.cyan;

    return (
        <div className="relative group cursor-pointer">
            {/* Concentric Circles Background with Color Glow */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] rounded-full border border-neutral-100 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out scale-90 group-hover:scale-100 ${theme.glow}`}></div>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-neutral-100 opacity-50 group-hover:opacity-100 transition-all duration-700 delay-75`}></div>

            {/* Main Circular Container */}
            <div className={`relative w-full aspect-square rounded-full border border-neutral-200 bg-white hover:shadow-xl transition-all duration-500 flex flex-col items-center justify-center p-6 text-center z-10 ${theme.border}`}>
                <div className={`mb-4 text-neutral-400 group-hover:${theme.icon} transition-colors duration-500 transform group-hover:scale-110`}>
                    <Icon strokeWidth={1.5} className="w-10 h-10" />
                </div>

                <h3 className="text-xs font-bold tracking-[0.2em] text-neutral-800 uppercase mb-2 group-hover:text-black transition-colors">
                    {title}
                </h3>

                <p className="text-[10px] font-medium text-neutral-400 uppercase tracking-wider group-hover:text-neutral-600 transition-colors">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

const Introduction = () => {
    return (
        <section className="py-24 px-6 bg-white border-b border-neutral-200 relative overflow-hidden">
            {/* Background Subtle Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem]"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-stretch">
                    <div className="flex flex-col justify-between">
                        <SectionHeading
                            number="01"
                            title="Our Mission"
                            subtitle={<>Advanced Nanomaterials for <br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-500">Better Quality of Life</span></>}
                            theme="light"
                        />
                        <div className="hidden lg:block h-[1px] w-full bg-neutral-100 mt-12"></div>
                    </div>

                    <div className="pt-4">
                        <p className="text-2xl text-neutral-800 font-light leading-relaxed mb-12">
                            We create commercially viable graphene solutions that address humanity's most pressing challenges across four critical pillars of sustainable development.
                        </p>

                        {/* Pillars Visualization */}
                        <div className="relative mt-12">
                            {/* Connecting Line (Hidden for circular layout as it might be cleaner) */}
                            {/* <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-neutral-100 -z-10 hidden md:block"></div> */}

                            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 max-w-lg mx-auto md:mx-0">
                                <PillarStep
                                    icon={Wind}
                                    title="Clean Air"
                                    subtitle="Carbon Capture"
                                    color="cyan"
                                />
                                <PillarStep
                                    icon={Droplets}
                                    title="Clean Water"
                                    subtitle="Desalination"
                                    color="blue"
                                />
                                <PillarStep
                                    icon={Zap}
                                    title="Clean Energy"
                                    subtitle="Storage & Efficiency"
                                    color="amber"
                                />
                                <PillarStep
                                    icon={Heart}
                                    title="Better Life"
                                    subtitle="Health & Safety"
                                    color="rose"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Introduction;
