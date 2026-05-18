import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, Cell } from 'recharts'
import { TrendingUp, Wallet, ArrowRight, ShieldCheck, Factory, Sun, Zap, PiggyBank } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#f59e0b'

const SYSTEM_SCALE = [
  { size: '10 kW', annualGen: '14,600 kWh', gainKWh: '1,606 kWh', coatCost: '₹2,000', annualRevenue: '₹6,422', payback: '< 4 months', roi20yr: '₹1.26 L' },
  { size: '100 kW', annualGen: '1,46,000 kWh', gainKWh: '16,060 kWh', coatCost: '₹15,000', annualRevenue: '₹64,240', payback: '< 3 months', roi20yr: '₹12.6 L' },
  { size: '1 MW', annualGen: '14,60,000 kWh', gainKWh: '1,60,600 kWh', coatCost: '₹1.2 L', annualRevenue: '₹6.4 L', payback: '< 3 weeks', roi20yr: '₹1.26 Cr' },
]

const BREAK_EVEN = [
  { system: '10 kW', investYr: '₹2,000', revenueYr: '₹6,422', paybackMonths: '3.7 months', yr5Net: '₹30,110' },
  { system: '100 kW', investYr: '₹15,000', revenueYr: '₹64,240', paybackMonths: '2.8 months', yr5Net: '₹3,06,200' },
  { system: '1 MW', investYr: '₹1,20,000', revenueYr: '₹6,42,400', paybackMonths: '2.2 months', yr5Net: '₹31,02,000' },
]

const RECHARTS_DATA = [
  { year: 'Yr 1', val: 6.4, label: '₹6k' },
  { year: 'Yr 5', val: 32.1, label: '₹32k' },
  { year: 'Yr 10', val: 64.2, label: '₹64k' },
  { year: 'Yr 20', val: 126.0, label: '₹1.26L' },
]

export default function GraffisolROI() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/graffisol_lifecycle_site_cleaning.png')" }}>
      <PageHeader product="GRAFFISOL" title="ROI & Economics" pageNum="10" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '24px', gap: 24, background: '#ffffff', borderRight: '1px solid #e5e7eb' }}>

          {/* System scale cards instead of table */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <TrendingUp size={20} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase' }}>
                ROI by System Size <span style={{ fontFamily: 'Inter', fontSize: 10, color: '#6b7280', textTransform: 'none', letterSpacing: 0, fontWeight: 500 }}>(₹4.40/kWh avg tariff)</span>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {SYSTEM_SCALE.map((row, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '12px 16px', gap: 16, boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
                  
                  <div style={{ display: 'flex', flexDirection: 'column', width: 70, flexShrink: 0 }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 18, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{row.size}</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', marginTop: 4 }}>System Size</span>
                  </div>

                  <ArrowRight size={16} color="#cbd5e1" />

                  <div style={{ display: 'flex', gap: 16, flex: 1 }}>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#6b7280' }}>Coating Cost</span>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: '#374151', marginTop: 2 }}>{row.coatCost}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#6b7280' }}>Revenue Gain/yr</span>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: '#059669', marginTop: 2 }}>{row.annualRevenue}</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#6b7280' }}>Payback</span>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: COLOR, background: `${COLOR}15`, padding: '2px 8px', borderRadius: 12, display: 'inline-flex', alignSelf: 'flex-start', marginTop: 2 }}>
                        {row.payback}
                      </span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', minWidth: 80, alignItems: 'flex-end' }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#6b7280' }}>20-yr Net</span>
                      <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 16, fontWeight: 700, color: '#111827', marginTop: 1 }}>{row.roi20yr}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Break-even table */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
               <Wallet size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase' }}>
                Operational Break-Even Analysis
              </div>
            </div>
            
            <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'Inter, sans-serif', fontSize: 10 }}>
                <thead>
                  <tr style={{ background: '#f8fafc', borderBottom: '1px solid #e5e7eb' }}>
                    <th style={{ padding: '10px 14px', textAlign: 'left', fontWeight: 600, color: '#6b7280' }}>System</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right', fontWeight: 600, color: '#6b7280' }}>Annual Invest</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right', fontWeight: 600, color: '#6b7280' }}>Revenue Gain</th>
                    <th style={{ padding: '10px 14px', textAlign: 'center', fontWeight: 600, color: '#6b7280' }}>Payback Time</th>
                    <th style={{ padding: '10px 14px', textAlign: 'right', fontWeight: 600, color: '#6b7280' }}>Yr 5 Net Gain</th>
                  </tr>
                </thead>
                <tbody>
                  {BREAK_EVEN.map((row, i) => (
                    <tr key={i} style={{ borderBottom: i < BREAK_EVEN.length - 1 ? '1px solid #f1f5f9' : 'none' }}>
                      <td style={{ padding: '12px 14px', fontWeight: 700, color: '#374151' }}>{row.system}</td>
                      <td style={{ padding: '12px 14px', textAlign: 'right', color: '#6b7280' }}>{row.investYr}</td>
                      <td style={{ padding: '12px 14px', textAlign: 'right', color: '#111827', fontWeight: 600 }}>{row.revenueYr}</td>
                      <td style={{ padding: '12px 14px', textAlign: 'center' }}>
                        <span style={{ color: COLOR, fontWeight: 700 }}>{row.paybackMonths}</span>
                      </td>
                      <td style={{ padding: '12px 14px', textAlign: 'right', color: '#059669', fontWeight: 700 }}>{row.yr5Net}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right — 20yr Recharts */}
        <div style={{
          width: '38%',
          padding: '24px', display: 'flex', flexDirection: 'column', gap: 20,
          background: '#f8fafc',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
              <PiggyBank size={20} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase' }}>
                Cumulative Gain (10 kW System)
              </div>
            </div>
            
            <div style={{ height: 200, width: '100%', background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '16px 16px 0 0', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={RECHARTS_DATA} margin={{ top: 15, right: 10, left: -25, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="year" tick={{fontSize: 9, fill: '#6b7280', fontFamily: 'Inter'}} axisLine={false} tickLine={false} />
                  <YAxis tick={{fontSize: 9, fill: '#6b7280', fontFamily: 'Inter'}} axisLine={false} tickLine={false} tickFormatter={(val) => `₹${val}k`} />
                  <RechartsTooltip 
                    cursor={{fill: '#f8fafc'}}
                    contentStyle={{ borderRadius: '8px', border: '1px solid #e5e7eb', fontSize: '11px', padding: '6px 10px', fontFamily: 'Inter', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}
                    formatter={(value) => [`₹${(value * 1000).toLocaleString()}`, 'Cumulative Gain']}
                  />
                  <Bar dataKey="val" radius={[4, 4, 0, 0]}>
                    {RECHARTS_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === RECHARTS_DATA.length - 1 ? COLOR : `${COLOR}70`} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div style={{ background: `linear-gradient(135deg, ${COLOR}, #d97706)`, borderRadius: 12, padding: '20px', color: '#fff', boxShadow: '0 10px 15px -3px rgba(245, 158, 11, 0.3)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
              Key ROI Facts
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                 { icon: Zap, text: 'Payback in under 4 months (10 kW)' },
                 { icon: TrendingUp, text: '20-year cumulative gain exceeds 220× cost' },
                 { icon: ShieldCheck, text: 'Compatible with all solar panel warranties' },
                 { icon: Factory, text: '26+ projects — verified field performance' },
              ].map((fact, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <fact.icon size={14} color="#fff" />
                  </div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, opacity: 0.95, fontWeight: 500, lineHeight: 1.4 }}>{fact.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
