import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, PieChart as PieChartIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { products } from '../../data/monoatomData';

const TCOBreakdown = () => {
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');
  const [viewMode, setViewMode] = useState('current'); // 'current' or 'withProduct'
  const [scenario, setScenario] = useState('construction');

  const scenarios = {
    construction: {
      name: 'Construction Project',
      current: [
        { name: 'Materials (Cement)', value: 450000, percentage: 45 },
        { name: 'Labor', value: 300000, percentage: 30 },
        { name: 'Equipment', value: 150000, percentage: 15 },
        { name: 'Delays & Rework', value: 100000, percentage: 10 },
      ],
      withGraphacrete: [
        { name: 'Materials (with Graphacrete)', value: 370000, percentage: 42 },
        { name: 'Labor', value: 300000, percentage: 34 },
        { name: 'Equipment', value: 150000, percentage: 17 },
        { name: 'Delays & Rework', value: 60000, percentage: 7 },
      ],
      product: 'graphacrete',
    },
    solar: {
      name: 'Solar Installation',
      current: [
        { name: 'Panels & Hardware', value: 500000, percentage: 50 },
        { name: 'Installation', value: 200000, percentage: 20 },
        { name: 'Maintenance (5yr)', value: 150000, percentage: 15 },
        { name: 'Energy Loss', value: 150000, percentage: 15 },
      ],
      withGraffisol: [
        { name: 'Panels & Hardware', value: 500000, percentage: 52 },
        { name: 'Installation', value: 200000, percentage: 21 },
        { name: 'Maintenance (5yr)', value: 120000, percentage: 13 },
        { name: 'Energy Loss', value: 130000, percentage: 14 },
      ],
      product: 'graffisol',
    },
    manufacturing: {
      name: 'Manufacturing Facility',
      current: [
        { name: 'Raw Materials', value: 600000, percentage: 40 },
        { name: 'Energy Costs', value: 450000, percentage: 30 },
        { name: 'Equipment Wear', value: 300000, percentage: 20 },
        { name: 'Quality Issues', value: 150000, percentage: 10 },
      ],
      withHDGPE: [
        { name: 'Raw Materials (with HD-G-PE)', value: 620000, percentage: 43 },
        { name: 'Energy Costs', value: 430000, percentage: 30 },
        { name: 'Equipment Wear', value: 240000, percentage: 17 },
        { name: 'Quality Issues', value: 90000, percentage: 6 },
      ],
      product: 'hdgpe',
    },
  };

  const currentScenario = scenarios[scenario];
  const currentData = viewMode === 'current' ? currentScenario.current : currentScenario[`with${currentScenario.product.charAt(0).toUpperCase() + currentScenario.product.slice(1)}`];

  const totalCurrent = currentScenario.current.reduce((sum, item) => sum + item.value, 0);
  const totalWithProduct = currentScenario[`with${currentScenario.product.charAt(0).toUpperCase() + currentScenario.product.slice(1)}`].reduce((sum, item) => sum + item.value, 0);
  const savings = totalCurrent - totalWithProduct;
  const savingsPercent = ((savings / totalCurrent) * 100).toFixed(1);
  const paybackPeriod = 18; // months (example)
  const fiveYearSavings = savings * 5;

  const COLORS = ['#0d9488', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4'];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-neutral-900 via-gray-900 to-black p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-500/50 bg-brand-500/10 backdrop-blur mb-6">
            <PieChartIcon className="w-4 h-4 text-brand-400 animate-pulse" />
            <span className="text-xs font-bold text-brand-400 tracking-wide uppercase">
              Total Cost of Ownership
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            TCO Analysis
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Compare total cost of ownership with and without Monoatom products
          </p>
        </motion.div>

        {/* Scenario Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.entries(scenarios).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setScenario(key)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                scenario === key
                  ? 'bg-brand-500 text-white shadow-lg'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {value.name}
            </button>
          ))}
        </div>

        {/* Toggle View */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setViewMode('current')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all ${
              viewMode === 'current'
                ? 'bg-red-500 text-white shadow-xl'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            Current TCO
          </button>
          <button
            onClick={() => setViewMode('withProduct')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all ${
              viewMode === 'withProduct'
                ? 'bg-green-500 text-white shadow-xl'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            With {products[currentScenario.product]?.name}
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Pie Chart */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-neutral-800/50 border-2 border-neutral-700 rounded-xl p-8"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Cost Distribution
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <PieChart>
                <Pie
                  data={currentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {currentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                  formatter={(value) => `₹${value.toLocaleString()}`}
                />
              </PieChart>
            </ResponsiveContainer>

            {/* Total */}
            <div className="mt-6 pt-6 border-t-2 border-neutral-700 text-center">
              <div className="text-sm text-neutral-400 mb-2">Total Cost</div>
              <div className={`text-4xl font-bold ${viewMode === 'current' ? 'text-red-400' : 'text-green-400'}`}>
                ₹{(viewMode === 'current' ? totalCurrent : totalWithProduct).toLocaleString()}
              </div>
            </div>
          </motion.div>

          {/* Right: Detailed Breakdown */}
          <div className="space-y-6">
            {/* Cost Cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-neutral-800/50 border-2 border-neutral-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Detailed Breakdown
              </h3>
              <div className="space-y-4">
                {currentData.map((item, idx) => (
                  <div key={idx} className="pb-4 border-b border-neutral-700 last:border-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white">{item.name}</span>
                      <span className="font-mono text-white font-semibold">₹{item.value.toLocaleString()}</span>
                    </div>
                    <div className="w-full h-2 bg-neutral-700 rounded-full overflow-hidden">
                      <div
                        className="h-full"
                        style={{ width: `${item.percentage}%`, backgroundColor: COLORS[idx % COLORS.length] }}
                      />
                    </div>
                    <div className="text-xs text-neutral-400 mt-1">{item.percentage}% of total</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ROI Summary */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/30 rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-display font-bold text-white">ROI Summary</h3>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">Annual Savings</span>
                  <span className="text-2xl font-bold text-green-400">₹{savings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">Savings Percentage</span>
                  <div className="flex items-center gap-2">
                    <TrendingDown className="w-5 h-5 text-green-400" />
                    <span className="text-2xl font-bold text-green-400">{savingsPercent}%</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-green-500/30">
                  <span className="text-neutral-300">Payback Period</span>
                  <span className="text-xl font-bold text-white">{paybackPeriod} months</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-300">5-Year Savings</span>
                  <span className="text-xl font-bold text-white">₹{fiveYearSavings.toLocaleString()}</span>
                </div>
              </div>
            </motion.div>

            {/* Comparison Table */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-neutral-800/50 border-2 border-neutral-700 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Side-by-Side Comparison
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between pb-3 border-b border-neutral-700">
                  <span className="text-neutral-400">Scenario</span>
                  <div className="flex gap-8">
                    <span className="text-red-400 font-semibold w-24 text-right">Current</span>
                    <span className="text-green-400 font-semibold w-24 text-right">With Product</span>
                  </div>
                </div>
                <div className="flex justify-between pb-3 border-b border-neutral-700">
                  <span className="text-white">Total Cost</span>
                  <div className="flex gap-8">
                    <span className="text-white font-mono w-24 text-right">₹{(totalCurrent / 100000).toFixed(1)}L</span>
                    <span className="text-white font-mono w-24 text-right">₹{(totalWithProduct / 100000).toFixed(1)}L</span>
                  </div>
                </div>
                <div className="flex justify-between pb-3 border-b border-neutral-700">
                  <span className="text-white">Annual Savings</span>
                  <div className="flex gap-8">
                    <span className="text-neutral-500 font-mono w-24 text-right">--</span>
                    <span className="text-green-400 font-mono w-24 text-right">₹{(savings / 1000).toFixed(0)}K</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-white">ROI</span>
                  <div className="flex gap-8">
                    <span className="text-neutral-500 font-mono w-24 text-right">--</span>
                    <span className="text-green-400 font-mono w-24 text-right font-bold">{savingsPercent}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TCOBreakdown;
