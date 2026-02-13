import React from 'react';
import { motion } from 'framer-motion';
import { Package, CheckCircle2, TrendingUp, ArrowRight } from 'lucide-react';

const ProductsFeaturedReal = () => {
  const products = [
    {
      name: 'Graphacrete',
      tagline: 'High-Performance Concrete Additive',
      description: 'Transform standard concrete into high-performance material with 50% strength increase, 15-20% cement reduction, and excellent crack resistance. NABL certified: M30 + Graphacrete ≈ M50.',
      benefits: [
        '40-50% compressive strength gain at 0.05-0.10% dosage',
        '30-45% water resistance improvement',
        '15-20% cement savings = reduced carbon footprint',
        'Best cost-to-performance ratio: ₹430/m³ savings'
      ],
      applications: 'High-rise construction, infrastructure, precast concrete, marine structures, sustainable housing',
      color: 'blue'
    },
    {
      name: 'Graffisol',
      tagline: 'Next-Generation Solar Panel Coating',
      description: 'Graphene nanocoating that enhances photon absorption, thermal management, and surface protection. Delivers 7-8% real-world energy output gain without electrical modifications.',
      benefits: [
        '7-8% power output increase (field & lab validated)',
        '5-6°C operating temperature reduction',
        '30-40% soiling loss reduction',
        '18-month payback for 1MW installations'
      ],
      applications: 'Utility-scale solar, rooftop installations, commercial solar, floating plants, panel retrofitting',
      color: 'green'
    },
    {
      name: 'Ceraphene',
      tagline: 'Ultra-Durable Ceramic Coating',
      description: 'Graphene-enhanced ceramic coating with 9H+ hardness providing industry-leading protection at 60-70% lower cost than premium alternatives.',
      benefits: [
        '9H+ scratch resistance with extreme durability',
        '3-4+ years lifecycle with low maintenance',
        'Ultra-hydrophobic, anti-static, stain-resistant',
        '₹5,000/50ml vs ₹15,000 competitors'
      ],
      applications: 'Automotive surfaces, motorcycles, marine vessels, architectural panels, industrial equipment',
      color: 'purple'
    },
    {
      name: 'HD-G-PE',
      tagline: 'Graphene-Reinforced Polymer Enhancer',
      description: 'Transform HDPE materials with 30% strength improvement and 20× elongation enhancement for pipes, films, and packaging applications.',
      benefits: [
        '+30% tensile & flexural strength',
        '20× elongation strength improvement',
        '+20% product lifespan increase',
        'Superior UV stability and crack resistance'
      ],
      applications: 'HDPE pipes, films, packaging, extrusion, injection molding',
      color: 'amber'
    }
  ];

  const colorClasses = {
    blue: 'from-blue-600 to-blue-800',
    green: 'from-green-600 to-green-800',
    purple: 'from-purple-600 to-purple-800',
    amber: 'from-amber-600 to-amber-800'
  };

  return (
    <section className="bg-neutral-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block bg-blue-100 border border-blue-300 rounded-full px-6 py-2 text-blue-800 font-semibold mb-6">
            Market-Ready Solutions
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-4">
            Featured Products
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Commercially validated graphene solutions with proven performance metrics
          </p>
        </motion.div>

        {/* Products - Actual Production Content */}
        <div className="space-y-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="bg-white rounded-2xl shadow-xl border border-neutral-200 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${colorClasses[product.color]} p-6 text-white`}>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-3xl font-black mb-2">{product.name}</h3>
                    <p className="text-xl opacity-90">{product.tagline}</p>
                  </div>
                  <Package className="w-12 h-12" />
                </div>
              </div>

              <div className="p-8">
                <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xl font-bold text-neutral-900 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                    Key Benefits:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <TrendingUp className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-neutral-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-neutral-100 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-neutral-900 mb-2">Applications:</h4>
                  <p className="text-neutral-700">{product.applications}</p>
                </div>

                <a
                  href={`/products/${product.name.toLowerCase()}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 hover:bg-neutral-800 text-white font-semibold rounded-lg transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsFeaturedReal;
