import React from 'react';
import { Printer } from 'lucide-react';
import CardTemplate from './CardTemplate';

const CardPreview = ({ data }) => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="sticky top-8">
      <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 print:bg-white print:border-0 print:shadow-none">
        <div className="flex items-center justify-between mb-6 print:hidden">
          <h2 className="text-2xl font-bold text-white">Live Preview</h2>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-lg transition-colors"
          >
            <Printer size={18} />
            Print Cards
          </button>
        </div>

        {/* Both cards displayed */}
        <div className="space-y-8">
          {/* Front Card */}
          <div className="flex flex-col items-center print:break-after-page">
            <p className="text-sm text-gray-400 mb-4 print:hidden">Front Side</p>
            <div id="card-front-preview">
              <CardTemplate data={data} side="front" />
            </div>
          </div>

          {/* Back Card */}
          <div className="flex flex-col items-center print:break-before-page">
            <p className="text-sm text-gray-400 mb-4 print:hidden">Back Side</p>
            <div id="card-back-preview">
              <CardTemplate data={data} side="back" />
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg print:hidden">
          <p className="text-sm text-blue-300 text-center">
            Card updates in real-time as you type • Click "Print Cards" for print-ready output
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardPreview;
