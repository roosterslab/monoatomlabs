import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, Package, Award, Calculator } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const CerapheneCostComparison = () => {
  const [annualRequirement, setAnnualRequirement] = useState(100); // units/year
  const [premiumPrice, setPremiumPrice] = useState(15000); // ₹/50ml
  const [ceraphenePrice] = useState(5000); // ₹/50ml (fixed)
  const [timeHorizon, setTimeHorizon] = useState(3); // years

  const calculations = useMemo(() => {
    // Cost calculations
    const annualCostPremium = annualRequirement * premiumPrice;
    const annualCostCeraphene = annualRequirement * ceraphenePrice;
    const annualSavings = annualCostPremium - annualCostCeraphene;
    const savingsPercent = ((annualSavings / annualCostPremium) * 100).toFixed(1);

    // Multi-year projections
    const totalCostPremium = annualCostPremium * timeHorizon;
    const totalCostCeraphene = annualCostCeraphene * timeHorizon;
    const totalSavings = annualSavings * timeHorizon;

    // Cost breakdown for pie chart
    const costBreakdown = [
      { name: 'Ceraphene Cost', value: annualCostCeraphene, color: '#0d9488' },
      { name: 'Savings', value: annualSavings, color: '#10b981' },
    ];

    // Year-by-year comparison
    const yearlyData = [];
    for (let year = 1; year <= timeHorizon; year++) {
      yearlyData.push({
        year: `Year ${year}`,
        'Premium Coating': annualCostPremium,
        'Ceraphene': annualCostCeraphene,
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
      costBreakdown,
      yearlyData,
    };
  }, [annualRequirement, premiumPrice, ceraphenePrice, timeHorizon]);

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-purple-500/30 bg-purple-500/10 backdrop-blur mb-6">
            <Calculator className="w-4 h-4 text-purple-400" />
            <span className="text-xs font-mono text-purple-400 tracking-widest uppercase">
              Cost Analysis
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Ceraphene Cost Comparison
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Premium performance at 60-70% lower cost than competitors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Controls */}
          <div className="lg:col-span-4 space-y-6">
            {/* Annual Requirement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <label className="text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block">
                Annual Units Required
              </label>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={annualRequirement}
                onChange={(e) => setAnnualRequirement(Number(e.target.value))}
                className="w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
              />
              <div className="text-3xl font-mono font-bold text-white mt-3">
                {annualRequirement} <span className="text-lg text-neutral-400">units/year</span>
              </div>
            </motion.div>

            {/* Premium Competitor Price */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <label className="text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block">
                Competitor Price (₹/50ml)
              </label>
              <input
                type="range"
                min="12000"
                max="20000"
                step="1000"
                value={premiumPrice}
                onChange={(e) => setPremiumPrice(Number(e.target.value))}
                className="w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
              />
              <div className="text-3xl font-mono font-bold text-white mt-3">
                ₹{premiumPrice.toLocaleString()}
              </div>
            </motion.div>

            {/* Ceraphene Price (Display Only) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-r from-brand-500/20 to-green-500/20 border border-brand-500/30 rounded-sm p-6"
            >
              <label className="text-sm font-mono text-brand-300 uppercase tracking-wide mb-3 block">
                Ceraphene Price (₹/50ml)
              </label>
              <div className="text-4xl font-mono font-bold text-brand-400 mt-3">
                ₹{ceraphenePrice.toLocaleString()}
              </div>
              <div className="text-xs text-neutral-400 mt-2 font-mono">Premium quality, affordable price</div>
            </motion.div>

            {/* Time Horizon */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <label className="text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block">
                Time Horizon (Years)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(Number(e.target.value))}
                className="w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
              />
              <div className="text-3xl font-mono font-bold text-white mt-3">
                {timeHorizon} <span className="text-lg text-neutral-400">years</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-8 space-y-6">
            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="bg-neutral-900/80 backdrop-blur border border-green-500/30 rounded-sm p-6">
                <TrendingDown className="w-6 h-6 text-green-400 mb-3" />
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  {calculations.savingsPercent}%
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Cost Reduction</div>
              </div>

              <div className="bg-neutral-900/80 backdrop-blur border border-brand-500/30 rounded-sm p-6">
                <DollarSign className="w-6 h-6 text-brand-400 mb-3" />
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  ₹{(calculations.annualSavings / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Annual Savings</div>
              </div>

              <div className="bg-neutral-900/80 backdrop-blur border border-purple-500/30 rounded-sm p-6">
                <Package className="w-6 h-6 text-purple-400 mb-3" />
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  ₹{(calculations.totalSavings / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono">{timeHorizon}-Yr Total</div>
              </div>

              <div className="bg-neutral-900/80 backdrop-blur border border-yellow-500/30 rounded-sm p-6">
                <Award className="w-6 h-6 text-yellow-400 mb-3" />
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  9H+
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Hardness</div>
              </div>
            </motion.div>

            {/* Cost Comparison Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Year-by-Year Cost Comparison
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={calculations.yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                  <XAxis dataKey="year" stroke="#9ca3af" style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }} />
                  <YAxis stroke="#9ca3af" tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`} style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '4px', fontFamily: 'Space Grotesk' }}
                    formatter={(value) => [`₹${value.toLocaleString()}`, '']}
                  />
                  <Legend wrapperStyle={{ fontFamily: 'Space Grotesk' }} />
                  <Bar dataKey="Premium Coating" fill="#ef4444" />
                  <Bar dataKey="Ceraphene" fill="#0d9488" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Cost Breakdown */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Pie Chart */}
              <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6">
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Cost Allocation
                </h3>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Pie
                      data={calculations.costBreakdown}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {calculations.costBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '4px', fontFamily: 'Space Grotesk' }}
                      formatter={(value) => `₹${value.toLocaleString()}`}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Comparison Table */}
              <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6">
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Detailed Breakdown
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                    <span className="text-sm text-neutral-400 font-mono">Unit Price</span>
                    <div className="text-right">
                      <div className="text-red-400 line-through font-mono">₹{premiumPrice.toLocaleString()}</div>
                      <div className="text-brand-400 font-bold font-mono">₹{ceraphenePrice.toLocaleString()}</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                    <span className="text-sm text-neutral-400 font-mono">Annual Cost</span>
                    <div className="text-right">
                      <div className="text-red-400 line-through font-mono">₹{(calculations.annualCostPremium / 100000).toFixed(2)}L</div>
                      <div className="text-brand-400 font-bold font-mono">₹{(calculations.annualCostCeraphene / 100000).toFixed(2)}L</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                    <span className="text-sm text-neutral-400 font-mono">{timeHorizon}-Year Total</span>
                    <div className="text-right">
                      <div className="text-red-400 line-through font-mono">₹{(calculations.totalCostPremium / 100000).toFixed(2)}L</div>
                      <div className="text-brand-400 font-bold font-mono">₹{(calculations.totalCostCeraphene / 100000).toFixed(2)}L</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center pt-3">
                    <span className="text-sm text-white font-mono font-bold">Total Savings</span>
                    <div className="text-2xl text-green-400 font-bold font-mono">
                      ₹{(calculations.totalSavings / 100000).toFixed(2)}L
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Value Proposition */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-sm p-8"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Why Ceraphene Wins
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-brand-400 mb-2">60-70%</div>
                  <div className="text-sm text-neutral-400 font-mono">Lower Cost</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-brand-400 mb-2">9H+</div>
                  <div className="text-sm text-neutral-400 font-mono">Scratch Resistance</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-mono font-bold text-brand-400 mb-2">3-4+yr</div>
                  <div className="text-sm text-neutral-400 font-mono">Durability</div>
                </div>
              </div>
              <div className="mt-6 text-center text-neutral-400 text-sm font-mono">
                ✓ Graphene-enhanced ceramic coating with premium performance at fraction of the cost
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CerapheneCostComparison;
