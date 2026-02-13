import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Package, DollarSign, Leaf, TrendingUp, Download, Calendar, CheckCircle2, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis } from 'recharts';

const HDGPEQuotationTool = () => {
  const [projectName, setProjectName] = useState('');
  const [application, setApplication] = useState('packaging');
  const [monthlyVolume, setMonthlyVolume] = useState(100); // tonnes
  const [standardHDPEPrice, setStandardHDPEPrice] = useState(120); // ₹/kg
  const [hdgpePrice, setHDGPEPrice] = useState(135); // ₹/kg (15% premium)
  const [timeHorizon, setTimeHorizon] = useState(5); // years

  const applications = {
    packaging: {
      name: 'Packaging Industry',
      description: 'Food packaging, industrial wraps, flexible films',
      elongationGain: 20, // 5% → 100% (20x improvement)
      lifespanExtension: 20, // %
      thicknessReduction: 15, // %
      defectReduction: 30, // %
    },
    films: {
      name: 'Film Production',
      description: 'Agricultural films, greenhouse covers, mulch',
      elongationGain: 20,
      lifespanExtension: 35, // 2+ years longer
      thicknessReduction: 12,
      defectReduction: 25,
    },
    pipes: {
      name: 'Pipe Manufacturing',
      description: 'Water pipes, gas pipelines, conduits',
      elongationGain: 20,
      lifespanExtension: 50, // 50+ years service
      thicknessReduction: 10,
      defectReduction: 40,
    },
    industrial: {
      name: 'Industrial Applications',
      description: 'Tanks, containers, industrial parts',
      elongationGain: 20,
      lifespanExtension: 30,
      thicknessReduction: 10,
      defectReduction: 35,
    },
  };

  const calculations = useMemo(() => {
    const app = applications[application];

    // Volume calculations
    const annualVolume = monthlyVolume * 12 * 1000; // kg
    const totalVolume = annualVolume * timeHorizon;

    // Direct material costs
    const standardAnnualCost = annualVolume * standardHDPEPrice;
    const hdgpeAnnualCost = annualVolume * hdgpePrice;
    const materialPremium = hdgpeAnnualCost - standardAnnualCost;

    // Benefits from thickness reduction
    const thicknessReductionSavings = standardAnnualCost * (app.thicknessReduction / 100);
    const netAnnualCost = hdgpeAnnualCost - thicknessReductionSavings;
    const annualSavings = standardAnnualCost - netAnnualCost;

    // Lifespan benefits (amortized value)
    const lifespanMultiplier = 1 + (app.lifespanExtension / 100);
    const effectiveAnnualCostStandard = standardAnnualCost / 1;
    const effectiveAnnualCostHDGPE = netAnnualCost / lifespanMultiplier;
    const lifespanSavings = effectiveAnnualCostStandard - effectiveAnnualCostHDGPE;

    // Defect reduction savings
    const defectCostPercentage = 0.05; // 5% waste in standard HDPE
    const defectCost = standardAnnualCost * defectCostPercentage;
    const defectSavings = defectCost * (app.defectReduction / 100);

    // Total benefits
    const totalAnnualBenefits = annualSavings + lifespanSavings + defectSavings;
    const totalBenefits = totalAnnualBenefits * timeHorizon;
    const totalPremiumPaid = materialPremium * timeHorizon;
    const netProfit = totalBenefits - totalPremiumPaid;

    // ROI
    const roi = ((netProfit / totalPremiumPaid) * 100).toFixed(0);
    const paybackMonths = ((materialPremium / totalAnnualBenefits) * 12).toFixed(1);

    // Market premium (customers willing to pay more for better product)
    const marketPremium = 15; // %
    const additionalRevenue = standardAnnualCost * (marketPremium / 100);
    const totalAdditionalRevenue = additionalRevenue * timeHorizon;

    // Environmental impact (reduced material usage)
    const materialSaved = totalVolume * (app.thicknessReduction / 100); // kg
    const co2PerKgHDPE = 1.9; // kg CO2
    const co2Saved = (materialSaved * co2PerKgHDPE) / 1000; // tonnes
    const treesEquivalent = (co2Saved * 1000 / 21).toFixed(0);

    // Timeline
    const timeline = [];
    for (let year = 0; year <= timeHorizon; year++) {
      const standardCost = standardAnnualCost * year;
      const hdgpeCost = netAnnualCost * year;
      const benefits = totalAnnualBenefits * year;
      const cumProfit = benefits - (materialPremium * year);
      timeline.push({
        year,
        standard: standardCost / 100000,
        hdgpe: hdgpeCost / 100000,
        benefits: benefits / 100000,
        profit: cumProfit / 100000,
      });
    }

    // Performance comparison (radar chart)
    const performanceData = [
      { property: 'Elongation', Standard: 5, 'HD-G-PE': 100 },
      { property: 'Tensile Strength', Standard: 70, 'HD-G-PE': 91 }, // +30%
      { property: 'Impact Resistance', Standard: 70, 'HD-G-PE': 98 }, // +40%
      { property: 'Lifespan', Standard: 70, 'HD-G-PE': 70 + app.lifespanExtension },
      { property: 'Quality', Standard: 70, 'HD-G-PE': 70 + app.defectReduction },
    ];

    // Cost breakdown
    const costData = [
      { category: 'Material Cost', standard: standardAnnualCost / 100000, hdgpe: hdgpeAnnualCost / 100000 },
      { category: 'After Thickness Savings', standard: standardAnnualCost / 100000, hdgpe: netAnnualCost / 100000 },
    ];

    return {
      app,
      annualVolume,
      totalVolume,
      standardAnnualCost,
      hdgpeAnnualCost,
      materialPremium,
      thicknessReductionSavings,
      netAnnualCost,
      annualSavings,
      lifespanSavings,
      defectSavings,
      totalAnnualBenefits,
      totalBenefits,
      totalPremiumPaid,
      netProfit,
      roi,
      paybackMonths,
      marketPremium,
      additionalRevenue,
      totalAdditionalRevenue,
      materialSaved,
      co2Saved,
      treesEquivalent,
      timeline,
      performanceData,
      costData,
    };
  }, [application, monthlyVolume, standardHDPEPrice, hdgpePrice, timeHorizon]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-teal-900 via-green-900 to-teal-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-teal-400/50 bg-teal-400/10 backdrop-blur mb-6">
            <Package className="w-4 h-4 text-teal-300 animate-pulse" />
            <span className="text-xs font-bold text-teal-300 tracking-wide uppercase">
              HD-G-PE Quotation Tool
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Polymer Project Quotation
          </h1>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Complete ROI with performance gains and lifecycle benefits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Inputs */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-white mb-4">Project Details</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-teal-200 mb-2 block">Project Name</label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g., Packaging Line Upgrade"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-teal-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-teal-200 mb-2 block">Application</label>
                  <select
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-teal-400"
                  >
                    {Object.entries(applications).map(([key, value]) => (
                      <option key={key} value={key}>{value.name}</option>
                    ))}
                  </select>
                </div>

                <div className="p-3 bg-teal-500/10 rounded-lg">
                  <div className="text-xs text-teal-300 mb-1">Application</div>
                  <div className="text-sm text-white">{calculations.app.description}</div>
                  <div className="text-xs text-teal-200 mt-2 space-y-1">
                    <div>• {calculations.app.elongationGain}× elongation</div>
                    <div>• +{calculations.app.lifespanExtension}% lifespan</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-teal-200 mb-3 block">Monthly Volume (tonnes)</label>
              <input
                type="range"
                min="10"
                max="500"
                step="10"
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                className="w-full accent-teal-500"
              />
              <div className="text-3xl font-bold text-white mt-2">
                {monthlyVolume.toLocaleString()} tonnes/month
              </div>
              <div className="text-sm text-teal-200 mt-2">
                = {(calculations.annualVolume / 1000).toLocaleString()} tonnes/year
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-teal-200 mb-3 block">Standard HDPE Price (₹/kg)</label>
              <input
                type="range"
                min="80"
                max="150"
                step="5"
                value={standardHDPEPrice}
                onChange={(e) => setStandardHDPEPrice(Number(e.target.value))}
                className="w-full accent-teal-500"
              />
              <div className="text-2xl font-bold text-white mt-2">
                ₹{standardHDPEPrice}/kg
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-teal-200 mb-3 block">HD-G-PE Price (₹/kg)</label>
              <input
                type="range"
                min="100"
                max="180"
                step="5"
                value={hdgpePrice}
                onChange={(e) => setHDGPEPrice(Number(e.target.value))}
                className="w-full accent-teal-500"
              />
              <div className="text-2xl font-bold text-white mt-2">
                ₹{hdgpePrice}/kg
              </div>
              <div className="text-xs text-teal-200 mt-1">
                {(((hdgpePrice - standardHDPEPrice) / standardHDPEPrice) * 100).toFixed(0)}% premium
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-teal-200 mb-3 block">Analysis Period (years)</label>
              <input
                type="range"
                min="3"
                max="10"
                step="1"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(Number(e.target.value))}
                className="w-full accent-teal-500"
              />
              <div className="text-2xl font-bold text-white mt-2">{timeHorizon} years</div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-all font-semibold">
              <Download className="w-4 h-4" />
              Download Quotation PDF
            </button>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/30 backdrop-blur p-6 rounded-xl">
                <Zap className="w-8 h-8 text-green-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.app.elongationGain}×
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">Elongation</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 backdrop-blur p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-purple-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.roi}%
                </div>
                <div className="text-xs text-purple-200 uppercase tracking-wide">ROI</div>
              </div>

              <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border-2 border-blue-500/30 backdrop-blur p-6 rounded-xl">
                <Calendar className="w-8 h-8 text-blue-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.paybackMonths}mo
                </div>
                <div className="text-xs text-blue-200 uppercase tracking-wide">Payback</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 backdrop-blur p-6 rounded-xl">
                <Leaf className="w-8 h-8 text-green-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.co2Saved.toFixed(0)}t
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">CO₂ Saved</div>
              </div>
            </div>

            {/* Performance Radar */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">Performance Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <RadarChart data={calculations.performanceData}>
                  <PolarGrid stroke="#ffffff40" />
                  <PolarAngleAxis dataKey="property" stroke="#fff" />
                  <PolarRadiusAxis angle={90} domain={[0, 120]} stroke="#fff" />
                  <Radar name="Standard HDPE" dataKey="Standard" stroke="#ef4444" fill="#ef4444" fillOpacity={0.3} />
                  <Radar name="HD-G-PE" dataKey="HD-G-PE" stroke="#14b8a6" fill="#14b8a6" fillOpacity={0.5} />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
            </div>

            {/* Cost Comparison */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">Annual Cost Comparison</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={calculations.costData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="category" stroke="#fff" />
                  <YAxis stroke="#fff" label={{ value: '₹ Lakhs', angle: -90, position: 'insideLeft', fill: '#fff' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => [`₹${value.toFixed(1)}L`, '']}
                  />
                  <Legend />
                  <Bar dataKey="standard" fill="#ef4444" name="Standard HDPE" />
                  <Bar dataKey="hdgpe" fill="#14b8a6" name="HD-G-PE" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Benefits Timeline */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">Benefits Timeline ({timeHorizon} Years)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={calculations.timeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#fff" />
                  <YAxis stroke="#fff" label={{ value: '₹ Lakhs', angle: -90, position: 'insideLeft', fill: '#fff' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => [`₹${value.toFixed(2)}L`, '']}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="standard" stroke="#ef4444" strokeWidth={2} name="Standard Cost" strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="hdgpe" stroke="#14b8a6" strokeWidth={2} name="HD-G-PE Net Cost" />
                  <Line type="monotone" dataKey="benefits" stroke="#f59e0b" strokeWidth={2} name="Cumulative Benefits" />
                  <Line type="monotone" dataKey="profit" stroke="#10b981" strokeWidth={3} name="Net Profit" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Financial Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-bold text-white mb-6">Annual Benefits</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Thickness Reduction</span>
                    <span className="font-bold text-white">₹{(calculations.thicknessReductionSavings / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Lifespan Extension</span>
                    <span className="font-bold text-white">₹{(calculations.lifespanSavings / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Defect Reduction</span>
                    <span className="font-bold text-white">₹{(calculations.defectSavings / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-500/10 border-t border-green-500/30 rounded-lg">
                    <span className="text-sm text-green-300 font-bold">Total Annual Benefits</span>
                    <span className="font-bold text-green-400">₹{(calculations.totalAnnualBenefits / 100000).toFixed(2)}L</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-bold text-white mb-6">{timeHorizon}-Year Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Total Volume</span>
                    <span className="font-bold text-white">{(calculations.totalVolume / 1000).toLocaleString()}t</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Premium Paid</span>
                    <span className="font-bold text-white">₹{(calculations.totalPremiumPaid / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Total Benefits</span>
                    <span className="font-bold text-white">₹{(calculations.totalBenefits / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-500/10 border-t border-green-500/30 rounded-lg">
                    <span className="text-sm text-green-300 font-bold">Net Profit</span>
                    <span className="font-bold text-green-400">₹{(calculations.netProfit / 100000).toFixed(2)}L</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Premium */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">Market Value Enhancement</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-300 mb-2">
                    +{calculations.marketPremium}%
                  </div>
                  <div className="text-sm text-purple-100">Product Premium</div>
                  <div className="text-xs text-purple-200 mt-1">
                    Customers pay more for quality
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-purple-300 mb-2">
                    ₹{(calculations.totalAdditionalRevenue / 100000).toFixed(1)}L
                  </div>
                  <div className="text-sm text-purple-100">Additional Revenue</div>
                  <div className="text-xs text-purple-200 mt-1">
                    Over {timeHorizon} years
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <Leaf className="w-6 h-6 text-green-400" />
                Environmental Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    {(calculations.materialSaved / 1000).toFixed(0)}
                  </div>
                  <div className="text-sm text-green-100">Tonnes Material Saved</div>
                  <div className="text-xs text-green-200 mt-1">
                    {calculations.app.thicknessReduction}% thickness reduction
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    {calculations.co2Saved.toFixed(1)}
                  </div>
                  <div className="text-sm text-green-100">Tonnes CO₂ Saved</div>
                  <div className="text-xs text-green-200 mt-1">
                    = {calculations.treesEquivalent} trees/year
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    {calculations.app.defectReduction}%
                  </div>
                  <div className="text-sm text-green-100">Less Waste</div>
                  <div className="text-xs text-green-200 mt-1">
                    Defect reduction
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-500/10 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-green-100">
                    HD-G-PE enables circular economy through reduced material usage and extended product lifespan, contributing to sustainable manufacturing practices.
                  </div>
                </div>
              </div>
            </div>

            {/* Technical Validation */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Performance Validation</h4>
                  <p className="text-sm text-blue-100">
                    HD-G-PE delivers {calculations.app.elongationGain}× elongation improvement (5% → 100%), extending product lifespan by {calculations.app.lifespanExtension}% while enabling thickness reduction of {calculations.app.thicknessReduction}%. Field-tested across {calculations.app.name.toLowerCase()}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HDGPEQuotationTool;
