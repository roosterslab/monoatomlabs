import React from 'react'

const C = '#f59e0b'

const stats = [
  { value: '10–12%', label: 'Power Output Gain', sub: 'Field-validated across 150+ MW', icon: '⚡' },
  { value: '5–6°C', label: 'Temp Reduction', sub: 'Operating temperature drop', icon: '🌡️' },
  { value: '30–40%', label: 'Soiling Reduction', sub: 'Self-cleaning hydrophobic effect', icon: '💧' },
  { value: '>98%', label: 'Light Transmission', sub: 'Maintains optical clarity', icon: '☀️' },
]

export default function SolKeyMetrics() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ marginBottom: 32, borderBottom: '1px solid #1f1f1f', paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: 'uppercase' }}>MONOATOM LABS · GRAFFISOL</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 48, fontWeight: 700, color: '#fff', lineHeight: 1, letterSpacing: 2 }}>GRAFFISOL</div>
        <div style={{ color: '#94a3b8', fontSize: 16, marginTop: 6 }}>Graphene Solar Panel Nano-Coating · Key Performance Metrics</div>
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

      {/* Revenue impact strip */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24 }}>
        <div style={{ color: '#94a3b8', fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: 'uppercase', marginBottom: 16 }}>
          Annual Revenue Gain · At 10% Output Gain, ₹7/kWh
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            { size: '100 kW', gain: '₹1.05L/yr', sub: 'Rooftop' },
            { size: '1 MW', gain: '₹10.5L/yr', sub: 'Commercial' },
            { size: '10 MW', gain: '₹1.05 Cr/yr', sub: 'Utility' },
            { size: '50 MW', gain: '₹5.25 Cr/yr', sub: 'Solar park' },
          ].map((r, i) => (
            <div key={i} style={{ background: '#0d0d0d', borderRadius: 8, border: '1px solid #1f1f1f', padding: '14px 10px', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: C }}>{r.size}</div>
              <div style={{ color: '#4ade80', fontSize: 14, fontWeight: 700, marginTop: 6 }}>{r.gain}</div>
              <div style={{ color: '#475569', fontSize: 10, marginTop: 4 }}>{r.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, padding: '10px 16px', background: '#0d1520', border: '1px solid #1e3a5f', borderRadius: 8 }}>
          <span style={{ color: '#93c5fd', fontSize: 13, fontWeight: 600 }}>
            Payback: 15–18 months · Durability: 3–5 years · 26+ installations · 150+ MW coated
          </span>
        </div>
      </div>

      <div style={{ marginTop: 24, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHENE NANOTECHNOLOGY</div>
    </div>
  )
}
