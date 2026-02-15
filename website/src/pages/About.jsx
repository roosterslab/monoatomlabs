import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/ui/PageHeader';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import TrustValidation from '../components/about/TrustValidation';
import CustomerJourney from '../components/home/CustomerJourney';
import CTAHub from '../components/about/CTAHub';
import { Target, Eye, Globe, Zap, Droplets, Wind, Heart, Users, GraduationCap, Award, Briefcase, Microscope, FlaskConical, Settings, ClipboardCheck, Building2 } from 'lucide-react';

const CapabilityBlock = ({ icon: Icon, title, items }) => (
    <div className="p-8 bg-neutral-50 border border-neutral-200 flex flex-col h-full shadow-sm hover:border-neutral-300 transition-colors">
        <Icon className="w-10 h-10 text-neutral-600 mb-6" strokeWidth={1.5} />
        <h3 className="text-xl font-display font-medium text-neutral-900 mb-6">{title}</h3>
        <ul className="space-y-3 mt-auto">
            {items.map((item, i) => (
                <li key={i} className="flex items-start text-sm text-neutral-600">
                    <span className="w-1 h-1 bg-neutral-400 rounded-full mr-3 mt-2 shrink-0"></span>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            <PageHeader
                category="Company"
                title="About Monoatom Labs"
                subtitle="We envision a world where breakthrough materials enable cleaner air, purer water, sustainable energy, and enhanced quality of life for everyone."
            />

            {/* --- COMPANY OVERVIEW --- */}
            {/* Stats Overview */}
            <section className="border-b border-neutral-200">
                <div className="max-w-7xl mx-auto px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="p-8 bg-neutral-50 border border-neutral-200">
                            <span className="block text-sm text-neutral-500 uppercase tracking-wide mb-2">Founded</span>
                            <span className="text-3xl font-display text-neutral-900">2025</span>
                        </div>
                        <div className="p-8 bg-neutral-50 border border-neutral-200">
                            <span className="block text-sm text-neutral-500 uppercase tracking-wide mb-2">Headquarters</span>
                            <span className="text-3xl font-display text-neutral-900">Ahmedabad, Gujarat, India</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-24 px-6 border-b border-neutral-200">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Eye className="w-6 h-6 text-neutral-900" />
                                <h2 className="text-2xl font-display font-medium text-neutral-900">Our Vision</h2>
                            </div>
                            <p className="text-lg text-neutral-600 leading-relaxed mb-12">
                                Advanced Nanomaterials for Better Quality of Life. We see graphene and advanced nanomaterials as the foundation of a transformation that will touch every aspect of human life.
                            </p>

                            <div className="flex items-center gap-3 mb-6">
                                <Target className="w-6 h-6 text-neutral-900" />
                                <h2 className="text-2xl font-display font-medium text-neutral-900">Our Mission</h2>
                            </div>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                To create commercially viable graphene solutions for industrial applications. We develop, validate, and make commercial-scale manufacturing of graphene innovations to provide:
                            </p>

                            <div className="grid grid-cols-2 gap-4 mt-8">
                                <div className="p-4 bg-neutral-50 border border-neutral-200 flex items-center gap-3">
                                    <Wind className="w-5 h-5 text-neutral-500" />
                                    <span className="text-neutral-900 font-medium">Clean Air</span>
                                </div>
                                <div className="p-4 bg-neutral-50 border border-neutral-200 flex items-center gap-3">
                                    <Droplets className="w-5 h-5 text-neutral-500" />
                                    <span className="text-neutral-900 font-medium">Clean Water</span>
                                </div>
                                <div className="p-4 bg-neutral-50 border border-neutral-200 flex items-center gap-3">
                                    <Zap className="w-5 h-5 text-neutral-500" />
                                    <span className="text-neutral-900 font-medium">Clean Energy</span>
                                </div>
                                <div className="p-4 bg-neutral-50 border border-neutral-200 flex items-center gap-3">
                                    <Heart className="w-5 h-5 text-neutral-500" />
                                    <span className="text-neutral-900 font-medium">Better Life</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-neutral-50 p-8 border border-neutral-200">
                            <h3 className="text-xl font-display font-medium text-neutral-900 mb-6">Who We Are</h3>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                Monoatom Labs develops breakthrough materials engineered for the future—graphene derivatives, functional nanomaterials, bio-inspired chemistries, and performance-enhancing additives.
                            </p>
                            <p className="text-neutral-600 leading-relaxed">
                                Our innovations are designed to deliver superior strength, conductivity, durability, and environmental efficiency, enabling enterprises to rapidly transition into Industry 4.0.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Differentiators */}
            <section className="py-24 px-6 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading number="01" title="What Makes Us Different" theme="light" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        <div className="p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm">
                            <h3 className="text-xl font-display font-medium text-neutral-900 mb-4">Deep Scientific Expertise</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Our team combines materials science, chemical engineering, and nanotechnology expertise with research partners from prestigious institutions including IISc, IIT, and National Chemical Laboratory.
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm">
                            <h3 className="text-xl font-display font-medium text-neutral-900 mb-4">Industrial Scale Capability</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                We don't just innovate in the lab—we ensure every innovation can scale from prototype to mass manufacturing with pilot-scale facilities and process optimization.
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm">
                            <h3 className="text-xl font-display font-medium text-neutral-900 mb-4">Real-World Validation</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Our products undergo rigorous field trials and real-world testing before commercialization through NABL-certified laboratory testing and independent third-party validation.
                            </p>
                        </div>
                        <div className="p-8 bg-white border border-neutral-200 hover:border-neutral-300 transition-colors shadow-sm">
                            <h3 className="text-xl font-display font-medium text-neutral-900 mb-4">IP-Driven Innovation</h3>
                            <p className="text-neutral-600 leading-relaxed">
                                Proprietary technology and process IP protected through patents and trade secrets, including patented formulations and proprietary dispersion technologies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FOUNDERS & TEAM --- */}
            <section id="founders" className="py-24 px-6 border-b border-neutral-200 bg-white">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading number="02" title="Leadership Team" theme="light" subtitle="Built on decades of innovation expertise." />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                        {/* Sushanth Paatnaik */}
                        <div>
                            <div className="w-16 h-16 bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-6 rounded-sm shadow-sm">
                                <Award className="w-8 h-8 text-neutral-900" />
                            </div>
                            <h2 className="text-2xl font-display font-medium text-neutral-900 mb-2">Sushanth Paatnaik</h2>
                            <p className="text-sm text-neutral-500 font-medium uppercase tracking-wide mb-6">Co-Founder & CEO</p>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                Materials innovator and entrepreneur. 6-time President of India Awardee. Global recognitions include MIT TR35, TED India Speaker, NASA-recognized innovator. His innovation journey started at the age of 11. Focused on building next-generation technologies rooted in graphene, nanomaterials, and advanced chemical engineering with expertise in deep-tech commercialization and scaling science-driven ventures.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">6× President of India</span>
                                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">MIT TR35</span>
                                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">TED Speaker</span>
                                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">NASA Awardee</span>
                            </div>
                        </div>

                        {/* Aayush Bansal */}
                        <div>
                            <div className="w-16 h-16 bg-neutral-50 border border-neutral-200 flex items-center justify-center mb-6 rounded-sm shadow-sm">
                                <Briefcase className="w-8 h-8 text-neutral-900" />
                            </div>
                            <h2 className="text-2xl font-display font-medium text-neutral-900 mb-2">Aayush Bansal</h2>
                            <p className="text-sm text-neutral-500 font-medium uppercase tracking-wide mb-6">Co-Founder & Strategic Investor</p>
                            <p className="text-neutral-600 leading-relaxed mb-6">
                                Promoter of Kalika Steel, one of India's leading steel manufacturing groups. Computer Science Engineer with MBA in Technology Management from NMIMS University. With over 38 years of experience in steel manufacturing and clothing business, he brings expertise in large-scale industrial operations and market expansion, enabling bridge between breakthrough innovations and real-world manufacturing.
                            </p>
                            <div className="flex flex-wrap gap-2">
                                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">Kalika Steel Promoter</span>
                                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">Industrial Scale-up</span>
                                <span className="px-3 py-1 bg-neutral-100 text-xs text-neutral-600 border border-neutral-200">MBA Tech Management</span>
                            </div>
                        </div>
                    </div>

                    {/* Team Attributes Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 pt-16 border-t border-neutral-100">
                        <div className="p-6 border border-neutral-200 bg-neutral-50 shadow-sm">
                            <GraduationCap className="w-8 h-8 text-neutral-600 mb-6" strokeWidth={1.5} />
                            <h3 className="text-lg font-medium text-neutral-900 mb-2">Scientific Excellence</h3>
                            <p className="text-sm text-neutral-600">Materials science, chemical engineering, and nanotechnology experts from premier institutions.</p>
                        </div>
                        <div className="p-6 border border-neutral-200 bg-neutral-50 shadow-sm">
                            <Briefcase className="w-8 h-8 text-neutral-600 mb-6" strokeWidth={1.5} />
                            <h3 className="text-lg font-medium text-neutral-900 mb-2">Industrial Experience</h3>
                            <p className="text-sm text-neutral-600">Manufacturing, scale-up, and commercialization specialists with proven track records.</p>
                        </div>
                        <div className="p-6 border border-neutral-200 bg-neutral-50 shadow-sm">
                            <Users className="w-8 h-8 text-neutral-600 mb-6" strokeWidth={1.5} />
                            <h3 className="text-lg font-medium text-neutral-900 mb-2">Research Partnerships</h3>
                            <p className="text-sm text-neutral-600">Collaborations with IISc, IIT, and National Chemical Laboratory.</p>
                        </div>
                        <div className="p-6 border border-neutral-200 bg-neutral-50 shadow-sm">
                            <Globe className="w-8 h-8 text-neutral-600 mb-6" strokeWidth={1.5} />
                            <h3 className="text-lg font-medium text-neutral-900 mb-2">Global Recognition</h3>
                            <p className="text-sm text-neutral-600">Multiple Presidential awards, TED India, and international recognitions for innovation.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FACILITIES & CAPABILITIES --- */}
            <section id="facilities" className="py-24 px-6 border-b border-neutral-200 bg-neutral-50">
                <div className="max-w-7xl mx-auto">
                    <SectionHeading number="03" title="Facilities" theme="light" subtitle="State-of-the-art research and testing laboratories." />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
                        {/* Facility 01 */}
                        <div className="p-10 bg-white border border-neutral-200 shadow-sm flex flex-col h-full hover:border-neutral-300 transition-colors">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 flex items-center justify-center rounded-sm">
                                    <Microscope className="w-6 h-6 text-neutral-900" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Facility 01</span>
                                    <h3 className="text-xl font-display font-medium text-neutral-900">Nanomaterials R&D</h3>
                                </div>
                            </div>
                            <p className="text-neutral-600 mb-8 leading-relaxed">
                                Focused on graphene processing, dispersion technologies, and high-purity nano-additive development.
                            </p>
                            <ul className="space-y-4 mt-auto">
                                <li className="flex items-start text-neutral-700">
                                    <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-3 mt-2 shrink-0"></span>
                                    Surface chemistry modification
                                </li>
                                <li className="flex items-start text-neutral-700">
                                    <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-3 mt-2 shrink-0"></span>
                                    Advanced characterization (SEM, TEM, Raman)
                                </li>
                                <li className="flex items-start text-neutral-700">
                                    <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-3 mt-2 shrink-0"></span>
                                    Pilot-scale dispersion & functionalization units
                                </li>
                            </ul>
                        </div>

                        {/* Facility 02 */}
                        <div className="p-10 bg-white border border-neutral-200 shadow-sm flex flex-col h-full hover:border-neutral-300 transition-colors">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 flex items-center justify-center rounded-sm">
                                    <ClipboardCheck className="w-6 h-6 text-neutral-900" strokeWidth={1.5} />
                                </div>
                                <div>
                                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-widest">Facility 02</span>
                                    <h3 className="text-xl font-display font-medium text-neutral-900">Application & Testing</h3>
                                </div>
                            </div>
                            <p className="text-neutral-600 mb-8 leading-relaxed">
                                Designed for real-industry testing across coatings, concrete, composites, energy systems, and bio-chemical applications.
                            </p>
                            <ul className="space-y-4 mt-auto">
                                <li className="flex items-start text-neutral-700">
                                    <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-3 mt-2 shrink-0"></span>
                                    Mechanical & durability testing
                                </li>
                                <li className="flex items-start text-neutral-700">
                                    <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-3 mt-2 shrink-0"></span>
                                    Thermal & electrical conductivity labs
                                </li>
                                <li className="flex items-start text-neutral-700">
                                    <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full mr-3 mt-2 shrink-0"></span>
                                    Prototype fabrication & field-simulation setups
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Infrastructure Details */}
            <section className="py-24 px-6 bg-white border-b border-neutral-200">
                <div className="max-w-4xl mx-auto">
                    <SectionHeading number="04" title="Research Equipment" theme="light" subtitle="Our state-of-the-art facilities combine advanced instrumentation with expert personnel." />

                    <div className="mt-12 bg-white border border-neutral-200 p-8 shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                            {[
                                'Graphene synthesis and processing',
                                'Nanomaterial functionalization',
                                'Advanced characterization tools',
                                'Dispersion technology systems',
                                'Coating application equipment',
                                'Material testing apparatus',
                                'Process development labs',
                                'Quality control systems'
                            ].map((item, i) => (
                                <div key={i} className="flex items-center py-2 border-b border-neutral-100 last:border-0 md:last:border-b [&:nth-last-child(2)]:border-0">
                                    <span className="w-1.5 h-1.5 bg-neutral-400 rounded-full mr-3"></span>
                                    <span className="text-neutral-600">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust & Validation */}
            <TrustValidation />

            {/* Customer Journey */}
            <CustomerJourney />

            {/* CTA Hub */}
            <CTAHub />
        </div>
    );
};

export default About;
