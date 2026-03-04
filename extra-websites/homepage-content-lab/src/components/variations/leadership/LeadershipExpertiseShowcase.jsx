import React from 'react';
import { motion } from 'framer-motion';
import { FlaskConical, Factory, Handshake, TrendingUp, Shield, Zap } from 'lucide-react';
import { founders, partnerships } from '../../../data/monoatomData';

const LeadershipExpertiseShowcase = () => {
  const expertiseAreas = [
    {
      icon: FlaskConical,
      title: "Deep Science",
      lead: founders.sushanth.name,
      points: [
        "Graphene & nanomaterials expertise",
        "Advanced chemical engineering",
        "Deep-tech commercialization",
        "IP development & protection"
      ],
      color: "blue"
    },
    {
      icon: Factory,
      title: "Industrial Scale",
      lead: founders.aayush.name,
      points: [
        "Large-scale manufacturing operations",
        "Supply-chain integration",
        "National-scale deployment",
        "38+ years steel industry experience"
      ],
      color: "green"
    },
    {
      icon: Handshake,
      title: "Strategic Partnerships",
      lead: "Joint Leadership",
      points: [
        "IISc, IIT, NCL collaborations",
        "JV-SPV partnership models",
        "Technology licensing frameworks",
        "Industrial alliance building"
      ],
      color: "purple"
    },
    {
      icon: TrendingUp,
      title: "Market Deployment",
      lead: "Executive Team",
      points: [
        "5+ commercially ready products",
        "Field-scale pilot trials",
        "Customer relationship management",
        "Market expansion strategies"
      ],
      color: "orange"
    }
  ];

  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            Multidisciplinary Excellence
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Combining scientific depth with industrial execution—the unique advantage that transforms lab innovation into commercial success
          </p>
        </div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {expertiseAreas.map((area, index) => {
            const colorClasses = {
              blue: "from-blue-500 to-blue-600",
              green: "from-green-500 to-green-600",
              purple: "from-purple-500 to-purple-600",
              orange: "from-orange-500 to-orange-600"
            };

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-neutral-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className={`bg-gradient-to-r ${colorClasses[area.color]} p-6 text-white`}>
                  <area.icon className="w-12 h-12 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{area.title}</h3>
                  <p className="text-sm opacity-90">Led by {area.lead}</p>
                </div>

                <div className="p-6">
                  <ul className="space-y-3">
                    {area.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          ✓
                        </div>
                        <span className="text-neutral-700">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Founders Section */}
        <div className="bg-white border-2 border-neutral-900 rounded-2xl p-12 mb-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-neutral-900">Meet the Leadership</h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Sushanth */}
            <div className="text-center lg:text-left">
              <div className="inline-block p-1 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-6">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <span className="text-5xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
                    SP
                  </span>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-neutral-900 mb-2">{founders.sushanth.name}</h4>
              <p className="text-sm text-neutral-500 uppercase tracking-wider font-bold mb-4">
                {founders.sushanth.role}
              </p>

              <div className="inline-flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                {founders.sushanth.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-neutral-600 leading-relaxed">
                Materials innovator combining deep scientific expertise with entrepreneurial execution. 14+ major recognitions including 6× President of India Award, MIT TR35, and NASA recognition.
              </p>
            </div>

            {/* Aayush */}
            <div className="text-center lg:text-left">
              <div className="inline-block p-1 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mb-6">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center">
                  <span className="text-5xl font-bold bg-gradient-to-br from-green-500 to-blue-500 bg-clip-text text-transparent">
                    AB
                  </span>
                </div>
              </div>

              <h4 className="text-2xl font-bold text-neutral-900 mb-2">{founders.aayush.name}</h4>
              <p className="text-sm text-neutral-500 uppercase tracking-wider font-bold mb-4">
                {founders.aayush.role}
              </p>

              <div className="inline-flex flex-wrap gap-2 justify-center lg:justify-start mb-6">
                {founders.aayush.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <p className="text-neutral-600 leading-relaxed">
                Promoter of Kalika Steel with 38+ years in large-scale industrial operations. Brings manufacturing expertise and market expansion capabilities to transform innovations into commercial products.
              </p>
            </div>
          </div>
        </div>

        {/* Scientific Ecosystem */}
        <div className="bg-gradient-to-br from-neutral-900 to-black text-white rounded-2xl p-12">
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 mx-auto mb-4 text-blue-400" />
            <h3 className="text-3xl font-bold mb-4">Scientific Partnership Ecosystem</h3>
            <p className="text-neutral-400">
              Backed by India's premier research institutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {partnerships.map((partner, index) => (
              <motion.div
                key={partner}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 text-center hover:bg-white/20 transition-all"
              >
                <Zap className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                <div className="font-bold">{partner}</div>
                <div className="text-xs text-neutral-400 mt-2">Research Collaboration</div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-neutral-400">
              Our team includes scientists from these institutes working alongside industrial manufacturing experts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipExpertiseShowcase;
