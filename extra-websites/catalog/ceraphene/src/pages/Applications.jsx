import React from 'react'
import { Shield, Zap, Users, Factory, Target, CheckCircle } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#64748b'

const STATS = [
  { val: '70+', lab: 'Projects' },
  { val: '5,000+', lab: 'Vehicles Coated' },
  { val: '13', lab: 'Cities' },
  { val: '3\u20134 YR', lab: 'Coating Durability' },
]

const SECTORS = [
  {
    name: 'Personal Vehicles (Sedan / SUV / Hatchback)',
    segment: 'Segment: B to D segment',
    m1lab: 'Hardness', m1val: '9H+',
    m2lab: 'Durability', m2val: '3\u20134 YR',
    desc: 'The largest segment by volume. CERAPHENE delivers luxury-grade protection at accessible pricing. Particularly valued by owners in high-pollution cities where paint deteriorates 2\u00d7 faster.',
  },
  {
    name: 'Luxury & Exotic Cars',
    segment: 'Segment: \u20b920L+ vehicles',
    m1lab: 'Panel Temp Reduction', m1val: '8\u201312\u00b0C',
    m2lab: 'Scratch Resistance', m2val: '9H+',
    desc: "High-net-worth clients prioritise both protection and finish depth. CERAPHENE's graphene reinforcement delivers deeper gloss and harder surface than standard ceramic coatings. 4-year durability critical for long ownership cycles.",
  },
  {
    name: 'Commercial Fleet (Taxis / Cabs / Aggregators)',
    segment: 'Fleet Size: 50\u20135,000 vehicles',
    m1lab: 'ROI/Vehicle', m1val: '\u20b95,200',
    m2lab: 'Repainting Events', m2val: '\u221270%',
    desc: 'Aggregator-operated fleets require cost-justified protection. CERAPHENE reduces panel repainting frequency and maintains brand appearance standards for longer cycles.',
  },
  {
    name: 'Public Transport (Buses / Trains)',
    segment: 'Segment: KSRTC/BEST/Metro',
    m1lab: 'Surface Temp Reduction', m1val: '8\u201312\u00b0C',
    m2lab: 'Graffiti Removal', m2val: '\u221265%',
    desc: 'Thermal surface reduction reduces cabin AC load. Graffiti slides off ceramic surface without etching. High-visibility asset protection with documented operational cost savings.',
  },
  {
    name: 'Two-Wheelers & Motorcycles',
    segment: 'Segment: Premium bikes (\u20b91L+)',
    m1lab: 'Hydrophobicity', m1val: '115\u00b0+',
    m2lab: 'UV Fade', m2val: '\u221260%',
    desc: 'Premium motorcycles exposed to harsh outdoor conditions. CERAPHENE protects paint from UV fade, acid rain, and industrial fallout. Quick 30 mL application per bike.',
  },
  {
    name: 'Marine & Commercial Vehicles',
    segment: 'Segment: Boats, trucks, LCVs',
    m1lab: 'Chemical Resistance', m1val: 'Excellent',
    m2lab: 'Salt Exposure', m2val: 'Yes',
    desc: 'Marine hulls, truck cabs, LCVs in industrial environments. CERAPHENE resists salt spray, acid wash, and solvent exposure \u2014 critical for coastal or chemical industry fleet operators.',
  },
]

const THREAT_TABLE = {
  headers: ['Threat', 'Unprotected', 'Wax Sealant', 'Standard Ceramic', 'CERAPHENE'],
  rows: [
    ['UV Fade', 'High', 'Moderate', 'Low', 'Very Low'],
    ['Acid Rain Etch', 'High', 'Moderate', 'Low', 'Very Low'],
    ['Bird Drop Damage', 'High', 'Moderate', 'Low', 'Very Low'],
    ['Swirl Marks', 'High', 'High', 'Low', 'Very Low'],
    ['Water Spotting', 'High', 'Moderate', 'Low', 'Nil'],
    ['Heat Discolouration', 'High', 'Moderate', 'Moderate', 'Very Low'],
    ['Graffiti Adhesion', 'High', 'High', 'Moderate', 'Very Low'],
  ],
}

const THREAT_COLOR = {
  'Very Low': '#059669',
  'Nil': '#059669',
  'Low': '#0891b2',
  'Moderate': '#d97706',
  'High': '#dc2626',
}

const SERVICE_ROWS = [
  { prod: 'Wax', hard: '2H', dur: '1\u20133 months', angle: '85\u00b0', price: '\u20b9500\u20132,000', highlight: false },
  { prod: 'Sealant (polymer)', hard: '4H', dur: '6\u201312 months', angle: '95\u00b0', price: '\u20b92,000\u20135,000', highlight: false },
  { prod: 'Standard ceramic', hard: '7H', dur: '1.5\u20132 years', angle: '105\u00b0', price: '\u20b98,000\u201315,000', highlight: false },
  { prod: 'CERAPHENE', hard: '9H+', dur: '3\u20134 years', angle: '115\u00b0+', price: '\u20b95,000\u201312,000', highlight: true },
]

const thL = { fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 7px', borderBottom: '2px solid #e5e7eb', color: '#374151', textAlign: 'left', background: 'transparent' }
const tdL = { fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', borderBottom: '1px solid #f1f5f9', color: '#374151' }

export default function CerapheneApplications() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/ceraphene-01.jpg')", fontFamily: 'Inter, sans-serif' }}>
      <PageHeader product="CERAPHENE" title="Applications & Vehicle Segments" pageNum="10" color={COLOR} dark />

      <div style={{ padding: '10px 20px 4px 20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {STATS.map(({ val, lab }) => (
            <div key={lab} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              padding: '8px 12px',
              textAlign: 'center',
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
            }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 22, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{val}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.5)', marginTop: 3 }}>{lab}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', gap: 0, padding: '10px 20px 8px 20px', overflow: 'hidden' }}>

        {/* Left */}
        <div style={{ flex: 1, paddingRight: 14, paddingTop: 2 }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: 'rgba(255,255,255,0.9)', letterSpacing: 1, marginBottom: 8 }}>
            Vehicle Segments &amp; Use Cases
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {SECTORS.map((s) => (
              <div key={s.name} style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
                padding: '10px 12px',
                background: 'rgba(255,255,255,0.03)',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 5, flexWrap: 'wrap' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10.5, fontWeight: 700, color: COLOR, lineHeight: 1.3 }}>{s.name}</div>
                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: 4, padding: '1px 6px', fontFamily: 'Inter, sans-serif', fontSize: 7.5, color: 'rgba(255,255,255,0.5)', flexShrink: 0, marginTop: 1 }}>{s.segment}</div>
                </div>
                <div style={{ display: 'flex', gap: 10, marginBottom: 5 }}>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>{s.m1lab}</div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#e5e7eb' }}>{s.m1val}</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.4)' }}>{s.m2lab}</div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#e5e7eb' }}>{s.m2val}</div>
                  </div>
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ width: '38%', borderLeft: '1px solid rgba(255,255,255,0.08)', paddingLeft: 14, paddingTop: 2, background: 'rgba(255,255,255,0.02)', display: 'flex', flexDirection: 'column', gap: 12 }}>

          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.9)', letterSpacing: 1, marginBottom: 6 }}>Protection Comparison by Threat</div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {THREAT_TABLE.headers.map((h) => (
                    <th key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 7px', color: '#9ca3af', textAlign: 'left', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {THREAT_TABLE.rows.map((row) => (
                  <tr key={row[0]} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    {row.map((cell, i) => (
                      <td key={i} style={{
                        fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '4px 7px',
                        color: i === 0 ? 'rgba(255,255,255,0.7)' : (THREAT_COLOR[cell] || 'rgba(255,255,255,0.5)'),
                        fontWeight: i > 0 ? 600 : 400,
                      }}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.9)', letterSpacing: 1, marginBottom: 6 }}>Service Life Comparison</div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {['Product', 'Hardness', 'Durability', 'Water Angle', 'Price Range'].map((h) => (
                    <th key={h} style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, padding: '5px 7px', color: '#9ca3af', textAlign: 'left', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SERVICE_ROWS.map((r) => (
                  <tr key={r.prod} style={{
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    background: r.highlight ? `${COLOR}15` : 'transparent',
                    borderLeft: r.highlight ? `3px solid ${COLOR}` : '3px solid transparent',
                  }}>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: r.highlight ? COLOR : 'rgba(255,255,255,0.7)', fontWeight: r.highlight ? 600 : 400 }}>{r.prod}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: 'rgba(255,255,255,0.6)' }}>{r.hard}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: 'rgba(255,255,255,0.6)' }}>{r.dur}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: 'rgba(255,255,255,0.6)' }}>{r.angle}</td>
                    <td style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, padding: '4px 7px', color: 'rgba(255,255,255,0.6)' }}>{r.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${COLOR}30`, borderRadius: 12, padding: '10px 12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: COLOR, lineHeight: 1.6 }}>
              CERAPHENE delivers 9H+ protection at 7H pricing \u2014 the only graphene-ceramic coating with a documented 3\u20134 year durability guarantee backed by NABL hardness certification.
            </div>
          </div>

        </div>
      </div>

      <PageFooter color={COLOR} dark />
    </div>
  )
}
