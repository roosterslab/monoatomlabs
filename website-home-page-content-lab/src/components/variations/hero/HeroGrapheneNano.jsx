import React from 'react';
import { motion } from 'framer-motion';
import { grapheneMaterial } from '../../../data/monoatomData';

const HeroGrapheneNano = () => {
  return (
    <section className="relative min-h-screen bg-white text-neutral-900 flex items-center justify-center px-6 py-24">
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">
              Core Technology
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
              GRAPHENE<br />
              NANO-PLATELETS
            </h1>
            <p className="text-2xl text-neutral-600 font-light mb-8">
              {grapheneMaterial.tagline}
            </p>
            <p className="text-lg text-neutral-600 leading-relaxed mb-8">
              Our ultra-pure graphene nano-platelets deliver exceptional performance across
              construction, energy, polymers, and coatings. From lab innovation to
              industrial-scale manufacturing.
            </p>
            <div className="flex gap-4">
              <button className="bg-neutral-900 text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-all">
                View Technical Specifications
              </button>
              <button className="border border-neutral-300 text-neutral-900 px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-all">
                Request Sample
              </button>
            </div>
          </motion.div>

          {/* Right - Specifications */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-neutral-900 text-white p-12 rounded-2xl"
          >
            <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-8">
              Technical Specifications
            </div>

            <div className="space-y-6">
              {Object.entries(grapheneMaterial.specs).map(([key, value]) => (
                <div key={key} className="border-b border-white/10 pb-4">
                  <div className="text-sm text-neutral-400 mb-1 capitalize">
                    {key.replace(/([A-Z])/g, ' $1').trim()}
                  </div>
                  <div className="text-3xl font-bold">{value}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-white/10">
              <div className="text-sm text-neutral-400 mb-2">Why This Matters</div>
              <p className="text-sm text-neutral-300 leading-relaxed">
                High aspect ratio (2,000-4,000:1) creates maximum surface contact area for
                superior performance—50% strength increases, 20× elongation improvements,
                and 10-12% efficiency gains.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroGrapheneNano;
