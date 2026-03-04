import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Award, TrendingUp, TrendingDown } from 'lucide-react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend, ResponsiveContainer } from 'recharts';
import { products } from '../../data/monoatomData';

const IndustryBenchmarking = () => {
  const [selectedProduct, setSelectedProduct] = useState('graphacrete');
  const [selectedIndustry, setSelectedIndustry] = useState('construction');

  const industryBenchmarks = {
    construction: {
      name: 'Construction & Infrastructure',
      metrics: [
        { metric: 'Strength', industry: 70, withMonoatom: 95, weight: 25 },
        { metric: 'Cost Efficiency', industry: 60, withMonoatom: 85, weight: 20 },
        { metric: 'Durability', industry: 65, withMonoatom: 90, weight: 20 },
        { metric: 'Sustainability', industry: 55, withMonoatom: 88, weight: 15 },
        { metric: 'Speed to Deploy', industry: 75, withMonoatom: 80, weight: 10 },
        { metric: 'Certification', industry: 80, withMonoatom: 95, weight: 10 },
      ],
      products: ['graphacrete'],
    },
    energy: {
      name: 'Solar Energy',
      metrics: [
        { metric: 'Energy Output', industry: 70, withMonoatom: 88, weight: 30 },
        { metric: 'ROI Speed', industry: 60, withMonoatom: 85, weight: 25 },
        { metric: 'Maintenance', industry: 65, withMonoatom: 82, weight: 15 },
        { metric: 'Thermal Management', industry: 50, withMonoatom: 90, weight: 15 },
        { metric: 'Self-Cleaning', industry: 45, withMonoatom: 85, weight: 10 },
        { metric: 'Longevity', industry: 70, withMonoatom: 78, weight: 5 },
      ],
      products: ['graffisol'],
    },
    materials: {
      name: 'Advanced Materials',
      metrics: [
        { metric: 'Cost', industry: 40, withMonoatom: 90, weight: 35 },
        { metric: 'Performance', industry: 85, withMonoatom: 88, weight: 25 },
        { metric: 'Accessibility', industry: 45, withMonoatom: 85, weight: 20 },
        { metric: 'Scalability', industry: 60, withMonoatom: 80, weight: 10 },
        { metric: 'Market Reach', industry: 50, withMonoatom: 75, weight: 10 },
      ],
      products: ['ceraphene'],
    },
    polymers: {
      name: 'Polymer Manufacturing',
      metrics: [
        { metric: 'Flexibility', industry: 65, withMonoatom: 92, weight: 30 },
        { metric: 'Durability', industry: 70, withMonoatom: 88, weight: 25 },
        { metric: 'Cost', industry: 75, withMonoatom: 80, weight: 20 },
        { metric: 'Performance', industry: 68, withMonoatom: 85, weight: 15 },
        { metric: 'Market Adoption', industry: 80, withMonoatom: 70, weight: 10 },
      ],
      products: ['hdgpe'],
    },
  };

  const industry = industryBenchmarks[selectedIndustry];

  // Calculate overall performance score
  const calculateScore = (metricsData) => {
    const totalScore = metricsData.reduce((sum, m) => sum + (m.withMonoatom * (m.weight / 100)), 0);
    return Math.round(totalScore);
  };

  const industryScore = calculateScore(industry.metrics.map(m => ({ ...m, withMonoatom: m.industry })));
  const monoatomScore = calculateScore(industry.metrics);

  // Determine performance level
  const getPerformanceLevel = (score) => {
    if (score >= 85) return { label: 'World Class', color: 'from-green-500 to-teal-500', textColor: 'text-green-400' };
    if (score >= 70) return { label: 'Top Quartile', color: 'from-blue-500 to-cyan-500', textColor: 'text-blue-400' };
    if (score >= 55) return { label: 'Above Average', color: 'from-yellow-500 to-orange-500', textColor: 'text-yellow-400' };
    return { label: 'Industry Average', color: 'from-neutral-500 to-gray-500', textColor: 'text-neutral-400' };
  };

  const industryLevel = getPerformanceLevel(industryScore);
  const monoatomLevel = getPerformanceLevel(monoatomScore);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-blue-400/50 bg-blue-400/10 backdrop-blur mb-6">
            <Target className="w-4 h-4 text-blue-300 animate-pulse" />
            <span className="text-xs font-bold text-blue-300 tracking-wide uppercase">
              Performance Benchmarking
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
            Industry Comparison
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            See how Monoatom products stack up against industry standards
          </p>
        </motion.div>

        {/* Industry Selector */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {Object.entries(industryBenchmarks).map(([key, value]) => (
            <button
              key={key}
              onClick={() => setSelectedIndustry(key)}
              className={`p-4 rounded-xl font-semibold transition-all ${
                selectedIndustry === key
                  ? 'bg-gradient-to-r from-brand-500 to-blue-500 text-white shadow-xl'
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              {value.name}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Radar Chart */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Multi-Metric Analysis
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={industry.metrics}>
                <PolarGrid stroke="#ffffff30" />
                <PolarAngleAxis dataKey="metric" stroke="#fff" tick={{ fill: '#fff', fontSize: 12 }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#fff" tick={{ fill: '#fff' }} />
                <Radar
                  name="Industry Average"
                  dataKey="industry"
                  stroke="#ef4444"
                  fill="#ef4444"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Radar
                  name="With Monoatom"
                  dataKey="withMonoatom"
                  stroke="#10b981"
                  fill="#10b981"
                  fillOpacity={0.5}
                  strokeWidth={3}
                />
                <Legend />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Right: Performance Scores */}
          <div className="space-y-6">
            {/* Overall Scores */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-6">
                Overall Performance Score
              </h3>

              {/* Industry Score */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-neutral-300">Industry Average</span>
                  <span className={`text-2xl font-bold ${industryLevel.textColor}`}>{industryScore}</span>
                </div>
                <div className="w-full h-4 bg-neutral-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${industryLevel.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${industryScore}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                  />
                </div>
                <div className="text-sm text-neutral-400 mt-1">{industryLevel.label}</div>
              </div>

              {/* Monoatom Score */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-neutral-300">With Monoatom</span>
                  <span className={`text-3xl font-bold ${monoatomLevel.textColor}`}>{monoatomScore}</span>
                </div>
                <div className="w-full h-4 bg-neutral-700 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${monoatomLevel.color}`}
                    initial={{ width: 0 }}
                    animate={{ width: `${monoatomScore}%` }}
                    transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                  />
                </div>
                <div className="text-sm text-neutral-400 mt-1">{monoatomLevel.label}</div>
              </div>

              {/* Improvement */}
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center justify-between">
                  <span className="text-white font-semibold">Performance Gain</span>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-green-400" />
                    <span className="text-2xl font-bold text-green-400">
                      +{monoatomScore - industryScore} points
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Metric Breakdown */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-6"
            >
              <h3 className="text-xl font-display font-bold text-white mb-4">
                Detailed Breakdown
              </h3>
              <div className="space-y-4">
                {industry.metrics.map((metric, idx) => {
                  const diff = metric.withMonoatom - metric.industry;
                  const isImprovement = diff > 0;

                  return (
                    <div key={idx} className="pb-4 border-b border-white/10 last:border-0 last:pb-0">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-medium">{metric.metric}</span>
                        <div className="flex items-center gap-2">
                          {isImprovement ? (
                            <TrendingUp className="w-4 h-4 text-green-400" />
                          ) : (
                            <TrendingDown className="w-4 h-4 text-red-400" />
                          )}
                          <span className={`font-bold ${isImprovement ? 'text-green-400' : 'text-red-400'}`}>
                            {diff > 0 ? '+' : ''}{diff}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-4 text-sm">
                        <span className="text-neutral-400">Industry: {metric.industry}</span>
                        <span className="text-green-300">Monoatom: {metric.withMonoatom}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Badge */}
            {monoatomScore >= 85 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border-2 border-yellow-400/50 rounded-xl p-6 text-center"
              >
                <Award className="w-12 h-12 text-yellow-300 mx-auto mb-3" />
                <h4 className="text-2xl font-display font-bold text-white mb-2">
                  World-Class Performance
                </h4>
                <p className="text-yellow-100">
                  Monoatom products exceed industry standards across all key metrics
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryBenchmarking;
