import React from 'react'

const C = '#64748b'

const steps = [
  { n: '01', title: 'Fleet Trial Package',     desc: 'Coat 3–5 vehicles from your fleet for a 30-day controlled trial' },
  { n: '02', title: 'Professional Application', desc: 'Certified detailer applies coating using proper technique and documentation' },
  { n: '03', title: 'Documentation',            desc: 'Before/after photos, water-beading tests, surface hardness readings' },
  { n: '04', title: 'Usage Tracking',           desc: 'Monitor wash frequency, surface appearance, and maintenance logs over 30 days' },
  { n: '05', title: 'Performance Report',       desc: 'Detailed assessment comparing coated vs uncoated vehicles — full ROI projection' },
]

const benefits = [
  { icon: '🚗', title: 'Fleet Validation',  desc: 'Test on your actual vehicles in real conditions' },
  { icon: '👁️', title: 'See the Difference', desc: 'Side-by-side comparison: coated vs uncoated' },
  { icon: '✅', title: 'Verify Claims',      desc: 'Confirm durability and performance before full rollout' },
]

export default function CerPilotProgram() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Trial</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>30-DAY PILOT PROGRAM</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Risk-free fleet trial — validate performance before committing to full deployment</div>
      </div>

      {/* Pricing callout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
        <div style={{ padding: 18, background: '#0d0d0d', border: `1px solid ${C}44`, borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 30, fontWeight: 700, color: C }}>From ₹15,000</div>
          <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', marginTop: 4 }}>3-Vehicle Trial Package</div>
        </div>
        <div style={{ padding: 18, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 30, fontWeight: 700, color: '#fff' }}>30 Days</div>
          <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', marginTop: 4 }}>Monitoring Period</div>
        </div>
        <div style={{ padding: 18, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 30, fontWeight: 700, color: '#4ade80' }}>3–5</div>
          <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', marginTop: 4 }}>Vehicles in Trial</div>
        </div>
      </div>

      {/* Steps */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 16 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>Trial Process · 5 Steps</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: i === steps.length - 1 ? C : '#1a1a1a', border: `1px solid ${i === steps.length - 1 ? C : '#333'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 12, fontWeight: 700, color: '#ccc' }}>{s.n}</span>
              </div>
              <div style={{ paddingTop: 4 }}>
                <div style={{ color: '#ccc', fontWeight: 600, fontSize: 13, marginBottom: 2 }}>{s.title}</div>
                <div style={{ color: '#6b7280', fontSize: 12 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {benefits.map((b, i) => (
          <div key={i} style={{ padding: 16, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 10, textAlign: 'center' }}>
            <div style={{ fontSize: 24, marginBottom: 8 }}>{b.icon}</div>
            <div style={{ color: '#ccc', fontWeight: 600, fontSize: 13, marginBottom: 4 }}>{b.title}</div>
            <div style={{ color: '#6b7280', fontSize: 12 }}>{b.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, padding: '8px 14px', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 8 }}>
        <span style={{ color: '#555', fontSize: 11 }}>* Fleet discounts available for larger trials. Contact for volume pricing.</span>
      </div>

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · PILOT PROGRAM</div>
    </div>
  )
}
