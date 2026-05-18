import React from 'react';
import { TrendingDown, DollarSign, Clock, AlertCircle, Coins } from 'lucide-react';

/**
 * Total Cost of Ownership Analysis Component
 * Ultra-Premium Visual Scale
 */
const TCOAnalysis = ({
  productName,
  timeframe = '5 years',
  traditionalSolution,
  productSolution,
  breakdown,
  highlights = [
    { label: 'Reduced Maintenance', value: '-40%', color: 'green' },
    { label: 'Longevity Multiplier', value: '2.5x', color: 'blue' },
  ],
  theme = 'light',
  copy: copyOverrides,
}) => {

  const defaultCopy = {
    badgeLabel: 'Cost Analysis',
    title: 'Total Cost of Ownership',
    subtitle: 'A comparative 5-year outlook on capital and operational expenditure.',
    projectedSavingsLabel: 'Projected Savings',
    traditionalLabel: 'Traditional',
    maintenanceLabel: 'Maintenance',
    maintenanceValue: 'High',
    lifecycleLabel: 'Lifecycle',
    lifecycleValue: 'Standard',
    withProductLabelTemplate: 'With {productName}',
    netValueCreatedLabel: 'Net Value Created',
    directCapitalRetainedTemplate: 'Direct capital retained over {timeframe}.',
    paybackLabel: 'Payback:',
    breakdownHeaders: {
      costCategory: 'Cost Category',
      standard: 'Standard',
      usingProductTemplate: 'Using {productName}',
      delta: 'Delta',
    },
  };

  const copy = { ...defaultCopy, ...(copyOverrides || {}) };
  copy.breakdownHeaders = { ...defaultCopy.breakdownHeaders, ...(copyOverrides?.breakdownHeaders || {}) };

  const formatTemplate = (template, vars) => {
    if (typeof template !== 'string') return template;
    return template.replace(/\{(\w+)\}/g, (_match, key) => {
      const value = vars?.[key];
      return value == null ? '' : String(value);
    });
  };

  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-neutral-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderClass = isDark ? 'border-neutral-700' : 'border-neutral-200';

  const savings = traditionalSolution.total - productSolution.total;
  const savingsPercentage = ((savings / traditionalSolution.total) * 100).toFixed(1);

  return (
    <div className={`rounded-3xl border ${borderClass} relative overflow-hidden shadow-2xl`}>
      {/* Ambient Glows */}
      {isDark && (
        <>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        </>
      )}

      <div className={`p-8 md:p-12 relative z-10 ${bgClass}`}>
        {/* Introduction Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${isDark ? 'bg-green-900/30 text-green-400' : 'bg-green-50 text-green-700'}`}>
              <Coins className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">{copy.badgeLabel}</span>
            </div>
            <h3 className={`text-3xl lg:text-4xl font-display font-medium ${textClass} mb-2`}>
              {copy.title}
            </h3>
            <p className={`text-lg ${subtextClass} max-w-xl`}>
              {copy.subtitle}
            </p>
          </div>
          {/* Summary Stat */}
          <div className={`hidden md:flex flex-col items-end`}>
            <div className="text-sm font-bold uppercase tracking-widest text-green-500 mb-1">{copy.projectedSavingsLabel}</div>
            <div className={`text-5xl font-display font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>
              {savingsPercentage}%
            </div>
          </div>
        </div>

        {/* Hero Comparison Visuals */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Traditional Card */}
          <div className={`p-8 rounded-2xl border ${borderClass} ${isDark ? 'bg-neutral-800/30 hover:bg-neutral-800/50' : 'bg-neutral-50 hover:bg-white hover:shadow-lg'} transition-all duration-300 group`}>
            <div className="flex items-center justify-between mb-8 group-hover:opacity-100 opacity-60 transition-opacity">
              <div className="text-xs font-bold uppercase tracking-widest text-neutral-500">{copy.traditionalLabel}</div>
              <AlertCircle className="w-5 h-5 text-neutral-400 group-hover:text-red-400 transition-colors" />
            </div>
            <div className={`text-3xl lg:text-4xl font-display font-medium ${textClass} mb-2 group-hover:scale-105 origin-left transition-transform`}>
              ₹{traditionalSolution.total.toLocaleString()}
            </div>
            <div className="w-full bg-neutral-200 dark:bg-neutral-700 h-1.5 rounded-full overflow-hidden mb-6">
              <div className="h-full bg-neutral-400 w-full"></div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-xs">
                <span className={subtextClass}>{copy.maintenanceLabel}</span>
                <span className={`font-mono ${textClass}`}>{copy.maintenanceValue}</span>
              </div>
              <div className="flex justify-between text-xs">
                <span className={subtextClass}>{copy.lifecycleLabel}</span>
                <span className={`font-mono ${textClass}`}>{copy.lifecycleValue}</span>
              </div>
            </div>
          </div>

          {/* With Product Card (Hero) */}
          <div className={`p-1 rounded-2xl bg-gradient-to-br from-blue-500 via-indigo-500 to-green-500 shadow-2xl relative z-10 scale-105`}>
            <div className={`h-full w-full rounded-xl ${isDark ? 'bg-neutral-900' : 'bg-white'} p-7 flex flex-col relative overflow-hidden`}>
              <div className="absolute top-0 right-0 p-6 opacity-[0.03]">
                <DollarSign className="w-32 h-32" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="text-xs font-bold uppercase tracking-widest text-indigo-500">{formatTemplate(copy.withProductLabelTemplate, { productName })}</div>
                  <div className="p-1.5 bg-indigo-100 dark:bg-indigo-900/50 rounded text-indigo-600 dark:text-indigo-400">
                    <TrendingDown className="w-4 h-4" />
                  </div>
                </div>
                <div className={`text-4xl lg:text-5xl font-display font-medium ${textClass} mb-2`}>
                  ₹{productSolution.total.toLocaleString()}
                </div>

                <div className="w-full bg-neutral-100 dark:bg-neutral-800 h-1.5 rounded-full overflow-hidden mb-6">
                  <div className="h-full bg-gradient-to-r from-blue-500 to-indigo-500" style={{ width: `${100 - savingsPercentage}%` }}></div>
                </div>

                <div className="space-y-3 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  {highlights.map((h, i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className={subtextClass}>{h.label}</span>
                      <span className={`font-bold font-mono ${h.color === 'green' ? 'text-green-500' : 'text-blue-500'}`}>{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Net Savings Card */}
          <div className={`p-8 rounded-2xl border ${borderClass} ${isDark ? 'bg-green-900/10 border-green-800/30' : 'bg-green-50 border-green-100'} flex flex-col justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-green-500/5 pulse-slow"></div>
            <div className="relative z-10">
              <div className="text-xs font-bold uppercase tracking-widest text-green-600 mb-4">{copy.netValueCreatedLabel}</div>
              <div className={`text-4xl font-display font-bold text-green-500 mb-2`}>
                ₹{savings.toLocaleString()}
              </div>
              <div className={`text-sm ${isDark ? 'text-green-400' : 'text-green-700'} mb-8 opacity-80`}>
                {formatTemplate(copy.directCapitalRetainedTemplate, { timeframe })}
              </div>

              <div className={`inline-flex items-center gap-2 text-xs font-mono px-3 py-2 rounded-lg ${isDark ? 'bg-green-900/30 text-green-300' : 'bg-green-100 text-green-800'}`}>
                <Clock className="w-3.5 h-3.5" />
                {copy.paybackLabel} {productSolution.paybackPeriod || '< 18 mo'}
              </div>
            </div>
          </div>
        </div>

        {/* Breakdown Table (Clean & Technical) */}
        <div className={`border ${borderClass} rounded-2xl overflow-hidden`}>
          <div className="grid grid-cols-12 bg-neutral-100 dark:bg-neutral-800/50 p-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
            <div className="col-span-4">{copy.breakdownHeaders.costCategory}</div>
            <div className="col-span-3 text-right">{copy.breakdownHeaders.standard}</div>
            <div className="col-span-3 text-right">{formatTemplate(copy.breakdownHeaders.usingProductTemplate, { productName })}</div>
            <div className="col-span-2 text-right">{copy.breakdownHeaders.delta}</div>
          </div>
          <div className="divide-y divide-neutral-200 dark:divide-neutral-800">
            {breakdown.map((item, index) => {
              const savingAmount = item.traditional - item.withProduct;
              const isNegative = savingAmount < 0;

              return (
                <div key={index} className={`grid grid-cols-12 p-5 items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors group`}>
                  <div className="col-span-4">
                    <div className={`font-medium ${textClass} text-sm`}>{item.category}</div>
                    <div className={`text-xs ${subtextClass} opacity-0 group-hover:opacity-100 transition-opacity`}>{item.description}</div>
                  </div>
                  <div className={`col-span-3 text-right font-mono text-sm ${subtextClass}`}>
                    ₹{item.traditional.toLocaleString()}
                  </div>
                  <div className={`col-span-3 text-right font-mono text-sm font-medium ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>
                    ₹{item.withProduct.toLocaleString()}
                  </div>
                  <div className={`col-span-2 text-right font-mono text-sm font-bold ${isNegative ? 'text-neutral-400' : 'text-green-500'}`}>
                    {isNegative ? '-' : '+'}₹{Math.abs(savingAmount).toLocaleString()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default TCOAnalysis;
