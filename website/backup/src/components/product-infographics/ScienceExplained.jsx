import React, { useState } from 'react';
import { Microscope, Atom, Layers, Zap, ChevronDown, ChevronRight, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Science Explained Component
 * Ultra-Premium Visual Scale
 */
const ScienceExplained = ({
  productName,
  sections,
  theme = 'light'
}) => {
  const [activeTab, setActiveTab] = useState(0);

  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-neutral-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderClass = isDark ? 'border-neutral-800' : 'border-neutral-200';
  const cardBgClass = isDark ? 'bg-neutral-800/80' : 'bg-neutral-50/80';

  const sectionIcons = {
    mechanism: Atom,
    structure: Layers,
    properties: Zap,
    science: Microscope
  };

  const activeSection = sections[activeTab];
  const ActiveIcon = sectionIcons[activeSection?.icon] || Microscope;

  return (
    <div className={`rounded-3xl border ${borderClass} ${bgClass} shadow-2xl overflow-hidden relative`}>
      {/* Background Ambience */}
      {isDark && (
        <div className="absolute inset-x-0 top-0 h-[400px] bg-gradient-to-b from-indigo-900/10 to-transparent pointer-events-none"></div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[700px]">
        {/* Left: Navigation and Tabs */}
        <div className={`lg:col-span-4 border-b lg:border-b-0 lg:border-r ${borderClass} ${isDark ? 'bg-neutral-900' : 'bg-neutral-50/50'} p-8 flex flex-col`}>
          <div className="mb-10">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg ${isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-700'} text-xs font-bold uppercase tracking-widest mb-4`}>
              <Microscope className="w-3.5 h-3.5" />
              <span>The Technology</span>
            </div>
            <h3 className={`text-3xl font-display font-medium ${textClass} mb-4`}>
              Core Science
            </h3>
            <p className={`text-sm ${subtextClass} leading-relaxed`}>
              Explore the proprietary mechanisms that give {productName} its breakthrough capabilities.
            </p>
          </div>

          <div className="space-y-2">
            {sections.map((section, index) => {
              const Icon = sectionIcons[section.icon] || Microscope;
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${isActive
                    ? `${isDark ? 'bg-neutral-800 text-white shadow-lg' : 'bg-white text-neutral-900 shadow-xl'} scale-[1.02]`
                    : 'hover:bg-neutral-200/50 dark:hover:bg-neutral-800/50 opacity-70 hover:opacity-100'
                    }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`p-2 rounded-lg transition-colors ${isActive ? 'bg-indigo-500 text-white shadow-md' : 'bg-transparent text-neutral-400'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className={`block font-bold text-sm ${isActive ? textClass : subtextClass}`}>{section.title}</span>
                      {isActive && <span className="text-[10px] text-indigo-400 font-medium uppercase tracking-wider animate-pulse">Viewing</span>}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>
        </div>

        {/* Right: Content Area */}
        <div className="lg:col-span-8 p-8 md:p-14 relative overflow-y-auto">
          {/* Animated Content Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-4 rounded-2xl ${isDark ? 'bg-neutral-800 text-indigo-400' : 'bg-white text-indigo-600 shadow-md'} border ${borderClass}`}>
                  <ActiveIcon className="w-8 h-8" />
                </div>
                <h2 className={`text-4xl font-display font-medium ${textClass}`}>{activeSection.title}</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-10 mb-10">
                {/* Description Column */}
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${subtextClass} mb-4 flex items-center gap-2`}>
                    <div className="w-6 h-px bg-indigo-500"></div> Technical Breakdown
                  </h4>
                  <div className={`space-y-4 text-lg ${subtextClass} leading-relaxed`}>
                    {activeSection.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Key Insights Column */}
                <div>
                  <h4 className={`text-xs font-bold uppercase tracking-wider ${subtextClass} mb-4`}>
                    Engineering Advantages
                  </h4>
                  <div className="space-y-4">
                    {activeSection.keyPoints.map((point, i) => (
                      <div key={i} className={`p-5 rounded-2xl border ${borderClass} ${cardBgClass} transition-transform hover:scale-[1.02]`}>
                        <div className="flex items-start gap-3">
                          <div className="mt-1 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center shrink-0">
                            <Check className="w-3 h-3 text-white" strokeWidth={3} />
                          </div>
                          <div>
                            <h5 className={`font-bold ${textClass} text-sm mb-1`}>{point.title}</h5>
                            <p className={`text-xs ${subtextClass}`}>{point.description}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Technical Data Footer */}
              {activeSection.technicalData && (
                <div className={`mt-auto rounded-2xl border ${isDark ? 'border-indigo-500/30 bg-indigo-500/5' : 'border-indigo-100 bg-indigo-50'} p-6`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className={`w-4 h-4 ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`} />
                    <span className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-indigo-300' : 'text-indigo-800'}`}>Specifications</span>
                  </div>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(activeSection.technicalData).map(([key, value], i) => (
                      <div key={i}>
                        <div className={`text-[10px] font-bold uppercase tracking-wider ${subtextClass} mb-1`}>{key}</div>
                        <div className={`text-lg font-mono font-medium ${textClass}`}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default ScienceExplained;
