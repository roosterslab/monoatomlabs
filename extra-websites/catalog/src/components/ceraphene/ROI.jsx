import React from 'react'
import PageHeader from '../shared/PageHeader'
import PageFooter from '../shared/PageFooter'

const COLOR = '#64748b'

const COST_COMPARISON = [
  {
    product: 'CERAPHENE',
    initialCost: '₹4,500–8,000',
    annualMaint: '₹500',
    yr4TCO: '₹6,500',
    protection: '4+ Years',
    highlight: true,
  },
  {
    product: 'Paint Protection Film',
    initialCost: '₹30,000–80,000',
    annualMaint: '₹2,000',
    yr4TCO: '₹38,000',
    protection: '5–7 Years',
    highlight: false,
  },
  {
    product: 'Ceramic Competitor (SiO₂)',
    initialCost: '₹8,000–20,000',
    annualMaint: '₹1,500',
    yr4TCO: '₹14,000',
    protection: '2–3 Years',
    highlight: false,
  },
  {
    product: 'Traditional Wax / Polish',
    initialCost: '₹800–2,000',
    annualMaint: '₹3,600',
    yr4TCO: '₹15,200',
    protection: '2–3 Months',
    highlight: false,
  },
]

const FLEET_ROI = [
  { scale: '1 Vehicle', cost: '₹6,000', savings4yr: '₹9,200', net: '₹3,200', roi: '53%' },
  { scale: '10 Vehicles', cost: '₹60,000', savings4yr: '₹92,000', net: '₹32,000', roi: '53%' },
  { scale: '50 Vehicles', cost: '₹2,50,000', savings4yr: '₹4,60,000', net: '₹2,10,000', roi: '84%' },
  { scale: '100 Vehicles', cost: '₹4,50,000', savings4yr: '₹9,20,000', net: '₹4,70,000', roi: '104%' },
]

const BAR_DATA = [
  { label: 'Yr 1', saving: 9, cost: 6 },
  { label: 'Yr 2', saving: 18, cost: 6.5 },
  { label: 'Yr 3', saving: 27, cost: 7 },
  { label: 'Yr 4', saving: 36, cost: 7.5 },
]
const maxVal = 40

export default function CerapheneROI() {
  return (
    <div className="page page-break" style={{ display: 'flex', flexDirection: 'column' }}>
      <PageHeader product="CERAPHENE" title="ROI & Economics" pageNum="4" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left — cost comparison */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 18px', gap: 14 }}>

          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              4-Year Total Cost of Ownership (Per Vehicle)
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ background: '#f3f4f6' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>Product</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>Initial Cost</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>Annual Maint.</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>4-Yr TCO</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>Duration</th>
                </tr>
              </thead>
              <tbody>
                {COST_COMPARISON.map((row, i) => (
                  <tr key={i} style={{
                    background: row.highlight ? `${COLOR}08` : i % 2 === 0 ? '#fff' : '#fafafa',
                    borderLeft: row.highlight ? `3px solid ${COLOR}` : '3px solid transparent',
                  }}>
                    <td style={{ padding: '6px 8px', color: row.highlight ? COLOR : '#374151', fontWeight: row.highlight ? 700 : 400 }}>{row.product}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'right', color: '#374151' }}>{row.initialCost}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'right', color: '#374151' }}>{row.annualMaint}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'right', color: row.highlight ? COLOR : '#374151', fontWeight: row.highlight ? 700 : 400 }}>{row.yr4TCO}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center', color: '#6b7280', fontSize: 9 }}>{row.protection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ marginTop: 6, fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', fontStyle: 'italic' }}>
              * TCO includes estimated reapplication costs. CERAPHENE fleet pricing available from 10 units.
            </div>
          </div>

          {/* CSS bar chart */}
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>
              Cumulative Savings vs Cost (Per 10-Vehicle Fleet, ₹ Thousands)
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 90, padding: '0 8px' }}>
              {BAR_DATA.map((d, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, flex: 1 }}>
                  <div style={{ display: 'flex', gap: 4, alignItems: 'flex-end', height: 72 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{ fontSize: 8, color: '#6b7280', fontFamily: 'Inter, sans-serif', marginBottom: 2 }}>₹{d.saving}k</span>
                      <div style={{ width: 24, height: (d.saving / maxVal) * 70, background: `${COLOR}70`, borderRadius: '2px 2px 0 0', minHeight: 4 }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <span style={{ fontSize: 8, color: '#9ca3af', fontFamily: 'Inter, sans-serif', marginBottom: 2 }}>₹{d.cost}k</span>
                      <div style={{ width: 24, height: (d.cost / maxVal) * 70, background: '#e5e7eb', borderRadius: '2px 2px 0 0', minHeight: 4 }} />
                    </div>
                  </div>
                  <span style={{ fontSize: 9, color: '#374151', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>{d.label}</span>
                </div>
              ))}
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', gap: 4, paddingBottom: 18 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 10, height: 10, background: `${COLOR}70`, borderRadius: 2 }} />
                  <span style={{ fontSize: 8, color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>Cumulative Savings</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <div style={{ width: 10, height: 10, background: '#e5e7eb', borderRadius: 2 }} />
                  <span style={{ fontSize: 8, color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>Cumulative Cost</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — fleet ROI table */}
        <div style={{
          width: '38%', borderLeft: '1px solid #e5e7eb',
          padding: '16px 16px', display: 'flex', flexDirection: 'column', gap: 14,
          background: '#fafafa',
        }}>
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              Fleet ROI by Scale (4-Year)
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ background: COLOR, color: '#fff' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600 }}>Fleet</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600 }}>Investment</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600 }}>4-Yr Savings</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600 }}>Net Gain</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>ROI</th>
                </tr>
              </thead>
              <tbody>
                {FLEET_ROI.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f3f4f6' }}>
                    <td style={{ padding: '6px 8px', color: '#374151', fontWeight: 600 }}>{row.scale}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'right', color: '#6b7280' }}>{row.cost}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'right', color: '#374151' }}>{row.savings4yr}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'right', color: COLOR, fontWeight: 700 }}>{row.net}</td>
                    <td style={{ padding: '6px 8px', textAlign: 'center' }}>
                      <span style={{
                        background: `${COLOR}15`, color: COLOR, padding: '2px 6px',
                        borderRadius: 10, fontSize: 9, fontWeight: 700,
                      }}>{row.roi}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ background: '#fff', border: `1px solid ${COLOR}30`, borderRadius: 4, padding: '12px 14px' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 12, fontWeight: 700, color: COLOR, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>
              Key Value Drivers
            </div>
            {[
              'Reduced paint correction & polishing costs',
              'Extended repaint cycle (avg. 2× longer)',
              'Higher vehicle resale value (est. 8–12%)',
              'Reduced downtime from paint maintenance',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: 5 }}>
                <span style={{ color: COLOR, fontSize: 12, lineHeight: '14px', flexShrink: 0 }}>›</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#374151', lineHeight: 1.4 }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{
            background: `${COLOR}`, borderRadius: 4, padding: '12px 14px', textAlign: 'center',
          }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff', lineHeight: 1 }}>₹3,200+</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.75)', marginTop: 4 }}>
              Net savings per vehicle over 4 years vs wax+polish cycle
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
