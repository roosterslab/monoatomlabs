import React from 'react';
import { Link } from 'react-router-dom';
import {
    FileText, Phone, Calculator, Handshake, FlaskConical,
    TrendingUp, Download, Calendar, ArrowRight, Mail, MapPin, Sparkles
} from 'lucide-react';
import Button from '../ui/Button';

const CTAHub = () => {
    const ctaCards = [
        {
            audience: "Manufacturers",
            icon: Download,
            ctas: [
                { text: "Download Catalog", icon: FileText, link: "/contact" },
                { text: "Tech Specs", icon: FileText, link: "/contact" }
            ],
            description: "Get detailed specs, performance data, and application guides for integration."
        },
        {
            audience: "Decision Makers",
            icon: TrendingUp,
            ctas: [
                { text: "Schedule Consultation", icon: Phone, link: "/contact" },
                { text: "ROI Calculator", icon: Calculator, link: "/products/graphacrete" }
            ],
            description: "Understand business impact, ROI, and strategic advantages with expert guidance."
        },
        {
            audience: "Partners",
            icon: Handshake,
            ctas: [
                { text: "Licensing Options", icon: FileText, link: "/partnership" },
                { text: "JV Opportunities", icon: Calendar, link: "/contact" }
            ],
            description: "Explore technology licensing, joint ventures, and strategic alliances."
        },
        {
            audience: "Researchers",
            icon: FlaskConical,
            ctas: [
                { text: "White Papers", icon: Download, link: "/contact" },
                { text: "Sample Kit", icon: FlaskConical, link: "/contact" }
            ],
            description: "Access technical documentation, validation reports, and material samples."
        }
    ];

    const quickLinks = [
        { text: "View All Products", link: "/products" },
        { text: "Competitive Comparison", link: "/products/graphacrete" },
        { text: "Case Studies", link: "/contact" },
        { text: "Certifications", link: "/contact" },
        { text: "Technical Support", link: "/contact" },
        { text: "Schedule Site Visit", link: "/contact" }
    ];

    return (
        <section className="py-24 px-6 bg-neutral-50 border-t border-neutral-200">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-mono font-medium tracking-wider uppercase mb-6">
                        <TrendingUp className="w-3 h-3" />
                        Next Steps
                    </div>
                    <h2 className="text-4xl md:text-5xl font-display font-medium text-neutral-900 mb-6">
                        Start Your Transformation
                    </h2>
                    <p className="text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
                        Choose the path that matches your role and requirements to accelerate your journey with advanced materials.
                    </p>
                </div>

                {/* Role Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {ctaCards.map((card, index) => {
                        const Icon = card.icon;
                        return (
                            <div
                                key={index}
                                className="bg-white p-8 rounded-2xl border border-neutral-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group flex flex-col"
                            >
                                <div className="w-12 h-12 bg-neutral-50 rounded-xl border border-neutral-100 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-lg font-bold text-neutral-900 mb-2">For {card.audience}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed mb-8 flex-grow">
                                    {card.description}
                                </p>

                                <div className="space-y-3 mt-auto">
                                    {card.ctas.map((cta, idx) => {
                                        const CtaIcon = cta.icon;
                                        return (
                                            <Link key={idx} to={cta.link} className="block">
                                                <button className={`w-full flex items-center justify-between text-left px-4 py-3 rounded-lg text-sm font-medium transition-all ${idx === 0
                                                        ? 'bg-neutral-900 text-white hover:bg-black group-hover:shadow-md'
                                                        : 'bg-white border border-neutral-200 text-neutral-600 hover:border-neutral-400 hover:text-neutral-900'
                                                    }`}>
                                                    <span className="flex items-center gap-2">
                                                        <CtaIcon className="w-4 h-4" />
                                                        {cta.text}
                                                    </span>
                                                    {idx === 0 && <ArrowRight className="w-4 h-4 opacity-70" />}
                                                </button>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Unified Footer Section: Quick Links + Contact */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Quick Links Column */}
                    <div className="lg:col-span-2 bg-white rounded-2xl border border-neutral-200 p-8 md:p-12">
                        <h3 className="text-xl font-display font-medium text-neutral-900 mb-8 flex items-center gap-3">
                            <Sparkles className="w-5 h-5 text-blue-500" />
                            Quick Access
                        </h3>
                        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                            {quickLinks.map((link, index) => (
                                <Link key={index} to={link.link} className="flex items-center gap-3 p-3 rounded-lg hover:bg-neutral-50 border border-transparent hover:border-neutral-100 transition-colors group">
                                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-blue-500 transition-colors"></div>
                                    <span className="text-sm font-medium text-neutral-600 group-hover:text-neutral-900 transition-colors">
                                        {link.text}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Contact Column */}
                    <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 md:p-12 text-white flex flex-col justify-between shadow-2xl shadow-neutral-900/20">
                        <div>
                            <h3 className="text-xl font-display font-medium mb-2">Need Guidance?</h3>
                            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
                                Not sure where to start? Our technical team is ready to help you define your requirements.
                            </p>

                            <div className="space-y-4 mb-8">
                                <div className="flex items-center gap-3 text-sm text-neutral-300">
                                    <Mail className="w-4 h-4 text-blue-400" />
                                    info@monoatomlabs.com
                                </div>
                                <div className="flex items-center gap-3 text-sm text-neutral-300">
                                    <Phone className="w-4 h-4 text-blue-400" />
                                    +91 989 819 9809
                                </div>
                                <div className="flex items-start gap-3 text-sm text-neutral-300">
                                    <MapPin className="w-4 h-4 text-blue-400 mt-0.5" />
                                    <span>iHub Gujarat, Ahmedabad</span>
                                </div>
                            </div>
                        </div>

                        <Link to="/contact">
                            <button className="w-full py-4 bg-white text-neutral-900 rounded-xl font-bold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
                                <Phone className="w-4 h-4" />
                                Schedule Discovery Call
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTAHub;
