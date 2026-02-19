import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeading from '../../components/ui/SectionHeading';
import ProductTabs from '../../components/ui/ProductTabs';
import Button from '../../components/ui/Button';
import { Check, Layers, BarChart3, Timer, HardHat, TrendingUp } from 'lucide-react';
import ProductLightbox from '../../components/ui/ProductLightbox';
import ProductHero from '../../components/ui/ProductHero';
import { products } from '../../data/content';

// Lazy load infographic components (only loaded when tab is viewed)
const GraphacreteROICalculator = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.GraphacreteROICalculator })));
const HowItWorks = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.HowItWorks })));
const PerformancePilot = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.PerformancePilot })));
const MarketOpportunityAnalyzer = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.MarketOpportunityAnalyzer })));
const TCOAnalysis = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.TCOAnalysis })));
const LongTermSavingsCalculator = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.LongTermSavingsCalculator })));
const EnvironmentalImpact = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.EnvironmentalImpact })));
const CertificationsQuality = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.CertificationsQuality })));
const TrialToDeployment = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.TrialToDeployment })));
const ImpactMap = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.ImpactMap })));
const ProductDataSheet = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.ProductDataSheet })));
const IndustrySolutions = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.IndustrySolutions })));
const ScienceExplained = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.ScienceExplained })));
const CompetitiveMatrix = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.CompetitiveMatrix })));
const GraphacreteLabResults = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.GraphacreteLabResults })));
const GraphacreteCostBenefit = lazy(() => import('../../components/product-infographics').then(m => ({ default: m.GraphacreteCostBenefit })));

// Loading fallback for infographics
const InfographicLoader = () => (
  <div className="flex items-center justify-center py-20">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-8 w-8 border-4 border-neutral-200 border-t-neutral-600 mb-3"></div>
      <p className="text-neutral-500 text-sm">Loading content...</p>
    </div>
  </div>
);

// Import Graphacrete-specific data
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
  scienceExplainedData,
  competitiveMatrixData
} from '../../data/graphacreteData';

const SpecItem = ({ label, value, subtext }) => (
  <div className="p-6 bg-white border border-neutral-200 shadow-sm">
    <div className="text-sm text-neutral-500 uppercase tracking-wide mb-2">{label}</div>
    <div className="text-2xl font-display font-medium text-neutral-900 mb-1">{value}</div>
    <div className="text-sm text-neutral-500">{subtext}</div>
  </div>
);

const Graphacrete = () => {
  // Tab Content Organization
  const tabs = [
    {
      id: 'overview',
      label: 'Overview',
      content: (
        <Suspense fallback={<InfographicLoader />}>
          <div className="space-y-24 mt-24">
            {/* Hero Section */}
            <ProductHero
              title="Reinforcing the future of construction with graphene."
              subtitle="Graphacrete is a next-generation concrete admixture that utilizes graphene nano-platelets to significantly enhance structural integrity while reducing cement consumption and carbon footprint."
              category="Commercial Ready"
              categoryColor="bg-green-400"
              images={[
                '/images/graphacrete_lifecycle_lab_making.png',
                '/images/graphacrete_lifecycle_lab_testing.png',
                '/images/graphacrete_lifecycle_site_pouring.png',
                '/images/graphacrete_lifecycle_site_finishing.png',
                '/images/graphacrete_lifecycle_site_result.png'
              ]}
              buttons={[
                { text: 'Request Technical Data', link: '/contact', variant: 'primary' },
                { text: 'View Cost Analysis', link: '#impact', variant: 'secondary' }
              ]}
            />

            {/* Product & Stats Dashboard */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Product Box */}
              <div className="lg:col-span-1 h-full min-h-[300px]">
                <ProductLightbox
                  src="/images/graphacrete-studio.png"
                  alt="Graphacrete Studio View"
                  className="h-full"
                  imageFit="object-contain"
                  innerClassName="bg-white p-4"
                />
              </div>

              {/* Stats Grid */}
              <div className="lg:col-span-2 grid grid-cols-2 gap-4">
                {[
                  { label: 'M-20 Compressive Strength', value: '29 MPa', desc: 'Actual 28-day · NABL certified' },
                  { label: 'M-30 ACT Equivalent', value: '49.5 MPa', desc: '65% above M-30 min · NABL certified' },
                  { label: 'Cement Saved (M-20)', value: '10.8%', desc: '40 kg/m³ less vs control mix' },
                  { label: 'W/C Ratio (M-30)', value: '0.37', desc: 'Denser microstructure · 220 mm slump' }
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
              <SectionHeading number="01" title="Engineered Performance" theme="light" subtitle="Why Graphacrete is the superior choice for modern infrastructure." />

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                {/* Large Item */}
                <div className="md:col-span-2 p-8 bg-neutral-900 text-white rounded-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Layers size={120} strokeWidth={1} />
                  </div>
                  <h3 className="text-2xl font-display font-medium mb-4 relative z-10">Structural Integrity</h3>
                  <p className="text-neutral-400 leading-relaxed max-w-md relative z-10">
                    Graphacrete creates a denser micro-structure within the concrete matrix, bridging micro-cracks before they propagate. This results in superior load-bearing capacity and fatigue resistance.
                  </p>
                  <div className="mt-8 flex gap-2">
                    <span className="px-3 py-1 bg-white/10 rounded text-xs">High Flexural Strength</span>
                    <span className="px-3 py-1 bg-white/10 rounded text-xs">Reduced Creep</span>
                  </div>
                </div>

                {/* Tall Item */}
                <div className="md:row-span-2 p-8 bg-neutral-50 border border-neutral-200 rounded-2xl flex flex-col justify-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mb-6">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-medium mb-3 text-neutral-900">Sustainability</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-6">
                    By enhancing the efficiency of cement hydration, Graphacrete allows for a significant reduction in cement usage—the primary driver of concrete's carbon footprint.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center text-sm text-neutral-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      Lower CO₂ Emissions
                    </li>
                    <li className="flex items-center text-sm text-neutral-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      LEED Credit Points
                    </li>
                    <li className="flex items-center text-sm text-neutral-700">
                      <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></div>
                      Green Building Certified
                    </li>
                  </ul>
                </div>

                {/* Standard Items */}
                <div className="p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Durability</h3>
                  <p className="text-neutral-600 text-sm">
                    45% lower water permeability protects against chloride ingress and freeze-thaw cycles.
                  </p>
                </div>
                <div className="p-8 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-400 transition-colors">
                  <h3 className="text-lg font-bold text-neutral-900 mb-2">Workability</h3>
                  <p className="text-neutral-600 text-sm">
                    Maintains excellent flow and pumpability without segregation, even at reduced water ratios.
                  </p>
                </div>
              </div>
            </section>

            {/* Comparison / Cost Section */}
            <section id="impact" className="py-8">
              <SectionHeading number="02" title="The Economic Edge" theme="light" className="mb-8" />
              <p className="text-neutral-600 leading-relaxed mb-8 max-w-2xl">
                Graphacrete delivers value beyond performance. NABL-certified M-20 tests show <strong>40 kg/m³ cement saved</strong> per cubic metre while achieving higher actual 28-day strength (29 MPa vs 25 MPa control). M-30 tests show the admixture pushing equivalent 28-day strength to 49.5 MPa — enabling significant grade upgrades.
              </p>
              {/* Key savings stat strip — grounded in NABL test data */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { label: 'Cement Saved (M-20)', value: '40 kg/m³', sub: '331 vs 371 kg/m³ · NABL BNR-1127 vs BNR-1140' },
                  { label: 'Strength Advantage (M-20)', value: '+16%', sub: '29 MPa actual vs 25 MPa est. (control)' },
                  { label: 'M-30 ACT Strength', value: '49.5 MPa', sub: '65% above M-30 min · NABL BNR-1101' }
                ].map((s, i) => (
                  <div key={i} className="p-6 bg-neutral-50 border border-neutral-200 rounded-xl">
                    <div className="text-xs text-neutral-500 uppercase tracking-wide mb-2">{s.label}</div>
                    <div className="text-3xl font-display font-medium text-neutral-900 mb-1">{s.value}</div>
                    <div className="text-xs text-neutral-500">{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-center">
                <Link to="/contact">
                  <Button variant="secondary" theme="light">Get a Custom Quote</Button>
                </Link>
              </div>
            </section>
          </div>
        </Suspense>
      )
    },
    {
      id: 'benefits',
      label: 'Benefits & ROI',
      content: (
        <Suspense fallback={<InfographicLoader />}>
          <div className="space-y-16 mt-12">
            {/* Dashboard Header */}
            <section className="rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-8 md:p-12 overflow-hidden relative shadow-2xl border border-neutral-800">
              <div className="relative z-10 grid md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-800">
                <div className="md:pr-8">
                  <h3 className="text-2xl font-display font-medium mb-2">Economic Impact</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Graphacrete delivers immediate material savings while extending asset lifecycles, resulting in a significantly lower Total Cost of Ownership.
                  </p>
                </div>
                <div className="flex flex-col justify-center px-4">
                  <div className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Cement Reduction</div>
                  <div className="text-4xl font-display font-medium text-green-400">20-30%</div>
                  <div className="text-xs text-neutral-400 mt-1">Direct material cost savings</div>
                </div>
                <div className="flex flex-col justify-center pl-4">
                  <div className="text-sm text-neutral-500 uppercase tracking-wider mb-1">Lifecycle Value</div>
                  <div className="text-4xl font-display font-medium text-white">2.5x</div>
                  <div className="text-xs text-neutral-400 mt-1">Extended service life</div>
                </div>
              </div>
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            </section>

            {/* ROI Calculator Wrapper */}
            <section className="border border-neutral-200 rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="mb-0">
                <SectionHeading number="01" title="Cost & ROI Calculator" theme="light" className="px-6 pt-6" />
              </div>
              <div className="p-6 border-b border-neutral-200 flex justify-between items-center bg-neutral-50/50">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center text-white">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-900">Interactive Yield Model</h4>
                    <p className="text-xs text-neutral-500">Calculate your project-specific savings</p>
                  </div>
                </div>
              </div>
              <div className="p-0">
                <Suspense fallback={<InfographicLoader />}>
                  <GraphacreteROICalculator
                    productName={roiCalculatorConfig.productName}
                    defaultInputs={roiCalculatorConfig.defaultInputs}
                    secondaryInputs={roiCalculatorConfig.secondaryInputs}
                    calculations={roiCalculatorConfig.calculations}
                    impactMetrics={roiCalculatorConfig.impactMetrics}
                    theme="light"
                  />
                </Suspense>
              </div>
            </section>

            {/* Cost Benefit Widget */}
            <section>
              <div className="mb-6">
                <SectionHeading number="02" title="Per-m³ Cost Breakdown" theme="light" />
                <p className="text-sm text-neutral-500 mt-2">
                  NABL-certified: M30 + Graphacrete achieves M50 compressive strength at a net ₹430/m³ saving.
                </p>
              </div>
              <Suspense fallback={<InfographicLoader />}>
                <GraphacreteCostBenefit theme="light" />
              </Suspense>
            </section>

            {/* Lifecycle & TCO Grid */}
            <section className="space-y-8">
              {/* TCO Analysis */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <SectionHeading number="03" title="LCOE Analysis" theme="light" />
                </div>
                <Suspense fallback={<InfographicLoader />}>
                  <TCOAnalysis
                    productName={tcoAnalysisData.productName}
                    timeframe={tcoAnalysisData.timeframe}
                    traditionalSolution={tcoAnalysisData.traditionalSolution}
                    productSolution={tcoAnalysisData.productSolution}
                    breakdown={tcoAnalysisData.breakdown}
                    highlights={tcoAnalysisData.highlights}
                    theme="light"
                  />
                </Suspense>
              </div>

              {/* Long-Term Savings */}
              <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-6">
                  <SectionHeading number="03" title="Compound Savings" theme="light" />
                  <p className="text-sm text-neutral-500 mt-2">
                    Cumulative savings over the asset lifespan excluding initial construction gains.
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
              <div className="relative z-10 space-y-12">
                <div className="max-w-3xl">
                  <SectionHeading number="04" title="Carbon Credit Ledger" theme="dark" className="mb-6" />
                  <p className="text-neutral-400 leading-relaxed mb-6">
                    Every ton of Graphacrete poured generates verifiable carbon credits through cement reduction and extended durability.
                  </p>
                  <Button variant="secondary" theme="dark" className="w-fit">Download EPD Report</Button>
                </div>
                <div className="w-full">
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
        </Suspense>
      )
    },
    {
      id: 'howItWorks',
      label: 'How It Works',
      content: (
        <Suspense fallback={<InfographicLoader />}>
          <div className="space-y-16 mt-12">
            {/* Deployment Blueprint Header */}
            <section className="rounded-3xl bg-gradient-to-br from-neutral-900 to-neutral-950 text-white p-8 md:p-12 overflow-hidden relative shadow-2xl border border-neutral-800">
              <div className="relative z-10 grid md:grid-cols-3 gap-8 md:divide-x md:divide-neutral-800">
                <div className="md:pr-8">
                  <h3 className="text-2xl font-display font-medium mb-2">Construction Integrated</h3>
                  <p className="text-neutral-400 text-sm leading-relaxed">
                    Graphacrete integrates seamlessly into standard batching protocols. No specialized equipment, just superior performance delivered on-site.
                  </p>
                </div>
                <div className="flex flex-col justify-center px-4">
                  <div className="flex items-center gap-2 mb-1">
                    <Timer className="w-4 h-4 text-neutral-500" />
                    <div className="text-sm text-neutral-500 uppercase tracking-wider">Implementation</div>
                  </div>
                  <div className="text-3xl font-display font-medium text-white">&lt; 2 Weeks</div>
                  <div className="text-xs text-neutral-400 mt-1">From trial to full pour</div>
                </div>
                <div className="flex flex-col justify-center pl-4">
                  <div className="flex items-center gap-2 mb-1">
                    <HardHat className="w-4 h-4 text-neutral-500" />
                    <div className="text-sm text-neutral-500 uppercase tracking-wider">Site Support</div>
                  </div>
                  <div className="text-3xl font-display font-medium text-blue-400">Full-Service</div>
                  <div className="text-xs text-neutral-400 mt-1">On-site technical team</div>
                </div>
              </div>
              {/* Decorative Background */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
            </section>

            {/* Process Flow Card */}
            <section className="bg-white border border-neutral-200 rounded-3xl overflow-hidden shadow-sm">
              <div className="p-8 border-b border-neutral-100">
                <SectionHeading number="01" title="Implementation Process" theme="light" />
              </div>
              <div className="p-0">
                <HowItWorks
                  steps={howItWorksSteps}
                  title="Phase-by-Phase Rollout"
                  theme="light"
                />
              </div>
            </section>

            {/* Pilot Program - Premium Dark Card */}
            <section className="bg-neutral-900 rounded-3xl border border-neutral-800 overflow-hidden shadow-2xl text-white relative">
              <div className="absolute inset-0 bg-blue-900/10 pointer-events-none"></div>
              <div className="relative z-10 p-8 md:p-12">
                <div className="md:w-2/3 mb-12">
                  <SectionHeading number="02" title="Performance Pilot" theme="dark" className="mb-4" />
                  <p className="text-neutral-400">
                    Validate Graphacrete's performance in your specific mix design before full-scale deployment. Our technical team guides you through every step of the 30-day program.
                  </p>
                </div>

                <PerformancePilot
                  productName={pilotProgramData.productName}
                  pilotDetails={pilotProgramData.pilotDetails}
                  benefits={pilotProgramData.benefits}
                  pricing={pilotProgramData.pricing}
                  theme="dark"
                />
              </div>
            </section>

            {/* Trial To Deployment */}
            <section className="bg-white border border-neutral-200 rounded-3xl p-8 md:p-12 shadow-sm">
              <div className="mb-8">
                <SectionHeading number="03" title="Scale Up Roadmap" theme="light" />
              </div>
              <TrialToDeployment
                productName={trialToDeploymentData.productName}
                stages={trialToDeploymentData.stages}
                theme="light"
              />
            </section>
          </div>
        </Suspense>
      )
    },
    {
      id: 'technical',
      label: 'Technical Specs',
      content: (
        <Suspense fallback={<InfographicLoader />}>
          <div className="space-y-24 mt-12">
            <section className="max-w-3xl">
              <h3 className="text-3xl font-display font-medium text-neutral-900 mb-4">Material Specifications</h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                Engineered at the atomic level, our graphene nano-platelets offer consistent, verified properties ensuring reliable performance in every batch.
              </p>
            </section>

            {/* Material Properties Grid - Replaces Table */}
            <section>
              <SectionHeading number="01" title="Physical Properties" theme="light" subtitle="High-purity graphene specifications." className="mb-12" />

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {[
                  { label: 'Purity', value: '>99%', unit: 'Carbon' },
                  { label: 'Thickness', value: '5-10', unit: 'nm' },
                  { label: 'Lateral Size', value: '~20', unit: 'µm' },
                  { label: 'Surface Area', value: '200', unit: 'm²/g' },
                  { label: 'Bulk Density', value: '0.12', unit: 'g/cm³' }
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

            {/* Performance Data */}
            <section className="bg-neutral-900 text-white rounded-2xl p-8 md:p-12 overflow-hidden relative">
              <div className="relative z-10">
                <SectionHeading number="02" title="Performance Benchmarks" theme="dark" subtitle="Validated concrete enhancement metrics." className="mb-12" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                  <SpecItem label="Dosage" value="0.05%" subtext="Ultra-low addition" />
                  <SpecItem label="Strength Gain" value="+50%" subtext="Compressive" />
                  <SpecItem label="Permeability" value="-45%" subtext="Water reduction" />
                  <SpecItem label="Cement Saving" value="20%" subtext="Target reduction" />
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse min-w-[600px] text-sm">
                    <thead>
                      <tr className="border-b border-neutral-800">
                        <th className="p-4 text-neutral-500 font-medium tracking-wide">Metric</th>
                        <th className="p-4 text-green-400 font-bold bg-white/5 rounded-t-lg">Graphacrete</th>
                        <th className="p-4 text-neutral-500 font-medium">Standard Admixture</th>
                        <th className="p-4 text-neutral-500 font-medium">Competitor Graphene</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-800">
                      <tr>
                        <td className="p-4 font-medium">Compressive Strength</td>
                        <td className="p-4 font-bold text-white bg-white/5">40–50%</td>
                        <td className="p-4 text-neutral-400">5–15%</td>
                        <td className="p-4 text-neutral-400">10–25%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Water Resistance</td>
                        <td className="p-4 font-bold text-white bg-white/5">30–45%</td>
                        <td className="p-4 text-neutral-400">&lt;10%</td>
                        <td className="p-4 text-neutral-400">20–30%</td>
                      </tr>
                      <tr>
                        <td className="p-4 font-medium">Dosage</td>
                        <td className="p-4 font-bold text-white bg-white/5">0.05–0.10%</td>
                        <td className="p-4 text-neutral-400">0.2–1.0%</td>
                        <td className="p-4 text-neutral-400">0.2–0.5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* NABL Lab Test Results — real data from Global Lab, Bhubaneswar */}
            <section>
              <SectionHeading number="03" title="NABL Lab Test Results" theme="light" subtitle="Real-world concrete mix design and compressive strength data from accredited third-party testing." className="mb-8" />
              <Suspense fallback={<InfographicLoader />}>
                <GraphacreteLabResults theme="light" />
              </Suspense>
            </section>

            {/* Certifications & Downloads */}
            <section className="space-y-24">
              <div>
                <SectionHeading number="04" title="Quality & Standards" theme="light" className="mb-6" />
                <CertificationsQuality
                  productName={certificationsData.productName}
                  certifications={certificationsData.certifications}
                  testingStandards={certificationsData.testingStandards}
                  qualityMetrics={certificationsData.qualityMetrics}
                  theme="light"
                />
              </div>
              <div>
                <SectionHeading number="05" title="Downloads" theme="light" className="mb-6" />
                <ProductDataSheet
                  productName={dataSheetData.productName}
                  specifications={dataSheetData.specifications}
                  documents={dataSheetData.documents}
                  theme="light"
                />
              </div>
            </section>

            {/* Competitive Advantage Matrix */}
            <CompetitiveMatrix
              productName={competitiveMatrixData.productName}
              comparisonData={competitiveMatrixData}
              theme="light"
            />
          </div>
        </Suspense>
      )
    },
    {
      id: 'deepDive',
      label: 'Deep Dive',
      content: (
        <Suspense fallback={<InfographicLoader />}>
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
        </Suspense>
      )
    }
  ];

  return (
    <div className="min-h-screen">
      <PageHeader
        category="Construction"
        title="Graphacrete"
        subtitle="A high-performance graphene nano-platelet additive that transforms standard concrete grades into superior, high-strength materials with reduced cement usage."
      />

      <ProductTabs tabs={tabs} defaultTab={0} />
    </div>
  );
};

export default Graphacrete;
