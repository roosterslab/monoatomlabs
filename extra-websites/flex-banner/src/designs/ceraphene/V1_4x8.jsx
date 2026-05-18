import React from 'react'

const W_FT = 4
const H_FT = 8
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

const BENEFITS = [
  'Graphene nano-platelets reinforce the SiO₂ matrix for superior adhesion',
  'Prevents swirl marks, oxidation, acid rain, bird droppings & UV fade',
  '60–70% cheaper than IGL Kenzo / Ceramic Pro at equal or better performance',
  'Pays back in 6 months vs. recurring polish + wax costs',
]

export default function CerapheneV1_4x8({ scale = 1 }) {
  const W = Math.round(BASE_W * scale)
  const H = Math.round(BASE_H * scale)
  const s = scale

  const headerH   = Math.round(H * 0.12)
  const heroH     = Math.round(H * 0.13)
  const visualH   = Math.round(H * 0.32)
  const statsH    = Math.round(H * 0.20)
  const benefitsH = Math.round(H * 0.13)
  const footerH   = H - headerH - heroH - visualH - statsH - benefitsH

  return (
    <div style={{ width: W, height: H, background: '#050505', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.03 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 18 }).map((_, row) =>
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
          <div style={{ fontSize: Math.max(6, Math.round(8 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: Math.round(3 * s) }}>MONOATOM LABS</div>
          <div style={{ fontSize: Math.max(20, Math.round(30 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>CERAPHENE</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: Math.max(7, Math.round(10 * s)), color: C_LIGHT, marginBottom: Math.round(3 * s) }}>Graphene-Enhanced Nano-Ceramic Coating</div>
          <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C }}>Advanced protection for cars · marine · aviation · fleet</div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #0a101e, #141f38)', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexShrink: 0, borderBottom: `1px solid ${C}33` }}>
        {[{ val: '9H+', lab: 'Max Hardness' }, { val: '115°', lab: 'Contact Angle' }, { val: '3–4 YR', lab: 'One Coat Life' }, { val: '₹5K', lab: 'Per Application' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(22, Math.round(36 * s)), fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(8 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #070e1c, #050505)', flexShrink: 0 }}>
        <svg viewBox="0 0 340 210" style={{ width: Math.round(W * 0.88), height: Math.round(visualH * 0.92) }}>
          {/* Shield */}
          <path d="M100 14 L164 46 L164 116 Q164 166 100 186 Q36 166 36 116 L36 46 Z" fill={C_DARK} stroke={C} strokeWidth="2" opacity="0.88" />
          <path d="M100 30 L150 58 L150 112 Q150 152 100 168 Q50 152 50 112 L50 58 Z" fill="#0a1628" stroke={C_LIGHT} strokeWidth="0.8" opacity="0.45" />
          {Array.from({ length: 5 }).map((_, row) => Array.from({ length: 5 }).map((_, col) => {
            const x = 64 + col * 14; const y = 52 + row * 18; if (x > 148 || y > 162) return null
            return <polygon key={`l${row}-${col}`} points={`${x},${y-6} ${x+6},${y-3} ${x+6},${y+3} ${x},${y+6} ${x-6},${y+3} ${x-6},${y-3}`} fill="none" stroke={C_LIGHT} strokeWidth="0.4" opacity="0.3" />
          }))}
          <polygon points="100,80 116,89 116,107 100,116 84,107 84,89" fill={C} stroke={C_LIGHT} strokeWidth="1.2" />
          <text x="100" y="104" textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="Rajdhani">ML</text>
          {[0, 60, 120, 180, 240, 300].map((deg, i) => { const a = deg * Math.PI / 180; const r = 82; return <circle key={i} cx={100 + r * Math.cos(a)} cy={100 + r * Math.sin(a)} r="3" fill={C} opacity="0.45" /> })}
          <circle cx="100" cy="100" r="90" fill="none" stroke={C} strokeWidth="0.4" opacity="0.15" />
          {/* Divider */}
          <line x1="185" y1="15" x2="185" y2="195" stroke={C} strokeWidth="0.4" opacity="0.25" />
          {/* Right benefits */}
          {['✓ Only graphene-enhanced ceramic in market', '✓ Molecular Si-O covalent bond', '✓ 9 threats neutralized: acid rain to UV', '✓ 46+ partner studios nationwide', '✓ Works on all paint types & finishes'].map((txt, i) => (
            <text key={i} x="268" y={50 + i * 28} textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">{txt}</text>
          ))}
        </svg>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', gap: Math.round(3 * s), padding: `${Math.round(7 * s)}px ${Math.round(10 * s)}px`, background: '#060b14', flexShrink: 0 }}>
        {STATS.map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #0c1524, #1a2844)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(11, Math.round(16 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* BENEFITS */}
      <div style={{ height: benefitsH, background: '#08101e', borderTop: `1px solid ${C}33`, borderBottom: `1px solid ${C}33`, padding: `${Math.round(6 * s)}px ${Math.round(14 * s)}px`, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', flexShrink: 0 }}>
        {BENEFITS.map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: Math.round(6 * s) }}>
            <span style={{ color: C, fontSize: Math.max(7, Math.round(9 * s)), flexShrink: 0 }}>✓</span>
            <span style={{ color: '#94a3b8', fontSize: Math.max(6, Math.round(8 * s)), lineHeight: 1.4 }}>{b}</span>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #0c1524, #1a2844)', borderTop: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px` }}>
        <div style={{ fontSize: Math.max(7, Math.round(10 * s)), color: '#fff', fontStyle: 'italic' }}>Protect. Shine. Endure.</div>
        <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C, letterSpacing: '0.12em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
