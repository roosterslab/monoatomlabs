import React from 'react'

const W_FT = 4
const H_FT = 6
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#d97706'
const C_LIGHT = '#fbbf24'

export default function GraphacreteV1_4x6({ scale = 1 }) {
  const W = Math.round(BASE_W * scale)
  const H = Math.round(BASE_H * scale)
  const s = scale

  return (
    <div style={{ width: W, height: H, background: '#050505', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, zIndex: 0 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 15 }).map((_, row) =>
          Array.from({ length: 14 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={col * 32} y={row * 32} width={30} height={30} fill="none" stroke={C} strokeWidth="0.6" />
          ))
        )}
      </svg>

      {/* HEADER — top 15% */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: `${H * 0.15}px`,
        background: 'linear-gradient(135deg, #1c0a00 0%, #2d1200 100%)', borderBottom: `2px solid ${C}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: Math.round(2 * s), zIndex: 2,
      }}>
        <div style={{ fontSize: Math.max(7, Math.round(9 * s)), fontFamily: "'Outfit', sans-serif", color: C_LIGHT, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>MONOATOM LABS</div>
        <div style={{ fontSize: Math.max(18, Math.round(26 * s)), fontFamily: "'Outfit', sans-serif", color: '#ffffff', fontWeight: 800, letterSpacing: '0.06em', lineHeight: 1 }}>GRAPHACRETE</div>
        <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C, letterSpacing: '0.1em', textTransform: 'uppercase' }}>Graphene Concrete Additive</div>
      </div>

      {/* PRODUCT IMAGE ZONE — 15% to 50% */}
      <div style={{ position: 'absolute', top: `${H * 0.15}px`, left: 0, right: 0, height: `${H * 0.35}px`, overflow: 'hidden', zIndex: 1 }}>
        <img src="/images/graphacrete-01.jpg" alt="GRAPHACRETE" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, #050505 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${C}22, transparent)` }} />
      </div>

      {/* STATS STRIP — 50% to 65% */}
      <div style={{
        position: 'absolute', top: `${H * 0.50}px`, left: 0, right: 0, height: `${H * 0.15}px`,
        background: 'rgba(28,10,0,0.95)', borderTop: `1px solid ${C}44`, borderBottom: `1px solid ${C}44`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: Math.round(10 * s), padding: `0 ${Math.round(10 * s)}px`, zIndex: 2,
      }}>
        {[{ val: '+25%', lab: 'Compressive Strength' }, { val: '-13%', lab: 'Cement Reduction' }, { val: 'NABL', lab: 'Validated' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: Math.max(14, Math.round(20 * s)), fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FEATURE GRID — 65% to 82% */}
      <div style={{
        position: 'absolute', top: `${H * 0.65}px`, left: 0, right: 0, height: `${H * 0.17}px`,
        display: 'flex', gap: Math.round(3 * s), padding: `${Math.round(6 * s)}px ${Math.round(10 * s)}px`,
        background: '#0d0600', zIndex: 2,
      }}>
        {[{ val: '+25%', lab: 'Strength' }, { val: '-13%', lab: 'Cement Use' }, { val: '2×', lab: 'Lifecycle' }, { val: 'NABL', lab: 'Validated' }].map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #1c0a00, #2d1200)', border: `1px solid ${C}`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(12, Math.round(17 * s)), fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER — 82% to 100% */}
      <div style={{
        position: 'absolute', top: `${H * 0.82}px`, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(135deg, #1c0a00 0%, #2d1200 100%)', borderTop: `2px solid ${C}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: Math.round(2 * s), zIndex: 2,
      }}>
        <div style={{ fontSize: Math.max(6, Math.round(9 * s)), color: '#ffffff', letterSpacing: '0.1em', fontStyle: 'italic' }}>Build Stronger. Build Smarter.</div>
        <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
