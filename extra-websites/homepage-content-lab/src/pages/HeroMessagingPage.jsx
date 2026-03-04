import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, TrendingUp, Target, Award, Rocket, Users, HelpCircle, BarChart, Copy, Check } from 'lucide-react';

export default function HeroMessagingPage() {
  const [selectedVariation, setSelectedVariation] = useState('problem-agitation');
  const [copiedText, setCopiedText] = useState('');

  const heroVariations = {
    'problem-agitation': {
      name: 'Problem-Agitation-Solution',
      icon: MessageSquare,
      tagline: 'Start with pain point, amplify urgency, present solution',
      headline: '"99% of Breakthrough Materials Never Leave the Lab"',
      subheadline: 'We\'re the 1% that makes it to market — and we help others do the same.',
      supportingCopy: 'Every year, billions are invested in materials research. Yet most innovations die in development hell — too expensive to scale, too complex to manufacture, or too risky to commercialize. Monoatom Labs breaks this cycle.',
      primaryCTA: 'See Our Products in Action',
      secondaryCTA: 'Read the Technology Story',
      useWhen: 'Visitors from research/academic backgrounds, technical decision-makers, partnership/investor traffic',
      color: 'from-blue-600 to-cyan-600'
    },
    'outcome-first': {
      name: 'Outcome-First',
      icon: TrendingUp,
      tagline: 'Lead with measurable results, build credibility, invite action',
      headline: '"40% Stronger Concrete. 30% Cost Savings. 100% Proven."',
      subheadline: '4 commercial graphene products. 200+ successful installations. NABL-certified performance.',
      supportingCopy: 'Monoatom Labs delivers advanced materials that work in the real world: Graphacrete (₹280/m³ savings), Graffisol (4-6% efficiency gains), Ceraphene (5-7x coating durability), HD-G-PE (30% barrier improvement).',
      primaryCTA: 'Calculate Your ROI',
      secondaryCTA: 'Request Technical Data',
      useWhen: 'Commercial/procurement decision-makers, cost-conscious buyers, performance-focused engineers',
      color: 'from-green-600 to-emerald-600'
    },
    'vision-led': {
      name: 'Vision-Led',
      icon: Rocket,
      tagline: 'Inspire with vision, establish leadership, demonstrate capability',
      headline: '"Building India\'s Advanced Materials Future"',
      subheadline: 'From graphene synthesis to market deployment — we\'re making breakthrough materials accessible, scalable, and profitable.',
      supportingCopy: 'Advanced materials are the foundation of India\'s manufacturing competitiveness. Monoatom Labs is changing that with India\'s first integrated graphene technology platform.',
      primaryCTA: 'Explore Our Technology',
      secondaryCTA: 'Meet the Founders',
      useWhen: 'First-time visitors (brand awareness), media/press coverage traffic, government/institutional visitors',
      color: 'from-purple-600 to-pink-600'
    },
    'credibility-first': {
      name: 'Credibility-First',
      icon: Award,
      tagline: 'Establish authority immediately, then present offerings',
      headline: '"NABL-Certified Graphene Technology. Made in India. Market-Proven."',
      subheadline: 'Telangana\'s only certified graphene testing lab. 4 commercial products. 200+ installations.',
      supportingCopy: 'NABL-certified validation, Founders with 15+ years materials science R&D, 4 products in market, technology licensing available, JV-SPV partnership models for scale.',
      primaryCTA: 'View Product Catalog',
      secondaryCTA: 'See Certifications & Awards',
      useWhen: 'High-skepticism visitors, first-time business inquiries, quality/compliance-focused buyers',
      color: 'from-amber-600 to-orange-600'
    },
    'innovation-led': {
      name: 'Innovation-Led',
      icon: Target,
      tagline: 'Highlight cutting-edge technology, demonstrate capability depth',
      headline: '"Graphene Synthesis to Product Deployment — All Under One Roof"',
      subheadline: 'India\'s first integrated advanced materials platform. From molecule to market.',
      supportingCopy: 'Four core capabilities: Synthesis (CVD + liquid-phase), Dispersion (nano-particle stabilization), Formulation (6 industries), Validation (NABL-certified testing).',
      primaryCTA: 'Explore Our Technology Platform',
      secondaryCTA: 'Partnership Opportunities',
      useWhen: 'Technical/R&D visitors, partnership inquiries, investor/strategic buyer traffic',
      color: 'from-indigo-600 to-blue-600'
    },
    'use-case': {
      name: 'Use-Case Driven',
      icon: Users,
      tagline: 'Lead with specific applications, demonstrate breadth',
      headline: '"From Foundation to Finish — Graphene-Enhanced Solutions for Every Industry"',
      subheadline: 'Construction. Solar. Automotive. Packaging. One materials platform. Endless applications.',
      supportingCopy: 'Graphacrete (40% strength gains), Graffisol (4-6% efficiency), Ceraphene (5-7x durability), HD-G-PE (30% moisture resistance). We don\'t just sell materials — we solve problems.',
      primaryCTA: 'Find Your Solution',
      secondaryCTA: 'Browse by Industry',
      useWhen: 'Industry-specific landing pages, use-case focused campaigns, broad awareness traffic',
      color: 'from-teal-600 to-cyan-600'
    },
    'partnership': {
      name: 'Partnership-Focused',
      icon: Users,
      tagline: 'Invite collaboration, present flexible models',
      headline: '"Your Materials Challenge. Our Technology Platform. Shared Success."',
      subheadline: 'Partner with India\'s leading graphene commercialization lab — licensing, JV-SPV, or custom development.',
      supportingCopy: 'JV-SPV Partnership (₹2-5 Cr, 24-36 month ROI), Technology Licensing (₹50L-1Cr, 12-18 month ROI), Custom Development (flexible IP arrangements).',
      primaryCTA: 'Explore Partnership Models',
      secondaryCTA: 'Schedule Consultation',
      useWhen: 'B2B partnership inquiries, investor traffic, strategic collaboration seekers',
      color: 'from-rose-600 to-red-600'
    },
    'scale-traction': {
      name: 'Scale & Traction',
      icon: BarChart,
      tagline: 'Lead with proof of market validation',
      headline: '"200+ Installations. 4 Products. 1 Mission: Scale Advanced Materials in India."',
      subheadline: 'We\'ve moved graphene from lab curiosity to commercial reality. Now we\'re scaling nationwide.',
      supportingCopy: '200+ successful installations, ₹280/m³ average savings, 4-6% efficiency gains, 5-7x durability improvement, NABL-certified validation. 3 production facilities, 5 pipeline products.',
      primaryCTA: 'See Our Traction',
      secondaryCTA: 'Partner for Scale',
      useWhen: 'Investor presentations, growth-stage messaging, scaling partnership inquiries',
      color: 'from-violet-600 to-purple-600'
    },
    'founder-story': {
      name: 'Founder-Story Led',
      icon: Users,
      tagline: 'Human connection, mission-driven narrative',
      headline: '"Two Materials Scientists. One Question: Why Do Most Breakthroughs Fail?"',
      subheadline: 'After 15 years in R&D, we built the company we wish existed — turning research into revenue.',
      supportingCopy: 'The problem: brilliant innovations languishing in labs. Our solution: an integrated platform handling everything from synthesis to validation. Results: 4 products commercialized, 200+ installations, 5 more in pipeline.',
      primaryCTA: 'Meet the Founders',
      secondaryCTA: 'Read Our Story',
      useWhen: 'Brand storytelling campaigns, first-time visitor engagement, emotional connection building',
      color: 'from-fuchsia-600 to-pink-600'
    },
    'question-led': {
      name: 'Question-Led',
      icon: HelpCircle,
      tagline: 'Start with provocative question, answer comprehensively',
      headline: '"What If Advanced Materials Didn\'t Take 10 Years to Reach Market?"',
      subheadline: 'We\'ve cracked the commercialization code — from graphene synthesis to product deployment in 6-9 months.',
      supportingCopy: 'Traditional timeline: 10 years, 1% success rate. Monoatom timeline: 6-9 months, 100% success rate (4/4 products). How? Integrated platform, NABL-certified testing, real-world optimization.',
      primaryCTA: 'See Our Process',
      secondaryCTA: 'Explore Products',
      useWhen: 'Content marketing campaigns, curiosity-driven traffic, educational/awareness building',
      color: 'from-sky-600 to-blue-600'
    }
  };

  const currentVariation = heroVariations[selectedVariation];
  const Icon = currentVariation.icon;

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Hero Messaging Variations</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            10 comprehensive hero messaging frameworks for maximum impact
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Choose the approach that best fits your audience and traffic source
          </p>
        </div>

        {/* Variation Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-black mb-4">Select Hero Variation</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            {Object.entries(heroVariations).map(([key, variation]) => {
              const VariationIcon = variation.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedVariation(key)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedVariation === key
                      ? 'border-black bg-black text-white'
                      : 'border-neutral-200 hover:border-neutral-300 bg-white'
                  }`}
                >
                  <VariationIcon className="w-5 h-5 mb-2" />
                  <div className="text-sm font-medium">{variation.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Hero Preview */}
        <motion.div
          key={selectedVariation}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          {/* Hero Visual */}
          <div className={`bg-gradient-to-r ${currentVariation.color} text-white p-12 text-center`}>
            <Icon className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold mb-3">{currentVariation.name}</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">{currentVariation.tagline}</p>
          </div>

          {/* Hero Content */}
          <div className="p-8">
            {/* Headline */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase">Headline</h3>
                <button
                  onClick={() => copyToClipboard(currentVariation.headline, 'headline')}
                  className="text-neutral-400 hover:text-black transition-colors p-2"
                >
                  {copiedText === 'headline' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-3xl font-bold text-black">{currentVariation.headline}</p>
            </div>

            {/* Subheadline */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase">Subheadline</h3>
                <button
                  onClick={() => copyToClipboard(currentVariation.subheadline, 'subheadline')}
                  className="text-neutral-400 hover:text-black transition-colors p-2"
                >
                  {copiedText === 'subheadline' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-xl text-neutral-700">{currentVariation.subheadline}</p>
            </div>

            {/* Supporting Copy */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-neutral-500 uppercase">Supporting Copy</h3>
                <button
                  onClick={() => copyToClipboard(currentVariation.supportingCopy, 'supporting')}
                  className="text-neutral-400 hover:text-black transition-colors p-2"
                >
                  {copiedText === 'supporting' ? <Check className="w-4 h-4 text-green-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-neutral-600 leading-relaxed">{currentVariation.supportingCopy}</p>
            </div>

            {/* CTAs */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-neutral-500 uppercase mb-3">Call-to-Actions</h3>
              <div className="flex flex-wrap gap-3">
                <button className="px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-neutral-800 transition-colors">
                  {currentVariation.primaryCTA}
                </button>
                <button className="px-6 py-3 border-2 border-black text-black rounded-lg font-medium hover:bg-neutral-50 transition-colors">
                  {currentVariation.secondaryCTA}
                </button>
              </div>
            </div>

            {/* Use When */}
            <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
              <h3 className="text-sm font-semibold text-neutral-700 mb-2">Use When:</h3>
              <p className="text-neutral-600 text-sm">{currentVariation.useWhen}</p>
            </div>
          </div>
        </motion.div>

        {/* Implementation Guide */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-6">Implementation Guide</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Best Practices */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">Copywriting Best Practices</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-neutral-800">Headlines</p>
                    <p className="text-sm text-neutral-600">Keep under 10 words, use numbers when possible, lead with benefit</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-neutral-800">Subheadlines</p>
                    <p className="text-sm text-neutral-600">Expand on headline, add credibility, 15-25 words ideal</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-neutral-800">Supporting Copy</p>
                    <p className="text-sm text-neutral-600">Front-load important info, use bullet points, include proof</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full mt-2"></div>
                  <div>
                    <p className="font-medium text-neutral-800">CTAs</p>
                    <p className="text-sm text-neutral-600">Action-oriented verbs, specific outcomes, primary + secondary options</p>
                  </div>
                </div>
              </div>
            </div>

            {/* A/B Testing */}
            <div>
              <h3 className="text-lg font-semibold text-black mb-4">A/B Testing Recommendations</h3>
              <div className="space-y-3">
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <p className="font-medium text-neutral-800 mb-1">Test 1: Problem vs. Outcome</p>
                  <p className="text-sm text-neutral-600">Problem-Agitation vs. Outcome-First</p>
                  <p className="text-xs text-neutral-500 mt-1">Hypothesis: Outcome-first performs better for commercial traffic</p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <p className="font-medium text-neutral-800 mb-1">Test 2: Vision vs. Credibility</p>
                  <p className="text-sm text-neutral-600">Vision-Led vs. Credibility-First</p>
                  <p className="text-xs text-neutral-500 mt-1">Hypothesis: Credibility-first builds trust faster</p>
                </div>
                <div className="bg-neutral-50 rounded-lg p-4 border border-neutral-200">
                  <p className="font-medium text-neutral-800 mb-1">Test 3: Innovation vs. Use-Case</p>
                  <p className="text-sm text-neutral-600">Innovation-Led vs. Use-Case Driven</p>
                  <p className="text-xs text-neutral-500 mt-1">Hypothesis: Use-case drives more conversions</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Reference Table */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-black mb-4">Quick Reference: Choose by Context</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-neutral-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Variation</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Best For</th>
                    <th className="px-4 py-3 text-left font-semibold text-neutral-700">Primary Goal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 font-medium">Problem-Agitation</td>
                    <td className="px-4 py-3 text-neutral-600">Technical visitors</td>
                    <td className="px-4 py-3 text-neutral-600">Education → Engagement</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Outcome-First</td>
                    <td className="px-4 py-3 text-neutral-600">Commercial buyers</td>
                    <td className="px-4 py-3 text-neutral-600">Lead generation</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Vision-Led</td>
                    <td className="px-4 py-3 text-neutral-600">First-time visitors</td>
                    <td className="px-4 py-3 text-neutral-600">Brand awareness</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 font-medium">Credibility-First</td>
                    <td className="px-4 py-3 text-neutral-600">High-skepticism</td>
                    <td className="px-4 py-3 text-neutral-600">Trust building</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Partnership-Focused</td>
                    <td className="px-4 py-3 text-neutral-600">B2B collaborators</td>
                    <td className="px-4 py-3 text-neutral-600">Partnership leads</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
