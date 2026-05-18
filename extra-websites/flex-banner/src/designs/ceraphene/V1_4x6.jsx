import React from 'react'

const W_FT = 4
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
  { val: '−70%',   lab: 'Wash Frequency' },
  { val: '₹5,000', lab: 'Per Application' },
  { val: '>99%',   lab: 'UV Stability' },
]

export default function CerapheneV1_4x6({ scale = 1 }) {
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
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 13 }).map((_, row) =>
          Array.from({ length: 11 }).map((_, col) => {
            const sz = 30; const cx = col * sz * 1.75 + (row % 2 ? sz * 0.875 : 0); const cy = row * sz * 1.5
            const pts = Array.from({ length: 6 }, (_, i) => { const a = (Math.PI / 3) * i - Math.PI / 6; return `${cx + sz * Math.cos(a)},${cy + sz * Math.sin(a)}` }).join(' ')
            return <polygon key={`${row}-${col}`} points={pts} fill="none" stroke={C} strokeWidth="0.7" />
          })
        )}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #0c1524, #1a2844)', borderBottom: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px`, flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: Math.max(6, Math.round(7 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: Math.round(3 * s) }}>MONOATOM LABS</div>
          <div style={{ fontSize: Math.max(18, Math.round(28 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>CERAPHENE</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: Math.max(7, Math.round(9 * s)), color: C_LIGHT, marginBottom: Math.round(3 * s) }}>Graphene-Enhanced Nano-Ceramic</div>
          <div style={{ fontSize: Math.max(7, Math.round(8 * s)), color: C }}>60–70% less than competitors · Drop-in application</div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #0a101e, #141f38)', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexShrink: 0 }}>
        {[{ val: '9H+', lab: 'Hardness' }, { val: '115°', lab: 'Contact Angle' }, { val: '3–4 YR', lab: 'Durability' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(20, Math.round(32 * s)), fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #070e1c, #050505)', flexShrink: 0 }}>
        <svg viewBox="0 0 340 200" style={{ width: Math.round(W * 0.88), height: Math.round(visualH * 0.9) }}>
          {/* Shield */}
          <path d="M100 16 L162 46 L162 112 Q162 160 100 180 Q38 160 38 112 L38 46 Z" fill={C_DARK} stroke={C} strokeWidth="1.8" opacity="0.85" />
          <path d="M100 32 L148 58 L148 108 Q148 147 100 163 Q52 147 52 108 L52 58 Z" fill="#0a1628" stroke={C_LIGHT} strokeWidth="0.8" opacity="0.45" />
          {Array.from({ length: 4 }).map((_, row) => Array.from({ length: 4 }).map((_, col) => {
            const x = 70 + col * 14; const y = 56 + row * 18
            return <polygon key={`l${row}-${col}`} points={`${x},${y-6} ${x+6},${y-3} ${x+6},${y+3} ${x},${y+6} ${x-6},${y+3} ${x-6},${y-3}`} fill="none" stroke={C_LIGHT} strokeWidth="0.4" opacity="0.3" />
          }))}
          <polygon points="100,80 114,88 114,104 100,112 86,104 86,88" fill={C} stroke={C_LIGHT} strokeWidth="1" />
          <text x="100" y="101" textAnchor="middle" fill="white" fontSize="11" fontWeight="700" fontFamily="Rajdhani">ML</text>
          {[0, 60, 120, 180, 240, 300].map((deg, i) => { const a = deg * Math.PI / 180; const r = 78; return <circle key={i} cx={100 + r * Math.cos(a)} cy={98 + r * Math.sin(a)} r="2.5" fill={C} opacity="0.4" /> })}
          {/* Divider */}
          <line x1="185" y1="20" x2="185" y2="185" stroke={C} strokeWidth="0.5" opacity="0.25" />
          {/* Right panel — benefits */}
          <text x="268" y="48" textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">✓ Graphene-enhanced SiO₂ formula</text>
          <text x="268" y="70" textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">✓ 2–3 micron bond depth</text>
          <text x="268" y="92" textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">✓ No swirl, no fade, no oxidation</text>
          <text x="268" y="114" textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">✓ Works on cars, marine, aviation</text>
          <text x="268" y="136" textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">✓ 60–70% cheaper than Ceramic Pro</text>
          <text x="268" y="158" textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">✓ ₹36,000+ fleet savings / 4 years</text>
        </svg>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', gap: Math.round(3 * s), padding: `${Math.round(7 * s)}px ${Math.round(10 * s)}px`, background: '#060b14', flexShrink: 0 }}>
        {STATS.map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #0c1524, #1a2844)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(10, Math.round(14 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(6 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #0c1524, #1a2844)', borderTop: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px` }}>
        <div style={{ fontSize: Math.max(7, Math.round(9 * s)), color: '#fff', fontStyle: 'italic', letterSpacing: '0.08em' }}>Protect. Shine. Endure.</div>
        <div style={{ fontSize: Math.max(6, Math.round(7 * s)), color: C, letterSpacing: '0.12em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
