import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { infographicCatalog } from '../data/infographics';

const InfographicView = () => {
  const { id } = useParams();
  const infographic = infographicCatalog.find(item => item.id === id);

  if (!infographic) {
    return (
      <div className="min-h-screen bg-neutral-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-neutral-900 mb-4">
            Infographic Not Found
          </h1>
          <Link to="/" className="text-brand-500 hover:text-brand-600">
            ← Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const InfographicComponent = infographic.component;

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-neutral-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="font-medium">Back to Catalog</span>
          </Link>

          <div className="text-center flex-1">
            <h2 className="font-display font-semibold text-neutral-900">{infographic.name}</h2>
            <p className="text-sm text-neutral-500">{infographic.category}</p>
          </div>

          <div className={`px-3 py-1 rounded text-sm font-medium ${
            infographic.status === 'Live' ? 'bg-green-100 text-green-700' :
            infographic.status === 'Testing' ? 'bg-blue-100 text-blue-700' :
            'bg-neutral-100 text-neutral-600'
          }`}>
            {infographic.status}
          </div>
        </div>
      </div>

      {/* Infographic Display */}
      <div className="w-full">
        <InfographicComponent />
      </div>

      {/* Bottom Info Bar */}
      <div className="bg-white border-t border-neutral-200 py-6 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-sm text-neutral-500 mb-1">Description</div>
              <div className="text-neutral-900">{infographic.description}</div>
            </div>
            {infographic.changes && (
              <div>
                <div className="text-sm text-neutral-500 mb-1">Changes</div>
                <div className="text-neutral-900">{infographic.changes}</div>
              </div>
            )}
            {infographic.dataPoints && (
              <div>
                <div className="text-sm text-neutral-500 mb-1">Data Points</div>
                <div className="flex flex-wrap gap-2">
                  {infographic.dataPoints.map((point, idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-neutral-100 text-neutral-600 rounded">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfographicView;
