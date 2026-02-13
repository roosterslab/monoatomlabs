import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { products } from '../../data/monoatomData';

const CircularProgress = ({ percentage, color }) => {
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <svg width="140" height="140" className="transform -rotate-90">
      {/* Background circle */}
      <circle
        cx="70"
        cy="70"
        r={radius}
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="8"
      />
      {/* Progress circle */}
      <motion.circle
        cx="70"
        cy="70"
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

const ProductCardsV2 = () => {
  const productList = Object.values(products);

  const getPercentage = (product) => {
    const firstMetricValue = product.metrics[Object.keys(product.metrics)[0]];
    const numericValue = parseInt(firstMetricValue.replace(/[^0-9]/g, ''));
    return Math.min(numericValue, 100);
  };

  const colors = ['#0d9488', '#f59e0b', '#8b5cf6', '#06b6d4'];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
            Performance Metrics
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Circular gauge visualization of key product improvements
          </p>
        </motion.div>

        {/* Circular Gauge Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {productList.map((product, index) => {
            const percentage = getPercentage(product);
            const firstMetricKey = Object.keys(product.metrics)[0];
            const firstMetricValue = product.metrics[firstMetricKey];
            const color = colors[index];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="bg-white border-2 border-neutral-200 p-8 rounded-2xl hover:shadow-2xl hover:border-brand-500 transition-all group"
              >
                {/* Circular Gauge */}
                <div className="relative mb-6 flex justify-center">
                  <CircularProgress percentage={percentage} color={color} />
                  {/* Center Text */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-4xl font-bold font-mono" style={{ color }}>
                      {firstMetricValue}
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-2xl font-display font-bold text-neutral-900 mb-2 group-hover:text-brand-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-sm text-neutral-500 mb-4">{product.category}</p>
                  <div className="flex items-center justify-center gap-2 text-neutral-600">
                    <TrendingUp className="w-4 h-4" style={{ color }} />
                    <span className="text-sm font-medium">
                      {firstMetricKey.replace(/([A-Z])/g, ' $1').trim()}
                    </span>
                  </div>
                </div>

                {/* Validation Badge */}
                {product.validation && (
                  <div className="mt-6 pt-6 border-t border-neutral-100">
                    <div className="text-xs text-center px-3 py-2 bg-neutral-50 rounded-lg text-neutral-600">
                      {product.validation}
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 bg-white px-8 py-4 rounded-full border-2 border-neutral-200 shadow-lg">
            {productList.map((product, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: colors[idx] }}></div>
                <span className="text-sm font-medium text-neutral-700">{product.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCardsV2;
