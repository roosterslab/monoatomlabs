import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Film, GitBranch, Factory, CheckCircle2, TrendingUp } from 'lucide-react';

const HDGPEApplicationScenarios = () => {
  const [selectedScenario, setSelectedScenario] = useState('packaging');

  const scenarios = {
    packaging: {
      icon: Package,
      name: 'Packaging Industry',
      color: 'from-green-500 to-teal-500',
      description: 'Food packaging, industrial wraps, and flexible packaging requiring enhanced durability',
      applications: 'Food films, Industrial wraps',
      volumeRange: '10-100 tonnes/month',
      benefits: [
        '20× elongation improvement (5% → 100%)',
        'Superior puncture resistance',
        'Extended shelf life (20% longer)',
        'Reduced packaging material thickness',
        'Better barrier properties',
        'Cost-effective premium packaging',
      ],
      caseStudy: {
        project: 'Food Packaging Company',
        location: 'Gujarat',
        volume: '50 tonnes/month',
        application: 'Flexible food films',
        savings: '₹60 Lakhs/year',
        performanceGain: '20× elongation',
      },
      specifications: {
        elongation: '100% (vs 5% standard)',
        tensileStrength: '+30%',
        dosage: '0.5-1% by weight',
        processTemp: '180-200°C',
      },
    },
    films: {
      icon: Film,
      name: 'Film Production',
      color: 'from-blue-500 to-cyan-500',
      description: 'Agricultural films, greenhouse covers, mulch films requiring UV resistance',
      applications: 'Greenhouse films, Mulch',
      volumeRange: '20-150 tonnes/month',
      benefits: [
        'UV degradation resistance',
        'Extended outdoor lifespan (+2 years)',
        'Superior mechanical strength',
        'Temperature stability (-20°C to +80°C)',
        'Reduced thickness, same performance',
        'Agricultural productivity boost',
      ],
      caseStudy: {
        project: 'Agricultural Film Manufacturer',
        location: 'Maharashtra',
        volume: '100 tonnes/month',
        application: 'Greenhouse covers',
        savings: '₹1.2 Crores/year',
        performanceGain: '+2 years lifespan',
      },
      specifications: {
        elongation: '100% (vs 5% standard)',
        UVResistance: 'Enhanced 3×',
        dosage: '0.5-1% by weight',
        filmThickness: '50-200 μm',
      },
    },
    pipes: {
      icon: GitBranch,
      name: 'Pipe Manufacturing',
      color: 'from-purple-500 to-pink-500',
      description: 'Water pipes, gas pipelines, industrial conduits requiring high pressure resistance',
      applications: 'Water pipes, Gas pipelines',
      volumeRange: '50-500 tonnes/month',
      benefits: [
        'Enhanced burst pressure resistance',
        'Improved impact strength (+40%)',
        'Chemical resistance enhancement',
        'Longer service life (50+ years)',
        'Reduced wall thickness possible',
        'Lightweight high-performance pipes',
      ],
      caseStudy: {
        project: 'Pipe Manufacturing Plant',
        location: 'Tamil Nadu',
        volume: '200 tonnes/month',
        application: 'HDPE water pipes',
        savings: '₹2 Crores/year',
        performanceGain: '+40% impact strength',
      },
      specifications: {
        elongation: '100% (vs 5% standard)',
        impactStrength: '+40%',
        dosage: '1-2% by weight',
        pressureRating: 'PN 16-25',
      },
    },
    industrial: {
      icon: Factory,
      name: 'Industrial Applications',
      color: 'from-orange-500 to-red-500',
      description: 'Containers, tanks, industrial components requiring chemical & abrasion resistance',
      applications: 'Tanks, Containers, Parts',
      volumeRange: '30-300 tonnes/month',
      benefits: [
        'Chemical & solvent resistance',
        'Abrasion resistance enhancement',
        'High load-bearing capacity',
        'Temperature cycling stability',
        'Impact resistance in harsh environments',
        'Maintenance-free long service',
      ],
      caseStudy: {
        project: 'Industrial Container Manufacturer',
        location: 'Karnataka',
        volume: '150 tonnes/month',
        application: 'Chemical storage tanks',
        savings: '₹1.8 Crores/year',
        performanceGain: '3× abrasion resistance',
      },
      specifications: {
        elongation: '100% (vs 5% standard)',
        abrasionResistance: '3× standard',
        dosage: '1-2% by weight',
        chemicalResistance: 'Excellent',
      },
    },
  };

  const scenario = scenarios[selectedScenario];
  const Icon = scenario.icon;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-teal-900 via-green-900 to-teal-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-teal-400/50 bg-teal-400/10 backdrop-blur mb-6">
            <Package className="w-4 h-4 text-teal-300 animate-pulse" />
            <span className="text-xs font-bold text-teal-300 tracking-wide uppercase">
              HD-G-PE Applications
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Polymer Industry Use Cases
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Explore HD-G-PE applications across different polymer manufacturing sectors
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
                      <span className="text-white/70">Applications:</span>
                      <span className="ml-2 font-bold text-white">{scenario.applications}</span>
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
                    <div className="p-4 bg-teal-500/10 rounded-lg">
                      <div className="text-xs text-teal-300 mb-1">Application</div>
                      <div className="text-lg font-bold text-teal-400">{scenario.caseStudy.application}</div>
                    </div>
                    <div className="p-4 bg-green-500/10 rounded-lg">
                      <div className="text-xs text-green-300 mb-1">Annual Savings</div>
                      <div className="text-2xl font-bold text-green-400">{scenario.caseStudy.savings}</div>
                    </div>
                    <div className="p-4 bg-purple-500/10 rounded-lg">
                      <div className="text-xs text-purple-300 mb-1">Performance Gain</div>
                      <div className="text-lg font-bold text-purple-400">{scenario.caseStudy.performanceGain}</div>
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
                Ready to Use HD-G-PE for {scenario.name}?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Contact our team for trial batches, processing guidelines, and integration support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-teal-900 rounded-lg font-semibold hover:bg-neutral-100 transition-all shadow-lg">
                  Request Trial Batch
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/30 transition-all border border-white/30">
                  Download Processing Guide
                </button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HDGPEApplicationScenarios;
