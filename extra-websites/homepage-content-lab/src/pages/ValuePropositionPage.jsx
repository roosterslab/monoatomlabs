import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Cog, TrendingUp, Users, Zap, DollarSign, Heart, Copy, Check } from 'lucide-react';

export default function ValuePropositionPage() {
  const [selectedFramework, setSelectedFramework] = useState('problem-solution');
  const [copiedText, setCopiedText] = useState('');

  const valuePropositions = {
    'problem-solution': {
      name: 'Problem-Solution',
      icon: Target,
      tagline: 'Articulate the problem, then position solution',
      color: 'from-blue-600 to-cyan-600',
      problem: {
        title: 'The Problem',
        points: [
          '99% of breakthrough materials never make it to market',
          'Too Expensive: Lab-scale costs 10-100x more than commercial viability',
          'Too Slow: Traditional path takes 7-10 years',
          'Too Risky: No validated performance data',
          'Too Fragmented: Handoffs between research, production, testing break momentum'
        ]
      },
      solution: {
        title: 'Monoatom\'s Solution',
        points: [
          'Synthesis: We produce our own high-purity graphene',
          'Formulation: We develop application-specific products',
          'Validation: NABL-certified lab (third-party credibility)',
          'Production: We manufacture at commercial scale'
        ]
      },
      outcome: {
        title: 'The Outcome',
        points: [
          '6-9 months from concept to commercial product (not 7-10 years)',
          '4/4 success rate (100% commercialization rate)',
          '200+ installations proving real-world performance',
          '5 more products launching 2026-2027'
        ]
      },
      oneLiner: 'We turn breakthrough materials into market-ready products — fast, proven, scalable.',
      useWhen: 'Explaining to investors, positioning against pure R&D labs, partnership pitches'
    },
    'unique-mechanism': {
      name: 'Unique Mechanism',
      icon: Cog,
      tagline: 'Explain HOW you create value differently',
      color: 'from-purple-600 to-pink-600',
      problem: {
        title: 'Traditional Approach',
        points: [
          'Research Lab → Pilot Plant → Testing → Manufacturing → Distribution',
          'Different companies, 7-10 years, 99% failure rate',
          'Knowledge loss in handoffs',
          'Fragmented incentives'
        ]
      },
      solution: {
        title: 'Monoatom Approach',
        points: [
          'All Under One Roof: Synthesis + Formulation + Validation + Production',
          'Same team, 6-9 months, 100% success rate',
          'Application-First Development: Start with customer problem',
          'NABL Validation From Day One: Credibility built in'
        ]
      },
      outcome: {
        title: 'Why It Matters',
        points: [
          'No knowledge loss in handoffs',
          'Faster iteration cycles',
          'Lower cost structure',
          'Aligned incentives throughout'
        ]
      },
      oneLiner: 'We\'ve built the integrated platform that makes advanced materials commercially viable — synthesis to deployment, all in-house.',
      useWhen: 'Explaining competitive advantage, technical audiences, partnership discussions'
    },
    'benefit-ladder': {
      name: 'Benefit Ladder',
      icon: TrendingUp,
      tagline: 'Stack benefits from functional to emotional',
      color: 'from-green-600 to-emerald-600',
      problem: {
        title: 'Level 1: Functional Benefits',
        points: [
          'Performance gains: 40% stronger concrete, 4-6% solar efficiency',
          'Cost savings: ₹280/m³ on concrete, 12-36 month ROI',
          'Risk reduction: NABL-validated before commitment',
          'Speed: 6-9 months from inquiry to deployment'
        ]
      },
      solution: {
        title: 'Level 2: Practical Benefits',
        points: [
          'Competitive advantage through superior products',
          'New market positioning (premium, high-performance)',
          'Cost structure improvement across operations',
          'Sustainability story (lower material use)'
        ]
      },
      outcome: {
        title: 'Level 3: Emotional Benefits',
        points: [
          'Confidence in specifying innovative materials',
          'Pride in being early adopter of cutting-edge technology',
          'Relief from validated, proven performance',
          'Excitement about future possibilities'
        ]
      },
      oneLiner: 'Performance you can measure. Savings you can bank. Confidence you can\'t put a price on.',
      useWhen: 'Sales presentations, marketing collateral, different buyer personas'
    },
    'audience-segmented': {
      name: 'Audience-Segmented',
      icon: Users,
      tagline: 'Different value articulation for different audiences',
      color: 'from-amber-600 to-orange-600',
      problem: {
        title: 'For Construction Companies',
        points: [
          'Stronger concrete, lower costs, faster delivery — without changing process',
          '40% compressive strength improvement',
          '₹280/m³ cost savings vs traditional concrete',
          'Win more competitive bids with superior specs'
        ]
      },
      solution: {
        title: 'For Solar Farm Operators',
        points: [
          'Boost panel efficiency by 4-6%, maximize ROI per acre',
          '12-18 month payback period',
          'Increase revenue from same infrastructure',
          'Compatible with all panel types'
        ]
      },
      outcome: {
        title: 'For Potential Partners',
        points: [
          'Enter advanced materials market with proven products',
          'Full technology transfer, training, support',
          'Flexible models: JV-SPV (24-36 mo ROI) or Licensing (12-18 mo)',
          'Regional exclusivity opportunity'
        ]
      },
      oneLiner: 'Construction: 40% stronger, 30% cheaper. Solar: 4-6% more power. Partners: Proven products, shared success.',
      useWhen: 'Audience-specific landing pages, industry campaigns, different buyer personas'
    },
    'competitive-diff': {
      name: 'Competitive Differentiation',
      icon: Zap,
      tagline: 'Position against alternatives and competitors',
      color: 'from-rose-600 to-red-600',
      problem: {
        title: 'vs Pure R&D Labs',
        points: [
          'They: Cutting-edge research, academic publications, lab-scale only',
          'We: Commercialize (4 products in market)',
          'We: Scale production (200+ installations)',
          'We: NABL-validated performance (third-party proof)'
        ]
      },
      solution: {
        title: 'vs Traditional Materials Suppliers',
        points: [
          'They: Commodity products, incremental improvements',
          'We: Breakthrough performance (40% strength, 4-6% efficiency)',
          'We: Innovation pipeline (5 products in development)',
          'We: Custom formulation capability'
        ]
      },
      outcome: {
        title: 'vs International Graphene Suppliers',
        points: [
          'They: Import costs/delays, limited local support',
          'We: Made in India (faster, cheaper, tariff-free)',
          'We: Application-specific products (not just raw graphene)',
          'We: Local support and partnership'
        ]
      },
      oneLiner: 'Proven products, NABL-validated, locally supported — not researchers or commodity suppliers, commercialization specialists.',
      useWhen: 'Competitive sales situations, positioning against alternatives'
    },
    'roi-focused': {
      name: 'ROI-Focused',
      icon: DollarSign,
      tagline: 'Lead with financial impact',
      color: 'from-indigo-600 to-blue-600',
      problem: {
        title: 'Graphacrete ROI',
        points: [
          'Investment: ₹150/m³ Graphacrete cost',
          'Savings: ₹430/m³ cement reduction + performance',
          'Net Benefit: ₹280/m³ savings',
          'ROI: 187% immediate return, instant payback'
        ]
      },
      solution: {
        title: 'Graffisol ROI',
        points: [
          'Revenue Gain: 4-6% efficiency = additional power',
          'Payback Period: 12-18 months',
          '20-Year NPV: Sustained efficiency gains',
          'Business Impact: Additional revenue over plant lifetime'
        ]
      },
      outcome: {
        title: 'Partnership ROI',
        points: [
          'JV-SPV: ₹2-5 Cr investment, 24-36 month breakeven',
          'Licensing: ₹50L-1Cr investment, 12-18 month breakeven',
          'Proven products, shared risk, ongoing profits',
          'Lower risk than DIY development'
        ]
      },
      oneLiner: 'Our products don\'t cost — they pay. Instant savings on Graphacrete, 12-36 month payback on everything else.',
      useWhen: 'CFO/financial decision-makers, ROI-focused buyers, partnership discussions'
    },
    'mission-driven': {
      name: 'Mission-Driven',
      icon: Heart,
      tagline: 'Inspire with larger purpose',
      color: 'from-violet-600 to-purple-600',
      problem: {
        title: 'The Mission',
        points: [
          'Make India a global leader in advanced materials commercialization',
          'Turn research into revenue, lab breakthroughs into market impact',
          'Bridge the gap that kills 99% of innovations',
          'Position India as materials innovation hub'
        ]
      },
      solution: {
        title: 'Why It Matters',
        points: [
          'Economic growth: Advanced materials = high-value manufacturing',
          'Self-reliance: Reduce import dependence',
          'Job creation: High-skill, high-wage materials science jobs',
          'Global competitiveness: India as innovation leader'
        ]
      },
      outcome: {
        title: 'What We\'ve Proven',
        points: [
          '4 products from lab to market in 4 years',
          '200+ installations demonstrating real-world impact',
          '5 more products in pipeline (scaling the model)',
          'By 2030: 20+ materials commercialized, 100+ partnerships'
        ]
      },
      oneLiner: 'We exist to solve one problem: Why do 99% of breakthrough materials never leave the lab? We\'re the 1% — and we help others join us.',
      useWhen: 'Brand storytelling, founder-led content, investor narratives, recruiting talent'
    }
  };

  const currentFramework = valuePropositions[selectedFramework];
  const Icon = currentFramework.icon;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-black mb-4">Value Proposition Frameworks</h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            7 comprehensive frameworks for communicating Monoatom's unique value
          </p>
          <p className="text-sm text-neutral-500 mt-2">
            Choose framework based on audience, context, and strategic positioning
          </p>
        </div>

        {/* Framework Selector */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-lg font-semibold text-black mb-4">Select Value Proposition Framework</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {Object.entries(valuePropositions).map(([key, framework]) => {
              const FrameworkIcon = framework.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedFramework(key)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedFramework === key
                      ? 'border-black bg-black text-white'
                      : 'border-neutral-200 hover:border-neutral-300 bg-white'
                  }`}
                >
                  <FrameworkIcon className="w-5 h-5 mb-2" />
                  <div className="text-xs font-medium">{framework.name}</div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Framework Preview */}
        <motion.div
          key={selectedFramework}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
        >
          {/* Framework Header */}
          <div className={`bg-gradient-to-r ${currentFramework.color} text-white p-12 text-center`}>
            <Icon className="w-16 h-16 mx-auto mb-4 opacity-90" />
            <h2 className="text-3xl font-bold mb-3">{currentFramework.name}</h2>
            <p className="text-lg opacity-90">{currentFramework.tagline}</p>
          </div>

          {/* Three-Column Layout */}
          <div className="p-8">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {/* Column 1 */}
              <div className="bg-red-50 rounded-lg p-6 border border-red-200">
                <h3 className="text-lg font-semibold text-red-900 mb-4">{currentFramework.problem.title}</h3>
                <ul className="space-y-2">
                  {currentFramework.problem.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-red-800">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 */}
              <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-4">{currentFramework.solution.title}</h3>
                <ul className="space-y-2">
                  {currentFramework.solution.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-blue-800">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3 */}
              <div className="bg-green-50 rounded-lg p-6 border border-green-200">
                <h3 className="text-lg font-semibold text-green-900 mb-4">{currentFramework.outcome.title}</h3>
                <ul className="space-y-2">
                  {currentFramework.outcome.points.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-sm text-green-800">{point}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* One-Liner */}
            <div className="bg-neutral-900 rounded-lg p-6 text-white">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-neutral-400 mb-2">Value Proposition One-Liner:</h3>
                  <p className="text-lg font-medium">{currentFramework.oneLiner}</p>
                </div>
                <button
                  onClick={() => copyToClipboard(currentFramework.oneLiner)}
                  className="text-neutral-400 hover:text-white transition-colors p-2 flex-shrink-0"
                >
                  {copiedText === currentFramework.oneLiner ? (
                    <Check className="w-5 h-5 text-green-400" />
                  ) : (
                    <Copy className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Use When */}
            <div className="mt-6 bg-amber-50 rounded-lg p-4 border border-amber-200">
              <h3 className="text-sm font-semibold text-amber-900 mb-2">Use When:</h3>
              <p className="text-amber-800 text-sm">{currentFramework.useWhen}</p>
            </div>
          </div>
        </motion.div>

        {/* Implementation Guide */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-black mb-6">Value Prop by Context</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-neutral-100">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-700">Context</th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-700">Recommended Framework</th>
                  <th className="px-4 py-3 text-left font-semibold text-neutral-700">Key Message</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 font-medium">Homepage Hero</td>
                  <td className="px-4 py-3 text-neutral-600">Problem-Solution</td>
                  <td className="px-4 py-3 text-neutral-600">"We turn breakthrough materials into market-ready products"</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Product Pages</td>
                  <td className="px-4 py-3 text-neutral-600">ROI-Focused</td>
                  <td className="px-4 py-3 text-neutral-600">"₹280/m³ savings, 40% strength gain"</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">About Page</td>
                  <td className="px-4 py-3 text-neutral-600">Mission-Driven</td>
                  <td className="px-4 py-3 text-neutral-600">"Bridging India's commercialization gap"</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Partnership Page</td>
                  <td className="px-4 py-3 text-neutral-600">Unique Mechanism</td>
                  <td className="px-4 py-3 text-neutral-600">"Integrated platform, proven results"</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Industry Pages</td>
                  <td className="px-4 py-3 text-neutral-600">Audience-Segmented</td>
                  <td className="px-4 py-3 text-neutral-600">Specific to construction/solar/auto</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 font-medium">Sales Presentations</td>
                  <td className="px-4 py-3 text-neutral-600">Benefit-Ladder</td>
                  <td className="px-4 py-3 text-neutral-600">Start functional, move to emotional</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium">Competitive Situations</td>
                  <td className="px-4 py-3 text-neutral-600">Differentiation</td>
                  <td className="px-4 py-3 text-neutral-600">"Proven, local, NABL-validated"</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
