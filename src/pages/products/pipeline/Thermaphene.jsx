import React from 'react';
import { Link } from 'react-router-dom';
import { Thermometer, Zap, Wind, Shirt, Activity, Battery, Flame } from 'lucide-react';
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

const Thermaphene = () => {
  const processSteps = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Dispersion",
      description: "Graphene is dispersed into a conductive ink or coating."
    },
    {
      icon: <Shirt className="w-6 h-6" />,
      title: "Integration",
      description: "The coating is printed or applied onto textiles or surfaces."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Activation",
      description: "Low-voltage current passes through the graphene network."
    },
    {
      icon: <Flame className="w-6 h-6" />,
      title: "Radiation",
      description: "Efficient far-infrared heat is radiated evenly."
    }
  ];

  const timelineEvents = [
    {
      phase: "Phase 1: Lab",
      title: "Ink Formulation",
      description: "Creating a stable, washable graphene ink for textiles.",
      status: "completed",
      date: "Q1 2024"
    },
    {
      phase: "Phase 2: Prototype",
      title: "Heated Jacket Prototype",
      description: "Demonstrating uniform heating with a 5V battery pack.",
      status: "current",
      date: "Q4 2025"
    },
    {
      phase: "Phase 3: Commercial",
      title: "Apparel Partnerships",
      description: "Collaborating with outdoor brands for winter 2026 collections.",
      status: "upcoming",
      date: "2026"
    }
  ];

  const applications = [
    {
      title: "Smart Apparel",
      description: "Lightweight heated jackets and gloves for extreme cold.",
      icon: Shirt
    },
    {
      title: "Automotive",
      description: "Efficient seat and steering wheel heating systems.",
      icon: Zap
    },
    {
      title: "Aerospace",
      description: "De-icing solutions for wings and sensors.",
      icon: Wind
    },
    {
      title: "Healthcare",
      description: "Therapeutic wearable heat pads for pain relief.",
      icon: Activity
    }
  ];

  return (
    <div className="min-h-screen pt-36 bg-white">
      <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />
      <div className="container mx-auto px-6 py-8">

        <div className="mt-8 mb-24">
          <ProductHero
            title="Thermaphene"
            subtitle="Ultra-thin graphene heating technology delivering lightweight, efficient, and flexible thermal regulation for wearables and industry."
            category="Prototype"
            categoryColor="bg-orange-500"
            images={['/images/thermaphene_hero.png']}
            className="mb-24"
          />

          {/* 1. Introduction */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  number="01"
                  title="The Challenge"
                  subtitle="Cold is inevitable. Discomfort shouldn't be."
                />
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Traditional heating solutions, whether in clothing or machinery, rely on bulky copper wires
                  that are heavy, prone to breakage, and create uneven "hot spots."
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Thermaphene replaces wires with a printable graphene coating.
                  It covers the entire surface area, providing uniform radiant heat that feels more natural and efficient.
                  It's washable, flexible, and virtually weightless.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-neutral-100">
                <ImageCarousel
                  images={['/images/pipeline/studio/Thermophene.png']}
                  alt="Thermaphene Heating Element"
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
              subtitle="Electrifying carbon at the atomic level."
            />
            <ProcessFlow steps={processSteps} />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Performance"
              subtitle="Warmth without weight."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-900 to-black z-0"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center mb-6 text-orange-400">
                      <Flame className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-light mb-4 text-white">Far-Infrared Heating</h3>
                    <p className="text-neutral-300 text-lg">
                      Unlike resistive wires that heat the air, Thermaphene emits far-infrared radiation
                      that penetrates and warms objects directly, mimicking the feeling of sunlight.
                    </p>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-orange-50 border-orange-100">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-5xl font-light text-orange-600 mb-2">99%</h4>
                  <p className="font-medium text-neutral-900">Efficiency</p>
                  <p className="text-sm text-neutral-600 mt-2">Almost zero energy loss in conversion.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white">
                <div className="h-full flex flex-col">
                  <Battery className="w-10 h-10 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-medium mb-2">Low Power</h4>
                  <p className="text-sm text-neutral-600">Runs effectively on standard 5V/12V battery packs.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-neutral-900 border-neutral-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatCard value="<1mm" label="Thickness" theme="dark" valueClassName="text-white" labelClassName="text-orange-500" />
                  <StatCard value="10s" label="Time to Heat" theme="dark" valueClassName="text-white" labelClassName="text-orange-500" />
                  <StatCard value="Yes" label="Machine Washable" theme="dark" valueClassName="text-white" labelClassName="text-orange-500" />
                  <StatCard value="Zero" label="Hot Spots" theme="dark" valueClassName="text-white" labelClassName="text-orange-500" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Product Gallery (New) */}
          <section className="mb-32">
            <SectionHeading
              number="04"
              title="Product Gallery"
              subtitle="Visualizing the future of thermal wear."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
              <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <div className="absolute inset-0 bg-neutral-100">
                  <ImageCarousel
                    images={['/images/pipeline/studio/Thermophene.png']}
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
                  <img src="/images/thermaphene_hero.png" alt="Contextual View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-neutral-200">
                  Thermal Imaging
                </div>
              </div>
            </div>
          </section>

          {/* 5. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="05"
              title="Development Roadmap"
              subtitle="Heating up the market."
            />
            <Timeline items={timelineEvents} />
          </section>

          {/* 5. Applications */}
          <section className="mb-32">
            <SectionHeading
              number="05"
              title="Applications"
              subtitle="Versatile thermal solutions."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <Card key={i} className="bg-neutral-50 h-full border-neutral-200">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-orange-600">
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
            <div className="absolute inset-0 bg-gradient-to-b from-orange-900/20 to-black z-0"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Feel the warmth.</h2>
              <p className="text-lg text-neutral-400 mb-10">
                Thermaphene is redefining thermal management. Partner with us to integrate this technology into your next product line.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="px-8">Get Started</Button>
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

export default Thermaphene;
