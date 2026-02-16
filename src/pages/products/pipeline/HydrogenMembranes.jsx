import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Wind, Zap, Gauge, Filter, Droplets, Factory, Layers, Beaker, CheckCircle2, FlaskConical, Battery, Calculator } from 'lucide-react';
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

const HydrogenMembranes = () => {
  const processSteps = [
    {
      icon: <Activity className="w-6 h-6" />,
      title: "Synthesis",
      description: "Growing high-quality single-layer graphene on copper substrates."
    },
    {
      icon: <Filter className="w-6 h-6" />,
      title: "Perforation",
      description: "Creating precise nano-pores using focused ion beams."
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Transfer",
      description: "Transferring graphene onto a porous support structure."
    },
    {
      icon: <Gauge className="w-6 h-6" />,
      title: "Assembly",
      description: "Stacking membranes into high-throughput separation modules."
    }
  ];

  const timelineEvents = [
    {
      phase: "Phase 1: R&D",
      title: "Pore Size Control",
      description: "Achieving sub-nanometer precision to allow only H2 molecules to pass.",
      status: "completed",
      date: "Q3 2024"
    },
    {
      phase: "Phase 2: Pilot",
      title: "Small-Scale Reactor",
      description: "Testing separation efficiency in a continuous flow setup.",
      status: "current",
      date: "Q4 2025"
    },
    {
      phase: "Phase 3: Scale-Up",
      title: "Industrial Module",
      description: "Developing large-area membranes for commercial hydrogen plants.",
      status: "upcoming",
      date: "2027"
    }
  ];

  const applications = [
    {
      title: "Hydrogen Production",
      description: "Purifying hydrogen from natural gas reforming or electrolysis.",
      icon: Factory
    },
    {
      title: "Fuel Cells",
      description: "Ensuring ultra-pure hydrogen fuel for vehicle stacks.",
      icon: Zap
    },
    {
      title: "Carbon Capture",
      description: "Separating CO2 from industrial flue gases.",
      icon: Wind
    },
    {
      title: "Gas Processing",
      description: "Refining natural gas and biogas streams.",
      icon: Droplets
    }
  ];

  return (
    <div className="min-h-screen pt-36 bg-white">
      <BackNavigation to="/products/pipeline" label="Back to Innovation Pipeline" />
      <div className="container mx-auto px-6 py-8">

        <div className="mt-8 mb-24">
          <ProductHero
            title="Hydrogen Membranes"
            subtitle="High-selectivity graphene membranes enabling efficient hydrogen separation and production with reduced energy losses for clean energy infrastructure."
            category="Pilot Trials"
            categoryColor="bg-indigo-600"
            images={['/images/hydrogen_hero.png']}
            className="mb-24"
          />

          {/* 1. Introduction */}
          <section className="mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <SectionHeading
                  number="01"
                  title="The Challenge"
                  subtitle="Purity is the key to the hydrogen economy."
                />
                <p className="text-lg text-neutral-600 leading-relaxed mb-6">
                  Producing high-purity hydrogen is energy-intensive and expensive. Current separation methods like pressure swing adsorption are bulky and inefficient.
                </p>
                <p className="text-lg text-neutral-600 leading-relaxed">
                  Our graphene membranes offer a molecular sieve solution.
                  With precise atomic-scale pores, they allow small hydrogen molecules to pass through while blocking larger contaminants like CO2 and methane,
                  slashing energy costs by up to 50%.
                </p>
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl bg-white border border-neutral-100">
                <ImageCarousel
                  images={['/images/pipeline/studio/Gryogen.png', '/images/pipeline/studio/HydrogenMembranes.png', '/images/pipeline/studio/HydrogenMembranes-2.png']}
                  alt="Hydrogen Exchange Membrane"
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
              subtitle="Atomic precision filtering."
            />
            <ProcessFlow steps={processSteps} />
          </section>

          {/* 3. Key Features (Bento Grid) */}
          <section className="mb-32">
            <SectionHeading
              number="03"
              title="Core Performance"
              subtitle="Efficiency at scale."
            />
            <BentoGrid>
              <BentoItem colSpan={2} rowSpan={2} theme="dark" className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-black z-0"></div>
                <div className="relative z-10 flex flex-col justify-between h-full p-6">
                  <div>
                    <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400">
                      <Filter className="w-6 h-6" />
                    </div>
                    <h3 className="text-3xl font-light mb-4 text-white">Tunable Selectivity</h3>
                    <p className="text-neutral-300 text-lg">
                      By controlling pore size at the angstrom level, we can tune our membranes to separate
                      specific gases with unprecedented selectivity, far surpassing polymeric membranes.
                    </p>
                  </div>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-indigo-50 border-indigo-100">
                <div className="h-full flex flex-col justify-center">
                  <h4 className="text-5xl font-light text-indigo-600 mb-2">99.9%</h4>
                  <p className="font-medium text-neutral-900">Purity</p>
                  <p className="text-sm text-neutral-600 mt-2">Meeting fuel cell grade standards directly.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={1} className="bg-white">
                <div className="h-full flex flex-col">
                  <Zap className="w-10 h-10 text-emerald-500 mb-4" />
                  <h4 className="text-xl font-medium mb-2">Low Energy</h4>
                  <p className="text-sm text-neutral-600">Passive separation process requires no heat or phase change.</p>
                </div>
              </BentoItem>
              <BentoItem colSpan={3} className="bg-neutral-900 border-neutral-800">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  <StatCard value=">1000" label="Selectivity (H2/CO2)" theme="dark" valueClassName="text-white" labelClassName="text-indigo-400" />
                  <StatCard value="High" label="Permeance" theme="dark" valueClassName="text-white" labelClassName="text-indigo-400" />
                  <StatCard value="500°C" label="Thermal Stability" theme="dark" valueClassName="text-white" labelClassName="text-indigo-400" />
                  <StatCard value="Compact" label="Footprint" theme="dark" valueClassName="text-white" labelClassName="text-indigo-400" />
                </div>
              </BentoItem>
            </BentoGrid>
          </section>

          {/* 4. Product Gallery (New) */}
          <section className="mb-32">
            <SectionHeading
              number="04"
              title="Product Gallery"
              subtitle="Visualizing the future of hydrogen."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-[500px]">
              <div className="relative rounded-3xl overflow-hidden shadow-lg group">
                <div className="absolute inset-0 bg-neutral-100">
                  <ImageCarousel
                    images={['/images/pipeline/studio/Gryogen.png', '/images/pipeline/studio/HydrogenMembranes.png', '/images/pipeline/studio/HydrogenMembranes-2.png']}
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
                  <img src="/images/hydrogen_hero.png" alt="Contextual View" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
                </div>
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium border border-neutral-200">
                  Hydrogen Plant
                </div>
              </div>
            </div>
          </section>

          {/* 5. Seawater Electrolyzer - Experimental Validation */}
          <section className="mb-32">
            <SectionHeading
              number="04"
              title="Seawater Electrolyzer - Experimental Validation"
              subtitle="Direct hydrogen generation from raw seawater without filtration."
            />

            {/* Main Achievement Banner */}
            <div className="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-3xl p-10 md:p-12 text-white mb-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Beaker className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-mono uppercase tracking-widest text-indigo-100">
                    Verified by GC Analysis • August 2025
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">99.51% Hydrogen Purity</h3>
                <p className="text-xl text-indigo-100 max-w-3xl">
                  Achieved directly from unfiltered seawater electrolysis — no desalination or purification required
                </p>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="bg-white border-indigo-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">99.51%</div>
                  <div className="text-sm font-medium text-neutral-900 mb-1">H₂ Purity</div>
                  <div className="text-xs text-neutral-500">GC-FID Verified</div>
                </div>
              </Card>
              <Card className="bg-white border-indigo-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">&lt;0.5%</div>
                  <div className="text-sm font-medium text-neutral-900 mb-1">Impurities</div>
                  <div className="text-xs text-neutral-500">O₂/N₂/H₂O vapor</div>
                </div>
              </Card>
              <Card className="bg-white border-indigo-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">Zero</div>
                  <div className="text-sm font-medium text-neutral-900 mb-1">Filtration</div>
                  <div className="text-xs text-neutral-500">No pre-treatment</div>
                </div>
              </Card>
              <Card className="bg-white border-indigo-100">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600 mb-2">Multi-Cell</div>
                  <div className="text-sm font-medium text-neutral-900 mb-1">Stack Design</div>
                  <div className="text-xs text-neutral-500">Scalable system</div>
                </div>
              </Card>
            </div>

            {/* Two Column Layout: Setup + Analysis */}
            <div className="grid lg:grid-cols-2 gap-12 mb-12">
              {/* Experimental Setup */}
              <Card className="bg-neutral-50 border-neutral-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FlaskConical className="w-6 h-6 text-indigo-600" />
                  <h4 className="text-xl font-bold text-neutral-900">Experimental Setup</h4>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-semibold text-neutral-700 mb-1">System Type</div>
                    <div className="text-sm text-neutral-600">Multi-cell stacked seawater electrolyzer with parallel cell assembly, transparent acrylic plates, and stainless-steel bolts</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-700 mb-1">Feedstock</div>
                    <div className="text-sm text-neutral-600">Raw seawater (unfiltered, untreated)</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-700 mb-1">Power Source</div>
                    <div className="text-sm text-neutral-600">DC regulated power supply connected to electrode stack</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-700 mb-1">Gas Collection</div>
                    <div className="text-sm text-neutral-600">Blue pneumatic tubing for H₂ and O₂ segregation and collection</div>
                  </div>
                </div>
              </Card>

              {/* GC Analysis */}
              <Card className="bg-neutral-50 border-neutral-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Activity className="w-6 h-6 text-indigo-600" />
                  <h4 className="text-xl font-bold text-neutral-900">GC Analysis Results</h4>
                </div>
                <div className="space-y-4 mb-6">
                  <div>
                    <div className="text-sm font-semibold text-neutral-700 mb-1">Technique</div>
                    <div className="text-sm text-neutral-600">Gas Chromatography (GC) with Flame Ionization Detector (FID)</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-700 mb-1">Analysis Date</div>
                    <div className="text-sm text-neutral-600">25 August 2025</div>
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-neutral-700 mb-1">Sample Source</div>
                    <div className="text-sm text-neutral-600">Hydrogen gas directly from electrolyzer outlet (no post-purification)</div>
                  </div>
                </div>

                {/* GC Data Table */}
                <div className="bg-white border border-neutral-200 rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead className="bg-neutral-100 border-b border-neutral-200">
                      <tr>
                        <th className="py-2 px-4 text-left font-semibold text-neutral-700">Parameter</th>
                        <th className="py-2 px-4 text-left font-semibold text-neutral-700">Peak 1</th>
                        <th className="py-2 px-4 text-left font-semibold text-neutral-700">Peak 2</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      <tr>
                        <td className="py-2 px-4 text-neutral-600">Retention Time</td>
                        <td className="py-2 px-4 font-mono text-neutral-900">0.49 min</td>
                        <td className="py-2 px-4 font-mono text-neutral-900">1.42 min</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 text-neutral-600">Area (%)</td>
                        <td className="py-2 px-4 font-mono font-bold text-indigo-600">99.51%</td>
                        <td className="py-2 px-4 font-mono text-neutral-900">0.49%</td>
                      </tr>
                      <tr>
                        <td className="py-2 px-4 text-neutral-600">Interpretation</td>
                        <td className="py-2 px-4 text-neutral-900 font-semibold">Hydrogen (H₂)</td>
                        <td className="py-2 px-4 text-neutral-600">Minor impurity</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card>
            </div>

            {/* Key Takeaways */}
            <Card className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-neutral-700 p-10">
              <h4 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-emerald-400" />
                Key Takeaways
              </h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">High Purity Achievement</h5>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    99.51% H₂ purity achieved directly from seawater demonstrates excellent electrolyzer efficiency and selectivity
                  </p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-4">
                    <Droplets className="w-5 h-5 text-blue-400" />
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">No Filtration Required</h5>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Direct processing of raw seawater without desalination simplifies the system for scalable green hydrogen production
                  </p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center mb-4">
                    <Factory className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h5 className="text-lg font-bold text-white mb-2">Robust Performance</h5>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Effective gas segregation even with saline electrolyte proves electrode durability and system reliability
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* 5. Energy Generation from Hydrogen */}
          <section className="mb-32">
            <SectionHeading
              number="05"
              title="Energy Generation from Hydrogen"
              subtitle="Fuel cell efficiency and electrical output calculations."
            />

            {/* Quick Summary Banner */}
            <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl p-10 md:p-12 text-white mb-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                    <Battery className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-sm font-mono uppercase tracking-widest text-emerald-100">
                    Fuel Cell @ 60% Efficiency
                  </div>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-4">1 kg H₂ → 20-24 kWh</h3>
                <p className="text-xl text-emerald-100 max-w-3xl">
                  High energy density and clean conversion make hydrogen ideal for distributed power generation
                </p>
              </div>
            </div>

            {/* Production Requirements */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Droplets className="w-8 h-8 text-cyan-600" />
                  <div>
                    <div className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">Water Input</div>
                    <div className="text-3xl font-bold text-cyan-600">9-10 L</div>
                  </div>
                </div>
                <p className="text-sm text-neutral-700">
                  Water required to produce <strong>1 kg of hydrogen</strong> via electrolysis (approximately 9-10 kg/liters)
                </p>
              </Card>

              <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-amber-600" />
                  <div>
                    <div className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">Electricity Consumption</div>
                    <div className="text-3xl font-bold text-amber-600">~40 kWh</div>
                  </div>
                </div>
                <p className="text-sm text-neutral-700">
                  Electrical energy required to produce <strong>1 kg of hydrogen</strong> through water electrolysis
                </p>
              </Card>
            </div>

            {/* Energy Yield Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* LHV Basis */}
              <Card className="bg-white border-2 border-emerald-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Lower Heating Value</h4>
                    <div className="text-3xl font-bold text-emerald-600 mt-1">20.0 kWh/kg</div>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                    <span className="text-neutral-600">Chemical Energy (LHV)</span>
                    <span className="font-mono font-semibold text-neutral-900">120 MJ/kg</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                    <span className="text-neutral-600">Fuel Cell Efficiency</span>
                    <span className="font-mono font-semibold text-emerald-600">60%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                    <span className="text-neutral-600">Electrical Output</span>
                    <span className="font-mono font-semibold text-neutral-900">72.0 MJ</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-neutral-900 font-semibold">Delivered Energy</span>
                    <span className="font-mono font-bold text-2xl text-emerald-600">20.0 kWh</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                  <p className="text-xs text-emerald-800 font-medium">
                    <strong>Standard Industry Basis:</strong> LHV is typically used for fuel cell efficiency reporting in engineering practice.
                  </p>
                </div>
              </Card>

              {/* HHV Basis */}
              <Card className="bg-white border-2 border-blue-200 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Battery className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Higher Heating Value</h4>
                    <div className="text-3xl font-bold text-blue-600 mt-1">23.7 kWh/kg</div>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                    <span className="text-neutral-600">Chemical Energy (HHV)</span>
                    <span className="font-mono font-semibold text-neutral-900">142 MJ/kg</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                    <span className="text-neutral-600">Fuel Cell Efficiency</span>
                    <span className="font-mono font-semibold text-blue-600">60%</span>
                  </div>
                  <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                    <span className="text-neutral-600">Electrical Output</span>
                    <span className="font-mono font-semibold text-neutral-900">85.2 MJ</span>
                  </div>
                  <div className="flex justify-between items-center pt-2">
                    <span className="text-neutral-900 font-semibold">Delivered Energy</span>
                    <span className="font-mono font-bold text-2xl text-blue-600">23.7 kWh</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="text-xs text-blue-800 font-medium">
                    <strong>Alternative Basis:</strong> HHV includes water condensation energy, giving higher theoretical yield.
                  </p>
                </div>
              </Card>
            </div>

            {/* Calculation Steps */}
            <Card className="bg-neutral-50 border-neutral-200 p-10 mb-12">
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-6 h-6 text-indigo-600" />
                <h4 className="text-2xl font-bold text-neutral-900">Step-by-Step Calculation</h4>
              </div>

              <div className="space-y-6">
                <div className="bg-white border-2 border-neutral-200 rounded-xl p-6">
                  <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-3">Step 1: Energy Content per kg of Hydrogen</div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                      <span className="text-sm font-medium text-neutral-700">Lower Heating Value (LHV)</span>
                      <span className="font-mono font-bold text-emerald-600">120 MJ/kg</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm font-medium text-neutral-700">Higher Heating Value (HHV)</span>
                      <span className="font-mono font-bold text-blue-600">142 MJ/kg</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-neutral-200 rounded-xl p-6">
                  <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-3">Step 2: Electrical Energy Output (Chemical Energy × 60% Efficiency)</div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <div className="text-xs text-neutral-600 mb-2">LHV Calculation:</div>
                      <div className="font-mono text-sm text-neutral-800">120 MJ × 0.60 = <span className="font-bold text-emerald-600">72.0 MJ</span></div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-xs text-neutral-600 mb-2">HHV Calculation:</div>
                      <div className="font-mono text-sm text-neutral-800">142 MJ × 0.60 = <span className="font-bold text-blue-600">85.2 MJ</span></div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-neutral-200 rounded-xl p-6">
                  <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-3">Step 3: Convert to kWh (1 kWh = 3.6 MJ)</div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-emerald-50 rounded-lg">
                      <div className="text-xs text-neutral-600 mb-2">LHV Result:</div>
                      <div className="font-mono text-sm text-neutral-800">72.0 MJ ÷ 3.6 = <span className="font-bold text-2xl text-emerald-600">20.0 kWh</span></div>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <div className="text-xs text-neutral-600 mb-2">HHV Result:</div>
                      <div className="font-mono text-sm text-neutral-800">85.2 MJ ÷ 3.6 = <span className="font-bold text-2xl text-blue-600">23.7 kWh</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Important Notes */}
            <Card className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-neutral-700 p-10">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-yellow-400" />
                Important Notes
              </h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-3">Industry Standard</div>
                  <p className="text-neutral-300 leading-relaxed">
                    Engineers typically report fuel-cell efficiency relative to the <strong className="text-white">Lower Heating Value (LHV)</strong>,
                    making <strong className="text-emerald-400">20 kWh/kg</strong> the standard figure used in practice.
                  </p>
                </div>
                <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                  <div className="text-sm font-bold text-yellow-400 uppercase tracking-wider mb-3">Real-World Performance</div>
                  <p className="text-neutral-300 leading-relaxed">
                    Actual systems may experience additional energy losses due to auxiliary components
                    (air compressors, pumps, inverters), reducing delivered output slightly below the stack's rated value.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* 6. Roadmap */}
          <section className="mb-32 max-w-4xl mx-auto">
            <SectionHeading
              number="06"
              title="Development Roadmap"
              subtitle="Fueling the future."
            />
            <Timeline items={timelineEvents} />
          </section>

          {/* 7. Applications */}
          <section className="mb-32">
            <SectionHeading
              number="07"
              title="Applications"
              subtitle="Clean energy infrastructure."
            />
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {applications.map((app, i) => (
                <Card key={i} className="bg-neutral-50 h-full border-neutral-200">
                  <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 flex items-center justify-center mb-6 text-indigo-600">
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
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/20 to-black z-0"></div>
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-medium text-white mb-6">Accelerate the H2 economy.</h2>
              <p className="text-lg text-neutral-400 mb-10">
                Efficient separation is the missing link for affordable hydrogen. Join us in scaling this critical technology.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button variant="primary" size="lg" className="px-8">Partner with Us</Button>
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

export default HydrogenMembranes;
