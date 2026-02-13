import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Package, Film, Layers, ShoppingBag, CheckCircle2, TrendingUp } from 'lucide-react';

const HDGPEPolymerApplications = () => {
  const [selectedApplication, setSelectedApplication] = useState('pipes');

  const applications = {
    pipes: {
      icon: Layers,
      name: 'HDPE Pipes & Tubes',
      description: 'Water supply, drainage, and industrial piping applications',
      properties: '30% Tensile ⚡ 20× Elongation ⚡ 20% Lifespan',
      benefits: [
        '+30% tensile and flexural strength',
        '20× better elongation at break',
        '+20% extended product lifespan',
        'Superior UV stability',
        'Excellent impact resistance',
        'Reduced failure rates',
      ],
      useCase: {
        application: 'Municipal Water Supply',
        sector: 'Infrastructure',
        volume: '500 tons/year',
        improvement: '30% tensile strength',
        benefit: '+5 years lifespan',
        roi: '180%',
      },
    },
    films: {
      icon: Film,
      name: 'Films & Sheets',
      description: 'Flexible packaging, agricultural films, and industrial sheets',
      properties: '22× Elongation ⚡ 25% Lifespan ⚡ High Clarity',
      benefits: [
        '22× elongation improvement',
        '+25% product lifespan extension',
        'Enhanced tear resistance',
        'Superior optical properties',
        'Better barrier properties',
        'Reduced film thickness possible',
      ],
      useCase: {
        application: 'Agricultural Greenhouse Films',
        sector: 'Agriculture',
        volume: '300 tons/year',
        improvement: '22× elongation',
        benefit: '+25% durability',
        roi: '200%',
      },
    },
    packaging: {
      icon: Package,
      name: 'Packaging Materials',
      description: 'Consumer goods packaging, industrial packaging, containers',
      properties: '20× Elongation ⚡ 20% Lifespan ⚡ Premium Quality',
      benefits: [
        '20× better elongation performance',
        '+20% extended product life',
        'Improved drop impact resistance',
        'Enhanced processability',
        'Premium market positioning',
        'Cost-effective enhancement',
      ],
      useCase: {
        application: 'Industrial Container Production',
        sector: 'Manufacturing',
        volume: '400 tons/year',
        improvement: '20× elongation',
        benefit: '+15% premium',
        roi: '165%',
      },
    },
    bags: {
      icon: ShoppingBag,
      name: 'Carry Bags & Pouches',
      description: 'Shopping bags, industrial bags, and flexible packaging pouches',
      properties: '20× Elongation ⚡ Tear Resistant ⚡ Eco-Friendly',
      benefits: [
        'Significantly improved tear strength',
        'Enhanced load-bearing capacity',
        '20× elongation improvement',
        'Thinner gauges possible',
        'Material cost savings',
        'Sustainable alternative',
      ],
      useCase: {
        application: 'Retail Shopping Bags',
        sector: 'Retail',
        volume: '200 tons/year',
        improvement: '40% tear strength',
        benefit: 'Reduced gauge',
        roi: '150%',
      },
    },
  };

  const application = applications[selectedApplication];
  const Icon = application.icon;

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-blue-900/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-cyan-500/30 bg-cyan-500/10 backdrop-blur mb-6">
            <Package className="w-4 h-4 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              Polymer Applications
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            HD-G-PE Applications
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Explore HD-G-PE enhanced polymer applications across industries
          </p>
        </motion.div>

        {/* Application Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(applications).map(([key, value]) => {
            const AppIcon = value.icon;
            return (
              <motion.button
                key={key}
                onClick={() => setSelectedApplication(key)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`p-6 rounded-sm transition-all border ${
                  selectedApplication === key
                    ? 'bg-cyan-500/20 border-cyan-500/50 shadow-[0_0_20px_rgba(6,182,212,0.3)]'
                    : 'bg-neutral-900/80 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700'
                }`}
              >
                <AppIcon className="w-10 h-10 text-white mx-auto mb-3" />
                <div className="text-white font-mono text-sm text-center">{value.name}</div>
              </motion.button>
            );
          })}
        </div>

        {/* Application Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedApplication}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header Card */}
            <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-sm p-8 mb-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-sm border border-white/20">
                  <Icon className="w-12 h-12 text-cyan-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-display font-bold text-white mb-3">
                    {application.name}
                  </h3>
                  <p className="text-lg text-neutral-300 mb-4">{application.description}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-neutral-900/60 backdrop-blur rounded-sm border border-neutral-700">
                    <span className="text-cyan-400 font-mono text-sm">{application.properties}</span>
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
                className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-cyan-400" />
                  Key Benefits
                </h3>
                <div className="space-y-3">
                  {application.benefits.map((benefit, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="flex items-start gap-3 p-3 bg-neutral-800/50 rounded-sm hover:bg-neutral-800 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-200 text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Use Case */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-cyan-400" />
                  Industry Use Case
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-sm">
                    <div className="text-xs text-cyan-300 mb-1 font-mono uppercase tracking-wide">Application</div>
                    <div className="text-xl font-display font-bold text-white">{application.useCase.application}</div>
                    <div className="text-sm text-cyan-400 mt-1 font-mono">🏭 {application.useCase.sector}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-neutral-800/50 rounded-sm">
                      <div className="text-xs text-neutral-400 mb-1 font-mono">Volume</div>
                      <div className="text-lg font-mono font-bold text-white">{application.useCase.volume}</div>
                    </div>
                    <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-sm">
                      <div className="text-xs text-cyan-300 mb-1 font-mono">Improvement</div>
                      <div className="text-lg font-mono font-bold text-cyan-400">{application.useCase.improvement}</div>
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-sm">
                      <div className="text-xs text-green-300 mb-1 font-mono">Key Benefit</div>
                      <div className="text-lg font-mono font-bold text-green-400">{application.useCase.benefit}</div>
                    </div>
                    <div className="p-4 bg-brand-500/10 border border-brand-500/30 rounded-sm">
                      <div className="text-xs text-brand-300 mb-1 font-mono">ROI</div>
                      <div className="text-lg font-mono font-bold text-brand-400">{application.useCase.roi}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default HDGPEPolymerApplications;
