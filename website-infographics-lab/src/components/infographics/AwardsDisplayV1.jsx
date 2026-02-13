import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Target } from 'lucide-react';
import { founders } from '../../data/monoatomData';

const AwardsDisplayV1 = () => {
  const { sushanth } = founders;

  const categories = [
    {
      title: 'Presidential & National',
      icon: Trophy,
      color: 'from-yellow-500 to-orange-500',
      awards: ['6× President of India Awardee']
    },
    {
      title: 'Global Innovation',
      icon: Star,
      color: 'from-blue-500 to-purple-500',
      awards: ['MIT TR-35 Awardee', 'NASA Awardee', 'Intel IRIS Awardee', 'MIT Fab-10 & 11 Awardee']
    },
    {
      title: 'Speaking & Fellowship',
      icon: Target,
      color: 'from-green-500 to-teal-500',
      awards: ['TED Speaker', 'CEO Club Speaker', 'Silicon Valley Speaker', 'INK Fellow']
    },
    {
      title: 'Competition & Programs',
      icon: Award,
      color: 'from-pink-500 to-rose-500',
      awards: ['STPI-Chunauti Winner', 'ELECRAMA Winner', 'Mashaal Green Fellowship']
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-display font-bold text-neutral-900 mb-6">
            Award-Winning Innovation
          </h1>
          <p className="text-2xl text-neutral-600 mb-4">
            {sushanth.name}
          </p>
          <p className="text-xl text-neutral-500 max-w-3xl mx-auto">
            {sushanth.description} • {sushanth.role}
          </p>
        </motion.div>

        {/* Hero Stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-12 py-8 rounded-2xl shadow-2xl">
            <div className="text-7xl font-bold mb-2">14+</div>
            <div className="text-2xl font-display">Major Awards & Recognitions</div>
          </div>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {categories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + idx * 0.1 }}
                className="bg-neutral-50 border-2 border-neutral-200 rounded-xl p-8 hover:shadow-2xl hover:border-brand-500 transition-all"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`bg-gradient-to-br ${category.color} p-3 rounded-lg shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-neutral-900">
                    {category.title}
                  </h3>
                </div>

                {/* Awards List */}
                <ul className="space-y-3">
                  {category.awards.map((award, awardIdx) => (
                    <li key={awardIdx} className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${category.color} mt-2 flex-shrink-0`}></div>
                      <span className="text-neutral-700 font-medium">{award}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="bg-black text-white rounded-2xl p-12 text-center"
        >
          <p className="text-xl text-neutral-300 mb-4 italic">
            "{sushanth.journey}"
          </p>
          <p className="text-brand-500 font-display font-semibold text-lg">
            Building next-generation technologies rooted in graphene and nanomaterials
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AwardsDisplayV1;
