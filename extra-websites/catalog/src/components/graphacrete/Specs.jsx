import React from 'react'
import PageHeader from '../shared/PageHeader'
import PageFooter from '../shared/PageFooter'

const COLOR = '#d97706'

const GRADE_TABLE = [
  { grade: 'M20', stdMPa: '20', graMPa: '25', gain: '+25%', sector: 'Residential slabs, footpaths' },
  { grade: 'M25', stdMPa: '25', graMPa: '32', gain: '+28%', sector: 'Columns, beams, general RCC' },
  { grade: 'M30', stdMPa: '30', graMPa: '38', gain: '+27%', sector: 'Industrial floors, bridges' },
  { grade: 'M40', stdMPa: '40', graMPa: '51', gain: '+28%', sector: 'High-rise structures, piles' },
  { grade: 'M50', stdMPa: '50', graMPa: '63', gain: '+26%', sector: 'Precast, prestressed elements' },
  { grade: 'M60', stdMPa: '60', graMPa: '75', gain: '+25%', sector: 'Special structures, nuclear' },
  { grade: 'M70', stdMPa: '70', graMPa: '87', gain: '+24%', sector: 'Ultra-high performance concrete' },
]

const MIX_DESIGN = [
  { param: 'Cement (OPC 53)', standard: '380 kg/m³', graphacrete: '330 kg/m³', note: '–13% reduction' },
  { param: 'Water/Cement Ratio', standard: '0.42', graphacrete: '0.40', note: 'Slight reduction' },
  { param: 'GRAPHACRETE Dosage', standard: '—', graphacrete: '0.05–0.1% of cement wt.', note: 'By weight' },
  { param: 'Superplasticizer', standard: 'As required', graphacrete: 'As required', note: 'No change' },
  { param: 'Aggregate', standard: 'As designed', graphacrete: 'As designed', note: 'No change' },
  { param: 'Mixing Time', standard: '2 min', graphacrete: '3 min', note: '+1 min for dispersion' },
]

export default function GraphacreteSpecs() {
  return (
    <div className="page page-break" style={{ display: 'flex', flexDirection: 'column' }}>
      <PageHeader product="GRAPHACRETE" title="Technical Specifications" pageNum="6" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left — grade table */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 18px', gap: 14 }}>
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              Grade Performance — 28-Day Compressive Strength
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ background: COLOR, color: '#fff' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600 }}>Grade</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>Standard (MPa)</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>GRAPHACRETE (MPa)</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>Gain</th>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600 }}>Typical Sector</th>
                </tr>
              </thead>
              <tbody>
                {GRADE_TABLE.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fffbf0' }}>
                    <td style={{ padding: '5px 8px', fontWeight: 700, color: COLOR }}>{row.grade}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#6b7280' }}>{row.stdMPa}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#374151', fontWeight: 600 }}>{row.graMPa}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center' }}>
                      <span style={{
                        background: `${COLOR}18`, color: COLOR, padding: '1px 7px',
                        borderRadius: 10, fontSize: 9, fontWeight: 700,
                      }}>{row.gain}</span>
                    </td>
                    <td style={{ padding: '5px 8px', color: '#6b7280', fontSize: 9 }}>{row.sector}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* NABL Badge */}
          <div style={{
            display: 'flex', gap: 12, alignItems: 'center',
            background: `${COLOR}08`, border: `1px solid ${COLOR}30`,
            borderRadius: 4, padding: '10px 14px',
          }}>
            <div style={{
              width: 42, height: 42, borderRadius: '50%',
              background: COLOR, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>NABL</span>
            </div>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: '#374151' }}>NABL-Accredited Test Results</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', marginTop: 2 }}>
                All compressive & flexural strength data validated by NABL-accredited testing laboratories.
                Certificate available on request.
              </div>
            </div>
          </div>
        </div>

        {/* Right — mix design */}
        <div style={{
          width: '40%', borderLeft: '1px solid #e5e7eb',
          padding: '16px 16px', display: 'flex', flexDirection: 'column', gap: 14,
          background: '#fffdf7',
        }}>
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              Mix Design Guidelines (M25 Example)
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 9.5 }}>
              <thead>
                <tr style={{ background: '#f3f4f6' }}>
                  <th style={{ padding: '5px 7px', textAlign: 'left', fontWeight: 600, color: '#374151', borderBottom: '1px solid #e5e7eb' }}>Parameter</th>
                  <th style={{ padding: '5px 7px', textAlign: 'right', fontWeight: 600, color: '#374151', borderBottom: '1px solid #e5e7eb' }}>Standard</th>
                  <th style={{ padding: '5px 7px', textAlign: 'right', fontWeight: 600, color: COLOR, borderBottom: '1px solid #e5e7eb' }}>With GRAPHACRETE</th>
                  <th style={{ padding: '5px 7px', textAlign: 'left', fontWeight: 600, color: '#9ca3af', borderBottom: '1px solid #e5e7eb', fontSize: 8 }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {MIX_DESIGN.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                    <td style={{ padding: '5px 7px', color: '#374151', fontWeight: 500 }}>{row.param}</td>
                    <td style={{ padding: '5px 7px', textAlign: 'right', color: '#6b7280' }}>{row.standard}</td>
                    <td style={{ padding: '5px 7px', textAlign: 'right', color: COLOR, fontWeight: 600 }}>{row.graphacrete}</td>
                    <td style={{ padding: '5px 7px', color: '#9ca3af', fontSize: 8.5 }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: '#fff', border: `1px solid ${COLOR}30`, borderRadius: 4, padding: '10px 12px' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
              Compatible Cement Types
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {['OPC 43', 'OPC 53', 'PPC', 'PSC', 'SRC', 'GGBS Blend'].map(c => (
                <span key={c} style={{
                  background: `${COLOR}10`, border: `1px solid ${COLOR}25`,
                  borderRadius: 3, padding: '2px 8px',
                  fontFamily: 'Outfit, sans-serif', fontSize: 9, color: COLOR, fontWeight: 600,
                }}>{c}</span>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', border: `1px solid #e5e7eb`, borderRadius: 4, padding: '10px 12px' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 11, fontWeight: 700, color: '#374151', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
              Physical Properties
            </div>
            {[
              ['Appearance', 'Dark grey liquid'],
              ['Specific Gravity', '1.02–1.05'],
              ['pH', '7–9'],
              ['Shelf Life', '12 months sealed'],
              ['Storage', '5–40°C, avoid freezing'],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderBottom: i < 4 ? '1px solid #f3f4f6' : 'none' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#6b7280' }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#374151', fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
