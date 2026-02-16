import React from 'react';
import { Link } from 'react-router-dom';
import { Droplet, Waves, Filter, Zap, Globe, Gauge, Activity, Factory, Sprout } from 'lucide-react';
import Button from '../../../components/ui/Button';
import ProductHero from '../../../components/ui/ProductHero';
import BackNavigation from '../../../components/ui/BackNavigation';
import SectionHeading from '../../../components/ui/SectionHeading';
import BentoGrid, { BentoItem } from '../../../components/ui/BentoGrid';
import Card from '../../../components/ui/Card';
import StatCard from '../../../components/ui/StatCard';
import Timeline from '../../../components/ui/Timeline';
import ProcessFlow from '../../../components/ui/ProcessFlow';

const DesalinationMembranes = () => {
  const processSteps = [
    {
      icon: <Waves className="w-6 h-6" />,
      title: "Intake",
      description: "Seawater is pre-treated and pressurized."
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Filtration",
      description: "Water passes through graphene nanopores rejected salt ions."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Efficiency",
      description: "Low friction allows high flow rates at lower pressures."
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Fresh Water",
      description: "Pure water is collected for municipal or industrial use."
    }
  ];

  const timelineEvents = [
    {
      phase: "Phase 1: Lab",
      title: "Membrane Synthesis",
      description: "Creating large-area single-layer graphene supports.",
      status: "completed",
      date: "Q2 2024"
    },
    {
      phase: "Phase 2: Prototype",
      title: "Module Testing",
      description: "Validating salt rejection rates of >99% in test cells.",
      status: "current",
      date: "Q4 2025"
    },
    {
      phase: "Phase 3: Pilot",
      title: "Desalination Plant Trial",
      description: "Installing pilot modules at a coastal desalination facility.",
      status: "upcoming",
      date: "2027"
    }
  ];

  const applications = [
    {
      title: "Municipal Water",
      description: "Providing potable water for coastal cities.",
      icon: Globe
    },
    {
      title: "Industrial Treatment",
      description: "Purifying process water for manufacturing.",
      icon: Factory
    },
    {
      title: "Agriculture",
      description: "Desalinating brackish water for irrigation.",
      icon: Sprout
    },
    {
      title: "Emergency Relief",
      description: "Portable desalination units for disaster zones.",
      icon: Activity
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-6 py-8">
        <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />

        <div className="mt-8 mb-24">
          <ProductHero
            title="Desalination Membranes"
            subtitle="Solving the global water crisis with ultra-permeable graphene membranes that desalinate seawater at a fraction of the energy cost."
            category="Pilot Trials"
            categoryColor="bg-cyan-600"
            images={['/images/desalination_hero.png']}
            className="mb-24"
          />

          {/* 1. Introduction */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  number="01"
                  title="The Challenge"
                  subtitle="Water is abundant, but fresh water is scarce."
                />
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Current desalination technologies require immense amounts of energy to force water through thick polymer membranes. This makes desalinated water expensive and environmentally taxing.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Our graphene membranes are just one atom thick. This extreme thinness offers minimal resistance to water flow while perfectly blocking salt ions, reducing energy consumption by up to 40%.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/desalination_membrane_studio.png"
                  alt="Desalination Module"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-sm font-mono uppercase tracking-widest mb-2">Clean Water</div>
                  <div className="text-2xl font-medium">Global Impact</div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Process Flow */}
          <section className="mb-32">
            <SectionHeading
              number="02"
              title="How It Works"
              subtitle="Sieving salt at the atomic scale."
            />
            <ProcessFlow steps={processSteps} />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Performance"
              subtitle="More flow. Less energy."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 to-black z-0"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400">
                      <Droplet className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-light mb-4 text-white">High-Flux Permeability</h3>
                    <p className="text-neutral-300 text-lg">
                      Water molecules pass through our graphene membranes 100x faster than through traditional polymers,
                      allowing for smaller plants and lower operating pressures.
                    </p>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-cyan-50 border-cyan-100">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-5xl font-light text-cyan-600 mb-2">-40%</h4>
                  <p className="font-medium text-neutral-900">Energy Use</p>
                  <p className="text-sm text-neutral-600 mt-2">Drastically lowering the cost of water.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white">
                <div className="h-full flex flex-col">
                  <Gauge className="w-10 h-10 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-medium mb-2">Durability</h4>
                  <p className="text-sm text-neutral-600">Resistant to chlorine and bio-fouling.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-neutral-900 border-neutral-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatCard value="99.7%" label="Salt Rejection" theme="dark" />
                  <StatCard value="High" label="Flow Rate" theme="dark" />
                  <StatCard value="Low" label="Pressure Req" theme="dark" />
                  <StatCard value="Long" label="Lifespan" theme="dark" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="04"
              title="Development Roadmap"
              subtitle="Flowing towards the future."
            />
            <Timeline items={timelineEvents} />
          </section>

          {/* 5. Applications */}
          <section className="mb-32">
            <SectionHeading
              number="05"
              title="Applications"
              subtitle="Water for a thirsty world."
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
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Partner for water security.</h2>
              <p className="text-lg text-neutral-400 mb-10">
                Help us bring affordable, clean water to the world. We are looking for pilot partners.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="px-8">Inquire Now</Button>
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

export default DesalinationMembranes;
