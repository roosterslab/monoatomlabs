import React from 'react'

const C = '#06b6d4'

const methods = [
  {
    name: 'Extrusion',
    icon: '⊡',
    desc: 'Pipe, profile & sheet extrusion. Add masterbatch to hopper at 0.5–2%. Screw blending ensures uniform distribution.',
    products: ['HDPE pipes', 'Profiles', 'Sheets & rods'],
    temp: '180–220°C',
  },
  {
    name: 'Injection Molding',
    icon: '⊞',
    desc: 'Parts & components. Mix directly with base resin. Shot consistency maintained — no process changes needed.',
    products: ['Automotive parts', 'Consumer goods', 'Industrial fittings'],
    temp: '200–240°C',
  },
  {
    name: 'Blow Molding',
    icon: '◎',
    desc: 'Bottles, containers, tanks. Add at pre-mixing stage. Improved ESCR (environmental stress crack resistance) is a notable bonus.',
    products: ['Bottles', 'Jerrycans', 'Large tanks'],
    temp: '190–230°C',
  },
  {
    name: 'Film Blowing',
    icon: '⊙',
    desc: 'Packaging & agricultural films. Downgauging by 15–18% is possible due to increased strength. Better bubble stability noted.',
    products: ['Packaging films', 'Stretch wrap', 'Agri films'],
    temp: '180–210°C',
  },
]

export default function PolyProcessing() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Processing</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>PROCESSING COMPATIBILITY</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Drop-in masterbatch pellets · No special equipment or process changes required</div>
      </div>

      {/* Drop-in banner */}
      <div style={{ background: '#0a1a10', border: '1px solid #166534', borderRadius: 12, padding: 18, marginBottom: 24, display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ fontSize: 32 }}>📦</div>
        <div>
          <div style={{ color: '#4ade80', fontSize: 14, fontWeight: 700, marginBottom: 4 }}>MASTERBATCH FORM — READY TO USE</div>
          <div style={{ color: '#6ee7b7', fontSize: 12 }}>Pre-prepared pellets containing 5–15% graphene nano-platelets in HDPE carrier. Simply add to hopper with base resin. No dissolving, no special mixing, no modified equipment.</div>
        </div>
      </div>

      {/* 4 methods grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
        {methods.map((m, i) => (
          <div key={i} style={{ background: '#111', border: `1px solid ${C}33`, borderRadius: 12, padding: 22 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 8, background: C + '22', border: `1px solid ${C}55`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ color: C, fontSize: 18 }}>{m.icon}</span>
              </div>
              <div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: '#fff' }}>{m.name}</div>
                <div style={{ color: '#475569', fontSize: 10, letterSpacing: 1 }}>Processing temp: <span style={{ color: C }}>{m.temp}</span></div>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <div style={{ padding: '3px 8px', background: '#0a1a10', border: '1px solid #166534', borderRadius: 4 }}>
                  <span style={{ color: '#4ade80', fontSize: 9, fontWeight: 700 }}>✓ COMPATIBLE</span>
                </div>
              </div>
            </div>
            <div style={{ color: '#64748b', fontSize: 12, lineHeight: 1.6, marginBottom: 12 }}>{m.desc}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {m.products.map((p, j) => (
                <span key={j} style={{ fontSize: 10, color: '#475569', background: '#0d0d0d', border: '1px solid #1a1a1a', padding: '3px 8px', borderRadius: 4 }}>{p}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Integration steps */}
      <div style={{ background: '#111', border: '1px solid #1f1f1f', borderRadius: 12, padding: 22 }}>
        <div style={{ color: '#64748b', fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', marginBottom: 14 }}>Integration — 3 Steps</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
          {[
            { step: '1', title: 'Receive masterbatch', desc: 'Pre-weighed pellets in sealed packaging. Shelf life: 12 months. Store in dry conditions.' },
            { step: '2', title: 'Add to hopper', desc: 'Mix 0.5–2% HD-G-PE masterbatch with base HDPE resin at hopper. No pre-mixing needed.' },
            { step: '3', title: 'Process normally', desc: 'Run at standard temperature, speed, and pressure. No parameter changes. Uniform dispersion automatic.' },
          ].map((s, i) => (
            <div key={i} style={{ display: 'flex', gap: 12 }}>
              <div style={{ width: 28, height: 28, borderRadius: '50%', background: C, color: '#000', fontSize: 13, fontWeight: 700, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.step}</div>
              <div>
                <div style={{ color: '#e2e8f0', fontSize: 12, fontWeight: 600, marginBottom: 4 }}>{s.title}</div>
                <div style={{ color: '#475569', fontSize: 11, lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · PROCESSING GUIDE</div>
    </div>
  )
}
