import React from 'react'

const W_FT = 4
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
  { val: '>98%',   lab: 'Light Trans.' },
  { val: '3–5 YR', lab: 'Coating Life' },
  { val: '150+',   lab: 'MW Deployed' },
]

export default function GraffisolV1_4x6({ scale = 1 }) {
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
        {Array.from({ length: 10 }).map((_, row) =>
          Array.from({ length: 9 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={col * 44} y={row * 58} width={40} height={54} rx="2" fill="none" stroke={C} strokeWidth="0.5" />
          ))
        )}
        {Array.from({ length: 10 }).map((_, i) => {
          const a = (Math.PI * 2 / 10) * i; const cx = BASE_W * 0.42; const cy = BASE_H * 0.36
          return <line key={i} x1={cx + 50 * Math.cos(a)} y1={cy + 50 * Math.sin(a)} x2={cx + 130 * Math.cos(a)} y2={cy + 130 * Math.sin(a)} stroke={C} strokeWidth="0.6" opacity="0.5" />
        })}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #1a0e00, #2a1800)', borderBottom: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px`, flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: Math.max(6, Math.round(7 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: Math.round(3 * s) }}>MONOATOM LABS</div>
          <div style={{ fontSize: Math.max(18, Math.round(28 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>GRAFFISOL</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: Math.max(7, Math.round(9 * s)), color: C_LIGHT, marginBottom: Math.round(3 * s) }}>Graphene Solar Panel Coating</div>
          <div style={{ fontSize: Math.max(7, Math.round(8 * s)), color: C }}>Anti-reflection · Thermal cooling · Hydrophobic · 3-in-1</div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #150900, #231400)', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexShrink: 0 }}>
        {[{ val: '+12%', lab: 'Power Output' }, { val: '5–6°C', lab: 'Panel Temp. Drop' }, { val: '−40%', lab: 'Soiling Loss' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(20, Math.round(32 * s)), fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #120900, #050505)', flexShrink: 0 }}>
        <svg viewBox="0 0 340 200" style={{ width: Math.round(W * 0.88), height: Math.round(visualH * 0.9) }}>
          {/* Left sun visual */}
          <circle cx="95" cy="100" r="58" fill={C_DARK} stroke={C} strokeWidth="1.4" opacity="0.5" />
          {[{ x: 95, y: 100 }, ...Array.from({ length: 6 }, (_, i) => {
            const a = (Math.PI / 3) * i; return { x: 95 + 34 * Math.cos(a), y: 100 + 34 * Math.sin(a) }
          })].map(({ x, y }, i) => (
            <rect key={i} x={x - 12} y={y - 12} width="24" height="24" rx="2" fill={C_DARK} stroke={i === 0 ? C_LIGHT : C} strokeWidth={i === 0 ? 1.2 : 0.8} opacity={i === 0 ? 0.95 : 0.8} />
          ))}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (Math.PI * 2 / 8) * i
            return <line key={i} x1={95 + 60 * Math.cos(a)} y1={100 + 60 * Math.sin(a)} x2={95 + 76 * Math.cos(a)} y2={100 + 76 * Math.sin(a)} stroke={C} strokeWidth="2" opacity="0.65" />
          })}
          <circle cx="95" cy="100" r="85" fill="none" stroke={C} strokeWidth="0.4" opacity="0.2" />
          <text x="95" y="104" textAnchor="middle" fill="white" fontSize="9" fontWeight="700" fontFamily="Rajdhani">GNP</text>
          {/* Divider */}
          <line x1="185" y1="15" x2="185" y2="185" stroke={C} strokeWidth="0.4" opacity="0.25" />
          {/* Right benefits */}
          {['✓ +10–12% power output gain', '✓ 5–6°C panel temperature reduction', '✓ 60–70% cleaning cost reduction', '✓ 3–5 year durable nano coating', '✓ ₹1,200/kW/yr revenue addition'].map((txt, i) => (
            <text key={i} x="268" y={48 + i * 28} textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">{txt}</text>
          ))}
        </svg>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', gap: Math.round(3 * s), padding: `${Math.round(7 * s)}px ${Math.round(10 * s)}px`, background: '#100800', flexShrink: 0 }}>
        {STATS.map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #1a0e00, #2a1800)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(10, Math.round(14 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #1a0e00, #2a1800)', borderTop: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px` }}>
        <div style={{ fontSize: Math.max(7, Math.round(9 * s)), color: '#fff', fontStyle: 'italic' }}>Harness More. Lose Less.</div>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), color: C, letterSpacing: '0.12em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
