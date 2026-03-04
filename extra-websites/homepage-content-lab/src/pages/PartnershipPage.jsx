import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, TrendingUp, Factory, Globe, CheckCircle2, ArrowRight, DollarSign } from 'lucide-react';

const PartnershipPage = () => {
  const [selectedModel, setSelectedModel] = useState('jv-spv');

  const partnershipModels = {
    'jv-spv': {
      name: 'JV-SPV Partnership',
      tagline: 'Shared Investment, Shared Success',
      description: 'Co-create and co-own a dedicated manufacturing entity for graphene nanomaterials',
      icon: Factory,
      benefits: [
        'Exclusive territory rights',
        'Technology transfer included',
        'Revenue sharing model',
        'Joint brand equity building',
        'Operational support from Monoatom',
      ],
      investment: '₹2-5 Cr typical',
      timeline: '6-9 months to operations',
      roi: '24-36 months typical ROI',
      bestFor: 'Manufacturers seeking exclusive market position',
    },
    licensing: {
      name: 'Technology Licensing',
      tagline: 'Lower Capital, Faster Entry',
      description: 'License proven formulations and processes for immediate production capability',
      icon: Globe,
      benefits: [
        'Lower upfront investment',
        'Faster time to market',
        'Proven, NABL-certified formulations',
        'Training and technical support',
        'Royalty-based revenue model',
      ],
      investment: '₹50L-1Cr typical',
      timeline: '3-4 months to production',
      roi: '12-18 months typical ROI',
      bestFor: 'Existing manufacturers adding product lines',
    },
  };

  const comparisonFactors = [
    {
      factor: 'Initial Investment',
      jvSpv: '₹2-5 Cr',
      licensing: '₹50L-1Cr',
      description: 'Capital required to start',
    },
    {
      factor: 'Time to Market',
      jvSpv: '6-9 months',
      licensing: '3-4 months',
      description: 'From agreement to production',
    },
    {
      factor: 'Territory Rights',
      jvSpv: 'Exclusive',
      licensing: 'Non-exclusive',
      description: 'Market exclusivity',
    },
    {
      factor: 'Technology Transfer',
      jvSpv: 'Complete',
      licensing: 'Formulation only',
      description: 'Depth of knowledge transfer',
    },
    {
      factor: 'Revenue Model',
      jvSpv: 'Profit sharing',
      licensing: 'Royalty-based',
      description: 'How partners earn',
    },
    {
      factor: 'Brand Equity',
      jvSpv: 'Joint ownership',
      licensing: 'Licensed use',
      description: 'Brand relationship',
    },
    {
      factor: 'Support Level',
      jvSpv: 'Comprehensive',
      licensing: 'Technical only',
      description: 'Ongoing partnership depth',
    },
    {
      factor: 'Best For',
      jvSpv: 'New market entry',
      licensing: 'Product expansion',
      description: 'Ideal partner type',
    },
  ];

  const partnerProfile = {
    'jv-spv': [
      {
        title: 'Manufacturing Infrastructure',
        requirements: [
          'Existing industrial facility or land',
          'Access to utilities (power, water)',
          'Logistics and distribution capability',
        ],
      },
      {
        title: 'Financial Capacity',
        requirements: [
          '₹2-5 Cr investment capability',
          'Working capital for 6-9 month ramp-up',
          '3-5 year partnership horizon',
        ],
      },
      {
        title: 'Market Access',
        requirements: [
          'Established relationships in target industry',
          'Sales and distribution network',
          'Understanding of local market dynamics',
        ],
      },
      {
        title: 'Operational Capability',
        requirements: [
          'Quality management experience',
          'Regulatory compliance capability',
          'Technical team or hiring capability',
        ],
      },
    ],
    licensing: [
      {
        title: 'Existing Manufacturing',
        requirements: [
          'Active production facility',
          'Quality control systems',
          'Storage and handling capability',
        ],
      },
      {
        title: 'Financial Capacity',
        requirements: [
          '₹50L-1Cr licensing fee',
          'Working capital for inventory',
          '2-3 year commitment',
        ],
      },
      {
        title: 'Technical Capability',
        requirements: [
          'Production staff for training',
          'Basic R&D or QC lab',
          'Process documentation systems',
        ],
      },
      {
        title: 'Market Position',
        requirements: [
          'Existing customer base',
          'Distribution channels',
          'Industry credibility',
        ],
      },
    ],
  };

  const successStories = [
    {
      partner: 'ABC Concrete Technologies',
      location: 'Mumbai',
      model: 'JV-SPV',
      result: '500 tons/month production, ₹8Cr annual revenue',
      timeline: 'Operational in 7 months',
    },
    {
      partner: 'XYZ Building Materials',
      location: 'Bangalore',
      model: 'Licensing',
      result: 'Added Graphacrete to portfolio, 30% margin improvement',
      timeline: 'Production started in 3.5 months',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Handshake className="w-6 h-6" />
              <span className="font-bold text-lg">Partnership Models</span>
            </div>
            <div className="text-sm text-neutral-500">Content Lab</div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Partner with Monoatom Labs
            </h1>
            <p className="text-2xl text-neutral-300 mb-12">
              Bring proven graphene nanomaterials to your market
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div>
                <div className="text-4xl font-bold mb-2">4</div>
                <div className="text-neutral-400">Commercial Products</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-neutral-400">Field Projects</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">2</div>
                <div className="text-neutral-400">Partnership Models</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Model Selector */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4 text-center">
            Choose Your Partnership Model
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(partnershipModels).map(([key, model]) => (
              <button
                key={key}
                onClick={() => setSelectedModel(key)}
                className={`p-6 rounded-xl text-left transition-all ${
                  selectedModel === key
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white border-2 border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <model.icon className="w-10 h-10 mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold mb-2">{model.name}</h3>
                <p className={`text-sm ${selectedModel === key ? 'text-neutral-300' : 'text-neutral-600'}`}>
                  {model.tagline}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Model Details */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={selectedModel}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-8">
              {React.createElement(partnershipModels[selectedModel].icon, {
                className: 'w-16 h-16 text-black',
                strokeWidth: 1.5,
              })}
              <div>
                <h2 className="text-4xl font-bold text-black">
                  {partnershipModels[selectedModel].name}
                </h2>
                <p className="text-xl text-neutral-600">
                  {partnershipModels[selectedModel].tagline}
                </p>
              </div>
            </div>

            <p className="text-lg text-neutral-700 mb-12">
              {partnershipModels[selectedModel].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="text-sm font-bold text-neutral-500 mb-2">Investment</div>
                <div className="text-2xl font-bold text-black">
                  {partnershipModels[selectedModel].investment}
                </div>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="text-sm font-bold text-neutral-500 mb-2">Timeline</div>
                <div className="text-2xl font-bold text-black">
                  {partnershipModels[selectedModel].timeline}
                </div>
              </div>
              <div className="bg-neutral-50 rounded-xl p-6">
                <div className="text-sm font-bold text-neutral-500 mb-2">ROI Period</div>
                <div className="text-2xl font-bold text-black">
                  {partnershipModels[selectedModel].roi}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-neutral-200 mb-12">
              <h3 className="text-2xl font-bold text-black mb-6">Key Benefits</h3>
              <div className="space-y-3">
                {partnershipModels[selectedModel].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-lg text-neutral-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-2">Best For</h3>
              <p className="text-blue-800">{partnershipModels[selectedModel].bestFor}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            Side-by-Side Comparison
          </h2>
          <p className="text-xl text-neutral-600 text-center mb-12">
            Choose the model that fits your goals
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-x-auto">
            <table className="w-full">
              <thead className="bg-black text-white">
                <tr>
                  <th className="p-4 text-left font-bold">Factor</th>
                  <th className="p-4 text-left font-bold">JV-SPV Partnership</th>
                  <th className="p-4 text-left font-bold">Technology Licensing</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFactors.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'}
                  >
                    <td className="p-4">
                      <div className="font-bold text-neutral-900">{item.factor}</div>
                      <div className="text-sm text-neutral-600">{item.description}</div>
                    </td>
                    <td className="p-4 font-medium text-neutral-800">{item.jvSpv}</td>
                    <td className="p-4 font-medium text-neutral-800">{item.licensing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Ideal Partner Profile */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            Ideal Partner Profile
          </h2>
          <p className="text-xl text-neutral-600 text-center mb-12">
            For {partnershipModels[selectedModel].name}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {partnerProfile[selectedModel].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200"
              >
                <h3 className="text-xl font-bold text-black mb-6">{category.title}</h3>
                <div className="space-y-3">
                  {category.requirements.map((req, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{req}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            Partnership Success Stories
          </h2>
          <p className="text-xl text-neutral-600 text-center mb-12">
            Real results from real partnerships
          </p>

          <div className="space-y-6">
            {successStories.map((story, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-black">{story.partner}</h3>
                    <p className="text-neutral-600">{story.location}</p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-black text-white px-4 py-2 rounded-full text-sm font-bold">
                      {story.model}
                    </span>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm font-bold text-neutral-500 mb-1">Result</div>
                    <div className="text-lg font-medium text-green-700">{story.result}</div>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-neutral-500 mb-1">Timeline</div>
                    <div className="text-lg font-medium text-neutral-700">{story.timeline}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Partner?</h2>
          <p className="text-xl text-neutral-600 mb-8">
            Schedule a consultation to discuss your partnership opportunity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold hover:bg-neutral-50 transition-colors">
              Download Partnership Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnershipPage;
