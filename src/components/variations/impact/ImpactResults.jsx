import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Award, Leaf, Zap, Calendar } from 'lucide-react';

const ImpactResults = () => {
  const impactMetrics = [
    {
      icon: Calendar,
      value: "18 Months",
      label: "ROI Payback",
      description: "Graffisol solar coating delivers returns in under 18 months for 1 MW plants",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: DollarSign,
      value: "₹430/m³",
      label: "Cost Savings",
      description: "Graphacrete delivers M50 performance at ₹430 lower cost per cubic meter",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: TrendingUp,
      value: "60-70%",
      label: "Price Advantage",
      description: "Ceraphene offers premium protection at 60-70% lower cost than competitors",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Leaf,
      value: "15-20%",
      label: "Cement Reduction",
      description: "Significant CO₂ savings through reduced cement usage in concrete",
      color: "from-green-600 to-teal-600"
    },
    {
      icon: Zap,
      value: "+50%",
      label: "Strength Increase",
      description: "Transform M30 concrete to M50 performance with minimal dosage",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Award,
      value: "NABL",
      label: "Certified Results",
      description: "All performance claims independently verified and field-tested",
      color: "from-yellow-500 to-amber-600"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-neutral-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6"
          >
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700">Proven Impact</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            Real-World Results That Matter
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Not just lab promises—measurable ROI, cost savings, and environmental impact across industrial deployments
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {impactMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border-2 border-neutral-200 rounded-2xl p-8 hover:border-neutral-900 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`inline-flex p-4 bg-gradient-to-br ${metric.color} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>

              <div className="text-4xl font-bold text-neutral-900 mb-2">
                {metric.value}
              </div>

              <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">
                {metric.label}
              </div>

              <p className="text-neutral-600 leading-relaxed">
                {metric.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Impact Stories */}
        <div className="space-y-8">
          {/* Solar Impact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full mb-4">
                  <Zap className="w-4 h-4 text-blue-600" />
                  <span className="text-sm font-bold text-blue-700">Solar Energy Sector</span>
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  Graffisol: 10-12% Energy Output Increase
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  For a 1 MW solar plant, Graffisol delivers 7-8% real-world power output gains without any electrical modifications. This translates to additional annual generation equivalent to adding panels—but at a fraction of the cost.
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Payback period: Typically 18 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Lower LCOE (levelized cost of energy)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Lower cost per watt gained vs mechanical upgrades</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-blue-300 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-blue-600 mb-2">+7-8%</div>
                <div className="text-sm font-bold text-neutral-600 mb-4">Real-World Performance</div>
                <div className="text-xs text-neutral-500">Field-validated across multiple installations</div>
              </div>
            </div>
          </motion.div>

          {/* Construction Impact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 bg-orange-500/20 px-3 py-1 rounded-full mb-4">
                  <TrendingUp className="w-4 h-4 text-orange-600" />
                  <span className="text-sm font-bold text-orange-700">Construction Industry</span>
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  Graphacrete: Transform M30 to M50 Performance
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  With just 0.05-0.10% dosage, Graphacrete delivers M50-grade performance from M30 concrete—saving ₹430 per cubic meter while reducing environmental impact through 15-20% cement reduction.
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>40-50% compressive strength increase</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>30-45% water resistance improvement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>15-20% cement savings = significant CO₂ reduction</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-orange-300 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-orange-600 mb-2">₹430</div>
                <div className="text-sm font-bold text-neutral-600 mb-4">Cost Savings per m³</div>
                <div className="text-xs text-neutral-500">NABL certified performance</div>
              </div>
            </div>
          </motion.div>

          {/* Coatings Impact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-2xl p-8"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 bg-purple-500/20 px-3 py-1 rounded-full mb-4">
                  <DollarSign className="w-4 h-4 text-purple-600" />
                  <span className="text-sm font-bold text-purple-700">Coating Industry</span>
                </div>
                <h3 className="text-3xl font-bold text-neutral-900 mb-4">
                  Ceraphene: Premium Protection at 60% Lower Cost
                </h3>
                <p className="text-neutral-700 leading-relaxed mb-4">
                  At ₹5,000 per 50ml vs ₹15,000 for premium competitors, Ceraphene delivers graphene-enhanced ceramic protection with 9H+ hardness and 3-4+ years durability—making premium performance accessible.
                </p>
                <ul className="space-y-2 text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>60-70% cost advantage vs competitors</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Only graphene-enhanced formulation at this price</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 font-bold">✓</span>
                    <span>Lower cost per protection year</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border-2 border-purple-300 rounded-xl p-6 text-center">
                <div className="text-5xl font-bold text-purple-600 mb-2">60-70%</div>
                <div className="text-sm font-bold text-neutral-600 mb-4">Cost Savings</div>
                <div className="text-xs text-neutral-500">Premium performance, accessible pricing</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 p-10 bg-neutral-900 text-white rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Ready to See These Results in Your Business?</h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Join industrial leaders who are already benefiting from NABL-certified, field-tested performance improvements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-all">
              Download ROI Calculator
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
              Schedule Technical Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactResults;
