import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, TrendingUp, Award, Users } from 'lucide-react';

const CustomerSuccessStories = () => {
  const [activeStory, setActiveStory] = useState(0);

  const successStories = [
    {
      id: 0,
      product: 'Graffisol',
      customer: 'Major Solar EPC Company',
      industry: 'Solar Energy',
      location: 'Rajasthan, India',
      deployment: '1+ MW Installation',
      challenge: 'Solar panels experiencing significant energy loss due to soiling and high temperatures in desert conditions',
      solution: 'Applied Graffisol coating across 1+ MW solar installation',
      results: [
        { metric: 'Energy Output Increase', value: '10-12%', trend: 'up' },
        { metric: 'Panel Temperature Reduction', value: '5-6°C', trend: 'down' },
        { metric: 'Soiling Loss Reduction', value: '30-40%', trend: 'down' },
        { metric: 'ROI Payback Period', value: '18 months', trend: 'neutral' },
      ],
      testimonial: 'The energy output gains from Graffisol exceeded our expectations. Field validation showed consistent 10-12% improvement, and the self-cleaning properties have significantly reduced our maintenance costs.',
      testimonialAuthor: 'Senior Project Manager',
      impact: '₹25+ Lakhs annual savings',
      timeframe: '2023-2024',
      status: 'Ongoing',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      id: 1,
      product: 'Graphacrete',
      customer: 'Infrastructure Construction Firm',
      industry: 'Construction',
      location: 'Maharashtra, India',
      deployment: '5,000+ m³ Concrete',
      challenge: 'Need for high-strength concrete (M50) while managing rising cement costs and maintaining quality',
      solution: 'Replaced traditional M50 mix with M30 + Graphacrete achieving equivalent strength',
      results: [
        { metric: 'Compressive Strength', value: 'M30→M50', trend: 'up' },
        { metric: 'Cement Reduction', value: '15-20%', trend: 'down' },
        { metric: 'Cost Savings', value: '₹430/m³', trend: 'down' },
        { metric: 'Water Resistance', value: '+30-45%', trend: 'up' },
      ],
      testimonial: 'NABL certification gave us confidence in the M30 + Graphacrete = M50 performance. We achieved superior strength while reducing cement consumption by 17%, resulting in significant cost savings.',
      testimonialAuthor: 'Chief Engineer',
      impact: '₹21.5 Lakhs saved on project',
      timeframe: '2024',
      status: 'Completed',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 2,
      product: 'Ceraphene',
      customer: 'Advanced Materials Manufacturer',
      industry: 'Manufacturing',
      location: 'Tamil Nadu, India',
      deployment: 'Production Scale',
      challenge: 'Premium graphene was cost-prohibitive for mass market applications, limiting product accessibility',
      solution: 'Switched to Ceraphene achieving same friction reduction at 60-70% lower cost',
      results: [
        { metric: 'Cost Reduction', value: '₹5K vs ₹15K/kg', trend: 'down' },
        { metric: 'Performance', value: 'Equivalent', trend: 'neutral' },
        { metric: 'Market Accessibility', value: 'Democratized', trend: 'up' },
        { metric: 'Production Scale', value: '3× Increase', trend: 'up' },
      ],
      testimonial: 'Ceraphene enabled us to scale our advanced materials production. The cost savings allowed us to enter mass market segments while maintaining premium performance standards.',
      testimonialAuthor: 'R&D Director',
      impact: 'Market expansion to 3 new segments',
      timeframe: '2024-Ongoing',
      status: 'Scaling',
      color: 'from-pink-500 to-red-500',
    },
    {
      id: 3,
      product: 'HD-G-PE',
      customer: 'Polymer Products Company',
      industry: 'Packaging & Films',
      location: 'Gujarat, India',
      deployment: 'Pilot Production',
      challenge: 'Standard HDPE films lacked flexibility and had limited lifespan in demanding applications',
      solution: 'Integrated HD-G-PE in polymer production for enhanced material properties',
      results: [
        { metric: 'Elongation at Break', value: '20× Better', trend: 'up' },
        { metric: 'Product Lifespan', value: '+20%', trend: 'up' },
        { metric: 'Flexibility', value: 'Enhanced', trend: 'up' },
        { metric: 'Application Range', value: 'Expanded', trend: 'up' },
      ],
      testimonial: 'The 20× improvement in elongation at break was remarkable. HD-G-PE enabled us to develop products for applications that were previously impossible with standard HDPE.',
      testimonialAuthor: 'Production Head',
      impact: '2 new product lines launched',
      timeframe: '2024-Pilot',
      status: 'Pilot',
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  const story = successStories[activeStory];

  const handleNext = () => {
    setActiveStory((prev) => (prev + 1) % successStories.length);
  };

  const handlePrev = () => {
    setActiveStory((prev) => (prev - 1 + successStories.length) % successStories.length);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-neutral-900 via-gray-900 to-black p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-500/50 bg-brand-500/10 backdrop-blur mb-6">
            <Users className="w-4 h-4 text-brand-400 animate-pulse" />
            <span className="text-xs font-bold text-brand-400 tracking-wide uppercase">
              Customer Success
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Real-World Impact
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Field-validated results from customers deploying Monoatom products at scale
          </p>
        </motion.div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-3 mb-8">
          {successStories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStory(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === activeStory ? 'bg-brand-500 w-8' : 'bg-neutral-600 hover:bg-neutral-500'
              }`}
            />
          ))}
        </div>

        {/* Story Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className={`relative bg-gradient-to-br ${story.color} bg-opacity-10 border-2 border-neutral-700 rounded-2xl overflow-hidden`}
          >
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-5`}></div>

            <div className="relative p-8 md:p-12">
              {/* Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${story.color} text-white font-bold text-lg`}>
                      {story.product}
                    </div>
                    <div className={`px-3 py-1 rounded-full border ${
                      story.status === 'Completed' ? 'border-green-500 text-green-400' :
                      story.status === 'Ongoing' ? 'border-blue-500 text-blue-400' :
                      'border-yellow-500 text-yellow-400'
                    } text-sm font-semibold`}>
                      {story.status}
                    </div>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-white mb-2">
                    {story.customer}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-sm text-neutral-400">
                    <span>📍 {story.location}</span>
                    <span>🏭 {story.industry}</span>
                    <span>📦 {story.deployment}</span>
                    <span>📅 {story.timeframe}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`text-4xl font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent mb-1`}>
                    {story.impact}
                  </div>
                  <div className="text-sm text-neutral-400">Total Impact</div>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-red-400 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    Challenge
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">{story.challenge}</p>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-green-400 mb-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    Solution
                  </h3>
                  <p className="text-neutral-300 leading-relaxed">{story.solution}</p>
                </div>
              </div>

              {/* Results Grid */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-brand-400" />
                  Results
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {story.results.map((result, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-neutral-800/50 border border-neutral-700 p-4 rounded-lg text-center"
                    >
                      <div className="flex justify-center mb-2">
                        {result.trend === 'up' && <TrendingUp className="w-6 h-6 text-green-400" />}
                        {result.trend === 'down' && <TrendingUp className="w-6 h-6 text-green-400 transform rotate-180" />}
                        {result.trend === 'neutral' && <div className="w-6 h-6"></div>}
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">{result.value}</div>
                      <div className="text-xs text-neutral-400">{result.metric}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-neutral-800/30 border border-neutral-700 rounded-xl p-6">
                <Quote className="w-8 h-8 text-brand-400 mb-4" />
                <p className="text-lg text-neutral-300 leading-relaxed mb-4 italic">
                  "{story.testimonial}"
                </p>
                <div className="text-sm text-neutral-400">
                  — {story.testimonialAuthor}, {story.customer}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-all"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <button
            onClick={handleNext}
            className="flex items-center gap-2 px-6 py-3 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-all"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="bg-neutral-800/50 border border-neutral-700 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-brand-400 mb-2">4</div>
            <div className="text-sm text-neutral-400">Success Stories</div>
          </div>
          <div className="bg-neutral-800/50 border border-neutral-700 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
            <div className="text-sm text-neutral-400">Customer Satisfaction</div>
          </div>
          <div className="bg-neutral-800/50 border border-neutral-700 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-sm text-neutral-400">Performance Validation</div>
          </div>
          <div className="bg-neutral-800/50 border border-neutral-700 p-6 rounded-xl text-center">
            <div className="text-3xl font-bold text-purple-400 mb-2">₹50L+</div>
            <div className="text-sm text-neutral-400">Combined Savings</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerSuccessStories;
