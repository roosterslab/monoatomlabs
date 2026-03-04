import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Clock, Beaker } from 'lucide-react';
import { products, pipelineProducts, pilotProjects } from '../../data/monoatomData';

const TechRoadmapV1 = () => {
  const marketReady = Object.values(products);
  const pipeline = Object.values(pipelineProducts);
  const pilots = pilotProjects;

  const sections = [
    {
      title: 'Market-Ready',
      subtitle: 'Commercially Available',
      icon: CheckCircle2,
      color: 'bg-green-500',
      textColor: 'text-green-500',
      items: marketReady.map(p => ({ name: p.name, description: p.tagline }))
    },
    {
      title: 'Pipeline',
      subtitle: 'In Development',
      icon: Clock,
      color: 'bg-yellow-500',
      textColor: 'text-yellow-500',
      items: pipeline.map(p => ({ name: p.name, description: p.description }))
    },
    {
      title: 'Pilot Projects',
      subtitle: 'Field Trials',
      icon: Beaker,
      color: 'bg-blue-500',
      textColor: 'text-blue-500',
      items: pilots.map(p => ({ name: p.name, description: p.description }))
    }
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-black p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-neutral-700 bg-neutral-800/50 backdrop-blur mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
            <span className="text-xs font-bold text-neutral-300 tracking-wide uppercase">
              Innovation Roadmap
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Technology Pipeline
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            From lab prototype to mass manufacturing - our complete innovation journey
          </p>
        </motion.div>

        {/* Three-Column Roadmap */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sections.map((section, sectionIdx) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={sectionIdx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: sectionIdx * 0.2 }}
                className="flex flex-col"
              >
                {/* Section Header */}
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`${section.color} p-2 rounded-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-display font-bold text-white">
                        {section.title}
                      </h2>
                      <p className="text-sm text-neutral-400">{section.subtitle}</p>
                    </div>
                  </div>
                  <div className={`h-1 ${section.color} rounded-full mt-4`}></div>
                </div>

                {/* Items List */}
                <div className="space-y-4 flex-grow">
                  {section.items.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: sectionIdx * 0.2 + idx * 0.1 }}
                      className="bg-neutral-800/50 border border-neutral-700 p-4 rounded-lg hover:border-brand-500 transition-all group"
                    >
                      <h3 className={`font-display font-semibold ${section.textColor} mb-1 group-hover:text-brand-400 transition-colors`}>
                        {item.name}
                      </h3>
                      <p className="text-sm text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Count Badge */}
                <div className="mt-6 text-center">
                  <div className={`inline-block px-4 py-2 ${section.color} rounded-full`}>
                    <span className="text-white font-bold">{section.items.length}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-12 border-t border-neutral-700 grid grid-cols-3 gap-8 text-center"
        >
          <div>
            <div className="text-4xl font-bold text-white mb-2">10+</div>
            <div className="text-sm text-neutral-400">Total Innovations</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-brand-500 mb-2">4</div>
            <div className="text-sm text-neutral-400">Market-Ready</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">5</div>
            <div className="text-sm text-neutral-400">In Pipeline</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TechRoadmapV1;
