import React from 'react';
import { FlaskConical, Factory, CheckCircle } from 'lucide-react';

const IntroThreePillars = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Why Monoatom Labs is Different</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <FlaskConical className="w-16 h-16 mx-auto mb-4 text-neutral-900" />
            <h3 className="text-2xl font-bold mb-4">Scientific Excellence</h3>
            <ul className="text-left text-neutral-600 space-y-2">
              <li>✓ IISc, IIT, NCL partnerships</li>
              <li>✓ 6× President of India Awardee</li>
              <li>✓ MIT TR35, NASA recognized</li>
            </ul>
          </div>
          
          <div className="text-center">
            <Factory className="w-16 h-16 mx-auto mb-4 text-neutral-900" />
            <h3 className="text-2xl font-bold mb-4">Industrial Scale</h3>
            <ul className="text-left text-neutral-600 space-y-2">
              <li>✓ Manufacturing-ready processes</li>
              <li>✓ 5+ commercial products</li>
              <li>✓ Field-scale pilot trials</li>
            </ul>
          </div>
          
          <div className="text-center">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-neutral-900" />
            <h3 className="text-2xl font-bold mb-4">Proven Performance</h3>
            <ul className="text-left text-neutral-600 space-y-2">
              <li>✓ NABL certified results</li>
              <li>✓ Field-tested applications</li>
              <li>✓ 60-70% cost savings</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroThreePillars;
