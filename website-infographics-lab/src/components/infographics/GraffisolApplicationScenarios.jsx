import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Factory, Building2, Home, Sun, CheckCircle2, TrendingUp } from 'lucide-react';

const GraffisolApplicationScenarios = () => {
  const [selectedScenario, setSelectedScenario] = useState('utility');

  const scenarios = {
    utility: {
      icon: Factory,
      name: 'Utility-Scale Solar Farms',
      color: 'from-yellow-500 to-orange-500',
      description: 'Large-scale solar installations (>10 MW) requiring maximum efficiency and minimal maintenance',
      capacityRange: '10-100 MW',
      panelCount: '30,000-300,000 panels',
      benefits: [
        '10-12% energy output gain validated in field',
        'Reduce cleaning frequency by 60%',
        'Extended panel lifespan (5+ years)',
        'Payback period: 12-18 months',
        'Operational cost reduction: 40%',
        'Performance degradation: <5% over 10 years',
      ],
      caseStudy: {
        project: '50 MW Solar Farm',
        location: 'Rajasthan',
        capacity: '50 MW',
        annualGain: '7.5 GWh',
        savings: '₹6 Crores/year',
        roi: '15 months',
      },
      specifications: {
        coverage: '100-120 ml per m²',
        applicationMethod: 'Spray coating',
        curingTime: '24 hours',
        durability: '10+ years',
      },
    },
    commercial: {
      icon: Building2,
      name: 'Commercial Rooftop Solar',
      color: 'from-orange-500 to-red-500',
      description: 'Office buildings, malls, warehouses with rooftop solar requiring high performance',
      capacityRange: '100 kW - 5 MW',
      panelCount: '300-15,000 panels',
      benefits: [
        'Maximize limited roof space efficiency',
        '11% average energy boost',
        'Self-cleaning properties reduce maintenance',
        'Lower water consumption for cleaning',
        'UV resistance prevents yellowing',
        'Temperature reduction: 6-8°C',
      ],
      caseStudy: {
        project: 'Shopping Mall Rooftop',
        location: 'Mumbai',
        capacity: '1.5 MW',
        annualGain: '225 MWh',
        savings: '₹18 Lakhs/year',
        roi: '14 months',
      },
      specifications: {
        coverage: '100-120 ml per m²',
        applicationMethod: 'Roller/Spray',
        curingTime: '24 hours',
        durability: '10+ years',
      },
    },
    residential: {
      icon: Home,
      name: 'Residential Solar Systems',
      color: 'from-green-500 to-teal-500',
      description: 'Home solar installations focused on maximizing ROI and minimizing maintenance',
      capacityRange: '3-10 kW',
      panelCount: '10-30 panels',
      benefits: [
        'Boost home solar output by 10-12%',
        'Reduce manual cleaning effort',
        'Protect panels from dust & pollution',
        'Enhanced performance in monsoons',
        'Simple DIY application possible',
        'Affordable per-panel cost',
      ],
      caseStudy: {
        project: 'Residential Villa',
        location: 'Bangalore',
        capacity: '5 kW',
        annualGain: '750 kWh',
        savings: '₹6,000/year',
        roi: '18 months',
      },
      specifications: {
        coverage: '100 ml per m²',
        applicationMethod: 'Brush/Roller',
        curingTime: '24 hours',
        durability: '8-10 years',
      },
    },
    industrial: {
      icon: Sun,
      name: 'Industrial & Off-Grid',
      color: 'from-purple-500 to-pink-500',
      description: 'Manufacturing facilities, remote installations with harsh environmental conditions',
      capacityRange: '500 kW - 20 MW',
      panelCount: '1,500-60,000 panels',
      benefits: [
        'Maximum efficiency in dusty environments',
        'Chemical & abrasion resistance',
        'Minimal water requirement for cleaning',
        'Operational in extreme temperatures',
        'Cost-effective for large installations',
        'Energy independence optimization',
      ],
      caseStudy: {
        project: 'Cement Plant Solar',
        location: 'Gujarat',
        capacity: '10 MW',
        annualGain: '1.5 GWh',
        savings: '₹1.2 Crores/year',
        roi: '16 months',
      },
      specifications: {
        coverage: '120 ml per m²',
        applicationMethod: 'Industrial spray',
        curingTime: '24 hours',
        durability: '10+ years',
      },
    },
  };

  const scenario = scenarios[selectedScenario];
  const Icon = scenario.icon;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-900 via-yellow-900 to-orange-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-yellow-400/50 bg-yellow-400/10 backdrop-blur mb-6">
            <Sun className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span className="text-xs font-bold text-yellow-300 tracking-wide uppercase">
              Graffisol Applications
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Solar Panel Use Cases
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Explore Graffisol applications across different solar installation types
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
                      <span className="text-white/70">Capacity Range:</span>
                      <span className="ml-2 font-bold text-white">{scenario.capacityRange}</span>
                    </div>
                    <div className="px-4 py-2 bg-white/20 backdrop-blur rounded-lg">
                      <span className="text-white/70">Panel Count:</span>
                      <span className="ml-2 font-bold text-white">{scenario.panelCount}</span>
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
                      <div className="text-xs text-neutral-400 mb-1">Capacity</div>
                      <div className="text-2xl font-bold text-white">{scenario.caseStudy.capacity}</div>
                    </div>
                    <div className="p-4 bg-green-500/10 rounded-lg">
                      <div className="text-xs text-green-300 mb-1">Annual Energy Gain</div>
                      <div className="text-2xl font-bold text-green-400">{scenario.caseStudy.annualGain}</div>
                    </div>
                    <div className="p-4 bg-yellow-500/10 rounded-lg">
                      <div className="text-xs text-yellow-300 mb-1">Annual Savings</div>
                      <div className="text-2xl font-bold text-yellow-400">{scenario.caseStudy.savings}</div>
                    </div>
                    <div className="p-4 bg-purple-500/10 rounded-lg">
                      <div className="text-xs text-purple-300 mb-1">ROI Payback</div>
                      <div className="text-2xl font-bold text-purple-400">{scenario.caseStudy.roi}</div>
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
                Ready to Use Graffisol for {scenario.name}?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Contact our team for site assessment, coating application support, and performance monitoring.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-orange-900 rounded-lg font-semibold hover:bg-neutral-100 transition-all shadow-lg">
                  Request Site Assessment
                </button>
                <button className="px-8 py-4 bg-white/20 backdrop-blur text-white rounded-lg font-semibold hover:bg-white/30 transition-all border border-white/30">
                  Download Application Guide
                </button>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GraffisolApplicationScenarios;
