import React, { useState } from 'react';
import { FileDown, Loader2, CheckCircle, XCircle, Image, Ruler } from 'lucide-react';
import { exportCardAsPDF, exportCardAsImage, CARD_SIZES } from '../utils/pdfExporter';

const ExportPanel = ({ data }) => {
  const [isExporting, setIsExporting] = useState(false);
  const [exportStatus, setExportStatus] = useState(null); // 'success' | 'error' | null
  const [exportType, setExportType] = useState(''); // 'pdf' | 'png-front' | 'png-back' | 'png-both'
  const [selectedSize, setSelectedSize] = useState('standard-us');

  const handleExportPDF = async () => {
    setExportType('pdf');
    // Validate required fields
    if (!data.name || !data.title || !data.companyPart1 || !data.companyPart2 || !data.email || !data.phone) {
      setExportStatus('error');
      setTimeout(() => setExportStatus(null), 3000);
      return;
    }

    setIsExporting(true);
    setExportStatus(null);

    try {
      // Get card elements for export
      const frontElement = document.getElementById('card-front-preview');
      const backElement = document.getElementById('card-back-preview');

      // Create temporary back element if it's not currently shown
      let tempBackElement = backElement;
      if (!backElement) {
        // Render back card temporarily in a hidden div
        const tempDiv = document.createElement('div');
        tempDiv.style.position = 'absolute';
        tempDiv.style.left = '-9999px';
        tempDiv.id = 'temp-card-back';
        document.body.appendChild(tempDiv);

        // We need to dynamically render the back card
        // For simplicity, we'll use the existing front element twice
        // In production, you'd want to properly render both sides
        tempBackElement = frontElement;
      }

      await exportCardAsPDF(frontElement, tempBackElement, data, selectedSize);

      // Clean up temporary element
      const tempDiv = document.getElementById('temp-card-back');
      if (tempDiv) {
        document.body.removeChild(tempDiv);
      }

      setExportStatus('success');
      setTimeout(() => setExportStatus(null), 3000);
    } catch (error) {
      console.error('Export failed:', error);
      setExportStatus('error');
      setTimeout(() => setExportStatus(null), 3000);
    } finally {
      setIsExporting(false);
      setExportType('');
    }
  };

  const handleExportImage = async (side) => {
    if (!data.name || !data.title || !data.companyPart1 || !data.companyPart2 || !data.email || !data.phone) {
      setExportStatus('error');
      setTimeout(() => setExportStatus(null), 3000);
      return;
    }

    setIsExporting(true);
    setExportStatus(null);
    setExportType(side);

    try {
      const frontElement = document.getElementById('card-front-preview');
      const backElement = document.getElementById('card-back-preview');

      if (side === 'png-front') {
        await exportCardAsImage(frontElement, `${data.name.replace(/\s+/g, '-')}-front.png`);
      } else if (side === 'png-back') {
        await exportCardAsImage(backElement, `${data.name.replace(/\s+/g, '-')}-back.png`);
      } else if (side === 'png-both') {
        await exportCardAsImage(frontElement, `${data.name.replace(/\s+/g, '-')}-front.png`);
        await exportCardAsImage(backElement, `${data.name.replace(/\s+/g, '-')}-back.png`);
      }

      setExportStatus('success');
      setTimeout(() => setExportStatus(null), 3000);
    } catch (error) {
      console.error('Export failed:', error);
      setExportStatus('error');
      setTimeout(() => setExportStatus(null), 3000);
    } finally {
      setIsExporting(false);
      setExportType('');
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-t border-gray-800 p-6 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between gap-4 mb-4">
          <div className="flex-1">
            {exportStatus === 'success' && (
              <div className="flex items-center gap-2 text-green-400">
                <CheckCircle size={20} />
                <span className="text-sm font-medium">
                  {exportType === 'pdf' ? 'PDF' : 'HD Images'} exported successfully!
                </span>
              </div>
            )}
            {exportStatus === 'error' && (
              <div className="flex items-center gap-2 text-red-400">
                <XCircle size={20} />
                <span className="text-sm font-medium">Please fill all required fields</span>
              </div>
            )}
            {!exportStatus && (
              <div>
                <p className="text-gray-400 text-sm mb-2">
                  Ready to download your professional business card
                </p>
                <div className="flex items-center gap-2">
                  <Ruler size={16} className="text-gray-500" />
                  <span className="text-xs text-gray-500">
                    Selected: {CARD_SIZES[selectedSize]?.name || 'Standard US'}
                  </span>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3">
            {/* Size Selector Dropdown */}
            <div className="relative group">
              <button
                disabled={isExporting}
                className="flex items-center gap-2 px-4 py-4 bg-gray-700 hover:bg-gray-600 text-white font-medium rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed border border-gray-600"
              >
                <Ruler size={20} />
                <span className="hidden sm:inline">Card Size</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Size Dropdown Menu */}
              <div className="absolute bottom-full right-0 mb-2 w-72 bg-gray-800 rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 max-h-96 overflow-y-auto">
                <div className="p-2">
                  <p className="text-xs text-gray-400 px-3 py-2 font-semibold uppercase">VistaPrint Sizes</p>
                  {Object.entries(CARD_SIZES)
                    .filter(([key]) => key.startsWith('vistaprint'))
                    .map(([key, size]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedSize(key)}
                        disabled={isExporting}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                          selectedSize === key
                            ? 'bg-primary-500 text-white'
                            : 'text-white hover:bg-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{size.name}</span>
                          {selectedSize === key && (
                            <CheckCircle size={16} className="text-white" />
                          )}
                        </div>
                      </button>
                    ))}

                  <div className="border-t border-gray-700 my-2"></div>

                  <p className="text-xs text-gray-400 px-3 py-2 font-semibold uppercase">Standard Sizes</p>
                  {Object.entries(CARD_SIZES)
                    .filter(([key]) => !key.startsWith('vistaprint'))
                    .map(([key, size]) => (
                      <button
                        key={key}
                        onClick={() => setSelectedSize(key)}
                        disabled={isExporting}
                        className={`w-full text-left px-3 py-2 text-sm rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                          selectedSize === key
                            ? 'bg-primary-500 text-white'
                            : 'text-white hover:bg-gray-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span>{size.name}</span>
                          {selectedSize === key && (
                            <CheckCircle size={16} className="text-white" />
                          )}
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            </div>
            {/* HD Images Dropdown Button */}
            <div className="relative group">
              <button
                disabled={isExporting}
                className="flex items-center gap-2 px-6 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
              >
                <Image size={24} />
                <span>HD Images</span>
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Dropdown Menu */}
              <div className="absolute bottom-full right-0 mb-2 w-56 bg-gray-800 rounded-lg shadow-xl border border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <button
                  onClick={() => handleExportImage('png-front')}
                  disabled={isExporting}
                  className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-700 rounded-t-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center gap-2">
                    <Image size={16} />
                    <span>Front Card (PNG)</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">High resolution front side</p>
                </button>
                <button
                  onClick={() => handleExportImage('png-back')}
                  disabled={isExporting}
                  className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center gap-2">
                    <Image size={16} />
                    <span>Back Card (PNG)</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">High resolution back side</p>
                </button>
                <button
                  onClick={() => handleExportImage('png-both')}
                  disabled={isExporting}
                  className="w-full text-left px-4 py-3 text-sm text-white hover:bg-gray-700 rounded-b-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="flex items-center gap-2">
                    <Image size={16} />
                    <span>Both Cards (PNG)</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-1">Front + Back (2 files)</p>
                </button>
              </div>
            </div>

            {/* PDF Button */}
            <button
              onClick={handleExportPDF}
              disabled={isExporting}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold rounded-xl transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
            >
              {isExporting && exportType === 'pdf' ? (
                <>
                  <Loader2 size={24} className="animate-spin" />
                  <span>Generating PDF...</span>
                </>
              ) : (
                <>
                  <FileDown size={24} />
                  <span>Download PDF</span>
                </>
              )}
            </button>
          </div>
        </div>

        {isExporting && exportType.startsWith('png') && (
          <div className="flex items-center justify-center gap-2 text-emerald-400">
            <Loader2 size={20} className="animate-spin" />
            <span className="text-sm font-medium">Generating HD images...</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ExportPanel;
