import React, { useState } from 'react';
import { TrendingUp, Globe, Users, Target, ArrowRight, BarChart3, PieChart } from 'lucide-react';

/**
 * Market Opportunity Analyzer Component
 * Ultra-Premium Visual Scale
 */
const MarketOpportunityAnalyzer = ({
  productName,
  marketData,
  industries,
  growthMetrics,
  theme = 'light'
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]?.id || null);

  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-neutral-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderClass = isDark ? 'border-neutral-800' : 'border-neutral-200';
  const cardBgClass = isDark ? 'bg-neutral-800/80' : 'bg-neutral-50/80';

  const selectedIndustryData = industries.find(ind => ind.id === selectedIndustry);

  return (
    <div className={`rounded-3xl border ${borderClass} ${bgClass} overflow-hidden shadow-2xl relative`}>
      {/* Decorative gradients */}
      {isDark ? (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-purple-500/5 rounded-full blur-[100px]"></div>
        </div>
      ) : (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-[100px]"></div>
        </div>
      )}

      {/* Header Section */}
      <div className={`p-8 md:p-12 border-b ${borderClass} relative z-10`}>
        <div className="max-w-4xl">
          <div className="flex items-center gap-2 mb-4">
            <div className={`p-2 rounded-lg ${isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
              <Globe className="w-5 h-5" />
            </div>
            <span className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Market Intelligence</span>
          </div>
          <h3 className={`text-3xl md:text-5xl font-display font-medium ${textClass} mb-4`}>
            Growth Potential Analysis
          </h3>
          <p className={`text-lg ${subtextClass} max-w-2xl`}>
            Deep-dive into the serviceable market, industry-specific vectors, and revenue modeling for {productName}.
          </p>
        </div>
      </div>

      {/* Global Key Metrics Dashboard */}
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x ${borderClass} border-b relative z-10 bg-opacity-50 backdrop-blur-sm`}>
        {/* TAM */}
        <div className="p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
          <div className="flex justify-between items-start mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
            <TrendingUp className="w-5 h-5" />
            <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current opacity-50">TAM</span>
          </div>
          <div className={`text-4xl font-display font-medium ${textClass} mb-1 tracking-tight`}>{marketData.tamSize}</div>
          <div className={`text-xs ${subtextClass} font-bold uppercase tracking-wide`}>Total Addressable Market</div>
        </div>

        {/* CAGR */}
        <div className="p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
          <div className="flex justify-between items-start mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
            <BarChart3 className="w-5 h-5" />
            <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current opacity-50">CAGR</span>
          </div>
          <div className={`text-4xl font-display font-medium ${isDark ? 'text-green-400' : 'text-green-600'} mb-1 tracking-tight`}>{marketData.cagr}</div>
          <div className={`text-xs ${subtextClass} font-bold uppercase tracking-wide`}>Compound Annual Growth</div>
        </div>

        {/* Ideal Customer Profile */}
        <div className="p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
          <div className="flex justify-between items-start mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
            <Users className="w-5 h-5" />
            <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current opacity-50">ICP</span>
          </div>
          <div className={`text-4xl font-display font-medium ${textClass} mb-1 tracking-tight`}>{marketData.targetCustomers}</div>
          <div className={`text-xs ${subtextClass} font-bold uppercase tracking-wide`}>Target Enterprises</div>
        </div>

        {/* Share of Market */}
        <div className="p-8 hover:bg-black/5 dark:hover:bg-white/5 transition-colors group">
          <div className="flex justify-between items-start mb-4 opacity-70 group-hover:opacity-100 transition-opacity">
            <Target className="w-5 h-5" />
            <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded border border-current opacity-50">SOM</span>
          </div>
          <div className={`text-4xl font-display font-medium ${isDark ? 'text-blue-400' : 'text-blue-600'} mb-1 tracking-tight`}>{marketData.marketShare}</div>
          <div className={`text-xs ${subtextClass} font-bold uppercase tracking-wide`}>Serviceable Share</div>
        </div>
      </div>

      {/* Interactive Deep Dive */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px] relative z-10">
        {/* Sidebar: Industries */}
        <div className={`lg:col-span-4 border-r ${borderClass} ${isDark ? 'bg-neutral-900/50' : 'bg-neutral-50/80'} p-6 backdrop-blur-md`}>
          <h4 className={`text-xs font-bold uppercase tracking-wider ${subtextClass} mb-6 px-2 opacity-70`}>
            Select Sector Analysis
          </h4>
          <div className="space-y-3">
            {industries.map((industry) => (
              <button
                key={industry.id}
                onClick={() => setSelectedIndustry(industry.id)}
                className={`w-full text-left p-5 rounded-xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${selectedIndustry === industry.id
                  ? `${isDark ? 'bg-neutral-800 text-white shadow-lg border-neutral-700' : 'bg-white text-neutral-900 shadow-lg border-neutral-200'} border`
                  : `hover:bg-black/5 dark:hover:bg-white/5 border border-transparent ${subtextClass}`
                  }`}
              >
                <div className="relative z-10">
                  <div className={`font-bold text-lg mb-1 ${selectedIndustry === industry.id ? '' : 'opacity-80 group-hover:opacity-100'}`}>
                    {industry.name}
                  </div>
                  {selectedIndustry === industry.id && (
                    <div className="text-xs font-mono opacity-70">
                      {industry.marketSize}
                    </div>
                  )}
                </div>
                {selectedIndustry === industry.id && <ArrowRight className="w-5 h-5 text-indigo-500 relative z-10" />}

                {selectedIndustry === industry.id && (
                  <div className={`absolute left-0 bottom-0 top-0 w-1 ${isDark ? 'bg-indigo-500' : 'bg-indigo-600'}`}></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content: Industry Details */}
        <div className={`lg:col-span-8 p-8 md:p-12 ${isDark ? 'bg-neutral-900/30' : 'bg-white/50'}`}>
          {selectedIndustryData && (
            <div className="h-full flex flex-col animate-in fade-in duration-500">
              {/* Industry Header */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4 opacity-60">
                  <PieChart className="w-5 h-5" />
                  <span className="text-xs font-mono uppercase tracking-widest">Sector Overview</span>
                </div>
                <h4 className={`text-3xl md:text-4xl font-display font-medium ${textClass} mb-4`}>
                  {selectedIndustryData.name}
                </h4>
                <p className={`text-lg ${subtextClass} leading-relaxed max-w-3xl`}>
                  {selectedIndustryData.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
                <div className={`p-6 rounded-2xl border ${borderClass} ${cardBgClass} backdrop-blur-sm`}>
                  <div className="text-xs text-neutral-400 uppercase font-bold mb-2 tracking-wider">Market Size</div>
                  <div className={`text-2xl font-mono font-medium ${textClass}`}>{selectedIndustryData.marketSize}</div>
                </div>
                <div className={`p-6 rounded-2xl border ${borderClass} ${cardBgClass} backdrop-blur-sm`}>
                  <div className="text-xs text-neutral-400 uppercase font-bold mb-2 tracking-wider">Revenue Potential</div>
                  <div className={`text-2xl font-mono font-medium ${textClass}`}>{selectedIndustryData.revenuePotential}</div>
                </div>
                <div className={`p-6 rounded-2xl border ${borderClass} ${cardBgClass} backdrop-blur-sm`}>
                  <div className="text-xs text-neutral-400 uppercase font-bold mb-2 tracking-wider">Growth Rate</div>
                  <div className="text-2xl font-mono font-medium text-green-500">{selectedIndustryData.growthRate}</div>
                </div>
              </div>

              {/* Key Drivers List */}
              <div className="mt-auto">
                <h5 className={`text-xs font-bold uppercase tracking-wider ${subtextClass} mb-6 border-b ${borderClass} pb-4`}>
                  Strategic Drivers
                </h5>
                <div className="grid gap-4">
                  {selectedIndustryData.keyPoints.map((point, index) => (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className={`p-1.5 rounded-full mt-0.5 shrink-0 ${isDark ? 'bg-indigo-900/50 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                      <span className={`${textClass} text-base group-hover:translate-x-1 transition-transform duration-300 block`}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer: Strategic Growth Vectors Grid */}
      <div className={`border-t ${borderClass} bg-opacity-50 p-8 md:p-12 relative z-10`}>
        <h4 className={`text-sm font-bold uppercase tracking-wider ${subtextClass} mb-10 text-center opacity-70`}>
          Strategic Growth Vectors
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {growthMetrics.map((metric, index) => (
            <div key={index} className="text-center group">
              <div className={`text-5xl font-display font-medium mb-3 ${isDark ? 'text-white group-hover:text-indigo-400' : 'text-neutral-900 group-hover:text-indigo-600'} transition-colors duration-300`}>
                {metric.value}
              </div>
              <h5 className={`font-bold ${textClass} mb-2 text-lg`}>{metric.title}</h5>
              <p className={`text-sm ${subtextClass} leading-relaxed max-w-xs mx-auto`}>{metric.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarketOpportunityAnalyzer;
