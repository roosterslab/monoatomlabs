import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sun, TrendingUp, DollarSign, Thermometer, Zap, Calculator } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, AreaChart, Area } from 'recharts';

const GraffisolEnergyCalculator = () => {
  const [solarCapacity, setSolarCapacity] = useState(500); // kW
  const [electricityRate, setElectricityRate] = useState(8); // ₹/kWh
  const [soilingLevel, setSoilingLevel] = useState('medium');
  const [locationTemp, setLocationTemp] = useState('hot');

  const calculations = useMemo(() => {
    // Base generation (annual kWh)
    const annualGeneration = solarCapacity * 1500; // ~1500 kWh/kW/year average in India

    // Energy output improvement (10-12% range)
    const energyGain = 0.11; // 11% average
    const additionalEnergy = annualGeneration * energyGain;

    // Soiling impact reduction
    const soilingImpact = {
      low: { baseline: 0.05, withGraffisol: 0.02 },
      medium: { baseline: 0.15, withGraffisol: 0.08 },
      high: { baseline: 0.25, withGraffisol: 0.12 },
    };

    const soiling = soilingImpact[soilingLevel];
    const soilingRecovery = (soiling.baseline - soiling.withGraffisol) * annualGeneration;

    // Temperature impact
    const tempImpact = {
      moderate: { reduction: 4, benefit: 0.01 },
      hot: { reduction: 6, benefit: 0.02 },
      'very-hot': { reduction: 8, benefit: 0.03 },
    };

    const temp = tempImpact[locationTemp];
    const tempBenefit = annualGeneration * temp.benefit;

    // Total additional energy
    const totalAdditionalEnergy = additionalEnergy + soilingRecovery + tempBenefit;

    // Financial calculations
    const annualRevenue = totalAdditionalEnergy * electricityRate;
    const coatingCost = solarCapacity * 500; // ₹500/kW
    const paybackMonths = (coatingCost / (annualRevenue / 12)).toFixed(1);
    const fiveYearRevenue = annualRevenue * 5;
    const netProfit = fiveYearRevenue - coatingCost;
    const roi = ((netProfit / coatingCost) * 100).toFixed(0);

    // Monthly projection
    const monthlyData = [];
    for (let month = 0; month <= 60; month++) {
      const monthlyRevenue = annualRevenue / 12;
      const cumulative = (monthlyRevenue * month) - coatingCost;
      monthlyData.push({
        month,
        cumulative,
      });
    }

    // Performance comparison
    const performanceData = [
      { metric: 'Standard', energy: annualGeneration },
      { metric: 'With Graffisol', energy: annualGeneration + totalAdditionalEnergy },
    ];

    return {
      annualGeneration,
      totalAdditionalEnergy,
      energyGain: energyGain * 100,
      soilingRecovery,
      tempBenefit,
      tempReduction: temp.reduction,
      annualRevenue,
      coatingCost,
      paybackMonths,
      fiveYearRevenue,
      netProfit,
      roi,
      monthlyData,
      performanceData,
    };
  }, [solarCapacity, electricityRate, soilingLevel, locationTemp]);

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-orange-900/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-yellow-500/30 bg-yellow-500/10 backdrop-blur mb-6">
            <Calculator className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-mono text-yellow-400 tracking-widest uppercase">
              Solar Energy Calculator
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Graffisol ROI Calculator
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Calculate energy gains and return on investment with Graffisol coating technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left: Controls */}
          <div className="lg:col-span-4 space-y-6">
            {/* Solar Capacity */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <label className="text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block">
                Solar Capacity (kW)
              </label>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={solarCapacity}
                onChange={(e) => setSolarCapacity(Number(e.target.value))}
                className="w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
              />
              <div className="text-3xl font-mono font-bold text-white mt-3">
                {solarCapacity.toLocaleString()} <span className="text-lg text-neutral-400">kW</span>
              </div>
            </motion.div>

            {/* Electricity Rate */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <label className="text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block">
                Electricity Rate (₹/kWh)
              </label>
              <input
                type="range"
                min="5"
                max="15"
                step="0.5"
                value={electricityRate}
                onChange={(e) => setElectricityRate(Number(e.target.value))}
                className="w-full accent-brand-500 h-1 bg-neutral-700 rounded-sm"
              />
              <div className="text-3xl font-mono font-bold text-white mt-3">
                ₹{electricityRate} <span className="text-lg text-neutral-400">/kWh</span>
              </div>
            </motion.div>

            {/* Soiling Level */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <label className="text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block">
                Soiling Environment
              </label>
              <div className="space-y-2">
                {[
                  { id: 'low', label: 'Low (Clean areas)' },
                  { id: 'medium', label: 'Medium (Urban)' },
                  { id: 'high', label: 'High (Dusty/Industrial)' },
                ].map((level) => (
                  <button
                    key={level.id}
                    onClick={() => setSoilingLevel(level.id)}
                    className={`w-full px-4 py-3 rounded-sm font-mono font-medium transition-all text-sm ${
                      soilingLevel === level.id
                        ? 'bg-brand-500 text-white border border-brand-400'
                        : 'bg-neutral-800/50 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white'
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Temperature */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <label className="text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block">
                Location Temperature
              </label>
              <div className="space-y-2">
                {[
                  { id: 'moderate', label: 'Moderate (<35°C)' },
                  { id: 'hot', label: 'Hot (35-40°C)' },
                  { id: 'very-hot', label: 'Very Hot (>40°C)' },
                ].map((temp) => (
                  <button
                    key={temp.id}
                    onClick={() => setLocationTemp(temp.id)}
                    className={`w-full px-4 py-3 rounded-sm font-mono font-medium transition-all text-sm ${
                      locationTemp === temp.id
                        ? 'bg-brand-500 text-white border border-brand-400'
                        : 'bg-neutral-800/50 text-neutral-400 border border-neutral-700 hover:bg-neutral-700 hover:text-white'
                    }`}
                  >
                    {temp.label}
                  </button>
                ))}
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
              <div className="bg-neutral-900/80 backdrop-blur border border-brand-500/30 rounded-sm p-6">
                <TrendingUp className="w-6 h-6 text-brand-400 mb-3" />
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  {calculations.energyGain.toFixed(1)}%
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Energy Gain</div>
              </div>

              <div className="bg-neutral-900/80 backdrop-blur border border-yellow-500/30 rounded-sm p-6">
                <DollarSign className="w-6 h-6 text-yellow-400 mb-3" />
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  ₹{(calculations.annualRevenue / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Annual Gain</div>
              </div>

              <div className="bg-neutral-900/80 backdrop-blur border border-orange-500/30 rounded-sm p-6">
                <Thermometer className="w-6 h-6 text-orange-400 mb-3" />
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  -{calculations.tempReduction}°C
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Temp Drop</div>
              </div>

              <div className="bg-neutral-900/80 backdrop-blur border border-green-500/30 rounded-sm p-6">
                <Zap className="w-6 h-6 text-green-400 mb-3" />
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  {calculations.paybackMonths}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Payback (mo)</div>
              </div>
            </motion.div>

            {/* Performance Comparison Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Annual Energy Production
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={calculations.performanceData}>
                  <defs>
                    <linearGradient id="energyGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#0d9488" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#0d9488" stopOpacity={0.1}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                  <XAxis dataKey="metric" stroke="#9ca3af" style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }} />
                  <YAxis stroke="#9ca3af" tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '4px', fontFamily: 'Space Grotesk' }}
                    formatter={(value) => [`${value.toLocaleString()} kWh`, 'Output']}
                  />
                  <Area type="monotone" dataKey="energy" stroke="#0d9488" fill="url(#energyGradient)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* ROI Projection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                5-Year Cumulative Profit
              </h3>
              <ResponsiveContainer width="100%" height={280}>
                <LineChart data={calculations.monthlyData.filter((_, idx) => idx % 3 === 0)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                  <XAxis
                    dataKey="month"
                    stroke="#9ca3af"
                    label={{ value: 'Month', position: 'insideBottom', offset: -5, fill: '#9ca3af', fontFamily: 'Space Grotesk' }}
                    style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }}
                  />
                  <YAxis
                    stroke="#9ca3af"
                    tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
                    style={{ fontSize: '12px', fontFamily: 'Space Grotesk' }}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '4px', fontFamily: 'Space Grotesk' }}
                    formatter={(value) => [`₹${(value / 100000).toFixed(2)}L`, 'Profit']}
                  />
                  <Line
                    type="monotone"
                    dataKey="cumulative"
                    stroke="#10b981"
                    strokeWidth={3}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Financial Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-r from-green-500/10 to-brand-500/10 border border-green-500/30 rounded-sm p-8"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                5-Year Financial Summary
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <div className="text-sm text-neutral-400 mb-2 font-mono uppercase tracking-wide">Investment</div>
                  <div className="text-3xl font-mono font-bold text-white">₹{(calculations.coatingCost / 100000).toFixed(1)}L</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-400 mb-2 font-mono uppercase tracking-wide">Total Revenue</div>
                  <div className="text-3xl font-mono font-bold text-white">₹{(calculations.fiveYearRevenue / 100000).toFixed(1)}L</div>
                </div>
                <div>
                  <div className="text-sm text-neutral-400 mb-2 font-mono uppercase tracking-wide">Net Profit</div>
                  <div className="text-3xl font-mono font-bold text-green-400">₹{(calculations.netProfit / 100000).toFixed(1)}L</div>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300 font-mono">Return on Investment</span>
                  <span className="text-5xl font-mono font-bold text-green-400">{calculations.roi}%</span>
                </div>
              </div>
              <div className="mt-6 text-center text-neutral-400 text-sm font-mono">
                ✓ Field Validated: 1+ MW installations showing 10-12% energy gains
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GraffisolEnergyCalculator;
