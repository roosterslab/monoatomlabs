import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, X } from 'lucide-react';
import Button from '../ui/Button';
import ProductHero from '../ui/ProductHero';
import SectionHeading from '../ui/SectionHeading';
import BentoGrid, { BentoItem } from '../ui/BentoGrid';
import ImageCarousel from '../ui/ImageCarousel';
import Timeline from '../ui/Timeline';
import ProcessFlow from '../ui/ProcessFlow';

const ProductDetailTemplate = ({ data, customSections }) => {
  const {
    title,
    subtitle,
    category,
    heroImages,
    introduction,
    processFlow,
    features,
    gallery,
    timeline,
    applications,
    cta,
  } = data;

  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section - Standard website spacing */}
      <div className="max-w-[1400px] mx-auto px-6 pt-40 pb-20">
        {/* Back Navigation - Subtle, integrated */}
        <div className="mb-8">
          <Link
            to="/products/pipeline"
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-brand-600 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Innovation Pipeline</span>
          </Link>
        </div>

        {/* Hero - Immediate impact */}
        <ProductHero
          title={title}
          subtitle={subtitle}
          category={category}
          categoryColor="bg-brand-600 text-white"
          images={heroImages}
          theme="light"
          className="h-[75vh] rounded-2xl overflow-hidden shadow-xl border border-neutral-200"
        />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-20">
        {/* 1. Introduction */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeading
                number="01"
                title={introduction.title}
                subtitle={introduction.subtitle}
              />
              {introduction.description.map((paragraph, index) => (
                <p
                  key={index}
                  className={`text-lg text-neutral-600 leading-relaxed ${
                    index < introduction.description.length - 1 ? 'mb-6' : ''
                  }`}
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border border-neutral-200 bg-neutral-50">
              <ImageCarousel
                images={introduction.images}
                alt={`${title} Context`}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* 2. Process Flow */}
        <section className="mb-24">
          <SectionHeading
            number="02"
            title={processFlow.title}
            subtitle={processFlow.subtitle}
          />
          <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-200">
            <ProcessFlow
              steps={processFlow.steps.map(step => ({
                icon: React.createElement(step.icon, { className: 'w-6 h-6' }),
                title: step.title,
                description: step.description
              }))}
              accentColor="teal"
            />
          </div>
        </section>

        {/* 3. Key Features (Bento Grid) */}
        <section className="mb-24">
          <SectionHeading
            number="03"
            title={features.title}
            subtitle={features.subtitle}
            accent={true}
          />
          <BentoGrid>
            {/* Hero Feature */}
            {features.hero && (
              <BentoItem
                colSpan={2}
                rowSpan={2}
                theme="dark"
                className="relative group overflow-hidden bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 border border-brand-500"
              >
                <div className="h-full flex flex-col justify-between relative z-10 p-8">
                  <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center shadow-lg">
                    {features.hero.icon && React.createElement(features.hero.icon, { className: 'w-8 h-8 text-white' })}
                  </div>
                  <div>
                    <h3 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
                      {features.hero.title}
                    </h3>
                    <p className="text-lg text-white leading-relaxed max-w-md">
                      {features.hero.description}
                    </p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </BentoItem>
            )}

            {/* Secondary Features */}
            {features.secondary && features.secondary.map((feature, index) => (
              <BentoItem
                key={`sec-${index}`}
                colSpan={1}
                rowSpan={1}
                theme="light"
                className="bg-white hover:bg-neutral-50 transition-colors border border-neutral-200"
              >
                <div className="h-full flex flex-col justify-between p-6">
                  <div className="w-14 h-14 rounded-xl bg-brand-600 flex items-center justify-center mb-6">
                    {feature.icon && React.createElement(feature.icon, { className: 'w-7 h-7 text-white' })}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-neutral-900 mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </BentoItem>
            ))}

            {/* Stats */}
            {features.stats && features.stats.map((stat, index) => (
              <BentoItem
                key={`stat-${index}`}
                colSpan={1}
                rowSpan={1}
                theme="light"
                className="bg-white hover:bg-neutral-50 transition-colors border border-neutral-200"
              >
                <div className="h-full flex flex-col justify-between p-6">
                  {stat.icon ? (
                    <div className="w-14 h-14 rounded-xl bg-neutral-800 flex items-center justify-center mb-6">
                      {React.createElement(stat.icon, { className: 'w-7 h-7 text-white' })}
                    </div>
                  ) : (
                    <div className="text-5xl font-display font-bold mb-4 text-neutral-800">
                      {stat.value}
                    </div>
                  )}
                  <div>
                    {stat.title && (
                      <h4 className="text-lg font-semibold text-neutral-900 mb-2">
                        {stat.title}
                      </h4>
                    )}
                    {stat.label && (
                      <div className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                        {stat.label}
                      </div>
                    )}
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {stat.description}
                    </p>
                  </div>
                </div>
              </BentoItem>
            ))}

            {/* Metrics */}
            {features.metrics && features.metrics.map((metric, index) => (
              <BentoItem
                key={`met-${index}`}
                colSpan={1}
                rowSpan={1}
                theme="light"
                className="bg-white hover:bg-neutral-50 border border-neutral-200 flex items-center justify-center text-center transition-colors"
              >
                <div className="p-6">
                  <div className="text-4xl font-display font-bold mb-2 text-neutral-800">
                    {metric.value}
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-neutral-500">
                    {metric.label}
                  </div>
                </div>
              </BentoItem>
            ))}
          </BentoGrid>
        </section>

        {/* Custom Sections */}
        {customSections && (
          <div className="mb-24">
            {customSections}
          </div>
        )}

        {/* 4. Gallery */}
        <section className="mb-24">
          <SectionHeading
            number="04"
            title={gallery.title}
            subtitle={gallery.subtitle}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(gallery.images || []).map((imageItem, index) => {
              // Check if this is a video object
              if (typeof imageItem === 'object' && imageItem.type === 'video') {
                return (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-neutral-200"
                  >
                    <iframe
                      src={imageItem.url}
                      title={imageItem.label || 'Product Video'}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    {imageItem.label && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-neutral-900/90 to-transparent p-4">
                        <p className="text-white text-sm font-medium">{imageItem.label}</p>
                      </div>
                    )}
                  </div>
                );
              }

              // Handle image items
              const src = typeof imageItem === 'string' ? imageItem : (imageItem.image || (imageItem.images && imageItem.images[0]));
              const label = typeof imageItem === 'string' ? 'Gallery Image' : (imageItem.label || 'View');

              if (!src) return null;

              return (
                <div
                  key={index}
                  onClick={() => setLightboxImage({ src, label })}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow border border-neutral-200"
                >
                  <img
                    src={src}
                    alt={label}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white font-medium">{label}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Timeline */}
        <section className="mb-24">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <SectionHeading
                number="05"
                title={timeline.title}
                subtitle={timeline.subtitle}
              />
              <p className="text-neutral-600 leading-relaxed mt-6">
                Our development velocity is accelerating. Track our key milestones from lab synthesization to industrial scale-up.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="bg-neutral-50 rounded-2xl p-8 md:p-12 border border-neutral-200">
                <Timeline items={timeline.events || []} accentColor="teal" />
              </div>
            </div>
          </div>
        </section>

        {/* 6. Applications */}
        <section className="mb-24">
          <SectionHeading
            number="06"
            title={applications.title}
            subtitle={applications.subtitle}
          />
          <div className="mt-12">
            <BentoGrid>
              {(applications.items || []).map((item, index) => (
                <BentoItem
                  key={index}
                  colSpan={index === 0 ? 2 : 1}
                  rowSpan={1}
                  theme="light"
                  className="bg-white hover:bg-neutral-50 border border-neutral-200 transition-colors"
                >
                  <div className="h-full flex flex-col justify-between p-6">
                    <div className="mb-6">
                      <div className="inline-block px-3 py-1.5 rounded-full bg-brand-600 text-xs font-bold uppercase tracking-wider text-white mb-4">
                        Sector {index + 1}
                      </div>
                      <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-brand-600 rounded-full"
                        style={{ width: `${75 - index * 5}%` }}
                      ></div>
                    </div>
                  </div>
                </BentoItem>
              ))}
            </BentoGrid>
          </div>
        </section>

        {/* 7. CTA */}
        <section className="relative rounded-2xl bg-gradient-to-br from-neutral-800 to-neutral-900 overflow-hidden px-8 py-16 md:p-20 text-center border border-neutral-700">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-semibold text-white mb-6">
              {cta.title}
            </h2>
            <p className="text-xl text-neutral-300 mb-10 leading-relaxed">
              {cta.description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to={cta.primaryButton?.link || '/contact'} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-neutral-900 border-2 border-white rounded-lg font-semibold text-base hover:bg-neutral-50 hover:border-neutral-200 transition-all duration-300 shadow-lg">
                  {cta.primaryButton?.text || 'Contact Us'}
                </button>
              </Link>
              <Link to={cta.secondaryButton?.link || '/products/pipeline'} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg font-semibold text-base hover:bg-white hover:text-neutral-900 transition-all duration-300">
                  {cta.secondaryButton?.text || 'View Full Pipeline'}
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="max-w-7xl max-h-[90vh] relative">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.label}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 text-lg font-medium">
              {lightboxImage.label}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailTemplate;
