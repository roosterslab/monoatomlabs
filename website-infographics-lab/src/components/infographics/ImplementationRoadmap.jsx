import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Sun, Layers, Package, CheckCircle2, Clock, Users, FileText, Beaker, TrendingUp, Award } from 'lucide-react';

const ImplementationRoadmap = () => {
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');

  const roadmaps = {
    graphacrete: {
      name: 'Graphacrete',
      icon: Building2,
      color: 'from-purple-500 to-pink-500',
      timeline: '4-8 weeks',
      phases: [
        {
          phase: 1,
          name: 'Initial Consultation',
          duration: '1-2 days',
          icon: Users,
          activities: [
            'Project requirements gathering',
            'Site assessment & specifications',
            'Concrete grade requirements (M30-M60)',
            'Volume estimation',
            'Timeline discussion',
          ],
          deliverables: [
            'Technical proposal',
            'Cost estimate',
            'Product recommendation',
          ],
          team: 'Sales & Technical Team',
        },
        {
          phase: 2,
          name: 'Sample Testing',
          duration: '7-10 days',
          icon: Beaker,
          activities: [
            'Prepare test mix designs',
            'Laboratory testing (cube casting)',
            '7-day & 28-day strength testing',
            'NABL certified test reports',
            'Performance validation',
          ],
          deliverables: [
            'Test certificates',
            'Mix design report',
            'Strength gain validation',
          ],
          team: 'R&D & Quality Team',
        },
        {
          phase: 3,
          name: 'Trial Batch',
          duration: '3-5 days',
          icon: TrendingUp,
          activities: [
            'Small-scale trial (10-50 m³)',
            'On-site mixing process',
            'Workability assessment',
            'Setting time monitoring',
            'Quality checks',
          ],
          deliverables: [
            'Trial batch report',
            'Process optimization',
            'Field team training',
          ],
          team: 'Field Support Team',
        },
        {
          phase: 4,
          name: 'Full-Scale Deployment',
          duration: '2-4 weeks',
          icon: Award,
          activities: [
            'Bulk supply arrangement',
            'Dosing system setup',
            'Continuous quality monitoring',
            'Regular strength testing',
            'Performance tracking',
          ],
          deliverables: [
            'Regular test reports',
            'Quality certificates',
            'Technical support',
          ],
          team: 'Full Support Team',
        },
      ],
      bestPractices: [
        'Always conduct 28-day strength testing',
        'Maintain consistent water-cement ratio',
        'Use NABL-accredited testing labs',
        'Document all batches for traceability',
        'Train site engineers on dosing',
      ],
    },

    graffisol: {
      name: 'Graffisol',
      icon: Sun,
      color: 'from-yellow-500 to-orange-500',
      timeline: '2-4 weeks',
      phases: [
        {
          phase: 1,
          name: 'Site Assessment',
          duration: '1-2 days',
          icon: Users,
          activities: [
            'Solar installation inspection',
            'Panel count & type documentation',
            'Soiling level assessment',
            'Access & safety evaluation',
            'Performance baseline measurement',
          ],
          deliverables: [
            'Site assessment report',
            'Application plan',
            'Cost quotation',
          ],
          team: 'Solar Technical Team',
        },
        {
          phase: 2,
          name: 'Surface Preparation',
          duration: '1-3 days',
          icon: Beaker,
          activities: [
            'Panel cleaning (complete)',
            'Surface decontamination',
            'Moisture check',
            'Pre-application inspection',
            'Weather condition verification',
          ],
          deliverables: [
            'Cleaning completion report',
            'Surface readiness certificate',
          ],
          team: 'Application Team',
        },
        {
          phase: 3,
          name: 'Coating Application',
          duration: '3-7 days',
          icon: TrendingUp,
          activities: [
            'Graffisol application (spray/roller)',
            'Coverage: 100-120 ml/m²',
            '24-hour curing period',
            'Quality inspection',
            'Touch-up if needed',
          ],
          deliverables: [
            'Application completion certificate',
            'Coverage documentation',
            'Photo documentation',
          ],
          team: 'Certified Applicators',
        },
        {
          phase: 4,
          name: 'Performance Monitoring',
          duration: '1-2 weeks',
          icon: Award,
          activities: [
            'Daily energy output tracking',
            'Temperature monitoring',
            'Before/after comparison',
            'Self-cleaning validation',
            'Performance guarantee activation',
          ],
          deliverables: [
            'Performance report',
            '10-year warranty certificate',
            'Monitoring setup',
          ],
          team: 'Monitoring & Support',
        },
      ],
      bestPractices: [
        'Apply during dry weather only',
        'Ensure complete panel cleaning first',
        'Avoid application in direct sunlight',
        'Maintain 100-120 ml/m² coverage',
        'Allow full 24-hour curing',
      ],
    },

    ceraphene: {
      name: 'Ceraphene',
      icon: Layers,
      color: 'from-cyan-500 to-blue-500',
      timeline: '3-6 weeks',
      phases: [
        {
          phase: 1,
          name: 'Application Discovery',
          duration: '3-5 days',
          icon: Users,
          activities: [
            'Application requirements discussion',
            'Technical specifications review',
            'Volume & purity requirements',
            'Integration feasibility study',
            'Cost-benefit analysis',
          ],
          deliverables: [
            'Technical feasibility report',
            'Custom formulation proposal',
            'Pricing quotation',
          ],
          team: 'Technical Sales Team',
        },
        {
          phase: 2,
          name: 'Sample Testing',
          duration: '1-2 weeks',
          icon: Beaker,
          activities: [
            'Sample shipment (100g-1kg)',
            'Customer-side testing',
            'Performance validation',
            'Dispersibility assessment',
            'Application-specific trials',
          ],
          deliverables: [
            'Sample test report',
            'Performance data',
            'Integration guidelines',
          ],
          team: 'R&D Support',
        },
        {
          phase: 3,
          name: 'Pilot Production',
          duration: '1-2 weeks',
          icon: TrendingUp,
          activities: [
            'Pilot batch production (10-50kg)',
            'Process integration',
            'Quality consistency check',
            'Scaling parameters optimization',
            'Cost validation',
          ],
          deliverables: [
            'Pilot production report',
            'Process documentation',
            'Quality certificates',
          ],
          team: 'Production Support',
        },
        {
          phase: 4,
          name: 'Commercial Supply',
          duration: '1-2 weeks',
          icon: Award,
          activities: [
            'Bulk order processing',
            'Regular quality checks',
            'Supply chain setup',
            'Technical support availability',
            'Performance tracking',
          ],
          deliverables: [
            'Batch certificates',
            'COA (Certificate of Analysis)',
            'Ongoing technical support',
          ],
          team: 'Supply Chain & Support',
        },
      ],
      bestPractices: [
        'Always test samples before bulk order',
        'Verify dispersion quality',
        'Maintain consistent storage conditions',
        'Document all application parameters',
        'Regular quality audits',
      ],
    },

    hdgpe: {
      name: 'HD-G-PE',
      icon: Package,
      color: 'from-green-500 to-teal-500',
      timeline: '4-8 weeks',
      phases: [
        {
          phase: 1,
          name: 'Product Evaluation',
          duration: '3-5 days',
          icon: Users,
          activities: [
            'Application requirements analysis',
            'Performance targets definition',
            'Processing equipment compatibility',
            'Volume requirements',
            'Economic feasibility',
          ],
          deliverables: [
            'Application analysis report',
            'Product recommendation',
            'Pricing proposal',
          ],
          team: 'Polymer Technical Team',
        },
        {
          phase: 2,
          name: 'Sample Trials',
          duration: '2-3 weeks',
          icon: Beaker,
          activities: [
            'Sample pellets shipment (25kg)',
            'Processing trials on existing equipment',
            'Mechanical testing (elongation, tensile)',
            'Product performance validation',
            'Cost-performance analysis',
          ],
          deliverables: [
            'Processing guidelines',
            'Mechanical test results',
            'Performance comparison',
          ],
          team: 'Application Engineering',
        },
        {
          phase: 3,
          name: 'Production Integration',
          duration: '1-2 weeks',
          icon: TrendingUp,
          activities: [
            'Production line integration',
            'Process parameter optimization',
            'Quality control setup',
            'Operator training',
            'Pilot production run',
          ],
          deliverables: [
            'Process documentation',
            'Quality control protocols',
            'Training materials',
          ],
          team: 'Production Support',
        },
        {
          phase: 4,
          name: 'Full-Scale Production',
          duration: '2-4 weeks',
          icon: Award,
          activities: [
            'Regular bulk supply',
            'Ongoing quality monitoring',
            'Performance tracking',
            'Technical troubleshooting',
            'Product optimization',
          ],
          deliverables: [
            'Batch certificates',
            'Quality reports',
            'Performance analytics',
          ],
          team: 'Full Support Team',
        },
      ],
      bestPractices: [
        'Verify processing temperature compatibility',
        'Conduct full mechanical testing',
        'Maintain moisture-free storage',
        'Regular quality checks on finished products',
        'Document all processing parameters',
      ],
    },
  };

  const roadmap = roadmaps[selectedProduct];
  const Icon = roadmap.icon;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-teal-400/50 bg-teal-400/10 backdrop-blur mb-6">
            <Clock className="w-4 h-4 text-teal-300 animate-pulse" />
            <span className="text-xs font-bold text-teal-300 tracking-wide uppercase">
              Implementation Guide
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Product Implementation Roadmap
          </h1>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Step-by-step guide from consultation to deployment
          </p>
        </motion.div>

        {/* Product Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(roadmaps).map(([key, value]) => {
            const ProductIcon = value.icon;
            return (
              <button
                key={key}
                onClick={() => setSelectedProduct(key)}
                className={`p-6 rounded-xl transition-all ${
                  selectedProduct === key
                    ? `bg-gradient-to-br ${value.color} shadow-2xl scale-105`
                    : 'bg-white/10 hover:bg-white/20'
                }`}
              >
                <ProductIcon className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-white font-semibold text-center">{value.name}</div>
              </button>
            );
          })}
        </div>

        {/* Roadmap */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedProduct}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Timeline Overview */}
            <div className={`bg-gradient-to-br ${roadmap.color} rounded-2xl p-8`}>
              <div className="flex items-center gap-6">
                <div className="p-4 bg-white/20 rounded-xl">
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-display font-bold text-white mb-2">
                    {roadmap.name} Implementation
                  </h2>
                  <div className="flex items-center gap-2 text-white/90">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg font-semibold">Total Timeline: {roadmap.timeline}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Phases */}
            <div className="space-y-6">
              {roadmap.phases.map((phase, idx) => {
                const PhaseIcon = phase.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="relative"
                  >
                    {/* Connector Line */}
                    {idx < roadmap.phases.length - 1 && (
                      <div className="absolute left-12 top-24 w-0.5 h-full bg-gradient-to-b from-teal-500 to-transparent"></div>
                    )}

                    <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                      <div className="flex items-start gap-6">
                        {/* Phase Number */}
                        <div className="flex-shrink-0">
                          <div className="w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-xl">
                            <div className="text-center">
                              <PhaseIcon className="w-8 h-8 text-white mx-auto mb-1" />
                              <div className="text-2xl font-bold text-white">0{phase.phase}</div>
                            </div>
                          </div>
                        </div>

                        {/* Phase Content */}
                        <div className="flex-grow">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-2xl font-display font-bold text-white mb-2">
                                {phase.name}
                              </h3>
                              <div className="flex items-center gap-4 text-sm text-neutral-300">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4" />
                                  <span>{phase.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <Users className="w-4 h-4" />
                                  <span>{phase.team}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Activities */}
                            <div>
                              <h4 className="text-sm font-bold text-teal-300 uppercase tracking-wide mb-3">
                                Activities
                              </h4>
                              <div className="space-y-2">
                                {phase.activities.map((activity, actIdx) => (
                                  <div key={actIdx} className="flex items-start gap-2 text-sm text-white">
                                    <CheckCircle2 className="w-4 h-4 text-teal-400 flex-shrink-0 mt-0.5" />
                                    <span>{activity}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                            {/* Deliverables */}
                            <div>
                              <h4 className="text-sm font-bold text-purple-300 uppercase tracking-wide mb-3">
                                Deliverables
                              </h4>
                              <div className="space-y-2">
                                {phase.deliverables.map((deliverable, delIdx) => (
                                  <div key={delIdx} className="flex items-start gap-2 p-2 bg-purple-500/10 rounded-lg">
                                    <FileText className="w-4 h-4 text-purple-400 flex-shrink-0 mt-0.5" />
                                    <span className="text-sm text-white">{deliverable}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Best Practices */}
            <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-green-400" />
                Best Practices
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {roadmap.bestPractices.map((practice, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-green-500/10 rounded-lg">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-white text-sm">{practice}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6 text-center">
              <p className="text-neutral-300 mb-4">
                Ready to start your {roadmap.name} implementation journey?
              </p>
              <div className="flex justify-center gap-4">
                <button className="px-6 py-3 bg-teal-500 text-white rounded-lg font-semibold hover:bg-teal-600 transition-all">
                  Start Consultation
                </button>
                <button className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
                  Download Roadmap PDF
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ImplementationRoadmap;
