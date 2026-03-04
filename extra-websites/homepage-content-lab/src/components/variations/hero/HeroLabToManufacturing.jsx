import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Hexagon } from 'lucide-react';
import { statistics, grapheneMaterial } from '../../../data/monoatomData';

const HeroLabToManufacturing = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-50"></div>

      {/* Floating Hexagons */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{ opacity: 0.1 }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20 + i * 3,
              repeat: Infinity,
              ease: "linear"
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`
            }}
          >
            <Hexagon className="w-24 h-24 text-white opacity-10" strokeWidth={0.5} />
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span className="text-xs font-bold text-neutral-300 tracking-wide uppercase">
            Advanced Materials for Industry 4.0
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight mb-6"
        >
          We don't just <br />
          <span className="text-neutral-400">innovate in the lab</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-3xl text-neutral-400 max-w-4xl mx-auto mb-12 font-light leading-relaxed"
        >
          We ensure every breakthrough can scale from prototype to mass manufacturing
        </motion.p>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-neutral-500 max-w-3xl mx-auto mb-12"
        >
          Monoatom Labs combines deep scientific expertise with real-world industrial deployment
          capabilities. Every innovation is designed to transition from laboratory validation to
          commercial-scale production.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <button className="group bg-white text-black px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:bg-neutral-200 transition-all">
            Explore Our Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
            Download Company Profile
          </button>
        </motion.div>

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-neutral-800 pt-12"
        >
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{statistics.innovations}</div>
            <div className="text-sm text-neutral-500 uppercase tracking-wide">Innovations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{statistics.commercialProducts}</div>
            <div className="text-sm text-neutral-500 uppercase tracking-wide">Commercial Products</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{statistics.pilotTrials}</div>
            <div className="text-sm text-neutral-500 uppercase tracking-wide">Field-Scale Pilots</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">{grapheneMaterial.specs.purity}</div>
            <div className="text-sm text-neutral-500 uppercase tracking-wide">Purity Materials</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroLabToManufacturing;
