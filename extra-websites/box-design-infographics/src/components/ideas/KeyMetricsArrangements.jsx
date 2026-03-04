import React, { useState } from 'react'

const C = '#64748B'

const METRICS = [
  { val: '9H+', label: 'Hardness', sub: 'Pencil scale' },
  { val: '115°', label: 'Contact Angle', sub: 'Superhydrophobic' },
  { val: '3–4 μm', label: 'Thickness', sub: '1/20th of a hair' },
  { val: '700°C', label: 'Heat Shield', sub: 'Resistant' },
  { val: '4+ yr', label: 'Durability', sub: 'Long life' },
]

const LAYOUTS = [
  { id: 'row', name: 'Horizontal Row' },
  { id: 'grid2', name: '2+3 Grid' },
  { id: 'hero-one', name: 'Hero + 4 sub' },
  { id: 'table', name: 'Spec Table' },
  { id: 'ticker', name: 'Ticker Strip' },
  { id: 'centered', name: 'Centered Stack' },
]

export default function KeyMetricsArrangements() {
  const [layout, setLayout] = useState('row')

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Data Arrangement — Key Numbers</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Key Metrics — 6 Layout Approaches</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>How to arrange the 5 hero numbers on a box panel. Each layout works differently depending on available space.</p>
      </div>

      {/* Layout selector */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        {LAYOUTS.map(l => (
          <button key={l.id} onClick={() => setLayout(l.id)} style={{
            padding: '7px 14px', borderRadius: 6, border: `1px solid ${layout === l.id ? C : '#1f1f1f'}`,
            background: layout === l.id ? '#111' : 'transparent', color: layout === l.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12, fontWeight: layout === l.id ? 700 : 400, transition: 'all 0.2s',
          }}>
            {l.name}
          </button>
        ))}
      </div>

      <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, marginBottom: 24, minHeight: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {layout === 'row' && (
          <div style={{ display: 'flex', gap: 0, width: '100%' }}>
            {METRICS.map((m, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center', borderRight: i < METRICS.length - 1 ? '1px solid #1a1a1a' : 'none', padding: '0 16px' }}>
                <div style={{ color: 'white', fontSize: 28, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>{m.val}</div>
                <div style={{ color: C, fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 6 }}>{m.label}</div>
              </div>
            ))}
          </div>
        )}

        {layout === 'grid2' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, marginBottom: 2 }}>
              {METRICS.slice(0, 2).map((m, i) => (
                <div key={i} style={{ padding: '20px', background: '#111', textAlign: 'center' }}>
                  <div style={{ color: 'white', fontSize: 36, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>{m.val}</div>
                  <div style={{ color: C, fontSize: 9, letterSpacing: '0.15em', marginTop: 6 }}>{m.label}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 2 }}>
              {METRICS.slice(2).map((m, i) => (
                <div key={i} style={{ padding: '14px 10px', background: '#111', textAlign: 'center' }}>
                  <div style={{ color: 'white', fontSize: 22, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>{m.val}</div>
                  <div style={{ color: '#555', fontSize: 8, letterSpacing: '0.12em', marginTop: 4 }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {layout === 'hero-one' && (
          <div style={{ width: '100%', display: 'flex', gap: 0 }}>
            <div style={{ flex: 2, padding: '32px 24px', borderRight: '1px solid #1a1a1a', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ color: '#2a2a2a', fontSize: 11, letterSpacing: '0.3em' }}>HARDNESS RATING</div>
              <div style={{ color: 'white', fontSize: 72, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 0.9 }}>9H+</div>
              <div style={{ color: '#333', fontSize: 10, letterSpacing: '0.2em', marginTop: 8 }}>PENCIL HARDNESS SCALE</div>
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
              {METRICS.slice(1).map((m, i) => (
                <div key={i} style={{ flex: 1, padding: '10px 16px', borderBottom: i < 3 ? '1px solid #111' : 'none', display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ color: C, fontSize: 16, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{m.val}</div>
                  <div style={{ color: '#555', fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {layout === 'table' && (
          <div style={{ width: '100%' }}>
            {METRICS.map((m, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid #111' }}>
                <div style={{ color: '#444', fontSize: 11, flex: 1 }}>{m.label}</div>
                <div style={{ color: '#333', fontSize: 10, flex: 1, textAlign: 'center' }}>{m.sub}</div>
                <div style={{ color: 'white', fontSize: 18, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', flex: 0, textAlign: 'right', minWidth: 80 }}>{m.val}</div>
              </div>
            ))}
          </div>
        )}

        {layout === 'ticker' && (
          <div style={{ width: '100%', overflow: 'hidden', borderTop: `1px solid ${C}20`, borderBottom: `1px solid ${C}20`, padding: '12px 0' }}>
            <div style={{ display: 'flex', gap: 32, whiteSpace: 'nowrap', justifyContent: 'center' }}>
              {[...METRICS, ...METRICS].map((m, i) => (
                <span key={i} style={{ display: 'inline-flex', alignItems: 'baseline', gap: 8 }}>
                  <span style={{ color: 'white', fontSize: 20, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{m.val}</span>
                  <span style={{ color: C, fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{m.label}</span>
                  <span style={{ color: '#1a1a1a', marginLeft: 16 }}>·</span>
                </span>
              ))}
            </div>
          </div>
        )}

        {layout === 'centered' && (
          <div style={{ textAlign: 'center', width: '100%' }}>
            {METRICS.map((m, i) => (
              <div key={i} style={{ marginBottom: 16 }}>
                <div style={{ color: i === 0 ? 'white' : '#666', fontSize: i === 0 ? 48 : 24, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>{m.val}</div>
                <div style={{ color: i === 0 ? C : '#333', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', marginTop: 3 }}>{m.label}</div>
                {i < METRICS.length - 1 && <div style={{ width: 20, height: 1, background: '#1a1a1a', margin: '12px auto 0' }} />}
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ color: '#444', fontSize: 12, lineHeight: 1.8 }}>
        <strong style={{ color: '#666' }}>Tip:</strong> For a 499×638px front panel, <strong style={{ color: '#777' }}>Hero + 4 sub</strong> works best — leads with 9H+ credibility and shows 4 supporting specs. For the wide 1494×638px back panel, <strong style={{ color: '#777' }}>Horizontal Row</strong> fills the space naturally.
      </div>
    </div>
  )
}
