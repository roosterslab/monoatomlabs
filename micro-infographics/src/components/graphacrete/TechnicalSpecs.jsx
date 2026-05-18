import React from 'react'

const C = '#d97706'

const specs = [
  { category: 'Compressive Strength',  rows: [
    { prop: 'M30 Mix → Graphacrete Gain (IS 456)',  val: '+42% @ 28 days', note: 'Standard test: 150mm cube' },
    { prop: 'M50 Mix → Graphacrete Gain',          val: '+38% @ 28 days', note: 'High-strength grade' },
    { prop: 'Early Strength (7 days)',              val: '+35% vs control', note: 'Faster formwork removal' },
    { prop: 'Strength Consistency (COV)',           val: '<4%',            note: 'Better than industry avg 7%' },
  ]},
  { category: 'Durability',            rows: [
    { prop: 'Water Permeability (IS 3085)', val: '−30–45%',       note: 'Critical for marine exposure' },
    { prop: 'Chloride Penetration',        val: '−40% depth',     note: 'RCPT test — 3,600 coulombs → <2,200' },
    { prop: 'Carbonation Resistance',      val: '+50% depth redn', note: 'CO₂ ingress resistance' },
    { prop: 'Service Life Extension',      val: '25+ years',       note: 'vs 15-year standard lifecycle' },
  ]},
  { category: 'Flexural & Tensile',    rows: [
    { prop: 'Flexural Strength (IS 516)', val: '+35–40%',  note: 'Critical for pavement, bridge decks' },
    { prop: 'Split Tensile Strength',     val: '+30–35%',  note: 'Improved crack resistance' },
    { prop: 'Fracture Toughness (KIC)',   val: '+45%',     note: 'Energy absorbed before fracture' },
  ]},
  { category: 'Mix Design',            rows: [
    { prop: 'Dosage (by cement weight)',  val: '0.05–0.10%',       note: '50–100 mL per m³ concrete' },
    { prop: 'Cement Reduction',          val: '12–15%',            note: 'While meeting design grade' },
    { prop: 'W/C Ratio',                 val: 'Unchanged',         note: 'No workability adjustment needed' },
    { prop: 'Admixture Compatibility',   val: 'All standard',      note: 'SP, retarder, air-entraining agents' },
  ]},
]

export default function GraTechnicalSpecs() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Technical</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>TECHNICAL SPECIFICATIONS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>IS/ASTM-referenced test data — compressive, durability, flexural, mix design</div>
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
        <span style={{ color: '#666', fontSize: 11 }}>IS 456 · IS 516 · IS 3085 · ASTM C1202 (RCPT) · NABL-accredited lab testing</span>
      </div>

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · TECHNICAL DATA SHEET</div>
    </div>
  )
}
