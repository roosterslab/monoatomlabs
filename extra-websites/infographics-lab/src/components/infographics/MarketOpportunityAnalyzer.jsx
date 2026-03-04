import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, Globe, Layers } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const MarketOpportunityAnalyzer = () => {
  const [timeHorizon, setTimeHorizon] = useState(5); // years
  const [targetPenetration, setTargetPenetration] = useState(10); // percentage

  const marketSegments = {
    construction: {
      name: 'Construction & Infrastructure',
      tam: 50000, // ₹500 Cr TAM
      currentMarket: 30000,
      growthRate: 12,
      product: 'Graphacrete',
      color: '#8b5cf6',
    },
    solar: {
      name: 'Solar Energy',
      tam: 80000, // ₹800 Cr TAM
      currentMarket: 50000,
      growthRate: 18,
      product: 'Graffisol',
      color: '#f59e0b',
    },
    materials: {
      name: 'Advanced Materials',
      tam: 120000, // ₹1200 Cr TAM
      currentMarket: 60000,
      growthRate: 25,
      product: 'Ceraphene',
      color: '#ec4899',
    },
    polymers: {
      name: 'Polymer Manufacturing',
      tam: 35000, // ₹350 Cr TAM
      currentMarket: 20000,
      growthRate: 10,
      product: 'HD-G-PE',
      color: '#06b6d4',
    },
  };

  const calculations = useMemo(() => {
    const results = {};
    let totalTAM = 0;
    let totalSAM = 0;
    let totalSOM = 0;
    let totalRevenue = 0;

    Object.entries(marketSegments).forEach(([key, segment]) => {
      // TAM - Total Addressable Market (grows over time)
      const tam = segment.tam * Math.pow(1 + segment.growthRate / 100, timeHorizon);

      // SAM - Serviceable Available Market (assume 60% of TAM is serviceable)
      const sam = tam * 0.6;

      // SOM - Serviceable Obtainable Market (based on penetration target)
      const som = sam * (targetPenetration / 100);

      // Projected Revenue (assume 15% of SOM value)
      const revenue = som * 0.15;

      results[key] = {
        ...segment,
        tam: tam / 100, // Convert to Cr
        sam: sam / 100,
        som: som / 100,
        revenue: revenue / 100,
      };

      totalTAM += tam / 100;
      totalSAM += sam / 100;
      totalSOM += som / 100;
      totalRevenue += revenue / 100;
    });

    return {
      segments: results,
      totals: {
        tam: totalTAM,
        sam: totalSAM,
        som: totalSOM,
        revenue: totalRevenue,
      },
    };
  }, [timeHorizon, targetPenetration]);

  const marketData = Object.entries(calculations.segments).map(([key, data]) => ({
    name: data.name,
    TAM: data.tam.toFixed(0),
    SAM: data.sam.toFixed(0),
    SOM: data.som.toFixed(0),
  }));

  const revenueData = Object.entries(calculations.segments).map(([key, data]) => ({
    name: data.product,
    value: data.revenue,
  }));

  const COLORS = ['#8b5cf6', '#f59e0b', '#ec4899', '#06b6d4'];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-900 via-teal-900 to-cyan-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-green-400/50 bg-green-400/10 backdrop-blur mb-6">
            <Globe className="w-4 h-4 text-green-300 animate-pulse" />
            <span className="text-xs font-bold text-green-300 tracking-wide uppercase">
              Market Analysis
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            TAM / SAM / SOM Calculator
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Analyze total addressable market and revenue potential across product lines
          </p>
        </motion.div>

        {/* Controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
            <label className="text-sm font-mono text-green-200 uppercase tracking-wide mb-3 block">
              Time Horizon (Years)
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={timeHorizon}
              onChange={(e) => setTimeHorizon(Number(e.target.value))}
              className="w-full accent-green-500"
            />
            <div className="text-3xl font-bold text-white mt-2">{timeHorizon} years</div>
          </div>

          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
            <label className="text-sm font-mono text-green-200 uppercase tracking-wide mb-3 block">
              Target Market Penetration (%)
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={targetPenetration}
              onChange={(e) => setTargetPenetration(Number(e.target.value))}
              className="w-full accent-green-500"
            />
            <div className="text-3xl font-bold text-white mt-2">{targetPenetration}%</div>
          </div>
        </div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          <div className="bg-gradient-to-br from-blue-400/20 to-cyan-500/20 border-2 border-blue-400/30 backdrop-blur p-6 rounded-xl">
            <Target className="w-8 h-8 text-blue-300 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              ₹{calculations.totals.tam.toFixed(0)} Cr
            </div>
            <div className="text-xs text-blue-200 uppercase tracking-wide">Total TAM</div>
          </div>

          <div className="bg-gradient-to-br from-green-400/20 to-teal-500/20 border-2 border-green-400/30 backdrop-blur p-6 rounded-xl">
            <Layers className="w-8 h-8 text-green-300 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              ₹{calculations.totals.sam.toFixed(0)} Cr
            </div>
            <div className="text-xs text-green-200 uppercase tracking-wide">Total SAM</div>
          </div>

          <div className="bg-gradient-to-br from-purple-400/20 to-pink-500/20 border-2 border-purple-400/30 backdrop-blur p-6 rounded-xl">
            <Globe className="w-8 h-8 text-purple-300 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              ₹{calculations.totals.som.toFixed(0)} Cr
            </div>
            <div className="text-xs text-purple-200 uppercase tracking-wide">Total SOM</div>
          </div>

          <div className="bg-gradient-to-br from-yellow-400/20 to-orange-500/20 border-2 border-yellow-400/30 backdrop-blur p-6 rounded-xl">
            <TrendingUp className="w-8 h-8 text-yellow-300 mb-3" />
            <div className="text-3xl font-bold text-white mb-1">
              ₹{calculations.totals.revenue.toFixed(0)} Cr
            </div>
            <div className="text-xs text-yellow-200 uppercase tracking-wide">Projected Revenue</div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* TAM/SAM/SOM Bar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Market Size Comparison
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={marketData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                <XAxis dataKey="name" stroke="#fff" angle={-15} textAnchor="end" height={100} tick={{ fontSize: 11 }} />
                <YAxis stroke="#fff" label={{ value: 'Market Size (₹ Cr)', angle: -90, position: 'insideLeft', fill: '#fff' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                  formatter={(value) => [`₹${value} Cr`, '']}
                />
                <Legend />
                <Bar dataKey="TAM" fill="#3b82f6" name="TAM" />
                <Bar dataKey="SAM" fill="#10b981" name="SAM" />
                <Bar dataKey="SOM" fill="#a855f7" name="SOM" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Revenue Distribution Pie */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Revenue Distribution
            </h3>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={revenueData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ₹${value.toFixed(0)}Cr`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {revenueData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                  formatter={(value) => [`₹${value.toFixed(2)} Cr`, 'Revenue']}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Segment Breakdown */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-6">
            Segment-by-Segment Breakdown
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="px-4 py-3 text-left text-green-200 font-semibold">Segment</th>
                  <th className="px-4 py-3 text-left text-green-200 font-semibold">Product</th>
                  <th className="px-4 py-3 text-right text-green-200 font-semibold">TAM</th>
                  <th className="px-4 py-3 text-right text-green-200 font-semibold">SAM</th>
                  <th className="px-4 py-3 text-right text-green-200 font-semibold">SOM</th>
                  <th className="px-4 py-3 text-right text-green-200 font-semibold">Revenue</th>
                  <th className="px-4 py-3 text-right text-green-200 font-semibold">Growth</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(calculations.segments).map(([key, data], idx) => (
                  <tr key={key} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                    <td className="px-4 py-3 text-white font-medium">{data.name}</td>
                    <td className="px-4 py-3 text-white">{data.product}</td>
                    <td className="px-4 py-3 text-right text-white font-mono">₹{data.tam.toFixed(0)} Cr</td>
                    <td className="px-4 py-3 text-right text-white font-mono">₹{data.sam.toFixed(0)} Cr</td>
                    <td className="px-4 py-3 text-right text-white font-mono">₹{data.som.toFixed(0)} Cr</td>
                    <td className="px-4 py-3 text-right text-green-400 font-mono font-bold">₹{data.revenue.toFixed(1)} Cr</td>
                    <td className="px-4 py-3 text-right text-white">{data.growthRate}%</td>
                  </tr>
                ))}
                <tr className="border-t-2 border-white/30 font-bold">
                  <td className="px-4 py-3 text-white" colSpan="2">TOTAL</td>
                  <td className="px-4 py-3 text-right text-white font-mono">₹{calculations.totals.tam.toFixed(0)} Cr</td>
                  <td className="px-4 py-3 text-right text-white font-mono">₹{calculations.totals.sam.toFixed(0)} Cr</td>
                  <td className="px-4 py-3 text-right text-white font-mono">₹{calculations.totals.som.toFixed(0)} Cr</td>
                  <td className="px-4 py-3 text-right text-green-400 font-mono text-lg">₹{calculations.totals.revenue.toFixed(0)} Cr</td>
                  <td className="px-4 py-3"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Assumptions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400/30 rounded-xl p-6"
        >
          <h3 className="text-xl font-display font-bold text-white mb-4">Assumptions</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-yellow-100">
            <li>• SAM = 60% of TAM (serviceable portion)</li>
            <li>• SOM = Target penetration % of SAM</li>
            <li>• Revenue = 15% of SOM value</li>
            <li>• Markets grow at segment-specific rates</li>
            <li>• Time horizon: {timeHorizon} years from today</li>
            <li>• Target penetration: {targetPenetration}% of SAM</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default MarketOpportunityAnalyzer;
