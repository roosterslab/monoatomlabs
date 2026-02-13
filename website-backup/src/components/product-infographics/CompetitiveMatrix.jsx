import React from 'react';
import { motion } from 'framer-motion';
import { Check, X, Minus, TrendingUp, ShieldCheck } from 'lucide-react';

/**
 * Competitive Advantage Matrix Component
 * Ultra-Premium Visual Scale
 */
const CompetitiveMatrix = ({ productName, comparisonData, theme = 'light' }) => {
  if (!comparisonData || !comparisonData.competitors || !comparisonData.metrics) {
    return null;
  }

  const { competitors, metrics } = comparisonData;
  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-neutral-900' : 'bg-white';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderClass = isDark ? 'border-neutral-800' : 'border-neutral-200';

  return (
    <div className={`relative overflow-hidden ${bgClass} py-16 px-6 border-b ${borderClass}`}>
      {/* Ambient Glows */}
      {isDark && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>
      )}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${isDark ? 'bg-indigo-900/30 text-indigo-400' : 'bg-indigo-50 text-indigo-700'}`}>
            <TrendingUp className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Benchmark Analysis</span>
          </div>
          <h3 className={`text-4xl md:text-5xl font-display font-medium ${textClass} mb-4`}>
            Competitive Advantage
          </h3>
          <p className={`text-lg ${subtextClass} max-w-2xl mx-auto`}>
            See how {productName} radically outperforms traditional admixtures and competitors across every critical metric.
          </p>
        </motion.div>

        {/* Comparison Table Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={`rounded-3xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-2xl ${isDark ? 'bg-neutral-900/80 backdrop-blur-xl' : 'bg-white'}`}
        >
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[800px]">
              <thead>
                <tr className={`${isDark ? 'bg-neutral-950' : 'bg-neutral-50'} border-b ${borderClass}`}>
                  <th className={`p-6 text-sm font-bold uppercase tracking-wider ${subtextClass} w-1/4`}>
                    Performance Metric
                  </th>
                  <th className={`p-6 relative w-1/4`}>
                    {/* Highlight for Product Column */}
                    <div className={`absolute inset-0 ${isDark ? 'bg-indigo-500/10' : 'bg-indigo-50'} border-t-4 border-indigo-500`}></div>
                    <div className="relative flex items-center gap-2">
                      <span className={`text-lg font-display font-bold ${isDark ? 'text-white' : 'text-neutral-900'}`}>{productName}</span>
                      {/* Badge */}
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-500 text-white uppercase tracking-wider">
                        Best in Class
                      </span>
                    </div>
                  </th>
                  {competitors.map((competitor, idx) => (
                    <th
                      key={idx}
                      className={`p-6 text-sm font-bold uppercase tracking-wider ${subtextClass} w-1/6`}
                    >
                      {competitor}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className={`divide-y ${borderClass}`}>
                {metrics.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`group transition-colors ${isDark ? 'hover:bg-neutral-800/30' : 'hover:bg-neutral-50'}`}
                  >
                    {/* Metric Name */}
                    <td className={`p-6 font-medium ${textClass} text-sm md:text-base`}>
                      {row.metric}
                    </td>

                    {/* Product Value (Highlighted) */}
                    <td className={`p-6 relative`}>
                      <div className={`absolute inset-0 ${isDark ? 'bg-indigo-500/5' : 'bg-indigo-50/50'} opacity-100 group-hover:opacity-80 transition-opacity`}></div>
                      <div className="relative flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${isDark ? 'bg-indigo-500 text-white' : 'bg-indigo-600 text-white'}`}>
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className={`text-lg font-bold font-mono ${isDark ? 'text-indigo-300' : 'text-indigo-700'}`}>
                          {row.productValue}
                        </span>
                      </div>
                    </td>

                    {/* Competitor Values */}
                    {row.competitorValues.map((value, cidx) => (
                      <td key={cidx} className={`p-6 text-sm font-mono ${subtextClass}`}>
                        {value === '0%' || value.includes('<') ? (
                          <span className="opacity-50">{value}</span>
                        ) : (
                          <span>{value}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Key Differentiators Grid */}
        {comparisonData.differentiators && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {comparisonData.differentiators.map((item, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl border ${borderClass} ${isDark ? 'bg-neutral-800/30' : 'bg-white shadow-sm hover:shadow-md'} transition-all hover:border-indigo-500/30 group`}
              >
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center ${isDark ? 'bg-neutral-800 text-white group-hover:bg-indigo-500 transition-colors' : 'bg-neutral-100 text-neutral-900 group-hover:bg-indigo-600 group-hover:text-white transition-colors'}`}>
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className={`text-xl font-display font-bold ${textClass} mb-3`}>
                  {item.title}
                </h4>
                <p className={`text-sm ${subtextClass} leading-relaxed`}>
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default CompetitiveMatrix;
