import React from 'react'

const C = '#06b6d4'

const breakdown = [
  { category: 'Raw Material Cost',    trad: 4500000, with: 4680000, note: 'HD-G-PE additive included' },
  { category: 'Product Returns',      trad: 450000,  with: 180000,  note: 'Reduced failure rates' },
  { category: 'Quality Issues',       trad: 280000,  with: 80000,   note: 'Better consistency' },
  { category: 'Warranty Claims',      trad: 320000,  with: 100000,  note: 'Extended product life' },
]
const TRAD_TOTAL = 5550000
const WITH_TOTAL = 5040000
const SAVING     = TRAD_TOTAL - WITH_TOTAL

export default function PolyTCOAnalysis() {
  const maxVal = TRAD_TOTAL
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Economics</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>5-YEAR TOTAL COST OF OWNERSHIP</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Standard HDPE vs HD-G-PE enhanced — per 1,000 MT production, 5-year period</div>
      </div>

      {/* Summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Standard HDPE (5 yr)', val: '₹55.5L',  color: '#ef4444' },
          { label: 'With HD-G-PE (5 yr)',  val: '₹50.4L',  color: '#4ade80' },
          { label: 'Net Saving',           val: '₹5.1L',   color: C },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center', padding: 20, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12 }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 32, fontWeight: 700, color: s.color }}>{s.val}</div>
            <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Comparison bars */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 16 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>Cost Breakdown · Standard vs HD-G-PE Enhanced</div>
        {breakdown.map((item, i) => (
          <div key={i} style={{ marginBottom: 18 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <div>
                <span style={{ color: '#ccc', fontSize: 13, fontWeight: 600 }}>{item.category}</span>
                <span style={{ color: '#555', fontSize: 11, marginLeft: 8 }}>{item.note}</span>
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, color: '#ef4444' }}>
                  ₹{(item.trad / 100000).toFixed(1)}L
                </span>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, color: item.with > item.trad ? '#f59e0b' : '#4ade80' }}>
                  ₹{(item.with / 100000).toFixed(1)}L
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
            <span style={{ color: '#888', fontSize: 11 }}>Standard HDPE</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 12, height: 4, background: C, borderRadius: 2 }}></div>
            <span style={{ color: '#888', fontSize: 11 }}>With HD-G-PE</span>
          </div>
        </div>
      </div>

      {/* Savings highlight + quality metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 12 }}>
        <div style={{ padding: '16px 20px', background: '#001a1f', border: `1px solid ${C}44`, borderRadius: 10 }}>
          <div style={{ color: C, fontSize: 13, fontWeight: 600, marginBottom: 4 }}>5-Year Net Saving per 1,000 MT</div>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#4ade80' }}>₹{(SAVING / 100000).toFixed(1)}L</div>
          <div style={{ color: '#555', fontSize: 11, marginTop: 4 }}>Payback: 6–9 months · Quality costs: −60% · Lifespan: 2.5×</div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, alignContent: 'start' }}>
          {[
            { label: 'Returns Reduction', val: '−60%', color: '#4ade80' },
            { label: 'Warranty Claims', val: '−69%', color: '#4ade80' },
            { label: 'Quality Issues', val: '−71%', color: '#4ade80' },
            { label: 'Lifespan', val: '2.5×', color: C },
          ].map((m, i) => (
            <div key={i} style={{ padding: '10px 14px', background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 8, textAlign: 'center' }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: m.color }}>{m.val}</div>
              <div style={{ fontSize: 10, color: '#555', textTransform: 'uppercase', marginTop: 2 }}>{m.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · TCO ANALYSIS</div>
    </div>
  )
}
