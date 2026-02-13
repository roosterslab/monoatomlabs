import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Droplet, Zap, Heart, Globe, Leaf } from 'lucide-react';

const MissionImpact = () => {
  const missionPillars = [
    {
      icon: Wind,
      title: "Clean Air",
      subtitle: "Reducing Carbon Emissions",
      description: "15-20% cement reduction through Graphacrete translates to significant CO₂ savings per cubic meter of concrete. At industrial scale, this means thousands of tons of emissions prevented.",
      metrics: [
        "15-20% cement reduction per m³",
        "Lower carbon footprint in construction",
        "Sustainable building materials"
      ],
      color: "from-cyan-500 to-blue-600",
      bgGradient: "from-cyan-50 to-blue-50"
    },
    {
      icon: Droplet,
      title: "Clean Water",
      subtitle: "Purification & Conservation",
      description: "Field-scale pilots in seawater desalination and atmospheric water harvesting demonstrate graphene's potential to provide clean water in water-scarce regions.",
      metrics: [
        "Ultra-thin desalination membranes",
        "Low-energy water purification",
        "Atmospheric moisture harvesting"
      ],
      color: "from-blue-500 to-indigo-600",
      bgGradient: "from-blue-50 to-indigo-50"
    },
    {
      icon: Zap,
      title: "Clean Energy",
      subtitle: "Efficiency & Storage",
      description: "10-12% solar panel efficiency gains and graphene battery storage systems accelerate renewable energy adoption by making clean power more cost-effective.",
      metrics: [
        "10-12% solar efficiency increase",
        "Battery storage advancements",
        "Lower cost per watt generated"
      ],
      color: "from-yellow-500 to-orange-600",
      bgGradient: "from-yellow-50 to-orange-50"
    },
    {
      icon: Heart,
      title: "Better Life",
      subtitle: "Sustainable Infrastructure",
      description: "Stronger, more durable materials mean longer-lasting infrastructure with lower maintenance—creating safer, more sustainable communities for generations.",
      metrics: [
        "50% stronger construction materials",
        "Extended infrastructure lifespan",
        "Reduced maintenance requirements"
      ],
      color: "from-pink-500 to-red-600",
      bgGradient: "from-pink-50 to-red-50"
    }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6"
          >
            <Globe className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700">Our Mission</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-6">
            Clean Air. Clean Water.<br />Clean Energy. Better Life.
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            We create commercially viable graphene solutions for industrial applications—delivering environmental impact at scale while driving technological advancement
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {missionPillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gradient-to-br ${pillar.bgGradient} border-2 border-neutral-200 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group`}
            >
              <div className="p-8">
                <div className={`inline-flex p-4 bg-gradient-to-br ${pillar.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                  <pillar.icon className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-3xl font-bold text-neutral-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">
                  {pillar.subtitle}
                </p>

                <p className="text-neutral-700 leading-relaxed mb-6">
                  {pillar.description}
                </p>

                <div className="space-y-3">
                  {pillar.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </div>
                      <span className="text-neutral-700 font-medium">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Field-Scale Impact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-neutral-900 to-black text-white rounded-2xl p-12 mb-12"
        >
          <div className="text-center mb-12">
            <Leaf className="w-16 h-16 mx-auto mb-4 text-green-400" />
            <h3 className="text-4xl font-bold mb-4">From Lab Innovation to Real-World Impact</h3>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto">
              5 field-scale pilot trials demonstrating how graphene technology solves global challenges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Hydrogen Separation",
                icon: Zap,
                description: "High-selectivity membranes for efficient H₂ production with reduced energy losses"
              },
              {
                title: "Seawater Desalination",
                icon: Droplet,
                description: "Ultra-thin graphene membranes for low-energy industrial water purification"
              },
              {
                title: "Water Harvesting",
                icon: Wind,
                description: "Extracting atmospheric moisture to generate water in water-scarce regions"
              },
              {
                title: "Glass Fibre Composites",
                icon: Globe,
                description: "Enhanced strength and durability for structural applications"
              },
              {
                title: "Battery Storage",
                icon: Zap,
                description: "Higher power density, faster response, extended lifecycle for energy systems"
              },
              {
                title: "Environmental Solutions",
                icon: Leaf,
                description: "Comprehensive approach to clean air, water, and energy challenges"
              }
            ].map((pilot, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <pilot.icon className="w-8 h-8 text-green-400 mb-4" />
                <h4 className="text-lg font-bold mb-2">{pilot.title}</h4>
                <p className="text-sm text-neutral-300">{pilot.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Vision Statement */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-neutral-900 mb-6">
            Advanced Nanomaterials for Better Quality of Life
          </h3>
          <p className="text-lg text-neutral-600 leading-relaxed mb-8">
            Our vision is to harness the power of graphene and advanced nanomaterials to create a sustainable future. By developing commercially viable solutions that scale from lab to mass manufacturing, we're not just innovating—we're transforming entire industries to deliver clean air, clean water, clean energy, and a better life for all.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">5+</div>
              <div className="text-sm text-neutral-600">Commercial Products Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
              <div className="text-sm text-neutral-600">Field-Scale Pilot Trials</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">10+</div>
              <div className="text-sm text-neutral-600">Total Innovations</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">∞</div>
              <div className="text-sm text-neutral-600">Future Potential</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionImpact;
