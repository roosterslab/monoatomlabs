import React, { useState, useMemo } from 'react';
import { TrendingUp, Calendar, DollarSign, ArrowRight, Wallet, PieChart, BarChart3, Calculator } from 'lucide-react';
import Button from '../ui/Button';

/**
 * Long-Term Savings Calculator Component
 * Ultra-Premium Visual Scale
 */
const LongTermSavingsCalculator = ({
  productName,
  savingsPerUnit,
  volumeOptions,
  theme = 'light'
}) => {
  const [yearlyVolume, setYearlyVolume] = useState(volumeOptions.default || 1000);
  const [timeframe, setTimeframe] = useState(5);

  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-neutral-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderClass = isDark ? 'border-neutral-800' : 'border-neutral-200';
  const cardBgClass = isDark ? 'bg-neutral-800/80' : 'bg-neutral-50/80';

  const calculations = useMemo(() => {
    const yearlyData = [];
    let cumulative = 0;

    for (let year = 1; year <= timeframe; year++) {
      const yearlySavings = yearlyVolume * savingsPerUnit.calculation(yearlyVolume);
      cumulative += yearlySavings;

      yearlyData.push({
        year,
        savings: yearlySavings,
        cumulative
      });
    }

    return {
      yearlyData,
      totalSavings: cumulative,
      avgYearlySavings: cumulative / timeframe
    };
  }, [yearlyVolume, timeframe, savingsPerUnit]);

  return (
    <div className={`rounded-3xl border ${borderClass} ${bgClass} shadow-2xl overflow-hidden relative p-8 md:p-12`}>
      {/* Background Glow */}
      {isDark && (
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      )}

      <div className="flex items-center gap-3 mb-10 relative z-10">
        <div className={`p-3 rounded-xl ${isDark ? 'bg-green-500/10 text-green-400' : 'bg-green-50 text-green-600'}`}>
          <Calculator className="w-6 h-6" />
        </div>
        <div>
          <h3 className={`text-3xl font-display font-medium ${textClass}`}>ROI Projection</h3>
          <p className={`text-sm ${subtextClass}`}>Estimate your long-term value capture.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 relative z-10">
        {/* Left: Controls & Hero Metric */}
        <div className="lg:col-span-4 space-y-8">

          {/* Summary Hero Card */}
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl group-hover:bg-green-500/30 transition-colors duration-500"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-md">
                  <Wallet className="w-6 h-6 text-green-400" />
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider border border-green-500/20">
                  {timeframe} Year Yield
                </div>
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">
                Cumulative Savings
              </p>
              <div className="text-4xl lg:text-5xl font-mono font-medium tracking-tight mb-2">
                ₹{calculations.totalSavings.toLocaleString()}
              </div>
              <p className="text-neutral-400 text-sm font-light">
                Projected return based on current volume.
              </p>
            </div>
          </div>

          {/* Controls */}
          <div className={`space-y-6`}>
            {/* Volume Input */}
            <div>
              <div className="flex justify-between items-end mb-4">
                <label className={`text-sm font-bold uppercase tracking-wide ${subtextClass} flex items-center gap-2`}>
                  <BarChart3 className="w-4 h-4" /> {volumeOptions.label}
                </label>
                <span className={`text-xl font-mono font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                  {yearlyVolume.toLocaleString()} <span className="text-base text-neutral-400 font-normal">{volumeOptions.unit}</span>
                </span>
              </div>
              <div className="relative h-10 flex items-center">
                <input
                  type="range"
                  min={volumeOptions.min}
                  max={volumeOptions.max}
                  step={volumeOptions.step}
                  value={yearlyVolume}
                  onChange={(e) => setYearlyVolume(Number(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer relative z-20"
                  style={{
                    background: (() => {
                      const pct = ((yearlyVolume - volumeOptions.min) / (volumeOptions.max - volumeOptions.min)) * 100;
                      const filled = isDark ? '#6366f1' : '#4f46e5';
                      const empty = isDark ? '#374151' : '#e5e7eb';
                      return `linear-gradient(to right, ${filled} ${pct.toFixed(1)}%, ${empty} ${pct.toFixed(1)}%)`;
                    })()
                  }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono font-medium text-neutral-400 uppercase">
                <span>{volumeOptions.min.toLocaleString()}</span>
                <span>{volumeOptions.max.toLocaleString()}</span>
              </div>
            </div>

            {/* Timeframe */}
            <div>
              <label className={`text-sm font-bold uppercase tracking-wide ${subtextClass} mb-4 block flex items-center gap-2`}>
                <Calendar className="w-4 h-4" /> Period
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[3, 5, 10].map((years) => (
                  <button
                    key={years}
                    onClick={() => setTimeframe(years)}
                    className={`py-3 rounded-xl text-sm font-bold transition-all duration-300 ${timeframe === years
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 shadow-lg scale-105'
                      : `bg-neutral-100 dark:bg-neutral-800 ${textClass} hover:bg-neutral-200 dark:hover:bg-neutral-700`
                      }`}
                  >
                    {years} Years
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Detailed Breakdown */}
        <div className="lg:col-span-8 flex flex-col justify-between">
          {/* Visual Chart Bars */}
          <div className="flex items-end justify-between h-64 mb-8 pt-10 px-4 border-b border-dashed border-neutral-200 dark:border-neutral-800 gap-2 md:gap-4 relative">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 z-0">
              <div className="w-full h-px border-t border-dashed border-neutral-400"></div>
              <div className="w-full h-px border-t border-dashed border-neutral-400"></div>
              <div className="w-full h-px border-t border-dashed border-neutral-400"></div>
              <div className="w-full h-px border-t border-dashed border-neutral-400"></div>
            </div>

            {calculations.yearlyData.map((data, index) => {
              const heightPercent = (data.cumulative / calculations.totalSavings) * 100;
              return (
                <div key={data.year} className="relative flex flex-col items-center flex-1 group z-10">
                  <div className="relative w-full max-w-[60px] flex items-end justify-center h-full group-hover:scale-105 transition-transform origin-bottom duration-300">
                    <div
                      className={`w-full rounded-t-lg opacity-80 group-hover:opacity-100 transition-all duration-500 relative overflow-hidden ${isDark ? 'bg-green-500/20' : 'bg-green-500/20'}`}
                      style={{ height: `${heightPercent}%` }}
                    >
                      <div className={`absolute bottom-0 inset-x-0 bg-green-500 rounded-t-lg transition-all duration-500 ease-out`} style={{ height: '100%' }}></div>
                      {/* Gloss Effect */}
                      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/20 to-transparent pointer-events-none"></div>
                    </div>

                    {/* Tooltip */}
                    <div className={`absolute -top-12 left-1/2 -translate-x-1/2 bg-neutral-900 text-white text-xs font-bold py-1 px-3 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50 pointer-events-none`}>
                      ₹{data.cumulative.toLocaleString()}
                      {/* Arrow */}
                      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 rotate-45"></div>
                    </div>
                  </div>
                  <span className={`mt-3 text-xs font-mono font-bold ${subtextClass}`}>Y{data.year}</span>
                </div>
              )
            })}
          </div>

          {/* Annual Breakdown */}
          <div className="space-y-4">
            {calculations.yearlyData.slice(0, 3).map((data, index) => (
              <div key={data.year} className={`flex items-center justify-between p-4 rounded-xl border ${borderClass} ${cardBgClass} group hover:border-indigo-500/30 transition-colors`}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center font-bold text-sm ${isDark ? 'bg-neutral-800 text-neutral-400' : 'bg-neutral-100 text-neutral-500'}`}>
                    Y{data.year}
                  </div>
                  <div>
                    <div className={`text-xs uppercase font-bold tracking-wide ${subtextClass}`}>Cumulative Savings</div>
                    <div className={`font-mono font-medium ${textClass} group-hover:text-green-500 transition-colors`}>
                      ₹{data.cumulative.toLocaleString()}
                    </div>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 ${subtextClass} group-hover:translate-x-1 transition-transform`} />
              </div>
            ))}
            {calculations.yearlyData.length > 3 && (
              <div className={`text-center text-xs font-bold uppercase tracking-widest ${subtextClass} pt-2`}>
                & {calculations.yearlyData.length - 3} more years projected
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LongTermSavingsCalculator;
