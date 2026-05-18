import React from 'react'

const C = '#06b6d4'

const apps = [
  {
    name: 'Pipes & Fittings',
    icon: '🔧',
    color: '#0e7490',
    mechanism: '12% price premium',
    gross: '₹12,000/ton',
    additive: '₹6,000/ton',
    net: '₹6,000/ton',
    useCases: ['Municipal water pipes', 'Gas distribution lines', 'Industrial piping', 'Sewage systems'],
    specs: ['+30% pressure rating', '+20% service life', 'Higher warranty periods', 'Premium segment positioning'],
    payback: '2–3 months',
  },
  {
    name: 'Films & Packaging',
    icon: '📦',
    color: '#0891b2',
    mechanism: '15% material saving (downgauging)',
    gross: '₹15,000/ton',
    additive: '₹6,000/ton',
    net: '₹9,000/ton',
    useCases: ['Stretch / pallet wrap films', 'Retail carry bags', 'Agricultural mulch films', 'Greenhouse sheeting'],
    specs: ['+35% tear strength', '15–18% less material', '2.5× puncture resistance', 'Thinner but stronger'],
    payback: '1–2 months',
  },
  {
    name: 'Injection Molding',
    icon: '🏭',
    color: '#0284c7',
    mechanism: '15% premium + 10% material reduction',
    gross: '₹25,000/ton',
    additive: '₹6,000/ton',
    net: '₹19,000/ton',
    useCases: ['Automotive components', 'Consumer appliances', 'Industrial housings', 'Storage containers'],
    specs: ['+32% impact strength', '+28% tensile', '10% material reduction', 'Premium product grade'],
    payback: '< 1 month',
  },
]

export default function PolyApplications() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 900, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Applications</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>THREE APPLICATION TYPES</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Net benefit per ton of polymer produced · additive cost at 0.5% dosage, ₹1,200/kg masterbatch</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 16, marginBottom: 24 }}>
        {apps.map((a, i) => (
          <div key={i} style={{ background: '#111', border: `1px solid ${a.color}44`, borderRadius: 12, padding: 22, display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{ fontSize: 28 }}>{a.icon}</span>
              <div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff' }}>{a.name}</div>
                <div style={{ color: a.color, fontSize: 10, letterSpacing: 1 }}>{a.mechanism}</div>
              </div>
            </div>

            {/* Economics */}
            <div style={{ background: '#0d0d0d', borderRadius: 8, padding: 14, marginBottom: 14 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ color: '#4ade80', fontSize: 12 }}>Gross benefit</span>
                <span style={{ color: '#4ade80', fontSize: 13, fontWeight: 700 }}>{a.gross}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                <span style={{ color: '#ef4444', fontSize: 12 }}>Additive cost</span>
                <span style={{ color: '#ef4444', fontSize: 13, fontWeight: 700 }}>−{a.additive}</span>
              </div>
              <div style={{ height: 1, background: '#1f1f1f', marginBottom: 8 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: C, fontSize: 13, fontWeight: 700 }}>Net profit</span>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: C }}>{a.net}</span>
              </div>
              <div style={{ textAlign: 'right', color: '#475569', fontSize: 10, marginTop: 4 }}>payback: {a.payback}</div>
            </div>

            {/* Use cases */}
            <div style={{ marginBottom: 12 }}>
              <div style={{ color: '#475569', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>Applications</div>
              {a.useCases.map((u, j) => (
                <div key={j} style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
                  <span style={{ color: a.color, fontSize: 10 }}>·</span>
                  <span style={{ color: '#64748b', fontSize: 11 }}>{u}</span>
                </div>
              ))}
            </div>

            {/* Performance specs */}
            <div style={{ marginTop: 'auto' }}>
              <div style={{ color: '#475569', fontSize: 9, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>What Changes</div>
              {a.specs.map((s, j) => (
                <div key={j} style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
                  <span style={{ color: '#22c55e', fontSize: 10, flexShrink: 0 }}>✓</span>
                  <span style={{ color: '#94a3b8', fontSize: 11 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Comparison bar */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 18 }}>
        <div style={{ color: '#64748b', fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 12 }}>Net Benefit Comparison</div>
        {[
          { label: 'Pipes', val: 6000, color: '#0e7490' },
          { label: 'Films', val: 9000, color: '#0891b2' },
          { label: 'Molding', val: 19000, color: '#0284c7' },
        ].map((r, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <div style={{ width: 60, color: '#64748b', fontSize: 11, textAlign: 'right', flexShrink: 0 }}>{r.label}</div>
            <div style={{ flex: 1, height: 28, background: '#0d0d0d', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ width: `${(r.val / 19000) * 100}%`, height: '100%', background: r.color, borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 10 }}>
                <span style={{ color: '#fff', fontSize: 12, fontWeight: 700 }}>₹{r.val.toLocaleString('en-IN')}/ton</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · APPLICATION ANALYSIS</div>
    </div>
  )
}
