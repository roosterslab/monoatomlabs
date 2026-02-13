import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Shield, FileCheck, Microscope, TrendingUp } from 'lucide-react';

const CertificationDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const certifications = [
    {
      category: 'Quality',
      name: 'NABL Accreditation',
      description: 'National Accreditation Board for Testing and Calibration Laboratories',
      status: 'Certified',
      validUntil: '2027',
      icon: Shield,
      color: 'from-green-500 to-teal-500',
    },
    {
      category: 'Product',
      name: 'Graphacrete M50 Performance',
      description: 'NABL certified M30 + Graphacrete ≈ M50 strength validation',
      status: 'Validated',
      validUntil: 'Ongoing',
      icon: FileCheck,
      color: 'from-purple-500 to-pink-500',
    },
    {
      category: 'Testing',
      name: 'Advanced Characterization Lab',
      description: 'Equipped with SEM, TEM, Raman, XRD, BET, UTM for comprehensive testing',
      status: 'Operational',
      validUntil: 'Ongoing',
      icon: Microscope,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Product',
      name: 'Graffisol Field Validation',
      description: '1+ MW solar installations with 10-12% energy output increase',
      status: 'Field-Tested',
      validUntil: 'Ongoing',
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  const testingCapabilities = [
    {
      equipment: 'SEM (Scanning Electron Microscopy)',
      purpose: 'Surface morphology and microstructure analysis',
      applications: 'Graphene dispersion, concrete structure, coating quality',
    },
    {
      equipment: 'TEM (Transmission Electron Microscopy)',
      purpose: 'Atomic-level structure visualization',
      applications: 'Graphene layer quality, nano-composite analysis',
    },
    {
      equipment: 'Raman Spectroscopy',
      purpose: 'Molecular structure and graphene quality verification',
      applications: 'Ceraphene quality control, product authenticity',
    },
    {
      equipment: 'XRD (X-Ray Diffraction)',
      purpose: 'Crystal structure and phase identification',
      applications: 'Concrete composition, material purity',
    },
    {
      equipment: 'BET (Surface Area Analysis)',
      purpose: 'Surface area and porosity measurement',
      applications: 'Graphene characterization, quality metrics',
    },
    {
      equipment: 'UTM (Universal Testing Machine)',
      purpose: 'Mechanical strength and elongation testing',
      applications: 'Concrete compressive strength, HD-G-PE flexibility',
    },
  ];

  const qualityMetrics = [
    { label: 'Tests Conducted', value: '10,000+', icon: CheckCircle2 },
    { label: 'Products Certified', value: '4', icon: Award },
    { label: 'Testing Equipment', value: '6+', icon: Microscope },
    { label: 'Quality Score', value: '95%', icon: TrendingUp },
  ];

  const filteredCerts = selectedCategory === 'all'
    ? certifications
    : certifications.filter(c => c.category === selectedCategory);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-green-500/50 bg-green-500/10 backdrop-blur mb-6">
            <Shield className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="text-xs font-bold text-green-400 tracking-wide uppercase">
              Certifications & Quality
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Quality Assurance
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            NABL-certified testing and comprehensive quality control systems
          </p>
        </motion.div>

        {/* Quality Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {qualityMetrics.map((metric, idx) => {
            const Icon = metric.icon;
            return (
              <div
                key={idx}
                className="bg-gradient-to-br from-brand-500/20 to-green-500/20 border-2 border-brand-500/30 backdrop-blur p-6 rounded-xl text-center"
              >
                <Icon className="w-10 h-10 text-brand-400 mx-auto mb-3" />
                <div className="text-3xl font-bold text-white mb-1">{metric.value}</div>
                <div className="text-xs text-neutral-400 uppercase tracking-wide">{metric.label}</div>
              </div>
            );
          })}
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['all', 'Quality', 'Product', 'Testing'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-brand-500 text-white shadow-lg'
                  : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
              }`}
            >
              {category === 'all' ? 'All Certifications' : category}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {filteredCerts.map((cert, idx) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-neutral-800/50 border-2 border-neutral-700 rounded-xl p-6 hover:border-brand-500 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${cert.color}`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-display font-bold text-white">
                        {cert.name}
                      </h3>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full">
                        {cert.status}
                      </span>
                    </div>
                    <p className="text-neutral-400 text-sm leading-relaxed mb-3">
                      {cert.description}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-neutral-500">
                      <div className="flex items-center gap-1">
                        <span className="w-2 h-2 bg-brand-500 rounded-full"></span>
                        <span>{cert.category}</span>
                      </div>
                      <div>Valid: {cert.validUntil}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Testing Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-neutral-800/50 border-2 border-neutral-700 rounded-xl p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <Microscope className="w-8 h-8 text-brand-400" />
            <h2 className="text-2xl font-display font-bold text-white">
              Testing & Characterization Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {testingCapabilities.map((test, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.05 }}
                className="bg-neutral-900/50 border border-neutral-700 p-5 rounded-lg hover:border-brand-500 transition-all"
              >
                <h4 className="text-brand-400 font-semibold mb-2">{test.equipment}</h4>
                <p className="text-sm text-neutral-400 mb-2">{test.purpose}</p>
                <div className="text-xs text-neutral-500">
                  <span className="font-semibold text-neutral-400">Applications:</span> {test.applications}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* NABL Certification Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-gradient-to-r from-green-500/20 to-teal-500/20 border-2 border-green-500/50 rounded-xl p-8 text-center"
        >
          <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
          <h3 className="text-3xl font-display font-bold text-white mb-3">
            NABL Accredited Laboratory
          </h3>
          <p className="text-lg text-green-100 max-w-2xl mx-auto mb-4">
            Our state-of-the-art testing facilities are accredited by the National Accreditation Board for Testing and Calibration Laboratories (NABL)
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-green-200">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>ISO/IEC 17025:2017</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>Independent Third-Party Validation</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-400" />
              <span>International Standards Compliance</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CertificationDashboard;
