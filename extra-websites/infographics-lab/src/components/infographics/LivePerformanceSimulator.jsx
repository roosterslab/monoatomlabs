import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, TrendingUp, Zap, DollarSign, Leaf } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, AreaChart } from 'recharts';
import { products } from '../../data/monoatomData';

const LivePerformanceSimulator = () => {
  const [selectedProduct, setSelectedProduct] = useState('graffisol');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDay, setCurrentDay] = useState(0);
  const [simulationData, setSimulationData] = useState([]);
  const [isComplete, setIsComplete] = useState(false);

  const product = products[selectedProduct];

  // Generate realistic simulation data
  const generateSimulationData = (product, days) => {
    const data = [];
    let baselineValue = 100;
    let improvedValue = 100;

    const improvement = product === 'graffisol' ? 11 : product === 'graphacrete' ? 17.5 : product === 'ceraphene' ? 65 : 20;

    for (let day = 0; day <= days; day++) {
      // Add some variance for realism
      const variance = (Math.random() - 0.5) * 3;
      const baseline = baselineValue + variance;
      const improved = baselineValue * (1 + improvement / 100) + variance;

      data.push({
        day,
        baseline: Math.max(0, baseline),
        withProduct: Math.max(0, improved),
        improvement: ((improved - baseline) / baseline * 100).toFixed(1),
      });
    }

    return data;
  };

  // Reset simulation
  const resetSimulation = () => {
    setCurrentDay(0);
    setSimulationData([]);
    setIsPlaying(false);
    setIsComplete(false);
  };

  // Play/pause simulation
  useEffect(() => {
    if (!isPlaying || isComplete) return;

    const interval = setInterval(() => {
      setCurrentDay((prev) => {
        if (prev >= 30) {
          setIsPlaying(false);
          setIsComplete(true);
          return prev;
        }
        return prev + 1;
      });
    }, 200); // 200ms per day = 6 seconds total

    return () => clearInterval(interval);
  }, [isPlaying, isComplete]);

  // Update simulation data as days progress
  useEffect(() => {
    setSimulationData(generateSimulationData(selectedProduct, currentDay));
  }, [currentDay, selectedProduct]);

  // Calculate current metrics
  const currentMetrics = simulationData.length > 0 ? {
    improvement: parseFloat(simulationData[simulationData.length - 1]?.improvement || 0),
    baseline: simulationData[simulationData.length - 1]?.baseline || 0,
    withProduct: simulationData[simulationData.length - 1]?.withProduct || 0,
  } : { improvement: 0, baseline: 0, withProduct: 0 };

  // Calculate cumulative savings
  const totalImprovement = simulationData.reduce((sum, d) => sum + parseFloat(d.improvement), 0) / (simulationData.length || 1);

  const productConfigs = {
    graffisol: {
      unit: 'kWh',
      savingsMultiplier: 100,
      co2Factor: 0.82,
      color: '#f59e0b',
    },
    graphacrete: {
      unit: 'm³',
      savingsMultiplier: 430,
      co2Factor: 0.3,
      color: '#8b5cf6',
    },
    ceraphene: {
      unit: 'kg',
      savingsMultiplier: 10000,
      co2Factor: 0.1,
      color: '#ec4899',
    },
    hdgpe: {
      unit: 'tons',
      savingsMultiplier: 200,
      co2Factor: 0.2,
      color: '#06b6d4',
    },
  };

  const config = productConfigs[selectedProduct];
  const energySaved = (totalImprovement * config.savingsMultiplier * currentDay / 100).toFixed(0);
  const costSaved = (energySaved * 8).toFixed(0);
  const co2Reduced = (energySaved * config.co2Factor).toFixed(0);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-800 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-500/50 bg-brand-500/10 backdrop-blur mb-6">
            <Zap className="w-4 h-4 text-brand-400 animate-pulse" />
            <span className="text-xs font-bold text-brand-400 tracking-wide uppercase">
              Live Simulation
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            30-Day Performance Pilot
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Watch real-time performance improvements over a typical pilot period
          </p>
        </motion.div>

        {/* Product Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {Object.keys(productConfigs).map((key) => (
            <button
              key={key}
              onClick={() => {
                setSelectedProduct(key);
                resetSimulation();
              }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedProduct === key
                  ? 'bg-brand-500 text-white'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {products[key].name}
            </button>
          ))}
        </div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-4 mb-8"
        >
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            disabled={isComplete}
            className={`flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all ${
              isComplete
                ? 'bg-neutral-700 text-neutral-500 cursor-not-allowed'
                : 'bg-brand-500 text-white hover:bg-brand-600'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5" />
                Pause
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                {currentDay === 0 ? 'Start Simulation' : 'Resume'}
              </>
            )}
          </button>

          <button
            onClick={resetSimulation}
            className="flex items-center gap-2 px-8 py-4 bg-neutral-700 text-white rounded-xl font-semibold hover:bg-neutral-600 transition-all"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-neutral-400 mb-2">
            <span>Day {currentDay} of 30</span>
            <span>{((currentDay / 30) * 100).toFixed(0)}% Complete</span>
          </div>
          <div className="w-full h-3 bg-neutral-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-500 to-green-500"
              initial={{ width: 0 }}
              animate={{ width: `${(currentDay / 30) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Live Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/30 p-6 rounded-xl">
            <TrendingUp className="w-8 h-8 text-green-400 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              {totalImprovement.toFixed(1)}%
            </div>
            <div className="text-xs text-neutral-400 uppercase tracking-wide">Avg Improvement</div>
          </div>

          <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30 p-6 rounded-xl">
            <Zap className="w-8 h-8 text-blue-400 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{energySaved}</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wide">Energy Saved ({config.unit})</div>
          </div>

          <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30 p-6 rounded-xl">
            <DollarSign className="w-8 h-8 text-yellow-400 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">₹{costSaved}</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wide">Cost Saved</div>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 p-6 rounded-xl">
            <Leaf className="w-8 h-8 text-purple-400 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">{co2Reduced} kg</div>
            <div className="text-xs text-neutral-400 uppercase tracking-wide">CO₂ Reduced</div>
          </div>
        </motion.div>

        {/* Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-neutral-800/50 border-2 border-neutral-700 p-6 rounded-xl mb-8"
        >
          <h3 className="text-xl font-display font-bold text-white mb-6">
            Performance Over Time
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={simulationData}>
              <defs>
                <linearGradient id="colorBaseline" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorWithProduct" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#404040" />
              <XAxis dataKey="day" stroke="#888" label={{ value: 'Day', position: 'insideBottom', offset: -5, fill: '#888' }} />
              <YAxis stroke="#888" label={{ value: 'Performance Index', angle: -90, position: 'insideLeft', fill: '#888' }} />
              <Tooltip
                contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="baseline"
                stroke="#ef4444"
                fillOpacity={1}
                fill="url(#colorBaseline)"
                name="Baseline"
              />
              <Area
                type="monotone"
                dataKey="withProduct"
                stroke="#10b981"
                fillOpacity={1}
                fill="url(#colorWithProduct)"
                name={`With ${product.name}`}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Completion Screen */}
        <AnimatePresence>
          {isComplete && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-gradient-to-r from-green-500/20 to-teal-500/20 border-2 border-green-500/50 rounded-2xl p-12 text-center"
            >
              <div className="text-6xl mb-4">🎉</div>
              <h2 className="text-4xl font-display font-bold text-white mb-4">
                Pilot Complete!
              </h2>
              <p className="text-xl text-green-200 mb-6">
                30-day simulation finished with {totalImprovement.toFixed(1)}% average improvement
              </p>
              <div className="grid grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
                <div>
                  <div className="text-3xl font-bold text-white mb-2">{energySaved} {config.unit}</div>
                  <div className="text-sm text-neutral-300">Total Energy Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">₹{costSaved}</div>
                  <div className="text-sm text-neutral-300">Total Cost Saved</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-2">{co2Reduced} kg</div>
                  <div className="text-sm text-neutral-300">CO₂ Emissions Reduced</div>
                </div>
              </div>
              <button
                onClick={resetSimulation}
                className="mt-8 px-8 py-4 bg-brand-500 text-white rounded-xl font-semibold hover:bg-brand-600 transition-all"
              >
                Run Another Simulation
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LivePerformanceSimulator;
