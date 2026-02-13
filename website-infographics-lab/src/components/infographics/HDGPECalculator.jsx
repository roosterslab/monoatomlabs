import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Package, Clock, Zap, Download } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const HDGPECalculator = () => {
  const [productionVolume, setProductionVolume] = useState(100); // tons/year
  const [applicationArea, setApplicationArea] = useState('packaging'); // packaging, films, pipes
  const [hdpePrice, setHdpePrice] = useState(120); // ₹/kg
  const [hdgpeAdditiveCost, setHdgpeAdditiveCost] = useState(5); // ₹/kg additional

  const applications = {
    packaging: {
      name: 'Packaging Materials',
      elongationGain: 20,
      lifespanGain: 20,
      marketPremium: 15,
      qualityImpact: 'High',
    },
    films: {
      name: 'Films & Sheets',
      elongationGain: 22,
      lifespanGain: 25,
      marketPremium: 20,
      qualityImpact: 'Very High',
    },
    pipes: {
      name: 'Pipes & Tubes',
      elongationGain: 18,
      lifespanGain: 22,
      marketPremium: 18,
      qualityImpact: 'High',
    },
  };

  const calculations = useMemo(() => {
    const app = applications[applicationArea];

    // Cost calculations
    const annualVolume = productionVolume * 1000; // Convert tons to kg
    const standardCost = annualVolume * hdpePrice;
    const hdgpeCost = annualVolume * (hdpePrice + hdgpeAdditiveCost);
    const additionalCost = annualVolume * hdgpeAdditiveCost;

    // Value calculations
    const lifespanExtension = app.lifespanGain; // %
    const elongationImprovement = app.elongationGain; // multiple
    const marketPremium = app.marketPremium; // %

    // Revenue impact
    const standardRevenue = annualVolume * hdpePrice * 1.3; // Assume 30% margin
    const premiumRevenue = standardRevenue * (1 + marketPremium / 100);
    const additionalRevenue = premiumRevenue - standardRevenue;

    // Net benefit
    const netBenefit = additionalRevenue - additionalCost;
    const roi = ((netBenefit / additionalCost) * 100).toFixed(0);

    // Performance radar data
    const performanceData = [
      { property: 'Elongation', Standard: 5, 'HD-G-PE': 5 * elongationImprovement },
      { property: 'Flexibility', Standard: 70, 'HD-G-PE': 90 },
      { property: 'Durability', Standard: 70, 'HD-G-PE': 90 },
      { property: 'Lifespan', Standard: 70, 'HD-G-PE': 70 * (1 + lifespanExtension / 100) },
      { property: 'Strength', Standard: 75, 'HD-G-PE': 85 },
    ];

    // Application comparison
    const applicationData = [
      { application: 'Packaging', improvement: applications.packaging.elongationGain },
      { application: 'Films', improvement: applications.films.elongationGain },
      { application: 'Pipes', improvement: applications.pipes.elongationGain },
    ];

    // Product lifecycle
    const lifecycleComparison = [
      { stage: 'Standard HDPE', lifespan: 100 },
      { stage: 'HD-G-PE', lifespan: 100 + lifespanExtension },
    ];

    return {
      app,
      annualVolume,
      standardCost,
      hdgpeCost,
      additionalCost,
      lifespanExtension,
      elongationImprovement,
      marketPremium,
      standardRevenue,
      premiumRevenue,
      additionalRevenue,
      netBenefit,
      roi,
      performanceData,
      applicationData,
      lifecycleComparison,
    };
  }, [productionVolume, applicationArea, hdpePrice, hdgpeAdditiveCost]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-indigo-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 backdrop-blur mb-6">
            <Package className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span className="text-xs font-bold text-cyan-300 tracking-wide uppercase">
              HD-G-PE Calculator
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Enhanced Polymer Performance
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Calculate performance gains and market value with HD-G-PE enhanced polymers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Production Volume */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-cyan-200 uppercase tracking-wide mb-3 block">
                Production Volume (tons/year)
              </label>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={productionVolume}
                onChange={(e) => setProductionVolume(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-3xl font-bold text-white mt-2">
                {productionVolume} tons/year
              </div>
            </div>

            {/* Application Area */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-cyan-200 uppercase tracking-wide mb-3 block">
                Application Area
              </label>
              <div className="space-y-2">
                {Object.entries(applications).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setApplicationArea(key)}
                    className={`w-full px-4 py-3 rounded-lg font-semibold transition-all text-sm ${
                      applicationArea === key
                        ? 'bg-cyan-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {value.name}
                  </button>
                ))}
              </div>
            </div>

            {/* HDPE Price */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-cyan-200 uppercase tracking-wide mb-3 block">
                Base HDPE Price (₹/kg)
              </label>
              <input
                type="range"
                min="80"
                max="200"
                step="10"
                value={hdpePrice}
                onChange={(e) => setHdpePrice(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-2xl font-bold text-white mt-2">₹{hdpePrice}/kg</div>
            </div>

            {/* HD-G-PE Additive Cost */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-cyan-200 uppercase tracking-wide mb-3 block">
                HD-G-PE Additive Cost (₹/kg)
              </label>
              <input
                type="range"
                min="2"
                max="15"
                step="1"
                value={hdgpeAdditiveCost}
                onChange={(e) => setHdgpeAdditiveCost(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-2xl font-bold text-white mt-2">₹{hdgpeAdditiveCost}/kg</div>
            </div>

            {/* Export */}
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-all font-semibold">
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
                <Zap className="w-8 h-8 text-green-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.elongationImprovement}×
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">Elongation Gain</div>
              </div>

              <div className="bg-gradient-to-br from-blue-400/20 to-cyan-500/20 border-2 border-blue-400/30 backdrop-blur p-6 rounded-xl">
                <Clock className="w-8 h-8 text-blue-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  +{calculations.lifespanExtension}%
                </div>
                <div className="text-xs text-blue-200 uppercase tracking-wide">Lifespan Extension</div>
              </div>

              <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 border-2 border-purple-400/30 backdrop-blur p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-purple-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  +{calculations.marketPremium}%
                </div>
                <div className="text-xs text-purple-200 uppercase tracking-wide">Market Premium</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400/30 backdrop-blur p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-yellow-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.roi}%
                </div>
                <div className="text-xs text-yellow-200 uppercase tracking-wide">ROI</div>
              </div>
            </motion.div>

            {/* Performance Radar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Multi-Property Performance Comparison
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={calculations.performanceData}>
                  <PolarGrid stroke="#ffffff30" />
                  <PolarAngleAxis dataKey="property" stroke="#fff" tick={{ fill: '#fff', fontSize: 12 }} />
                  <PolarRadiusAxis angle={90} domain={[0, 120]} stroke="#fff" tick={{ fill: '#fff' }} />
                  <Radar
                    name="Standard HDPE"
                    dataKey="Standard"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.3}
                    strokeWidth={2}
                  />
                  <Radar
                    name="HD-G-PE"
                    dataKey="HD-G-PE"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.5}
                    strokeWidth={3}
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Application Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Elongation Improvement by Application
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={calculations.applicationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="application" stroke="#fff" />
                  <YAxis stroke="#fff" label={{ value: 'Improvement (×)', angle: -90, position: 'insideLeft', fill: '#fff' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => [`${value}× better`, 'Improvement']}
                  />
                  <Bar dataKey="improvement" fill="#06b6d4" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Financial Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Financial Analysis
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-cyan-200">Annual Production Volume</span>
                  <span className="text-white font-mono">{productionVolume} tons ({(calculations.annualVolume / 1000).toFixed(0)}k kg)</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-cyan-200">Additional Cost (HD-G-PE)</span>
                  <span className="text-white font-mono">₹{(calculations.additionalCost / 100000).toFixed(2)}L</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-cyan-200">Additional Revenue (Premium)</span>
                  <span className="text-green-400 font-mono">₹{(calculations.additionalRevenue / 100000).toFixed(2)}L</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-cyan-200">Net Benefit</span>
                  <span className="text-green-400 font-mono font-bold">₹{(calculations.netBenefit / 100000).toFixed(2)}L</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">Return on Investment</span>
                  <span className="text-green-400 font-mono font-bold text-2xl">{calculations.roi}%</span>
                </div>
              </div>
            </motion.div>

            {/* Benefits Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/30 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Key Benefits for {calculations.app.name}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-sm text-cyan-200 mb-2">Elongation at Break</div>
                  <div className="text-3xl font-bold text-white">{calculations.elongationImprovement}× better</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-sm text-cyan-200 mb-2">Product Lifespan</div>
                  <div className="text-3xl font-bold text-white">+{calculations.lifespanExtension}%</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-sm text-cyan-200 mb-2">Market Premium</div>
                  <div className="text-3xl font-bold text-white">+{calculations.marketPremium}%</div>
                </div>
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-sm text-cyan-200 mb-2">Quality Impact</div>
                  <div className="text-3xl font-bold text-white">{calculations.app.qualityImpact}</div>
                </div>
              </div>
              <div className="mt-4 text-center text-cyan-100 text-sm">
                ✓ Enhanced flexibility, durability, and performance for demanding applications
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HDGPECalculator;
