import React, { useState } from 'react';
import { MapPin, Globe, TrendingUp, Users, Building2, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * National and World Impact Map Component
 * Ultra-Premium Visual Scale
 */
const ImpactMap = ({
  productName,
  nationalData,
  internationalData,
  stats,
  theme = 'light'
}) => {
  const [view, setView] = useState('national'); // 'national' or 'international'

  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-neutral-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderClass = isDark ? 'border-neutral-800' : 'border-neutral-200';
  const cardBgClass = isDark ? 'bg-neutral-800/50' : 'bg-neutral-50/50';

  const currentData = view === 'national' ? nationalData : internationalData;

  // Static map points for visual representation (Mock positions for India map)
  const mapPoints = [
    { top: '40%', left: '30%', city: 'Ahmedabad', projects: 12 },
    { top: '55%', left: '25%', city: 'Mumbai', projects: 8 },
    { top: '70%', left: '35%', city: 'Pune', projects: 4 },
    { top: '75%', left: '45%', city: 'Bangalore', projects: 6 },
    { top: '65%', left: '50%', city: 'Hyderabad', projects: 5 },
    { top: '30%', left: '40%', city: 'Delhi NCR', projects: 7 },
  ];

  return (
    <div className={`rounded-3xl border ${borderClass} ${bgClass} shadow-2xl overflow-hidden relative`}>
      {/* Background Ambience */}
      {isDark && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px]"></div>
        </div>
      )}

      <div className="p-8 md:p-12 relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-2 mb-4">
              <div className={`p-2 rounded-lg ${isDark ? 'bg-indigo-500/10 text-indigo-400' : 'bg-indigo-50 text-indigo-600'}`}>
                <Globe className="w-5 h-5" />
              </div>
              <span className={`text-sm font-bold uppercase tracking-wider ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Global Footprint</span>
            </div>
            <h3 className={`text-3xl md:text-5xl font-display font-medium ${textClass} mb-4`}>
              Deployment Map
            </h3>
            <p className={`text-lg ${subtextClass} font-light`}>
              Visualizing {productName}'s expanding infrastructure across key markets.
            </p>
          </div>

          {/* View Toggles */}
          <div className={`p-1 rounded-xl flex ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'}`}>
            <button
              onClick={() => setView('national')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm ${view === 'national' ? (isDark ? 'bg-neutral-700 text-white shadow-md' : 'bg-white text-neutral-900 shadow-md') : (isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900')}`}
            >
              National (India)
            </button>
            <button
              onClick={() => setView('international')}
              className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-sm ${view === 'international' ? (isDark ? 'bg-neutral-700 text-white shadow-md' : 'bg-white text-neutral-900 shadow-md') : (isDark ? 'text-neutral-400 hover:text-white' : 'text-neutral-500 hover:text-neutral-900')}`}
            >
              International
            </button>
          </div>
        </div>

        {/* Key Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className={`relative overflow-hidden p-6 rounded-2xl border ${borderClass} ${cardBgClass} group hover:border-indigo-500/30 transition-colors`}>
              <div className={`text-3xl font-mono font-medium ${textClass} mb-1 group-hover:scale-105 transition-transform origin-left`}>
                {stat.value}
              </div>
              <div className={`text-xs font-bold uppercase tracking-wider ${subtextClass} flex items-center gap-1`}>
                {stat.label}
                {index === 0 && <ArrowUpRight className="w-3 h-3 text-green-500" />}
              </div>
            </div>
          ))}
        </div>

        {/* Map & Location Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Visual Map Area */}
          <div className={`lg:col-span-2 rounded-3xl border ${borderClass} ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'} relative min-h-[400px] overflow-hidden`}>
            {/* Dotted Map Background Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `radial-gradient(${isDark ? '#6366f1' : '#a3a3a3'} 1px, transparent 1px)`, backgroundSize: '24px 24px' }}></div>

            {/* Abstract Map Content */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* This would be an SVG map in production, placeholder for now */}
              <div className={`text-[200px] opacity-5 font-display font-bold ${textClass}`}>
                {view === 'national' ? 'INDIA' : 'WORLD'}
              </div>
            </div>

            {/* Dynamic Map Points (Simulated) */}
            {view === 'national' && mapPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="absolute cursor-pointer group"
                style={{ top: point.top, left: point.left }}
              >
                <div className="relative">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full shadow-[0_0_15px_rgba(99,102,241,0.6)] animate-pulse"></div>
                  <div className={`absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap px-3 py-1.5 rounded-lg ${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'} text-xs font-bold shadow-lg border ${borderClass} opacity-0 group-hover:opacity-100 transition-opacity`}>
                    {point.city} <span className="text-indigo-500 ml-1">({point.projects})</span>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="absolute bottom-6 left-6">
              <div className={`px-4 py-2 rounded-lg ${isDark ? 'bg-neutral-900/90' : 'bg-white/90'} backdrop-blur-md border ${borderClass} shadow-lg`}>
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-indigo-500" />
                  <span className={`text-sm font-bold ${textClass}`}>{view === 'national' ? 'India' : 'Global'} Map</span>
                </div>
                <div className={`text-xs ${subtextClass}`}>{currentData.locations.length} active hubs detected</div>
              </div>
            </div>
          </div>

          {/* Location List Panel */}
          <div className={`rounded-3xl border ${borderClass} ${cardBgClass} overflow-hidden flex flex-col`}>
            <div className={`p-6 border-b ${borderClass}`}>
              <h4 className={`text-lg font-bold ${textClass}`}>Active Locations</h4>
              <p className={`text-xs ${subtextClass} mt-1`}>Click to view project details</p>
            </div>
            <div className="overflow-y-auto max-h-[400px] p-2 space-y-1">
              {currentData.locations.map((location, index) => (
                <button key={index} className={`w-full text-left p-3 rounded-xl flex items-start gap-4 transition-colors ${isDark ? 'hover:bg-neutral-700/50' : 'hover:bg-neutral-200/50'} group`}>
                  <div className={`mt-1 w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isDark ? 'bg-neutral-800 text-neutral-400' : 'bg-white text-neutral-500'} border ${borderClass} group-hover:border-indigo-500 transition-colors`}>
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div>
                    <div className={`font-bold text-sm ${textClass}`}>{location.city}</div>
                    <div className={`text-xs ${subtextClass} mb-1`}>{location.state}</div>
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500 text-[10px] font-bold uppercase tracking-wider">
                      {location.projects} Active Projects
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Metrics */}
        <div className={`pt-10 border-t ${borderClass} grid grid-cols-1 md:grid-cols-3 gap-8`}>
          <div className="flex gap-4 items-start">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-neutral-800 text-indigo-400' : 'bg-neutral-100 text-indigo-600'}`}>
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <div className={`text-2xl font-mono font-medium ${textClass}`}>{currentData.marketPenetration}</div>
              <div className={`text-xs font-bold uppercase tracking-wide ${subtextClass} mb-1`}>Market Penetration</div>
              <div className={`text-sm ${subtextClass} leading-snug`}>{currentData.penetrationDescription}</div>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-neutral-800 text-indigo-400' : 'bg-neutral-100 text-indigo-600'}`}>
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className={`text-2xl font-mono font-medium ${textClass}`}>{currentData.partnerships}</div>
              <div className={`text-xs font-bold uppercase tracking-wide ${subtextClass} mb-1`}>Active Partnerships</div>
              <div className={`text-sm ${subtextClass} leading-snug`}>{currentData.partnershipDescription}</div>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <div className={`p-3 rounded-xl ${isDark ? 'bg-neutral-800 text-indigo-400' : 'bg-neutral-100 text-indigo-600'}`}>
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <div className={`text-2xl font-mono font-medium ${textClass}`}>{currentData.reach}</div>
              <div className={`text-xs font-bold uppercase tracking-wide ${subtextClass} mb-1`}>Geographic Reach</div>
              <div className={`text-sm ${subtextClass} leading-snug`}>{currentData.reachDescription}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactMap;
