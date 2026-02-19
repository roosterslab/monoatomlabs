import React, { useState } from 'react'

const C = '#64748B'

const HIERARCHY_LAYERS = [
  { sec: '0–1s', label: 'Brand / Logo', element: 'MONOATOM LABS wordmark', priority: 'TOP', note: 'Instant brand recognition signal. Top or bottom corner. Always visible.' },
  { sec: '1–2s', label: 'Product Name', element: 'CERAPHENE — large, high contrast', priority: 'HERO', note: 'Largest text on the panel. Distinctive name must be memorable.' },
  { sec: '2–3s', label: 'Category Cue', element: '"GRAPHENE CERAMIC COATING"', priority: 'HIGH', note: 'Tells the buyer what the product is. Subcategory clarity.' },
  { sec: '3–4s', label: 'Proof Point', element: '9H+ or 115° — the single biggest stat', priority: 'HIGH', note: 'One number that communicates superiority. One. Not six.' },
  { sec: '4s+', label: 'Body Copy', element: 'Back panel details, specs, story', priority: 'MEDIUM', note: 'For buyers who are already interested. Never critical for shelf sale.' },
]

const LAYOUTS = [
  { id: 'hierarchy-map', name: 'Hierarchy Map' },
  { id: 'front-panel-demo', name: 'Front Panel Demo' },
  { id: 'attention-flow', name: 'Attention Flow' },
]

const PRIORITY_COLORS = {
  TOP: C,
  HERO: 'white',
  HIGH: '#888',
  MEDIUM: '#444',
}

export default function FourSecondImpact() {
  const [layout, setLayout] = useState('hierarchy-map')

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Marketing Ideas — Shelf Impact</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>The 4-Second Rule</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          Retail packaging research: buyers make a yes/no decision in 4 seconds on shelf. Everything on the front panel must earn its place in that window. This is the hierarchy framework for CERAPHENE.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {LAYOUTS.map(l => (
          <button key={l.id} onClick={() => setLayout(l.id)} style={{
            padding: '7px 14px', borderRadius: 6,
            border: `1px solid ${layout === l.id ? C : '#1f1f1f'}`,
            background: layout === l.id ? '#111' : 'transparent',
            color: layout === l.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12, fontWeight: layout === l.id ? 700 : 400,
          }}>
            {l.name}
          </button>
        ))}
      </div>

      {layout === 'hierarchy-map' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Rajdhani, sans-serif' }}>4-Second Attention Hierarchy</div>

          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr 1fr', gap: 0 }}>
            <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.15em', paddingBottom: 12, borderBottom: '1px solid #0d0d0d' }}>WINDOW</div>
            <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.15em', paddingBottom: 12, borderBottom: '1px solid #0d0d0d' }}>ELEMENT</div>
            <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.15em', paddingBottom: 12, borderBottom: '1px solid #0d0d0d' }}>WHY</div>

            {HIERARCHY_LAYERS.map((layer, i) => (
              <>
                <div key={`sec-${i}`} style={{ paddingTop: 16, paddingBottom: 16, borderBottom: '1px solid #0a0a0a', paddingRight: 12 }}>
                  <div style={{ color: PRIORITY_COLORS[layer.priority], fontSize: 13, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{layer.sec}</div>
                  <div style={{ color: '#333', fontSize: 9, marginTop: 2 }}>{layer.priority}</div>
                </div>
                <div key={`label-${i}`} style={{ paddingTop: 16, paddingBottom: 16, borderBottom: '1px solid #0a0a0a', paddingRight: 16 }}>
                  <div style={{ color: PRIORITY_COLORS[layer.priority], fontSize: 12, fontWeight: layer.priority === 'HERO' ? 900 : 400, fontFamily: layer.priority === 'HERO' ? 'Rajdhani, sans-serif' : 'Inter, sans-serif' }}>{layer.label}</div>
                  <div style={{ color: '#444', fontSize: 11, marginTop: 3 }}>{layer.element}</div>
                </div>
                <div key={`note-${i}`} style={{ paddingTop: 16, paddingBottom: 16, borderBottom: '1px solid #0a0a0a' }}>
                  <div style={{ color: '#555', fontSize: 11, lineHeight: 1.5 }}>{layer.note}</div>
                </div>
              </>
            ))}
          </div>

          <div style={{ marginTop: 24, padding: 16, background: '#080808', border: `1px solid ${C}15`, borderRadius: 6 }}>
            <div style={{ color: C, fontSize: 9, letterSpacing: '0.15em', marginBottom: 8 }}>KEY PRINCIPLE</div>
            <div style={{ color: '#555', fontSize: 12, lineHeight: 1.7 }}>
              Most box designs fail because they try to communicate everything at once. CERAPHENE's front panel should do one thing: make the buyer pick it up. The back panel closes the sale.
              <br /><br />
              <span style={{ color: 'white' }}>Front panel rule: 3 elements maximum.</span> Brand. Product name. One hero number.
            </div>
          </div>
        </div>
      )}

      {layout === 'front-panel-demo' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Rajdhani, sans-serif' }}>Front Panel — 4-Second Hierarchy Applied</div>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>

            {/* Good example */}
            <div>
              <div style={{ color: '#555', fontSize: 10, marginBottom: 10 }}>✓ RIGHT — 3 elements, clear hierarchy</div>
              <div style={{ width: 180, height: 280, background: '#030303', border: '1px solid #0d0d0d', borderRadius: 4, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ color: '#2a2a2a', fontSize: 8, letterSpacing: '0.25em' }}>MONOATOM LABS</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'white', fontSize: 28, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em', lineHeight: 1 }}>CERAPHENE</div>
                  <div style={{ color: '#444', fontSize: 9, letterSpacing: '0.25em', marginTop: 6 }}>GRAPHENE CERAMIC COATING</div>
                  <div style={{ marginTop: 20 }}>
                    <div style={{ color: C, fontSize: 42, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>9H+</div>
                    <div style={{ color: '#333', fontSize: 8, letterSpacing: '0.2em' }}>PENCIL HARDNESS</div>
                  </div>
                </div>
                <div style={{ color: '#1a1a1a', fontSize: 7, letterSpacing: '0.15em' }}>50ml · Professional Grade</div>
              </div>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {['Brand — top', 'Name — hero', '9H+ — proof'].map((t, i) => (
                  <div key={i} style={{ color: '#333', fontSize: 10 }}>· {t}</div>
                ))}
              </div>
            </div>

            {/* Bad example */}
            <div>
              <div style={{ color: '#6B2D0F', fontSize: 10, marginBottom: 10 }}>✗ WRONG — too much, no hierarchy</div>
              <div style={{ width: 180, height: 280, background: '#030303', border: '1px solid #0d0d0d', borderRadius: 4, padding: 12, display: 'flex', flexDirection: 'column', gap: 8, overflow: 'hidden' }}>
                <div style={{ color: '#444', fontSize: 7, letterSpacing: '0.2em' }}>MONOATOM LABS · CERAPHENE</div>
                <div style={{ color: 'white', fontSize: 14, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif' }}>GRAPHENE CERAMIC COATING</div>
                <div style={{ color: '#555', fontSize: 9 }}>9H+ Hardness · 115° Contact · 700°C · UV · Anti-Static · 4 yrs</div>
                <div style={{ color: '#444', fontSize: 8, lineHeight: 1.4 }}>Advanced graphene-enhanced ceramic coating with molecular bond adhesion...</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  {['9H+', '115°', '700°C', '4yr', 'UV', '50ml'].map(t => (
                    <div key={t} style={{ padding: '2px 6px', border: '1px solid #111', borderRadius: 2, color: '#333', fontSize: 8 }}>{t}</div>
                  ))}
                </div>
                <div style={{ color: '#333', fontSize: 8 }}>Made in India · iHub Gujarat · Professional Grade</div>
              </div>
              <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 4 }}>
                {['No clear hero', 'Too many stats', 'Eye has nowhere to rest'].map((t, i) => (
                  <div key={i} style={{ color: '#6B2D0F', fontSize: 10 }}>· {t}</div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}

      {layout === 'attention-flow' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Rajdhani, sans-serif' }}>Attention Flow — Shelf Scan Simulation</div>

          <div style={{ display: 'flex', gap: 24, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            {/* Box with eye flow arrows */}
            <div style={{ position: 'relative', width: 200, height: 300 }}>
              <div style={{ width: '100%', height: '100%', background: '#030303', border: '1px solid #0d0d0d', borderRadius: 4, padding: 20, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
                <div style={{ color: '#2a2a2a', fontSize: 8, letterSpacing: '0.25em' }}>MONOATOM LABS</div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ color: 'white', fontSize: 26, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}>CERAPHENE</div>
                  <div style={{ color: '#444', fontSize: 8, letterSpacing: '0.2em', marginTop: 4 }}>GRAPHENE CERAMIC COATING</div>
                  <div style={{ marginTop: 16 }}>
                    <div style={{ color: C, fontSize: 38, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>9H+</div>
                    <div style={{ color: '#2a2a2a', fontSize: 7, letterSpacing: '0.2em' }}>PENCIL HARDNESS</div>
                  </div>
                </div>
                <div style={{ color: '#111', fontSize: 7 }}>50ml · Professional Grade</div>
              </div>

              {/* Numbered attention markers */}
              <div style={{ position: 'absolute', top: 12, left: -20, width: 16, height: 16, borderRadius: '50%', background: C, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 9, fontWeight: 700 }}>1</div>
              <div style={{ position: 'absolute', top: '35%', right: -20, width: 16, height: 16, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontSize: 9, fontWeight: 700 }}>2</div>
              <div style={{ position: 'absolute', top: '48%', right: -20, width: 16, height: 16, borderRadius: '50%', background: '#555', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 9, fontWeight: 700 }}>3</div>
              <div style={{ position: 'absolute', top: '65%', left: -20, width: 16, height: 16, borderRadius: '50%', background: '#333', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: 9, fontWeight: 700 }}>4</div>
            </div>

            {/* Attention flow legend */}
            <div style={{ flex: 1, minWidth: 200 }}>
              {[
                { n: '1', sec: '0–1s', desc: 'Brand corner registers — MONOATOM LABS', color: C },
                { n: '2', sec: '1–2s', desc: 'CERAPHENE — name identified, unique, memorable', color: 'white' },
                { n: '3', sec: '2–3s', desc: '"GRAPHENE CERAMIC COATING" — category understood', color: '#888' },
                { n: '4', sec: '3–4s', desc: '9H+ — one number = clear superiority claim', color: '#555' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 14, marginBottom: 16, alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ color: item.color === 'white' ? 'black' : 'white', fontSize: 10, fontWeight: 700 }}>{item.n}</span>
                  </div>
                  <div>
                    <div style={{ color: item.color, fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif' }}>{item.sec}</div>
                    <div style={{ color: '#555', fontSize: 11, lineHeight: 1.5, marginTop: 2 }}>{item.desc}</div>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 20, padding: 14, background: '#0a0a0a', border: `1px solid ${C}15`, borderRadius: 6 }}>
                <div style={{ color: C, fontSize: 9, letterSpacing: '0.15em', marginBottom: 6 }}>RESULT</div>
                <div style={{ color: '#555', fontSize: 11, lineHeight: 1.6 }}>
                  If the buyer reaches second 4 having understood brand + product + category + one hero claim, they will pick it up. The back panel then closes the sale with specs and proof.
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
