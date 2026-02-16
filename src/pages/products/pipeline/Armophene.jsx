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

// ... imports
import ImageCarousel from '../../../components/ui/ImageCarousel';

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
    <div className="min-h-screen pt-36 bg-white">
      <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />
      <div className="container mx-auto px-6 py-8">

        <div className="mt-8 mb-24">
          <ProductHero
            title="Armophene"
            subtitle="Improving personal protection with graphene-reinforced ballistics that are lighter, stronger, and more flexible than traditional aramid fibers."
            category="R&D Pipeline"
            categoryColor="bg-slate-800 text-white border-slate-700"
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
                <p className="text-lg text-slate-700 leading-relaxed mb-6 font-light">
                  Traditional body armor is heavy, hot, and restrictive. Soldiers and officers often have to choose between maximum protection and the ability to move freely.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed font-light">
                  Armophene changes the equation. By reinforcing ballistic fibers with graphene, we drastically increase the energy absorption capacity of the material.
                  This allows for thinner, lighter plates that stop the same threats.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-slate-200">
                <ImageCarousel
                  images={['/images/pipeline/studio/Armophene.png', '/images/pipeline/studio/Armophene-2.png']}
                  alt="Armophene Ballistic Plate"
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
              subtitle="Dissipating kinetic energy instantly."
            />
            <ProcessFlow steps={processSteps} accentColor="emerald" />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Performance"
              subtitle="Lighter. Stronger. Safer."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group overflow-hidden border-slate-800">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-black z-0"></div>
                {/* Tactical Grid Overlay */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

                <div className="relative z-10 flex flex-col justify-between h-full p-8 md:p-10">
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-slate-800/50 border border-slate-700 flex items-center justify-center mb-8 text-emerald-400 shadow-lg shadow-emerald-900/10">
                      <Shield className="w-7 h-7" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-light mb-6 text-white tracking-tight">Hyper-Velocity Dispersion</h3>
                    <p className="text-slate-400 text-lg leading-relaxed max-w-md">
                      When a projectile strikes Armophene, the graphene network distributes the impact energy spreads laterally
                      at speeds of <span className="text-white font-medium">22 km/s</span>—faster than the speed of sound in the material—preventing penetration.
                    </p>
                  </div>
                  <div className="flex items-center gap-4 mt-8">
                    <div className="px-3 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider">
                      Tested at 900 m/s
                    </div>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-slate-50 border-slate-200">
                <div className="h-full flex flex-col justify-center p-6">
                  <h4 className="text-5xl md:text-6xl font-light text-slate-900 mb-2">-35%</h4>
                  <p className="font-medium text-slate-700 uppercase tracking-wide text-sm">Weight Reduction</p>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">Significantly lighter than equivalent ceramic plates, reducing fatigue.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white border-slate-200">
                <div className="h-full flex flex-col p-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-4">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h4 className="text-xl font-medium text-slate-900 mb-2">Multi-Hit Capable</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">Maintains structural integrity after multiple direct impacts, exceeding standard specs.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-slate-900 border-slate-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-6">
                  <StatCard value="Level IV" label="Protection Capable" theme="dark" valueClassName="text-white" labelClassName="text-slate-400" />
                  <StatCard value="High" label="Flexibility" theme="dark" valueClassName="text-white" labelClassName="text-slate-400" />
                  <StatCard value="Yes" label="Stab Resistant" theme="dark" valueClassName="text-white" labelClassName="text-slate-400" />
                  <StatCard value="10 Yr" label="Shelf Life" theme="dark" valueClassName="text-white" labelClassName="text-slate-400" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Product Gallery (New) */}
          <section className="mb-32">
            <SectionHeading
              number="04"
              title="Product Gallery"
              subtitle="Visualizing the future of protection."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
              <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <div className="absolute inset-0 bg-slate-100">
                  <ImageCarousel
                    images={['/images/pipeline/studio/Armophene.png', '/images/pipeline/studio/Armophene-2.png']}
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
                  <img src="/images/armophene_hero.png" alt="Contextual View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-neutral-200">
                  Tactical Context
                </div>
              </div>
            </div>
          </section>

          {/* 5. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="05"
              title="Development Roadmap"
              subtitle="Protecting those who serve."
            />
            <Timeline items={timelineEvents} accentColor="emerald" />
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
                <Card key={i} className="bg-white h-full border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
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
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black z-0"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-display font-medium text-white mb-6">Equip the future.</h2>
              <p className="text-lg text-slate-400 mb-10 font-light">
                Interested in testing Armophene for your defense applications? Contact our specialized government liaison team.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="px-8 bg-white text-slate-900 hover:bg-slate-100 border-transparent">Request Datasheet</Button>
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

export default Armophene;
