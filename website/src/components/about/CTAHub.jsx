import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Phone, Calculator, Handshake, FlaskConical, TrendingUp, Download, Calendar } from 'lucide-react';
import Button from '../ui/Button';

const CTAHub = () => {
    const ctaCards = [
        {
            audience: "Manufacturers",
            icon: Download,
            color: "from-blue-500 to-cyan-600",
            ctas: [
                { text: "Download Product Catalog", icon: FileText, type: "primary", link: "/contact" },
                { text: "Request Technical Specifications", icon: FileText, type: "secondary", link: "/contact" }
            ],
            description: "Get detailed specs, performance data, and application guides"
        },
        {
            audience: "Decision Makers",
            icon: TrendingUp,
            color: "from-purple-500 to-pink-600",
            ctas: [
                { text: "Schedule Consultation Call", icon: Phone, type: "primary", link: "/contact" },
                { text: "Use ROI Calculator", icon: Calculator, type: "secondary", link: "/products/graphacrete" }
            ],
            description: "Understand ROI and business impact with expert guidance"
        },
        {
            audience: "Partners",
            icon: Handshake,
            color: "from-green-500 to-emerald-600",
            ctas: [
                { text: "Explore Licensing Options", icon: FileText, type: "primary", link: "/partnership" },
                { text: "Discuss JV Opportunities", icon: Calendar, type: "secondary", link: "/contact" }
            ],
            description: "Two proven models: Technology Licensing or JV-SPV partnerships"
        },
        {
            audience: "Researchers",
            icon: FlaskConical,
            color: "from-orange-500 to-red-600",
            ctas: [
                { text: "Download White Papers", icon: Download, type: "primary", link: "/contact" },
                { text: "Request Sample Kit", icon: FlaskConical, type: "secondary", link: "/contact" }
            ],
            description: "Access technical documentation and sample materials"
        }
    ];

    const quickLinks = [
        { text: "View All Products", icon: FileText, link: "/products" },
        { text: "See Competitive Comparison", icon: TrendingUp, link: "/products/graphacrete" },
        { text: "Read Case Studies", icon: FileText, link: "/contact" },
        { text: "Download Certifications", icon: Download, link: "/contact" },
        { text: "Contact Technical Team", icon: Phone, link: "/contact" },
        { text: "Schedule Site Visit", icon: Calendar, link: "/contact" }
    ];

    return (
        <section className="py-24 px-6 bg-gradient-to-b from-neutral-50 to-white border-b border-neutral-200">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6">
                        <TrendingUp className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-bold text-blue-700 uppercase tracking-wide">Take Action</span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
                        What Would You Like to Do?
                    </h2>
                    <p className="text-xl text-neutral-600 max-w-3xl mx-auto font-light">
                        Choose your path based on your role and requirements
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {ctaCards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-900 hover:shadow-2xl transition-all"
                            >
                                <div className={`bg-gradient-to-br ${card.color} p-8 text-white`}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <Icon className="w-10 h-10" />
                                        <h3 className="text-2xl font-display font-bold">For {card.audience}</h3>
                                    </div>
                                    <p className="opacity-90 font-light">{card.description}</p>
                                </div>

                                <div className="p-8 space-y-4">
                                    {card.ctas.map((cta, idx) => {
                                        const CtaIcon = cta.icon;
                                        return (
                                            <Link key={idx} to={cta.link}>
                                                <button
                                                    className={`w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg font-bold transition-all ${
                                                        cta.type === 'primary'
                                                            ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                                                            : 'border-2 border-neutral-300 text-neutral-900 hover:border-neutral-900'
                                                    }`}
                                                >
                                                    <CtaIcon className="w-5 h-5" />
                                                    {cta.text}
                                                </button>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="bg-neutral-900 text-white rounded-2xl p-12 shadow-xl">
                    <h3 className="text-3xl font-display font-bold text-center mb-8">Quick Links</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        {quickLinks.map((link, index) => {
                            const LinkIcon = link.icon;
                            return (
                                <Link key={index} to={link.link}>
                                    <button
                                        className="w-full flex items-center gap-3 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-all border border-white/20 hover:border-white/40"
                                    >
                                        <LinkIcon className="w-5 h-5 flex-shrink-0" />
                                        <span className="text-left font-medium">{link.text}</span>
                                    </button>
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="mt-16 text-center p-10 bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl">
                    <h3 className="text-3xl font-display font-bold text-neutral-900 mb-4">
                        Not Sure Where to Start?
                    </h3>
                    <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto font-light">
                        Talk to our team to determine the best path forward for your specific requirements
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact">
                            <button className="bg-neutral-900 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-neutral-800 transition-all inline-flex items-center">
                                <Phone className="w-5 h-5 mr-2" />
                                Schedule Discovery Call
                            </button>
                        </Link>
                        <Link to="/contact">
                            <button className="border-2 border-neutral-900 text-neutral-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-neutral-100 transition-all inline-flex items-center">
                                <FileText className="w-5 h-5 mr-2" />
                                Send Us Your Requirements
                            </button>
                        </Link>
                    </div>

                    <div className="mt-8 pt-8 border-t border-blue-200">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                            <div>
                                <div className="font-bold text-neutral-900 mb-2">📧 Email</div>
                                <div className="text-neutral-600 font-light">info@monoatomlabs.com</div>
                            </div>
                            <div>
                                <div className="font-bold text-neutral-900 mb-2">📞 Phone</div>
                                <div className="text-neutral-600 font-light">+91 989 819 9809</div>
                            </div>
                            <div>
                                <div className="font-bold text-neutral-900 mb-2">📍 Location</div>
                                <div className="text-neutral-600 font-light">3rd Floor, iHub Gujarat, Ahmedabad - 380015</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTAHub;
