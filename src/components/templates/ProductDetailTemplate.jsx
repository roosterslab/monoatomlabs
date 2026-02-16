import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import ProductHero from '../ui/ProductHero';
import BackNavigation from '../ui/BackNavigation';
import SectionHeading from '../ui/SectionHeading';
import BentoGrid, { BentoItem } from '../ui/BentoGrid';
import Card from '../ui/Card';
import StatCard from '../ui/StatCard';
import Timeline from '../ui/Timeline';
import ProcessFlow from '../ui/ProcessFlow';
import ImageCarousel from '../ui/ImageCarousel';

const ProductDetailTemplate = ({ data, customSections }) => {
  const {
    title,
    subtitle,
    category,
    categoryColor,
    heroImages,
    accentColor,
    introduction,
    processFlow,
    features,
    gallery,
    timeline,
    applications,
    cta,
    textColorClass = 'text-neutral-600'
  } = data;

  return (
    <div className="min-h-screen pt-36 bg-white">
      <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />
      <div className="container mx-auto px-6 py-8">
        <div className="mt-8 mb-24">
          {/* Hero Section */}
          <ProductHero
            title={title}
            subtitle={subtitle}
            category={category}
            categoryColor={categoryColor}
            images={heroImages}
            className="mb-24"
          />

          {/* 1. Introduction */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  number="01"
                  title={introduction.title}
                  subtitle={introduction.subtitle}
                />
                {introduction.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-lg ${textColorClass} leading-relaxed ${
                      index < introduction.description.length - 1 ? 'mb-6' : ''
                    } ${data.id === 'armophene' || data.id === 'graphosite' ? 'font-light' : ''}`}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-neutral-100">
                <ImageCarousel
                  images={introduction.images}
                  alt={`${title} Context`}
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* 2. Process Flow */}
          <section className="mb-32">
            <SectionHeading
              number="02"
              title={processFlow.title}
              subtitle={processFlow.subtitle}
            />
            <ProcessFlow
              steps={processFlow.steps.map(step => ({
                icon: React.createElement(step.icon, { className: 'w-6 h-6' }),
                title: step.title,
                description: step.description
              }))}
              accentColor={processFlow.accentColor || accentColor}
            />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title={features.title}
              subtitle={features.subtitle}
            />
            <BentoGrid>
              {/* Hero Feature */}
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className={`relative group ${features.hero.border || ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${features.hero.gradient} z-0`}></div>
                {features.hero.overlay && (
                  <div className={`absolute inset-0 ${features.hero.overlay}`}></div>
                )}
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div>
                    <div className={`w-12 h-12 rounded-full ${features.hero.iconBg} flex items-center justify-center mb-6 ${features.hero.iconColor}`}>
                      {React.createElement(features.hero.icon, { className: 'w-6 h-6' })}
                    </div>
                    <h3 className="text-3xl font-light mb-4 text-white">{features.hero.title}</h3>
                    <p className="text-neutral-300 text-lg">{features.hero.description}</p>
                  </div>
                  {features.hero.badge && (
                    <div className="flex items-center gap-4 mt-8">
                      <div className={`px-3 py-1 rounded bg-${features.hero.badge.color}-500/10 border border-${features.hero.badge.color}-500/20 text-${features.hero.badge.color}-400 text-xs font-mono uppercase tracking-wider`}>
                        {features.hero.badge.text}
                      </div>
                    </div>
                  )}
                </div>
              </BentoItem>

              {/* Stats */}
              {features.stats.map((stat, index) => (
                <BentoItem
                  key={index}
                  colSpan={1}
                  className={stat.bg ? `${stat.bg} ${stat.border}` : 'bg-white'}
                >
                  {stat.value ? (
                    <div className="h-full flex flex-col justify-center">
                      <h4 className={`text-5xl font-light ${stat.color} mb-2`}>{stat.value}</h4>
                      <p className={`font-medium ${stat.labelColor || 'text-neutral-900'}`}>{stat.label}</p>
                      {stat.description && (
                        <p className="text-sm text-neutral-600 mt-2">{stat.description}</p>
                      )}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col">
                      <div className={`w-10 h-10 ${stat.iconBg || ''} flex items-center justify-center mb-4`}>
                        {React.createElement(stat.icon, { className: `w-10 h-10 ${stat.iconColor}` })}
                      </div>
                      <h4 className="text-xl font-medium mb-2">{stat.title}</h4>
                      <p className="text-sm text-neutral-600">{stat.description}</p>
                    </div>
                  )}
                </BentoItem>
              ))}

              {/* Metrics Bar */}
              <BentoItem colSpan={3} className={features.darkBg || 'bg-neutral-900'}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {features.metrics.map((metric, index) => (
                    <StatCard
                      key={index}
                      value={metric.value}
                      label={metric.label}
                      theme="dark"
                      valueClassName="text-white"
                      labelClassName={metric.labelColor || 'text-neutral-400'}
                    />
                  ))}
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Product Gallery */}
          <section className="mb-32">
            <SectionHeading
              number="04"
              title={gallery.title}
              subtitle={gallery.subtitle}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
              {gallery.images.map((imageData, index) => (
                <div key={index} className="relative rounded-3xl overflow-hidden shadow-lg group">
                  {imageData.type === 'carousel' ? (
                    <>
                      <div className={`absolute inset-0 ${imageData.bg}`}>
                        <ImageCarousel
                          images={imageData.images}
                          alt="Studio View"
                          className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-neutral-200">
                        {imageData.label}
                      </div>
                    </>
                  ) : imageData.type === 'video' ? (
                    <>
                      <div className="absolute inset-0 bg-black">
                        <iframe
                          src={imageData.url}
                          title={imageData.label || 'Product Video'}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      </div>
                      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-neutral-200">
                        {imageData.label}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0">
                        <img
                          src={imageData.image}
                          alt="Contextual View"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        {imageData.overlay && (
                          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                        )}
                      </div>
                      <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-neutral-200">
                        {imageData.label}
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Custom Sections (for special product-specific content like HydrogenMembranes) */}
          {customSections && customSections}

          {/* Roadmap */}
          <section className={`mb-32 ${data.id === 'grapheneGlassFibres' || data.id === 'atmosphericHarvesting' || data.id === 'batteryStorage' || data.id === 'rustene' ? '' : 'max-w-4xl mx-auto'}`}>
            <SectionHeading
              number={customSections ? '06' : '05'}
              title={timeline.title}
              subtitle={timeline.subtitle}
            />
            <Timeline
              items={timeline.events}
              accentColor={timeline.accentColor || accentColor}
            />
          </section>

          {/* Applications */}
          <section className="mb-32">
            <SectionHeading
              number={customSections ? '07' : '05'}
              title={applications.title}
              subtitle={applications.subtitle}
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.items.map((app, i) => (
                <Card
                  key={i}
                  className={`${
                    applications.cardHoverEffect
                      ? `bg-white h-full border-slate-200 hover:border-${
                          applications.hoverColors || 'slate'
                        }-200 hover:shadow-lg transition-all group`
                      : 'bg-neutral-50 h-full border-neutral-200'
                  }`}
                >
                  {applications.noIconWrapper ? (
                    <div className={`mb-6 text-${accentColor}-600`}>
                      {React.createElement(app.icon, { className: 'w-8 h-8' })}
                    </div>
                  ) : (
                    <div
                      className={`${
                        applications.cardHoverEffect
                          ? `w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-700 group-hover:bg-${
                              applications.hoverColors === 'purple' ? 'purple-600' : 'slate-900'
                            } group-hover:text-white transition-colors duration-300`
                          : `w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-${accentColor}-600`
                      }`}
                    >
                      {React.createElement(app.icon, {
                        className: applications.cardHoverEffect ? 'w-7 h-7' : 'w-6 h-6',
                        strokeWidth: applications.cardHoverEffect ? 1.5 : undefined
                      })}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">{app.title}</h3>
                  <p
                    className={`text-sm ${
                      applications.cardHoverEffect ? 'text-slate-500 leading-relaxed' : 'text-neutral-600'
                    }`}
                  >
                    {app.description}
                  </p>
                </Card>
              ))}
            </div>
          </section>

          {/* CTA / Partner */}
          <section
            className={`rounded-3xl p-12 md:p-24 text-center relative overflow-hidden isolate ${
              cta.gradientType === 'radial' ? '' : ''
            } ${data.id === 'armophene' || data.id === 'graphosite' ? 'shadow-2xl' : ''}`}
            style={{
              background: cta.gradientType === 'radial'
                ? `radial-gradient(${cta.gradient.replace('from-', 'ellipse at top, ').replace('via-', '').replace('to-', '')})`
                : undefined,
              backgroundColor: !cta.gradientType ? '#171717' : undefined
            }}
          >
            {!cta.gradientType && (
              <div className={`absolute inset-0 bg-gradient-to-b ${cta.gradient} z-0`}></div>
            )}
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className={`text-3xl md:text-5xl ${data.id === 'armophene' || data.id === 'graphosite' ? 'font-display' : ''} font-medium text-white mb-6`}>
                {cta.title}
              </h2>
              <p className={`text-lg ${data.id === 'armophene' || data.id === 'graphosite' ? 'text-slate-400' : 'text-neutral-400'} mb-10 ${data.id === 'armophene' || data.id === 'graphosite' ? 'font-light' : ''}`}>
                {cta.description}
              </p>
              <div className={`flex ${data.id === 'armophene' || data.id === 'graphosite' ? 'flex-col sm:flex-row' : ''} justify-center gap-4`}>
                <Link to={cta.primaryButton.link}>
                  <Button
                    variant={cta.primaryButton.variant === 'white' ? 'primary' : 'primary'}
                    size="lg"
                    className={
                      cta.primaryButton.variant === 'white'
                        ? 'px-8 bg-white text-slate-900 hover:bg-slate-100 border-transparent'
                        : 'px-8'
                    }
                  >
                    {cta.primaryButton.text}
                  </Button>
                </Link>
                <Link to={cta.secondaryButton.link}>
                  <Button
                    variant="outline"
                    theme="dark"
                    size="lg"
                    className={
                      cta.secondaryButton.variant === 'outline-dark'
                        ? 'border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                        : ''
                    }
                  >
                    {cta.secondaryButton.text}
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailTemplate;
