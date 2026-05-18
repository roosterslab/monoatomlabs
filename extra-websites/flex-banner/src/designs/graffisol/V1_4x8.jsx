import React from 'react'

const W_FT = 4
const H_FT = 8
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
  { val: '150+ MW',lab: 'Deployed' },
]

const BENEFITS = [
  '3-in-1 coating: anti-reflection + thermal conductivity + hydrophobic — no competitor offers all three',
  '60–70% reduction in cleaning frequency — passive self-cleaning saves ₹40,000/yr per MW in O&M cost',
  'IEC 61215 compliant · Validated on 26+ installations across Rajasthan, Gujarat, AP, Karnataka',
  'Aligned with India 500 GW renewable target — adds clean kWh without adding panels',
]

export default function GraffisolV1_4x8({ scale = 1 }) {
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
        {Array.from({ length: 13 }).map((_, row) =>
          Array.from({ length: 9 }).map((_, col) => (
            <rect key={`${row}-${col}`} x={col * 44} y={row * 58} width={40} height={54} rx="2" fill="none" stroke={C} strokeWidth="0.5" />
          ))
        )}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (Math.PI * 2 / 12) * i; const cx = BASE_W * 0.42; const cy = BASE_H * 0.32
          return <line key={i} x1={cx + 60 * Math.cos(a)} y1={cy + 60 * Math.sin(a)} x2={cx + 140 * Math.cos(a)} y2={cy + 140 * Math.sin(a)} stroke={C} strokeWidth="0.5" opacity="0.45" />
        })}
      </svg>

      {/* HEADER */}
      <div style={{ height: headerH, background: 'linear-gradient(160deg, #1a0e00, #2a1800)', borderBottom: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px`, flexShrink: 0 }}>
        <div>
          <div style={{ fontSize: Math.max(6, Math.round(8 * s)), fontFamily: "'Outfit', sans-serif", color: C, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: Math.round(3 * s) }}>MONOATOM LABS</div>
          <div style={{ fontSize: Math.max(20, Math.round(30 * s)), fontFamily: "'Rajdhani', sans-serif", color: '#fff', fontWeight: 700, letterSpacing: '0.1em', lineHeight: 1 }}>GRAFFISOL</div>
        </div>
        <div style={{ textAlign: 'right' }}>
          <div style={{ fontSize: Math.max(7, Math.round(10 * s)), color: C_LIGHT, marginBottom: Math.round(3 * s) }}>Graphene Solar Panel Nano-Coating</div>
          <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C }}>26+ Projects · 150+ MW · IEC 61215 Compliant</div>
        </div>
      </div>

      {/* HERO */}
      <div style={{ height: heroH, background: 'linear-gradient(135deg, #150900, #231400)', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', flexShrink: 0, borderBottom: `1px solid ${C}33` }}>
        {[{ val: '+12%', lab: 'Power Output' }, { val: '5–6°C', lab: 'Panel Cooling' }, { val: '−40%', lab: 'Soiling Loss' }, { val: '₹1,200', lab: 'Extra/kW/Year' }].map(({ val, lab }) => (
          <div key={val} style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: Math.max(22, Math.round(36 * s)), fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(8 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: Math.round(2 * s) }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* VISUAL */}
      <div style={{ height: visualH, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #120900, #050505)', flexShrink: 0 }}>
        <svg viewBox="0 0 340 210" style={{ width: Math.round(W * 0.88), height: Math.round(visualH * 0.92) }}>
          <circle cx="100" cy="105" r="62" fill={C_DARK} stroke={C} strokeWidth="1.5" opacity="0.52" />
          {[{ x: 100, y: 105 }, ...Array.from({ length: 6 }, (_, i) => {
            const a = (Math.PI / 3) * i; return { x: 100 + 38 * Math.cos(a), y: 105 + 38 * Math.sin(a) }
          })].map(({ x, y }, i) => (
            <rect key={i} x={x - 13} y={y - 13} width="26" height="26" rx="2" fill={C_DARK} stroke={i === 0 ? C_LIGHT : C} strokeWidth={i === 0 ? 1.2 : 0.8} opacity={i === 0 ? 0.95 : 0.8} />
          ))}
          {Array.from({ length: 8 }).map((_, i) => {
            const a = (Math.PI * 2 / 8) * i
            return <line key={i} x1={100 + 64 * Math.cos(a)} y1={105 + 64 * Math.sin(a)} x2={100 + 82 * Math.cos(a)} y2={105 + 82 * Math.sin(a)} stroke={C} strokeWidth="2.2" opacity="0.7" />
          })}
          <circle cx="100" cy="105" r="88" fill="none" stroke={C} strokeWidth="0.4" opacity="0.15" />
          <text x="100" y="109" textAnchor="middle" fill="white" fontSize="10" fontWeight="700" fontFamily="Rajdhani">GNP</text>
          <path d="M100 172 L92 188 L96 188 L96 200 L104 200 L104 188 L108 188 Z" fill={C} opacity="0.6" />
          <line x1="190" y1="15" x2="190" y2="198" stroke={C} strokeWidth="0.4" opacity="0.25" />
          {['✓ Anti-reflection + thermal + hydrophobic', '✓ 500× graphene thermal conductivity', '✓ >98% light transmission retained', '✓ 60-70% cleaning cost reduction', '✓ 26+ installations validated', '✓ IEC 61215 · India 500 GW aligned'].map((txt, i) => (
            <text key={i} x="268" y={38 + i * 28} textAnchor="middle" fill={C_LIGHT} fontSize="11" fontFamily="Inter">{txt}</text>
          ))}
        </svg>
      </div>

      {/* STATS */}
      <div style={{ height: statsH, display: 'flex', gap: Math.round(3 * s), padding: `${Math.round(7 * s)}px ${Math.round(10 * s)}px`, background: '#100800', flexShrink: 0 }}>
        {STATS.map(({ val, lab }) => (
          <div key={val} style={{ flex: 1, background: 'linear-gradient(135deg, #1a0e00, #2a1800)', border: `1px solid ${C}55`, borderRadius: Math.round(4 * s), display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: Math.round(2 * s) }}>
            <div style={{ fontSize: Math.max(11, Math.round(16 * s)), fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
            <div style={{ fontSize: Math.max(5, Math.round(7 * s)), color: C, textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'center' }}>{lab}</div>
          </div>
        ))}
      </div>

      {/* BENEFITS */}
      <div style={{ height: benefitsH, background: '#0c0600', borderTop: `1px solid ${C}33`, borderBottom: `1px solid ${C}33`, padding: `${Math.round(6 * s)}px ${Math.round(14 * s)}px`, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', flexShrink: 0 }}>
        {BENEFITS.map((b, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: Math.round(6 * s) }}>
            <span style={{ color: C, fontSize: Math.max(7, Math.round(9 * s)), flexShrink: 0 }}>✓</span>
            <span style={{ color: C_LIGHT, fontSize: Math.max(6, Math.round(8 * s)), lineHeight: 1.4, opacity: 0.85 }}>{b}</span>
          </div>
        ))}
      </div>

      {/* FOOTER */}
      <div style={{ flex: 1, background: 'linear-gradient(160deg, #1a0e00, #2a1800)', borderTop: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${Math.round(20 * s)}px` }}>
        <div style={{ fontSize: Math.max(7, Math.round(10 * s)), color: '#fff', fontStyle: 'italic' }}>Harness More. Lose Less.</div>
        <div style={{ fontSize: Math.max(6, Math.round(8 * s)), color: C, letterSpacing: '0.12em', textTransform: 'uppercase' }}>monoatomlabs.com</div>
      </div>
    </div>
  )
}
