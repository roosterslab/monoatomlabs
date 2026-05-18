import React from 'react'

const C = '#d97706'

const stats = [
  { value: '+25%', label: 'Compressive Strength', sub: 'Up to 15–25% gain', icon: '💪' },
  { value: '13%', label: 'Less Cement', sub: '12–15% reduction per m³', icon: '🧱' },
  { value: '+30%', label: 'Lifecycle Extension', sub: '25–40% longer structure life', icon: '🏗️' },
  { value: '6–9', label: 'Month Payback', sub: 'On additive investment', icon: '📈' },
]

export default function GraKeyMetrics() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ marginBottom: 32, borderBottom: '1px solid #1f1f1f', paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>MONOATOM LABS · GRAPHACRETE</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 48, fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: 2 }}>GRAPHACRETE</div>
        <div style={{ color: '#94a3b8', fontSize: 16, marginTop: 6 }}>Graphene-Enhanced Concrete Additive · Key Performance Metrics</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 28 }}>
            <div style={{ fontSize: 24, marginBottom: 12 }}>{s.icon}</div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 52, fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: 1 }}>{s.value}</div>
            <div style={{ color: '#e2e8f0', fontSize: 14, fontWeight: 600, marginTop: 8 }}>{s.label}</div>
            <div style={{ color: C, fontSize: 11, marginTop: 4, letterSpacing: 1 }}>{s.sub}</div>
          </div>
        ))}
      </div>

      {/* Where it applies */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24 }}>
        <div style={{ color: '#94a3b8', fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: 'uppercase', marginBottom: 16 }}>
          Application Range · Concrete Grades
        </div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {['M20', 'M30', 'M40', 'M50', 'M60', 'M70'].map((g, i) => (
            <div key={i} style={{ padding: '8px 16px', background: i >= 3 ? C + '22' : '#0d0d0d', border: `1px solid ${i >= 3 ? C + '55' : '#1f1f1f'}`, borderRadius: 8 }}>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: i >= 3 ? C : '#64748b' }}>{g}</span>
            </div>
          ))}
          <div style={{ padding: '8px 16px', background: '#0a1a10', border: '1px solid #166534', borderRadius: 8 }}>
            <span style={{ color: '#4ade80', fontSize: 12, fontWeight: 700 }}>★ NABL Sweet Spot M50</span>
          </div>
        </div>
        <div style={{ marginTop: 14, padding: '10px 16px', background: '#0d1520', border: '1px solid #1e3a5f', borderRadius: 8 }}>
          <span style={{ color: '#93c5fd', fontSize: 13, fontWeight: 600 }}>
            Residential · Commercial · Infrastructure · Bridges · High-Rise · Special Structures
          </span>
        </div>
      </div>

      <div style={{ marginTop: 24, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHENE NANOTECHNOLOGY</div>
    </div>
  )
}
