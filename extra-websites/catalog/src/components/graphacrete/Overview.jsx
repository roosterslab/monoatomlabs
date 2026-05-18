import React from 'react'
import PageHeader from '../shared/PageHeader'
import PageFooter from '../shared/PageFooter'

const COLOR = '#d97706'

const METRICS = [
  { value: '+25%', label: 'Compressive Strength', sub: 'vs Standard Mix' },
  { value: '13%', label: 'Cement Reduction', sub: 'Cost Saving' },
  { value: '+30%', label: 'Flexural Strength', sub: 'Beam Tests' },
  { value: 'M20–M70', label: 'Grade Range', sub: 'All Mix Designs' },
]

const DIFFERENTIATORS = [
  { title: 'NABL-Validated Strength Gains', desc: 'Compressive and flexural strength gains independently verified by accredited third-party laboratories across M20–M60 grades.' },
  { title: '13% Cement Reduction', desc: 'Graphene lattice filler effect allows proportional cement replacement, reducing material cost and CO₂ embodied energy simultaneously.' },
  { title: 'Drop-In Compatibility', desc: 'No changes to batching plant or equipment. GRAPHACRETE is dosed as a liquid admixture at 0.05–0.1% by cement weight.' },
]

function ConcreteSVG() {
  return (
    <svg width="200" height="110" viewBox="0 0 200 110" fill="none">
      {/* Building outline */}
      <rect x="20" y="65" width="160" height="35" rx="2" fill={COLOR} fillOpacity="0.08" stroke={COLOR} strokeWidth="1.5" />
      <rect x="40" y="40" width="120" height="25" rx="2" fill={COLOR} fillOpacity="0.1" stroke={COLOR} strokeWidth="1.5" />
      <rect x="60" y="20" width="80" height="20" rx="2" fill={COLOR} fillOpacity="0.12" stroke={COLOR} strokeWidth="1.5" />
      {/* Graphene lattice overlay */}
      <line x1="30" y1="72" x2="170" y2="72" stroke={COLOR} strokeWidth="0.5" strokeDasharray="4 3" strokeOpacity="0.4" />
      <line x1="30" y1="80" x2="170" y2="80" stroke={COLOR} strokeWidth="0.5" strokeDasharray="4 3" strokeOpacity="0.4" />
      <line x1="30" y1="88" x2="170" y2="88" stroke={COLOR} strokeWidth="0.5" strokeDasharray="4 3" strokeOpacity="0.4" />
      {/* Strength arrows */}
      <line x1="10" y1="75" x2="10" y2="30" stroke={COLOR} strokeWidth="1.5" markerEnd="url(#arrowG)" />
      <text x="4" y="105" fill={COLOR} fontSize="7" fontFamily="Outfit, sans-serif" textAnchor="middle" transform="rotate(-90, 4, 75)">STRENGTH</text>
      <defs>
        <marker id="arrowG" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill={COLOR} />
        </marker>
      </defs>
    </svg>
  )
}

export default function GraphacreteOverview() {
  return (
    <div className="page page-break" style={{ display: 'flex', flexDirection: 'column' }}>
      <PageHeader product="GRAPHACRETE" title="Product Overview" pageNum="5" color={COLOR} />

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
          background: '#fffdf7',
          gap: 16,
        }}>
          <div style={{
            background: `${COLOR}08`,
            border: `1px solid ${COLOR}25`,
            borderRadius: 8,
            padding: '20px 28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <ConcreteSVG />
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
            }}>GRAPHACRETE</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              color: '#6b7280',
              marginTop: 4,
              letterSpacing: 0.5,
            }}>Graphene-Enhanced Concrete Additive</div>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['NABL Validated', 'BIS Compatible', 'IS:456 Compliant'].map(badge => (
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
              GRAPHACRETE is a liquid graphene admixture engineered for ready-mix concrete and site-mixed batches
              across M20 to M70 grade applications. By dispersing exfoliated graphene nanoplatelets within the
              cement matrix, GRAPHACRETE creates bridging across micro-cracks, dramatically increasing both
              compressive and flexural performance. The additive is compatible with all standard cement types
              (OPC 43/53, PPC, PSC) and introduces no changes to batching or pumping procedures.
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
