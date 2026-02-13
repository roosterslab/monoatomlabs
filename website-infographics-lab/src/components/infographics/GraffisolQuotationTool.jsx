import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Sun, DollarSign, Leaf, TrendingUp, Download, Calendar, CheckCircle2, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line, AreaChart, Area } from 'recharts';

const GraffisolQuotationTool = () => {
  const [projectName, setProjectName] = useState('');
  const [installationType, setInstallationType] = useState('commercial');
  const [solarCapacity, setSolarCapacity] = useState(1000); // kW
  const [panelCount, setPanelCount] = useState(3000);
  const [electricityRate, setElectricityRate] = useState(8); // ₹/kWh
  const [soilingLevel, setSoilingLevel] = useState('medium');
  const [timeHorizon, setTimeHorizon] = useState(10); // years

  const calculations = useMemo(() => {
    // Base generation
    const annualGeneration = solarCapacity * 1500; // kWh/kW/year

    // Energy improvements
    const energyGain = 0.11; // 11% average
    const additionalEnergy = annualGeneration * energyGain;

    // Soiling impact
    const soilingImpact = {
      low: { baseline: 0.05, withGraffisol: 0.02, recovery: 0.03 },
      medium: { baseline: 0.15, withGraffisol: 0.08, recovery: 0.07 },
      high: { baseline: 0.25, withGraffisol: 0.12, recovery: 0.13 },
    };
    const soiling = soilingImpact[soilingLevel];
    const soilingRecovery = soiling.recovery * annualGeneration;

    // Temperature benefit (6-8°C reduction)
    const tempReduction = 7; // °C
    const tempBenefit = annualGeneration * 0.02; // 2% from cooling

    // Total energy gain
    const totalAdditionalEnergy = additionalEnergy + soilingRecovery + tempBenefit;

    // Financial calculations
    const annualRevenue = totalAdditionalEnergy * electricityRate;
    const coatingCost = solarCapacity * 500; // ₹500/kW
    const applicationCost = panelCount * 50; // ₹50/panel for labor
    const totalInvestment = coatingCost + applicationCost;
    const paybackMonths = ((totalInvestment / annualRevenue) * 12).toFixed(1);
    const roi = (((annualRevenue * timeHorizon - totalInvestment) / totalInvestment) * 100).toFixed(0);

    // Maintenance savings
    const cleaningFrequency = { before: 24, after: 8 }; // times per year
    const cleaningsAvoided = (cleaningFrequency.before - cleaningFrequency.after) * timeHorizon;
    const cleaningCostSaved = cleaningsAvoided * panelCount * 2; // ₹2/panel/cleaning

    // Total benefits
    const totalEnergyRevenue = annualRevenue * timeHorizon;
    const totalSavings = totalEnergyRevenue + cleaningCostSaved;
    const netProfit = totalSavings - totalInvestment;

    // Environmental impact
    const co2PerKWh = 0.82; // kg CO2/kWh in India
    const totalCO2Reduction = (totalAdditionalEnergy * timeHorizon * co2PerKWh) / 1000; // tonnes
    const treesEquivalent = (totalCO2Reduction * 1000 / 21).toFixed(0);
    const carsOffRoad = (totalCO2Reduction / 4.6).toFixed(0);

    // Monthly timeline
    const timeline = [];
    for (let month = 0; month <= timeHorizon * 12; month += 6) {
      const monthlyRevenue = annualRevenue / 12;
      const cumulative = (monthlyRevenue * month) + (cleaningCostSaved * (month / 12) / timeHorizon);
      const netValue = cumulative - totalInvestment;
      timeline.push({
        month,
        revenue: cumulative / 100000,
        investment: totalInvestment / 100000,
        netProfit: netValue / 100000,
      });
    }

    // Energy comparison
    const energyData = [
      { scenario: 'Without Graffisol', annual: annualGeneration / 1000, color: '#ef4444' },
      { scenario: 'With Graffisol', annual: (annualGeneration + totalAdditionalEnergy) / 1000, color: '#f59e0b' },
    ];

    // Cost breakdown
    const costBreakdown = [
      { name: 'Graffisol Coating', value: coatingCost },
      { name: 'Application Labor', value: applicationCost },
    ];

    return {
      annualGeneration,
      totalAdditionalEnergy,
      energyGain: energyGain * 100,
      soilingRecovery,
      tempBenefit,
      tempReduction,
      annualRevenue,
      coatingCost,
      applicationCost,
      totalInvestment,
      paybackMonths,
      roi,
      cleaningsAvoided,
      cleaningCostSaved,
      totalEnergyRevenue,
      totalSavings,
      netProfit,
      totalCO2Reduction,
      treesEquivalent,
      carsOffRoad,
      timeline,
      energyData,
      costBreakdown,
    };
  }, [solarCapacity, panelCount, electricityRate, soilingLevel, timeHorizon]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-900 via-yellow-900 to-orange-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-yellow-400/50 bg-yellow-400/10 backdrop-blur mb-6">
            <Sun className="w-4 h-4 text-yellow-300 animate-pulse" />
            <span className="text-xs font-bold text-yellow-300 tracking-wide uppercase">
              Graffisol Quotation Tool
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Solar Project Quotation
          </h1>
          <p className="text-xl text-yellow-100 max-w-3xl mx-auto">
            Complete ROI analysis with energy gains and environmental impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Inputs */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-white mb-4">Project Details</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-yellow-200 mb-2 block">Project Name</label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g., Rooftop Solar Phase 1"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-yellow-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-yellow-200 mb-2 block">Installation Type</label>
                  <select
                    value={installationType}
                    onChange={(e) => setInstallationType(e.target.value)}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  >
                    <option value="utility">Utility-Scale Solar Farm</option>
                    <option value="commercial">Commercial Rooftop</option>
                    <option value="residential">Residential</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-yellow-200 mb-2 block">Soiling Level</label>
                  <select
                    value={soilingLevel}
                    onChange={(e) => setSoilingLevel(e.target.value)}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-yellow-400"
                  >
                    <option value="low">Low (Clean areas)</option>
                    <option value="medium">Medium (Urban)</option>
                    <option value="high">High (Dusty/Industrial)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-yellow-200 mb-3 block">Solar Capacity (kW)</label>
              <input
                type="range"
                min="100"
                max="10000"
                step="100"
                value={solarCapacity}
                onChange={(e) => setSolarCapacity(Number(e.target.value))}
                className="w-full accent-yellow-500"
              />
              <div className="text-3xl font-bold text-white mt-2">
                {solarCapacity.toLocaleString()} kW
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-yellow-200 mb-3 block">Number of Panels</label>
              <input
                type="range"
                min="300"
                max="30000"
                step="100"
                value={panelCount}
                onChange={(e) => setPanelCount(Number(e.target.value))}
                className="w-full accent-yellow-500"
              />
              <div className="text-2xl font-bold text-white mt-2">
                {panelCount.toLocaleString()} panels
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-yellow-200 mb-3 block">Electricity Rate (₹/kWh)</label>
              <input
                type="range"
                min="5"
                max="15"
                step="0.5"
                value={electricityRate}
                onChange={(e) => setElectricityRate(Number(e.target.value))}
                className="w-full accent-yellow-500"
              />
              <div className="text-2xl font-bold text-white mt-2">₹{electricityRate}/kWh</div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-yellow-200 mb-3 block">Analysis Period (years)</label>
              <input
                type="range"
                min="5"
                max="25"
                step="1"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(Number(e.target.value))}
                className="w-full accent-yellow-500"
              />
              <div className="text-2xl font-bold text-white mt-2">{timeHorizon} years</div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-yellow-500 text-black rounded-lg hover:bg-yellow-600 transition-all font-semibold">
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
                  {calculations.energyGain.toFixed(1)}%
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">Energy Gain</div>
              </div>

              <div className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30 backdrop-blur p-6 rounded-xl">
                <DollarSign className="w-8 h-8 text-yellow-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  ₹{(calculations.netProfit / 10000000).toFixed(1)}Cr
                </div>
                <div className="text-xs text-yellow-200 uppercase tracking-wide">Net Profit</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 backdrop-blur p-6 rounded-xl">
                <Calendar className="w-8 h-8 text-purple-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.paybackMonths}mo
                </div>
                <div className="text-xs text-purple-200 uppercase tracking-wide">Payback</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 backdrop-blur p-6 rounded-xl">
                <Leaf className="w-8 h-8 text-green-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.totalCO2Reduction.toFixed(0)}t
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">CO₂ Saved</div>
              </div>
            </div>

            {/* Energy Comparison */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">Annual Energy Production</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={calculations.energyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="scenario" stroke="#fff" />
                  <YAxis stroke="#fff" label={{ value: 'MWh', angle: -90, position: 'insideLeft', fill: '#fff' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => [`${value.toFixed(0)} MWh`, '']}
                  />
                  <Bar dataKey="annual" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* ROI Timeline */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">ROI Timeline ({timeHorizon} Years)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={calculations.timeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="month" stroke="#fff" tickFormatter={(val) => `${Math.floor(val / 12)}y`} />
                  <YAxis stroke="#fff" label={{ value: '₹ Lakhs', angle: -90, position: 'insideLeft', fill: '#fff' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => [`₹${value.toFixed(2)}L`, '']}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="investment" stroke="#ef4444" strokeWidth={2} name="Investment" strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="revenue" stroke="#f59e0b" strokeWidth={2} name="Cumulative Revenue" />
                  <Line type="monotone" dataKey="netProfit" stroke="#10b981" strokeWidth={3} name="Net Profit" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Financial Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-bold text-white mb-6">Investment Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Graffisol Coating</span>
                    <span className="font-bold text-white">₹{(calculations.coatingCost / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Application Labor</span>
                    <span className="font-bold text-white">₹{(calculations.applicationCost / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-yellow-500/10 border-t border-yellow-500/30 rounded-lg">
                    <span className="text-sm text-yellow-300 font-bold">Total Investment</span>
                    <span className="font-bold text-yellow-400">₹{(calculations.totalInvestment / 100000).toFixed(2)}L</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-bold text-white mb-6">Benefits Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Energy Revenue</span>
                    <span className="font-bold text-white">₹{(calculations.totalEnergyRevenue / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Cleaning Savings</span>
                    <span className="font-bold text-white">₹{(calculations.cleaningCostSaved / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Cleanings Avoided</span>
                    <span className="font-bold text-white">{calculations.cleaningsAvoided}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-500/10 border-t border-green-500/30 rounded-lg">
                    <span className="text-sm text-green-300 font-bold">Net Profit ({timeHorizon}yr)</span>
                    <span className="font-bold text-green-400">₹{(calculations.netProfit / 100000).toFixed(2)}L</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Environmental Impact */}
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <Leaf className="w-6 h-6 text-green-400" />
                Environmental Impact ({timeHorizon} Years)
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    {(calculations.totalAdditionalEnergy * timeHorizon / 1000000).toFixed(1)}
                  </div>
                  <div className="text-sm text-green-100">GWh Clean Energy</div>
                  <div className="text-xs text-green-200 mt-1">
                    Additional generation
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    {calculations.totalCO2Reduction.toFixed(0)}
                  </div>
                  <div className="text-sm text-green-100">Tonnes CO₂ Offset</div>
                  <div className="text-xs text-green-200 mt-1">
                    = {calculations.treesEquivalent} trees/year
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    {calculations.carsOffRoad}
                  </div>
                  <div className="text-sm text-green-100">Cars Off Road</div>
                  <div className="text-xs text-green-200 mt-1">
                    Annual equivalent
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-500/10 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-green-100">
                    Field validated: 10-12% energy output gain across 1+ MW installations. Temperature reduction of {calculations.tempReduction}°C improves panel efficiency and lifespan.
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Guarantee */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">10-Year Performance Guarantee</h4>
                  <p className="text-sm text-blue-100">
                    Graffisol coating maintains self-cleaning and anti-reflective properties for 10+ years. ROI calculation assumes {calculations.paybackMonths} months payback with {calculations.roi}% return over {timeHorizon} years.
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

export default GraffisolQuotationTool;
