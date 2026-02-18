import React from 'react'

const C = '#64748B'

const LAYERS = [
  { label: 'Paint / Vehicle Surface', thickness: 20, color: '#1a1a1a', textColor: '#333', note: 'Existing clearcoat' },
  { label: 'Ceramic Matrix', thickness: 30, color: '#1e2530', textColor: '#445566', note: 'Dense inorganic oxide network' },
  { label: 'Graphene Nano-Platelets', thickness: 14, color: '#253040', textColor: C, note: '3–4 μm total · aspect ratio 2,000–4,000:1' },
  { label: 'Superhydrophobic Surface', thickness: 10, color: '#2a3545', textColor: '#7a9ab0', note: '115° contact angle — lotus effect' },
]

export default function MolecularLayerDiagram() {
  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Infographic Idea — Layer Structure</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Molecular Layer — Cross Section</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>Exploded cross-section showing how CERAPHENE bonds to clearcoat. Good for the back panel or side panel of the box.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>

        {/* Style 1: Horizontal cross-section */}
        <div>
          <div style={{ color: '#444', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Style A — Horizontal Stack</div>
          <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 24 }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[...LAYERS].reverse().map((layer, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #111' }}>
                  <div style={{ width: 180, height: layer.thickness * 2.5, background: layer.color, display: 'flex', alignItems: 'center', paddingLeft: 12 }}>
                    {/* Hex pattern for graphene layer */}
                    {layer.label.includes('Graphene') && (
                      <svg width={160} height={layer.thickness * 2.5} style={{ position: 'absolute', opacity: 0.3 }}>
                        {Array.from({ length: 10 }, (_, k) => (
                          <polygon key={k} points={`${12 + k * 16},4 ${20 + k * 16},0 ${20 + k * 16},8 ${12 + k * 16},12 ${4 + k * 16},8 ${4 + k * 16},0`} fill="none" stroke={C} strokeWidth="0.5" />
                        ))}
                      </svg>
                    )}
                  </div>
                  <div style={{ flex: 1, padding: '10px 16px' }}>
                    <div style={{ color: layer.textColor, fontSize: 11, fontWeight: 600, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em' }}>{layer.label}</div>
                    <div style={{ color: '#333', fontSize: 9, marginTop: 2 }}>{layer.note}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ height: 40, width: 1, background: C, opacity: 0.4 }} />
              <div>
                <div style={{ color: 'white', fontSize: 18, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>3–4 μm</div>
                <div style={{ color: '#555', fontSize: 10 }}>Total CERAPHENE thickness</div>
              </div>
            </div>
          </div>
        </div>

        {/* Style 2: Exploded perspective */}
        <div>
          <div style={{ color: '#444', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>Style B — Exploded Perspective</div>
          <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 24 }}>
            <div style={{ position: 'relative', height: 280 }}>
              {LAYERS.map((layer, i) => {
                const offset = i * 48
                return (
                  <div key={i} style={{
                    position: 'absolute', top: offset, left: 0, right: 0,
                    height: 36, background: layer.color,
                    border: `1px solid ${layer.textColor}20`,
                    transform: 'skewY(-3deg)',
                    display: 'flex', alignItems: 'center', paddingLeft: 16,
                    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                  }}>
                    <div style={{ color: layer.textColor, fontSize: 10, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, letterSpacing: '0.08em' }}>
                      {layer.label.toUpperCase()}
                    </div>
                  </div>
                )
              })}
              {/* Dimension annotation */}
              <div style={{ position: 'absolute', right: -40, top: 48, bottom: 0, width: 30, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ flex: 1, width: 1, background: C, opacity: 0.3 }} />
                <div style={{ color: C, fontSize: 9, transform: 'rotate(90deg)', whiteSpace: 'nowrap', margin: '4px 0' }}>3–4 μm</div>
                <div style={{ flex: 1, width: 1, background: C, opacity: 0.3 }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Box copy */}
      <div style={{ marginTop: 24, padding: 16, background: '#111', border: `1px solid ${C}30`, borderRadius: 8 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Box Copy — Suggested</div>
        <div style={{ color: '#555', fontSize: 12, lineHeight: 1.8 }}>
          "Graphene nano-platelets — aspect ratio 2,000:1 — embedded in a dense ceramic matrix. Covalently bonded to your clearcoat at 3–4 microns.
          Not a film. <strong style={{ color: 'white' }}>A molecular shield.</strong>"
        </div>
      </div>
    </div>
  )
}
