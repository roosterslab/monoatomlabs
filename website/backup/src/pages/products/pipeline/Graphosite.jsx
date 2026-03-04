import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/ui/PageHeader';
import SectionHeading from '../../../components/ui/SectionHeading';
import Button from '../../../components/ui/Button';

const Graphosite = () => {
  return (
    <div className="bg-white min-h-screen">
      <PageHeader
        category="Pipeline"
        title="Graphosite"
        subtitle="Lightweight, high-strength graphene-reinforced fibres engineered for next-generation structural composites."
      />

      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Key Features" theme="light" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              'Lightweight construction',
              'High-strength performance',
              'Advanced graphene reinforcement',
              'Next-generation composite materials',
              'Superior structural integrity'
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
              'Aerospace components',
              'Automotive structures',
              'Sports equipment',
              'Industrial composites',
              'Construction materials'
            ].map((item, i) => (
              <div key={i} className="p-4 bg-neutral-50 border border-neutral-200 text-neutral-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 text-center">
        <h2 className="text-2xl font-display font-medium text-neutral-900 mb-6">Status: Development</h2>
        <Link to="/contact">
          <Button variant="secondary" theme="light">Inquire About Graphosite</Button>
        </Link>
      </section>
    </div>
  );
};

export default Graphosite;
