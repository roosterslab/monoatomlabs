import React, { useState } from 'react'

const C = '#64748B'
const BLUE = '#1E40AF'
const BLUE_LIGHT = '#3B82F6'

const STYLES = [
  { id: 'blue-stripe', name: 'Blue Stripe (ref style)' },
  { id: 'dark-minimal', name: 'Dark Minimal' },
  { id: 'price-hero', name: 'Price Hero' },
]

export default function PremiumPricingPanel() {
  const [style, setStyle] = useState('blue-stripe')

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Marketing Ideas — Value Proposition</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Premium Performance. Smarter Pricing.</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          Direct pricing transparency on the box. "Up to 60% cost advantage" with ₹5,000 badge. Three panel concept explorations.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {STYLES.map(s => (
          <button key={s.id} onClick={() => setStyle(s.id)} style={{
            padding: '7px 14px', borderRadius: 6,
            border: `1px solid ${style === s.id ? C : '#1f1f1f'}`,
            background: style === s.id ? '#111' : 'transparent',
            color: style === s.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12,
          }}>{s.name}</button>
        ))}
      </div>

      {style === 'blue-stripe' && (
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Panel mockup — back panel section */}
          <div style={{ width: 420, background: '#030303', border: '1px solid #0d0d0d', overflow: 'hidden', flexShrink: 0 }}>
            {/* Blue stripe accent */}
            <div style={{ height: 4, background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT})` }} />

            <div style={{ padding: 28 }}>
              {/* Headline */}
              <div style={{ marginBottom: 20 }}>
                <div style={{ color: 'white', fontSize: 24, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.06em', lineHeight: 1.1 }}>
                  PREMIUM PERFORMANCE.<br />SMARTER PRICING.
                </div>
              </div>

              {/* Blue accent box with claim */}
              <div style={{ background: `${BLUE}20`, border: `1px solid ${BLUE}40`, borderLeft: `3px solid ${BLUE_LIGHT}`, padding: '14px 16px', marginBottom: 20 }}>
                <div style={{ color: BLUE_LIGHT, fontSize: 14, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', marginBottom: 4 }}>Up to 60% cost advantage</div>
                <div style={{ color: '#555', fontSize: 11, lineHeight: 1.5 }}>vs premium alternatives from international brands.</div>
                <div style={{ color: '#444', fontSize: 11, marginTop: 4 }}>Direct-to-installer pricing model.</div>
              </div>

              {/* Price comparison */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ color: '#555', fontSize: 11, lineHeight: 1.6 }}>
                    ₹5,000 vs ₹15,000+ for comparable<br />ceramic coatings from global brands
                  </div>
                  <div style={{ color: '#333', fontSize: 10, marginTop: 8 }}>
                    Coverage: 1 full vehicle · 50ml kit
                  </div>
                </div>
                {/* Price badge circle */}
                <div style={{
                  width: 80, height: 80, borderRadius: '50%',
                  border: `2px solid ${BLUE}`,
                  background: `${BLUE}15`,
                  display: 'flex', flexDirection: 'column',
                  alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <div style={{ color: 'white', fontSize: 20, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>₹5,000</div>
                  <div style={{ color: BLUE_LIGHT, fontSize: 8, letterSpacing: '0.1em', marginTop: 3 }}>per vehicle</div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ color: '#333', fontSize: 10, letterSpacing: '0.2em', marginBottom: 12 }}>COPY NOTES</div>
            {[
              { label: '"Premium Performance. Smarter Pricing."', note: 'Addresses the objection upfront — "is this as good as Gtechniq?" Yes, and cheaper. Confidence signal.' },
              { label: '"Up to 60% cost advantage"', note: 'Percentage framing more powerful than absolute price. 60% savings is emotionally compelling.' },
              { label: 'Price circle badge', note: '₹5,000 in a circle = "fair price" visual. Round shape signals completeness, value.' },
              { label: 'Blue accent', note: 'Blue stripe ties to "trust" and "technology". Breaks the all-dark monotony. Draws eye to the value message.' },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid #0a0a0a' }}>
                <div style={{ color: C, fontSize: 11, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, marginBottom: 3 }}>{item.label}</div>
                <div style={{ color: '#444', fontSize: 11, lineHeight: 1.5 }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {style === 'dark-minimal' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 36, maxWidth: 500 }}>
          <div style={{ color: '#2a2a2a', fontSize: 9, letterSpacing: '0.3em', marginBottom: 20 }}>PRICING INTELLIGENCE</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 0, marginBottom: 32 }}>
            {[
              { label: 'CERAPHENE', price: '₹5,000', sub: 'Direct to you', highlight: true },
              { label: 'International\nbrands', price: '₹12,000+', sub: 'Import markup', highlight: false },
              { label: 'Professional\ninstaller', price: '₹18,000+', sub: 'Labor included', highlight: false },
            ].map((item, i) => (
              <div key={i} style={{
                padding: '16px 12px', textAlign: 'center',
                borderRight: i < 2 ? '1px solid #0d0d0d' : 'none',
                background: item.highlight ? '#080808' : 'transparent',
              }}>
                <div style={{ color: item.highlight ? C : '#333', fontSize: 9, letterSpacing: '0.15em', marginBottom: 8, whiteSpace: 'pre-line' }}>{item.label}</div>
                <div style={{ color: item.highlight ? 'white' : '#2a2a2a', fontSize: 20, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', marginBottom: 4 }}>{item.price}</div>
                <div style={{ color: item.highlight ? '#444' : '#1a1a1a', fontSize: 9 }}>{item.sub}</div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #0d0d0d', paddingTop: 20 }}>
            <div style={{ color: 'white', fontSize: 18, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', marginBottom: 8 }}>
              PREMIUM PERFORMANCE.<br />SMARTER PRICING.
            </div>
            <div style={{ color: '#444', fontSize: 12, lineHeight: 1.6 }}>
              Direct manufacturing to you. No import margins. No middlemen. The same graphene-ceramic technology at a fraction of the global brand price.
            </div>
          </div>
        </div>
      )}

      {style === 'price-hero' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, overflow: 'hidden', maxWidth: 560 }}>
          {/* Price hero section */}
          <div style={{ padding: 36, textAlign: 'center', borderBottom: '1px solid #0d0d0d', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 50%, ${BLUE}10 0%, transparent 70%)`, pointerEvents: 'none' }} />
            <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.3em', marginBottom: 12 }}>ONE APPLICATION · ONE VEHICLE</div>
            <div style={{ color: 'white', fontSize: 56, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1, marginBottom: 4 }}>₹5,000</div>
            <div style={{ color: C, fontSize: 12, marginBottom: 16 }}>= ₹1,250/yr protection cost over 4 years</div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 16 }}>
              {[
                { label: 'vs wax', val: '80% savings/yr' },
                { label: 'vs intl brands', val: '60% savings' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '6px 14px', border: `1px solid ${C}30`, borderRadius: 4 }}>
                  <div style={{ color: C, fontSize: 12, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700 }}>{item.val}</div>
                  <div style={{ color: '#333', fontSize: 9 }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ padding: '16px 36px' }}>
            <div style={{ color: '#333', fontSize: 11, textAlign: 'center', lineHeight: 1.6 }}>
              Manufactured in India · Direct-to-installer pricing · iHub Gujarat
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
