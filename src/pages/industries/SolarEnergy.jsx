import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../components/ui/SectionHeading';

const SolarEnergy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Solar & Clean Energy
            </h1>
            <p className="text-xl text-gray-300">
              Efficiency enhancement and thermal management solutions for solar energy
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <SectionHeading title="Industry Solutions" />
            <p className="text-lg text-gray-300 leading-relaxed">
              Boost solar panel efficiency with graphene nanocoatings that enhance photon absorption,
              improve thermal management, and provide superior surface protection.
            </p>
          </section>

          <section className="mb-16">
            <SectionHeading title="Applications" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Utility-Scale Solar Plants',
                'Rooftop Installations',
                'Commercial Solar',
                'Floating Solar Plants'
              ].map((app, index) => (
                <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                  <p className="text-lg text-gray-300">{app}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading title="Featured Product" />
            <div className="bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8 rounded-lg border border-purple-500/30">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Graffisol</h3>
              <p className="text-gray-300 mb-6">
                Next-generation solar panel coating delivering 10-12% energy output increase (field & lab validated) with improved thermal management and anti-soiling properties.
              </p>
              <Link
                to="/products/graffisol"
                className="inline-block px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </Link>
            </div>
          </section>

          <section className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Related Pages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/products/graffisol" className="text-purple-400 hover:text-purple-300 transition-colors">
                → Graffisol Product Page
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

export default SolarEnergy;
