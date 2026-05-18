import React from 'react'

const C = '#64748b'

const steps = [
  { num: '01', title: 'Surface Preparation', time: '2–3 hrs', desc: 'Thorough washing and decontamination removes bonded contaminants, fallout, and residues. Surface must be chemically clean for maximum adhesion.' },
  { num: '02', title: 'Coating Application', time: '3–4 hrs', desc: 'Apply Ceraphene in thin, even layers using applicator pad. Each panel leveled carefully. Professional-grade technique ensures uniform coverage.' },
  { num: '03', title: 'Curing Process', time: '12–24 hrs', desc: 'Coating cross-links and cures to form ultra-hard 9H+ ceramic layer. Nano-Si bonds with clear coat permanently. No washing during cure window.' },
  { num: '04', title: 'Long-Term Protection', time: '3–4+ yrs', desc: 'Enjoy 9H+ hardness, 115° hydrophobicity, UV blocking, and chemical resistance. Single application protects the full lifecycle of the coating.' },
]

export default function CerHowItWorks() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Process</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>HOW IT WORKS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4-step ceramic coating application — from prep to permanent protection</div>
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

      {/* Process flow connector */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>Total Process Timeline</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
          {steps.map((s, i) => (
            <React.Fragment key={i}>
              <div style={{ flex: 1, textAlign: 'center', padding: '10px 8px', background: i === 3 ? C + '22' : '#111', borderRadius: 8, border: i === 3 ? `1px solid ${C}44` : '1px solid #1a1a1a' }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: i === 3 ? C : '#888' }}>{s.time}</div>
                <div style={{ fontSize: 10, color: '#555', marginTop: 2 }}>{s.title.split(' ')[0]}</div>
              </div>
              {i < 3 && <div style={{ width: 24, flexShrink: 0, textAlign: 'center', color: '#333', fontSize: 16 }}>→</div>}
            </React.Fragment>
          ))}
        </div>
        <div style={{ marginTop: 12, padding: '8px 14px', background: '#0a1628', border: '1px solid #1e3a5f', borderRadius: 8 }}>
          <span style={{ color: '#60a5fa', fontSize: 12, fontWeight: 600 }}>⚡ Total time: ~20–35 hours · Single application · No re-application needed for 3–4+ years</span>
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · APPLICATION PROCESS</div>
    </div>
  )
}
