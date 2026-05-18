import React from 'react'
import PageHeader from '../shared/PageHeader'
import PageFooter from '../shared/PageFooter'

const COLOR = '#06b6d4'

const METRICS = [
  { value: '+30%', label: 'Tensile Strength', sub: 'vs Base HDPE' },
  { value: '20×', label: 'Wear Resistance', sub: 'Improvement' },
  { value: '0.5–2%', label: 'Dosage Range', sub: 'By Weight' },
  { value: '₹19k/t', label: 'Additive Cost', sub: 'Per Ton HDPE' },
]

const DIFFERENTIATORS = [
  { title: 'Drop-In Masterbatch Format', desc: 'Pre-dispersed graphene in HDPE carrier resin — no equipment changes, no special handling. Direct feed to hopper like any standard masterbatch.' },
  { title: 'Multi-Property Enhancement', desc: 'Simultaneously improves tensile, flexural, impact, elongation, and barrier properties — unlike fillers that trade off one property for another.' },
  { title: 'Processing Versatility', desc: 'Compatible with extrusion, injection molding, blow molding, and film blowing — covers the full spectrum of HDPE processing routes.' },
]

function PolymerSVG() {
  return (
    <svg width="200" height="110" viewBox="0 0 200 110" fill="none">
      {/* Polymer chain backbone */}
      <path d="M10 55 Q30 30 50 55 Q70 80 90 55 Q110 30 130 55 Q150 80 170 55 Q190 30 200 55"
        stroke={COLOR} strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Side groups */}
      {[30, 70, 110, 150].map(x => (
        <g key={x}>
          <circle cx={x} cy={x < 90 || x > 110 ? (x < 90 ? 42 : x > 120 ? 42 : 68) : 68} r="5" fill={COLOR} fillOpacity="0.2" stroke={COLOR} strokeWidth="1" />
          <text x={x} y={(x < 90 ? 42 : x > 120 ? 42 : 68) + 0.5} textAnchor="middle" fill={COLOR} fontSize="5" fontFamily="Outfit, sans-serif" dominantBaseline="middle">C</text>
        </g>
      ))}
      {/* Graphene hex nodes */}
      {[50, 90, 130].map(x => (
        <polygon
          key={x}
          points={`${x},${55 - 10} ${x + 9},${55 - 5} ${x + 9},${55 + 5} ${x},${55 + 10} ${x - 9},${55 + 5} ${x - 9},${55 - 5}`}
          fill={COLOR}
          fillOpacity="0.15"
          stroke={COLOR}
          strokeWidth="1.5"
        />
      ))}
      {/* End-cap circles */}
      <circle cx="10" cy="55" r="4" fill={COLOR} fillOpacity="0.4" stroke={COLOR} strokeWidth="1" />
      <circle cx="195" cy="55" r="4" fill={COLOR} fillOpacity="0.4" stroke={COLOR} strokeWidth="1" />
      {/* Force arrows showing reinforcement */}
      <line x1="80" y1="10" x2="80" y2="30" stroke={COLOR} strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#arrowC)" />
      <line x1="120" y1="10" x2="120" y2="30" stroke={COLOR} strokeWidth="1.5" strokeOpacity="0.5" markerEnd="url(#arrowC)" />
      <defs>
        <marker id="arrowC" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={COLOR} fillOpacity="0.5" />
        </marker>
      </defs>
    </svg>
  )
}

export default function HdgpeOverview() {
  return (
    <div className="page page-break" style={{ display: 'flex', flexDirection: 'column' }}>
      <PageHeader product="HD-G-PE" title="Product Overview" pageNum="11" color={COLOR} />

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
          background: '#f0fdff',
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
            <PolymerSVG />
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
            }}>HD-G-PE</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              color: '#6b7280',
              marginTop: 4,
              letterSpacing: 0.5,
            }}>Graphene-Enhanced HDPE Masterbatch</div>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['Masterbatch Format', 'Multi-Property', 'Drop-In'].map(badge => (
              <div key={badge} style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                background: `${COLOR}10`, border: `1px solid ${COLOR}30`,
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
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{m.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 600, color: '#374151', marginTop: 3 }}>{m.label}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', marginTop: 2 }}>{m.sub}</div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 14, fontWeight: 700, color: '#111', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>About the Product</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#374151', lineHeight: 1.65, margin: 0 }}>
              HD-G-PE is a pre-dispersed graphene masterbatch designed for HDPE compounders, pipe manufacturers,
              film producers, and injection molders. The masterbatch format eliminates dispersion challenges —
              graphene is uniformly distributed in an HDPE carrier at concentrations optimized for 0.5–2%
              let-down ratios. The result is a dramatic, simultaneous improvement across tensile strength (+30%),
              flexural modulus, impact resistance, elongation at break, and moisture barrier properties, without
              affecting processability or melt flow.
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
