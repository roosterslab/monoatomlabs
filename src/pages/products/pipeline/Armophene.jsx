import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ChevronRight, Activity, Zap, Target, Lock, UserCheck, Layers, Truck } from 'lucide-react';
import Button from '../../../components/ui/Button';
import ProductHero from '../../../components/ui/ProductHero';
import BackNavigation from '../../../components/ui/BackNavigation';
import SectionHeading from '../../../components/ui/SectionHeading';
import BentoGrid, { BentoItem } from '../../../components/ui/BentoGrid';
import Card from '../../../components/ui/Card';
import StatCard from '../../../components/ui/StatCard';
import Timeline from '../../../components/ui/Timeline';
import ProcessFlow from '../../../components/ui/ProcessFlow';

const Armophene = () => {
  const processSteps = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Synthesis",
      description: "Graphene oxide reduced to pristine graphene nanoplatelets."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Composite",
      description: "Graphene is embedded into ultra-high-molecular-weight polyethylene (UHMWPE)."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Lamination",
      description: "Layers are cross-plied and fused under high pressure."
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Testing",
      description: "Ballistic verification against NIJ standards."
    }
  ];

  const timelineEvents = [
    {
      phase: "Phase 1: Lab",
      title: "Impact Resistance",
      description: "Micro-ballistic testing showing 200% improvement over Kevlar per unit weight.",
      status: "completed",
      date: "Q2 2024"
    },
    {
      phase: "Phase 2: Prototype",
      title: "Vest Fabrication",
      description: "Creating full tactical vest prototypes for flexibility testing.",
      status: "current",
      date: "Q1 2026"
    },
    {
      phase: "Phase 3: Certification",
      title: "NIJ Certification",
      description: "Official ballistic certification for Level III and IV protection.",
      status: "upcoming",
      date: "2026"
    }
  ];

  const applications = [
    {
      title: "Defense",
      description: "Next-gen body armor for infantry and special forces.",
      icon: Shield
    },
    {
      title: "Law Enforcement",
      description: "Lightweight, concealable vests for daily patrol use.",
      icon: Lock
    },
    {
      title: "Vehicle Armor",
      description: "Up-armoring for light tactical vehicles without compromising mobility.",
      icon: Truck
    },
    {
      title: "Personal Security",
      description: "Discreet protection for VIPs and security personnel.",
      icon: UserCheck
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-6 py-8">
        <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />

        <div className="mt-8 mb-24">
          <ProductHero
            title="Armophene"
            subtitle="Improving personal protection with graphene-reinforced ballistics that are lighter, stronger, and more flexible than traditional aramid fibers."
            category="R&D Pipeline"
            categoryColor="bg-blue-600"
            images={['/images/armophene_hero.png']}
            className="mb-24"
          />

          {/* 1. Introduction */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  number="01"
                  title="The Challenge"
                  subtitle="Protection usually comes at the cost of mobility."
                />
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Traditional body armor is heavy, hot, and restrictive. Soldiers and officers often have to choose between maximum protection and the ability to move freely.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Armophene changes the equation. By reinforcing ballistic fibers with graphene, we drastically increase the energy absorption capacity of the material.
                  This allows for thinner, lighter plates that stop the same threats.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/armophene_studio.png"
                  alt="Armophene Ballistic Plate"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-sm font-mono uppercase tracking-widest mb-2">Tactical Advantage</div>
                  <div className="text-2xl font-medium">Unrestricted Movement</div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Process Flow */}
          <section className="mb-32">
            <SectionHeading
              number="02"
              title="How It Works"
              subtitle="Dissipating kinetic energy instantly."
            />
            <ProcessFlow steps={processSteps} />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Performance"
              subtitle="Lighter. Stronger. Safer."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black z-0"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-light mb-4 text-white">Hyper-Velocity Dispersion</h3>
                    <p className="text-neutral-300 text-lg">
                      When a projectile strikes Armophene, the graphene network distributes the impact energy spreads laterally
                      at speeds of 22 km/s—faster than the speed of sound in the material—preventing penetration.
                    </p>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-blue-50 border-blue-100">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-5xl font-light text-blue-600 mb-2">-35%</h4>
                  <p className="font-medium text-neutral-900">Weight</p>
                  <p className="text-sm text-neutral-600 mt-2">Lighter than equivalent ceramic plates.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white">
                <div className="h-full flex flex-col">
                  <Zap className="w-10 h-10 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-medium mb-2">Multi-Hit</h4>
                  <p className="text-sm text-neutral-600">Maintains integrity after multiple direct impacts.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-neutral-900 border-neutral-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatCard value="Level IV" label="Protection Capable" theme="dark" />
                  <StatCard value="High" label="Flexibility" theme="dark" />
                  <StatCard value="Yes" label="Stab Resistant" theme="dark" />
                  <StatCard value="10 Yr" label="Shelf Life" theme="dark" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="04"
              title="Development Roadmap"
              subtitle="Protecting those who serve."
            />
            <Timeline items={timelineEvents} />
          </section>

          {/* 5. Applications */}
          <section className="mb-32">
            <SectionHeading
              number="05"
              title="Applications"
              subtitle="Defense and security solutions."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <Card key={i} className="bg-neutral-50 h-full border-neutral-200">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-blue-600">
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
            <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-black z-0"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Equip the future.</h2>
              <p className="text-lg text-neutral-400 mb-10">
                Interested in testing Armophene for your defense applications? Contact our government liaison team.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="px-8">Request Datasheet</Button>
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

export default Armophene;
