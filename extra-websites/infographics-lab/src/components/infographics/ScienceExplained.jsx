import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Atom, Zap, Shield, TrendingUp, Layers, ArrowRight } from 'lucide-react';

const ScienceExplained = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: 'Graphene: The Wonder Material',
      icon: Atom,
      color: 'from-purple-500 to-pink-500',
      description: 'Single layer of carbon atoms arranged in hexagonal lattice',
      details: [
        '1 atom thick (0.34 nanometers)',
        '200× stronger than steel',
        'Excellent electrical conductor',
        'Highest thermal conductivity',
        'Flexible and transparent',
      ],
      visualization: '⬡⬡⬡\n⬡⬡⬡\n⬡⬡⬡',
    },
    {
      title: 'Nano-Scale Integration',
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
      description: 'Graphene dispersed at molecular level into base materials',
      details: [
        'Graphene platelets: 1-10 micrometers',
        'Uniform dispersion critical',
        'Surface area: 400-600 m²/g',
        'Interlocking with matrix material',
        'No aggregation or clumping',
      ],
      visualization: '🔬 Molecular Level',
    },
    {
      title: 'Enhanced Material Properties',
      icon: Shield,
      color: 'from-green-500 to-teal-500',
      description: 'How graphene transforms base material performance',
      details: [
        'Concrete: Fills nano-pores → denser structure',
        'Polymers: Molecular reinforcement → elongation',
        'Coatings: Barrier layer → self-cleaning',
        'Composites: Load transfer → strength',
        'Minimal dosage: 0.03-2% by weight',
      ],
      visualization: '⚡ Performance Boost',
    },
    {
      title: 'Real-World Benefits',
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      description: 'Measurable improvements validated through testing',
      details: [
        'Graphacrete: +50% compressive strength',
        'Graffisol: 10-12% energy output gain',
        'Ceraphene: Same performance, 1/3rd cost',
        'HD-G-PE: 20× elongation improvement',
        'All NABL/ISO certified',
      ],
      visualization: '📊 Proven Results',
    },
  ];

  const mechanisms = {
    graphacrete: {
      name: 'Graphacrete in Concrete',
      steps: [
        { label: 'Graphene added to cement', effect: 'Nano-scale dispersion' },
        { label: 'Mixing with water', effect: 'Uniform distribution' },
        { label: 'Hydration process', effect: 'Fills nano-pores' },
        { label: 'Crystal formation', effect: 'Denser C-S-H gel' },
        { label: 'Final structure', effect: '+50% strength, better durability' },
      ],
    },
    graffisol: {
      name: 'Graffisol on Solar Panels',
      steps: [
        { label: 'Clean panel surface', effect: 'Remove contaminants' },
        { label: 'Apply Graffisol', effect: 'Graphene coating spreads' },
        { label: '24-hour curing', effect: 'Molecular bonding' },
        { label: 'Hydrophobic layer forms', effect: 'Water contact angle >110°' },
        { label: 'Self-cleaning active', effect: '+10-12% energy, -6°C temp' },
      ],
    },
    hdgpe: {
      name: 'HD-G-PE in Polymers',
      steps: [
        { label: 'Graphene pellets with HDPE', effect: 'Dry mixing' },
        { label: 'Melt processing', effect: 'Molecular dispersion' },
        { label: 'Graphene alignment', effect: 'Load-bearing network' },
        { label: 'Chain reinforcement', effect: 'Prevent chain slippage' },
        { label: 'Final product', effect: '20× elongation, +30% tensile' },
      ],
    },
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-purple-400/50 bg-purple-400/10 backdrop-blur mb-6">
            <Atom className="w-4 h-4 text-purple-300 animate-pulse" />
            <span className="text-xs font-bold text-purple-300 tracking-wide uppercase">
              Science Explained
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            How Graphene Enhancement Works
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Understanding the molecular science behind our products
          </p>
        </motion.div>

        {/* Interactive Steps */}
        <div className="mb-12">
          <div className="flex justify-center gap-2 mb-8">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  activeStep === idx
                    ? 'bg-purple-500 text-white'
                    : 'bg-white/10 text-white/60 hover:bg-white/20'
                }`}
              >
                Step {idx + 1}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className={`bg-gradient-to-br ${steps[activeStep].color} rounded-2xl p-8`}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/20 rounded-xl">
                  {React.createElement(steps[activeStep].icon, {
                    className: 'w-12 h-12 text-white',
                  })}
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-display font-bold text-white mb-3">
                    {steps[activeStep].title}
                  </h2>
                  <p className="text-lg text-white/90 mb-6">{steps[activeStep].description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {steps[activeStep].details.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 p-3 bg-white/10 rounded-lg">
                        <Zap className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                        <span className="text-white">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-between mt-6">
            <button
              onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
              disabled={activeStep === 0}
              className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Previous
            </button>
            <button
              onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
              disabled={activeStep === steps.length - 1}
              className="px-6 py-3 bg-purple-500 text-white rounded-lg font-semibold hover:bg-purple-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Product Mechanisms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Object.entries(mechanisms).map(([key, mechanism]) => (
            <div key={key} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                {mechanism.name}
              </h3>
              <div className="space-y-4">
                {mechanism.steps.map((step, idx) => (
                  <div key={idx} className="relative">
                    {idx < mechanism.steps.length - 1 && (
                      <div className="absolute left-4 top-10 w-0.5 h-full bg-gradient-to-b from-purple-500 to-transparent"></div>
                    )}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm font-semibold text-white">{step.label}</div>
                        <div className="text-xs text-purple-300 mt-1">{step.effect}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Takeaways */}
        <div className="mt-12 bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-2 border-teal-500/30 rounded-xl p-8">
          <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
            Key Takeaways
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-300 mb-2">1 atom</div>
              <div className="text-sm text-white">Graphene thickness</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-300 mb-2">200×</div>
              <div className="text-sm text-white">Stronger than steel</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-300 mb-2">&lt;2%</div>
              <div className="text-sm text-white">Dosage needed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-teal-300 mb-2">+50%</div>
              <div className="text-sm text-white">Performance boost</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceExplained;
