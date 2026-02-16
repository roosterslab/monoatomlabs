import React from 'react';
import ProductDetailTemplate from '../../../components/templates/ProductDetailTemplate';
import { pipelineProducts } from '../../../data/pipelineProducts';
import SectionHeading from '../../../components/ui/SectionHeading';
import Card from '../../../components/ui/Card';
import { Beaker, Activity, FlaskConical, CheckCircle2, Zap, Droplets, Factory, Battery, Calculator } from 'lucide-react';

const HydrogenMembranes = () => {
  const customSections = (
    <>
      {/* Seawater Electrolyzer - Experimental Validation */}
      <section className="mb-32">
        <SectionHeading
          number="04"
          title="Seawater Electrolyzer - Experimental Validation"
          subtitle="Direct hydrogen generation from raw seawater without filtration."
        />

        {/* Main Achievement Banner */}
        <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-10 md:p-12 text-white mb-12 relative overflow-hidden shadow-2xl border border-neutral-700">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-neutral-700/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Beaker className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-mono uppercase tracking-widest text-neutral-300">
                Verified by GC Analysis • August 2025
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-semibold mb-4 tracking-tight">99.51% Hydrogen Purity</h3>
            <p className="text-xl text-neutral-300 max-w-3xl font-light">
              Achieved directly from unfiltered seawater electrolysis — no desalination or purification required
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-lg transition-all duration-500">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-neutral-800 mb-2">99.51%</div>
              <div className="text-sm font-semibold text-neutral-900 mb-1">H₂ Purity</div>
              <div className="text-xs text-neutral-500">GC-FID Verified</div>
            </div>
          </Card>
          <Card className="bg-white border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-lg transition-all duration-500">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-neutral-800 mb-2">&lt;0.5%</div>
              <div className="text-sm font-semibold text-neutral-900 mb-1">Impurities</div>
              <div className="text-xs text-neutral-500">O₂/N₂/H₂O vapor</div>
            </div>
          </Card>
          <Card className="bg-white border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-lg transition-all duration-500">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-neutral-800 mb-2">Zero</div>
              <div className="text-sm font-semibold text-neutral-900 mb-1">Filtration</div>
              <div className="text-xs text-neutral-500">No pre-treatment</div>
            </div>
          </Card>
          <Card className="bg-white border-neutral-200 hover:border-neutral-300 shadow-sm hover:shadow-lg transition-all duration-500">
            <div className="text-center">
              <div className="text-4xl font-display font-bold text-neutral-800 mb-2">Multi-Cell</div>
              <div className="text-sm font-semibold text-neutral-900 mb-1">Stack Design</div>
              <div className="text-xs text-neutral-500">Scalable system</div>
            </div>
          </Card>
        </div>

        {/* Two Column Layout: Setup + Analysis */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Experimental Setup */}
          <Card className="bg-white border-neutral-200 p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shadow-lg">
                <FlaskConical className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-display font-semibold text-neutral-900">Experimental Setup</h4>
            </div>
            <div className="space-y-4">
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="text-sm font-bold text-neutral-800 mb-2">System Type</div>
                <div className="text-sm text-neutral-700 leading-relaxed">Multi-cell stacked seawater electrolyzer with parallel cell assembly, transparent acrylic plates, and stainless-steel bolts</div>
              </div>
              <div className="p-3 bg-white/70 rounded-lg border border-brand-500/10">
                <div className="text-sm font-bold text-brand-700 mb-2">Feedstock</div>
                <div className="text-sm text-neutral-700 leading-relaxed">Raw seawater (unfiltered, untreated)</div>
              </div>
              <div className="p-3 bg-white/70 rounded-lg border border-brand-500/10">
                <div className="text-sm font-bold text-brand-700 mb-2">Power Source</div>
                <div className="text-sm text-neutral-700 leading-relaxed">DC regulated power supply connected to electrode stack</div>
              </div>
              <div className="p-3 bg-white/70 rounded-lg border border-brand-500/10">
                <div className="text-sm font-bold text-brand-700 mb-2">Gas Collection</div>
                <div className="text-sm text-neutral-700 leading-relaxed">Blue pneumatic tubing for H₂ and O₂ segregation and collection</div>
              </div>
            </div>
          </Card>

          {/* GC Analysis */}
          <Card className="bg-white border-neutral-200 p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shadow-lg">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <h4 className="text-xl font-display font-semibold text-neutral-900">GC Analysis Results</h4>
            </div>
            <div className="space-y-3 mb-6">
              <div className="p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="text-sm font-bold text-neutral-800 mb-2">Technique</div>
                <div className="text-sm text-neutral-700">Gas Chromatography (GC) with Flame Ionization Detector (FID)</div>
              </div>
              <div className="p-3 bg-white/70 rounded-lg border border-brand-500/10">
                <div className="text-sm font-bold text-brand-700 mb-2">Analysis Date</div>
                <div className="text-sm text-neutral-700">25 August 2025</div>
              </div>
              <div className="p-3 bg-white/70 rounded-lg border border-brand-500/10">
                <div className="text-sm font-bold text-brand-700 mb-2">Sample Source</div>
                <div className="text-sm text-neutral-700">Hydrogen gas directly from electrolyzer outlet (no post-purification)</div>
              </div>
            </div>

            {/* GC Data Table */}
            <div className="bg-white border-2 border-neutral-200 rounded-xl overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead className="bg-gradient-to-r from-neutral-700 to-neutral-800 border-b border-neutral-800">
                  <tr>
                    <th className="py-3 px-4 text-left font-bold text-white">Parameter</th>
                    <th className="py-3 px-4 text-left font-bold text-white">Peak 1</th>
                    <th className="py-3 px-4 text-left font-bold text-white">Peak 2</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-200">
                  <tr className="hover:bg-neutral-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-neutral-700">Retention Time</td>
                    <td className="py-3 px-4 font-mono text-neutral-900 font-medium">0.49 min</td>
                    <td className="py-3 px-4 font-mono text-neutral-900 font-medium">1.42 min</td>
                  </tr>
                  <tr className="hover:bg-teal-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-neutral-700">Area (%)</td>
                    <td className="py-3 px-4 font-mono font-bold text-neutral-800 text-base">99.51%</td>
                    <td className="py-3 px-4 font-mono text-neutral-900 font-medium">0.49%</td>
                  </tr>
                  <tr className="hover:bg-teal-50/50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-neutral-700">Interpretation</td>
                    <td className="py-3 px-4 text-neutral-900 font-bold">Hydrogen (H₂)</td>
                    <td className="py-3 px-4 text-neutral-600 font-medium">Minor impurity</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        {/* Key Takeaways */}
        <Card className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-neutral-700 p-10 shadow-xl">
          <h4 className="text-2xl font-display font-semibold text-white mb-8 flex items-center gap-3">
            <CheckCircle2 className="w-7 h-7 text-neutral-400" />
            Key Takeaways
          </h4>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">High Purity Achievement</h5>
              <p className="text-neutral-400 text-sm leading-relaxed">
                99.51% H₂ purity achieved directly from seawater demonstrates excellent electrolyzer efficiency and selectivity
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center mb-4">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">No Filtration Required</h5>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Direct processing of raw seawater without desalination simplifies the system for scalable hydrogen production
              </p>
            </div>
            <div>
              <div className="w-10 h-10 rounded-lg bg-neutral-700 flex items-center justify-center mb-4">
                <Factory className="w-5 h-5 text-white" />
              </div>
              <h5 className="text-lg font-semibold text-white mb-2">Robust Performance</h5>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Effective gas segregation even with saline electrolyte proves electrode durability and system reliability
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Energy Generation from Hydrogen */}
      <section className="mb-32">
        <SectionHeading
          number="05"
          title="Energy Generation from Hydrogen"
          subtitle="Fuel cell efficiency and electrical output calculations."
        />

        {/* Quick Summary Banner */}
        <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-10 md:p-12 text-white mb-12 relative overflow-hidden shadow-2xl border border-neutral-700">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-neutral-700/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                <Battery className="w-6 h-6 text-white" />
              </div>
              <div className="text-sm font-mono uppercase tracking-widest text-neutral-300">
                Fuel Cell @ 60% Efficiency
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-display font-semibold mb-4 tracking-tight">1 kg H₂ → 20-24 kWh</h3>
            <p className="text-xl text-neutral-300 max-w-3xl font-light">
              High energy density and clean conversion make hydrogen ideal for distributed power generation
            </p>
          </div>
        </div>

        {/* Production Requirements */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-cyan-200 p-6 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <Droplets className="w-8 h-8 text-cyan-600" />
              <div>
                <div className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">Water Input</div>
                <div className="text-3xl font-display font-bold text-cyan-600">9-10 L</div>
              </div>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Water required to produce <strong>1 kg of hydrogen</strong> via electrolysis (approximately 9-10 kg/liters)
            </p>
          </Card>

          <Card className="bg-gradient-to-br from-amber-50 to-orange-50 border-amber-200 p-6 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-4">
              <Zap className="w-8 h-8 text-amber-600" />
              <div>
                <div className="text-sm font-semibold text-neutral-600 uppercase tracking-wider">Electricity Consumption</div>
                <div className="text-3xl font-display font-bold text-amber-600">~40 kWh</div>
              </div>
            </div>
            <p className="text-sm text-neutral-700 leading-relaxed">
              Electrical energy required to produce <strong>1 kg of hydrogen</strong> through water electrolysis
            </p>
          </Card>
        </div>

        {/* Energy Yield Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* LHV Basis */}
          <Card className="bg-white border-2 border-neutral-200 p-8 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center shadow-sm">
                <Zap className="w-6 h-6 text-neutral-700" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Lower Heating Value</h4>
                <div className="text-3xl font-display font-bold text-neutral-800 mt-1">20.0 kWh/kg</div>
              </div>
            </div>
            <div className="space-y-4 text-sm">
              <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                <span className="text-neutral-600">Chemical Energy (LHV)</span>
                <span className="font-mono font-semibold text-neutral-900">120 MJ/kg</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                <span className="text-neutral-600">Fuel Cell Efficiency</span>
                <span className="font-mono font-semibold text-neutral-800">60%</span>
              </div>
              <div className="flex justify-between items-center pb-3 border-b border-neutral-100">
                <span className="text-neutral-600">Electrical Output</span>
                <span className="font-mono font-semibold text-neutral-900">72.0 MJ</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-neutral-900 font-semibold">Delivered Energy</span>
                <span className="font-mono font-bold text-2xl text-neutral-800">20.0 kWh</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <p className="text-xs text-neutral-700 font-medium">
                <strong>Standard Industry Basis:</strong> LHV is typically used for fuel cell efficiency reporting in engineering practice.
              </p>
            </div>
          </Card>

          {/* HHV Basis */}
          <Card className="bg-white border-2 border-blue-200 p-8 shadow-lg hover:shadow-xl transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shadow-sm">
                <Battery className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider">Higher Heating Value</h4>
                <div className="text-3xl font-display font-bold text-blue-600 mt-1">23.7 kWh/kg</div>
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
        <Card className="bg-white border-neutral-200 p-10 mb-12 shadow-lg">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-neutral-800 flex items-center justify-center shadow-lg">
              <Calculator className="w-5 h-5 text-white" />
            </div>
            <h4 className="text-2xl font-display font-semibold text-neutral-900">Step-by-Step Calculation</h4>
          </div>

          <div className="space-y-6">
            <div className="bg-white border-2 border-neutral-200 rounded-xl p-6">
              <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-3">Step 1: Energy Content per kg of Hydrogen</div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <span className="text-sm font-medium text-neutral-700">Lower Heating Value (LHV)</span>
                  <span className="font-mono font-bold text-neutral-800">120 MJ/kg</span>
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
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="text-xs text-neutral-600 mb-2">LHV Calculation:</div>
                  <div className="font-mono text-sm text-neutral-800">120 MJ × 0.60 = <span className="font-bold text-brand-600">72.0 MJ</span></div>
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
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <div className="text-xs text-neutral-600 mb-2">LHV Result:</div>
                  <div className="font-mono text-sm text-neutral-800">72.0 MJ ÷ 3.6 = <span className="font-bold text-2xl text-brand-600">20.0 kWh</span></div>
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
        <Card className="bg-gradient-to-br from-neutral-900 to-neutral-800 border-neutral-700 p-10 shadow-xl">
          <h4 className="text-2xl font-display font-semibold text-white mb-6 flex items-center gap-3">
            <CheckCircle2 className="w-7 h-7 text-neutral-400" />
            Important Notes
          </h4>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-3">Industry Standard</div>
              <p className="text-neutral-300 leading-relaxed">
                Engineers typically report fuel-cell efficiency relative to the <strong className="text-white">Lower Heating Value (LHV)</strong>,
                making <strong className="text-neutral-300">20 kWh/kg</strong> the standard figure used in practice.
              </p>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
              <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-3">Real-World Performance</div>
              <p className="text-neutral-300 leading-relaxed">
                Actual systems may experience additional energy losses due to auxiliary components
                (air compressors, pumps, inverters), reducing delivered output slightly below the stack's rated value.
              </p>
            </div>
          </div>
        </Card>
      </section>
    </>
  );

  return <ProductDetailTemplate data={pipelineProducts.hydrogenMembranes} customSections={customSections} />;
};

export default HydrogenMembranes;
