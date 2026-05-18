import React from 'react'
import PageHeader from '../shared/PageHeader'
import PageFooter from '../shared/PageFooter'

const COLOR = '#f59e0b'

const METRICS = [
  { value: '+10–12%', label: 'Power Output Gain', sub: 'vs Uncoated Panel' },
  { value: '5–6°C', label: 'Temp Reduction', sub: 'Module Temperature' },
  { value: '30–40%', label: 'Soiling Reduction', sub: 'Anti-Dust Effect' },
  { value: '>98°', label: 'Contact Angle', sub: 'Self-Cleaning' },
]

const DIFFERENTIATORS = [
  { title: '26+ Operational Projects', desc: 'Deployed across rooftop, ground-mount, and agri-solar installations in Rajasthan, Gujarat, AP, and Telangana.' },
  { title: 'Dual Performance Mechanism', desc: 'Anti-reflective nano-layer increases light absorption; hydrophobic matrix repels dust — delivering compound performance gains.' },
  { title: '20-Year Panel Compatibility', desc: 'Chemically inert coating does not affect panel warranties. Annual reapplication maintains gains throughout the system lifetime.' },
]

function SolarSVG() {
  return (
    <svg width="210" height="115" viewBox="0 0 210 115" fill="none">
      {/* Panel body */}
      <rect x="15" y="20" width="180" height="80" rx="3" fill={COLOR} fillOpacity="0.06" stroke={COLOR} strokeWidth="1.5" />
      {/* Cell grid */}
      {[0, 1, 2, 3, 4].map(col =>
        [0, 1, 2].map(row => (
          <rect
            key={`${col}-${row}`}
            x={18 + col * 36}
            y={23 + row * 26}
            width={33}
            height={23}
            rx="1"
            fill={COLOR}
            fillOpacity="0.08"
            stroke={COLOR}
            strokeWidth="0.5"
            strokeOpacity="0.4"
          />
        ))
      )}
      {/* Sun */}
      <circle cx="190" cy="18" r="10" fill={COLOR} fillOpacity="0.7" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x1 = 190 + 13 * Math.cos(rad)
        const y1 = 18 + 13 * Math.sin(rad)
        const x2 = 190 + 17 * Math.cos(rad)
        const y2 = 18 + 17 * Math.sin(rad)
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={COLOR} strokeWidth="1.5" strokeOpacity="0.6" />
      })}
      {/* Light rays hitting panel */}
      <line x1="180" y1="27" x2="120" y2="22" stroke={COLOR} strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 2" />
      <line x1="185" y1="32" x2="150" y2="44" stroke={COLOR} strokeWidth="0.8" strokeOpacity="0.3" strokeDasharray="3 2" />
      {/* Coating shimmer */}
      <line x1="20" y1="24" x2="190" y2="24" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
    </svg>
  )
}

export default function GraffisolOverview() {
  return (
    <div className="page page-break" style={{ display: 'flex', flexDirection: 'column' }}>
      <PageHeader product="GRAFFISOL" title="Product Overview" pageNum="8" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left column */}
        <div style={{
          width: '42%',
          borderRight: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 28px',
          background: '#fffdf5',
          gap: 16,
        }}>
          <div style={{
            background: `${COLOR}08`,
            border: `1px solid ${COLOR}25`,
            borderRadius: 8,
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <SolarSVG />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 28,
              fontWeight: 700,
              color: COLOR,
              letterSpacing: 3,
              textTransform: 'uppercase',
              lineHeight: 1,
            }}>GRAFFISOL</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              color: '#6b7280',
              marginTop: 4,
              letterSpacing: 0.5,
            }}>Graphene Solar Enhancement Coating</div>
          </div>
          <div style={{
            display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center',
          }}>
            {['26+ Projects', 'Any Panel Brand', 'Annual Apply'].map(badge => (
              <div key={badge} style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                background: `${COLOR}12`, border: `1px solid ${COLOR}35`,
                borderRadius: 4, padding: '3px 8px',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: COLOR, display: 'inline-block' }} />
                <span style={{ fontSize: 9, color: COLOR, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', fontFamily: 'Outfit, sans-serif' }}>{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 24px', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {METRICS.map(m => (
              <div key={m.label} style={{
                background: '#fff',
                border: `1px solid #e5e7eb`,
                borderTop: `3px solid ${COLOR}`,
                borderRadius: 4,
                padding: '10px 12px',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{m.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, color: '#374151', marginTop: 3 }}>{m.label}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', marginTop: 2 }}>{m.sub}</div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>About the Product</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#374151', lineHeight: 1.65, margin: 0 }}>
              GRAFFISOL is a graphene-based nano-coating applied to the surface of photovoltaic solar panels to
              simultaneously increase light absorption and repel dust and moisture. The coating works through two
              mechanisms: an anti-reflective graphene layer that increases photon capture by 10–12%, and a
              hydrophobic surface matrix that prevents soiling accumulation — reducing cleaning frequency by
              30–40%. With 26+ field-deployed projects across high-irradiance Indian climates, GRAFFISOL delivers
              documented annual generation gains of 10–12% per system.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>Key Differentiators</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {DIFFERENTIATORS.map((d, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 20, height: 20, borderRadius: '50%',
                    background: `${COLOR}15`, border: `1.5px solid ${COLOR}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0, marginTop: 1,
                  }}>
                    <span style={{ fontSize: 9, fontWeight: 700, color: COLOR, fontFamily: 'Outfit, sans-serif' }}>{i + 1}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: '#111' }}>{d.title}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#6b7280', lineHeight: 1.5, marginTop: 1 }}>{d.desc}</div>
                  </div>
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
