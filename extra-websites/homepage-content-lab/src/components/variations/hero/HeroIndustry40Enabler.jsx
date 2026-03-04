import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Factory, Zap, TrendingUp, Layers, Atom, ArrowRight, CheckCircle2 } from 'lucide-react';

const HeroIndustry40Enabler = () => {
  const industry40Features = [
    {
      icon: Atom,
      title: 'Smart Materials',
      description: 'Graphene-enhanced solutions with programmable properties'
    },
    {
      icon: Layers,
      title: 'Nano-Engineering',
      description: 'Atomic-level precision for next-gen applications'
    },
    {
      icon: Zap,
      title: 'Performance Boost',
      description: '40-50% improvements in strength, conductivity, efficiency'
    },
    {
      icon: TrendingUp,
      title: 'Scale Ready',
      description: 'From pilot to mass manufacturing deployment'
    }
  ];

  const industry40Applications = [
    'Smart Manufacturing & Automation',
    'IoT-Enabled Infrastructure',
    'Advanced Robotics & Composites',
    'Clean Energy Systems',
    'Next-Gen Transportation',
    'Digital Supply Chains'
  ];

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white py-24 px-6 overflow-hidden">
      {/* Animated Tech Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Industry 4.0 Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-blue-500/20 border-2 border-blue-400 rounded-full px-6 py-3 text-blue-200 font-bold mb-8">
            <Cpu className="w-6 h-6" />
            <span className="text-lg">INDUSTRY 4.0 ENABLER</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Advanced Materials for<br />
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-teal-300 text-transparent bg-clip-text">
              4th Industrial Revolution
            </span>
          </h1>

          <h2 className="text-3xl md:text-4xl font-bold text-blue-200 mb-4">
            Enabling Enterprises to Transition into Industry 4.0
          </h2>
        </motion.div>

        {/* Main Value Prop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 mb-12 text-center"
        >
          <p className="text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto text-neutral-200">
            Our breakthrough materials deliver <strong>superior strength, conductivity, durability, and
            environmental efficiency</strong>—the essential building blocks for smart manufacturing,
            IoT infrastructure, and autonomous systems. We bridge cutting-edge nanomaterial science
            with industrial-scale deployment.
          </p>
        </motion.div>

        {/* Industry 4.0 Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          {industry40Features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-600/20 to-indigo-600/20 backdrop-blur border-2 border-blue-500/50 rounded-xl p-6 text-center hover:scale-105 transition-transform"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-3 text-blue-400" />
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-neutral-300">{feature.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Industry 4.0 Applications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-6">
            Powering Industry 4.0 Applications
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {industry40Applications.map((app, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-lg p-4 flex items-center gap-3"
              >
                <CheckCircle2 className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="font-semibold">{app}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Differentiator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 backdrop-blur-lg border-2 border-cyan-400 rounded-2xl p-8 mb-10 text-center"
        >
          <Factory className="w-16 h-16 mx-auto mb-4 text-cyan-400" />
          <h3 className="text-3xl font-black mb-4 text-cyan-300">
            From Lab Prototype to Mass Manufacturing
          </h3>
          <p className="text-lg text-neutral-200 max-w-4xl mx-auto leading-relaxed">
            Unlike academic research that never leaves the lab, we ensure every innovation can scale to
            industrial production. Our approach bridges deep-tech expertise with real-world deployment,
            supply-chain integration, and national-scale manufacturing.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10"
        >
          <div className="text-center">
            <div className="text-4xl font-black text-blue-400">10+</div>
            <p className="text-sm text-neutral-400">Breakthrough Innovations</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-cyan-400">5+</div>
            <p className="text-sm text-neutral-400">Commercial Products</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-teal-400">2</div>
            <p className="text-sm text-neutral-400">Advanced Facilities</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-green-400">5</div>
            <p className="text-sm text-neutral-400">Pilot Technologies</p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-xl transition-all shadow-2xl hover:scale-105"
          >
            <Cpu className="w-6 h-6" />
            Explore Industry 4.0 Solutions
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/partnership"
            className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur border-2 border-white/30 text-white font-bold text-xl rounded-xl transition-all"
          >
            Partner With Us
          </a>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="text-center text-lg text-neutral-400 mt-8 italic"
        >
          "Building the material foundation for the next industrial revolution"
        </motion.p>
      </div>
    </section>
  );
};

export default HeroIndustry40Enabler;
