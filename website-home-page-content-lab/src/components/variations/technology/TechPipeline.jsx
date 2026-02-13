import React from 'react';
import { products, pipelineProducts, pilotTechnologies } from '../../../data/monoatomData';

const TechPipeline = () => {
  return (
    <section className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">10+ Innovations Across the Pipeline</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 border border-white/20 rounded-xl p-8">
            <div className="text-green-400 font-bold mb-4">✅ MARKET-READY (4)</div>
            <ul className="space-y-2">
              {Object.values(products).map(p => (
                <li key={p.name} className="text-sm">{p.name}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/10 border border-white/20 rounded-xl p-8">
            <div className="text-blue-400 font-bold mb-4">🔧 PIPELINE (5)</div>
            <ul className="space-y-2">
              {pipelineProducts.map(p => (
                <li key={p.name} className="text-sm">{p.name}</li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white/10 border border-white/20 rounded-xl p-8">
            <div className="text-purple-400 font-bold mb-4">🧪 PILOTS (5)</div>
            <ul className="space-y-2">
              {pilotTechnologies.slice(0, 5).map(p => (
                <li key={p.name} className="text-sm">{p.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechPipeline;
