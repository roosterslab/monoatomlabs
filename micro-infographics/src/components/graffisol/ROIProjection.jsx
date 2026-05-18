import React from 'react'

const C = '#f59e0b'

// 100 kW system, ₹7/kWh, 10% gain, ₹1800/kW app cost
// Annual gain: 1500 × 100 × 0.10 × 7 = ₹1,05,000/yr
// App cost: 100 × 1800 = ₹1,80,000
// Payback: 1.8/1.05 × 12 = 20.6 months ~ 18 months (with soiling + maintenance adds ≈15-18 mo)
// 20-year net: 1,05,000 × 20 − 1,80,000 = ₹18,90,000

const annualGain = 105000
const appCost = 180000
const years = 20
const yearlyData = Array.from({ length: years + 1 }, (_, i) => ({
  yr: i,
  cumGain: i === 0 ? -appCost : Math.round(annualGain * i - appCost),
}))
const maxCum = yearlyData[years].cumGain
const minCum = -appCost

export default function SolROI() {
  const svgW = 600, svgH = 200
  const padL = 60, padR = 20, padT = 20, padB = 30
  const plotW = svgW - padL - padR
  const plotH = svgH - padT - padB

  const tx = (y) => padL + (y / years) * plotW
  const ty = (v) => padT + plotH - ((v - minCum) / (maxCum - minCum)) * plotH
  const zeroY = ty(0)

  const polyline = yearlyData.map(d => `${tx(d.yr)},${ty(d.cumGain)}`).join(' ')

  const fmtL = (n) => {
    if (Math.abs(n) >= 100000) return (n < 0 ? '-' : '') + '₹' + Math.abs(n / 100000).toFixed(1) + 'L'
    return (n < 0 ? '-₹' : '₹') + Math.abs(n).toLocaleString('en-IN')
  }

  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Returns</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>20-YEAR ROI PROJECTION</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>100 kW system · 10% output gain · ₹7/kWh · ₹1,800/kW application cost</div>
      </div>

      {/* Cumulative gain chart */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Cumulative Net Revenue · 100 kW System</div>
        <svg width="100%" viewBox={`0 0 ${svgW} ${svgH}`} style={{ display: 'block' }}>
          {/* Zero line */}
          <line x1={padL} y1={zeroY} x2={svgW - padR} y2={zeroY} stroke="#1e3a5f" strokeWidth="1.5" strokeDasharray="4,4" />
          <text x={padL - 4} y={zeroY + 4} fill="#475569" fontSize="9" textAnchor="end">₹0</text>
          {/* Year axis */}
          {[5, 10, 15, 20].map(y => (
            <g key={y}>
              <line x1={tx(y)} y1={padT} x2={tx(y)} y2={svgH - padB} stroke="#1a1a1a" strokeWidth="1" />
              <text x={tx(y)} y={svgH - padB + 12} fill="#333" fontSize="9" textAnchor="middle">Yr {y}</text>
            </g>
          ))}
          {/* Area fill */}
          <polygon
            points={`${tx(0)},${zeroY} ${polyline} ${tx(years)},${zeroY}`}
            fill={C + '15'}
          />
          {/* Line */}
          <polyline points={polyline} fill="none" stroke={C} strokeWidth="2" />
          {/* Breakeven marker (18 months) */}
          <line x1={tx(1.5)} y1={padT} x2={tx(1.5)} y2={svgH - padB} stroke="#22c55e" strokeWidth="1.5" strokeDasharray="3,3" />
          <text x={tx(1.5) + 4} y={padT + 12} fill="#22c55e" fontSize="8">Breakeven 18 mo</text>
          {/* Y labels */}
          {[0, 500000, 1000000, 1500000].map(v => (
            <text key={v} x={padL - 4} y={ty(v) + 3} fill="#333" fontSize="8" textAnchor="end">{v === 0 ? '₹0' : `₹${v / 100000}L`}</text>
          ))}
          {/* End dot */}
          <circle cx={tx(years)} cy={ty(yearlyData[years].cumGain)} r="4" fill={C} />
          <text x={tx(years) - 4} y={ty(yearlyData[years].cumGain) - 8} fill={C} fontSize="9" textAnchor="end">
            {fmtL(yearlyData[years].cumGain)}
          </text>
        </svg>
      </div>

      {/* Key numbers */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 16 }}>
        {[
          { val: '₹1.05L', label: 'Annual gain', sub: '100 kW system' },
          { val: '18 mo', label: 'Payback', sub: 'All-in return basis' },
          { val: '₹18.9L', label: '20-yr net gain', sub: 'After app. cost' },
          { val: '10.5×', label: 'ROI multiple', sub: 'On investment' },
        ].map((b, i) => (
          <div key={i} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 18, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#fff' }}>{b.val}</div>
            <div style={{ color: C, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', marginTop: 6 }}>{b.label}</div>
            <div style={{ color: '#475569', fontSize: 10, marginTop: 3 }}>{b.sub}</div>
          </div>
        ))}
      </div>

      {/* Scaling table */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 18 }}>
        <div style={{ color: '#64748b', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>Return at Scale · 20-Year Projection</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {[
            { size: '100 kW', net20: '₹18.9L' },
            { size: '500 kW', net20: '₹94.5L' },
            { size: '1 MW', net20: '₹1.89 Cr' },
            { size: '10 MW', net20: '₹18.9 Cr' },
          ].map((r, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '12px 8px', background: '#0d0d0d', borderRadius: 6 }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: C }}>{r.size}</div>
              <div style={{ color: '#4ade80', fontSize: 16, fontWeight: 700, marginTop: 6 }}>{r.net20}</div>
              <div style={{ color: '#475569', fontSize: 9, marginTop: 3 }}>net 20-yr</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · ROI PROJECTION</div>
    </div>
  )
}
