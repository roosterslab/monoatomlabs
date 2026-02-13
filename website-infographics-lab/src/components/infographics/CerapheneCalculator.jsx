import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, Package, Award, Download } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const CerapheneCalculator = () => {
  const [annualRequirement, setAnnualRequirement] = useState(100); // kg/year
  const [premiumGraphenePrice, setPremiumGraphenePrice] = useState(15000); // ₹/kg
  const [ceraphenePrice, setCeraphenePrice] = useState(5000); // ₹/kg
  const [timeHorizon, setTimeHorizon] = useState(3); // years

  const calculations = useMemo(() => {
    // Cost calculations
    const annualCostPremium = annualRequirement * premiumGraphenePrice;
    const annualCostCeraphene = annualRequirement * ceraphenePrice;
    const annualSavings = annualCostPremium - annualCostCeraphene;
    const savingsPercent = ((annualSavings / annualCostPremium) * 100).toFixed(1);

    // Multi-year projections
    const totalCostPremium = annualCostPremium * timeHorizon;
    const totalCostCeraphene = annualCostCeraphene * timeHorizon;
    const totalSavings = annualSavings * timeHorizon;

    // Market accessibility impact
    const accessibilityMetrics = {
      premiumReach: 15, // % of market
      cerapheneReach: 65, // % of market with Ceraphene pricing
      marketExpansion: 333, // % increase ((65-15)/15 * 100)
    };

    // Cost breakdown for pie chart
    const costBreakdown = [
      { name: 'Ceraphene Cost', value: annualCostCeraphene, color: '#10b981' },
      { name: 'Savings', value: annualSavings, color: '#f59e0b' },
    ];

    // Year-by-year comparison
    const yearlyData = [];
    for (let year = 1; year <= timeHorizon; year++) {
      yearlyData.push({
        year: `Year ${year}`,
        'Premium Graphene': annualCostPremium,
        'Ceraphene': annualCostCeraphene,
        'Savings': annualSavings,
      });
    }

    return {
      annualCostPremium,
      annualCostCeraphene,
      annualSavings,
      savingsPercent,
      totalCostPremium,
      totalCostCeraphene,
      totalSavings,
      accessibilityMetrics,
      costBreakdown,
      yearlyData,
    };
  }, [annualRequirement, premiumGraphenePrice, ceraphenePrice, timeHorizon]);

  const COLORS = ['#10b981', '#f59e0b'];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-pink-900 via-rose-900 to-red-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-pink-400/50 bg-pink-400/10 backdrop-blur mb-6">
            <Package className="w-4 h-4 text-pink-300 animate-pulse" />
            <span className="text-xs font-bold text-pink-300 tracking-wide uppercase">
              Ceraphene Calculator
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Cost Comparison Analysis
          </h1>
          <p className="text-xl text-pink-100 max-w-3xl mx-auto">
            Calculate savings with Ceraphene vs premium graphene alternatives
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Annual Requirement */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-pink-200 uppercase tracking-wide mb-3 block">
                Annual Requirement (kg)
              </label>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={annualRequirement}
                onChange={(e) => setAnnualRequirement(Number(e.target.value))}
                className="w-full accent-pink-500"
              />
              <div className="text-3xl font-bold text-white mt-2">
                {annualRequirement} kg/year
              </div>
            </div>

            {/* Premium Graphene Price */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-pink-200 uppercase tracking-wide mb-3 block">
                Premium Graphene Price (₹/kg)
              </label>
              <input
                type="range"
                min="10000"
                max="25000"
                step="1000"
                value={premiumGraphenePrice}
                onChange={(e) => setPremiumGraphenePrice(Number(e.target.value))}
                className="w-full accent-pink-500"
              />
              <div className="text-2xl font-bold text-white mt-2">₹{premiumGraphenePrice.toLocaleString()}</div>
            </div>

            {/* Ceraphene Price */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-pink-200 uppercase tracking-wide mb-3 block">
                Ceraphene Price (₹/kg)
              </label>
              <input
                type="range"
                min="3000"
                max="8000"
                step="500"
                value={ceraphenePrice}
                onChange={(e) => setCeraphenePrice(Number(e.target.value))}
                className="w-full accent-pink-500"
              />
              <div className="text-2xl font-bold text-white mt-2">₹{ceraphenePrice.toLocaleString()}</div>
            </div>

            {/* Time Horizon */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-pink-200 uppercase tracking-wide mb-3 block">
                Time Horizon (Years)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(Number(e.target.value))}
                className="w-full accent-pink-500"
              />
              <div className="text-2xl font-bold text-white mt-2">{timeHorizon} years</div>
            </div>

            {/* Export */}
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-all font-semibold">
              <Download className="w-4 h-4" />
              Export Report
            </button>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="bg-gradient-to-br from-green-400/20 to-teal-500/20 border-2 border-green-400/30 backdrop-blur p-6 rounded-xl">
                <TrendingDown className="w-8 h-8 text-green-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.savingsPercent}%
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">Cost Reduction</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400/30 backdrop-blur p-6 rounded-xl">
                <DollarSign className="w-8 h-8 text-yellow-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  ₹{(calculations.annualSavings / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-yellow-200 uppercase tracking-wide">Annual Savings</div>
              </div>

              <div className="bg-gradient-to-br from-blue-400/20 to-cyan-500/20 border-2 border-blue-400/30 backdrop-blur p-6 rounded-xl">
                <Package className="w-8 h-8 text-blue-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  ₹{(calculations.totalSavings / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-blue-200 uppercase tracking-wide">{timeHorizon}-Year Savings</div>
              </div>

              <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 border-2 border-purple-400/30 backdrop-blur p-6 rounded-xl">
                <Award className="w-8 h-8 text-purple-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.accessibilityMetrics.marketExpansion}%
                </div>
                <div className="text-xs text-purple-200 uppercase tracking-wide">Market Expansion</div>
              </div>
            </motion.div>

            {/* Cost Breakdown Pie Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Annual Cost Breakdown (vs Premium Graphene Budget)
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={calculations.costBreakdown}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {calculations.costBreakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => `₹${value.toLocaleString()}`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Yearly Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Year-by-Year Cost Comparison
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={calculations.yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#fff" />
                  <YAxis stroke="#fff" tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => [`₹${value.toLocaleString()}`, '']}
                  />
                  <Legend />
                  <Bar dataKey="Premium Graphene" fill="#ef4444" />
                  <Bar dataKey="Ceraphene" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Detailed Comparison Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">Detailed Comparison</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="px-4 py-3 text-left text-pink-200 font-semibold">Metric</th>
                      <th className="px-4 py-3 text-right text-red-300 font-semibold">Premium Graphene</th>
                      <th className="px-4 py-3 text-right text-green-300 font-semibold">Ceraphene</th>
                      <th className="px-4 py-3 text-right text-yellow-300 font-semibold">Difference</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="px-4 py-3 text-white">Price per kg</td>
                      <td className="px-4 py-3 text-right text-white font-mono">₹{premiumGraphenePrice.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right text-white font-mono">₹{ceraphenePrice.toLocaleString()}</td>
                      <td className="px-4 py-3 text-right text-green-400 font-mono">₹{(premiumGraphenePrice - ceraphenePrice).toLocaleString()}</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="px-4 py-3 text-white">Annual Cost ({annualRequirement} kg)</td>
                      <td className="px-4 py-3 text-right text-white font-mono">₹{(calculations.annualCostPremium / 100000).toFixed(2)}L</td>
                      <td className="px-4 py-3 text-right text-white font-mono">₹{(calculations.annualCostCeraphene / 100000).toFixed(2)}L</td>
                      <td className="px-4 py-3 text-right text-green-400 font-mono">₹{(calculations.annualSavings / 100000).toFixed(2)}L</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="px-4 py-3 text-white">{timeHorizon}-Year Total</td>
                      <td className="px-4 py-3 text-right text-white font-mono">₹{(calculations.totalCostPremium / 100000).toFixed(2)}L</td>
                      <td className="px-4 py-3 text-right text-white font-mono">₹{(calculations.totalCostCeraphene / 100000).toFixed(2)}L</td>
                      <td className="px-4 py-3 text-right text-green-400 font-mono font-bold">₹{(calculations.totalSavings / 100000).toFixed(2)}L</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-white">Performance</td>
                      <td className="px-4 py-3 text-right text-white">Premium</td>
                      <td className="px-4 py-3 text-right text-white">Equivalent</td>
                      <td className="px-4 py-3 text-right text-green-400">Same Quality</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Market Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Market Democratization Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-red-300 mb-2">
                    {calculations.accessibilityMetrics.premiumReach}%
                  </div>
                  <div className="text-sm text-pink-200">Market Reach (Premium Price)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-300 mb-2">
                    {calculations.accessibilityMetrics.cerapheneReach}%
                  </div>
                  <div className="text-sm text-pink-200">Market Reach (Ceraphene Price)</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-300 mb-2">
                    {calculations.accessibilityMetrics.marketExpansion}%
                  </div>
                  <div className="text-sm text-pink-200">Market Expansion</div>
                </div>
              </div>
              <div className="mt-6 text-center text-pink-100 text-sm">
                ✓ Ceraphene enables mass market applications previously limited by premium pricing
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CerapheneCalculator;
