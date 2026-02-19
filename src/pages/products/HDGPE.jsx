import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeading from '../../components/ui/SectionHeading';
import ProductTabs from '../../components/ui/ProductTabs';
import Button from '../../components/ui/Button';
import { Layers, ShieldCheck, Zap, Scale, ArrowUpRight, Hammer, Database, Recycle, BarChart3 } from 'lucide-react';
import ProductLightbox from '../../components/ui/ProductLightbox';
import ProductHero from '../../components/ui/ProductHero';
import { products } from '../../data/content';

// Import all infographic components
import {
  HDGPEROICalculator,
  HowItWorks,
  PerformancePilot,
  MarketOpportunityAnalyzer,
  TCOAnalysis,
  LongTermSavingsCalculator,
  EnvironmentalImpact,
  CertificationsQuality,
  TrialToDeployment,
  ImpactMap,
  ProductDataSheet,
  IndustrySolutions,
  ScienceExplained
} from '../../components/product-infographics';

// Import HDGPE-specific data
import {
  roiCalculatorConfig,
  howItWorksSteps,
  pilotProgramData,
  marketOpportunityData,
  tcoAnalysisData,
  longTermSavingsData,
  environmentalImpactData,
  certificationsData,
  trialToDeploymentData,
  impactMapData,
  dataSheetData,
  industrySolutionsData,
  scienceExplainedData
} from '../../data/hdgpeData';

const HDGPE = () => {
  // Tab Content Organization
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-24 mt-24">
          {/* Hero Section */}
          <ProductHero
            title="Lighter. Stronger. Infinitely better."
            subtitle="High-Density Graphene Polyethylene (HD-G-PE) redefines plastic performance. By integrating graphene at the molecular level, we achieve steel-like strength with the versatility of thermoplastics."
            category="Polymer Engineering"
            categoryColor="bg-blue-500"
            images={[
              '/images/HD-G-PE.png',
              '/images/hdgpe_lifecycle_lab_making.png',
              '/images/hdgpe_lifecycle_lab_testing.png',
              '/images/hdgpe_lifecycle_factory_extrusion.png',
              '/images/hdgpe_lifecycle_factory_molding.png',
              '/images/hdgpe_lifecycle_result.png'
            ]}
            buttons={[
              { text: 'Request Datasheet', link: '/contact', variant: 'primary' },
              { text: 'View Specs', link: '#specs', variant: 'secondary' }
            ]}
          />

          {/* Product & Stats Dashboard */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Product Box */}
            <div className="lg:col-span-1 h-full min-h-[300px]">
              <ProductLightbox
                images={[
                  '/images/HD-G-PE.png',
                  '/images/hdgpe-studio.png'
                ]}
                alt="HD-G-PE Studio View"
                className="h-full"
                imageFit="object-contain"
                innerClassName="bg-white p-4"
              />
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {[
                { label: 'Tensile Strength', value: '+40%', desc: 'vs Standard HDPE' },
                { label: 'Weight', value: '-20%', desc: 'Material Reduction' },
                { label: 'Durability', value: '2.5x', desc: 'Extended Lifespan' },
                { label: 'Barrier', value: '100x', desc: 'Gas Permeability' }
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-neutral-50 border border-neutral-200 rounded-xl hover:shadow-md transition-shadow flex flex-col justify-center">
                  <div className="text-4xl font-display font-medium text-neutral-900 mb-2">{stat.value}</div>
                  <div className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-1">{stat.label}</div>
                  <div className="text-xs text-neutral-500">{stat.desc}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Bento Grid */}
          <section className="py-8">
            <SectionHeading number="01" title="Material Reinvented" theme="light" subtitle="Surpassing the physical limits of traditional polymers." />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Large Item */}
              <div className="md:col-span-2 p-8 bg-neutral-900 text-white rounded-2xl relative overflow-hidden group min-h-[320px] flex flex-col justify-end">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Layers size={140} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-display font-medium mb-4 relative z-10">Molecular Reinforcement</h3>
                <p className="text-neutral-400 leading-relaxed max-w-lg relative z-10">
                  Graphene platelets act as "nano-rebar" within the polyethylene matrix. This prevents crack propagation and vastly improves load-bearing capacity without compromising flexibility.
                </p>
              </div>

              {/* Tall Item */}
              <div className="md:row-span-2 p-8 bg-neutral-50 border border-neutral-200 rounded-2xl flex flex-col">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium mb-3 text-neutral-900">Lightweighting</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Achieve the same structural integrity with 20-30% less material wall thickness. Critical for automotive and aerospace fuel efficiency.
                </p>
                <ul className="space-y-3 mt-auto">
                  <li className="flex items-center text-sm text-neutral-700">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    Reduced Shipping Costs
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    Lower CO2 Footprint
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    Material Savings
                  </li>
                </ul>
              </div>

              {/* Feature items */}
              <div className="p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-neutral-500" />
                  Corrosion Proof
                </h3>
                <p className="text-neutral-600 text-sm">
                  Impervious to salts, acids, and aggressive chemicals that degrade standard plastics and metals.
                </p>
              </div>
              <div className="p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2">
                  <Recycle className="w-5 h-5 text-neutral-500" />
                  100% Recyclable
                </h3>
                <p className="text-neutral-600 text-sm">
                  Fully compatible with existing HDPE recycling streams. Upcycles the quality of recycled feedstock.
                </p>
              </div>
            </div>
          </section>

          {/* Applications Grid */}
          <section className="py-8">
            <SectionHeading number="02" title="Industrial Applications" theme="light" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {['Gas Pipelines', 'Fuel Tanks', 'Geomembranes', 'Offshore Cables', 'Packaging', 'Ballistics'].map((item, i) => (
                <div key={i} className="p-6 border border-neutral-200 rounded-lg text-center hover:bg-neutral-50 transition-colors">
                  <div className="font-medium text-neutral-900">{item}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Impact Stats */}
          <section className="py-8">
            <div className="bg-neutral-900 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-display font-medium mb-4">Sustainability at Scale</h3>
                  <p className="text-neutral-400 leading-relaxed mb-8">
                    By reducing material usage and extending product lifecycles, HD-G-PE represents a massive shift towards sustainable industrial design.
                  </p>
                  <Button variant="secondary" theme="dark">View Sustainability Report</Button>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-display font-medium text-blue-400 mb-1">500k+</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wide">Tons Material Saved</div>
                  </div>
                  <div>
                    <div className="text-4xl font-display font-medium text-blue-400 mb-1">30%</div>
                    <div className="text-xs text-neutral-500 uppercase tracking-wide">Lower CO2 Emissions</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )
    },
    {
      id: 'benefits',
      label: 'Benefits & ROI',
      content: (
        <div className="space-y-16 mt-12">
          {/* Dashboard Header */}
          <section className="rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-8 md:p-12 overflow-hidden relative shadow-2xl border border-neutral-800">
            <div className="relative z-10 grid md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-800">
              <div className="md:pr-8">
                <h3 className="text-2xl font-display font-medium mb-2">The Economics of Longevity</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  HD-G-PE redefines infrastructure economics by enabling thinner walls without sacrificing strength, and extending asset lifecycles by decades.
                </p>
              </div>
              <div className="flex flex-col justify-center px-4">
                <div className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Material Savings</div>
                <div className="text-4xl font-display font-medium text-blue-400">20-30%</div>
                <div className="text-xs text-neutral-400 mt-1">Reduced wall thickness</div>
              </div>
              <div className="flex flex-col justify-center pl-4">
                <div className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Lifecycle Multiplier</div>
                <div className="text-4xl font-display font-medium text-white">2.5x</div>
                <div className="text-xs text-neutral-400 mt-1">Vs Standard HDPE</div>
              </div>
            </div>
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          </section>

          {/* ROI Calculator Wrapper */}
          <section className="border border-neutral-200 rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="p-6 border-b border-neutral-200 flex justify-between items-center bg-neutral-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Material Cost Calculator</h4>
                  <p className="text-xs text-neutral-500">Analyze input savings per metric ton</p>
                </div>
              </div>
            </div>
            <div className="p-0">
              <HDGPEROICalculator
                defaultInputs={roiCalculatorConfig.defaultInputs}
                secondaryInputs={roiCalculatorConfig.secondaryInputs}
                calculations={roiCalculatorConfig.calculations}
                theme="light"
              />
            </div>
          </section>

          {/* Lifecycle & TCO Grid */}
          <section className="space-y-8">
            {/* TCO Analysis */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <SectionHeading number="02" title="Lifecycle Cost Analysis" theme="light" />
              </div>
              <TCOAnalysis
                productName={tcoAnalysisData.productName}
                timeframe={tcoAnalysisData.timeframe}
                traditionalSolution={tcoAnalysisData.traditionalSolution}
                productSolution={tcoAnalysisData.productSolution}
                breakdown={tcoAnalysisData.breakdown}
                highlights={tcoAnalysisData.highlights}
                theme="light"
              />
            </div>

            {/* Long-Term Savings */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <SectionHeading number="03" title="Infrastructure Savings" theme="light" />
                <p className="text-sm text-neutral-500 mt-2">
                  For utilities and municipalities, doubled lifespan means halved replacement bond costs.
                </p>
              </div>
              <LongTermSavingsCalculator
                productName={longTermSavingsData.productName}
                savingsPerUnit={longTermSavingsData.savingsPerUnit}
                volumeOptions={longTermSavingsData.volumeOptions}
                theme="light"
              />
            </div>
          </section>

          {/* Environmental Ledger */}
          <section className="bg-neutral-900 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <SectionHeading number="04" title="Carbon Credit Ledger" theme="dark" className="mb-6" />
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Lighter products mean reduced transport emissions, while extended durability lowers the demand for virgin plastic production.
                </p>
                <Button variant="secondary" theme="dark" className="w-fit">View EPD Data</Button>
              </div>
              <div>
                <EnvironmentalImpact
                  productName={environmentalImpactData.productName}
                  impacts={environmentalImpactData.impacts}
                  carbonCredits={environmentalImpactData.carbonCredits}
                  theme="dark"
                />
              </div>
            </div>
          </section>
        </div>
      )
    },
    {
      id: 'howItWorks',
      label: 'How It Works',
      content: (
        <div className="space-y-24 mt-12">
          <section className="max-w-3xl">
            <h3 className="text-3xl font-display font-medium text-neutral-900 mb-4">Masterbatch Integration</h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Provided as a drop-in masterbatch pellet. Manufacturers can use existing extruders and injection molding equipment with zero capex modifications.
            </p>
          </section>

          {/* Process Flow */}
          <section>
            <div className="mb-12">
              <SectionHeading number="01" title="Manufacturing Process" theme="light" />
            </div>
            <HowItWorks steps={howItWorksSteps} title="HD-G-PE Production" theme="light" />
          </section>

          {/* Pilot Program */}
          <section className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 md:p-12">
            <div className="space-y-12">
              <div>
                <SectionHeading number="02" title="Validation Pilot" theme="light" className="mb-6" />
                <p className="text-neutral-600 mb-6 max-w-3xl">
                  Run a small batch with our technical team on-site. We will fine-tune the extruder heat/pressure profiles for optimal graphene dispersion.
                </p>
                <PerformancePilot
                  productName={pilotProgramData.productName}
                  pilotDetails={pilotProgramData.pilotDetails}
                  benefits={pilotProgramData.benefits}
                  pricing={pilotProgramData.pricing}
                  theme="light"
                />
              </div>

              <div className="pt-8 border-t border-neutral-200">
                <TrialToDeployment
                  productName={trialToDeploymentData.productName}
                  stages={trialToDeploymentData.stages}
                  theme="light"
                />
              </div>
            </div>
          </section>
        </div>
      )
    },
    {
      id: 'technical',
      label: 'Technical Specs',
      content: (
        <div className="space-y-24 mt-12">
          {/* Section Header */}
          <section className="max-w-3xl">
            <h3 className="text-3xl font-display font-medium text-neutral-900 mb-4">Engineering Data</h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Validated by third-party materials labs. Outperforms standard HDPE across all major mechanical and thermal metrics.
            </p>
          </section>

          {/* Metrics Grid */}
          <section id="specs">
            <SectionHeading number="01" title="Material Properties" theme="light" className="mb-12" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: 'Tensile Strength', value: '38', unit: 'MPa' },
                { label: 'Elongation', value: '800', unit: '%' },
                { label: 'Density', value: '0.96', unit: 'g/cm³' },
                { label: 'Melt Index', value: '0.5', unit: 'g/10m' },
                { label: 'Flex Modulus', value: '1.4', unit: 'GPa' }
              ].map((spec, i) => (
                <div key={i} className="p-6 bg-white border border-neutral-200 rounded-xl hover:border-neutral-400 transition-colors">
                  <div className="text-xs text-neutral-500 uppercase font-semibold mb-2">{spec.label}</div>
                  <div className="text-3xl font-display font-medium text-neutral-900">
                    {spec.value}<span className="text-sm text-neutral-400 ml-1">{spec.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications & Downloads */}
          {/* Certifications & Downloads */}
          <section className="space-y-24">
            <div>
              <SectionHeading number="03" title="Certifications" theme="light" className="mb-6" />
              <CertificationsQuality
                productName={certificationsData.productName}
                certifications={certificationsData.certifications}
                testingStandards={certificationsData.testingStandards}
                qualityMetrics={certificationsData.qualityMetrics}
                theme="light"
              />
            </div>
            <div>
              <SectionHeading number="04" title="Downloads" theme="light" className="mb-6" />
              <ProductDataSheet
                productName={dataSheetData.productName}
                specifications={dataSheetData.specifications}
                documents={dataSheetData.documents}
                theme="light"
              />
            </div>
          </section>
        </div>
      )
    },
    {
      id: 'deepDive',
      label: 'Deep Dive',
      content: (
        <div className="space-y-24 mt-12">
          {/* Market Opportunity */}
          <section>
            <MarketOpportunityAnalyzer
              productName={marketOpportunityData.productName}
              marketData={marketOpportunityData.marketData}
              industries={marketOpportunityData.industries}
              growthMetrics={marketOpportunityData.growthMetrics}
              theme="light"
            />
          </section>

          {/* Industry Solutions */}
          <section className="bg-neutral-50 p-8 md:p-12 rounded-2xl border border-neutral-200">
            <div className="mb-8">
              <SectionHeading number="02" title="Industry Applications" theme="light" />
            </div>
            <IndustrySolutions
              productName={industrySolutionsData.productName}
              industries={industrySolutionsData.industries}
              theme="light"
            />
          </section>

          {/* Science Explained */}
          <section>
            <ScienceExplained
              productName={scienceExplainedData.productName}
              sections={scienceExplainedData.sections}
              theme="light"
            />
          </section>

          {/* Impact Map */}
          <section className="bg-neutral-900 text-white p-8 md:p-12 rounded-2xl">
            <SectionHeading number="04" title="Global Impact" theme="dark" className="mb-8" />
            <ImpactMap
              productName={impactMapData.productName}
              nationalData={impactMapData.nationalData}
              internationalData={impactMapData.internationalData}
              stats={impactMapData.stats}
              theme="dark"
            />
          </section>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        category="Material Science"
        title="HD-G-PE"
        subtitle="High-Density Graphene Polyethylene. The next evolution in thermoplastic performance."
      />

      <ProductTabs tabs={tabs} defaultTab={0} />
    </div>
  );
};

export default HDGPE;
