import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Home, Layers, Factory, CheckCircle2, TrendingUp } from 'lucide-react';

const GraphacreteApplicationScenarios = () => {
  const [selectedScenario, setSelectedScenario] = useState('commercial');

  const scenarios = {
    commercial: {
      icon: Building2,
      name: 'Commercial Buildings',
      color: 'from-blue-500 to-cyan-500',
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
      specifications: {
        dosage: '0.03-0.05% by cement weight',
        mixingTime: 'Standard (no change)',
        curingTime: 'Standard 28 days',
        compatibility: 'All cement types',
      },
    },
    residential: {
      icon: Home,
      name: 'Residential Projects',
      color: 'from-green-500 to-teal-500',
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
      specifications: {
        dosage: '0.02-0.04% by cement weight',
        mixingTime: 'Standard',
        curingTime: 'Standard 28 days',
        compatibility: 'OPC, PPC, PSC',
      },
    },
    infrastructure: {
      icon: Layers,
      name: 'Infrastructure & Roads',
      color: 'from-purple-500 to-pink-500',
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
      specifications: {
        dosage: '0.04-0.05% by cement weight',
        mixingTime: 'Extended for uniformity',
        curingTime: 'Standard 28 days',
        compatibility: 'High-grade cements',
      },
    },
    industrial: {
      icon: Factory,
      name: 'Industrial Structures',
      color: 'from-orange-500 to-red-500',
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
      specifications: {
        dosage: '0.03-0.05% by cement weight',
        mixingTime: 'Standard',
        curingTime: 'Extended for best results',
        compatibility: 'SRC, PPC recommended',
      },
    },
  };

  const scenario = scenarios[selectedScenario];
  const Icon = scenario.icon;

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
            <Building2 className="w-4 h-4 text-purple-300 animate-pulse" />
            <span className="text-xs font-bold text-purple-300 tracking-wide uppercase">
              Graphacrete Applications
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Construction Use Cases
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Explore Graphacrete applications across different construction scenarios
          </p>
        </motion.div>

        {/* Scenario Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(scenarios).map(([key, value]) => {
            const ScenarioIcon = value.icon;
            return (
              <button
                key={key}
                onClick={() => setSelectedScenario(key)}
                className={`p-6 rounded-xl transition-all ${
                  selectedScenario === key
                    ? `bg-gradient-to-br ${value.color} shadow-2xl scale-105`
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <ScenarioIcon className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-white font-semibold text-center">{value.name}</div>
              </button>
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
            <div className={`bg-gradient-to-br ${scenario.color} rounded-2xl p-8 mb-8`}>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/20 rounded-xl">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <div className="flex-grow">
                  <h2 className="text-3xl font-display font-bold text-white mb-3">
                    {scenario.name}
                  </h2>
                  <p className="text-lg text-white/90 mb-4">{scenario.description}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg">
                      <span className="text-white/70">Target Grade:</span>
                      <span className="ml-2 font-bold text-white">{scenario.targetGrade}</span>
                    </div>
                    <div className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg">
                      <span className="text-white/70">Typical Volume:</span>
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
                className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {scenario.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="flex items-start gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-white">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Case Study */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-brand-400" />
                  Real Project Example
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-brand-500/10 border border-brand-500/30 rounded-lg">
                    <div className="text-sm text-brand-200 mb-1">Project</div>
                    <div className="text-xl font-bold text-white">{scenario.caseStudy.project}</div>
                    <div className="text-sm text-brand-300 mt-1">📍 {scenario.caseStudy.location}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="text-xs text-neutral-400 mb-1">Volume</div>
                      <div className="text-2xl font-bold text-white">{scenario.caseStudy.volume}</div>
                    </div>
                    <div className="p-4 bg-green-500/10 rounded-lg">
                      <div className="text-xs text-green-300 mb-1">Total Savings</div>
                      <div className="text-2xl font-bold text-green-400">{scenario.caseStudy.savings}</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-lg">
                      <div className="text-xs text-neutral-400 mb-1">Strength Achieved</div>
                      <div className="text-2xl font-bold text-white">{scenario.caseStudy.strengthAchieved}</div>
                    </div>
                    <div className="p-4 bg-purple-500/10 rounded-lg">
                      <div className="text-xs text-purple-300 mb-1">Cement Reduction</div>
                      <div className="text-2xl font-bold text-purple-400">{scenario.caseStudy.cementReduction}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Technical Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-8 bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Technical Specifications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {Object.entries(scenario.specifications).map(([key, value], idx) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className="p-4 bg-white/5 rounded-lg"
                  >
                    <div className="text-xs text-neutral-400 uppercase tracking-wide mb-2">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-white font-semibold">{value}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`mt-8 bg-gradient-to-r ${scenario.color} bg-opacity-20 border-2 border-white/30 rounded-xl p-8 text-center`}
            >
              <h3 className="text-2xl font-display font-bold text-white mb-3">
                Ready to Use Graphacrete for {scenario.name}?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Contact our team for detailed technical support, mix design optimization, and project-specific recommendations.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-purple-900 rounded-lg font-semibold hover:bg-neutral-100 transition-all shadow-lg">
                  Request Technical Support
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/30 transition-all border border-white/30">
                  Download Technical Datasheet
                </button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GraphacreteApplicationScenarios;
