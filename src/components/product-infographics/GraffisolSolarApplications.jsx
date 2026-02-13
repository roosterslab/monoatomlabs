import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Building, Waves, Home, CheckCircle2, Zap } from 'lucide-react';

const GraffisolSolarApplications = () => {
  const [selectedApplication, setSelectedApplication] = useState('utility');

  const applications = {
    utility: {
      icon: Sun,
      name: 'Utility-Scale Plants',
      description: 'Large solar farms and power generation facilities',
      capacity: '1MW - 100MW+',
      benefits: [
        '10-12% energy output increase',
        '5-6°C operating temperature reduction',
        '30-40% soiling loss reduction',
        'Extended panel lifespan',
        '18-month payback period',
        'Field-validated performance',
      ],
      installation: {
        size: '50 MW Solar Park',
        location: 'Rajasthan',
        coating: '150,000 panels',
        energyGain: '+6,500 MWh/year',
        revenue: '₹3.25 Cr/year',
        payback: '16 months',
      },
    },
    commercial: {
      icon: Building,
      name: 'Commercial Rooftops',
      description: 'Office buildings, malls, warehouses with rooftop solar',
      capacity: '50kW - 500kW',
      benefits: [
        'Maximize limited roof space',
        'Urban dust & pollution resistance',
        'Reduced cleaning frequency',
        'Lower maintenance costs',
        'Enhanced aesthetic appeal',
        'ROI under 2 years',
      ],
      installation: {
        size: 'IT Park Complex',
        location: 'Bangalore',
        coating: '1,200 panels (300kW)',
        energyGain: '+39 MWh/year',
        revenue: '₹3.1 L/year',
        payback: '18 months',
      },
    },
    residential: {
      icon: Home,
      name: 'Residential Systems',
      description: 'Home solar installations and gated communities',
      capacity: '1kW - 10kW',
      benefits: [
        'Increased energy independence',
        'Lower electricity bills',
        'Self-cleaning properties',
        'Simple application process',
        'Long-lasting protection',
        'Eco-friendly solution',
      ],
      installation: {
        size: 'Residential Society',
        location: 'Mumbai',
        coating: '200 homes (5kW each)',
        energyGain: '+1.5 MWh/home/year',
        revenue: '₹12,000/home/year',
        payback: '15 months',
      },
    },
    floating: {
      icon: Waves,
      name: 'Floating Solar',
      description: 'Water surface installations with unique challenges',
      capacity: '500kW - 50MW',
      benefits: [
        'Hydrophobic water resistance',
        'High humidity performance',
        'Algae growth prevention',
        'Enhanced cooling effect',
        'Reduced water evaporation',
        'Specialized marine durability',
      ],
      installation: {
        size: 'Reservoir Floating Plant',
        location: 'Kerala',
        coating: '10,000 panels (3MW)',
        energyGain: '+390 MWh/year',
        revenue: '₹31.2 L/year',
        payback: '14 months',
      },
    },
  };

  const application = applications[selectedApplication];
  const Icon = application.icon;

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-900/20 via-black to-orange-900/20"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-yellow-500/30 bg-yellow-500/10 backdrop-blur mb-6">
            <Sun className="w-4 h-4 text-yellow-400" />
            <span className="text-xs font-mono text-yellow-400 tracking-widest uppercase">
              Solar Applications
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Graffisol Use Cases
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Explore Graffisol applications across diverse solar energy installations
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
                    ? 'bg-yellow-500/20 border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.3)]'
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
            <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-sm p-8 mb-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-sm border border-white/20">
                  <Icon className="w-12 h-12 text-yellow-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-display font-bold text-white mb-3">
                    {application.name}
                  </h3>
                  <p className="text-lg text-neutral-300 mb-4">{application.description}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-neutral-900/60 backdrop-blur rounded-sm border border-neutral-700">
                    <span className="text-neutral-400 font-mono text-sm">Typical Capacity:</span>
                    <span className="ml-2 font-bold text-white font-mono">{application.capacity}</span>
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
                  <CheckCircle2 className="w-6 h-6 text-yellow-400" />
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
                      <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-200 text-sm">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Installation Example */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-yellow-400" />
                  Installation Example
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-sm">
                    <div className="text-xs text-yellow-300 mb-1 font-mono uppercase tracking-wide">Installation</div>
                    <div className="text-xl font-display font-bold text-white">{application.installation.size}</div>
                    <div className="text-sm text-yellow-400 mt-1 font-mono">📍 {application.installation.location}</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-neutral-800/50 rounded-sm">
                      <div className="text-xs text-neutral-400 mb-1 font-mono">Coated Panels</div>
                      <div className="text-lg font-mono font-bold text-white">{application.installation.coating}</div>
                    </div>
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-sm">
                      <div className="text-xs text-green-300 mb-1 font-mono">Energy Gain</div>
                      <div className="text-lg font-mono font-bold text-green-400">{application.installation.energyGain}</div>
                    </div>
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-sm">
                      <div className="text-xs text-yellow-300 mb-1 font-mono">Annual Revenue</div>
                      <div className="text-lg font-mono font-bold text-yellow-400">{application.installation.revenue}</div>
                    </div>
                    <div className="p-4 bg-brand-500/10 border border-brand-500/30 rounded-sm">
                      <div className="text-xs text-brand-300 mb-1 font-mono">Payback Period</div>
                      <div className="text-lg font-mono font-bold text-brand-400">{application.installation.payback}</div>
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

export default GraffisolSolarApplications;
