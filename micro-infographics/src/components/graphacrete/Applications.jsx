import React from 'react'

const C = '#d97706'

const apps = [
  {
    sector: 'Commercial Buildings',
    icon: '🏢',
    tag: 'M50–M60 Grade',
    location: 'Mumbai',
    project: '12-storey commercial tower',
    savings: '₹51.6L',
    cementSaved: '18%',
    strengthGain: '+42%',
    benefit: 'Higher grade achieved with less cement. Structural weight reduced enabling 2 additional floors at same cost.',
  },
  {
    sector: 'Residential Construction',
    icon: '🏘️',
    tag: 'M30–M40 Grade',
    location: 'Pune',
    project: '200-unit residential complex',
    savings: '₹36.5L',
    cementSaved: '15%',
    strengthGain: '+38%',
    benefit: 'M30 mix achieving M40 performance. Cement reduction and improved durability lower total construction cost.',
  },
  {
    sector: 'Infrastructure Projects',
    icon: '🌉',
    tag: 'M50–M70 Grade',
    location: 'Gujarat',
    project: 'Highway bridge & road project',
    savings: '₹1.07 Cr',
    cementSaved: '20%',
    strengthGain: '+50%',
    benefit: 'Ultra-high strength for bridge decks. Extended maintenance cycle from 5 to 12 years. Significant lifecycle cost reduction.',
  },
  {
    sector: 'Industrial Facilities',
    icon: '🏭',
    tag: 'M40–M50 Grade',
    location: 'Chennai',
    project: 'Industrial warehouse & slab',
    savings: '₹64.5L',
    cementSaved: '16%',
    strengthGain: '+45%',
    benefit: 'Heavy-load floor slabs with superior crack resistance. Reduced maintenance downtime. Superior chemical and abrasion resistance.',
  },
]

export default function GraApplications() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>GRAPHACRETE · Case Studies</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>APPLICATION SECTORS</div>
        <div style={{ color: '#475569', fontSize: 13, marginTop: 4 }}>4 construction scenarios — real project data from India deployments</div>
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
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <span style={{ color: '#555', fontSize: 11 }}>📍</span>
              <span style={{ color: '#6b7280', fontSize: 11 }}>{a.location} — {a.project}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
              <div style={{ textAlign: 'center', padding: '10px 6px', background: '#111', borderRadius: 8, border: '1px solid #1a1a1a' }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: '#4ade80' }}>{a.savings}</div>
                <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 }}>Total Saved</div>
              </div>
              <div style={{ textAlign: 'center', padding: '10px 6px', background: '#111', borderRadius: 8, border: '1px solid #1a1a1a' }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: C }}>{a.cementSaved}</div>
                <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 }}>Cement Cut</div>
              </div>
              <div style={{ textAlign: 'center', padding: '10px 6px', background: '#111', borderRadius: 8, border: '1px solid #1a1a1a' }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: '#60a5fa' }}>{a.strengthGain}</div>
                <div style={{ fontSize: 9, color: '#555', textTransform: 'uppercase', letterSpacing: 0.5, marginTop: 2 }}>Strength</div>
              </div>
            </div>
            <div style={{ color: '#6b7280', fontSize: 12, lineHeight: 1.5 }}>{a.benefit}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · GRAPHACRETE · APPLICATION CASE STUDIES</div>
    </div>
  )
}
