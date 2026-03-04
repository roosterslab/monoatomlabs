import React from 'react';
import { products } from '../../../data/monoatomData';

const ProductsPerformance = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">5+ Commercially Ready Products</h2>
        <p className="text-center text-neutral-600 mb-16">NABL certified performance. Field-tested solutions. Industrial-scale manufacturing ready.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {Object.values(products).map((product) => (
            <div key={product.name} className="border border-neutral-200 rounded-xl p-8 hover:shadow-xl transition-all">
              <h3 className="text-3xl font-bold mb-2">{product.name}</h3>
              <p className="text-lg text-neutral-600 mb-6">{product.tagline}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                {Object.entries(product.metrics).slice(0, 4).map(([key, value]) => (
                  <div key={key} className="text-center p-4 bg-neutral-50 rounded-lg">
                    <div className="text-2xl font-bold text-neutral-900">{value}</div>
                    <div className="text-xs text-neutral-600 mt-1 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full bg-neutral-900 text-white py-3 rounded-full font-medium hover:bg-neutral-800 transition-all">
                View Technical Specifications
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsPerformance;
