import React from 'react'

const C = '#06b6d4'

const stats = [
  { value: '+30%', label: 'Tensile Strength', sub: 'ASTM D638 verified', icon: '💪' },
  { value: '20×', label: 'Elongation at Break', sub: 'vs standard HDPE baseline', icon: '🔄' },
  { value: '+20%', label: 'Service Lifespan', sub: 'UV stability + wear resistance', icon: '⏳' },
  { value: '0.5–2%', label: 'Dosage Only', sub: 'Masterbatch pellets — drop-in', icon: '🧬' },
]

export default function PolyKeyMetrics() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ marginBottom: 32, borderBottom: '1px solid #1f1f1f', paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>MONOATOM LABS · HD-G-PE</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 48, fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: 2 }}>HD-G-PE</div>
        <div style={{ color: '#94a3b8', fontSize: 16, marginTop: 6 }}>Graphene-Reinforced HDPE Masterbatch · Key Performance Metrics</div>
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

      {/* Application net benefit */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24 }}>
        <div style={{ color: '#94a3b8', fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: 'uppercase', marginBottom: 16 }}>
          Net Benefit Per Ton · By Application Type
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[
            { app: 'Pipes & Fittings', benefit: '₹12,000/ton', how: '12% price premium', color: C },
            { app: 'Films & Packaging', benefit: '₹15,000/ton', how: '15% material saving', color: C },
            { app: 'Injection Molding', benefit: '₹25,000/ton', how: '15% premium + 10% saving', color: C },
          ].map((a, i) => (
            <div key={i} style={{ background: '#0d0d0d', border: `1px solid ${C}33`, borderRadius: 10, padding: 18, textAlign: 'center' }}>
              <div style={{ color: '#94a3b8', fontSize: 11, marginBottom: 8 }}>{a.app}</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#4ade80' }}>{a.benefit}</div>
              <div style={{ color: '#475569', fontSize: 10, marginTop: 6 }}>{a.how}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, padding: '10px 16px', background: '#03181f', border: `1px solid ${C}44`, borderRadius: 8 }}>
          <span style={{ color: C, fontSize: 13, fontWeight: 600 }}>
            Compatible with extrusion · injection molding · blow molding · film blowing · 180–240°C
          </span>
        </div>
      </div>

      <div style={{ marginTop: 24, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHENE NANOTECHNOLOGY</div>
    </div>
  )
}
