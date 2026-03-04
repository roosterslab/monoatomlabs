import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Rocket } from 'lucide-react';
import { founders } from '../../../data/monoatomData';

const LeadershipAwardsTimeline = () => {
  const majorAwards = [
    { icon: Trophy, title: "President of India Award", count: "6×", color: "yellow" },
    { icon: Star, title: "MIT TR-35 Awardee", subtitle: "Top 35 Innovators Under 35", color: "blue" },
    { icon: Award, title: "NASA Recognized Innovator", subtitle: "Space Technology", color: "purple" },
    { icon: Rocket, title: "TED India Speaker", subtitle: "Materials Innovation", color: "green" }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
            ))}
          </div>
          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            Global Recognition for<br />Groundbreaking Innovation
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Led by award-winning scientists and backed by decades of industrial execution experience
          </p>
        </div>

        {/* Major Awards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-20">
          {majorAwards.map((award, index) => {
            const colorClasses = {
              yellow: "bg-yellow-500/10 text-yellow-600 border-yellow-200",
              blue: "bg-blue-500/10 text-blue-600 border-blue-200",
              purple: "bg-purple-500/10 text-purple-600 border-purple-200",
              green: "bg-green-500/10 text-green-600 border-green-200"
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`border-2 rounded-2xl p-6 text-center ${colorClasses[award.color]}`}
              >
                <award.icon className="w-12 h-12 mx-auto mb-4" />
                {award.count && (
                  <div className="text-4xl font-bold mb-2">{award.count}</div>
                )}
                <div className="font-bold mb-1">{award.title}</div>
                {award.subtitle && (
                  <div className="text-xs opacity-75">{award.subtitle}</div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Founder Profiles with Full Awards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sushanth */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-neutral-200 rounded-2xl p-10 bg-gradient-to-br from-white to-neutral-50"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                S
              </div>
              <div>
                <h3 className="text-3xl font-bold text-neutral-900">{founders.sushanth.name}</h3>
                <p className="text-neutral-600 text-sm uppercase tracking-wider font-bold mt-1">
                  {founders.sushanth.role}
                </p>
              </div>
            </div>

            <p className="text-neutral-700 leading-relaxed mb-8">
              {founders.sushanth.bio}
            </p>

            <div className="border-t border-neutral-200 pt-6">
              <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">
                Complete Award List
              </div>
              <div className="grid grid-cols-1 gap-2">
                {founders.sushanth.awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-sm"
                  >
                    <div className="w-6 h-6 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-neutral-700">{award}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200">
              <div className="text-2xl font-bold text-neutral-900 mb-2">14+</div>
              <div className="text-sm text-neutral-600">Major National & International Recognitions</div>
            </div>
          </motion.div>

          {/* Aayush */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-neutral-200 rounded-2xl p-10 bg-gradient-to-br from-white to-neutral-50"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                A
              </div>
              <div>
                <h3 className="text-3xl font-bold text-neutral-900">{founders.aayush.name}</h3>
                <p className="text-neutral-600 text-sm uppercase tracking-wider font-bold mt-1">
                  {founders.aayush.role}
                </p>
              </div>
            </div>

            <p className="text-neutral-700 leading-relaxed mb-8">
              {founders.aayush.bio}
            </p>

            <div className="border-t border-neutral-200 pt-6">
              <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">
                Core Expertise
              </div>
              <div className="space-y-3">
                {founders.aayush.expertise.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3"
                  >
                    <div className="w-6 h-6 bg-green-500/20 text-green-700 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-neutral-200">
              <div className="text-2xl font-bold text-neutral-900 mb-2">38+ Years</div>
              <div className="text-sm text-neutral-600">Industrial Operations & Manufacturing Excellence</div>
            </div>

            <div className="mt-4 pt-4 border-t border-neutral-200">
              <div className="text-lg font-bold text-neutral-900 mb-1">Kalika Steel</div>
              <div className="text-sm text-neutral-600">One of India's Leading Steel Manufacturing Groups</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-8 bg-neutral-900 text-white rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            Work with Award-Winning Innovation Leaders
          </h3>
          <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
            Combine scientific excellence with industrial execution. Partner with a team that transforms lab breakthroughs into commercial reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-neutral-200 transition-all">
              Schedule Meeting
            </button>
            <button className="border border-white/20 px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-all">
              Download Team Profile
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipAwardsTimeline;
