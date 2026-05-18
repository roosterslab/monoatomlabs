import React from 'react'
import PageHeader from '../shared/PageHeader'
import PageFooter from '../shared/PageFooter'

const COLOR = '#f59e0b'

const PERF_TABLE = [
  { system: 'Rooftop (Residential)', powerGain: '+10%', tempReduction: '5°C', soilingRed: '32%', contactAngle: '98°', notes: '3–5 kW systems' },
  { system: 'Rooftop (Commercial)', powerGain: '+11%', tempReduction: '5.5°C', soilingRed: '35%', contactAngle: '102°', notes: '10–100 kW' },
  { system: 'Ground-Mount Utility', powerGain: '+12%', tempReduction: '6°C', soilingRed: '38%', contactAngle: '105°', notes: '1 MW+' },
  { system: 'Agri-Solar / Bifacial', powerGain: '+10.5%', tempReduction: '5°C', soilingRed: '30%', contactAngle: '99°', notes: 'Bifacial 1.1× gain' },
]

const REGIONAL_SOILING = [
  { region: 'Rajasthan (Desert)', soilingLoss: '15–22%/yr', coatGain: '+11.5%', netGain: '+9%' },
  { region: 'Gujarat (Coastal)', soilingLoss: '8–12%/yr', coatGain: '+10.5%', netGain: '+9%' },
  { region: 'Andhra Pradesh', soilingLoss: '10–18%/yr', coatGain: '+11%', netGain: '+9.5%' },
  { region: 'Telangana', soilingLoss: '9–15%/yr', coatGain: '+10%', netGain: '+8.5%' },
]

const APP_SPECS = [
  { label: 'Application Method', value: 'Spray + wipe / soft squeegee' },
  { label: 'Coverage Rate', value: '40–50 ml / 250W panel' },
  { label: 'Frequency', value: 'Annual (recommended)' },
  { label: 'Application Temp', value: '10–45°C, avoid direct sun' },
  { label: 'Cure / Set Time', value: '2–4 hours to full effect' },
  { label: 'Compatibility', value: 'All poly/mono crystalline panels' },
  { label: 'Shelf Life', value: '12 months sealed' },
]

export default function GraffisolSpecs() {
  return (
    <div className="page page-break" style={{ display: 'flex', flexDirection: 'column' }}>
      <PageHeader product="GRAFFISOL" title="Technical Specifications" pageNum="9" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left — performance table */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 18px', gap: 14 }}>
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              Technical Performance by System Type
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ background: COLOR, color: '#fff' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600 }}>System Type</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>Power Gain</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>Temp ↓</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>Soiling ↓</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>Contact Angle</th>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600 }}>Notes</th>
                </tr>
              </thead>
              <tbody>
                {PERF_TABLE.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fffdf5' }}>
                    <td style={{ padding: '5px 8px', fontWeight: 600, color: '#374151' }}>{row.system}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: COLOR, fontWeight: 700 }}>{row.powerGain}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#374151' }}>{row.tempReduction}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#374151' }}>{row.soilingRed}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#6b7280' }}>{row.contactAngle}</td>
                    <td style={{ padding: '5px 8px', color: '#9ca3af', fontSize: 9 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              Regional Soiling Data (India)
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ background: '#f3f4f6' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>Region</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>Soiling Loss/yr</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: COLOR, borderBottom: '2px solid #e5e7eb' }}>GRAFFISOL Power Gain</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>Net Annual Gain</th>
                </tr>
              </thead>
              <tbody>
                {REGIONAL_SOILING.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                    <td style={{ padding: '5px 8px', fontWeight: 500, color: '#374151' }}>{row.region}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#6b7280' }}>{row.soilingLoss}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: COLOR, fontWeight: 700 }}>{row.coatGain}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center' }}>
                      <span style={{ background: `${COLOR}18`, color: COLOR, padding: '1px 7px', borderRadius: 10, fontSize: 9, fontWeight: 700 }}>{row.netGain}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right — application specs */}
        <div style={{
          width: '34%', borderLeft: '1px solid #e5e7eb',
          padding: '16px 16px', display: 'flex', flexDirection: 'column', gap: 14,
          background: '#fffdf5',
        }}>
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              Application Specifications
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {APP_SPECS.map((spec, i) => (
                <div key={i} style={{
                  display: 'flex', flexDirection: 'column', padding: '6px 0',
                  borderBottom: i < APP_SPECS.length - 1 ? '1px solid #e5e7eb' : 'none',
                }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: 0.5 }}>{spec.label}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10.5, color: '#111', fontWeight: 600, marginTop: 1 }}>{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            background: '#fff', border: `1px solid ${COLOR}30`, borderRadius: 4, padding: '10px 12px',
          }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 5 }}>
              Performance Mechanism
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {[
                { label: 'Anti-Reflective Layer', pct: 70, note: '+7–8% light absorption' },
                { label: 'Hydrophobic Barrier', pct: 30, note: '+3–4% soiling reduction gain' },
              ].map(item => (
                <div key={item.label}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 2 }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#374151' }}>{item.label}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af' }}>{item.note}</span>
                  </div>
                  <div style={{ height: 6, background: '#f3f4f6', borderRadius: 3 }}>
                    <div style={{ height: '100%', width: `${item.pct}%`, background: COLOR, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: COLOR, borderRadius: 4, padding: '12px', textAlign: 'center', color: '#fff' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, lineHeight: 1 }}>26+</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, opacity: 0.8, marginTop: 3 }}>
              Operational projects across<br />4 Indian states
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
