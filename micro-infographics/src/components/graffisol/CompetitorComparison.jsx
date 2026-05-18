import React from 'react'

const C = '#f59e0b'

const metrics = [
  { metric: 'Power Output Gain',       gra: '10–12%',     comp: ['2–4%',    '0%',       '0%'],     winner: true },
  { metric: 'Temperature Reduction',   gra: '5–6°C',      comp: ['0°C',     '0°C',      '0°C'],    winner: true },
  { metric: 'Soiling Loss Reduction',  gra: '30–40%',     comp: ['5–10%',   '0%',       '0%'],     winner: true },
  { metric: 'Light Transmission',      gra: '>98%',       comp: ['>98%',    'N/A',      'N/A'],    winner: false },
  { metric: 'Cleaning Reduction',      gra: '60–70%',     comp: ['10–15%',  '0%',       '0%'],     winner: true },
  { metric: 'Durability',              gra: '3–5 years',  comp: ['1–2 yrs', 'Per wash', 'Per wash'],winner: true },
]

const competitors = ['AR Coating', 'Manual Wash', 'No Treatment']

const differentiators = [
  { title: '3× More Benefits',    desc: 'Anti-reflection + thermal cooling + hydrophobic — competitors offer only one' },
  { title: 'Passive System',      desc: '3–5 year coating replaces recurring manual cleaning labor costs entirely' },
  { title: 'Validated in Field',  desc: '26+ installations confirm 10–12% gain vs AR coatings\' 2–4% lab claims' },
]

export default function SolCompetitorComparison() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Competitive</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>COMPETITOR COMPARISON</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Graffisol vs AR coating, manual cleaning, and no treatment — 6-metric comparison</div>
      </div>

      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.2fr 1fr 1fr 1fr', background: '#111', padding: '12px 16px', gap: 8 }}>
          <div style={{ color: '#444', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Metric</div>
          <div style={{ color: C, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>GRAFFISOL</div>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {differentiators.map((d, i) => (
          <div key={i} style={{ padding: 16, background: '#0d0d0d', border: `1px solid ${C}33`, borderRadius: 10 }}>
            <div style={{ color: C, fontWeight: 700, fontSize: 13, marginBottom: 6 }}>✓ {d.title}</div>
            <div style={{ color: '#6b7280', fontSize: 12 }}>{d.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · COMPETITIVE ANALYSIS</div>
    </div>
  )
}
