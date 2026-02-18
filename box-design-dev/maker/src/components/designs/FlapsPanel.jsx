import React from 'react'
import HexagonWave from '../brand/HexagonWave'
import Logo from '../brand/Logo'

const C_TEAL = '#2de2c8' 
const C_DARK = '#0a0a0a'

function HexBg({ time }) {
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4, zIndex: 0 }}>
        <HexagonWave className="" time={time} />
      </div>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.9) 100%)',
      }} />
    </>
  )
}

// QC Seal Component
const QCSeal = ({ size }) => (
    <div style={{ 
        width: size, height: size, borderRadius: '50%', border: `1px solid ${C_TEAL}`, 
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 4, position: 'relative'
    }}>
        <div style={{ position: 'absolute', inset: 2, borderRadius: '50%', border: '1px dashed rgba(255,255,255,0.3)' }} />
        <div style={{ textAlign: 'center' }}>
            <div style={{ color: C_TEAL, fontSize: size * 0.2, fontWeight: 900, fontFamily: 'sans-serif' }}>QC</div>
            <div style={{ color: 'white', fontSize: size * 0.15, fontSize: size * 0.12 }}>PASSED</div>
        </div>
    </div>
)

// =============================================
//  FLAP PANELS — 5.2" × 2.13" each
// =============================================
const BOX_CONTENTS = [
  '1 × Ceraphene Coating (50ml)',
  '1 × Applicator Block',
  '2 × Suede Microsuedes',
  '1 × Microfiber Buffing Towel',
]

export default function FlapsPanel({ scale = 1, hideLabels = false, contentsFlapId, logoFlapId, hexTime }) {
  const W = Math.round(499 * scale)
  const H = Math.round(204 * scale)
  const fs = scale

  return (
    <div style={{ display: 'flex', gap: Math.round(24 * fs), flexWrap: 'wrap' }}>
      
      {/* ── LEFT FLAP: Box contents ── */}
      <div>
        {!hideLabels && (
          <p style={{ color: '#6b7280', fontSize: 11, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>
            Contents Flap
          </p>
        )}
        <div id={contentsFlapId} style={{ width: W, height: H, backgroundColor: C_DARK, position: 'relative', overflow: 'hidden', display: 'flex', flexShrink: 0, userSelect: 'none' }}>
          <HexBg time={hexTime} />
          
          <div style={{ flex: 1, padding: `${16 * fs}px ${20 * fs}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 3 }}>
            <div style={{ color: C_TEAL, fontSize: Math.round(10 * fs), fontWeight: 700, letterSpacing: '0.1em', marginBottom: 8 * fs, fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>
              In The Box
            </div>
            {BOX_CONTENTS.map((line, i) => (
              <div key={i} style={{ color: 'white', fontSize: Math.round(9 * fs), lineHeight: 1.6, fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 4, height: 4, background: '#555', borderRadius: '50%' }} />
                  {line}
              </div>
            ))}
          </div>

          {/* Right: QC Area */}
          <div style={{ width: Math.round(100 * fs), height: H, display: 'flex', alignItems: 'center', justifyContent: 'center', paddingRight: 10 * fs, position: 'relative', zIndex: 3 }}>
             <QCSeal size={Math.round(60 * fs)} />
          </div>
        </div>
      </div>

      {/* ── RIGHT FLAP: Logo ── */}
      <div>
        {!hideLabels && (
          <p style={{ color: '#6b7280', fontSize: 11, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>
            Logo Flap
          </p>
        )}
        <div id={logoFlapId} style={{ width: W, height: H, backgroundColor: C_DARK, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, userSelect: 'none' }}>
          <HexBg time={hexTime} />
          <div style={{ position: 'relative', zIndex: 3 }}>
            <Logo size={Math.round(32 * fs)} theme="dark" />
            <div style={{ marginTop: 8 * fs, fontSize: 8 * fs, color: '#555', letterSpacing: '0.3em', textAlign: 'center', fontFamily: 'sans-serif' }}>
                GENUINE PRODUCT
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}
