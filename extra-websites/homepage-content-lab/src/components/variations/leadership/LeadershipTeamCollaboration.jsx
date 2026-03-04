import React from 'react';
import { motion } from 'framer-motion';
import { Users, Handshake, Building2, Award } from 'lucide-react';
import { founders, partnerships, collaborationModels } from '../../../data/monoatomData';

const LeadershipTeamCollaboration = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-neutral-900 to-black text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full mb-6"
          >
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-bold text-yellow-400">World-Class Team</span>
          </motion.div>
          <h2 className="text-5xl font-bold mb-4">Built by Innovators,<br />Scaled by Experts</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Combining scientific brilliance with industrial execution to transform graphene science into commercial reality
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{founders.sushanth.name}</h3>
                <p className="text-sm text-neutral-400 uppercase tracking-wider">{founders.sushanth.role}</p>
              </div>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-6">{founders.sushanth.bio}</p>

            <div className="space-y-3">
              <div className="text-sm text-neutral-400">Key Recognitions:</div>
              <div className="grid grid-cols-2 gap-2">
                {founders.sushanth.tags.map(tag => (
                  <div key={tag} className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-xs font-medium text-center">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
          >
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-purple-500/20 rounded-full">
                <Building2 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-1">{founders.aayush.name}</h3>
                <p className="text-sm text-neutral-400 uppercase tracking-wider">{founders.aayush.role}</p>
              </div>
            </div>

            <p className="text-neutral-300 leading-relaxed mb-6">{founders.aayush.bio}</p>

            <div className="space-y-3">
              <div className="text-sm text-neutral-400">Expertise Areas:</div>
              <div className="grid grid-cols-2 gap-2">
                {founders.aayush.tags.map(tag => (
                  <div key={tag} className="bg-white/5 border border-white/10 px-3 py-2 rounded-lg text-xs font-medium text-center">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scientific Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-2xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Scientific Partnership Ecosystem</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <div key={partner} className="text-center">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-xl font-bold">{index + 1}</span>
                </div>
                <div className="font-bold">{partner}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Collaboration Models */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-4">Ready to Partner?</h3>
          <p className="text-neutral-400 mb-8">Two proven collaboration models to accelerate your growth</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-green-500/20 rounded-full">
                <Handshake className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold">{collaborationModels.jvSpv.name}</h4>
                <p className="text-sm text-neutral-400 mt-1">{collaborationModels.jvSpv.description}</p>
              </div>
            </div>

            <div className="space-y-2 mt-6">
              {collaborationModels.jvSpv.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-green-400 mt-1">✓</span>
                  <span className="text-sm text-neutral-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="p-3 bg-blue-500/20 rounded-full">
                <Building2 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="text-xl font-bold">{collaborationModels.licensing.name}</h4>
                <p className="text-sm text-neutral-400 mt-1">{collaborationModels.licensing.description}</p>
              </div>
            </div>

            <div className="space-y-2 mt-6">
              {collaborationModels.licensing.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-blue-400 mt-1">✓</span>
                  <span className="text-sm text-neutral-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-all">
            Schedule Partnership Discussion
          </button>
        </div>
      </div>
    </section>
  );
};

export default LeadershipTeamCollaboration;
