import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../components/ui/SectionHeading';
import { industriesOverviewPresentation } from '../../presentation/pages/industries-overview';

const IndustriesOverview = () => {
  const copy = industriesOverviewPresentation;

  const industries = [
    {
      name: 'Construction & Infrastructure',
      path: '/industries/construction',
      description: 'High-performance concrete and durable materials for construction',
      products: ['Graphacrete']
    },
    {
      name: 'Solar & Clean Energy',
      path: '/industries/solar-energy',
      description: 'Efficiency enhancement and thermal management for solar energy',
      products: ['Graffisol']
    },
    {
      name: 'Automotive & Coatings',
      path: '/industries/automotive',
      description: 'Protective coatings and advanced materials for vehicles',
      products: ['Ceraphene', 'Graphyre']
    },
    {
      name: 'Advanced Materials',
      path: '/industries/advanced-materials',
      description: 'Breakthrough materials for aerospace, defense, and specialized applications',
      products: ['Graphosite', 'Armophene']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              {copy.hero.title}
            </h1>
            <p className="text-xl text-gray-300">
              {copy.hero.subtitle}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <section className="mb-16">
            <p className="text-lg text-gray-300 leading-relaxed text-center mb-12">
              Our graphene-based solutions deliver measurable performance improvements across diverse
              industries, from construction to clean energy, automotive to aerospace.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industries.map((industry, index) => (
                <Link
                  key={index}
                  to={industry.path}
                  className="bg-gray-800/50 p-8 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
                >
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">{industry.name}</h3>
                  <p className="text-gray-300 mb-4">{industry.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {industry.products.map((product, idx) => (
                      <span key={idx} className="bg-purple-900/30 px-3 py-1 rounded-full text-purple-300 text-sm">
                        {product}
                      </span>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-8 rounded-lg border border-purple-500/30 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Industry?</h2>
            <p className="text-lg text-gray-300 mb-6">
              We work across many sectors. Contact us to discuss your specific application needs.
            </p>
            <Link
              to="/contact"
              className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default IndustriesOverview;
