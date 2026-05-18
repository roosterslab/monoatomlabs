import React from 'react'

const W_FT = 2
const H_FT = 4
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#f59e0b'
const C_LIGHT = '#fcd34d'

export default function GraffisolV1_2x4({ scale = 1 }) {
  const W = Math.round(BASE_W * scale)
  const H = Math.round(BASE_H * scale)
  const s = scale

  return (
    <div style={{ width: W, height: H, background: '#050505', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      <svg style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.05, zIndex: 0 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 7 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={col * 38} y={row * 52} width={34} height={48} rx="2" fill="none" stroke={C} strokeWidth="0.6" />
          ))
        )}
      </svg>

      {/* HEADER — top 15% */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: `${H * 0.15}px`,
        background: 'linear-gradient(135deg, #1a0e00 0%, #2a1800 100%)', borderBottom: `1.5px solid ${C}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: Math.round(1.5 * s), zIndex: 2,
      }}>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), fontFamily: "'Outfit', sans-serif", color: C_LIGHT, letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 500 }}>MONOATOM LABS</div>
        <div style={{ fontSize: Math.max(12, Math.round(17 * s)), fontFamily: "'Outfit', sans-serif", color: '#ffffff', fontWeight: 800, letterSpacing: '0.08em', lineHeight: 1 }}>GRAFFISOL</div>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Solar Coating</div>
      </div>

      {/* PRODUCT IMAGE ZONE — 15% to 50% */}
      <div style={{ position: 'absolute', top: `${H * 0.15}px`, left: 0, right: 0, height: `${H * 0.35}px`, overflow: 'hidden', zIndex: 1 }}>
        <img src="/images/graffisol-01.jpg" alt="GRAFFISOL" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, #050505 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to right, ${C}22, transparent)` }} />
      </div>

      {/* STATS STRIP — 50% to 65% */}
      <div style={{
        position: 'absolute', top: `${H * 0.50}px`, left: 0, right: 0, height: `${H * 0.15}px`,
        background: 'rgba(26,14,0,0.95)', borderTop: `1px solid ${C}44`, borderBottom: `1px solid ${C}44`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: Math.round(6 * s), padding: `0 ${Math.round(6 * s)}px`, zIndex: 2,
      }}>
        {[{ val: '+10%', lab: 'Power' }, { val: '5-6°C', lab: 'Cooler' }, { val: '150MW', lab: 'Deployed' }].map(({ val, lab }) => (
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
        background: '#100800', zIndex: 2,
      }}>
        {[{ val: '+10%', lab: 'Power' }, { val: '5-6°C', lab: 'Temp' }, { val: 'Anti', lab: 'Soil' }, { val: 'Hydro', lab: 'Phobic' }].map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #1a0e00, #2a1800)', border: `1px solid ${C}`, borderRadius: Math.round(3 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(1 * s) }}>
            <div style={{ fontSize: Math.max(8, Math.round(11 * s)), fontFamily: "'Outfit', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(4, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.04em' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER — 82% to 100% */}
      <div style={{
        position: 'absolute', top: `${H * 0.82}px`, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(135deg, #1a0e00 0%, #2a1800 100%)', borderTop: `1.5px solid ${C}`,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        gap: Math.round(1.5 * s), zIndex: 2,
      }}>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: '#ffffff', letterSpacing: '0.08em', fontStyle: 'italic' }}>Harness More. Lose Less.</div>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: "'Outfit', sans-serif" }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
