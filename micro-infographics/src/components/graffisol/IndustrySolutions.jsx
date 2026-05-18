import React from 'react'

const C = '#f59e0b'

const industries = [
  {
    name: 'Utility-Scale Solar Parks',
    icon: '🌞',
    desc: 'Large solar farms where marginal efficiency gains translate to massive revenue increases.',
    useCases: ['Ground-Mounted Arrays', 'Tracker Systems', 'Desert Installations'],
    metrics: [
      { label: 'Avg Output Gain', val: '+11%' },
      { label: 'Annual/kW', val: '₹1,200' },
      { label: 'Payback', val: '18 mo' },
      { label: 'Cleaning', val: '−40%' },
    ],
    keyBenefit: '50 MW solar park: 11.2% output gain — ROI achieved in 17 months',
  },
  {
    name: 'Commercial Rooftop',
    icon: '🏢',
    desc: 'C&I rooftop solar maximizing limited space against high commercial electricity tariffs.',
    useCases: ['Factory Roofs', 'Office Buildings', 'Warehouses'],
    metrics: [
      { label: 'Energy Gain', val: '+10%' },
      { label: 'Annual/kW', val: '₹1,500' },
      { label: 'Payback', val: '15 mo' },
      { label: 'Less Cleaning', val: '70%' },
    ],
    keyBenefit: 'Higher tariff rates = faster ROI. 300kW commercial installation: ₹3.1L annual revenue gain',
  },
  {
    name: 'Floating Solar',
    icon: '💧',
    desc: 'Water-based installations with unique humidity, algae, and soiling challenges.',
    useCases: ['Reservoir Floating', 'Lake Installations', 'Coastal Floating'],
    metrics: [
      { label: 'Output', val: '+12%' },
      { label: 'Cooling', val: '−6°C' },
      { label: 'Water Beading', val: '90%' },
      { label: 'Durability', val: '4 yrs' },
    ],
    keyBenefit: 'Water proximity + Graffisol cooling effect combined: up to 13.5% total output gain',
  },
  {
    name: 'Agricultural Solar (Agri-PV)',
    icon: '🌾',
    desc: 'Farm-based and irrigation solar with high dust, crop debris, and humidity exposure.',
    useCases: ['Farm Solar Pumps', 'Agri-PV Systems', 'Remote Installations'],
    metrics: [
      { label: 'Output', val: '+10%' },
      { label: 'Dust Protect', val: 'A+' },
      { label: 'Wash Freq', val: '−50%' },
      { label: 'Durability', val: '3+ yrs' },
    ],
    keyBenefit: 'Dust is critical in farm environments. Self-cleaning hydrophobic surface dramatically cuts O&M costs',
  },
]

export default function SolIndustrySolutions() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Industries</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>INDUSTRY SOLUTIONS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4 solar segments — use cases, metrics, and real deployment outcomes</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        {industries.map((ind, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
              <div style={{ fontSize: 26 }}>{ind.icon}</div>
              <div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 17, fontWeight: 700, color: '#fff' }}>{ind.name}</div>
                <div style={{ color: '#6b7280', fontSize: 11, marginTop: 2, lineHeight: 1.4 }}>{ind.desc}</div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
              {ind.useCases.map((uc, j) => (
                <div key={j} style={{ padding: '2px 8px', background: '#111', border: '1px solid #1a1a1a', borderRadius: 4 }}>
                  <span style={{ fontSize: 10, color: '#777' }}>{uc}</span>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
              {ind.metrics.map((m, j) => (
                <div key={j} style={{ textAlign: 'center', padding: '8px 6px', background: '#111', borderRadius: 6, border: '1px solid #1a1a1a' }}>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: C }}>{m.val}</div>
                  <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 1 }}>{m.label}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: '7px 10px', background: '#160f00', border: `1px solid ${C}33`, borderRadius: 6 }}>
              <span style={{ color: C, fontSize: 10, fontWeight: 600 }}>💡 {ind.keyBenefit}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · INDUSTRY SOLUTIONS</div>
    </div>
  )
}
