import React from 'react'

const C = '#64748b'

const stats = [
  { value: '70+',    label: 'Projects Deployed' },
  { value: '5,000+', label: 'Vehicles Protected' },
  { value: '13',     label: 'Cities Active' },
  { value: '46+',    label: 'Partner Studios' },
]

const cities = [
  { city: 'Delhi NCR',  count: 18, note: 'Luxury & Fleet hub' },
  { city: 'Mumbai',     count: 15, note: 'Exotic car capital' },
  { city: 'Bangalore',  count: 12, note: 'Tech fleet cluster' },
  { city: 'Pune',       count: 10, note: 'Auto industry base' },
  { city: 'Hyderabad',  count: 8,  note: 'High-net-worth segment' },
  { city: 'Chennai',    count: 7,  note: 'Fleet & industrial' },
]

const international = [
  { city: 'Dubai, UAE', count: 4, note: 'Supercars + high heat market' },
]

export default function CerImpactMap() {
  const maxCount = Math.max(...cities.map(c => c.count))
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Deployment</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>IMPACT MAP</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>Active deployments across India and international markets — 13 cities, 70+ projects</div>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 24 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: '#0d0d0d', border: `1px solid ${C}33`, borderRadius: 10, padding: '16px 12px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 30, fontWeight: 700, color: C, lineHeight: 1 }}>{s.value}</div>
            <div style={{ color: '#6b7280', fontSize: 11, marginTop: 4, textTransform: 'uppercase', letterSpacing: 1 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* City deployment bars */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20, marginBottom: 16 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>India — Domestic Deployments</div>
        {cities.map((row, i) => (
          <div key={i} style={{ marginBottom: 14 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
              <span style={{ color: '#ccc', fontSize: 13, fontWeight: 600 }}>{row.city}</span>
              <span style={{ color: '#475569', fontSize: 11 }}>{row.note}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ flex: 1, background: '#1a1a1a', borderRadius: 4, height: 8 }}>
                <div style={{ width: `${(row.count / maxCount) * 100}%`, height: 8, background: C, borderRadius: 4 }} />
              </div>
              <span style={{ fontFamily: 'Rajdhani, sans-serif', color: C, fontSize: 14, fontWeight: 700, width: 28, textAlign: 'right' }}>{row.count}</span>
            </div>
          </div>
        ))}
      </div>

      {/* International */}
      <div style={{ background: '#0d0d0d', border: '1px solid #1f1f1f', borderRadius: 12, padding: 20 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 16 }}>International Markets</div>
        {international.map((row, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < international.length - 1 ? '1px solid #141414' : 'none' }}>
            <div>
              <span style={{ color: '#ccc', fontSize: 13, fontWeight: 600 }}>{row.city}</span>
              <span style={{ color: '#475569', fontSize: 12, marginLeft: 12 }}>{row.note}</span>
            </div>
            <span style={{ fontFamily: 'Rajdhani, sans-serif', color: C, fontSize: 18, fontWeight: 700 }}>{row.count} projects</span>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · DEPLOYMENT MAP</div>
    </div>
  )
}
