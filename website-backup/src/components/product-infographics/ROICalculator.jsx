import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Calculator, TrendingUp, TrendingDown, DollarSign, Package, Download, Send, Zap, Leaf, ArrowRight, BarChart3, PieChart } from 'lucide-react';
import Button from '../ui/Button';

/**
 * Enhanced ROI Calculator Component
 * Ultra-Premium Dashboard Aesthetic
 */
const ROICalculator = ({
  productName,
  calculations,
  defaultInputs,
  impactMetrics,
  theme = 'light'
}) => {
  // Initialize inputs with default values from config
  const initialInputs = Object.keys(defaultInputs).reduce((acc, key) => {
    const config = defaultInputs[key];
    const defaultValue = config.default !== undefined
      ? config.default
      : Math.round((config.min + config.max) / 2);
    acc[key] = defaultValue;
    return acc;
  }, {});

  const [inputs, setInputs] = useState(initialInputs);

  // Theme-based colors
  const isDark = theme === 'dark';
  const bgCard = isDark ? 'bg-neutral-900' : 'bg-white';
  const borderColor = isDark ? 'border-neutral-700' : 'border-neutral-200';
  const textColor = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';

  const results = useMemo(() => {
    return calculations(inputs);
  }, [inputs, calculations]);

  const handleInputChange = (key, value) => {
    setInputs(prev => ({ ...prev, [key]: Number(value) }));
  };

  // Generate projection data for chart
  const projectionData = useMemo(() => {
    if (!results.totalSavings || !results.productCost) return [];

    const years = 5;
    const annualSavings = results.totalSavings / years;
    const data = [];
    let cumulative = -(results.productCost || 0);

    for (let year = 0; year <= years; year++) {
      if (year === 0) {
        data.push({ year: 0, cumulative: cumulative });
      } else {
        cumulative += annualSavings;
        data.push({ year, cumulative });
      }
    }
    return data;
  }, [results]);

  return (
    <div className={`rounded-3xl border ${borderColor} relative overflow-hidden shadow-2xl`}>
      {/* Ambient Glows */}
      {isDark && (
        <>
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        </>
      )}

      <div className={`grid grid-cols-1 lg:grid-cols-12 min-h-[600px] relative z-10 ${bgCard}`}>
        {/* Left Sidebar: Controls (Darker/Glassy) */}
        <div className={`lg:col-span-4 p-8 border-b lg:border-b-0 lg:border-r ${borderColor} flex flex-col relative`}>
          <div className="mb-8">
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-6 ${isDark ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-50 text-indigo-700'}`}>
              <Calculator className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Financial Modeling</span>
            </div>
            <h3 className={`text-2xl font-display font-medium ${textColor} mb-2`}>
              Project Parameters
            </h3>
            <p className={`text-sm ${subtextClass}`}>
              Adjust inputs to simulate your specific scenario.
            </p>
          </div>

          <div className="space-y-8 flex-grow">
            {Object.keys(defaultInputs).map((key) => {
              const config = defaultInputs[key];
              return (
                <div key={key} className="group">
                  <div className="flex justify-between items-baseline mb-3">
                    <label className={`text-sm font-medium ${textColor} group-hover:text-indigo-500 transition-colors`}>
                      {config.label}
                    </label>
                    <span className={`text-sm font-mono font-bold ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>
                      {inputs[key].toLocaleString()} {config.unit}
                    </span>
                  </div>
                  <div className="relative h-6 flex items-center">
                    <input
                      type="range"
                      min={config.min}
                      max={config.max}
                      step={config.step}
                      value={inputs[key]}
                      onChange={(e) => handleInputChange(key, e.target.value)}
                      className="w-full h-1.5 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] text-neutral-400 font-medium uppercase tracking-wider mt-1">
                    <span>{config.min}</span>
                    <span>{config.max}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-200 dark:border-neutral-800 space-y-3">
            <Button variant="primary" theme={isDark ? 'light' : 'dark'} className="w-full justify-between group shadow-lg shadow-indigo-500/20">
              <span>Generate Report</span>
              <Download className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" />
            </Button>
          </div>
        </div>

        {/* Right Content: Dashboard */}
        <div className="lg:col-span-8 bg-neutral-50/50 dark:bg-neutral-900/50 p-8 md:p-12 flex flex-col">
          {/* Top Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Total Savings Hero Card */}
            <div className={`p-6 rounded-2xl border ${isDark ? 'border-indigo-500/30 bg-indigo-900/10' : 'border-indigo-100 bg-white'} relative overflow-hidden group`}>
              <div className={`absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity`}>
                <DollarSign className="w-24 h-24 text-indigo-500" />
              </div>
              <div className="relative z-10">
                <div className="text-xs font-bold uppercase tracking-widest text-indigo-500 mb-2">Net Projected Savings</div>
                <div className={`text-4xl md:text-5xl font-display font-medium ${textColor} mb-2 tracking-tight`}>
                  ₹{results.totalSavings?.toLocaleString() || '0'}
                </div>
                <div className={`text-xs ${subtextClass} font-medium`}>5-Year Lifecycle Estimate</div>
              </div>
            </div>

            {/* ROI & Payback Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`p-5 rounded-2xl border ${borderColor} ${isDark ? 'bg-neutral-800/50' : 'bg-white'} flex flex-col justify-center`}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-4 h-4 text-green-500" />
                  <span className={`text-xs font-bold uppercase tracking-widest ${subtextClass}`}>ROI</span>
                </div>
                <div className={`text-3xl font-display font-medium ${textColor}`}>
                  {results.roiPercentage || '0'}%
                </div>
              </div>
              <div className={`p-5 rounded-2xl border ${borderColor} ${isDark ? 'bg-neutral-800/50' : 'bg-white'} flex flex-col justify-center`}>
                <div className="flex items-center gap-2 mb-2">
                  <TrendingDown className="w-4 h-4 text-blue-500" />
                  <span className={`text-xs font-bold uppercase tracking-widest ${subtextClass}`}>Payback</span>
                </div>
                <div className={`text-3xl font-display font-medium ${textColor}`}>
                  {results.paybackPeriod || '—'} <span className="text-sm text-neutral-400 font-normal">mo</span>
                </div>
              </div>
            </div>
          </div>

          {/* Metrics Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <div className={`p-4 rounded-xl border ${borderColor} ${isDark ? 'bg-neutral-800/30' : 'bg-neutral-50'} text-center`}>
              <div className={`text-[10px] font-bold uppercase tracking-wider ${subtextClass} mb-1`}>Savings / Unit</div>
              <div className={`text-lg font-bold ${textColor}`}>₹{results.savingsPerUnit?.value?.toLocaleString() || '0'}</div>
            </div>
            <div className={`p-4 rounded-xl border ${borderColor} ${isDark ? 'bg-neutral-800/30' : 'bg-neutral-50'} text-center`}>
              <div className={`text-[10px] font-bold uppercase tracking-wider ${subtextClass} mb-1`}>Investment</div>
              <div className={`text-lg font-bold ${textColor}`}>₹{(results.productCost / 100000).toFixed(1)}L</div>
            </div>
            {results.cementSaved && (
              <div className={`p-4 rounded-xl border border-green-500/20 ${isDark ? 'bg-green-900/10' : 'bg-green-50'} text-center`}>
                <div className="text-[10px] font-bold uppercase tracking-wider text-green-600/80 mb-1">Cement Saved</div>
                <div className="text-lg font-bold text-green-600">{results.cementSaved.toLocaleString()} <span className="text-xs font-normal">bags</span></div>
              </div>
            )}
            {results.co2Reduced && (
              <div className={`p-4 rounded-xl border border-teal-500/20 ${isDark ? 'bg-teal-900/10' : 'bg-teal-50'} text-center`}>
                <div className="text-[10px] font-bold uppercase tracking-wider text-teal-600/80 mb-1">CO₂ Avoided</div>
                <div className="text-lg font-bold text-teal-600">{(results.co2Reduced / 1000).toFixed(1)} <span className="text-xs font-normal">tons</span></div>
              </div>
            )}
          </div>

          {/* Chart Area */}
          <div className={`flex-grow border ${borderColor} rounded-2xl ${isDark ? 'bg-neutral-800/50' : 'bg-white'} p-6 relative`}>
            <h4 className={`text-xs font-bold uppercase tracking-widest ${subtextClass} mb-6 flex items-center gap-2`}>
              <BarChart3 className="w-4 h-4" />
              Financial Projection (5 Years)
            </h4>

            {projectionData.length > 0 ? (
              <div className="h-48 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={projectionData} margin={{ top: 5, right: 20, bottom: 5, left: -20 }}>
                    <defs>
                      <linearGradient id="colorCumulative" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#333' : '#f1f5f9'} vertical={false} />
                    <XAxis
                      dataKey="year"
                      stroke={isDark ? '#525252' : '#94a3b8'}
                      fontSize={10}
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                    />
                    <YAxis
                      stroke={isDark ? '#525252' : '#94a3b8'}
                      fontSize={10}
                      tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
                      tickLine={false}
                      axisLine={false}
                      tickMargin={10}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: isDark ? '#171717' : '#ffffff',
                        border: `1px solid ${isDark ? '#404040' : '#e2e8f0'}`,
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                        borderRadius: '8px',
                        fontSize: '12px',
                        color: isDark ? '#fff' : '#000'
                      }}
                      formatter={(value) => [`₹${(value / 100000).toFixed(2)}L`, 'Cumulative Savings']}
                    />
                    <Line
                      type="monotone"
                      dataKey="cumulative"
                      stroke="#6366f1"
                      strokeWidth={3}
                      dot={{ fill: '#6366f1', strokeWidth: 2, r: 4, stroke: isDark ? '#171717' : '#fff' }}
                      activeDot={{ r: 6, strokeWidth: 0, fill: '#818cf8' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            ) : (
              <div className="h-48 w-full flex items-center justify-center text-neutral-400 text-sm">
                Chart data unavailable
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
