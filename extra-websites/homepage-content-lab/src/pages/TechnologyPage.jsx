import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Atom, Microscope, Factory, Award, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';

const TechnologyPage = () => {
  const [selectedPillar, setSelectedPillar] = useState('synthesis');

  const technologyPillars = {
    synthesis: {
      name: 'Graphene Synthesis',
      icon: Atom,
      tagline: 'Proprietary Production Methods',
      description: 'Advanced synthesis techniques producing high-purity graphene at commercial scale',
      capabilities: [
        'CVD (Chemical Vapor Deposition) expertise',
        'Liquid-phase exfoliation methods',
        'Quality control at molecular level',
        'Scalable batch production',
      ],
      metrics: [
        { value: '>99%', label: 'Purity Achieved' },
        { value: '1-10nm', label: 'Layer Control' },
        { value: 'Commercial', label: 'Production Scale' },
      ],
    },
    dispersion: {
      name: 'Nano-Dispersion',
      icon: Microscope,
      tagline: 'Uniform Distribution Technology',
      description: 'Proprietary methods for stable, uniform dispersion of graphene in various matrices',
      capabilities: [
        'Surfactant-free dispersion methods',
        'Matrix-specific optimization',
        'Long-term stability testing',
        'Quality verification protocols',
      ],
      metrics: [
        { value: '<100nm', label: 'Particle Size' },
        { value: '6+ months', label: 'Stability' },
        { value: 'Multiple', label: 'Matrix Types' },
      ],
    },
    formulation: {
      name: 'Product Formulation',
      icon: Factory,
      tagline: 'Application-Specific Engineering',
      description: 'Tailored formulations optimized for specific industry applications',
      capabilities: [
        'Industry-specific formulations',
        'Performance optimization',
        'Cost-effectiveness engineering',
        'Manufacturing compatibility',
      ],
      metrics: [
        { value: '4', label: 'Commercial Products' },
        { value: '3', label: 'Industries Served' },
        { value: 'NABL', label: 'Certified Testing' },
      ],
    },
    validation: {
      name: 'Testing & Validation',
      icon: Award,
      tagline: 'Rigorous Quality Assurance',
      description: 'NABL-certified testing and comprehensive field validation',
      capabilities: [
        'NABL-accredited testing lab',
        'Third-party verification',
        'Field performance monitoring',
        'Long-term degradation studies',
      ],
      metrics: [
        { value: 'NABL', label: 'Certified Lab' },
        { value: '50+', label: 'Field Projects' },
        { value: '3 Years', label: 'Track Record' },
      ],
    },
  };

  const innovationPipeline = [
    {
      stage: 'Research',
      products: 2,
      timeline: '12-18 months',
      description: 'Novel graphene applications in development',
      status: 'active',
    },
    {
      stage: 'Development',
      products: 3,
      timeline: '6-12 months',
      description: 'Formulation optimization and scale-up',
      status: 'active',
    },
    {
      stage: 'Validation',
      products: 2,
      timeline: '3-6 months',
      description: 'Field testing and certification',
      status: 'active',
    },
    {
      stage: 'Commercial',
      products: 4,
      timeline: 'Active',
      description: 'Market-ready products',
      status: 'complete',
    },
  ];

  const facilities = [
    {
      name: 'R&D Laboratory',
      location: 'IIT Ahmedabad Campus',
      capabilities: [
        'Graphene synthesis equipment',
        'Material characterization tools',
        'Formulation development lab',
        'Quality testing instruments',
      ],
    },
    {
      name: 'NABL-Certified Testing Lab',
      location: 'Ahmedabad',
      capabilities: [
        'Mechanical property testing',
        'Chemical analysis',
        'Performance validation',
        'Third-party certification',
      ],
    },
    {
      name: 'Pilot Production Facility',
      location: 'Ahmedabad',
      capabilities: [
        'Small-batch production',
        'Process optimization',
        'Quality control systems',
        'Customer trials support',
      ],
    },
  ];

  const differentiators = [
    {
      title: 'Lab-to-Market Integration',
      description: 'Seamless transition from R&D to commercial production',
      benefit: 'Faster time-to-market, consistent quality',
    },
    {
      title: 'Industry-Specific Expertise',
      description: 'Deep understanding of application requirements',
      benefit: 'Optimized performance for each use case',
    },
    {
      title: 'Rigorous Validation',
      description: 'NABL certification + extensive field testing',
      benefit: 'Proven reliability, customer confidence',
    },
    {
      title: 'Scalable Processes',
      description: 'Production methods designed for commercial scale',
      benefit: 'Consistent quality at volume',
    },
  ];

  const currentPillar = technologyPillars[selectedPillar];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Atom className="w-6 h-6" />
              <span className="font-bold text-lg">Technology Platform</span>
            </div>
            <div className="text-sm text-neutral-500">Content Lab</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Technology Platform
            </h1>
            <p className="text-2xl text-white/90 mb-12">
              Bridging the gap between laboratory breakthrough and commercial reality
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-white/80">Technology Pillars</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">NABL</div>
                <div className="text-white/80">Certified Lab</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-white/80">Years R&D</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-white/80">Field Projects</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pillar Selector */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4 text-center">
            Four Technology Pillars
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {Object.entries(technologyPillars).map(([key, pillar]) => (
              <button
                key={key}
                onClick={() => setSelectedPillar(key)}
                className={`p-4 rounded-lg text-left transition-all ${
                  selectedPillar === key
                    ? 'bg-black text-white'
                    : 'bg-white border border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <pillar.icon className="w-8 h-8 mb-2" strokeWidth={1.5} />
                <div className="font-bold text-sm">{pillar.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Pillar Details */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={selectedPillar}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              {React.createElement(currentPillar.icon, {
                className: 'w-16 h-16 text-black',
                strokeWidth: 1.5,
              })}
              <div>
                <h2 className="text-4xl font-bold text-black">{currentPillar.name}</h2>
                <p className="text-xl text-neutral-600">{currentPillar.tagline}</p>
              </div>
            </div>

            <p className="text-lg text-neutral-700 mb-12">{currentPillar.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {currentPillar.metrics.map((metric, index) => (
                <div key={index} className="bg-neutral-50 rounded-xl p-6 text-center">
                  <div className="text-3xl font-bold text-black mb-2">{metric.value}</div>
                  <div className="text-neutral-600">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-8 border border-neutral-200">
              <h3 className="text-2xl font-bold text-black mb-6">Key Capabilities</h3>
              <div className="space-y-3">
                {currentPillar.capabilities.map((capability, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-neutral-700">{capability}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Innovation Pipeline */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Innovation Pipeline</h2>
            <p className="text-xl text-neutral-600">
              From research to commercial products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {innovationPipeline.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-xl p-6 ${
                  stage.status === 'complete'
                    ? 'bg-green-50 border-2 border-green-500'
                    : 'bg-white border border-neutral-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-black">{stage.stage}</h3>
                  {stage.status === 'complete' && (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  )}
                </div>
                <div className="text-3xl font-bold text-black mb-2">{stage.products}</div>
                <div className="text-sm text-neutral-600 mb-4">Products</div>
                <div className="text-sm text-neutral-700 mb-4">{stage.description}</div>
                <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                  Timeline: {stage.timeline}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Our Facilities</h2>
            <p className="text-xl text-neutral-600">
              State-of-the-art infrastructure for R&D and production
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200"
              >
                <h3 className="text-2xl font-bold text-black mb-2">{facility.name}</h3>
                <div className="text-sm text-neutral-500 mb-6">{facility.location}</div>
                <div className="space-y-2">
                  {facility.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{cap}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiators */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">Technology Differentiators</h2>
            <p className="text-xl text-neutral-600">
              What makes our platform unique
            </p>
          </div>

          <div className="space-y-6">
            {differentiators.map((diff, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm border border-neutral-200"
              >
                <h3 className="text-xl font-bold text-black mb-3">{diff.title}</h3>
                <p className="text-neutral-600 mb-3">{diff.description}</p>
                <div className="flex items-start gap-2 text-sm text-green-700">
                  <TrendingUp className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="font-medium">{diff.benefit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Partner with Our Technology
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Leverage our platform for your innovation needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
              Explore Partnerships
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold hover:bg-neutral-50 transition-colors">
              Download Technology Brief
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TechnologyPage;
