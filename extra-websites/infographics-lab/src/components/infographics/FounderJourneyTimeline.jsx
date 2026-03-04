import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Lightbulb, Rocket, TrendingUp, Star, Trophy } from 'lucide-react';

const FounderJourneyTimeline = () => {
  const [hoveredMilestone, setHoveredMilestone] = useState(null);

  const milestones = [
    {
      year: '2012',
      title: 'NASA Internship',
      description: 'Research internship at NASA focused on advanced materials',
      icon: Rocket,
      color: 'from-blue-500 to-cyan-500',
      category: 'Research',
    },
    {
      year: '2014',
      title: 'IIT Bombay PhD',
      description: 'Started doctoral research in nanomaterials and graphene applications',
      icon: Lightbulb,
      color: 'from-purple-500 to-pink-500',
      category: 'Education',
    },
    {
      year: '2016',
      title: 'MIT TR35 Asia',
      description: 'Named among MIT Technology Review\'s 35 Innovators Under 35 for Asia Pacific',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
      category: 'Recognition',
    },
    {
      year: '2017',
      title: 'President of India Award',
      description: 'First of six Presidential awards for innovation in nanomaterials',
      icon: Trophy,
      color: 'from-green-500 to-teal-500',
      category: 'Award',
    },
    {
      year: '2018',
      title: 'Monoatom Labs Founded',
      description: 'Established Monoatom Labs to commercialize graphene-based innovations',
      icon: Rocket,
      color: 'from-brand-500 to-purple-500',
      category: 'Entrepreneurship',
    },
    {
      year: '2019',
      title: 'Graphacrete Launch',
      description: 'First product commercialization - graphene-enhanced concrete',
      icon: TrendingUp,
      color: 'from-purple-500 to-pink-500',
      category: 'Product',
    },
    {
      year: '2020',
      title: 'NABL Accreditation',
      description: 'State-of-the-art testing facility receives NABL certification',
      icon: Award,
      color: 'from-green-500 to-teal-500',
      category: 'Certification',
    },
    {
      year: '2021',
      title: 'Graffisol Field Trials',
      description: '1+ MW solar installations validate 10-12% energy output gains',
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      category: 'Validation',
    },
    {
      year: '2022',
      title: 'Multiple Presidential Awards',
      description: 'Additional President of India awards (Total: 6)',
      icon: Trophy,
      color: 'from-yellow-500 to-amber-500',
      category: 'Award',
    },
    {
      year: '2023',
      title: 'Product Portfolio Expansion',
      description: 'Four market-ready products: Graphacrete, Graffisol, Ceraphene, HD-G-PE',
      icon: Rocket,
      color: 'from-brand-500 to-blue-500',
      category: 'Product',
    },
    {
      year: '2024',
      title: 'Scale & Impact',
      description: '10+ innovations, 5+ pilot technologies, national market presence',
      icon: Star,
      color: 'from-purple-500 to-pink-500',
      category: 'Growth',
    },
  ];

  const awards = [
    'MIT TR35 Asia Pacific',
    '6× President of India Awards',
    'NASA Research Internship',
    'IIT Bombay PhD',
    '14+ Major Awards & Honors',
    'Global Speaking Engagements',
  ];

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-purple-400/50 bg-purple-400/10 backdrop-blur mb-6">
            <Trophy className="w-4 h-4 text-purple-300 animate-pulse" />
            <span className="text-xs font-bold text-purple-300 tracking-wide uppercase">
              Founder's Journey
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Innovation Timeline
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
            Dr. Pavan's journey from NASA research to building India's leading nanomaterials company
          </p>

          {/* Awards Summary */}
          <div className="flex flex-wrap justify-center gap-3">
            {awards.map((award, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.1 }}
                className="px-4 py-2 bg-white/10 backdrop-blur border border-white/20 rounded-full text-sm text-purple-100"
              >
                {award}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-brand-500 hidden md:block"></div>

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, idx) => {
              const Icon = milestone.icon;
              const isLeft = idx % 2 === 0;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.15 }}
                  className="relative"
                  onMouseEnter={() => setHoveredMilestone(idx)}
                  onMouseLeave={() => setHoveredMilestone(null)}
                >
                  <div className={`flex items-center gap-8 ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'} flex-col md:flex-row`}>
                    {/* Content */}
                    <div className={`flex-1 ${isLeft ? 'md:text-right' : 'md:text-left'} text-center md:text-left`}>
                      <motion.div
                        className={`bg-gradient-to-br ${milestone.color} bg-opacity-10 border-2 ${
                          hoveredMilestone === idx ? 'border-white' : 'border-white/30'
                        } rounded-xl p-6 transition-all duration-300 ${
                          hoveredMilestone === idx ? 'shadow-2xl scale-105' : ''
                        }`}
                      >
                        <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
                          <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${milestone.color} text-white font-bold text-sm`}>
                            {milestone.year}
                          </div>
                          <div className="px-3 py-1 rounded-full border border-white/30 text-white text-xs">
                            {milestone.category}
                          </div>
                        </div>
                        <h3 className="text-2xl font-display font-bold text-white mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-purple-100 leading-relaxed">
                          {milestone.description}
                        </p>
                      </motion.div>
                    </div>

                    {/* Center Icon */}
                    <div className="relative z-10">
                      <motion.div
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${milestone.color} flex items-center justify-center shadow-xl border-4 border-purple-900`}
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-yellow-400 mb-2">12+</div>
            <div className="text-sm text-purple-200">Years of Research</div>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">14+</div>
            <div className="text-sm text-purple-200">Major Awards</div>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-brand-400 mb-2">10+</div>
            <div className="text-sm text-purple-200">Innovations</div>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">4</div>
            <div className="text-sm text-purple-200">Market Products</div>
          </div>
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-2 border-purple-400/30 rounded-2xl p-8 text-center"
        >
          <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-2xl font-display font-bold text-white mb-4">
            Vision: Democratizing Advanced Materials
          </h3>
          <p className="text-lg text-purple-100 max-w-3xl mx-auto leading-relaxed">
            From cutting-edge research at NASA to building India's leading nanomaterials company,
            Dr. Pavan's journey exemplifies the power of translating scientific innovation into
            real-world impact that benefits industries and society.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default FounderJourneyTimeline;
