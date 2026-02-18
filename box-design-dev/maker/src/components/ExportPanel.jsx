import React, { useState } from 'react'
import { Download, FileImage, Printer } from 'lucide-react'
import { exportPanelAsPNG, exportPanelAsPDF, exportAllPanelsAsSourcePDF } from '../utils/pdfExporter'

const PANEL_ELEMENT_MAP = {
  wrap: 'panel-wrap',
  back: 'panel-back',
  flaps: 'panel-flaps',
  qr: 'panel-qr',
}

const PANEL_LABELS = {
  wrap: 'Wrap / Front',
  back: 'Back Panel',
  flaps: 'Flap Panels',
  qr: 'QR Panel',
}

export default function ExportPanel({ activePanel }) {
  const [loading, setLoading] = useState(false)
  const [msg, setMsg] = useState('')

  async function run(fn, label) {
    setLoading(true)
    setMsg(`Exporting ${label}…`)
    try {
      await fn()
      setMsg(`${label} exported!`)
    } catch (e) {
      setMsg(`Error: ${e.message}`)
    } finally {
      setLoading(false)
      setTimeout(() => setMsg(''), 3000)
    }
  }

  const elId = PANEL_ELEMENT_MAP[activePanel]
  const panelLabel = PANEL_LABELS[activePanel]
  const filename = `monoatom-${activePanel}`

  return (
    <div className="bg-gray-800 border-t border-gray-700 px-6 py-3 flex items-center gap-3 flex-shrink-0">
      {/* Status */}
      {msg && (
        <span className="text-xs text-teal-400 font-medium mr-2 min-w-[160px]">{msg}</span>
      )}
      {!msg && (
        <span className="text-xs text-gray-500 mr-2 min-w-[160px]">
          Active: <span className="text-gray-300 font-medium">{panelLabel}</span>
        </span>
      )}

      <div className="flex gap-2 ml-auto">
        {/* Export current panel PNG */}
        <button
          onClick={() =>
            run(
              () => exportPanelAsPNG(elId, `${filename}.png`, 4),
              `${panelLabel} PNG`
            )
          }
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs font-semibold rounded transition-colors disabled:opacity-50"
        >
          <FileImage size={14} />
          Export PNG (4×)
        </button>

        {/* Export current panel PDF */}
        <button
          onClick={() =>
            run(
              () => exportPanelAsPDF(elId, activePanel, `${filename}.pdf`),
              `${panelLabel} PDF`
            )
          }
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs font-semibold rounded transition-colors disabled:opacity-50"
        >
          <Download size={14} />
          Export PDF
        </button>

        {/* Divider */}
        <div className="w-px bg-gray-600 mx-1" />

        {/* Export ALL panels — matches source PDF layout exactly */}
        <button
          onClick={() => run(exportAllPanelsAsSourcePDF, 'All Panels PDF')}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-500 text-white text-xs font-semibold rounded transition-colors disabled:opacity-50"
        >
          <Download size={14} />
          Export All Panels (PDF)
        </button>

        {/* Print */}
        <button
          onClick={() => window.print()}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-xs font-semibold rounded transition-colors disabled:opacity-50"
        >
          <Printer size={14} />
          Print
        </button>
      </div>
    </div>
  )
}
