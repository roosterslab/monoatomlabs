import React from 'react';
import { FileText, Download, ExternalLink, ArrowRight, Table2 } from 'lucide-react';
import Button from '../ui/Button';

/**
 * Product Data Sheet Component
 * Ultra-Premium Visual Scale
 */
const ProductDataSheet = ({
  productName,
  specifications,
  documents,
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
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none"></div>
        </>
      )}

      <div className="p-8 md:p-12 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg mb-4 ${isDark ? 'bg-red-900/30 text-red-400' : 'bg-red-50 text-red-700'}`}>
              <FileText className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wider">Technical Data</span>
            </div>
            <h3 className={`text-3xl lg:text-4xl font-display font-medium ${textClass} mb-2`}>
              Specifications & Downloads
            </h3>
            <p className={`text-lg ${subtextClass} max-w-xl`}>
              Comprehensive technical documentation and material properties.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">
          {/* Left: Technical Specification Table */}
          <div className="xl:col-span-2">
            <div className={`rounded-2xl border ${borderClass} ${cardBg} overflow-hidden`}>
              <div className={`p-6 border-b ${borderClass} flex items-center justify-between`}>
                <h4 className={`flex items-center gap-2 font-display font-medium ${textClass}`}>
                  <Table2 className="w-5 h-5 opacity-70" />
                  Material Specifications
                </h4>
                <span className="text-xs font-mono uppercase tracking-widest opacity-50">Rev. 2.1</span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead>
                    <tr className={`${isDark ? 'bg-neutral-900/50' : 'bg-neutral-100/50'} border-b ${borderClass}`}>
                      <th className={`p-5 font-bold uppercase tracking-wider text-xs ${subtextClass}`}>Parameter</th>
                      <th className={`p-5 font-bold uppercase tracking-wider text-xs ${subtextClass}`}>Value</th>
                      <th className={`p-5 font-bold uppercase tracking-wider text-xs ${subtextClass}`}>Test Method</th>
                    </tr>
                  </thead>
                  <tbody className={`divide-y ${isDark ? 'divide-neutral-800' : 'divide-neutral-100'}`}>
                    {specifications.map((spec, index) => (
                      <tr key={index} className={`group hover:bg-neutral-50 dark:hover:bg-neutral-800/30 transition-colors`}>
                        <td className={`p-5 font-medium ${textClass}`}>{spec.parameter}</td>
                        <td className={`p-5 font-mono font-medium ${isDark ? 'text-blue-400' : 'text-blue-700'}`}>{spec.value}</td>
                        <td className={`p-5 text-xs font-mono ${subtextClass}`}>{spec.testMethod}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right: Downloads & Actions */}
          <div className="space-y-6">
            <div className="flex flex-col gap-4">
              {documents.map((doc, index) => (
                <a
                  key={index}
                  href={doc.url}
                  download={doc.filename}
                  className={`group relative p-5 rounded-xl border ${borderClass} ${cardBg} hover:border-red-500/50 hover:shadow-lg transition-all duration-300 flex items-start gap-4`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${isDark ? 'bg-neutral-800 text-red-500' : 'bg-red-50 text-red-600'} group-hover:scale-110 transition-transform`}>
                    <FileText className="w-5 h-5" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h5 className={`font-bold ${textClass} text-sm mb-0.5 truncate group-hover:text-red-500 transition-colors`}>{doc.title}</h5>
                    <p className={`text-xs ${subtextClass} mb-2 line-clamp-1`}>{doc.description}</p>
                    <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider opacity-60">
                      <span className="bg-neutral-200 dark:bg-neutral-700 px-1.5 py-0.5 rounded text-neutral-600 dark:text-neutral-300">{doc.format}</span>
                      <span>{doc.fileSize}</span>
                    </div>
                  </div>
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity self-center">
                    <Download className="w-4 h-4 text-red-500" />
                  </div>
                </a>
              ))}
            </div>

            {/* Request Custom Box */}
            <div className={`p-8 rounded-2xl ${isDark ? 'bg-gradient-to-br from-neutral-800 to-neutral-900 border-neutral-700' : 'bg-gradient-to-br from-neutral-800 to-neutral-900 text-white'} border shadow-xl relative overflow-hidden`}>
              <div className="relative z-10">
                <h4 className="font-display font-bold text-white mb-2">Need detailed reports?</h4>
                <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                  Request full NABL test reports, custom mix design data, or safety compliance usage guides.
                </p>
                <Button variant="primary" theme="light" className="w-full justify-between group">
                  <span>Request Custom Data</span>
                  <ExternalLink className="w-4 h-4 opacity-70 group-hover:opacity-100" />
                </Button>
              </div>
              {/* Decor */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl -mr-8 -mt-8 pointer-events-none"></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDataSheet;
