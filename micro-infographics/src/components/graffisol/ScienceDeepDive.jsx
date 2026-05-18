import React from 'react'

const C = '#f59e0b'

const sections = [
  {
    num: '01',
    title: 'Graphene Enhancement Mechanism',
    summary: 'Three simultaneous effects that boost solar output',
    points: [
      { label: 'Light Management', detail: 'Nano-textured surface reduces reflection — more photons reach the cell' },
      { label: 'Thermal Conductivity', detail: 'GNPs conduct heat 500× better than untreated glass — panels run cooler' },
      { label: 'Hydrophobic Surface', detail: 'Contact angle >110° — water and dust bead up and roll off naturally' },
    ],
    tech: [
      { k: 'Light Transmission', v: '>98%' },
      { k: 'Thermal Conductivity', v: '500× vs untreated' },
      { k: 'Contact Angle', v: '>110°' },
    ],
  },
  {
    num: '02',
    title: 'Performance Enhancement',
    summary: 'Field-tested across 26+ installations — three gain mechanisms validated',
    points: [
      { label: '+10–12% Power', detail: 'Reduced reflection (+2–3%) + lower temperature (+3–4%) + less soiling (+5–6%)' },
      { label: '5–6°C Cooler', detail: 'Silicon loses 0.5%/°C above 25°C. Graffisol recovers 2.5–3% from temp alone' },
      { label: '30–40% Less Soiling', detail: 'India soiling losses: 15–25%/yr. Hydrophobic surface cuts this by a third' },
    ],
    tech: [
      { k: 'Power Gain', v: '10–12% validated' },
      { k: 'Temp Reduction', v: '5–6°C avg' },
      { k: 'Soiling Reduction', v: '35% avg' },
    ],
  },
  {
    num: '03',
    title: 'Coating Technology',
    summary: '50–100nm self-assembling layer — optically clear, mechanically durable',
    points: [
      { label: 'Nano-Scale Layer', detail: '50–100nm thickness — below visible light wavelength, so fully transparent' },
      { label: 'Stable Dispersion', detail: 'Proprietary water-based system prevents graphene aggregation during application' },
      { label: '3–5 Year Durability', detail: 'Validated through UV cycling, thermal stress, and rain simulation tests' },
    ],
    tech: [
      { k: 'Coating Thickness', v: '50–100 nm' },
      { k: 'Light Transmission', v: '>98%' },
      { k: 'Field Durability', v: '3–5 years' },
    ],
  },
]

export default function SolScienceDeepDive() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Science</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>SCIENCE DEEP DIVE</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Graphene solar coating — light management, thermal physics, and coating technology</div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {sections.map((s, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 22, display: 'grid', gridTemplateColumns: '1fr 220px', gap: 20 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 900, color: '#1f1f1f', lineHeight: 1 }}>{s.num}</div>
                <div>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0.5 }}>{s.title}</div>
                  <div style={{ color: '#555', fontSize: 12, marginTop: 2 }}>{s.summary}</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {s.points.map((p, j) => (
                  <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 4, height: 4, borderRadius: '50%', background: C, marginTop: 6, flexShrink: 0 }}></div>
                    <div>
                      <span style={{ color: '#ccc', fontSize: 13, fontWeight: 600 }}>{p.label}:</span>
                      <span style={{ color: '#6b7280', fontSize: 13, marginLeft: 6 }}>{p.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#111', borderRadius: 8, padding: 14, border: '1px solid #1a1a1a' }}>
              <div style={{ color: C, fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>Technical Data</div>
              {s.tech.map((t, j) => (
                <div key={j} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8, paddingBottom: 8, borderBottom: j < s.tech.length - 1 ? '1px solid #1a1a1a' : 'none' }}>
                  <span style={{ color: '#555', fontSize: 11 }}>{t.k}</span>
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 12, fontWeight: 700, color: '#ccc' }}>{t.v}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · SCIENCE EXPLAINED</div>
    </div>
  )
}
