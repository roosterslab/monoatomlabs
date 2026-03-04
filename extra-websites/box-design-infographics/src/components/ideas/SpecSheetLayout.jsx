import React, { useState } from 'react'

const C = '#64748B'

const SPECS = [
  { label: 'Hardness', val: '9H+', unit: 'pencil scale', note: 'Above standard ceramic coatings' },
  { label: 'Water Contact Angle', val: '115°', unit: 'degrees', note: 'Superhydrophobic — lotus effect' },
  { label: 'Coating Thickness', val: '3–4 μm', unit: 'microns', note: '1/20th of a human hair' },
  { label: 'Durability', val: '4+ yr', unit: 'years', note: 'Under road conditions' },
  { label: 'Heat Resistance', val: '700°C', unit: 'celsius', note: 'Brake heat resistant' },
  { label: 'Chemical Resistance', val: 'pH 2–12', unit: 'pH range', note: 'Acids to alkalis' },
]

const LAYOUTS = [
  { id: 'dark-table', name: 'Dark Table' },
  { id: 'card-grid', name: 'Card Grid' },
  { id: 'icon-list', name: 'Icon List' },
  { id: 'minimal', name: 'Minimal Lines' },
  { id: 'data-dense', name: 'Data Dense' },
]

export default function SpecSheetLayout() {
  const [layout, setLayout] = useState('dark-table')

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Data Arrangement — Spec Sheet</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Spec Sheet — 5 Layout Styles</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>Five approaches to showing CERAPHENE's technical specifications on the box. Printable at any scale.</p>
      </div>

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

      <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, marginBottom: 24, maxWidth: 700 }}>

        {layout === 'dark-table' && (
          <div>
            <div style={{ color: C, fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 16, fontFamily: 'Rajdhani, sans-serif' }}>Technical Specifications</div>
            {SPECS.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #111', padding: '10px 0' }}>
                <div style={{ flex: 1.5, color: '#555', fontSize: 12 }}>{s.label}</div>
                <div style={{ flex: 0.8, color: '#333', fontSize: 11, textAlign: 'center' }}>{s.unit}</div>
                <div style={{ flex: 1, textAlign: 'right', color: 'white', fontSize: 16, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{s.val}</div>
              </div>
            ))}
          </div>
        )}

        {layout === 'card-grid' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8 }}>
            {SPECS.map((s, i) => (
              <div key={i} style={{ padding: 16, background: '#0d0d0d', border: '1px solid #111', borderRadius: 6 }}>
                <div style={{ color: '#444', fontSize: 9, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 6 }}>{s.label}</div>
                <div style={{ color: 'white', fontSize: 24, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>{s.val}</div>
                <div style={{ color: '#2a2a2a', fontSize: 9, marginTop: 4 }}>{s.note}</div>
              </div>
            ))}
          </div>
        )}

        {layout === 'icon-list' && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {SPECS.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 32, height: 32, border: `1px solid ${C}30`, borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <div style={{ color: C, fontSize: 14, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{i + 1}</div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                    <span style={{ color: '#666', fontSize: 12 }}>{s.label}</span>
                    <span style={{ color: 'white', fontSize: 18, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{s.val}</span>
                  </div>
                  <div style={{ height: 1, background: '#111', marginTop: 6 }} />
                </div>
              </div>
            ))}
          </div>
        )}

        {layout === 'minimal' && (
          <div>
            <div style={{ color: '#2a2a2a', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 20 }}>CERAPHENE GRAPHENE CERAMIC COATING</div>
            {SPECS.map((s, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'baseline', gap: 12, marginBottom: 6 }}>
                <div style={{ color: '#2a2a2a', fontSize: 10, letterSpacing: '0.08em', flex: 1 }}>{s.label}</div>
                <div style={{ flex: 1, height: 1, background: '#111', alignSelf: 'center' }} />
                <div style={{ color: '#666', fontSize: 14, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif' }}>{s.val}</div>
              </div>
            ))}
          </div>
        )}

        {layout === 'data-dense' && (
          <div style={{ fontFamily: 'Rajdhani, sans-serif' }}>
            <div style={{ display: 'flex', gap: 0, marginBottom: 8, borderBottom: '1px solid #1a1a1a', paddingBottom: 6 }}>
              {['ATTRIBUTE', 'VALUE', 'UNIT', 'CONTEXT'].map((h, i) => (
                <div key={i} style={{ flex: [1.5, 0.8, 0.8, 2][i], color: '#2a2a2a', fontSize: 8, letterSpacing: '0.15em', textTransform: 'uppercase' }}>{h}</div>
              ))}
            </div>
            {SPECS.map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 0, borderBottom: '1px solid #0d0d0d', padding: '6px 0' }}>
                <div style={{ flex: 1.5, color: '#555', fontSize: 10 }}>{s.label}</div>
                <div style={{ flex: 0.8, color: 'white', fontSize: 13, fontWeight: 900 }}>{s.val}</div>
                <div style={{ flex: 0.8, color: '#333', fontSize: 9 }}>{s.unit}</div>
                <div style={{ flex: 2, color: '#2a2a2a', fontSize: 9, lineHeight: 1.4 }}>{s.note}</div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div style={{ color: '#444', fontSize: 12, lineHeight: 1.8 }}>
        <strong style={{ color: '#666' }}>Print note:</strong> All layouts work at 300dpi print output. Avoid hairlines thinner than 0.25pt on final print files. The "Minimal" style works best as a bottom footer strip. "Card Grid" works well as a standalone back panel section at any scale.
      </div>
    </div>
  )
}
