import React from 'react';
import { founders } from '../../../data/monoatomData';

const LeadershipFounders = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Led by Award-Winning Innovators</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-neutral-200 rounded-xl p-10">
            <h3 className="text-3xl font-bold mb-2">{founders.sushanth.name}</h3>
            <p className="text-neutral-600 text-sm uppercase tracking-wide mb-6">{founders.sushanth.role}</p>
            <p className="text-neutral-700 leading-relaxed mb-8">{founders.sushanth.bio}</p>
            
            <div className="flex flex-wrap gap-2">
              {founders.sushanth.tags.map(tag => (
                <span key={tag} className="text-xs font-medium bg-neutral-100 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="border border-neutral-200 rounded-xl p-10">
            <h3 className="text-3xl font-bold mb-2">{founders.aayush.name}</h3>
            <p className="text-neutral-600 text-sm uppercase tracking-wide mb-6">{founders.aayush.role}</p>
            <p className="text-neutral-700 leading-relaxed mb-8">{founders.aayush.bio}</p>
            
            <div className="flex flex-wrap gap-2">
              {founders.aayush.tags.map(tag => (
                <span key={tag} className="text-xs font-medium bg-neutral-100 px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipFounders;
