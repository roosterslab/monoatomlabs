import React from 'react'
import { TrendingUp, BarChart2, Factory, ArrowUpRight } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#06b6d4'

const APP_ROI = [
  {
    application: 'HDPE Pressure Pipes',
    grossBenefit: '₹8,500/t',
    additiveCost: '₹950/t',
    netProfit: '₹7,550/t',
    notes: 'Thinner wall possible — material savings',
    highlight: false,
  },
  {
    application: 'Agricultural Films',
    grossBenefit: '₹6,200/t',
    additiveCost: '₹950/t',
    netProfit: '₹5,250/t',
    notes: 'Better puncture resistance, longer life',
    highlight: false,
  },
  {
    application: 'Injection Molded Parts',
    grossBenefit: '₹12,000/t',
    additiveCost: '₹950/t',
    netProfit: '₹11,050/t',
    notes: 'Higher value-add components, premium pricing',
    highlight: true,
  },
  {
    application: 'Industrial Containers',
    grossBenefit: '₹7,800/t',
    additiveCost: '₹950/t',
    netProfit: '₹6,850/t',
    notes: 'Impact resistance reduces field failures',
    highlight: false,
  },
  {
    application: 'Blown Films (Packaging)',
    grossBenefit: '₹5,500/t',
    additiveCost: '₹950/t',
    netProfit: '₹4,550/t',
    notes: 'Enhanced barrier property, premium tier',
    highlight: false,
  },
]

const VOLUME_SCALE = [
  { volume: '100 t/yr', additiveCost: '₹95,000', totalNetBenefit: '₹7,55,000', roi: '695%', notes: 'Pipes application' },
  { volume: '500 t/yr', additiveCost: '₹4,75,000', totalNetBenefit: '₹37,75,000', roi: '695%', notes: 'Pipes application' },
  { volume: '1,000 t/yr', additiveCost: '₹9,50,000', totalNetBenefit: '₹75,50,000', roi: '695%', notes: 'Volume pricing applicable' },
  { volume: '5,000 t/yr', additiveCost: '₹47,50,000', totalNetBenefit: '₹3.78 Cr', roi: '695%+', notes: 'Preferred partner pricing' },
]

const FORM_ADVANTAGES = [
  { form: 'Extrusion — Pipes', benefit: 'Thinner wall (–15% material), higher pressure class → premium pricing' },
  { form: 'Injection Molding', benefit: 'Shorter cycle (–8%), stronger parts, reduced rejects, higher margin SKUs' },
  { form: 'Blow Molding', benefit: 'Lighter bottles with same drop performance — packaging cost reduction' },
  { form: 'Film Blowing', benefit: 'Downgauging possible (–10% film thickness), better seal strength' },
]

export default function HdgpeROI() {
  const maxBar = 11050

  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/hd-g-pe-studio.png')" }}>
      <PageHeader product="HD-G-PE" title="ROI & Economics" pageNum="13" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '16px 18px', gap: 14 }}>

          {/* Application ROI */}
          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <TrendingUp size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase' }}>
                Net Profit by Application (per ton HDPE processed)
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Application</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600, color: '#374151' }}>Gross Benefit</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600, color: '#374151' }}>Additive Cost</th>
                  <th style={{ padding: '6px 8px', textAlign: 'right', fontWeight: 600, color: '#374151' }}>Net Profit/ton</th>
                  <th style={{ padding: '6px 8px', textAlign: 'left', fontWeight: 600, color: '#374151' }}>Driver</th>
                </tr>
              </thead>
              <tbody>
                {APP_ROI.map((row, i) => (
                  <tr key={i} style={{
                    borderBottom: i < APP_ROI.length - 1 ? '1px solid #f1f5f9' : 'none',
                    borderLeft: row.highlight ? `3px solid ${COLOR}` : '3px solid transparent',
                    background: row.highlight ? `${COLOR}10` : 'transparent',
                  }}>
                    <td style={{ padding: '5px 8px', color: row.highlight ? COLOR : '#374151', fontWeight: row.highlight ? 700 : 500 }}>{row.application}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#6b7280' }}>{row.grossBenefit}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'right', color: '#6b7280' }}>{row.additiveCost}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'right', color: COLOR, fontWeight: 700 }}>{row.netProfit}</td>
                    <td style={{ padding: '5px 8px', color: '#9ca3af', fontSize: 8.5 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Volume scale */}
          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '14px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <BarChart2 size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase' }}>
                Annual Net Benefit by Production Volume (Pipes)
              </div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #e5e7eb' }}>
                  {['Volume/yr', 'HD-G-PE Cost', 'Net Benefit', 'ROI', 'Notes'].map((h, i) => (
                    <th key={i} style={{ padding: '5px 8px', textAlign: i < 2 ? 'left' : i < 4 ? 'right' : 'center', fontWeight: 600, color: '#374151' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {VOLUME_SCALE.map((row, i) => (
                  <tr key={i} style={{ borderBottom: i < VOLUME_SCALE.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                    <td style={{ padding: '5px 8px', fontWeight: 700, color: '#374151' }}>{row.volume}</td>
                    <td style={{ padding: '5px 8px', color: '#6b7280' }}>{row.additiveCost}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'right', color: COLOR, fontWeight: 700 }}>{row.totalNetBenefit}</td>
                    <td style={{ padding: '5px 8px', textAlign: 'right' }}>
                      <span style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)', color: '#6ee7b7', padding: '3px 8px', borderRadius: 12, fontSize: 9, fontWeight: 700 }}>{row.roi}</span>
                    </td>
                    <td style={{ padding: '5px 8px', textAlign: 'center', color: '#9ca3af', fontSize: 8.5 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right */}
        <div style={{
          width: '34%', borderLeft: '1px solid #e5e7eb',
          padding: '16px 16px', display: 'flex', flexDirection: 'column', gap: 14,
          background: '#f8fafc',
        }}>
          {/* Processing advantages */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Factory size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase' }}>
                Processing Form Advantages
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
              {FORM_ADVANTAGES.map((row, i) => (
                <div key={i} style={{
                  padding: '8px 10px',
                  background: '#ffffff',
                  borderBottom: i < FORM_ADVANTAGES.length - 1 ? '1px solid #f1f5f9' : 'none',
                  borderLeft: `3px solid ${COLOR}`,
                }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, marginBottom: 2 }}>{row.form}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', lineHeight: 1.4 }}>{row.benefit}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Net profit bar chart */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <ArrowUpRight size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase' }}>
                Net Profit / Ton by Application
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
              {APP_ROI.map((row, i) => {
                const val = parseInt(row.netProfit.replace(/[^\d]/g, '')) || 0
                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 90, fontFamily: 'Inter, sans-serif', fontSize: 8, color: row.highlight ? COLOR : '#6b7280', fontWeight: row.highlight ? 700 : 400, flexShrink: 0 }}>
                      {row.application.split(' ').slice(0, 2).join(' ')}
                    </div>
                    <div style={{ flex: 1, height: 8, background: '#e5e7eb', borderRadius: 2 }}>
                      <div style={{ height: '100%', width: `${(val / maxBar) * 100}%`, background: row.highlight ? COLOR : `${COLOR}55`, borderRadius: 2 }} />
                    </div>
                    <div style={{ width: 55, fontFamily: 'Outfit, sans-serif', fontSize: 8, color: row.highlight ? COLOR : '#6b7280', fontWeight: 700, textAlign: 'right' }}>{row.netProfit}</div>
                  </div>
                )
              })}
            </div>
          </div>

          <div style={{ background: COLOR, borderRadius: 12, padding: '12px', textAlign: 'center', color: '#fff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, letterSpacing: 2, textTransform: 'uppercase', opacity: 0.85, marginBottom: 6 }}>
              Additive Price
            </div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 26, fontWeight: 700, lineHeight: 1 }}>₹19,000</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, opacity: 0.75, marginTop: 3 }}>per ton of masterbatch<br />(volume pricing available)</div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
