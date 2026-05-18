import React from 'react'

const C = '#d97706'

const steps = [
  { num: '01', title: 'Dispersion', time: '5–10 min', desc: 'Proprietary graphene nano-platelets uniformly dispersed in water-based medium. Ready to mix — no special equipment or pre-processing required.' },
  { num: '02', title: 'Mixing', time: 'Standard', desc: 'Add Graphacrete to concrete mix at 0.05–0.10% by weight of cement during standard batching process. No change to existing workflow.' },
  { num: '03', title: 'Nano-Reinforcement', time: 'During cure', desc: 'Graphene platelets fill micro-voids and create dense nano-mesh network within cement matrix — bridging cracks before they form.' },
  { num: '04', title: 'Superior Performance', time: '28 days', desc: 'Achieve 40–50% compressive strength gain, superior crack resistance, 12–15% cement reduction, and enhanced durability across all grades.' },
]

export default function GraHowItWorks() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Process</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>HOW IT WORKS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4-step integration — from dispersion to high-performance concrete</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        {steps.map((s, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 16, right: 16, fontFamily: 'Rajdhani, sans-serif', fontSize: 48, fontWeight: 900, color: '#1a1a1a', lineHeight: 1 }}>{s.num}</div>
            <div style={{ display: 'inline-block', background: C + '22', border: `1px solid ${C}44`, borderRadius: 6, padding: '4px 10px', marginBottom: 12 }}>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: C, letterSpacing: 1 }}>{s.time}</span>
            </div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: '#fff', marginBottom: 10, letterSpacing: 0.5 }}>{s.title}</div>
            <div style={{ color: '#6b7280', fontSize: 13, lineHeight: 1.6 }}>{s.desc}</div>
            <div style={{ position: 'absolute', bottom: 0, left: 0, width: `${(i + 1) * 25}%`, height: 2, background: C }}></div>
          </div>
        ))}
      </div>

      {/* Dosage callout */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Optimal Dosage Guide</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {[
            { label: 'Dosage Range', val: '0.05–0.10%', sub: 'by weight of cement' },
            { label: 'Per m³ Concrete', val: '~50–100 mL', sub: 'Graphacrete liquid' },
            { label: 'Cement Reduction', val: '12–15%', sub: 'without strength loss' },
          ].map((d, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '14px', background: '#111', borderRadius: 8, border: '1px solid #1a1a1a' }}>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 26, fontWeight: 700, color: C }}>{d.val}</div>
              <div style={{ color: '#888', fontSize: 11, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{d.label}</div>
              <div style={{ color: '#555', fontSize: 11, marginTop: 2 }}>{d.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, padding: '8px 14px', background: '#1a0f00', border: `1px solid ${C}44`, borderRadius: 8 }}>
          <span style={{ color: C, fontSize: 12, fontWeight: 600 }}>⚡ No special equipment · Drop-in addition · Standard batching process unchanged</span>
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · APPLICATION PROCESS</div>
    </div>
  )
}
