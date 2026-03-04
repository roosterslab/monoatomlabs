import React from 'react';
import { motion } from 'framer-motion';
import ContentSection from './ContentSection';
import FeatureList from './FeatureList';
import SpecTable from './SpecTable';
import ComparisonTable from './ComparisonTable';
import Button from '../ui/Button';

/**
 * ProductPage Component
 * Template for product pages with structured content sections
 */
const ProductPage = ({
  product,
  showHero = true,
  showBenefits = true,
  showSpecifications = true,
  showApplications = true,
  showComparison = true,
  showCTA = true,
  className = ''
}) => {
  if (!product) return null;

  return (
    <div className={`product-page ${className}`}>
      {/* Hero Section */}
      {showHero && (
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-4xl"
            >
              {/* Category Badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className="px-4 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-full text-blue-300 text-sm font-medium">
                  {product.category}
                </span>
                {product.status && (
                  <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                    product.status === 'Commercial'
                      ? 'bg-green-500/20 border border-green-400/30 text-green-300'
                      : 'bg-amber-500/20 border border-amber-400/30 text-amber-300'
                  }`}>
                    {product.status}
                  </span>
                )}
              </div>

              {/* Product Name & Tagline */}
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8">
                {product.tagline}
              </p>
              <p className="text-lg text-slate-400 mb-8 max-w-3xl">
                {product.description}
              </p>

              {/* Key Metrics */}
              {product.keyMetrics && product.keyMetrics.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
                  {product.keyMetrics.map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4"
                    >
                      <div className="text-3xl font-bold text-blue-400 mb-1">
                        {metric.value}
                      </div>
                      <div className="text-sm text-slate-400">
                        {metric.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 mt-8">
                <Button variant="primary" size="lg">
                  Request Quote
                </Button>
                <Button variant="outline" size="lg">
                  Download Technical Data
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Product Overview */}
      {product.overview && (
        <ContentSection
          title={product.overview.title || 'Product Overview'}
          content={product.overview.content}
          className="bg-white"
        />
      )}

      {/* Key Benefits */}
      {showBenefits && product.benefits && product.benefits.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Key Benefits
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-3xl">
              {product.shortDescription}
            </p>
            <FeatureList
              features={product.benefits}
              variant="detailed"
              columns={2}
            />
          </div>
        </section>
      )}

      {/* How It Works */}
      {product.howItWorks && product.howItWorks.subsections && (
        <ContentSection
          title={product.howItWorks.title}
          subsections={product.howItWorks.subsections}
          className="bg-white"
        />
      )}

      {/* Technical Specifications */}
      {showSpecifications && product.specifications && (
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Technical Specifications
            </h2>
            <SpecTable
              specifications={product.specifications}
              tables={product.specTables}
            />
          </div>
        </section>
      )}

      {/* Applications */}
      {showApplications && product.applications && product.applications.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Applications
            </h2>
            <p className="text-lg text-slate-600 mb-12">
              Versatile solutions across multiple industries
            </p>
            <FeatureList
              features={product.applications.map(app => ({ title: app }))}
              variant="simple"
              columns={3}
            />
          </div>
        </section>
      )}

      {/* Competitive Advantage */}
      {showComparison && product.competitive && product.competitive.tables && product.competitive.tables.length > 0 && (
        <section className="py-16 bg-slate-900 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {product.competitive.title || 'Competitive Advantage'}
            </h2>
            <p className="text-lg text-slate-300 mb-12">
              See how {product.name} compares to alternatives
            </p>
            {product.competitive.tables.map((table, index) => (
              <ComparisonTable
                key={index}
                table={table}
                highlightProduct={product.name}
              />
            ))}
          </div>
        </section>
      )}

      {/* Pricing Section */}
      {product.pricing && product.pricing.details && (
        <ContentSection
          title={product.pricing.title}
          content={product.pricing.details}
          className="bg-slate-50"
        >
          {product.pricing.tables && product.pricing.tables.length > 0 && (
            <div className="mt-8">
              {product.pricing.tables.map((table, index) => (
                <ComparisonTable
                  key={index}
                  table={table}
                />
              ))}
            </div>
          )}
        </ContentSection>
      )}

      {/* FAQs */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {product.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="border-b border-slate-200 pb-6"
                >
                  <h3 className="text-lg font-semibold mb-2 text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Call to Action */}
      {showCTA && (
        <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Experience {product.name}?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Contact our team to learn more or request a quote
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="white" size="lg">
                  Contact Sales
                </Button>
                <Button variant="outline-white" size="lg">
                  Technical Support
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProductPage;
