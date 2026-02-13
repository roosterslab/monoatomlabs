import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, MessageSquare, Target, GitCompare, TrendingUp } from 'lucide-react';

export default function ProductShowcasePage() {
  const [selectedApproach, setSelectedApproach] = useState('performance-grid');

  const showcaseApproaches = {
    'performance-grid': {
      name: 'Performance Metrics Grid',
      icon: BarChart3,
      tagline: 'Lead with quantifiable results in grid format',
      color: 'from-blue-600 to-cyan-600',
      recommended: true,
      products: [
        {
          name: 'Graphacrete',
          tagline: 'Concrete Additive',
          metrics: {
            primary: '40% Strength Increase',
            secondary: '₹280/m³ Cost Savings',
            tertiary: '30% Water Resistance'
          },
          application: 'Construction'
        },
        {
          name: 'Graffisol',
          tagline: 'Solar Panel Coating',
          metrics: {
            primary: '4-6% Efficiency Gain',
            secondary: '18-Month ROI',
            tertiary: 'All Panel Types'
          },
          application: 'Solar Energy'
        },
        {
          name: 'Ceraphene',
          tagline: 'Ceramic Coating',
          metrics: {
            primary: '5-7x Durability',
            secondary: 'Grade 5B Adhesion',
            tertiary: 'Extreme Temp Resistance'
          },
          application: 'Automotive/Industrial'
        },
        {
          name: 'HD-G-PE',
          tagline: 'Barrier Film',
          metrics: {
            primary: '30% Barrier Improvement',
            secondary: 'Moisture & Oxygen',
            tertiary: 'Food/Pharma Safe'
          },
          application: 'Packaging'
        }
      ],
      useWhen: 'Homepage product section, performance-focused buyers, technical audiences'
    },
    'problem-solution': {
      name: 'Problem-Solution Cards',
      icon: MessageSquare,
      tagline: 'Lead with customer pain points, present product as solution',
      color: 'from-purple-600 to-pink-600',
      recommended: false,
      products: [
        {
          name: 'Graphacrete',
          problem: 'Concrete costs rising, strength requirements increasing',
          solution: '40% stronger concrete at 30% lower material cost',
          outcome: '₹280/m³ savings, superior performance',
          application: 'Construction'
        },
        {
          name: 'Graffisol',
          problem: 'Solar panels lose efficiency over time, reducing ROI',
          solution: '4-6% efficiency boost with protective coating',
          outcome: '18-month payback, sustained performance',
          application: 'Solar Energy'
        },
        {
          name: 'Ceraphene',
          problem: 'Conventional coatings fail quickly in harsh conditions',
          solution: '5-7x longer lasting ceramic coating',
          outcome: 'Lower maintenance, less downtime',
          application: 'Automotive/Industrial'
        },
        {
          name: 'HD-G-PE',
          problem: 'Product spoilage due to inadequate packaging barriers',
          solution: '30% better moisture & oxygen resistance',
          outcome: 'Extended shelf life, reduced waste',
          application: 'Packaging'
        }
      ],
      useWhen: 'Industry-specific pages, problem-aware traffic, consultative sales approach'
    },
    'use-case': {
      name: 'Use-Case First Approach',
      icon: Target,
      tagline: 'Organize by application and industry',
      color: 'from-green-600 to-emerald-600',
      recommended: false,
      industries: [
        {
          name: 'Construction',
          icon: '🏗️',
          product: 'Graphacrete',
          applications: [
            'High-rise buildings (M30+ concrete)',
            'Infrastructure projects (bridges, highways)',
            'Residential construction (cost optimization)',
            'Marine structures (water resistance)'
          ]
        },
        {
          name: 'Solar Energy',
          icon: '☀️',
          product: 'Graffisol',
          applications: [
            'Utility-scale solar farms',
            'Rooftop solar installations',
            'Solar panel manufacturing',
            'Efficiency optimization projects'
          ]
        },
        {
          name: 'Automotive',
          icon: '🚗',
          product: 'Ceraphene',
          applications: [
            'Automotive parts coating',
            'Manufacturing equipment protection',
            'Extreme environment applications',
            'High-performance vehicles'
          ]
        },
        {
          name: 'Packaging',
          icon: '📦',
          product: 'HD-G-PE',
          applications: [
            'Food packaging (extended freshness)',
            'Pharmaceutical packaging',
            'Industrial protective films',
            'Agricultural product packaging'
          ]
        }
      ],
      useWhen: 'Industry landing pages, use-case driven traffic, application-specific marketing'
    },
    'comparison': {
      name: 'Comparison Table Format',
      icon: GitCompare,
      tagline: 'Side-by-side product comparison',
      color: 'from-amber-600 to-orange-600',
      recommended: false,
      comparisonData: {
        headers: ['Product', 'Primary Benefit', 'ROI Timeline', 'Applications', 'Key Metric'],
        rows: [
          ['Graphacrete', '40% Strength Gain', 'Instant Savings', 'Construction', '₹280/m³ Savings'],
          ['Graffisol', '4-6% Efficiency', '12-18 Months', 'Solar Energy', '5.2% Avg Gain'],
          ['Ceraphene', '5-7x Durability', '6-12 Months', 'Automotive/Industrial', 'Grade 5B Adhesion'],
          ['HD-G-PE', '30% Barrier Improvement', '3-6 Months', 'Packaging', '30% Resistance Gain']
        ]
      },
      useWhen: 'Product catalog pages, decision-stage buyers, comparative shopping scenarios'
    },
    'timeline': {
      name: 'Timeline/Journey Format',
      icon: TrendingUp,
      tagline: 'Show product evolution and development progression',
      color: 'from-rose-600 to-red-600',
      recommended: false,
      timeline: [
        {
          year: '2022',
          product: 'Graphacrete',
          status: 'Launched',
          milestone: 'First commercial product - 200+ installations',
          metric: '₹280/m³ savings proven'
        },
        {
          year: '2023',
          product: 'Graffisol',
          status: 'Launched',
          milestone: 'Solar coating commercialized',
          metric: '4-6% efficiency gains validated'
        },
        {
          year: '2024',
          product: 'Ceraphene',
          status: 'Launched',
          milestone: 'Ceramic coating for automotive/industrial',
          metric: '5-7x durability improvement'
        },
        {
          year: '2025',
          product: 'HD-G-PE',
          status: 'Launched',
          milestone: 'Barrier film for packaging',
          metric: '30% moisture resistance'
        }
      ],
      useWhen: 'About page, investor presentations, showcasing track record and momentum'
    }
  };

  const currentApproach = showcaseApproaches[selectedApproach];
  const Icon = currentApproach.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Product Showcase Variations</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            5+ approaches for presenting the 4 commercial products
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Graphacrete • Graffisol • Ceraphene • HD-G-PE
          </p>
        </div>

        {/* Approach Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-black mb-4">Select Showcase Approach</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {Object.entries(showcaseApproaches).map(([key, approach]) => {
              const ApproachIcon = approach.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedApproach(key)}
                  className={`p-4 rounded-lg border-2 transition-all text-left relative ${
                    selectedApproach === key
                      ? 'border-black bg-black text-white'
                      : 'border-neutral-200 hover:border-neutral-300 bg-white'
                  }`}
                >
                  {approach.recommended && (
                    <span className="absolute top-2 right-2 text-xs font-bold text-yellow-600 bg-yellow-100 px-2 py-0.5 rounded-full">
                      ★
                    </span>
                  )}
                  <ApproachIcon className="w-5 h-5 mb-2" />
                  <div className="text-sm font-medium">{approach.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Approach Preview */}
        <motion.div
          key={selectedApproach}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${currentApproach.color} text-white p-12 text-center`}>
            <Icon className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold mb-3">{currentApproach.name}</h2>
            <p className="text-lg opacity-90">{currentApproach.tagline}</p>
            {currentApproach.recommended && (
              <div className="mt-4">
                <span className="inline-block bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-2 rounded-full">
                  ⭐ RECOMMENDED APPROACH
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Performance Grid */}
            {selectedApproach === 'performance-grid' && (
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {currentApproach.products.map((product, index) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                    <h3 className="text-xl font-bold text-black mb-1">{product.name}</h3>
                    <p className="text-sm text-neutral-500 mb-4">{product.tagline}</p>
                    <div className="space-y-3">
                      <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                        <p className="text-xs text-green-700 font-semibold mb-1">PRIMARY BENEFIT</p>
                        <p className="text-sm font-bold text-green-900">{product.metrics.primary}</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                        <p className="text-xs text-blue-700 font-semibold mb-1">COST IMPACT</p>
                        <p className="text-sm font-bold text-blue-900">{product.metrics.secondary}</p>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                        <p className="text-xs text-purple-700 font-semibold mb-1">ADDITIONAL</p>
                        <p className="text-sm font-bold text-purple-900">{product.metrics.tertiary}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-neutral-200">
                      <p className="text-xs text-neutral-500 mb-1">APPLICATION</p>
                      <p className="text-sm font-semibold text-neutral-800">{product.application}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Problem-Solution */}
            {selectedApproach === 'problem-solution' && (
              <div className="space-y-6">
                {currentApproach.products.map((product, index) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-black">{product.name}</h3>
                      <span className="text-xs font-semibold text-neutral-500 bg-neutral-200 px-3 py-1 rounded-full">
                        {product.application}
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
                        <p className="text-xs font-bold text-green-700 mb-2">OUTCOME</p>
                        <p className="text-sm text-green-900">{product.outcome}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Use-Case First */}
            {selectedApproach === 'use-case' && (
              <div className="grid md:grid-cols-2 gap-6">
                {currentApproach.industries.map((industry, index) => (
                  <div key={index} className="bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{industry.icon}</span>
                      <div>
                        <h3 className="text-lg font-bold text-black">{industry.name}</h3>
                        <p className="text-sm text-neutral-600">Product: {industry.product}</p>
                      </div>
                    </div>
                    <p className="text-xs font-semibold text-neutral-500 mb-3">COMMON APPLICATIONS:</p>
                    <ul className="space-y-2">
                      {industry.applications.map((app, appIndex) => (
                        <li key={appIndex} className="flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-black rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-sm text-neutral-700">{app}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Comparison Table */}
            {selectedApproach === 'comparison' && (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-neutral-100">
                    <tr>
                      {currentApproach.comparisonData.headers.map((header, index) => (
                        <th key={index} className="px-4 py-3 text-left text-sm font-semibold text-neutral-700">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-200">
                    {currentApproach.comparisonData.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className={`px-4 py-3 text-sm ${cellIndex === 0 ? 'font-bold text-black' : 'text-neutral-700'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Timeline */}
            {selectedApproach === 'timeline' && (
              <div className="space-y-6">
                {currentApproach.timeline.map((item, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center font-bold">
                        {item.year}
                      </div>
                      {index < currentApproach.timeline.length - 1 && (
                        <div className="w-0.5 h-full bg-neutral-300 mt-2"></div>
                      )}
                    </div>
                    <div className="flex-1 bg-neutral-50 rounded-lg p-6 border border-neutral-200">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-black">{item.product}</h3>
                        <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                          {item.status}
                        </span>
                      </div>
                      <p className="text-neutral-700 mb-2">{item.milestone}</p>
                      <p className="text-sm font-semibold text-neutral-600">{item.metric}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Use When */}
            <div className="mt-8 bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h3 className="text-sm font-semibold text-amber-900 mb-2">Use When:</h3>
              <p className="text-amber-800 text-sm">{currentApproach.useWhen}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
