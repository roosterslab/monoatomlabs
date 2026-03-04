import React, { useState } from 'react';
import { FlaskConical, TestTube, TrendingUp, Rocket, CheckCircle, ArrowRight, ShieldCheck, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

/**
 * From Trial to Deployment Component
 * Ultra-Premium Visual Scale
 */
const TrialToDeployment = ({
  productName,
  stages,
  theme = 'light'
}) => {
  const [activeStage, setActiveStage] = useState(0);

  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-neutral-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderClass = isDark ? 'border-neutral-800' : 'border-neutral-200';
  const cardBgClass = isDark ? 'bg-neutral-800/80' : 'bg-neutral-50/80';

  const stageIcons = {
    trial: FlaskConical,
    validation: TestTube,
    scale: TrendingUp,
    deployment: Rocket
  };

  return (
    <div className={`rounded-3xl border ${borderClass} ${bgClass} shadow-2xl p-8 md:p-14 relative overflow-hidden`}>
      {/* Background Ambience */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
        </div>
      )}

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h3 className={`text-4xl md:text-5xl font-display font-medium ${textClass} mb-4 tracking-tight`}>
          Path to Scale
        </h3>
        <p className={`text-xl ${subtextClass} max-w-2xl mx-auto font-light`}>
          A structured, low-risk roadmap to deploy {productName} across your operations.
        </p>
      </div>

      {/* Premium Stages Timeline */}
      <div className="relative z-10">
        {/* Desktop Connector Line */}
        <div className="hidden lg:block absolute top-[4rem] left-16 right-16 h-0.5 bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent z-0"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stages.map((stage, index) => {
            const Icon = stageIcons[stage.type] || FlaskConical;
            const isHovered = activeStage === index;
            // Cycle through step colors
            const stepColors = [
              'text-blue-500 bg-blue-500/10 border-blue-500/20',
              'text-indigo-500 bg-indigo-500/10 border-indigo-500/20',
              'text-purple-500 bg-purple-500/10 border-purple-500/20',
              'text-green-500 bg-green-500/10 border-green-500/20'
            ];
            const colorClass = stepColors[index % stepColors.length];

            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setActiveStage(index)}
              >
                {/* Visual Step Indicator */}
                <div className="flex flex-col items-center mb-8 relative z-10">
                  <div className={`w-32 h-32 rounded-full border-4 ${isDark ? 'bg-neutral-900 border-neutral-800' : 'bg-white border-neutral-100'} flex items-center justify-center shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:border-indigo-500/30`}>
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center ${colorClass} transition-all duration-300`}>
                      <Icon className="w-10 h-10" strokeWidth={1.5} />
                    </div>

                    {/* Floating Number Badge */}
                    <div className={`absolute top-0 right-0 w-8 h-8 rounded-full ${isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-neutral-200'} border flex items-center justify-center text-sm font-bold shadow-lg`}>
                      {index + 1}
                    </div>

                    {stage.completed && (
                      <div className="absolute bottom-0 right-0 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white dark:border-neutral-900 shadow-lg">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Content */}
                <div className={`h-full border ${borderClass} ${cardBgClass} backdrop-blur-sm p-8 rounded-2xl hover:shadow-xl hover:border-indigo-500/30 transition-all duration-300 ${isHovered ? '-translate-y-2' : ''}`}>
                  <div className="text-center mb-6">
                    <h4 className={`text-xl font-bold ${textClass} mb-3 group-hover:text-indigo-500 transition-colors`}>
                      {stage.title}
                    </h4>
                    <p className={`text-sm ${subtextClass} leading-relaxed`}>
                      {stage.description}
                    </p>
                  </div>

                  {/* Tech Specs List */}
                  <div className={`space-y-3 pt-6 border-t ${borderClass}`}>
                    {stage.details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-left">
                        <ArrowRight className={`w-3.5 h-3.5 mt-1 shrink-0 ${isDark ? 'text-indigo-500' : 'text-indigo-600'}`} />
                        <span className={`text-xs font-medium ${subtextClass}`}>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Metadata Tags */}
                  <div className="mt-6 flex flex-wrap gap-2 justify-center">
                    {stage.duration && (
                      <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${isDark ? 'bg-neutral-800 text-neutral-400' : 'bg-neutral-100 text-neutral-600'} flex items-center gap-1.5`}>
                        <Clock className="w-3 h-3" /> {stage.duration}
                      </div>
                    )}

                    {stage.investment && (
                      <div className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${isDark ? 'bg-indigo-900/20 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                        {stage.investment}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Support Banner */}
      <div className={`mt-16 relative overflow-hidden rounded-2xl ${isDark ? 'bg-gradient-to-br from-indigo-900/20 to-neutral-900' : 'bg-gradient-to-br from-indigo-50 to-white'} border ${borderClass} p-8 md:p-10`}>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h4 className={`text-2xl font-display font-medium ${textClass} mb-2`}>
              Full-Spectrum Engineering Support
            </h4>
            <p className={`${subtextClass} max-w-xl`}>
              Our deployment teams work alongside your engineers from day one, ensuring seamless integration and validating performance metrics.
            </p>
          </div>

          <div className="flex gap-6">
            {[
              { label: 'On-Site Training', icon: ShieldCheck },
              { label: 'QA Certification', icon: CheckCircle }
            ].map((item, i) => (
              <div key={i} className={`flex flex-col items-center gap-2 p-4 rounded-xl ${isDark ? 'bg-neutral-800/50' : 'bg-white/60'} border ${borderClass}`}>
                <item.icon className="w-6 h-6 text-green-500" />
                <span className={`text-xs font-bold uppercase tracking-wider ${textClass}`}>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrialToDeployment;
