import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { homePageVariations, categories } from '../data/homePageVariations';
import { Hexagon, Star, MessageSquare, Award, Target, Sparkles, Building2, Package, Handshake, Factory, Atom, MousePointerClick, LayoutGrid, Rocket, Globe, ArrowRight, ExternalLink, Home } from 'lucide-react';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVariations = selectedCategory === 'All'
    ? homePageVariations
    : homePageVariations.filter(v => v.category === selectedCategory);

  const recommendedVariations = homePageVariations.filter(v => v.recommended);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Hexagon className="w-8 h-8 text-neutral-900 fill-neutral-900/10" strokeWidth={1.5} />
              <div>
                <h1 className="text-2xl font-bold text-neutral-900">Home Page Content Lab</h1>
                <p className="text-sm text-neutral-500">Monoatom Labs • Content Variations Testing</p>
              </div>
            </div>
            <div className="text-sm text-neutral-500">
              {homePageVariations.length} Variations Available
            </div>
          </div>
        </div>
      </header>

      {/* Quick Overview Section */}
      {selectedCategory === 'All' && (
        <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-3">Complete Content Lab Overview</h2>
              <p className="text-neutral-300 text-lg">Everything you need to build and test Monoatom's web presence</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-lg p-5 text-center border border-white/20">
                <div className="text-4xl font-bold text-blue-400 mb-2">1</div>
                <p className="text-sm font-semibold mb-1">Production Website</p>
                <p className="text-xs text-neutral-400">Real content, ready to deploy</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-5 text-center border border-white/20">
                <div className="text-4xl font-bold text-green-400 mb-2">50+</div>
                <p className="text-sm font-semibold mb-1">Homepage Variations</p>
                <p className="text-xs text-neutral-400">Alternative content approaches</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-5 text-center border border-white/20">
                <div className="text-4xl font-bold text-purple-400 mb-2">12</div>
                <p className="text-sm font-semibold mb-1">Interactive Pages</p>
                <p className="text-xs text-neutral-400">Fully functional showcases</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-5 text-center border border-white/20">
                <div className="text-4xl font-bold text-pink-400 mb-2">500+</div>
                <p className="text-sm font-semibold mb-1">Total Variations</p>
                <p className="text-xs text-neutral-400">Content options available</p>
              </div>
            </div>

            <div className="text-center text-sm text-neutral-400">
              Scroll down to explore: Production Site • Homepage Alternatives • Universal Frameworks • Page Templates
            </div>
          </div>
        </section>
      )}

      {/* Production Website Section */}
      {selectedCategory === 'All' && (
        <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Globe className="w-12 h-12" />
              <div>
                <h2 className="text-3xl font-bold">Production Website</h2>
                <p className="text-blue-100">Real content from website-content directory</p>
              </div>
            </div>
            <div className="max-w-4xl mx-auto text-center mb-8">
              <p className="text-xl leading-relaxed mb-6">
                View the complete production-ready website with actual content, products, and company information integrated from the website-content directory.
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">4 Products</div>
                  <p className="text-sm text-blue-100">Graphacrete, Graffisol, Ceraphene, HD-G-PE</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">5 Pipeline</div>
                  <p className="text-sm text-blue-100">Next-gen innovations in development</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <div className="text-2xl font-bold mb-1">Real Data</div>
                  <p className="text-sm text-blue-100">Actual specs, pricing, and metrics</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <Link
                to="/production-site"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 hover:bg-blue-50 rounded-xl font-bold text-xl transition-all shadow-2xl hover:scale-105"
              >
                <Globe className="w-6 h-6" />
                View Production Website
                <ArrowRight className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Recommended Section */}
      {selectedCategory === 'All' && recommendedVariations.length > 0 && (
        <section className="bg-gradient-to-br from-neutral-900 to-neutral-800 text-white py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              <h2 className="text-xl font-bold">Recommended Variations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recommendedVariations.map((variation) => (
                <Link
                  key={variation.id}
                  to={`/variation/${variation.id}`}
                  className="group bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <variation.icon className="w-8 h-8 text-yellow-400" />
                    <span className="text-xs font-bold text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded-full">
                      RECOMMENDED
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-yellow-400 transition-colors">
                    {variation.name}
                  </h3>
                  <p className="text-sm text-neutral-300 mb-4">
                    {variation.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {variation.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-medium bg-white/10 px-2 py-1 rounded-full text-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Homepage Alternative Content Section */}
      {selectedCategory === 'All' && (
        <section className="bg-gradient-to-br from-green-50 to-teal-50 py-12 px-6 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Home className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-neutral-900">Homepage Alternative Content</h2>
              <span className="text-xs font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full">
                50+ VARIATIONS
              </span>
            </div>
            <p className="text-neutral-600 mb-8 max-w-3xl">
              Browse 50+ alternative homepage section variations. Each variation offers a different approach to presenting heroes, products, technology, and company story. Test different messaging strategies and find what resonates best with your audience.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg p-5 border-2 border-green-200">
                <h3 className="font-bold text-black mb-2">Hero Sections</h3>
                <p className="text-sm text-neutral-600 mb-3">Multiple hero approaches from problem-focused to credibility-led</p>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block">
                  {homePageVariations.filter(v => v.category === 'Hero').length} variations
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border-2 border-green-200">
                <h3 className="font-bold text-black mb-2">Introduction Sections</h3>
                <p className="text-sm text-neutral-600 mb-3">Different ways to introduce the company and mission</p>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block">
                  {homePageVariations.filter(v => v.category === 'Intro').length} variations
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border-2 border-green-200">
                <h3 className="font-bold text-black mb-2">Product Showcases</h3>
                <p className="text-sm text-neutral-600 mb-3">Various formats for presenting product portfolios</p>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block">
                  {homePageVariations.filter(v => v.category === 'Products').length} variations
                </div>
              </div>
              <div className="bg-white rounded-lg p-5 border-2 border-green-200">
                <h3 className="font-bold text-black mb-2">Technology & Team</h3>
                <p className="text-sm text-neutral-600 mb-3">Platform capabilities and leadership presentations</p>
                <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded inline-block">
                  {homePageVariations.filter(v => v.category === 'Technology' || v.category === 'Leadership').length} variations
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 border-2 border-green-300">
              <h3 className="text-lg font-bold text-black mb-3 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                Recommended Variations
              </h3>
              <p className="text-neutral-600 mb-4">
                Our top picks based on performance, clarity, and conversion potential. Start here if you're unsure which variation to test first.
              </p>
              <div className="flex flex-wrap gap-3">
                {recommendedVariations.map((variation) => (
                  <Link
                    key={variation.id}
                    to={`/variation/${variation.id}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 hover:bg-green-200 text-green-800 rounded-lg text-sm font-medium transition-colors border border-green-300"
                  >
                    <variation.icon className="w-4 h-4" />
                    {variation.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-neutral-600 mb-3">Scroll down to browse all {homePageVariations.length} homepage variations by category</p>
              <button
                onClick={() => window.scrollTo({ top: document.querySelector('.overflow-x-auto').offsetTop - 100, behavior: 'smooth' })}
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
              >
                Browse All Homepage Variations
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      )}

      {/* New Framework Pages Section */}
      {selectedCategory === 'All' && (
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-12 px-6 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h2 className="text-xl font-bold text-neutral-900">New: Universal Content Frameworks</h2>
              <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-full">
                V2.0
              </span>
            </div>
            <p className="text-neutral-600 mb-6 max-w-3xl">
              Strategic frameworks applicable across your entire site — hero messaging, trust-building, and value propositions for every context.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                to="/hero-messaging"
                className="group bg-white rounded-xl p-6 border-2 border-blue-200 hover:border-blue-400 transition-all shadow-sm hover:shadow-md"
              >
                <MessageSquare className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-neutral-900 group-hover:text-blue-600 transition-colors">
                  Hero Messaging Variations
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  10 comprehensive hero frameworks for maximum impact — from problem-solution to vision-led narratives.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    10 Frameworks
                  </span>
                  <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    A/B Testing
                  </span>
                  <span className="text-xs font-medium bg-blue-100 text-blue-700 px-2 py-1 rounded-full">
                    Copy-Paste Ready
                  </span>
                </div>
              </Link>

              <Link
                to="/trust-credibility"
                className="group bg-white rounded-xl p-6 border-2 border-amber-200 hover:border-amber-400 transition-all shadow-sm hover:shadow-md"
              >
                <Award className="w-10 h-10 text-amber-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-neutral-900 group-hover:text-amber-600 transition-colors">
                  Trust & Credibility Building
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  9 frameworks for building visitor confidence — certifications, testimonials, traction, and more.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                    9 Frameworks
                  </span>
                  <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                    Site-Wide Strategy
                  </span>
                  <span className="text-xs font-medium bg-amber-100 text-amber-700 px-2 py-1 rounded-full">
                    Priority Matrix
                  </span>
                </div>
              </Link>

              <Link
                to="/value-propositions"
                className="group bg-white rounded-xl p-6 border-2 border-purple-200 hover:border-purple-400 transition-all shadow-sm hover:shadow-md"
              >
                <Target className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-lg font-bold mb-2 text-neutral-900 group-hover:text-purple-600 transition-colors">
                  Value Proposition Frameworks
                </h3>
                <p className="text-sm text-neutral-600 mb-4">
                  7 complete frameworks for articulating unique value — ROI-focused, audience-segmented, and more.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="text-xs font-medium bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    7 Frameworks
                  </span>
                  <span className="text-xs font-medium bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    One-Liners Library
                  </span>
                  <span className="text-xs font-medium bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                    By Context Guide
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* All Lab Showcases Section */}
      {selectedCategory === 'All' && (
        <section className="bg-white py-12 px-6 border-b border-neutral-200">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">All Content Lab Showcases</h2>
              <p className="text-neutral-600">12 fully interactive pages with 500+ content variations</p>
            </div>

            {/* Page-Specific Variations */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Page-Specific Variations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <Link
                  to="/about"
                  className="group bg-neutral-50 hover:bg-neutral-100 rounded-lg p-5 border border-neutral-200 hover:border-neutral-300 transition-all"
                >
                  <Building2 className="w-8 h-8 text-neutral-700 mb-3" />
                  <h4 className="font-bold text-neutral-900 mb-1">About Company</h4>
                  <p className="text-sm text-neutral-600 mb-3">4 hero variations, company story, three pillars framework</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">4 Heroes</span>
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">Story Framework</span>
                  </div>
                </Link>

                <Link
                  to="/products"
                  className="group bg-neutral-50 hover:bg-neutral-100 rounded-lg p-5 border border-neutral-200 hover:border-neutral-300 transition-all"
                >
                  <Package className="w-8 h-8 text-neutral-700 mb-3" />
                  <h4 className="font-bold text-neutral-900 mb-1">Product Pages</h4>
                  <p className="text-sm text-neutral-600 mb-3">4 products, 4 hero variations each, ROI calculator</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">4 Products</span>
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">ROI Calc</span>
                  </div>
                </Link>

                <Link
                  to="/partnership"
                  className="group bg-neutral-50 hover:bg-neutral-100 rounded-lg p-5 border border-neutral-200 hover:border-neutral-300 transition-all"
                >
                  <Handshake className="w-8 h-8 text-neutral-700 mb-3" />
                  <h4 className="font-bold text-neutral-900 mb-1">Partnership Models</h4>
                  <p className="text-sm text-neutral-600 mb-3">2 partnership models, side-by-side comparison</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">JV-SPV</span>
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">Licensing</span>
                  </div>
                </Link>

                <Link
                  to="/industries"
                  className="group bg-neutral-50 hover:bg-neutral-100 rounded-lg p-5 border border-neutral-200 hover:border-neutral-300 transition-all"
                >
                  <Factory className="w-8 h-8 text-neutral-700 mb-3" />
                  <h4 className="font-bold text-neutral-900 mb-1">Industry Solutions</h4>
                  <p className="text-sm text-neutral-600 mb-3">4 industry templates with challenge-solution framework</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">4 Industries</span>
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">Case Studies</span>
                  </div>
                </Link>

                <Link
                  to="/technology"
                  className="group bg-neutral-50 hover:bg-neutral-100 rounded-lg p-5 border border-neutral-200 hover:border-neutral-300 transition-all"
                >
                  <Atom className="w-8 h-8 text-neutral-700 mb-3" />
                  <h4 className="font-bold text-neutral-900 mb-1">Technology Platform</h4>
                  <p className="text-sm text-neutral-600 mb-3">4 technology pillars, innovation pipeline, facilities</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">4 Pillars</span>
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">Pipeline</span>
                  </div>
                </Link>

                <Link
                  to="/cta-library"
                  className="group bg-neutral-50 hover:bg-neutral-100 rounded-lg p-5 border border-neutral-200 hover:border-neutral-300 transition-all"
                >
                  <MousePointerClick className="w-8 h-8 text-neutral-700 mb-3" />
                  <h4 className="font-bold text-neutral-900 mb-1">CTA Library</h4>
                  <p className="text-sm text-neutral-600 mb-3">200+ CTA variations with copy-to-clipboard</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">200+ CTAs</span>
                    <span className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded">Copy Function</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Universal Frameworks (Already shown above, but listed for completeness) */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Universal Content Frameworks</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link
                  to="/hero-messaging"
                  className="group bg-blue-50 hover:bg-blue-100 rounded-lg p-5 border border-blue-200 hover:border-blue-300 transition-all"
                >
                  <MessageSquare className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-bold text-neutral-900 mb-1">Hero Messaging</h4>
                  <p className="text-sm text-neutral-600 mb-3">10 hero frameworks with A/B testing guide</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">10 Frameworks</span>
                    <span className="text-xs bg-blue-200 text-blue-800 px-2 py-1 rounded">NEW</span>
                  </div>
                </Link>

                <Link
                  to="/trust-credibility"
                  className="group bg-amber-50 hover:bg-amber-100 rounded-lg p-5 border border-amber-200 hover:border-amber-300 transition-all"
                >
                  <Award className="w-8 h-8 text-amber-600 mb-3" />
                  <h4 className="font-bold text-neutral-900 mb-1">Trust & Credibility</h4>
                  <p className="text-sm text-neutral-600 mb-3">9 trust-building frameworks with priority matrix</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded">9 Frameworks</span>
                    <span className="text-xs bg-amber-200 text-amber-800 px-2 py-1 rounded">NEW</span>
                  </div>
                </Link>

                <Link
                  to="/value-propositions"
                  className="group bg-purple-50 hover:bg-purple-100 rounded-lg p-5 border border-purple-200 hover:border-purple-300 transition-all"
                >
                  <Target className="w-8 h-8 text-purple-600 mb-3" />
                  <h4 className="font-bold text-neutral-900 mb-1">Value Propositions</h4>
                  <p className="text-sm text-neutral-600 mb-3">7 value prop frameworks with one-liners</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">7 Frameworks</span>
                    <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">NEW</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Product-Specific Showcases */}
            <div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-4">Product Showcases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  to="/product-showcase"
                  className="group bg-green-50 hover:bg-green-100 rounded-lg p-5 border border-green-200 hover:border-green-300 transition-all"
                >
                  <LayoutGrid className="w-8 h-8 text-green-600 mb-3" />
                  <h4 className="font-bold text-neutral-900 mb-1">Product Showcase Variations</h4>
                  <p className="text-sm text-neutral-600 mb-3">5+ approaches for presenting commercial products</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">5+ Approaches</span>
                    <span className="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">NEW</span>
                  </div>
                </Link>

                <Link
                  to="/pipeline-products"
                  className="group bg-pink-50 hover:bg-pink-100 rounded-lg p-5 border border-pink-200 hover:border-pink-300 transition-all"
                >
                  <Rocket className="w-8 h-8 text-pink-600 mb-3" />
                  <h4 className="font-bold text-neutral-900 mb-1">Pipeline Products</h4>
                  <p className="text-sm text-neutral-600 mb-3">6 frameworks for showcasing innovation pipeline</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-pink-200 text-pink-800 px-2 py-1 rounded">6 Frameworks</span>
                    <span className="text-xs bg-pink-200 text-pink-800 px-2 py-1 rounded">NEW</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

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
                    ? 'bg-neutral-900 text-white'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Variations Grid */}
      <section className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            {selectedCategory === 'All' ? 'All Variations' : selectedCategory}
            <span className="text-neutral-400 font-normal ml-3">
              ({filteredVariations.length})
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVariations.map((variation) => (
              <Link
                key={variation.id}
                to={`/variation/${variation.id}`}
                className="group bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-xl hover:border-neutral-300 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <variation.icon className="w-8 h-8 text-neutral-600 group-hover:text-neutral-900 transition-colors" />
                  {variation.recommended && (
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  )}
                </div>

                <div className="mb-3">
                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
                    {variation.category}
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-neutral-600 transition-colors">
                    {variation.name}
                  </h3>
                </div>

                <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
                  {variation.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {variation.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium bg-neutral-100 px-2 py-1 rounded-full text-neutral-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-neutral-200 px-6 py-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-neutral-500">
          <p>Monoatom Labs - Home Page Content Lab</p>
          <p className="mt-2">Built with React + Vite + Tailwind CSS + Framer Motion</p>
        </div>
      </footer>
    </div>
  );
};

export default Catalog;
