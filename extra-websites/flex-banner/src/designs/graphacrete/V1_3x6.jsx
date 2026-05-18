import React from 'react'

const W_FT = 3
const H_FT = 6
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#d97706'
const C_LIGHT = '#fbbf24'
const C_DARK = '#92400e'

const STATS = [
  { val: '+50%',      lab: 'Compressive Strength' },
  { val: '−15%',      lab: 'Cement Usage' },
  { val: '+40%',      lab: 'Flexural Strength' },
  { val: '0.05%',     lab: 'Min Dosage' },
  { val: '−45%',      lab: 'Permeability' },
]

export default function GraphacreteV1_3x6({ scale = 1 }) {
  const W = Math.round(BASE_W * scale)
  const H = Math.round(BASE_H * scale)
  const s = scale

  const headerH = Math.round(H * 0.14)
  const heroH   = Math.round(H * 0.16)
  const visualH = Math.round(H * 0.34)
  const statsH  = Math.round(H * 0.26)
  const footerH = H - headerH - heroH - visualH - statsH

  return (
    <div style={{ width: W, height: H, background: '#050505', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {/* Concrete grid */}
        {Array.from({ length: 18 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={col * 26} y={row * 26} width={24} height={24} fill="none" stroke={C} strokeWidth="0.5" opacity="0.6" />
          ))
        )}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #1c0a00, #2d1600)', borderBottom: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s), flexShrink: 0 }}>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600 }}>MONOATOM LABS</div>
        <div style={{ fontSize: Math.max(16, Math.round(25 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.08em', lineHeight: 1 }}>GRAPHACRETE</div>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C_LIGHT, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Graphene Concrete Additive · NABL Validated</div>
      </div>

      {/* HERO STAT */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #140800, #221200)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: Math.round(2 * s), flexShrink: 0 }}>
        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(28, Math.round(44 * s)), fontWeight: 700, color: C_LIGHT, letterSpacing: '0.02em', lineHeight: 1 }}>+50%</div>
        <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Compressive Strength · 0.05–0.10% Dosage Only</div>
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #0e0600 0%, #050505 100%)', flexShrink: 0 }}>
        <svg viewBox="0 0 200 200" style={{ width: Math.round(W * 0.72), height: Math.round(visualH * 0.88) }}>
          {/* Outer glow */}
          <circle cx="100" cy="100" r="88" fill="none" stroke={C} strokeWidth="0.4" opacity="0.15" />
          {/* 6 outer hexagons */}
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (Math.PI / 3) * i; const cx = 100 + 68 * Math.cos(a); const cy = 100 + 68 * Math.sin(a)
            const pts = Array.from({ length: 6 }, (_, j) => { const b = (Math.PI / 3) * j - Math.PI / 6; return `${cx + 18 * Math.cos(b)},${cy + 18 * Math.sin(b)}` }).join(' ')
            return <polygon key={i} points={pts} fill={C_DARK} stroke={C} strokeWidth="1.2" opacity="0.7" />
          })}
          {/* Center hex */}
          <polygon points="100,58 128,74 128,106 100,122 72,106 72,74" fill={C_DARK} stroke={C} strokeWidth="2" opacity="0.9" />
          <polygon points="100,67 120,78 120,102 100,113 80,102 80,78" fill={C} opacity="0.85" />
          <text x="100" y="97" textAnchor="middle" fill="white" fontSize="16" fontWeight="700" fontFamily="Rajdhani">G+</text>
          {/* Strength arrows */}
          <path d="M18 100 L36 88 L36 96 L62 96 L62 104 L36 104 L36 112 Z" fill={C} opacity="0.65" />
          <path d="M182 100 L164 88 L164 96 L138 96 L138 104 L164 104 L164 112 Z" fill={C} opacity="0.65" />
          {/* Spoke lines */}
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (Math.PI / 3) * i
            return <line key={i} x1={100 + 30 * Math.cos(a)} y1={100 + 30 * Math.sin(a)} x2={100 + 50 * Math.cos(a)} y2={100 + 50 * Math.sin(a)} stroke={C_LIGHT} strokeWidth="0.8" opacity="0.4" />
          })}
          {/* NABL badge */}
          <rect x="156" y="12" width="36" height="16" rx="3" fill={C_DARK} stroke={C} strokeWidth="0.8" />
          <text x="174" y="23" textAnchor="middle" fill={C_LIGHT} fontSize="8" fontWeight="700" fontFamily="Rajdhani">NABL</text>
        </svg>
        <div style={{ position: 'absolute', top: Math.round(8 * s), left: Math.round(8 * s), background: `${C}22`, border: `1px solid ${C}`, borderRadius: Math.round(4 * s), padding: `${Math.round(4 * s)}px ${Math.round(7 * s)}px`, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani', fontSize: Math.max(9, Math.round(12 * s)), color: C_LIGHT, fontWeight: 700, lineHeight: 1 }}>IS 456</div>
          <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Certified</div>
        </div>
        <div style={{ position: 'absolute', bottom: Math.round(8 * s), right: Math.round(8 * s), fontSize: Math.max(6, Math.round(8 * s)), color: C, fontStyle: 'italic' }}>M20–M70 grade compatible</div>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', flexWrap: 'wrap', gap: Math.round(2 * s), padding: `${Math.round(6 * s)}px ${Math.round(8 * s)}px`, background: '#0d0600', flexShrink: 0 }}>
        {STATS.map(({ val, lab }) => (
          <div key={val} style={{ flex: '1 1 30%', background: 'linear-gradient(135deg, #1c0a00, #2d1600)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s), minHeight: Math.round(34 * s) }}>
            <div style={{ fontSize: Math.max(10, Math.round(15 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #1c0a00, #2d1600)', borderTop: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
        <div style={{ fontSize: Math.max(6, Math.round(9 * s)), color: '#fff', letterSpacing: '0.1em', fontStyle: 'italic' }}>Build Stronger. Build Smarter.</div>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), color: C, letterSpacing: '0.1em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
