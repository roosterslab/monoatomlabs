import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { products } from '../../data/monoatomData';

const ProductCardsV1 = () => {
  const productList = Object.values(products);

  return (
    <div className="w-full min-h-screen bg-black p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            <span className="text-xs font-bold text-neutral-300 tracking-wide uppercase">
              Commercially Available
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Market-Ready Products
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Proven graphene solutions deployed at scale with field-validated performance
          </p>
        </motion.div>

        {/* 2×2 Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productList.map((product, index) => {
            const firstMetricKey = Object.keys(product.metrics)[0];
            const firstMetricValue = product.metrics[firstMetricKey];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="bg-neutral-900 border-2 border-neutral-800 p-8 rounded-lg hover:border-brand-500 transition-all duration-300 group"
              >
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-brand-500/10 text-brand-500 text-xs font-bold rounded mb-6">
                  {product.category}
                </div>

                {/* Product Name */}
                <h3 className="text-3xl md:text-4xl font-display font-bold text-white mb-2 group-hover:text-brand-500 transition-colors">
                  {product.name}
                </h3>
                <p className="text-neutral-400 text-sm mb-8">{product.tagline}</p>

                {/* Key Metric - Large Callout */}
                <div className="mb-8 pb-8 border-b border-neutral-800">
                  <div className="text-7xl font-bold text-brand-500 mb-2 font-mono">
                    {firstMetricValue}
                  </div>
                  <p className="text-neutral-300 text-lg">
                    {firstMetricKey.replace(/([A-Z])/g, ' $1').trim()}
                  </p>
                </div>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {product.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-start text-sm text-neutral-300">
                      <Check className="w-4 h-4 text-brand-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Validation Badge */}
                {product.validation && (
                  <div className="mt-6 pt-6 border-t border-neutral-800">
                    <span className="text-xs text-neutral-500 uppercase tracking-wider">
                      ✓ {product.validation}
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20 pt-12 border-t border-neutral-800"
        >
          <p className="text-neutral-500 text-sm">
            World's only Trillion Dollar Nanomaterial • Advanced Materials for 4th Industrial Revolution
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductCardsV1;
