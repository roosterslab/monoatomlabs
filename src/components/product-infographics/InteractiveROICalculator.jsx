import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Calendar, Zap, AlertCircle } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const InteractiveROICalculator = () => {
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');
  const [inputs, setInputs] = useState({
    graphacrete: {
      volume: 1000, // m³
      cementCost: 8, // ₹/kg
      currentGrade: 30, // MPa
    },
    graffisol: {
      capacity: 100, // kW
      electricityRate: 5, // ₹/kWh
      soilingLevel: 'medium',
    },
    ceraphene: {
      units: 100, // number of applications
      competitorPrice: 15000, // ₹
      applicationSize: 50, // ml
    },
    hdgpe: {
      production: 100, // tonnes per year
      currentCost: 150, // ₹/kg
      applicationArea: 'packaging',
    },
  });

  const products = {
    graphacrete: {
      name: 'Graphacrete',
      color: '#0d9488',
      description: 'High-Performance Concrete Additive',
      inputs: [
        { key: 'volume', label: 'Concrete Volume (m³/month)', min: 100, max: 10000, step: 100 },
        { key: 'cementCost', label: 'Cement Cost (₹/kg)', min: 5, max: 15, step: 0.5 },
        { key: 'currentGrade', label: 'Current Grade (MPa)', min: 20, max: 40, step: 5 },
      ],
    },
    graffisol: {
      name: 'Graffisol',
      color: '#f59e0b',
      description: 'Solar Panel Performance Coating',
      inputs: [
        { key: 'capacity', label: 'Solar Capacity (kW)', min: 10, max: 10000, step: 10 },
        { key: 'electricityRate', label: 'Electricity Rate (₹/kWh)', min: 3, max: 10, step: 0.5 },
        {
          key: 'soilingLevel',
          label: 'Soiling Level',
          type: 'select',
          options: [
            { value: 'low', label: 'Low (Clean Area)' },
            { value: 'medium', label: 'Medium (Urban)' },
            { value: 'high', label: 'High (Industrial/Desert)' },
          ],
        },
      ],
    },
    ceraphene: {
      name: 'Ceraphene',
      color: '#8b5cf6',
      description: 'Premium Ceramic Coating',
      inputs: [
        { key: 'units', label: 'Monthly Applications', min: 10, max: 1000, step: 10 },
        { key: 'competitorPrice', label: 'Competitor Price (₹/50ml)', min: 10000, max: 20000, step: 1000 },
        { key: 'applicationSize', label: 'Application Size (ml)', min: 30, max: 100, step: 10 },
      ],
    },
    hdgpe: {
      name: 'HD-G-PE',
      color: '#06b6d4',
      description: 'Graphene Polymer Enhancer',
      inputs: [
        { key: 'production', label: 'Annual Production (tonnes)', min: 10, max: 1000, step: 10 },
        { key: 'currentCost', label: 'Current Material Cost (₹/kg)', min: 100, max: 300, step: 10 },
        {
          key: 'applicationArea',
          label: 'Application',
          type: 'select',
          options: [
            { value: 'packaging', label: 'Packaging' },
            { value: 'films', label: 'Films' },
            { value: 'pipes', label: 'Pipes' },
          ],
        },
      ],
    },
  };

  const calculateROI = useMemo(() => {
    const product = selectedProduct;
    const input = inputs[product];

    let calculations = {
      investment: 0,
      annualSavings: 0,
      paybackMonths: 0,
      fiveYearValue: 0,
      roi: 0,
      breakdown: [],
      yearlyProjection: [],
    };

    switch (product) {
      case 'graphacrete':
        const cementPerM3 = 400; // kg
        const cementSavings = 0.18; // 18%
        const monthlyCementSaved = input.volume * cementPerM3 * cementSavings;
        const monthlySavings = monthlyCementSaved * input.cementCost;
        const graphacreteAdditiveCost = input.volume * 50; // ₹50/m³ approximate

        calculations.investment = graphacreteAdditiveCost;
        calculations.annualSavings = monthlySavings * 12;
        calculations.paybackMonths = (graphacreteAdditiveCost / monthlySavings) || 0;
        calculations.fiveYearValue = calculations.annualSavings * 5 - graphacreteAdditiveCost;
        calculations.roi = ((calculations.annualSavings * 5 - graphacreteAdditiveCost) / graphacreteAdditiveCost) * 100;

        calculations.breakdown = [
          { name: 'Cement Savings', value: monthlySavings, color: '#10b981' },
          { name: 'Investment', value: graphacreteAdditiveCost, color: '#ef4444' },
        ];

        for (let year = 1; year <= 5; year++) {
          calculations.yearlyProjection.push({
            year: `Year ${year}`,
            savings: calculations.annualSavings * year,
            investment: graphacreteAdditiveCost,
            netProfit: calculations.annualSavings * year - graphacreteAdditiveCost,
          });
        }
        break;

      case 'graffisol':
        const baseGeneration = 1500; // kWh/kW/year (India average)
        const energyGain = 0.11; // 11%
        const soilingFactors = { low: 0.05, medium: 0.10, high: 0.15 };
        const soilingBenefit = soilingFactors[input.soilingLevel];
        const totalGain = energyGain + soilingBenefit;

        const annualGeneration = input.capacity * baseGeneration;
        const extraEnergy = annualGeneration * totalGain;
        const annualRevenue = extraEnergy * input.electricityRate;
        const coatingCost = input.capacity * 500; // ₹500/kW

        calculations.investment = coatingCost;
        calculations.annualSavings = annualRevenue;
        calculations.paybackMonths = (coatingCost / (annualRevenue / 12)) || 0;
        calculations.fiveYearValue = annualRevenue * 5 - coatingCost;
        calculations.roi = ((annualRevenue * 5 - coatingCost) / coatingCost) * 100;

        calculations.breakdown = [
          { name: 'Extra Energy Revenue', value: annualRevenue, color: '#10b981' },
          { name: 'Coating Cost', value: coatingCost, color: '#ef4444' },
        ];

        for (let year = 1; year <= 5; year++) {
          calculations.yearlyProjection.push({
            year: `Year ${year}`,
            savings: annualRevenue * year,
            investment: coatingCost,
            netProfit: annualRevenue * year - coatingCost,
          });
        }
        break;

      case 'ceraphene':
        const cerapheneCost = 5000; // ₹5000/50ml
        const savings = input.competitorPrice - cerapheneCost;
        const monthlySavingsCera = savings * input.units;
        const monthlyInvestment = cerapheneCost * input.units;

        calculations.investment = monthlyInvestment;
        calculations.annualSavings = monthlySavingsCera * 12;
        calculations.paybackMonths = (monthlyInvestment / monthlySavingsCera) || 0;
        calculations.fiveYearValue = calculations.annualSavings * 5;
        calculations.roi = (calculations.fiveYearValue / (monthlyInvestment * 12)) * 100;

        calculations.breakdown = [
          { name: 'Cost Savings vs Competitor', value: monthlySavingsCera, color: '#10b981' },
          { name: 'Ceraphene Cost', value: monthlyInvestment, color: '#8b5cf6' },
        ];

        for (let year = 1; year <= 5; year++) {
          calculations.yearlyProjection.push({
            year: `Year ${year}`,
            savings: monthlySavingsCera * 12 * year,
            investment: monthlyInvestment * 12,
            netProfit: monthlySavingsCera * 12 * year,
          });
        }
        break;

      case 'hdgpe':
        const performanceFactors = { packaging: 20, films: 22, pipes: 18 };
        const performanceGain = performanceFactors[input.applicationArea];
        const premiumPricing = 0.15; // 15% premium
        const extraRevenue = input.production * 1000 * input.currentCost * premiumPricing;
        const additiveCost = input.production * 1000 * 5; // ₹5/kg additive cost

        calculations.investment = additiveCost;
        calculations.annualSavings = extraRevenue;
        calculations.paybackMonths = (additiveCost / (extraRevenue / 12)) || 0;
        calculations.fiveYearValue = extraRevenue * 5 - additiveCost;
        calculations.roi = ((extraRevenue * 5 - additiveCost) / additiveCost) * 100;

        calculations.breakdown = [
          { name: 'Premium Revenue', value: extraRevenue, color: '#10b981' },
          { name: 'Additive Cost', value: additiveCost, color: '#ef4444' },
        ];

        for (let year = 1; year <= 5; year++) {
          calculations.yearlyProjection.push({
            year: `Year ${year}`,
            savings: extraRevenue * year,
            investment: additiveCost * year,
            netProfit: extraRevenue * year - additiveCost * year,
          });
        }
        break;
    }

    return calculations;
  }, [selectedProduct, inputs]);

  const product = products[selectedProduct];
  const currentInputs = inputs[selectedProduct];

  const handleInputChange = (key, value) => {
    setInputs((prev) => ({
      ...prev,
      [selectedProduct]: {
        ...prev[selectedProduct],
        [key]: value,
      },
    }));
  };

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-brand-500/30 bg-brand-500/10 backdrop-blur mb-6">
            <Calculator className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-mono text-brand-400 tracking-widest uppercase">
              ROI Calculator
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 tracking-tight">
            Calculate Your ROI
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
            See exactly how much you'll save and earn with Monoatom products
          </p>

          {/* Product Selector */}
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(products).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedProduct(key)}
                className={`px-6 py-3 rounded-sm font-mono font-semibold transition-all border ${
                  selectedProduct === key
                    ? 'bg-brand-500 text-white border-brand-400 shadow-[0_0_20px_rgba(13,148,136,0.3)]'
                    : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:bg-neutral-800 hover:border-neutral-700'
                }`}
              >
                {products[key].name}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Inputs */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-8"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-2">{product.name}</h3>
            <p className="text-neutral-400 text-sm mb-6">{product.description}</p>

            <div className="space-y-6">
              {product.inputs.map((inputField, idx) => (
                <motion.div
                  key={inputField.key}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <label className="block text-sm font-mono text-neutral-300 mb-2">
                    {inputField.label}
                  </label>
                  {inputField.type === 'select' ? (
                    <select
                      value={currentInputs[inputField.key]}
                      onChange={(e) => handleInputChange(inputField.key, e.target.value)}
                      className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-sm text-white font-mono focus:border-brand-500 focus:outline-none transition-all"
                    >
                      {inputField.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <div className="relative">
                      <input
                        type="range"
                        min={inputField.min}
                        max={inputField.max}
                        step={inputField.step}
                        value={currentInputs[inputField.key]}
                        onChange={(e) => handleInputChange(inputField.key, parseFloat(e.target.value))}
                        className="w-full h-2 bg-neutral-700 rounded-sm appearance-none cursor-pointer slider"
                        style={{
                          background: `linear-gradient(to right, ${product.color} 0%, ${product.color} ${((currentInputs[inputField.key] - inputField.min) / (inputField.max - inputField.min)) * 100}%, #404040 ${((currentInputs[inputField.key] - inputField.min) / (inputField.max - inputField.min)) * 100}%, #404040 100%)`,
                        }}
                      />
                      <div className="flex justify-between mt-2">
                        <span className="text-xs text-neutral-500 font-mono">{inputField.min}</span>
                        <span className="text-sm text-white font-mono font-bold">
                          {currentInputs[inputField.key]}
                        </span>
                        <span className="text-xs text-neutral-500 font-mono">{inputField.max}</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Results */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* ROI Cards */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-green-500/40 rounded-sm p-6 backdrop-blur"
              >
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="text-xs font-mono text-neutral-400 uppercase">5-Year ROI</span>
                </div>
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  {calculateROI.roi.toFixed(0)}%
                </div>
                <div className="text-xs text-green-400 font-mono">
                  ₹{(calculateROI.fiveYearValue / 100000).toFixed(1)}L profit
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-brand-500/20 to-purple-500/20 border border-brand-500/40 rounded-sm p-6 backdrop-blur"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-brand-400" />
                  <span className="text-xs font-mono text-neutral-400 uppercase">Payback</span>
                </div>
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  {calculateROI.paybackMonths.toFixed(1)}
                </div>
                <div className="text-xs text-brand-400 font-mono">Months</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/40 rounded-sm p-6 backdrop-blur"
              >
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign className="w-5 h-5 text-orange-400" />
                  <span className="text-xs font-mono text-neutral-400 uppercase">Investment</span>
                </div>
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  ₹{(calculateROI.investment / 1000).toFixed(0)}K
                </div>
                <div className="text-xs text-orange-400 font-mono">Initial cost</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-sm p-6 backdrop-blur"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Zap className="w-5 h-5 text-purple-400" />
                  <span className="text-xs font-mono text-neutral-400 uppercase">Annual Savings</span>
                </div>
                <div className="text-3xl font-mono font-bold text-white mb-1">
                  ₹{(calculateROI.annualSavings / 100000).toFixed(1)}L
                </div>
                <div className="text-xs text-purple-400 font-mono">Per year</div>
              </motion.div>
            </div>

            {/* Breakdown Pie Chart */}
            <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6">
              <h4 className="text-lg font-display font-bold text-white mb-4">Cost Breakdown</h4>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={calculateROI.breakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {calculateROI.breakdown.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#171717',
                      border: '1px solid #404040',
                      borderRadius: '4px',
                    }}
                    formatter={(value) => `₹${(value / 1000).toFixed(0)}K`}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-4">
                {calculateROI.breakdown.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-xs text-neutral-400 font-mono">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-Year Projection */}
            <div className="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-sm p-6">
              <h4 className="text-lg font-display font-bold text-white mb-4">5-Year Projection</h4>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={calculateROI.yearlyProjection}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                  <XAxis dataKey="year" stroke="#737373" tick={{ fill: '#737373', fontSize: 11 }} />
                  <YAxis stroke="#737373" tick={{ fill: '#737373', fontSize: 11 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#171717',
                      border: '1px solid #404040',
                      borderRadius: '4px',
                    }}
                    formatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                  />
                  <Legend wrapperStyle={{ fontSize: '12px' }} />
                  <Bar dataKey="netProfit" fill="#10b981" name="Net Profit" />
                  <Bar dataKey="savings" fill={product.color} name="Cumulative Savings" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-12 bg-neutral-900/60 border border-neutral-800 rounded-sm p-6 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-neutral-400 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-neutral-400 leading-relaxed">
            <strong className="text-white">Note:</strong> These calculations are estimates based on typical
            conditions. Actual results may vary based on specific application parameters, regional factors,
            and usage patterns. Contact our team for a detailed customized ROI analysis.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveROICalculator;
