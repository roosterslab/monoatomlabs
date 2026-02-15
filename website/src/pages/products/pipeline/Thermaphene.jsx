import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../../components/ui/PageHeader';
import SectionHeading from '../../../components/ui/SectionHeading';
import Button from '../../../components/ui/Button';

const Thermaphene = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        category="Pipeline"
        title="Thermaphene"
        subtitle="Graphene-based heating solution enabling lightweight and high-performance winter wear."
      />

      <section className="py-24 px-6 border-b border-neutral-200">
        <div className="max-w-4xl mx-auto">
          <SectionHeading title="Key Features" theme="light" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              'Graphene-based heating technology',
              'Lightweight design',
              'High-performance thermal regulation',
              'Energy-efficient heating',
              'Comfortable winter wear'
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
              'Winter clothing and apparel',
              'Outdoor sports gear',
              'Military cold-weather equipment',
              'Thermal comfort textiles',
              'Wearable heating systems'
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
          <Button variant="secondary" theme="light">Inquire About Thermaphene</Button>
        </Link>
      </section>
    </div>
  );
};

export default Thermaphene;
