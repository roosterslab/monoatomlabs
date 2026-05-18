import React from 'react'

const C = '#64748b'

const metrics = [
  { metric: 'Price Per Application',    cer: '₹5,000',     comp: ['₹12,000–15,000', '₹15,000–20,000', '₹8,000–12,000'], winner: true },
  { metric: 'Pencil Hardness',          cer: '9H+',         comp: ['9H', '9H+', '8–9H'], winner: true },
  { metric: 'Contact Angle (Hydro.)',   cer: '115°',        comp: ['110°', '115°', '105°'], winner: true },
  { metric: 'Durability',               cer: '3–4+ years',  comp: ['2–3 years', '3–4 years', '2–3 years'], winner: true },
  { metric: 'Graphene Enhanced',        cer: '✓ Yes',       comp: ['✗ No', '✗ No', '✗ No'], winner: true },
  { metric: 'UV Stability',             cer: '>99%',        comp: ['~95%', '>99%', '~93%'], winner: true },
]

const competitors = ['IGL Kenzo', 'Ceramic Pro', 'CarPro CQuartz']

const differentiators = [
  { title: '60–70% Lower Cost',     desc: 'Same 9H+ hardness at ₹5k vs ₹12–20k competitors' },
  { title: 'Only Graphene Ceramic', desc: 'GNP nano-mesh prevents brittle cracking — competitors use pure SiO₂' },
  { title: 'Longer Lifespan',       desc: '3–4+ years vs 2–3 year industry average at lower tier prices' },
]

export default function CerCompetitorComparison() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Competitive</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>COMPETITOR COMPARISON</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Ceraphene vs IGL Kenzo, Ceramic Pro, CarPro CQuartz — head-to-head</div>
      </div>

      {/* Table */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
        {/* Header */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 1fr 1fr', background: '#111', padding: '12px 16px', gap: 8 }}>
          <div style={{ color: '#444', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Metric</div>
          <div style={{ color: C, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>CERAPHENE</div>
          {competitors.map((c, i) => (
            <div key={i} style={{ color: '#555', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>{c}</div>
          ))}
        </div>
        {/* Rows */}
        {metrics.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 1fr 1fr', padding: '12px 16px', gap: 8, borderTop: '1px solid #141414', alignItems: 'center' }}>
            <span style={{ color: '#888', fontSize: 12 }}>{row.metric}</span>
            <div style={{ background: C + '22', border: `1px solid ${C}44`, borderRadius: 6, padding: '4px 8px', display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff' }}>{row.cer}</span>
            </div>
            {row.comp.map((v, j) => (
              <span key={j} style={{ color: '#555', fontSize: 12, fontFamily: 'Rajdhani, sans-serif' }}>{v}</span>
            ))}
          </div>
        ))}
      </div>

      {/* Differentiators */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {differentiators.map((d, i) => (
          <div key={i} style={{ padding: 16, background: '#0d0d0d', border: `1px solid ${C}33`, borderRadius: 10 }}>
            <div style={{ color: C, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>✓ {d.title}</div>
            <div style={{ color: '#6b7280', fontSize: 12 }}>{d.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · COMPETITIVE ANALYSIS</div>
    </div>
  )
}
