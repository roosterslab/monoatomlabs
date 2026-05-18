import React from 'react'

const C = '#f59e0b'

const stages = [
  {
    step: '01',
    title: 'Small Array Trial',
    duration: '4–6 weeks',
    investment: '₹18,000–90,000',
    deliverable: 'Coat 10–50kW array section. 7-day pre-coat baseline energy logging. Professional application. 30-day post-coat performance tracking',
    outcome: '10–12% output gain confirmed vs uncoated control. Soiling loss reduction measured',
  },
  {
    step: '02',
    title: 'Pilot Block Deployment',
    duration: '2–3 months',
    investment: '₹1.8–9 Lakh',
    deliverable: 'Full 100–500kW block. Smart meter comparison between coated/uncoated strings. Temperature sensor logging. SCADA integration for live comparison',
    outcome: 'Revenue gain at block scale documented. ₹1,200/kW/year benefit validated with inverter logs',
  },
  {
    step: '03',
    title: 'Phased Plant Rollout',
    duration: '3–6 months',
    investment: 'Per-MW supply pricing',
    deliverable: 'Rolling coating by plant section. Minimal downtime per string (4–6h). Ongoing monitoring dashboard. Annual recoating schedule set',
    outcome: 'Plant-level 10–12% output improvement. 60–70% cleaning reduction. Water savings documented',
  },
  {
    step: '04',
    title: 'Full Plant + Multi-Site Contract',
    duration: 'Ongoing O&M',
    investment: 'Volume contract pricing',
    deliverable: 'All plant panels coated. Dedicated O&M coating team. CO₂ offset documentation for ESG reports. 3–5 year warranty plan',
    outcome: 'Full ROI: ₹1,200–1,500/kW/yr additional revenue. Carbon credits + clean energy certification',
  },
]

export default function SolTrialToDeployment() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Journey</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>TRIAL TO DEPLOYMENT</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4-stage journey from small array proof to full-plant and multi-site O&M contract</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {stages.map((s, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20, display: 'flex', gap: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: C + '22', border: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: C }}>{s.step}</span>
              </div>
              {i < stages.length - 1 && (
                <div style={{ width: 2, flex: 1, background: '#1f1f1f', marginTop: 8 }} />
              )}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff' }}>{s.title}</div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: C }}>{s.investment}</div>
                  <div style={{ color: '#475569', fontSize: 11 }}>{s.duration}</div>
                </div>
              </div>
              <div style={{ color: '#888', fontSize: 12, lineHeight: 1.6, marginBottom: 8 }}>{s.deliverable}</div>
              <div style={{ background: '#041a10', border: '1px solid #14451a', borderRadius: 6, padding: '6px 12px' }}>
                <span style={{ color: '#4ade80', fontSize: 11 }}>✓ {s.outcome}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · TRIAL JOURNEY</div>
    </div>
  )
}
