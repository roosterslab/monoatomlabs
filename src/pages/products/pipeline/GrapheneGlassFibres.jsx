import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Cuboid, Wind, Zap, Gauge, Anchor, Component } from 'lucide-react';
import Button from '../../../components/ui/Button';
import ProductHero from '../../../components/ui/ProductHero';
import BackNavigation from '../../../components/ui/BackNavigation';
import SectionHeading from '../../../components/ui/SectionHeading';
import BentoGrid, { BentoItem } from '../../../components/ui/BentoGrid';
import Card from '../../../components/ui/Card';
import StatCard from '../../../components/ui/StatCard';
import Timeline from '../../../components/ui/Timeline';
import ProcessFlow from '../../../components/ui/ProcessFlow';

const GrapheneGlassFibres = () => {
  const processSteps = [
    {
      icon: <Component className="w-6 h-6" />,
      title: "Coating",
      description: "Glass fibres are coated with a graphene-enhanced sizing agent."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Bonding",
      description: "Graphene improves the interface between fibre and resin."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Dispersion",
      description: "Ensuring uniform distribution along the fibre length."
    },
    {
      icon: <Cuboid className="w-6 h-6" />,
      title: "Curing",
      description: "Forming a composite with superior mechanical properties."
    }
  ];

  const timelineEvents = [
    {
      phase: "Phase 1: Lab",
      title: "Sizing Formulation",
      description: "Developing a stable graphene-based sizing for glass fibres.",
      status: "completed",
      date: "Q1 2024"
    },
    {
      phase: "Phase 2: Prototype",
      title: "Composite Testing",
      description: "Demonstrating 35% increase in interlaminar shear strength.",
      status: "current",
      date: "Q3 2025"
    },
    {
      phase: "Phase 3: Pilot",
      title: "Wind Blade Trial",
      description: "Manufacturing full-scale wind turbine blade sections.",
      status: "upcoming",
      date: "2026"
    }
  ];

  const applications = [
    {
      title: "Wind Energy",
      description: "Lighter, longer, and stronger turbine blades.",
      icon: Wind
    },
    {
      title: "Marine",
      description: "Osmosis-resistant hulls for boats and yachts.",
      icon: Anchor
    },
    {
      title: "Automotive",
      description: "Lightweight body panels and leaf springs.",
      icon: Zap
    },
    {
      title: "Infrastructure",
      description: "Corrosion-free rebars for bridges and tunnels.",
      icon: Component
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-6 py-8">
        <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />

        <div className="mt-8 mb-24">
          <ProductHero
            title="Graphene Glass Fibres"
            subtitle="Revolutionizing composites with graphene-enhanced sizing that bridges the gap between glass and carbon fibre performance at a fraction of the cost."
            category="Pilot Trials"
            categoryColor="bg-purple-600"
            images={['/images/glass_fibres_hero.png']}
            className="mb-24"
          />

          {/* 1. Introduction */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  number="01"
                  title="The Challenge"
                  subtitle="The limits of glass fibre."
                />
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Glass fibre is the workhorse of the composites industry, but it lacks the stiffness and fatigue resistance of carbon fibre. Its weak point is often the interface between the fibre and the resin matrix.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Our solution coats standard glass fibres with graphene. This nano-engineered "sizing" dramatically improves adhesion,
                  transforming affordable glass fibre into a high-performance material that rivals carbon fibre for many structural applications.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/graphene_glass_fibres_studio.png"
                  alt="Reinforced Fibre Spools"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-sm font-mono uppercase tracking-widest mb-2">Nano-Sizing</div>
                  <div className="text-2xl font-medium">Enhanced Adhesion</div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Process Flow */}
          <section className="mb-32">
            <SectionHeading
              number="02"
              title="How It Works"
              subtitle="Strengthening the interface."
            />
            <ProcessFlow steps={processSteps} />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Performance"
              subtitle="Bridging the gap to carbon."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-black z-0"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
                      <Layers className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-light mb-4 text-white">Interfacial Toughness</h3>
                    <p className="text-neutral-300 text-lg">
                      The graphene coating acts as a chemical bridge, increasing the interlaminar shear strength by up to 35%.
                      This prevents delamination, the most common failure mode in composites.
                    </p>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-purple-50 border-purple-100">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-5xl font-light text-purple-600 mb-2">+50%</h4>
                  <p className="font-medium text-neutral-900">Fatigue Life</p>
                  <p className="text-sm text-neutral-600 mt-2">Withstanding more cycles under load.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white">
                <div className="h-full flex flex-col">
                  <Cuboid className="w-10 h-10 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-medium mb-2">Cost Effective</h4>
                  <p className="text-sm text-neutral-600">Performance boost without the high price of carbon fibre.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-neutral-900 border-neutral-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatCard value="High" label="Tensile Strength" theme="dark" />
                  <StatCard value="Yes" label="Drop-in Ready" theme="dark" />
                  <StatCard value="Low" label="Moisture Absorption" theme="dark" />
                  <StatCard value="Light" label="Weight Impact" theme="dark" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="04"
              title="Development Roadmap"
              subtitle="Strengthening industries."
            />
            <Timeline items={timelineEvents} />
          </section>

          {/* 5. Applications */}
          <section className="mb-32">
            <SectionHeading
              number="05"
              title="Applications"
              subtitle="Versatile reinforcement."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <Card key={i} className="bg-neutral-50 h-full border-neutral-200">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-purple-600">
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
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-0"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Reinforce your future.</h2>
              <p className="text-lg text-neutral-400 mb-10">
                Upgrade your composites today. Contact us for sample materials and technical data.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="px-8">Request Samples</Button>
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

export default GrapheneGlassFibres;
