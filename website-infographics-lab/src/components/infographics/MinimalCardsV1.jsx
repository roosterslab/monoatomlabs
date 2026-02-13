import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '../../data/monoatomData';

const MinimalCardsV1 = () => {
  const productList = Object.values(products);

  return (
    <div className="w-full min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <div className="text-sm font-mono text-neutral-400 mb-4">PRODUCT PORTFOLIO</div>
          <h1 className="text-7xl md:text-8xl font-display font-bold text-neutral-900 mb-6 tracking-tight">
            Market
            <br />
            Ready.
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl">
            Four commercially available graphene solutions deployed at industrial scale
          </p>
        </motion.div>

        {/* Minimal Product Stack */}
        <div className="space-y-6">
          {productList.map((product, index) => {
            const firstMetricKey = Object.keys(product.metrics)[0];
            const firstMetricValue = product.metrics[firstMetricKey];

            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group cursor-pointer"
              >
                <div className="border-2 border-neutral-200 hover:border-black transition-all duration-300 bg-white hover:shadow-2xl">
                  <div className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                    {/* Left: Product Info */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-4 mb-3">
                        <div className="text-sm font-mono text-neutral-400">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <div className="h-px w-8 bg-neutral-200 group-hover:bg-black transition-colors"></div>
                        <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                          {product.category}
                        </div>
                      </div>
                      <h2 className="text-4xl md:text-5xl font-display font-bold text-neutral-900 mb-3 group-hover:text-brand-500 transition-colors">
                        {product.name}
                      </h2>
                      <p className="text-neutral-600 max-w-xl">
                        {product.tagline}
                      </p>
                    </div>

                    {/* Right: Metric */}
                    <div className="flex items-center gap-8">
                      <div className="text-right">
                        <div className="text-6xl font-bold font-mono text-neutral-900 mb-2">
                          {firstMetricValue}
                        </div>
                        <div className="text-sm text-neutral-500 uppercase tracking-wide">
                          {firstMetricKey.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                      <ArrowRight className="w-8 h-8 text-neutral-300 group-hover:text-black group-hover:translate-x-2 transition-all" />
                    </div>
                  </div>

                  {/* Bottom Bar - Validation */}
                  {product.validation && (
                    <div className="border-t-2 border-neutral-200 px-12 py-4 bg-neutral-50">
                      <div className="text-xs font-mono text-neutral-500 uppercase tracking-widest">
                        ✓ {product.validation}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-12 border-t-2 border-neutral-200 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div>
            <div className="text-4xl font-bold font-mono text-neutral-900 mb-2">4</div>
            <div className="text-sm text-neutral-500 uppercase tracking-wide">Products</div>
          </div>
          <div>
            <div className="text-4xl font-bold font-mono text-neutral-900 mb-2">10+</div>
            <div className="text-sm text-neutral-500 uppercase tracking-wide">Innovations</div>
          </div>
          <div>
            <div className="text-4xl font-bold font-mono text-neutral-900 mb-2">2</div>
            <div className="text-sm text-neutral-500 uppercase tracking-wide">Facilities</div>
          </div>
          <div>
            <div className="text-4xl font-bold font-mono text-neutral-900 mb-2">NABL</div>
            <div className="text-sm text-neutral-500 uppercase tracking-wide">Certified</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MinimalCardsV1;
