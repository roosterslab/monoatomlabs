import React from 'react'

const C = '#64748b'

// Pre-calculated: ₹5k Ceraphene saves ~₹10k vs ₹15k competitor upfront
// Annual savings: reduced washing ~₹7,200/yr + no paint correction ~₹8,750/yr = ~₹15,950/yr net
// Payback on ₹5,000: ~4 months

const yearData = [
  { yr: 'Yr 0', cumSav: -5000, label: 'Application' },
  { yr: 'Yr 1', cumSav: 10950, label: '+₹15,950 saved' },
  { yr: 'Yr 2', cumSav: 26900, label: '+₹15,950 saved' },
  { yr: 'Yr 3', cumSav: 42850, label: '+₹15,950 saved' },
  { yr: 'Yr 4', cumSav: 58800, label: '+₹15,950 saved' },
]

const MAX = 58800
const fleets = [
  { n: 1,   sav: '₹58,800',  tag: 'Single' },
  { n: 10,  sav: '₹5.88L',   tag: 'Small fleet' },
  { n: 50,  sav: '₹29.4L',   tag: 'Medium fleet' },
  { n: 100, sav: '₹58.8L',   tag: 'Large fleet' },
]

export default function CerROITimeline() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Returns</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>ROI & PAYBACK TIMELINE</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Cumulative savings per vehicle over 4 years vs. traditional care</div>
      </div>

      {/* Timeline bars */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>Cumulative Net Savings · Per Vehicle</div>
        {yearData.map((y, i) => {
          const isNeg = y.cumSav < 0
          const pct = Math.abs(y.cumSav) / MAX * 100
          return (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
              <div style={{ width: 44, textAlign: 'right', flexShrink: 0 }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#555' }}>{y.yr}</span>
              </div>
              <div style={{ flex: 1, height: 38, background: '#0d0d0d', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{
                  width: `${pct}%`, height: '100%', borderRadius: 6,
                  background: isNeg ? '#450a0a' : i === yearData.length - 1 ? C : '#334155',
                  border: i === yearData.length - 1 ? `1px solid ${C}` : 'none',
                  display: 'flex', alignItems: 'center', paddingLeft: 10,
                }}>
                  <span style={{ color: isNeg ? '#ef4444' : '#fff', fontSize: 12, fontWeight: 700, whiteSpace: 'nowrap' }}>
                    {isNeg ? '−₹5,000' : '₹' + y.cumSav.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
              <div style={{ width: 120, flexShrink: 0 }}>
                <span style={{ color: '#475569', fontSize: 10 }}>{y.label}</span>
              </div>
            </div>
          )
        })}
        {/* Payback marker */}
        <div style={{ marginTop: 14, padding: '10px 14px', background: '#0d1520', border: '1px solid #1e3a5f', borderRadius: 8 }}>
          <span style={{ color: '#60a5fa', fontSize: 12, fontWeight: 600 }}>⚡ Payback period: ~4 months · ROI: 11.7× over 4 years</span>
        </div>
      </div>

      {/* Fleet ROI table */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Fleet ROI · 4-Year Total Savings</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {fleets.map((f, i) => (
            <div key={i} style={{ textAlign: 'center', padding: 16, background: '#0d0d0d', borderRadius: 8, border: '1px solid #1f1f1f' }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 32, fontWeight: 700, color: '#fff' }}>{f.n}</div>
              <div style={{ color: '#64748b', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>Vehicles · {f.tag}</div>
              <div style={{ color: '#4ade80', fontSize: 16, fontWeight: 700 }}>{f.sav}</div>
              <div style={{ color: '#475569', fontSize: 10, marginTop: 4 }}>total saved</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · ROI ANALYSIS</div>
    </div>
  )
}
