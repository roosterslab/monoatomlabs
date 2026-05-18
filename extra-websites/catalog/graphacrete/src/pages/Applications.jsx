import React from 'react'
import { Building2, Factory, Map, Target } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#d97706'

const STATS = [
  { val: '42+', lab: 'Projects Completed' },
  { val: '8', lab: 'States Deployed' },
  { val: '5', lab: 'Industry Sectors' },
  { val: '50K+ m\u00B3', lab: 'Concrete Enhanced' },
]

const SECTORS = [
  {
    name: 'Infrastructure / Highways & Bridges',
    grade: 'Grade M40\u2013M70',
    metrics: { 'Avg Strength Gain': '+26%', 'Chloride Resistance': '+40%' },
    desc: 'Highway deck slabs, bridge piers, flyover columns. GRAPHACRETE excels in high-traffic structures where service life extension and permeability reduction deliver the highest lifecycle savings.',
  },
  {
    name: 'Residential Construction',
    grade: 'Grade M20\u2013M30',
    metrics: { 'Cement Reduction': '13%', 'Cost Saving/m\u00B3': '\u20B945' },
    desc: 'Foundation slabs, columns, beams in residential towers. Drop-in admixture simplifies adoption by ready-mix suppliers and reduces per-unit construction cost.',
  },
  {
    name: 'Industrial Floors & Pavements',
    grade: 'Grade M30\u2013M45',
    metrics: { 'Surface Hardness': '+22%', 'Joint-Free Span': '+15%' },
    desc: 'VDF warehouse floors, industrial pavements, logistics parks. GRAPHACRETE improves flexural strength \u2014 enabling wider joint-free spans and higher surface hardness.',
  },
  {
    name: 'Precast & Prestressed',
    grade: 'Grade M50\u2013M70',
    metrics: { 'Demould Time': '\u221218%', 'Creep / Shrinkage': '\u221212%' },
    desc: 'Precast girders, prestressed beams, hollow-core slabs. Early strength gain enables faster demoulding cycles, increasing factory throughput without extra cement.',
  },
  {
    name: 'Marine & Water Structures',
    grade: 'Grade M35\u2013M50',
    metrics: { 'Permeability': '\u221235%', 'Chloride Penetration': '\u221240%' },
    desc: "Seawalls, jetties, water treatment plants, dam aprons. GRAPHACRETE's permeability reduction is critical in aggressive marine environments.",
  },
  {
    name: 'Commercial & Institutional',
    grade: 'Grade M25\u2013M40',
    metrics: { 'Overall Cost': '\u22128%', 'ESG CO\u2082 Avoided': '27 t/1000m\u00B3' },
    desc: 'Office towers, hospitals, shopping malls. ESG reporting benefit from CO\u2082 reduction and NABL-certified performance certification.',
  },
]

const MATRIX_ROWS = [
  { label: 'Strength Enhancement', m2030: '\u2713', m3045: '\u2713', m4570: '\u2713', precast: '\u2713' },
  { label: 'Cement Reduction 13%', m2030: '\u2713', m3045: '\u2713', m4570: '\u2713', precast: '\u2713' },
  { label: 'Permeability Reduction', m2030: '\u2014', m3045: '\u2713', m4570: '\u2713', precast: '\u2713' },
  { label: 'Early Strength', m2030: '\u2014', m3045: '\u2014', m4570: '\u2713', precast: '\u2713' },
  { label: 'NABL Validation', m2030: '\u2713', m3045: '\u2713', m4570: '\u2713', precast: '\u2713' },
]

const DOSAGE_ROWS = [
  { app: 'Standard RCC', dose: '0.05% of cement wt.' },
  { app: 'High-performance', dose: '0.08\u20130.1%' },
  { app: 'Precast fast-demould', dose: '0.1%' },
  { app: 'Marine/aggressive', dose: '0.08%' },
]

function CellVal({ v }) {
  if (v === '\u2713') return <span style={{ color: '#059669', fontWeight: 700 }}>{v}</span>
  if (v === '\u2014') return <span style={{ color: '#9ca3af' }}>{v}</span>
  return <span>{v}</span>
}

export default function GraphacreteApplications() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/graphacrete-01.jpg')", fontFamily: 'Inter, sans-serif' }}>
      <PageHeader product="GRAPHACRETE" title="Applications & Industry Sectors" pageNum="10" color={COLOR} dark />

      {/* Stats row */}
      <div style={{ display: 'flex', gap: 8, padding: '10px 16px 0 16px' }}>
        {STATS.map((s, i) => (
          <div key={i} style={{
            flex: 1,
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12,
            padding: '8px 12px',
            textAlign: 'center',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 22, fontWeight: 700, color: COLOR, lineHeight: 1.1 }}>{s.val}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{s.lab}</div>
          </div>
        ))}
      </div>

      {/* Main area */}
      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0, marginTop: 10 }}>

        {/* Left — sector cards */}
        <div style={{ flex: 1, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <Building2 size={18} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', marginBottom: 0 }}>
              Industry Applications
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {SECTORS.map((s, i) => (
              <div key={i} style={{
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
                padding: '10px 12px',
                background: 'rgba(255,255,255,0.03)',
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 6 }}>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: COLOR }}>{s.name}</span>
                  <span style={{ background: 'rgba(255,255,255,0.08)', fontFamily: 'Inter, sans-serif', fontSize: 8, color: 'rgba(255,255,255,0.5)', padding: '2px 6px', borderRadius: 4, whiteSpace: 'nowrap', flexShrink: 0 }}>{s.grade}</span>
                </div>
                {Object.entries(s.metrics).map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.45)' }}>{k}</span>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff' }}>{v}</span>
                  </div>
                ))}
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.5)', margin: 0, lineHeight: 1.55 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{
          width: '38%',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          padding: '14px 14px',
          background: 'rgba(255,255,255,0.02)',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
        }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Target size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff', marginBottom: 0 }}>
                Compatibility Matrix
              </div>
            </div>
            <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Inter, sans-serif', fontSize: 9 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {['Application', 'M20\u201330', 'M30\u201345', 'M45\u201370', 'Precast'].map((h, i) => (
                    <th key={i} style={{ padding: '5px 8px', textAlign: i === 0 ? 'left' : 'center', fontWeight: 600, color: '#9ca3af' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATRIX_ROWS.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < MATRIX_ROWS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '4px 8px', color: 'rgba(255,255,255,0.75)' }}>{row.label}</td>
                    <td style={{ padding: '4px 8px', textAlign: 'center' }}><CellVal v={row.m2030} /></td>
                    <td style={{ padding: '4px 8px', textAlign: 'center' }}><CellVal v={row.m3045} /></td>
                    <td style={{ padding: '4px 8px', textAlign: 'center' }}><CellVal v={row.m4570} /></td>
                    <td style={{ padding: '4px 8px', textAlign: 'center' }}><CellVal v={row.precast} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <Map size={14} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#fff', marginBottom: 0 }}>
                Dosage by Application
              </div>
            </div>
            <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Inter, sans-serif', fontSize: 9 }}>
              <tbody>
                {DOSAGE_ROWS.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < DOSAGE_ROWS.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '4px 8px', color: 'rgba(255,255,255,0.7)' }}>{row.app}</td>
                    <td style={{ padding: '4px 8px', color: COLOR, fontWeight: 700, textAlign: 'right' }}>{row.dose}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{
            background: `rgba(217,119,6,0.08)`,
            border: `1px solid ${COLOR}30`,
            borderRadius: 12,
            padding: '10px 12px',
            fontFamily: 'Inter, sans-serif',
            fontSize: 9,
            color: COLOR,
            lineHeight: 1.5,
          }}>
            GRAPHACRETE is batch-tested to NABL standards. Performance data available per grade and project type on request. Custom mix design support provided for M50+ applications.
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} dark />
    </div>
  )
}
