import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building, Sun, Car, Factory, CheckCircle2, ArrowRight, TrendingUp } from 'lucide-react';

const IndustryPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('construction');

  const industries = {
    construction: {
      name: 'Construction',
      icon: Building,
      tagline: 'Building Stronger, Lasting Longer',
      color: 'from-orange-600 to-red-600',
    },
    solar: {
      name: 'Solar Energy',
      icon: Sun,
      tagline: 'Maximizing Energy Capture',
      color: 'from-yellow-500 to-orange-500',
    },
    automotive: {
      name: 'Automotive',
      icon: Car,
      tagline: 'Lighter, Stronger, Smarter',
      color: 'from-blue-600 to-indigo-600',
    },
    industrial: {
      name: 'Industrial Manufacturing',
      icon: Factory,
      tagline: 'Advanced Materials for Industry 4.0',
      color: 'from-gray-700 to-gray-900',
    },
  };

  const industryContent = {
    construction: {
      challenge: 'Concrete structures degrading 30% faster than designed lifespan',
      impact: 'Billions spent annually on premature repairs and replacements',
      solution: 'Graphacrete extends lifespan 2-3x while reducing material costs',
      products: ['Graphacrete'],
      benefits: [
        {
          title: '40-50% Compressive Strength Increase',
          description: 'Upgrade M30 to M50 performance without expensive special cements',
          metric: 'NABL certified',
        },
        {
          title: '₹430/m³ Material Savings',
          description: '15-20% cement reduction while maintaining or improving performance',
          metric: 'Field proven',
        },
        {
          title: '2-3x Extended Lifespan',
          description: 'Superior water and chloride resistance prevents premature degradation',
          metric: '50+ projects',
        },
      ],
      applications: [
        'High-rise buildings',
        'Bridges and flyovers',
        'Coastal structures',
        'Precast elements',
        'Infrastructure projects',
      ],
      caseStudy: {
        client: 'ABC Construction',
        project: 'High-rise residential tower',
        challenge: 'Required M50 concrete for 40+ floors',
        solution: 'Used Graphacrete with M30 base mix',
        result: '₹2.5L saved on project, superior durability',
      },
    },
    solar: {
      challenge: 'Energy losses from reflection and soiling reduce panel efficiency',
      impact: '5-15% energy loss annually costs operators millions',
      solution: 'Graffisol boosts efficiency and reduces soiling-related losses',
      products: ['Graffisol'],
      benefits: [
        {
          title: '2-4% Energy Efficiency Gain',
          description: 'Anti-reflective properties capture more sunlight',
          metric: 'Lab + field tested',
        },
        {
          title: 'Self-Cleaning Properties',
          description: 'Hydrophobic coating reduces soiling, lowers maintenance',
          metric: 'Proven in field',
        },
        {
          title: '6-12 Month ROI',
          description: 'Additional energy generation pays back coating cost rapidly',
          metric: 'Customer validated',
        },
      ],
      applications: [
        'Utility-scale solar farms',
        'Rooftop solar installations',
        'Concentrated solar power',
        'Building-integrated photovoltaics',
      ],
      caseStudy: {
        client: 'XYZ Solar',
        project: '100 MW solar farm',
        challenge: 'High soiling rates reducing output',
        solution: 'Applied Graffisol to 50% of panels (A/B test)',
        result: '3.2% efficiency gain, 40% less cleaning needed',
      },
    },
    automotive: {
      challenge: 'Weight reduction vs. strength trade-off limits EV range and performance',
      impact: 'Every 10% weight reduction = 6-8% range improvement',
      solution: 'HD-G-PE provides superior strength-to-weight ratio',
      products: ['HD-G-PE', 'Ceraphene'],
      benefits: [
        {
          title: '20-30% Weight Reduction',
          description: 'Same strength as traditional materials, significantly lighter',
          metric: 'Tested',
        },
        {
          title: 'Superior Impact Resistance',
          description: 'Enhanced safety without weight penalty',
          metric: 'Certified',
        },
        {
          title: 'Extended Component Life',
          description: 'Graphene-enhanced durability reduces replacements',
          metric: 'Validated',
        },
      ],
      applications: [
        'EV battery enclosures',
        'Structural components',
        'Interior panels',
        'Under-hood applications',
      ],
      caseStudy: {
        client: 'Major EV Manufacturer',
        project: 'Battery pack redesign',
        challenge: 'Reduce weight without compromising safety',
        solution: 'HD-G-PE for enclosure components',
        result: '18% weight reduction, passed all safety tests',
      },
    },
    industrial: {
      challenge: 'Equipment degradation and corrosion drive high maintenance costs',
      impact: 'Unplanned downtime costs manufacturers ₹thousands per hour',
      solution: 'Ceraphene protective coatings extend equipment life dramatically',
      products: ['Ceraphene'],
      benefits: [
        {
          title: 'Superior Corrosion Resistance',
          description: 'Graphene barrier prevents chemical and environmental damage',
          metric: 'Lab proven',
        },
        {
          title: '5-10x Extended Service Life',
          description: 'Equipment lasts significantly longer with Ceraphene protection',
          metric: 'Field tested',
        },
        {
          title: 'Reduced Maintenance Costs',
          description: 'Less frequent replacements and repairs',
          metric: 'Customer reported',
        },
      ],
      applications: [
        'Chemical processing equipment',
        'Marine applications',
        'Oil and gas infrastructure',
        'Manufacturing machinery',
      ],
      caseStudy: {
        client: 'Chemical Plant',
        project: 'Reactor vessel protection',
        challenge: 'Severe corrosion requiring frequent re-coating',
        solution: 'Ceraphene ceramic coating',
        result: '8x longer coating life vs. previous solution',
      },
    },
  };

  const currentIndustry = industryContent[selectedIndustry];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {React.createElement(industries[selectedIndustry].icon, {
                className: 'w-6 h-6',
              })}
              <span className="font-bold text-lg">Industry Solutions</span>
            </div>
            <div className="text-sm text-neutral-500">Content Lab</div>
          </div>
        </div>
      </nav>

      {/* Industry Selector */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">
            Select Industry
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {Object.entries(industries).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => setSelectedIndustry(key)}
                className={`p-4 rounded-lg text-left transition-all ${
                  selectedIndustry === key
                    ? 'bg-black text-white'
                    : 'bg-white border border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <industry.icon className="w-8 h-8 mb-2" strokeWidth={1.5} />
                <div className="font-bold text-sm">{industry.name}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section
        className={`py-20 px-6 bg-gradient-to-br ${industries[selectedIndustry].color} text-white`}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={selectedIndustry}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {React.createElement(industries[selectedIndustry].icon, {
              className: 'w-16 h-16 mb-6',
              strokeWidth: 1.5,
            })}
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {industries[selectedIndustry].name}
            </h1>
            <p className="text-2xl text-white/90 mb-12">
              {industries[selectedIndustry].tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge-Solution Framework */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">
                The Challenge
              </h3>
              <p className="text-2xl text-neutral-700">{currentIndustry.challenge}</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-2">
                The Impact
              </h3>
              <p className="text-2xl text-neutral-700">{currentIndustry.impact}</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">
                Our Solution
              </h3>
              <p className="text-2xl text-neutral-700">{currentIndustry.solution}</p>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap gap-3">
            <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider">
              Products:
            </div>
            {currentIndustry.products.map((product) => (
              <span
                key={product}
                className="bg-black text-white px-4 py-2 rounded-full text-sm font-bold"
              >
                {product}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Industry Benefits
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {currentIndustry.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200"
              >
                <TrendingUp className="w-10 h-10 text-green-600 mb-4" strokeWidth={1.5} />
                <h3 className="text-xl font-bold text-black mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 mb-4">{benefit.description}</p>
                <div className="text-sm text-green-700 font-medium">✓ {benefit.metric}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">
            Common Applications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentIndustry.applications.map((app, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-neutral-50 rounded-lg p-4"
              >
                <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-lg text-neutral-700">{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-6 bg-neutral-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Success Story</h2>
            <p className="text-xl text-neutral-300">Real-world results in your industry</p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Client
                </div>
                <div className="text-2xl font-bold">{currentIndustry.caseStudy.client}</div>
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Project
                </div>
                <div className="text-2xl font-bold">{currentIndustry.caseStudy.project}</div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Challenge
                </div>
                <p className="text-lg text-neutral-200">
                  {currentIndustry.caseStudy.challenge}
                </p>
              </div>

              <div>
                <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
                  Solution
                </div>
                <p className="text-lg text-neutral-200">
                  {currentIndustry.caseStudy.solution}
                </p>
              </div>

              <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-6">
                <div className="text-sm font-bold text-green-300 uppercase tracking-wider mb-2">
                  Result
                </div>
                <p className="text-xl font-bold text-green-100">
                  {currentIndustry.caseStudy.result}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready for Your Industry?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Discover how Monoatom solutions can transform your operations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold hover:bg-neutral-50 transition-colors">
              Download Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPage;
