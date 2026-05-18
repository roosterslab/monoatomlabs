import React from 'react'

const W_FT = 3
const H_FT = 6
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#64748b'
const C_LIGHT = '#94a3b8'
const C_DARK = '#334155'

const STATS = [
  { val: '9H+',    lab: 'Hardness' },
  { val: '115°',   lab: 'Contact Angle' },
  { val: '3–4 YR', lab: 'Durability' },
  { val: '−70%',   lab: 'Wash Reduction' },
  { val: '₹5K',    lab: 'Per Application' },
]

export default function CerapheneV1_3x6({ scale = 1 }) {
  const W = Math.round(BASE_W * scale)
  const H = Math.round(BASE_H * scale)
  const s = scale

  const headerH   = Math.round(H * 0.14)
  const heroH     = Math.round(H * 0.16)
  const visualH   = Math.round(H * 0.34)
  const statsH    = Math.round(H * 0.26)
  const footerH   = H - headerH - heroH - visualH - statsH

  return (
    <div style={{ width: W, height: H, background: '#050505', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      {/* BG hex pattern */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 13 }).map((_, row) =>
          Array.from({ length: 8 }).map((_, col) => {
            const sz = 28; const cx = col * sz * 1.75 + (row % 2 ? sz * 0.875 : 0); const cy = row * sz * 1.5
            const pts = Array.from({ length: 6 }, (_, i) => { const a = (Math.PI / 3) * i - Math.PI / 6; return `${cx + sz * Math.cos(a)},${cy + sz * Math.sin(a)}` }).join(' ')
            return <polygon key={`${row}-${col}`} points={pts} fill="none" stroke={C} strokeWidth="0.7" />
          })
        )}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #0c1524 0%, #1a2844 100%)', borderBottom: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s), flexShrink: 0 }}>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 600 }}>MONOATOM LABS</div>
        <div style={{ fontSize: Math.max(16, Math.round(26 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>CERAPHENE</div>
        <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C_LIGHT, letterSpacing: '0.12em', textTransform: 'uppercase' }}>Graphene-Enhanced Nano-Ceramic Coating</div>
      </div>

      {/* HERO STAT */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #0a101e 0%, #141f38 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: Math.round(2 * s), flexShrink: 0 }}>
        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(28, Math.round(44 * s)), fontWeight: 700, color: C_LIGHT, letterSpacing: '0.04em', lineHeight: 1 }}>9H+</div>
        <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.14em' }}>Pencil Hardness — Scratch-Proof Surface</div>
      </div>

      {/* VISUAL AREA */}
      <div style={{ height: visualH, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #070e1c 0%, #050505 100%)', flexShrink: 0 }}>
        <svg viewBox="0 0 200 200" style={{ width: Math.round(W * 0.72), height: Math.round(visualH * 0.88), opacity: 0.95 }}>
          {/* Glow rings */}
          <circle cx="100" cy="100" r="88" fill="none" stroke={C} strokeWidth="0.4" opacity="0.15" />
          <circle cx="100" cy="100" r="72" fill="none" stroke={C} strokeWidth="0.4" opacity="0.2" />
          {/* Shield */}
          <path d="M100 10 L172 45 L172 115 Q172 172 100 195 Q28 172 28 115 L28 45 Z" fill={C_DARK} stroke={C} strokeWidth="1.8" opacity="0.85" />
          <path d="M100 28 L156 58 L156 112 Q156 158 100 178 Q44 158 44 112 L44 58 Z" fill="#0a1628" stroke={C_LIGHT} strokeWidth="0.8" opacity="0.5" />
          {/* Graphene lattice inside shield */}
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => {
              const x = 68 + col * 16; const y = 60 + row * 20
              if (x > 145 || y > 155) return null
              return <polygon key={`l${row}-${col}`} points={`${x},${y - 8} ${x + 7},${y - 4} ${x + 7},${y + 4} ${x},${y + 8} ${x - 7},${y + 4} ${x - 7},${y - 4}`} fill="none" stroke={C_LIGHT} strokeWidth="0.5" opacity="0.35" />
            })
          )}
          {/* Center hex with ML */}
          <polygon points="100,82 114,90 114,106 100,114 86,106 86,90" fill={C} stroke={C_LIGHT} strokeWidth="1.2" />
          <text x="100" y="103" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Rajdhani">ML</text>
          {/* Protection particles */}
          {[30, 80, 140, 180, 220, 270, 315].map((deg, i) => {
            const a = deg * Math.PI / 180; const r = 82
            return <circle key={i} cx={100 + r * Math.cos(a)} cy={100 + r * Math.sin(a)} r="3" fill={C} opacity="0.6" />
          })}
          {/* Radial spokes */}
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (Math.PI / 3) * i
            return <line key={i} x1={100 + 44 * Math.cos(a)} y1={100 + 44 * Math.sin(a)} x2={100 + 64 * Math.cos(a)} y2={100 + 64 * Math.sin(a)} stroke={C} strokeWidth="0.7" opacity="0.3" />
          })}
        </svg>
        {/* Floating badge */}
        <div style={{ position: 'absolute', top: Math.round(8 * s), right: Math.round(8 * s), background: `${C}22`, border: `1px solid ${C}`, borderRadius: Math.round(4 * s), padding: `${Math.round(4 * s)}px ${Math.round(7 * s)}px`, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani', fontSize: Math.max(9, Math.round(12 * s)), color: C_LIGHT, fontWeight: 700, lineHeight: 1 }}>115°</div>
          <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.04em' }}>Hydrophobic</div>
        </div>
        <div style={{ position: 'absolute', bottom: Math.round(8 * s), left: Math.round(8 * s), fontSize: Math.max(6, Math.round(8 * s)), color: C, fontStyle: 'italic' }}>60-70% less than competitors</div>
      </div>

      {/* STATS GRID */}
      <div style={{ height: statsH, display: 'flex', flexWrap: 'wrap', gap: Math.round(2 * s), padding: `${Math.round(6 * s)}px ${Math.round(8 * s)}px`, background: '#060b14', flexShrink: 0 }}>
        {STATS.map(({ val, lab }) => (
          <div key={val} style={{ flex: '1 1 30%', background: 'linear-gradient(135deg, #0c1524, #1a2844)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s), minHeight: Math.round(34 * s) }}>
            <div style={{ fontSize: Math.max(10, Math.round(15 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.06em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #0c1524 0%, #1a2844 100%)', borderTop: `2px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
        <div style={{ fontSize: Math.max(6, Math.round(9 * s)), color: '#fff', letterSpacing: '0.1em', fontStyle: 'italic' }}>Protect. Shine. Endure.</div>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), color: C, letterSpacing: '0.1em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
