import React from 'react'

const C = '#d97706'

const sections = [
  {
    num: '01',
    title: 'Mechanism of Action',
    summary: 'GNPs enhance concrete at the molecular level during hydration',
    points: [
      { label: 'Nano-Bridging', detail: 'GNPs bridge micro-cracks before they propagate — preventing brittle failure' },
      { label: 'C-S-H Nucleation', detail: 'Additional nucleation sites produce denser calcium silicate hydrate gel' },
      { label: 'Pore Refinement', detail: 'Graphene fills micro-voids, dramatically reducing porosity and water ingress' },
    ],
    tech: [
      { k: 'GNP Thickness', v: '3–10 graphene layers' },
      { k: 'Dispersion Quality', v: '>95% uniformity' },
      { k: 'Dosage', v: '0.05–0.10% by cement wt' },
    ],
  },
  {
    num: '02',
    title: 'Microstructural Enhancement',
    summary: 'SEM imaging shows 40% porosity reduction and denser C-S-H gel',
    points: [
      { label: 'ITZ Strengthening', detail: 'Interfacial transition zone between cement paste and aggregate made 50% stronger' },
      { label: '30–40% Less Porosity', detail: 'Fewer micro-voids means higher strength and better water resistance' },
      { label: 'Crack Path Deflection', detail: 'GNPs force cracks to deflect around platelets, dissipating energy' },
    ],
    tech: [
      { k: 'Porosity Reduction', v: '30–40%' },
      { k: 'ITZ Enhancement', v: 'Up to 50%' },
      { k: 'C-S-H Density', v: '+25%' },
    ],
  },
  {
    num: '03',
    title: 'Enhanced Performance',
    summary: 'NABL-validated strength gains across compressive, water, and flexural properties',
    points: [
      { label: '+40–50% Compressive', detail: 'M30 mix achieves M50 equivalent — validated at 28 days by NABL lab' },
      { label: '30–45% Water Resistance', detail: 'Critical for marine, underground, and aggressive-environment concrete' },
      { label: '+35–40% Flexural', detail: 'Better crack resistance under dynamic loads — ideal for pavements and bridges' },
    ],
    tech: [
      { k: 'Compressive Gain', v: '40–50% @ 28 days' },
      { k: 'Permeability', v: '−30–45%' },
      { k: 'Flexural Strength', v: '+35–40%' },
    ],
  },
]

export default function GraScienceDeepDive() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Science</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>SCIENCE DEEP DIVE</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Graphene nano-platelet reinforcement — mechanism, microstructure, and validated performance</div>
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

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · SCIENCE EXPLAINED</div>
    </div>
  )
}
