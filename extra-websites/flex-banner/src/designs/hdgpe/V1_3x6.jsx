import React from 'react'

const W_FT = 3
const H_FT = 6
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#06b6d4'
const C_LIGHT = '#67e8f9'
const C_DARK = '#164e63'

const STATS = [
  { val: '+30%',  lab: 'Tensile Strength' },
  { val: '20×',   lab: 'Elongation' },
  { val: '+32%',  lab: 'Impact Strength' },
  { val: '0.5%',  lab: 'Min Dosage' },
  { val: '+20%',  lab: 'UV Lifespan' },
]

export default function HdgpeV1_3x6({ scale = 1 }) {
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
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.045 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {/* Polymer chain grid */}
        {Array.from({ length: 9 }).map((_, row) => {
          const y = row * 64 + 20
          return (
            <g key={row}>
              {Array.from({ length: 7 }).map((_, col) => {
                const x = col * 44 + 10
                return (
                  <g key={col}>
                    <circle cx={x} cy={y} r="5" fill="none" stroke={C} strokeWidth="0.7" />
                    {col < 6 && <line x1={x + 5} y1={y} x2={x + 39} y2={y} stroke={C} strokeWidth="0.5" />}
                    {row < 8 && <line x1={x} y1={y + 5} x2={x} y2={y + 32} stroke={C} strokeWidth="0.35" opacity="0.5" />}
                  </g>
                )
              })}
            </g>
          )
        })}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #001a1f, #002d38)', borderBottom: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s), flexShrink: 0 }}>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600 }}>MONOATOM LABS</div>
        <div style={{ fontSize: Math.max(16, Math.round(26 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.08em', lineHeight: 1 }}>HD-G-PE</div>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C_LIGHT, letterSpacing: '0.1em', textTransform: 'uppercase' }}>HDPE Graphene Masterbatch · Drop-In · No Retooling</div>
      </div>

      {/* HERO STAT */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #001218, #001e28)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: Math.round(2 * s), flexShrink: 0 }}>
        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(28, Math.round(44 * s)), fontWeight: 700, color: C_LIGHT, letterSpacing: '0.02em', lineHeight: 1 }}>+30%</div>
        <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Tensile Strength · 20× Elongation · 0.5–2% Masterbatch</div>
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #001018 0%, #050505 100%)', flexShrink: 0 }}>
        <svg viewBox="0 0 200 200" style={{ width: Math.round(W * 0.72), height: Math.round(visualH * 0.88) }}>
          <circle cx="100" cy="100" r="88" fill="none" stroke={C} strokeWidth="0.4" opacity="0.15" />
          {/* Polymer chain ring */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (Math.PI * 2 / 8) * i; const cx = 100 + 66 * Math.cos(a); const cy = 100 + 66 * Math.sin(a)
            const na = (Math.PI * 2 / 8) * ((i + 1) % 8); const nx = 100 + 66 * Math.cos(na); const ny = 100 + 66 * Math.sin(na)
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r="11" fill={C_DARK} stroke={C} strokeWidth="1.2" opacity="0.9" />
                <text x={cx} y={cy + 4} textAnchor="middle" fill={C_LIGHT} fontSize="7" fontWeight="600" fontFamily="Rajdhani">CH₂</text>
                <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={C} strokeWidth="0.8" opacity="0.35" />
              </g>
            )
          })}
          {/* Center graphene hex */}
          <polygon points="100,76 124,89 124,115 100,128 76,115 76,89" fill={C_DARK} stroke={C} strokeWidth="2" opacity="0.9" />
          <polygon points="100,85 116,94 116,112 100,121 84,112 84,94" fill={C} opacity="0.85" />
          <text x="100" y="106" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Rajdhani">GNP</text>
          {/* Spokes */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (Math.PI * 2 / 8) * i
            return <line key={i} x1={100 + 22 * Math.cos(a)} y1={100 + 22 * Math.sin(a)} x2={100 + 55 * Math.cos(a)} y2={100 + 55 * Math.sin(a)} stroke={C} strokeWidth="0.6" opacity="0.3" />
          })}
          {/* FSSAI badge */}
          <rect x="148" y="8" width="44" height="14" rx="3" fill={C_DARK} stroke={C} strokeWidth="0.7" />
          <text x="170" y="18" textAnchor="middle" fill={C_LIGHT} fontSize="7" fontWeight="700" fontFamily="Rajdhani">FSSAI</text>
        </svg>
        <div style={{ position: 'absolute', top: Math.round(8 * s), left: Math.round(8 * s), background: `${C}22`, border: `1px solid ${C}`, borderRadius: Math.round(4 * s), padding: `${Math.round(4 * s)}px ${Math.round(7 * s)}px`, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani', fontSize: Math.max(9, Math.round(12 * s)), color: C_LIGHT, fontWeight: 700, lineHeight: 1 }}>20×</div>
          <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Elongation</div>
        </div>
        <div style={{ position: 'absolute', bottom: Math.round(8 * s), right: Math.round(8 * s), fontSize: Math.max(6, Math.round(8 * s)), color: C, fontStyle: 'italic' }}>₹19,000 ROI per ton</div>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', flexWrap: 'wrap', gap: Math.round(2 * s), padding: `${Math.round(6 * s)}px ${Math.round(8 * s)}px`, background: '#000d12', flexShrink: 0 }}>
        {STATS.map(({ val, lab }) => (
          <div key={val} style={{ flex: '1 1 30%', background: 'linear-gradient(135deg, #001a1f, #002d38)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s), minHeight: Math.round(34 * s) }}>
            <div style={{ fontSize: Math.max(10, Math.round(15 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #001a1f, #002d38)', borderTop: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
        <div style={{ fontSize: Math.max(6, Math.round(9 * s)), color: '#fff', letterSpacing: '0.1em', fontStyle: 'italic' }}>Engineered for Performance.</div>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), color: C, letterSpacing: '0.1em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
