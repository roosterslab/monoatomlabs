import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Cuboid, Hammer, Weight, Zap, Plane, Construction } from 'lucide-react';
import Button from '../../../components/ui/Button';
import ProductHero from '../../../components/ui/ProductHero';
import BackNavigation from '../../../components/ui/BackNavigation';
import SectionHeading from '../../../components/ui/SectionHeading';
import BentoGrid, { BentoItem } from '../../../components/ui/BentoGrid';
import Card from '../../../components/ui/Card';
import StatCard from '../../../components/ui/StatCard';
import Timeline from '../../../components/ui/Timeline';
import ProcessFlow from '../../../components/ui/ProcessFlow';

// ... imports
import ImageCarousel from '../../../components/ui/ImageCarousel';

const Graphosite = () => {
  const processSteps = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Layering",
      description: "Graphene sheets are interleaved with carbon fiber layers."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Infusion",
      description: "Resin is infused under vacuum to ensure void-free composites."
    },
    {
      icon: <Cuboid className="w-6 h-6" />,
      title: "Curing",
      description: "High-temperature curing activates the graphene reinforcement."
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Shaping",
      description: "Precision machining to final component specifications."
    }
  ];

  const timelineEvents = [
    {
      phase: "Phase 1: R&D",
      title: "Matrix Optimization",
      description: "Achieving uniform graphene dispersion in epoxy resins.",
      status: "completed",
      date: "Q4 2023"
    },
    {
      phase: "Phase 2: Prototype",
      title: "Structural Testing",
      description: "Validating a 40% increase in tensile strength over standard carbon fiber.",
      status: "current",
      date: "Q3 2025"
    },
    {
      phase: "Phase 3: Pilot",
      title: "Aerospace Certification",
      description: "Beginning rigorous testing for aerospace component approval.",
      status: "upcoming",
      date: "2026"
    }
  ];

  const applications = [
    {
      title: "Aerospace",
      description: "Lightweight wing structures and fuselage components.",
      icon: Plane
    },
    {
      title: "Automotive",
      description: "Chassis and body panels for high-performance vehicles.",
      icon: Cuboid
    },
    {
      title: "Sports Equipment",
      description: "Next-gen tennis rackets, golf clubs, and bicycle frames.",
      icon: Zap
    },
    {
      title: "Construction",
      description: "Corrosion-resistant rebars and structural beams.",
      icon: Construction
    }
  ];

  return (
    <div className="min-h-screen pt-36 bg-white">
      <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />
      <div className="container mx-auto px-6 py-8">
        <div className="mt-8 mb-24">
          <ProductHero
            title="Graphosite"
            subtitle="Advanced graphene-reinforced composite materials delivering unmatched strength-to-weight ratios for aerospace, automotive, and industrial applications."
            category="Prototype"
            categoryColor="bg-purple-600 text-white border-purple-500"
            images={['/images/graphosite_hero.png']}
            className="mb-24"
          />

          {/* 1. Introduction */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  number="01"
                  title="The Challenge"
                  subtitle="Weight is the enemy of efficiency."
                />
                <p className="text-lg text-slate-700 leading-relaxed mb-6 font-light">
                  In aerospace and automotive industries, every kilogram saved translates to fuel efficiency and performance.
                  Traditional carbon fiber is light, but it can be brittle and prone to delamination.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-light">
                  Graphosite solves this. By reinforcing the polymer matrix with graphene, we create a composite
                  that is not only lighter but significantly tougher and more resistant to impact.
                  It's the next evolution of structural materials.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-neutral-100">
                <ImageCarousel
                  images={['/images/pipeline/studio/Graphosite.png']}
                  alt="Graphosite Composite"
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </section>

          {/* 2. Process Flow */}
          <section className="mb-32">
            <SectionHeading
              number="02"
              title="How It Works"
              subtitle="Synergy between carbon fiber and graphene."
            />
            <ProcessFlow steps={processSteps} accentColor="purple" />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Performance"
              subtitle="Stronger. Lighter. Tougher."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group overflow-hidden border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black z-0"></div>
                {/* Tech Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

                <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-8 text-purple-300 shadow-lg shadow-purple-900/20">
                      <Weight className="w-7 h-7" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light mb-6 text-white tracking-tight">Interlaminar Reinforcement</h3>
                    <p className="text-slate-300 text-lg leading-relaxed max-w-md">
                      Graphene bridges the gaps between carbon fibers, preventing micro-cracks from propagating
                      and significantly improving the composite's resistance to delamination and fatigue.
                    </p>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-purple-50 border-purple-100">
                <div className="h-full flex flex-col justify-center p-6">
                  <h4 className="text-5xl md:text-6xl font-light text-purple-600 mb-2">40%</h4>
                  <p className="font-medium text-purple-900 uppercase tracking-wide text-sm">Stronger</p>
                  <p className="text-sm text-purple-700/80 mt-2 leading-relaxed">Higher tensile strength than standard composites.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white border-slate-200">
                <div className="h-full flex flex-col p-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-amber-500" />
                  </div>
                  <h4 className="text-xl font-medium text-slate-900 mb-2">Conductive</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Built-in lightning strike protection for aircraft.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-slate-900 border-slate-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6">
                  <StatCard value="-20%" label="Weight Reduction" theme="dark" valueClassName="text-white" labelClassName="text-slate-400" />
                  <StatCard value="High" label="Impact Resistance" theme="dark" valueClassName="text-white" labelClassName="text-slate-400" />
                  <StatCard value="Excellent" label="Fatigue Life" theme="dark" valueClassName="text-white" labelClassName="text-slate-400" />
                  <StatCard value="Yes" label="Recyclable" theme="dark" valueClassName="text-white" labelClassName="text-slate-400" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Product Gallery (New) */}
          <section className="mb-32">
            <SectionHeading
              number="04"
              title="Product Gallery"
              subtitle="Visualizing the future of composites."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
              <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <div className="absolute inset-0 bg-neutral-100">
                  <ImageCarousel
                    images={['/images/pipeline/studio/Graphosite.png']}
                    alt="Studio View"
                    className="w-full h-full object-contain p-8 group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-neutral-200">
                  Studio Module
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <div className="absolute inset-0">
                  <img src="/images/graphosite_hero.png" alt="Contextual View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-neutral-200">
                  Application Context
                </div>
              </div>
            </div>
          </section>

          {/* 5. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="05"
              title="Development Roadmap"
              subtitle="Taking flight."
            />
            <Timeline items={timelineEvents} accentColor="purple" />
          </section>

          {/* 5. Applications */}
          <section className="mb-32">
            <SectionHeading
              number="05"
              title="Applications"
              subtitle="Redefining structural limits."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <Card key={i} className="bg-white h-full border-slate-200 hover:border-purple-200 hover:shadow-lg hover:shadow-purple-900/5 transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-600 group-hover:bg-purple-600 group-hover:text-white transition-colors duration-300">
                    <app.icon className="w-7 h-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{app.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{app.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* 6. CTA / Partner */}
          <section className="bg-slate-900 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden isolate shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/40 via-slate-900 to-black z-0"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">Build lighter. Build stronger.</h2>
              <p className="text-lg text-slate-400 mb-10 font-light">
                We are working with aerospace and automotive leaders to validate Graphosite components. Join our pilot program.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="px-8 bg-white text-slate-900 hover:bg-purple-50 border-transparent">Collaborate</Button>
                </Link>
                <Link to="/products/pipeline">
                  <Button variant="outline" theme="dark" size="lg" className="border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">Back to Pipeline</Button>
                </Link>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Graphosite;
