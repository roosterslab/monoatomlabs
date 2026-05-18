import React from 'react';
import { Globe, Users, GraduationCap, Award, Briefcase, Factory } from 'lucide-react';

const AccoladeBadge = ({ children }) => (
    <span className="inline-flex items-center px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-[10px] font-mono font-medium text-neutral-600 uppercase tracking-wide">
        {children}
    </span>
);

const Leadership = () => {
    return (
        <section id="founders" className="py-24 px-6 bg-transparent text-white">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 border-b border-neutral-800 pb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-400 text-xs font-mono font-medium tracking-wider uppercase mb-6">
                        02 — Leadership
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-medium mb-4">Leadership Team</h2>
                    <p className="text-neutral-400 max-w-2xl text-lg font-light">
                        Built on decades of innovation expertise and industrial excellence.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 mb-24">
                    {/* Sushanth Paatnaik */}
                    <div className="group">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-3xl font-display font-medium mb-1">Sushanth Paatnaik</h3>
                                <p className="text-blue-400 font-mono text-sm uppercase tracking-wider">Co-Founder & CEO</p>
                            </div>
                            <div className="p-3 bg-neutral-800 rounded-lg border border-neutral-700 group-hover:border-blue-500/50 transition-colors">
                                <Award className="w-6 h-6 text-blue-400" />
                            </div>
                        </div>

                        <p className="text-neutral-300 leading-relaxed font-light mb-8 pr-8">
                            Materials innovator and entrepreneur. His innovation journey started at age 11. Focused on
                            building next-generation technologies rooted in graphene, nanomaterials, and advanced chemical
                            engineering. Experts in deep-tech commercialization and scaling science-driven ventures.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <AccoladeBadge>6× President of India Awardee</AccoladeBadge>
                            <AccoladeBadge>MIT TR35</AccoladeBadge>
                            <AccoladeBadge>TED Speaker</AccoladeBadge>
                            <AccoladeBadge>NASA Awardee</AccoladeBadge>
                        </div>
                    </div>

                    {/* Aayush Bansal */}
                    <div className="group lg:pl-12 lg:border-l border-neutral-800">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h3 className="text-3xl font-display font-medium mb-1">Aayush Bansal</h3>
                                <p className="text-emerald-400 font-mono text-sm uppercase tracking-wider">
                                    Co-Founder & Strategic Investor
                                </p>
                            </div>
                            <div className="p-3 bg-neutral-800 rounded-lg border border-neutral-700 group-hover:border-emerald-500/50 transition-colors">
                                <Briefcase className="w-6 h-6 text-emerald-400" />
                            </div>
                        </div>

                        <p className="text-neutral-300 leading-relaxed font-light mb-8 pr-8">
                            Promoter of Kalika Steel. Computer Science Engineer with MBA in Technology Management. With over
                            38 years of experience in steel manufacturing and large-scale industrial operations, he bridges
                            the gap between breakthrough innovations and real-world manufacturing.
                        </p>

                        <div className="flex flex-wrap gap-2">
                            <AccoladeBadge>Kalika Steel Promoter</AccoladeBadge>
                            <AccoladeBadge>Industrial Scale-up</AccoladeBadge>
                            <AccoladeBadge>MBA Tech Management</AccoladeBadge>
                        </div>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="grid md:grid-cols-4 gap-px bg-neutral-800 border border-neutral-800 rounded-2xl overflow-hidden">
                    {[
                        {
                            icon: GraduationCap,
                            title: 'Scientific Excellence',
                            desc: 'Materials science, chem e, and nano experts from premier institutions.',
                        },
                        {
                            icon: Factory,
                            title: 'Industrial Experience',
                            desc: 'Manufacturing, scale-up, and commercialization specialists.',
                        },
                        {
                            icon: Users,
                            title: 'Research Partnerships',
                            desc: 'Collaborations with IISc, IIT, and National Chemical Laboratory.',
                        },
                        {
                            icon: Globe,
                            title: 'Global Recognition',
                            desc: 'Multiple international recognitions for innovation and impact.',
                        },
                    ].map((item, i) => (
                        <div key={i} className="bg-neutral-900 p-8 hover:bg-neutral-800 transition-colors group">
                            <item.icon
                                className="w-8 h-8 text-neutral-500 group-hover:text-white mb-6 transition-colors"
                                strokeWidth={1.5}
                            />
                            <h4 className="text-white font-medium mb-2">{item.title}</h4>
                            <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
