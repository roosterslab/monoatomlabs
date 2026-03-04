import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Hexagon } from 'lucide-react';
import { companyInfo, statistics } from '../../../data/monoatomData';

const HeroTrillionDollar = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-neutral-900 via-black to-neutral-900 text-white flex items-center justify-center px-6 py-24 overflow-hidden">
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur mb-8"
        >
          <Hexagon className="w-4 h-4 text-blue-400 fill-blue-400/20" />
          <span className="text-xs font-bold text-blue-400 tracking-wide uppercase">
            {companyInfo.tagline}
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-tight mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent"
        >
          Unlocking<br />
          Trillion Dollar<br />
          Economy
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl md:text-3xl text-neutral-300 max-w-4xl mx-auto mb-12 font-light leading-relaxed"
        >
          Advanced Materials for 4<sup>th</sup> Industrial Revolution
        </motion.p>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg text-neutral-400 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Breakthrough materials engineered for the future—graphene derivatives, functional
          nanomaterials, bio-inspired chemistries, and performance-enhancing additives. Our
          innovations deliver superior strength, conductivity, durability, and environmental
          efficiency.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <button className="group bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
            See Our Impact
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="bg-transparent text-white border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
            Meet Our Team
          </button>
        </motion.div>

        {/* Statistics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
        >
          <div className="text-center">
            <div className="text-sm text-neutral-500 uppercase tracking-wide mb-2">Material</div>
            <div className="text-2xl font-bold">Trillion Dollar<br/>Nanomaterial</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-neutral-500 uppercase tracking-wide mb-2">Leadership</div>
            <div className="text-2xl font-bold">6× President<br/>of India Awardee</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-neutral-500 uppercase tracking-wide mb-2">Validation</div>
            <div className="text-2xl font-bold">NABL<br/>Certified</div>
          </div>
          <div className="text-center">
            <div className="text-sm text-neutral-500 uppercase tracking-wide mb-2">Partnerships</div>
            <div className="text-2xl font-bold">IISc, IIT,<br/>NCL</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroTrillionDollar;
