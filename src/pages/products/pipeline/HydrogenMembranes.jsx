import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Wind, Zap, Gauge, Filter, Droplets, Factory, Layers } from 'lucide-react';
import Button from '../../../components/ui/Button';
import ProductHero from '../../../components/ui/ProductHero';
import BackNavigation from '../../../components/ui/BackNavigation';
import SectionHeading from '../../../components/ui/SectionHeading';
import BentoGrid, { BentoItem } from '../../../components/ui/BentoGrid';
import Card from '../../../components/ui/Card';
import StatCard from '../../../components/ui/StatCard';
import Timeline from '../../../components/ui/Timeline';
import ProcessFlow from '../../../components/ui/ProcessFlow';

const HydrogenMembranes = () => {
  const processSteps = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Synthesis",
      description: "Growing high-quality single-layer graphene on copper substrates."
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Perforation",
      description: "Creating precise nano-pores using focused ion beams."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Transfer",
      description: "Transferring graphene onto a porous support structure."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Assembly",
      description: "Stacking membranes into high-throughput separation modules."
    }
  ];

  const timelineEvents = [
    {
      phase: "Phase 1: R&D",
      title: "Pore Size Control",
      description: "Achieving sub-nanometer precision to allow only H2 molecules to pass.",
      status: "completed",
      date: "Q3 2024"
    },
    {
      phase: "Phase 2: Pilot",
      title: "Small-Scale Reactor",
      description: "Testing separation efficiency in a continuous flow setup.",
      status: "current",
      date: "Q4 2025"
    },
    {
      phase: "Phase 3: Scale-Up",
      title: "Industrial Module",
      description: "Developing large-area membranes for commercial hydrogen plants.",
      status: "upcoming",
      date: "2027"
    }
  ];

  const applications = [
    {
      title: "Hydrogen Production",
      description: "Purifying hydrogen from natural gas reforming or electrolysis.",
      icon: Factory
    },
    {
      title: "Fuel Cells",
      description: "Ensuring ultra-pure hydrogen fuel for vehicle stacks.",
      icon: Zap
    },
    {
      title: "Carbon Capture",
      description: "Separating CO2 from industrial flue gases.",
      icon: Wind
    },
    {
      title: "Gas Processing",
      description: "Refining natural gas and biogas streams.",
      icon: Droplets
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-6 py-8">
        <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />

        <div className="mt-8 mb-24">
          <ProductHero
            title="Hydrogen Membranes"
            subtitle="High-selectivity graphene membranes enabling efficient hydrogen separation and production with reduced energy losses for clean energy infrastructure."
            category="Pilot Trials"
            categoryColor="bg-indigo-600"
            images={['/images/hydrogen_hero.png']}
            className="mb-24"
          />

          {/* 1. Introduction */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  number="01"
                  title="The Challenge"
                  subtitle="Purity is the key to the hydrogen economy."
                />
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Producing high-purity hydrogen is energy-intensive and expensive. Current separation methods like pressure swing adsorption are bulky and inefficient.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Our graphene membranes offer a molecular sieve solution.
                  With precise atomic-scale pores, they allow small hydrogen molecules to pass through while blocking larger contaminants like CO2 and methane,
                  slashing energy costs by up to 50%.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/hydrogen_membrane_studio.png"
                  alt="Hydrogen Exchange Membrane"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-sm font-mono uppercase tracking-widest mb-2">Molecular Sieve</div>
                  <div className="text-2xl font-medium">Ultra-Pure H2</div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Process Flow */}
          <section className="mb-32">
            <SectionHeading
              number="02"
              title="How It Works"
              subtitle="Atomic precision filtering."
            />
            <ProcessFlow steps={processSteps} />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Performance"
              subtitle="Efficiency at scale."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-black z-0"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400">
                      <Filter className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-light mb-4 text-white">Tunable Selectivity</h3>
                    <p className="text-neutral-300 text-lg">
                      By controlling pore size at the angstrom level, we can tune our membranes to separate
                      specific gases with unprecedented selectivity, far surpassing polymeric membranes.
                    </p>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-indigo-50 border-indigo-100">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-5xl font-light text-indigo-600 mb-2">99.9%</h4>
                  <p className="font-medium text-neutral-900">Purity</p>
                  <p className="text-sm text-neutral-600 mt-2">Meeting fuel cell grade standards directly.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white">
                <div className="h-full flex flex-col">
                  <Zap className="w-10 h-10 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-medium mb-2">Low Energy</h4>
                  <p className="text-sm text-neutral-600">Passive separation process requires no heat or phase change.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-neutral-900 border-neutral-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatCard value=">1000" label="Selectivity (H2/CO2)" theme="dark" />
                  <StatCard value="High" label="Permeance" theme="dark" />
                  <StatCard value="500°C" label="Thermal Stability" theme="dark" />
                  <StatCard value="Compact" label="Footprint" theme="dark" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="04"
              title="Development Roadmap"
              subtitle="Fueling the future."
            />
            <Timeline items={timelineEvents} />
          </section>

          {/* 5. Applications */}
          <section className="mb-32">
            <SectionHeading
              number="05"
              title="Applications"
              subtitle="Clean energy infrastructure."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <Card key={i} className="bg-neutral-50 h-full border-neutral-200">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-indigo-600">
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
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black z-0"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Accelerate the H2 economy.</h2>
              <p className="text-lg text-neutral-400 mb-10">
                Efficient separation is the missing link for affordable hydrogen. Join us in scaling this critical technology.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="px-8">Partner with Us</Button>
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

export default HydrogenMembranes;
