import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowLeftRight, ThumbsUp, ThumbsDown } from 'lucide-react';
import { products } from '../../data/monoatomData';

const ProductComparisonTool = () => {
  const [selectedProducts, setSelectedProducts] = useState(['graphacrete', 'graffisol']);
  const [viewMode, setViewMode] = useState('specifications'); // 'specifications' or 'proscons'

  const toggleProduct = (productId) => {
    if (selectedProducts.includes(productId)) {
      if (selectedProducts.length > 1) {
        setSelectedProducts(selectedProducts.filter(id => id !== productId));
      }
    } else {
      if (selectedProducts.length < 3) {
        setSelectedProducts([...selectedProducts, productId]);
      }
    }
  };

  const productDetails = {
    graphacrete: {
      specifications: {
        'Target Industry': 'Construction',
        'Application Method': 'Mix with cement',
        'Dosage': '0.02-0.05% by weight',
        'Strength Gain': '+50% (M30→M50)',
        'Cement Savings': '15-20%',
        'Water Resistance': '+30-45%',
        'Curing Time': 'Standard',
        'Certification': 'NABL Certified',
      },
      pros: [
        'Significant strength improvement (M30 to M50)',
        'Reduces cement consumption by 15-20%',
        'NABL certified for quality assurance',
        'Easy integration into existing processes',
        'Cost savings of ₹430/m³',
        'Improved water resistance',
      ],
      cons: [
        'Requires precise mixing protocols',
        'Initial learning curve for workers',
        'Slightly higher upfront material cost',
      ],
      bestFor: 'Large construction projects requiring high-strength concrete with cost optimization',
    },
    graffisol: {
      specifications: {
        'Target Industry': 'Solar Energy',
        'Application Method': 'Spray coating on panels',
        'Dosage': 'Surface coating',
        'Energy Output Gain': '+10-12%',
        'Temperature Reduction': '5-6°C',
        'Soiling Resistance': '30-40% reduction',
        'Coating Lifespan': '5+ years',
        'ROI Period': '18 months',
      },
      pros: [
        '10-12% energy output increase (lab validated)',
        '7-8% real-world performance gain',
        'Reduces panel temperature by 5-6°C',
        'Self-cleaning hydrophobic properties',
        'Quick 18-month ROI payback',
        'Field-tested at 1+ MW installations',
      ],
      cons: [
        'Requires reapplication every 5 years',
        'Performance varies with soiling conditions',
        'Initial coating application cost',
      ],
      bestFor: 'Solar installations looking to maximize energy output and reduce maintenance',
    },
    ceraphene: {
      specifications: {
        'Target Industry': 'Advanced Materials',
        'Application Method': 'Direct replacement',
        'Dosage': 'As needed',
        'Cost per kg': '₹5,000',
        'Quality': 'Premium friction reduction',
        'Market Position': 'Mass market accessible',
        'Performance': 'Equivalent to ₹15K graphene',
        'Scalability': 'High',
      },
      pros: [
        '60-70% cost reduction (₹5K vs ₹15K)',
        'Same performance as premium graphene',
        'Democratizes advanced materials',
        'Scalable production methods',
        'Enables mass market applications',
        'No compromise on quality',
      ],
      cons: [
        'Newer market entrant',
        'Building brand recognition',
        'Limited to specific graphene applications',
      ],
      bestFor: 'Companies needing premium graphene performance at accessible price points',
    },
    hdgpe: {
      specifications: {
        'Target Industry': 'Polymer Manufacturing',
        'Application Method': 'Additive during production',
        'Dosage': 'Small percentage',
        'Elongation Gain': '20× improvement',
        'Lifespan Extension': '+20%',
        'Flexibility': 'Enhanced',
        'Durability': 'Superior',
        'Applications': 'Films, packaging, pipes',
      },
      pros: [
        '20× better elongation at break',
        '+20% product lifespan extension',
        'Enhanced flexibility and durability',
        'Minimal dosage required',
        'Wide range of applications',
        'Easy integration into manufacturing',
      ],
      cons: [
        'Requires process optimization',
        'Higher initial R&D for new applications',
        'Limited field data (pilot stage)',
      ],
      bestFor: 'Polymer manufacturers seeking enhanced material properties and extended product life',
    },
  };

  const selectedProductData = selectedProducts.map(id => ({
    id,
    name: products[id].name,
    details: productDetails[id],
  }));

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-purple-400/50 bg-purple-400/10 backdrop-blur mb-6">
            <ArrowLeftRight className="w-4 h-4 text-purple-300 animate-pulse" />
            <span className="text-xs font-bold text-purple-300 tracking-wide uppercase">
              Product Comparison
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Compare Products
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Side-by-side comparison to find the perfect fit for your needs
          </p>
        </motion.div>

        {/* Product Selector */}
        <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 mb-8">
          <div className="text-sm text-purple-200 mb-4">
            Select up to 3 products to compare (currently: {selectedProducts.length}/3)
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(products).map(([id, product]) => (
              <button
                key={id}
                onClick={() => toggleProduct(id)}
                className={`p-4 rounded-lg font-semibold transition-all ${
                  selectedProducts.includes(id)
                    ? 'bg-gradient-to-r from-brand-500 to-purple-500 text-white shadow-xl'
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{product.name}</span>
                  {selectedProducts.includes(id) && <CheckCircle2 className="w-5 h-5" />}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* View Toggle */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setViewMode('specifications')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all ${
              viewMode === 'specifications'
                ? 'bg-purple-500 text-white shadow-xl'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Specifications
          </button>
          <button
            onClick={() => setViewMode('proscons')}
            className={`px-8 py-4 rounded-xl font-semibold transition-all ${
              viewMode === 'proscons'
                ? 'bg-purple-500 text-white shadow-xl'
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            Pros & Cons
          </button>
        </div>

        {/* Comparison View */}
        {viewMode === 'specifications' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/10 backdrop-blur border border-white/20 rounded-xl overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="px-6 py-4 text-left text-purple-200 font-semibold">Specification</th>
                    {selectedProductData.map(product => (
                      <th key={product.id} className="px-6 py-4 text-center text-white font-semibold">
                        {product.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(selectedProductData[0].details.specifications).map((spec, idx) => (
                    <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-purple-200 font-medium">{spec}</td>
                      {selectedProductData.map(product => (
                        <td key={product.id} className="px-6 py-4 text-center text-white">
                          {product.details.specifications[spec] || '--'}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedProductData.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
                  {product.name}
                </h3>

                {/* Pros */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ThumbsUp className="w-5 h-5 text-green-400" />
                    <h4 className="text-lg font-semibold text-green-400">Pros</h4>
                  </div>
                  <ul className="space-y-2">
                    {product.details.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-green-200">
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-3">
                    <ThumbsDown className="w-5 h-5 text-red-400" />
                    <h4 className="text-lg font-semibold text-red-400">Cons</h4>
                  </div>
                  <ul className="space-y-2">
                    {product.details.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-red-200">
                        <XCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Best For */}
                <div className="pt-6 border-t border-white/20">
                  <div className="text-sm font-semibold text-purple-300 mb-2">Best For:</div>
                  <div className="text-sm text-white leading-relaxed">{product.details.bestFor}</div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Decision Helper */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border-2 border-purple-400/30 rounded-xl p-8 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Need Help Deciding?
          </h3>
          <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
            Our team can help you choose the right product based on your specific requirements, budget, and timeline.
          </p>
          <button className="px-8 py-4 bg-purple-500 text-white rounded-xl font-semibold hover:bg-purple-600 transition-all shadow-lg">
            Schedule Consultation
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductComparisonTool;
