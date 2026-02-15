import React from 'react';
import { Building2, Sun, Factory, TrendingUp, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
// Background now global in MainLayout

const themeStyles = {
    blue: {
        iconBg: 'bg-blue-500/10',
        iconText: 'text-blue-400',
        badgeBg: 'bg-blue-600',
        heroText: 'text-blue-400',
        glow: 'from-blue-500/20',
        bullet: 'bg-blue-500',
        arrow: 'text-blue-400'
    },
    amber: {
        iconBg: 'bg-amber-500/10',
        iconText: 'text-amber-400',
        badgeBg: 'bg-amber-600',
        heroText: 'text-amber-400',
        glow: 'from-amber-500/20',
        bullet: 'bg-amber-500',
        arrow: 'text-amber-400'
    },
    purple: {
        iconBg: 'bg-purple-500/10',
        iconText: 'text-purple-400',
        badgeBg: 'bg-purple-600',
        heroText: 'text-purple-400',
        glow: 'from-purple-500/20',
        bullet: 'bg-purple-500',
        arrow: 'text-purple-400'
    }
};

const ImpactCard = ({ icon: Icon, company, category, challenge, results, heroStat, heroLabel, theme }) => {
    const styles = themeStyles[theme];

    return (
        <div className="group flex flex-col justify-between bg-neutral-900/50 border border-neutral-800 rounded-3xl p-8 hover:bg-neutral-800 hover:border-neutral-700 transition-all duration-500 relative overflow-hidden backdrop-blur-sm">
            {/* Hover Gradient */}
            <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${styles.glow} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>

            <div>
                <div className="flex justify-between items-start mb-6 relative z-10">
                    <div className={`p-3 rounded-2xl ${styles.iconBg} border border-white/5 ${styles.iconText} transition-colors duration-300`}>
                        <Icon className="w-6 h-6" strokeWidth={1.5} />
                    </div>
                    <div className={`px-3 py-1 rounded-full ${styles.badgeBg} text-white text-[10px] font-bold uppercase tracking-wider shadow-lg`}>
                        {category}
                    </div>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight group-hover:text-neutral-200 transition-colors">
                    {company}
                </h3>

                <p className="text-neutral-400 text-sm leading-relaxed mb-8 border-l-2 border-neutral-700 pl-4 py-1">
                    "{challenge}"
                </p>
            </div>

            {/* Hero Stat Block */}
            <div className="relative z-10 bg-black/40 rounded-2xl p-6 border border-white/5 group-hover:border-white/10 transition-all duration-500">
                <div className="flex items-end gap-2 mb-1">
                    <span className={`text-4xl font-display font-bold ${styles.heroText}`}>{heroStat}</span>
                    <ArrowUpRight className={`w-6 h-6 ${styles.arrow} mb-2`} />
                </div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-6 group-hover:text-neutral-400 transition-colors">{heroLabel}</div>

                {/* Micro Stats */}
                <div className="space-y-3 pt-4 border-t border-white/10">
                    {results.map((result, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className={`w-1.5 h-1.5 rounded-full ${styles.bullet}`}></div>
                            <span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-300">{result}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const ProvenImpact = () => {
    const stories = [
        {
            icon: Building2,
            company: "Major Infra Project",
            category: "Construction",
            challenge: "Need for M50 grade concrete with inconsistent traditional mixes and high costs.",
            heroStat: "₹430/m³",
            heroLabel: "Cost Reduction",
            theme: "blue",
            results: [
                "40-50% Strength Gain",
                "15-20% Less Cement",
                "Water Resistant Upgrade"
            ]
        },
        {
            icon: Sun,
            company: "50MW Solar Plant",
            category: "Energy",
            challenge: "Significant power loss (15-20%) due to desert soiling and heat.",
            heroStat: "+8%",
            heroLabel: "Energy Output",
            theme: "amber",
            results: [
                "5-6°C Cooler Panels",
                "30-40% Less Soiling",
                "Self-Cleaning Surface"
            ]
        },
        {
            icon: Factory,
            company: "Auto Manufacturing",
            category: "Coatings",
            challenge: "Prohibitive costs of premium ceramic coatings for mass-market vehicles.",
            heroStat: "65%",
            heroLabel: "Cost Savings",
            theme: "purple",
            results: [
                "9H+ Surface Hardness",
                "3-4 Years Durability",
                "Mass Market Viability"
            ]
        }
    ];

    return (
        <section id="proven-impact" className="py-24 px-6 border-b border-neutral-800 bg-black/10">
            <div className="max-w-7xl mx-auto">
                <SectionHeading
                    number="04"
                    title="Real-World Impact"
                    subtitle="Measurable results from deploying our graphene solutions in industrial applications."
                    theme="dark"
                />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16 mb-20">
                    {stories.map((story, index) => (
                        <ImpactCard key={index} {...story} />
                    ))}
                </div>

                {/* Global Stats Bar */}
                <div className="relative overflow-hidden bg-white/5 border border-white/10 rounded-3xl p-12 text-white backdrop-blur-md">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-brand-500 rounded-full blur-[100px] opacity-10"></div>

                    <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
                        <div className="group">
                            <div className="text-4xl md:text-5xl font-display font-bold text-cyan-400 mb-2 group-hover:scale-110 transition-transform duration-300">100+</div>
                            <div className="text-xs md:text-sm text-neutral-400 font-bold uppercase tracking-widest group-hover:text-cyan-400/70 transition-colors">Deployments</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl md:text-5xl font-display font-bold text-emerald-400 mb-2 group-hover:scale-110 transition-transform duration-300">18mo</div>
                            <div className="text-xs md:text-sm text-neutral-400 font-bold uppercase tracking-widest group-hover:text-emerald-400/70 transition-colors">Avg. ROI</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl md:text-5xl font-display font-bold text-amber-400 mb-2 group-hover:scale-110 transition-transform duration-300">70%</div>
                            <div className="text-xs md:text-sm text-neutral-400 font-bold uppercase tracking-widest group-hover:text-amber-400/70 transition-colors">Cost Save</div>
                        </div>
                        <div className="group">
                            <div className="text-4xl md:text-5xl font-display font-bold text-violet-400 mb-2 group-hover:scale-110 transition-transform duration-300">5+</div>
                            <div className="text-xs md:text-sm text-neutral-400 font-bold uppercase tracking-widest group-hover:text-violet-400/70 transition-colors">Industries</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProvenImpact;
