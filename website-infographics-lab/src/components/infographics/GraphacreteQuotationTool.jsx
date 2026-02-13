import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Building2, DollarSign, Leaf, TrendingUp, Download, Calendar, CheckCircle2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, LineChart, Line, PieChart, Pie, Cell } from 'recharts';

const GraphacreteQuotationTool = () => {
  const [projectName, setProjectName] = useState('');
  const [projectType, setProjectType] = useState('commercial');
  const [concreteGrade, setConcreteGrade] = useState('M50');
  const [volume, setVolume] = useState(10000); // m³
  const [cementCost, setCementCost] = useState(400); // ₹ per bag
  const [timeHorizon, setTimeHorizon] = useState(5); // years

  const calculations = useMemo(() => {
    // Traditional mix design (bags per m³)
    const traditionalMix = {
      M30: { cementBags: 6.0, strength: 30 },
      M40: { cementBags: 7.0, strength: 40 },
      M50: { cementBags: 8.5, strength: 50 },
      M60: { cementBags: 10.0, strength: 60 },
    };

    // Graphacrete mix (achieve higher grade with lower cement)
    const graphacreteMix = {
      M30: { baseMix: 'M20', cementBags: 5.0, graphacreteDosage: 0.03, reduction: 16.7 },
      M40: { baseMix: 'M30', cementBags: 5.8, graphacreteDosage: 0.03, reduction: 17.1 },
      M50: { baseMix: 'M30', cementBags: 6.8, graphacreteDosage: 0.04, reduction: 20.0 },
      M60: { baseMix: 'M40', cementBags: 8.0, graphacreteDosage: 0.05, reduction: 20.0 },
    };

    const traditional = traditionalMix[concreteGrade];
    const graphacrete = graphacreteMix[concreteGrade];

    // Cost calculations per m³
    const traditionalCementCost = traditional.cementBags * cementCost;
    const graphacreteCementCost = graphacrete.cementBags * cementCost;
    const graphacreteProductCost = graphacrete.cementBags * 50 * graphacrete.graphacreteDosage * 5; // ₹5/gram
    const graphacreteTotalCost = graphacreteCementCost + graphacreteProductCost;

    // Total project costs
    const traditionalProjectCost = traditionalCementCost * volume;
    const graphacreteProjectCost = graphacreteTotalCost * volume;
    const totalSavings = traditionalProjectCost - graphacreteProjectCost;
    const savingsPerM3 = traditionalCementCost - graphacreteTotalCost;

    // ROI calculations
    const graphacreteInvestment = graphacreteProductCost * volume;
    const roi = ((totalSavings / graphacreteInvestment) * 100).toFixed(0);
    const paybackMonths = (graphacreteInvestment / (totalSavings / 12)).toFixed(1);

    // Environmental impact
    const cementSavedBags = (traditional.cementBags - graphacrete.cementBags) * volume;
    const cementSavedTonnes = (cementSavedBags * 50) / 1000; // 50kg per bag
    const co2Reduction = cementSavedTonnes * 0.9; // 0.9 tonnes CO2 per tonne cement
    const treesEquivalent = (co2Reduction * 1000 / 21).toFixed(0); // 21kg CO2/tree/year
    const carsOffRoad = (co2Reduction / 4.6).toFixed(0); // 4.6 tonnes CO2/car/year

    // Timeline projection
    const timeline = [];
    for (let year = 0; year <= timeHorizon; year++) {
      const cumulativeSavings = totalSavings * (year / timeHorizon);
      const netProfit = cumulativeSavings - graphacreteInvestment;
      timeline.push({
        year,
        savings: cumulativeSavings / 100000,
        investment: graphacreteInvestment / 100000,
        netProfit: netProfit / 100000,
      });
    }

    // Cost breakdown
    const costBreakdown = [
      { name: 'Cement Cost', traditional: traditionalCementCost, graphacrete: graphacreteCementCost },
      { name: 'Graphacrete', traditional: 0, graphacrete: graphacreteProductCost },
      { name: 'Total', traditional: traditionalCementCost, graphacrete: graphacreteTotalCost },
    ];

    // Pie chart data
    const pieData = [
      { name: 'Cement Cost', value: graphacreteCementCost, color: '#0d9488' },
      { name: 'Graphacrete', value: graphacreteProductCost, color: '#14b8a6' },
    ];

    return {
      traditional,
      graphacrete,
      traditionalCementCost,
      graphacreteTotalCost,
      savingsPerM3,
      traditionalProjectCost,
      graphacreteProjectCost,
      totalSavings,
      graphacreteInvestment,
      roi,
      paybackMonths,
      cementSavedBags,
      cementSavedTonnes,
      co2Reduction,
      treesEquivalent,
      carsOffRoad,
      timeline,
      costBreakdown,
      pieData,
    };
  }, [concreteGrade, volume, cementCost, timeHorizon]);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-purple-400/50 bg-purple-400/10 backdrop-blur mb-6">
            <Building2 className="w-4 h-4 text-purple-300 animate-pulse" />
            <span className="text-xs font-bold text-purple-300 tracking-wide uppercase">
              Graphacrete Quotation Tool
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Project Quotation & ROI
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Complete cost analysis, ROI projections, and environmental impact assessment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Project Inputs */}
          <div className="lg:col-span-1 space-y-6">
            {/* Project Details */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-white mb-4">Project Details</h3>

              <div className="space-y-4">
                <div>
                  <label className="text-sm text-purple-200 mb-2 block">Project Name</label>
                  <input
                    type="text"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                    placeholder="e.g., Tower A Construction"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:border-purple-400"
                  />
                </div>

                <div>
                  <label className="text-sm text-purple-200 mb-2 block">Project Type</label>
                  <select
                    value={projectType}
                    onChange={(e) => setProjectType(e.target.value)}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="commercial">Commercial Building</option>
                    <option value="residential">Residential Project</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="industrial">Industrial</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-purple-200 mb-2 block">Target Concrete Grade</label>
                  <select
                    value={concreteGrade}
                    onChange={(e) => setConcreteGrade(e.target.value)}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-purple-400"
                  >
                    <option value="M30">M30</option>
                    <option value="M40">M40</option>
                    <option value="M50">M50</option>
                    <option value="M60">M60</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Volume */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-purple-200 mb-3 block">Concrete Volume (m³)</label>
              <input
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="text-3xl font-bold text-white mt-2">
                {volume.toLocaleString()} m³
              </div>
            </div>

            {/* Cement Cost */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-purple-200 mb-3 block">Cement Cost (₹/bag)</label>
              <input
                type="range"
                min="300"
                max="600"
                step="10"
                value={cementCost}
                onChange={(e) => setCementCost(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="text-2xl font-bold text-white mt-2">₹{cementCost}/bag</div>
            </div>

            {/* Time Horizon */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-purple-200 mb-3 block">Analysis Period (years)</label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={timeHorizon}
                onChange={(e) => setTimeHorizon(Number(e.target.value))}
                className="w-full accent-purple-500"
              />
              <div className="text-2xl font-bold text-white mt-2">{timeHorizon} years</div>
            </div>

            {/* Export Button */}
            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-all font-semibold">
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
                  ₹{(calculations.totalSavings / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">Total Savings</div>
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
                  {calculations.co2Reduction.toFixed(0)}t
                </div>
                <div className="text-xs text-green-200 uppercase tracking-wide">CO₂ Saved</div>
              </div>
            </div>

            {/* Cost Comparison Chart */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">Cost Comparison (per m³)</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={calculations.costBreakdown}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="name" stroke="#fff" />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => [`₹${value.toFixed(0)}`, '']}
                  />
                  <Legend />
                  <Bar dataKey="traditional" fill="#ef4444" name="Traditional Mix" />
                  <Bar dataKey="graphacrete" fill="#14b8a6" name="With Graphacrete" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Cost Breakdown Pie */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-bold text-white mb-6">Cost Breakdown</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={calculations.pieData}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {calculations.pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                      formatter={(value) => [`₹${value.toFixed(0)}/m³`, '']}
                    />
                  </PieChart>
                </ResponsiveContainer>
                <div className="mt-4 space-y-2">
                  {calculations.pieData.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-white">{item.name}</span>
                      </div>
                      <span className="text-sm font-bold text-white">₹{item.value.toFixed(0)}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
                <h3 className="text-xl font-display font-bold text-white mb-6">Project Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Volume</span>
                    <span className="font-bold text-white">{volume.toLocaleString()} m³</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Target Grade</span>
                    <span className="font-bold text-white">{concreteGrade}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-sm text-neutral-300">Base Mix</span>
                    <span className="font-bold text-white">{calculations.graphacrete.baseMix}</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                    <span className="text-sm text-green-300">Cement Reduction</span>
                    <span className="font-bold text-green-400">{calculations.graphacrete.reduction.toFixed(1)}%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg">
                    <span className="text-sm text-green-300">Savings per m³</span>
                    <span className="font-bold text-green-400">₹{calculations.savingsPerM3.toFixed(0)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* ROI Timeline */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">ROI Timeline ({timeHorizon} Years)</h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={calculations.timeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#fff" label={{ value: 'Year', position: 'insideBottom', offset: -5, fill: '#fff' }} />
                  <YAxis stroke="#fff" label={{ value: 'Amount (₹ Lakhs)', angle: -90, position: 'insideLeft', fill: '#fff' }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                    formatter={(value) => [`₹${value.toFixed(2)}L`, '']}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="investment" stroke="#ef4444" strokeWidth={2} name="Investment" strokeDasharray="5 5" />
                  <Line type="monotone" dataKey="savings" stroke="#14b8a6" strokeWidth={2} name="Cumulative Savings" />
                  <Line type="monotone" dataKey="netProfit" stroke="#10b981" strokeWidth={3} name="Net Profit" />
                </LineChart>
              </ResponsiveContainer>
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
                    {calculations.cementSavedTonnes.toFixed(0)}
                  </div>
                  <div className="text-sm text-green-100">Tonnes Cement Saved</div>
                  <div className="text-xs text-green-200 mt-1">
                    {calculations.cementSavedBags.toFixed(0)} bags
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-300 mb-2">
                    {calculations.co2Reduction.toFixed(1)}
                  </div>
                  <div className="text-sm text-green-100">Tonnes CO₂ Reduced</div>
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
                    This project contributes to India's net-zero carbon goals and qualifies for green building certifications (IGBC, LEED).
                  </div>
                </div>
              </div>
            </div>

            {/* NABL Certification */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="w-8 h-8 text-blue-400 flex-shrink-0" />
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">NABL Certified Performance</h4>
                  <p className="text-sm text-blue-100">
                    All strength claims validated by NABL-accredited testing. Graphacrete delivers {concreteGrade} performance using {calculations.graphacrete.baseMix} base mix, reducing cement consumption by {calculations.graphacrete.reduction.toFixed(1)}% while maintaining structural integrity.
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

export default GraphacreteQuotationTool;
