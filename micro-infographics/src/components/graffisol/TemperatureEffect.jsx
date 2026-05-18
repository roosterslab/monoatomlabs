import React from 'react'

const C = '#f59e0b'

// Temperature vs efficiency data points
const tempData = [
  { temp: 25, eff: 100, label: 'STC rating' },
  { temp: 35, eff: 95,  label: '' },
  { temp: 45, eff: 90,  label: '' },
  { temp: 55, eff: 85,  label: '' },
  { temp: 60, eff: 82.5, label: '← Graffisol avg' },
  { temp: 65, eff: 80,  label: '← Without coating' },
  { temp: 70, eff: 77.5, label: 'Peak summer' },
]

export default function SolTempEffect() {
  const svgW = 540, svgH = 220
  const padL = 40, padR = 20, padT = 20, padB = 40
  const plotW = svgW - padL - padR
  const plotH = svgH - padT - padB
  const minT = 25, maxT = 70, minE = 75, maxE = 102

  const tx = (t) => padL + ((t - minT) / (maxT - minT)) * plotW
  const ty = (e) => padT + plotH - ((e - minE) / (maxE - minE)) * plotH

  const points = tempData.map(d => `${tx(d.temp)},${ty(d.eff)}`).join(' ')

  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Thermal</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>TEMPERATURE EFFECT</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Solar cells lose ~0.5% efficiency per °C above 25°C · Graffisol recovers 5–6°C</div>
      </div>

      {/* Efficiency-temperature curve */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Efficiency vs Panel Temperature (typical silicon cell)</div>
        <svg width="100%" viewBox={`0 0 ${svgW} ${svgH}`} style={{ display: 'block' }}>
          {/* Grid */}
          {[80, 85, 90, 95, 100].map(e => (
            <g key={e}>
              <line x1={padL} y1={ty(e)} x2={svgW - padR} y2={ty(e)} stroke="#1f1f1f" strokeWidth="1" />
              <text x={padL - 4} y={ty(e) + 4} fill="#333" fontSize="9" textAnchor="end">{e}%</text>
            </g>
          ))}
          {[25, 35, 45, 55, 65].map(t => (
            <g key={t}>
              <line x1={tx(t)} y1={padT} x2={tx(t)} y2={svgH - padB} stroke="#1f1f1f" strokeWidth="1" />
              <text x={tx(t)} y={svgH - padB + 14} fill="#333" fontSize="9" textAnchor="middle">{t}°C</text>
            </g>
          ))}
          {/* Curve */}
          <polyline points={points} fill="none" stroke="#334155" strokeWidth="2" />
          {/* Highlight: without coating (65°C) */}
          <circle cx={tx(65)} cy={ty(80)} r="5" fill="#ef4444" />
          <line x1={tx(65)} y1={ty(80)} x2={tx(65)} y2={svgH - padB} stroke="#ef4444" strokeWidth="1" strokeDasharray="4,4" />
          <text x={tx(65) + 6} y={ty(80) - 6} fill="#ef4444" fontSize="9">Without: 65°C, 80%</text>
          {/* Highlight: with Graffisol (60°C) */}
          <circle cx={tx(60)} cy={ty(82.5)} r="5" fill={C} />
          <line x1={tx(60)} y1={ty(82.5)} x2={tx(60)} y2={svgH - padB} stroke={C} strokeWidth="1" strokeDasharray="4,4" />
          <text x={tx(60) - 6} y={ty(82.5) - 8} fill={C} fontSize="9" textAnchor="end">Graffisol: 60°C, 82.5%</text>
          {/* Arrow showing 5°C gap */}
          <line x1={tx(60)} y1={svgH - padB - 16} x2={tx(65)} y2={svgH - padB - 16} stroke="#60a5fa" strokeWidth="1.5" markerEnd="url(#arr)" />
          <text x={(tx(60) + tx(65)) / 2} y={svgH - padB - 20} fill="#60a5fa" fontSize="8" textAnchor="middle">-5°C</text>
        </svg>
      </div>

      {/* Recovery breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 14, marginBottom: 16 }}>
        {[
          { val: '5–6°C', label: 'Temp reduction', sub: 'Graphene heat dissipation' },
          { val: '+2.5–3%', label: 'Efficiency recovered', sub: '0.5%/°C × 5°C' },
          { val: '65→60°C', label: 'Avg operating temp', sub: 'Rajasthan summer baseline' },
        ].map((b, i) => (
          <div key={i} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 20, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 32, fontWeight: 700, color: C }}>{b.val}</div>
            <div style={{ color: '#e2e8f0', fontSize: 12, fontWeight: 600, marginTop: 6 }}>{b.label}</div>
            <div style={{ color: '#475569', fontSize: 11, marginTop: 4 }}>{b.sub}</div>
          </div>
        ))}
      </div>

      {/* Science note */}
      <div style={{ background: '#1c1000', border: `1px solid ${C}44`, borderRadius: 10, padding: 16 }}>
        <div style={{ color: C, fontSize: 11, fontWeight: 700, marginBottom: 8 }}>WHY GRAPHENE COOLS PANELS</div>
        <div style={{ color: '#94a3b8', fontSize: 12, lineHeight: 1.6 }}>
          Graphene's exceptional thermal conductivity (5,000 W/mK) — 3,000× better than glass — rapidly conducts heat away from the panel surface.
          This lowers the cell junction temperature, where every 1°C drop recovers ~0.5% efficiency in silicon photovoltaic cells (IEC 61215 reference condition: 25°C).
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · THERMAL MANAGEMENT</div>
    </div>
  )
}
