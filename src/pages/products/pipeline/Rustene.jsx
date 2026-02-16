import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, CheckCircle2, ChevronRight, Anchor, Truck, Construction } from 'lucide-react';
import Button from '../../../components/ui/Button';
import ProductHero from '../../../components/ui/ProductHero';
import BackNavigation from '../../../components/ui/BackNavigation';
import SectionHeading from '../../../components/ui/SectionHeading';
import BentoGrid, { BentoItem } from '../../../components/ui/BentoGrid';
import Card from '../../../components/ui/Card';
import StatCard from '../../../components/ui/StatCard';
import Timeline from '../../../components/ui/Timeline';
import ProcessFlow from '../../../components/ui/ProcessFlow';

const Rustene = () => {
  const processSteps = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Surface Prep",
      description: "Standard cleaning and preparation of the metal surface."
    },
    {
      icon: <Construction className="w-6 h-6" />,
      title: "Application",
      description: "Rustene is applied like standard primer, creating an impermeable graphene barrier."
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Curing",
      description: "Rapid curing process forms a covalent bond with the substrate."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Protection",
      description: "Long-term resistance against moisture, salt, and chemical corrosion."
    }
  ];

  const timelineEvents = [
    {
      phase: "Phase 1: R&D",
      title: "Formulation Optimization",
      description: "Developing the optimal graphene-to-polymer ratio for maximum adhesion and barrier properties.",
      status: "completed",
      date: "Q2 2024"
    },
    {
      phase: "Phase 2: Testing",
      title: "ISO Salt Spray Tests",
      description: "Achieving 5000+ hours in accelerated weathering tests with zero corrosion.",
      status: "current",
      date: "Q4 2025"
    },
    {
      phase: "Phase 3: Pilot",
      title: "Industrial Trials",
      description: "Field testing on marine vessels and bridge infrastructure.",
      status: "upcoming",
      date: "2026"
    }
  ];

  const applications = [
    {
      title: "Marine Vessels",
      description: "Protecting hulls and decks from aggressive saltwater corrosion.",
      icon: Anchor
    },
    {
      title: "Infrastructure",
      description: "Extending the life of bridges, pipelines, and steel structures.",
      icon: Construction
    },
    {
      title: "Automotive",
      description: "Underbody coating for rust prevention in harsh climates.",
      icon: Truck
    },
    {
      title: "Industrial Equipment",
      description: "Durability for machinery exposed to chemical environments.",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="container mx-auto px-6 py-8">
        <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />

        <div className="mt-8 mb-24">
          <ProductHero
            title="Rustene"
            subtitle="Graphene-based anti-rusting paint that forms an ultra-thin barrier preventing corrosion and extending metal lifespan."
            category="R&D Pipeline"
            categoryColor="bg-blue-500"
            images={['/images/rustene_hero.png']}
            className="mb-24"
          />

          {/* 1. Introduction */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  number="01"
                  title="The Challenge"
                  subtitle="Corrosion costs the global economy $2.5 trillion annually."
                />
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Traditional anti-corrosion coatings often rely on heavy metals like zinc or toxic chromates,
                  and they eventually degrade, leading to structural failure and costly repairs.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Rustene changes the game by utilizing the impermeability of graphene.
                  It creates a zig-zag path for corrosive elements, effectively blocking oxygen and moisture
                  from reaching the metal surface, extending asset lifespan by up to 5x.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/rustene_studio.png"
                  alt="Rustene Application"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-sm font-mono uppercase tracking-widest mb-2">Advanced Protection</div>
                  <div className="text-2xl font-medium">Molecular Barrier</div>
                </div>
              </div>
            </div>
          </section>

          {/* 2. Process Flow */}
          <section className="mb-32">
            <SectionHeading
              number="02"
              title="How It Works"
              subtitle="Impermeable protection at the atomic scale."
            />
            <ProcessFlow steps={processSteps} />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Performance"
              subtitle="Redefining durability standards."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-black z-0"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                      <Shield className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-light mb-4 text-white">The Tortuous Path Effect</h3>
                    <p className="text-neutral-300 text-lg">
                      Graphene platelets within the coating create a complex maze that corrosive molecules must navigate,
                      increasing the effective diffusion path length by orders of magnitude.
                    </p>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-blue-50 border-blue-100">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-5xl font-light text-blue-600 mb-2">5x</h4>
                  <p className="font-medium text-neutral-900">Lifespan Extension</p>
                  <p className="text-sm text-neutral-600 mt-2">Significantly reducing maintenance cycles.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white">
                <div className="h-full flex flex-col">
                  <ShieldCheck className="w-10 h-10 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-medium mb-2">Self-Healing</h4>
                  <p className="text-sm text-neutral-600">Smart polymer matrix can self-repair micro-cracks before rust begins.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-neutral-900 border-neutral-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatCard value="5000h+" label="Salt Spray Test" theme="dark" />
                  <StatCard value="<15μm" label="Coating Thickness" theme="dark" />
                  <StatCard value="100%" label="UV Stable" theme="dark" />
                  <StatCard value="Low VOC" label="Eco-Friendly" theme="dark" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="04"
              title="Development Roadmap"
              subtitle="Path to market."
            />
            <Timeline items={timelineEvents} />
          </section>

          {/* 5. Applications */}
          <section className="mb-32">
            <SectionHeading
              number="05"
              title="Applications"
              subtitle="Protecting critical infrastructure."
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
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Protect your assets.</h2>
              <p className="text-lg text-neutral-400 mb-10">
                Looking to extend the life of your infrastructure? We are looking for industrial partners for pilot applications.
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

export default Rustene;
