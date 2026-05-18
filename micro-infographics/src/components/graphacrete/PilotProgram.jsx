import React from 'react'

const C = '#d97706'

const steps = [
  { n: '01', title: 'Pilot Quantity Supply',   desc: '100–500L Graphacrete supplied for trial concrete batches at your plant' },
  { n: '02', title: 'Technical Training',      desc: 'On-site training for mixing and application procedures — your team certified' },
  { n: '03', title: 'Testing Support',         desc: 'Guidance on cube preparation and strength testing protocols (NABL labs)' },
  { n: '04', title: 'Performance Monitoring',  desc: 'Weekly check-ins, data collection support, and 7-day / 28-day comparison' },
  { n: '05', title: 'Comprehensive Report',    desc: 'Detailed analysis of performance vs control samples with full ROI projections' },
]

const benefits = [
  { icon: '🛡️', title: 'Zero Risk',          desc: 'Test in real concrete conditions before committing to supply contract' },
  { icon: '📊', title: 'Proven Results',     desc: 'NABL-grade test data confirms strength gain claims on your mix design' },
  { icon: '🤝', title: 'Expert Support',     desc: 'Monoatom engineers on-site throughout the trial period' },
]

export default function GraPilotProgram() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Trial</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>30-DAY PILOT PROGRAM</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Risk-free concrete trial — validate strength gains on your mix design before full deployment</div>
      </div>

      {/* Pricing callout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
        <div style={{ padding: 18, background: '#0d0d0d', border: `1px solid ${C}44`, borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: C }}>From ₹1.2L</div>
          <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', marginTop: 4 }}>Trial Package incl. Support</div>
        </div>
        <div style={{ padding: 18, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#fff' }}>100–500 L</div>
          <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', marginTop: 4 }}>Graphacrete Supplied</div>
        </div>
        <div style={{ padding: 18, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#4ade80' }}>28 Days</div>
          <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', marginTop: 4 }}>To Full Test Results</div>
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

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · PILOT PROGRAM</div>
    </div>
  )
}
