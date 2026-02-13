import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sun, TrendingUp, DollarSign, Thermometer, Droplet, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from 'recharts';

const GraffisolCalculator = () => {
  const [solarCapacity, setSolarCapacity] = useState(500); // kW
  const [electricityRate, setElectricityRate] = useState(8); // ₹/kWh
  const [soilingLevel, setSoilingLevel] = useState('medium'); // low, medium, high
  const [locationTemp, setLocationTemp] = useState('hot'); // moderate, hot, very-hot

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
        revenue: monthlyRevenue,
        cumulative,
      });
    }

    // Performance comparison
    const performanceData = [
      { metric: 'Without Graffisol', energy: annualGeneration },
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
    <div className="w-full min-h-screen bg-gradient-to-br from-yellow-900 via-orange-900 to-red-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-yellow-400/50 bg-yellow-400/10 backdrop-blur mb-6">
            <Sun className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span className="text-xs font-bold text-yellow-300 tracking-wide uppercase">
              Graffisol Calculator
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Solar Energy Optimization
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Calculate energy gains and ROI with Graffisol solar panel coating
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Solar Capacity */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-yellow-200 uppercase tracking-wide mb-3 block">
                Solar Capacity (kW)
              </label>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={solarCapacity}
                onChange={(e) => setSolarCapacity(Number(e.target.value))}
                className="w-full accent-yellow-500"
              />
              <div className="text-3xl font-bold text-white mt-2">
                {solarCapacity.toLocaleString()} kW
              </div>
            </div>

            {/* Electricity Rate */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-yellow-200 uppercase tracking-wide mb-3 block">
                Electricity Rate (₹/kWh)
              </label>
              <input
                type="range"
                min="5"
                max="15"
                step="0.5"
                value={electricityRate}
                onChange={(e) => setElectricityRate(Number(e.target.value))}
                className="w-full accent-yellow-500"
              />
              <div className="text-2xl font-bold text-white mt-2">₹{electricityRate}/kWh</div>
            </div>

            {/* Soiling Level */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-yellow-200 uppercase tracking-wide mb-3 block">
                Soiling Level
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
                    className={`w-full px-4 py-3 rounded-lg font-semibold transition-all text-sm ${
                      soilingLevel === level.id
                        ? 'bg-yellow-500 text-black'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {level.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Temperature */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-yellow-200 uppercase tracking-wide mb-3 block">
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
                    className={`w-full px-4 py-3 rounded-lg font-semibold transition-all text-sm ${
                      locationTemp === temp.id
                        ? 'bg-orange-500 text-white'
                        : 'bg-white/20 text-white hover:bg-white/30'
                    }`}
                  >
                    {temp.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Export */}
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-all font-semibold">
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
                <TrendingUp className="w-8 h-8 text-green-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.energyGain.toFixed(1)}%
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">Energy Gain</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400/30 backdrop-blur p-6 rounded-xl">
                <DollarSign className="w-8 h-8 text-yellow-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  ₹{(calculations.annualRevenue / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-yellow-200 uppercase tracking-wide">Annual Revenue</div>
              </div>

              <div className="bg-gradient-to-br from-blue-400/20 to-cyan-500/20 border-2 border-blue-400/30 backdrop-blur p-6 rounded-xl">
                <Thermometer className="w-8 h-8 text-blue-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  -{calculations.tempReduction}°C
                </div>
                <div className="text-xs text-blue-200 uppercase tracking-wide">Temp Reduction</div>
              </div>

              <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 border-2 border-purple-400/30 backdrop-blur p-6 rounded-xl">
                <Droplet className="w-8 h-8 text-purple-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.paybackMonths}mo
                </div>
                <div className="text-xs text-purple-200 uppercase tracking-wide">ROI Payback</div>
              </div>
            </motion.div>

            {/* Performance Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Annual Energy Production Comparison
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <AreaChart data={calculations.performanceData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="metric" stroke="#fff" tick={{ fontSize: 12 }} />
                  <YAxis stroke="#fff" tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => [`${value.toLocaleString()} kWh`, 'Energy']}
                  />
                  <Area type="monotone" dataKey="energy" stroke="#f59e0b" fill="#f59e0b" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* ROI Projection */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                5-Year ROI Projection
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={calculations.monthlyData.filter((_, idx) => idx % 3 === 0)}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="month" stroke="#fff" label={{ value: 'Month', position: 'insideBottom', offset: -5, fill: '#fff' }} />
                  <YAxis stroke="#fff" tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => [`₹${(value / 100000).toFixed(2)}L`, '']}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="cumulative" stroke="#10b981" strokeWidth={3} name="Cumulative Profit" dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Financial Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-green-500/20 to-teal-500/20 border-2 border-green-500/30 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Financial Summary (5 Years)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-sm text-green-200 mb-2">Coating Investment</div>
                  <div className="text-3xl font-bold text-white">₹{(calculations.coatingCost / 100000).toFixed(1)}L</div>
                </div>
                <div>
                  <div className="text-sm text-green-200 mb-2">Total Revenue (5yr)</div>
                  <div className="text-3xl font-bold text-white">₹{(calculations.fiveYearRevenue / 100000).toFixed(1)}L</div>
                </div>
                <div>
                  <div className="text-sm text-green-200 mb-2">Net Profit</div>
                  <div className="text-3xl font-bold text-green-300">₹{(calculations.netProfit / 100000).toFixed(1)}L</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-green-500/30">
                <div className="flex justify-between items-center">
                  <span className="text-green-100">Return on Investment (ROI)</span>
                  <span className="text-4xl font-bold text-green-300">{calculations.roi}%</span>
                </div>
              </div>
              <div className="mt-4 text-center text-green-100 text-sm">
                ✓ Field Validated: 1+ MW installations showing 10-12% energy output gains
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraffisolCalculator;
