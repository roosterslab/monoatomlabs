import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Users, ArrowRight } from 'lucide-react';

const HeroAwardWinningFounder = () => {
  const awards = [
    'MIT TR-35 Awardee',
    'TED Speaker',
    'NASA Awardee',
    '6× President of India Award',
    'Intel IRIS Awardee',
    'INK Fellow'
  ];

  return (
    <section className="relative bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <div className="inline-block bg-amber-500/20 border border-amber-300 rounded-full px-6 py-2 text-amber-200 font-semibold mb-6 flex items-center gap-2 justify-center">
            <Award className="w-5 h-5" />
            Award-Winning Innovation
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Led by Visionaries<br />
            <span className="bg-gradient-to-r from-amber-300 via-orange-300 to-yellow-300 text-transparent bg-clip-text">
              With Global Recognition
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
          Led by visionaries with global recognition including <strong>MIT TR35, TED Speaker, NASA Awardee,
          and 6-time President of India Award recipient</strong>. Our team combines scientific depth from
          IISc, IIT, and National Chemical Laboratory with entrepreneurial execution.
        </motion.p>

        {/* Awards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur border border-amber-400/50 rounded-xl p-4 text-center hover:scale-105 transition-transform"
            >
              <Trophy className="w-8 h-8 mx-auto mb-2 text-amber-400" />
              <p className="text-sm font-semibold">{award}</p>
            </div>
          ))}
        </motion.div>

        {/* Founder Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-amber-600/20 to-orange-600/20 backdrop-blur border-2 border-amber-400 rounded-2xl p-8 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-10 h-10 text-amber-400" />
                <div>
                  <h3 className="text-2xl font-bold">Sushanth Paatnaik</h3>
                  <p className="text-amber-300">Co-Founder & CEO</p>
                </div>
              </div>
              <p className="text-neutral-200 leading-relaxed">
                Materials innovator and entrepreneur. 6-time President of India Awardee. Global recognitions
                include MIT TR35, TED India Speaker, NASA-recognized innovator. Focused on building
                next-generation technologies rooted in graphene, nanomaterials, and advanced chemical engineering.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-10 h-10 text-amber-400" />
                <div>
                  <h3 className="text-2xl font-bold">Aayush Bansal</h3>
                  <p className="text-amber-300">Co-Founder & Strategic Investor</p>
                </div>
              </div>
              <p className="text-neutral-200 leading-relaxed">
                Promoter of Kalika Steel, one of India's leading steel manufacturing groups. Computer Science
                Engineer with MBA in Technology Management. Expertise in large-scale industrial operations and
                market expansion, enabling bridge between breakthrough innovations and real-world manufacturing.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Key Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="grid md:grid-cols-4 gap-4 mb-8"
        >
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-amber-400 mb-2">10+</div>
            <p className="text-sm text-neutral-300">Innovations</p>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-orange-400 mb-2">5+</div>
            <p className="text-sm text-neutral-300">Commercial Products</p>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-red-400 mb-2">2</div>
            <p className="text-sm text-neutral-300">State-of-the-Art Facilities</p>
          </div>
          <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center">
            <div className="text-4xl font-black text-yellow-400 mb-2">5</div>
            <p className="text-sm text-neutral-300">Pilot Technologies</p>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center"
        >
          <a
            href="/about"
            className="inline-flex items-center gap-3 px-10 py-5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xl rounded-xl transition-all shadow-2xl hover:scale-105"
          >
            <Star className="w-6 h-6" />
            Meet the Team
            <ArrowRight className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAwardWinningFounder;
