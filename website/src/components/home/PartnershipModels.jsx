import React from 'react';
import { Package, Handshake, Lightbulb, ArrowRight, Check } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { DarkHexBackground } from '../backgrounds';

const PartnershipCard = ({ icon: Icon, title, subtitle, features, cta, color, delay }) => (
    <div
        className={`group relative bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:bg-neutral-900/80 hover:border-${color}-500/50 transition-all duration-500 cursor-pointer backdrop-blur-md flex flex-col h-full`}
        style={{ animationDelay: `${delay}ms` }}
    >
        {/* Hover Glow */}
        <div className={`absolute -top-20 -right-20 w-48 h-48 bg-${color}-500/20 rounded-full blur-[80px] group-hover:opacity-100 opacity-0 transition-opacity duration-700 pointer-events-none`}></div>

        <div className="mb-8 relative z-10">
            <div className={`inline-flex p-4 rounded-2xl bg-white/5 border border-white/10 text-${color}-400 group-hover:text-${color}-300 group-hover:border-${color}-500/30 transition-all duration-500`}>
                <Icon className="w-8 h-8" strokeWidth={1} />
            </div>
        </div>

        <h3 className="text-2xl font-display font-medium text-white mb-3 group-hover:text-${color}-400 transition-colors">
            {title}
        </h3>

        <p className="text-neutral-400 mb-8 leading-relaxed h-12">
            {subtitle}
        </p>

        <ul className="space-y-4 mb-10 flex-grow relative z-10">
            {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-neutral-300">
                    <div className={`mt-0.5 w-5 h-5 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 text-${color}-400`}>
                        <Check className="w-3 h-3" />
                    </div>
                    <span>{feature}</span>
                </li>
            ))}
        </ul>

        <button className={`w-full flex items-center justify-center gap-2 px-6 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-${color}-600 hover:border-${color}-500 hover:shadow-lg transition-all duration-300 group-hover:translate-y-[-2px]`}>
            <span className="font-semibold tracking-wide">{cta}</span>
            <ArrowRight className="w-4 h-4" />
        </button>
    </div>
);

const PartnershipModels = () => {
    return (
        <DarkHexBackground className="py-32 px-6 border-b border-neutral-800">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20">
                    <SectionHeading
                        number="09"
                        title="Partnership Models"
                        subtitle="Flexible engagement structures designed for enterprise scalability."
                        theme="dark"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                    <PartnershipCard
                        icon={Package}
                        title="Direct Supply"
                        subtitle="Purchase market-ready graphene formulations for immediate deployment."
                        features={[
                            "Ton-Scale Availability",
                            "24h Dispatch for Stock",
                            "Volume-Tiered Pricing",
                            "Quality Certification (CoA)",
                            "Technical Integration Support"
                        ]}
                        cta="Request Quote"
                        color="cyan"
                        delay={0}
                    />
                    <PartnershipCard
                        icon={Handshake}
                        title="Strategic Alliance"
                        subtitle="Co-create value with territory exclusivity and joint ventures."
                        features={[
                            "Territorial Exclusivity",
                            "Co-Branding Options",
                            "Joint Go-to-Market",
                            "Priority Manufacturing",
                            "Revenue Sharing Models"
                        ]}
                        cta="Partner With Us"
                        color="amber"
                        delay={100}
                    />
                    <PartnershipCard
                        icon={Lightbulb}
                        title="Custom R&D"
                        subtitle="Leverage our lab to engineer a proprietary material solution."
                        features={[
                            "Dedicated Scientist Team",
                            "IP Co-Ownership",
                            "Application Specific Dev",
                            "Pilot Line Priority",
                            "Lab-to-Fab Roadmap"
                        ]}
                        cta="Start R&D Project"
                        color="purple"
                        delay={200}
                    />
                </div>

                {/* Bottom CTA Block */}
                <div className="relative rounded-3xl p-12 overflow-hidden text-center border border-white/10 bg-neutral-900/50 backdrop-blur-sm">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-50"></div>

                    <div className="relative z-10">
                        <h3 className="text-2xl font-display font-medium text-white mb-6">
                            Enterprise or Government Inquiry?
                        </h3>
                        <p className="text-neutral-400 mb-8 max-w-xl mx-auto">
                            We offer specialized procurement channels for large-scale infrastructure projects and government tenders.
                        </p>
                        <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-neutral-950 font-bold rounded-xl hover:bg-neutral-200 transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)]">
                            Contact Executive Team
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>
        </DarkHexBackground>
    );
};

export default PartnershipModels;
