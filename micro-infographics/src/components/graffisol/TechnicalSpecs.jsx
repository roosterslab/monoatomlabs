import React from 'react'

const C = '#f59e0b'

const specs = [
  { category: 'Optical Properties',   rows: [
    { prop: 'Light Transmission',      val: '>98%',           note: 'Full visible spectrum maintained' },
    { prop: 'Anti-Reflective Effect',  val: '+2–3% photons',  note: 'Nano-texture reduces surface reflection' },
    { prop: 'Haze Value',              val: '<0.5%',           note: 'Optically clear at 50–100nm thickness' },
    { prop: 'Refractive Index Match',  val: '±0.01 vs glass', note: 'No optical interference patterns' },
  ]},
  { category: 'Thermal Performance',  rows: [
    { prop: 'Operating Temp Reduction',  val: '5–6°C avg',        note: 'Field-measured across 26+ installations' },
    { prop: 'Thermal Conductivity',      val: '500× untreated',   note: 'Graphene: 5,000 W/mK vs glass 1 W/mK' },
    { prop: 'Efficiency Recovery',       val: '2.5–3.0%',         note: 'From temp reduction alone (0.5%/°C Si)' },
    { prop: 'Peak Temp Reduction',       val: '8–10°C (summer)',  note: 'Maximum benefit in high-irradiance regions' },
  ]},
  { category: 'Anti-Soiling',         rows: [
    { prop: 'Water Contact Angle',     val: '>110°',           note: 'Superhydrophobic — beads and rolls off' },
    { prop: 'Soiling Loss Reduction',  val: '30–40%',          note: 'vs uncoated panels in same environment' },
    { prop: 'Cleaning Interval',       val: '3× less frequent', note: 'Monthly → Quarterly typical' },
    { prop: 'Dust Adhesion Force',     val: '−60%',            note: 'Low surface energy reduces particulate binding' },
  ]},
  { category: 'Durability',           rows: [
    { prop: 'Field Durability',        val: '3–5 years',       note: 'Outdoor exposure validated' },
    { prop: 'UV Resistance',           val: 'IEC 61215',       note: 'Damp heat, UV preconditioning compliant' },
    { prop: 'Temperature Cycling',     val: '−40°C to +85°C',  note: 'No delamination or cracking' },
    { prop: 'Adhesion to Glass',       val: 'Class 5B',        note: 'ASTM D3359 cross-hatch adhesion' },
  ]},
]

export default function SolTechnicalSpecs() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Technical</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>TECHNICAL SPECIFICATIONS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Optical, thermal, anti-soiling, and durability data — field-validated and lab-certified</div>
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
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', textAlign: 'right', flexShrink: 0 }}>{r.val}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, padding: '10px 16px', background: '#0a0a0a', border: '1px solid #1a1a1a', borderRadius: 8 }}>
        <span style={{ color: '#444', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Standards: </span>
        <span style={{ color: '#666', fontSize: 11 }}>IEC 61215 · IEC 61730 · ASTM D3359 · ASTM G154 (UV aging) · Field-validated 26+ installations</span>
      </div>

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · TECHNICAL DATA SHEET</div>
    </div>
  )
}
