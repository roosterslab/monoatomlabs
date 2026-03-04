import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Droplet, Wind, Zap, Layers, Battery } from 'lucide-react';

const TechPilotScale = () => {
  const pilotProjects = [
    {
      icon: Wind,
      name: 'Hydrogen Separation Membranes',
      description: 'High-selectivity graphene membranes for efficient hydrogen production',
      status: 'Field Trials',
      color: 'blue'
    },
    {
      icon: Droplet,
      name: 'Seawater Desalination',
      description: 'Ultra-thin membranes for low-energy water purification',
      status: 'Field Trials',
      color: 'cyan'
    },
    {
      icon: Droplet,
      name: 'Atmospheric Water Harvesting',
      description: 'Converting air into potable water efficiently',
      status: 'Field Trials',
      color: 'teal'
    },
    {
      icon: Layers,
      name: 'Graphene-Reinforced Glass Fibres',
      description: 'Enhanced composites for structural applications',
      status: 'Field Trials',
      color: 'purple'
    },
    {
      icon: Battery,
      name: 'Graphene Battery Storage',
      description: 'Higher power density with extended lifecycle',
      status: 'Field Trials',
      color: 'amber'
    }
  ];

  const colorClasses = {
    blue: { bg: 'from-blue-600/20 to-blue-800/20', border: 'border-blue-500', icon: 'text-blue-400' },
    cyan: { bg: 'from-cyan-600/20 to-cyan-800/20', border: 'border-cyan-500', icon: 'text-cyan-400' },
    teal: { bg: 'from-teal-600/20 to-teal-800/20', border: 'border-teal-500', icon: 'text-teal-400' },
    purple: { bg: 'from-purple-600/20 to-purple-800/20', border: 'border-purple-500', icon: 'text-purple-400' },
    amber: { bg: 'from-amber-600/20 to-amber-800/20', border: 'border-amber-500', icon: 'text-amber-400' }
  };

  return (
    <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-white/10 border border-white/20 rounded-full px-6 py-2 text-white font-semibold mb-6 flex items-center gap-2 justify-center">
            <FlaskConical className="w-5 h-5" />
            Pilot-Scale Technologies
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            Field Trials Advancing to Market
          </h2>
          <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
            Five breakthrough technologies in real-world field testing, moving from pilot to commercial scale
          </p>
        </motion.div>

        {/* Pilot Projects - Actual Production Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pilotProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`bg-gradient-to-br ${colorClasses[project.color].bg} backdrop-blur border-2 ${colorClasses[project.color].border} rounded-2xl p-6 hover:scale-105 transition-transform`}
            >
              <div className="flex items-start justify-between mb-4">
                <project.icon className={`w-12 h-12 ${colorClasses[project.color].icon}`} />
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold">
                  {project.status}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3">{project.name}</h3>
              <p className="text-neutral-300 leading-relaxed">{project.description}</p>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur border-2 border-white/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform"
          >
            <h3 className="text-2xl font-bold mb-3">Want to Learn More?</h3>
            <p className="text-neutral-300 mb-4">Explore our complete pilot technology portfolio</p>
            <a
              href="/technology/pilot-projects"
              className="px-6 py-3 bg-white text-neutral-900 font-bold rounded-lg hover:bg-neutral-100 transition-colors"
            >
              View Pilot Projects
            </a>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-8 text-center"
        >
          <h3 className="text-2xl font-bold mb-3">From Lab Prototype to Industrial Scale</h3>
          <p className="text-lg text-neutral-300 max-w-4xl mx-auto">
            Each pilot technology undergoes rigorous field testing and validation before commercialization.
            We ensure every innovation can scale from prototype to mass manufacturing with proven performance.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TechPilotScale;
