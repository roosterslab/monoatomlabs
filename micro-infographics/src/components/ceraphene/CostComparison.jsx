import React from 'react'

const C = '#64748b'

const competitors = [
  { brand: 'CERAPHENE', price: 5000, color: C, highlight: true },
  { brand: 'Entry Ceramic', price: 10000, color: '#334155' },
  { brand: 'Premium Ceramic', price: 15000, color: '#334155' },
  { brand: 'Pro Ceramic', price: 20000, color: '#2a2a2a' },
  { brand: 'Luxury Coating', price: 25000, color: '#222' },
]
const MAX = 25000

const fmt = (n) => '₹' + n.toLocaleString('en-IN')

export default function CerCostComparison() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Pricing</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>COST COMPARISON</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Application price per vehicle · India market rate</div>
      </div>

      {/* Bar chart */}
      <div style={{ marginBottom: 32 }}>
        {competitors.map((c, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 12 }}>
            <div style={{ width: 120, textAlign: 'right', flexShrink: 0 }}>
              <div style={{ color: c.highlight ? '#e2e8f0' : '#475569', fontSize: 12, fontWeight: c.highlight ? 700 : 400 }}>{c.brand}</div>
            </div>
            <div style={{ flex: 1, height: 44, background: '#111', borderRadius: 6, overflow: 'hidden', position: 'relative' }}>
              <div style={{
                width: `${(c.price / MAX) * 100}%`, height: '100%',
                background: c.highlight ? C : c.color,
                borderRadius: 6,
                border: c.highlight ? `1px solid ${C}` : 'none',
                boxShadow: c.highlight ? `0 0 20px ${C}44` : 'none',
                display: 'flex', alignItems: 'center', paddingLeft: 12,
              }}>
                <span style={{ color: c.highlight ? '#fff' : '#555', fontSize: 13, fontWeight: 700, whiteSpace: 'nowrap' }}>
                  {fmt(c.price)}
                </span>
              </div>
            </div>
            {c.highlight && (
              <div style={{ padding: '4px 10px', background: '#0d1520', border: '1px solid #1e3a5f', borderRadius: 6, flexShrink: 0 }}>
                <span style={{ color: '#60a5fa', fontSize: 11, fontWeight: 700 }}>67% LESS</span>
              </div>
            )}
            {!c.highlight && (
              <div style={{ width: 80, flexShrink: 0 }}>
                <span style={{ color: '#475569', fontSize: 11 }}>+{fmt(c.price - 5000)} extra</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* 4-year TCO */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 16 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>4-Year Total Cost of Ownership · Per Vehicle</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
          <div>
            <div style={{ color: '#94a3b8', fontSize: 12, marginBottom: 10, fontWeight: 600 }}>Traditional (Wax + Polishing)</div>
            {[
              ['Annual wax/sealant', '₹12,000'],
              ['Frequent washing (4yr)', '₹60,000'],
              ['Paint correction', '₹35,000'],
              ['Resale value loss', '₹80,000'],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1a1a1a', paddingBottom: 6, marginBottom: 6 }}>
                <span style={{ color: '#475569', fontSize: 12 }}>{k}</span>
                <span style={{ color: '#666', fontSize: 12, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 4 }}>
              <span style={{ color: '#ef4444', fontSize: 13, fontWeight: 700 }}>TOTAL</span>
              <span style={{ color: '#ef4444', fontSize: 13, fontWeight: 700 }}>₹1,87,000</span>
            </div>
          </div>
          <div>
            <div style={{ color: '#94a3b8', fontSize: 12, marginBottom: 10, fontWeight: 600 }}>With CERAPHENE</div>
            {[
              ['One-time coating', '₹5,000'],
              ['Reduced washing (4yr)', '₹24,000'],
              ['Paint correction', '₹0'],
              ['Maintained resale', '₹20,000'],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #1a1a1a', paddingBottom: 6, marginBottom: 6 }}>
                <span style={{ color: '#475569', fontSize: 12 }}>{k}</span>
                <span style={{ color: i === 2 ? '#22c55e' : '#94a3b8', fontSize: 12, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 4 }}>
              <span style={{ color: '#22c55e', fontSize: 13, fontWeight: 700 }}>TOTAL</span>
              <span style={{ color: '#22c55e', fontSize: 13, fontWeight: 700 }}>₹49,000</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 16, padding: '12px 16px', background: '#0a1a10', border: '1px solid #166534', borderRadius: 8, textAlign: 'center' }}>
          <span style={{ color: '#4ade80', fontSize: 14, fontWeight: 700 }}>SAVE ₹1,38,000 OVER 4 YEARS · Per Vehicle</span>
        </div>
      </div>

      <div style={{ textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE</div>
    </div>
  )
}
