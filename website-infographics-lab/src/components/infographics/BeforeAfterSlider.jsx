import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeftRight, TrendingDown, TrendingUp, Zap } from 'lucide-react';
import { products } from '../../data/monoatomData';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percentage)));
  };

  const scenarios = {
    graphacrete: {
      before: {
        title: 'Traditional Concrete (M30)',
        color: 'from-red-600 to-orange-600',
        stats: [
          { label: 'Compressive Strength', value: '30 MPa', icon: TrendingDown },
          { label: 'Cement Required', value: '100%', icon: TrendingUp },
          { label: 'Water Permeability', value: 'High', icon: TrendingUp },
          { label: 'Cost per m³', value: '₹5,430', icon: TrendingUp },
        ],
      },
      after: {
        title: 'With Graphacrete (M50 Performance)',
        color: 'from-green-600 to-teal-600',
        stats: [
          { label: 'Compressive Strength', value: '50 MPa', icon: TrendingUp },
          { label: 'Cement Required', value: '80-85%', icon: TrendingDown },
          { label: 'Water Permeability', value: '30-45% Lower', icon: TrendingDown },
          { label: 'Cost per m³', value: '₹5,000', icon: TrendingDown },
        ],
      },
    },
    graffisol: {
      before: {
        title: 'Standard Solar Panels',
        color: 'from-red-600 to-orange-600',
        stats: [
          { label: 'Energy Output', value: '100%', icon: TrendingDown },
          { label: 'Panel Temperature', value: 'High (+heat loss)', icon: TrendingUp },
          { label: 'Soiling Loss', value: '15-20%', icon: TrendingUp },
          { label: 'ROI Period', value: '6-7 years', icon: TrendingUp },
        ],
      },
      after: {
        title: 'With Graffisol Coating',
        color: 'from-green-600 to-teal-600',
        stats: [
          { label: 'Energy Output', value: '110-112%', icon: TrendingUp },
          { label: 'Panel Temperature', value: '5-6°C Cooler', icon: TrendingDown },
          { label: 'Soiling Loss', value: '8-12%', icon: TrendingDown },
          { label: 'ROI Period', value: '~5 years', icon: TrendingDown },
        ],
      },
    },
    ceraphene: {
      before: {
        title: 'Premium Graphene (Competitors)',
        color: 'from-red-600 to-orange-600',
        stats: [
          { label: 'Cost per kg', value: '₹15,000', icon: TrendingUp },
          { label: 'Friction Reduction', value: 'Good', icon: TrendingDown },
          { label: 'Accessibility', value: 'Limited', icon: TrendingDown },
          { label: 'Market Position', value: 'Premium Only', icon: TrendingDown },
        ],
      },
      after: {
        title: 'With Ceraphene',
        color: 'from-green-600 to-teal-600',
        stats: [
          { label: 'Cost per kg', value: '₹5,000', icon: TrendingDown },
          { label: 'Friction Reduction', value: 'Excellent', icon: TrendingUp },
          { label: 'Accessibility', value: 'Mass Market', icon: TrendingUp },
          { label: 'Market Position', value: 'Democratized', icon: TrendingUp },
        ],
      },
    },
    hdgpe: {
      before: {
        title: 'Standard HDPE',
        color: 'from-red-600 to-orange-600',
        stats: [
          { label: 'Elongation at Break', value: 'Standard', icon: TrendingDown },
          { label: 'Product Lifespan', value: 'Baseline', icon: TrendingDown },
          { label: 'Flexibility', value: 'Moderate', icon: TrendingDown },
          { label: 'Durability', value: 'Good', icon: TrendingDown },
        ],
      },
      after: {
        title: 'With HD-G-PE',
        color: 'from-green-600 to-teal-600',
        stats: [
          { label: 'Elongation at Break', value: '20× Better', icon: TrendingUp },
          { label: 'Product Lifespan', value: '+20%', icon: TrendingUp },
          { label: 'Flexibility', value: 'Enhanced', icon: TrendingUp },
          { label: 'Durability', value: 'Superior', icon: TrendingUp },
        ],
      },
    },
  };

  const scenario = scenarios[selectedProduct];
  const product = products[selectedProduct];

  return (
    <div className="w-full min-h-screen bg-neutral-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-brand-500/50 bg-brand-500/10 backdrop-blur mb-6">
            <ArrowLeftRight className="w-4 h-4 text-brand-400" />
            <span className="text-xs font-bold text-brand-400 tracking-wide uppercase">
              Interactive Comparison
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Before & After
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto mb-8">
            Drag the slider to see the transformation with Monoatom products
          </p>

          {/* Product Selector */}
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(scenarios).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedProduct(key)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  selectedProduct === key
                    ? 'bg-brand-500 text-white'
                    : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
                }`}
              >
                {products[key].name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Comparison Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative bg-black rounded-2xl overflow-hidden border-2 border-neutral-800"
          onMouseMove={handleMouseMove}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          style={{ cursor: isDragging ? 'grabbing' : 'grab', height: '600px' }}
        >
          {/* Before (Left) - Red Theme */}
          <div className={`absolute inset-0 bg-gradient-to-br ${scenario.before.color}`}>
            <div className="h-full flex flex-col items-center justify-center p-12">
              <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
                {scenario.before.title}
              </h2>
              <div className="space-y-6 w-full max-w-md">
                {scenario.before.stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-black/30 backdrop-blur p-4 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm">{stat.label}</span>
                        <Icon className="w-5 h-5 text-white/60" />
                      </div>
                      <div className="text-2xl font-bold text-white mt-1">{stat.value}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* After (Right) - Green Theme */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${scenario.after.color}`}
            style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          >
            <div className="h-full flex flex-col items-center justify-center p-12">
              <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">
                {scenario.after.title}
              </h2>
              <div className="space-y-6 w-full max-w-md">
                {scenario.after.stats.map((stat, idx) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-black/30 backdrop-blur p-4 rounded-lg"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white/80 text-sm">{stat.label}</span>
                        <Icon className="w-5 h-5 text-white/90" />
                      </div>
                      <div className="text-2xl font-bold text-white mt-1">{stat.value}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-2xl flex items-center justify-center">
              <ArrowLeftRight className="w-6 h-6 text-neutral-900" />
            </div>
          </div>

          {/* Instructions */}
          {!isDragging && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-black/50 backdrop-blur rounded-full text-white text-sm"
            >
              👆 Drag to compare
            </motion.div>
          )}
        </motion.div>

        {/* Key Improvement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-brand-500/20 to-green-500/20 border-2 border-brand-500/30 rounded-2xl p-8 text-center"
        >
          <Zap className="w-12 h-12 text-brand-400 mx-auto mb-4" />
          <h3 className="text-2xl font-display font-bold text-white mb-2">
            {product.name} Key Benefit
          </h3>
          <p className="text-xl text-neutral-300">{product.tagline}</p>
        </motion.div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
