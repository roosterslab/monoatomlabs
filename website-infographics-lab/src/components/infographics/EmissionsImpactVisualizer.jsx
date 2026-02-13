import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Car, Home, TrendingDown, Award } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const EmissionsImpactVisualizer = () => {
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');
  const [projectScale, setProjectScale] = useState(1000);

  const calculateImpact = (product, scale) => {
    let co2Reduced = 0;
    let pm = 0;
    let nox = 0;
    let sox = 0;

    if (product === 'graphacrete') {
      // 15-20% cement reduction = CO₂ savings (cement production is ~0.9 kg CO₂/kg)
      const cementSaved = scale * 6.25 * 50 * 0.175; // m³ × bags/m³ × kg/bag × 17.5% reduction
      co2Reduced = cementSaved * 0.9; // kg CO₂
      pm = co2Reduced * 0.001; // Minimal PM reduction
      nox = co2Reduced * 0.002;
      sox = co2Reduced * 0.001;
    } else if (product === 'graffisol') {
      // Energy output increase = avoided coal/gas power
      const energyGain = scale * 150 * 0.11; // kW × kWh/month × 11%
      co2Reduced = energyGain * 0.82 * 12; // kg CO₂/kWh × months (coal grid mix)
      pm = co2Reduced * 0.003;
      nox = co2Reduced * 0.004;
      sox = co2Reduced * 0.005;
    }

    // Real-world equivalents
    const treesPlanted = Math.round(co2Reduced / 21); // 1 tree absorbs ~21 kg CO₂/year
    const carsOffRoad = Math.round(co2Reduced / 4600); // Avg car emits ~4.6 tons CO₂/year
    const homesEnergy = Math.round(co2Reduced / 7300); // Avg home ~7.3 tons CO₂/year

    // Carbon credit value (₹1500-2500 per ton CO₂)
    const carbonCreditValue = (co2Reduced / 1000) * 2000;

    return {
      co2Reduced,
      pm,
      nox,
      sox,
      treesPlanted,
      carsOffRoad,
      homesEnergy,
      carbonCreditValue,
    };
  };

  const impact = calculateImpact(selectedProduct, projectScale);

  const emissionsData = [
    {
      pollutant: 'CO₂',
      before: 100,
      after: 100 - (impact.co2Reduced / 100),
      reduction: impact.co2Reduced.toFixed(0),
    },
    {
      pollutant: 'PM',
      before: 100,
      after: 100 - (impact.pm / 10),
      reduction: impact.pm.toFixed(1),
    },
    {
      pollutant: 'NOₓ',
      before: 100,
      after: 100 - (impact.nox / 10),
      reduction: impact.nox.toFixed(1),
    },
    {
      pollutant: 'SOₓ',
      before: 100,
      after: 100 - (impact.sox / 10),
      reduction: impact.sox.toFixed(1),
    },
  ];

  const products = [
    { id: 'graphacrete', name: 'Graphacrete', unit: 'm³', max: 10000 },
    { id: 'graffisol', name: 'Graffisol', unit: 'kW', max: 5000 },
  ];

  const currentProduct = products.find(p => p.id === selectedProduct);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-green-400/50 bg-green-400/10 backdrop-blur mb-6">
            <Leaf className="w-4 h-4 text-green-300 animate-pulse" />
            <span className="text-xs font-bold text-green-300 tracking-wide uppercase">
              Environmental Impact
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Emissions Reduction
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Visualize the environmental benefits with real-world equivalents
          </p>
        </motion.div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Product Selection */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
            <label className="text-sm font-mono text-green-200 uppercase tracking-wide mb-3 block">
              Select Product
            </label>
            <div className="space-y-2">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => setSelectedProduct(product.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
                    selectedProduct === product.id
                      ? 'bg-green-500 text-white font-semibold'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>

          {/* Scale Slider */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
            <label className="text-sm font-mono text-green-200 uppercase tracking-wide mb-3 block">
              Project Scale ({currentProduct.unit})
            </label>
            <input
              type="range"
              min="100"
              max={currentProduct.max}
              step="100"
              value={projectScale}
              onChange={(e) => setProjectScale(Number(e.target.value))}
              className="w-full accent-green-500"
            />
            <div className="text-3xl font-bold text-white mt-2">
              {projectScale.toLocaleString()} {currentProduct.unit}
            </div>
          </div>
        </div>

        {/* Real-World Equivalents */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-green-400/20 to-emerald-500/20 border-2 border-green-400/30 backdrop-blur rounded-xl p-8 text-center">
            <Leaf className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <div className="text-5xl font-bold text-white mb-2">{impact.treesPlanted}</div>
            <div className="text-green-200">Trees Planted Equivalent</div>
            <div className="text-sm text-green-300 mt-2">(Annual CO₂ absorption)</div>
          </div>

          <div className="bg-gradient-to-br from-blue-400/20 to-cyan-500/20 border-2 border-blue-400/30 backdrop-blur rounded-xl p-8 text-center">
            <Car className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <div className="text-5xl font-bold text-white mb-2">{impact.carsOffRoad}</div>
            <div className="text-blue-200">Cars Off The Road</div>
            <div className="text-sm text-blue-300 mt-2">(Annual emissions)</div>
          </div>

          <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 border-2 border-purple-400/30 backdrop-blur rounded-xl p-8 text-center">
            <Home className="w-12 h-12 text-purple-300 mx-auto mb-4" />
            <div className="text-5xl font-bold text-white mb-2">{impact.homesEnergy}</div>
            <div className="text-purple-200">Homes' Energy Offset</div>
            <div className="text-sm text-purple-300 mt-2">(Annual consumption)</div>
          </div>
        </motion.div>

        {/* Emissions Breakdown Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8 mb-12"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-3">
            <TrendingDown className="w-8 h-8 text-green-400" />
            Emissions Breakdown
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={emissionsData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
              <XAxis dataKey="pollutant" stroke="#fff" />
              <YAxis stroke="#fff" label={{ value: 'Index (100 = Baseline)', angle: -90, position: 'insideLeft', fill: '#fff' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Bar dataKey="before" fill="#ef4444" name="Before" />
              <Bar dataKey="after" fill="#10b981" name="After" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Carbon Credits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400/30 backdrop-blur rounded-xl p-8 text-center"
        >
          <Award className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
          <h3 className="text-2xl font-display font-bold text-white mb-2">
            Potential Carbon Credit Value
          </h3>
          <div className="text-5xl font-bold text-yellow-300 mb-2">
            ₹{impact.carbonCreditValue.toLocaleString()}
          </div>
          <p className="text-yellow-100">
            Based on {(impact.co2Reduced / 1000).toFixed(2)} tons CO₂ reduced @ ₹2,000/ton
          </p>
          <div className="mt-4 text-sm text-yellow-200">
            * Carbon credit rates vary by market and certification
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default EmissionsImpactVisualizer;
