import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/ui/PageHeader';
import SectionHeading from '../../../components/ui/SectionHeading';
import Button from '../../../components/ui/Button';

const AtmosphericHarvesting = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        category="Field Trials"
        title="Atmospheric Moisture Harvesting"
        subtitle="Graphene membranes engineered to harvest atmospheric moisture and convert air into potable water efficiently for sustainable water production."
      />

      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Key Features" theme="light" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              'Atmospheric moisture capture technology',
              'Graphene membrane engineering',
              'Efficient air-to-water conversion',
              'Potable water generation',
              'Sustainable water production'
            ].map((item, i) => (
              <div key={i} className="p-4 bg-neutral-50 border border-neutral-200 text-neutral-700 text-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Target Applications" theme="light" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              'Arid and desert regions',
              'Emergency water supply',
              'Off-grid communities',
              'Disaster relief operations',
              'Sustainable water infrastructure'
            ].map((item, i) => (
              <div key={i} className="p-4 bg-neutral-50 border border-neutral-200 text-neutral-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-2xl font-display font-medium text-neutral-900 mb-3">Status: Field-Scale Pilot Trials</h2>
        <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
          This technology is currently undergoing real-world testing and validation in operational environments.
        </p>
        <Link to="/contact">
          <Button variant="secondary" theme="light">Partner for Deployment</Button>
        </Link>
      </section>
    </div>
  );
};

export default AtmosphericHarvesting;
