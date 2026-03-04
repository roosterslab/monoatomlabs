import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Layers, DollarSign, Leaf, TrendingUp, Download, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const CerapheneQuotationTool = () => {
  const [projectName, setProjectName] = useState('');
  const [application, setApplication] = useState('electronics');
  const [monthlyVolume, setMonthlyVolume] = useState(500); // kg
  const [premiumGraphenePrice, setPremiumGraphenePrice] = useState(15000); // ₹/kg
  const [ceraphenePrice, setCeraphenePrice] = useState(5000); // ₹/kg
  const [timeHorizon, setTimeHorizon] = useState(5); // years

  const applications = {
    electronics: {
      name: 'Electronics Manufacturing',
      description: 'Conductive inks, EMI shielding, thermal management',
      performanceGain: 'Same conductivity',
      qualityMultiplier: 1.0,
    },
    energy: {
      name: 'Energy Storage',
      description: 'Battery electrodes, supercapacitors',
      performanceGain: '+15% capacity',
      qualityMultiplier: 1.15,
    },
    composites: {
      name: 'Composite Materials',
      description: 'Polymer reinforcement, structural materials',
      performanceGain: '+40% strength',
      qualityMultiplier: 1.4,
    },
    coatings: {
      name: 'Coatings & Paints',
      description: 'Anti-corrosion, conductive paints',
      performanceGain: '3× durability',
      qualityMultiplier: 3.0,
    },
  };

  const calculations = useMemo(() => {
    const app = applications[application];

    // Annual volume
    const annualVolume = monthlyVolume * 12;
    const totalVolume = annualVolume * timeHorizon;

    // Cost comparison
    const premiumAnnualCost = annualVolume * premiumGraphenePrice;
    const cerapheneAnnualCost = annualVolume * ceraphenePrice;
    const annualSavings = premiumAnnualCost - cerapheneAnnualCost;

    const premiumTotalCost = premiumAnnualCost * timeHorizon;
    const cerapheneTotalCost = cerapheneAnnualCost * timeHorizon;
    const totalSavings = premiumTotalCost - cerapheneTotalCost;

    // Percentage savings
    const savingsPercentage = ((annualSavings / premiumAnnualCost) * 100).toFixed(1);

    // Market democratization
    const premiumAccessibleMarket = 100; // baseline
    const cerapheneAccessibleMarket = premiumAccessibleMarket * (premiumGraphenePrice / ceraphenePrice);
    const marketExpansion = ((cerapheneAccessibleMarket - premiumAccessibleMarket) / premiumAccessibleMarket * 100).toFixed(0);

    // Production capability
    const monthlyProductionValue = monthlyVolume * ceraphenePrice;
    const annualProductionValue = monthlyProductionValue * 12;

    // Timeline
    const timeline = [];
    for (let year = 0; year <= timeHorizon; year++) {
      const premiumCost = premiumAnnualCost * year;
      const cerapheneCost = cerapheneAnnualCost * year;
      const savings = premiumCost - cerapheneCost;
      timeline.push({
        year,
        premium: premiumCost / 100000,
        ceraphene: cerapheneCost / 100000,
        savings: savings / 100000,
      });
    }

    // Cost breakdown (annual)
    const costData = [
      { scenario: 'Premium Graphene', cost: premiumAnnualCost / 100000, color: '#ef4444' },
      { scenario: 'Ceraphene', cost: cerapheneAnnualCost / 100000, color: '#14b8a6' },
    ];

    // Monthly costs
    const monthlyData = [];
    for (let month = 0; month <= timeHorizon * 12; month += 3) {
      const premiumCumulative = (premiumAnnualCost / 12) * month;
      const cerapheneCumulative = (cerapheneAnnualCost / 12) * month;
      monthlyData.push({
        month,
        premium: premiumCumulative / 100000,
        ceraphene: cerapheneCumulative / 100000,
        savings: (premiumCumulative - cerapheneCumulative) / 100000,
      });
    }

    // Environmental (graphene production is energy-intensive)
    const energySavedPerKg = 50; // kWh saved per kg (Ceraphene's efficient process)
    const totalEnergySaved = totalVolume * energySavedPerKg;
    const co2Saved = (totalEnergySaved * 0.82) / 1000; // tonnes (India grid factor)

    // Quality metrics
    const pieData = [
      { name: 'Material Cost', value: ceraphenePrice, color: '#14b8a6' },
      { name: 'Savings vs Premium', value: premiumGraphenePrice - ceraphenePrice, color: '#10b981' },
    ];

    return {
      app,
      annualVolume,
      totalVolume,
      premiumAnnualCost,
      cerapheneAnnualCost,
      annualSavings,
      premiumTotalCost,
      cerapheneTotalCost,
      totalSavings,
      savingsPercentage,
      marketExpansion,
      cerapheneAccessibleMarket,
      monthlyProductionValue,
      annualProductionValue,
      timeline,
      costData,
      monthlyData,
      totalEnergySaved,
      co2Saved,
      pieData,
    };
  }, [application, monthlyVolume, premiumGraphenePrice, ceraphenePrice, timeHorizon]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-cyan-400/50 bg-cyan-400/10 backdrop-blur mb-6">
            <Layers className="w-4 h-4 text-cyan-300 animate-pulse" />
            <span className="text-xs font-bold text-cyan-300 tracking-wide uppercase">
              Ceraphene Quotation Tool
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Industrial Quotation
          </h1>
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto">
            Affordable graphene cost analysis and market democratization impact
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Inputs */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-white mb-4">Project Details</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-cyan-200 mb-2 block">Project Name</label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g., Battery Production Line"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-cyan-200 mb-2 block">Application</label>
                  <select
                    value={application}
                    onChange={(e) => setApplication(e.target.value)}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400"
                  >
                    {Object.entries(applications).map(([key, value]) => (
                      <option key={key} value={key}>{value.name}</option>
                    ))}
                  </select>
                </div>

                <div className="p-3 bg-cyan-500/10 rounded-lg">
                  <div className="text-xs text-cyan-300 mb-1">Application</div>
                  <div className="text-sm text-white">{calculations.app.description}</div>
                  <div className="text-xs text-cyan-200 mt-2">
                    Performance: <span className="font-bold">{calculations.app.performanceGain}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-cyan-200 mb-3 block">Monthly Volume (kg)</label>
              <input
                type="range"
                min="50"
                max="5000"
                step="50"
                value={monthlyVolume}
                onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-3xl font-bold text-white mt-2">
                {monthlyVolume.toLocaleString()} kg/month
              </div>
              <div className="text-sm text-cyan-200 mt-2">
                = {calculations.annualVolume.toLocaleString()} kg/year
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-cyan-200 mb-3 block">Premium Graphene Price (₹/kg)</label>
              <input
                type="range"
                min="10000"
                max="25000"
                step="1000"
                value={premiumGraphenePrice}
                onChange={(e) => setPremiumGraphenePrice(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-2xl font-bold text-white mt-2">
                ₹{premiumGraphenePrice.toLocaleString()}/kg
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-cyan-200 mb-3 block">Ceraphene Price (₹/kg)</label>
              <input
                type="range"
                min="3000"
                max="8000"
                step="500"
                value={ceraphenePrice}
                onChange={(e) => setCeraphenePrice(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-2xl font-bold text-white mt-2">
                ₹{ceraphenePrice.toLocaleString()}/kg
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-cyan-200 mb-3 block">Analysis Period (years)</label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(Number(e.target.value))}
                className="w-full accent-cyan-500"
              />
              <div className="text-2xl font-bold text-white mt-2">{timeHorizon} years</div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-cyan-500 text-black rounded-lg hover:bg-cyan-600 transition-all font-semibold">
              <Download className="w-4 h-4" />
              Download Quotation PDF
            </button>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border-2 border-green-500/30 backdrop-blur p-6 rounded-xl">
                <DollarSign className="w-8 h-8 text-green-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  ₹{(calculations.totalSavings / 10000000).toFixed(1)}Cr
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">Total Savings</div>
              </div>

              <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-500/30 backdrop-blur p-6 rounded-xl">
                <TrendingUp className="w-8 h-8 text-cyan-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.savingsPercentage}%
                </div>
                <div className="text-xs text-cyan-200 uppercase tracking-wide">Cost Reduction</div>
              </div>

              <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 backdrop-blur p-6 rounded-xl">
                <Sparkles className="w-8 h-8 text-purple-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.marketExpansion}%
                </div>
                <div className="text-xs text-purple-200 uppercase tracking-wide">Market Growth</div>
              </div>

              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 backdrop-blur p-6 rounded-xl">
                <Leaf className="w-8 h-8 text-green-300 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">
                  {calculations.co2Saved.toFixed(0)}t
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">CO₂ Saved</div>
              </div>
            </div>

            {/* Cost Comparison */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">Annual Cost Comparison</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={calculations.costData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="scenario" stroke="#fff" />
                  <YAxis stroke="#fff" label={{ value: '₹ Lakhs', angle: -90, position: 'insideLeft', fill: '#fff' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => [`₹${value.toFixed(1)}L`, '']}
                  />
                  <Bar dataKey="cost">
                    {calculations.costData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Cumulative Savings Timeline */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">Savings Timeline ({timeHorizon} Years)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={calculations.monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="month" stroke="#fff" tickFormatter={(val) => `${Math.floor(val / 12)}y`} />
                  <YAxis stroke="#fff" label={{ value: '₹ Lakhs', angle: -90, position: 'insideLeft', fill: '#fff' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => [`₹${value.toFixed(2)}L`, '']}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="premium" stroke="#ef4444" strokeWidth={2} name="Premium Graphene Cost" strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="ceraphene" stroke="#14b8a6" strokeWidth={2} name="Ceraphene Cost" />
                  <Line type="monotone" dataKey="savings" stroke="#10b981" strokeWidth={3} name="Cumulative Savings" />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Financial Summary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-bold text-white mb-6">Annual Breakdown</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Annual Volume</span>
                    <span className="font-bold text-white">{calculations.annualVolume.toLocaleString()} kg</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg">
                    <span className="text-sm text-red-300">Premium Cost</span>
                    <span className="font-bold text-red-400">₹{(calculations.premiumAnnualCost / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-cyan-500/10 rounded-lg">
                    <span className="text-sm text-cyan-300">Ceraphene Cost</span>
                    <span className="font-bold text-cyan-400">₹{(calculations.cerapheneAnnualCost / 100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-500/10 border-t border-green-500/30 rounded-lg">
                    <span className="text-sm text-green-300 font-bold">Annual Savings</span>
                    <span className="font-bold text-green-400">₹{(calculations.annualSavings / 100000).toFixed(2)}L</span>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-bold text-white mb-6">{timeHorizon}-Year Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Total Volume</span>
                    <span className="font-bold text-white">{calculations.totalVolume.toLocaleString()} kg</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Premium Total</span>
                    <span className="font-bold text-white">₹{(calculations.premiumTotalCost / 10000000).toFixed(2)}Cr</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Ceraphene Total</span>
                    <span className="font-bold text-white">₹{(calculations.cerapheneTotalCost / 10000000).toFixed(2)}Cr</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-500/10 border-t border-green-500/30 rounded-lg">
                    <span className="text-sm text-green-300 font-bold">Total Savings</span>
                    <span className="font-bold text-green-400">₹{(calculations.totalSavings / 10000000).toFixed(2)}Cr</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Market Democratization */}
            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border-2 border-purple-500/30 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-purple-400" />
                Market Democratization Impact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-5xl font-bold text-purple-300 mb-2">
                    {calculations.marketExpansion}%
                  </div>
                  <div className="text-sm text-purple-100">Market Expansion</div>
                  <div className="text-xs text-purple-200 mt-1">
                    vs Premium Graphene
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-purple-300 mb-2">
                    {calculations.cerapheneAccessibleMarket.toFixed(0)}×
                  </div>
                  <div className="text-sm text-purple-100">Accessible Market</div>
                  <div className="text-xs text-purple-200 mt-1">
                    More buyers can afford
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-purple-500/10 rounded-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-purple-100">
                    By reducing graphene cost from ₹{premiumGraphenePrice.toLocaleString()}/kg to ₹{ceraphenePrice.toLocaleString()}/kg, Ceraphene democratizes access to graphene technology, enabling innovation across {calculations.app.name.toLowerCase()}.
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    {calculations.totalEnergySaved.toLocaleString()}
                  </div>
                  <div className="text-sm text-green-100">kWh Energy Saved</div>
                  <div className="text-xs text-green-200 mt-1">
                    Efficient production process
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    {calculations.co2Saved.toFixed(1)}
                  </div>
                  <div className="text-sm text-green-100">Tonnes CO₂ Offset</div>
                  <div className="text-xs text-green-200 mt-1">
                    vs traditional graphene
                  </div>
                </div>
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Quality Assurance</h4>
                  <p className="text-sm text-blue-100">
                    Ceraphene maintains &gt;95% purity with 5-10 graphene layers, delivering performance comparable to premium graphene at 1/3rd the cost. Application shows {calculations.app.performanceGain} performance enhancement.
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

export default CerapheneQuotationTool;
