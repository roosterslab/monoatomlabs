import React from 'react'
import SurfaceBg from '../../../studio/SurfaceBg'
import Logo from '../../../brand/Logo'
import { Package, Layers, Droplet, Award } from 'lucide-react'

const C_TEAL = '#64748B'
const C_DARK = '#050505'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const QCSeal = ({ size }) => (
  <div style={{ width: size, height: size, borderRadius: '50%', border: `1px solid ${C_TEAL}`, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 4, position: 'relative', boxShadow: `0 0 10px rgba(100, 116, 139, 0.2)` }}>
    <div style={{ position: 'absolute', inset: 2, borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.3)' }} />
    <div style={{ textAlign: 'center' }}>
      <Award size={size * 0.3} color={C_TEAL} style={{ margin: '0 auto 2px' }} />
      <div style={{ color: 'white', fontSize: size * 0.12, fontWeight: 700, letterSpacing: '0.05em' }}>VERIFIED</div>
    </div>
  </div>
)

const BOX_CONTENTS = [
  { text: '1 × Ceraphene Coating (50ml)', icon: Droplet },
  { text: '1 × Applicator Block', icon: Layers },
  { text: '2 × Suede Microsuedes', icon: Layers },
  { text: '1 × Microfiber Buffing Towel', icon: Layers },
]

export default function FlapsPanel({ scale = 1, hideLabels = false, contentsFlapId, logoFlapId, surfContents = DEFAULT_SURF, surfLogo = DEFAULT_SURF }) {
  const W = Math.round(499 * scale)
  const H = Math.round(204 * scale)
  const fs = scale

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: Math.round(24 * fs) }}>

      {/* Contents Flap */}
      <div>
        {!hideLabels && (
          <p style={{ color: '#6b7280', fontSize: 11, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>
            Contents Flap
          </p>
        )}
        <div id={contentsFlapId} style={{ width: W, height: H, backgroundColor: C_DARK, position: 'relative', overflow: 'hidden', display: 'flex', flexShrink: 0, userSelect: 'none' }}>
          <SurfaceBg surf={surfContents} />
          <div style={{ flex: 1, padding: `${16 * fs}px ${24 * fs}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 3 }}>
            <div style={{ color: '#64748B', fontSize: Math.round(13 * fs), fontWeight: 800, letterSpacing: '0.15em', marginBottom: 14 * fs, fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 8 }}>
              <Package size={15 * fs} strokeWidth={2.5} />
              In The Box
            </div>
            {BOX_CONTENTS.map((item, i) => (
              <div key={i} style={{ color: '#eee', fontSize: Math.round(10.5 * fs), lineHeight: 1.8, fontWeight: 500, fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', gap: 10 * fs }}>
                <div style={{ width: 4 * fs, height: 4 * fs, background: '#64748B', borderRadius: '50%', boxShadow: '0 0 5px #64748B' }} />
                {item.text}
              </div>
            ))}
          </div>
          <div style={{ width: Math.round(120 * fs), height: H, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 10 * fs, position: 'relative', zIndex: 3 }}>
            <QCSeal size={Math.round(55 * fs)} />
          </div>
        </div>
      </div>

      {/* Logo Flap */}
      <div>
        {!hideLabels && (
          <p style={{ color: '#6b7280', fontSize: 11, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>
            Logo Flap
          </p>
        )}
        <div id={logoFlapId} style={{ width: W, height: H, backgroundColor: C_DARK, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, userSelect: 'none' }}>
          <SurfaceBg surf={surfLogo} />
          <div style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
            <Logo size={Math.round(42 * fs)} theme="dark" />
            <div style={{ marginTop: 12 * fs, fontSize: 9 * fs, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.3em', textAlign: 'center', fontFamily: 'sans-serif', textTransform: 'uppercase', fontWeight: 600 }}>
              Engineered for Performance
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
