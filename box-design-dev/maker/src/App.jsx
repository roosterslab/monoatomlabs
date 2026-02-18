import React, { useState } from 'react'
import BoxPreview from './components/BoxPreview'
import ExportPanel from './components/ExportPanel'
import ExportAllView from './components/ExportAllView'

const PANELS = [
  { id: 'wrap',  label: 'Wrap / Front', dims: '15.567" × 6.65"' },
  { id: 'back',  label: 'Back Panel',   dims: '15.567" × 6.65"' },
  { id: 'flaps', label: 'Flap Panels',  dims: '5.2" × 2.13"' },
  { id: 'qr',    label: 'QR Panel',     dims: '6.303" × 5.123"' },
]

// One full wave cycle ≈ 7854 units (2π / 0.0008 ≈ 7854).
// Range 0–10000 gives the designer more than a full cycle to explore.
const HEX_TIME_MAX = 10000

export default function App() {
  const [activePanel, setActivePanel] = useState('wrap')
  const [hexTime, setHexTime] = useState(3200)

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700 px-6 py-3 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white rounded-sm flex items-center justify-center flex-shrink-0">
            <span className="text-black font-black text-xs">ML</span>
          </div>
          <div>
            <h1 className="text-base font-bold leading-tight">Graphene Box Design Maker</h1>
            <p className="text-xs text-gray-400">CERAPHENE Ceramic Coating — Monoatom Labs</p>
          </div>
        </div>
        <nav className="flex gap-1.5">
          {PANELS.map(p => (
            <button
              key={p.id}
              onClick={() => setActivePanel(p.id)}
              className={`px-3 py-1.5 text-xs font-semibold rounded uppercase tracking-wider transition-colors ${
                activePanel === p.id
                  ? 'bg-teal-500 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {p.label}
            </button>
          ))}
        </nav>
      </header>

      {/* Preview area */}
      <main className="flex-1 overflow-auto bg-gray-950 p-6 flex flex-col items-center">
        <div className="w-full max-w-[1200px]">
          {/* Panel label + hex pattern slider */}
          <div className="flex items-center justify-between mb-3 gap-6">
            <p className="text-xs text-gray-500 uppercase tracking-widest flex-shrink-0">
              {PANELS.find(p => p.id === activePanel)?.label} —{' '}
              {PANELS.find(p => p.id === activePanel)?.dims}
            </p>
            <div className="flex items-center gap-3 flex-1 max-w-xs">
              <span className="text-xs text-gray-500 flex-shrink-0">Hex Pattern</span>
              <input
                type="range"
                min={0}
                max={HEX_TIME_MAX}
                step={1}
                value={hexTime}
                onChange={e => setHexTime(Number(e.target.value))}
                className="flex-1 accent-teal-500 cursor-pointer"
              />
              <span className="text-xs text-gray-400 w-10 text-right flex-shrink-0">
                {Math.round((hexTime / HEX_TIME_MAX) * 100)}%
              </span>
            </div>
          </div>
          <BoxPreview activePanel={activePanel} hexTime={hexTime} />
        </div>
      </main>

      {/* Export bar */}
      <ExportPanel activePanel={activePanel} />

      {/* Hidden export layout — all panels rendered for PDF capture */}
      <ExportAllView hexTime={hexTime} />
    </div>
  )
}
