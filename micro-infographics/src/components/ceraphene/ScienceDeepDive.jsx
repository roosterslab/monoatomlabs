import React from 'react'

const C = '#64748b'

const sections = [
  {
    num: '01',
    title: 'Graphene-Enhanced Formula',
    summary: 'How GNPs create a ceramic coating that outperforms pure ceramic',
    points: [
      { label: '9H+ Hardness', detail: 'Exceeds pure ceramic — graphene nano-mesh prevents microcracking' },
      { label: 'Flexibility', detail: 'Graphene prevents brittle failure that destroys standard ceramics' },
      { label: '25–40% Longer Life', detail: 'Graphene reinforcement sustains the ceramic matrix over time' },
    ],
    tech: [
      { k: 'Ceramic Matrix', v: 'SiO₂ + Si-O-Si' },
      { k: 'Layer Thickness', v: '2–3 microns' },
      { k: 'GNP Content', v: 'Proprietary blend' },
    ],
  },
  {
    num: '02',
    title: 'Performance Characteristics',
    summary: 'Measurable, test-validated benefits across 3 key properties',
    points: [
      { label: 'Scratch Protection', detail: '9H+ blocks daily damage — car washes, tree branches, road grit' },
      { label: 'Self-Cleaning', detail: '110°+ contact angle causes water to bead and carry away dirt' },
      { label: 'UV Stability', detail: '>99% UV stability after 2,000 hours — prevents paint oxidation' },
    ],
    tech: [
      { k: 'Hardness', v: '9H+ (ASTM D3363)' },
      { k: 'Contact Angle', v: '110°+' },
      { k: 'UV Stability', v: '>99% @ 2,000 h' },
    ],
  },
  {
    num: '03',
    title: 'Molecular Bonding',
    summary: 'Si-O covalent chemistry creates a permanent attachment to clear coat',
    points: [
      { label: 'Molecular Bond', detail: 'Si-O covalent bonds — permanent, won\'t wash or peel' },
      { label: 'Surface Preparation', detail: 'Decontamination and polishing critical for proper bond strength' },
      { label: '12–24 Hour Cure', detail: 'Cross-linking forms full 9H+ hardness in 7 days' },
    ],
    tech: [
      { k: 'Bond Type', v: 'Si-O covalent' },
      { k: 'Cure Time', v: '12–24 hours' },
      { k: 'Full Hardness', v: '7 days' },
    ],
  },
]

export default function CerScienceDeepDive() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Science</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>SCIENCE DEEP DIVE</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Graphene-ceramic nano-coating — mechanism, properties, and molecular chemistry</div>
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

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · SCIENCE EXPLAINED</div>
    </div>
  )
}
