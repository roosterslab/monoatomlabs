import React, { useState } from 'react'
import BannerPreview from './components/shared/BannerPreview'
import { DESIGNS, DEFAULT_DESIGNS } from './components/designs/registry'

const PRODUCTS = [
  { id: 'CERAPHENE',   label: 'Ceraphene',   color: '#64748b', sub: 'Ceramic Car Coating' },
  { id: 'GRAPHACRETE', label: 'Graphacrete', color: '#d97706', sub: 'Concrete Additive' },
  { id: 'GRAFFISOL',   label: 'Graffisol',   color: '#f59e0b', sub: 'Solar Coating' },
  { id: 'HD-G-PE',     label: 'HD-G-PE',     color: '#06b6d4', sub: 'HDPE Masterbatch' },
]

const BANNER_SIZES = [
  { id: '3x6', label: '3×6 ft', w: 3, h: 6 },
  { id: '4x6', label: '4×6 ft', w: 4, h: 6 },
  { id: '4x8', label: '4×8 ft', w: 4, h: 8 },
  { id: '2x4', label: '2×4 ft', w: 2, h: 4 },
]

export default function App() {
  const [activeProduct, setActiveProduct] = useState('CERAPHENE')
  const [activeSize, setActiveSize]       = useState('3x6')
  const [activeDesign, setActiveDesign]   = useState('V1')

  const product = PRODUCTS.find(p => p.id === activeProduct)
  const sizeDesigns = DESIGNS[activeProduct]?.[activeSize] || []

  // When product changes, reset design to V1
  const handleProductChange = (id) => {
    setActiveProduct(id)
    setActiveDesign(DEFAULT_DESIGNS[id]?.[activeSize] || 'V1')
  }

  // When size changes, reset design to that size's default
  const handleSizeChange = (id) => {
    setActiveSize(id)
    setActiveDesign(DEFAULT_DESIGNS[activeProduct]?.[id] || 'V1')
  }

  return (
    <div className="flex flex-col h-screen bg-[#1a1a1a] text-white overflow-hidden">

      {/* ── HEADER ── */}
      <header className="flex items-center justify-between px-5 py-2.5 border-b border-white/10 bg-[#111111] flex-shrink-0">
        {/* Logo + title */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-md flex items-center justify-center text-xs font-bold border"
               style={{ background: product?.color + '22', borderColor: product?.color, color: product?.color }}>
            ML
          </div>
          <div>
            <span className="font-display font-semibold text-base text-white">Flex Banner Studio</span>
            <span className="ml-2 text-neutral-500 text-xs">— Monoatom Labs</span>
          </div>
        </div>

        {/* Product switcher */}
        <div className="flex items-center gap-2">
          {PRODUCTS.map(p => (
            <button
              key={p.id}
              onClick={() => handleProductChange(p.id)}
              className="px-3 py-1.5 rounded text-xs font-semibold transition-all duration-150"
              style={{
                border: `1.5px solid ${p.color}`,
                background: activeProduct === p.id ? p.color + '28' : 'transparent',
                color: activeProduct === p.id ? '#fff' : p.color,
                fontFamily: "'Rajdhani', sans-serif",
                letterSpacing: '0.04em',
              }}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* Active product sub label */}
        <div className="text-xs text-neutral-500 min-w-[140px] text-right">
          <span style={{ color: product?.color }}>{product?.sub}</span>
        </div>
      </header>

      {/* ── BODY ── */}
      <div className="flex flex-1 overflow-hidden">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="w-56 flex-shrink-0 border-r border-white/10 bg-[#131313] flex flex-col overflow-y-auto">

          {/* Size Selector */}
          <div className="p-4 border-b border-white/10">
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2 font-ui">Banner Size</div>
            <div className="flex flex-col gap-1.5">
              {BANNER_SIZES.map(sz => (
                <button
                  key={sz.id}
                  onClick={() => handleSizeChange(sz.id)}
                  className="w-full px-3 py-2 rounded text-left text-sm transition-all duration-150"
                  style={{
                    border: `1px solid ${activeSize === sz.id ? product?.color : 'rgba(255,255,255,0.08)'}`,
                    background: activeSize === sz.id ? (product?.color + '18') : 'transparent',
                    color: activeSize === sz.id ? '#fff' : '#9ca3af',
                    fontFamily: "'Rajdhani', sans-serif",
                    fontWeight: activeSize === sz.id ? 600 : 400,
                  }}
                >
                  <span className="font-semibold">{sz.label}</span>
                  <span className="ml-2 text-xs opacity-60">{sz.w}×{sz.h} ft</span>
                </button>
              ))}
            </div>
          </div>

          {/* Design Variant Selector */}
          <div className="p-4 border-b border-white/10">
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2 font-ui">Design Variant</div>
            {sizeDesigns.length === 0 ? (
              <div className="text-xs text-neutral-600">No designs available</div>
            ) : (
              <div className="flex flex-col gap-1.5">
                {sizeDesigns.map(d => (
                  <button
                    key={d.id}
                    onClick={() => setActiveDesign(d.id)}
                    className="w-full px-3 py-2 rounded text-left text-sm transition-all duration-150"
                    style={{
                      border: `1px solid ${activeDesign === d.id ? product?.color : 'rgba(255,255,255,0.08)'}`,
                      background: activeDesign === d.id ? (product?.color + '18') : 'transparent',
                      color: activeDesign === d.id ? '#fff' : '#9ca3af',
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: activeDesign === d.id ? 600 : 400,
                    }}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Info */}
          <div className="p-4 mt-auto">
            <div className="text-[10px] text-neutral-600 uppercase tracking-widest mb-1 font-ui">Active Config</div>
            <div className="text-xs text-neutral-400 space-y-0.5">
              <div><span className="text-neutral-600">Product:</span> <span style={{ color: product?.color }}>{product?.label}</span></div>
              <div><span className="text-neutral-600">Size:</span> {activeSize.replace('x', ' × ')} ft</div>
              <div><span className="text-neutral-600">Variant:</span> {activeDesign}</div>
            </div>
          </div>
        </aside>

        {/* ── CENTER PREVIEW ── */}
        <main className="flex-1 flex flex-col items-center justify-center overflow-auto p-6 bg-[#1a1a1a]">
          {/* Subtle grid bg */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
               style={{
                 backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
                 backgroundSize: '40px 40px',
               }}
          />
          <div className="relative z-10">
            <BannerPreview
              product={activeProduct}
              size={activeSize}
              designId={activeDesign}
            />
          </div>
        </main>

        {/* ── RIGHT PANEL ── */}
        <aside className="w-48 flex-shrink-0 border-l border-white/10 bg-[#131313] flex flex-col">

          {/* Export section */}
          <div className="p-4 border-b border-white/10">
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-3 font-ui">Export</div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => alert('PNG export coming soon.\nIntegrate html2canvas for production.')}
                className="w-full px-3 py-2 rounded text-sm font-semibold transition-all duration-150 hover:opacity-90"
                style={{
                  background: product?.color + '22',
                  border: `1px solid ${product?.color}`,
                  color: '#fff',
                  fontFamily: "'Rajdhani', sans-serif",
                  letterSpacing: '0.04em',
                }}
              >
                Export PNG
              </button>
              <button
                onClick={() => alert('PDF export coming soon.\nIntegrate jsPDF for production.')}
                className="w-full px-3 py-2 rounded text-sm font-semibold transition-all duration-150 hover:opacity-90"
                style={{
                  background: 'transparent',
                  border: `1px solid ${product?.color}`,
                  color: product?.color,
                  fontFamily: "'Rajdhani', sans-serif",
                  letterSpacing: '0.04em',
                }}
              >
                Export PDF
              </button>
            </div>
          </div>

          {/* Size reference */}
          <div className="p-4 border-b border-white/10">
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2 font-ui">Print Specs</div>
            <div className="text-xs text-neutral-500 space-y-1">
              {BANNER_SIZES.map(sz => (
                <div key={sz.id} className={`flex justify-between ${sz.id === activeSize ? 'text-white' : ''}`}>
                  <span style={{ color: sz.id === activeSize ? product?.color : undefined }}>{sz.label}</span>
                  <span>{sz.w * 12}"×{sz.h * 12}"</span>
                </div>
              ))}
            </div>
          </div>

          {/* Product color swatch */}
          <div className="p-4">
            <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2 font-ui">Brand Color</div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded" style={{ background: product?.color }} />
              <div>
                <div className="text-xs text-white font-mono">{product?.color}</div>
                <div className="text-[10px] text-neutral-600">{product?.sub}</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
