import React from 'react'

const C = '#f59e0b'

const steps = [
  { n: '01', title: 'Pilot Array Selection',   desc: 'Select representative panels (min 10 kW) alongside identical uncoated control panels' },
  { n: '02', title: 'Pre-Application Baseline', desc: '7-day monitoring to establish accurate power output baseline before coating' },
  { n: '03', title: 'Professional Application', desc: 'Monoatom team applies Graffisol coating on-site with controlled conditions' },
  { n: '04', title: 'Performance Monitoring',  desc: 'Daily power output tracking vs control panels. Temperature and soiling logged.' },
  { n: '05', title: 'Comprehensive Report',    desc: 'Detailed performance analysis with verified ROI projections and re-application plan' },
]

const benefits = [
  { icon: '🌞', title: 'Real-World Validation', desc: 'Test in your actual operating environment — same weather, dust, temperature' },
  { icon: '📈', title: 'Compare Live Data',     desc: 'Daily data: coated vs uncoated — gain visible within 2 weeks' },
  { icon: '💰', title: 'Verified ROI',          desc: 'Confirmed numbers for investor reports and O&M budget justification' },
]

export default function SolPilotProgram() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Trial</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>30-DAY PILOT PROGRAM</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Risk-free solar trial — validate output gain on your installation before full fleet coating</div>
      </div>

      {/* Pricing callout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
        <div style={{ padding: 18, background: '#0d0d0d', border: `1px solid ${C}44`, borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: C }}>From ₹50,000</div>
          <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', marginTop: 4 }}>Trial Package incl. Application</div>
        </div>
        <div style={{ padding: 18, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#fff' }}>Min 10 kW</div>
          <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', marginTop: 4 }}>Pilot Array Size</div>
        </div>
        <div style={{ padding: 18, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#4ade80' }}>37 Days</div>
          <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', marginTop: 4 }}>Baseline + Trial Period</div>
        </div>
      </div>

      {/* Steps */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 16 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>Trial Process · 5 Steps</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', background: i === steps.length - 1 ? C : '#1a1a1a', border: `1px solid ${i === steps.length - 1 ? C : '#333'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 12, fontWeight: 700, color: i === steps.length - 1 ? '#000' : '#ccc' }}>{s.n}</span>
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

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · PILOT PROGRAM</div>
    </div>
  )
}
