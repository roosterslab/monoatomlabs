import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Target, Sparkles, TrendingUp, CheckCircle2, Globe } from 'lucide-react';

const AwardsWall = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [hoveredAward, setHoveredAward] = useState(null);

  const awards = [
    {
      id: 1,
      title: 'MIT Technology Review Innovators Under 35',
      category: 'innovation',
      year: 2024,
      organization: 'MIT Technology Review',
      description: 'Recognized for breakthrough graphene commercialization and nanomaterial applications',
      prestige: 'global',
      icon: '🏆',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 2,
      title: 'Presidential Award for Excellence',
      category: 'innovation',
      year: 2023,
      organization: 'Government of India',
      description: 'Awarded for outstanding contributions to advanced materials and nanotechnology',
      prestige: 'national',
      icon: '🎖️',
      color: 'from-brand-500 to-teal-500',
      featured: true,
    },
    {
      id: 3,
      title: 'TED Fellowship',
      category: 'innovation',
      year: 2024,
      organization: 'TED',
      description: 'Selected as TED Fellow for pioneering work in graphene-based sustainable materials',
      prestige: 'global',
      icon: '🌟',
      color: 'from-red-500 to-pink-500',
    },
    {
      id: 4,
      title: 'NASA iTech Recognition',
      category: 'innovation',
      year: 2023,
      organization: 'NASA',
      description: 'Acknowledged for advanced materials with potential aerospace applications',
      prestige: 'global',
      icon: '🚀',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 5,
      title: 'NABL Accreditation',
      category: 'quality',
      year: 2024,
      organization: 'National Accreditation Board',
      description: 'Certified testing laboratory maintaining international quality standards',
      prestige: 'national',
      icon: '✅',
      color: 'from-green-500 to-teal-500',
    },
    {
      id: 6,
      title: 'Best Startup - Materials Science',
      category: 'business',
      year: 2023,
      organization: 'Department of Science & Technology',
      description: 'Recognized as leading startup in advanced materials commercialization',
      prestige: 'national',
      icon: '🏅',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 7,
      title: 'Green Technology Award',
      category: 'sustainability',
      year: 2024,
      organization: 'CII',
      description: 'Honored for sustainable concrete solutions reducing carbon footprint',
      prestige: 'national',
      icon: '🌱',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 8,
      title: 'Innovation Excellence Award',
      category: 'innovation',
      year: 2022,
      organization: 'IIT Bombay',
      description: 'Outstanding achievement in technology commercialization',
      prestige: 'national',
      icon: '💡',
      color: 'from-yellow-500 to-amber-500',
    },
    {
      id: 9,
      title: 'Export Excellence Award',
      category: 'business',
      year: 2024,
      organization: 'FIEO',
      description: 'Recognition for international market expansion and export growth',
      prestige: 'national',
      icon: '🌍',
      color: 'from-blue-500 to-indigo-500',
    },
    {
      id: 10,
      title: 'Solar Industry Leadership Award',
      category: 'innovation',
      year: 2023,
      organization: 'Solar Energy Society',
      description: 'Pioneer in solar panel performance enhancement technology',
      prestige: 'national',
      icon: '☀️',
      color: 'from-orange-500 to-yellow-500',
    },
    {
      id: 11,
      title: 'Startup India Recognition',
      category: 'business',
      year: 2022,
      organization: 'DPIIT',
      description: 'Certified as innovative startup with scalable technology solutions',
      prestige: 'national',
      icon: '🇮🇳',
      color: 'from-orange-500 to-green-500',
    },
    {
      id: 12,
      title: 'R&D Innovation Award',
      category: 'innovation',
      year: 2024,
      organization: 'CSIR',
      description: 'Excellence in research and development of nanomaterial applications',
      prestige: 'national',
      icon: '🔬',
      color: 'from-purple-500 to-blue-500',
    },
    {
      id: 13,
      title: 'Best Industrial Partnership',
      category: 'business',
      year: 2023,
      organization: 'CII',
      description: 'Successful industry collaborations and technology transfer',
      prestige: 'national',
      icon: '🤝',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      id: 14,
      title: 'Sustainability Champion',
      category: 'sustainability',
      year: 2024,
      organization: 'UN SDG',
      description: 'Contributing to UN Sustainable Development Goals through green materials',
      prestige: 'global',
      icon: '🌏',
      color: 'from-green-500 to-blue-500',
    },
  ];

  const categories = [
    { id: 'all', name: 'All Awards', icon: Trophy },
    { id: 'innovation', name: 'Innovation', icon: Sparkles },
    { id: 'business', name: 'Business', icon: Target },
    { id: 'sustainability', name: 'Sustainability', icon: Globe },
    { id: 'quality', name: 'Quality', icon: CheckCircle2 },
  ];

  const filteredAwards = selectedCategory === 'all'
    ? awards
    : awards.filter((award) => award.category === selectedCategory);

  const stats = {
    totalAwards: awards.length,
    globalRecognitions: awards.filter((a) => a.prestige === 'global').length,
    years: new Set(awards.map((a) => a.year)).size,
    categories: new Set(awards.map((a) => a.category)).size,
  };

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 20px 20px, #0d9488 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6">
            <Award className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
              Recognition & Achievements
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Awards & Accolades
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
            Recognized globally for innovation, sustainability, and excellence in advanced materials
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-4"
            >
              <div className="text-3xl font-mono font-bold text-brand-400 mb-1">{stats.totalAwards}+</div>
              <div className="text-xs text-neutral-400 font-mono uppercase">Total Awards</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-4"
            >
              <div className="text-3xl font-mono font-bold text-brand-400 mb-1">{stats.globalRecognitions}</div>
              <div className="text-xs text-neutral-400 font-mono uppercase">Global Recognition</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-4"
            >
              <div className="text-3xl font-mono font-bold text-brand-400 mb-1">6×</div>
              <div className="text-xs text-neutral-400 font-mono uppercase">Presidential</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-4"
            >
              <div className="text-3xl font-mono font-bold text-brand-400 mb-1">{stats.years}</div>
              <div className="text-xs text-neutral-400 font-mono uppercase">Years</div>
            </motion.div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-3 rounded-sm font-mono font-semibold transition-all border inline-flex items-center gap-2 ${
                    selectedCategory === category.id
                      ? 'bg-brand-500 text-white border-brand-400 shadow-[0_0_20px_rgba(13,148,136,0.3)]'
                      : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredAwards.map((award, idx) => (
            <motion.div
              key={award.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              onMouseEnter={() => setHoveredAward(award.id)}
              onMouseLeave={() => setHoveredAward(null)}
              whileHover={{ scale: 1.03, y: -5 }}
              className={`relative bg-neutral-900/80 backdrop-blur border rounded-sm overflow-hidden transition-all ${
                hoveredAward === award.id
                  ? 'border-brand-500/50 shadow-[0_0_30px_rgba(13,148,136,0.3)]'
                  : 'border-neutral-800'
              } ${award.featured ? 'lg:col-span-2' : ''}`}
            >
              {/* Header with gradient */}
              <div className={`bg-gradient-to-r ${award.color} p-6 relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                <div className="relative flex items-start justify-between">
                  <div className="text-5xl">{award.icon}</div>
                  <div className="text-right">
                    <div className="text-white/80 text-xs font-mono mb-1">{award.year}</div>
                    {award.prestige === 'global' && (
                      <div className="inline-flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur rounded-sm">
                        <Globe className="w-3 h-3 text-white" />
                        <span className="text-xs font-mono text-white font-bold">GLOBAL</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold text-white mb-2 line-clamp-2">
                  {award.title}
                </h3>
                <div className="text-sm text-brand-400 font-mono mb-3">{award.organization}</div>
                <p className="text-sm text-neutral-400 leading-relaxed line-clamp-3">
                  {award.description}
                </p>

                {/* Category Badge */}
                <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-neutral-800/50 border border-neutral-700 rounded-sm">
                  <div className="w-2 h-2 bg-brand-400 rounded-full" />
                  <span className="text-xs font-mono text-neutral-300 uppercase">{award.category}</span>
                </div>
              </div>

              {/* Featured Badge */}
              {award.featured && (
                <div className="absolute top-20 right-4 px-3 py-1 bg-brand-500 text-white text-xs font-mono font-bold rounded-sm flex items-center gap-1 shadow-lg">
                  <Star className="w-3 h-3" fill="white" />
                  FEATURED
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-gradient-to-r from-brand-500/20 to-purple-500/20 border border-brand-500/30 rounded-sm p-8 text-center backdrop-blur"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-brand-500/20 border border-brand-500/30 rounded-sm flex items-center justify-center">
                <Trophy className="w-6 h-6 text-brand-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-display font-bold">Award-Winning Innovation</div>
                <div className="text-neutral-400 text-sm font-mono">
                  Recognized by MIT, TED, NASA, and Government of India
                </div>
              </div>
            </div>
            <div className="w-px h-12 bg-neutral-700 hidden md:block" />
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-500/20 border border-green-500/30 rounded-sm flex items-center justify-center">
                <Star className="w-6 h-6 text-green-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-display font-bold">Global Impact</div>
                <div className="text-neutral-400 text-sm font-mono">
                  Transforming industries worldwide
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsWall;
