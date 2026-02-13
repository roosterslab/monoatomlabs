import React from 'react';
import { facilities, pilotTechnologies } from '../../../data/monoatomData';

const TechJourney = () => {
  const stages = [
    { num: '1', title: 'R&D Lab', data: facilities[0] },
    { num: '2', title: 'Scale-Up & Testing', data: facilities[1] },
    { num: '3', title: 'Field Validation', count: pilotTechnologies.length },
    { num: '4', title: 'Commercial Production', ready: true }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-6">From Lab Prototype to Mass Manufacturing</h2>
        <p className="text-xl text-neutral-600 text-center mb-16 max-w-3xl mx-auto">
          We don't just create breakthroughs—we engineer them for commercial-scale deployment.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stages.map((stage, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-neutral-900 text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                {stage.num}
              </div>
              <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
              {stage.data && (
                <p className="text-sm text-neutral-600">{stage.data.description}</p>
              )}
              {stage.count && (
                <p className="text-sm text-neutral-600">{stage.count} pilot trials in progress</p>
              )}
              {stage.ready && (
                <p className="text-sm text-neutral-600">Technology licensing & JV models ready</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechJourney;
