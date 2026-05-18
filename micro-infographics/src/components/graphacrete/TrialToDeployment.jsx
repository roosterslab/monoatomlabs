import React from 'react'

const C = '#d97706'

const stages = [
  {
    step: '01',
    title: 'Lab Trial',
    duration: '2–3 weeks',
    investment: '₹25,000',
    deliverable: 'Controlled batch of 50–100L Graphacrete supplied. Mix design integration, workability test, NABL cube testing at 7d and 28d',
    outcome: '+40–50% compressive strength confirmed. Independent test report issued',
  },
  {
    step: '02',
    title: 'On-Site Field Trial',
    duration: '4–6 weeks',
    investment: '₹1–2 Lakh',
    deliverable: 'Pour 200–500 m³ on real project section. Structural engineer supervision. Core samples at 28 days. Water permeability test',
    outcome: 'Field data vs control section. Cement savings quantified. Structural approval path mapped',
  },
  {
    step: '03',
    title: 'Scaled Production Trial',
    duration: '2–3 months',
    investment: '₹5–10 Lakh',
    deliverable: '1,000–5,000 m³ integration with project batching plant. Full SOP for site team. Continuous quality monitoring. NABL-certified batch testing',
    outcome: 'Cost savings per m³ locked in. Structural consultant sign-off. Integration documented',
  },
  {
    step: '04',
    title: 'Full Production Deployment',
    duration: 'Project lifecycle',
    investment: 'Supply contract pricing',
    deliverable: 'Dedicated supply chain for project volume. Engineering support. Monthly performance reports. Carbon credit documentation',
    outcome: '15–20% cement reduction. 40–50% strength gain locked in at scale. Net Zero 2070 contribution documented',
  },
]

export default function GraTrialToDeployment() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Journey</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>TRIAL TO DEPLOYMENT</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4-stage journey from controlled lab trial to full-project production deployment</div>
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

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · TRIAL JOURNEY</div>
    </div>
  )
}
