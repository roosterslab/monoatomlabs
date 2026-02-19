import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeading from '../../components/ui/SectionHeading';
import ProductTabs from '../../components/ui/ProductTabs';
import Button from '../../components/ui/Button';
import { Sun, Thermometer, Zap, Clock, Check, BarChart3, ShieldCheck, MousePointerClick } from 'lucide-react';
import { products } from '../../data/content';
import ProductLightbox from '../../components/ui/ProductLightbox';
import ProductHero from '../../components/ui/ProductHero';

// Import all infographic components
import {
  GraffisolROICalculator,
  GraffisolEnergyCalculator,
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

// Import Graffisol-specific data
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
} from '../../data/graffisolData';

const SpecItem = ({ label, value, subtext }) => (
  <div className="p-6 bg-white border border-neutral-200 shadow-sm rounded-xl">
    <div className="text-sm text-neutral-500 uppercase tracking-wide mb-2">{label}</div>
    <div className="text-2xl font-display font-medium text-neutral-900 mb-1">{value}</div>
    <div className="text-sm text-neutral-500">{subtext}</div>
  </div>
);

const Graffisol = () => {
  // Tab Content Organization
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-24 mt-24">
          {/* Hero Section */}
          <ProductHero
            title="Unlock the true potential of your solar assets."
            subtitle="Graffisol is a transparent graphene nanocoating that boosts energy output by up to 12% through anti-reflective properties, thermal regulation, and self-cleaning capabilities."
            category="Solar Optimization"
            categoryColor="bg-yellow-400 animate-pulse"
            images={[
              '/images/graffisol_lifecycle_lab_making.png',
              '/images/graffisol_lifecycle_lab_testing.png',
              '/images/graffisol_lifecycle_factory_coating.png',
              '/images/graffisol_lifecycle_site_cleaning.png',
              '/images/graffisol_lifecycle_site_result.png'
            ]}
            buttons={[
              { text: 'Request Datasheet', link: '/contact', variant: 'primary' },
              { text: 'View ROI Analysis', link: '#impact', variant: 'secondary' }
            ]}
          />

          {/* Product & Stats Dashboard */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Product Box */}
            {/* Product Box */}
            <div className="lg:col-span-1 h-full min-h-[300px]">
              <ProductLightbox
                src="/images/graffisol-02.png"
                alt="Graffisol Studio View"
                className="h-full"
              />
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {[
                { label: 'Energy Boost', value: '+12%', desc: 'Annual Yield Increase' },
                { label: 'Temp Reduction', value: '-6°C', desc: 'Panel Cooling Effect' },
                { label: 'Transmission', value: '99.9%', desc: 'Optical Clarity' },
                { label: 'Payback', value: '18mo', desc: 'Typical ROI Period' }
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
            <SectionHeading number="01" title="Triple-Action Performance" theme="light" subtitle="Targeting the three main causes of solar efficiency loss." />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Large Item */}
              <div className="md:col-span-2 p-8 bg-neutral-900 text-white rounded-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Sun size={120} strokeWidth={1} />
                </div>
                <h3 className="text-2xl font-display font-medium mb-4 relative z-10">Photon Management</h3>
                <p className="text-neutral-400 leading-relaxed max-w-md relative z-10">
                  Our coating modifies the refractive index of the glass surface, capturing off-angle light during morning and evening hours that would otherwise be reflected away.
                </p>
                <div className="mt-8 flex gap-2">
                  <span className="px-3 py-1 bg-white/10 rounded text-xs">Anti-Reflective</span>
                  <span className="px-3 py-1 bg-white/10 rounded text-xs">Low Angle Capture</span>
                </div>
              </div>

              {/* Tall Item */}
              <div className="md:row-span-2 p-8 bg-neutral-50 border border-neutral-200 rounded-2xl flex flex-col justify-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mb-6">
                  <Thermometer className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium mb-3 text-neutral-900">Thermal Regulation</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Solar panels lose efficiency as they heat up (-0.4% per °C). Graffisol's high thermal conductivity dissipates surface heat, keeping panels cooler and more efficient.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm text-neutral-700">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                    2-5% Efficiency Recovery
                  </li>
                  <li className="flex items-center text-sm text-neutral-700">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mr-3"></div>
                    Extended Panel Life
                  </li>
                </ul>
              </div>

              {/* Standard Items */}
              <div className="p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Self-Cleaning</h3>
                <p className="text-neutral-600 text-sm">
                  Superhydrophobic surface (160° contact angle) means rain washes away dust and bird droppings.
                </p>
              </div>
              <div className="p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors">
                <h3 className="text-lg font-bold text-neutral-900 mb-2">Durability</h3>
                <p className="text-neutral-600 text-sm">
                  10H hardness protects against sand abrasion, crucial for desert installations.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison / Cost Section */}
          <section id="impact" className="py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl bg-neutral-50 border border-neutral-200 p-8 md:p-12">
              <div>
                <SectionHeading number="02" title="Financial Impact" theme="light" className="mb-6" />
                <p className="text-neutral-600 leading-relaxed mb-8">
                  For utility-scale projects, even a 1% gain is significant. Graffisol consistently delivers double-digit improvements, slashing the Levelized Cost of Energy (LCOE).
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-neutral-100">
                    <span className="text-neutral-500 font-medium">Standard 100MW Plant Revenue</span>
                    <span className="text-neutral-900 font-bold">$5.2M / yr</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-100 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                    <span className="text-neutral-700 font-medium">With Graffisol (+10% Yield)</span>
                    <span className="text-green-700 font-bold">$5.72M / yr</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm text-center">
                <div className="inline-block p-3 rounded-full bg-neutral-100 mb-4">
                  <BarChart3 className="w-6 h-6 text-neutral-600" />
                </div>
                <h3 className="text-lg text-neutral-500 font-medium uppercase tracking-wide mb-2">ROI Timeline</h3>
                <div className="text-5xl font-display font-medium text-neutral-900 mb-4">&lt; 18<span className="text-xl text-neutral-400"> months</span></div>
                <p className="text-sm text-neutral-500 max-w-xs mx-auto">
                  Full payback achieved in under 2 years, with 20+ years of pure profit generation thereafter.
                </p>
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <Link to="/contact">
                    <Button variant="secondary" theme="light" className="w-full">Calculate Your Savings</Button>
                  </Link>
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
                <h3 className="text-2xl font-display font-medium mb-2">Solar Asset Optimization</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Graffisol transforms solar panels from passive collectors into optimized energy generators, preventing the 15-20% losses typical in deployed assets.
                </p>
              </div>
              <div className="flex flex-col justify-center px-4">
                <div className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Energy Yield</div>
                <div className="text-4xl font-display font-medium text-yellow-400">+10-12%</div>
                <div className="text-xs text-neutral-400 mt-1">Annual power generation</div>
              </div>
              <div className="flex flex-col justify-center pl-4">
                <div className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Payback Period</div>
                <div className="text-4xl font-display font-medium text-white">&lt; 18mo</div>
                <div className="text-xs text-neutral-400 mt-1">Rapid capital recovery</div>
              </div>
            </div>
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
          </section>

          {/* ROI Calculator Wrapper */}
          <section className="border border-neutral-200 rounded-2xl overflow-hidden shadow-sm bg-white">
            <div className="p-6 border-b border-neutral-200 flex justify-between items-center bg-neutral-50/50">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-neutral-900">Yield Calculator</h4>
                  <p className="text-xs text-neutral-500">Estimate your revenue uplift</p>
                </div>
              </div>
            </div>
            <div className="p-0">
              <GraffisolROICalculator
                defaultInputs={roiCalculatorConfig.defaultInputs}
                secondaryInputs={roiCalculatorConfig.secondaryInputs}
                calculations={roiCalculatorConfig.calculations}
                theme="light"
              />
            </div>
          </section>

          {/* Energy Breakdown Calculator */}
          <section>
            <div className="mb-6">
              <SectionHeading number="02" title="Energy Gain Breakdown" theme="light" />
              <p className="text-sm text-neutral-500 mt-2">
                Quantify how Graffisol recovers energy from three compounding sources: base output gain, soiling reduction, and thermal derating improvement.
              </p>
            </div>
            <GraffisolEnergyCalculator />
          </section>

          {/* Lifecycle & TCO Grid */}
          <section className="space-y-8">
            {/* TCO Analysis */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <SectionHeading number="03" title="LCOE Analysis" theme="light" />
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
                <SectionHeading number="04" title="Compound Savings" theme="light" />
                <p className="text-sm text-neutral-500 mt-2">
                  Cumulative savings from reduced cleaning, lower maintenance, and extended panel lifespan.
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
                <SectionHeading number="05" title="Carbon Credit Ledger" theme="dark" className="mb-6" />
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Increased clean energy generation directly translates to higher carbon offsets. Track your environmental contribution.
                </p>
                <Button variant="secondary" theme="dark" className="w-fit">View Sustainability Data</Button>
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
            <h3 className="text-3xl font-display font-medium text-neutral-900 mb-4">Automated Application</h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Applied via robotic sprayers or manual coating during O&M cycles, Graffisol cures instantly to form a permanent bond with the glass substrate.
            </p>
          </section>

          {/* Process Flow */}
          <section>
            <div className="mb-12">
              <SectionHeading number="01" title="Application Process" theme="light" />
            </div>
            <HowItWorks
              steps={howItWorksSteps}
              title="How Graffisol Works"
              theme="light"
            />
          </section>

          {/* Pilot Program */}
          <section className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 md:p-12">
            <div className="space-y-12">
              <div>
                <SectionHeading number="02" title="Pilot Program" theme="light" className="mb-6" />
                <p className="text-neutral-600 mb-6 max-w-3xl">
                  Test Graffisol on a single string or combiner box to verify the uplift before site-wide rollout.
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
          <section className="max-w-3xl">
            <h3 className="text-3xl font-display font-medium text-neutral-900 mb-4">Nanocoating Specifications</h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Optical-grade clarity meets industrial-grade durability. Our formulation is tested to IEC standards for harsh environments.
            </p>
          </section>

          {/* Material Properties Grid */}
          <section>
            <SectionHeading number="01" title="Optical & Physical Properties" theme="light" className="mb-12" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: 'Transmission', value: '>99%', unit: 'Visual' },
                { label: 'Contact Angle', value: '160', unit: 'Deg' },
                { label: 'Hardness', value: '10H', unit: 'Scale' },
                { label: 'Thickness', value: '2-5', unit: 'µm' },
                { label: 'UV Stability', value: '25', unit: 'Years' }
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

          {/* Performance Data - Dark Mode */}
          <section className="bg-neutral-900 text-white rounded-2xl p-8 md:p-12 overflow-hidden relative">
            <div className="relative z-10">
              <SectionHeading number="02" title="Validated Gains" theme="dark" subtitle="Real-world performance data from desert deployments." className="mb-12" />

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px] text-sm">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="p-4 text-neutral-500 font-medium tracking-wide">Metric</th>
                      <th className="p-4 text-yellow-400 font-bold bg-white/5 rounded-t-lg">Graffisol</th>
                      <th className="p-4 text-neutral-500 font-medium">Uncoated Panel</th>
                      <th className="p-4 text-neutral-500 font-medium">Standard Hydrophobic</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-neutral-800">
                    <tr>
                      <td className="p-4 font-medium">Daily Energy Yield</td>
                      <td className="p-4 font-bold text-white bg-white/5">+10-12%</td>
                      <td className="p-4 text-neutral-400">Baseline</td>
                      <td className="p-4 text-neutral-400">+2-3%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Soiling Loss (Month)</td>
                      <td className="p-4 font-bold text-white bg-white/5">&lt; 1%</td>
                      <td className="p-4 text-neutral-400">5-15%</td>
                      <td className="p-4 text-neutral-400">3-5%</td>
                    </tr>
                    <tr>
                      <td className="p-4 font-medium">Temp Co-efficient</td>
                      <td className="p-4 font-bold text-white bg-white/5">-0.1% / °C</td>
                      <td className="p-4 text-neutral-400">-0.4% / °C</td>
                      <td className="p-4 text-neutral-400">-0.3% / °C</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

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

          {/* Global Impact */}
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
        category="Solar Energy"
        title="Graffisol"
        subtitle="Next-generation graphene nanocoating that enhances photon absorption, facilitates thermal management, and provides self-cleaning properties for solar panels."
      />

      <ProductTabs tabs={tabs} defaultTab={0} />
    </div>
  );
};

export default Graffisol;
