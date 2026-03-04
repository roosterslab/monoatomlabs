import React, { useState } from 'react'

const C = '#64748B'

// Hardness scale with real-world context
const SCALE = [
  { h: '1B', label: 'Pencil (soft)', color: '#333', note: 'Smear with fingernail' },
  { h: 'HB',  label: 'Standard Pencil', color: '#3a3a3a', note: 'School/office use' },
  { h: '2H',  label: 'Hard Pencil', color: '#444', note: 'Technical drafting' },
  { h: '4H',  label: 'Hard Pencil', color: '#4a4a4a', note: 'Engineering drawing' },
  { h: '6H',  label: 'Very Hard', color: '#556070', note: 'Scratches standard coatings' },
  { h: '8H',  label: 'Extremely Hard', color: '#5a6a7a', note: 'Standard ceramic coatings top out here' },
  { h: '9H+', label: 'CERAPHENE', color: C, note: '9H+ — graphene-ceramic composite', highlight: true },
  { h: '10H', label: 'Diamond', color: '#c0c0c0', note: 'Hardest natural material' },
]

const CONTEXTS = [
  { material: 'Fingernail', h: '~2.5H', note: 'Scratches paint easily' },
  { material: 'Car Key', h: '~5H', note: 'Keying damage on bare paint' },
  { material: 'Sand/Road Grit', h: '~7H', note: 'Swirl marks on unprotected clearcoat' },
  { material: 'Standard Ceramic', h: '9H', note: 'Most premium competitors' },
  { material: 'CERAPHENE', h: '9H+', note: 'Graphene reinforced ceramic', highlight: true },
  { material: 'Sapphire', h: '~9.5H', note: 'Watch glass benchmark' },
  { material: 'Diamond', h: '10H', note: 'Hardest natural material' },
]

export default function HardnessScaleViz() {
  const [hovered, setHovered] = useState(null)

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: '#64748B', fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Infographic Idea — Hardness</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Hardness Scale Visual</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>Pencil hardness scale placing CERAPHENE in real-world context. Great for box back or infographic panel.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>

        {/* Left: horizontal bar scale */}
        <div>
          <div style={{ color: C, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Pencil Hardness Scale</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {SCALE.map((s, i) => (
              <div
                key={i}
                onMouseEnter={() => setHovered(s.h)}
                onMouseLeave={() => setHovered(null)}
                style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'default' }}
              >
                <div style={{ width: 32, color: s.highlight ? 'white' : '#555', fontSize: 11, fontWeight: s.highlight ? 800 : 400, fontFamily: 'Rajdhani, sans-serif', textAlign: 'right', flexShrink: 0 }}>{s.h}</div>
                <div style={{ flex: 1, height: s.highlight ? 14 : 6, background: s.highlight ? C : '#1a1a1a', borderRadius: 3, position: 'relative', transition: 'all 0.2s' }}>
                  <div style={{ width: `${(i + 1) / SCALE.length * 100}%`, height: '100%', background: s.highlight ? 'white' : '#2a2a2a', borderRadius: 3 }} />
                </div>
                <div style={{ color: s.highlight ? 'white' : '#444', fontSize: 10, width: 160, lineHeight: 1.3 }}>
                  <strong style={{ color: s.highlight ? C : '#444' }}>{s.label}</strong>
                  {hovered === s.h && <div style={{ color: '#555', fontSize: 9 }}>{s.note}</div>}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 20, padding: 14, background: '#111', border: `1px solid ${C}30`, borderRadius: 8 }}>
            <div style={{ color: 'white', fontSize: 28, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>9H+</div>
            <div style={{ color: C, fontSize: 10, letterSpacing: '0.2em', marginBottom: 6 }}>CERAPHENE HARDNESS RATING</div>
            <div style={{ color: '#555', fontSize: 11, lineHeight: 1.5 }}>Above the maximum of the standard pencil hardness scale. Graphene nano-platelets reinforce the ceramic matrix beyond conventional limits.</div>
          </div>
        </div>

        {/* Right: real-world context table */}
        <div>
          <div style={{ color: C, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Real-World Hardness Context</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {CONTEXTS.map((ctx, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px',
                background: ctx.highlight ? '#111' : 'transparent',
                border: `1px solid ${ctx.highlight ? C + '40' : '#1a1a1a'}`,
                borderRadius: 6,
              }}>
                <div style={{ color: ctx.highlight ? C : '#555', fontSize: 11, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, width: 36, flexShrink: 0 }}>{ctx.h}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: ctx.highlight ? 'white' : '#666', fontSize: 12, fontWeight: ctx.highlight ? 700 : 400 }}>{ctx.material}</div>
                  <div style={{ color: '#444', fontSize: 10, marginTop: 1 }}>{ctx.note}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Box-ready snippet */}
          <div style={{ marginTop: 20 }}>
            <div style={{ color: '#444', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10 }}>Box Copy — Suggested</div>
            <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 8, padding: 16, fontFamily: 'Rajdhani, sans-serif' }}>
              <div style={{ color: '#2a2a2a', fontSize: 10, letterSpacing: '0.3em' }}>HARDNESS RATING</div>
              <div style={{ color: 'white', fontSize: 48, fontWeight: 900, lineHeight: 0.9 }}>9H+</div>
              <div style={{ width: 30, height: 1, background: C, margin: '12px 0' }} />
              <div style={{ color: '#555', fontSize: 10, lineHeight: 1.6 }}>
                Diamond is 10H. Road grit is 7H.<br />
                CERAPHENE stops everything in between.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
