import React from 'react'

const C = '#d97706'

const metrics = [
  { metric: 'Compressive Strength Gain', gra: '40–50%',       comp: ['5–15%',   '8–15%',  '10–25%'],  winner: true },
  { metric: 'Cement Saving',             gra: '15–20%',       comp: ['0%',       '0%',     '3–5%'],    winner: true },
  { metric: 'Water Resistance Gain',     gra: '30–45%',       comp: ['<10%',     '10–20%', '20–30%'],  winner: true },
  { metric: 'Dosage Required',           gra: '0.05–0.10%',   comp: ['0.2–1.0%', '0.2–1%','0.2–0.5%'],winner: true },
  { metric: 'Micro-Crack Control',       gra: 'Excellent',    comp: ['Low',      'Medium', 'Medium'],  winner: true },
  { metric: 'Flexural Strength Gain',    gra: '35–40%',       comp: ['2–8%',     '5–10%',  '8–15%'],   winner: true },
]

const competitors = ['UltraTech Admix.', 'Sika Admix.', 'PureGraph']

const differentiators = [
  { title: 'Highest Performance', desc: 'Best strength gain (40–50%) at lowest dosage (0.05–0.10%) in the industry' },
  { title: 'Complete Solution',   desc: 'Only product offering strength + durability + waterproofing + cement reduction' },
  { title: 'Best Value',          desc: 'Superior cost-to-performance ratio — lower dosage means lower per-m³ additive cost' },
]

export default function GraCompetitorComparison() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Competitive</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>COMPETITOR COMPARISON</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Graphacrete vs UltraTech Admixture, Sika, PureGraph — head-to-head on 6 metrics</div>
      </div>

      {/* Table */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 1fr 1fr', background: '#111', padding: '12px 16px', gap: 8 }}>
          <div style={{ color: '#444', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Metric</div>
          <div style={{ color: C, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>GRAPHACRETE</div>
          {competitors.map((c, i) => (
            <div key={i} style={{ color: '#555', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>{c}</div>
          ))}
        </div>
        {metrics.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 1fr 1fr', padding: '12px 16px', gap: 8, borderTop: '1px solid #141414', alignItems: 'center' }}>
            <span style={{ color: '#888', fontSize: 12 }}>{row.metric}</span>
            <div style={{ background: C + '22', border: `1px solid ${C}44`, borderRadius: 6, padding: '4px 8px', display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff' }}>{row.gra}</span>
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

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · COMPETITIVE ANALYSIS</div>
    </div>
  )
}
