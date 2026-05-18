import React from 'react'

const W_FT = 2
const H_FT = 4
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#d97706'
const C_LIGHT = '#fbbf24'

export default function GraphacreteV1_2x4({ scale = 1 }) {
  const W = Math.round(BASE_W * scale)
  const H = Math.round(BASE_H * scale)
  const s = scale

  return (
    <div style={{ width: W, height: H, background: '#050505', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, zIndex: 0 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 12 }).map((_, row) =>
          Array.from({ length: 7 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={col * 28} y={row * 28} width={26} height={26} fill="none" stroke={C} strokeWidth="0.6" />
          ))
        )}
      </svg>

      {/* HEADER — top 15% */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: `${H * 0.15}px`,
        background: 'linear-gradient(135deg, #1c0a00 0%, #2d1200 100%)', borderBottom: `1.5px solid ${C}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: Math.round(1.5 * s), zIndex: 2,
      }}>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), fontFamily: "'Outfit', sans-serif", color: C_LIGHT, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>MONOATOM LABS</div>
        <div style={{ fontSize: Math.max(12, Math.round(17 * s)), fontFamily: "'Outfit', sans-serif", color: '#ffffff', fontWeight: 800, letterSpacing: '0.06em', lineHeight: 1 }}>GRAPHACRETE</div>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Concrete Additive</div>
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
        gap: Math.round(6 * s), padding: `0 ${Math.round(6 * s)}px`, zIndex: 2,
      }}>
        {[{ val: '+25%', lab: 'Strength' }, { val: '-13%', lab: 'Cement' }, { val: 'NABL', lab: 'Validated' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: Math.max(10, Math.round(13 * s)), fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(4, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.06em', marginTop: Math.round(1 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FEATURE GRID — 65% to 82% */}
      <div style={{
        position: 'absolute', top: `${H * 0.65}px`, left: 0, right: 0, height: `${H * 0.17}px`,
        display: 'flex', gap: Math.round(2 * s), padding: `${Math.round(4 * s)}px ${Math.round(5 * s)}px`,
        background: '#0d0600', zIndex: 2,
      }}>
        {[{ val: '+25%', lab: 'Strength' }, { val: '-13%', lab: 'Cement' }, { val: '2×', lab: 'Life' }, { val: 'NABL', lab: 'Valid' }].map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #1c0a00, #2d1200)', border: `1px solid ${C}`, borderRadius: Math.round(3 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(1 * s) }}>
            <div style={{ fontSize: Math.max(8, Math.round(11 * s)), fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(4, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER — 82% to 100% */}
      <div style={{
        position: 'absolute', top: `${H * 0.82}px`, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(135deg, #1c0a00 0%, #2d1200 100%)', borderTop: `1.5px solid ${C}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: Math.round(1.5 * s), zIndex: 2,
      }}>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: '#ffffff', letterSpacing: '0.08em', fontStyle: 'italic' }}>Build Stronger. Build Smarter.</div>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
