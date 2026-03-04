import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, TrendingUp, DollarSign, Leaf, Globe } from 'lucide-react';
import { products } from '../../data/monoatomData';

const NationalImpactMap = () => {
  const [adoptionLevel, setAdoptionLevel] = useState(10); // percentage
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');

  const product = products[selectedProduct];

  // Major cities with pulsing markers
  const cities = [
    { name: 'Delhi', x: 52, y: 28 },
    { name: 'Mumbai', x: 42, y: 52 },
    { name: 'Bangalore', x: 50, y: 72 },
    { name: 'Chennai', x: 58, y: 70 },
    { name: 'Kolkata', x: 70, y: 42 },
    { name: 'Hyderabad', x: 55, y: 60 },
    { name: 'Pune', x: 45, y: 54 },
    { name: 'Ahmedabad', x: 40, y: 38 },
  ];

  // Calculate national impact based on product and adoption
  const calculateImpact = () => {
    const baseImpact = {
      graphacrete: {
        fuelSaved: 0,
        co2Avoided: 250000, // tons/year at 10%
        forexSavings: 180, // Cr/year
        jobsCreated: 5000,
        unit: 'tons cement',
      },
      graffisol: {
        fuelSaved: 0,
        co2Avoided: 180000,
        forexSavings: 120,
        jobsCreated: 3500,
        unit: 'MW solar',
      },
      ceraphene: {
        fuelSaved: 0,
        co2Avoided: 50000,
        forexSavings: 250,
        jobsCreated: 2000,
        unit: 'tons graphene',
      },
      hdgpe: {
        fuelSaved: 0,
        co2Avoided: 30000,
        forexSavings: 80,
        jobsCreated: 1500,
        unit: 'tons polymer',
      },
    };

    const base = baseImpact[selectedProduct];
    const multiplier = adoptionLevel / 10;

    return {
      co2Avoided: Math.round(base.co2Avoided * multiplier),
      forexSavings: Math.round(base.forexSavings * multiplier),
      jobsCreated: Math.round(base.jobsCreated * multiplier),
      unit: base.unit,
    };
  };

  const impact = calculateImpact();

  const productColors = {
    graphacrete: '#8b5cf6',
    graffisol: '#f59e0b',
    ceraphene: '#ec4899',
    hdgpe: '#06b6d4',
  };

  const currentColor = productColors[selectedProduct];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-cyan-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-blue-400/50 bg-blue-400/10 backdrop-blur mb-6">
            <Globe className="w-4 h-4 text-blue-300 animate-pulse" />
            <span className="text-xs font-bold text-blue-300 tracking-wide uppercase">
              National Impact
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            India-Wide Adoption
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Visualize the national impact at different adoption levels
          </p>
        </motion.div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Product Selection */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
            <label className="text-sm font-mono text-blue-200 uppercase tracking-wide mb-3 block">
              Select Product
            </label>
            <div className="grid grid-cols-2 gap-3">
              {Object.keys(products).map((key) => (
                <button
                  key={key}
                  onClick={() => setSelectedProduct(key)}
                  className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                    selectedProduct === key
                      ? 'bg-brand-500 text-white shadow-lg'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  {products[key].name}
                </button>
              ))}
            </div>
          </div>

          {/* Adoption Level */}
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
            <label className="text-sm font-mono text-blue-200 uppercase tracking-wide mb-3 block">
              Market Adoption Level
            </label>
            <input
              type="range"
              min="5"
              max="50"
              step="5"
              value={adoptionLevel}
              onChange={(e) => setAdoptionLevel(Number(e.target.value))}
              className="w-full accent-brand-500"
            />
            <div className="text-3xl font-bold text-white mt-2">{adoptionLevel}%</div>
            <div className="text-sm text-blue-200 mt-1">of addressable market</div>
          </div>
        </div>

        {/* Map and Impact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* India Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-8"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Deployment Locations
            </h3>

            {/* Simplified India Map */}
            <div className="relative bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-xl p-8" style={{ height: '500px' }}>
              {/* Simplified India outline using SVG */}
              <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
                <path
                  d="M 50 10 L 55 15 L 60 20 L 65 30 L 70 40 L 72 50 L 70 60 L 65 70 L 60 75 L 55 80 L 50 85 L 45 80 L 40 75 L 35 70 L 33 60 L 35 50 L 40 40 L 42 30 L 45 20 L 48 15 Z"
                  fill="none"
                  stroke={currentColor}
                  strokeWidth="0.5"
                />
              </svg>

              {/* City Markers */}
              {cities.map((city, idx) => (
                <motion.div
                  key={city.name}
                  className="absolute"
                  style={{
                    left: `${city.x}%`,
                    top: `${city.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  {/* Pulsing Circle */}
                  <motion.div
                    className="relative"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.8, 0.3, 0.8],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: idx * 0.2,
                    }}
                  >
                    <div
                      className="w-8 h-8 rounded-full"
                      style={{ backgroundColor: currentColor, opacity: 0.6 }}
                    />
                  </motion.div>

                  {/* Pin Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <MapPin className="w-4 h-4 text-white" fill="white" />
                  </div>

                  {/* City Label */}
                  <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <div className="text-xs font-semibold text-white bg-black/50 px-2 py-1 rounded">
                      {city.name}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Impact Metrics */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/30 backdrop-blur rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-10 h-10 text-green-400" />
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Environmental Impact
                  </h3>
                  <p className="text-green-200 text-sm">At {adoptionLevel}% adoption</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-sm text-green-200 mb-2">CO₂ Emissions Avoided</div>
                  <div className="text-4xl font-bold text-white">
                    {impact.co2Avoided.toLocaleString()} tons/year
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="text-xs text-green-200 mb-2">Trees Equivalent</div>
                    <div className="text-2xl font-bold text-white">
                      {Math.round(impact.co2Avoided / 21).toLocaleString()}
                    </div>
                  </div>
                  <div className="bg-black/30 p-4 rounded-lg">
                    <div className="text-xs text-green-200 mb-2">Cars Off Road</div>
                    <div className="text-2xl font-bold text-white">
                      {Math.round(impact.co2Avoided / 4.6).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30 backdrop-blur rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                <DollarSign className="w-10 h-10 text-yellow-400" />
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Economic Impact
                  </h3>
                  <p className="text-yellow-200 text-sm">Annual savings & value</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-sm text-yellow-200 mb-2">Forex Savings</div>
                  <div className="text-4xl font-bold text-white">
                    ₹{impact.forexSavings} Cr/year
                  </div>
                </div>

                <div className="bg-black/30 p-4 rounded-lg">
                  <div className="text-sm text-yellow-200 mb-2">Jobs Created</div>
                  <div className="text-4xl font-bold text-white">
                    {impact.jobsCreated.toLocaleString()}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 backdrop-blur rounded-xl p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="w-10 h-10 text-purple-400" />
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Growth Potential
                  </h3>
                </div>
              </div>

              <div className="text-purple-200 leading-relaxed">
                With {adoptionLevel}% market penetration, {product.name} can transform the {product.category} sector across India, creating significant environmental and economic benefits.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NationalImpactMap;
