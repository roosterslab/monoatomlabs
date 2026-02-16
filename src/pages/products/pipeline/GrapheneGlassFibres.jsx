import React from 'react';
import { Link } from 'react-router-dom';
import { Layers, Cuboid, Wind, Zap, Gauge, Anchor, Component, Shield, Thermometer, Sparkles, Droplets, Sun, Weight, Settings, Leaf, Plane, Car, HardHat, Building, Ship } from 'lucide-react';
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
    <div className="min-h-screen pt-36 bg-white">
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
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-neutral-100">
                <ImageCarousel
                  images={['/images/pipeline/studio/Glasephene.png', '/images/pipeline/studio/Glasephene-2.png']}
                  alt="Reinforced Fibre Spools"
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

          {/* 4. Product Gallery (New) */}
          <section className="mb-32">
            <SectionHeading
              number="04"
              title="Product Gallery"
              subtitle="Visualizing the future of composites."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
              <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <div className="absolute inset-0 bg-neutral-100">
                  <ImageCarousel
                    images={['/images/pipeline/studio/Glasephene.png', '/images/pipeline/studio/Glasephene-2.png']}
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
                  <img src="/images/glass_fibres_hero.png" alt="Contextual View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-neutral-200">
                  Industrial Application
                </div>
              </div>
            </div>
          </section>

          {/* 5. Benefits Overview */}
          <section className="mb-32">
            <SectionHeading
              number="04"
              title="Benefits Overview"
              subtitle="Comprehensive performance advantages of graphene-infused glass fibre."
            />

            {/* Main Benefits Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* 1. Enhanced Mechanical Strength */}
              <Card className="bg-gradient-to-br from-purple-50 to-white border-purple-100 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Enhanced Mechanical Strength</h3>
                    <div className="text-2xl font-bold text-purple-600 mb-3">30-50% Increase</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Up to 30–50% increase in tensile and flexural strength due to graphene's exceptional load transfer capability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Graphene acts as nano-reinforcing layer, bridging micro-cracks and preventing propagation under stress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-500 mt-0.5">•</span>
                    <span>Improved impact resistance and fracture toughness for high-performance composites</span>
                  </li>
                </ul>
              </Card>

              {/* 2. Improved Thermal Conductivity */}
              <Card className="bg-gradient-to-br from-orange-50 to-white border-orange-100 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-orange-100 border border-orange-200 flex items-center justify-center text-orange-600 shrink-0">
                    <Thermometer className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Improved Thermal Conductivity</h3>
                    <div className="text-2xl font-bold text-orange-600 mb-3">~5,000 W/m·K</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Graphene's superior thermal conductivity enhances heat dissipation across the fibre matrix</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Reduces risk of thermal deformation or delamination in high-temperature environments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-500 mt-0.5">•</span>
                    <span>Beneficial for aerospace, automotive, and wind turbine composite applications</span>
                  </li>
                </ul>
              </Card>

              {/* 3. Superior Electrical Conductivity */}
              <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-100 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 shrink-0">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Superior Electrical Conductivity</h3>
                    <div className="text-sm font-semibold text-blue-600 mb-3">Semi-Conductive Composite</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Converts insulating glass fibre into semi-conductive composite</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Enables static charge dissipation and lightning strike protection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Electromagnetic interference (EMI) shielding capability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Critical for defence, aerospace, and energy storage applications</span>
                  </li>
                </ul>
              </Card>

              {/* 4. Enhanced Chemical & Moisture Resistance */}
              <Card className="bg-gradient-to-br from-cyan-50 to-white border-cyan-100 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-cyan-100 border border-cyan-200 flex items-center justify-center text-cyan-600 shrink-0">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Chemical & Moisture Resistance</h3>
                    <div className="text-sm font-semibold text-cyan-600 mb-3">Barrier Effect</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-0.5">•</span>
                    <span>Graphene layers create barrier effect, minimizing water, oxygen, and chemical ingress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-0.5">•</span>
                    <span>Greatly improves corrosion resistance and hydrophobicity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-cyan-500 mt-0.5">•</span>
                    <span>Extended service life in marine and corrosive environments</span>
                  </li>
                </ul>
              </Card>

              {/* 5. UV and Oxidation Stability */}
              <Card className="bg-gradient-to-br from-yellow-50 to-white border-yellow-100 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-yellow-100 border border-yellow-200 flex items-center justify-center text-yellow-600 shrink-0">
                    <Sun className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">UV & Oxidation Stability</h3>
                    <div className="text-sm font-semibold text-yellow-600 mb-3">Carbon Lattice Protection</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-0.5">•</span>
                    <span>Graphene's carbon lattice provides UV absorption and oxidative stability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-0.5">•</span>
                    <span>Prevents polymer matrix degradation from UV exposure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-500 mt-0.5">•</span>
                    <span>Ensures colour retention and surface durability in outdoor/solar applications</span>
                  </li>
                </ul>
              </Card>

              {/* 6. Weight Reduction */}
              <Card className="bg-gradient-to-br from-emerald-50 to-white border-emerald-100 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                    <Weight className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Weight Reduction & Design Flexibility</h3>
                    <div className="text-sm font-semibold text-emerald-600 mb-3">Lighter, Stronger</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>Improved strength allows less glass fibre for same load-bearing performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>Enables lighter, thinner composites without compromising integrity</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-500 mt-0.5">•</span>
                    <span>Contributes to fuel efficiency and reduced CO₂ footprint in transportation</span>
                  </li>
                </ul>
              </Card>

              {/* 7. Process Compatibility */}
              <Card className="bg-gradient-to-br from-indigo-50 to-white border-indigo-100 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 border border-indigo-200 flex items-center justify-center text-indigo-600 shrink-0">
                    <Settings className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Process Compatibility</h3>
                    <div className="text-sm font-semibold text-indigo-600 mb-3">Drop-In Solution</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-0.5">•</span>
                    <span>Can be incorporated via graphene-coated fibres, modified resin matrices, or hybrid yarns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-0.5">•</span>
                    <span>Compatible with conventional pultrusion, filament winding, and lay-up processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 mt-0.5">•</span>
                    <span>No major equipment modifications required for integration</span>
                  </li>
                </ul>
              </Card>

              {/* 8. Sustainability */}
              <Card className="bg-gradient-to-br from-green-50 to-white border-green-100 p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-100 border border-green-200 flex items-center justify-center text-green-600 shrink-0">
                    <Leaf className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">Sustainability & Circular Value</h3>
                    <div className="text-sm font-semibold text-green-600 mb-3">Eco-Friendly</div>
                  </div>
                </div>
                <ul className="space-y-2 text-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Extended product life and reduced fibre volume = lower embodied carbon footprint</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Graphene coatings can be reclaimed during fibre recycling processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-500 mt-0.5">•</span>
                    <span>Improves circular material recovery and reduces waste</span>
                  </li>
                </ul>
              </Card>
            </div>

            {/* Key Application Sectors */}
            <div className="bg-neutral-900 rounded-3xl p-10 md:p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-8">Key Application Sectors</h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <Wind className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Wind Turbine Blades</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <Car className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Automotive Body Panels</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <Plane className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Aerospace Composites</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <HardHat className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Defence Armour & Helmets</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <Building className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Construction FRP Rebars</span>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <Ship className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Marine & Offshore Structures</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="05"
              title="Development Roadmap"
              subtitle="Strengthening industries."
            />
            <Timeline items={timelineEvents} />
          </section>

          {/* 6. Applications */}
          <section className="mb-32">
            <SectionHeading
              number="06"
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
