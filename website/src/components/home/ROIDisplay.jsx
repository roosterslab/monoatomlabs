import React from 'react';
import { DollarSign, TrendingUp, Calendar, Percent } from 'lucide-react';

const ROICard = ({ product, icon, roi, savings, payback, colorName }) => {
    // Map color names to handy utility classes
    const colors = {
        blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' },
        amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100' },
        purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
        neutral: { bg: 'bg-neutral-100', text: 'text-neutral-700', border: 'border-neutral-200' },
    };
    const theme = colors[colorName] || colors.neutral;

    return (
        <div className={`group relative bg-white border ${theme.border} rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500`}>
            <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl ${theme.bg} ${theme.text} flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform`}>
                    {icon}
                </div>

                <h3 className="text-2xl font-display font-bold text-neutral-900 mb-6 group-hover:text-neutral-700 transition-colors">{product}</h3>

                <div className="space-y-4">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-neutral-50 rounded-lg text-neutral-400">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div>
                            <div className={`text-2xl font-bold text-neutral-900`}>{payback}</div>
                            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Payback</div>
                        </div>
                    </div>

                    <div className="h-px bg-neutral-100"></div>

                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-neutral-50 rounded-lg text-neutral-400">
                            <Percent className="w-5 h-5" />
                        </div>
                        <div>
                            <div className={`text-2xl font-bold text-neutral-900`}>{savings}</div>
                            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Savings</div>
                        </div>
                    </div>

                    <div className="h-px bg-neutral-100"></div>

                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-neutral-50 rounded-lg text-neutral-400">
                            <TrendingUp className="w-5 h-5" />
                        </div>
                        <div>
                            <div className={`text-3xl font-bold ${theme.text}`}>{roi}</div>
                            <div className="text-xs font-bold text-neutral-400 uppercase tracking-wide">Annual ROI</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ROIDisplay = () => {
    const products = [
        {
            product: "Graphacrete",
            icon: "🏗️",
            roi: "67%",
            savings: "15-20%",
            payback: "18 mo",
            colorName: "blue"
        },
        {
            product: "Graffisol",
            icon: "☀️",
            roi: "72%",
            savings: "10-12%",
            payback: "18 mo",
            colorName: "amber"
        },
        {
            product: "Ceraphene",
            icon: "💎",
            roi: "200%",
            savings: "60-70%",
            payback: "6 mo",
            colorName: "purple"
        },
        {
            product: "HD-G-PE",
            icon: "📦",
            roi: "85%",
            savings: "20%+",
            payback: "12 mo",
            colorName: "neutral"
        }
    ];

    return (
        <section className="py-24 px-6 bg-white border-t border-neutral-100">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-200 bg-neutral-50 mb-6">
                        <DollarSign className="w-4 h-4 text-emerald-600" />
                        <span className="text-xs font-bold text-neutral-600 tracking-wide uppercase">
                            Financial Impact
                        </span>
                    </div>

                    <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-4">
                        ROI That Speaks for Itself
                    </h2>

                    <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
                        Transparent, validated return on investment across all product lines
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {products.map((product, index) => (
                        <ROICard key={index} {...product} />
                    ))}
                </div>

                {/* Bottom stats */}
                <div className="bg-neutral-50 rounded-2xl p-12 border border-neutral-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div>
                            <div className="inline-flex p-4 bg-white rounded-2xl text-emerald-600 shadow-sm mb-4 border border-neutral-100">
                                <DollarSign className="w-8 h-8" />
                            </div>
                            <div className="text-4xl font-display font-bold text-neutral-900 mb-2">₹50+ Cr</div>
                            <div className="text-sm font-bold text-neutral-500 uppercase tracking-wide">Customer Savings Generated</div>
                        </div>

                        <div>
                            <div className="inline-flex p-4 bg-white rounded-2xl text-blue-600 shadow-sm mb-4 border border-neutral-100">
                                <TrendingUp className="w-8 h-8" />
                            </div>
                            <div className="text-4xl font-display font-bold text-neutral-900 mb-2">100%</div>
                            <div className="text-sm font-bold text-neutral-500 uppercase tracking-wide">ROI Validation Rate</div>
                        </div>

                        <div>
                            <div className="inline-flex p-4 bg-white rounded-2xl text-amber-600 shadow-sm mb-4 border border-neutral-100">
                                <Calendar className="w-8 h-8" />
                            </div>
                            <div className="text-4xl font-display font-bold text-neutral-900 mb-2">18 mo</div>
                            <div className="text-sm font-bold text-neutral-500 uppercase tracking-wide">Average Payback Period</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ROIDisplay;
