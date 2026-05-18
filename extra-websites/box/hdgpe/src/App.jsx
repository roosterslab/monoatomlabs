import React, { useState } from 'react'
import BoxPreview from './components/studio/BoxPreview'
import ExportPanel from './components/studio/ExportPanel'
import ExportAllView from './components/studio/ExportAllView'
import { DESIGNS, DEFAULT_SELECTED } from './components/designs/registry'
import HexagonWave from './components/HexagonWave'
import Logo from './components/brand/Logo'

const PRODUCT = {
  id: 'HDGPE',
  label: 'HD-G-PE',
  sub: 'HDPE Masterbatch',
  color: '#06b6d4',
  heroImage: '/images/hd-g-pe-01.jpg',
  studioImage: '/images/hdgpe-studio.png',
}

const PANELS = [
  { id: 'wrap',  label: 'Wrap',  dims: '15.567" × 6.65"' },
  { id: 'back',  label: 'Back',  dims: '15.567" × 6.65"' },
  { id: 'flaps', label: 'Flaps', dims: '5.2" × 2.13"' },
  { id: 'qr',    label: 'QR',    dims: '6.303" × 5.123"' },
]

const HEX_TIME_MAX = 10000
const DEFAULT_SURF = { time: 3200, bg: 'wave', latticeSize: 40, latticeBright: 0.3, latticeDepth: 500 }

const C = PRODUCT.color

function SurfaceControl({ label, surf, onChange }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
        <span style={{ color: '#94a3b8', fontSize: 11, fontFamily: 'Inter', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</span>
        <div style={{ display: 'flex', borderRadius: 6, overflow: 'hidden', border: '1px solid #334155' }}>
          {['wave', 'dark', 'lattice'].map(opt => (
            <button key={opt} onClick={() => onChange({ ...surf, bg: opt })}
              style={{ padding: '3px 8px', fontSize: 10, fontFamily: 'Inter', cursor: 'pointer', textTransform: 'capitalize', transition: 'all 0.15s',
                background: surf.bg === opt ? C : '#1e293b',
                color: surf.bg === opt ? 'white' : '#94a3b8',
                border: 'none',
              }}
            >{opt}</button>
          ))}
        </div>
      </div>
      <input type="range" min={0} max={HEX_TIME_MAX} step={1} value={surf.time}
        onChange={e => onChange({ ...surf, time: Number(e.target.value) })}
        style={{ width: '100%', accentColor: C, cursor: 'pointer' }}
      />
      {surf.bg === 'lattice' && (
        <div style={{ marginTop: 8, paddingTop: 8, borderTop: '1px solid #1e293b' }}>
          {[['Cell Size', 'latticeSize', 15, 80], ['Brightness', 'latticeBright', 5, 100]].map(([lbl, key, min, max]) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <span style={{ color: '#64748b', fontSize: 10, width: 56, flexShrink: 0, fontFamily: 'Inter' }}>{lbl}</span>
              <input type="range" min={min} max={max}
                value={key === 'latticeBright' ? Math.round(surf[key] * 100) : surf[key]}
                onChange={e => onChange({ ...surf, [key]: key === 'latticeBright' ? Number(e.target.value) / 100 : Number(e.target.value) })}
                style={{ flex: 1, accentColor: C, cursor: 'pointer' }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default function App() {
  const [activePanel, setActivePanel] = useState('wrap')
  const [selectedDesigns, setSelectedDesigns] = useState({ ...DEFAULT_SELECTED })
  const [surfs, setSurfs] = useState({
    wrapBack: { ...DEFAULT_SURF }, wrapLeft: { ...DEFAULT_SURF },
    wrapFront: { ...DEFAULT_SURF }, wrapRight: { ...DEFAULT_SURF },
    back: { ...DEFAULT_SURF }, flapsContents: { ...DEFAULT_SURF },
    flapsLogo: { ...DEFAULT_SURF }, qr: { ...DEFAULT_SURF },
  })
  const set = (key, val) => setSurfs(prev => ({ ...prev, [key]: val }))

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: 'white', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', position: 'relative' }}>
      {/* Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.4 }}>
        <HexagonWave className="" />
      </div>

      {/* Header */}
      <header style={{ position: 'relative', zIndex: 10, background: 'rgba(10,10,10,0.85)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1e293b', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        {/* Logo + Product */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Logo size={16} theme="dark" />
          <div style={{ width: 1, height: 28, background: '#1e293b' }} />
          <div>
            <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 16, color: C, letterSpacing: '0.05em' }}>{PRODUCT.label}</div>
            <div style={{ fontSize: 11, color: '#64748b', fontFamily: 'Inter', marginTop: 1 }}>{PRODUCT.sub} · Box Design Studio</div>
          </div>
        </div>

        {/* Panel tabs */}
        <nav style={{ display: 'flex', gap: 4 }}>
          {PANELS.map(p => (
            <button key={p.id} onClick={() => setActivePanel(p.id)}
              style={{ padding: '6px 16px', borderRadius: 8, fontSize: 12, fontWeight: 600, fontFamily: 'Outfit', cursor: 'pointer', transition: 'all 0.15s', letterSpacing: '0.04em', border: '1px solid',
                background: activePanel === p.id ? C + '22' : 'transparent',
                borderColor: activePanel === p.id ? C : '#1e293b',
                color: activePanel === p.id ? C : '#64748b',
              }}
            >{p.label}</button>
          ))}
        </nav>

        {/* Product image thumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <img src={PRODUCT.studioImage} alt={PRODUCT.label} style={{ height: 38, width: 60, objectFit: 'cover', borderRadius: 6, border: `1px solid ${C}44`, opacity: 0.85 }} />
        </div>
      </header>

      {/* Body */}
      <div style={{ flex: 1, display: 'flex', overflow: 'hidden', position: 'relative', zIndex: 10 }}>

        {/* Left sidebar — surface controls */}
        <aside style={{ width: 220, flexShrink: 0, background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(12px)', borderRight: '1px solid #1e293b', overflowY: 'auto', padding: 16 }}>
          <p style={{ color: '#475569', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'Outfit', marginBottom: 16, fontWeight: 600 }}>Surface Controls</p>

          {activePanel === 'wrap' && (<>
            <SurfaceControl label="Back Face"  surf={surfs.wrapBack}  onChange={v => set('wrapBack',  v)} />
            <SurfaceControl label="Left Side"  surf={surfs.wrapLeft}  onChange={v => set('wrapLeft',  v)} />
            <SurfaceControl label="Front Face" surf={surfs.wrapFront} onChange={v => set('wrapFront', v)} />
            <SurfaceControl label="Right Side" surf={surfs.wrapRight} onChange={v => set('wrapRight', v)} />
          </>)}
          {activePanel === 'back' && <SurfaceControl label="Back Panel" surf={surfs.back} onChange={v => set('back', v)} />}
          {activePanel === 'flaps' && (<>
            <SurfaceControl label="Contents Flap" surf={surfs.flapsContents} onChange={v => set('flapsContents', v)} />
            <SurfaceControl label="Logo Flap"     surf={surfs.flapsLogo}     onChange={v => set('flapsLogo',     v)} />
          </>)}
          {activePanel === 'qr' && <SurfaceControl label="QR Panel" surf={surfs.qr} onChange={v => set('qr', v)} />}

          {/* Product image in sidebar */}
          <div style={{ marginTop: 24, borderTop: '1px solid #1e293b', paddingTop: 16 }}>
            <p style={{ color: '#475569', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'Outfit', marginBottom: 10, fontWeight: 600 }}>Product</p>
            <img src={PRODUCT.heroImage} alt={PRODUCT.label} style={{ width: '100%', borderRadius: 8, border: `1px solid ${C}33`, objectFit: 'cover', aspectRatio: '4/3' }} />
            <div style={{ marginTop: 8, color: C, fontFamily: 'Outfit', fontWeight: 700, fontSize: 13 }}>{PRODUCT.label}</div>
            <div style={{ color: '#64748b', fontSize: 11, fontFamily: 'Inter', marginTop: 2 }}>{PRODUCT.sub}</div>
          </div>
        </aside>

        {/* Preview area */}
        <main style={{ flex: 1, overflowY: 'auto', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'rgba(2,6,23,0.5)' }}>
          <div style={{ width: '100%', maxWidth: 1200 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div style={{ fontFamily: 'Outfit', fontSize: 13, fontWeight: 700, color: C, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '3px 10px', borderRadius: 4, background: C + '18', border: `1px solid ${C}44` }}>
                {PANELS.find(p => p.id === activePanel)?.label}
              </div>
              <span style={{ color: '#475569', fontSize: 12, fontFamily: 'Inter' }}>
                {PANELS.find(p => p.id === activePanel)?.dims}
              </span>
            </div>
            <BoxPreview activePanel={activePanel} surfs={surfs} selectedDesigns={selectedDesigns} />
          </div>
        </main>

        {/* Right sidebar — design picker */}
        <aside style={{ width: 200, flexShrink: 0, background: 'rgba(15,23,42,0.8)', backdropFilter: 'blur(12px)', borderLeft: '1px solid #1e293b', overflowY: 'auto', padding: 16 }}>
          <p style={{ color: '#475569', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: 'Outfit', marginBottom: 12, fontWeight: 600 }}>Design Variant</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {DESIGNS[activePanel].map(d => (
              <button key={d.id}
                onClick={() => setSelectedDesigns(prev => ({ ...prev, [activePanel]: d.id }))}
                style={{ width: '100%', textAlign: 'left', padding: '8px 12px', borderRadius: 8, fontSize: 12, fontFamily: 'Inter', cursor: 'pointer', transition: 'all 0.15s', border: '1px solid',
                  background: selectedDesigns[activePanel] === d.id ? C + '18' : 'rgba(30,41,59,0.4)',
                  borderColor: selectedDesigns[activePanel] === d.id ? C : '#1e293b',
                  color: selectedDesigns[activePanel] === d.id ? C : '#94a3b8',
                  fontWeight: selectedDesigns[activePanel] === d.id ? 600 : 400,
                }}
              >{d.label}</button>
            ))}
          </div>
        </aside>
      </div>

      {/* Export bar */}
      <ExportPanel activePanel={activePanel} />
      <ExportAllView surfs={surfs} selectedDesigns={selectedDesigns} />
    </div>
  )
}
