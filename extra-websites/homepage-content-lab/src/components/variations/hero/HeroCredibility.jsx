import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';
import { founders, statistics } from '../../../data/monoatomData';

const HeroCredibility = () => {
  const topAwards = founders.sushanth.awards.slice(0, 4);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-50 to-white text-neutral-900 flex items-center justify-center px-6 py-24">
      <div className="max-w-7xl mx-auto relative z-10 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 mb-8"
        >
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
          ))}
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Award-Winning<br />
          Nanomaterial Innovations
        </motion.h1>

        {/* Awards Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {topAwards.map((award, index) => (
            <div
              key={index}
              className="bg-white border border-neutral-200 px-4 py-2 rounded-full text-sm font-medium"
            >
              {award}
            </div>
          ))}
        </motion.div>

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl text-neutral-600 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Led by globally recognized innovators, Monoatom Labs transforms graphene science into
          commercially viable products. NABL certified performance. Field-tested solutions.
          Industrial-scale manufacturing ready.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
        >
          <button className="bg-neutral-900 text-white px-8 py-4 rounded-full font-medium hover:bg-neutral-800 transition-all">
            Our Story
          </button>
          <button className="border border-neutral-300 text-neutral-900 px-8 py-4 rounded-full font-medium hover:bg-neutral-100 transition-all">
            Partnership Opportunities
          </button>
        </motion.div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="p-6 bg-white border border-neutral-200 rounded-xl">
            <Award className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
            <div className="text-3xl font-bold mb-1">14+</div>
            <div className="text-sm text-neutral-600">Major Awards</div>
          </div>
          <div className="p-6 bg-white border border-neutral-200 rounded-xl">
            <div className="text-3xl font-bold mb-1">{statistics.commercialProducts}</div>
            <div className="text-sm text-neutral-600">Commercial Products</div>
          </div>
          <div className="p-6 bg-white border border-neutral-200 rounded-xl">
            <div className="text-3xl font-bold mb-1">{statistics.facilities}</div>
            <div className="text-sm text-neutral-600">State-of-the-Art Labs</div>
          </div>
          <div className="p-6 bg-white border border-neutral-200 rounded-xl">
            <div className="text-3xl font-bold mb-1">{statistics.pilotTrials}</div>
            <div className="text-sm text-neutral-600">Pilot Technologies</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCredibility;
