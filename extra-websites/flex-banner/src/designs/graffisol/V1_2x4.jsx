import React from 'react'

const W_FT = 2
const H_FT = 4
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#f59e0b'
const C_LIGHT = '#fcd34d'
const C_DARK = '#b45309'

export default function GraffisolV1_2x4({ scale = 1 }) {
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
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={col * 40} y={row * 52} width={36} height={48} rx="2" fill="none" stroke={C} strokeWidth="0.5" />
          ))
        )}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #1a0e00, #2a1800)', borderBottom: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s), flexShrink: 0 }}>
        <div style={{ fontSize: Math.max(5, Math.round(6 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.2em', textTransform: 'uppercase' }}>MONOATOM LABS</div>
        <div style={{ fontSize: Math.max(14, Math.round(22 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>GRAFFISOL</div>
        <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C_LIGHT }}>Solar Panel Coating</div>
      </div>

      {/* HERO */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #150900, #231400)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: Math.round(14 * s), flexShrink: 0 }}>
        {[{ val: '+12%', lab: 'Power' }, { val: '5–6°C', lab: 'Cooler' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(18, Math.round(28 * s)), fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, #120900, #050505)', flexShrink: 0 }}>
        <svg viewBox="0 0 140 160" style={{ width: Math.round(W * 0.72), height: Math.round(visualH * 0.88) }}>
          <circle cx="70" cy="80" r="44" fill={C_DARK} stroke={C} strokeWidth="1.2" opacity="0.5" />
          {[{ x: 70, y: 80 }, ...Array.from({ length: 6 }, (_, i) => {
            const a = (Math.PI / 3) * i; return { x: 70 + 26 * Math.cos(a), y: 80 + 26 * Math.sin(a) }
          })].map(({ x, y }, i) => (
            <rect key={i} x={x - 9} y={y - 9} width="18" height="18" rx="1.5" fill={C_DARK} stroke={i === 0 ? C_LIGHT : C} strokeWidth={i === 0 ? 1 : 0.7} opacity={i === 0 ? 0.95 : 0.8} />
          ))}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (Math.PI * 2 / 8) * i
            return <line key={i} x1={70 + 46 * Math.cos(a)} y1={80 + 46 * Math.sin(a)} x2={70 + 58 * Math.cos(a)} y2={80 + 58 * Math.sin(a)} stroke={C} strokeWidth="1.5" opacity="0.65" />
          })}
          <circle cx="70" cy="80" r="62" fill="none" stroke={C} strokeWidth="0.4" opacity="0.18" />
          <text x="70" y="84" textAnchor="middle" fill="white" fontSize="8" fontWeight="700" fontFamily="Rajdhani">GNP</text>
          <path d="M70 130 L64 142 L67 142 L67 152 L73 152 L73 142 L76 142 Z" fill={C} opacity="0.6" />
        </svg>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', gap: Math.round(2 * s), padding: `${Math.round(5 * s)}px ${Math.round(6 * s)}px`, background: '#100800', flexShrink: 0 }}>
        {[{ val: '−40%', lab: 'Soiling' }, { val: '3–5 YR', lab: 'Life' }, { val: '150+ MW', lab: 'Deployed' }].map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #1a0e00, #2a1800)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(9, Math.round(12 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(4, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #1a0e00, #2a1800)', borderTop: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: '#fff', fontStyle: 'italic' }}>Harness More. Lose Less.</div>
        <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, letterSpacing: '0.1em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
