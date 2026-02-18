import React, { useState } from 'react'

const C = '#64748B'

const GLOSS_LEVELS = [
  { label: 'Oxidized Paint', value: 15, color: '#1a1a1a', desc: 'Chalky, flat, absorbs light' },
  { label: 'Just Washed', value: 35, color: '#2a2a2a', desc: 'Clean but no depth' },
  { label: 'Waxed', value: 60, color: '#3a3a3a', desc: 'Surface shine only' },
  { label: 'Sealant', value: 75, color: '#484848', desc: 'Good reflectivity' },
  { label: 'CERAPHENE', value: 98, color: C, desc: '9H hard glass layer — wet look depth' },
]

const STYLES = [
  { id: 'gloss-meter', name: 'Gloss Meter Visual' },
  { id: 'depth-comparison', name: 'Depth Layers' },
  { id: 'box-callout', name: 'Box Callout' },
]

function GlossMeter({ value, color }) {
  const angle = -120 + (value / 100) * 240
  const rad = (angle * Math.PI) / 180
  const cx = 80, cy = 80, r = 55
  const x = cx + r * Math.cos(rad)
  const y = cy + r * Math.sin(rad)

  const arcPath = (from, to, radius) => {
    const r1 = ((from - 120) * Math.PI) / 180
    const r2 = ((to - 120) * Math.PI) / 180
    const x1 = cx + radius * Math.cos(r1)
    const y1 = cy + radius * Math.sin(r1)
    const x2 = cx + radius * Math.cos(r2)
    const y2 = cy + radius * Math.sin(r2)
    const large = to - from > 180 ? 1 : 0
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2}`
  }

  return (
    <svg width={160} height={110} style={{ display: 'block' }}>
      <path d={arcPath(0, 240, 55)} fill="none" stroke="#111" strokeWidth={8} />
      <path d={arcPath(0, value * 2.4, 55)} fill="none" stroke={color} strokeWidth={8} strokeLinecap="round" />
      <line x1={cx} y1={cy} x2={x} y2={y} stroke="white" strokeWidth={1.5} strokeLinecap="round" />
      <circle cx={cx} cy={cy} r={4} fill="white" />
      <text x={cx} y={cy + 22} textAnchor="middle" fill={color} fontSize={18} fontFamily="Rajdhani, sans-serif" fontWeight={900}>{value}</text>
      <text x={cx} y={cy + 34} textAnchor="middle" fill="#333" fontSize={8} fontFamily="Inter, sans-serif">GU</text>
    </svg>
  )
}

export default function GlossDepthViz() {
  const [style, setStyle] = useState('gloss-meter')
  const [hover, setHover] = useState(4)

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Infographic Ideas — Gloss</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Gloss & Color Depth</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          CERAPHENE forms a hard glass layer that adds measurable gloss units and visual depth ("wet look"). Three ways to show this on the box.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {STYLES.map(s => (
          <button key={s.id} onClick={() => setStyle(s.id)} style={{
            padding: '7px 14px', borderRadius: 6,
            border: `1px solid ${style === s.id ? C : '#1f1f1f'}`,
            background: style === s.id ? '#111' : 'transparent',
            color: style === s.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12, fontWeight: style === s.id ? 700 : 400,
          }}>
            {s.name}
          </button>
        ))}
      </div>

      {style === 'gloss-meter' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Rajdhani, sans-serif' }}>Gloss Units Comparison</div>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-end' }}>
            {GLOSS_LEVELS.map((g, i) => (
              <div
                key={i}
                onMouseEnter={() => setHover(i)}
                onMouseLeave={() => setHover(4)}
                style={{ textAlign: 'center', opacity: hover === i ? 1 : 0.5, transition: 'opacity 0.2s', cursor: 'default' }}
              >
                <GlossMeter value={g.value} color={g.color} />
                <div style={{ color: hover === i ? 'white' : '#444', fontSize: 11, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, marginTop: 4 }}>{g.label}</div>
                <div style={{ color: '#333', fontSize: 10, marginTop: 2, maxWidth: 100 }}>{g.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 24, padding: 14, background: '#080808', border: `1px solid ${C}15`, borderRadius: 6 }}>
            <div style={{ color: C, fontSize: 9, letterSpacing: '0.15em', marginBottom: 6 }}>WHY GU MATTERS</div>
            <div style={{ color: '#444', fontSize: 12, lineHeight: 1.7 }}>
              Gloss Units (GU) measure light reflectivity. Standard paint: 60–80 GU. CERAPHENE-coated: 95–100 GU.
              The glass-like ceramic surface reflects light like a mirror — delivering the "wet look" associated with showroom finishes.
            </div>
          </div>
        </div>
      )}

      {style === 'depth-comparison' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 580 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Rajdhani, sans-serif' }}>Visual Depth — Layer Analysis</div>

          {/* Layer stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginBottom: 24 }}>
            {[
              { label: 'Light / Reflection', height: 20, bg: 'transparent', border: `1px dashed ${C}30`, color: C, note: '↑ Reflected' },
              { label: 'CERAPHENE Glass Layer', height: 32, bg: C + '15', border: `1px solid ${C}40`, color: 'white', note: '3–4μm · 9H hardness' },
              { label: 'Clear Coat', height: 28, bg: '#111', border: '1px solid #1a1a1a', color: '#444', note: '40–60μm' },
              { label: 'Base Coat (Color)', height: 28, bg: '#0d0d0d', border: '1px solid #111', color: '#333', note: '15–20μm' },
              { label: 'Primer', height: 24, bg: '#080808', border: '1px solid #0d0d0d', color: '#222', note: '20–30μm' },
              { label: 'Steel Panel', height: 28, bg: '#050505', border: '1px solid #0a0a0a', color: '#1a1a1a', note: 'Substrate' },
            ].map((layer, i) => (
              <div key={i} style={{
                height: layer.height, display: 'flex', alignItems: 'center',
                justifyContent: 'space-between', padding: '0 16px',
                background: layer.bg, border: layer.border,
              }}>
                <span style={{ color: layer.color, fontSize: 11, fontFamily: 'Rajdhani, sans-serif' }}>{layer.label}</span>
                <span style={{ color: layer.color, fontSize: 9 }}>{layer.note}</span>
              </div>
            ))}
          </div>

          <div style={{ color: '#555', fontSize: 12, lineHeight: 1.7 }}>
            The glass-like CERAPHENE layer sits directly on clear coat. Its extreme hardness (9H) and optical clarity allow light to pass through, reflect off the base coat, and return with zero scattering — creating perceived depth and the "wet look".
          </div>
        </div>
      )}

      {style === 'box-callout' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 600 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Rajdhani, sans-serif' }}>Box Copy — Gloss & Color Depth</div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {/* Copy variant A */}
            <div style={{ padding: 20, border: '1px solid #0d0d0d', borderRadius: 6 }}>
              <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.2em', marginBottom: 10 }}>COPY VARIANT A — FEATURE</div>
              <div style={{ color: 'white', fontSize: 15, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', marginBottom: 8 }}>Enhanced Gloss & Color Depth</div>
              <div style={{ color: '#444', fontSize: 11, lineHeight: 1.7 }}>
                CERAPHENE forms an optically clear glass layer over your paintwork. The result: measurably higher gloss units and a "wet look" depth that wax cannot replicate.
              </div>
            </div>

            {/* Copy variant B */}
            <div style={{ padding: 20, border: `1px solid ${C}20`, borderRadius: 6 }}>
              <div style={{ color: C, fontSize: 9, letterSpacing: '0.2em', marginBottom: 10 }}>COPY VARIANT B — EMOTION</div>
              <div style={{ color: 'white', fontSize: 15, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', marginBottom: 8 }}>Showroom Finish. Every Morning.</div>
              <div style={{ color: '#555', fontSize: 11, lineHeight: 1.7 }}>
                That deep, mirror-wet gloss you see on a showroom floor? CERAPHENE makes it permanent. Your paint looks freshly detailed — rain or shine.
              </div>
            </div>

            {/* Metric badge */}
            <div style={{ padding: 20, border: '1px solid #0d0d0d', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ color: C, fontSize: 32, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>98</div>
                <div style={{ color: '#333', fontSize: 9, marginTop: 2 }}>GLOSS UNITS</div>
              </div>
              <div>
                <div style={{ color: '#555', fontSize: 11, lineHeight: 1.6 }}>vs 60–75 GU for standard waxed surfaces. Glass-hard. Optically clear. Light reflecting.</div>
              </div>
            </div>

            {/* Comparison strip */}
            <div style={{ padding: 20, border: '1px solid #0d0d0d', borderRadius: 6 }}>
              <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.2em', marginBottom: 12 }}>GLOSS COMPARISON</div>
              {[
                { label: 'CERAPHENE', gu: 98 },
                { label: 'Wax', gu: 62 },
                { label: 'Bare paint', gu: 35 },
              ].map((item, i) => (
                <div key={i} style={{ marginBottom: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 }}>
                    <span style={{ color: i === 0 ? 'white' : '#444', fontSize: 11 }}>{item.label}</span>
                    <span style={{ color: i === 0 ? C : '#333', fontSize: 11, fontFamily: 'Rajdhani, sans-serif' }}>{item.gu} GU</span>
                  </div>
                  <div style={{ height: 4, background: '#0d0d0d', borderRadius: 2 }}>
                    <div style={{ height: '100%', width: `${(item.gu / 100) * 100}%`, background: i === 0 ? C : '#1a1a1a', borderRadius: 2 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
