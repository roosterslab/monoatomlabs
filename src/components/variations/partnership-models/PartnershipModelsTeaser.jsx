import React from 'react';
import { motion } from 'framer-motion';
import { Handshake, FileText, Rocket, TrendingUp, Users, Building2, Lightbulb, CheckCircle, ArrowRight } from 'lucide-react';

const PartnershipModelsTeaser = () => {
  const models = [
    {
      title: "Technology Licensing",
      subtitle: "Integrate Our IP Into Your Production",
      icon: FileText,
      color: "from-blue-500 to-cyan-600",
      bestFor: "Manufacturers with existing production infrastructure",
      keyBenefits: [
        "Rapid integration into existing lines",
        "Minimal capital investment required",
        "Full technical documentation & training",
        "Ongoing R&D support",
        "Royalty-based revenue model"
      ],
      howItWorks: [
        {
          step: "1",
          title: "Technology Transfer",
          description: "Complete process documentation, formulation specs, and quality protocols"
        },
        {
          step: "2",
          title: "Setup & Training",
          description: "On-site training for your team and process optimization support"
        },
        {
          step: "3",
          title: "Production Launch",
          description: "Start manufacturing with our brand or private label options"
        },
        {
          step: "4",
          title: "Continuous Support",
          description: "Ongoing technical support and product improvement updates"
        }
      ],
      metrics: [
        { value: "3-6 months", label: "Time to Production" },
        { value: "Low", label: "Capital Requirement" },
        { value: "Immediate", label: "Market Access" }
      ]
    },
    {
      title: "JV-SPV Partnership",
      subtitle: "Co-Develop, Co-Manufacture, Co-Own",
      icon: Handshake,
      color: "from-purple-500 to-pink-600",
      bestFor: "Strategic partners seeking co-ownership and joint commercialization",
      keyBenefits: [
        "Shared IP ownership & value creation",
        "Joint R&D for custom solutions",
        "Aligned incentives & risk sharing",
        "Market exclusivity options",
        "Long-term strategic alignment"
      ],
      howItWorks: [
        {
          step: "1",
          title: "Strategic Alignment",
          description: "Identify market opportunities, define scope, and structure partnership"
        },
        {
          step: "2",
          title: "Joint Development",
          description: "Co-invest in R&D, manufacturing setup, and product optimization"
        },
        {
          step: "3",
          title: "SPV Formation",
          description: "Create Special Purpose Vehicle for manufacturing and commercialization"
        },
        {
          step: "4",
          title: "Market Launch",
          description: "Joint go-to-market with shared revenues and IP value"
        }
      ],
      metrics: [
        { value: "6-12 months", label: "Partnership Setup" },
        { value: "Shared", label: "Investment Model" },
        { value: "Co-Owned", label: "IP Rights" }
      ]
    }
  ];

  const comparisonTable = [
    {
      aspect: "Investment Required",
      licensing: "Low (royalty-based)",
      jvspv: "Moderate (shared capital)"
    },
    {
      aspect: "Time to Market",
      licensing: "3-6 months",
      jvspv: "6-12 months"
    },
    {
      aspect: "IP Ownership",
      licensing: "Licensed (non-exclusive)",
      jvspv: "Co-owned (shared)"
    },
    {
      aspect: "Technical Support",
      licensing: "Full support included",
      jvspv: "Joint R&D team"
    },
    {
      aspect: "Market Exclusivity",
      licensing: "Territory-based options",
      jvspv: "Negotiable exclusivity"
    },
    {
      aspect: "Revenue Model",
      licensing: "Royalty payments",
      jvspv: "Profit sharing"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6"
          >
            <Handshake className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700">Partnership Opportunities</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            Two Proven Partnership Models
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Choose the collaboration approach that aligns with your business goals and capabilities
          </p>
        </div>

        {/* Split Cards - Partnership Models */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden hover:border-neutral-900 hover:shadow-2xl transition-all"
            >
              {/* Header */}
              <div className={`bg-gradient-to-br ${model.color} text-white p-8`}>
                <div className="flex items-center gap-4 mb-4">
                  <model.icon className="w-12 h-12" />
                  <div>
                    <h3 className="text-3xl font-bold">{model.title}</h3>
                    <p className="text-sm opacity-90">{model.subtitle}</p>
                  </div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mt-6">
                  <div className="text-xs font-bold mb-2 opacity-80">BEST FOR</div>
                  <p className="text-sm">{model.bestFor}</p>
                </div>
              </div>

              {/* Key Benefits */}
              <div className="p-8">
                <h4 className="text-lg font-bold text-neutral-900 mb-4">Key Benefits</h4>
                <ul className="space-y-3 mb-8">
                  {model.keyBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* How It Works */}
                <h4 className="text-lg font-bold text-neutral-900 mb-4">How It Works</h4>
                <div className="space-y-4 mb-8">
                  {model.howItWorks.map((step, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-neutral-900 text-white rounded-full flex items-center justify-center font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h5 className="font-bold text-neutral-900 mb-1">{step.title}</h5>
                        <p className="text-sm text-neutral-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Quick Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  {model.metrics.map((metric, idx) => (
                    <div key={idx} className="bg-neutral-50 border border-neutral-200 rounded-lg p-3 text-center">
                      <div className="text-lg font-bold text-neutral-900 mb-1">{metric.value}</div>
                      <div className="text-xs text-neutral-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden mb-16">
          <div className="bg-neutral-900 text-white p-8">
            <h3 className="text-3xl font-bold text-center">Side-by-Side Comparison</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-50 border-b-2 border-neutral-200">
                  <th className="p-6 text-left font-bold text-neutral-900">Aspect</th>
                  <th className="p-6 text-left font-bold text-blue-600">Technology Licensing</th>
                  <th className="p-6 text-left font-bold text-purple-600">JV-SPV Partnership</th>
                </tr>
              </thead>
              <tbody>
                {comparisonTable.map((row, index) => (
                  <tr
                    key={index}
                    className={`border-b border-neutral-200 hover:bg-neutral-50 transition-colors ${
                      index % 2 === 0 ? 'bg-white' : 'bg-neutral-50/50'
                    }`}
                  >
                    <td className="p-6 font-bold text-neutral-900">{row.aspect}</td>
                    <td className="p-6 text-neutral-700">{row.licensing}</td>
                    <td className="p-6 text-neutral-700">{row.jvspv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Success Stories Teaser */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8">
            <div className="text-4xl mb-4">🏭</div>
            <h4 className="text-xl font-bold text-neutral-900 mb-2">
              Manufacturing Partner Success
            </h4>
            <p className="text-neutral-700 mb-4">
              A leading construction materials company licensed our Graphacrete technology and scaled to 50,000 m³/year production within 8 months.
            </p>
            <div className="flex items-center gap-2 text-green-600 font-bold">
              <TrendingUp className="w-5 h-5" />
              <span>30% margin improvement</span>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8">
            <div className="text-4xl mb-4">🤝</div>
            <h4 className="text-xl font-bold text-neutral-900 mb-2">
              JV Partnership Success
            </h4>
            <p className="text-neutral-700 mb-4">
              A solar module manufacturer formed an SPV for Graffisol coating technology, now serving 500+ MW of installed capacity.
            </p>
            <div className="flex items-center gap-2 text-purple-600 font-bold">
              <Users className="w-5 h-5" />
              <span>Shared IP value: ₹25Cr+</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-neutral-900 text-white rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Explore Partnership Opportunities?
          </h3>
          <p className="text-neutral-300 mb-8 max-w-2xl mx-auto">
            Let's discuss which model aligns best with your business goals, market position, and growth strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-neutral-200 transition-all inline-flex items-center gap-2 justify-center">
              Schedule Partnership Discussion
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
              Download Partnership Brief
            </button>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-2xl font-bold mb-2">15+</div>
              <div className="text-neutral-400 text-sm">Active Partnerships</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">₹100Cr+</div>
              <div className="text-neutral-400 text-sm">Partner Revenue Generated</div>
            </div>
            <div>
              <div className="text-2xl font-bold mb-2">5 Countries</div>
              <div className="text-neutral-400 text-sm">Geographic Reach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipModelsTeaser;
