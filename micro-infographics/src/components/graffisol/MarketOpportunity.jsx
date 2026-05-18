import React from 'react'

const C = '#f59e0b'

const industries = [
  { name: 'Utility-Scale Solar (10MW+)',     size: '₹20,000 Cr', potential: '₹400–800 Cr',  cagr: '25%', width: 100 },
  { name: 'Commercial Rooftop (C&I Solar)',  size: '₹10,000 Cr', potential: '₹200–400 Cr',  cagr: '18%', width: 50 },
  { name: 'Floating Solar (Emerging)',       size: '₹3,000 Cr',  potential: '₹60–120 Cr',   cagr: '30%', width: 15 },
]

const growth = [
  { title: 'Solar Capacity Target', val: '500 GW', sub: 'India goal by 2030' },
  { title: 'Annual Soiling Loss', val: '15–25%', sub: 'Energy lost to dust' },
  { title: 'New Capacity/Year', val: '15–20 GW', sub: 'Added annually in India' },
]

export default function SolMarketOpportunity() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAFFISOL · Market</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>MARKET OPPORTUNITY</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>India solar panel coating market — TAM, segments, growth trajectory</div>
      </div>

      {/* TAM Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Total Addressable Market', val: '₹35,000 Cr', color: C },
          { label: 'Market Growth Rate',        val: '20% CAGR',   color: '#60a5fa' },
          { label: 'Target Customers',          val: '5,000+',     color: '#4ade80' },
          { label: 'Market Share Target',       val: '1–3%',       color: '#f59e0b' },
        ].map((m, i) => (
          <div key={i} style={{ textAlign: 'center', padding: 18, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12 }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: m.color }}>{m.val}</div>
            <div style={{ color: '#555', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1, marginTop: 6, lineHeight: 1.4 }}>{m.label}</div>
          </div>
        ))}
      </div>

      {/* Industry segments */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 24, marginBottom: 16 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 20 }}>Solar Segments · Market Size</div>
        {industries.map((ind, i) => (
          <div key={i} style={{ marginBottom: 16 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
              <span style={{ color: '#ccc', fontSize: 13, fontWeight: 600 }}>{ind.name}</span>
              <div style={{ display: 'flex', gap: 16 }}>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, color: C }}>{ind.size}</span>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, color: '#4ade80' }}>{ind.potential}</span>
                <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, color: '#60a5fa' }}>{ind.cagr}</span>
              </div>
            </div>
            <div style={{ height: 8, background: '#111', borderRadius: 4, overflow: 'hidden' }}>
              <div style={{ width: `${ind.width}%`, height: '100%', background: `linear-gradient(90deg, ${C}, ${C}88)`, borderRadius: 4 }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Growth metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
        {growth.map((g, i) => (
          <div key={i} style={{ padding: 16, background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 10, textAlign: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: '#fff' }}>{g.val}</div>
            <div style={{ color: C, fontSize: 11, fontWeight: 600, marginTop: 4 }}>{g.title}</div>
            <div style={{ color: '#475569', fontSize: 11, marginTop: 2 }}>{g.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAFFISOL · MARKET ANALYSIS</div>
    </div>
  )
}
