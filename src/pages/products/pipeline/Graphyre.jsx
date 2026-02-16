import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Gauge, Truck, Zap, BarChart3, Clock, DollarSign } from 'lucide-react';
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

const Graphyre = () => {
  const processSteps = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Integration",
      description: "Graphene is dispersed into the rubber compound during mixing."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Bonding",
      description: "Graphene forms a reinforcing network within the polymer matrix."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Vulcanization",
      description: "Standard curing locks in the high-performance properties."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Mapping",
      description: "Smart sensors embedded in the tyre provide real-time data."
    }
  ];

  const timelineEvents = [
    {
      phase: "Phase 1: Lab",
      title: "Compound Development",
      description: "Optimizing the graphene-rubber interface for maximum wear resistance.",
      status: "completed",
      date: "Q1 2024"
    },
    {
      phase: "Phase 2: Prototype",
      title: "Track Testing",
      description: "Performance validation on test tracks showing 30% wear reduction.",
      status: "current",
      date: "Q3 2025"
    },
    {
      phase: "Phase 3: Commercial",
      title: "Fleet Partnerships",
      description: "Pilot programs with major logistics fleets to validate fuel savings.",
      status: "upcoming",
      date: "2026"
    }
  ];

  const applications = [
    {
      title: "Commercial Logistics",
      description: "Extending tyre life for long-haul trucking fleets.",
      icon: Truck
    },
    {
      title: "Electric Vehicles",
      description: "Handling the higher torque and weight of EVs with ease.",
      icon: Zap
    },
    {
      title: "Motorsport",
      description: "High-grip, durable compounds for competitive racing.",
      icon: Gauge
    },
    {
      title: "Mining & Heavy Industry",
      description: "Extreme durability for off-road industrial vehicles.",
      icon: Activity
    }
  ];

  return (
    <div className="min-h-screen pt-36 bg-white">
      <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />
      <div className="container mx-auto px-6 py-8">

        <div className="mt-8 mb-24">
          <ProductHero
            title="Graphyre"
            subtitle="Next-generation graphene-enhanced rubber compounds for tyres that deliver superior durability, lower rolling resistance, and smart sensing capabilities."
            category="Prototype"
            categoryColor="bg-amber-500"
            images={['/images/graphyre_hero.png']}
            className="mb-24"
          />

          {/* 1. Introduction */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  number="01"
                  title="The Challenge"
                  subtitle="Tyre wear is a major environmental and economic issue."
                />
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Tyres release microplastics as they wear down, and frequent replacements cost fleet operators billions.
                  Balancing grip, durability, and fuel efficiency has always been an engineering compromise.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Graphyre eliminates this compromise. By integrating graphene into the rubber matrix,
                  we increase tensile strength and heat dissipation simultaneously.
                  This results in a tyre that lasts longer, grips better, and saves fuel.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-neutral-100">
                <ImageCarousel
                  images={['/images/pipeline/studio/Graphyre.png', '/images/pipeline/studio/Graphyre-2.png']}
                  alt="Graphyre Tyre Technology"
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
              subtitle="Reinforcing rubber at the molecular level."
            />
            <ProcessFlow steps={processSteps} accentColor="amber" />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Performance"
              subtitle="Breaking the magic triangle of tyre performance."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-black z-0"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center mb-6 text-amber-400">
                      <Gauge className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-light mb-4 text-white">Hyper-Alert Sensing</h3>
                    <p className="text-neutral-300 text-lg">
                      Graphyre isn't just tough; it's smart. The graphene network acts as a conductive sensor,
                      providing real-time data on tread depth, temperature, and pressure directly to the driver.
                    </p>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-amber-50 border-amber-100">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-5xl font-light text-amber-600 mb-2">30%</h4>
                  <p className="font-medium text-neutral-900">More Mileage</p>
                  <p className="text-sm text-neutral-600 mt-2">Significantly extending tyre lifespan.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white">
                <div className="h-full flex flex-col">
                  <DollarSign className="w-10 h-10 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-medium mb-2">Fuel Savings</h4>
                  <p className="text-sm text-neutral-600">Reduced rolling resistance lowers fuel consumption by up to 10%.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-neutral-900 border-neutral-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatCard value="A+" label="Wet Grip Rating" theme="dark" valueClassName="text-white" labelClassName="text-amber-500" />
                  <StatCard value="-10%" label="Rolling Resistance" theme="dark" valueClassName="text-white" labelClassName="text-amber-500" />
                  <StatCard value="Real-time" label="Wear Monitoring" theme="dark" valueClassName="text-white" labelClassName="text-amber-500" />
                  <StatCard value="High" label="Heat Dissipation" theme="dark" valueClassName="text-white" labelClassName="text-amber-500" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Product Gallery (New) */}
          <section className="mb-32">
            <SectionHeading
              number="04"
              title="Product Gallery"
              subtitle="Visualizing the future of tire technology."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
              <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <div className="absolute inset-0 bg-neutral-100">
                  <ImageCarousel
                    images={['/images/pipeline/studio/Graphyre.png', '/images/pipeline/studio/Graphyre-2.png']}
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
                  <img src="/images/graphyre_hero.png" alt="Contextual View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-neutral-200">
                  Performance Test
                </div>
              </div>
            </div>
          </section>

          {/* 5. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="05"
              title="Development Roadmap"
              subtitle="Rolling out the future."
            />
            <Timeline items={timelineEvents} />
          </section>

          {/* 5. Applications */}
          <section className="mb-32">
            <SectionHeading
              number="05"
              title="Applications"
              subtitle="Powering the next generation of transport."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <Card key={i} className="bg-neutral-50 h-full border-neutral-200">
                  <div className="mb-6 text-amber-600">
                    <app.icon className="w-8 h-8" />
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
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Drive with us.</h2>
              <p className="text-lg text-neutral-400 mb-10">
                We are looking for fleet partners to pilot Graphyre smart tyres. Experience the future of mobility.
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

export default Graphyre;
