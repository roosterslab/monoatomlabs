import React, { useState } from 'react'
import BoxPreview from './components/studio/BoxPreview'
import ExportPanel from './components/studio/ExportPanel'
import ExportAllView from './components/studio/ExportAllView'
import { DESIGNS, DEFAULT_SELECTED } from './components/designs/registry'

const PANELS = [
  { id: 'wrap',  label: 'Wrap / Front', dims: '15.567" × 6.65"' },
  { id: 'back',  label: 'Back Panel',   dims: '15.567" × 6.65"' },
  { id: 'flaps', label: 'Flap Panels',  dims: '5.2" × 2.13"' },
  { id: 'qr',    label: 'QR Panel',     dims: '6.303" × 5.123"' },
]

const HEX_TIME_MAX = 10000
const DEFAULT_SURF = { time: 3200, bg: 'wave', latticeSize: 40, latticeBright: 0.3, latticeDepth: 500 }

function SurfaceControl({ label, surf, onChange }) {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="text-xs text-gray-400">{label}</span>
        <div className="flex rounded overflow-hidden border border-gray-600 text-xs">
          {[
            { id: 'wave',    label: 'Wave' },
            { id: 'dark',    label: 'Dark' },
            { id: 'lattice', label: 'Lattice' },
          ].map(opt => (
            <button
              key={opt.id}
              onClick={() => onChange({ ...surf, bg: opt.id })}
              className={`px-2 py-0.5 transition-colors ${surf.bg === opt.id ? 'bg-teal-600 text-white' : 'bg-gray-700 text-gray-400 hover:bg-gray-600'}`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="range"
          min={0}
          max={HEX_TIME_MAX}
          step={1}
          value={surf.time}
          onChange={e => onChange({ ...surf, time: Number(e.target.value) })}
          className="flex-1 accent-teal-500 cursor-pointer"
        />
        <span className="text-xs text-gray-500 w-7 text-right flex-shrink-0">
          {Math.round((surf.time / HEX_TIME_MAX) * 100)}%
        </span>
      </div>

      {surf.bg === 'lattice' && (
        <div className="space-y-1.5 pt-1 border-t border-gray-700">
          <p className="text-xs text-gray-600 uppercase tracking-widest">Lattice</p>

          {/* Cell Size */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 w-14 flex-shrink-0">Cell Size</span>
            <input
              type="range" min={15} max={80} step={1}
              value={surf.latticeSize}
              onChange={e => onChange({ ...surf, latticeSize: Number(e.target.value) })}
              className="flex-1 accent-teal-500 cursor-pointer"
            />
            <span className="text-xs text-gray-500 w-7 text-right flex-shrink-0">
              {surf.latticeSize}
            </span>
          </div>

          {/* Brightness */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 w-14 flex-shrink-0">Bright</span>
            <input
              type="range" min={5} max={100} step={5}
              value={Math.round(surf.latticeBright * 100)}
              onChange={e => onChange({ ...surf, latticeBright: Number(e.target.value) / 100 })}
              className="flex-1 accent-teal-500 cursor-pointer"
            />
            <span className="text-xs text-gray-500 w-7 text-right flex-shrink-0">
              {Math.round(surf.latticeBright * 100)}%
            </span>
          </div>

          {/* Depth */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 w-14 flex-shrink-0">Depth</span>
            <input
              type="range" min={0} max={2000} step={50}
              value={surf.latticeDepth}
              onChange={e => onChange({ ...surf, latticeDepth: Number(e.target.value) })}
              className="flex-1 accent-teal-500 cursor-pointer"
            />
            <span className="text-xs text-gray-500 w-7 text-right flex-shrink-0">
              {Math.round((surf.latticeDepth / 2000) * 100)}%
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [activePanel, setActivePanel] = useState('wrap')
  const [selectedDesigns, setSelectedDesigns] = useState({ ...DEFAULT_SELECTED })
  const [surfs, setSurfs] = useState({
    wrapBack:      { ...DEFAULT_SURF },
    wrapLeft:      { ...DEFAULT_SURF },
    wrapFront:     { ...DEFAULT_SURF },
    wrapRight:     { ...DEFAULT_SURF },
    back:          { ...DEFAULT_SURF },
    flapsContents: { ...DEFAULT_SURF },
    flapsLogo:     { ...DEFAULT_SURF },
    qr:            { ...DEFAULT_SURF },
  })

  const set = (key, val) => setSurfs(prev => ({ ...prev, [key]: val }))

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

      {/* Body */}
      <div className="flex flex-1 overflow-hidden">

        {/* Left sidebar — surface controls */}
        <aside className="w-56 flex-shrink-0 bg-gray-800 border-r border-gray-700 overflow-y-auto p-4 space-y-5">
          <p className="text-xs text-gray-500 uppercase tracking-widest">Hex Pattern</p>

          {activePanel === 'wrap' && (<>
            <SurfaceControl label="Back Face"  surf={surfs.wrapBack}  onChange={v => set('wrapBack',  v)} />
            <SurfaceControl label="Left Side"  surf={surfs.wrapLeft}  onChange={v => set('wrapLeft',  v)} />
            <SurfaceControl label="Front"      surf={surfs.wrapFront} onChange={v => set('wrapFront', v)} />
            <SurfaceControl label="Right Side" surf={surfs.wrapRight} onChange={v => set('wrapRight', v)} />
          </>)}

          {activePanel === 'back' && (
            <SurfaceControl label="Back Panel" surf={surfs.back} onChange={v => set('back', v)} />
          )}

          {activePanel === 'flaps' && (<>
            <SurfaceControl label="Contents" surf={surfs.flapsContents} onChange={v => set('flapsContents', v)} />
            <SurfaceControl label="Logo"     surf={surfs.flapsLogo}     onChange={v => set('flapsLogo',     v)} />
          </>)}

          {activePanel === 'qr' && (
            <SurfaceControl label="QR Panel" surf={surfs.qr} onChange={v => set('qr', v)} />
          )}
        </aside>

        {/* Preview area */}
        <main className="flex-1 overflow-auto bg-gray-950 p-6 flex flex-col items-center">
          <div className="w-full max-w-[1200px]">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
              {PANELS.find(p => p.id === activePanel)?.label} —{' '}
              {PANELS.find(p => p.id === activePanel)?.dims}
            </p>
            <BoxPreview activePanel={activePanel} surfs={surfs} selectedDesigns={selectedDesigns} />
          </div>
        </main>

        {/* Right sidebar — design picker */}
        <aside className="w-48 flex-shrink-0 bg-gray-800 border-l border-gray-700 overflow-y-auto p-4">
          <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">Design</p>
          <div className="space-y-1.5">
            {DESIGNS[activePanel].map(d => (
              <button
                key={d.id}
                onClick={() => setSelectedDesigns(prev => ({ ...prev, [activePanel]: d.id }))}
                className={`w-full text-left px-3 py-2 text-xs rounded transition-colors ${
                  selectedDesigns[activePanel] === d.id
                    ? 'bg-teal-600 text-white font-semibold'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </aside>

      </div>

      {/* Export bar */}
      <ExportPanel activePanel={activePanel} />

      {/* Hidden export layout */}
      <ExportAllView surfs={surfs} selectedDesigns={selectedDesigns} />
    </div>
  )
}
