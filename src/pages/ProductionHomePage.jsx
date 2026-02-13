import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building, Zap, Award, Users, Microscope, Factory, Droplet, Wind, Battery, Shield } from 'lucide-react';

export default function ProductionHomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-black text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItMnptMC0yaDJ2Mmgtdi0yem0wIDB2LTJoMnYyaC0yem0wIDB2LTJoLTJ2Mmgyem0wIDBIMzR2Mmgydi0yeiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl md:text-7xl font-bold mb-6">
              MONOATOM LABS
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-blue-400">
              Advanced Materials for 4th Industrial Revolution
            </h2>
            <p className="text-2xl mb-6 text-blue-300">Unlocking Trillion Dollar Economy</p>
            <p className="text-lg md:text-xl leading-relaxed mb-8 text-neutral-300">
              Monoatom Labs develops breakthrough materials engineered for the future—graphene derivatives, functional nanomaterials, bio-inspired chemistries, and performance-enhancing additives. Our innovations deliver superior strength, conductivity, durability, and environmental efficiency, enabling enterprises to rapidly transition into Industry 4.0.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/products"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold text-lg transition-colors flex items-center gap-2"
              >
                Explore Our Products <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/partnership"
                className="px-8 py-4 bg-white text-black hover:bg-neutral-100 rounded-lg font-semibold text-lg transition-colors"
              >
                Partner With Us
              </Link>
              <Link
                to="/contact"
                className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-black rounded-lg font-semibold text-lg transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 px-6 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">10+</div>
              <p className="text-neutral-600 font-medium">Breakthrough Innovations</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">5+</div>
              <p className="text-neutral-600 font-medium">Commercially Ready Products</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">2</div>
              <p className="text-neutral-600 font-medium">State-of-the-Art Facilities</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">5</div>
              <p className="text-neutral-600 font-medium">Pilot Technologies</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-black mb-16">Why Monoatom Labs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
              <Microscope className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-black mb-3">Scalable Graphene Solutions</h3>
              <p className="text-neutral-700 leading-relaxed">
                Provider of commercially viable graphene solutions for industrial applications. We focus on graphene as a transformative nanomaterial delivering clean air, clean water, clean energy, and a better life.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
              <Factory className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-black mb-3">From Lab to Manufacturing</h3>
              <p className="text-neutral-700 leading-relaxed">
                We don't just innovate in the lab—we ensure every breakthrough can scale from prototype to mass manufacturing. Our approach bridges deep-tech expertise with real-world industrial deployment.
              </p>
            </div>
            <div className="bg-neutral-50 rounded-xl p-8 border border-neutral-200">
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-black mb-3">Award-Winning Innovation</h3>
              <p className="text-neutral-700 leading-relaxed">
                Led by visionaries with global recognition including MIT TR35, TED Speaker, NASA Awardee, and 6-time President of India Award recipient. Scientific depth meets entrepreneurial execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-6 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Market-Ready Solutions</h2>
            <p className="text-xl text-neutral-600">Transforming industries with validated graphene innovations</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Graphacrete */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl p-8 border-2 border-neutral-200 hover:border-blue-400 transition-all shadow-lg"
            >
              <Building className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">Graphacrete</h3>
              <p className="text-lg text-neutral-600 mb-4">High-Performance Concrete Additive</p>
              <p className="text-neutral-700 mb-6">
                Transform standard concrete into high-performance material with 50% strength increase, 15-20% cement reduction, and excellent crack resistance. NABL certified: M30 + Graphacrete ≈ M50.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  40-50% compressive strength gain at 0.05-0.10% dosage
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  30-45% water resistance improvement
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  ₹430/m³ savings with best cost-to-performance ratio
                </div>
              </div>
              <Link
                to="/products/graphacrete"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Graffisol */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl p-8 border-2 border-neutral-200 hover:border-blue-400 transition-all shadow-lg"
            >
              <Zap className="w-12 h-12 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">Graffisol</h3>
              <p className="text-lg text-neutral-600 mb-4">Next-Generation Solar Panel Coating</p>
              <p className="text-neutral-700 mb-6">
                Graphene nanocoating that enhances photon absorption, thermal management, and surface protection. Delivers 7-8% real-world energy output gain without electrical modifications.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  7-8% power output increase (field & lab validated)
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  5-6°C operating temperature reduction
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  18-month payback for 1MW installations
                </div>
              </div>
              <Link
                to="/products/graffisol"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Ceraphene */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl p-8 border-2 border-neutral-200 hover:border-blue-400 transition-all shadow-lg"
            >
              <Shield className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">Ceraphene</h3>
              <p className="text-lg text-neutral-600 mb-4">Ultra-Durable Ceramic Coating</p>
              <p className="text-neutral-700 mb-6">
                Graphene-enhanced ceramic coating with 9H+ hardness providing industry-leading protection at 60-70% lower cost than premium alternatives.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  9H+ scratch resistance with extreme durability
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  3-4+ years lifecycle with low maintenance
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  ₹5,000/50ml vs ₹15,000 competitors
                </div>
              </div>
              <Link
                to="/products/ceraphene"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* HD-G-PE */}
            <motion.div
              whileHover={{ y: -4 }}
              className="bg-white rounded-xl p-8 border-2 border-neutral-200 hover:border-blue-400 transition-all shadow-lg"
            >
              <Battery className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-black mb-2">HD-G-PE</h3>
              <p className="text-lg text-neutral-600 mb-4">Graphene-Reinforced Polymer Enhancer</p>
              <p className="text-neutral-700 mb-6">
                Transform HDPE materials with 30% strength improvement and 20× elongation enhancement for pipes, films, and packaging applications.
              </p>
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  +30% tensile & flexural strength
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  20× elongation strength improvement
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-700">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  +20% product lifespan increase
                </div>
              </div>
              <Link
                to="/products/hd-g-pe"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-neutral-800 rounded-lg font-semibold text-lg transition-colors"
            >
              View All Products <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Innovation Pipeline */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Innovation Pipeline</h2>
            <p className="text-xl text-neutral-600">Next-Generation Products in Development</p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { name: 'Rustene', desc: 'Anti-corrosion paint' },
              { name: 'Graphyre', desc: 'Reinforced tyres' },
              { name: 'Graphosite', desc: 'Lightweight composites' },
              { name: 'Thermaphene', desc: 'Graphene-based heating' },
              { name: 'Armophene', desc: 'Flexible armor' }
            ].map((product, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 border border-blue-200 text-center">
                <h3 className="text-lg font-bold text-black mb-2">{product.name}</h3>
                <p className="text-sm text-neutral-600">{product.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/products/pipeline"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              Explore Innovation Pipeline <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 px-6 bg-gradient-to-br from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Industries We Serve</h2>
            <p className="text-xl text-neutral-600">Transforming Multiple Sectors</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Building, name: 'Construction & Infrastructure', desc: 'High-performance concrete, durable materials' },
              { icon: Zap, name: 'Solar & Clean Energy', desc: 'Efficiency enhancement, thermal management' },
              { icon: Shield, name: 'Automotive & Coatings', desc: 'Protective coatings, reinforced polymers' },
              { icon: Wind, name: 'Aerospace & Defense', desc: 'Lightweight composites, specialized components' },
              { icon: Droplet, name: 'Water & Filtration', desc: 'Membrane technologies, purification systems' },
              { icon: Factory, name: 'Advanced Manufacturing', desc: 'Polymer enhancement, performance additives' }
            ].map((industry, index) => {
              const Icon = industry.icon;
              return (
                <div key={index} className="bg-white rounded-lg p-6 border border-neutral-200 hover:border-blue-400 transition-all">
                  <Icon className="w-10 h-10 text-blue-600 mb-4" />
                  <h3 className="text-lg font-bold text-black mb-2">{industry.name}</h3>
                  <p className="text-sm text-neutral-600">{industry.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-neutral-800 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Industries <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Partnership-Driven Innovation</h2>
            <p className="text-xl text-neutral-600">Flexible collaboration approach to accelerate industrial adoption</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-8 border-2 border-blue-200">
              <h3 className="text-2xl font-bold text-black mb-4">JV-SPV Model</h3>
              <p className="text-neutral-700 mb-4">
                Partner through Joint Ventures via Special Purpose Vehicles to co-develop, manufacture, and commercialize products. Shared risk, shared IP value, long-term strategic alignment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  Accelerated commercialization
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  Capital-efficient scaling
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5"></div>
                  IP-protected collaboration
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold text-black mb-4">Technology Licensing</h3>
              <p className="text-neutral-700 mb-4">
                License our proprietary formulations, processes, and IP for rapid integration into existing production lines with structured royalty and technical support.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                  Rapid market entry
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                  Flexible entry and expansion
                </li>
                <li className="flex items-start gap-2 text-sm text-neutral-700">
                  <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5"></div>
                  Technical support included
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/partnership"
              className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white hover:bg-neutral-800 rounded-lg font-semibold text-lg transition-colors"
            >
              Partner With Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl mb-8 opacity-90">
            Whether you're looking to enhance product performance, reduce costs, or develop breakthrough solutions, Monoatom Labs has the expertise and technology to help you succeed.
          </p>
          <p className="text-2xl font-semibold mb-8">Let's build the future together.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/products"
              className="px-8 py-4 bg-white text-blue-600 hover:bg-neutral-100 rounded-lg font-semibold text-lg transition-colors"
            >
              Explore Products
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-600 rounded-lg font-semibold text-lg transition-colors"
            >
              Schedule Consultation
            </Link>
            <Link
              to="/partnership"
              className="px-8 py-4 bg-black text-white hover:bg-neutral-800 rounded-lg font-semibold text-lg transition-colors"
            >
              Partnership Opportunities
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
