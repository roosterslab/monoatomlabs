import React from 'react'

const C = '#06b6d4'

const specs = [
  { category: 'Mechanical Strength',  rows: [
    { prop: 'Tensile Strength (ASTM D638)',  val: '+30%',     note: 'vs. virgin HDPE at same dosage' },
    { prop: 'Flexural Strength (ASTM D790)', val: '+28–32%',  note: 'Three-point bending test' },
    { prop: 'Impact Strength (ASTM D256)',   val: '+30–35%',  note: 'Izod notched impact' },
    { prop: 'Elongation at Break',           val: '20× baseline', note: 'Far less brittle failure' },
  ]},
  { category: 'Thermal & UV',         rows: [
    { prop: 'Thermal Conductivity',           val: '3× improvement',   note: 'Better heat dissipation' },
    { prop: 'HDT (Heat Deflection Temp)',      val: '+8–12°C',          note: 'ASTM D648 at 0.455 MPa' },
    { prop: 'UV Stability (ASTM G154)',        val: '+20% service life', note: 'Accelerated weathering test' },
    { prop: 'Oxidation Induction Time (OIT)',  val: '+25%',             note: 'Graphene acts as radical scavenger' },
  ]},
  { category: 'Processing Data',      rows: [
    { prop: 'Processing Temperature', val: '180–240°C',    note: 'Unchanged from virgin HDPE' },
    { prop: 'Melt Flow Index',        val: 'Slight reduction', note: 'Higher viscosity — adjust MFI target' },
    { prop: 'Masterbatch Dosage',     val: '0.5–2.0%',     note: 'Optimal balance of cost vs performance' },
    { prop: 'Dispersion Uniformity',  val: '>95%',         note: 'Proprietary pre-dispersion eliminates agglomeration' },
  ]},
  { category: 'Quality & Compliance', rows: [
    { prop: 'Food Contact Safety',      val: 'FSSAI compatible', note: 'Inert graphene — no migration' },
    { prop: 'RoHS Compliance',          val: 'Compliant',        note: 'No hazardous substances' },
    { prop: 'Batch Consistency (COV)',   val: '<3%',              note: 'Tight quality control on masterbatch' },
    { prop: 'Shelf Life',               val: '24 months',        note: 'Sealed packaging, ambient storage' },
  ]},
]

export default function PolyTechnicalSpecs() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Technical</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>TECHNICAL SPECIFICATIONS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>ASTM-referenced test data — mechanical, thermal, processing, and quality specs</div>
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
        <span style={{ color: '#666', fontSize: 11 }}>ASTM D638 · ASTM D790 · ASTM D256 · ASTM D648 · ASTM G154 · IS 7328 (HDPE pipes)</span>
      </div>

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · TECHNICAL DATA SHEET</div>
    </div>
  )
}
