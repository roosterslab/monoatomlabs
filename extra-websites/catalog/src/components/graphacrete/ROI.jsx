import React from 'react'
import PageHeader from '../shared/PageHeader'
import PageFooter from '../shared/PageFooter'

const COLOR = '#d97706'

const M3_ECONOMICS = [
  { item: 'GRAPHACRETE additive cost', value: '+₹18', note: 'Per m³ at 0.08% dosage' },
  { item: 'Cement savings (13%)', value: '–₹68', note: '~50 kg × ₹8/kg saved' },
  { item: 'Admixture adjustment', value: '+₹5', note: 'Minor SP adjustment' },
  { item: 'Net benefit per m³', value: '–₹45', note: 'Cost saving', highlight: true },
]

const SCALE_TABLE = [
  { volume: '1,000 m³/yr', additiveCost: '₹18,000', cementSavings: '₹68,000', netBenefit: '₹50,000', co2Saved: '2.6 t CO₂' },
  { volume: '10,000 m³/yr', additiveCost: '₹1.8 L', cementSavings: '₹6.8 L', netBenefit: '₹5.0 L', co2Saved: '26 t CO₂' },
  { volume: '1,00,000 m³/yr', additiveCost: '₹18 L', cementSavings: '₹68 L', netBenefit: '₹50 L', co2Saved: '260 t CO₂' },
]

const CO2_TABLE = [
  { cement: 'Standard M25 (1000 m³)', co2: '84 t', note: 'OPC 53, 380 kg/m³' },
  { cement: 'GRAPHACRETE M25 (1000 m³)', co2: '57 t', note: 'OPC 53, 330 kg/m³ (–13%)' },
  { cement: 'CO₂ Reduction', co2: '–27 t', note: '32% emissions reduction', highlight: true },
]

const BAR_SCALES = [
  { label: '1k m³', benefit: 50, cost: 18 },
  { label: '10k m³', benefit: 500, cost: 180 },
  { label: '100k m³', benefit: 5000, cost: 1800 },
]

export default function GraphacreteROI() {
  const maxBenefit = 5000

  return (
    <div className="page page-break" style={{ display: 'flex', flexDirection: 'column' }}>
      <PageHeader product="GRAPHACRETE" title="ROI & Economics" pageNum="7" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 18px', gap: 14 }}>

          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              Per-m³ Economics (M25 Mix)
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid #e5e7eb', borderRadius: 4, overflow: 'hidden' }}>
              {M3_ECONOMICS.map((row, i) => (
                <div key={i} style={{
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                  padding: '8px 12px',
                  background: row.highlight ? `${COLOR}10` : i % 2 === 0 ? '#fff' : '#fafafa',
                  borderBottom: i < M3_ECONOMICS.length - 1 ? '1px solid #e5e7eb' : 'none',
                  borderLeft: row.highlight ? `3px solid ${COLOR}` : '3px solid transparent',
                }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: row.highlight ? COLOR : '#374151', fontWeight: row.highlight ? 700 : 400 }}>{row.item}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af' }}>{row.note}</span>
                    <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 16, fontWeight: 700, color: row.highlight ? COLOR : '#374151', minWidth: 50, textAlign: 'right' }}>{row.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scale table */}
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              Annual Net Benefit by Production Volume
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ background: COLOR, color: '#fff' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600 }}>Volume (Annual)</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600 }}>Additive Cost</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600 }}>Cement Savings</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600 }}>Net Benefit</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>CO₂ Saved</th>
                </tr>
              </thead>
              <tbody>
                {SCALE_TABLE.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fffbf0' }}>
                    <td style={{ padding: '6px 8px', fontWeight: 600, color: '#374151' }}>{row.volume}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'right', color: '#6b7280' }}>{row.additiveCost}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'right', color: '#374151' }}>{row.cementSavings}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'right', color: COLOR, fontWeight: 700 }}>{row.netBenefit}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center' }}>
                      <span style={{ background: '#d1fae5', color: '#065f46', padding: '1px 7px', borderRadius: 10, fontSize: 9, fontWeight: 600 }}>{row.co2Saved}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right */}
        <div style={{
          width: '36%', borderLeft: '1px solid #e5e7eb',
          padding: '16px 16px', display: 'flex', flexDirection: 'column', gap: 14,
          background: '#fffdf7',
        }}>
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              CO₂ Emissions Reduction
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 9.5 }}>
              <thead>
                <tr style={{ background: '#f3f4f6' }}>
                  <th style={{ padding: '5px 7px', textAlign: 'left', fontWeight: 600, color: '#374151', borderBottom: '1px solid #e5e7eb' }}>Scenario</th>
                  <th style={{ padding: '5px 7px', textAlign: 'right', fontWeight: 600, color: '#374151', borderBottom: '1px solid #e5e7eb' }}>CO₂</th>
                </tr>
              </thead>
              <tbody>
                {CO2_TABLE.map((row, i) => (
                  <tr key={i} style={{
                    background: row.highlight ? '#d1fae580' : i % 2 === 0 ? '#fff' : '#fafafa',
                    borderLeft: row.highlight ? '3px solid #10b981' : '3px solid transparent',
                  }}>
                    <td style={{ padding: '5px 7px', color: row.highlight ? '#065f46' : '#374151', fontWeight: row.highlight ? 700 : 400 }}>
                      {row.cement}
                      <div style={{ fontSize: 8, color: '#9ca3af', fontWeight: 400 }}>{row.note}</div>
                    </td>
                    <td style={{ padding: '5px 7px', textAlign: 'right', color: row.highlight ? '#065f46' : '#374151', fontWeight: row.highlight ? 700 : 400 }}>{row.co2}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: COLOR, borderRadius: 4, padding: '14px', textAlign: 'center', color: '#fff' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8, opacity: 0.8 }}>
              Value Summary (per 10,000 m³)
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              {[
                { val: '₹5 L', label: 'Net Savings' },
                { val: '26 t', label: 'CO₂ Reduction' },
                { val: '13%', label: 'Less Cement' },
              ].map(item => (
                <div key={item.label} style={{ textAlign: 'center' }}>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, lineHeight: 1 }}>{item.val}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, opacity: 0.75, marginTop: 3 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', border: `1px solid #e5e7eb`, borderRadius: 4, padding: '10px 12px' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 11, fontWeight: 700, color: '#374151', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
              Certifications
            </div>
            {['NABL-Accredited Third-Party Testing', 'IS:456 Structural Compliance', 'BIS Admixture Standards (IS:9103)', 'ESG Carbon-Reduction Verified'].map((c, i) => (
              <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 4 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: COLOR, display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#374151' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
