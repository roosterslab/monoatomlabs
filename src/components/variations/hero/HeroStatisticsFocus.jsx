import React from 'react';
import { motion } from 'framer-motion';
import { Hexagon, Package, FlaskConical, Building2, Rocket, ArrowRight } from 'lucide-react';

const HeroStatisticsFocus = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-neutral-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Company Branding */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Hexagon className="w-12 h-12 text-blue-400 fill-blue-400/20" />
            <h1 className="text-6xl md:text-7xl font-black">MONOATOM LABS</h1>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-300 mb-3">
            Advanced Materials for 4th Industrial Revolution
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto" />
        </motion.div>

        {/* Key Statistics - Actual Production Numbers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur border-2 border-blue-500 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <FlaskConical className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <div className="text-6xl font-black text-blue-400 mb-2">10+</div>
            <h3 className="text-xl font-bold mb-2">Innovations</h3>
            <p className="text-sm text-neutral-400">Breakthrough materials and technologies</p>
          </div>

          <div className="bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur border-2 border-green-500 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <Package className="w-16 h-16 mx-auto mb-4 text-green-400" />
            <div className="text-6xl font-black text-green-400 mb-2">5+</div>
            <h3 className="text-xl font-bold mb-2">Commercial Products</h3>
            <p className="text-sm text-neutral-400">Market-validated solutions deployed at scale</p>
          </div>

          <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur border-2 border-purple-500 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <Building2 className="w-16 h-16 mx-auto mb-4 text-purple-400" />
            <div className="text-6xl font-black text-purple-400 mb-2">2</div>
            <h3 className="text-xl font-bold mb-2">Advanced Facilities</h3>
            <p className="text-sm text-neutral-400">R&D and testing labs with characterization</p>
          </div>

          <div className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 backdrop-blur border-2 border-pink-500 rounded-2xl p-8 text-center hover:scale-105 transition-transform">
            <Rocket className="w-16 h-16 mx-auto mb-4 text-pink-400" />
            <div className="text-6xl font-black text-pink-400 mb-2">5</div>
            <h3 className="text-xl font-bold mb-2">Pilot Technologies</h3>
            <p className="text-sm text-neutral-400">Field-scale trials in advanced materials</p>
          </div>
        </motion.div>

        {/* Value Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur border border-blue-500/50 rounded-2xl p-8 mb-8 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Commercially Viable Graphene Solutions for Industrial Applications
          </h3>
          <p className="text-lg text-neutral-300 max-w-4xl mx-auto">
            We combine deep scientific expertise with real-world industrial deployment capabilities,
            ensuring every innovation can scale from lab prototype to mass manufacturing.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl rounded-xl transition-all shadow-2xl hover:scale-105"
          >
            View Commercial Products
            <ArrowRight className="w-6 h-6" />
          </a>
          <a
            href="/technology"
            className="px-10 py-5 bg-white/10 hover:bg-white/20 backdrop-blur border-2 border-white/30 text-white font-bold text-xl rounded-xl transition-all"
          >
            Explore Technology
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroStatisticsFocus;
