import React from 'react';
import { Link } from 'react-router-dom';
import SectionHeading from '../../components/ui/SectionHeading';

const Capabilities = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <div className="bg-gradient-to-br from-gray-900 via-purple-900/20 to-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">
              Technical Capabilities
            </h1>
            <p className="text-xl text-gray-300">
              Comprehensive R&D infrastructure and expertise
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="mb-16">
            <SectionHeading title="Research & Development" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Materials Science</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Graphene synthesis and processing</li>
                  <li>• Nanomaterial functionalization</li>
                  <li>• Advanced characterization</li>
                  <li>• Surface chemistry modification</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Process Development</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Dispersion technologies</li>
                  <li>• Coating application methods</li>
                  <li>• Composite formulation</li>
                  <li>• Process optimization</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Testing & Validation</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• NABL-certified testing</li>
                  <li>• Performance characterization</li>
                  <li>• Durability studies</li>
                  <li>• Field validation</li>
                </ul>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/20">
                <h3 className="text-xl font-bold text-purple-400 mb-4">Scale-Up Engineering</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• Pilot-scale production</li>
                  <li>• Manufacturing integration</li>
                  <li>• Quality control systems</li>
                  <li>• Supply chain development</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <SectionHeading title="Partnership Network" />
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              We collaborate with premier research institutions to maintain cutting-edge capabilities:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 text-center">
                <h3 className="text-xl font-bold text-purple-400 mb-2">IISc</h3>
                <p className="text-gray-400">Research Collaboration</p>
              </div>
              <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 text-center">
                <h3 className="text-xl font-bold text-purple-400 mb-2">IIT</h3>
                <p className="text-gray-400">Research Collaboration</p>
              </div>
              <div className="bg-purple-900/20 p-6 rounded-lg border border-purple-500/30 text-center">
                <h3 className="text-xl font-bold text-purple-400 mb-2">NCL</h3>
                <p className="text-gray-400">Research Collaboration</p>
              </div>
            </div>
          </section>

          <section className="mt-16">
            <h3 className="text-2xl font-bold mb-6">Learn More</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link to="/about/facilities" className="text-purple-400 hover:text-purple-300 transition-colors">
                → Our Facilities
              </Link>
              <Link to="/technology/platform" className="text-purple-400 hover:text-purple-300 transition-colors">
                → Technology Platform
              </Link>
              <Link to="/technology/pilot-projects" className="text-purple-400 hover:text-purple-300 transition-colors">
                → Pilot Projects
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

export default Capabilities;
