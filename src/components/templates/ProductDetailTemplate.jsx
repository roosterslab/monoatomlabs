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
    <div className="min-h-screen pt-36 bg-gradient-to-br from-neutral-50 via-white to-neutral-100/50">
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
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.25)] transition-all duration-500 bg-gradient-to-br from-white to-neutral-50 border border-neutral-200/50 ring-1 ring-neutral-100/50">
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
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className={`relative group overflow-hidden ${features.hero.border || ''} shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.25)] transition-all duration-700`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${features.hero.gradient} z-0 group-hover:scale-105 transition-transform duration-700`}></div>
                {features.hero.overlay && (
                  <div className={`absolute inset-0 ${features.hero.overlay} group-hover:opacity-20 transition-opacity duration-700`}></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent z-0"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-8">
                  <div>
                    <div className={`w-16 h-16 rounded-2xl ${features.hero.iconBg} flex items-center justify-center mb-8 ${features.hero.iconColor} shadow-lg shadow-black/20 backdrop-blur-sm border border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500`}>
                      {React.createElement(features.hero.icon, { className: 'w-8 h-8' })}
                    </div>
                    <h3 className="text-4xl font-light mb-4 text-white leading-tight">{features.hero.title}</h3>
                    <p className="text-neutral-200/90 text-lg leading-relaxed">{features.hero.description}</p>
                  </div>
                  {features.hero.badge && (
                    <div className="flex items-center gap-4 mt-8">
                      <div className={`px-4 py-2 rounded-full bg-gradient-to-r from-${features.hero.badge.color}-500/20 to-${features.hero.badge.color}-600/20 border border-${features.hero.badge.color}-400/30 text-${features.hero.badge.color}-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm shadow-lg`}>
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
                  className={stat.bg ? `${stat.bg} ${stat.border} shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1` : 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1'}
                >
                  {stat.value ? (
                    <div className="h-full flex flex-col justify-center">
                      <h4 className={`text-5xl font-light ${stat.color} mb-3 tracking-tight`}>{stat.value}</h4>
                      <p className={`font-semibold text-base ${stat.labelColor || 'text-neutral-900'}`}>{stat.label}</p>
                      {stat.description && (
                        <p className="text-sm text-neutral-600 mt-3 leading-relaxed">{stat.description}</p>
                      )}
                    </div>
                  ) : (
                    <div className="h-full flex flex-col">
                      <div className={`w-12 h-12 rounded-xl ${stat.iconBg || 'bg-gradient-to-br from-neutral-100 to-neutral-50'} flex items-center justify-center mb-5 shadow-sm`}>
                        {React.createElement(stat.icon, { className: `w-6 h-6 ${stat.iconColor}` })}
                      </div>
                      <h4 className="text-xl font-semibold mb-2">{stat.title}</h4>
                      <p className="text-sm text-neutral-600 leading-relaxed">{stat.description}</p>
                    </div>
                  )}
                </BentoItem>
              ))}

              {/* Metrics Bar */}
              <BentoItem colSpan={3} className={`${features.darkBg || 'bg-gradient-to-br from-neutral-900 via-neutral-900 to-black'} shadow-[0_8px_30px_rgba(0,0,0,0.25)] border-neutral-800`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {features.metrics.map((metric, index) => (
                    <StatCard
                      key={index}
                      value={metric.value}
                      label={metric.label}
                      theme="dark"
                      valueClassName="text-white font-semibold"
                      labelClassName={metric.labelColor || 'text-neutral-400 font-medium'}
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
                <div key={index} className="relative rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)] transition-all duration-700 group ring-1 ring-neutral-200/50">
                  {imageData.type === 'carousel' ? (
                    <>
                      <div className={`absolute inset-0 ${imageData.bg} group-hover:brightness-105 transition-all duration-700`}>
                        <ImageCarousel
                          images={imageData.images}
                          alt="Studio View"
                          className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="absolute bottom-6 left-6 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl text-sm font-semibold border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.1)] group-hover:shadow-[0_6px_30px_rgba(0,0,0,0.15)] transition-all duration-500 text-neutral-900">
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
                      <div className="absolute bottom-6 left-6 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl text-sm font-semibold border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.1)] group-hover:shadow-[0_6px_30px_rgba(0,0,0,0.15)] transition-all duration-500 text-neutral-900">
                        {imageData.label}
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="absolute inset-0">
                        <img
                          src={imageData.image}
                          alt="Contextual View"
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        {imageData.overlay && (
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent group-hover:from-black/30 group-hover:via-transparent transition-all duration-700"></div>
                        )}
                      </div>
                      <div className="absolute bottom-6 left-6 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-md px-5 py-2.5 rounded-2xl text-sm font-semibold border border-neutral-200/70 shadow-[0_4px_20px_rgba(0,0,0,0.1)] group-hover:shadow-[0_6px_30px_rgba(0,0,0,0.15)] transition-all duration-500 text-neutral-900">
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
                        }-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] shadow-[0_2px_10px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-1 group`
                      : 'bg-gradient-to-br from-white to-neutral-50/50 h-full border-neutral-200 hover:border-neutral-300 shadow-[0_2px_10px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-1'
                  }`}
                >
                  {applications.noIconWrapper ? (
                    <div className={`mb-6 text-${accentColor}-600`}>
                      {React.createElement(app.icon, { className: 'w-9 h-9' })}
                    </div>
                  ) : (
                    <div
                      className={`${
                        applications.cardHoverEffect
                          ? `w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100/50 border border-slate-200/70 flex items-center justify-center mb-6 text-slate-700 shadow-sm group-hover:shadow-lg group-hover:bg-${
                              applications.hoverColors === 'purple' ? 'purple-600' : 'slate-900'
                            } group-hover:text-white group-hover:scale-110 transition-all duration-500`
                          : `w-14 h-14 rounded-2xl bg-gradient-to-br from-white to-${accentColor}-50/30 border border-${accentColor}-200/50 flex items-center justify-center mb-6 text-${accentColor}-600 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300`
                      }`}
                    >
                      {React.createElement(app.icon, {
                        className: applications.cardHoverEffect ? 'w-7 h-7' : 'w-7 h-7',
                        strokeWidth: applications.cardHoverEffect ? 1.5 : 1.5
                      })}
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-neutral-900 mb-3 leading-snug">{app.title}</h3>
                  <p
                    className={`text-sm ${
                      applications.cardHoverEffect ? 'text-slate-600 leading-relaxed' : 'text-neutral-600 leading-relaxed'
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
            className={`rounded-3xl p-12 md:p-24 text-center relative overflow-hidden isolate shadow-[0_20px_80px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_100px_rgba(0,0,0,0.35)] transition-all duration-700 ${
              cta.gradientType === 'radial' ? '' : ''
            } ${data.id === 'armophene' || data.id === 'graphosite' ? 'ring-1 ring-white/10' : 'ring-1 ring-black/10'}`}
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
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-0"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className={`text-3xl md:text-5xl ${data.id === 'armophene' || data.id === 'graphosite' ? 'font-display' : ''} font-semibold text-white mb-6 leading-tight tracking-tight`}>
                {cta.title}
              </h2>
              <p className={`text-lg ${data.id === 'armophene' || data.id === 'graphosite' ? 'text-slate-300' : 'text-neutral-300'} mb-10 leading-relaxed ${data.id === 'armophene' || data.id === 'graphosite' ? 'font-light' : ''}`}>
                {cta.description}
              </p>
              <div className={`flex ${data.id === 'armophene' || data.id === 'graphosite' ? 'flex-col sm:flex-row' : ''} justify-center gap-4`}>
                <Link to={cta.primaryButton.link}>
                  <Button
                    variant={cta.primaryButton.variant === 'white' ? 'primary' : 'primary'}
                    size="lg"
                    className={
                      cta.primaryButton.variant === 'white'
                        ? 'px-8 bg-white text-slate-900 hover:bg-slate-50 border-transparent shadow-[0_8px_30px_rgba(255,255,255,0.3)] hover:shadow-[0_12px_40px_rgba(255,255,255,0.4)] hover:scale-105 transition-all duration-300 font-semibold'
                        : 'px-8 shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:scale-105 transition-all duration-300 font-semibold'
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
                        ? 'border-slate-600 text-slate-200 hover:bg-slate-800 hover:text-white hover:border-slate-500 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 font-semibold'
                        : 'backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:scale-105 transition-all duration-300 font-semibold'
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
