import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Sparkles, Flame, TrendingUp, ArrowDown, CheckCircle } from 'lucide-react';
import { products } from '../../data/monoatomData';

const HowItWorksSimple = () => {
  const [hoveredStep, setHoveredStep] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');

  const productSteps = {
    graphacrete: {
      steps: [
        {
          number: 1,
          title: 'Add to Concrete Mix',
          description: 'Just 0.02-0.05% graphene added to cement',
          icon: Droplet,
          color: 'from-blue-500 to-cyan-500',
        },
        {
          number: 2,
          title: 'Disperses Evenly',
          description: 'Nano-platelets spread throughout the matrix',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
        },
        {
          number: 3,
          title: 'Strengthens Structure',
          description: 'Creates reinforced nano-network bonds',
          icon: Flame,
          color: 'from-orange-500 to-red-500',
        },
        {
          number: 4,
          title: 'Superior Performance',
          description: '15-20% less cement, M30 → M50 strength',
          icon: TrendingUp,
          color: 'from-green-500 to-teal-500',
        },
      ],
      before: { strength: 'M30', cement: '100%', permeability: 'High' },
      after: { strength: 'M50', cement: '80-85%', permeability: 'Low (30-45% ↓)' },
    },
    graffisol: {
      steps: [
        {
          number: 1,
          title: 'Apply Coating',
          description: 'Graphene-based coating on solar panels',
          icon: Droplet,
          color: 'from-blue-500 to-cyan-500',
        },
        {
          number: 2,
          title: 'Enhances Thermal Management',
          description: 'Dissipates heat, reduces panel temperature 5-6°C',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
        },
        {
          number: 3,
          title: 'Improves Light Absorption',
          description: 'Better photon capture and electron flow',
          icon: Flame,
          color: 'from-orange-500 to-red-500',
        },
        {
          number: 4,
          title: 'More Energy Output',
          description: '10-12% energy gain, 18-month ROI',
          icon: TrendingUp,
          color: 'from-green-500 to-teal-500',
        },
      ],
      before: { output: '100%', temp: 'High heat loss', soiling: '15-20% loss' },
      after: { output: '110-112%', temp: '5-6°C cooler', soiling: '8-12% loss' },
    },
    ceraphene: {
      steps: [
        {
          number: 1,
          title: 'Cost-Effective Production',
          description: 'Scalable synthesis at ₹5,000/kg vs ₹15,000',
          icon: Droplet,
          color: 'from-blue-500 to-cyan-500',
        },
        {
          number: 2,
          title: 'High-Quality Graphene',
          description: 'Premium friction reduction properties',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
        },
        {
          number: 3,
          title: 'Mass Market Access',
          description: 'Democratizes advanced materials',
          icon: Flame,
          color: 'from-orange-500 to-red-500',
        },
        {
          number: 4,
          title: 'Industry Transformation',
          description: '60-70% cost savings, same performance',
          icon: TrendingUp,
          color: 'from-green-500 to-teal-500',
        },
      ],
      before: { cost: '₹15,000/kg', access: 'Premium only', market: 'Limited' },
      after: { cost: '₹5,000/kg', access: 'Mass market', market: 'Democratized' },
    },
    hdgpe: {
      steps: [
        {
          number: 1,
          title: 'Add Graphene to HDPE',
          description: 'Nano-composite formulation during production',
          icon: Droplet,
          color: 'from-blue-500 to-cyan-500',
        },
        {
          number: 2,
          title: 'Enhanced Molecular Structure',
          description: 'Graphene reinforces polymer chains',
          icon: Sparkles,
          color: 'from-purple-500 to-pink-500',
        },
        {
          number: 3,
          title: 'Improved Flexibility',
          description: '20× better elongation at break',
          icon: Flame,
          color: 'from-orange-500 to-red-500',
        },
        {
          number: 4,
          title: 'Extended Lifespan',
          description: '+20% product durability',
          icon: TrendingUp,
          color: 'from-green-500 to-teal-500',
        },
      ],
      before: { elongation: 'Standard', lifespan: 'Baseline', flexibility: 'Moderate' },
      after: { elongation: '20× better', lifespan: '+20%', flexibility: 'Enhanced' },
    },
  };

  const product = products[selectedProduct];
  const config = productSteps[selectedProduct];

  return (
    <div className="w-full min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border-2 border-brand-500 bg-brand-50 mb-6">
            <Sparkles className="w-4 h-4 text-brand-600" />
            <span className="text-xs font-bold text-brand-600 tracking-wide uppercase">
              How It Works
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-neutral-900 mb-6">
            Simple Explanation
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto mb-8">
            No technical jargon - just 4 easy steps to understand the transformation
          </p>

          {/* Product Selector */}
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(productSteps).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedProduct(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedProduct === key
                    ? 'bg-brand-500 text-white shadow-lg'
                    : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                {products[key].name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8 mb-16">
          {config.steps.map((step, index) => {
            const Icon = step.icon;
            const isHovered = hoveredStep === index;

            return (
              <div key={index}>
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15 }}
                  onHoverStart={() => setHoveredStep(index)}
                  onHoverEnd={() => setHoveredStep(null)}
                  className="relative"
                >
                  <div className={`bg-gradient-to-r ${step.color} p-8 rounded-2xl shadow-xl transition-all ${isHovered ? 'scale-105 shadow-2xl' : ''}`}>
                    <div className="flex items-start gap-6">
                      {/* Number Badge */}
                      <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-3xl font-bold text-transparent bg-gradient-to-r from-neutral-800 to-neutral-600 bg-clip-text">
                          {step.number}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-grow">
                        <div className="flex items-center gap-3 mb-2">
                          <Icon className="w-8 h-8 text-white" />
                          <h3 className="text-3xl font-display font-bold text-white">
                            {step.title}
                          </h3>
                        </div>
                        <p className="text-lg text-white/90 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Connector Arrow */}
                {index < config.steps.length - 1 && (
                  <div className="flex justify-center my-4">
                    <ArrowDown className="w-8 h-8 text-neutral-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Before */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-8">
            <div className="text-red-600 font-mono text-sm uppercase tracking-wide mb-4">
              Without {product.name}
            </div>
            <div className="space-y-4">
              {Object.entries(config.before).map(([key, value], idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-neutral-700 capitalize">{key}:</span>
                  <span className="font-semibold text-neutral-900">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-8">
            <div className="text-green-600 font-mono text-sm uppercase tracking-wide mb-4 flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              With {product.name}
            </div>
            <div className="space-y-4">
              {Object.entries(config.after).map(([key, value], idx) => (
                <div key={idx} className="flex justify-between items-center">
                  <span className="text-neutral-700 capitalize">{key}:</span>
                  <span className="font-semibold text-green-700">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-brand-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:bg-brand-600 transition-colors cursor-pointer">
            Learn More About {product.name}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksSimple;
