import React, { useState } from 'react';
import { MessageSquare, FlaskConical, Rocket, BarChart3, CheckCircle2, ArrowRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';

const Phase = ({ number, icon: Icon, title, duration, activities, deliverables, isActive, onClick, isLast }) => (
    <div
        className={`relative group cursor-pointer transition-all duration-500 ease-out h-full ${isActive
                ? 'col-span-1 md:col-span-2 lg:col-span-1 bg-neutral-900 text-white shadow-2xl scale-105 ring-4 ring-neutral-100 z-10'
                : 'bg-white text-neutral-900 border border-neutral-200 hover:border-neutral-300 hover:shadow-lg opacity-60 hover:opacity-100'
            } rounded-3xl p-8 flex flex-col`}
        onClick={onClick}
    >
        {/* Glow Effect for Active Card */}
        {isActive && (
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[60px] translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
        )}

        <div className="flex items-center justify-between mb-8 relative z-10">
            <div className={`p-4 rounded-2xl ${isActive ? 'bg-brand-500 text-white' : 'bg-neutral-100 text-neutral-500 group-hover:bg-neutral-200'} transition-colors duration-300`}>
                <Icon className="w-6 h-6" strokeWidth={2} />
            </div>
            <span className={`text-xs font-bold ${isActive ? 'text-brand-400' : 'text-neutral-400'} uppercase tracking-wider border px-3 py-1 rounded-full ${isActive ? 'border-brand-500/30' : 'border-neutral-200'}`}>
                {duration}
            </span>
        </div>

        <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${isActive ? 'text-neutral-400' : 'text-neutral-500'}`}>
            Phase {number < 10 ? `0${number}` : number}
        </div>

        <h3 className={`text-2xl font-display font-bold mb-4 ${isActive ? 'text-white' : 'text-neutral-900'}`}>{title}</h3>

        {/* Expandable Content */}
        <div className={`transition-all duration-500 overflow-hidden ${isActive ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="space-y-6">
                <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide mb-3 text-brand-400">Key Activities</h4>
                    <ul className="space-y-2">
                        {activities.map((activity, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-neutral-300">
                                <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5 text-brand-500" />
                                <span>{activity}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="h-px bg-white/10"></div>

                <div>
                    <h4 className="text-xs font-bold uppercase tracking-wide mb-3 text-brand-400">Deliverables</h4>
                    <ul className="space-y-2">
                        {deliverables.map((deliverable, index) => (
                            <li key={index} className="flex items-start gap-3 text-sm text-neutral-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-neutral-500 mt-2 flex-shrink-0"></div>
                                <span>{deliverable}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        {!isActive && (
            <div className="mt-auto pt-8 border-t border-neutral-100">
                <div className="flex items-center text-sm font-bold text-neutral-400 group-hover:text-brand-600 transition-colors">
                    View Details <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </div>
        )}
    </div>
);

const WorkingWithUs = () => {
    const [activePhase, setActivePhase] = useState(0);

    const phases = [
        {
            number: 1,
            icon: MessageSquare,
            title: "Discovery",
            duration: "1-2 Weeks",
            activities: [
                "Initial requirement gathering",
                "Site assessment & analysis",
                "Technical feasibility study",
                "Custom solution design"
            ],
            deliverables: [
                "Detailed requirement document",
                "Technical proposal",
                "Cost-benefit analysis"
            ]
        },
        {
            number: 2,
            icon: FlaskConical,
            title: "Pilot Program",
            duration: "4-8 Weeks",
            activities: [
                "Small-scale deployment",
                "Performance monitoring",
                "Optimization & fine-tuning",
                "ROI validation"
            ],
            deliverables: [
                "Pilot performance report",
                "Validated ROI data",
                "Scale-up roadmap"
            ]
        },
        {
            number: 3,
            icon: Rocket,
            title: "Integration",
            duration: "2-6 Months",
            activities: [
                "Production-scale roll-out",
                "On-site team training",
                "Process integration",
                "QA protocols setup"
            ],
            deliverables: [
                "Full product supply",
                "SOP documentation",
                "QA/QC certificates"
            ]
        },
        {
            number: 4,
            icon: BarChart3,
            title: "Optimization",
            duration: "Ongoing",
            activities: [
                "Continuous tracking",
                "Quarterly reviews",
                "Issue resolution",
                "Future-proofing"
            ],
            deliverables: [
                "Monthly reports",
                "Continuous improvement plan",
                "24/7 Support access"
            ]
        }
    ];

    return (
        <section className="py-24 px-6 bg-neutral-50 border-b border-neutral-200 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    number="10"
                    title="Working With Us"
                    subtitle="A proven 4-phase process from discovery to deployment and beyond."
                    theme="light"
                />

                <div className="relative mt-20 mb-20">
                    {/* Connection Line (Desktop) */}
                    <div className="hidden lg:block relative h-1 bg-neutral-200 w-full mb-12 top-[340px] -z-10 rounded-full">
                        <div
                            className="absolute h-full bg-brand-500 transition-all duration-500 ease-out rounded-full"
                            style={{ width: `${(activePhase / (phases.length - 1)) * 100}%` }}
                        ></div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
                        {phases.map((phase, index) => (
                            <Phase
                                key={index}
                                {...phase}
                                isActive={activePhase === index}
                                onClick={() => setActivePhase(index)}
                                isLast={index === phases.length - 1}
                            />
                        ))}
                    </div>
                </div>

                {/* Success Metrics */}
                <div className="bg-white border border-neutral-200 rounded-3xl p-12 shadow-xl shadow-neutral-100/50">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-neutral-100">
                        <div className="group">
                            <div className="text-5xl font-display font-bold text-neutral-900 mb-2 group-hover:scale-110 transition-transform duration-300">100%</div>
                            <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest group-hover:text-brand-600 transition-colors">Client Retention</div>
                        </div>
                        <div className="group pt-8 md:pt-0">
                            <div className="text-5xl font-display font-bold text-neutral-900 mb-2 group-hover:scale-110 transition-transform duration-300">&lt;24h</div>
                            <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest group-hover:text-brand-600 transition-colors">Response Time</div>
                        </div>
                        <div className="group pt-8 md:pt-0">
                            <div className="text-5xl font-display font-bold text-neutral-900 mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                            <div className="text-sm font-bold text-neutral-400 uppercase tracking-widest group-hover:text-brand-600 transition-colors">Projects Delivered</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WorkingWithUs;
