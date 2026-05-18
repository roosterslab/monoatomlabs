import React from 'react'

const C = '#06b6d4'

const stages = [
  {
    step: '01',
    title: 'Lab-Scale Compounding Trial',
    duration: '2–4 weeks',
    investment: '₹60,000',
    deliverable: '50–100kg masterbatch supplied. 3 dosage levels tested (0.5%, 1%, 2%). ASTM D638 tensile, D256 impact, elongation testing. Independent lab results',
    outcome: '+30% tensile, 20× elongation, +32% impact confirmed at optimal dosage',
  },
  {
    step: '02',
    title: 'Production Run Trial',
    duration: '4–8 weeks',
    investment: '₹2–4 Lakh',
    deliverable: '500kg–2MT trial on customer\'s extrusion or injection line. No equipment change needed. Side-by-side standard vs HD-G-PE batch. QC team at site',
    outcome: 'Processing compatibility confirmed. Premium pricing locked in. Customer\'s own QC sign-off',
  },
  {
    step: '03',
    title: 'Commercial Batch Integration',
    duration: '2–3 months',
    investment: 'Per-ton supply pricing',
    deliverable: '10–50MT commercial batches. Supply chain setup. Just-in-time masterbatch delivery. Monthly ASTM batch certificate. Co-branding on enhanced product',
    outcome: 'Downgauging savings realized. ₹1,200–1,500/ton premium charged to end customer',
  },
  {
    step: '04',
    title: 'Full Integration + Annual Supply',
    duration: 'Annual supply contract',
    investment: 'Volume contract pricing',
    deliverable: 'Annual tonnage agreement. Priority supply. Engineering support for new product development. Access to HD-G-PE certification mark',
    outcome: 'Full P&L benefit: +12–15% revenue premium, −15% material cost, −60% quality defects',
  },
]

export default function PolyTrialToDeployment() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Journey</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>TRIAL TO DEPLOYMENT</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4-stage journey from lab compounding trial to full annual supply integration</div>
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

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · TRIAL JOURNEY</div>
    </div>
  )
}
