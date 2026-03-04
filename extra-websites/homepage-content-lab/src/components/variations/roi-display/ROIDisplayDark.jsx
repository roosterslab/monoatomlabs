import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingDown, Award, Zap } from 'lucide-react';

const ROIDisplayDark = () => {
  // EXACT DATA from website-infographics-lab ROIDisplayV1.jsx
  const roiData = [
    {
      name: 'Graffisol',
      category: 'Solar Energy',
      savings: '18-month payback',
      metric: '10-12% energy gain',
      benefit: 'Lower LCOE vs mechanical upgrades',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Ceraphene',
      category: 'Automotive',
      savings: '60-70% cost reduction',
      metric: '₹5,000 vs ₹15,000',
      benefit: 'Premium performance at fraction of cost',
      icon: TrendingDown,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Graphacrete',
      category: 'Construction',
      savings: '₹430/m³ savings',
      metric: '15-20% cement reduction',
      benefit: 'M30 → M50 performance upgrade',
      icon: DollarSign,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'HD-G-PE',
      category: 'Industrial Polymers',
      savings: '+20% lifespan',
      metric: '20× elongation',
      benefit: 'Extended product durability',
      icon: Award,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header - EXACT from ROIDisplayV1 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-green-500/50 bg-green-500/10 backdrop-blur mb-6">
            <DollarSign className="w-4 h-4 text-green-400 animate-pulse" />
            <span className="text-xs font-bold text-green-400 tracking-wide uppercase">
              Return on Investment
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Cost Savings
            <br />
            <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
              & Value Creation
            </span>
          </h1>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Superior performance at better economics - proven ROI across all products
          </p>
        </motion.div>

        {/* ROI Cards Grid - EXACT from ROIDisplayV1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {roiData.map((item, index) => {
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
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10`}></div>

                {/* Card Content */}
                <div className="relative bg-neutral-900/80 backdrop-blur border-2 border-neutral-800 p-8 rounded-2xl hover:border-green-500 transition-all group">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${item.color} mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Product Name */}
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {item.name}
                  </h3>

                  {/* Savings Highlight */}
                  <div className="mb-6 pb-6 border-b border-neutral-700">
                    <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent mb-2">
                      {item.savings}
                    </div>
                    <p className="text-neutral-400">{item.metric}</p>
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

        {/* Value Proposition Banner - EXACT from ROIDisplayV1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-green-500/20 to-teal-500/20 border-2 border-green-500/30 rounded-2xl p-12 text-center backdrop-blur"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Superior Cost-to-Performance Ratio
          </h2>
          <p className="text-xl text-neutral-300 mb-8 max-w-3xl mx-auto">
            All Monoatom products deliver industry-leading performance while reducing costs -
            a unique combination validated through field deployments
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">60-70%</div>
              <div className="text-sm text-neutral-400">Cost Savings (Ceraphene)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">18mo</div>
              <div className="text-sm text-neutral-400">ROI Payback (Graffisol)</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-400 mb-2">15-20%</div>
              <div className="text-sm text-neutral-400">Material Savings (Graphacrete)</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ROIDisplayDark;
