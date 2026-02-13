import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../components/ui/SectionHeading';

const Platform = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Technology Platform
            </h1>
            <p className="text-xl text-gray-300">
              Advanced graphene technology platform enabling breakthrough material innovations
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <SectionHeading title="Our Technology Platform" />
            <p className="text-lg text-gray-300 leading-relaxed">
              Monoatom Labs has developed a comprehensive technology platform that enables the rapid
              development, validation, and commercialization of graphene-based solutions across
              multiple industries.
            </p>
          </section>

          <section className="mb-16">
            <SectionHeading title="Core Capabilities" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Graphene Synthesis</h3>
                <p className="text-gray-300">
                  Advanced synthesis methods for high-quality graphene production with controlled
                  properties and scalable processes.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Functionalization</h3>
                <p className="text-gray-300">
                  Proprietary techniques for functionalizing graphene to achieve specific performance
                  characteristics for diverse applications.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Dispersion Technology</h3>
                <p className="text-gray-300">
                  Advanced dispersion methods ensuring uniform distribution of graphene in various
                  matrices and substrates.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Application Engineering</h3>
                <p className="text-gray-300">
                  Expertise in adapting graphene technology to specific industrial applications and
                  manufacturing processes.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading title="Innovation Process" />
            <div className="space-y-6">
              <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-400 mb-2">1. Research & Development</h3>
                <p className="text-gray-300">
                  Breakthrough material formulations through advanced research and scientific expertise
                </p>
              </div>
              <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-400 mb-2">2. Validation & Testing</h3>
                <p className="text-gray-300">
                  NABL-certified laboratory testing and real-world field trials
                </p>
              </div>
              <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-400 mb-2">3. Scale-Up & Manufacturing</h3>
                <p className="text-gray-300">
                  Pilot-scale production and process optimization for commercial deployment
                </p>
              </div>
              <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30">
                <h3 className="text-xl font-bold text-purple-400 mb-2">4. Commercial Launch</h3>
                <p className="text-gray-300">
                  Market deployment with comprehensive technical support and ongoing innovation
                </p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Learn More</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/technology/pilot-projects" className="text-purple-400 hover:text-purple-300 transition-colors">
                → Pilot Projects
              </Link>
              <Link to="/technology/capabilities" className="text-purple-400 hover:text-purple-300 transition-colors">
                → Technical Capabilities
              </Link>
              <Link to="/products" className="text-purple-400 hover:text-purple-300 transition-colors">
                → Our Products
              </Link>
              <Link to="/partnership" className="text-purple-400 hover:text-purple-300 transition-colors">
                → Partnership Opportunities
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Platform;
