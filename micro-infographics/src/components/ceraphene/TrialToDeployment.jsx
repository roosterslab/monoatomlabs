import React from 'react'

const C = '#64748b'

const stages = [
  {
    step: '01',
    title: 'Single Vehicle Trial',
    duration: '1 day',
    investment: '₹5,000',
    deliverable: 'Full ceramic coat on 1 car — 30-day monitoring period, hardness test, contact angle verification',
    outcome: 'Tangible proof: 9H+ hardness, beading test, gloss comparison',
  },
  {
    step: '02',
    title: 'Studio Validation',
    duration: '2–4 weeks',
    investment: '₹15,000–25,000',
    deliverable: 'Coat 3–5 vehicles across different paint types. Document water contact angle, swirl resistance, customer feedback',
    outcome: 'Performance report with before/after data, customer testimonials',
  },
  {
    step: '03',
    title: 'Small Fleet Rollout',
    duration: '1–2 months',
    investment: '₹25,000–75,000',
    deliverable: 'Fleet of 10–20 vehicles. Track wash frequency reduction, incident damage, fleet manager satisfaction',
    outcome: 'ROI validation: cost savings documented vs. uncoated vehicles',
  },
  {
    step: '04',
    title: 'Full Deployment + Volume Pricing',
    duration: 'Ongoing',
    investment: 'Volume pricing from ₹3,500/unit',
    deliverable: 'Full fleet or studio-scale deployment. Priority support, co-branding, training program access',
    outcome: '₹36,000+/year fleet savings. Studio margin at 40–45%',
  },
]

export default function CerTrialToDeployment() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Journey</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>TRIAL TO DEPLOYMENT</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4-stage journey from single vehicle proof to full fleet or studio deployment</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
        {stages.map((s, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20, display: 'flex', gap: 20 }}>
            {/* Step number + connector */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: C + '22', border: `2px solid ${C}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: C }}>{s.step}</span>
              </div>
              {i < stages.length - 1 && (
                <div style={{ width: 2, flex: 1, background: '#1f1f1f', marginTop: 8 }} />
              )}
            </div>
            {/* Content */}
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

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · TRIAL JOURNEY</div>
    </div>
  )
}
