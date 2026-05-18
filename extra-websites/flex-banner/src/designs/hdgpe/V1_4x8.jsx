import React from 'react'

const W_FT = 4
const H_FT = 8
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

const BENEFITS = [
  'Graphene nano-platelets interleave with HDPE polymer chains — molecular-level reinforcement with no macroscopic filler',
  'Drop-in masterbatch at 0.5–2% loading — compatible with all standard extrusion, blow molding, and injection lines',
  'FSSAI food-grade compatible · ASTM D638 / D256 tested · UV stabilization additive included',
  '₹12–15% revenue premium on pipes & films + 15% material saving through downgauging = ₹19,000/ton net ROI',
]

export default function HdgpeV1_4x8({ scale = 1 }) {
  const W = Math.round(BASE_W * scale)
  const H = Math.round(BASE_H * scale)
  const s = scale

  const headerH   = Math.round(H * 0.12)
  const heroH     = Math.round(H * 0.13)
  const visualH   = Math.round(H * 0.31)
  const statsH    = Math.round(H * 0.20)
  const benefitsH = Math.round(H * 0.14)
  const footerH   = H - headerH - heroH - visualH - statsH - benefitsH

  return (
    <div style={{ width: W, height: H, background: '#050505', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.04 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 12 }).map((_, row) => {
          const y = row * 64 + 20
          return (
            <g key={row}>
              {Array.from({ length: 9 }).map((_, col) => {
                const x = col * 44 + 10
                return (
                  <g key={col}>
                    <circle cx={x} cy={y} r="5" fill="none" stroke={C} strokeWidth="0.7" />
                    {col < 8 && <line x1={x + 5} y1={y} x2={x + 39} y2={y} stroke={C} strokeWidth="0.5" />}
                    {row < 11 && <line x1={x} y1={y + 5} x2={x} y2={y + 32} stroke={C} strokeWidth="0.35" opacity="0.5" />}
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
          <div style={{ fontSize: Math.max(6, Math.round(8 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: Math.round(3 * s) }}>MONOATOM LABS</div>
          <div style={{ fontSize: Math.max(20, Math.round(30 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.08em', lineHeight: 1 }}>HD-G-PE</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: Math.max(7, Math.round(10 * s)), color: C_LIGHT, marginBottom: Math.round(3 * s) }}>HDPE Graphene Masterbatch</div>
          <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C }}>26+ Projects · 12,000+ Tons Enhanced · FSSAI / ASTM</div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #001218, #001e28)', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexShrink: 0, borderBottom: `1px solid ${C}33` }}>
        {[{ val: '+30%', lab: 'Tensile Strength' }, { val: '20×', lab: 'Elongation' }, { val: '+32%', lab: 'Impact Strength' }, { val: '₹19K', lab: 'ROI per Ton' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(22, Math.round(36 * s)), fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(8 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #001018, #050505)', flexShrink: 0 }}>
        <svg viewBox="0 0 340 210" style={{ width: Math.round(W * 0.88), height: Math.round(visualH * 0.92) }}>
          <circle cx="100" cy="105" r="86" fill="none" stroke={C} strokeWidth="0.4" opacity="0.15" />
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (Math.PI * 2 / 8) * i; const cx = 100 + 64 * Math.cos(a); const cy = 105 + 64 * Math.sin(a)
            const na = (Math.PI * 2 / 8) * ((i + 1) % 8); const nx = 100 + 64 * Math.cos(na); const ny = 105 + 64 * Math.sin(na)
            return (
              <g key={i}>
                <circle cx={cx} cy={cy} r="11" fill={C_DARK} stroke={C} strokeWidth="1.2" opacity="0.9" />
                <text x={cx} y={cy + 4} textAnchor="middle" fill={C_LIGHT} fontSize="7" fontWeight="600" fontFamily="Rajdhani">CH₂</text>
                <line x1={cx} y1={cy} x2={nx} y2={ny} stroke={C} strokeWidth="0.8" opacity="0.3" />
              </g>
            )
          })}
          <polygon points="100,78 124,91 124,117 100,130 76,117 76,91" fill={C_DARK} stroke={C} strokeWidth="2" opacity="0.9" />
          <polygon points="100,87 116,96 116,114 100,123 84,114 84,96" fill={C} opacity="0.85" />
          <text x="100" y="109" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="Rajdhani">GNP</text>
          {Array.from({ length: 8 }).map((_, i) => { const a = (Math.PI * 2 / 8) * i; return <line key={i} x1={100 + 22 * Math.cos(a)} y1={105 + 22 * Math.sin(a)} x2={100 + 54 * Math.cos(a)} y2={105 + 54 * Math.sin(a)} stroke={C} strokeWidth="0.6" opacity="0.3" /> })}
          <line x1="192" y1="15" x2="192" y2="198" stroke={C} strokeWidth="0.4" opacity="0.25" />
          {['✓ Molecular HDPE reinforcement', '✓ +30% tensile · 20× elongation', '✓ 0.5–2% drop-in masterbatch', '✓ All processing methods compatible', '✓ FSSAI · ASTM D638 · D256 certified', '✓ 12,000+ MT enhanced in field'].map((txt, i) => (
            <text key={i} x="270" y={40 + i * 28} textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">{txt}</text>
          ))}
        </svg>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', gap: Math.round(3 * s), padding: `${Math.round(7 * s)}px ${Math.round(10 * s)}px`, background: '#000d12', flexShrink: 0 }}>
        {STATS.map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #001a1f, #002d38)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(11, Math.round(16 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* BENEFITS */}
      <div style={{ height: benefitsH, background: '#000a0f', borderTop: `1px solid ${C}33`, borderBottom: `1px solid ${C}33`, padding: `${Math.round(6 * s)}px ${Math.round(14 * s)}px`, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', flexShrink: 0 }}>
        {BENEFITS.map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: Math.round(6 * s) }}>
            <span style={{ color: C, fontSize: Math.max(7, Math.round(9 * s)), flexShrink: 0 }}>✓</span>
            <span style={{ color: C_LIGHT, fontSize: Math.max(6, Math.round(8 * s)), lineHeight: 1.4, opacity: 0.85 }}>{b}</span>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #001a1f, #002d38)', borderTop: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px` }}>
        <div style={{ fontSize: Math.max(7, Math.round(10 * s)), color: '#fff', fontStyle: 'italic' }}>Engineered for Performance.</div>
        <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C, letterSpacing: '0.12em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
