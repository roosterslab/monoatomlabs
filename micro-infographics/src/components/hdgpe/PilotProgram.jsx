import React from 'react'

const C = '#06b6d4'

const steps = [
  { n: '01', title: 'Pilot Quantity Supply',    desc: '50–100 kg HD-G-PE masterbatch supplied for production trials at your facility' },
  { n: '02', title: 'Technical Consultation',   desc: 'Dosage optimization and process integration guidance by Monoatom engineers' },
  { n: '03', title: 'Sample Production',        desc: 'Create test batches at 0.5%, 1.0%, and 1.5% dosage for comparison' },
  { n: '04', title: 'Performance Testing',      desc: 'Mechanical testing (ASTM D638, D790, D256) vs control samples — verified data' },
  { n: '05', title: 'Comprehensive Analysis',   desc: 'Detailed report: test results, optimal dosage recommendation, ROI projections' },
]

const benefits = [
  { icon: '🔬', title: 'Risk-Free Testing',    desc: 'Validate in your production process with your polymer grade and equipment' },
  { icon: '📋', title: 'Performance Proof',    desc: 'ASTM test data confirms strength and elongation gains on your product' },
  { icon: '💹', title: 'Cost Validation',      desc: 'Confirm value proposition before committing to full production volumes' },
]

export default function PolyPilotProgram() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Trial</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>30-DAY PILOT PROGRAM</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Risk-free production trial — validate performance gains on your polymer type before full adoption</div>
      </div>

      {/* Pricing callout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 24 }}>
        <div style={{ padding: 18, background: '#0d0d0d', border: `1px solid ${C}44`, borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: C }}>From ₹60,000</div>
          <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', marginTop: 4 }}>Trial incl. Technical Support</div>
        </div>
        <div style={{ padding: 18, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#fff' }}>50–100 kg</div>
          <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', marginTop: 4 }}>Masterbatch Supplied</div>
        </div>
        <div style={{ padding: 18, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, textAlign: 'center' }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#4ade80' }}>3 Dosages</div>
          <div style={{ color: '#555', fontSize: 11, textTransform: 'uppercase', marginTop: 4 }}>Tested & Compared</div>
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

      <div style={{ marginTop: 16, padding: '8px 14px', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 8 }}>
        <span style={{ color: '#555', fontSize: 11 }}>* Customized for your polymer type and application. Volume pricing available.</span>
      </div>

      <div style={{ marginTop: 12, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · PILOT PROGRAM</div>
    </div>
  )
}
