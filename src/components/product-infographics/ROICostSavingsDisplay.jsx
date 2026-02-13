import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, Award, Zap } from 'lucide-react';

const ROICostSavingsDisplay = ({ productId = 'all' }) => {
  const roiData = {
    all: [
      {
        product: 'Graffisol',
        savings: '18-month payback',
        metric: '10-12% energy gain',
        benefit: 'Lower LCOE vs mechanical upgrades',
        icon: Zap,
        gradient: 'from-yellow-500/20 to-orange-500/20',
        border: 'border-yellow-500/30',
        iconColor: 'text-yellow-400',
      },
      {
        product: 'Ceraphene',
        savings: '60-70% cost reduction',
        metric: '₹5,000 vs ₹15,000',
        benefit: 'Premium performance at fraction of cost',
        icon: TrendingDown,
        gradient: 'from-purple-500/20 to-pink-500/20',
        border: 'border-purple-500/30',
        iconColor: 'text-purple-400',
      },
      {
        product: 'Graphacrete',
        savings: '₹430/m³ savings',
        metric: '15-20% cement reduction',
        benefit: 'M30 → M50 performance upgrade',
        icon: DollarSign,
        gradient: 'from-green-500/20 to-teal-500/20',
        border: 'border-green-500/30',
        iconColor: 'text-green-400',
      },
      {
        product: 'HD-G-PE',
        savings: '+20% lifespan',
        metric: '20× elongation',
        benefit: 'Extended product durability',
        icon: Award,
        gradient: 'from-blue-500/20 to-cyan-500/20',
        border: 'border-blue-500/30',
        iconColor: 'text-cyan-400',
      },
    ],
  };

  const displayData = roiData[productId] || roiData.all;

  return (
    <section className="relative py-24 px-6 bg-black overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-sm border border-green-500/30 bg-green-500/10 backdrop-blur mb-6">
            <DollarSign className="w-4 h-4 text-green-400" />
            <span className="text-xs font-mono text-green-400 tracking-widest uppercase">
              Return on Investment
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 tracking-tight">
            Cost Savings
            <br />
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              & Value Creation
            </span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Superior performance at better economics - proven ROI across all products
          </p>
        </motion.div>

        {/* ROI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {displayData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative overflow-hidden"
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient}`}></div>

                {/* Card Content */}
                <div className={`relative bg-neutral-900/90 backdrop-blur border ${item.border} p-8 rounded-sm hover:border-brand-500/50 transition-all group`}>
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-sm bg-gradient-to-br ${item.gradient} border ${item.border} mb-6`}>
                    <Icon className={`w-8 h-8 ${item.iconColor}`} />
                  </div>

                  {/* Product Name */}
                  <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                    {item.product}
                  </h3>

                  {/* Savings Highlight */}
                  <div className="mb-6 pb-6 border-b border-neutral-800">
                    <div className="text-5xl font-mono font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      {item.savings}
                    </div>
                    <p className="text-neutral-400 font-mono text-sm">{item.metric}</p>
                  </div>

                  {/* Benefit */}
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                    <p className="text-neutral-300 leading-relaxed">
                      {item.benefit}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Value Proposition Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-green-500/10 to-teal-500/10 border border-green-500/30 rounded-sm p-12 text-center backdrop-blur"
        >
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Superior Cost-to-Performance Ratio
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            All Monoatom products deliver industry-leading performance while reducing costs -
            a unique combination validated through field deployments
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-mono font-bold text-green-400 mb-2">60-70%</div>
              <div className="text-sm text-neutral-400 font-mono">Cost Savings (Ceraphene)</div>
            </div>
            <div>
              <div className="text-4xl font-mono font-bold text-green-400 mb-2">18mo</div>
              <div className="text-sm text-neutral-400 font-mono">ROI Payback (Graffisol)</div>
            </div>
            <div>
              <div className="text-4xl font-mono font-bold text-green-400 mb-2">15-20%</div>
              <div className="text-sm text-neutral-400 font-mono">Material Savings (Graphacrete)</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ROICostSavingsDisplay;
