import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Clock, Download, Share2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { products } from '../../data/monoatomData';

const InteractiveROICalculator = () => {
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');
  const [projectSize, setProjectSize] = useState(1000); // m³ for Graphacrete
  const [cementCost, setCementCost] = useState(400); // ₹/bag
  const [timeHorizon, setTimeHorizon] = useState(5); // years

  const product = products[selectedProduct];

  // Calculate savings based on product
  const calculations = useMemo(() => {
    let monthlySavings = 0;
    let productCost = 0;
    let percentSavings = 0;

    if (selectedProduct === 'graphacrete') {
      // 15-20% cement reduction = savings
      const cementSavingPercent = 0.175; // Use average 17.5%
      const cementBagsPerM3 = 6.25; // Approx for M30
      const monthlyCement = projectSize * cementBagsPerM3;
      const cementSaved = monthlyCement * cementSavingPercent;
      monthlySavings = cementSaved * cementCost;
      productCost = projectSize * 50; // Approx ₹50/m³ for Graphacrete
      percentSavings = cementSavingPercent * 100;
    } else if (selectedProduct === 'graffisol') {
      // 10-12% energy output increase
      const energyGain = 0.11; // Use average 11%
      const panelCapacity = projectSize; // kW
      const monthlyGeneration = panelCapacity * 150; // kWh/month rough estimate
      const electricityRate = 8; // ₹/kWh
      monthlySavings = monthlyGeneration * energyGain * electricityRate;
      productCost = panelCapacity * 500; // Approx coating cost
      percentSavings = energyGain * 100;
    } else if (selectedProduct === 'ceraphene') {
      // 60-70% cost reduction in friction reduction
      const costReduction = 0.65; // 65% average
      const baselineCost = projectSize * 15000; // ₹15k baseline graphene cost per kg
      const withCeraphene = projectSize * 5000; // ₹5k with Ceraphene
      monthlySavings = (baselineCost - withCeraphene) / 12;
      productCost = withCeraphene;
      percentSavings = costReduction * 100;
    } else if (selectedProduct === 'hdgpe') {
      // 20% lifespan extension
      const lifespanGain = 0.2;
      const productionCost = projectSize * 1000; // ₹1000/ton
      monthlySavings = (productionCost * lifespanGain) / 60; // Amortized over 5 years
      productCost = projectSize * 100; // Additive cost
      percentSavings = lifespanGain * 100;
    }

    const annualSavings = monthlySavings * 12;
    const totalSavings = annualSavings * timeHorizon;
    const netSavings = totalSavings - productCost;
    const roi = ((netSavings / productCost) * 100).toFixed(0);
    const paybackMonths = (productCost / monthlySavings).toFixed(1);

    // Generate projection data
    const projectionData = [];
    let cumulative = -productCost;
    for (let year = 0; year <= timeHorizon; year++) {
      if (year === 0) {
        projectionData.push({
          year: 0,
          savings: 0,
          cumulative: -productCost,
        });
      } else {
        cumulative += annualSavings;
        projectionData.push({
          year,
          savings: annualSavings,
          cumulative,
        });
      }
    }

    return {
      monthlySavings,
      annualSavings,
      totalSavings,
      productCost,
      netSavings,
      roi,
      paybackMonths,
      percentSavings,
      projectionData,
    };
  }, [selectedProduct, projectSize, cementCost, timeHorizon]);

  const productOptions = [
    { id: 'graphacrete', name: 'Graphacrete', unit: 'm³ concrete', label: 'Project Size (m³)' },
    { id: 'graffisol', name: 'Graffisol', unit: 'kW capacity', label: 'Solar Capacity (kW)' },
    { id: 'ceraphene', name: 'Ceraphene', unit: 'kg required', label: 'Quantity (kg)' },
    { id: 'hdgpe', name: 'HD-G-PE', unit: 'tons', label: 'Production Volume (tons)' },
  ];

  const currentOption = productOptions.find(p => p.id === selectedProduct);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-500/50 bg-brand-500/10 backdrop-blur mb-6">
            <Calculator className="w-4 h-4 text-brand-400 animate-pulse" />
            <span className="text-xs font-bold text-brand-400 tracking-wide uppercase">
              ROI Calculator
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Calculate Your Savings
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            See real-time ROI projections for Monoatom products with interactive controls
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Controls */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Product Selection */}
            <div className="bg-neutral-800/50 border-2 border-neutral-700 p-6 rounded-xl">
              <label className="text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block">
                Select Product
              </label>
              <div className="space-y-2">
                {productOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setSelectedProduct(option.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                      selectedProduct === option.id
                        ? 'bg-brand-500 text-white font-semibold'
                        : 'bg-neutral-700/50 text-neutral-300 hover:bg-neutral-700'
                    }`}
                  >
                    {option.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Size Slider */}
            <div className="bg-neutral-800/50 border-2 border-neutral-700 p-6 rounded-xl">
              <label className="text-sm font-mono text-neutral-400 uppercase tracking-wide mb-3 block">
                {currentOption.label}
              </label>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={projectSize}
                onChange={(e) => setProjectSize(Number(e.target.value))}
                className="w-full accent-brand-500"
              />
              <div className="text-3xl font-bold text-white mt-2">
                {projectSize.toLocaleString()} {currentOption.unit}
              </div>
            </div>

            {/* Time Horizon */}
            <div className="bg-neutral-800/50 border-2 border-neutral-700 p-6 rounded-xl">
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
                className="w-full accent-brand-500"
              />
              <div className="text-3xl font-bold text-white mt-2">{timeHorizon} years</div>
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors">
                <Share2 className="w-4 h-4" />
                Share
              </button>
            </div>
          </motion.div>

          {/* Right: Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/30 p-6 rounded-xl">
                <DollarSign className="w-8 h-8 text-green-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  ₹{(calculations.annualSavings / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wide">Annual Savings</div>
              </div>

              <div className="bg-gradient-to-br from-brand-500/20 to-blue-500/20 border-2 border-brand-500/30 p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-brand-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{calculations.roi}%</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wide">ROI</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 p-6 rounded-xl">
                <Clock className="w-8 h-8 text-purple-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{calculations.paybackMonths}mo</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wide">Payback Period</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30 p-6 rounded-xl">
                <Calculator className="w-8 h-8 text-yellow-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.percentSavings.toFixed(0)}%
                </div>
                <div className="text-xs text-neutral-400 uppercase tracking-wide">Cost Reduction</div>
              </div>
            </motion.div>

            {/* Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-800/50 border-2 border-neutral-700 p-6 rounded-xl"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                {timeHorizon}-Year ROI Projection
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={calculations.projectionData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
                  <XAxis
                    dataKey="year"
                    stroke="#888"
                    label={{ value: 'Year', position: 'insideBottom', offset: -5, fill: '#888' }}
                  />
                  <YAxis
                    stroke="#888"
                    tickFormatter={(value) => `₹${(value / 100000).toFixed(0)}L`}
                  />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    labelStyle={{ color: '#fff' }}
                    formatter={(value) => [`₹${(value / 100000).toFixed(2)}L`, '']}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="cumulative"
                    stroke="#0d9488"
                    strokeWidth={3}
                    name="Cumulative Savings"
                    dot={{ fill: '#0d9488', r: 5 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Financial Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-neutral-800/50 border-2 border-neutral-700 p-6 rounded-xl"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">Financial Summary</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                  <span className="text-neutral-400">Initial Investment</span>
                  <span className="text-white font-mono">₹{calculations.productCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                  <span className="text-neutral-400">Total Savings ({timeHorizon} years)</span>
                  <span className="text-green-400 font-mono">₹{calculations.totalSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-neutral-700">
                  <span className="text-neutral-400">Net Profit</span>
                  <span className="text-brand-400 font-mono font-bold">₹{calculations.netSavings.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400">Return on Investment</span>
                  <span className="text-brand-400 font-mono font-bold text-2xl">{calculations.roi}%</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveROICalculator;
