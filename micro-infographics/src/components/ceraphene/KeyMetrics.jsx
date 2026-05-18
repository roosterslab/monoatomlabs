import React from 'react'

const C = '#64748b'

const stats = [
  { value: '9H+', label: 'Pencil Hardness', sub: 'ASTM D3363 Certified', icon: '💎' },
  { value: '115°', label: 'Contact Angle', sub: 'Superhydrophobic Surface', icon: '💧' },
  { value: '3–4+', label: 'Years Durability', sub: 'Field Validated', icon: '🛡️' },
  { value: '₹5,000', label: 'Per Vehicle', sub: 'vs ₹15,000+ Competitors', icon: '✦' },
]

export default function CerKeyMetrics() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 900, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: '1px solid #1f1f1f', paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>
          MONOATOM LABS · CERAPHENE
        </div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 48, fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: 2 }}>
          CERAPHENE
        </div>
        <div style={{ color: '#94a3b8', fontSize: 16, marginTop: 6 }}>Graphene-Enhanced Ceramic Coating · Key Performance Metrics</div>
      </div>

      {/* 4 stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 28 }}>
            <div style={{ fontSize: 24, marginBottom: 12 }}>{s.icon}</div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 52, fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: 1 }}>
              {s.value}
            </div>
            <div style={{ color: '#e2e8f0', fontSize: 14, fontWeight: 600, marginTop: 8 }}>{s.label}</div>
            <div style={{ color: C, fontSize: 11, marginTop: 4, letterSpacing: 1 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Savings bar */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24 }}>
        <div style={{ color: '#94a3b8', fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: 'uppercase', marginBottom: 16 }}>
          Cost Advantage vs Premium Competitors
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 10 }}>
          <div style={{ width: 80, color: '#64748b', fontSize: 12, textAlign: 'right', flexShrink: 0 }}>CERAPHENE</div>
          <div style={{ flex: 1, background: '#1a1a1a', borderRadius: 4, height: 36, overflow: 'hidden', position: 'relative' }}>
            <div style={{ width: '33%', height: '100%', background: C, borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
              <span style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>₹5,000</span>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 80, color: '#64748b', fontSize: 12, textAlign: 'right', flexShrink: 0 }}>Competitors</div>
          <div style={{ flex: 1, background: '#1a1a1a', borderRadius: 4, height: 36, overflow: 'hidden', position: 'relative' }}>
            <div style={{ width: '100%', height: '100%', background: '#2a2a2a', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
              <span style={{ color: '#666', fontSize: 13, fontWeight: 700 }}>₹15,000 – ₹25,000</span>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 14, padding: '10px 16px', background: '#0d1520', borderRadius: 8, border: '1px solid #1e3a5f' }}>
          <span style={{ color: '#93c5fd', fontSize: 13, fontWeight: 600 }}>
            60–70% SAVINGS · Same 9H+ hardness · Same 3–4 year durability
          </span>
        </div>
      </div>

      {/* Footer tag */}
      <div style={{ marginTop: 24, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>
        MONOATOM LABS · GRAPHENE NANOTECHNOLOGY
      </div>
    </div>
  )
}
