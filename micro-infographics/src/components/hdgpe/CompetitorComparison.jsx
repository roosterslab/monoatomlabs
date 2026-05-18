import React from 'react'

const C = '#06b6d4'

const metrics = [
  { metric: 'Tensile Strength Gain',    hdg: '+30%',        comp: ['+0%',      '+15–25%',  '+5–10%'],  winner: true },
  { metric: 'Elongation at Break',      hdg: '20× baseline',comp: ['Baseline', '−30%',     '+10%'],    winner: true },
  { metric: 'Impact Strength',          hdg: '+32%',        comp: ['+0%',      '+20%',     '+8%'],     winner: true },
  { metric: 'Dosage Required',          hdg: '0.5–2%',      comp: ['0%',       '10–30%',   '5–15%'],   winner: true },
  { metric: 'Processing Change Needed', hdg: 'None',        comp: ['None',     'Major',    'Minor'],   winner: true },
  { metric: 'UV Stability Gain',        hdg: '+20% life',   comp: ['Baseline', 'Baseline', '+5%'],     winner: true },
]

const competitors = ['Standard HDPE', 'Glass Fiber HDPE', 'Carbon Black HDPE']

const differentiators = [
  { title: 'Zero Process Change',  desc: 'Drop-in masterbatch — no retooling, no new equipment, no workflow disruption' },
  { title: 'Flexibility + Strength', desc: 'GF-HDPE gains strength but loses ductility. HD-G-PE gains both — unique combination' },
  { title: 'Lowest Effective Dose', desc: '0.5–2% vs 10–30% glass fiber. Lower additive volume = less cost, less processing load' },
]

export default function PolyCompetitorComparison() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Competitive</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>COMPETITOR COMPARISON</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>HD-G-PE vs standard HDPE, glass fiber HDPE, and carbon black HDPE — 6-metric comparison</div>
      </div>

      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, overflow: 'hidden', marginBottom: 16 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1.3fr 1fr 1fr 1fr', background: '#111', padding: '12px 16px', gap: 8 }}>
          <div style={{ color: '#444', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Metric</div>
          <div style={{ color: C, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1 }}>HD-G-PE</div>
          {competitors.map((c, i) => (
            <div key={i} style={{ color: '#555', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>{c}</div>
          ))}
        </div>
        {metrics.map((row, i) => (
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1.3fr 1fr 1fr 1fr', padding: '12px 16px', gap: 8, borderTop: '1px solid #141414', alignItems: 'center' }}>
            <span style={{ color: '#888', fontSize: 12 }}>{row.metric}</span>
            <div style={{ background: C + '22', border: `1px solid ${C}44`, borderRadius: 6, padding: '4px 8px', display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff' }}>{row.hdg}</span>
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

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · COMPETITIVE ANALYSIS</div>
    </div>
  )
}
