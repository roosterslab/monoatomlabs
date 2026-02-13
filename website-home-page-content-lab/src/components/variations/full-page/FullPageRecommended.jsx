import React from 'react';
import HeroLabToManufacturing from '../hero/HeroLabToManufacturing';
import IntroVisionMission from '../intro/IntroVisionMission';
import ProductsPerformance from '../products/ProductsPerformance';
import TechJourney from '../technology/TechJourney';
import LeadershipFounders from '../leadership/LeadershipFounders';

const FullPageRecommended = () => {
  return (
    <div className="w-full">
      <HeroLabToManufacturing />
      <IntroVisionMission />
      <ProductsPerformance />
      <TechJourney />
      <LeadershipFounders />
      
      {/* Footer CTA */}
      <section className="py-24 px-6 bg-neutral-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-neutral-300 mb-8">
            Our technology isn't just innovative—it's NABL certified, field-tested, cost-effective,
            and manufacturing-ready.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-all">
              Download Product Catalog
            </button>
            <button className="border border-white/20 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-all">
              Schedule Consultation Call
            </button>
          </div>
        </div>
      </section>
      
      {/* Contact Footer */}
      <footer className="py-12 px-6 bg-black text-white text-center border-t border-neutral-800">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">MONOATOM LABS</h3>
          <p className="text-neutral-400 mb-4">Advanced Materials for 4th Industrial Revolution</p>
          <div className="text-sm text-neutral-500 space-y-1">
            <p>📧 info@monoatomlabs.com</p>
            <p>📞 +91-989-919-9809</p>
            <p>📍 3rd Floor, iHub, Gujarat, Ahmedabad-380015</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FullPageRecommended;
