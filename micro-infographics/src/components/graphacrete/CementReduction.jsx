import React from 'react'

const C = '#d97706'

// For 1000 m³ of M50 concrete:
// Standard: ~400 kg/m³ cement → 400,000 kg = 8,000 bags (50kg)
// With Graphacrete: 13% less → 348 kg/m³ → 6,960 bags
// Savings: 1,040 bags × ₹320/bag = ₹3,32,800

export default function GraCementReduction() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Cement</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>CEMENT REDUCTION</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>12–15% less cement per m³ · Same or better performance</div>
      </div>

      {/* Visual bag comparison */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
        {/* Without */}
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24 }}>
          <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Standard Mix · M50</div>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 56, fontWeight: 700, color: '#555' }}>400</div>
          <div style={{ color: '#64748b', fontSize: 14, marginBottom: 16 }}>kg cement per m³</div>
          {/* Bag icons row */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 12 }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} style={{ width: 24, height: 32, background: '#2a2a2a', borderRadius: 3, border: '1px solid #333' }} />
            ))}
            <span style={{ color: '#475569', fontSize: 10, alignSelf: 'flex-end', marginLeft: 4 }}>×400 kg/m³</span>
          </div>
          <div style={{ color: '#475569', fontSize: 12 }}>Per 1,000 m³: <strong style={{ color: '#666' }}>8,000 bags</strong></div>
          <div style={{ color: '#475569', fontSize: 12 }}>Cost: <strong style={{ color: '#666' }}>₹25.6 lakhs</strong></div>
        </div>

        {/* With Graphacrete */}
        <div style={{ background: '#111', border: `1px solid ${C}44`, borderRadius: 12, padding: 24 }}>
          <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Graphacrete Mix · M50</div>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 56, fontWeight: 700, color: C }}>348</div>
          <div style={{ color: C, fontSize: 14, marginBottom: 16 }}>kg cement per m³ <span style={{ color: '#4ade80', fontSize: 12 }}>(-13%)</span></div>
          {/* Bag icons row — fewer */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 12 }}>
            {Array.from({ length: 17 }).map((_, i) => (
              <div key={i} style={{ width: 24, height: 32, background: C + '33', borderRadius: 3, border: `1px solid ${C}55` }} />
            ))}
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} style={{ width: 24, height: 32, background: '#0a1a10', borderRadius: 3, border: '1px dashed #166534', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: '#4ade80', fontSize: 9 }}>✕</span>
              </div>
            ))}
            <span style={{ color: C, fontSize: 10, alignSelf: 'flex-end', marginLeft: 4 }}>×348 kg/m³</span>
          </div>
          <div style={{ color: '#94a3b8', fontSize: 12 }}>Per 1,000 m³: <strong style={{ color: C }}>6,960 bags</strong></div>
          <div style={{ color: '#94a3b8', fontSize: 12 }}>Cost: <strong style={{ color: C }}>₹22.3 lakhs</strong></div>
        </div>
      </div>

      {/* Savings callout */}
      <div style={{ background: '#0a1a10', border: '1px solid #166534', borderRadius: 12, padding: 24, marginBottom: 16 }}>
        <div style={{ color: '#6ee7b7', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>Savings Per 1,000 m³ of Concrete (M50)</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
          {[
            { val: '1,040', label: 'Bags Saved', sub: '50 kg bags' },
            { val: '₹3.3L', label: 'Cost Saved', sub: 'at ₹320/bag' },
            { val: '52 T', label: 'CO₂ Avoided', sub: '~50 kg CO₂/bag' },
          ].map((b, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#4ade80' }}>{b.val}</div>
              <div style={{ color: '#6ee7b7', fontSize: 12, fontWeight: 600, marginTop: 4 }}>{b.label}</div>
              <div style={{ color: '#475569', fontSize: 10, marginTop: 2 }}>{b.sub}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · CEMENT EFFICIENCY</div>
    </div>
  )
}
