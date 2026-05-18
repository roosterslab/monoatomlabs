import React from 'react'

const C = '#06b6d4'

const applications = [
  { app: 'Stretch Film',        std: '23 µm',  hdgpe: '19 µm', saved: '17.4%', costSaving: '₹1,800/ton' },
  { app: 'Agricultural Mulch',  std: '30 µm',  hdgpe: '25 µm', saved: '16.7%', costSaving: '₹1,500/ton' },
  { app: 'Liner Film',          std: '40 µm',  hdgpe: '33 µm', saved: '17.5%', costSaving: '₹1,650/ton' },
  { app: 'Carrier Bags',        std: '12 µm',  hdgpe: '10 µm', saved: '16.7%', costSaving: '₹1,400/ton' },
  { app: 'Industrial Sack',     std: '100 µm', hdgpe: '84 µm', saved: '16.0%', costSaving: '₹1,350/ton' },
]

const validations = [
  { std: 'ASTM D882', label: 'Tensile', desc: 'Original gauge tensile performance at new gauge thickness' },
  { std: 'ASTM D1709', label: 'Dart Impact', desc: 'Original dart drop rating maintained at reduced thickness' },
  { std: 'ASTM D1922', label: 'Tear', desc: 'Original Elmendorf tear resistance met at new gauge' },
]

export default function PolyDowngaugingGuide() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 900, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>MONOATOM LABS · HD-G-PE</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 48, fontWeight: 700, color: '#fff', letterSpacing: 2, lineHeight: 1 }}>DOWNGAUGING GUIDE</div>
        <div style={{ color: '#6b7280', fontSize: 13, marginTop: 8 }}>Graphene HDPE Masterbatch · Material Reduction Without Compromise</div>
      </div>

      {/* Section 1 — What is Downgauging */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: '#6b7280', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>What is Downgauging?</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div style={{ color: '#d1d5db', fontSize: 13, lineHeight: 1.8 }}>
            Downgauging uses HD-G-PE's +30% tensile strength to reduce film/sheet thickness by 15-20% while maintaining identical or superior mechanical performance. Less material means lower cost per unit and reduced carbon footprint per kilogram of product.
          </div>
          <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 8, padding: 20, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { val: '15-20%', label: 'Less material' },
              { val: 'Same', label: 'Strength retained' },
              { val: 'Lower', label: 'Unit cost' },
              { val: 'Lower', label: 'CO2 per kg product' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: C, minWidth: 70 }}>{item.val}</div>
                <div style={{ color: '#9ca3af', fontSize: 12 }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 2 — Downgauging Savings Table */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: '#6b7280', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Downgauging Savings by Application</div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: C }}>
              {['Application', 'Standard Thickness', 'HD-G-PE Thickness', 'Material Saved', 'Cost Saving/ton'].map((h, i) => (
                <th key={i} style={{
                  padding: '10px 14px', textAlign: i === 0 ? 'left' : 'center',
                  color: '#000', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {applications.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#111' : '#0d0d0d', borderBottom: '1px solid #1a1a1a' }}>
                <td style={{ padding: '11px 14px', color: '#e5e7eb', fontSize: 13, fontWeight: 500 }}>{row.app}</td>
                <td style={{ padding: '11px 14px', textAlign: 'center', color: '#6b7280', fontSize: 13 }}>{row.std}</td>
                <td style={{ padding: '11px 14px', textAlign: 'center', color: '#9ca3af', fontSize: 13 }}>{row.hdgpe}</td>
                <td style={{ padding: '11px 14px', textAlign: 'center' }}>
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: C }}>{row.saved}</span>
                </td>
                <td style={{ padding: '11px 14px', textAlign: 'center', color: '#4ade80', fontSize: 13, fontWeight: 700 }}>{row.costSaving}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 3 — Validation Protocol */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: '#6b7280', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Validation Protocol</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {validations.map((v, i) => (
            <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 10, padding: 20, textAlign: 'center' }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: C, marginBottom: 4 }}>{v.std}</div>
              <div style={{ color: '#fff', fontSize: 13, fontWeight: 700, marginBottom: 10 }}>{v.label}</div>
              <div style={{ color: '#9ca3af', fontSize: 11, lineHeight: 1.6 }}>{v.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ color: '#374151', fontSize: 10, lineHeight: 1.6, maxWidth: 600 }}>
          Typical payback on HD-G-PE masterbatch cost vs material savings: 2-4 months. FSSAI compliant - safe for food-contact downgauged films.
        </div>
        <div style={{ color: '#333', fontSize: 10, letterSpacing: 2, flexShrink: 0 }}>MONOATOM LABS · HD-G-PE · DOWNGAUGING</div>
      </div>

    </div>
  )
}
