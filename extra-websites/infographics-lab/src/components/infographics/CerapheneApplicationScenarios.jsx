import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Battery, Layers, Droplet, CheckCircle2, TrendingUp } from 'lucide-react';

const CerapheneApplicationScenarios = () => {
  const [selectedScenario, setSelectedScenario] = useState('electronics');

  const scenarios = {
    electronics: {
      icon: Cpu,
      name: 'Electronics Manufacturing',
      color: 'from-blue-500 to-cyan-500',
      description: 'Conductive inks, EMI shielding, thermal management solutions for electronics',
      applications: 'PCBs, Sensors, Displays',
      volumeRange: '100-500 kg/month',
      benefits: [
        'Replace premium graphene (₹15K → ₹5K/kg)',
        'High electrical conductivity maintained',
        'Cost-effective EMI shielding',
        'Thermal interface materials (TIM)',
        'Scale electronics production economically',
        'Quality comparable to premium graphene',
      ],
      caseStudy: {
        project: 'PCB Manufacturing Unit',
        location: 'Pune',
        volume: '200 kg/month',
        application: 'Conductive inks',
        savings: '₹20 Lakhs/year',
        performanceGain: 'Same conductivity',
      },
      specifications: {
        purity: '>95%',
        layerCount: '5-10 layers',
        particleSize: '1-5 μm',
        conductivity: '1000 S/m',
      },
    },
    energy: {
      icon: Battery,
      name: 'Energy Storage',
      color: 'from-green-500 to-teal-500',
      description: 'Battery electrodes, supercapacitors, and energy storage applications',
      applications: 'Li-ion batteries, Supercapacitors',
      volumeRange: '500-2000 kg/month',
      benefits: [
        'Affordable graphene for battery R&D',
        'Enhanced electrode performance',
        'Supercapacitor cost reduction',
        'Faster charge/discharge rates',
        'Democratize energy storage innovation',
        'Scale production economically',
      ],
      caseStudy: {
        project: 'Battery Research Lab',
        location: 'Bangalore',
        volume: '800 kg/month',
        application: 'Li-ion electrode additive',
        savings: '₹80 Lakhs/year',
        performanceGain: '+15% capacity',
      },
      specifications: {
        purity: '>95%',
        layerCount: '5-10 layers',
        surfaceArea: '500 m²/g',
        electronicCond: '1000 S/m',
      },
    },
    composites: {
      icon: Layers,
      name: 'Composite Materials',
      color: 'from-purple-500 to-pink-500',
      description: 'Polymer composites, structural materials, lightweight aerospace components',
      applications: 'Epoxy, Resins, Polymers',
      volumeRange: '200-1000 kg/month',
      benefits: [
        'Strengthen polymers affordably',
        'Lightweight high-strength composites',
        'Aerospace & automotive applications',
        'Cost-effective material innovation',
        'Mechanical property enhancement',
        'Thermal stability improvement',
      ],
      caseStudy: {
        project: 'Composite Manufacturer',
        location: 'Chennai',
        volume: '500 kg/month',
        application: 'Epoxy reinforcement',
        savings: '₹50 Lakhs/year',
        performanceGain: '+40% strength',
      },
      specifications: {
        purity: '>95%',
        layerCount: '5-10 layers',
        dispersibility: 'Excellent',
        compatibility: 'All polymers',
      },
    },
    coatings: {
      icon: Droplet,
      name: 'Coatings & Paints',
      color: 'from-orange-500 to-red-500',
      description: 'Anti-corrosion coatings, conductive paints, specialty surface treatments',
      applications: 'Industrial coatings, Paints',
      volumeRange: '300-1500 kg/month',
      benefits: [
        'Anti-corrosion graphene coatings',
        'Conductive paint applications',
        'Cost-effective barrier properties',
        'UV resistance enhancement',
        'Scratch & wear resistance',
        'Long-lasting protection',
      ],
      caseStudy: {
        project: 'Paint Manufacturing',
        location: 'Mumbai',
        volume: '1000 kg/month',
        application: 'Anti-corrosion additive',
        savings: '₹1.2 Crores/year',
        performanceGain: '3× durability',
      },
      specifications: {
        purity: '>95%',
        layerCount: '5-10 layers',
        particleSize: '1-5 μm',
        dispersion: 'Water/solvent',
      },
    },
  };

  const scenario = scenarios[selectedScenario];
  const Icon = scenario.icon;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 backdrop-blur mb-6">
            <Layers className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span className="text-xs font-bold text-cyan-300 tracking-wide uppercase">
              Ceraphene Applications
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Industrial Use Cases
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Explore Ceraphene applications across different industries at 1/3rd the cost
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
                    <div className="p-4 bg-cyan-500/10 rounded-lg">
                      <div className="text-xs text-cyan-300 mb-1">Application</div>
                      <div className="text-lg font-bold text-cyan-400">{scenario.caseStudy.application}</div>
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
                Ready to Use Ceraphene for {scenario.name}?
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Contact our team for sample testing, bulk pricing, and technical integration support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-white text-cyan-900 rounded-lg font-semibold hover:bg-neutral-100 transition-all shadow-lg">
                  Request Sample & Pricing
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

export default CerapheneApplicationScenarios;
