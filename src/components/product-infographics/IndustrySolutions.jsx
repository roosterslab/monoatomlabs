import React, { useState } from 'react';
import { Building2, Factory, Zap, Car, Package, CheckCircle, ArrowRight, LayoutGrid } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Industry Solutions Component
 * Ultra-Premium Visual Scale
 */
const IndustrySolutions = ({
  productName,
  industries,
  theme = 'light'
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-neutral-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderClass = isDark ? 'border-neutral-800' : 'border-neutral-200';
  const cardBgClass = isDark ? 'bg-neutral-800/50' : 'bg-neutral-50/50';

  const industryIcons = {
    construction: Building2,
    manufacturing: Factory,
    energy: Zap,
    automotive: Car,
    packaging: Package
  };

  const currentIndustry = industries[selectedIndustry];
  const Icon = industryIcons[currentIndustry?.icon] || Building2;

  return (
    <div className={`rounded-3xl border ${borderClass} ${bgClass} shadow-2xl overflow-hidden relative`}>
      {/* Background Glow */}
      {isDark && (
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[650px]">
        {/* Left Sidebar: Navigation with enhanced visuals */}
        <div className={`lg:col-span-4 border-b lg:border-b-0 lg:border-r ${borderClass} ${isDark ? 'bg-neutral-900/80' : 'bg-neutral-50/80'} backdrop-blur-md p-6 flex flex-col`}>
          <div className="mb-10 px-2 pt-2">
            <div className="flex items-center gap-2 mb-3">
              <div className={`p-2 rounded-md ${isDark ? 'bg-white/10' : 'bg-neutral-200'}`}>
                <LayoutGrid className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">Sectors</span>
            </div>
            <h3 className={`text-2xl font-display font-medium ${textClass} mb-2`}>
              Industry Solutions
            </h3>
            <p className={`text-sm ${subtextClass} leading-relaxed max-w-xs`}>
              Tailored applications driving performace in critical infrastructure and manufacturing.
            </p>
          </div>

          <div className="space-y-1.5 flex-grow">
            {industries.map((industry, index) => {
              const IndustryIcon = industryIcons[industry.icon] || Building2;
              const isSelected = selectedIndustry === index;

              return (
                <button
                  key={index}
                  onClick={() => setSelectedIndustry(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${isSelected
                    ? `${isDark ? 'bg-neutral-800 text-white shadow-lg' : 'bg-white text-neutral-900 shadow-md'} border ${borderClass}`
                    : 'hover:bg-neutral-100 dark:hover:bg-neutral-800/50 border border-transparent opacity-70 hover:opacity-100'
                    }`}
                >
                  {isSelected && (
                    <div className={`absolute left-0 top-0 bottom-0 w-1 ${isDark ? 'bg-indigo-500' : 'bg-indigo-600'}`}></div>
                  )}
                  <div className="flex items-center gap-4">
                    <div className={`p-2.5 rounded-lg transition-colors duration-300 ${isSelected ? (isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-50 text-indigo-600') : 'bg-transparent text-neutral-400'}`}>
                      <IndustryIcon className="w-5 h-5" />
                    </div>
                    <span className={`font-medium text-sm tracking-wide ${isSelected ? textClass : subtextClass} group-hover:${textClass}`}>
                      {industry.name}
                    </span>
                  </div>
                  {isSelected && <ArrowRight className="w-4 h-4 text-indigo-500 animate-in slide-in-from-left-2" />}
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Content Area */}
        <div className="lg:col-span-8 p-8 md:p-14 flex flex-col relative">
          <AnimatePresence mode="wait">
            {currentIndustry && (
              <motion.div
                key={selectedIndustry}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col h-full"
              >
                {/* Industry Header */}
                <div className="mb-12">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg ${isDark ? 'bg-neutral-800 text-indigo-400 border border-neutral-700' : 'bg-white text-indigo-600 border border-neutral-100'}`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className={`text-3xl md:text-4xl font-display font-medium ${textClass}`}>
                        {currentIndustry.name}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${isDark ? 'bg-indigo-400' : 'bg-indigo-600'}`}></span>
                        <span className={`text-xs ${subtextClass} font-mono uppercase tracking-wide`}>Specialized Application</span>
                      </div>
                    </div>
                  </div>

                  <p className={`text-xl ${subtextClass} leading-relaxed max-w-3xl font-light`}>
                    {currentIndustry.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 mb-8">
                  {/* Use Cases */}
                  <div>
                    <h5 className={`text-xs font-bold uppercase tracking-wider ${subtextClass} mb-6 flex items-center gap-2`}>
                      <ArrowRight className="w-3 h-3" /> Core Applications
                    </h5>
                    <div className="space-y-4">
                      {currentIndustry.useCases.map((useCase, index) => (
                        <div key={index} className={`p-5 rounded-2xl border ${borderClass} ${cardBgClass} hover:border-indigo-500/30 transition-all hover:translate-x-1 group`}>
                          <div className="flex items-start gap-3">
                            <div className={`mt-1 p-1 rounded-full ${isDark ? 'bg-indigo-500/20 text-indigo-400' : 'bg-indigo-50 text-indigo-600'} shrink-0`}>
                              <CheckCircle className="w-3 h-3" />
                            </div>
                            <div>
                              <strong className={`block text-base font-bold ${textClass} mb-1 group-hover:text-indigo-500 transition-colors`}>{useCase.title}</strong>
                              <p className={`text-sm ${subtextClass} leading-relaxed`}>{useCase.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div>
                    <h5 className={`text-xs font-bold uppercase tracking-wider ${subtextClass} mb-6 flex items-center gap-2`}>
                      <ArrowRight className="w-3 h-3" />  Impact Metrics
                    </h5>
                    <div className="space-y-4">
                      {currentIndustry.metrics.map((metric, index) => (
                        <div key={index} className={`flex flex-col p-6 rounded-2xl ${isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-white border-neutral-100'} border shadow-sm`}>
                          <span className={`text-4xl font-display font-medium ${isDark ? 'text-white' : 'text-neutral-900'} mb-1`}>{metric.value}</span>
                          <span className={`text-sm ${subtextClass} font-medium uppercase tracking-wide`}>{metric.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className={`mt-8 p-6 rounded-2xl border ${isDark ? 'border-indigo-500/30 bg-indigo-500/10' : 'border-indigo-100 bg-indigo-50'} text-center`}>
                      <p className={`text-sm font-medium ${isDark ? 'text-indigo-200' : 'text-indigo-800'} mb-3`}>Ready to optimize your project?</p>
                      <button className={`w-full py-3 rounded-lg font-bold text-sm uppercase tracking-wide transition-colors ${isDark ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'}`}>
                        View Case Study
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default IndustrySolutions;
