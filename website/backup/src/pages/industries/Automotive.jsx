import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../components/ui/SectionHeading';

const Automotive = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Automotive & Coatings
            </h1>
            <p className="text-xl text-gray-300">
              Protective coatings and advanced materials for automotive applications
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <SectionHeading title="Industry Solutions" />
            <p className="text-lg text-gray-300 leading-relaxed">
              Enhance automotive surfaces and components with graphene-based coatings and materials
              that provide superior protection, performance, and longevity.
            </p>
          </section>

          <section className="mb-16">
            <SectionHeading title="Applications" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Automotive Surface Protection',
                'Motorcycles',
                'Marine Vessels',
                'Tire Technology',
                'Anti-Corrosion Coatings'
              ].map((app, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                  <p className="text-lg text-gray-300">{app}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading title="Featured Products" />
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-lg border border-purple-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-purple-400">Ceraphene</h3>
                  <span className="bg-green-900/30 px-3 py-1 rounded-full text-green-400 text-sm">Available</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Ultra-durable ceramic coating with 9H+ hardness at 60-70% lower cost than premium alternatives.
                </p>
                <Link to="/products/ceraphene" className="text-purple-400 hover:text-purple-300">
                  Learn More →
                </Link>
              </div>

              <div className="bg-gradient-to-r from-orange-900/20 to-red-900/20 p-8 rounded-lg border border-orange-500/30">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-orange-400">Graphyre</h3>
                  <span className="bg-orange-900/30 px-3 py-1 rounded-full text-orange-400 text-sm">Pipeline</span>
                </div>
                <p className="text-gray-300 mb-4">
                  Graphene-reinforced tire technology with improved strength and reduced rolling resistance.
                </p>
                <Link to="/products/pipeline/graphyre" className="text-orange-400 hover:text-orange-300">
                  Learn More →
                </Link>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/products/ceraphene" className="text-purple-400 hover:text-purple-300 transition-colors">
                → Ceraphene Product Page
              </Link>
              <Link to="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">
                → Contact Us
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Automotive;
