import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Home, Layers, Factory, CheckCircle2, TrendingUp } from 'lucide-react';

const GraphacreteApplications = () => {
  const [selectedScenario, setSelectedScenario] = useState('commercial');

  const scenarios = {
    commercial: {
      icon: Building2,
      name: 'Commercial Buildings',
      description: 'High-rise buildings, shopping malls, office complexes requiring high-strength concrete',
      targetGrade: 'M50-M60',
      volumeRange: '5,000-50,000 m³',
      benefits: [
        'Achieve M50 strength with M30 base mix',
        'Reduce cement consumption by 15-20%',
        'Faster construction with improved workability',
        'Enhanced water resistance for longevity',
        'Cost savings of ₹430/m³',
        'NABL certified performance',
      ],
      caseStudy: {
        project: 'High-rise Office Complex',
        location: 'Mumbai',
        volume: '12,000 m³',
        savings: '₹51.6 Lakhs',
        strengthAchieved: 'M50',
        cementReduction: '18%',
      },
    },
    residential: {
      icon: Home,
      name: 'Residential Projects',
      description: 'Apartments, villas, gated communities with focus on durability and cost optimization',
      targetGrade: 'M30-M40',
      volumeRange: '1,000-10,000 m³',
      benefits: [
        'Upgrade M20 to M30 performance',
        'Significant cement cost reduction',
        'Improved crack resistance',
        'Better water-proofing properties',
        'Longer building lifespan',
        'Sustainable construction choice',
      ],
      caseStudy: {
        project: 'Residential Township',
        location: 'Pune',
        volume: '8,500 m³',
        savings: '₹36.5 Lakhs',
        strengthAchieved: 'M40',
        cementReduction: '17%',
      },
    },
    infrastructure: {
      icon: Layers,
      name: 'Infrastructure & Roads',
      description: 'Bridges, flyovers, highways requiring exceptional strength and durability',
      targetGrade: 'M50-M70',
      volumeRange: '10,000-100,000 m³',
      benefits: [
        'M60+ performance from lower grade base',
        'Superior compressive strength (+50%)',
        'Enhanced durability for heavy loads',
        'Reduced maintenance requirements',
        'Large-scale cost savings',
        'Government-certified quality',
      ],
      caseStudy: {
        project: 'Highway Bridge',
        location: 'Gujarat',
        volume: '25,000 m³',
        savings: '₹1.07 Crores',
        strengthAchieved: 'M60',
        cementReduction: '16%',
      },
    },
    industrial: {
      icon: Factory,
      name: 'Industrial Structures',
      description: 'Factories, warehouses, industrial flooring with chemical resistance needs',
      targetGrade: 'M40-M50',
      volumeRange: '3,000-30,000 m³',
      benefits: [
        'Chemical resistance enhancement',
        'Superior abrasion resistance',
        'Reduced permeability (30-45%)',
        'Heavy load-bearing capacity',
        'Lower life-cycle costs',
        'Industrial-grade durability',
      ],
      caseStudy: {
        project: 'Manufacturing Facility',
        location: 'Chennai',
        volume: '15,000 m³',
        savings: '₹64.5 Lakhs',
        strengthAchieved: 'M50',
        cementReduction: '19%',
      },
    },
  };

  const scenario = scenarios[selectedScenario];
  const Icon = scenario.icon;

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-black to-teal-900/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6">
            <Building2 className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
              Construction Use Cases
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Graphacrete Applications
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Explore real-world construction applications across different sectors
          </p>
        </motion.div>

        {/* Scenario Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(scenarios).map(([key, value]) => {
            const ScenarioIcon = value.icon;
            return (
              <motion.button
                key={key}
                onClick={() => setSelectedScenario(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-sm transition-all border ${
                  selectedScenario === key
                    ? 'bg-brand-500 border-brand-400 shadow-[0_0_20px_rgba(13,148,136,0.4)]'
                    : 'bg-neutral-900/80 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700'
                }`}
              >
                <ScenarioIcon className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-white font-mono text-sm text-center">{value.name}</div>
              </motion.button>
            );
          })}
        </div>

        {/* Scenario Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedScenario}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header Card */}
            <div className="bg-gradient-to-r from-brand-500/20 to-green-500/20 border border-brand-500/30 rounded-sm p-8 mb-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-sm border border-white/20">
                  <Icon className="w-12 h-12 text-brand-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-display font-bold text-white mb-3">
                    {scenario.name}
                  </h3>
                  <p className="text-lg text-neutral-300 mb-4">{scenario.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm font-mono">
                    <div className="px-4 py-2 bg-neutral-900/60 backdrop-blur rounded-sm border border-neutral-700">
                      <span className="text-neutral-400">Target Grade:</span>
                      <span className="ml-2 font-bold text-white">{scenario.targetGrade}</span>
                    </div>
                    <div className="px-4 py-2 bg-neutral-900/60 backdrop-blur rounded-sm border border-neutral-700">
                      <span className="text-neutral-400">Typical Volume:</span>
                      <span className="ml-2 font-bold text-white">{scenario.volumeRange}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-brand-400" />
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {scenario.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="flex items-start gap-3 p-3 bg-neutral-800/50 rounded-sm hover:bg-neutral-800 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-200 text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Case Study */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-brand-400" />
                  Real Project Example
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-brand-500/10 border border-brand-500/30 rounded-sm">
                    <div className="text-xs text-brand-300 mb-1 font-mono uppercase tracking-wide">Project</div>
                    <div className="text-xl font-display font-bold text-white">{scenario.caseStudy.project}</div>
                    <div className="text-sm text-brand-400 mt-1 font-mono">📍 {scenario.caseStudy.location}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-neutral-800/50 rounded-sm">
                      <div className="text-xs text-neutral-400 mb-1 font-mono">Volume</div>
                      <div className="text-2xl font-mono font-bold text-white">{scenario.caseStudy.volume}</div>
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-sm">
                      <div className="text-xs text-green-300 mb-1 font-mono">Total Savings</div>
                      <div className="text-2xl font-mono font-bold text-green-400">{scenario.caseStudy.savings}</div>
                    </div>
                    <div className="p-4 bg-neutral-800/50 rounded-sm">
                      <div className="text-xs text-neutral-400 mb-1 font-mono">Strength Achieved</div>
                      <div className="text-2xl font-mono font-bold text-white">{scenario.caseStudy.strengthAchieved}</div>
                    </div>
                    <div className="p-4 bg-brand-500/10 border border-brand-500/30 rounded-sm">
                      <div className="text-xs text-brand-300 mb-1 font-mono">Cement Reduction</div>
                      <div className="text-2xl font-mono font-bold text-brand-400">{scenario.caseStudy.cementReduction}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GraphacreteApplications;
