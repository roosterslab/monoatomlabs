import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Leaf, Building2, Sun, TrendingUp, Download, DollarSign } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend } from 'recharts';

const CarbonCreditCalculator = () => {
  const [product, setProduct] = useState('graphacrete');
  const [projectSize, setProjectSize] = useState(10000); // volume/capacity
  const [creditPrice, setCreditPrice] = useState(1500); // ₹ per tonne CO2

  const calculations = useMemo(() => {
    let co2Reduction = 0;
    let unit = '';
    let details = {};

    if (product === 'graphacrete') {
      // Concrete: CO2 from cement reduction
      const cementReduction = 0.17; // 17% average
      const cementPerM3 = 7.5 * 50; // 7.5 bags × 50kg
      const cementSaved = projectSize * cementPerM3 * cementReduction;
      const co2PerKgCement = 0.9; // kg
      co2Reduction = (cementSaved * co2PerKgCement) / 1000; // tonnes
      unit = 'm³ concrete';
      details = {
        cementSaved: cementSaved / 1000,
        projectSize,
        unit,
      };
    } else if (product === 'graffisol') {
      // Solar: CO2 from additional clean energy
      const annualGeneration = projectSize * 1500; // kWh
      const energyGain = 0.11;
      const additionalEnergy = annualGeneration * energyGain;
      const years = 10;
      const totalAdditionalEnergy = additionalEnergy * years;
      const co2PerKWh = 0.82; // kg (India grid)
      co2Reduction = (totalAdditionalEnergy * co2PerKWh) / 1000; // tonnes
      unit = 'kW solar capacity';
      details = {
        energyGenerated: totalAdditionalEnergy / 1000, // MWh
        projectSize,
        years,
        unit,
      };
    } else if (product === 'ceraphene') {
      // Graphene: CO2 from energy-efficient production
      const energySavedPerKg = 50; // kWh
      const totalEnergySaved = projectSize * energySavedPerKg;
      const co2PerKWh = 0.82; // kg
      co2Reduction = (totalEnergySaved * co2PerKWh) / 1000; // tonnes
      unit = 'kg graphene';
      details = {
        energySaved: totalEnergySaved / 1000, // MWh
        projectSize,
        unit,
      };
    } else if (product === 'hdgpe') {
      // Polymer: CO2 from material reduction
      const thicknessReduction = 0.15; // 15%
      const materialSaved = projectSize * 1000 * thicknessReduction; // kg
      const co2PerKgHDPE = 1.9; // kg
      co2Reduction = (materialSaved * co2PerKgHDPE) / 1000; // tonnes
      unit = 'tonnes polymer';
      details = {
        materialSaved: materialSaved / 1000,
        projectSize,
        unit,
      };
    }

    // Carbon credit value
    const creditValue = co2Reduction * creditPrice;

    // Equivalents
    const treesEquivalent = Math.round((co2Reduction * 1000) / 21); // 21kg CO2/tree/year
    const carsOffRoad = Math.round(co2Reduction / 4.6); // 4.6 tonnes CO2/car/year
    const homesEnergy = Math.round((co2Reduction * 1000) / 8100); // 8100kg CO2/home/year

    // Breakdown
    const breakdown = [
      { name: 'Verified Credits', value: co2Reduction * 0.7, color: '#10b981' },
      { name: 'Under Review', value: co2Reduction * 0.2, color: '#f59e0b' },
      { name: 'Future Potential', value: co2Reduction * 0.1, color: '#6366f1' },
    ];

    // Timeline (5 years)
    const timeline = [];
    for (let year = 1; year <= 5; year++) {
      timeline.push({
        year,
        credits: (co2Reduction / 5) * year,
        value: ((creditValue / 5) * year) / 100000,
      });
    }

    return {
      co2Reduction,
      creditValue,
      treesEquivalent,
      carsOffRoad,
      homesEnergy,
      breakdown,
      timeline,
      details,
    };
  }, [product, projectSize, creditPrice]);

  const products = [
    { id: 'graphacrete', name: 'Graphacrete', icon: Building2, unit: 'm³', max: 100000, step: 1000 },
    { id: 'graffisol', name: 'Graffisol', icon: Sun, unit: 'kW', max: 10000, step: 100 },
    { id: 'ceraphene', name: 'Ceraphene', icon: Leaf, unit: 'kg', max: 5000, step: 100 },
    { id: 'hdgpe', name: 'HD-G-PE', icon: TrendingUp, unit: 'tonnes', max: 500, step: 10 },
  ];

  const currentProduct = products.find((p) => p.id === product);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-green-400/50 bg-green-400/10 backdrop-blur mb-6">
            <Leaf className="w-4 h-4 text-green-300 animate-pulse" />
            <span className="text-xs font-bold text-green-300 tracking-wide uppercase">
              Carbon Credit Calculator
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Environmental Impact & Credits
          </h1>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Calculate carbon credits and environmental equivalents from your project
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Inputs */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-lg font-display font-bold text-white mb-4">Product Selection</h3>
              <div className="space-y-3">
                {products.map((prod) => {
                  const Icon = prod.icon;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => {
                        setProduct(prod.id);
                        setProjectSize(prod.max / 10);
                      }}
                      className={`w-full flex items-center gap-3 p-4 rounded-lg transition-all ${
                        product === prod.id
                          ? 'bg-green-500 text-white'
                          : 'bg-white/5 text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                      <span className="font-semibold">{prod.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-green-200 mb-3 block">
                Project Size ({currentProduct.unit})
              </label>
              <input
                type="range"
                min={currentProduct.step}
                max={currentProduct.max}
                step={currentProduct.step}
                value={projectSize}
                onChange={(e) => setProjectSize(Number(e.target.value))}
                className="w-full accent-green-500"
              />
              <div className="text-3xl font-bold text-white mt-2">
                {projectSize.toLocaleString()} {currentProduct.unit}
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <label className="text-sm text-green-200 mb-3 block">
                Carbon Credit Price (₹/tonne CO₂)
              </label>
              <input
                type="range"
                min="500"
                max="3000"
                step="100"
                value={creditPrice}
                onChange={(e) => setCreditPrice(Number(e.target.value))}
                className="w-full accent-green-500"
              />
              <div className="text-2xl font-bold text-white mt-2">
                ₹{creditPrice.toLocaleString()}/tonne
              </div>
            </div>

            <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all font-semibold">
              <Download className="w-4 h-4" />
              Download Certificate
            </button>
          </div>

          {/* Right: Results */}
          <div className="lg:col-span-2 space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/30 backdrop-blur p-6 rounded-xl">
                <Leaf className="w-8 h-8 text-green-300 mb-3" />
                <div className="text-4xl font-bold text-white mb-1">
                  {calculations.co2Reduction.toFixed(1)}
                </div>
                <div className="text-sm text-green-200">Tonnes CO₂ Reduced</div>
              </div>

              <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500/30 backdrop-blur p-6 rounded-xl">
                <DollarSign className="w-8 h-8 text-emerald-300 mb-3" />
                <div className="text-4xl font-bold text-white mb-1">
                  ₹{(calculations.creditValue / 100000).toFixed(1)}L
                </div>
                <div className="text-sm text-emerald-200">Credit Value</div>
              </div>
            </div>

            {/* Credit Breakdown */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Carbon Credit Breakdown
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResponsiveContainer width="100%" height={200}>
                  <PieChart>
                    <Pie
                      data={calculations.breakdown}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {calculations.breakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                      formatter={(value) => [`${value.toFixed(1)} tonnes`, '']}
                    />
                  </PieChart>
                </ResponsiveContainer>

                <div className="space-y-3">
                  {calculations.breakdown.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-sm text-white">{item.name}</span>
                      </div>
                      <span className="text-sm font-bold text-white">{item.value.toFixed(1)}t</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 5-Year Timeline */}
            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                5-Year Carbon Credit Accumulation
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={calculations.timeline}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
                  <XAxis dataKey="year" stroke="#fff" label={{ value: 'Year', position: 'insideBottom', offset: -5, fill: '#fff' }} />
                  <YAxis stroke="#fff" />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #404040', borderRadius: '8px' }}
                  />
                  <Legend />
                  <Bar dataKey="credits" fill="#10b981" name="CO₂ Credits (tonnes)" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Environmental Equivalents */}
            <div className="bg-gradient-to-br from-teal-500/20 to-cyan-500/20 border-2 border-teal-500/30 rounded-xl p-6">
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Environmental Equivalents
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-5xl mb-2">🌳</div>
                  <div className="text-4xl font-bold text-teal-300 mb-2">
                    {calculations.treesEquivalent.toLocaleString()}
                  </div>
                  <div className="text-sm text-white">Trees Planted (per year)</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-2">🚗</div>
                  <div className="text-4xl font-bold text-teal-300 mb-2">
                    {calculations.carsOffRoad.toLocaleString()}
                  </div>
                  <div className="text-sm text-white">Cars Off Road (per year)</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-2">🏠</div>
                  <div className="text-4xl font-bold text-teal-300 mb-2">
                    {calculations.homesEnergy.toLocaleString()}
                  </div>
                  <div className="text-sm text-white">Homes' Energy (per year)</div>
                </div>
              </div>
            </div>

            {/* Certification Info */}
            <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
              <h4 className="text-lg font-bold text-white mb-3">Carbon Credit Certification</h4>
              <p className="text-sm text-blue-100 mb-4">
                Carbon credits calculated based on verified methodologies. Credits can be registered under:
              </p>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-blue-500/10 rounded-lg text-sm text-white">
                  ✓ Verified Carbon Standard (VCS)
                </div>
                <div className="p-3 bg-blue-500/10 rounded-lg text-sm text-white">
                  ✓ Gold Standard
                </div>
                <div className="p-3 bg-blue-500/10 rounded-lg text-sm text-white">
                  ✓ India Carbon Market
                </div>
                <div className="p-3 bg-blue-500/10 rounded-lg text-sm text-white">
                  ✓ ISO 14064 Compliant
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarbonCreditCalculator;
