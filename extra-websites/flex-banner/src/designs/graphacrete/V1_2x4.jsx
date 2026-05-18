import React from 'react'

const W_FT = 2
const H_FT = 4
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#d97706'
const C_LIGHT = '#fbbf24'
const C_DARK = '#92400e'

export default function GraphacreteV1_2x4({ scale = 1 }) {
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
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 15 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={col * 25} y={row * 25} width={23} height={23} fill="none" stroke={C} strokeWidth="0.5" />
          ))
        )}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #1c0a00, #2d1600)', borderBottom: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s), flexShrink: 0 }}>
        <div style={{ fontSize: Math.max(5, Math.round(6 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.2em', textTransform: 'uppercase' }}>MONOATOM LABS</div>
        <div style={{ fontSize: Math.max(14, Math.round(22 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.08em', lineHeight: 1 }}>GRAPHACRETE</div>
        <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C_LIGHT }}>Graphene Concrete Additive</div>
      </div>

      {/* HERO */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #140800, #221200)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: Math.round(14 * s), flexShrink: 0 }}>
        {[{ val: '+50%', lab: 'Strength' }, { val: '−15%', lab: 'Cement' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(18, Math.round(28 * s)), fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, #0e0600, #050505)', flexShrink: 0 }}>
        <svg viewBox="0 0 140 160" style={{ width: Math.round(W * 0.72), height: Math.round(visualH * 0.88) }}>
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (Math.PI / 3) * i; const cx = 70 + 48 * Math.cos(a); const cy = 80 + 48 * Math.sin(a)
            const pts = Array.from({ length: 6 }, (_, j) => { const b = (Math.PI / 3) * j - Math.PI / 6; return `${cx + 13 * Math.cos(b)},${cy + 13 * Math.sin(b)}` }).join(' ')
            return <polygon key={i} points={pts} fill={C_DARK} stroke={C} strokeWidth="1" opacity="0.7" />
          })}
          <polygon points="70,50 90,61 90,83 70,94 50,83 50,61" fill={C_DARK} stroke={C} strokeWidth="1.6" opacity="0.9" />
          <polygon points="70,58 82,65 82,79 70,86 58,79 58,65" fill={C} opacity="0.85" />
          <text x="70" y="77" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="Rajdhani">G+</text>
          {Array.from({ length: 6 }).map((_, i) => { const a = (Math.PI / 3) * i; return <line key={i} x1={70 + 20 * Math.cos(a)} y1={80 + 20 * Math.sin(a)} x2={70 + 34 * Math.cos(a)} y2={80 + 34 * Math.sin(a)} stroke={C_LIGHT} strokeWidth="0.7" opacity="0.4" /> })}
          <path d="M10 80 L24 72 L24 77 L44 77 L44 83 L24 83 L24 88 Z" fill={C} opacity="0.6" />
          <path d="M130 80 L116 72 L116 77 L96 77 L96 83 L116 83 L116 88 Z" fill={C} opacity="0.6" />
        </svg>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', gap: Math.round(2 * s), padding: `${Math.round(5 * s)}px ${Math.round(6 * s)}px`, background: '#0d0600', flexShrink: 0 }}>
        {[{ val: '0.05%', lab: 'Dosage' }, { val: 'NABL', lab: 'Validated' }, { val: '+40%', lab: 'Flexural' }].map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #1c0a00, #2d1600)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(9, Math.round(13 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(4, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #1c0a00, #2d1600)', borderTop: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: '#fff', fontStyle: 'italic' }}>Build Stronger. Build Smarter.</div>
        <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, letterSpacing: '0.1em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
