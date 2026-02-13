import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, TrendingUp, Zap, Droplet, Sun, Box, PlayCircle, PauseCircle } from 'lucide-react';

const LivePerformanceSimulator = () => {
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');
  const [isLive, setIsLive] = useState(true);
  const [dataPoints, setDataPoints] = useState([]);
  const [currentMetrics, setCurrentMetrics] = useState({
    efficiency: 0,
    output: 0,
    savings: 0,
    uptime: 0,
  });

  const products = {
    graphacrete: {
      name: 'Graphacrete',
      icon: Droplet,
      color: '#0d9488',
      baseEfficiency: 145,
      baseOutput: 50,
      baseSavings: 18,
      baseUptime: 98.5,
      unit: 'MPa',
      outputLabel: 'Compressive Strength',
      savingsLabel: 'Cement Savings',
      metrics: [
        { label: 'Active Projects', value: '127', icon: Activity },
        { label: 'M³ Produced Today', value: '45,230', icon: Box },
        { label: 'CO₂ Saved (kg)', value: '12,450', icon: TrendingUp },
        { label: 'Cost Savings', value: '₹1.2M', icon: Zap },
      ],
    },
    graffisol: {
      name: 'Graffisol',
      icon: Sun,
      color: '#f59e0b',
      baseEfficiency: 111,
      baseOutput: 112,
      baseSavings: 22,
      baseUptime: 99.2,
      unit: '%',
      outputLabel: 'Energy Output',
      savingsLabel: 'Soiling Reduction',
      metrics: [
        { label: 'Coated Panels', value: '8,940', icon: Activity },
        { label: 'MW Capacity', value: '245', icon: Sun },
        { label: 'Extra kWh Today', value: '28,450', icon: TrendingUp },
        { label: 'Revenue Boost', value: '₹2.1M', icon: Zap },
      ],
    },
    ceraphene: {
      name: 'Ceraphene',
      icon: Zap,
      color: '#8b5cf6',
      baseEfficiency: 165,
      baseOutput: 94,
      baseSavings: 67,
      baseUptime: 97.8,
      unit: '%',
      outputLabel: 'Hardness Rating',
      savingsLabel: 'Cost Savings',
      metrics: [
        { label: 'Applications Today', value: '342', icon: Activity },
        { label: 'M² Coated', value: '1,240', icon: Box },
        { label: 'Customer Savings', value: '₹4.2M', icon: TrendingUp },
        { label: 'Durability Years', value: '3.5+', icon: Zap },
      ],
    },
    hdgpe: {
      name: 'HD-G-PE',
      icon: Box,
      color: '#06b6d4',
      baseEfficiency: 2000,
      baseOutput: 130,
      baseSavings: 20,
      baseUptime: 98.9,
      unit: '%',
      outputLabel: 'Elongation Improvement',
      savingsLabel: 'Lifespan Extension',
      metrics: [
        { label: 'Production Batches', value: '89', icon: Activity },
        { label: 'Tonnes Produced', value: '567', icon: Box },
        { label: 'Quality Score', value: '9.7/10', icon: TrendingUp },
        { label: 'Customer Satisfaction', value: '98%', icon: Zap },
      ],
    },
  };

  const product = products[selectedProduct];

  // Generate realistic fluctuating data
  const generateDataPoint = (timestamp) => {
    const variance = 3;
    return {
      time: timestamp,
      efficiency: product.baseEfficiency + (Math.random() - 0.5) * variance,
      output: product.baseOutput + (Math.random() - 0.5) * (variance * 0.5),
      savings: product.baseSavings + (Math.random() - 0.5) * (variance * 0.3),
      uptime: product.baseUptime + (Math.random() - 0.5) * 0.5,
    };
  };

  // Initialize data on mount or product change
  useEffect(() => {
    const initialData = [];
    const now = Date.now();
    for (let i = 20; i >= 0; i--) {
      initialData.push(generateDataPoint(new Date(now - i * 3000).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })));
    }
    setDataPoints(initialData);
    setCurrentMetrics({
      efficiency: initialData[initialData.length - 1].efficiency,
      output: initialData[initialData.length - 1].output,
      savings: initialData[initialData.length - 1].savings,
      uptime: initialData[initialData.length - 1].uptime,
    });
  }, [selectedProduct]);

  // Live data simulation
  useEffect(() => {
    if (!isLive) return;

    const interval = setInterval(() => {
      const newDataPoint = generateDataPoint(new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' }));

      setDataPoints((prev) => {
        const updated = [...prev, newDataPoint];
        return updated.slice(-20); // Keep last 20 points
      });

      setCurrentMetrics({
        efficiency: newDataPoint.efficiency,
        output: newDataPoint.output,
        savings: newDataPoint.savings,
        uptime: newDataPoint.uptime,
      });
    }, 3000); // Update every 3 seconds

    return () => clearInterval(interval);
  }, [isLive, product]);

  const Icon = product.icon;

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6">
            <Activity className="w-4 h-4 text-brand-400 animate-pulse" />
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
              Real-Time Performance
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Live Performance Monitor
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
            Watch our products perform in real-time across active deployments
          </p>

          {/* Product Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {Object.keys(products).map((key) => {
              const ProductIcon = products[key].icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedProduct(key)}
                  className={`px-6 py-3 rounded-sm font-mono font-semibold transition-all border inline-flex items-center gap-2 ${
                    selectedProduct === key
                      ? 'bg-brand-500 text-white border-brand-400 shadow-[0_0_20px_rgba(13,148,136,0.3)]'
                      : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <ProductIcon className="w-5 h-5" />
                  {products[key].name}
                </button>
              );
            })}
          </div>

          {/* Live Status Toggle */}
          <button
            onClick={() => setIsLive(!isLive)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-sm font-mono text-sm transition-all ${
              isLive
                ? 'bg-green-500/20 border border-green-500/40 text-green-400'
                : 'bg-neutral-800 border border-neutral-700 text-neutral-400'
            }`}
          >
            {isLive ? (
              <>
                <PlayCircle className="w-4 h-4 animate-pulse" />
                <span>LIVE</span>
              </>
            ) : (
              <>
                <PauseCircle className="w-4 h-4" />
                <span>PAUSED</span>
              </>
            )}
          </button>
        </motion.div>

        {/* Main Dashboard */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* KPI Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-br from-brand-500/20 to-teal-500/20 border border-brand-500/40 rounded-sm p-6 backdrop-blur"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-neutral-400 uppercase">Efficiency</span>
                  <TrendingUp className="w-4 h-4 text-brand-400" />
                </div>
                <motion.div
                  key={currentMetrics.efficiency}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl font-mono font-bold text-white"
                >
                  {currentMetrics.efficiency.toFixed(1)}%
                </motion.div>
                <div className="text-xs text-green-400 font-mono mt-1">▲ Optimal</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-sm p-6 backdrop-blur"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-neutral-400 uppercase">{product.outputLabel}</span>
                  <Icon className="w-4 h-4 text-purple-400" />
                </div>
                <motion.div
                  key={currentMetrics.output}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl font-mono font-bold text-white"
                >
                  {currentMetrics.output.toFixed(1)} {product.unit}
                </motion.div>
                <div className="text-xs text-green-400 font-mono mt-1">▲ Above Target</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/40 rounded-sm p-6 backdrop-blur"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-neutral-400 uppercase">{product.savingsLabel}</span>
                  <Zap className="w-4 h-4 text-orange-400" />
                </div>
                <motion.div
                  key={currentMetrics.savings}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl font-mono font-bold text-white"
                >
                  {currentMetrics.savings.toFixed(1)}%
                </motion.div>
                <div className="text-xs text-green-400 font-mono mt-1">▲ Increasing</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/40 rounded-sm p-6 backdrop-blur"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-neutral-400 uppercase">System Uptime</span>
                  <Activity className="w-4 h-4 text-green-400" />
                </div>
                <motion.div
                  key={currentMetrics.uptime}
                  initial={{ scale: 1.2, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-3xl font-mono font-bold text-white"
                >
                  {currentMetrics.uptime.toFixed(1)}%
                </motion.div>
                <div className="text-xs text-green-400 font-mono mt-1">✓ Healthy</div>
              </motion.div>
            </div>

            {/* Live Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6 mb-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-display font-bold text-white">Performance Trends</h3>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-brand-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-mono text-neutral-400">Live Updates</span>
                </div>
              </div>

              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={dataPoints}>
                  <defs>
                    <linearGradient id="colorEfficiency" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor={product.color} stopOpacity={0.3}/>
                      <stop offset="95%" stopColor={product.color} stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                  <XAxis
                    dataKey="time"
                    stroke="#737373"
                    tick={{ fill: '#737373', fontSize: 11 }}
                    tickFormatter={(value) => value.slice(-8)}
                  />
                  <YAxis
                    stroke="#737373"
                    tick={{ fill: '#737373', fontSize: 11 }}
                    domain={[product.baseEfficiency - 5, product.baseEfficiency + 5]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#171717',
                      border: '1px solid #404040',
                      borderRadius: '4px',
                      fontSize: '12px'
                    }}
                    labelStyle={{ color: '#a3a3a3' }}
                  />
                  <Area
                    type="monotone"
                    dataKey="efficiency"
                    stroke={product.color}
                    strokeWidth={2}
                    fill="url(#colorEfficiency)"
                    isAnimationActive={true}
                    animationDuration={300}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {product.metrics.map((metric, idx) => {
                const MetricIcon = metric.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6 hover:border-brand-500/30 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-brand-500/10 border border-brand-500/20 rounded-sm">
                        <MetricIcon className="w-5 h-5 text-brand-400" />
                      </div>
                      <span className="text-xs font-mono text-neutral-400 uppercase">{metric.label}</span>
                    </div>
                    <div className="text-2xl font-mono font-bold text-white">{metric.value}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-neutral-500 font-mono">
            Data simulated for demonstration. Actual performance may vary based on application conditions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LivePerformanceSimulator;
