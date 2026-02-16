import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Package, Clock, Zap, Calculator } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const HDGPEPerformanceCalculator = () => {
  const [productionVolume, setProductionVolume] = useState(100); // tons/year
  const [applicationArea, setApplicationArea] = useState('packaging');
  const [hdpePrice, setHdpePrice] = useState(120); // ₹/kg
  const [hdgpeAdditiveCost] = useState(5); // ₹/kg additional (fixed)

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
    };
  }, [productionVolume, applicationArea, hdpePrice, hdgpeAdditiveCost]);

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-black to-cyan-900/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-cyan-500/30 bg-cyan-500/10 backdrop-blur mb-6">
            <Calculator className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              Performance Calculator
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            HD-G-PE Performance Analysis
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Calculate performance gains and value creation with HD-G-PE enhanced polymers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Controls */}
          <div className="lg:col-span-4 space-y-6">
            {/* Production Volume */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <label className="text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block">
                Production Volume (tons/year)
              </label>
              <input
                type="range"
                min="10"
                max="1000"
                step="10"
                value={productionVolume}
                onChange={(e) => setProductionVolume(Number(e.target.value))}
                className="w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
              />
              <div className="text-3xl font-mono font-bold text-white mt-3">
                {productionVolume} <span className="text-lg text-neutral-400">tons/yr</span>
              </div>
            </motion.div>

            {/* Application Area */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <label className="text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block">
                Application Area
              </label>
              <div className="space-y-2">
                {Object.entries(applications).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setApplicationArea(key)}
                    className={`w-full px-4 py-3 rounded-sm font-mono font-medium transition-all text-sm ${
                      applicationArea === key
                        ? 'bg-brand-500 text-white border border-brand-400'
                        : 'bg-neutral-800/50 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white'
                    }`}
                  >
                    {value.name}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* HDPE Price */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <label className="text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block">
                Base HDPE Price (₹/kg)
              </label>
              <input
                type="range"
                min="80"
                max="200"
                step="10"
                value={hdpePrice}
                onChange={(e) => setHdpePrice(Number(e.target.value))}
                className="w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
              />
              <div className="text-3xl font-mono font-bold text-white mt-3">
                ₹{hdpePrice} <span className="text-lg text-neutral-400">/kg</span>
              </div>
            </motion.div>

            {/* HD-G-PE Additive Cost (Display Only) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-brand-500/20 to-cyan-500/20 border border-brand-500/30 rounded-sm p-6"
            >
              <label className="text-sm font-mono text-brand-300 uppercase tracking-wide mb-3 block">
                HD-G-PE Additive Cost
              </label>
              <div className="text-4xl font-mono font-bold text-brand-400 mt-3">
                ₹{hdgpeAdditiveCost} <span className="text-lg text-neutral-400">/kg</span>
              </div>
              <div className="text-xs text-neutral-400 mt-2 font-mono">Minimal cost for maximum impact</div>
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
              <div className="bg-neutral-900/80 backdrop-blur border border-brand-500/30 rounded-sm p-6">
                <Zap className="w-6 h-6 text-brand-400 mb-3" />
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  {calculations.elongationImprovement}×
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Elongation</div>
              </div>

              <div className="bg-neutral-900/80 backdrop-blur border border-cyan-500/30 rounded-sm p-6">
                <Clock className="w-6 h-6 text-cyan-400 mb-3" />
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  +{calculations.lifespanExtension}%
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Lifespan</div>
              </div>

              <div className="bg-neutral-900/80 backdrop-blur border border-purple-500/30 rounded-sm p-6">
                <TrendingUp className="w-6 h-6 text-purple-400 mb-3" />
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  +{calculations.marketPremium}%
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Premium</div>
              </div>

              <div className="bg-neutral-900/80 backdrop-blur border border-green-500/30 rounded-sm p-6">
                <Package className="w-6 h-6 text-green-400 mb-3" />
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  {calculations.roi}%
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono">ROI</div>
              </div>
            </motion.div>

            {/* Performance Radar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Multi-Property Performance Comparison
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                <RadarChart data={calculations.performanceData}>
                  <PolarGrid stroke="#404040" />
                  <PolarAngleAxis dataKey="property" stroke="#9ca3af" tick={{ fill: '#9ca3af', fontSize: 12, fontFamily: 'Space Grotesk' }} />
                  <PolarRadiusAxis angle={90} domain={[0, 120]} stroke="#9ca3af" tick={{ fill: '#9ca3af' }} />
                  <Radar
                    name="Standard HDPE"
                    dataKey="Standard"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.2}
                    strokeWidth={2}
                  />
                  <Radar
                    name="HD-G-PE"
                    dataKey="HD-G-PE"
                    stroke="#0d9488"
                    fill="#0d9488"
                    fillOpacity={0.4}
                    strokeWidth={3}
                  />
                  <Legend wrapperStyle={{ fontFamily: 'Space Grotesk' }} />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Application Comparison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Elongation Improvement by Application
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={calculations.applicationData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                  <XAxis dataKey="application" stroke="#9ca3af" style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }} />
                  <YAxis stroke="#9ca3af" label={{ value: 'Improvement (×)', angle: -90, position: 'insideLeft', fill: '#9ca3af', fontFamily: 'Space Grotesk' }} style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '4px', fontFamily: 'Space Grotesk' }}
                    formatter={(value) => [`${value}× better`, 'Improvement']}
                  />
                  <Bar dataKey="improvement" fill="#0d9488" />
                </BarChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Financial Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {/* Financial Details */}
              <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6">
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Financial Analysis
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                    <span className="text-sm text-neutral-400 font-mono">Volume</span>
                    <span className="text-white font-mono">{productionVolume} tons</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                    <span className="text-sm text-neutral-400 font-mono">Added Cost</span>
                    <span className="text-white font-mono">₹{(calculations.additionalCost / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                    <span className="text-sm text-neutral-400 font-mono">Added Revenue</span>
                    <span className="text-brand-400 font-mono">₹{(calculations.additionalRevenue / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-white font-mono font-bold">Net Benefit</span>
                    <span className="text-2xl text-green-400 font-mono font-bold">
                      ₹{(calculations.netBenefit / 100000).toFixed(2)}L
                    </span>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-gradient-to-br from-brand-500/20 to-cyan-500/20 border border-brand-500/30 rounded-sm p-6">
                <h3 className="text-xl font-display font-bold text-white mb-4">
                  Key Benefits
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-3xl font-mono font-bold text-brand-400 mb-1">{calculations.elongationImprovement}×</div>
                    <div className="text-xs text-neutral-400 font-mono">Elongation</div>
                  </div>
                  <div>
                    <div className="text-3xl font-mono font-bold text-brand-400 mb-1">+{calculations.lifespanExtension}%</div>
                    <div className="text-xs text-neutral-400 font-mono">Lifespan</div>
                  </div>
                  <div>
                    <div className="text-3xl font-mono font-bold text-brand-400 mb-1">+{calculations.marketPremium}%</div>
                    <div className="text-xs text-neutral-400 font-mono">Premium</div>
                  </div>
                  <div>
                    <div className="text-3xl font-mono font-bold text-brand-400 mb-1">{calculations.app.qualityImpact}</div>
                    <div className="text-xs text-neutral-400 font-mono">Quality</div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-neutral-400 font-mono text-center">
                  ✓ Superior performance for {calculations.app.name.toLowerCase()}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HDGPEPerformanceCalculator;
