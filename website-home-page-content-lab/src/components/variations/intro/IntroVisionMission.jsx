import React from 'react';
import { companyInfo } from '../../../data/monoatomData';

const IntroVisionMission = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-neutral-900 mb-6">{companyInfo.vision}</h2>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            {companyInfo.mission}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-neutral-50 border border-neutral-200 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Scientific Excellence</h3>
            <p className="text-neutral-600">IISc, IIT, NCL partnerships with state-of-the-art R&D labs</p>
          </div>
          <div className="p-8 bg-neutral-50 border border-neutral-200 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Industrial Scale</h3>
            <p className="text-neutral-600">5+ commercially available manufacturing-ready products</p>
          </div>
          <div className="p-8 bg-neutral-50 border border-neutral-200 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Proven Performance</h3>
            <p className="text-neutral-600">NABL certified, field-tested with 60-70% cost savings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroVisionMission;
