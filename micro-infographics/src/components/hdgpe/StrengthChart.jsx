import React from 'react'

const C = '#06b6d4'

const properties = [
  { prop: 'Tensile Strength', unit: 'MPa', std: 25,  hd: 32,  pct: 28, test: 'ASTM D638' },
  { prop: 'Flexural Strength', unit: 'MPa', std: 30,  hd: 39,  pct: 30, test: 'ASTM D790' },
  { prop: 'Impact Strength', unit: 'J/m', std: 120, hd: 158, pct: 32, test: 'ASTM D256' },
  { prop: 'Elongation at Break', unit: '×base', std: 1, hd: 20, pct: 1900, isElongation: true, test: 'ASTM D638' },
  { prop: 'UV Stability', unit: 'life ×', std: 1, hd: 1.2, pct: 20, test: 'ASTM G154' },
]

export default function PolyStrength() {
  return (
    <div style={{ background: '#050505', fontFamily: 'Inter, sans-serif', padding: '40px', maxWidth: 860, margin: '0 auto' }}>
      <div style={{ marginBottom: 28, borderBottom: '1px solid #1f1f1f', paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase' }}>HD-G-PE · Properties</div>
        <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 36, fontWeight: 700, color: '#fff', letterSpacing: 2 }}>MECHANICAL PROPERTIES</div>
        <div style={{ color: '#64748b', fontSize: 13, marginTop: 4 }}>Standard HDPE vs HD-G-PE enhanced · typical values at 0.5–1.0% dosage</div>
      </div>

      {/* Property bars */}
      <div style={{ marginBottom: 28 }}>
        {properties.map((p, i) => {
          const maxBar = p.isElongation ? 100 : 100
          const stdPct = p.isElongation ? 5 : (p.std / p.hd) * 100
          const hdPct = 100
          return (
            <div key={i} style={{ marginBottom: 18, background: '#111', border: '1px solid #1f1f1f', borderRadius: 10, padding: 18 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <div>
                  <span style={{ color: '#e2e8f0', fontSize: 13, fontWeight: 600 }}>{p.prop}</span>
                  <span style={{ color: '#475569', fontSize: 10, marginLeft: 8 }}>{p.test}</span>
                </div>
                <span style={{ color: '#4ade80', fontSize: 14, fontWeight: 700 }}>
                  {p.isElongation ? '20×' : `+${p.pct}%`} improvement
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 80, color: '#475569', fontSize: 11, textAlign: 'right', flexShrink: 0 }}>Standard</div>
                  <div style={{ flex: 1, height: 24, background: '#0d0d0d', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ width: `${stdPct}%`, height: '100%', background: '#2a2a2a', borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8, minWidth: 60 }}>
                      <span style={{ color: '#555', fontSize: 11, fontWeight: 600 }}>
                        {p.isElongation ? '1× (baseline)' : `${p.std} ${p.unit}`}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 80, color: C, fontSize: 11, textAlign: 'right', flexShrink: 0 }}>HD-G-PE</div>
                  <div style={{ flex: 1, height: 24, background: '#0d0d0d', borderRadius: 4, overflow: 'hidden' }}>
                    <div style={{ width: `${hdPct}%`, height: '100%', background: C, borderRadius: 4, display: 'flex', alignItems: 'center', paddingLeft: 8, boxShadow: `0 0 10px ${C}44` }}>
                      <span style={{ color: '#000', fontSize: 11, fontWeight: 700 }}>
                        {p.isElongation ? '20× elongation' : `${p.hd} ${p.unit}`}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Bottom callout */}
      <div style={{ background: '#03181f', border: `1px solid ${C}44`, borderRadius: 12, padding: 20, display: 'flex', gap: 20, justifyContent: 'space-around', textAlign: 'center' }}>
        {[
          { val: '+30%', label: 'Tensile' },
          { val: '+30%', label: 'Flexural' },
          { val: '+30%', label: 'Impact' },
          { val: '20×', label: 'Elongation' },
          { val: '+20%', label: 'UV Life' },
        ].map((b, i) => (
          <div key={i}>
            <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 28, fontWeight: 700, color: '#fff' }}>{b.val}</div>
            <div style={{ color: C, fontSize: 10, letterSpacing: 1, textTransform: 'uppercase', marginTop: 4 }}>{b.label}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, textAlign: 'right', color: '#333', fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · HD-G-PE · ASTM D638 / D790 / D256</div>
    </div>
  )
}
