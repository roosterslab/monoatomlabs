import React from 'react'
import PageHeader from '../shared/PageHeader'
import PageFooter from '../shared/PageFooter'

const COLOR = '#64748b'

const TEST_RESULTS = [
  { property: 'Pencil Hardness', value: '9H+', standard: 'ASTM D3363', status: 'Pass' },
  { property: 'Water Contact Angle', value: '115°', standard: 'ASTM D5946', status: 'Pass' },
  { property: 'Thermal Resistance', value: '700°C', standard: 'ASTM E1530', status: 'Pass' },
  { property: 'UV Stability (Gloss Retention)', value: '+20% service life', standard: 'ASTM G154', status: 'Pass' },
  { property: 'Cross-Cut Adhesion', value: '5B (best)', standard: 'ASTM D3359', status: 'Pass' },
  { property: 'Chemical Resistance (pH 2–13)', value: 'No degradation', standard: 'ASTM D1308', status: 'Pass' },
  { property: 'Abrasion Resistance (Taber)', value: '< 5mg loss / 1000 cycles', standard: 'ASTM D4060', status: 'Pass' },
]

const COMPETITORS = [
  { name: 'Basic Wax', hardness: 20, contact: 85, life: 12 },
  { name: 'PPF (Paint Protection Film)', hardness: 55, contact: 95, life: 60 },
  { name: 'Ceramic Competitor (SiO₂)', hardness: 78, contact: 105, life: 30 },
  { name: 'CERAPHENE', hardness: 100, contact: 115, life: 50, highlight: true },
]

const APP_SPECS = [
  { label: 'Application Method', value: 'Hand-wipe / Spray + Wipe' },
  { label: 'Dosage per Panel', value: '3–5 ml per panel' },
  { label: 'Initial Cure Time', value: '3–4 hours' },
  { label: 'Full Bond Time', value: '24 hours' },
  { label: 'Recoat Window', value: '7–14 days' },
  { label: 'Film Thickness', value: '3–4 μm (single coat)' },
  { label: 'Coverage', value: '30–50 ml per vehicle' },
  { label: 'Shelf Life', value: '18 months (sealed)' },
]

function Bar({ pct, color, highlight }) {
  return (
    <div style={{ height: 10, background: '#f3f4f6', borderRadius: 3, overflow: 'hidden', flex: 1 }}>
      <div style={{
        height: '100%',
        width: `${pct}%`,
        background: highlight ? color : '#d1d5db',
        borderRadius: 3,
        transition: 'width 0.3s',
      }} />
    </div>
  )
}

export default function CerapheneSpecs() {
  const maxHardness = Math.max(...COMPETITORS.map(c => c.hardness))
  return (
    <div className="page page-break" style={{ display: 'flex', flexDirection: 'column' }}>
      <PageHeader product="CERAPHENE" title="Technical Specifications" pageNum="3" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left — test table + comparison */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 18px', gap: 14 }}>

          {/* ASTM Table */}
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              ASTM / Third-Party Test Results
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ background: COLOR, color: 'white' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600, letterSpacing: 0.5 }}>Property</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>Result</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>Standard</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {TEST_RESULTS.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f8f9fa' }}>
                    <td style={{ padding: '5px 8px', color: '#374151', fontWeight: 500 }}>{row.property}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: COLOR, fontWeight: 700 }}>{row.value}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#6b7280' }}>{row.standard}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center' }}>
                      <span style={{
                        background: '#d1fae5', color: '#065f46', padding: '1px 7px',
                        borderRadius: 10, fontSize: 9, fontWeight: 700,
                      }}>{row.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Competitor comparison */}
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              Hardness Comparison vs Competitors
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {COMPETITORS.map(c => (
                <div key={c.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{
                    width: 150, fontFamily: 'Inter, sans-serif', fontSize: 9,
                    color: c.highlight ? COLOR : '#6b7280',
                    fontWeight: c.highlight ? 700 : 400, flexShrink: 0,
                  }}>{c.name}</div>
                  <Bar pct={(c.hardness / maxHardness) * 100} color={COLOR} highlight={c.highlight} />
                  <div style={{
                    width: 40, textAlign: 'right', fontFamily: 'Outfit, sans-serif',
                    fontSize: 9, color: c.highlight ? COLOR : '#6b7280',
                    fontWeight: c.highlight ? 700 : 400,
                  }}>9H+</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right — application specs */}
        <div style={{
          width: '35%', borderLeft: '1px solid #e5e7eb',
          padding: '16px 16px', display: 'flex', flexDirection: 'column', gap: 14,
          background: '#fafafa',
        }}>
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>
              Application Specifications
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {APP_SPECS.map((spec, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
                  padding: '6px 0',
                  borderBottom: i < APP_SPECS.length - 1 ? '1px solid #e5e7eb' : 'none',
                }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#6b7280', flex: 1 }}>{spec.label}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#111', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Coverage note */}
          <div style={{
            background: `${COLOR}08`, border: `1px solid ${COLOR}20`,
            borderRadius: 4, padding: '10px 12px',
          }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
              Professional Tip
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#374151', margin: 0, lineHeight: 1.5 }}>
              For optimal results, apply on a decontaminated panel at 15–30°C. Avoid direct sunlight during application. A flash point of 60 seconds before buffing ensures uniform leveling.
            </p>
          </div>

          {/* NABL badge */}
          <div style={{
            background: '#fff', border: `2px solid ${COLOR}`,
            borderRadius: 4, padding: '10px 14px', textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 12, fontWeight: 700, color: COLOR, letterSpacing: 2, textTransform: 'uppercase' }}>
              NABL Validated
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', marginTop: 3 }}>
              Third-party accredited testing
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
