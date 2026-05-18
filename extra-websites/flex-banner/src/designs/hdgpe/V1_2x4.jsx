import React from 'react'

const W_FT = 2
const H_FT = 4
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#06b6d4'
const C_LIGHT = '#67e8f9'
const C_DARK = '#164e63'

export default function HdgpeV1_2x4({ scale = 1 }) {
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
        {Array.from({ length: 6 }).map((_, row) => {
          const y = row * 62 + 18
          return (
            <g key={row}>
              {Array.from({ length: 5 }).map((_, col) => {
                const x = col * 42 + 8
                return (
                  <g key={col}>
                    <circle cx={x} cy={y} r="4" fill="none" stroke={C} strokeWidth="0.7" />
                    {col < 4 && <line x1={x + 4} y1={y} x2={x + 38} y2={y} stroke={C} strokeWidth="0.5" />}
                    {row < 5 && <line x1={x} y1={y + 4} x2={x} y2={y + 30} stroke={C} strokeWidth="0.35" opacity="0.5" />}
                  </g>
                )
              })}
            </g>
          )
        })}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #001a1f, #002d38)', borderBottom: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s), flexShrink: 0 }}>
        <div style={{ fontSize: Math.max(5, Math.round(6 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.2em', textTransform: 'uppercase' }}>MONOATOM LABS</div>
        <div style={{ fontSize: Math.max(14, Math.round(22 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.08em', lineHeight: 1 }}>HD-G-PE</div>
        <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C_LIGHT }}>HDPE Graphene Masterbatch</div>
      </div>

      {/* HERO */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #001218, #001e28)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: Math.round(14 * s), flexShrink: 0 }}>
        {[{ val: '+30%', lab: 'Tensile' }, { val: '20×', lab: 'Elongation' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(18, Math.round(28 * s)), fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, #001018, #050505)', flexShrink: 0 }}>
        <svg viewBox="0 0 140 160" style={{ width: Math.round(W * 0.72), height: Math.round(visualH * 0.88) }}>
          <circle cx="70" cy="80" r="62" fill="none" stroke={C} strokeWidth="0.4" opacity="0.15" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (Math.PI * 2 / 8) * i; const cx = 70 + 46 * Math.cos(a); const cy = 80 + 46 * Math.sin(a)
            const na = (Math.PI * 2 / 8) * ((i + 1) % 8); const nx = 70 + 46 * Math.cos(na); const ny = 80 + 46 * Math.sin(na)
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r="8" fill={C_DARK} stroke={C} strokeWidth="0.9" opacity="0.88" />
                <text x={cx} y={cy + 3} textAnchor="middle" fill={C_LIGHT} fontSize="5" fontFamily="Rajdhani">CH₂</text>
                <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={C} strokeWidth="0.6" opacity="0.3" />
              </g>
            )
          })}
          <polygon points="70,56 86,65 86,83 70,92 54,83 54,65" fill={C_DARK} stroke={C} strokeWidth="1.6" opacity="0.9" />
          <polygon points="70,63 80,69 80,81 70,87 60,81 60,69" fill={C} opacity="0.85" />
          <text x="70" y="79" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Rajdhani">GNP</text>
          {Array.from({ length: 8 }).map((_, i) => { const a = (Math.PI * 2 / 8) * i; return <line key={i} x1={70 + 16 * Math.cos(a)} y1={80 + 16 * Math.sin(a)} x2={70 + 38 * Math.cos(a)} y2={80 + 38 * Math.sin(a)} stroke={C} strokeWidth="0.5" opacity="0.3" /> })}
        </svg>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', gap: Math.round(2 * s), padding: `${Math.round(5 * s)}px ${Math.round(6 * s)}px`, background: '#000d12', flexShrink: 0 }}>
        {[{ val: '+32%', lab: 'Impact' }, { val: '0.5%', lab: 'Min Dose' }, { val: '₹19K', lab: 'ROI/ton' }].map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #001a1f, #002d38)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(9, Math.round(13 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(4, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #001a1f, #002d38)', borderTop: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: '#fff', fontStyle: 'italic' }}>Engineered for Performance.</div>
        <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, letterSpacing: '0.1em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
