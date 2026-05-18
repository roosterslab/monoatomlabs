import React from 'react'

const C = '#64748b'

const apps = [
  {
    sector: 'Exotic & Luxury Cars',
    icon: '🏎️',
    tag: 'Premium Auto',
    headline: '9H+ scratch protection for paint that cost more than most cars',
    stats: [
      { label: 'Hardness', val: '9H+' },
      { label: 'Contact Angle', val: '115°' },
      { label: 'UV Block', val: '99%' },
    ],
    benefit: 'Protects 7-figure paint jobs from road debris, acid rain, and UV fade. Maintains showroom gloss year-round.',
    roi: '60–70% cheaper than competitor ceramic coatings',
  },
  {
    sector: 'Marine Vessels',
    icon: '⛵',
    tag: 'Marine',
    headline: 'Saltwater, UV and algae resistance for hulls and topsides',
    stats: [
      { label: 'Corrosion Resist', val: 'A+' },
      { label: 'UV Protection', val: '3–4 yr' },
      { label: 'Hydrophobic', val: '115°' },
    ],
    benefit: 'Graphene-ceramic layer repels saltwater, resists oxidation, and reduces hull cleaning frequency by 60%.',
    roi: 'Reduced dock service costs + extended paint lifecycle',
  },
  {
    sector: 'Aviation & Private Jets',
    icon: '✈️',
    tag: 'Aviation',
    headline: 'Chemical + UV resistance for aircraft fuselage and cabin surfaces',
    stats: [
      { label: 'Temp Resist', val: '250°C' },
      { label: 'Chemical Res.', val: 'Jet fuel' },
      { label: 'Hardness', val: '9H+' },
    ],
    benefit: 'Withstands de-icing fluids, jet fuel exposure, and extreme UV at altitude. One application per maintenance cycle.',
    roi: 'Reduces detailing hours + protects fuselage livery',
  },
  {
    sector: 'Industrial Equipment',
    icon: '🏗️',
    tag: 'Fleet & Industrial',
    headline: 'Fleet-scale protection for heavy machinery and commercial vehicles',
    stats: [
      { label: 'Fleet ROI', val: '11.7×' },
      { label: 'Payback', val: '4 mo' },
      { label: 'Durability', val: '3–4 yr' },
    ],
    benefit: 'Per-vehicle cost of ₹5,000 delivers ₹58,800 cumulative savings over 4 years vs traditional care.',
    roi: '100 vehicle fleet → ₹58.8L saved over 4 years',
  },
]

export default function CerApplications() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Use Cases</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>APPLICATION SECTORS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4 high-value surfaces protected by graphene-ceramic nano-coating</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {apps.map((a, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 22, display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 28 }}>{a.icon}</div>
              <div>
                <div style={{ display: 'inline-block', background: C + '22', border: `1px solid ${C}33`, borderRadius: 4, padding: '2px 8px', marginBottom: 4 }}>
                  <span style={{ fontSize: 10, color: C, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>{a.tag}</span>
                </div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0.5 }}>{a.sector}</div>
              </div>
            </div>
            <div style={{ color: '#9ca3af', fontSize: 12, lineHeight: 1.5, fontStyle: 'italic' }}>"{a.headline}"</div>
            <div style={{ display: 'flex', gap: 8 }}>
              {a.stats.map((s, j) => (
                <div key={j} style={{ flex: 1, textAlign: 'center', padding: '8px 4px', background: '#111', borderRadius: 6, border: '1px solid #1a1a1a' }}>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: C }}>{s.val}</div>
                  <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
            <div style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.5 }}>{a.benefit}</div>
            <div style={{ padding: '8px 12px', background: '#0a0f1a', border: '1px solid #1e2a3a', borderRadius: 6 }}>
              <span style={{ color: '#60a5fa', fontSize: 11, fontWeight: 600 }}>💰 {a.roi}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · APPLICATION SECTORS</div>
    </div>
  )
}
