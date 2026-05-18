import React from 'react'

const W_FT = 4
const H_FT = 6
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#d97706'
const C_LIGHT = '#fbbf24'
const C_DARK = '#92400e'

const STATS = [
  { val: '+50%',  lab: 'Comp. Strength' },
  { val: '−15%',  lab: 'Cement' },
  { val: '+40%',  lab: 'Flexural' },
  { val: '0.05%', lab: 'Min Dosage' },
  { val: '−45%',  lab: 'Permeability' },
  { val: 'NABL',  lab: 'Validated' },
]

export default function GraphacreteV1_4x6({ scale = 1 }) {
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
        {Array.from({ length: 18 }).map((_, row) =>
          Array.from({ length: 16 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={col * 26} y={row * 26} width={24} height={24} fill="none" stroke={C} strokeWidth="0.5" opacity="0.6" />
          ))
        )}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #1c0a00, #2d1600)', borderBottom: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px`, flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: Math.max(6, Math.round(7 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: Math.round(3 * s) }}>MONOATOM LABS</div>
          <div style={{ fontSize: Math.max(18, Math.round(28 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.08em', lineHeight: 1 }}>GRAPHACRETE</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: Math.max(7, Math.round(9 * s)), color: C_LIGHT, marginBottom: Math.round(3 * s) }}>Graphene Concrete Additive</div>
          <div style={{ fontSize: Math.max(7, Math.round(8 * s)), color: C }}>NABL Validated · IS 456 / ASTM C1240 Compliant</div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #140800, #221200)', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexShrink: 0 }}>
        {[{ val: '+50%', lab: 'Compressive Strength' }, { val: '−15%', lab: 'Cement Saved' }, { val: '0.05%', lab: 'Dosage Required' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(20, Math.round(32 * s)), fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #0e0600, #050505)', flexShrink: 0 }}>
        <svg viewBox="0 0 340 200" style={{ width: Math.round(W * 0.88), height: Math.round(visualH * 0.9) }}>
          {/* Left — graphene hex cluster */}
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (Math.PI / 3) * i; const cx = 95 + 58 * Math.cos(a); const cy = 100 + 58 * Math.sin(a)
            const pts = Array.from({ length: 6 }, (_, j) => { const b = (Math.PI / 3) * j - Math.PI / 6; return `${cx + 16 * Math.cos(b)},${cy + 16 * Math.sin(b)}` }).join(' ')
            return <polygon key={i} points={pts} fill={C_DARK} stroke={C} strokeWidth="1.1" opacity="0.7" />
          })}
          <polygon points="95,65 119,78 119,104 95,117 71,104 71,78" fill={C_DARK} stroke={C} strokeWidth="1.8" opacity="0.9" />
          <polygon points="95,73 112,82 112,100 95,109 78,100 78,82" fill={C} opacity="0.85" />
          <text x="95" y="99" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Rajdhani">G+</text>
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (Math.PI / 3) * i
            return <line key={i} x1={95 + 26 * Math.cos(a)} y1={100 + 26 * Math.sin(a)} x2={95 + 42 * Math.cos(a)} y2={100 + 42 * Math.sin(a)} stroke={C_LIGHT} strokeWidth="0.8" opacity="0.4" />
          })}
          <path d="M20 100 L36 90 L36 97 L58 97 L58 103 L36 103 L36 110 Z" fill={C} opacity="0.65" />
          <path d="M170 100 L154 90 L154 97 L132 97 L132 103 L154 103 L154 110 Z" fill={C} opacity="0.65" />
          {/* Divider */}
          <line x1="188" y1="15" x2="188" y2="185" stroke={C} strokeWidth="0.4" opacity="0.25" />
          {/* Right benefits */}
          {['✓ 40–50% compressive gain (28-day)', '✓ 15–20% cement reduction per m³', '✓ IS 456 & ASTM C1240 certified', '✓ Lowest dosage: 0.05–0.10%', '✓ Net Zero 2070 contribution'].map((txt, i) => (
            <text key={i} x="268" y={48 + i * 28} textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">{txt}</text>
          ))}
        </svg>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', gap: Math.round(3 * s), padding: `${Math.round(7 * s)}px ${Math.round(10 * s)}px`, background: '#0d0600', flexShrink: 0 }}>
        {STATS.map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #1c0a00, #2d1600)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(10, Math.round(14 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #1c0a00, #2d1600)', borderTop: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px` }}>
        <div style={{ fontSize: Math.max(7, Math.round(9 * s)), color: '#fff', fontStyle: 'italic' }}>Build Stronger. Build Smarter.</div>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), color: C, letterSpacing: '0.12em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
