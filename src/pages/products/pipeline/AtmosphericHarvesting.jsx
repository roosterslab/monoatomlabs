import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, Droplet, ArrowRight, Zap, Globe, ShieldCheck, Box } from 'lucide-react';
import Button from '../../../components/ui/Button';
import ProductHero from '../../../components/ui/ProductHero';
import BackNavigation from '../../../components/ui/BackNavigation';
import SectionHeading from '../../../components/ui/SectionHeading';
import BentoGrid, { BentoItem } from '../../../components/ui/BentoGrid';
import Card from '../../../components/ui/Card';
import StatCard from '../../../components/ui/StatCard';
import Timeline from '../../../components/ui/Timeline';
import ProcessFlow from '../../../components/ui/ProcessFlow';

const AtmosphericHarvesting = () => {
  const processSteps = [
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Air Intake",
      description: "Ambient air is drawn through a specialized intake system."
    },
    {
      icon: <Box className="w-6 h-6" />,
      title: "Graphene Filtration",
      description: "Air passes through graphene oxide membranes that selectively adsorb moisture."
    },
    {
      icon: <Droplet className="w-6 h-6" />,
      title: "Condensation",
      description: "Captured moisture is released and condensed into pure, liquid water."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Purification",
      description: "Final mineralization and filtration ensure potable quality."
    }
  ];

  const timelineEvents = [
    {
      phase: "Phase 1: Lab",
      title: "Material Synthesis",
      description: "Development of high-surface-area graphene oxide frameworks for maximum moisture adsorption.",
      status: "completed",
      date: "Q3 2024"
    },
    {
      phase: "Phase 2: Prototype",
      title: "Small-Scale AWG Unit",
      description: "Engineering a portable unit capable of harvesting 10L/day in arid conditions.",
      status: "current",
      date: "Q2 2025"
    },
    {
      phase: "Phase 3: Pilot",
      title: "Field Deployment",
      description: "Deployment of community-scale units in water-scarce regions for real-world validation.",
      status: "upcoming",
      date: "2026"
    }
  ];

  const applications = [
    {
      title: "Arid & Desert Regions",
      description: "Providing a reliable water source in areas with low humidity and no groundwater.",
      icon: Globe
    },
    {
      title: "Emergency Relief",
      description: "Rapidly deployable water stations for disaster zones and refugee camps.",
      icon: ShieldCheck
    },
    {
      title: "Off-Grid Communities",
      description: "Sustainable water independence for remote villages and eco-resorts.",
      icon: Zap
    },
    {
      title: "Military Operations",
      description: "Reducing logistical burden by generating water on-site for deployed forces.",
      icon: Box
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-6 py-8">
        <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />

        <div className="mt-8 mb-24">
          <ProductHero
            title="Atmospheric Moisture Harvesting"
            subtitle="Graphene membranes engineered to harvest atmospheric moisture and convert air into potable water efficiently for sustainable water production."
            category="Pilot Trials"
            categoryColor="bg-teal-500"
            images={['/images/atmospheric_hero.png']}
            className="mb-24"
          />

          {/* 1. Introduction & Problem Statement */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  number="01"
                  title="The Challenge"
                  subtitle="Water scarcity is a growing global crisis."
                />
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Traditional water sources are depleting, and desalination is energy-intensive.
                  Billions of people lack access to clean drinking water, especially in arid regions.
                  We need a decentralized, sustainable solution that taps into the moisture present in the air all around us.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Our Graphene-Enhanced Atmospheric Water Generator (AWG) utilizes the extraordinary surface area
                  and hydrophilic properties of graphene to capture moisture even at low humidity levels,
                  delivering clean water with minimal energy consumption.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/atmospheric_harvesting_studio.png"
                  alt="Atmospheric Water Generator Context"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-sm font-mono uppercase tracking-widest mb-2">Prototype Alpha</div>
                  <div className="text-2xl font-medium">Next-Gen Water Harvest</div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Process Flow */}
          <section className="mb-32">
            <SectionHeading
              number="02"
              title="How It Works"
              subtitle="From thin air to pure water."
            />
            <ProcessFlow steps={processSteps} />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Technology"
              subtitle="Breakthrough efficiency driven by graphene."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900 to-black z-0"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-teal-500/20 flex items-center justify-center mb-6 text-teal-400">
                      <Droplet className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-light mb-4 text-white">Hyper-Efficient Adsorption</h3>
                    <p className="text-neutral-300 text-lg">
                      Our graphene oxide framework enables moisture capture at humidity levels as low as 20%,
                      significantly outperforming conventional desiccant wheels.
                    </p>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-teal-50 border-teal-100">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-5xl font-light text-teal-600 mb-2">30%</h4>
                  <p className="font-medium text-neutral-900">More Energy Efficient</p>
                  <p className="text-sm text-neutral-600 mt-2">Compared to standard compression-based AWGs.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white">
                <div className="h-full flex flex-col">
                  <Zap className="w-10 h-10 text-amber-500 mb-4" />
                  <h4 className="text-xl font-medium mb-2">Solar Ready</h4>
                  <p className="text-sm text-neutral-600">Designed for full integration with solar PV systems for zero-carbon operation.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-neutral-900 border-neutral-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatCard value="50L" label="Daily Output (Unit)" theme="dark" />
                  <StatCard value="99.9%" label="Purity Level" theme="dark" />
                  <StatCard value="24/7" label="Operation Cycle" theme="dark" />
                  <StatCard value="<0.3" label="kWh per Liter" theme="dark" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="04"
              title="Development Roadmap"
              subtitle="Path to commercialization."
            />
            <Timeline items={timelineEvents} />
          </section>

          {/* 5. Applications */}
          <section className="mb-32">
            <SectionHeading
              number="05"
              title="Applications"
              subtitle="Solving water scarcity everywhere."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <Card key={i} className="bg-neutral-50 h-full border-neutral-200">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-teal-600">
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
            <div className="absolute inset-0 bg-gradient-to-b from-teal-900/20 to-black z-0"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Partner with us.</h2>
              <p className="text-lg text-neutral-400 mb-10">
                We are currently seeking pilot partners for our Atmospheric Water Generators.
                Join us in solving the global water crisis.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="px-8">Deploy Pilot</Button>
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

export default AtmosphericHarvesting;
