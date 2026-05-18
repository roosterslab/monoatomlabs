import React from 'react'

const C = '#64748b'

const specs = [
  { category: 'Hardness & Scratch',   rows: [
    { prop: 'Pencil Hardness (ASTM D3363)', val: '9H+', note: 'Exceeds all standard coatings' },
    { prop: 'Scratch Load (ASTM D7027)', val: '>12 N', note: 'Critical load threshold' },
    { prop: 'Abrasion Resistance', val: 'Class A', note: 'Taber abrasion test' },
  ]},
  { category: 'Hydrophobicity',        rows: [
    { prop: 'Water Contact Angle (ASTM D5946)', val: '110–115°', note: 'Superhydrophobic surface' },
    { prop: 'Roll-off Angle', val: '<10°', note: 'Self-cleaning threshold' },
    { prop: 'Surface Energy', val: '<18 mN/m', note: 'Lotus-effect surface' },
  ]},
  { category: 'Durability & Protection', rows: [
    { prop: 'UV Resistance (ASTM G154)', val: '>99% @ 2,000 h', note: 'Xenon arc accelerated aging' },
    { prop: 'Salt Spray (ASTM B117)', val: '>500 hours', note: 'Corrosion resistance' },
    { prop: 'Thermal Resistance', val: 'Up to 250°C', note: 'Short-term thermal exposure' },
    { prop: 'Chemical Resistance', val: 'pH 2–12', note: 'Acid rain, bird drop, road chemicals' },
  ]},
  { category: 'Film Properties',       rows: [
    { prop: 'Layer Thickness', val: '2–3 microns', note: 'Nano-thin, optically clear' },
    { prop: 'Refractive Index', val: '1.42–1.46', note: 'Near glass — full gloss retained' },
    { prop: 'Adhesion (ASTM D3359)', val: '5B (best)', note: 'Cross-hatch adhesion test' },
    { prop: 'Cure Time (full hardness)', val: '7 days', note: '12–24 h to handle, 7 d full cure' },
  ]},
]

export default function CerTechnicalSpecs() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Technical</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>TECHNICAL SPECIFICATIONS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>ASTM-referenced test data — hardness, hydrophobicity, durability, film properties</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {specs.map((section, si) => (
          <div key={si} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20 }}>
            <div style={{ color: C, fontSize: 10, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16, fontWeight: 700 }}>{section.category}</div>
            {section.rows.map((r, ri) => (
              <div key={ri} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: ri < section.rows.length - 1 ? '1px solid #141414' : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#888', fontSize: 11, marginBottom: 2 }}>{r.prop}</div>
                    <div style={{ color: '#444', fontSize: 10, fontStyle: 'italic' }}>{r.note}</div>
                  </div>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 15, fontWeight: 700, color: '#fff', textAlign: 'right', flexShrink: 0 }}>{r.val}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, padding: '10px 16px', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 8, display: 'flex', gap: 24 }}>
        {[
          { label: 'Certifications', val: 'ASTM D3363 · ASTM G154 · ASTM B117 · ASTM D5946' },
          { label: 'Application Temp', val: '15–25°C (optimal), 10–35°C (acceptable)' },
        ].map((f, i) => (
          <div key={i}>
            <span style={{ color: '#444', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>{f.label}: </span>
            <span style={{ color: '#666', fontSize: 11 }}>{f.val}</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · TECHNICAL DATA SHEET</div>
    </div>
  )
}
