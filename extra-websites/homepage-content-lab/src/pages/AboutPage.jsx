import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Target, Users, Award, TrendingUp, Globe, ArrowRight, CheckCircle2 } from 'lucide-react';

const AboutPage = () => {
  const [selectedVariation, setSelectedVariation] = useState('mission-first');

  const heroVariations = {
    'mission-first': {
      title: 'Mission-First Hero',
      headline: 'Building the Future of Advanced Materials',
      subheadline: 'We exist to solve one critical problem: 99% of breakthrough materials never leave the lab.',
      content: 'Monoatom Labs bridges the gap between laboratory innovation and commercial manufacturing, transforming graphene-based nanomaterials into scalable, market-ready products that drive the 4th Industrial Revolution.',
    },
    'founder-driven': {
      title: 'Founder-Driven Narrative',
      headline: 'From IIT Ahmedabad to Industrial Revolution',
      subheadline: 'Founded by materials science pioneers with 15+ years of graphene research',
      content: 'Dr. [Founder Name] and team identified the fundamental challenge: brilliant nanomaterial research trapped in academic labs. We built Monoatom Labs to systematically commercialize breakthrough materials, starting with graphene.',
    },
    'credibility-led': {
      title: 'Credibility-Led Approach',
      headline: 'NABL Certified • DSIR Recognized • Industry Validated',
      subheadline: 'The only graphene materials company with complete lab-to-market validation',
      content: 'Monoatom Labs holds comprehensive NABL certifications, DSIR recognition, and field validation across 50+ commercial projects. Our materials don\'t just work in the lab—they\'re proven in the real world.',
    },
    'problem-solution': {
      title: 'Problem-Solution-Impact',
      headline: '99% of Breakthrough Materials Die in the Lab. We\'re Changing That.',
      subheadline: 'The valley of death between research and commercialization claims billions in lost potential',
      content: 'Monoatom Labs has cracked the code: systematic commercialization of graphene nanomaterials. Four products. Multiple industries. Measurable impact. From laboratory curiosity to industrial reality.',
    },
  };

  const threePillars = [
    {
      icon: Award,
      title: 'Scientific Excellence',
      description: 'NABL-certified testing, DSIR recognition, peer-reviewed research',
      metrics: ['15+ Years Research', 'NABL Certified', '4 Patents Filed'],
    },
    {
      icon: TrendingUp,
      title: 'Manufacturing Scale',
      description: 'Lab-to-market bridge with proven commercial production',
      metrics: ['4 Products Live', '50+ Projects', '3 Industries'],
    },
    {
      icon: CheckCircle2,
      title: 'Field Validation',
      description: 'Real-world performance data from commercial deployments',
      metrics: ['Field Tested', 'Customer Validated', 'ROI Proven'],
    },
  ];

  const companyStory = {
    challenge: 'The graphene paradox: Nobel Prize in 2010, yet minimal commercial impact by 2020.',
    insight: 'The problem wasn\'t the science—it was the systematic gap between lab breakthroughs and scalable manufacturing.',
    action: 'Founded Monoatom Labs to build the bridge: rigorous R&D + manufacturing expertise + market validation.',
    impact: 'Today: 4 commercial products, 50+ field deployments, measurable ROI across construction, solar, and automotive sectors.',
  };

  const differentiators = [
    {
      factor: 'Lab-to-Market Bridge',
      us: 'Systematic commercialization process from R&D to field deployment',
      others: 'Lab research OR manufacturing, rarely both',
    },
    {
      factor: 'Validation Depth',
      us: 'NABL certified + DSIR recognized + 50+ field projects',
      others: 'Lab testing only, limited field validation',
    },
    {
      factor: 'Product Portfolio',
      us: '4 commercial products across 3 industries',
      others: 'Single product or research-stage materials',
    },
    {
      factor: 'Business Model',
      us: 'Flexible: JV-SPV partnerships OR licensing',
      others: 'Single distribution model',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Building2 className="w-6 h-6" />
              <span className="font-bold text-lg">About Page Variations</span>
            </div>
            <div className="text-sm text-neutral-500">Content Lab</div>
          </div>
        </div>
      </nav>

      {/* Hero Variation Selector */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">
            Select Hero Variation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {Object.entries(heroVariations).map(([key, variation]) => (
              <button
                key={key}
                onClick={() => setSelectedVariation(key)}
                className={`p-4 rounded-lg text-left transition-all ${
                  selectedVariation === key
                    ? 'bg-black text-white shadow-lg'
                    : 'bg-white border border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="text-sm font-bold">{variation.title}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={selectedVariation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">
              {heroVariations[selectedVariation].title}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              {heroVariations[selectedVariation].headline}
            </h1>
            <p className="text-xl text-neutral-600 mb-8">
              {heroVariations[selectedVariation].subheadline}
            </p>
            <p className="text-lg text-neutral-700 leading-relaxed">
              {heroVariations[selectedVariation].content}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Our Three Pillars</h2>
            <p className="text-xl text-neutral-600">
              What sets Monoatom Labs apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {threePillars.map((pillar, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200"
              >
                <pillar.icon className="w-12 h-12 text-black mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-black mb-4">{pillar.title}</h3>
                <p className="text-neutral-600 mb-6">{pillar.description}</p>
                <div className="space-y-2">
                  {pillar.metrics.map((metric, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span className="text-neutral-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-12 text-center">Our Story</h2>

          <div className="space-y-8">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-sm font-bold text-red-600 uppercase tracking-wider mb-2">
                The Challenge
              </h3>
              <p className="text-xl text-neutral-700">{companyStory.challenge}</p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-6">
              <h3 className="text-sm font-bold text-yellow-600 uppercase tracking-wider mb-2">
                The Insight
              </h3>
              <p className="text-xl text-neutral-700">{companyStory.insight}</p>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-sm font-bold text-blue-600 uppercase tracking-wider mb-2">
                The Action
              </h3>
              <p className="text-xl text-neutral-700">{companyStory.action}</p>
            </div>

            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-sm font-bold text-green-600 uppercase tracking-wider mb-2">
                The Impact
              </h3>
              <p className="text-xl text-neutral-700">{companyStory.impact}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentiation Table */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-black mb-4 text-center">
            What Makes Us Different
          </h2>
          <p className="text-xl text-neutral-600 text-center mb-12">
            Systematic commercialization vs. traditional approaches
          </p>

          <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-black text-white p-4 font-bold">
              <div>Differentiation Factor</div>
              <div>Monoatom Labs</div>
              <div>Traditional Approach</div>
            </div>
            {differentiators.map((diff, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 p-4 ${
                  index % 2 === 0 ? 'bg-neutral-50' : 'bg-white'
                }`}
              >
                <div className="font-bold text-neutral-900">{diff.factor}</div>
                <div className="text-green-700 font-medium">{diff.us}</div>
                <div className="text-neutral-600">{diff.others}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">
            Ready to Partner with Us?
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            Explore collaboration opportunities and bring advanced materials to your market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
              Explore Partnership Models
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold hover:bg-neutral-50 transition-colors">
              Download Company Profile
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
