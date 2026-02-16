import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';

const CircularGauge = ({ percentage, color, size = 140 }) => {
  const radius = (size - 20) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="transform -rotate-90">
      {/* Background circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="#262626"
        strokeWidth="8"
      />
      {/* Progress circle */}
      <motion.circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke={color}
        strokeWidth="8"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        animate={{ strokeDashoffset }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        strokeLinecap="round"
      />
    </svg>
  );
};

const ProductPerformanceCards = () => {
  const products = [
    {
      id: 'graphacrete',
      name: 'Graphacrete',
      category: 'Construction',
      metric: 'Strength Gain',
      value: '+50%',
      percentage: 50,
      color: '#0d9488',
      validation: 'NABL Certified',
    },
    {
      id: 'graffisol',
      name: 'Graffisol',
      category: 'Solar Energy',
      metric: 'Energy Output',
      value: '+11%',
      percentage: 85,
      color: '#f59e0b',
      validation: 'Field Validated',
    },
    {
      id: 'ceraphene',
      name: 'Ceraphene',
      category: 'Automotive',
      metric: 'Cost Savings',
      value: '60-70%',
      percentage: 70,
      color: '#8b5cf6',
      validation: 'Premium Performance',
    },
    {
      id: 'hdgpe',
      name: 'HD-G-PE',
      category: 'Polymers',
      metric: 'Elongation',
      value: '20×',
      percentage: 90,
      color: '#06b6d4',
      validation: 'Lab Tested',
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Product Performance Metrics
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Circular gauge visualization of key product improvements
          </p>
        </motion.div>

        {/* Circular Gauge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 p-8 rounded-sm hover:shadow-[0_0_30px_rgba(13,148,136,0.2)] hover:border-brand-500/50 transition-all group"
            >
              {/* Circular Gauge */}
              <div className="relative mb-6 flex justify-center">
                <CircularGauge percentage={product.percentage} color={product.color} />
                {/* Center Text */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-4xl font-mono font-bold" style={{ color: product.color }}>
                    {product.value}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
                <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                  {product.name}
                </h3>
                <p className="text-sm text-neutral-500 mb-4 font-mono uppercase tracking-wider">{product.category}</p>
                <div className="flex items-center justify-center gap-2 text-neutral-300 mb-4">
                  <TrendingUp className="w-4 h-4" style={{ color: product.color }} />
                  <span className="text-sm font-mono">{product.metric}</span>
                </div>
              </div>

              {/* Validation Badge */}
              {product.validation && (
                <div className="mt-6 pt-6 border-t border-neutral-800">
                  <div className="text-xs text-center px-3 py-2 bg-neutral-800/50 rounded-sm text-neutral-400 font-mono">
                    ✓ {product.validation}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-neutral-900/80 backdrop-blur border border-neutral-800 px-8 py-4 rounded-sm shadow-lg">
            {products.map((product, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: product.color }}></div>
                <span className="text-sm font-mono text-neutral-300">{product.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPerformanceCards;
