import React from 'react'

const C = '#64748b'

const scale = [
  { h: '1H', label: 'Soft Pencil', ref: 'Very soft', pct: 10 },
  { h: '2H', label: 'Fingernail', ref: 'Standard paint', pct: 20 },
  { h: '3H', label: 'Copper coin', ref: '', pct: 30 },
  { h: '4H', label: 'Iron nail', ref: '', pct: 40 },
  { h: '5H', label: 'Glass', ref: '', pct: 50 },
  { h: '6H', label: 'Hardened steel', ref: '', pct: 60 },
  { h: '7H', label: 'Quartz', ref: 'Standard ceramic', pct: 70 },
  { h: '8H', label: 'Hard ceramics', ref: 'Most coatings', pct: 80 },
  { h: '9H+', label: 'CERAPHENE', ref: 'This product', pct: 93, highlight: true },
  { h: '10H', label: 'Diamond', ref: 'Hardest known', pct: 100, diamond: true },
]

export default function CerHardnessScale() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 800, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>CERAPHENE · Pencil Hardness</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>ASTM D3363 HARDNESS SCALE</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Where CERAPHENE sits on the universal pencil hardness scale</div>
      </div>

      {/* Scale bars */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 32 }}>
        {scale.map((row, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 36, textAlign: 'right', flexShrink: 0 }}>
              <span style={{
                fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, fontSize: 14,
                color: row.highlight ? '#fff' : row.diamond ? '#f59e0b' : '#555'
              }}>{row.h}</span>
            </div>
            <div style={{ flex: 1, height: 28, background: '#111', borderRadius: 4, overflow: 'hidden', position: 'relative' }}>
              <div style={{
                width: `${row.pct}%`, height: '100%', borderRadius: 4,
                background: row.diamond ? '#92400e' : row.highlight ? C : '#222',
                display: 'flex', alignItems: 'center', paddingLeft: 10,
                border: row.highlight ? `1px solid ${C}` : 'none',
                boxShadow: row.highlight ? `0 0 16px ${C}55` : 'none'
              }}>
                {(row.highlight || row.diamond) && (
                  <span style={{ color: row.diamond ? '#fbbf24' : '#fff', fontSize: 11, fontWeight: 600, whiteSpace: 'nowrap' }}>
                    {row.label}
                  </span>
                )}
              </div>
            </div>
            <div style={{ width: 180, flexShrink: 0 }}>
              <span style={{ color: row.highlight ? '#cbd5e1' : row.diamond ? '#fbbf24' : '#444', fontSize: 11 }}>{row.label}</span>
              {row.ref && <span style={{ color: row.highlight ? C : '#333', fontSize: 10, marginLeft: 6 }}>· {row.ref}</span>}
            </div>
          </div>
        ))}
      </div>

      {/* Callout */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div style={{ background: '#111', border: `1px solid ${C}44`, borderRadius: 10, padding: 20 }}>
          <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 42, fontWeight: 700, color: '#fff' }}>9H+</div>
          <div style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 600, marginTop: 4 }}>CERAPHENE Rating</div>
          <div style={{ color: C, fontSize: 11, marginTop: 4 }}>Exceeds most ceramic coatings (7–8H)</div>
        </div>
        <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 20 }}>
          <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>What 9H+ means</div>
          {[
            'Resists daily car wash scratches',
            'Tree branch / brush contact',
            'Key drag (partial resistance)',
            'Bird dropping etching blocked',
          ].map((t, i) => (
            <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6 }}>
              <span style={{ color: C, fontSize: 12, flexShrink: 0, marginTop: 2 }}>✓</span>
              <span style={{ color: '#94a3b8', fontSize: 12 }}>{t}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · ASTM D3363</div>
    </div>
  )
}
