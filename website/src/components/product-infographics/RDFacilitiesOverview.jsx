import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Microscope, FlaskConical, Zap, CheckCircle2 } from 'lucide-react';

const RDFacilitiesOverview = () => {
  const [selectedFacility, setSelectedFacility] = useState('nanomaterials');

  const facilities = {
    nanomaterials: {
      id: 'facility-01',
      name: 'Nanomaterials R&D Facility',
      icon: Microscope,
      color: 'brand',
      focus: 'Graphene processing, dispersion technologies, nano-additive development',
      location: 'Primary Research Center',
      capabilities: [
        'Surface chemistry modification',
        'Advanced characterization (SEM, TEM, Raman)',
        'Pilot-scale dispersion & functionalization units',
        'Quality control & batch consistency',
        'Process optimization & scale-up',
        'Formulation development',
      ],
      equipment: [
        { name: 'Scanning Electron Microscope (SEM)', purpose: 'Nanoscale imaging & analysis' },
        { name: 'Transmission Electron Microscope (TEM)', purpose: 'Atomic-scale characterization' },
        { name: 'Raman Spectroscopy', purpose: 'Material composition analysis' },
        { name: 'Dispersion Systems', purpose: 'Pilot-scale production' },
        { name: 'Surface Analysis Tools', purpose: 'Chemical characterization' },
      ],
      achievements: [
        '10+ product formulations developed',
        '5 commercial-scale processes',
        'NABL certified testing',
      ],
    },
    application: {
      id: 'facility-02',
      name: 'Application & Testing Facility',
      icon: FlaskConical,
      color: 'purple',
      focus: 'Real-industry testing across multiple sectors',
      location: 'Application Testing Center',
      capabilities: [
        'Mechanical & durability testing',
        'Thermal & electrical conductivity labs',
        'Prototype fabrication & field-simulation',
        'Performance validation',
        'Quality assurance testing',
        'Customer sample development',
      ],
      equipment: [
        { name: 'Universal Testing Machine (UTM)', purpose: 'Mechanical property testing' },
        { name: 'Concrete Testing Lab', purpose: 'Compressive & flexural strength' },
        { name: 'Solar Simulator', purpose: 'Photovoltaic performance testing' },
        { name: 'Environmental Chambers', purpose: 'Durability & aging tests' },
        { name: 'Thermal Analysis', purpose: 'Temperature performance' },
      ],
      achievements: [
        '1000+ samples tested',
        'Field-validated results',
        'Customer-specific solutions',
      ],
    },
  };

  const facility = facilities[selectedFacility];
  const Icon = facility.icon;

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6">
            <Building2 className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
              Research Infrastructure
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            R&D Facilities
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            State-of-the-art laboratories equipped for breakthrough nanomaterial research and commercialization
          </p>
        </motion.div>

        {/* Facility Selector */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-4xl mx-auto">
          {Object.entries(facilities).map(([key, value]) => {
            const FacilityIcon = value.icon;
            return (
              <motion.button
                key={key}
                onClick={() => setSelectedFacility(key)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`p-8 rounded-sm transition-all border text-left ${
                  selectedFacility === key
                    ? 'bg-brand-500/20 border-brand-500/50 shadow-[0_0_30px_rgba(13,148,136,0.3)]'
                    : 'bg-neutral-900/80 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-sm ${selectedFacility === key ? 'bg-brand-500/20 border border-brand-500/30' : 'bg-neutral-800/50'}`}>
                    <FacilityIcon className={`w-8 h-8 ${selectedFacility === key ? 'text-brand-400' : 'text-neutral-400'}`} />
                  </div>
                  <div className="flex-grow">
                    <h3 className={`text-xl font-display font-bold mb-2 ${selectedFacility === key ? 'text-white' : 'text-neutral-400'}`}>
                      {value.name}
                    </h3>
                    <p className="text-sm text-neutral-500 font-mono">{value.location}</p>
                  </div>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Facility Details */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFacility}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header Card */}
            <div className="bg-gradient-to-r from-brand-500/20 to-purple-500/20 border border-brand-500/30 rounded-sm p-8 mb-8">
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/10 rounded-sm border border-white/20">
                  <Icon className="w-12 h-12 text-brand-400" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-3xl font-display font-bold text-white mb-3">
                    {facility.name}
                  </h3>
                  <p className="text-lg text-neutral-300 mb-4">{facility.focus}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-neutral-900/60 backdrop-blur rounded-sm border border-neutral-700">
                    <span className="text-neutral-400 font-mono text-sm">{facility.location}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Capabilities */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-brand-400" />
                  Core Capabilities
                </h3>
                <div className="space-y-3">
                  {facility.capabilities.map((capability, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="flex items-start gap-3 p-3 bg-neutral-800/50 rounded-sm hover:bg-neutral-800 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-brand-400 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-200 text-sm">{capability}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Equipment */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6"
              >
                <h3 className="text-2xl font-display font-bold text-white mb-6 flex items-center gap-2">
                  <Zap className="w-6 h-6 text-brand-400" />
                  Key Equipment
                </h3>
                <div className="space-y-4">
                  {facility.equipment.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      className="p-4 bg-neutral-800/50 rounded-sm border border-neutral-700 hover:border-brand-500/30 transition-all"
                    >
                      <h4 className="text-white font-mono font-semibold mb-1">{item.name}</h4>
                      <p className="text-sm text-neutral-400">{item.purpose}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-sm p-8"
            >
              <h3 className="text-2xl font-display font-bold text-white mb-6 text-center">
                Key Achievements
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {facility.achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                    className="text-center p-6 bg-neutral-900/60 backdrop-blur border border-neutral-700 rounded-sm"
                  >
                    <div className="text-2xl font-mono font-bold text-green-400 mb-2">
                      ✓
                    </div>
                    <div className="text-neutral-200 font-mono text-sm">{achievement}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-8 text-center"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            World-Class Research Infrastructure
          </h3>
          <p className="text-neutral-300 max-w-3xl mx-auto mb-6">
            Our two state-of-the-art facilities enable the full innovation cycle - from fundamental
            nanomaterial research to commercial-scale production and industry-specific application testing.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-mono font-bold text-brand-400 mb-1">2</div>
              <div className="text-xs text-neutral-400 font-mono uppercase">Facilities</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-brand-400 mb-1">15+</div>
              <div className="text-xs text-neutral-400 font-mono uppercase">Equipment Types</div>
            </div>
            <div>
              <div className="text-3xl font-mono font-bold text-brand-400 mb-1">NABL</div>
              <div className="text-xs text-neutral-400 font-mono uppercase">Certified</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RDFacilitiesOverview;
