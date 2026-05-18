import React from 'react'

const C = '#f59e0b'

const apps = [
  {
    sector: 'Utility-Scale Solar',
    icon: '🌞',
    tag: '50 MW · Rajasthan',
    annualGain: '+6,500 MWh',
    revenue: '₹3.25 Cr/yr',
    payback: '14 months',
    desc: '50MW desert installation with high dust loading. Graffisol reduced cleaning cycles from monthly to quarterly while increasing annual generation by 6,500 MWh.',
  },
  {
    sector: 'Commercial Rooftop',
    icon: '🏢',
    tag: '300 kW · Bangalore',
    annualGain: '+310 MWh',
    revenue: '₹3.1 L/yr',
    payback: '18 months',
    desc: 'Industrial rooftop with urban pollution. Temperature reduction of 5.5°C improved panel efficiency. Annual revenue increase of ₹3.1L with 18-month payback.',
  },
  {
    sector: 'Residential Arrays',
    icon: '🏠',
    tag: '200 Homes · Mumbai',
    annualGain: '+11%',
    revenue: '₹12k/home/yr',
    payback: '16 months',
    desc: '200-home community solar installation in coastal environment. Salt spray + humidity soiling addressed by hydrophobic coating. ₹12,000 net gain per home per year.',
  },
  {
    sector: 'Floating Solar',
    icon: '💧',
    tag: '3 MW · Kerala',
    annualGain: '+350 MWh',
    revenue: '₹31.2 L/yr',
    payback: '12 months',
    desc: '3MW floating installation on reservoir. High humidity and water vapor soiling resolved. Unique cooling from water proximity + Graffisol temperature benefit combined for 13.5% total gain.',
  },
]

export default function SolApplications() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Case Studies</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>APPLICATION SECTORS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4 solar installation types — real deployment data from India projects</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        {apps.map((a, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 22, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ fontSize: 28 }}>{a.icon}</div>
              <div>
                <div style={{ display: 'inline-block', background: C + '22', border: `1px solid ${C}33`, borderRadius: 4, padding: '2px 8px', marginBottom: 4 }}>
                  <span style={{ fontSize: 10, color: C, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>{a.tag}</span>
                </div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: '#fff', letterSpacing: 0.5 }}>{a.sector}</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              <div style={{ textAlign: 'center', padding: '10px 6px', background: '#111', borderRadius: 8, border: '1px solid #1a1a1a' }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 17, fontWeight: 700, color: C }}>{a.annualGain}</div>
                <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 }}>Annual Gain</div>
              </div>
              <div style={{ textAlign: 'center', padding: '10px 6px', background: '#111', borderRadius: 8, border: '1px solid #1a1a1a' }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 17, fontWeight: 700, color: '#4ade80' }}>{a.revenue}</div>
                <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 }}>Revenue</div>
              </div>
              <div style={{ textAlign: 'center', padding: '10px 6px', background: '#111', borderRadius: 8, border: '1px solid #1a1a1a' }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 17, fontWeight: 700, color: '#60a5fa' }}>{a.payback}</div>
                <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 }}>Payback</div>
              </div>
            </div>
            <div style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.5 }}>{a.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · INSTALLATION CASE STUDIES</div>
    </div>
  )
}
