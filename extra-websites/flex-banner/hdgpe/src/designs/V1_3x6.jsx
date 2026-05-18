import React from 'react'

const W_FT = 3
const H_FT = 6
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#06b6d4'
const C_LIGHT = '#67e8f9'

export default function HdgpeV1_3x6({ scale = 1 }) {
  const W = Math.round(BASE_W * scale)
  const H = Math.round(BASE_H * scale)
  const s = scale

  return (
    <div style={{ width: W, height: H, background: '#050505', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      {/* Molecular chain background */}
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, zIndex: 0 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 8 }).map((_, row) => {
          const y = row * 70 + 30
          return (
            <g key={row}>
              {Array.from({ length: 6 }).map((_, col) => {
                const x = col * 50 + 15
                return (
                  <g key={col}>
                    <circle cx={x} cy={y} r="5" fill="none" stroke={C} strokeWidth="0.8" />
                    {col < 5 && <line x1={x + 5} y1={y} x2={x + 45} y2={y} stroke={C} strokeWidth="0.6" />}
                  </g>
                )
              })}
            </g>
          )
        })}
      </svg>

      {/* HEADER — top 15% */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: `${H * 0.15}px`,
        background: 'linear-gradient(135deg, #001a1f 0%, #002d38 100%)', borderBottom: `2px solid ${C}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: Math.round(2 * s), zIndex: 2,
      }}>
        <div style={{ fontSize: Math.max(7, Math.round(9 * s)), fontFamily: "'Outfit', sans-serif", color: C_LIGHT, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 500 }}>MONOATOM LABS</div>
        <div style={{ fontSize: Math.max(16, Math.round(24 * s)), fontFamily: "'Outfit', sans-serif", color: '#ffffff', fontWeight: 800, letterSpacing: '0.06em', lineHeight: 1 }}>HD-G-PE</div>
        <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C, letterSpacing: '0.1em', textTransform: 'uppercase' }}>HDPE Graphene Masterbatch</div>
      </div>

      {/* PRODUCT IMAGE ZONE — 15% to 50% */}
      <div style={{ position: 'absolute', top: `${H * 0.15}px`, left: 0, right: 0, height: `${H * 0.35}px`, overflow: 'hidden', zIndex: 1 }}>
        <img src="/images/hd-g-pe-01.jpg" alt="HD-G-PE" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, #050505 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${C}22, transparent)` }} />
      </div>

      {/* STATS STRIP — 50% to 65% */}
      <div style={{
        position: 'absolute', top: `${H * 0.50}px`, left: 0, right: 0, height: `${H * 0.15}px`,
        background: 'rgba(0,26,31,0.95)', borderTop: `1px solid ${C}44`, borderBottom: `1px solid ${C}44`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: Math.round(10 * s), padding: `0 ${Math.round(8 * s)}px`, zIndex: 2,
      }}>
        {[{ val: '+30%', lab: 'Strength' }, { val: '20×', lab: 'Elongation' }, { val: '₹19K', lab: 'ROI/ton' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center', flex: 1 }}>
            <div style={{ fontSize: Math.max(12, Math.round(18 * s)), fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FEATURE GRID — 65% to 82% */}
      <div style={{
        position: 'absolute', top: `${H * 0.65}px`, left: 0, right: 0, height: `${H * 0.17}px`,
        display: 'flex', gap: Math.round(3 * s), padding: `${Math.round(6 * s)}px ${Math.round(8 * s)}px`,
        background: '#000d12', zIndex: 2,
      }}>
        {[{ val: '+30%', lab: 'Strength' }, { val: '20×', lab: 'Elongation' }, { val: '0.5%', lab: 'Masterbatch' }, { val: '₹19K', lab: 'ROI/ton' }].map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #001a1f, #002d38)', border: `1px solid ${C}`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(11, Math.round(15 * s)), fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER — 82% to 100% */}
      <div style={{
        position: 'absolute', top: `${H * 0.82}px`, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(135deg, #001a1f 0%, #002d38 100%)', borderTop: `2px solid ${C}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: Math.round(2 * s), zIndex: 2,
      }}>
        <div style={{ fontSize: Math.max(6, Math.round(9 * s)), color: '#ffffff', letterSpacing: '0.1em', fontStyle: 'italic' }}>Engineered for Performance.</div>
        <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C, letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
