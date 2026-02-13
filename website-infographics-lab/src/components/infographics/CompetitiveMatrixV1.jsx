import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { competitiveData } from '../../data/monoatomData';

const CompetitiveMatrixV1 = () => {
  const [activeProduct, setActiveProduct] = useState('graphacrete');

  const products = {
    graphacrete: { name: 'Graphacrete', color: 'bg-blue-500' },
    graffisol: { name: 'Graffisol', color: 'bg-yellow-500' },
    ceraphene: { name: 'Ceraphene', color: 'bg-purple-500' }
  };

  const currentData = competitiveData[activeProduct];

  return (
    <div className="w-full min-h-screen bg-neutral-50 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
            Competitive Advantage
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Monoatom products deliver superior performance at better value
          </p>
        </motion.div>

        {/* Product Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(products).map(([key, product]) => (
            <button
              key={key}
              onClick={() => setActiveProduct(key)}
              className={`px-6 py-3 rounded-lg font-display font-semibold transition-all ${
                activeProduct === key
                  ? 'bg-brand-500 text-white shadow-lg scale-105'
                  : 'bg-white text-neutral-700 border-2 border-neutral-200 hover:border-brand-500'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Comparison Table */}
        <motion.div
          key={activeProduct}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white border-2 border-neutral-200 rounded-lg overflow-hidden shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-900 text-white">
                  <th className="px-6 py-4 text-left font-display">Metric</th>
                  <th className="px-6 py-4 text-left font-display bg-brand-500">
                    {products[activeProduct].name}
                  </th>
                  {currentData.competitors.map((competitor, idx) => (
                    <th key={idx} className="px-6 py-4 text-left font-display text-neutral-400">
                      {competitor}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {currentData.comparison.map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-neutral-900">{row.metric}</td>
                    <td className="px-6 py-4 bg-brand-50">
                      <div className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-brand-500 flex-shrink-0" />
                        <span className="font-bold text-brand-600">
                          {row[activeProduct]}
                        </span>
                      </div>
                    </td>
                    {Object.keys(row).slice(2).map((key, cidx) => (
                      <td key={cidx} className="px-6 py-4 text-neutral-600">
                        {row[key]}
                      </td>
                    ))}
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
          <div className="bg-brand-500 text-white p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">Highest Performance</div>
            <p className="text-brand-100">Best metrics across all key parameters</p>
          </div>
          <div className="bg-neutral-900 text-white p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">Lowest Dosage</div>
            <p className="text-neutral-400">Maximum results with minimal usage</p>
          </div>
          <div className="bg-green-500 text-white p-6 rounded-lg">
            <div className="text-3xl font-bold mb-2">Best Value</div>
            <p className="text-green-100">Superior cost-to-performance ratio</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompetitiveMatrixV1;
