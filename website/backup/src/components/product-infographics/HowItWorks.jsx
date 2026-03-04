import React from 'react';
import { ArrowRight, CheckCircle, Clock, Settings, Truck, PlayCircle, ShieldCheck } from 'lucide-react';

/**
 * How It Works Process Flow Component
 * Ultra-Premium Visual Scale
 */
const HowItWorks = ({ steps, title = "How It Works", theme = 'light' }) => {
  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-neutral-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderClass = isDark ? 'border-neutral-800' : 'border-neutral-200';

  // Custom Icons mapping if needed, otherwise fallback to index based or passed icon
  const getIcon = (step, index) => {
    if (step.icon) return step.icon;
    const icons = [Settings, Truck, PlayCircle, ShieldCheck];
    return icons[index % icons.length];
  };

  return (
    <div className={`${bgClass} rounded-3xl border ${borderClass} shadow-xl overflow-hidden relative`}>
      {/* Background Ambience */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
        </div>
      )}

      <div className="p-8 md:p-16 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${isDark ? 'bg-indigo-500/10 text-indigo-400 border border-indigo-500/20' : 'bg-indigo-50 text-indigo-700 border border-indigo-100'}`}>
              <Settings className="w-3 h-3" />
              <span>Integration Protocol</span>
            </div>
            <h3 className={`text-4xl md:text-5xl font-display font-medium ${textClass} mb-4 tracking-tight`}>
              {title}
            </h3>
            <p className={`text-xl ${subtextClass} font-light`}>
              A seamless, zero-disruption integration model designed for rapid deployment.
            </p>
          </div>

          <div className="flex gap-6 border-l border-neutral-200 dark:border-neutral-800 pl-6">
            <div>
              <div className={`text-3xl font-display font-bold ${textClass} mb-1`}>14<span className="text-base font-normal text-neutral-500 ml-1">days</span></div>
              <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">Typical Deployment</div>
            </div>
          </div>
        </div>

        {/* Premium Steps Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-[3.5rem] left-8 right-8 h-1 bg-gradient-to-r from-neutral-200 via-neutral-300 to-neutral-200 dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-800 rounded-full z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-20 blur-sm"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const StepIcon = getIcon(step, index);
              return (
                <div key={index} className="relative z-10 group">
                  {/* Step Marker */}
                  <div className="mb-8 flex items-center gap-6 lg:block relative">
                    <div className="lg:mb-8 relative flex justify-center lg:justify-start">
                      <div className={`w-24 h-24 rounded-3xl ${isDark ? 'bg-neutral-900 border-neutral-800 shadow-[0_0_30px_-10px_rgba(99,102,241,0.3)]' : 'bg-white border-neutral-100 shadow-xl'} border flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-500`}>
                        <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        <StepIcon className={`w-10 h-10 ${isDark ? 'text-white' : 'text-neutral-900'} relative z-20`} strokeWidth={1.5} />

                        {/* Number Badge */}
                        <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full ${isDark ? 'bg-indigo-600 text-white' : 'bg-neutral-900 text-white'} flex items-center justify-center text-sm font-bold shadow-lg border-4 ${isDark ? 'border-neutral-900' : 'border-white'}`}>
                          {index + 1}
                        </div>
                      </div>

                      {/* Mobile Connector */}
                      <div className="lg:hidden absolute left-12 top-24 bottom-[-4rem] w-0.5 bg-neutral-200 dark:bg-neutral-800 -z-10"></div>
                    </div>

                    {/* Text Content */}
                    <div className="pt-2">
                      <h4 className={`text-xl font-bold ${textClass} mb-3 group-hover:text-indigo-500 transition-colors`}>{step.title}</h4>
                      <p className={`text-sm ${subtextClass} leading-relaxed`}>{step.description}</p>

                      {step.duration && (
                        <div className={`mt-4 inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider ${isDark ? 'text-indigo-400 bg-indigo-500/10' : 'text-indigo-700 bg-indigo-50'} px-2 py-1 rounded`}>
                          <Clock className="w-3 h-3" />
                          {step.duration}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom Guarantee */}
        <div className={`mt-20 pt-10 border-t ${borderClass}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full ${isDark ? 'bg-green-500/20 text-green-400' : 'bg-green-50 text-green-600'} flex items-center justify-center`}>
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h5 className={`font-bold ${textClass}`}>Guaranteed Performance</h5>
                <p className={`text-sm ${subtextClass}`}>Pilot program results validated by third-party testing.</p>
              </div>
            </div>

            <div className="flex gap-2">
              {[1, 2, 3].map((_, i) => (
                <div key={i} className={`w-2 h-2 rounded-full ${isDark ? 'bg-neutral-800' : 'bg-neutral-200'}`}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
