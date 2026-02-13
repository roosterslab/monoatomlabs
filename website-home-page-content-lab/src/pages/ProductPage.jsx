import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Package, TrendingUp, Zap, Shield, DollarSign, CheckCircle2, ArrowRight, Calculator } from 'lucide-react';

const ProductPage = () => {
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');
  const [selectedHero, setSelectedHero] = useState('performance');
  const [calculatorValues, setCalculatorValues] = useState({
    volume: 100,
    currentGrade: 'M30',
  });

  const products = {
    graphacrete: {
      name: 'Graphacrete',
      tagline: 'Graphene-Enhanced Concrete Additive',
      category: 'Construction Materials',
    },
    graffisol: {
      name: 'Graffisol',
      tagline: 'Graphene Anti-Reflective Solar Coating',
      category: 'Solar Energy',
    },
    ceraphene: {
      name: 'Ceraphene',
      tagline: 'Graphene-Enhanced Ceramic Coating',
      category: 'Industrial Coatings',
    },
    'hd-g-pe': {
      name: 'HD-G-PE',
      tagline: 'High-Density Graphene Polyethylene',
      category: 'Advanced Polymers',
    },
  };

  const heroVariations = {
    performance: {
      title: 'Performance-First Hero',
      headline: '40-50% Strength Increase',
      subheadline: 'Transform M30 concrete to M50 performance with Graphacrete',
      metrics: [
        { value: '40-50%', label: 'Compressive Strength Gain' },
        { value: '30-45%', label: 'Water Resistance Boost' },
        { value: '15-20%', label: 'Cement Reduction Possible' },
        { value: '₹430/m³', label: 'Average Cost Savings' },
      ],
    },
    'cost-savings': {
      title: 'Cost-Savings First',
      headline: 'Save ₹430 per Cubic Meter',
      subheadline: '15-20% cement reduction + superior performance',
      metrics: [
        { value: '₹430/m³', label: 'Material Cost Savings' },
        { value: '15-20%', label: 'Cement Usage Reduction' },
        { value: '6-12 months', label: 'Typical ROI Period' },
        { value: '40-50%', label: 'Bonus: Strength Increase' },
      ],
    },
    'problem-solution': {
      title: 'Problem-Solution Approach',
      headline: 'The Concrete Durability Crisis',
      subheadline: 'Premature degradation costs billions in repairs and replacements annually',
      metrics: [
        { value: '30%', label: 'Infrastructure Failing Early' },
        { value: '₹1000s/m²', label: 'Repair Costs' },
        { value: 'Solution', label: 'Graphacrete Prevents Degradation' },
        { value: 'Proven', label: '50+ Field Projects' },
      ],
    },
    validation: {
      title: 'Validation-Led Hero',
      headline: 'NABL Certified • Field Tested • Customer Validated',
      subheadline: 'Not just lab performance—real-world proven across 50+ projects',
      metrics: [
        { value: 'NABL', label: 'Certified Testing' },
        { value: '50+', label: 'Field Projects' },
        { value: '3 Years', label: 'Market Track Record' },
        { value: '100%', label: 'Performance Guarantee' },
      ],
    },
  };

  const benefits = [
    {
      icon: TrendingUp,
      title: '40-50% Compressive Strength Increase',
      description: 'Upgrade M30 to M50 performance or reduce cement by 15-20% while maintaining strength',
      proof: 'NABL certified testing confirms consistent strength gains',
    },
    {
      icon: Shield,
      title: '30-45% Water Resistance Improvement',
      description: 'Dramatically reduced permeability extends structure lifespan by 2-3x',
      proof: 'Field validation in coastal and high-moisture environments',
    },
    {
      icon: DollarSign,
      title: '₹430/m³ Average Cost Savings',
      description: '15-20% cement reduction + reduced maintenance = significant lifetime savings',
      proof: 'Documented ROI across 50+ commercial projects',
    },
    {
      icon: CheckCircle2,
      title: 'Easy Integration',
      description: 'No equipment changes required. Works with existing batching processes',
      proof: 'Implemented by 30+ ready-mix producers nationwide',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Nano-Scale Reinforcement',
      description: 'Graphene platelets disperse throughout cement matrix, creating molecular-level reinforcement',
    },
    {
      step: 2,
      title: 'Pore Structure Optimization',
      description: 'Fills micro-voids and refines pore structure, dramatically reducing permeability',
    },
    {
      step: 3,
      title: 'Hydration Enhancement',
      description: 'Catalyzes cement hydration, creating denser, stronger C-S-H gel formation',
    },
    {
      step: 4,
      title: 'Long-Term Durability',
      description: 'Blocks water and chloride ingress, preventing corrosion and degradation over time',
    },
  ];

  const applications = [
    {
      title: 'High-Rise Construction',
      description: 'Achieve M50-M60 strength for tall buildings without expensive special cements',
      savings: '₹150-200/m³ vs. traditional high-strength concrete',
    },
    {
      title: 'Infrastructure Projects',
      description: 'Bridges, flyovers, and tunnels with extended lifespan and reduced maintenance',
      savings: '2-3x longer service life, 40-60% lower lifetime costs',
    },
    {
      title: 'Coastal Structures',
      description: 'Superior water and chloride resistance for marine and coastal environments',
      savings: 'Eliminates premature degradation, saves millions in repairs',
    },
    {
      title: 'Precast Elements',
      description: 'Faster demolding, higher strength precast components with cement savings',
      savings: '₹430/m³ material savings + 20-30% faster production',
    },
  ];

  const calculateROI = () => {
    const volume = calculatorValues.volume;
    const graphacreteCost = volume * 150; // ₹150/m³
    const cementSavings = volume * 430; // ₹430/m³ savings
    const netSavings = cementSavings - graphacreteCost;
    const roiPercent = ((netSavings / graphacreteCost) * 100).toFixed(0);

    return {
      graphacreteCost,
      cementSavings,
      netSavings,
      roiPercent,
    };
  };

  const roi = calculateROI();

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="border-b border-neutral-200 sticky top-0 bg-white/80 backdrop-blur-xl z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Package className="w-6 h-6" />
              <span className="font-bold text-lg">Product Page Variations</span>
            </div>
            <div className="text-sm text-neutral-500">Content Lab</div>
          </div>
        </div>
      </nav>

      {/* Product Selector */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">
            Select Product
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {Object.entries(products).map(([key, product]) => (
              <button
                key={key}
                onClick={() => setSelectedProduct(key)}
                className={`p-4 rounded-lg text-left transition-all ${
                  selectedProduct === key
                    ? 'bg-black text-white'
                    : 'bg-white border border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="font-bold text-sm mb-1">{product.name}</div>
                <div className="text-xs opacity-75">{product.category}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Variation Selector */}
      <section className="border-b border-neutral-200 bg-neutral-50 py-6 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-bold text-neutral-500 uppercase tracking-wider mb-4">
            Select Hero Variation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            {Object.entries(heroVariations).map(([key, variation]) => (
              <button
                key={key}
                onClick={() => setSelectedHero(key)}
                className={`p-4 rounded-lg text-left transition-all ${
                  selectedHero === key
                    ? 'bg-black text-white'
                    : 'bg-white border border-neutral-200 hover:border-neutral-300'
                }`}
              >
                <div className="text-sm font-bold">{variation.title}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={selectedHero}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-sm font-bold text-neutral-400 uppercase tracking-wider mb-2">
              {products[selectedProduct].category}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {products[selectedProduct].name}
            </h1>
            <p className="text-2xl text-neutral-300 mb-12">
              {products[selectedProduct].tagline}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {heroVariations[selectedHero].metrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">
                    {metric.value}
                  </div>
                  <div className="text-sm text-neutral-400">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-black px-8 py-4 rounded-lg font-bold hover:bg-neutral-100 transition-colors flex items-center justify-center gap-2">
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">
                Download Technical Specs
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Key Benefits</h2>
            <p className="text-xl text-neutral-600">
              NABL certified performance improvements
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200"
              >
                <benefit.icon className="w-12 h-12 text-black mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-bold text-black mb-4">{benefit.title}</h3>
                <p className="text-neutral-600 mb-4">{benefit.description}</p>
                <div className="flex items-start gap-2 text-sm text-green-700">
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>{benefit.proof}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">How It Works</h2>
            <p className="text-xl text-neutral-600">
              The science behind {products[selectedProduct].name}
            </p>
          </div>

          <div className="space-y-8">
            {howItWorks.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-lg text-neutral-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Applications</h2>
            <p className="text-xl text-neutral-600">
              Real-world use cases for {products[selectedProduct].name}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {applications.map((app, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-8 shadow-sm border border-neutral-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-2xl font-bold text-black mb-4">{app.title}</h3>
                <p className="text-neutral-600 mb-6">{app.description}</p>
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="text-sm font-bold text-green-800 mb-1">Value Proposition</div>
                  <div className="text-green-700">{app.savings}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-black mb-4">ROI Calculator</h2>
            <p className="text-xl text-neutral-600">
              See your potential savings with {products[selectedProduct].name}
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-neutral-200">
            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-2">
                  Concrete Volume (m³)
                </label>
                <input
                  type="number"
                  value={calculatorValues.volume}
                  onChange={(e) =>
                    setCalculatorValues({ ...calculatorValues, volume: parseInt(e.target.value) || 0 })
                  }
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg text-lg font-bold focus:border-black outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-2">
                  Current Concrete Grade
                </label>
                <select
                  value={calculatorValues.currentGrade}
                  onChange={(e) =>
                    setCalculatorValues({ ...calculatorValues, currentGrade: e.target.value })
                  }
                  className="w-full px-4 py-3 border-2 border-neutral-300 rounded-lg text-lg font-bold focus:border-black outline-none"
                >
                  <option value="M20">M20</option>
                  <option value="M25">M25</option>
                  <option value="M30">M30</option>
                  <option value="M35">M35</option>
                  <option value="M40">M40</option>
                </select>
              </div>
            </div>

            <div className="border-t-2 border-neutral-200 pt-8 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Graphacrete Cost</span>
                <span className="text-2xl font-bold text-neutral-900">
                  ₹{roi.graphacreteCost.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Cement Savings</span>
                <span className="text-2xl font-bold text-green-600">
                  ₹{roi.cementSavings.toLocaleString()}
                </span>
              </div>
              <div className="border-t-2 border-neutral-200 pt-4 flex justify-between items-center">
                <span className="text-lg font-bold text-neutral-900">Net Savings</span>
                <span className="text-3xl font-bold text-green-600">
                  ₹{roi.netSavings.toLocaleString()}
                </span>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                <div className="text-sm font-bold text-green-800 mb-1">ROI</div>
                <div className="text-4xl font-bold text-green-600">{roi.roiPercent}%</div>
              </div>
            </div>

            <button className="w-full mt-8 bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
              Request Detailed Quote
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-black mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-neutral-600 mb-8">
            Join 50+ companies already using {products[selectedProduct].name}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2">
              Schedule Trial
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-bold hover:bg-neutral-50 transition-colors">
              Download Case Studies
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
