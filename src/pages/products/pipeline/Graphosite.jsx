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
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-6 py-8">
        <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />

        <div className="mt-8 mb-24">
          <ProductHero
            title="Graphosite"
            subtitle="Advanced graphene-reinforced composite materials delivering unmatched strength-to-weight ratios for aerospace, automotive, and industrial applications."
            category="Prototype"
            categoryColor="bg-cyan-500"
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
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  In aerospace and automotive industries, every kilogram saved translates to fuel efficiency and performance.
                  Traditional carbon fiber is light, but it can be brittle and prone to delamination.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Graphosite solves this. By reinforcing the polymer matrix with graphene, we create a composite
                  that is not only lighter but significantly tougher and more resistant to impact.
                  It's the next evolution of structural materials.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/graphosite_studio.png"
                  alt="Graphosite Composite"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-sm font-mono uppercase tracking-widest mb-2">Ultra-Light Structure</div>
                  <div className="text-2xl font-medium">Future of Flight</div>
                </div>
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
            <ProcessFlow steps={processSteps} />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Performance"
              subtitle="Stronger. Lighter. Tougher."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 to-black z-0"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
                      <Weight className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-light mb-4 text-white">Interlaminar Reinforcement</h3>
                    <p className="text-neutral-300 text-lg">
                      Graphene bridges the gaps between carbon fibers, preventing micro-cracks from propagating
                      and significantly improving the composite's resistance to delamination and fatigue.
                    </p>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-cyan-50 border-cyan-100">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-5xl font-light text-cyan-600 mb-2">40%</h4>
                  <p className="font-medium text-neutral-900">Stronger</p>
                  <p className="text-sm text-neutral-600 mt-2">Higher tensile strength than standard composites.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white">
                <div className="h-full flex flex-col">
                  <Zap className="w-10 h-10 text-amber-500 mb-4" />
                  <h4 className="text-xl font-medium mb-2">Conductive</h4>
                  <p className="text-sm text-neutral-600">Built-in lightning strike protection for aircraft.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-neutral-900 border-neutral-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatCard value="-20%" label="Weight Reduction" theme="dark" />
                  <StatCard value="High" label="Impact Resistance" theme="dark" />
                  <StatCard value="Excellent" label="Fatigue Life" theme="dark" />
                  <StatCard value="Yes" label="Recyclable" theme="dark" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="04"
              title="Development Roadmap"
              subtitle="Taking flight."
            />
            <Timeline items={timelineEvents} />
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
                <Card key={i} className="bg-neutral-50 h-full border-neutral-200">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-cyan-600">
                    <app.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-3">{app.title}</h3>
                  <p className="text-neutral-600 text-sm">{app.description}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* 6. CTA / Partner */}
          <section className="bg-neutral-900 rounded-3xl p-12 md:p-24 text-center relative overflow-hidden isolate">
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/20 to-black z-0"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Build lighter. Build stronger.</h2>
              <p className="text-lg text-neutral-400 mb-10">
                We are working with aerospace and automotive leaders to validate Graphosite components. Join our pilot program.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="px-8">Collaborate</Button>
                </Link>
                <Link to="/products/pipeline">
                  <Button variant="outline" theme="dark" size="lg">Back to Pipeline</Button>
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
