import React from 'react'
import PageHeader from '../shared/PageHeader'
import PageFooter from '../shared/PageFooter'

const COLOR = '#64748b'

const METRICS = [
  { value: '9H+', label: 'Hardness', sub: 'ASTM D3363' },
  { value: '115°', label: 'Contact Angle', sub: 'Hydrophobic' },
  { value: '4+ Yrs', label: 'Durability', sub: 'Field Tested' },
  { value: '3–4μm', label: 'Film Thickness', sub: 'Uniform Coat' },
]

const DIFFERENTIATORS = [
  { title: 'NABL-Validated Performance', desc: 'All hardness and adhesion claims validated by accredited third-party labs under ASTM standards.' },
  { title: 'Graphene-Ceramic Matrix', desc: 'Proprietary GCM technology bonds at nanoscale — outperforming standard SiO₂ ceramic coatings.' },
  { title: 'Professional & DIY Ready', desc: 'Engineered for both detailing professionals and end-users; 3–4 hour cure, 24hr full bond.' },
]

function CarSVG() {
  return (
    <svg width="200" height="100" viewBox="0 0 200 100" fill="none" style={{ opacity: 0.9 }}>
      <rect x="2" y="60" width="196" height="30" rx="8" fill={COLOR} fillOpacity="0.08" stroke={COLOR} strokeWidth="1.5" />
      <path d="M30 60 Q38 35 70 28 Q100 22 130 28 Q162 35 170 60" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5" />
      <circle cx="50" cy="92" r="12" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5" />
      <circle cx="50" cy="92" r="6" fill={COLOR} fillOpacity="0.3" />
      <circle cx="150" cy="92" r="12" fill={COLOR} fillOpacity="0.15" stroke={COLOR} strokeWidth="1.5" />
      <circle cx="150" cy="92" r="6" fill={COLOR} fillOpacity="0.3" />
      <line x1="30" y1="60" x2="170" y2="60" stroke={COLOR} strokeWidth="0.5" strokeDasharray="3 3" />
      <path d="M75 28 L80 60 M125 28 L120 60" stroke={COLOR} strokeWidth="1" strokeDasharray="2 2" />
      {/* shine lines */}
      <line x1="60" y1="40" x2="100" y2="34" stroke={COLOR} strokeWidth="2" strokeOpacity="0.4" strokeLinecap="round" />
      <line x1="65" y1="47" x2="115" y2="40" stroke={COLOR} strokeWidth="1" strokeOpacity="0.25" strokeLinecap="round" />
    </svg>
  )
}

export default function CerapheneOverview() {
  return (
    <div className="page page-break" style={{ display: 'flex', flexDirection: 'column' }}>
      <PageHeader product="CERAPHENE" title="Product Overview" pageNum="2" color={COLOR} />

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
          background: '#fafafa',
          gap: 16,
        }}>
          <div style={{
            background: `${COLOR}08`,
            border: `1px solid ${COLOR}20`,
            borderRadius: 8,
            padding: '20px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <CarSVG />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 30,
              fontWeight: 700,
              color: COLOR,
              letterSpacing: 3,
              textTransform: 'uppercase',
              lineHeight: 1,
            }}>CERAPHENE</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              color: '#6b7280',
              marginTop: 4,
              letterSpacing: 0.5,
            }}>Graphene-Ceramic Automotive Coating</div>
          </div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 6,
            background: `${COLOR}10`,
            border: `1px solid ${COLOR}30`,
            borderRadius: 4,
            padding: '5px 12px',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: COLOR, display: 'inline-block' }} />
            <span style={{ fontSize: 10, color: COLOR, fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: 'Outfit, sans-serif' }}>
              NABL Validated
            </span>
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 24px', gap: 16 }}>
          {/* Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            {METRICS.map(m => (
              <div key={m.value} style={{
                background: '#fff',
                border: `1px solid #e5e7eb`,
                borderTop: `3px solid ${COLOR}`,
                borderRadius: 4,
                padding: '10px 12px',
                textAlign: 'center',
              }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{m.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, color: '#374151', marginTop: 3 }}>{m.label}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', marginTop: 2 }}>{m.sub}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>About the Product</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#374151', lineHeight: 1.65, margin: 0 }}>
              CERAPHENE is a next-generation ceramic car coating engineered with Monoatom Labs' proprietary
              Graphene-Ceramic Matrix (GCM) technology. By integrating single-layer graphene into a Si–O bond
              network, CERAPHENE achieves a pencil hardness of 9H+ while maintaining exceptional flexibility —
              eliminating the micro-cracking characteristic of conventional ceramic coatings. The result is a
              coating that protects paintwork against swirl marks, chemical etching, UV degradation, and thermal
              stress across a documented service life of 4+ years.
            </p>
          </div>

          {/* Differentiators */}
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
