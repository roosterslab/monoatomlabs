import React from 'react'

const C = '#64748b'

const tradBreakdown = [
  { label: 'Wax/Sealant (Annual)',  val: 48000 },
  { label: 'Frequent Washing',      val: 60000 },
  { label: 'Paint Correction',      val: 35000 },
  { label: 'Resale Value Loss',     val: 80000 },
]
const cerBreakdown = [
  { label: 'Ceraphene Application', val: 5000  },
  { label: 'Minimal Washing',       val: 12000 },
  { label: 'Zero Correction Needed',val: 0     },
  { label: 'Resale Value Protected', val: 52000 },
]
const TRAD_TOTAL = 223000
const CER_TOTAL  = 69000
const SAVING     = TRAD_TOTAL - CER_TOTAL

export default function CerTCOAnalysis() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Economics</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>4-YEAR TOTAL COST OF OWNERSHIP</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Traditional car care vs Ceraphene — per vehicle, 4-year period</div>
      </div>

      {/* Summary bar */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Traditional Care (4 yr)', val: '₹2,23,000', color: '#ef4444' },
          { label: 'With Ceraphene (4 yr)',   val: '₹69,000',   color: '#4ade80' },
          { label: 'Total Saving',            val: '₹1,54,000', color: C },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: 'center', padding: 20, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12 }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 32, fontWeight: 700, color: s.color }}>{s.val}</div>
            <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', letterSpacing: 1, marginTop: 6 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Side-by-side breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
        {/* Traditional */}
        <div style={{ background: '#0d0d0d', border: '1px solid #2d1515', borderRadius: 12, padding: 20 }}>
          <div style={{ color: '#ef4444', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Traditional Car Care</div>
          {tradBreakdown.map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid #1a1a1a' }}>
              <span style={{ color: '#888', fontSize: 13 }}>{item.label}</span>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#ef4444' }}>₹{item.val.toLocaleString('en-IN')}</span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ color: '#ccc', fontWeight: 700, fontSize: 14 }}>Total</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: '#ef4444' }}>₹{TRAD_TOTAL.toLocaleString('en-IN')}</span>
          </div>
        </div>

        {/* Ceraphene */}
        <div style={{ background: '#0d0d0d', border: `1px solid ${C}44`, borderRadius: 12, padding: 20 }}>
          <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>With Ceraphene</div>
          {cerBreakdown.map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid #1a1a1a' }}>
              <span style={{ color: '#888', fontSize: 13 }}>{item.label}</span>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: item.val === 0 ? '#4ade80' : '#ccc' }}>
                {item.val === 0 ? '₹0' : '₹' + item.val.toLocaleString('en-IN')}
              </span>
            </div>
          ))}
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 4 }}>
            <span style={{ color: '#ccc', fontWeight: 700, fontSize: 14 }}>Total</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: '#4ade80' }}>₹{CER_TOTAL.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Savings highlight */}
      <div style={{ padding: '16px 20px', background: '#0a1a0a', border: '1px solid #1a4a1a', borderRadius: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ color: '#4ade80', fontSize: 13, fontWeight: 600 }}>4-Year Net Savings per Vehicle</div>
          <div style={{ color: '#555', fontSize: 11, marginTop: 2 }}>Payback period: ~4 months · ROI: 11.7× over 4 years</div>
        </div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#4ade80' }}>₹{SAVING.toLocaleString('en-IN')}</div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · TCO ANALYSIS</div>
    </div>
  )
}
