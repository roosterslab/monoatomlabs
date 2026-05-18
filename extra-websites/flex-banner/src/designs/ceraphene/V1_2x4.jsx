import React from 'react'

const W_FT = 2
const H_FT = 4
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#64748b'
const C_LIGHT = '#94a3b8'
const C_DARK = '#334155'

export default function CerapheneV1_2x4({ scale = 1 }) {
  const W = Math.round(BASE_W * scale)
  const H = Math.round(BASE_H * scale)
  const s = scale

  const headerH = Math.round(H * 0.17)
  const heroH   = Math.round(H * 0.18)
  const visualH = Math.round(H * 0.36)
  const statsH  = Math.round(H * 0.19)
  const footerH = H - headerH - heroH - visualH - statsH

  return (
    <div style={{ width: W, height: H, background: '#050505', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 9 }).map((_, row) =>
          Array.from({ length: 6 }).map((_, col) => {
            const sz = 26; const cx = col * sz * 1.75 + (row % 2 ? sz * 0.875 : 0); const cy = row * sz * 1.5
            const pts = Array.from({ length: 6 }, (_, i) => { const a = (Math.PI / 3) * i - Math.PI / 6; return `${cx + sz * Math.cos(a)},${cy + sz * Math.sin(a)}` }).join(' ')
            return <polygon key={`${row}-${col}`} points={pts} fill="none" stroke={C} strokeWidth="0.7" />
          })
        )}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #0c1524, #1a2844)', borderBottom: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s), flexShrink: 0 }}>
        <div style={{ fontSize: Math.max(5, Math.round(6 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.2em', textTransform: 'uppercase' }}>MONOATOM LABS</div>
        <div style={{ fontSize: Math.max(14, Math.round(22 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>CERAPHENE</div>
        <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C_LIGHT, letterSpacing: '0.1em' }}>Nano-Ceramic Coating</div>
      </div>

      {/* HERO */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #0a101e, #141f38)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: Math.round(16 * s), flexShrink: 0 }}>
        {[{ val: '9H+', lab: 'Hardness' }, { val: '115°', lab: 'Contact Angle' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(18, Math.round(28 * s)), fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, #070e1c, #050505)', flexShrink: 0 }}>
        <svg viewBox="0 0 140 160" style={{ width: Math.round(W * 0.7), height: Math.round(visualH * 0.85) }}>
          <path d="M70 10 L118 34 L118 90 Q118 128 70 144 Q22 128 22 90 L22 34 Z" fill={C_DARK} stroke={C} strokeWidth="1.6" opacity="0.85" />
          <path d="M70 24 L106 44 L106 88 Q106 120 70 133 Q34 120 34 88 L34 44 Z" fill="#0a1628" stroke={C_LIGHT} strokeWidth="0.7" opacity="0.45" />
          {Array.from({ length: 3 }).map((_, row) => Array.from({ length: 3 }).map((_, col) => {
            const x = 50 + col * 14; const y = 50 + row * 18
            return <polygon key={`l${row}-${col}`} points={`${x},${y-6} ${x+6},${y-3} ${x+6},${y+3} ${x},${y+6} ${x-6},${y+3} ${x-6},${y-3}`} fill="none" stroke={C_LIGHT} strokeWidth="0.4" opacity="0.3" />
          }))}
          <polygon points="70,60 82,67 82,81 70,88 58,81 58,67" fill={C} stroke={C_LIGHT} strokeWidth="1" />
          <text x="70" y="78" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Rajdhani">ML</text>
          {[0, 60, 120, 180, 240, 300].map((deg, i) => { const a = deg * Math.PI / 180; const r = 54; return <circle key={i} cx={70 + r * Math.cos(a)} cy={74 + r * Math.sin(a)} r="2" fill={C} opacity="0.4" /> })}
        </svg>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', gap: Math.round(2 * s), padding: `${Math.round(5 * s)}px ${Math.round(6 * s)}px`, background: '#060b14', flexShrink: 0 }}>
        {[{ val: '3–4 YR', lab: 'Durability' }, { val: '−70%', lab: 'Wash' }, { val: '₹5K', lab: 'Price' }].map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #0c1524, #1a2844)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(9, Math.round(13 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(4, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #0c1524, #1a2844)', borderTop: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: '#fff', fontStyle: 'italic' }}>Protect. Shine. Endure.</div>
        <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, letterSpacing: '0.1em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
