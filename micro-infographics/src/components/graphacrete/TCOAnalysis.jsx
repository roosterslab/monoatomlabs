import React from 'react'

const C = '#d97706'

const breakdown = [
  { category: 'Cement Cost',        trad: 400000, with: 320000, note: '15–20% cement reduction' },
  { category: 'Graphacrete Additive', trad: 0,   with: 47000,  note: 'Nano-platelet dosage cost' },
  { category: 'Maintenance',        trad: 180000, with: 80000,  note: 'Reduced via superior durability' },
  { category: 'Rework & Repairs',   trad: 120000, with: 40000,  note: 'Lower failure rates' },
]
const TRAD_TOTAL = 1200000
const WITH_TOTAL =  900000
const SAVING     = TRAD_TOTAL - WITH_TOTAL

export default function GraTCOAnalysis() {
  const maxVal = TRAD_TOTAL
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Economics</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>5-YEAR TOTAL COST OF OWNERSHIP</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Standard concrete vs Graphacrete — per 1,000 m³ project, 5-year period</div>
      </div>

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Standard Concrete (5 yr)', val: '₹12,00,000', color: '#ef4444' },
          { label: 'With Graphacrete (5 yr)',  val: '₹9,00,000',  color: '#4ade80' },
          { label: 'Total Saving',             val: '₹3,00,000',  color: C },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center', padding: 20, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12 }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: s.color }}>{s.val}</div>
            <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Comparison bars */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 16 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>Cost Breakdown · Standard vs Graphacrete</div>
        {breakdown.map((item, i) => (
          <div key={i} style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <div>
                <span style={{ color: '#ccc', fontSize: 13, fontWeight: 600 }}>{item.category}</span>
                <span style={{ color: '#555', fontSize: 11, marginLeft: 8 }}>{item.note}</span>
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, color: '#ef4444' }}>
                  ₹{item.trad.toLocaleString('en-IN')}
                </span>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, color: '#4ade80' }}>
                  ₹{item.with.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ height: 6, background: '#111', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${item.trad / maxVal * 100}%`, height: '100%', background: '#ef4444', borderRadius: 3 }}></div>
              </div>
              <div style={{ height: 6, background: '#111', borderRadius: 3, overflow: 'hidden' }}>
                <div style={{ width: `${item.with / maxVal * 100}%`, height: '100%', background: C, borderRadius: 3 }}></div>
              </div>
            </div>
          </div>
        ))}
        <div style={{ display: 'flex', gap: 20, marginTop: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 12, height: 4, background: '#ef4444', borderRadius: 2 }}></div>
            <span style={{ color: '#888', fontSize: 11 }}>Standard Concrete</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 12, height: 4, background: C, borderRadius: 2 }}></div>
            <span style={{ color: '#888', fontSize: 11 }}>With Graphacrete</span>
          </div>
        </div>
      </div>

      {/* Savings highlight */}
      <div style={{ padding: '16px 20px', background: '#150d00', border: `1px solid ${C}44`, borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ color: C, fontSize: 13, fontWeight: 600 }}>5-Year Savings per 1,000 m³</div>
          <div style={{ color: '#555', fontSize: 11, marginTop: 2 }}>Payback period: 12–18 months · Strength gain: 40–50%</div>
        </div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#4ade80' }}>₹{SAVING.toLocaleString('en-IN')}</div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · TCO ANALYSIS</div>
    </div>
  )
}
