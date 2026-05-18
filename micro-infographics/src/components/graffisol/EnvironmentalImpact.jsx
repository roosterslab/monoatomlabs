import React from 'react'

const C = '#f59e0b'

const impacts = [
  { icon: '⚡', metric: '+10–12%', label: 'More Clean Energy', detail: 'Every kW of solar generates more clean electricity — displacing grid power from coal. A 1 MW plant generates +130 MWh/yr more with Graffisol.' },
  { icon: '💧', metric: '60%', label: 'Water Saved', detail: 'Hydrophobic surface means 60% fewer manual cleaning sessions — critical in water-scarce regions like Rajasthan, Gujarat, where solar irradiation peaks.' },
  { icon: '🌡️', metric: '5–6°C', label: 'Cooler Operation', detail: 'Lower panel temperature means longer silicon cell life — panels degrade slower, extending the 25-year lifecycle and reducing premature replacements.' },
  { icon: '🧹', metric: '40%', label: 'Less Cleaning', detail: 'Fewer cleaning cycles = less diesel/electricity for pumping, fewer labor trips, reduced chemical cleaners used in commercial installations.' },
]

const co2Table = [
  { cap: '100 kW',  extra: '13 MWh/yr', co2: '10.4 tCO₂/yr', credit: '₹5,200/yr' },
  { cap: '1 MW',    extra: '130 MWh/yr', co2: '104 tCO₂/yr', credit: '₹52,000/yr' },
  { cap: '50 MW',   extra: '6,500 MWh/yr', co2: '5,200 tCO₂/yr', credit: '₹26 L/yr' },
]

export default function SolEnvironmentalImpact() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Sustainability</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>ENVIRONMENTAL IMPACT</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>More clean energy, less water, lower carbon — Graffisol amplifies solar sustainability</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }}>
        {impacts.map((imp, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20, display: 'flex', gap: 14 }}>
            <div style={{ fontSize: 30, flexShrink: 0 }}>{imp.icon}</div>
            <div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#4ade80', lineHeight: 1.1 }}>{imp.metric}</div>
              <div style={{ color: C, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 6 }}>{imp.label}</div>
              <div style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.5 }}>{imp.detail}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Additional Clean Energy & Carbon Credits (@ ₹500/tCO₂ · Grid factor 0.8 kgCO₂/kWh)</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 12 }}>
          {['Plant Size', 'Extra Generation', 'CO₂ Offset', 'Carbon Credits'].map((h, i) => (
            <div key={i} style={{ color: '#444', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>{h}</div>
          ))}
        </div>
        {co2Table.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, padding: '10px 0', borderTop: '1px solid #141414' }}>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', color: '#888', fontSize: 13 }}>{row.cap}</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', color: C, fontSize: 13, fontWeight: 700 }}>{row.extra}</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', color: '#60a5fa', fontSize: 13, fontWeight: 700 }}>{row.co2}</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', color: '#4ade80', fontSize: 13, fontWeight: 700 }}>{row.credit}</span>
          </div>
        ))}
        <div style={{ marginTop: 14, padding: '8px 14px', background: '#041a0a', border: '1px solid #14451a', borderRadius: 8 }}>
          <span style={{ color: '#4ade80', fontSize: 12, fontWeight: 600 }}>🌿 India 500 GW target: Graffisol-coated fleet would generate +60 TWh/yr extra — powering 5 million homes</span>
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · SUSTAINABILITY</div>
    </div>
  )
}
