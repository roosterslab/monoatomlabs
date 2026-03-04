import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Package, Building2, Beaker } from 'lucide-react';

const CompanyStatsDashboard = () => {
  // EXACT DATA from website-infographics-lab/src/data/monoatomData.js
  const companyStats = {
    innovations: '10+',
    productsReady: '5+',
    facilities: '2',
    pilotTech: '5',
    awards: '14+',
    presidentialAwards: '6×'
  };

  // EXACT STATS from StatsGridV1.jsx
  const stats = [
    {
      icon: Lightbulb,
      value: companyStats.innovations,
      label: 'Innovations',
      description: 'Breakthrough materials and technologies',
      color: 'text-yellow-500'
    },
    {
      icon: Package,
      value: companyStats.productsReady,
      label: 'Commercially Ready Products',
      description: 'Market-validated solutions deployed at scale',
      color: 'text-blue-500'
    },
    {
      icon: Building2,
      value: companyStats.facilities,
      label: 'State-of-the-Art Facilities',
      description: 'R&D and testing laboratories with advanced characterization',
      color: 'text-purple-500'
    },
    {
      icon: Beaker,
      value: companyStats.pilotTech,
      label: 'Pilot Technologies',
      description: 'Field-scale trials in membranes, batteries, and advanced materials',
      color: 'text-green-500'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header - EXACT from StatsGridV1 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            By The Numbers
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Monoatom Labs combines deep scientific expertise with real-world industrial deployment capabilities
          </p>
        </motion.div>

        {/* Stats Grid - EXACT from StatsGridV1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-neutral-50 border-2 border-neutral-200 p-8 rounded-lg hover:border-blue-500 hover:shadow-2xl transition-all duration-300 group"
              >
                {/* Icon */}
                <div className={`${stat.color} mb-6`}>
                  <Icon className="w-12 h-12" strokeWidth={1.5} />
                </div>

                {/* Number */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  className="text-6xl font-bold font-mono text-neutral-900 mb-3"
                >
                  {stat.value}
                </motion.div>

                {/* Label */}
                <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Section - EXACT from StatsGridV1 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-12 border-t border-neutral-200 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">{companyStats.awards}</div>
              <div className="text-sm text-neutral-600">Major Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">{companyStats.presidentialAwards}</div>
              <div className="text-sm text-neutral-600">President of India Awards</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-neutral-900 mb-2">NABL</div>
              <div className="text-sm text-neutral-600">Certified Testing</div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CompanyStatsDashboard;
