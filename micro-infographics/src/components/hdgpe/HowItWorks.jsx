import React from 'react'

const C = '#06b6d4'

const steps = [
  { num: '01', title: 'Masterbatch Preparation', time: 'Pre-made', desc: 'HD-G-PE masterbatch contains uniformly dispersed graphene nano-platelets at optimal concentration. Supplied ready-to-use — no on-site dispersion needed.' },
  { num: '02', title: 'Polymer Blending', time: 'Standard', desc: 'Add HD-G-PE masterbatch at 0.5–2% dosage during standard compounding. Compatible with all twin-screw extruders and blending equipment.' },
  { num: '03', title: 'Nano-Reinforcement', time: 'In-process', desc: 'Graphene platelets integrate into polymer matrix during processing. Load transfer bridges, crystallinity enhancement, and molecular reinforcement occur simultaneously.' },
  { num: '04', title: 'Enhanced Performance', time: 'Lifetime', desc: 'Final product exhibits +30% tensile strength, 20× elongation improvement, +20% lifespan, superior UV and chemical resistance across all applications.' },
]

export default function PolyHowItWorks() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Process</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>HOW IT WORKS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4-step masterbatch integration — from blending to enhanced polymer products</div>
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

      {/* Compatibility matrix */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Processing Compatibility</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          {[
            { method: 'Extrusion', temp: '180–220°C', icon: '⚙️' },
            { method: 'Injection Molding', temp: '200–240°C', icon: '🏭' },
            { method: 'Blow Molding', temp: '180–210°C', icon: '💨' },
            { method: 'Film Blowing', temp: '170–200°C', icon: '📽️' },
          ].map((m, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '12px 8px', background: '#111', borderRadius: 8, border: '1px solid #1a1a1a' }}>
              <div style={{ fontSize: 20, marginBottom: 6 }}>{m.icon}</div>
              <div style={{ color: '#ccc', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{m.method}</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, color: C }}>{m.temp}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, padding: '8px 14px', background: '#001a1f', border: `1px solid ${C}44`, borderRadius: 8 }}>
          <span style={{ color: C, fontSize: 12, fontWeight: 600 }}>⚡ 0.5–2% dosage · No special equipment · Drop-in to existing process</span>
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · INTEGRATION PROCESS</div>
    </div>
  )
}
