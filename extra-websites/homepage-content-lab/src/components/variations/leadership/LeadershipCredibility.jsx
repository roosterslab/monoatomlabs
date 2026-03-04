import React from 'react';
import { partnerships, collaborationModels } from '../../../data/monoatomData';

const LeadershipCredibility = () => {
  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Backed by World-Class Expertise</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border border-neutral-200 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">Award-Winning Leadership</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>✓ 6× President of India Awardee</li>
              <li>✓ MIT TR35 recognized</li>
              <li>✓ NASA acknowledged</li>
              <li>✓ TED Speaker</li>
            </ul>
          </div>
          
          <div className="bg-white border border-neutral-200 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">Scientific Partnerships</h3>
            <ul className="space-y-2 text-neutral-600">
              {partnerships.map(p => (
                <li key={p}>✓ {p}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white border border-neutral-200 rounded-xl p-8">
            <h3 className="text-xl font-bold mb-4">Industrial Execution</h3>
            <ul className="space-y-2 text-neutral-600">
              <li>✓ Kalika Steel expertise</li>
              <li>✓ 38+ years operations</li>
              <li>✓ National-scale deployment</li>
            </ul>
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-8">Partnership Opportunities</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white border border-neutral-200 rounded-xl p-6">
              <h4 className="font-bold mb-2">{collaborationModels.jvSpv.name}</h4>
              <p className="text-sm text-neutral-600">{collaborationModels.jvSpv.description}</p>
            </div>
            <div className="bg-white border border-neutral-200 rounded-xl p-6">
              <h4 className="font-bold mb-2">{collaborationModels.licensing.name}</h4>
              <p className="text-sm text-neutral-600">{collaborationModels.licensing.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipCredibility;
