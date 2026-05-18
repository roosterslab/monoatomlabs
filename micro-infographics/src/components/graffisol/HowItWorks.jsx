import React from 'react'

const C = '#f59e0b'

const steps = [
  { num: '01', title: 'Surface Preparation', time: '1–2 hrs', desc: 'Clean solar panels thoroughly to remove dirt, dust, bird droppings, and residues. Surface must be dry and chemically clean before application.' },
  { num: '02', title: 'Coating Application', time: '2–3 hrs', desc: 'Apply Graffisol uniformly using spray or roller method. Thin, even layer across panel surface ensures optimal graphene bonding and coverage.' },
  { num: '03', title: 'Curing & Bonding', time: '4–6 hrs', desc: 'Graphene molecules bond to panel surface, forming ultra-thin protective layer. Hydrophobic and anti-soiling properties activate as coating cures.' },
  { num: '04', title: 'Enhanced Performance', time: '3–5 yrs', desc: 'Enjoy 10–12% power output increase, 5–6°C temperature reduction, and 30–40% less soiling loss. Single application for multi-year performance.' },
]

export default function SolHowItWorks() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Process</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>HOW IT WORKS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4-step solar coating application — from prep to maximum energy yield</div>
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

      {/* Performance gains callout */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Post-Application Performance Gains</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {[
            { label: 'Power Output', val: '+10–12%', icon: '⚡' },
            { label: 'Temp Reduction', val: '5–6°C', icon: '🌡️' },
            { label: 'Soiling Loss', val: '−30–40%', icon: '💧' },
            { label: 'Light Trans.', val: '>98%', icon: '☀️' },
          ].map((d, i) => (
            <div key={i} style={{ textAlign: 'center', padding: '14px 10px', background: '#111', borderRadius: 8, border: '1px solid #1a1a1a' }}>
              <div style={{ fontSize: 22, marginBottom: 6 }}>{d.icon}</div>
              <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: C }}>{d.val}</div>
              <div style={{ color: '#666', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginTop: 4 }}>{d.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · APPLICATION PROCESS</div>
    </div>
  )
}
