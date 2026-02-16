import React from 'react';
import { Link } from 'react-router-dom';
import { Battery, Zap, Clock, Repeat, Gauge, Server, Smartphone, Activity, Layers, Car, Plane } from 'lucide-react';
import Button from '../../../components/ui/Button';
import ProductHero from '../../../components/ui/ProductHero';
import BackNavigation from '../../../components/ui/BackNavigation';
import SectionHeading from '../../../components/ui/SectionHeading';
import BentoGrid, { BentoItem } from '../../../components/ui/BentoGrid';
import Card from '../../../components/ui/Card';
import StatCard from '../../../components/ui/StatCard';
import Timeline from '../../../components/ui/Timeline';
import ProcessFlow from '../../../components/ui/ProcessFlow';

const BatteryStorage = () => {
  const processSteps = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Anode",
      description: "Graphene-silicon composite anodes for higher capacity."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Cathode",
      description: "Conductive graphene networks improve electron transport."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Assembly",
      description: "Precision stacking of electrodes and separators."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Cycling",
      description: "Rigorous charge/discharge testing to ensure longevity."
    }
  ];

  const timelineEvents = [
    {
      phase: "Phase 1: Lab",
      title: "Anode Optimization",
      description: "Achieving 3x capacity of graphite anodes using graphene-silicon.",
      status: "completed",
      date: "Q4 2023"
    },
    {
      phase: "Phase 2: Prototype",
      title: "Pouch Cell Testing",
      description: "Validating 1000+ cycles at high charging rates (5C).",
      status: "current",
      date: "Q2 2025"
    },
    {
      phase: "Phase 3: Pilot",
      title: "EV Pack Integration",
      description: "Demonstrating a 500-mile range battery pack prototype.",
      status: "upcoming",
      date: "2026"
    }
  ];

  const applications = [
    {
      title: "Electric Vehicles",
      description: "Faster charging and longer range for next-gen EVs.",
      icon: Car
    },
    {
      title: "Grid Storage",
      description: "Stabilizing renewable energy grids with rapid response.",
      icon: Server
    },
    {
      title: "Consumer Electronics",
      description: "Longer lasting batteries for phones and laptops.",
      icon: Smartphone
    },
    {
      title: "Drones",
      description: "High power-to-weight ratio for extended flight times.",
      icon: Plane
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-6 py-8">
        <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />

        <div className="mt-8 mb-24">
          <ProductHero
            title="Graphene Battery Storage"
            subtitle="Supercharging energy storage with graphene-enhanced electrodes that deliver higher density, faster charging, and longer lifecycles."
            category="Pilot Trials"
            categoryColor="bg-amber-500"
            images={['/images/battery_hero.png']}
            className="mb-24"
          />

          {/* 1. Introduction */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  number="01"
                  title="The Challenge"
                  subtitle="The bottleneck of the electric future."
                />
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Current lithium-ion batteries are reaching their theoretical limits. They take too long to charge, degrade too quickly, and are heavy. This limits the adoption of EVs and renewable energy.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  By integrating graphene into battery electrodes, we drastically improve electrical conductivity and structural stability.
                  This allows for faster electron flow (charging) and prevents the material from cracking during expansion (longevity).
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/battery_storage_studio.png"
                  alt="Next-Gen Battery Cell"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-sm font-mono uppercase tracking-widest mb-2">High Energy Density</div>
                  <div className="text-2xl font-medium">Power Unleashed</div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Process Flow */}
          <section className="mb-32">
            <SectionHeading
              number="02"
              title="How It Works"
              subtitle="Conductivity at the speed of graphene."
            />
            <ProcessFlow steps={processSteps} />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Performance"
              subtitle="Charge faster. Drive farther."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-black z-0"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6 text-amber-400">
                      <Zap className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-light mb-4 text-white">Rapid Charge Kinetic</h3>
                    <p className="text-neutral-300 text-lg">
                      Graphene's exceptional conductivity allows for ultra-fast charging rates (5C+) without overheating,
                      enabling an 80% charge in under 15 minutes.
                    </p>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-amber-50 border-amber-100">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-5xl font-light text-amber-600 mb-2">3x</h4>
                  <p className="font-medium text-neutral-900">Capacity</p>
                  <p className="text-sm text-neutral-600 mt-2">Versus standard graphite anodes.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white">
                <div className="h-full flex flex-col">
                  <Repeat className="w-10 h-10 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-medium mb-2">Lifecycle</h4>
                  <p className="text-sm text-neutral-600">Retains 90% capacity after 1000 cycles.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-neutral-900 border-neutral-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatCard value="20 Min" label="Charge Time (0-80%)" theme="dark" />
                  <StatCard value="400 Wh/kg" label="Energy Density" theme="dark" />
                  <StatCard value="High" label="Thermal Safety" theme="dark" />
                  <StatCard value="-30°C" label="Low Temp Perf" theme="dark" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="04"
              title="Development Roadmap"
              subtitle="Energizing the transition."
            />
            <Timeline items={timelineEvents} />
          </section>

          {/* 5. Applications */}
          <section className="mb-32">
            <SectionHeading
              number="05"
              title="Applications"
              subtitle="Power for every scale."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <Card key={i} className="bg-neutral-50 h-full border-neutral-200">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-amber-600">
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
            <div className="absolute inset-0 bg-gradient-to-b from-amber-900/20 to-black z-0"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Power the revolution.</h2>
              <p className="text-lg text-neutral-400 mb-10">
                We are seeking automotive and grid partners to validate our next-gen battery cells.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="px-8">Partner Inquiry</Button>
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

export default BatteryStorage;
