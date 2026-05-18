import React from 'react'

const W_FT = 3
const H_FT = 6
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#f59e0b'
const C_LIGHT = '#fcd34d'
const C_DARK = '#b45309'

const STATS = [
  { val: '+12%',    lab: 'Power Output' },
  { val: '5–6°C',  lab: 'Panel Cooling' },
  { val: '−40%',   lab: 'Soiling Loss' },
  { val: '150+ MW',lab: 'Deployed' },
  { val: '3–5 YR', lab: 'Coating Life' },
]

export default function GraffisolV1_3x6({ scale = 1 }) {
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
        {/* Solar panel grid */}
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 7 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={col * 44} y={row * 58} width={40} height={54} rx="2" fill="none" stroke={C} strokeWidth="0.5" />
          ))
        )}
        {/* Sun rays */}
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (Math.PI * 2 / 10) * i; const cx = BASE_W * 0.5; const cy = BASE_H * 0.36
          return <line key={i} x1={cx + 50 * Math.cos(a)} y1={cy + 50 * Math.sin(a)} x2={cx + 130 * Math.cos(a)} y2={cy + 130 * Math.sin(a)} stroke={C} strokeWidth="0.6" opacity="0.5" />
        })}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #1a0e00, #2a1800)', borderBottom: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s), flexShrink: 0 }}>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600 }}>MONOATOM LABS</div>
        <div style={{ fontSize: Math.max(16, Math.round(26 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>GRAFFISOL</div>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C_LIGHT, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Graphene Solar Panel Coating · 150+ MW Deployed</div>
      </div>

      {/* HERO STAT */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #150900, #231400)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: Math.round(2 * s), flexShrink: 0 }}>
        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(28, Math.round(44 * s)), fontWeight: 700, color: C_LIGHT, letterSpacing: '0.02em', lineHeight: 1 }}>+12%</div>
        <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Power Output Gain · Anti-Reflection + Thermal + Hydrophobic</div>
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #120900 0%, #050505 100%)', flexShrink: 0 }}>
        <svg viewBox="0 0 200 200" style={{ width: Math.round(W * 0.72), height: Math.round(visualH * 0.88) }}>
          {/* Outer glow */}
          <circle cx="100" cy="100" r="86" fill="none" stroke={C} strokeWidth="0.4" opacity="0.18" />
          {/* Sun body */}
          <circle cx="100" cy="100" r="62" fill={C_DARK} stroke={C} strokeWidth="1.5" opacity="0.55" />
          {/* Solar cells hex arrangement */}
          {[{ x: 100, y: 100 }, ...Array.from({ length: 6 }, (_, i) => {
            const a = (Math.PI / 3) * i; return { x: 100 + 38 * Math.cos(a), y: 100 + 38 * Math.sin(a) }
          })].map(({ x, y }, i) => (
            <rect key={i} x={x - 14} y={y - 14} width="28" height="28" rx="2" fill={C_DARK} stroke={i === 0 ? C_LIGHT : C} strokeWidth={i === 0 ? 1.2 : 0.8} opacity={i === 0 ? 0.95 : 0.8} />
          ))}
          {/* Sun burst lines */}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (Math.PI * 2 / 8) * i
            return <line key={i} x1={100 + 66 * Math.cos(a)} y1={100 + 66 * Math.sin(a)} x2={100 + 84 * Math.cos(a)} y2={100 + 84 * Math.sin(a)} stroke={C} strokeWidth="2" opacity="0.7" />
          })}
          {/* Efficiency arrows up */}
          <path d="M100 162 L92 180 L96 180 L96 192 L104 192 L104 180 L108 180 Z" fill={C} opacity="0.6" />
          {/* GNP label */}
          <text x="100" y="104" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Rajdhani">GNP</text>
          {/* NABL badge */}
          <rect x="4" y="8" width="32" height="14" rx="2" fill={C_DARK} stroke={C} strokeWidth="0.7" />
          <text x="20" y="18" textAnchor="middle" fill={C_LIGHT} fontSize="7" fontWeight="700" fontFamily="Rajdhani">NABL</text>
        </svg>
        <div style={{ position: 'absolute', top: Math.round(8 * s), right: Math.round(8 * s), background: `${C}22`, border: `1px solid ${C}`, borderRadius: Math.round(4 * s), padding: `${Math.round(4 * s)}px ${Math.round(7 * s)}px`, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani', fontSize: Math.max(9, Math.round(12 * s)), color: C_LIGHT, fontWeight: 700, lineHeight: 1 }}>26+</div>
          <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Projects</div>
        </div>
        <div style={{ position: 'absolute', bottom: Math.round(8 * s), left: Math.round(8 * s), fontSize: Math.max(6, Math.round(8 * s)), color: C, fontStyle: 'italic' }}>₹1,200/kW/yr additional revenue</div>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', flexWrap: 'wrap', gap: Math.round(2 * s), padding: `${Math.round(6 * s)}px ${Math.round(8 * s)}px`, background: '#100800', flexShrink: 0 }}>
        {STATS.map(({ val, lab }) => (
          <div key={val} style={{ flex: '1 1 30%', background: 'linear-gradient(135deg, #1a0e00, #2a1800)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s), minHeight: Math.round(34 * s) }}>
            <div style={{ fontSize: Math.max(10, Math.round(15 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #1a0e00, #2a1800)', borderTop: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
        <div style={{ fontSize: Math.max(6, Math.round(9 * s)), color: '#fff', letterSpacing: '0.1em', fontStyle: 'italic' }}>Harness More. Lose Less.</div>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), color: C, letterSpacing: '0.1em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
