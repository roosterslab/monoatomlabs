import React from 'react'

const C = '#64748b'

const fleetTiers = [
  { count: 20,  savings: '₹2,60,000', invest: '₹1,00,000', payback: '4.6 mo' },
  { count: 50,  savings: '₹6,50,000', invest: '₹2,50,000', payback: '4.6 mo' },
  { count: 100, savings: '₹13,00,000', invest: '₹5,00,000', payback: '4.6 mo' },
  { count: 200, savings: '₹26,00,000', invest: '₹10,00,000', payback: '4.6 mo' },
]

const breakdown = [
  { label: 'Reduced wash frequency (5 to 1/month)', value: '₹4,800/yr' },
  { label: 'Paint protection (swirl/chip prevention)', value: '₹2,400/yr' },
  { label: 'Resale value uplift (3%)', value: '₹18,000 one-time' },
  { label: 'Thermal protection (paint fade, 4-yr amort.)', value: '₹1,500/yr' },
]

const cumulativeROI = [
  { year: 'Year 1', net: 3700,  cum: 3700,  label: '₹8,700 gain - ₹5,000 cost' },
  { year: 'Year 2', net: 8700,  cum: 12400, label: '+₹8,700' },
  { year: 'Year 3', net: 8700,  cum: 21100, label: '+₹8,700' },
  { year: 'Year 4', net: 8700,  cum: 29800, label: '+₹8,700' },
]

const MAX_CUM = 29800

export default function CerFleetEconomics() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 900, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>MONOATOM LABS · CERAPHENE</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 48, fontWeight: 700, color: '#fff', letterSpacing: 2, lineHeight: 1 }}>FLEET ECONOMICS</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 8 }}>Graphene-Enhanced Ceramic Coating · Fleet Operator ROI Analysis</div>
      </div>

      {/* Section 1 — Fleet Size vs Annual Savings */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>Fleet Size vs Annual Savings</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14 }}>
          {fleetTiers.map((tier, i) => (
            <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 10, padding: 18, textAlign: 'center' }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 52, fontWeight: 700, color: '#fff', lineHeight: 1 }}>{tier.count}</div>
              <div style={{ color: '#475569', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 12 }}>vehicles</div>
              <div style={{ color: C, fontSize: 15, fontWeight: 700, marginBottom: 4 }}>{tier.savings}</div>
              <div style={{ color: '#475569', fontSize: 10, marginBottom: 8 }}>saved per year</div>
              <div style={{ borderTop: '1px solid #1f1f1f', paddingTop: 8 }}>
                <div style={{ color: '#6b7280', fontSize: 11 }}>Investment: {tier.invest}</div>
                <div style={{ color: '#22c55e', fontSize: 11, fontWeight: 600, marginTop: 3 }}>Payback: {tier.payback}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — Per Vehicle Annual Savings Breakdown */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Per Vehicle Annual Savings Breakdown</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {breakdown.map((row, i) => (
            <div key={i} style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '12px 14px',
              background: i % 2 === 0 ? '#0d0d0d' : '#111',
              borderRadius: i === 0 ? '8px 8px 0 0' : i === breakdown.length - 1 ? '0 0 8px 8px' : 0,
              borderBottom: i < breakdown.length - 1 ? '1px solid #1a1a1a' : 'none',
            }}>
              <div style={{ color: '#d1d5db', fontSize: 13 }}>{row.label}</div>
              <div style={{ color: C, fontSize: 13, fontWeight: 700, flexShrink: 0, marginLeft: 16 }}>{row.value}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, padding: '12px 14px', background: '#0d1a0d', border: '1px solid #166534', borderRadius: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <span style={{ color: '#4ade80', fontSize: 13, fontWeight: 700 }}>Total: ₹8,700/yr cash savings</span>
            <span style={{ color: '#475569', fontSize: 12, marginLeft: 12 }}>+ ₹18,000 capital gain (one-time)</span>
          </div>
          <div style={{ color: '#22c55e', fontSize: 11, fontWeight: 600 }}>Per vehicle</div>
        </div>
      </div>

      {/* Section 3 — 4-Year Cumulative ROI */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>4-Year Cumulative ROI · Per Vehicle</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {cumulativeROI.map((row, i) => {
            const pct = (row.cum / MAX_CUM) * 100
            return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 56, flexShrink: 0, textAlign: 'right' }}>
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#555' }}>{row.year}</span>
                </div>
                <div style={{ flex: 1, height: 40, background: '#0d0d0d', borderRadius: 6, overflow: 'hidden' }}>
                  <div style={{
                    width: `${pct}%`, height: '100%', borderRadius: 6,
                    background: i === cumulativeROI.length - 1 ? C : '#334155',
                    border: i === cumulativeROI.length - 1 ? `1px solid ${C}` : 'none',
                    display: 'flex', alignItems: 'center', paddingLeft: 12,
                    minWidth: 80,
                  }}>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: '#fff', whiteSpace: 'nowrap' }}>
                      ₹{row.cum.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
                <div style={{ width: 140, flexShrink: 0 }}>
                  <span style={{ color: '#475569', fontSize: 10 }}>{row.label}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ color: '#374151', fontSize: 10, lineHeight: 1.6, maxWidth: 600 }}>
          Fleet pricing: 10+ vehicles 20% discount · 50+ vehicles 30% discount · API pricing for 200+
        </div>
        <div style={{ color: '#333', fontSize: 10, letterSpacing: 2, flexShrink: 0 }}>MONOATOM LABS · CERAPHENE · FLEET ECONOMICS</div>
      </div>

    </div>
  )
}
