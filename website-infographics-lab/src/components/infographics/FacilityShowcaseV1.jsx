import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, FlaskConical, TestTube, Zap, Gauge, Thermometer } from 'lucide-react';
import { facilities } from '../../data/monoatomData';

const FacilityShowcaseV1 = () => {
  const equipmentIcons = {
    'Surface chemistry modification': FlaskConical,
    'Advanced characterization (SEM, TEM, Raman)': Microscope,
    'Pilot-scale dispersion & functionalization units': TestTube,
    'Mechanical & durability testing': Gauge,
    'Thermal & electrical conductivity labs': Thermometer,
    'Prototype fabrication & field-simulation': Zap
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-neutral-900 to-black p-8 md:p-16">
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
              R&D Infrastructure
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            State-of-the-Art Facilities
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Advanced laboratories enabling breakthrough innovations from lab prototype to mass manufacturing
          </p>
        </motion.div>

        {/* Facility Count */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-brand-500 text-white px-16 py-10 rounded-2xl shadow-2xl">
            <div className="text-8xl font-bold mb-3">2</div>
            <div className="text-2xl font-display">World-Class Facilities</div>
          </div>
        </motion.div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {facilities.map((facility, idx) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, x: idx === 0 ? -40 : 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.2 }}
              className="bg-neutral-800/50 border-2 border-neutral-700 rounded-xl p-8 hover:border-brand-500 transition-all group"
            >
              {/* Facility Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    {idx + 1}
                  </div>
                  <h2 className="text-2xl font-display font-bold text-white group-hover:text-brand-400 transition-colors">
                    {facility.name.replace('Facility 0' + (idx + 1) + ': ', '')}
                  </h2>
                </div>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  {facility.focus}
                </p>
              </div>

              {/* Capabilities */}
              <div className="space-y-4">
                <div className="text-sm text-neutral-500 uppercase tracking-wider mb-3">
                  Core Capabilities
                </div>
                {facility.capabilities.map((capability, capIdx) => {
                  const Icon = equipmentIcons[capability] || FlaskConical;
                  return (
                    <div key={capIdx} className="flex items-start gap-4 bg-neutral-900/50 p-4 rounded-lg">
                      <div className="bg-brand-500/20 p-2 rounded-lg flex-shrink-0">
                        <Icon className="w-5 h-5 text-brand-400" />
                      </div>
                      <span className="text-neutral-300 leading-relaxed">{capability}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Equipment Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur"
        >
          <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
            Advanced Characterization Equipment
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['SEM', 'TEM', 'Raman', 'XRD', 'BET', 'UTM'].map((equipment, idx) => (
              <motion.div
                key={equipment}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + idx * 0.1 }}
                className="bg-neutral-800 border border-neutral-700 rounded-lg p-6 text-center hover:border-brand-500 hover:bg-neutral-700 transition-all"
              >
                <div className="text-3xl font-bold font-mono text-brand-400 mb-2">
                  {equipment}
                </div>
                <div className="text-xs text-neutral-500 uppercase tracking-wider">
                  {equipment === 'SEM' && 'Scanning Electron Microscopy'}
                  {equipment === 'TEM' && 'Transmission Electron Microscopy'}
                  {equipment === 'Raman' && 'Raman Spectroscopy'}
                  {equipment === 'XRD' && 'X-Ray Diffraction'}
                  {equipment === 'BET' && 'Surface Area Analysis'}
                  {equipment === 'UTM' && 'Universal Testing Machine'}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16 pt-12 border-t border-neutral-700"
        >
          <p className="text-neutral-500">
            Bridging deep scientific expertise with real-world industrial deployment
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FacilityShowcaseV1;
