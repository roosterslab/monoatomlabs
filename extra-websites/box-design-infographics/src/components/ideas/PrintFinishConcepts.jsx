import React, { useState } from 'react'

const C = '#64748B'

const FINISHES = [
  {
    id: 'spot-uv',
    name: 'Spot UV',
    tagline: 'Shine where it matters',
    desc: 'Gloss UV varnish applied selectively to specific elements — logo, product name, key specs. Rest of box stays matte. Creates tactile + visual contrast.',
    recommendation: 'Apply to: CERAPHENE wordmark, 9H+ badge, product name. Rest in soft-touch matte.',
    cost: '₹₹₹',
    impact: 'HIGH',
  },
  {
    id: 'soft-touch',
    name: 'Soft-Touch Matte',
    tagline: 'Premium tactile experience',
    desc: 'Velvet-feel matte laminate on the entire box. The most premium unboxing feel at accessible cost. Industry standard for luxury automotive products.',
    recommendation: 'Full box coverage. Combine with spot UV on wordmark for contrast.',
    cost: '₹₹',
    impact: 'HIGH',
  },
  {
    id: 'embossing',
    name: 'Emboss / Deboss',
    tagline: 'Feel the brand',
    desc: 'Raised (emboss) or recessed (deboss) areas on the box. Logo, "9H+" or a molecular hex pattern pressed into the board. Adds depth without colour.',
    recommendation: 'Deboss the CERAPHENE wordmark or a hexagonal graphene lattice on the front panel.',
    cost: '₹₹₹₹',
    impact: 'MEDIUM',
  },
  {
    id: 'foiling',
    name: 'Cold Foil / Metallic',
    tagline: 'Shelf presence',
    desc: 'Metallic foil applied to key elements. Silver or gunmetal for CERAPHENE brand aesthetic. Catches light from shelf angles — immediate visual impact.',
    recommendation: 'Silver/gunmetal foil on "9H+" badge and brand name. Dark matte box body.',
    cost: '₹₹₹₹₹',
    impact: 'HIGH',
  },
  {
    id: 'matte-gloss-split',
    name: 'Matte + Gloss Split',
    tagline: 'Contrast-driven premium',
    desc: 'Dual finish — matte substrate with gloss overlay on specific panels or zones. No foil required. Creates strong visual separation between information zones.',
    recommendation: 'Front panel = gloss. Back/side panels = matte. Simple, cost-effective premium.',
    cost: '₹₹',
    impact: 'HIGH',
  },
  {
    id: 'textured-board',
    name: 'Textured Board Stock',
    tagline: 'Material as message',
    desc: 'Use linen, felt, or micro-texture board instead of smooth. The texture communicates quality before the consumer reads a word. Works beautifully with dark inks.',
    recommendation: 'Full box in dark linen-texture board. Pair with foil on key elements.',
    cost: '₹₹₹',
    impact: 'MEDIUM',
  },
]

const COMBOS = [
  {
    name: 'Premium Entry',
    cost: '₹₹',
    finishes: ['soft-touch', 'matte-gloss-split'],
    desc: 'Soft-touch matte laminate + spot gloss on front panel elements. Affordable premium finish.',
  },
  {
    name: 'Luxury Retail',
    cost: '₹₹₹₹',
    finishes: ['soft-touch', 'spot-uv', 'embossing'],
    desc: 'Soft-touch + spot UV on wordmark + debossed graphene hex pattern. The full premium package.',
  },
  {
    name: 'Maximum Impact',
    cost: '₹₹₹₹₹',
    finishes: ['soft-touch', 'foiling', 'embossing'],
    desc: 'Soft-touch + gunmetal foil on 9H+ badge + debossed CERAPHENE. Unboxing experience that commands attention.',
  },
]

export default function PrintFinishConcepts() {
  const [active, setActive] = useState('spot-uv')
  const [view, setView] = useState('finishes')

  const current = FINISHES.find(f => f.id === active)

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Brand Widgets — Print</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Print Finish Concepts</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          Premium print finishes transform a box from packaging into an experience. Research shows tactile differentiation dramatically increases perceived value — and CERAPHENE's dark aesthetic pairs perfectly with these finishes.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
        {[{ id: 'finishes', label: 'Individual Finishes' }, { id: 'combos', label: 'Recommended Combos' }].map(v => (
          <button key={v.id} onClick={() => setView(v.id)} style={{
            padding: '7px 14px', borderRadius: 6,
            border: `1px solid ${view === v.id ? C : '#1f1f1f'}`,
            background: view === v.id ? '#111' : 'transparent',
            color: view === v.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12, fontWeight: view === v.id ? 700 : 400,
          }}>
            {v.label}
          </button>
        ))}
      </div>

      {view === 'finishes' && (
        <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 20 }}>
          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {FINISHES.map(f => (
              <button key={f.id} onClick={() => setActive(f.id)} style={{
                padding: '10px 14px', borderRadius: 6, textAlign: 'left',
                border: `1px solid ${active === f.id ? C + '50' : '#0d0d0d'}`,
                background: active === f.id ? '#0a0a0a' : 'transparent',
                cursor: 'pointer',
              }}>
                <div style={{ color: active === f.id ? 'white' : '#555', fontSize: 12, fontWeight: active === f.id ? 700 : 400, fontFamily: 'Rajdhani, sans-serif' }}>{f.name}</div>
                <div style={{ color: '#333', fontSize: 10, marginTop: 2 }}>{f.cost} · {f.impact}</div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          {current && (
            <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 28 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div>
                  <div style={{ color: C, fontSize: 10, letterSpacing: '0.2em', marginBottom: 6 }}>FINISH TECHNIQUE</div>
                  <div style={{ color: 'white', fontSize: 20, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{current.name}</div>
                  <div style={{ color: '#555', fontSize: 12, marginTop: 4 }}>{current.tagline}</div>
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                  <div style={{ padding: '4px 10px', border: '1px solid #111', borderRadius: 4, color: '#555', fontSize: 11 }}>{current.cost}</div>
                  <div style={{ padding: '4px 10px', border: `1px solid ${C}30`, borderRadius: 4, color: C, fontSize: 11 }}>{current.impact}</div>
                </div>
              </div>

              <div style={{ color: '#555', fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>{current.desc}</div>

              <div style={{ padding: 16, background: '#0a0a0a', border: '1px solid #111', borderRadius: 6, marginBottom: 20 }}>
                <div style={{ color: C, fontSize: 9, letterSpacing: '0.15em', marginBottom: 8 }}>CERAPHENE APPLICATION</div>
                <div style={{ color: '#666', fontSize: 12, lineHeight: 1.6 }}>{current.recommendation}</div>
              </div>

              {/* Visual simulation */}
              <div style={{ border: '1px solid #0d0d0d', borderRadius: 6, overflow: 'hidden' }}>
                <div style={{ padding: '8px 14px', background: '#0a0a0a', borderBottom: '1px solid #0d0d0d' }}>
                  <span style={{ color: '#333', fontSize: 10, letterSpacing: '0.15em' }}>SIMULATED VISUAL</span>
                </div>
                <div style={{ padding: 24, background: '#030303' }}>
                  {current.id === 'spot-uv' && (
                    <div>
                      <div style={{ color: '#222', fontSize: 9, marginBottom: 10 }}>Matte surface</div>
                      <div style={{ color: 'white', fontSize: 36, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.08em', textShadow: '0 0 20px rgba(100,116,139,0.5)', filter: 'brightness(1.4)' }}>CERAPHENE</div>
                      <div style={{ color: '#1a1a1a', fontSize: 9, marginTop: 8 }}>↑ Spot UV — gloss vs matte contrast</div>
                    </div>
                  )}
                  {current.id === 'soft-touch' && (
                    <div style={{ padding: 20, background: '#060606', border: '1px solid #0a0a0a', borderRadius: 4 }}>
                      <div style={{ color: '#222', fontSize: 9, letterSpacing: '0.3em', marginBottom: 8 }}>GRAPHENE CERAMIC COATING</div>
                      <div style={{ color: 'white', fontSize: 28, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>CERAPHENE</div>
                      <div style={{ color: '#1a1a1a', fontSize: 9, marginTop: 6 }}>No shine. Pure tactile luxury.</div>
                    </div>
                  )}
                  {current.id === 'embossing' && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                      {Array.from({ length: 35 }, (_, i) => (
                        <div key={i} style={{
                          width: 22, height: 22,
                          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                          background: i % 7 === 0 ? '#0f0f0f' : '#080808',
                          boxShadow: 'inset 1px 1px 2px rgba(0,0,0,0.9)',
                        }} />
                      ))}
                      <div style={{ width: '100%', color: '#1a1a1a', fontSize: 9, marginTop: 8 }}>Debossed graphene hex lattice pattern</div>
                    </div>
                  )}
                  {current.id === 'foiling' && (
                    <div>
                      <div style={{ fontSize: 48, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', background: 'linear-gradient(135deg, #555 0%, #aaa 30%, #666 50%, #999 70%, #777 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>9H+</div>
                      <div style={{ fontSize: 18, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', background: 'linear-gradient(135deg, #444 0%, #888 40%, #555 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>CERAPHENE</div>
                      <div style={{ color: '#1a1a1a', fontSize: 9, marginTop: 8 }}>Metallic foil simulation — catches shelf light</div>
                    </div>
                  )}
                  {current.id === 'matte-gloss-split' && (
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
                      <div style={{ padding: 16, background: '#0a0a0a', filter: 'brightness(1.5)' }}>
                        <div style={{ color: '#888', fontSize: 9, marginBottom: 8 }}>GLOSS PANEL (front)</div>
                        <div style={{ color: 'white', fontSize: 18, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>CERAPHENE</div>
                      </div>
                      <div style={{ padding: 16, background: '#050505' }}>
                        <div style={{ color: '#444', fontSize: 9, marginBottom: 8 }}>MATTE PANEL (back)</div>
                        <div style={{ color: '#555', fontSize: 11, lineHeight: 1.5 }}>Graphene ceramic coating description text here.</div>
                      </div>
                    </div>
                  )}
                  {current.id === 'textured-board' && (
                    <div style={{ padding: 20, background: 'repeating-linear-gradient(45deg, #060606 0px, #060606 2px, #080808 2px, #080808 4px)', borderRadius: 4 }}>
                      <div style={{ color: '#2a2a2a', fontSize: 9, letterSpacing: '0.3em', marginBottom: 8 }}>GRAPHENE CERAMIC COATING</div>
                      <div style={{ color: 'white', fontSize: 24, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>CERAPHENE</div>
                      <div style={{ color: '#1a1a1a', fontSize: 9, marginTop: 6 }}>Linen/micro-texture board simulation</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {view === 'combos' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {COMBOS.map((combo, i) => (
            <div key={i} style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                <div>
                  <div style={{ color: C, fontSize: 10, letterSpacing: '0.15em', marginBottom: 4 }}>COMBO {i + 1}</div>
                  <div style={{ color: 'white', fontSize: 16, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif' }}>{combo.name}</div>
                </div>
                <div style={{ color: '#555', fontSize: 14, fontFamily: 'Rajdhani, sans-serif' }}>{combo.cost}</div>
              </div>
              <div style={{ color: '#555', fontSize: 12, lineHeight: 1.6, marginBottom: 16 }}>{combo.desc}</div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {combo.finishes.map(fid => {
                  const f = FINISHES.find(x => x.id === fid)
                  return f ? (
                    <div key={fid} style={{ padding: '5px 12px', background: '#0a0a0a', border: `1px solid ${C}20`, borderRadius: 4, color: C, fontSize: 11, fontFamily: 'Rajdhani, sans-serif' }}>
                      {f.name}
                    </div>
                  ) : null
                })}
              </div>
            </div>
          ))}
          <div style={{ padding: 16, background: '#080808', border: '1px solid #111', borderRadius: 6 }}>
            <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.2em', marginBottom: 8 }}>PRINT PARTNER NOTE</div>
            <div style={{ color: '#444', fontSize: 12, lineHeight: 1.7 }}>
              All finishes above are standard capabilities of premium Indian packaging printers (Mumbai, Ahmedabad, Delhi). Request samples before approving. Lead time: 2–4 weeks for short runs, 4–8 weeks for first production.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
