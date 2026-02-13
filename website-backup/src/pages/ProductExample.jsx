import React from 'react';
import { ProductPage } from '../components/content';
import { products } from '../data/content';

/**
 * Example Product Page - Ceraphene
 * This demonstrates how to use the ProductPage component with structured content
 */
function CerapheneProductPage() {
  return (
    <ProductPage
      product={products.ceraphene}
      showHero={true}
      showBenefits={true}
      showSpecifications={true}
      showApplications={true}
      showComparison={true}
      showCTA={true}
    />
  );
}

/**
 * Example Product Page - Graphacrete
 */
function GraphacreteProductPage() {
  return (
    <ProductPage
      product={products.graphacrete}
    />
  );
}

/**
 * Custom Product Page Example
 * This shows how to build a custom page using individual content components
 */
import {
  ContentSection,
  FeatureList,
  SpecTable,
  ComparisonTable,
  CheckList,
  MetricCard,
  BenefitsList
} from '../components/content';
import Button from '../components/ui/Button';

function CustomProductPage() {
  const product = products.graffisol;

  return (
    <div className="custom-product-page">
      {/* Custom Hero */}
      <section className="relative bg-gradient-to-br from-blue-900 via-slate-900 to-slate-800 text-white py-24 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-green-500/20 border border-green-400/30 rounded-full text-green-300 text-sm font-medium">
                {product.category}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {product.name}
            </h1>
            <p className="text-2xl text-blue-200 mb-6">
              {product.tagline}
            </p>
            <p className="text-lg text-slate-300 mb-8">
              {product.description}
            </p>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {product.keyMetrics.map((metric, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                  <div className="text-3xl font-bold text-blue-400 mb-1">
                    {metric.value}
                  </div>
                  <div className="text-sm text-slate-300">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button variant="primary" size="lg">Learn More</Button>
              <Button variant="outline-white" size="lg">Contact Sales</Button>
            </div>
          </div>
        </div>

        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        </div>
      </section>

      {/* Benefits Section with Custom Layout */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Why Choose {product.name}?
          </h2>
          <p className="text-lg text-slate-600 mb-12 text-center max-w-3xl mx-auto">
            {product.shortDescription}
          </p>
          <BenefitsList
            benefits={product.benefits}
            showNumbers={true}
          />
        </div>
      </section>

      {/* Specifications with Cards */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {Object.entries(product.specifications).slice(0, 4).map(([key, value], index) => (
              <MetricCard
                key={key}
                label={key.replace(/([A-Z])/g, ' $1').trim()}
                value={value}
                variant={index === 0 ? 'gradient' : 'default'}
              />
            ))}
          </div>
          <SpecTable
            specifications={product.specifications}
            variant="default"
          />
        </div>
      </section>

      {/* Applications with CheckList */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Applications
          </h2>
          <p className="text-lg text-slate-600 mb-12 text-center">
            Versatile solutions across multiple industries
          </p>
          <CheckList
            items={product.applications}
            columns={3}
            size="lg"
          />
        </div>
      </section>

      {/* Markets Section */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Target Markets
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            {product.markets.map((market, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 text-center hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-semibold">{market}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Enhance Your Solar Efficiency?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact our team to learn how {product.name} can improve your solar installation performance
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="white" size="lg">
              Request Quote
            </Button>
            <Button variant="outline-white" size="lg">
              Download Datasheet
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

/**
 * Minimal Product Page Example
 * Showing only essential information
 */
function MinimalProductPage() {
  const product = products.hdgpe;

  return (
    <div>
      {/* Simple Hero */}
      <section className="bg-slate-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl text-slate-300 mb-8">{product.tagline}</p>
          <Button variant="primary" size="lg">Learn More</Button>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <FeatureList
            features={product.benefits}
            variant="cards"
            columns={3}
          />
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <SpecTable
            specifications={product.specifications}
            variant="cards"
          />
        </div>
      </section>
    </div>
  );
}

// Export all examples
export {
  CerapheneProductPage,
  GraphacreteProductPage,
  CustomProductPage,
  MinimalProductPage
};

export default CerapheneProductPage;
