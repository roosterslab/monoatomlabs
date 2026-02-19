import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeading from '../../components/ui/SectionHeading';
import ProductTabs from '../../components/ui/ProductTabs';
import Button from '../../components/ui/Button';
import { ShieldCheck, Sparkles, TrendingDown, Clock, Check, Car, Droplets, Wallet, Layers, BarChart3 } from 'lucide-react';
import ProductLightbox from '../../components/ui/ProductLightbox';
import ProductHero from '../../components/ui/ProductHero';
import { products } from '../../data/content';

// Import all infographic components
import {
  CerapheneROICalculator,
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

// Import Ceraphene-specific data
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
} from '../../data/cerapheneData';

const FeatureRow = ({ icon: Icon, title, description }) => (
  <div className="flex items-start gap-5 p-5 border border-neutral-100 rounded-xl hover:border-neutral-300 transition-colors">
    <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center shrink-0">
      <Icon className="w-5 h-5 text-neutral-700" strokeWidth={1.5} />
    </div>
    <div>
      <h3 className="text-base font-medium text-neutral-900 mb-1">{title}</h3>
      <p className="text-sm text-neutral-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Ceraphene = () => {
  // Tab Content Organization
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <div className="space-y-24 mt-24">
          {/* Hero Section */}
          <ProductHero
            title="Diamond-hard protection. Graphene performance."
            subtitle="Ceraphene combines graphene-oxide nanotubes with ceramic compounds to create a 9H+ hardness shield that is lighter, stronger, and more hydrophobic than any competitor."
            category="Automotive & Marine"
            categoryColor="bg-blue-400"
            images={[
              '/images/ceraphene_lifecycle_lab_making.png',
              '/images/ceraphene_lifecycle_lab_testing.png',
              '/images/ceraphene_lifecycle_studio_application.png',
              '/images/ceraphene_lifecycle_studio_buffing.png',
              '/images/ceraphene_lifecycle_result.png'
            ]}
            buttons={[
              { text: 'Order Sample Kit', link: '/contact', variant: 'primary' },
              { text: 'View Specs', link: '#specs', variant: 'secondary' }
            ]}
          />

          {/* Product & Stats Dashboard */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Product Box */}
            <div className="lg:col-span-1 h-full min-h-[300px]">
              <ProductLightbox
                src="/images/ceraphene-studio.png"
                alt="Ceraphene Studio View"
                className="h-full"
                imageFit="object-contain"
                innerClassName="bg-white p-4"
              />
            </div>

            {/* Stats Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {[
                { label: 'Hardness', value: '9H+', desc: 'Scratch Resistance' },
                { label: 'Durability', value: '4+ Years', desc: 'Long-Lasting Bond' },
                { label: 'Cost Savings', value: '60%', desc: 'vs Premium Brands' },
                { label: 'Contact Angle', value: '115°', desc: 'superhydrophobic' }
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
            <SectionHeading number="01" title="Ultimate Protection" theme="light" subtitle="Engineered for professionals who demand the best." />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {/* Large Item */}
              <div className="md:col-span-2 p-8 bg-neutral-900 text-white rounded-2xl relative overflow-hidden group flex flex-col justify-end min-h-[300px]">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute right-0 top-0 p-8 transform rotate-12">
                    <ShieldCheck size={200} strokeWidth={0.5} />
                  </div>
                </div>
                <h3 className="text-2xl font-display font-medium mb-2 relative z-10">Self-Healing Barrier</h3>
                <p className="text-neutral-400 leading-relaxed max-w-lg relative z-10">
                  Minor scratches and swirl marks vanish under heat exposure. The graphene lattice absorbs thermal energy to reform the surface structure, maintaining a flawless mirror finish.
                </p>
              </div>

              {/* Tall Item */}
              <div className="md:row-span-2 p-8 bg-white border border-neutral-200 rounded-2xl flex flex-col">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 mb-6">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-medium mb-3 text-neutral-900">Extreme Hydrophobicity</h3>
                <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                  Water beads up and rolls off instantly, taking dirt and grime with it. This "Lotus Effect" significantly reduces wash frequency.
                </p>
                <div className="mt-auto p-4 bg-neutral-50 rounded-lg">
                  <div className="flex justify-between text-xs font-medium text-neutral-500 mb-1">
                    <span>Standard Ceramic</span>
                    <span>Ceraphene</span>
                  </div>
                  <div className="w-full h-2 bg-neutral-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-11/12"></div>
                  </div>
                  <div className="text-right text-xs font-bold text-blue-600 mt-1">115° Slide Angle</div>
                </div>
              </div>

              {/* Feature items */}
              <div className="p-8 bg-neutral-50 border border-neutral-200 rounded-2xl">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2">
                  <Wallet className="w-5 h-5 text-neutral-500" />
                  Cost Disruption
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  Direct-to-installer pricing cuts out the middleman markup common in the detailing industry.
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-green-600">₹5k</span>
                  <span className="text-sm text-neutral-400 line-through">₹15k (Others)</span>
                </div>
              </div>

              <div className="p-8 bg-white border border-neutral-200 rounded-2xl">
                <h3 className="text-lg font-bold text-neutral-900 mb-2 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-neutral-500" />
                  Easy Application
                </h3>
                <p className="text-neutral-600 text-sm">
                  Extended flash time allows for easier leveling and buffing, reducing installation errors even for less experienced technicians.
                </p>
              </div>
            </div>
          </section>

          {/* Applications Grid */}
          <section className="py-8">
            <SectionHeading number="02" title="Versatile Application" theme="light" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {['Exotic Cars', 'Marine Yachts', 'Private Jets', 'Industrial'].map((item, i) => (
                <div key={i} className="p-6 border border-neutral-200 rounded-lg text-center hover:bg-neutral-50 transition-colors">
                  <div className="font-medium text-neutral-900">{item}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Comparison Table */}
          <div className="mt-8 pt-12 border-t border-neutral-200">
            <h3 className="text-lg font-bold text-neutral-900 mb-8">The Graphene Advantage</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-neutral-200 bg-neutral-50">
                    <th className="p-4 text-neutral-500 font-medium">Feature</th>
                    <th className="p-4 text-neutral-900 font-bold bg-white border-x border-neutral-200">Ceraphene</th>
                    <th className="p-4 text-neutral-500 font-medium">Standard Ceramic</th>
                    <th className="p-4 text-neutral-500 font-medium">Wax / Sealant</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  <tr>
                    <td className="p-4 text-neutral-600 font-medium">Durability</td>
                    <td className="p-4 text-neutral-900 font-bold bg-neutral-50 border-x border-neutral-200">4+ Years</td>
                    <td className="p-4 text-neutral-500">2-3 Years</td>
                    <td className="p-4 text-neutral-500">3-6 Months</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-neutral-600 font-medium">Water Spotting</td>
                    <td className="p-4 text-neutral-900 font-bold bg-neutral-50 border-x border-neutral-200">Resistant</td>
                    <td className="p-4 text-neutral-500">Prone</td>
                    <td className="p-4 text-neutral-500">Vulnerable</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-neutral-600 font-medium">Heat Dissipation</td>
                    <td className="p-4 text-neutral-900 font-bold bg-neutral-50 border-x border-neutral-200">High</td>
                    <td className="p-4 text-neutral-500">Low</td>
                    <td className="p-4 text-neutral-500">None</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
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
                <h3 className="text-2xl font-display font-medium mb-2">Protection Economics</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Ceraphene delivers laboratory-verified 9H+ hardness at a disruption-level price point, redefining the cost-benefit analysis of vehicle protection.
                </p>
              </div>
              <div className="flex flex-col justify-center px-4">
                <div className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Coating Hardness</div>
                <div className="text-4xl font-display font-medium text-blue-400">9H+</div>
                <div className="text-xs text-neutral-400 mt-1">SGS Certified Resistance</div>
              </div>
              <div className="flex flex-col justify-center pl-4">
                <div className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Cost Advantage</div>
                <div className="text-4xl font-display font-medium text-white">60%</div>
                <div className="text-xs text-neutral-400 mt-1">Lower material cost vs competitors</div>
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
                  <h4 className="font-medium text-neutral-900">Value Calculator</h4>
                  <p className="text-xs text-neutral-500">Compare against standard market rates</p>
                </div>
              </div>
            </div>
            <div className="p-0">
              <CerapheneROICalculator
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
                <SectionHeading number="02" title="Maintenance Savings" theme="light" />
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
                <SectionHeading number="03" title="Resale Value" theme="light" />
                <p className="text-sm text-neutral-500 mt-2">
                  Vehicles with documented permanent ceramic protection command higher resale prices due to pristine paint condition.
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
                <SectionHeading number="04" title="Eco-Friendly Detailing" theme="dark" className="mb-6" />
                <p className="text-neutral-400 leading-relaxed mb-6">
                  Drastically reduce water usage and chemical runoff by eliminating the need for frequent washes and harsh degreasers.
                </p>
                <Button variant="secondary" theme="dark" className="w-fit">Start Your Journey</Button>
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
            <h3 className="text-3xl font-display font-medium text-neutral-900 mb-4">Molecular Bonding</h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Ceraphene permeates the clear coat's microscopic pores, locking in a permanent graphene-ceramic structure that cannot be washed away.
            </p>
          </section>

          {/* Process Flow */}
          <section>
            <div className="mb-12">
              <SectionHeading number="01" title="Installation Steps" theme="light" />
            </div>
            <HowItWorks steps={howItWorksSteps} title="Application Process" theme="light" />
          </section>

          {/* Pilot Program */}
          <section className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 md:p-12">
            <div className="space-y-12">
              <div>
                <SectionHeading number="02" title="Detailer Trial" theme="light" className="mb-6" />
                <p className="text-neutral-600 mb-6 max-w-3xl">
                  For professional shops: Verify the ease of application and gloss levels on a test panel or personal vehicle before switching your entire shop.
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
            <h3 className="text-3xl font-display font-medium text-neutral-900 mb-4">Lab Verified Performance</h3>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Tested internationally for hardness, alkali resistance, and hydrophobicity.
            </p>
          </section>

          {/* Metrics Grid */}
          <section id="specs">
            <SectionHeading number="01" title="Coating Properties" theme="light" className="mb-12" />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {[
                { label: 'Pencil Hardness', value: '9H+', unit: 'Cert.' },
                { label: 'Contact Angle', value: '>115', unit: 'Deg' },
                { label: 'Slide Angle', value: '<10', unit: 'Deg' },
                { label: 'Thickness', value: '3-4', unit: 'µm' },
                { label: 'Heat Resist', value: '700', unit: '°C' }
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

          {/* Global Impact - Dark Mode */}
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
        category="Automotive"
        title="Ceraphene"
        subtitle="Graphene-enhanced ceramic coating delivering 9H+ hardness and extreme durability at a fraction of the cost of premium competitors."
      />

      <ProductTabs tabs={tabs} defaultTab={0} />
    </div>
  );
};

export default Ceraphene;
