import React from 'react'

const C = '#d97706'

const impacts = [
  { icon: '🏭', metric: '15–20%', label: 'CO₂ Reduction', detail: 'Every tonne of cement avoided saves ~0.83 tCO₂. A 1,000 m³ project saves ~15–20 tonnes CO₂ with Graphacrete.' },
  { icon: '🧱', metric: '15–20%', label: 'Cement Saved', detail: 'Less cement manufactured = less limestone quarried, less kiln energy, less particulate pollution across the full supply chain.' },
  { icon: '💧', metric: '30–45%', label: 'Permeability Cut', detail: 'Denser concrete absorbs less moisture — less degradation, less repair, less maintenance concrete poured over the structure\'s life.' },
  { icon: '♻️', metric: '25%', label: 'Less Material Waste', detail: 'Higher strength at same design grade means leaner mix designs — less total material per structure achieves the same load capacity.' },
]

const co2Table = [
  { vol: '1,000 m³',  cement: '15–20 t', co2: '12–17 tCO₂', carbon: '₹6,000–8,500' },
  { vol: '10,000 m³', cement: '150–200 t', co2: '125–166 tCO₂', carbon: '₹63k–83k' },
  { vol: '1 lakh m³', cement: '1,500–2,000 t', co2: '1,245–1,660 tCO₂', carbon: '₹6.2L–8.3L' },
]

export default function GraEnvironmentalImpact() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Sustainability</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>ENVIRONMENTAL IMPACT</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>CO₂ reduction, cement savings, and carbon credit eligibility across project scales</div>
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
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>CO₂ Savings by Project Scale (@ ₹500/tCO₂ carbon credit)</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, marginBottom: 12 }}>
          {['Concrete Vol', 'Cement Saved', 'CO₂ Avoided', 'Carbon Credits'].map((h, i) => (
            <div key={i} style={{ color: '#444', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>{h}</div>
          ))}
        </div>
        {co2Table.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, padding: '10px 0', borderTop: '1px solid #141414' }}>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', color: '#888', fontSize: 13 }}>{row.vol}</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', color: C, fontSize: 13, fontWeight: 700 }}>{row.cement}</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', color: '#60a5fa', fontSize: 13, fontWeight: 700 }}>{row.co2}</span>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', color: '#4ade80', fontSize: 13, fontWeight: 700 }}>{row.carbon}</span>
          </div>
        ))}
        <div style={{ marginTop: 14, padding: '8px 14px', background: '#041a0a', border: '1px solid #14451a', borderRadius: 8 }}>
          <span style={{ color: '#4ade80', fontSize: 12, fontWeight: 600 }}>🌿 Net Zero 2070 alignment: Cement industry = 8% of global CO₂. Graphacrete cuts per-project footprint by 15–20%.</span>
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · SUSTAINABILITY</div>
    </div>
  )
}
