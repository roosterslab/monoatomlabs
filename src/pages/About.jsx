import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import TrustValidation from '../components/about/TrustValidation';
import CTAHub from '../components/about/CTAHub';
import TechnologyCapabilities from '../components/about/TechnologyCapabilities';
import PartnershipModels from '../components/home/PartnershipModels';
import { Target, Eye, Globe, Zap, Droplets, Wind, Heart, Users, GraduationCap, Award, Briefcase, Microscope, FlaskConical, Settings, ClipboardCheck, Building2, CheckCircle2, Factory, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

// Reusable "Tech Spec" List Item
const SpecItem = ({ children }) => (
    <li className="flex items-start text-neutral-600 gap-3 group">
        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2.5 group-hover:bg-blue-600 group-hover:scale-125 transition-all"></span>
        <span className="group-hover:text-neutral-900 transition-colors">{children}</span>
    </li>
);

// Executive Profile Badge
const AccoladeBadge = ({ children }) => (
    <span className="inline-flex items-center px-2.5 py-1 rounded bg-neutral-100 border border-neutral-200 text-[10px] font-mono font-medium text-neutral-600 uppercase tracking-wide">
        {children}
    </span>
);

const About = () => {
    return (
        <div className="min-h-screen">
            <PageHeader
                category="Company"
                title="About Monoatom Labs"
                subtitle="We envision a world where breakthrough materials enable cleaner air, purer water, and sustainable energy."
            />

            {/* SECTION 1: KEY METRICS STRIP (Floating Glass Effect) */}
            <div className="relative -mt-8 mb-24 z-10 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-8 grid grid-cols-2 lg:grid-cols-6 gap-8 divide-x divide-neutral-100/50">
                        {[
                            { value: '100+', label: 'Installations', color: 'text-blue-600' },
                            { value: '50M+', label: 'kg CO₂ Saved', color: 'text-emerald-600' },
                            { value: '5', label: 'Core Products', color: 'text-indigo-600' },
                            { value: '15+', label: 'Validations', color: 'text-purple-600' },
                            { value: '2', label: 'R&D Facilities', color: 'text-amber-600' },
                            { value: '99.5%', label: 'Satisfaction', color: 'text-pink-600' },
                        ].map((stat, i) => (
                            <div key={i} className={`text-center ${i % 2 !== 0 ? 'border-none md:border-l lg:border-none' : ''}`}> {/* Responsive border fix logic simplified */}
                                <div className={`text-3xl md:text-4xl font-display font-bold ${stat.color} mb-1`}>{stat.value}</div>
                                <div className="text-[10px] font-mono text-neutral-400 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* SECTION 2: VISION & MISSION (North Star Layout) */}
            <section className="py-24 px-6 bg-white text-neutral-900 relative overflow-hidden border-b border-neutral-200">
                <div className="max-w-5xl mx-auto relative z-10 text-center mb-24">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-8">
                        <Sparkles className="w-3 h-3" />
                        Our Vision
                    </div>
                    <h2 className="text-4xl md:text-6xl font-display font-medium leading-tight mb-8">
                        Advanced Nanomaterials for <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-indigo-600">Better Quality of Life</span>
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed font-light">
                        We see graphene and advanced nanomaterials as the foundation of a transformation that will touch every aspect of human life—from the air we breathe to the energy we consume.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h3 className="text-3xl font-display font-medium mb-8 flex items-center gap-4 text-neutral-900">
                                <Target className="w-8 h-8 text-blue-600" />
                                Our Mission
                            </h3>
                            <p className="text-lg text-neutral-600 font-light leading-relaxed mb-10">
                                To create commercially viable graphene solutions for industrial applications. We develop, validate, and commercialize graphene innovations to provide:
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { icon: Wind, label: "Clean Air" },
                                    { icon: Droplets, label: "Clean Water" },
                                    { icon: Zap, label: "Clean Energy" },
                                    { icon: Heart, label: "Better Life" }
                                ].map((item, i) => (
                                    <div key={i} className="p-4 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-blue-300 transition-colors flex items-center gap-3">
                                        <item.icon className="w-5 h-5 text-blue-600" />
                                        <span className="font-medium text-neutral-900">{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-10 blur-lg"></div>
                            <div className="relative bg-white border border-neutral-200 rounded-2xl p-10 shadow-sm">
                                <h4 className="text-sm font-mono text-neutral-500 uppercase tracking-widest mb-6 border-b border-neutral-100 pb-4">Core Identity</h4>
                                <p className="text-neutral-600 leading-relaxed mb-6">
                                    Monoatom Labs develops breakthrough materials engineered for the future—graphene derivatives, functional nanomaterials, bio-inspired chemistries, and performance-enhancing additives.
                                </p>
                                <p className="text-neutral-600 leading-relaxed">
                                    Our innovations are designed to deliver superior strength, conductivity, durability, and environmental efficiency, enabling enterprises to rapidly transition into Industry 4.0.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: DIFFERENTIATORS (Cards) */}
            <section className="py-24 px-6 bg-neutral-50 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 border border-neutral-300 text-neutral-600 text-xs font-mono font-medium tracking-wider uppercase mb-6">
                            01 — Why Us
                        </div>
                        <h2 className="text-4xl font-display font-medium text-neutral-900">What Makes Us Different</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { title: "Deep Scientific Expertise", desc: "Combined materials science, chemical engineering, and nanotechnology expertise from IISc, IIT, and NCL." },
                            { title: "Industrial Scale Capability", desc: "Scaling from prototype to mass manufacturing with pilot-scale facilities and process optimization." },
                            { title: "Real-World Validation", desc: "Rigorous field trials, NABL-certified lab testing, and independent third-party validation." },
                            { title: "IP-Driven Innovation", desc: "Proprietary technology, formulation patents, and trade secrets protecting our dispersion technologies." }
                        ].map((item, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all group">
                                <h3 className="text-lg font-bold text-neutral-900 mb-4 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                                <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 4: LEADERSHIP (Executive Profile Style) */}
            <section id="founders" className="py-24 px-6 bg-transparent text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 border-b border-neutral-800 pb-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-400 text-xs font-mono font-medium tracking-wider uppercase mb-6">
                            02 — Leadership
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-medium mb-4">Leadership Team</h2>
                        <p className="text-neutral-400 max-w-2xl text-lg font-light">Built on decades of innovation expertise and industrial excellence.</p>
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
                                Materials innovator and entrepreneur. His innovation journey started at age 11. Focused on building next-generation technologies rooted in graphene, nanomaterials, and advanced chemical engineering. Experts in deep-tech commercialization and scaling science-driven ventures.
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
                                    <p className="text-emerald-400 font-mono text-sm uppercase tracking-wider">Co-Founder & Strategic Investor</p>
                                </div>
                                <div className="p-3 bg-neutral-800 rounded-lg border border-neutral-700 group-hover:border-emerald-500/50 transition-colors">
                                    <Briefcase className="w-6 h-6 text-emerald-400" />
                                </div>
                            </div>

                            <p className="text-neutral-300 leading-relaxed font-light mb-8 pr-8">
                                Promoter of Kalika Steel. Computer Science Engineer with MBA in Technology Management. With over 38 years of experience in steel manufacturing and large-scale industrial operations, he bridges the gap between breakthrough innovations and real-world manufacturing.
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
                            { icon: GraduationCap, title: "Scientific Excellence", desc: "Materials science, chem e, and nano experts from premier institutions." },
                            { icon: Factory, title: "Industrial Experience", desc: "Manufacturing, scale-up, and commercialization specialists." },
                            { icon: Users, title: "Research Partnerships", desc: "Collaborations with IISc, IIT, and National Chemical Laboratory." },
                            { icon: Globe, title: "Global Recognition", desc: "Multiple international recognitions for innovation and impact." }
                        ].map((item, i) => (
                            <div key={i} className="bg-neutral-900 p-8 hover:bg-neutral-800 transition-colors group">
                                <item.icon className="w-8 h-8 text-neutral-500 group-hover:text-white mb-6 transition-colors" strokeWidth={1.5} />
                                <h4 className="text-white font-medium mb-2">{item.title}</h4>
                                <p className="text-sm text-neutral-400 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SECTION 5: FACILITIES (Tech Specs Grid) */}
            <section id="facilities" className="py-24 px-6 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6">
                                03 — Infrastructure
                            </div>
                            <h2 className="text-4xl font-display font-medium text-neutral-900">Facilities & Capabilities</h2>
                        </div>
                        <p className="text-neutral-500 max-w-md text-right md:text-left">
                            State-of-the-art research, testing, and manufacturing facilities designed for scaling deep-tech.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Facility 01 */}
                        <div className="border border-neutral-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-neutral-50/50">
                            <div className="flex items-center justify-between mb-8 pb-8 border-b border-neutral-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center text-blue-600 shadow-sm">
                                        <Microscope className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Unit 01</div>
                                        <h3 className="text-xl font-bold text-neutral-900">Nanomaterials R&D</h3>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-white border border-neutral-200 rounded text-xs font-medium text-neutral-500">Operational</div>
                            </div>

                            <p className="text-neutral-600 mb-8 font-light">
                                Focused on graphene processing, dispersion technologies, and high-purity nano-additive development.
                            </p>

                            <ul className="space-y-2">
                                <SpecItem>Surface chemistry modification</SpecItem>
                                <SpecItem>Advanced characterization (SEM, TEM, Raman)</SpecItem>
                                <SpecItem>Pilot-scale dispersion & functionalization</SpecItem>
                            </ul>
                        </div>

                        {/* Facility 02 */}
                        <div className="border border-neutral-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-neutral-50/50">
                            <div className="flex items-center justify-between mb-8 pb-8 border-b border-neutral-200">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-white rounded-xl border border-neutral-200 flex items-center justify-center text-blue-600 shadow-sm">
                                        <ClipboardCheck className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Unit 02</div>
                                        <h3 className="text-xl font-bold text-neutral-900">Application & Testing</h3>
                                    </div>
                                </div>
                                <div className="px-3 py-1 bg-white border border-neutral-200 rounded text-xs font-medium text-neutral-500">Operational</div>
                            </div>

                            <p className="text-neutral-600 mb-8 font-light">
                                Real-industry testing for coatings, concrete, composites, energy systems, and bio-chemical applications.
                            </p>

                            <ul className="space-y-2">
                                <SpecItem>Mechanical & durability testing</SpecItem>
                                <SpecItem>Thermal & electrical conductivity labs</SpecItem>
                                <SpecItem>Prototype fabrication & field-simulation</SpecItem>
                            </ul>
                        </div>
                    </div>

                    {/* Equipment Specs */}
                    <div className="mt-8 border border-neutral-200 rounded-2xl p-8 bg-white">
                        <h4 className="text-sm font-mono text-neutral-400 uppercase tracking-widest mb-6">Equipment Specs</h4>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                'Graphene synthesis', 'Process development',
                                'Nanomaterial functionalization', 'Quality control systems',
                                'Advanced characterization', 'Coating application',
                                'Dispersion technology', 'Material testing'
                            ].map((item, i) => (
                                <div key={i} className="px-4 py-3 bg-neutral-50 rounded border border-neutral-100 text-sm text-neutral-600">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <TechnologyCapabilities />
            <PartnershipModels />
            <TrustValidation />
            <CTAHub />
        </div>
    );
};

export default About;
