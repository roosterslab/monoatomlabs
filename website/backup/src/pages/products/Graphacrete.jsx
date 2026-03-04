import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/ui/PageHeader';
import SectionHeading from '../../components/ui/SectionHeading';
import ProductTabs from '../../components/ui/ProductTabs';
import Button from '../../components/ui/Button';
import { Check, Layers, BarChart3, Timer, HardHat, TrendingUp } from 'lucide-react';
import { products } from '../../data/content';

// Import all infographic components
import {
  ROICalculator,
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
  ScienceExplained,
  CompetitiveMatrix
} from '../../components/product-infographics';

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
        <div className="space-y-24 mt-12">
          {/* Hero Section */}
          <section className="relative overflow-hidden rounded-2xl bg-neutral-900 text-white">
            <div className="absolute inset-0">
              {products.graphacrete.image && (
                <img
                  src={products.graphacrete.image}
                  alt="Graphacrete Structure"
                  className="w-full h-full object-cover opacity-60"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-neutral-900/80 to-transparent"></div>
            </div>
            <div className="relative z-10 p-12 md:p-16 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-medium tracking-wider uppercase mb-6">
                <span className="w-2 h-2 rounded-full bg-green-400"></span>
                Commercial Ready
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-medium mb-6 leading-tight">
                Reinforcing the future of construction with graphene.
              </h2>
              <p className="text-lg text-neutral-300 leading-relaxed mb-8 max-w-2xl">
                Graphacrete is a next-generation concrete admixture that utilizes graphene nano-platelets to significantly enhance structural integrity while reducing cement consumption and carbon footprint.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button variant="primary" theme="dark">Request Technical Data</Button>
                </Link>
                <Link to="#impact">
                  <Button variant="secondary" theme="dark">View Cost Analysis</Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Key Stats Row */}
          <section className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: 'Compressive Strength', value: '+50%', desc: 'Increase vs Control' },
              { label: 'Permeability', value: '-45%', desc: 'Water Penetration' },
              { label: 'Cement Reduction', value: '20%', desc: 'Lower Carbon Footprint' },
              { label: 'Crack Resistance', value: 'High', desc: 'Micro-crack Control' }
            ].map((stat, i) => (
              <div key={i} className="p-8 bg-neutral-50 border border-neutral-200 rounded-xl hover:shadow-md transition-shadow">
                <div className="text-4xl font-display font-medium text-neutral-900 mb-2">{stat.value}</div>
                <div className="text-sm font-bold text-neutral-900 uppercase tracking-wide mb-1">{stat.label}</div>
                <div className="text-xs text-neutral-500">{stat.desc}</div>
              </div>
            ))}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center rounded-3xl bg-neutral-50 border border-neutral-200 p-8 md:p-12">
              <div>
                <SectionHeading number="02" title="The Economic Edge" theme="light" className="mb-6" />
                <p className="text-neutral-600 leading-relaxed mb-8">
                  Graphacrete delivers value beyond performance. By enabling the use of M30 mix designs to achieve M50 performance standards, it unlocks direct material cost savings per cubic meter.
                </p>

                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white rounded-lg border border-neutral-100">
                    <span className="text-neutral-500 font-medium">Standard M50 Concrete Cost</span>
                    <span className="text-neutral-900 font-bold">~₹6,500 / m³</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg border border-green-100 relative overflow-hidden">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"></div>
                    <span className="text-neutral-700 font-medium">With Graphacrete (Optimized)</span>
                    <span className="text-green-700 font-bold">~₹6,070 / m³</span>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-sm text-center">
                <div className="inline-block p-3 rounded-full bg-neutral-100 mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-lg text-neutral-500 font-medium uppercase tracking-wide mb-2">Net Savings</h3>
                <div className="text-5xl font-display font-medium text-neutral-900 mb-4">₹430<span className="text-xl text-neutral-400">/m³</span></div>
                <p className="text-sm text-neutral-500 max-w-xs mx-auto">
                  Based on standard market rates. Actual savings may vary by region and mix design optimization.
                </p>
                <div className="mt-8 pt-6 border-t border-neutral-100">
                  <Link to="/contact">
                    <Button variant="secondary" theme="light" className="w-full">Get a Quote</Button>
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
              <ROICalculator
                productName={roiCalculatorConfig.productName}
                defaultInputs={roiCalculatorConfig.defaultInputs}
                calculations={roiCalculatorConfig.calculations}
                impactMetrics={roiCalculatorConfig.impactMetrics}
                theme="light"
              />
            </div>
          </section>

          {/* Lifecycle & TCO Grid */}
          <section className="space-y-8">
            {/* TCO Analysis */}
            <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-6">
                <SectionHeading number="02" title="LCOE Analysis" theme="light" />
              </div>
              <TCOAnalysis
                productName={tcoAnalysisData.productName}
                timeframe={tcoAnalysisData.timeframe}
                traditionalSolution={tcoAnalysisData.traditionalSolution}
                productSolution={tcoAnalysisData.productSolution}
                breakdown={tcoAnalysisData.breakdown}
                theme="light"
              />
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
      )
    },
    {
      id: 'howItWorks',
      label: 'How It Works',
      content: (
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
      )
    },
    {
      id: 'technical',
      label: 'Technical Specs',
      content: (
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

          {/* Certifications & Downloads */}
          <section className="space-y-24">
            <div>
              <SectionHeading number="03" title="Quality & Standards" theme="light" className="mb-6" />
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

          {/* Competitive Advantage Matrix */}
          <CompetitiveMatrix
            productName={competitiveMatrixData.productName}
            comparisonData={competitiveMatrixData}
            theme="light"
          />
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
    <div className="bg-white min-h-screen pb-24">
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
