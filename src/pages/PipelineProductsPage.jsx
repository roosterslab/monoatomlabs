import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Clock, Factory, MessageSquare, BarChart, Handshake, Lightbulb } from 'lucide-react';

export default function PipelineProductsPage() {
  const [selectedFramework, setSelectedFramework] = useState('timeline');

  const pipelineProducts = [
    {
      name: 'Rustene',
      tagline: 'Anti-Corrosion Coating',
      stage: 'Pilot Production',
      launch: 'Q2 2026',
      targetMarket: 'Infrastructure, Marine, Industrial Equipment',
      performance: '10-15x longer corrosion protection vs conventional coatings',
      applications: ['Marine equipment and vessels', 'Coastal infrastructure', 'Industrial chemical storage', 'Automotive undercoating'],
      problem: 'Corrosion costs Indian industries ₹[X] Cr annually',
      solution: 'Single application, multi-year durability in harsh environments',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'Graphyre',
      tagline: 'Fire-Retardant Coating',
      stage: 'Lab Validation',
      launch: 'Q3 2026',
      targetMarket: 'Construction, Textiles, Aerospace',
      performance: 'Intumescent fire protection, delays ignition, non-toxic',
      applications: ['Building fire safety', 'Textile fire retardancy', 'Aircraft interiors', 'Electrical cable sheathing'],
      problem: 'Fire safety compliance limits building design and material options',
      solution: 'Lightweight, effective protection without structural load penalty',
      color: 'from-red-600 to-orange-600'
    },
    {
      name: 'Graphosite',
      tagline: 'Lightweight Composite',
      stage: 'Formulation Optimization',
      launch: 'Q4 2026',
      targetMarket: 'Automotive, Aerospace, Sports Equipment',
      performance: '30-40% weight reduction vs conventional composites',
      applications: ['Automotive body panels (EV lightweighting)', 'Aerospace components', 'Sports equipment', 'Drones and UAVs'],
      problem: 'EV range anxiety driven by battery weight',
      solution: 'Every kg saved = longer range, lower battery cost per km',
      color: 'from-purple-600 to-pink-600'
    },
    {
      name: 'Thermaphene',
      tagline: 'Thermal Management Material',
      stage: 'Lab Validation',
      launch: 'Q1 2027',
      targetMarket: 'Electronics, EV Batteries, Data Centers',
      performance: 'Superior thermal conductivity, lightweight, electrically insulating',
      applications: ['EV battery thermal management', 'Smartphone/laptop heat dissipation', 'Data center cooling', 'LED heat sinks'],
      problem: 'Overheating limits electronics performance and safety',
      solution: 'Passive cooling, reduced thermal runaway risk, no throttling',
      color: 'from-indigo-600 to-blue-600'
    },
    {
      name: 'Armophene',
      tagline: 'Ballistic/Impact Protection',
      stage: 'Early Formulation',
      launch: 'Q2 2027',
      targetMarket: 'Defense, Automotive Safety, Industrial Protection',
      performance: 'Lightweight ballistic protection, high impact energy absorption',
      applications: ['Defense: Ballistic helmets, body armor', 'Automotive: Crash protection panels', 'Industrial PPE', 'Sports: Advanced protective equipment'],
      problem: 'Ballistic protection too heavy for comfort and mobility',
      solution: 'Better protection without mobility penalty, comfortable for extended wear',
      color: 'from-green-600 to-emerald-600'
    }
  ];

  const frameworks = {
    timeline: {
      name: 'Timeline/Roadmap View',
      icon: Clock,
      tagline: 'Show innovation pipeline as progression over time',
      recommended: true
    },
    industry: {
      name: 'Industry-Impact View',
      icon: Factory,
      tagline: 'Organize pipeline by industry/market impact'
    },
    'problem-solution': {
      name: 'Problem-Solution Cards',
      icon: MessageSquare,
      tagline: 'Lead with problems, present pipeline products as solutions'
    },
    readiness: {
      name: 'Readiness & Stage View',
      icon: BarChart,
      tagline: 'Transparent about development stage, build anticipation'
    },
    partnership: {
      name: 'Partnership Opportunity View',
      icon: Handshake,
      tagline: 'Position pipeline as co-development opportunities'
    },
    innovation: {
      name: 'Innovation Showcase',
      icon: Lightbulb,
      tagline: 'Build brand as innovation leader, inspire excitement'
    }
  };

  const currentFramework = frameworks[selectedFramework];
  const Icon = currentFramework.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Pipeline Products Showcase</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            6 frameworks for presenting the 5 pipeline products
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Rustene • Graphyre • Graphosite • Thermaphene • Armophene
          </p>
        </div>

        {/* Framework Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-black mb-4">Select Showcase Framework</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {Object.entries(frameworks).map(([key, framework]) => {
              const FrameworkIcon = framework.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedFramework(key)}
                  className={`p-4 rounded-lg border-2 transition-all text-left relative ${
                    selectedFramework === key
                      ? 'border-black bg-black text-white'
                      : 'border-neutral-200 hover:border-neutral-300 bg-white'
                  }`}
                >
                  {framework.recommended && (
                    <span className="absolute top-2 right-2 text-xs font-bold text-yellow-600">★</span>
                  )}
                  <FrameworkIcon className="w-5 h-5 mb-2" />
                  <div className="text-xs font-medium">{framework.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Framework Preview */}
        <motion.div
          key={selectedFramework}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-12 text-center">
            <Icon className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold mb-3">{currentFramework.name}</h2>
            <p className="text-lg opacity-90">{currentFramework.tagline}</p>
            {currentFramework.recommended && (
              <div className="mt-4">
                <span className="inline-block bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-2 rounded-full">
                  ⭐ RECOMMENDED
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Timeline View */}
            {selectedFramework === 'timeline' && (
              <div>
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">Product Launch Roadmap</h3>
                  <p className="text-neutral-600">Today's Products → Tomorrow's Breakthroughs → One Continuous Pipeline</p>
                </div>
                <div className="space-y-6">
                  {pipelineProducts.map((product, index) => (
                    <div key={index} className="flex gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full flex flex-col items-center justify-center font-bold shadow-lg">
                          <div className="text-xs">{product.launch}</div>
                          <div className="text-sm">{product.stage}</div>
                        </div>
                        {index < pipelineProducts.length - 1 && (
                          <div className="w-0.5 h-full bg-neutral-300 mt-2"></div>
                        )}
                      </div>
                      <div className="flex-1 bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-bold text-black">{product.name}</h3>
                          <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                            {product.launch} Launch
                          </span>
                        </div>
                        <p className="text-sm text-neutral-600 mb-3">{product.tagline} — {product.targetMarket}</p>
                        <p className="text-neutral-700 font-medium mb-3">{product.performance}</p>
                        <div className="flex flex-wrap gap-2">
                          {product.applications.slice(0, 3).map((app, appIndex) => (
                            <span key={appIndex} className="text-xs bg-white text-neutral-600 px-2 py-1 rounded border border-neutral-200">
                              {app}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Industry View */}
            {selectedFramework === 'industry' && (
              <div className="grid md:grid-cols-2 gap-6">
                {pipelineProducts.map((product, index) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                    <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
                    <p className="text-sm text-neutral-600 mb-4">{product.tagline}</p>
                    <div className="space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-neutral-500 mb-1">TARGET MARKET</p>
                        <p className="text-sm text-neutral-800">{product.targetMarket}</p>
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-neutral-500 mb-1">KEY APPLICATIONS</p>
                        <ul className="space-y-1">
                          {product.applications.map((app, appIndex) => (
                            <li key={appIndex} className="text-sm text-neutral-700 flex items-start gap-2">
                              <span className="text-purple-600">•</span>
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="pt-3 border-t border-neutral-200">
                        <p className="text-xs font-semibold text-purple-600 mb-1">LAUNCH: {product.launch}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Problem-Solution */}
            {selectedFramework === 'problem-solution' && (
              <div className="space-y-6">
                {pipelineProducts.map((product, index) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-black">{product.name}</h3>
                      <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">
                        {product.launch}
                      </span>
                    </div>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                        <p className="text-xs font-bold text-red-700 mb-2">PROBLEM</p>
                        <p className="text-sm text-red-900">{product.problem}</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                        <p className="text-xs font-bold text-blue-700 mb-2">SOLUTION</p>
                        <p className="text-sm text-blue-900">{product.solution}</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                        <p className="text-xs font-bold text-green-700 mb-2">PERFORMANCE</p>
                        <p className="text-sm text-green-900">{product.performance}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Readiness View */}
            {selectedFramework === 'readiness' && (
              <div>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-black mb-2">Development Stage Transparency</h3>
                  <p className="text-neutral-600">From Lab to Market — Where Each Product Stands</p>
                </div>
                <div className="space-y-4">
                  {pipelineProducts.map((product, index) => (
                    <div key={index} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-bold text-black">{product.name}</h3>
                          <p className="text-sm text-neutral-600">{product.tagline}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs font-semibold text-neutral-500">CURRENT STAGE</p>
                          <p className="text-sm font-bold text-purple-700">{product.stage}</p>
                        </div>
                      </div>
                      <div className="relative pt-1">
                        <div className="flex mb-2 items-center justify-between">
                          <div className="text-xs font-semibold text-neutral-600">Progress to Launch</div>
                          <div className="text-xs font-semibold text-purple-700">Expected: {product.launch}</div>
                        </div>
                        <div className="overflow-hidden h-2 text-xs flex rounded bg-neutral-200">
                          <div
                            style={{ width: product.stage === 'Pilot Production' ? '80%' : product.stage === 'Lab Validation' ? '60%' : '40%' }}
                            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-purple-600 to-pink-600"
                          ></div>
                        </div>
                      </div>
                      <div className="mt-4 grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs font-semibold text-neutral-500 mb-1">TARGET MARKET</p>
                          <p className="text-sm text-neutral-700">{product.targetMarket}</p>
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-neutral-500 mb-1">PARTNERSHIP CTA</p>
                          <button className="text-xs font-semibold text-purple-700 hover:text-purple-900 underline">
                            {product.stage === 'Pilot Production' ? 'Join Beta Testing' : 'Register Early Interest'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Partnership View */}
            {selectedFramework === 'partnership' && (
              <div>
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">Shape the Future — Partner on Pipeline Products</h3>
                  <p className="text-neutral-600">Early access, custom formulation, shared economics</p>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {pipelineProducts.map((product, index) => (
                    <div key={index} className="bg-neutral-50 rounded-lg p-6 border-2 border-purple-200 hover:border-purple-400 transition-all">
                      <h3 className="text-xl font-bold text-black mb-2">{product.name}</h3>
                      <p className="text-sm text-neutral-600 mb-4">{product.tagline}</p>
                      <div className="space-y-3">
                        <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                          <p className="text-xs font-bold text-purple-700 mb-1">PARTNERSHIP OPPORTUNITY</p>
                          <p className="text-sm text-purple-900">
                            {product.stage === 'Pilot Production' ? 'Beta testing program available' : 'Co-development partnership'}
                          </p>
                        </div>
                        <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                          <p className="text-xs font-bold text-blue-700 mb-1">BENEFITS</p>
                          <p className="text-sm text-blue-900">Exclusive territory, custom formulation, preferential pricing</p>
                        </div>
                        <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                          <p className="text-xs font-bold text-green-700 mb-1">TIMELINE</p>
                          <p className="text-sm text-green-900">Launch: {product.launch}</p>
                        </div>
                      </div>
                      <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors">
                        Explore Partnership
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Innovation Showcase */}
            {selectedFramework === 'innovation' && (
              <div>
                <div className="mb-8 text-center">
                  <h3 className="text-2xl font-bold text-black mb-2">What Comes After Graphene? We're Already Working On It.</h3>
                  <p className="text-neutral-600 max-w-2xl mx-auto">
                    Most companies launch a product and call it done. We launch a product and ask: What's next?
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-6 border border-blue-200">
                    <div className="text-3xl font-bold text-blue-600 mb-2">9</div>
                    <p className="text-sm font-semibold text-neutral-800">Total Products</p>
                    <p className="text-xs text-neutral-600">4 commercial + 5 pipeline</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                    <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
                    <p className="text-sm font-semibold text-neutral-800">Industries Served</p>
                    <p className="text-xs text-neutral-600">Construction to defense</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6 border border-green-200">
                    <div className="text-3xl font-bold text-green-600 mb-2">6-9mo</div>
                    <p className="text-sm font-semibold text-neutral-800">Development Cycle</p>
                    <p className="text-xs text-neutral-600">Lab to market timeline</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {pipelineProducts.map((product, index) => (
                    <div key={index} className={`bg-gradient-to-r ${product.color} text-white rounded-lg p-6`}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-2xl font-bold">{product.name}</h3>
                        <span className="text-sm font-bold bg-white/20 px-3 py-1 rounded-full">{product.launch}</span>
                      </div>
                      <p className="text-lg opacity-90 mb-2">{product.tagline}</p>
                      <p className="opacity-80">{product.performance}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* Quick Stats */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-6">Pipeline Overview</h2>
          <div className="grid md:grid-cols-5 gap-6">
            {pipelineProducts.map((product, index) => (
              <div key={index} className="text-center">
                <h3 className="font-bold text-black mb-1">{product.name}</h3>
                <p className="text-xs text-neutral-600 mb-2">{product.stage}</p>
                <span className="inline-block text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-1 rounded-full">
                  {product.launch}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
