import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Calendar, DollarSign, Target, Download } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from 'recharts';
import { products } from '../../data/monoatomData';

const SavingsProjectionCalculator = () => {
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');
  const [annualCost, setAnnualCost] = useState(500000); // ₹5L baseline
  const [savingsPercent, setSavingsPercent] = useState(15);
  const [timeHorizon, setTimeHorizon] = useState(36); // months
  const [productCostPercent, setProductCostPercent] = useState(10);
  const [viewMode, setViewMode] = useState('monthly'); // 'monthly' or 'cumulative'

  const product = products[selectedProduct];

  const calculations = useMemo(() => {
    const monthlyCost = annualCost / 12;
    const monthlySavings = monthlyCost * (savingsPercent / 100);
    const productCost = annualCost * (productCostPercent / 100);

    const projectionData = [];
    let cumulativeSavings = -productCost; // Start with negative (initial investment)
    let breakEvenMonth = null;

    for (let month = 0; month <= timeHorizon; month++) {
      if (month === 0) {
        projectionData.push({
          month: 0,
          monthly: 0,
          cumulative: -productCost,
          investment: productCost,
        });
      } else {
        cumulativeSavings += monthlySavings;
        projectionData.push({
          month,
          monthly: monthlySavings,
          cumulative: cumulativeSavings,
          investment: productCost,
        });

        // Find break-even month
        if (breakEvenMonth === null && cumulativeSavings >= 0) {
          breakEvenMonth = month;
        }
      }
    }

    const totalSavings = monthlySavings * timeHorizon;
    const netProfit = totalSavings - productCost;
    const roi = ((netProfit / productCost) * 100).toFixed(0);

    // Identify milestones
    const milestones = [];
    if (breakEvenMonth) {
      milestones.push({ month: breakEvenMonth, label: 'Break-Even', type: 'success' });
    }
    const halfwayMonth = Math.floor(timeHorizon / 2);
    milestones.push({ month: halfwayMonth, label: 'Halfway Point', type: 'info' });
    milestones.push({ month: timeHorizon, label: 'End of Period', type: 'primary' });

    return {
      monthlySavings,
      totalSavings,
      productCost,
      netProfit,
      roi,
      breakEvenMonth,
      projectionData,
      milestones,
    };
  }, [annualCost, savingsPercent, timeHorizon, productCostPercent]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-purple-400/50 bg-purple-400/10 backdrop-blur mb-6">
            <TrendingUp className="w-4 h-4 text-purple-300 animate-pulse" />
            <span className="text-xs font-bold text-purple-300 tracking-wide uppercase">
              Financial Projection
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Long-Term Savings Calculator
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Project savings over time with detailed milestone tracking
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Product Selection */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-purple-200 uppercase tracking-wide mb-3 block">
                Product
              </label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(e.target.value)}
                className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white font-semibold"
              >
                {Object.keys(products).map((key) => (
                  <option key={key} value={key} className="bg-neutral-900">
                    {products[key].name}
                  </option>
                ))}
              </select>
            </div>

            {/* Annual Cost */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-purple-200 uppercase tracking-wide mb-3 block">
                Annual Cost (₹)
              </label>
              <input
                type="range"
                min="100000"
                max="10000000"
                step="100000"
                value={annualCost}
                onChange={(e) => setAnnualCost(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="text-2xl font-bold text-white mt-2">
                ₹{(annualCost / 100000).toFixed(1)}L
              </div>
            </div>

            {/* Savings Percent */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-purple-200 uppercase tracking-wide mb-3 block">
                Savings Percentage
              </label>
              <input
                type="range"
                min="5"
                max="70"
                step="1"
                value={savingsPercent}
                onChange={(e) => setSavingsPercent(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="text-2xl font-bold text-white mt-2">{savingsPercent}%</div>
            </div>

            {/* Time Horizon */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-purple-200 uppercase tracking-wide mb-3 block">
                Time Horizon (Months)
              </label>
              <input
                type="range"
                min="12"
                max="60"
                step="6"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="text-2xl font-bold text-white mt-2">
                {timeHorizon} months ({(timeHorizon / 12).toFixed(1)} years)
              </div>
            </div>

            {/* Product Cost */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm font-mono text-purple-200 uppercase tracking-wide mb-3 block">
                Product Cost (% of Annual)
              </label>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={productCostPercent}
                onChange={(e) => setProductCostPercent(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="text-2xl font-bold text-white mt-2">{productCostPercent}%</div>
            </div>

            {/* Export */}
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors">
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
                <Calendar className="w-8 h-8 text-green-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.breakEvenMonth || '--'}
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">Break-Even (mo)</div>
              </div>

              <div className="bg-gradient-to-br from-blue-400/20 to-cyan-500/20 border-2 border-blue-400/30 backdrop-blur p-6 rounded-xl">
                <DollarSign className="w-8 h-8 text-blue-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  ₹{(calculations.totalSavings / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-blue-200 uppercase tracking-wide">Total Savings</div>
              </div>

              <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 border-2 border-purple-400/30 backdrop-blur p-6 rounded-xl">
                <Target className="w-8 h-8 text-purple-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{calculations.roi}%</div>
                <div className="text-xs text-purple-200 uppercase tracking-wide">ROI</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400/30 backdrop-blur p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-yellow-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  ₹{(calculations.monthlySavings / 1000).toFixed(0)}K
                </div>
                <div className="text-xs text-yellow-200 uppercase tracking-wide">Monthly Savings</div>
              </div>
            </motion.div>

            {/* View Toggle */}
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setViewMode('monthly')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  viewMode === 'monthly'
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Monthly View
              </button>
              <button
                onClick={() => setViewMode('cumulative')}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  viewMode === 'cumulative'
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                Cumulative View
              </button>
            </div>

            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                {viewMode === 'monthly' ? 'Monthly Savings' : 'Cumulative Savings Over Time'}
              </h3>
              <ResponsiveContainer width="100%" height={350}>
                {viewMode === 'monthly' ? (
                  <AreaChart data={calculations.projectionData}>
                    <defs>
                      <linearGradient id="colorMonthlySavings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#a855f7" stopOpacity={0.5} />
                        <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis dataKey="month" stroke="#fff" />
                    <YAxis stroke="#fff" tickFormatter={(value) => `₹${(value / 1000).toFixed(0)}K`} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                      labelStyle={{ color: '#fff' }}
                      formatter={(value) => [`₹${(value / 1000).toFixed(0)}K`, 'Savings']}
                    />
                    <Area
                      type="monotone"
                      dataKey="monthly"
                      stroke="#a855f7"
                      fillOpacity={1}
                      fill="url(#colorMonthlySavings)"
                    />
                  </AreaChart>
                ) : (
                  <LineChart data={calculations.projectionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                    <XAxis dataKey="month" stroke="#fff" />
                    <YAxis stroke="#fff" tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                      labelStyle={{ color: '#fff' }}
                      formatter={(value) => [`₹${(value / 100000).toFixed(2)}L`, '']}
                    />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="cumulative"
                      stroke="#10b981"
                      strokeWidth={3}
                      name="Cumulative Savings"
                      dot={false}
                    />
                    <Line
                      type="monotone"
                      dataKey="investment"
                      stroke="#ef4444"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      name="Initial Investment"
                      dot={false}
                    />
                  </LineChart>
                )}
              </ResponsiveContainer>

              {/* Milestones */}
              <div className="mt-6 flex flex-wrap gap-3">
                {calculations.milestones.map((milestone, idx) => (
                  <div
                    key={idx}
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      milestone.type === 'success'
                        ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                        : milestone.type === 'info'
                        ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                        : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                    }`}
                  >
                    {milestone.label}: Month {milestone.month}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Financial Summary Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">Financial Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-purple-200">Initial Investment</span>
                  <span className="text-white font-mono">₹{calculations.productCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-purple-200">Monthly Savings</span>
                  <span className="text-green-300 font-mono">₹{calculations.monthlySavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-purple-200">Total Savings ({timeHorizon} months)</span>
                  <span className="text-green-300 font-mono">₹{calculations.totalSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="text-purple-200">Net Profit</span>
                  <span className="text-white font-mono font-bold">₹{calculations.netProfit.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Return on Investment</span>
                  <span className="text-purple-300 font-mono font-bold text-2xl">{calculations.roi}%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsProjectionCalculator;
