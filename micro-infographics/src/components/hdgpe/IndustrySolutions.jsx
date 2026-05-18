import React from 'react'

const C = '#06b6d4'

const industries = [
  {
    name: 'HDPE Pipe Manufacturing',
    icon: '🔧',
    desc: 'Enhanced pipes with higher pressure ratings, extended warranty, and premium market positioning.',
    useCases: ['Water Supply Pipes', 'Gas Distribution', 'Industrial Pipes'],
    metrics: [
      { label: 'Strength', val: '+30%' },
      { label: 'Lifespan', val: '+20%' },
      { label: 'Value Add/ton', val: '₹1,200' },
      { label: 'Quality Rate', val: '98%' },
    ],
    keyBenefit: 'Higher pressure rating enables premium product lines. 20-year warranty vs 15-year standard',
  },
  {
    name: 'Films & Packaging',
    icon: '📦',
    desc: 'Stronger, thinner films — downgauging 15–20% reduces material cost while improving performance.',
    useCases: ['Stretch Films', 'Shopping Bags', 'Agricultural Films'],
    metrics: [
      { label: 'Tear Strength', val: '+35%' },
      { label: 'Material Use', val: '−18%' },
      { label: 'Savings/ton', val: '₹800' },
      { label: 'Puncture Resist', val: '2.5×' },
    ],
    keyBenefit: '15–20% material reduction while maintaining load capacity — direct cost saving + sustainability win',
  },
  {
    name: 'Injection Molded Parts',
    icon: '⚙️',
    desc: 'Enhanced mechanical properties for automotive, consumer electronics, and industrial components.',
    useCases: ['Automotive Parts', 'Consumer Goods', 'Industrial Components'],
    metrics: [
      { label: 'Impact Strength', val: '+32%' },
      { label: 'Tensile', val: '+28%' },
      { label: 'Weight', val: '−12%' },
      { label: 'Premium/ton', val: '₹1,500' },
    ],
    keyBenefit: '32% impact strength gain enables lightweight component redesign. Premium ₹1,500/ton over standard grade',
  },
]

export default function PolyIndustrySolutions() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Industries</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>INDUSTRY SOLUTIONS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>3 polymer segments — use cases, metrics, and value per application</div>
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
                <div style={{ padding: '8px 12px', background: '#001a1f', border: `1px solid ${C}33`, borderRadius: 6 }}>
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

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · INDUSTRY SOLUTIONS</div>
    </div>
  )
}
