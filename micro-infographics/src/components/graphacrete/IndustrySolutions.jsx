import React from 'react'

const C = '#d97706'

const industries = [
  {
    name: 'Infrastructure',
    icon: '🌉',
    desc: 'Roads, bridges, highways, and large-scale civil projects demanding superior strength and durability.',
    useCases: ['Highway Construction', 'Bridge Decks', 'Tunnels'],
    metrics: [
      { label: 'Strength Gain', val: '+50%' },
      { label: 'Cost Savings', val: '15–20%' },
      { label: 'Service Life', val: '25+ yrs' },
      { label: 'Maintenance', val: '−20%' },
    ],
    keyBenefit: 'Major highway project: M50 strength from M30 mix — saved ₹2.5 Cr in a single project',
  },
  {
    name: 'High-Rise Buildings',
    icon: '🏙️',
    desc: 'Premium residential and commercial towers requiring reduced structural weight with superior strength.',
    useCases: ['Structural Columns', 'Slabs & Beams', 'Foundation'],
    metrics: [
      { label: 'Strength Gain', val: '+45%' },
      { label: 'Weight Reduction', val: '−12%' },
      { label: 'Floor Space', val: '+30%' },
      { label: 'Savings/m³', val: '₹500' },
    ],
    keyBenefit: 'Higher strength enables slimmer columns — 30% more usable floor space in metro towers',
  },
  {
    name: 'Precast Manufacturing',
    icon: '🏗️',
    desc: 'Precast concrete products requiring consistent quality, reduced curing time, and cost optimization.',
    useCases: ['Structural Elements', 'Architectural Panels', 'Specialty Components'],
    metrics: [
      { label: 'Strength', val: '+40%' },
      { label: 'Cement Cut', val: '15%' },
      { label: 'Margin Gain', val: '+18%' },
      { label: 'Reject Rate', val: '−30%' },
    ],
    keyBenefit: '15% cement reduction improves margins. Higher strength enables thinner panels — less material, less weight',
  },
]

export default function GraIndustrySolutions() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Industries</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>INDUSTRY SOLUTIONS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>3 construction segments — use cases, metrics, and real project outcomes</div>
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
                <div style={{ padding: '8px 12px', background: '#150d00', border: `1px solid ${C}33`, borderRadius: 6 }}>
                  <span style={{ color: C, fontSize: 11, fontWeight: 600 }}>💡 {ind.keyBenefit}</span>
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

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · INDUSTRY SOLUTIONS</div>
    </div>
  )
}
