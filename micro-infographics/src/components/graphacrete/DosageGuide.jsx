import React from 'react'

const C = '#d97706'

const grades = [
  { grade: 'M20',  target: '20 MPa',  dose: '50 mL',  uplift: '+18%', saving: '12%' },
  { grade: 'M30',  target: '30 MPa',  dose: '75 mL',  uplift: '+22%', saving: '14%' },
  { grade: 'M40',  target: '40 MPa',  dose: '100 mL', uplift: '+26%', saving: '15%' },
  { grade: 'M50',  target: '50 MPa',  dose: '125 mL', uplift: '+30%', saving: '16%' },
  { grade: 'M60+', target: '60+ MPa', dose: '150 mL', uplift: '+35%', saving: '18%' },
]

const steps = [
  { n: 1, title: 'Pre-dilute', detail: 'Add GNP dose to 2L mixing water, stir 2 min' },
  { n: 2, title: 'Add to batch', detail: 'Pour diluted GNP into drum with 50% of mixing water' },
  { n: 3, title: 'Charge cement', detail: 'Add cement and aggregates, mix 3 min standard' },
  { n: 4, title: 'Final mix', detail: 'Add remaining water, mix 2 min. Check slump/flow.' },
]

const checks = [
  { label: 'Slump Test', std: 'ASTM C143', desc: 'Within 15mm of reference mix' },
  { label: 'Cube Strength', std: '7-Day Target', desc: '65% of 28-day spec minimum' },
  { label: 'Flow Table', std: 'EN 12350-5', desc: '10% of reference mix flow' },
  { label: 'Visual Check', std: 'Field QC', desc: 'Uniform grey, no GNP clumps visible' },
]

export default function GraDosageGuide() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 900, margin: '0 auto' }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>MONOATOM LABS · GRAPHACRETE</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 48, fontWeight: 700, color: '#fff', letterSpacing: 2, lineHeight: 1 }}>DOSAGE GUIDE</div>
        <div style={{ color: '#6b7280', fontSize: 13, marginTop: 8 }}>Graphene Concrete Additive · Grade-Optimised Dosage and Mixing</div>
      </div>

      {/* Section 1 — Dosage Table */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: '#6b7280', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Recommended Dosage by Concrete Grade</div>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: C }}>
              {['Grade', 'Target Strength', 'GNP Dose (mL/100kg cement)', 'Strength Uplift', 'Cement Saving'].map((h, i) => (
                <th key={i} style={{
                  padding: '10px 14px', textAlign: i === 0 ? 'left' : 'center',
                  color: '#000', fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase',
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {grades.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? '#111' : '#0d0d0d' }}>
                <td style={{ padding: '11px 14px', fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: '#fff' }}>{row.grade}</td>
                <td style={{ padding: '11px 14px', textAlign: 'center', color: '#9ca3af', fontSize: 13 }}>{row.target}</td>
                <td style={{ padding: '11px 14px', textAlign: 'center' }}>
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: C }}>{row.dose}</span>
                </td>
                <td style={{ padding: '11px 14px', textAlign: 'center', color: '#4ade80', fontSize: 13, fontWeight: 700 }}>{row.uplift}</td>
                <td style={{ padding: '11px 14px', textAlign: 'center', color: '#60a5fa', fontSize: 13, fontWeight: 600 }}>{row.saving}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 2 — Mixing Protocol */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: '#6b7280', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 24 }}>Mixing Protocol</div>
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 0 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div style={{
                  position: 'absolute', top: 20, left: '50%', width: '100%', height: 2,
                  background: '#1f1f1f', zIndex: 0,
                }} />
              )}
              {/* Circle */}
              <div style={{
                width: 40, height: 40, borderRadius: '50%', background: C,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: '#000',
                position: 'relative', zIndex: 1, flexShrink: 0,
              }}>{step.n}</div>
              {/* Text */}
              <div style={{ textAlign: 'center', marginTop: 12, padding: '0 8px' }}>
                <div style={{ color: '#fff', fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{step.title}</div>
                <div style={{ color: '#6b7280', fontSize: 11, lineHeight: 1.5 }}>{step.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — Quality Checks */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: '#6b7280', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Quality Checks</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
          {checks.map((chk, i) => (
            <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 8, padding: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                <div style={{ color: '#fff', fontSize: 13, fontWeight: 700 }}>{chk.label}</div>
                <div style={{ color: C, fontSize: 10, fontWeight: 700, background: C + '22', padding: '2px 8px', borderRadius: 4, flexShrink: 0, marginLeft: 8 }}>{chk.std}</div>
              </div>
              <div style={{ color: '#9ca3af', fontSize: 12, lineHeight: 1.5 }}>{chk.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ color: '#374151', fontSize: 10, lineHeight: 1.6, maxWidth: 580 }}>
          All dosages based on OPC 43/53 grade cement. Blended cements (PPC/PSC): increase dose by 10-15%.
        </div>
        <div style={{ color: '#333', fontSize: 10, letterSpacing: 2, flexShrink: 0 }}>MONOATOM LABS · GRAPHACRETE · DOSAGE GUIDE</div>
      </div>

    </div>
  )
}
