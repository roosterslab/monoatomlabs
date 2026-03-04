import React from 'react';
import { motion } from 'framer-motion';
import { Droplet, Wind, Zap, Heart, ArrowRight } from 'lucide-react';

const HeroScalableGraphene = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Overline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <div className="inline-block bg-green-500/20 border border-green-400 rounded-full px-6 py-2 text-green-300 font-semibold text-sm mb-4">
            Scalable Graphene Solutions
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6">
            Commercially Viable<br />
            <span className="bg-gradient-to-r from-green-300 to-blue-300 text-transparent bg-clip-text">
              Graphene Solutions
            </span>
          </h1>
        </motion.div>

        {/* Main Description - Actual Production Content */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-xl md:text-2xl leading-relaxed max-w-5xl mx-auto mb-12 text-neutral-200"
        >
          Provider of commercially viable graphene solutions for industrial applications.
          We focus on graphene as a transformative nanomaterial with significant commercial potential,
          delivering <strong>clean air, clean water, clean energy, and a better life</strong>.
        </motion.p>

        {/* Four Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-white/10 backdrop-blur-lg border-2 border-green-400/50 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <Wind className="w-16 h-16 mx-auto mb-4 text-green-400" />
            <h3 className="text-2xl font-bold mb-2">Clean Air</h3>
            <p className="text-neutral-300">Advanced filtration solutions</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border-2 border-blue-400/50 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <Droplet className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h3 className="text-2xl font-bold mb-2">Clean Water</h3>
            <p className="text-neutral-300">Desalination & purification</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border-2 border-yellow-400/50 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <Zap className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
            <h3 className="text-2xl font-bold mb-2">Clean Energy</h3>
            <p className="text-neutral-300">Solar & battery innovations</p>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border-2 border-pink-400/50 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <Heart className="w-16 h-16 mx-auto mb-4 text-pink-400" />
            <h3 className="text-2xl font-bold mb-2">Better Life</h3>
            <p className="text-neutral-300">Quality of life improvements</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-3 px-10 py-5 bg-green-600 hover:bg-green-700 text-white font-bold text-xl rounded-xl transition-all shadow-2xl hover:scale-105"
          >
            Explore Graphene Solutions
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroScalableGraphene;
