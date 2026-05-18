import React from 'react'

const C = '#d97706'

const volumes = [
  { vol: 100,   addCost: 15000, saving: 33280, net: 18280,  payback: '5 mo' },
  { vol: 500,   addCost: 75000, saving: 166400, net: 91400,  payback: '5 mo' },
  { vol: 1000,  addCost: 150000, saving: 332800, net: 182800, payback: '5 mo' },
  { vol: 5000,  addCost: 750000, saving: 1664000, net: 914000, payback: '5 mo' },
  { vol: 10000, addCost: 1500000, saving: 3328000, net: 1828000, payback: '5 mo' },
]

const fmt = (n) => {
  if (n >= 100000) return '₹' + (n / 100000).toFixed(1) + 'L'
  return '₹' + n.toLocaleString('en-IN')
}

const MAX_NET = 1828000

export default function GraROIAnalysis() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Returns</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>ROI PER m³ ANALYSIS</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Additive cost vs cement savings · Net benefit per project volume</div>
      </div>

      {/* Per m³ breakdown */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 28 }}>
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 22 }}>
          <div style={{ color: '#64748b', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>Additive Cost</div>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 40, fontWeight: 700, color: '#ef4444' }}>₹150</div>
          <div style={{ color: '#475569', fontSize: 12, marginTop: 4 }}>per m³ (indicative)</div>
        </div>
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 22 }}>
          <div style={{ color: '#64748b', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>Cement Savings</div>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 40, fontWeight: 700, color: '#4ade80' }}>₹333</div>
          <div style={{ color: '#475569', fontSize: 12, marginTop: 4 }}>per m³ (at ₹320/bag)</div>
        </div>
        <div style={{ background: '#0a1a10', border: '1px solid #166534', borderRadius: 12, padding: 22 }}>
          <div style={{ color: '#6ee7b7', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>Net Margin</div>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 40, fontWeight: 700, color: '#4ade80' }}>₹183</div>
          <div style={{ color: '#4ade80', fontSize: 12, marginTop: 4 }}>per m³ profit on additive</div>
        </div>
      </div>

      {/* Volume scale chart */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 16 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Net Savings by Project Volume</div>
        {volumes.map((v, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 10 }}>
            <div style={{ width: 70, textAlign: 'right', flexShrink: 0 }}>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#64748b' }}>{v.vol.toLocaleString()} m³</span>
            </div>
            <div style={{ flex: 1, height: 36, background: '#0d0d0d', borderRadius: 6, overflow: 'hidden' }}>
              {/* Additive cost in red */}
              <div style={{ display: 'flex', height: '100%' }}>
                <div style={{ width: `${(v.addCost / v.saving) * (v.saving / MAX_NET) * 100}%`, background: '#450a0a', display: 'flex', alignItems: 'center', paddingLeft: 6 }}>
                  <span style={{ color: '#ef4444', fontSize: 10, whiteSpace: 'nowrap' }}>{fmt(v.addCost)}</span>
                </div>
                <div style={{
                  width: `${(v.net / MAX_NET) * 100}%`, background: C + '99',
                  borderRadius: '0 6px 6px 0', display: 'flex', alignItems: 'center', paddingLeft: 6,
                }}>
                  <span style={{ color: '#fff', fontSize: 10, fontWeight: 700, whiteSpace: 'nowrap' }}>{fmt(v.net)} net</span>
                </div>
              </div>
            </div>
            <div style={{ width: 80, flexShrink: 0, textAlign: 'right' }}>
              <span style={{ color: '#4ade80', fontSize: 12, fontWeight: 700 }}>{v.payback}</span>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 12, display: 'flex', gap: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 12, height: 12, background: '#450a0a', borderRadius: 2 }} />
            <span style={{ color: '#475569', fontSize: 10 }}>Additive cost</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 12, height: 12, background: C, borderRadius: 2 }} />
            <span style={{ color: '#475569', fontSize: 10 }}>Net savings</span>
          </div>
          <div style={{ marginLeft: 'auto', color: '#475569', fontSize: 10 }}>Payback →</div>
        </div>
      </div>

      <div style={{ textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · ROI ANALYSIS</div>
    </div>
  )
}
