import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const CompetitiveAdvantageMatrix = ({ productId = 'graphacrete' }) => {
  const [activeProduct, setActiveProduct] = useState(productId);

  const products = {
    graphacrete: {
      name: 'Graphacrete',
      color: 'brand-500',
      competitors: ['UltraTech Admixture', 'Sika Admixture', 'PureGraph'],
      comparison: [
        { metric: 'Cement Saving', graphacrete: '15-20%', competitor1: '0%', competitor2: '0%', competitor3: '3-5%' },
        { metric: 'Water Resistance', graphacrete: '30-45%', competitor1: '<10%', competitor2: '10-20%', competitor3: '20-30%' },
        { metric: 'Dosage Required', graphacrete: '0.05-0.10%', competitor1: '0.2-1.0%', competitor2: '0.2-1.0%', competitor3: '0.2-0.5%' },
        { metric: 'Strength Gain', graphacrete: '40-50%', competitor1: '5-15%', competitor2: '8-15%', competitor3: '10-25%' },
        { metric: 'Micro-Crack Control', graphacrete: 'Excellent', competitor1: 'Low', competitor2: 'Medium', competitor3: 'Medium' },
      ],
    },
    graffisol: {
      name: 'Graffisol',
      color: 'yellow-500',
      competitors: ['KhepriCoat', 'DSM Coating', 'Borosil Coating'],
      comparison: [
        { metric: 'Power Output', graffisol: '7-8%', competitor1: '2-3%', competitor2: '~3%', competitor3: '0%' },
        { metric: 'Temp Reduction', graffisol: '5-6°C', competitor1: 'Not specified', competitor2: 'Not specified', competitor3: 'Not specified' },
        { metric: 'Soiling Reduction', graffisol: '30-40%', competitor1: 'Not specified', competitor2: 'Not specified', competitor3: 'Not specified' },
        { metric: 'Payback Period', graffisol: '18 months', competitor1: '24+ months', competitor2: '24+ months', competitor3: 'N/A' },
      ],
    },
    ceraphene: {
      name: 'Ceraphene',
      color: 'purple-500',
      competitors: ['Gtechniq CSL', 'CarPro CQuartz', 'Ceramic Pro 9H'],
      comparison: [
        { metric: 'Graphene-Enhanced', ceraphene: 'Yes', competitor1: 'No', competitor2: 'No', competitor3: 'No' },
        { metric: 'Durability', ceraphene: '3-4+ years', competitor1: '2-3+ years', competitor2: '1.5-2.5 years', competitor3: 'Up to 5 years' },
        { metric: 'Cost (₹/50ml)', ceraphene: '₹5,000', competitor1: '₹15,000', competitor2: '₹12,000', competitor3: '₹18,000' },
        { metric: 'Cost Effectiveness', ceraphene: 'Very High', competitor1: 'Medium', competitor2: 'Medium', competitor3: 'Low-Medium' },
      ],
    },
  };

  const currentProduct = products[activeProduct];
  const productKey = activeProduct;

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Competitive Advantage
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Monoatom products deliver superior performance at better value
          </p>
        </motion.div>

        {/* Product Selector (if multiple products mode) */}
        {productId === 'all' && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.entries(products).map(([key, product]) => (
              <button
                key={key}
                onClick={() => setActiveProduct(key)}
                className={`px-6 py-3 rounded-sm font-display font-semibold transition-all border font-mono ${
                  activeProduct === key
                    ? `bg-${product.color} text-white shadow-lg border-${product.color}`
                    : 'bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700'
                }`}
              >
                {product.name}
              </button>
            ))}
          </div>
        )}

        {/* Comparison Table */}
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm overflow-hidden shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-950 text-white">
                  <th className="px-6 py-4 text-left font-display font-mono text-sm uppercase tracking-wider">Metric</th>
                  <th className={`px-6 py-4 text-left font-display font-mono text-sm uppercase tracking-wider bg-${currentProduct.color}/20 border-l border-r border-${currentProduct.color}/30`}>
                    {currentProduct.name}
                  </th>
                  {currentProduct.competitors.map((competitor, idx) => (
                    <th key={idx} className="px-6 py-4 text-left font-display font-mono text-sm uppercase tracking-wider text-neutral-500">
                      {competitor}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentProduct.comparison.map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-800 hover:bg-neutral-900/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-300 font-mono">{row.metric}</td>
                    <td className={`px-6 py-4 bg-${currentProduct.color}/10 border-l border-r border-${currentProduct.color}/20`}>
                      <div className="flex items-center gap-2">
                        <Check className={`w-5 h-5 text-${currentProduct.color} flex-shrink-0`} />
                        <span className={`font-bold text-${currentProduct.color} font-mono`}>
                          {row[productKey]}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-neutral-500 font-mono text-sm">{row.competitor1}</td>
                    <td className="px-6 py-4 text-neutral-500 font-mono text-sm">{row.competitor2}</td>
                    <td className="px-6 py-4 text-neutral-500 font-mono text-sm">{row.competitor3}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Key Differentiators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-brand-500/20 border border-brand-500/30 text-white p-6 rounded-sm backdrop-blur">
            <div className="text-3xl font-mono font-bold mb-2">Highest Performance</div>
            <p className="text-neutral-300 text-sm font-mono">Best metrics across all key parameters</p>
          </div>
          <div className="bg-neutral-900/80 border border-neutral-700 text-white p-6 rounded-sm backdrop-blur">
            <div className="text-3xl font-mono font-bold mb-2">Lowest Dosage</div>
            <p className="text-neutral-400 text-sm font-mono">Maximum results with minimal usage</p>
          </div>
          <div className="bg-green-500/20 border border-green-500/30 text-white p-6 rounded-sm backdrop-blur">
            <div className="text-3xl font-mono font-bold mb-2">Best Value</div>
            <p className="text-green-300 text-sm font-mono">Superior cost-to-performance ratio</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantageMatrix;
