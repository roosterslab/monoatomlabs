import React from 'react'

const W_FT = 4
const H_FT = 8
const BASE_W = W_FT * 96
const BASE_H = H_FT * 96
const C = '#d97706'
const C_LIGHT = '#fbbf24'
const C_DARK = '#92400e'

const STATS = [
  { val: '+50%',  lab: 'Comp. Strength' },
  { val: '−15%',  lab: 'Cement' },
  { val: '+40%',  lab: 'Flexural' },
  { val: '0.05%', lab: 'Min Dosage' },
  { val: '−45%',  lab: 'Permeability' },
  { val: 'NABL',  lab: 'Validated' },
]

const BENEFITS = [
  'Nano-platelet graphene reinforces C-S-H bonds — same mechanism as steel fiber at 1/200th the dose',
  'Compatible with all cement grades M20–M70, RMC plants, precast, and in-situ pours',
  '15–20% cement reduction = ₹30+ saved per m³ + 30 kg CO₂ avoided per cubic metre',
  'NABL-certified 28-day cube tests · IS 456 / ASTM C1240 · No special equipment needed',
]

export default function GraphacreteV1_4x8({ scale = 1 }) {
  const W = Math.round(BASE_W * scale)
  const H = Math.round(BASE_H * scale)
  const s = scale

  const headerH   = Math.round(H * 0.12)
  const heroH     = Math.round(H * 0.13)
  const visualH   = Math.round(H * 0.31)
  const statsH    = Math.round(H * 0.20)
  const benefitsH = Math.round(H * 0.14)
  const footerH   = H - headerH - heroH - visualH - statsH - benefitsH

  return (
    <div style={{ width: W, height: H, background: '#050505', position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.035 }} viewBox={`0 0 ${BASE_W} ${BASE_H}`} preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 30 }).map((_, row) =>
          Array.from({ length: 16 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={col * 26} y={row * 26} width={24} height={24} fill="none" stroke={C} strokeWidth="0.5" opacity="0.6" />
          ))
        )}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #1c0a00, #2d1600)', borderBottom: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px`, flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: Math.max(6, Math.round(8 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: Math.round(3 * s) }}>MONOATOM LABS</div>
          <div style={{ fontSize: Math.max(20, Math.round(30 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.08em', lineHeight: 1 }}>GRAPHACRETE</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: Math.max(7, Math.round(10 * s)), color: C_LIGHT, marginBottom: Math.round(3 * s) }}>Graphene Concrete Additive</div>
          <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C }}>NABL Validated · IS 456 / ASTM C1240 · 42+ Projects</div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #140800, #221200)', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexShrink: 0, borderBottom: `1px solid ${C}33` }}>
        {[{ val: '+50%', lab: 'Compressive Gain' }, { val: '−15%', lab: 'Cement Per m³' }, { val: '0.05%', lab: 'Min Dosage' }, { val: '42+', lab: 'Projects Deployed' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(22, Math.round(36 * s)), fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(8 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #0e0600, #050505)', flexShrink: 0 }}>
        <svg viewBox="0 0 340 210" style={{ width: Math.round(W * 0.88), height: Math.round(visualH * 0.92) }}>
          {Array.from({ length: 6 }).map((_, i) => {
            const a = (Math.PI / 3) * i; const cx = 100 + 66 * Math.cos(a); const cy = 105 + 66 * Math.sin(a)
            const pts = Array.from({ length: 6 }, (_, j) => { const b = (Math.PI / 3) * j - Math.PI / 6; return `${cx + 18 * Math.cos(b)},${cy + 18 * Math.sin(b)}` }).join(' ')
            return <polygon key={i} points={pts} fill={C_DARK} stroke={C} strokeWidth="1.2" opacity="0.7" />
          })}
          <polygon points="100,62 128,78 128,110 100,126 72,110 72,78" fill={C_DARK} stroke={C} strokeWidth="2" opacity="0.9" />
          <polygon points="100,71 120,82 120,104 100,115 80,104 80,82" fill={C} opacity="0.85" />
          <text x="100" y="102" textAnchor="middle" fill="white" fontSize="18" fontWeight="700" fontFamily="Rajdhani">G+</text>
          {Array.from({ length: 6 }).map((_, i) => { const a = (Math.PI / 3) * i; return <line key={i} x1={100 + 28 * Math.cos(a)} y1={105 + 28 * Math.sin(a)} x2={100 + 48 * Math.cos(a)} y2={105 + 48 * Math.sin(a)} stroke={C_LIGHT} strokeWidth="0.8" opacity="0.4" /> })}
          <path d="M18 105 L36 93 L36 100 L62 100 L62 110 L36 110 L36 117 Z" fill={C} opacity="0.65" />
          <path d="M182 105 L164 93 L164 100 L138 100 L138 110 L164 110 L164 117 Z" fill={C} opacity="0.65" />
          <circle cx="100" cy="105" r="88" fill="none" stroke={C} strokeWidth="0.4" opacity="0.15" />
          <line x1="196" y1="15" x2="196" y2="195" stroke={C} strokeWidth="0.4" opacity="0.25" />
          {['✓ Nano-platelet graphene in C-S-H bonds', '✓ M20 to M70 grade compatible', '✓ 15-20% cement reduction', '✓ 30 kg CO₂ saved per m³ pour', '✓ ₹30+ savings per cubic metre', '✓ NABL tested · IS 456 compliant'].map((txt, i) => (
            <text key={i} x="270" y={40 + i * 28} textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">{txt}</text>
          ))}
        </svg>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', gap: Math.round(3 * s), padding: `${Math.round(7 * s)}px ${Math.round(10 * s)}px`, background: '#0d0600', flexShrink: 0 }}>
        {STATS.map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #1c0a00, #2d1600)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(11, Math.round(16 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* BENEFITS */}
      <div style={{ height: benefitsH, background: '#0a0500', borderTop: `1px solid ${C}33`, borderBottom: `1px solid ${C}33`, padding: `${Math.round(6 * s)}px ${Math.round(14 * s)}px`, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', flexShrink: 0 }}>
        {BENEFITS.map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: Math.round(6 * s) }}>
            <span style={{ color: C, fontSize: Math.max(7, Math.round(9 * s)), flexShrink: 0 }}>✓</span>
            <span style={{ color: '#fbbf24', fontSize: Math.max(6, Math.round(8 * s)), lineHeight: 1.4, opacity: 0.85 }}>{b}</span>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #1c0a00, #2d1600)', borderTop: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px` }}>
        <div style={{ fontSize: Math.max(7, Math.round(10 * s)), color: '#fff', fontStyle: 'italic' }}>Build Stronger. Build Smarter.</div>
        <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C, letterSpacing: '0.12em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
