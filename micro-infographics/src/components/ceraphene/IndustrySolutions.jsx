import React from 'react'

const C = '#64748b'

const industries = [
  {
    name: 'Luxury Car Owners',
    icon: '🏎️',
    desc: 'Premium protection for high-value vehicles at a fraction of competitor costs.',
    useCases: ['New Car Protection', 'Show Cars', 'Daily Drivers'],
    metrics: [
      { label: 'Saved vs Competitor', val: '₹10,000' },
      { label: 'Hardness', val: '9H+' },
      { label: 'Duration', val: '3–4 yrs' },
      { label: 'Satisfaction', val: '95%' },
    ],
    keyBenefit: '60–70% cheaper than ₹15k+ premium coatings — same performance',
  },
  {
    name: 'Fleet Operators',
    icon: '🚌',
    desc: 'Commercial fleets reducing maintenance costs and improving vehicle appearance.',
    useCases: ['Taxi Fleets', 'Corporate Fleets', 'Rental Cars'],
    metrics: [
      { label: 'Saved/4yr', val: '₹36,000' },
      { label: 'Washing Reduction', val: '−60%' },
      { label: 'Resale Value', val: '+15%' },
      { label: 'Fleet Scale', val: '100+' },
    ],
    keyBenefit: '100-vehicle fleet saves ₹36L over 4 years — fastest payback in the industry',
  },
  {
    name: 'Detailing Studios',
    icon: '✨',
    desc: 'Professional detailers offering premium services with better profit margins.',
    useCases: ['Premium Packages', 'Fleet Contracts', 'Specialty Services'],
    metrics: [
      { label: 'Profit Margins', val: '45%' },
      { label: 'Vehicles/Year', val: '200+' },
      { label: 'Customer Rating', val: '4.8/5' },
      { label: 'Retention Rate', val: '80%' },
    ],
    keyBenefit: '40–50% margins vs competitor products. Re-application every 3–4 years ensures repeat revenue',
  },
]

export default function CerIndustrySolutions() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Industries</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>INDUSTRY SOLUTIONS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>3 customer segments — use cases, metrics, and key value propositions</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {industries.map((ind, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 22 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 16, alignItems: 'start' }}>
              <div style={{ fontSize: 32 }}>{ind.icon}</div>
              <div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{ind.name}</div>
                <div style={{ color: '#6b7280', fontSize: 12, marginBottom: 10 }}>{ind.desc}</div>
                <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 10 }}>
                  {ind.useCases.map((uc, j) => (
                    <div key={j} style={{ padding: '3px 10px', background: '#111', border: '1px solid #1a1a1a', borderRadius: 4 }}>
                      <span style={{ fontSize: 11, color: '#888' }}>{uc}</span>
                    </div>
                  ))}
                </div>
                <div style={{ padding: '8px 12px', background: '#0a0f1a', border: '1px solid #1e2a3a', borderRadius: 6 }}>
                  <span style={{ color: '#60a5fa', fontSize: 11, fontWeight: 600 }}>💡 {ind.keyBenefit}</span>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, minWidth: 200 }}>
                {ind.metrics.map((m, j) => (
                  <div key={j} style={{ textAlign: 'center', padding: '10px 8px', background: '#111', borderRadius: 8, border: '1px solid #1a1a1a' }}>
                    <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: C }}>{m.val}</div>
                    <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 }}>{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · INDUSTRY SOLUTIONS</div>
    </div>
  )
}
