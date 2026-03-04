import React from 'react';
import { motion } from 'framer-motion';
import { Atom, ArrowRight, Factory, Globe, Zap } from 'lucide-react';

const HeroAdvancedMaterials4IR = () => {
  return (
    <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-blue-900 text-white py-24 px-6 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Company Name */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-4">
            MONOATOM LABS
          </h1>
          <div className="h-1 w-32 bg-blue-400 mx-auto mb-6" />
        </motion.div>

        {/* Main Headline - Actual Production Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 text-transparent bg-clip-text">
            Advanced Materials for 4th Industrial Revolution
          </h2>
          <h3 className="text-3xl md:text-4xl font-semibold text-blue-200">
            Unlocking Trillion Dollar Economy
          </h3>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-xl md:text-2xl text-neutral-300 mb-8 max-w-4xl mx-auto italic"
        >
          "World's only Trillion Dollar Nanomaterial"
        </motion.p>

        {/* Hero Description - Actual Production Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-lg md:text-xl leading-relaxed max-w-5xl mx-auto mb-12 text-neutral-200"
        >
          Monoatom Labs develops breakthrough materials engineered for the future—graphene derivatives,
          functional nanomaterials, bio-inspired chemistries, and performance-enhancing additives. Our
          innovations deliver superior strength, conductivity, durability, and environmental efficiency,
          enabling enterprises to rapidly transition into Industry 4.0.
        </motion.p>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
            <Atom className="w-12 h-12 mx-auto mb-3 text-blue-400" />
            <h4 className="text-lg font-bold mb-2">Graphene Derivatives</h4>
            <p className="text-sm text-neutral-300">Next-gen nanomaterials</p>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
            <Factory className="w-12 h-12 mx-auto mb-3 text-purple-400" />
            <h4 className="text-lg font-bold mb-2">Industrial Scale</h4>
            <p className="text-sm text-neutral-300">Lab to manufacturing</p>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
            <Zap className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
            <h4 className="text-lg font-bold mb-2">Industry 4.0 Ready</h4>
            <p className="text-sm text-neutral-300">Future-proof solutions</p>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
            <Globe className="w-12 h-12 mx-auto mb-3 text-green-400" />
            <h4 className="text-lg font-bold mb-2">Global Impact</h4>
            <p className="text-sm text-neutral-300">Trillion dollar potential</p>
          </div>
        </motion.div>

        {/* CTA Buttons - Actual Production CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg rounded-xl transition-all flex items-center gap-2 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Explore Our Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="/partnership"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur border-2 border-white/30 text-white font-bold text-lg rounded-xl transition-all"
          >
            Partner With Us
          </a>
          <a
            href="/contact"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur border-2 border-white/30 text-white font-bold text-lg rounded-xl transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAdvancedMaterials4IR;
