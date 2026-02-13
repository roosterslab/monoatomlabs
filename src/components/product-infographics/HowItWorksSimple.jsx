import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Droplet, Zap, CheckCircle2, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';

const HowItWorksSimple = () => {
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');

  const productSteps = {
    graphacrete: {
      name: 'Graphacrete',
      tagline: 'Transform ordinary concrete into high-performance material',
      steps: [
        {
          number: 1,
          title: 'Add to Concrete Mix',
          description: 'Add 0.05-0.10% Graphacrete by weight of cement during concrete batching',
          icon: Droplet,
          color: 'from-blue-500/80 to-cyan-500/80',
        },
        {
          number: 2,
          title: 'Mix Thoroughly',
          description: 'Blend for 2-3 minutes ensuring uniform dispersion throughout the concrete',
          icon: Zap,
          color: 'from-purple-500/80 to-pink-500/80',
        },
        {
          number: 3,
          title: 'Pour & Cure',
          description: 'Pour concrete as usual and follow standard curing procedures',
          icon: CheckCircle2,
          color: 'from-orange-500/80 to-red-500/80',
        },
        {
          number: 4,
          title: 'Achieve Superior Performance',
          description: 'Get 40-50% higher strength, 15-20% cement savings, and better durability',
          icon: TrendingUp,
          color: 'from-green-500/80 to-teal-500/80',
        },
      ],
      before: {
        strength: 'M30',
        cement: '100%',
        permeability: 'High',
        cost: '₹5,430/m³',
      },
      after: {
        strength: 'M50',
        cement: '80-85%',
        permeability: 'Low (30-45% ↓)',
        cost: '₹5,000/m³',
      },
    },
    graffisol: {
      name: 'Graffisol',
      tagline: 'Supercharge solar panels with graphene coating',
      steps: [
        {
          number: 1,
          title: 'Clean Panel Surface',
          description: 'Thoroughly clean solar panel glass to remove dust and contaminants',
          icon: Droplet,
          color: 'from-blue-500/80 to-cyan-500/80',
        },
        {
          number: 2,
          title: 'Apply Graffisol Coating',
          description: 'Spray or roll Graffisol coating evenly across the panel surface',
          icon: Zap,
          color: 'from-purple-500/80 to-pink-500/80',
        },
        {
          number: 3,
          title: 'Let It Cure',
          description: 'Allow 2-4 hours for coating to cure and bond to the glass surface',
          icon: CheckCircle2,
          color: 'from-orange-500/80 to-red-500/80',
        },
        {
          number: 4,
          title: 'Generate More Energy',
          description: 'Enjoy 10-12% higher energy output with reduced soiling and cooling',
          icon: TrendingUp,
          color: 'from-green-500/80 to-teal-500/80',
        },
      ],
      before: {
        energy: '100%',
        temperature: 'High',
        soiling: '15-20% loss',
        roi: '6-7 years',
      },
      after: {
        energy: '110-112%',
        temperature: '5-6°C cooler',
        soiling: '8-12% loss',
        roi: '~5 years',
      },
    },
    ceraphene: {
      name: 'Ceraphene',
      tagline: 'Premium ceramic coating at affordable prices',
      steps: [
        {
          number: 1,
          title: 'Prepare Surface',
          description: 'Clean and decontaminate the surface (car, bike, or any substrate)',
          icon: Droplet,
          color: 'from-blue-500/80 to-cyan-500/80',
        },
        {
          number: 2,
          title: 'Apply Ceraphene',
          description: 'Apply thin, even layer using applicator pad in cross-hatch pattern',
          icon: Zap,
          color: 'from-purple-500/80 to-pink-500/80',
        },
        {
          number: 3,
          title: 'Buff & Cure',
          description: 'Wait 1-2 minutes, then buff off excess and let cure for 24 hours',
          icon: CheckCircle2,
          color: 'from-orange-500/80 to-red-500/80',
        },
        {
          number: 4,
          title: 'Enjoy 9H+ Protection',
          description: 'Get 3-4+ years of ultra-durable, hydrophobic, scratch-resistant protection',
          icon: TrendingUp,
          color: 'from-green-500/80 to-teal-500/80',
        },
      ],
      before: {
        cost: '₹15,000/50ml',
        hardness: '9H',
        accessibility: 'Limited',
        market: 'Premium only',
      },
      after: {
        cost: '₹5,000/50ml',
        hardness: '9H+',
        accessibility: 'Mass market',
        market: 'Democratized',
      },
    },
    hdgpe: {
      name: 'HD-G-PE',
      tagline: 'Reinforce polymers with graphene power',
      steps: [
        {
          number: 1,
          title: 'Add to Polymer Base',
          description: 'Mix HD-G-PE masterbatch with HDPE during compounding process',
          icon: Droplet,
          color: 'from-blue-500/80 to-cyan-500/80',
        },
        {
          number: 2,
          title: 'Blend Uniformly',
          description: 'Ensure thorough dispersion through extrusion or injection molding',
          icon: Zap,
          color: 'from-purple-500/80 to-pink-500/80',
        },
        {
          number: 3,
          title: 'Process as Usual',
          description: 'Use standard processing parameters for your application',
          icon: CheckCircle2,
          color: 'from-orange-500/80 to-red-500/80',
        },
        {
          number: 4,
          title: 'Get Enhanced Performance',
          description: '20× elongation, 30% tensile strength, 20% longer lifespan',
          icon: TrendingUp,
          color: 'from-green-500/80 to-teal-500/80',
        },
      ],
      before: {
        elongation: 'Standard',
        lifespan: 'Baseline',
        flexibility: 'Moderate',
        durability: 'Good',
      },
      after: {
        elongation: '20× better',
        lifespan: '+20%',
        flexibility: 'Enhanced',
        durability: 'Superior',
      },
    },
  };

  const product = productSteps[selectedProduct];

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6">
            <Sparkles className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
              Simple 4-Step Process
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            How It Works
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
            Revolutionary technology made simple. See how easy it is to upgrade your materials.
          </p>

          {/* Product Selector */}
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(productSteps).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedProduct(key)}
                className={`px-6 py-3 rounded-sm font-mono font-semibold transition-all border ${
                  selectedProduct === key
                    ? 'bg-brand-500 text-white border-brand-400'
                    : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700'
                }`}
              >
                {productSteps[key].name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Tagline */}
        <motion.div
          key={selectedProduct}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="text-2xl font-display text-brand-400">{product.tagline}</p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {product.steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className={`bg-gradient-to-br ${step.color} rounded-sm p-6 h-full border border-white/10 backdrop-blur shadow-lg hover:shadow-2xl transition-all`}>
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -left-3 w-12 h-12 bg-black border-2 border-white/20 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xl font-mono font-bold text-white">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <div className="inline-flex p-4 bg-black/30 backdrop-blur rounded-sm border border-white/20">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow Connector (Desktop Only) */}
                {idx < product.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                    <ArrowRight className="w-6 h-6 text-brand-400" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Before/After Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
        >
          {/* Before Card */}
          <div className="bg-gradient-to-br from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-sm p-8 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-500/20 border border-red-500/30 rounded-sm flex items-center justify-center">
                <span className="text-2xl">⚠️</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white">Before</h3>
            </div>
            <div className="space-y-3">
              {Object.entries(product.before).map(([key, value], idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex justify-between items-center p-3 bg-black/40 backdrop-blur rounded-sm border border-white/10"
                >
                  <span className="text-white/70 font-mono text-sm uppercase">{key}</span>
                  <span className="text-white font-mono font-bold">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* After Card */}
          <div className="bg-gradient-to-br from-green-600/20 to-teal-600/20 border border-green-500/30 rounded-sm p-8 backdrop-blur">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-sm flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white">After {product.name}</h3>
            </div>
            <div className="space-y-3">
              {Object.entries(product.after).map(([key, value], idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + idx * 0.1 }}
                  className="flex justify-between items-center p-3 bg-black/40 backdrop-blur rounded-sm border border-white/10"
                >
                  <span className="text-white/70 font-mono text-sm uppercase">{key}</span>
                  <span className="text-white font-mono font-bold">{value}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 p-8 bg-gradient-to-r from-brand-500/20 to-green-500/20 border border-brand-500/30 rounded-sm backdrop-blur">
            <div className="text-left">
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Ready to upgrade your {product.name.toLowerCase()}?
              </h3>
              <p className="text-neutral-300">Get started with our simple 4-step process today</p>
            </div>
            <button className="px-8 py-4 bg-brand-500 hover:bg-brand-600 text-white font-mono font-bold rounded-sm transition-all border border-brand-400 whitespace-nowrap">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSimple;
