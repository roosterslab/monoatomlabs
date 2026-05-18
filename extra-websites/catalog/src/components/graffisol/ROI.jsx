import React from 'react'
import PageHeader from '../shared/PageHeader'
import PageFooter from '../shared/PageFooter'

const COLOR = '#f59e0b'

const SYSTEM_SCALE = [
  { size: '10 kW', annualGen: '14,600 kWh', gainKWh: '1,606 kWh', coatCost: '₹2,000', annualRevenue: '₹6,422', payback: '< 4 months', roi20yr: '₹1,26,000' },
  { size: '100 kW', annualGen: '1,46,000 kWh', gainKWh: '16,060 kWh', coatCost: '₹15,000', annualRevenue: '₹64,240', payback: '< 3 months', roi20yr: '₹12,60,000' },
  { size: '1 MW', annualGen: '14,60,000 kWh', gainKWh: '1,60,600 kWh', coatCost: '₹1,20,000', annualRevenue: '₹6,42,400', payback: '< 3 weeks', roi20yr: '₹1.26 Cr' },
]

const BREAK_EVEN = [
  { system: '10 kW', investYr: '₹2,000', revenueYr: '₹6,422', paybackMonths: '3.7 months', yr5Net: '₹30,110' },
  { system: '100 kW', investYr: '₹15,000', revenueYr: '₹64,240', paybackMonths: '2.8 months', yr5Net: '₹3,06,200' },
  { system: '1 MW', investYr: '₹1,20,000', revenueYr: '₹6,42,400', paybackMonths: '2.2 months', yr5Net: '₹31,02,000' },
]

const BAR_YEARS = [1, 5, 10, 20]
const GAIN_10KW = [6422, 32110, 64220, 126000]

export default function GraffisolROI() {
  const maxVal = 130000

  return (
    <div className="page page-break" style={{ display: 'flex', flexDirection: 'column' }}>
      <PageHeader product="GRAFFISOL" title="ROI & Economics" pageNum="10" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 18px', gap: 14 }}>

          {/* System scale table */}
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              ROI by System Size (₹4.40/kWh avg tariff)
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ background: COLOR, color: '#fff' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600 }}>System</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600 }}>Annual Gen</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600 }}>Gain (kWh/yr)</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600 }}>Coat Cost</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600 }}>Revenue Gain/yr</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600 }}>Payback</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600 }}>20-yr Net</th>
                </tr>
              </thead>
              <tbody>
                {SYSTEM_SCALE.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fffdf5' }}>
                    <td style={{ padding: '5px 8px', fontWeight: 700, color: COLOR }}>{row.size}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#6b7280' }}>{row.annualGen}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#374151', fontWeight: 600 }}>{row.gainKWh}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#6b7280' }}>{row.coatCost}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'right', color: COLOR, fontWeight: 700 }}>{row.annualRevenue}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center' }}>
                      <span style={{ background: '#d1fae5', color: '#065f46', padding: '1px 7px', borderRadius: 10, fontSize: 9, fontWeight: 700 }}>{row.payback}</span>
                    </td>
                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#374151', fontWeight: 700 }}>{row.roi20yr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Break-even table */}
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>
              Break-Even Analysis
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ background: '#f3f4f6' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>System</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>Annual Investment</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>Annual Revenue Gain</th>
                  <th style={{ padding: '6px 8px', textAlign: 'center', fontWeight: 600, color: '#374151', borderBottom: '2px solid #e5e7eb' }}>Payback Period</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600, color: COLOR, borderBottom: '2px solid #e5e7eb' }}>5-Year Net Gain</th>
                </tr>
              </thead>
              <tbody>
                {BREAK_EVEN.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#fafafa' }}>
                    <td style={{ padding: '5px 8px', fontWeight: 600, color: '#374151' }}>{row.system}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#6b7280' }}>{row.investYr}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#374151' }}>{row.revenueYr}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'center' }}>
                      <span style={{ background: `${COLOR}18`, color: COLOR, padding: '1px 7px', borderRadius: 10, fontSize: 9, fontWeight: 700 }}>{row.paybackMonths}</span>
                    </td>
                    <td style={{ padding: '5px 8px', textAlign: 'right', color: COLOR, fontWeight: 700 }}>{row.yr5Net}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right — 20yr bar chart */}
        <div style={{
          width: '34%', borderLeft: '1px solid #e5e7eb',
          padding: '16px 16px', display: 'flex', flexDirection: 'column', gap: 14,
          background: '#fffdf5',
        }}>
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>
              20-Year Cumulative Gain (10 kW, ₹)
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 14, height: 120, padding: '0 4px' }}>
              {BAR_YEARS.map((yr, i) => (
                <div key={yr} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1, gap: 3 }}>
                  <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 8.5, color: COLOR, fontWeight: 700 }}>
                    {GAIN_10KW[i] >= 100000 ? `₹${(GAIN_10KW[i] / 100000).toFixed(2)}L` : `₹${(GAIN_10KW[i] / 1000).toFixed(0)}k`}
                  </span>
                  <div style={{
                    width: '100%',
                    height: (GAIN_10KW[i] / maxVal) * 100,
                    background: i === 3 ? COLOR : `${COLOR}60`,
                    borderRadius: '3px 3px 0 0',
                    minHeight: 8,
                  }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#374151', fontWeight: 600 }}>Yr {yr}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: COLOR, borderRadius: 4, padding: '14px', color: '#fff' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 8, opacity: 0.85 }}>
              Key ROI Facts
            </div>
            {[
              'Payback in under 4 months (10 kW)',
              '20-year cumulative gain exceeds 220× cost',
              'Compatible with all solar panel warranties',
              '26+ projects — verified field performance',
            ].map((fact, i) => (
              <div key={i} style={{ display: 'flex', gap: 6, alignItems: 'flex-start', marginBottom: i < 3 ? 5 : 0 }}>
                <span style={{ fontSize: 10, opacity: 0.7, flexShrink: 0 }}>›</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, opacity: 0.9, lineHeight: 1.4 }}>{fact}</span>
              </div>
            ))}
          </div>

          <div style={{ background: '#fff', border: `1px solid #e5e7eb`, borderRadius: 4, padding: '10px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 11, fontWeight: 700, color: '#374151', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 4 }}>
              Pricing
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#6b7280' }}>
              Contact for volume pricing.<br />
              Typical: ₹8–12 / panel (annual application)
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
