import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Beaker, LineChart, CheckCircle2, Rocket, Award, Clock, DollarSign } from 'lucide-react';

const PilotTimeline = () => {
  const [activePhase, setActivePhase] = useState(0);

  const phases = [
    {
      id: 0,
      name: 'Discovery',
      icon: Search,
      duration: '1-2 weeks',
      color: 'from-blue-500 to-cyan-500',
      borderColor: 'border-blue-500',
      bgColor: 'bg-blue-500/20',
      activities: [
        'Initial consultation and needs assessment',
        'Product recommendation based on use case',
        'Technical specifications review',
        'Site requirements evaluation',
      ],
      deliverables: [
        'Customized pilot proposal',
        'Timeline and milestones',
        'Success metrics definition',
      ],
    },
    {
      id: 1,
      name: 'Trial Setup',
      icon: Beaker,
      duration: '2-3 weeks',
      color: 'from-purple-500 to-pink-500',
      borderColor: 'border-purple-500',
      bgColor: 'bg-purple-500/20',
      activities: [
        'Product delivery and installation',
        'Baseline data collection',
        'Training for on-site team',
        'Monitoring system setup',
      ],
      deliverables: [
        'Installed product system',
        'Baseline performance report',
        'Training documentation',
      ],
    },
    {
      id: 2,
      name: 'Active Pilot',
      icon: LineChart,
      duration: '4-8 weeks',
      color: 'from-orange-500 to-red-500',
      borderColor: 'border-orange-500',
      bgColor: 'bg-orange-500/20',
      activities: [
        'Real-time performance monitoring',
        'Weekly progress updates',
        'On-site support and troubleshooting',
        'Data collection and validation',
      ],
      deliverables: [
        'Weekly performance dashboards',
        'Interim analysis reports',
        'Issue resolution logs',
      ],
    },
    {
      id: 3,
      name: 'Data Analysis',
      icon: CheckCircle2,
      duration: '1-2 weeks',
      color: 'from-green-500 to-teal-500',
      borderColor: 'border-green-500',
      bgColor: 'bg-green-500/20',
      activities: [
        'Comprehensive data analysis',
        'ROI calculation and projections',
        'Performance benchmarking',
        'Final report preparation',
      ],
      deliverables: [
        'Detailed pilot results report',
        'ROI and savings analysis',
        'Comparison vs baseline',
      ],
    },
    {
      id: 4,
      name: 'Decision & Scale',
      icon: Rocket,
      duration: '1-2 weeks',
      color: 'from-yellow-500 to-amber-500',
      borderColor: 'border-yellow-500',
      bgColor: 'bg-yellow-500/20',
      activities: [
        'Results presentation to stakeholders',
        'Commercial proposal for full deployment',
        'Implementation roadmap planning',
        'Contract negotiation',
      ],
      deliverables: [
        'Executive summary presentation',
        'Scale-up implementation plan',
        'Commercial agreement',
      ],
    },
  ];

  const successMetrics = [
    {
      icon: Award,
      value: '95%',
      label: 'Pilot Success Rate',
      description: 'Of pilots meet or exceed target metrics',
    },
    {
      icon: Clock,
      value: '8-14 weeks',
      label: 'Typical Timeline',
      description: 'From discovery to decision',
    },
    {
      icon: DollarSign,
      value: 'Zero',
      label: 'Upfront Cost',
      description: 'Pay only after proven results',
    },
  ];

  const activeData = phases[activePhase];
  const Icon = activeData.icon;

  return (
    <div className="w-full min-h-screen bg-neutral-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-500/50 bg-brand-500/10 backdrop-blur mb-6">
            <Rocket className="w-4 h-4 text-brand-400 animate-pulse" />
            <span className="text-xs font-bold text-brand-400 tracking-wide uppercase">
              Pilot Program
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            From Trial to Deployment
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Our proven 5-phase pilot process ensures risk-free validation of results
          </p>
        </motion.div>

        {/* Timeline Navigation */}
        <div className="relative mb-16">
          {/* Connection Line */}
          <div className="absolute top-6 left-0 right-0 h-1 bg-neutral-700 hidden md:block">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-500 to-green-500"
              initial={{ width: '0%' }}
              animate={{ width: `${(activePhase / (phases.length - 1)) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Phase Nodes */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-2 relative">
            {phases.map((phase, index) => {
              const PhaseIcon = phase.icon;
              const isActive = index === activePhase;
              const isCompleted = index < activePhase;

              return (
                <motion.button
                  key={phase.id}
                  onClick={() => setActivePhase(index)}
                  className="relative flex flex-col items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Node */}
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all ${
                      isActive
                        ? `bg-gradient-to-r ${phase.color} shadow-xl`
                        : isCompleted
                        ? 'bg-green-500'
                        : 'bg-neutral-700'
                    }`}
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="w-6 h-6 text-white" />
                    ) : (
                      <PhaseIcon className={`w-6 h-6 ${isActive ? 'text-white' : 'text-neutral-400'}`} />
                    )}
                  </div>

                  {/* Label */}
                  <div className={`text-sm font-semibold text-center ${isActive ? 'text-white' : 'text-neutral-400'}`}>
                    {phase.name}
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">{phase.duration}</div>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Phase Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activePhase}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
          >
            {/* Activities */}
            <div className={`bg-gradient-to-br ${activeData.color} bg-opacity-10 border-2 ${activeData.borderColor} rounded-2xl p-8`}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${activeData.color}`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Phase {activeData.id + 1}: {activeData.name}
                  </h3>
                  <p className="text-neutral-400">Duration: {activeData.duration}</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-white mb-3">Key Activities:</h4>
              <ul className="space-y-3">
                {activeData.activities.map((activity, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-start gap-3 text-neutral-300"
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>{activity}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="bg-neutral-800/50 border-2 border-neutral-700 rounded-2xl p-8">
              <h4 className="text-xl font-semibold text-white mb-6">Deliverables:</h4>
              <div className="space-y-4">
                {activeData.deliverables.map((deliverable, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-4 rounded-lg ${activeData.bgColor} border ${activeData.borderColor}`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-neutral-900">{idx + 1}</span>
                      </div>
                      <span className="text-white">{deliverable}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setActivePhase(Math.max(0, activePhase - 1))}
                  disabled={activePhase === 0}
                  className="flex-1 px-4 py-3 bg-neutral-700 text-white rounded-lg font-semibold hover:bg-neutral-600 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                <button
                  onClick={() => setActivePhase(Math.min(phases.length - 1, activePhase + 1))}
                  disabled={activePhase === phases.length - 1}
                  className={`flex-1 px-4 py-3 bg-gradient-to-r ${activeData.color} text-white rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-30 disabled:cursor-not-allowed`}
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Success Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {successMetrics.map((metric, idx) => {
            const MetricIcon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-brand-500/20 to-green-500/20 border-2 border-brand-500/30 rounded-xl p-8 text-center"
              >
                <MetricIcon className="w-12 h-12 text-brand-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                <div className="text-lg font-semibold text-neutral-200 mb-2">{metric.label}</div>
                <div className="text-sm text-neutral-400">{metric.description}</div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default PilotTimeline;
