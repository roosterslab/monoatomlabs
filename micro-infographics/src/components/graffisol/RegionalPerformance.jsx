import React from 'react'

const C = '#f59e0b'

const states = [
  { state: 'Rajasthan',       ghi: '6.5', baseline: 'Dust +18% loss',    gain: '+11.8%', annual: '₹35.4L/MW', highlight: true },
  { state: 'Gujarat',         ghi: '5.8', baseline: 'Dust +15% loss',    gain: '+10.5%', annual: '₹30.2L/MW', highlight: false },
  { state: 'Tamil Nadu',      ghi: '5.2', baseline: 'Humidity soiling',   gain: '+9.8%',  annual: '₹25.1L/MW', highlight: false },
  { state: 'Andhra Pradesh',  ghi: '5.5', baseline: 'Red-soil dust',      gain: '+10.2%', annual: '₹27.8L/MW', highlight: false },
  { state: 'Maharashtra',     ghi: '5.0', baseline: 'Mixed soiling',      gain: '+9.5%',  annual: '₹23.8L/MW', highlight: false },
  { state: 'Karnataka',       ghi: '5.3', baseline: 'Moderate dust',      gain: '+9.8%',  annual: '₹25.5L/MW', highlight: false },
  { state: 'Madhya Pradesh',  ghi: '5.7', baseline: 'High dust',          gain: '+10.8%', annual: '₹29.7L/MW', highlight: false },
  { state: 'Punjab',          ghi: '4.8', baseline: 'Agri particulate',   gain: '+9.2%',  annual: '₹21.8L/MW', highlight: false },
]

const envCards = [
  {
    zone: 'Desert',
    region: 'Rajasthan / Gujarat',
    condition: 'Dust + UV stress',
    benefit: 'Max benefit zone',
    recoat: '5-yr recoat cycle',
    color: '#92400e',
  },
  {
    zone: 'Coastal',
    region: 'Tamil Nadu / Kerala',
    condition: 'Salt spray environment',
    benefit: 'Hydrophobic critical',
    recoat: '4-yr recoat cycle',
    color: '#0e4f6b',
  },
  {
    zone: 'Agricultural',
    region: 'Punjab / UP',
    condition: 'Seasonal pollen/dust cycles',
    benefit: 'Periodic peak gain',
    recoat: '4-yr recoat cycle',
    color: '#365314',
  },
  {
    zone: 'Industrial',
    region: 'Maharashtra',
    condition: 'Particulate + chemical',
    benefit: 'Annual inspection needed',
    recoat: 'Annual inspection',
    color: '#1e1b4b',
  },
]

export default function SolRegionalPerformance() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 900, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>MONOATOM LABS · GRAFFISOL</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 48, fontWeight: 700, color: '#fff', letterSpacing: 2, lineHeight: 1 }}>REGIONAL PERFORMANCE</div>
        <div style={{ color: '#6b7280', fontSize: 13, marginTop: 8 }}>Solar Panel Coating · State-by-State Power Gain Analysis</div>
      </div>

      {/* Section 1 — GHI & Expected Gain Table */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: '#6b7280', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>GHI and Expected Gain by State</div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#1a1a1a', borderBottom: '2px solid ' + C }}>
              {['State', 'GHI (kWh/m/day)', 'Baseline Loss', 'GRAFFISOL Gain', 'Net Annual Gain/MW'].map((h, i) => (
                <th key={i} style={{
                  padding: '10px 12px', textAlign: i === 0 ? 'left' : 'center',
                  color: '#9ca3af', fontSize: 10, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {states.map((row, i) => (
              <tr key={i} style={{
                background: row.highlight ? C + '22' : i % 2 === 0 ? '#111' : '#0d0d0d',
                borderLeft: row.highlight ? `3px solid ${C}` : '3px solid transparent',
              }}>
                <td style={{ padding: '10px 12px', color: row.highlight ? C : '#e5e7eb', fontSize: 13, fontWeight: row.highlight ? 700 : 400 }}>{row.state}</td>
                <td style={{ padding: '10px 12px', textAlign: 'center' }}>
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: row.highlight ? C : '#d1d5db' }}>{row.ghi}</span>
                </td>
                <td style={{ padding: '10px 12px', textAlign: 'center', color: '#9ca3af', fontSize: 11 }}>{row.baseline}</td>
                <td style={{ padding: '10px 12px', textAlign: 'center', color: '#4ade80', fontSize: 13, fontWeight: 700 }}>{row.gain}</td>
                <td style={{ padding: '10px 12px', textAlign: 'center', color: row.highlight ? C : '#d1d5db', fontSize: 13, fontWeight: row.highlight ? 700 : 600 }}>{row.annual}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 2 — Environmental Durability */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: '#6b7280', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Environmental Durability</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {envCards.map((card, i) => (
            <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 10, padding: 18, borderTop: `3px solid ${C}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff' }}>{card.zone}</div>
                <div style={{ color: C, fontSize: 10, fontWeight: 700, background: C + '22', padding: '2px 8px', borderRadius: 4 }}>{card.recoat}</div>
              </div>
              <div style={{ color: '#6b7280', fontSize: 11, marginBottom: 6 }}>{card.region}</div>
              <div style={{ color: '#9ca3af', fontSize: 12, marginBottom: 4 }}>{card.condition}</div>
              <div style={{ color: '#4ade80', fontSize: 12, fontWeight: 600 }}>{card.benefit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ color: '#374151', fontSize: 10, lineHeight: 1.6, maxWidth: 600 }}>
          GHI data: MNRE Solar Resource Atlas. Gain % from IEC 60904-1 comparative field tests. Revenue at Rs. 4.0/kWh PPA.
        </div>
        <div style={{ color: '#333', fontSize: 10, letterSpacing: 2, flexShrink: 0 }}>MONOATOM LABS · GRAFFISOL · REGIONAL</div>
      </div>

    </div>
  )
}
