import React from 'react';
import { User, BarChart3 } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const LeadershipSection = () => {
    return (
        <section id="about" className="py-24 px-6 bg-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    number="03"
                    title="Leadership"
                    subtitle="Deep science meets industrial scale."
                    theme="light"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group p-10 border border-neutral-200 bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-start mb-8">
                            <div className="p-3 bg-white border border-neutral-200 shadow-sm rounded-full">
                                <User className="w-6 h-6 text-neutral-900" />
                            </div>
                            <div className="text-right">
                                <h3 className="text-2xl text-neutral-900 font-medium">Sushanth Paatnaik</h3>
                                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1">Co-Founder & CEO</p>
                            </div>
                        </div>

                        <div className="h-px bg-neutral-200 w-full mb-8 group-hover:bg-neutral-900 transition-colors"></div>

                        <p className="text-neutral-600 leading-relaxed mb-8">
                            Materials innovator and entrepreneur. 6-time President of India Awardee. Global recognitions include MIT TR35, TED India Speaker, NASA-recognized innovator. Focused on building next-generation technologies rooted in graphene, nanomaterials, and advanced chemical engineering.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['MIT TR35', 'TED Speaker', 'NASA Awardee', '6× President of India'].map(tag => (
                                <span key={tag} className="text-xs font-medium border border-neutral-200 bg-white px-3 py-1 text-neutral-600 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>

                    <div className="group p-10 border border-neutral-200 bg-neutral-50 hover:bg-white hover:shadow-xl transition-all duration-300">
                        <div className="flex justify-between items-start mb-8">
                            <div className="p-3 bg-white border border-neutral-200 shadow-sm rounded-full">
                                <BarChart3 className="w-6 h-6 text-neutral-900" />
                            </div>
                            <div className="text-right">
                                <h3 className="text-2xl text-neutral-900 font-medium">Aayush Bansal</h3>
                                <p className="text-xs text-neutral-500 uppercase tracking-widest font-bold mt-1">Co-Founder & Strategic Investor</p>
                            </div>
                        </div>

                        <div className="h-px bg-neutral-200 w-full mb-8 group-hover:bg-neutral-900 transition-colors"></div>

                        <p className="text-neutral-600 leading-relaxed mb-8">
                            Promoter of Kalika Steel, one of India's leading steel manufacturing groups. Computer Science Engineer with MBA in Technology Management. Expertise in large-scale industrial operations and market expansion, enabling bridge between breakthrough innovations and real-world manufacturing.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['Industrial Scaling', 'Strategic Investor', 'Market Expansion'].map(tag => (
                                <span key={tag} className="text-xs font-medium border border-neutral-200 bg-white px-3 py-1 text-neutral-600 rounded-full">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LeadershipSection;
