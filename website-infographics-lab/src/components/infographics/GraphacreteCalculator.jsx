import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingDown, DollarSign, Zap, Download } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const GraphacreteCalculator = () => {
  const [projectVolume, setProjectVolume] = useState(1000); // m³
  const [targetStrength, setTargetStrength] = useState('M50'); // M40, M50, M60
  const [cementCost, setCementCost] = useState(400); // ₹/bag (50kg)
  const [graphacreteCost, setGraphacreteCost] = useState(50); // ₹/m³

  const calculations = useMemo(() => {
    // Traditional mix calculations
    const traditionalMix = {
      M40: { cementBags: 7.0, cost: 7.0 * cementCost },
      M50: { cementBags: 8.5, cost: 8.5 * cementCost },
      M60: { cementBags: 10.0, cost: 10.0 * cementCost },
    };

    // With Graphacrete (achieve higher strength with lower grade + Graphacrete)
    const graphacreteMix = {
      M40: { baseMix: 'M25', cementBags: 5.5, reduction: 21.4 },
      M50: { baseMix: 'M30', cementBags: 6.8, reduction: 20.0 },
      M60: { baseMix: 'M40', cementBags: 8.4, reduction: 16.0 },
    };

    const traditional = traditionalMix[targetStrength];
    const withGraphacrete = graphacreteMix[targetStrength];

    // Cost calculations
    const traditionalCostPerM3 = traditional.cost;
    const graphacreteCostPerM3 = (withGraphacrete.cementBags * cementCost) + graphacreteCost;

    const savingsPerM3 = traditionalCostPerM3 - graphacreteCostPerM3;
    const totalSavings = savingsPerM3 * projectVolume;
    const cementSaved = (traditional.cementBags - withGraphacrete.cementBags) * projectVolume;
    const co2Reduced = cementSaved * 50 * 0.9; // 50kg/bag × 0.9kg CO₂/kg cement

    // Additional benefits
    const waterResistanceImprovement = 37.5; // Average of 30-45%
    const strengthIncrease = 50; // M30→M50 or equivalent

    // Comparison data
    const comparisonData = [
      {
        metric: 'Cement (bags/m³)',
        Traditional: traditional.cementBags,
        'With Graphacrete': withGraphacrete.cementBags,
      },
      {
        metric: 'Cost (₹/m³)',
        Traditional: traditionalCostPerM3,
        'With Graphacrete': graphacreteCostPerM3,
      },
    ];

    return {
      traditional,
      withGraphacrete,
      traditionalCostPerM3,
      graphacreteCostPerM3,
      savingsPerM3,
      totalSavings,
      cementSaved,
      co2Reduced,
      waterResistanceImprovement,
      strengthIncrease,
      comparisonData,
    };
  }, [projectVolume, targetStrength, cementCost, graphacreteCost]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-900 via-violet-900 to-indigo-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-purple-400/50 bg-purple-400/10 backdrop-blur mb-6">
            <Calculator className="w-4 h-4 text-purple-300 animate-pulse" />
            <span className="text-xs font-bold text-purple-300 tracking-wide uppercase">
              Graphacrete Calculator
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Concrete Cost & Strength
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Calculate savings and performance gains with Graphacrete-enhanced concrete
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Project Volume */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-purple-200 uppercase tracking-wide mb-3 block">
                Project Volume (m³)
              </label>
              <input
                type="range"
                min="100"
                max="50000"
                step="100"
                value={projectVolume}
                onChange={(e) => setProjectVolume(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="text-3xl font-bold text-white mt-2">
                {projectVolume.toLocaleString()} m³
              </div>
            </div>

            {/* Target Strength */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-purple-200 uppercase tracking-wide mb-3 block">
                Target Strength Grade
              </label>
              <div className="space-y-2">
                {['M40', 'M50', 'M60'].map((grade) => (
                  <button
                    key={grade}
                    onClick={() => setTargetStrength(grade)}
                    className={`w-full px-4 py-3 rounded-lg font-semibold transition-all ${
                      targetStrength === grade
                        ? 'bg-purple-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {grade} {grade === 'M50' && '(Recommended)'}
                  </button>
                ))}
              </div>
            </div>

            {/* Cement Cost */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-purple-200 uppercase tracking-wide mb-3 block">
                Cement Cost (₹/bag 50kg)
              </label>
              <input
                type="range"
                min="300"
                max="600"
                step="10"
                value={cementCost}
                onChange={(e) => setCementCost(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="text-2xl font-bold text-white mt-2">₹{cementCost}</div>
            </div>

            {/* Graphacrete Cost */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-purple-200 uppercase tracking-wide mb-3 block">
                Graphacrete Cost (₹/m³)
              </label>
              <input
                type="range"
                min="30"
                max="100"
                step="5"
                value={graphacreteCost}
                onChange={(e) => setGraphacreteCost(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="text-2xl font-bold text-white mt-2">₹{graphacreteCost}</div>
            </div>

            {/* Export */}
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all">
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
                <DollarSign className="w-8 h-8 text-green-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  ₹{(calculations.totalSavings / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">Total Savings</div>
              </div>

              <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 border-2 border-purple-400/30 backdrop-blur p-6 rounded-xl">
                <TrendingDown className="w-8 h-8 text-purple-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.withGraphacrete.reduction.toFixed(1)}%
                </div>
                <div className="text-xs text-purple-200 uppercase tracking-wide">Cement Reduction</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400/30 backdrop-blur p-6 rounded-xl">
                <Zap className="w-8 h-8 text-yellow-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.strengthIncrease}%
                </div>
                <div className="text-xs text-yellow-200 uppercase tracking-wide">Strength Gain</div>
              </div>

              <div className="bg-gradient-to-br from-blue-400/20 to-cyan-500/20 border-2 border-blue-400/30 backdrop-blur p-6 rounded-xl">
                <TrendingDown className="w-8 h-8 text-blue-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  ₹{calculations.savingsPerM3.toFixed(0)}
                </div>
                <div className="text-xs text-blue-200 uppercase tracking-wide">Savings per m³</div>
              </div>
            </motion.div>

            {/* Comparison Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Traditional vs Graphacrete Comparison
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={calculations.comparisonData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="metric" stroke="#fff" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="Traditional" fill="#ef4444" />
                  <Bar dataKey="With Graphacrete" fill="#10b981" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Mix Design Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">Mix Design Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Traditional */}
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-red-400 mb-3">Traditional {targetStrength}</h4>
                  <div className="space-y-2 text-sm text-white">
                    <div className="flex justify-between">
                      <span>Cement (bags/m³):</span>
                      <span className="font-bold">{calculations.traditional.cementBags}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Cost per m³:</span>
                      <span className="font-bold">₹{calculations.traditionalCostPerM3.toFixed(0)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total cement needed:</span>
                      <span className="font-bold">{(calculations.traditional.cementBags * projectVolume).toLocaleString()} bags</span>
                    </div>
                  </div>
                </div>

                {/* With Graphacrete */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">
                    {calculations.withGraphacrete.baseMix} + Graphacrete ≈ {targetStrength}
                  </h4>
                  <div className="space-y-2 text-sm text-white">
                    <div className="flex justify-between">
                      <span>Cement (bags/m³):</span>
                      <span className="font-bold">{calculations.withGraphacrete.cementBags}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Graphacrete cost:</span>
                      <span className="font-bold">₹{graphacreteCost}/m³</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Total cost per m³:</span>
                      <span className="font-bold">₹{calculations.graphacreteCostPerM3.toFixed(0)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Environmental Impact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-green-500/20 to-teal-500/20 border-2 border-green-500/30 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Environmental & Performance Benefits
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">
                    {calculations.cementSaved.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-200">Cement Bags Saved</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">
                    {(calculations.co2Reduced / 1000).toFixed(1)} tons
                  </div>
                  <div className="text-sm text-green-200">CO₂ Emissions Avoided</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-300 mb-2">
                    +{calculations.waterResistanceImprovement.toFixed(0)}%
                  </div>
                  <div className="text-sm text-green-200">Water Resistance</div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-green-500/30 text-center text-green-100 text-sm">
                ✓ NABL Certified: {calculations.withGraphacrete.baseMix} + Graphacrete ≈ {targetStrength} Performance
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraphacreteCalculator;
