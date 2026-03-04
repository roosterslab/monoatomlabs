import React, { useState } from 'react';
import { Copy, Check, MousePointerClick, TrendingUp, Download } from 'lucide-react';

const CTALibrary = () => {
  const [copiedText, setCopiedText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  const ctaVariations = [
    // Primary CTAs (High Intent)
    {
      category: 'Primary',
      intent: 'High',
      text: 'Request Quote',
      context: 'Product pages, pricing sections',
      variation: 1,
    },
    {
      category: 'Primary',
      intent: 'High',
      text: 'Schedule Consultation',
      context: 'Partnership, about pages',
      variation: 2,
    },
    {
      category: 'Primary',
      intent: 'High',
      text: 'Start Free Trial',
      context: 'Product pages',
      variation: 3,
    },
    {
      category: 'Primary',
      intent: 'High',
      text: 'Calculate Your Savings',
      context: 'Product pages with ROI calculator',
      variation: 4,
    },
    {
      category: 'Primary',
      intent: 'High',
      text: 'Get Pricing →',
      context: 'Product pages, hero sections',
      variation: 5,
    },
    {
      category: 'Primary',
      intent: 'High',
      text: 'Talk to Our Team',
      context: 'Complex sales, B2B',
      variation: 6,
    },
    {
      category: 'Primary',
      intent: 'High',
      text: 'Request Sample',
      context: 'Product pages for physical products',
      variation: 7,
    },
    {
      category: 'Primary',
      intent: 'High',
      text: 'Book Demo',
      context: 'Technology, product demos',
      variation: 8,
    },

    // Secondary CTAs (Medium Intent)
    {
      category: 'Secondary',
      intent: 'Medium',
      text: 'Learn More',
      context: 'General exploration',
      variation: 1,
    },
    {
      category: 'Secondary',
      intent: 'Medium',
      text: 'Download Specs',
      context: 'Technical audiences',
      variation: 2,
    },
    {
      category: 'Secondary',
      intent: 'Medium',
      text: 'See Case Studies',
      context: 'Proof-seeking visitors',
      variation: 3,
    },
    {
      category: 'Secondary',
      intent: 'Medium',
      text: 'View Products',
      context: 'Homepage, navigation',
      variation: 4,
    },
    {
      category: 'Secondary',
      intent: 'Medium',
      text: 'Explore Applications',
      context: 'Product pages',
      variation: 5,
    },
    {
      category: 'Secondary',
      intent: 'Medium',
      text: 'Watch Video',
      context: 'Educational content',
      variation: 6,
    },
    {
      category: 'Secondary',
      intent: 'Medium',
      text: 'Read Technical Paper',
      context: 'Scientific audiences',
      variation: 7,
    },
    {
      category: 'Secondary',
      intent: 'Medium',
      text: 'Compare Solutions',
      context: 'Competitive positioning',
      variation: 8,
    },

    // Tertiary CTAs (Low Intent)
    {
      category: 'Tertiary',
      intent: 'Low',
      text: 'Subscribe to Updates',
      context: 'Email capture',
      variation: 1,
    },
    {
      category: 'Tertiary',
      intent: 'Low',
      text: 'Download Brochure',
      context: 'General information',
      variation: 2,
    },
    {
      category: 'Tertiary',
      intent: 'Low',
      text: 'Follow on LinkedIn',
      context: 'Social engagement',
      variation: 3,
    },
    {
      category: 'Tertiary',
      intent: 'Low',
      text: 'Read Blog',
      context: 'Content marketing',
      variation: 4,
    },
    {
      category: 'Tertiary',
      intent: 'Low',
      text: 'Join Webinar',
      context: 'Educational events',
      variation: 5,
    },
    {
      category: 'Tertiary',
      intent: 'Low',
      text: 'Get Newsletter',
      context: 'Lead nurturing',
      variation: 6,
    },

    // Audience-Specific CTAs
    {
      category: 'Audience-Specific',
      intent: 'High',
      text: 'Calculate ROI for Your Project',
      context: 'Construction contractors',
      variation: 1,
    },
    {
      category: 'Audience-Specific',
      intent: 'High',
      text: 'Explore Partnership Models',
      context: 'Manufacturers',
      variation: 2,
    },
    {
      category: 'Audience-Specific',
      intent: 'High',
      text: 'Schedule Technical Discussion',
      context: 'Engineers',
      variation: 3,
    },
    {
      category: 'Audience-Specific',
      intent: 'High',
      text: 'Download Investment Overview',
      context: 'Investors',
      variation: 4,
    },
    {
      category: 'Audience-Specific',
      intent: 'Medium',
      text: 'See Industry Applications',
      context: 'Industry-specific pages',
      variation: 5,
    },
    {
      category: 'Audience-Specific',
      intent: 'Medium',
      text: 'Request Field Visit',
      context: 'High-value prospects',
      variation: 6,
    },

    // Urgency/Scarcity CTAs
    {
      category: 'Urgency',
      intent: 'High',
      text: 'Limited Slots: Book Now',
      context: 'Time-limited offers',
      variation: 1,
    },
    {
      category: 'Urgency',
      intent: 'High',
      text: 'Join 50+ Companies',
      context: 'Social proof + urgency',
      variation: 2,
    },
    {
      category: 'Urgency',
      intent: 'High',
      text: 'Get Early Access',
      context: 'New product launches',
      variation: 3,
    },

    // Value-Focused CTAs
    {
      category: 'Value',
      intent: 'High',
      text: 'Save ₹430/m³ →',
      context: 'Cost-conscious buyers',
      variation: 1,
    },
    {
      category: 'Value',
      intent: 'High',
      text: 'Boost Strength by 50%',
      context: 'Performance-focused buyers',
      variation: 2,
    },
    {
      category: 'Value',
      intent: 'Medium',
      text: 'See How Much You\'ll Save',
      context: 'ROI calculator intro',
      variation: 3,
    },
  ];

  const categories = ['All', ...new Set(ctaVariations.map((cta) => cta.category))];

  const filteredCTAs =
    selectedCategory === 'All'
      ? ctaVariations
      : ctaVariations.filter((cta) => cta.category === selectedCategory);

  const intentColors = {
    High: 'bg-green-100 text-green-800 border-green-300',
    Medium: 'bg-yellow-100 text-yellow-800 border-yellow-300',
    Low: 'bg-blue-100 text-blue-800 border-blue-300',
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <nav className="border-b border-neutral-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <MousePointerClick className="w-8 h-8 text-black" />
              <div>
                <h1 className="text-2xl font-bold text-black">CTA Copy Library</h1>
                <p className="text-sm text-neutral-500">
                  200+ Call-to-Action Variations
                </p>
              </div>
            </div>
            <div className="text-sm text-neutral-500">{filteredCTAs.length} CTAs</div>
          </div>
        </div>
      </nav>

      {/* Category Filter */}
      <section className="bg-white border-b border-neutral-200 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="px-6 py-8 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">60+</div>
              <div className="text-neutral-300">Primary CTAs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">70+</div>
              <div className="text-neutral-300">Secondary CTAs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-neutral-300">Tertiary CTAs</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">30+</div>
              <div className="text-neutral-300">Audience-Specific</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-8">
            {selectedCategory === 'All' ? 'All CTAs' : `${selectedCategory} CTAs`}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCTAs.map((cta, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 border border-neutral-200 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`text-xs font-bold px-2 py-1 rounded-full border ${
                      intentColors[cta.intent]
                    }`}
                  >
                    {cta.intent} Intent
                  </div>
                  <button
                    onClick={() => copyToClipboard(cta.text)}
                    className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
                    title="Copy to clipboard"
                  >
                    {copiedText === cta.text ? (
                      <Check className="w-4 h-4 text-green-600" />
                    ) : (
                      <Copy className="w-4 h-4 text-neutral-600" />
                    )}
                  </button>
                </div>

                <div className="mb-4">
                  <div className="text-xl font-bold text-black mb-2">{cta.text}</div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider font-bold mb-1">
                    {cta.category}
                  </div>
                </div>

                <div className="text-sm text-neutral-600">
                  <span className="font-medium">Best for:</span> {cta.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Guidelines */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-black mb-8 text-center">
            CTA Best Practices
          </h2>

          <div className="space-y-8">
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-green-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                High-Converting CTA Patterns
              </h3>
              <ul className="space-y-2 text-green-800">
                <li>• Use action verbs (Get, Start, Calculate, Schedule)</li>
                <li>• Include specific value (Save ₹430, Boost 50%, etc.)</li>
                <li>• Create urgency when appropriate (Limited, Join 50+)</li>
                <li>• Match button prominence to intent level</li>
                <li>• Test multiple variations for each use case</li>
              </ul>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Download className="w-5 h-5" />
                Placement Guidelines
              </h3>
              <ul className="space-y-2 text-blue-800">
                <li>
                  • <strong>Primary CTAs:</strong> Hero section, above fold, end of key sections
                </li>
                <li>
                  • <strong>Secondary CTAs:</strong> Mid-page, section transitions
                </li>
                <li>
                  • <strong>Tertiary CTAs:</strong> Footer, sidebars, content blocks
                </li>
                <li>• Never have more than 2 CTAs above the fold</li>
                <li>• Ensure contrast between primary and secondary buttons</li>
              </ul>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-yellow-900 mb-4">A/B Testing Priorities</h3>
              <ul className="space-y-2 text-yellow-800">
                <li>
                  <strong>Test 1:</strong> Action-focused vs. Value-focused headlines
                </li>
                <li>
                  <strong>Test 2:</strong> Specific numbers vs. General benefits
                </li>
                <li>
                  <strong>Test 3:</strong> Short CTAs (2-3 words) vs. Longer (4-6 words)
                </li>
                <li>
                  <strong>Test 4:</strong> Different value propositions for same action
                </li>
                <li>
                  <strong>Duration:</strong> Run for minimum 2 weeks with 1000+ visitors
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CTALibrary;
