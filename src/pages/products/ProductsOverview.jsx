import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import { ArrowRight, Box, Sun, ShieldCheck, Layers, FlaskConical } from 'lucide-react';
import { products } from '../../data/content';

const ProductCard = ({ name, subtitle, highlight, icon: Icon, path, image }) => (
  <Link to={path} className="group block h-full">
    <div className="bg-white border border-neutral-200 overflow-hidden h-full transition-colors hover:border-neutral-300 shadow-sm hover:shadow-md">
      {image && (
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="w-12 h-12 bg-neutral-50 border border-neutral-200 flex items-center justify-center">
            <Icon className="w-6 h-6 text-neutral-600" strokeWidth={1.5} />
          </div>
          <div className="px-3 py-1 bg-neutral-100 border border-neutral-200 text-xs text-neutral-600 uppercase tracking-wide">
            {highlight}
          </div>
        </div>
        <h3 className="text-2xl font-display font-medium text-neutral-900 mb-2 group-hover:text-neutral-700 transition-colors">{name}</h3>
        <p className="text-neutral-600 mb-8">{subtitle}</p>
        <span className="text-sm font-medium text-neutral-900 flex items-center mt-auto">
          View Details <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </div>
  </Link>
);

const ProductsOverview = () => {
  return (
    <div className="min-h-screen">
      <PageHeader
        category="Portfolio"
        title="Products Overview"
        subtitle="Market-available graphene solutions delivering validated performance, consistent quality, and industrial scalability."
        transparent={true}
      />

      {/* Commercial Products */}
      <section className="py-24 px-6 bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="01" title="Commercial Solutions" theme="light" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <ProductCard
              name="Graphacrete"
              subtitle="High-Performance Concrete Additive"
              highlight="Construction"
              icon={Box}
              path="/products/graphacrete"
              image={products.graphacrete.image}
            />
            <ProductCard
              name="Graffisol"
              subtitle="Next-Generation Solar Panel Coating"
              highlight="Energy"
              icon={Sun}
              path="/products/graffisol"
              image={products.graffisol.image}
            />
            <ProductCard
              name="Ceraphene"
              subtitle="Ultra-Durable Ceramic Coating"
              highlight="Automotive"
              icon={ShieldCheck}
              path="/products/ceraphene"
              image={products.ceraphene.image}
            />
            <ProductCard
              name="HD-G-PE"
              subtitle="Graphene-Reinforced Polymer Enhancer"
              highlight="Materials"
              icon={Layers}
              path="/products/hd-g-pe"
              image={products.hdgpe.image}
            />
          </div>
        </div>
      </section>

      {/* Comparison Matrix */}
      <section className="py-24 px-6 bg-neutral-50 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto">
          <SectionHeading number="02" title="Performance Matrix" theme="light" subtitle="Verified improvements over standard industry benchmarks." />

          <div className="overflow-x-auto mt-12 bg-white border border-neutral-200 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-4 px-6 text-xs text-neutral-500 uppercase tracking-wide bg-neutral-50">Product</th>
                  <th className="py-4 px-6 text-xs text-neutral-500 uppercase tracking-wide bg-neutral-50">Industry</th>
                  <th className="py-4 px-6 text-xs text-neutral-500 uppercase tracking-wide bg-neutral-50">Primary Benefit</th>
                  <th className="py-4 px-6 text-xs text-neutral-500 uppercase tracking-wide bg-neutral-50">Key Metric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                <tr>
                  <td className="py-6 px-6 font-medium text-neutral-900">Graphacrete</td>
                  <td className="py-6 px-6 text-neutral-600">Construction</td>
                  <td className="py-6 px-6 text-neutral-600">Strength & Durability</td>
                  <td className="py-6 px-6 text-neutral-900 font-mono">+40-50% Strength</td>
                </tr>
                <tr>
                  <td className="py-6 px-6 font-medium text-neutral-900">Graffisol</td>
                  <td className="py-6 px-6 text-neutral-600">Solar Energy</td>
                  <td className="py-6 px-6 text-neutral-600">Efficiency Enhancement</td>
                  <td className="py-6 px-6 text-neutral-900 font-mono">+7-8% Output</td>
                </tr>
                <tr>
                  <td className="py-6 px-6 font-medium text-neutral-900">Ceraphene</td>
                  <td className="py-6 px-6 text-neutral-600">Automotive</td>
                  <td className="py-6 px-6 text-neutral-600">Surface Protection</td>
                  <td className="py-6 px-6 text-neutral-900 font-mono">9H+ Hardness</td>
                </tr>
                <tr>
                  <td className="py-6 px-6 font-medium text-neutral-900">HD-G-PE</td>
                  <td className="py-6 px-6 text-neutral-600">Polymers</td>
                  <td className="py-6 px-6 text-neutral-600">Mechanical Properties</td>
                  <td className="py-6 px-6 text-neutral-900 font-mono">20× Elongation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pipeline Teaser */}
      <section className="py-24 px-6 bg-gradient-to-br from-neutral-50 via-blue-50 to-purple-50 border-t border-neutral-200">
        <div className="max-w-4xl mx-auto text-center">
          <FlaskConical className="w-12 h-12 text-neutral-900 mx-auto mb-6" strokeWidth={1} />
          <h2 className="text-3xl font-display font-medium text-neutral-900 mb-6">Innovation Pipeline</h2>
          <p className="text-lg text-neutral-600 mb-10">
            We're continuously advancing the frontiers of graphene technology. Explore our next-generation products currently in development.
          </p>
          <Link to="/products/pipeline">
            <Button variant="secondary" theme="light" className="h-12 px-8">
              View Innovation Pipeline <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ProductsOverview;
