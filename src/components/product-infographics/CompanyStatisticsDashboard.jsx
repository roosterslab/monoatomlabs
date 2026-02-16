import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Package, Building2, Beaker, Award, TrendingUp } from 'lucide-react';

const CompanyStatisticsDashboard = () => {
  const stats = [
    {
      icon: Lightbulb,
      value: '10+',
      label: 'Innovations',
      description: 'Breakthrough materials and technologies',
      color: 'text-yellow-400',
      gradient: 'from-yellow-500/20 to-orange-500/20',
      border: 'border-yellow-500/30',
    },
    {
      icon: Package,
      value: '5+',
      label: 'Commercial Products',
      description: 'Market-validated solutions deployed at scale',
      color: 'text-brand-400',
      gradient: 'from-brand-500/20 to-teal-500/20',
      border: 'border-brand-500/30',
    },
    {
      icon: Building2,
      value: '2',
      label: 'R&D Facilities',
      description: 'State-of-the-art laboratories with advanced characterization',
      color: 'text-blue-400',
      gradient: 'from-blue-500/20 to-cyan-500/20',
      border: 'border-blue-500/30',
    },
    {
      icon: Beaker,
      value: '5',
      label: 'Pilot Technologies',
      description: 'Field-scale trials in membranes, batteries, and advanced materials',
      color: 'text-purple-400',
      gradient: 'from-purple-500/20 to-pink-500/20',
      border: 'border-purple-500/30',
    },
  ];

  const achievements = [
    { value: '14+', label: 'Major Awards', color: 'text-green-400' },
    { value: '6×', label: 'President of India Awards', color: 'text-brand-400' },
    { value: 'NABL', label: 'Certified Testing', color: 'text-purple-400' },
  ];

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6">
            <TrendingUp className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
              Company Metrics
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            By The Numbers
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Monoatom Labs combines deep scientific expertise with real-world industrial deployment capabilities
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className={`bg-gradient-to-br ${stat.gradient} border ${stat.border} backdrop-blur p-8 rounded-sm hover:shadow-[0_0_30px_rgba(13,148,136,0.2)] transition-all duration-300 group relative overflow-hidden`}
              >
                {/* Background glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                {/* Icon */}
                <div className={`${stat.color} mb-6 relative z-10`}>
                  <Icon className="w-12 h-12" strokeWidth={1.5} />
                </div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-6xl font-mono font-bold text-white mb-3 relative z-10"
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <h3 className="text-lg font-display font-semibold text-white mb-3 relative z-10">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-400 leading-relaxed relative z-10">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pt-12 border-t border-neutral-800"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {achievements.map((achievement, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + idx * 0.1 }}
                className="text-center bg-neutral-900/60 backdrop-blur border border-neutral-800 p-8 rounded-sm hover:border-brand-500/50 transition-all group"
              >
                <div className={`text-5xl font-mono font-bold ${achievement.color} mb-3 group-hover:scale-110 transition-transform`}>
                  {achievement.value}
                </div>
                <div className="text-sm text-neutral-400 font-mono uppercase tracking-wider">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-16 bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-sm p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Award className="w-8 h-8 text-brand-400" />
            <h3 className="text-2xl font-display font-bold text-white">
              Award-Winning Innovation
            </h3>
          </div>
          <p className="text-neutral-300 max-w-3xl mx-auto">
            Recognized globally for breakthrough nanomaterial research and commercial-scale graphene applications.
            6× President of India Award winner, MIT TR35, TED Speaker, NASA Awardee.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompanyStatisticsDashboard;
