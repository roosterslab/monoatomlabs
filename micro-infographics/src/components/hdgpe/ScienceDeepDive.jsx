import React from 'react'

const C = '#06b6d4'

const sections = [
  {
    num: '01',
    title: 'Nano-Reinforcement Mechanism',
    summary: 'GNPs align during processing to form a molecular-scale reinforcement network',
    points: [
      { label: 'Molecular Bridging', detail: 'GNPs connect polymer chains, transferring stress across a wide network' },
      { label: 'Load Transfer', detail: 'Forces distributed across graphene network instead of localized failure points' },
      { label: 'Crystallinity', detail: 'Graphene acts as nucleation sites — higher crystalline content improves stiffness' },
    ],
    tech: [
      { k: 'GNP Loading', v: '0.5–2.0% by weight' },
      { k: 'Aspect Ratio', v: '500–1,000' },
      { k: 'Dispersion', v: '>95% uniform' },
    ],
  },
  {
    num: '02',
    title: 'Enhanced Properties',
    summary: 'ASTM-tested improvements in mechanical and durability performance',
    points: [
      { label: '+30% Tensile & Flexural', detail: 'Achieved at 0.5–2% dosage — cost-effective versus performance gain' },
      { label: '20× Elongation', detail: 'Dramatically better toughness and impact resistance — far less brittle failure' },
      { label: '+20% UV Service Life', detail: 'Graphene absorbs UV — outdoor pipes, films, and agricultural products last longer' },
    ],
    tech: [
      { k: 'Tensile Strength', v: '+30% (ASTM D638)' },
      { k: 'Elongation', v: '20× baseline' },
      { k: 'Thermal Conductivity', v: '3× improvement' },
    ],
  },
  {
    num: '03',
    title: 'Processing & Compatibility',
    summary: 'Drop-in masterbatch — no equipment changes, no process disruption',
    points: [
      { label: 'Masterbatch Pellets', detail: 'Ready-to-use form — add directly to hopper during compounding' },
      { label: 'Universal Compatibility', detail: 'Works with all methods: extrusion, injection, blow molding, film blowing' },
      { label: '0.5–1.5% Optimal', detail: 'Start at 0.5%, test, adjust. Most applications peak at 1.0–1.5%' },
    ],
    tech: [
      { k: 'Form Factor', v: 'Masterbatch pellets' },
      { k: 'Processing Temp', v: '180–240°C' },
      { k: 'Optimal Dosage', v: '0.5–1.5%' },
    ],
  },
]

export default function PolyScienceDeepDive() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Science</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>SCIENCE DEEP DIVE</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Graphene polymer nano-reinforcement — mechanism, properties, and processing science</div>
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

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · SCIENCE EXPLAINED</div>
    </div>
  )
}
