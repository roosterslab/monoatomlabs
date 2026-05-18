import React, { useState } from 'react'
import HexagonWave from './components/HexagonWave'
import Logo from './components/Logo'
import BannerV1_3x6 from './designs/V1_3x6'
import BannerV1_4x6 from './designs/V1_4x6'
import BannerV1_4x8 from './designs/V1_4x8'
import BannerV1_2x4 from './designs/V1_2x4'

const PRODUCT = { id: 'CERAPHENE', label: 'CERAPHENE', sub: 'Ceramic Car Coating', color: '#64748b', studioImage: '/images/ceraphene-studio.png' }

const SIZES = [
  { id: '3x6', label: '3×6 ft', wFt: 3, hFt: 6, Component: BannerV1_3x6 },
  { id: '4x6', label: '4×6 ft', wFt: 4, hFt: 6, Component: BannerV1_4x6 },
  { id: '4x8', label: '4×8 ft', wFt: 4, hFt: 8, Component: BannerV1_4x8 },
  { id: '2x4', label: '2×4 ft', wFt: 2, hFt: 4, Component: BannerV1_2x4 },
]

export default function App() {
  const [activeSize, setActiveSize] = useState('3x6')
  const sizeData = SIZES.find(s => s.id === activeSize)
  const C = PRODUCT.color
  const naturalH = sizeData.hFt * 96
  const scale = Math.min(1, 580 / naturalH)

  return (
    <div style={{ minHeight: '100vh', background: '#0a0a0a', color: 'white', display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', position: 'relative' }}>
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, opacity: 0.35 }}>
        <HexagonWave className="" />
      </div>

      {/* Header */}
      <header style={{ position: 'relative', zIndex: 10, background: 'rgba(10,15,28,0.9)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #1e293b', padding: '0 24px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <Logo size={16} theme="dark" />
          <div style={{ width: 1, height: 28, background: '#1e293b' }} />
          <div>
            <div style={{ fontFamily: 'Outfit', fontWeight: 700, fontSize: 16, color: C, letterSpacing: '0.05em' }}>{PRODUCT.label}</div>
            <div style={{ fontSize: 11, color: '#64748b', fontFamily: 'Inter', marginTop: 1 }}>{PRODUCT.sub} · Flex Banner Studio</div>
          </div>
        </div>

        {/* Size tabs */}
        <div style={{ display: 'flex', gap: 6 }}>
          {SIZES.map(s => (
            <button key={s.id} onClick={() => setActiveSize(s.id)}
              style={{ padding: '7px 16px', borderRadius: 8, fontSize: 12, fontWeight: 600, fontFamily: 'Outfit', cursor: 'pointer', transition: 'all 0.15s', letterSpacing: '0.04em', border: '1px solid',
                background: activeSize === s.id ? C + '22' : 'transparent',
                borderColor: activeSize === s.id ? C : '#1e293b',
                color: activeSize === s.id ? C : '#64748b',
              }}
            >{s.label}</button>
          ))}
        </div>

        <img src={PRODUCT.studioImage} alt={PRODUCT.label} style={{ height: 40, width: 64, objectFit: 'cover', borderRadius: 6, border: `1px solid ${C}44`, opacity: 0.8 }} />
      </header>

      {/* Main preview */}
      <main style={{ flex: 1, position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', padding: '32px 24px', overflowY: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20, alignSelf: 'flex-start' }}>
          <div style={{ fontFamily: 'Outfit', fontSize: 12, fontWeight: 700, color: C, textTransform: 'uppercase', letterSpacing: '0.1em', padding: '3px 10px', borderRadius: 4, background: C + '18', border: `1px solid ${C}44` }}>
            {sizeData.label}
          </div>
          <span style={{ color: '#475569', fontSize: 12, fontFamily: 'Inter' }}>
            {sizeData.wFt * 12}" × {sizeData.hFt * 12}" · Scale {Math.round(scale * 100)}%
          </span>
        </div>
        <sizeData.Component scale={scale} />
      </main>
    </div>
  )
}
