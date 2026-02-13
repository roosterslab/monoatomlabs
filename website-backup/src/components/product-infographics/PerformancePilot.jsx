import React from 'react';
import { Calendar, Target, FileText, CheckCircle, TrendingUp, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

/**
 * 30-Day Performance Pilot Component
 * Showcases trial program details and benefits
 */
const PerformancePilot = ({
  productName,
  pilotDetails,
  benefits,
  pricing,
  theme = 'light'
}) => {
  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-neutral-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderClass = isDark ? 'border-neutral-700' : 'border-neutral-200';
  const cardBgClass = isDark ? 'bg-neutral-800' : 'bg-neutral-50';

  const milestones = [
    { day: 'Week 1', title: 'Setup & Baseline', desc: 'Mix design review & initial metrics', icon: Target },
    { day: 'Week 2', title: 'Controlled Testing', desc: 'Batch production & fresh property analysis', icon: Zap },
    { day: 'Week 3', title: 'Performance Data', desc: 'Strength gain & durability verification', icon: TrendingUp },
    { day: 'Week 4', title: 'Evaluation', desc: 'ROI modeling & scale-up roadmap', icon: FileText }
  ];

  return (
    <div className={`${bgClass} rounded-2xl border ${borderClass} overflow-hidden`}>
      <div className="flex flex-col">
        {/* Top: Program Overview & Value Prop */}
        <div className={`p-8 md:p-12 bg-gradient-to-br ${isDark ? 'from-neutral-900 to-neutral-800' : 'from-neutral-50 to-white'} border-b ${borderClass}`}>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
            <div className="md:w-1/2">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-6 ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-700'}`}>
                <ShieldCheck className="w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Risk-Free Validation</span>
              </div>

              <h3 className={`text-3xl font-display font-medium ${textClass} mb-4`}>
                Performance <span className="text-blue-500">Pilot</span>
              </h3>
              <p className={`text-lg ${subtextClass} mb-8 leading-relaxed`}>
                Validate {productName} in your specific operational environment before full-scale deployment.
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <CheckCircle className={`w-5 h-5 ${isDark ? 'text-blue-500' : 'text-blue-600'} mt-0.5 group-hover:scale-110 transition-transform`} />
                    <div>
                      <div className={`font-medium ${textClass}`}>{benefit.title}</div>
                      <div className={`text-xs ${subtextClass}`}>{benefit.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {pricing && (
              <div className={`md:w-1/3 p-6 rounded-xl ${isDark ? 'bg-blue-900/10 border border-blue-800/30' : 'bg-blue-50 border border-blue-100'}`}>
                <div className="text-xs text-blue-500 uppercase font-bold mb-1">Program Investment</div>
                <div className="flex items-baseline gap-2">
                  <span className={`text-2xl font-mono font-bold ${textClass}`}>{pricing.cost}</span>
                  <span className={`text-xs ${subtextClass}`}>/ 30 Days</span>
                </div>
                {pricing.note && <div className="text-[10px] text-blue-500/80 mt-2 pt-2 border-t border-blue-500/20">{pricing.note}</div>}
              </div>
            )}
          </div>
        </div>

        {/* Bottom: Timeline & Deliverables */}
        <div className="p-8 md:p-12">
          <h4 className={`text-xs font-bold uppercase tracking-wider ${subtextClass} mb-8`}>
            30-Day Execution Roadmap
          </h4>

          {/* Timeline */}
          <div className="relative mb-12">
            {/* Connecting Line */}
            <div className={`absolute top-8 left-4 right-4 h-0.5 ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'} hidden md:block`}></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative z-10 group">
                  <div className={`w-16 h-16 rounded-xl ${isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-neutral-200'} border flex items-center justify-center mb-4 shadow-sm group-hover:border-blue-500 group-hover:shadow-blue-500/20 transition-all duration-300`}>
                    <milestone.icon className={`w-6 h-6 ${isDark ? 'text-neutral-400' : 'text-neutral-500'} group-hover:text-blue-500 transition-colors`} />
                  </div>
                  <div className={`text-xs font-mono font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'} mb-1`}>{milestone.day}</div>
                  <div className={`font-bold ${textClass} text-sm mb-1`}>{milestone.title}</div>
                  <div className={`text-xs ${subtextClass} leading-relaxed`}>{milestone.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables Grid */}
          <div className={`border-t ${borderClass} pt-8`}>
            <h4 className={`text-xs font-bold uppercase tracking-wider ${subtextClass} mb-6`}>
              Pilot Deliverables
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {pilotDetails.map((detail, index) => (
                <div key={index} className={`p-4 rounded-xl border ${borderClass} ${cardBgClass} flex items-start gap-3`}>
                  <div className={`p-2 rounded-lg ${isDark ? 'bg-neutral-900' : 'bg-white'}`}>
                    <FileText className={`w-4 h-4 ${textClass}`} />
                  </div>
                  <div>
                    <div className={`font-medium ${textClass} text-sm`}>{detail.title}</div>
                    {detail.description && <div className={`text-xs ${subtextClass} mt-0.5`}>{detail.description}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformancePilot;
