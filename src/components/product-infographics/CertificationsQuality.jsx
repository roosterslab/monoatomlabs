import React from 'react';
import { Award, CheckCircle, Shield, FileCheck, Check } from 'lucide-react';

/**
 * Certifications & Quality Assurance Component
 * Ultra-Premium Visual Scale
 */
const CertificationsQuality = ({
  productName,
  certifications,
  testingStandards,
  qualityMetrics,
  theme = 'light'
}) => {
  const isDark = theme === 'dark';
  const bgClass = isDark ? 'bg-neutral-900' : 'bg-neutral-50';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subtextClass = isDark ? 'text-neutral-400' : 'text-neutral-500';
  const borderClass = isDark ? 'border-neutral-800' : 'border-neutral-200';
  const cardBg = isDark ? 'bg-neutral-800/50' : 'bg-white';

  return (
    <div className={`relative overflow-hidden rounded-3xl border ${borderClass} ${bgClass} shadow-2xl`}>
      {/* Ambient Glows */}
      {isDark && (
        <>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
        </>
      )}

      <div className="p-8 md:p-12 relative z-10">
        {/* Header */}
        <div className="mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${isDark ? 'bg-blue-900/30 text-blue-400' : 'bg-blue-50 text-blue-700'}`}>
            <Shield className="w-4 h-4" />
            <span className="text-xs font-bold uppercase tracking-wider">Quality Assurance</span>
          </div>
          <h3 className={`text-3xl lg:text-4xl font-display font-medium ${textClass} mb-2`}>
            Certifications & Standards
          </h3>
          <p className={`text-lg ${subtextClass} max-w-2xl`}>
            rigorous testing protocols ensuring consistency and compliance with global standards.
          </p>
        </div>

        {/* Certifications List - Stacked */}
        <div className="space-y-4 mb-12">
          {certifications.map((cert, index) => (
            <div key={index} className={`flex items-center gap-6 p-6 rounded-2xl border ${borderClass} ${cardBg} group transition-all hover:border-blue-500/50`}>
              <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center ${isDark ? 'bg-blue-900/20 text-blue-400' : 'bg-blue-50 text-blue-600'}`}>
                <Award className="w-6 h-6" />
              </div>

              <div className="flex-grow">
                <h4 className={`text-lg font-display font-bold ${textClass} mb-1`}>
                  {cert.name}
                </h4>
                <p className={`text-sm ${subtextClass}`}>
                  {cert.description}
                </p>
              </div>

              {cert.certNumber && (
                <div className={`hidden md:block px-3 py-1 rounded text-xs font-mono font-bold uppercase ${isDark ? 'bg-neutral-800 text-neutral-400 border border-neutral-700' : 'bg-neutral-100 text-neutral-500 border border-neutral-200'}`}>
                  {cert.certNumber}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-12">
          {/* Testing Standards List - Stacked */}
          <div>
            <h4 className={`text-xl font-display font-medium ${textClass} mb-6 flex items-center gap-3`}>
              <FileCheck className="w-5 h-5 text-neutral-400" />
              Testing Protocols
            </h4>
            <div className={`divide-y ${isDark ? 'divide-neutral-800' : 'divide-neutral-200'} border-t ${borderClass}`}>
              {testingStandards.map((standard, index) => (
                <div key={index} className="py-5 flex items-start md:items-center justify-between group px-2">
                  <div className="flex items-start gap-4">
                    <div className="mt-1.5 md:mt-0">
                      <div className={`w-2 h-2 rounded-full ${isDark ? 'bg-neutral-700 group-hover:bg-blue-500' : 'bg-neutral-300 group-hover:bg-blue-500'} transition-colors`}></div>
                    </div>
                    <div>
                      <h5 className={`font-bold ${textClass} text-base mb-1`}>{standard.name}</h5>
                      <p className={`text-sm ${subtextClass}`}>{standard.description}</p>
                    </div>
                  </div>
                  <div className={`text-xs font-mono tracking-wide uppercase shrink-0 ml-6 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    Ref: {standard.code}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Metrics - Row */}
          <div>
            <h4 className={`text-xl font-display font-medium ${textClass} mb-6 flex items-center gap-3`}>
              <Check className="w-5 h-5 text-neutral-400" />
              Quality Benchmarks
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {qualityMetrics.map((metric, index) => (
                <div key={index} className={`p-6 rounded-xl border ${borderClass} ${cardBg} flex flex-col items-center justify-center text-center`}>
                  <div className={`text-3xl font-display font-bold ${textClass} mb-2`}>
                    {metric.value}
                  </div>
                  <div className={`text-xs font-bold uppercase tracking-widest ${subtextClass}`}>
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Call to Action Mini */}
            <div className={`mt-8 p-6 rounded-xl ${isDark ? 'bg-neutral-800' : 'bg-neutral-100'} text-center`}>
              <p className={`text-sm ${subtextClass} mb-3`}>
                Full quality reports available for every batch.
              </p>
              <button className={`text-xs font-bold uppercase tracking-widest ${isDark ? 'text-white hover:text-blue-400' : 'text-neutral-900 hover:text-blue-600'} transition-colors border-b-2 border-transparent hover:border-current`}>
                Download QC Manual
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CertificationsQuality;
