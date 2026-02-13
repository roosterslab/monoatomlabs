import React from 'react';
import { Leaf, Droplet, Wind, Zap, ArrowUpRight, Recycle } from 'lucide-react';

/**
 * Environmental Impact & Credits Component (Ultra-Premium)
 * Shows environmental benefits and carbon credits
 */
const EnvironmentalImpact = ({
  productName,
  impacts,
  carbonCredits,
  theme = 'light'
}) => {
  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-neutral-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderClass = isDark ? 'border-neutral-800' : 'border-neutral-200';
  const cardBgClass = isDark ? 'bg-neutral-800/80' : 'bg-neutral-50/80';

  const iconMap = {
    carbon: Wind,
    water: Droplet,
    energy: Zap,
    waste: Recycle
  };

  return (
    <div className={`rounded-3xl border ${borderClass} ${bgClass} shadow-xl p-8 md:p-12 relative overflow-hidden`}>
      {/* Subtle Background Gradient */}
      {isDark && (
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className={`p-2 rounded-lg ${isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600'}`}>
              <Leaf className="w-4 h-4" />
            </div>
            <h3 className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-green-400' : 'text-green-700'}`}>Sustainability Ledger</h3>
          </div>
          <p className={`text-3xl md:text-4xl font-display font-medium ${textClass}`}>Environmental ROI</p>
        </div>

        {carbonCredits && (
          <div className={`flex items-center gap-4 px-5 py-3 rounded-2xl border ${borderClass} ${isDark ? 'bg-neutral-800/50' : 'bg-neutral-50'} backdrop-blur-sm`}>
            <div className="text-right">
              <div className="text-[10px] uppercase font-bold tracking-wider text-neutral-500 mb-0.5">Carbon Credits</div>
              <div className={`text-xl font-mono font-medium ${isDark ? 'text-green-400' : 'text-green-600'}`}>{carbonCredits.value}</div>
            </div>
            <div className={`w-px h-8 ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'}`}></div>
            <ArrowUpRight className={`w-6 h-6 ${isDark ? 'text-green-500' : 'text-green-600'}`} />
          </div>
        )}
      </div>

      {/* Impact Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
        {impacts.map((impact, index) => {
          const Icon = iconMap[impact.type] || Leaf;
          return (
            <div key={index} className={`group relative overflow-hidden border ${borderClass} ${cardBgClass} backdrop-blur-md p-6 rounded-2xl hover:border-green-500/30 transition-all duration-300 hover:-translate-y-1`}>
              {/* Decorative Icon Background */}
              <div className={`absolute -bottom-4 -right-4 text-current opacity-5 group-hover:opacity-10 transition-opacity transform rotate-12 scale-150`}>
                <Icon className={`w-24 h-24 ${isDark ? 'text-white' : 'text-neutral-900'}`} />
              </div>

              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${isDark ? 'bg-neutral-800 text-green-400' : 'bg-white text-green-600 shadow-sm'}`}>
                  <Icon className="w-6 h-6" />
                </div>

                <div className={`text-3xl font-display font-medium ${textClass} mb-1 tracking-tight`}>
                  {impact.value}
                </div>
                <div className={`text-xs ${subtextClass} font-bold uppercase tracking-wider mb-2`}>
                  {impact.label}
                </div>

                {/* Progress Bar Visual */}
                <div className={`w-full h-1 rounded-full ${isDark ? 'bg-neutral-700' : 'bg-neutral-200'} mt-4 overflow-hidden`}>
                  <div className="h-full bg-green-500 rounded-full w-3/4 opacity-70 group-hover:w-full group-hover:opacity-100 transition-all duration-700"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Info */}
      {carbonCredits && (
        <div className="mt-8 pt-6 border-t border-dashed border-neutral-700/50 flex items-center gap-3 text-sm text-neutral-500">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <p className="max-w-2xl">{carbonCredits.description}</p>
        </div>
      )}
    </div>
  );
};

export default EnvironmentalImpact;
