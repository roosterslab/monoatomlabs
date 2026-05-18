import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Zap, CheckCircle2, Clock } from 'lucide-react';
import { mapWithVisibleProducts } from '../../utils/productVisibility';

const InnovationPipelineTimeline = () => {
  const timeline = mapWithVisibleProducts([
    {
      phase: 'Commercial Ready',
      status: 'active',
      icon: CheckCircle2,
      iconColor: 'text-green-400',
      borderColor: 'border-green-500/50',
      bgGradient: 'from-green-500/20 to-teal-500/20',
      products: [
        { name: 'Graphacrete', description: 'High-Performance Concrete Additive', status: 'Deployed at scale' },
        { name: 'Graffisol', description: 'Solar Panel Coating', status: '1+ MW installations' },
        { name: 'Ceraphene', description: 'Ceramic Coating', status: 'Market ready' },
        { name: 'HD-G-PE', description: 'Polymer Enhancer', status: 'Commercial production' },
      ],
    },
    {
      phase: 'Pipeline Products',
      status: 'development',
      icon: Rocket,
      iconColor: 'text-brand-400',
      borderColor: 'border-brand-500/50',
      bgGradient: 'from-brand-500/20 to-cyan-500/20',
      products: [
        { name: 'Rustene', description: 'Anti-Corrosion Paint', status: 'Product development' },
        { name: 'Graphyre', description: 'Tire Technology', status: 'Prototype testing' },
        { name: 'Graphosite', description: 'Advanced Composites', status: 'Material R&D' },
        { name: 'Thermaphene', description: 'Heating Solutions', status: 'Lab validation' },
        { name: 'Armophene', description: 'Protective Armor', status: 'Concept validation' },
      ],
    },
    {
      phase: 'Pilot Technologies',
      status: 'research',
      icon: Zap,
      iconColor: 'text-purple-400',
      borderColor: 'border-purple-500/50',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      products: [
        { name: 'Hydrogen Membranes', description: 'High-selectivity separation', status: 'Pilot scale' },
        { name: 'Seawater Desalination', description: 'Ultra-thin membranes', status: 'Field trials' },
        { name: 'Atmospheric Water Harvesting', description: 'Air to water conversion', status: 'Pilot testing' },
        { name: 'Glass Fibres', description: 'Graphene-reinforced composites', status: 'Material testing' },
        { name: 'Battery Storage', description: 'High power density', status: 'Lab scale' },
      ],
    },
    {
      phase: 'Future Innovations',
      status: 'concept',
      icon: Clock,
      iconColor: 'text-yellow-400',
      borderColor: 'border-yellow-500/50',
      bgGradient: 'from-yellow-500/20 to-orange-500/20',
      products: [
        { name: 'Advanced Sensors', description: 'IoT & environmental monitoring', status: 'Research phase' },
        { name: 'Biomedical Applications', description: 'Drug delivery & diagnostics', status: 'Exploratory' },
        { name: 'Energy Storage', description: 'Next-gen supercapacitors', status: 'Early research' },
      ],
    },
  ]);

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
            <Rocket className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
              Innovation Pipeline
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Technology Roadmap
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            From commercial products to cutting-edge research - our continuous innovation pipeline
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12">
          {timeline.map((phase, phaseIdx) => {
            const Icon = phase.icon;
            return (
              <motion.div
                key={phaseIdx}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: phaseIdx * 0.2, duration: 0.6 }}
                className="relative"
              >
                {/* Connecting line */}
                {phaseIdx < timeline.length - 1 && (
                  <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-neutral-700 to-transparent hidden md:block"></div>
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Phase Header */}
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className={`bg-gradient-to-br ${phase.bgGradient} border ${phase.borderColor} p-6 rounded-sm backdrop-blur sticky top-32`}>
                      <Icon className={`w-12 h-12 ${phase.iconColor} mb-4`} />
                      <h3 className="text-2xl font-display font-bold text-white mb-2">
                        {phase.phase}
                      </h3>
                      <div className={`inline-flex px-3 py-1 rounded-sm ${phase.bgGradient} border ${phase.borderColor} text-xs font-mono uppercase tracking-wider text-white`}>
                        {phase.status}
                      </div>
                    </div>
                  </div>

                  {/* Products Grid */}
                  <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {phase.products.map((product, productIdx) => (
                      <motion.div
                        key={productIdx}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: phaseIdx * 0.2 + productIdx * 0.1 + 0.2 }}
                        className="bg-neutral-900/80 backdrop-blur border border-neutral-800 p-6 rounded-sm hover:border-brand-500/50 transition-all group"
                      >
                        <h4 className="text-lg font-display font-bold text-white mb-2 group-hover:text-brand-400 transition-colors">
                          {product.name}
                        </h4>
                        <p className="text-sm text-neutral-400 mb-3">
                          {product.description}
                        </p>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-800/50 rounded-sm">
                          <div className={`w-2 h-2 rounded-full ${phase.iconColor.replace('text-', 'bg-')}`}></div>
                          <span className="text-xs text-neutral-400 font-mono">{product.status}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 bg-gradient-to-r from-brand-500/10 to-purple-500/10 border border-brand-500/30 rounded-sm p-8 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Continuous Innovation
          </h3>
          <p className="text-neutral-300 max-w-3xl mx-auto mb-6">
            Monoatom Labs maintains an active pipeline of 15+ innovations across commercial products,
            development stage technologies, and cutting-edge research initiatives.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <div>
              <div className="text-3xl font-mono font-bold text-green-400 mb-1">5+</div>
              <div className="text-xs text-neutral-400 font-mono uppercase">Commercial Products</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-brand-400 mb-1">5</div>
              <div className="text-xs text-neutral-400 font-mono uppercase">Pipeline Products</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-purple-400 mb-1">5</div>
              <div className="text-xs text-neutral-400 font-mono uppercase">Pilot Technologies</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InnovationPipelineTimeline;
