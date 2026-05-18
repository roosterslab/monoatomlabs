import React from 'react'
import { BarChart2, ShieldCheck, Layers } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

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
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/graphacrete-01.jpg')" }}>
      <PageHeader product="GRAPHACRETE" title="Technical Specifications" pageNum="6" color={COLOR} dark />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left — grade table */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 18px', gap: 14 }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '14px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <BarChart2 size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
                Grade Performance — 28-Day Compressive Strength
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600, color: '#9ca3af' }}>Grade</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Standard (MPa)</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>GRAPHACRETE (MPa)</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: '#9ca3af' }}>Gain</th>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600, color: '#9ca3af' }}>Typical Sector</th>
                </tr>
              </thead>
              <tbody>
                {GRADE_TABLE.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < GRADE_TABLE.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '5px 8px', fontWeight: 700, color: COLOR }}>{row.grade}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: 'rgba(255,255,255,0.45)' }}>{row.stdMPa}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{row.graMPa}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center' }}>
                      <span style={{
                        background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)', color: '#6ee7b7', padding: '3px 8px',
                        borderRadius: 12, fontSize: 9, fontWeight: 700,
                      }}>{row.gain}</span>
                    </td>
                    <td style={{ padding: '5px 8px', color: 'rgba(255,255,255,0.45)', fontSize: 9 }}>{row.sector}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* NABL Badge */}
          <div style={{
            display: 'flex', gap: 12, alignItems: 'center',
            background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 12, padding: '10px 14px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          }}>
            <div style={{
              width: 42, height: 42, borderRadius: 10,
              background: COLOR, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <ShieldCheck size={22} color="#fff" />
            </div>
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.85)' }}>NABL-Accredited Test Results</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.45)', marginTop: 2 }}>
                All compressive &amp; flexural strength data validated by NABL-accredited testing laboratories.
                Certificate available on request.
              </div>
            </div>
          </div>
        </div>

        {/* Right — mix design */}
        <div style={{
          width: '35%', borderLeft: '1px solid rgba(255,255,255,0.08)',
          padding: '16px', display: 'flex', flexDirection: 'column', gap: 14,
          background: 'rgba(255,255,255,0.02)',
        }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Layers size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
                Mix Design Guidelines (M25 Example)
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 9.5 }}>
              <thead>
                <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <th style={{ padding: '5px 7px', textAlign: 'left', fontWeight: 600, color: '#9ca3af' }}>Parameter</th>
                  <th style={{ padding: '5px 7px', textAlign: 'right', fontWeight: 600, color: '#9ca3af' }}>Standard</th>
                  <th style={{ padding: '5px 7px', textAlign: 'right', fontWeight: 600, color: '#9ca3af' }}>With GRAPHACRETE</th>
                  <th style={{ padding: '5px 7px', textAlign: 'left', fontWeight: 600, fontSize: 8, color: '#9ca3af' }}>Note</th>
                </tr>
              </thead>
              <tbody>
                {MIX_DESIGN.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < MIX_DESIGN.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                    <td style={{ padding: '5px 7px', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{row.param}</td>
                    <td style={{ padding: '5px 7px', textAlign: 'right', color: 'rgba(255,255,255,0.45)' }}>{row.standard}</td>
                    <td style={{ padding: '5px 7px', textAlign: 'right', color: COLOR, fontWeight: 600 }}>{row.graphacrete}</td>
                    <td style={{ padding: '5px 7px', color: 'rgba(255,255,255,0.45)', fontSize: 8.5 }}>{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '10px 12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
              Compatible Cement Types
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {['OPC 43', 'OPC 53', 'PPC', 'PSC', 'SRC', 'GGBS Blend'].map(c => (
                <span key={c} style={{
                  background: `${COLOR}18`, border: `1px solid ${COLOR}30`,
                  borderRadius: 3, padding: '2px 8px',
                  fontFamily: 'Outfit, sans-serif', fontSize: 9, color: COLOR, fontWeight: 600,
                }}>{c}</span>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '10px 12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.9)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
              Physical Properties
            </div>
            {[
              ['Appearance', 'Dark grey liquid'],
              ['Specific Gravity', '1.02–1.05'],
              ['pH', '7–9'],
              ['Shelf Life', '12 months sealed'],
              ['Storage', '5–40°C, avoid freezing'],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderBottom: i < 4 ? '1px solid rgba(255,255,255,0.08)' : 'none' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: 'rgba(255,255,255,0.45)' }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} dark />
    </div>
  )
}
