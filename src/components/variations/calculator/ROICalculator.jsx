import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, TrendingUp, DollarSign, Calendar, Zap } from 'lucide-react';

const ROICalculator = () => {
  const [activeCalc, setActiveCalc] = useState('graphacrete');

  // Graphacrete calculator state
  const [concrete, setConcrete] = useState({ volume: 1000, currentGrade: 'M30', targetGrade: 'M50' });
  const [concreteResults, setConcreteResults] = useState(null);

  // Graffisol calculator state
  const [solar, setSolar] = useState({ capacity: 1, tariff: 4.5, irradiation: 5.5 });
  const [solarResults, setSolarResults] = useState(null);

  // Ceraphene calculator state
  const [coating, setCoating] = useState({ vehicles: 10, competitorPrice: 15000 });
  const [coatingResults, setCoatingResults] = useState(null);

  const calculateGraphacrete = () => {
    const dosage = 2; // 2L per m³
    const pricePerLiter = 235;
    const productCost = concrete.volume * dosage * pricePerLiter / 1000; // convert to thousands

    const m30Cost = concrete.volume * 4.05; // ₹4,050 per m³
    const m50Cost = concrete.volume * 4.95; // ₹4,950 per m³
    const graphacreteCost = m30Cost + productCost;
    const savings = m50Cost - graphacreteCost;
    const savingsPerCubicMeter = 430;
    const cementReduction = concrete.volume * 0.175; // 17.5% average
    const co2Saved = cementReduction * 0.9; // 0.9 tons CO₂ per ton cement

    setConcreteResults({
      productCost: productCost.toFixed(2),
      totalCost: (graphacreteCost / 1000).toFixed(2),
      standardCost: (m50Cost / 1000).toFixed(2),
      savings: (savings / 1000).toFixed(2),
      savingsPerM3: savingsPerCubicMeter,
      cementSaved: cementReduction.toFixed(1),
      co2Reduced: co2Saved.toFixed(1)
    });
  };

  const calculateGraffisol = () => {
    const efficiencyGain = 0.075; // 7.5% average
    const annualGeneration = solar.capacity * 1000 * solar.irradiation * 365; // kWh
    const additionalEnergy = annualGeneration * efficiencyGain;
    const annualRevenue = additionalEnergy * solar.tariff;
    const applicationCost = solar.capacity * 50000; // ₹50,000 per MW
    const paybackMonths = (applicationCost / (annualRevenue / 12)).toFixed(1);
    const fiveYearRevenue = annualRevenue * 5;
    const roi = ((fiveYearRevenue - applicationCost) / applicationCost * 100).toFixed(0);

    setSolarResults({
      additionalEnergy: additionalEnergy.toFixed(0),
      annualRevenue: (annualRevenue / 100000).toFixed(2),
      applicationCost: (applicationCost / 100000).toFixed(2),
      paybackMonths: paybackMonths,
      fiveYearRevenue: (fiveYearRevenue / 100000).toFixed(2),
      roi: roi
    });
  };

  const calculateCeraphene = () => {
    const ceraphenePrice = 5000;
    const competitorPrice = coating.competitorPrice;
    const totalCeraphene = coating.vehicles * ceraphenePrice;
    const totalCompetitor = coating.vehicles * competitorPrice;
    const savings = totalCompetitor - totalCeraphene;
    const savingsPercent = ((savings / totalCompetitor) * 100).toFixed(0);
    const cerapheneYears = 3.5;
    const competitorYears = 2.5;
    const costPerYear = totalCeraphene / cerapheneYears;
    const competitorCostPerYear = totalCompetitor / competitorYears;
    const annualSavings = competitorCostPerYear - costPerYear;

    setCoatingResults({
      cerapheneTotal: totalCeraphene,
      competitorTotal: totalCompetitor,
      savings: savings,
      savingsPercent: savingsPercent,
      costPerYear: costPerYear.toFixed(0),
      competitorCostPerYear: competitorCostPerYear.toFixed(0),
      annualSavings: annualSavings.toFixed(0)
    });
  };

  const calculators = {
    graphacrete: {
      name: "Graphacrete ROI Calculator",
      description: "Calculate cost savings for concrete applications",
      color: "from-orange-500 to-red-600",
      icon: Calculator
    },
    graffisol: {
      name: "Graffisol ROI Calculator",
      description: "Calculate revenue gains for solar installations",
      color: "from-blue-500 to-cyan-600",
      icon: Zap
    },
    ceraphene: {
      name: "Ceraphene ROI Calculator",
      description: "Calculate cost savings vs premium coatings",
      color: "from-purple-500 to-pink-600",
      icon: DollarSign
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-neutral-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 px-4 py-2 rounded-full mb-6"
          >
            <Calculator className="w-4 h-4 text-green-600" />
            <span className="text-sm font-bold text-green-700">ROI Calculator</span>
          </motion.div>

          <h2 className="text-5xl font-bold text-neutral-900 mb-4">
            Calculate Your Savings
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Interactive calculators to estimate ROI for your specific use case
          </p>
        </div>

        {/* Calculator Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {Object.entries(calculators).map(([key, calc]) => (
            <button
              key={key}
              onClick={() => setActiveCalc(key)}
              className={`p-6 rounded-2xl border-2 transition-all ${
                activeCalc === key
                  ? 'border-neutral-900 bg-neutral-900 text-white shadow-xl scale-105'
                  : 'border-neutral-200 bg-white text-neutral-900 hover:border-neutral-400'
              }`}
            >
              <calc.icon className="w-10 h-10 mx-auto mb-3" />
              <div className="font-bold text-center mb-2">{calc.name.split(' ')[0]}</div>
              <div className="text-sm opacity-75 text-center">{calc.description}</div>
            </button>
          ))}
        </div>

        {/* Graphacrete Calculator */}
        {activeCalc === 'graphacrete' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Input Your Requirements</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Concrete Volume (m³)
                  </label>
                  <input
                    type="number"
                    value={concrete.volume}
                    onChange={(e) => setConcrete({ ...concrete, volume: parseFloat(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-neutral-900 outline-none text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Current Grade
                  </label>
                  <select
                    value={concrete.currentGrade}
                    onChange={(e) => setConcrete({ ...concrete, currentGrade: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-neutral-900 outline-none text-lg"
                  >
                    <option value="M20">M20</option>
                    <option value="M30">M30</option>
                    <option value="M40">M40</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Target Performance
                  </label>
                  <select
                    value={concrete.targetGrade}
                    onChange={(e) => setConcrete({ ...concrete, targetGrade: e.target.value })}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-neutral-900 outline-none text-lg"
                  >
                    <option value="M40">M40</option>
                    <option value="M50">M50</option>
                    <option value="M60">M60</option>
                  </select>
                </div>

                <button
                  onClick={calculateGraphacrete}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
                >
                  Calculate Savings
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 border-2 border-orange-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Your Results</h3>

              {concreteResults ? (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-green-300">
                    <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">
                      Total Cost Savings
                    </div>
                    <div className="text-5xl font-bold text-green-600 mb-2">
                      ₹{concreteResults.savings}L
                    </div>
                    <div className="text-neutral-600">
                      vs standard {concrete.targetGrade} concrete
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold text-neutral-500 uppercase mb-1">
                        Savings per m³
                      </div>
                      <div className="text-2xl font-bold text-neutral-900">
                        ₹{concreteResults.savingsPerM3}
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold text-neutral-500 uppercase mb-1">
                        Product Cost
                      </div>
                      <div className="text-2xl font-bold text-neutral-900">
                        ₹{concreteResults.productCost}K
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold text-neutral-500 uppercase mb-1">
                        Cement Saved
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        {concreteResults.cementSaved} tons
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold text-neutral-500 uppercase mb-1">
                        CO₂ Reduced
                      </div>
                      <div className="text-2xl font-bold text-green-600">
                        {concreteResults.co2Reduced} tons
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-neutral-400">
                  <Calculator className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Enter your requirements and click Calculate to see results</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Graffisol Calculator */}
        {activeCalc === 'graffisol' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Solar Plant Details</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Plant Capacity (MW)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={solar.capacity}
                    onChange={(e) => setSolar({ ...solar, capacity: parseFloat(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-neutral-900 outline-none text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Electricity Tariff (₹/kWh)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={solar.tariff}
                    onChange={(e) => setSolar({ ...solar, tariff: parseFloat(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-neutral-900 outline-none text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Daily Solar Irradiation (kWh/m²)
                  </label>
                  <input
                    type="number"
                    step="0.1"
                    value={solar.irradiation}
                    onChange={(e) => setSolar({ ...solar, irradiation: parseFloat(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-neutral-900 outline-none text-lg"
                  />
                </div>

                <button
                  onClick={calculateGraffisol}
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
                >
                  Calculate ROI
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Your ROI</h3>

              {solarResults ? (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-green-300">
                    <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">
                      Payback Period
                    </div>
                    <div className="text-5xl font-bold text-green-600 mb-2">
                      {solarResults.paybackMonths} months
                    </div>
                    <div className="text-neutral-600">
                      Typically 18 months for most installations
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold text-neutral-500 uppercase mb-1">
                        Additional Energy/Year
                      </div>
                      <div className="text-xl font-bold text-neutral-900">
                        {solarResults.additionalEnergy} kWh
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold text-neutral-500 uppercase mb-1">
                        Annual Revenue
                      </div>
                      <div className="text-xl font-bold text-green-600">
                        ₹{solarResults.annualRevenue}L
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold text-neutral-500 uppercase mb-1">
                        Application Cost
                      </div>
                      <div className="text-xl font-bold text-neutral-900">
                        ₹{solarResults.applicationCost}L
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold text-neutral-500 uppercase mb-1">
                        5-Year ROI
                      </div>
                      <div className="text-xl font-bold text-green-600">
                        {solarResults.roi}%
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-neutral-400">
                  <Zap className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Enter your plant details and click Calculate to see ROI</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Ceraphene Calculator */}
        {activeCalc === 'ceraphene' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <div className="bg-white border-2 border-neutral-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Coating Requirements</h3>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Number of Vehicles
                  </label>
                  <input
                    type="number"
                    value={coating.vehicles}
                    onChange={(e) => setCoating({ ...coating, vehicles: parseInt(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-neutral-900 outline-none text-lg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-neutral-700 mb-2">
                    Competitor Price (₹ per vehicle)
                  </label>
                  <input
                    type="number"
                    value={coating.competitorPrice}
                    onChange={(e) => setCoating({ ...coating, competitorPrice: parseFloat(e.target.value) || 0 })}
                    className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg focus:border-neutral-900 outline-none text-lg"
                  />
                  <p className="text-xs text-neutral-500 mt-2">
                    Premium brands: ₹12,000-18,000 per vehicle
                  </p>
                </div>

                <button
                  onClick={calculateCeraphene}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all"
                >
                  Calculate Savings
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-neutral-900">Cost Comparison</h3>

              {coatingResults ? (
                <div className="space-y-6">
                  <div className="bg-white rounded-xl p-6 border-2 border-green-300">
                    <div className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-2">
                      Total Savings
                    </div>
                    <div className="text-5xl font-bold text-green-600 mb-2">
                      ₹{(coatingResults.savings / 1000).toFixed(0)}K
                    </div>
                    <div className="text-neutral-600">
                      {coatingResults.savingsPercent}% cost advantage
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold text-neutral-500 uppercase mb-1">
                        Ceraphene Total
                      </div>
                      <div className="text-xl font-bold text-green-600">
                        ₹{(coatingResults.cerapheneTotal / 1000).toFixed(0)}K
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold text-neutral-500 uppercase mb-1">
                        Competitor Total
                      </div>
                      <div className="text-xl font-bold text-neutral-600">
                        ₹{(coatingResults.competitorTotal / 1000).toFixed(0)}K
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold text-neutral-500 uppercase mb-1">
                        Cost/Year (Ceraphene)
                      </div>
                      <div className="text-xl font-bold text-green-600">
                        ₹{(coatingResults.costPerYear / 1000).toFixed(0)}K
                      </div>
                    </div>

                    <div className="bg-white rounded-xl p-4">
                      <div className="text-xs font-bold text-neutral-500 uppercase mb-1">
                        Cost/Year (Competitor)
                      </div>
                      <div className="text-xl font-bold text-neutral-600">
                        ₹{(coatingResults.competitorCostPerYear / 1000).toFixed(0)}K
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-neutral-400">
                  <DollarSign className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <p>Enter your requirements and click Calculate to see savings</p>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-16 p-10 bg-neutral-900 text-white rounded-2xl">
          <h3 className="text-3xl font-bold mb-4">Need a Custom Calculation?</h3>
          <p className="text-neutral-300 mb-6 max-w-2xl mx-auto">
            Our team can provide detailed ROI analysis specific to your project requirements
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-neutral-200 transition-all">
            Request Custom ROI Analysis
          </button>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
