import React from 'react';
import { products } from '../../../data/monoatomData';

const ProductsIndustry = () => {
  const industries = [
    { name: 'Construction Industry', product: products.graphacrete },
    { name: 'Solar Energy Sector', product: products.graffisol },
    { name: 'Polymer Manufacturers', product: products.hdgpe },
    { name: 'Coating Applicators', product: products.ceraphene }
  ];

  return (
    <section className="py-24 px-6 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Solutions by Industry</h2>
        
        <div className="space-y-12">
          {industries.map((industry) => (
            <div key={industry.name} className="bg-white border border-neutral-200 rounded-xl p-8">
              <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">
                For {industry.name}
              </div>
              <h3 className="text-3xl font-bold mb-4">{industry.product.name}</h3>
              <p className="text-xl text-neutral-600 mb-6">{industry.product.competitiveEdge}</p>
              
              <div className="flex gap-4">
                <button className="bg-neutral-900 text-white px-6 py-3 rounded-full font-medium">
                  Learn More
                </button>
                <button className="border border-neutral-300 px-6 py-3 rounded-full font-medium">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsIndustry;
