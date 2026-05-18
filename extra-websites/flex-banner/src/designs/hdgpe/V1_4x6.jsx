import React from 'react'

const W_FT = 4
const H_FT = 6
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#06b6d4'
const C_LIGHT = '#67e8f9'
const C_DARK = '#164e63'

const STATS = [
  { val: '+30%',  lab: 'Tensile' },
  { val: '20×',   lab: 'Elongation' },
  { val: '+32%',  lab: 'Impact' },
  { val: '0.5%',  lab: 'Min Dose' },
  { val: '+20%',  lab: 'UV Life' },
  { val: '₹19K',  lab: 'ROI/ton' },
]

export default function HdgpeV1_4x6({ scale = 1 }) {
  const W = Math.round(BASE_W * scale)
  const H = Math.round(BASE_H * scale)
  const s = scale

  const headerH = Math.round(H * 0.14)
  const heroH   = Math.round(H * 0.15)
  const visualH = Math.round(H * 0.34)
  const statsH  = Math.round(H * 0.25)
  const footerH = H - headerH - heroH - visualH - statsH

  return (
    <div style={{ width: W, height: H, background: '#050505', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 9 }).map((_, row) => {
          const y = row * 64 + 20
          return (
            <g key={row}>
              {Array.from({ length: 9 }).map((_, col) => {
                const x = col * 44 + 10
                return (
                  <g key={col}>
                    <circle cx={x} cy={y} r="5" fill="none" stroke={C} strokeWidth="0.7" />
                    {col < 8 && <line x1={x + 5} y1={y} x2={x + 39} y2={y} stroke={C} strokeWidth="0.5" />}
                    {row < 8 && <line x1={x} y1={y + 5} x2={x} y2={y + 32} stroke={C} strokeWidth="0.35" opacity="0.5" />}
                  </g>
                )
              })}
            </g>
          )
        })}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #001a1f, #002d38)', borderBottom: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px`, flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: Math.max(6, Math.round(7 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: Math.round(3 * s) }}>MONOATOM LABS</div>
          <div style={{ fontSize: Math.max(18, Math.round(28 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.08em', lineHeight: 1 }}>HD-G-PE</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: Math.max(7, Math.round(9 * s)), color: C_LIGHT, marginBottom: Math.round(3 * s) }}>HDPE Graphene Masterbatch</div>
          <div style={{ fontSize: Math.max(7, Math.round(8 * s)), color: C }}>Drop-in · No retooling · FSSAI compatible · ASTM D638</div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #001218, #001e28)', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexShrink: 0 }}>
        {[{ val: '+30%', lab: 'Tensile Strength' }, { val: '20×', lab: 'Elongation' }, { val: '+32%', lab: 'Impact Strength' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(20, Math.round(32 * s)), fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #001018, #050505)', flexShrink: 0 }}>
        <svg viewBox="0 0 340 200" style={{ width: Math.round(W * 0.88), height: Math.round(visualH * 0.9) }}>
          {/* Left — polymer chain hex */}
          <circle cx="95" cy="100" r="84" fill="none" stroke={C} strokeWidth="0.4" opacity="0.15" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (Math.PI * 2 / 8) * i; const cx = 95 + 60 * Math.cos(a); const cy = 100 + 60 * Math.sin(a)
            const na = (Math.PI * 2 / 8) * ((i + 1) % 8); const nx = 95 + 60 * Math.cos(na); const ny = 100 + 60 * Math.sin(na)
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r="10" fill={C_DARK} stroke={C} strokeWidth="1.1" opacity="0.88" />
                <text x={cx} y={cy + 4} textAnchor="middle" fill={C_LIGHT} fontSize="6" fontWeight="600" fontFamily="Rajdhani">CH₂</text>
                <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={C} strokeWidth="0.7" opacity="0.3" />
              </g>
            )
          })}
          <polygon points="95,76 117,88 117,112 95,124 73,112 73,88" fill={C_DARK} stroke={C} strokeWidth="1.8" opacity="0.9" />
          <polygon points="95,84 109,92 109,108 95,116 81,108 81,92" fill={C} opacity="0.85" />
          <text x="95" y="104" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Rajdhani">GNP</text>
          {Array.from({ length: 8 }).map((_, i) => { const a = (Math.PI * 2 / 8) * i; return <line key={i} x1={95 + 20 * Math.cos(a)} y1={100 + 20 * Math.sin(a)} x2={95 + 50 * Math.cos(a)} y2={100 + 50 * Math.sin(a)} stroke={C} strokeWidth="0.6" opacity="0.3" /> })}
          <line x1="188" y1="15" x2="188" y2="185" stroke={C} strokeWidth="0.4" opacity="0.25" />
          {['✓ +30% tensile (ASTM D638)', '✓ 20× elongation at break', '✓ 0.5–2% masterbatch — no equipment change', '✓ Works: extrusion, blow molding, injection', '✓ FSSAI food-grade compatible'].map((txt, i) => (
            <text key={i} x="268" y={48 + i * 28} textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">{txt}</text>
          ))}
        </svg>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', gap: Math.round(3 * s), padding: `${Math.round(7 * s)}px ${Math.round(10 * s)}px`, background: '#000d12', flexShrink: 0 }}>
        {STATS.map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #001a1f, #002d38)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(10, Math.round(14 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #001a1f, #002d38)', borderTop: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px` }}>
        <div style={{ fontSize: Math.max(7, Math.round(9 * s)), color: '#fff', fontStyle: 'italic' }}>Engineered for Performance.</div>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), color: C, letterSpacing: '0.12em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
