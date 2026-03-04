import React, { useState } from 'react'

const C = '#64748B'

const PROPERTIES = [
  {
    key: 'antistatic',
    label: 'Anti-Static',
    icon: '⚡',
    headline: 'Dust Doesn\'t Stick',
    claim: 'Anti-static surface charge eliminated',
    detail: 'Standard wax surfaces build up static charge, attracting airborne dust and particulates. CERAPHENE\'s graphene lattice neutralizes surface static — your car stays cleaner, longer.',
    benefit: 'Less dusting between washes',
    metric: '↓ Dust attraction',
    unique: true,
  },
  {
    key: 'selfclean',
    label: 'Self-Cleaning',
    icon: '💧',
    headline: 'Rain Does the Work',
    claim: '115° contact angle — water sheets off',
    detail: 'The superhydrophobic surface causes water to bead and roll, carrying contaminants away. A light rain effectively cleans CERAPHENE-coated surfaces without manual effort.',
    benefit: 'Rain-activated surface cleaning',
    metric: '115° contact angle',
    unique: false,
  },
  {
    key: 'hydrophobic',
    label: 'Superhydrophobic',
    icon: '◎',
    headline: 'Water Repulsion at Nano Scale',
    claim: '70%+ SiO₂ + graphene matrix',
    detail: 'The combined ceramic-graphene matrix creates a surface energy profile that forces water into near-perfect spherical beads. No absorption. No water marks. No mineral deposits.',
    benefit: 'Zero water marks, zero mineral etching',
    metric: '70%+ SiO₂ purity',
    unique: false,
  },
]

const STYLES = [
  { id: 'trio-comparison', name: 'Trio Properties' },
  { id: 'antistatic-focus', name: 'Anti-Static Focus' },
  { id: 'before-after', name: 'Before / After Panel' },
]

export default function AntiStaticProperty() {
  const [style, setStyle] = useState('trio-comparison')
  const [active, setActive] = useState(0)

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Infographic Ideas — Unique Properties</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Anti-Static · Self-Cleaning · Hydrophobic</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          Anti-static is a rare differentiator — most ceramics don't mention it. Combined with self-cleaning and superhydrophobicity, this is a powerful triad for box copy.
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

      {style === 'trio-comparison' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Rajdhani, sans-serif' }}>Surface Intelligence — Three Properties</div>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            {PROPERTIES.map((p, i) => (
              <div key={i} onClick={() => setActive(i)} style={{
                flex: 1, minWidth: 200, padding: 20,
                border: `1px solid ${active === i ? C + '50' : '#0d0d0d'}`,
                borderRadius: 6, cursor: 'pointer', background: active === i ? '#080808' : 'transparent',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 24 }}>{p.icon}</div>
                  </div>
                  {p.unique && (
                    <div style={{ padding: '2px 8px', background: C + '20', border: `1px solid ${C}40`, borderRadius: 10, color: C, fontSize: 9, letterSpacing: '0.1em' }}>
                      UNIQUE
                    </div>
                  )}
                </div>
                <div style={{ color: 'white', fontSize: 14, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', marginBottom: 4 }}>{p.label}</div>
                <div style={{ color: C, fontSize: 11, marginBottom: 10 }}>{p.headline}</div>
                {active === i && (
                  <>
                    <div style={{ color: '#444', fontSize: 11, lineHeight: 1.7, marginBottom: 10 }}>{p.detail}</div>
                    <div style={{ padding: '8px 12px', background: '#0a0a0a', border: '1px solid #111', borderRadius: 4 }}>
                      <div style={{ color: '#666', fontSize: 10 }}>Key metric: <span style={{ color: C }}>{p.metric}</span></div>
                      <div style={{ color: '#555', fontSize: 10, marginTop: 3 }}>Benefit: {p.benefit}</div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, color: '#2a2a2a', fontSize: 10 }}>Click a property card to expand</div>
        </div>
      )}

      {style === 'antistatic-focus' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 560 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Rajdhani, sans-serif' }}>Anti-Static — Box Panel Focus</div>

          {/* Hero claim */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ color: 'white', fontSize: 28, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1.1, marginBottom: 8 }}>
              GRAPHENE KILLS<br />STATIC CHARGE
            </div>
            <div style={{ color: C, fontSize: 13 }}>Dust doesn't bond. Surface stays pristine longer.</div>
          </div>

          {/* Explanation diagram text */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
            <div style={{ padding: 16, background: '#0a0a0a', border: '1px solid #111', borderRadius: 6 }}>
              <div style={{ color: '#444', fontSize: 9, letterSpacing: '0.2em', marginBottom: 8 }}>STANDARD WAX</div>
              <div style={{ color: '#333', fontSize: 12, lineHeight: 1.6 }}>
                Insulating surface → builds static charge → attracts dust particles → accelerated surface contamination
              </div>
              <div style={{ marginTop: 10, color: '#6B2D0F', fontSize: 10 }}>Dusts up fast ↑</div>
            </div>
            <div style={{ padding: 16, background: '#0a0a0a', border: `1px solid ${C}20`, borderRadius: 6 }}>
              <div style={{ color: C, fontSize: 9, letterSpacing: '0.2em', marginBottom: 8 }}>CERAPHENE</div>
              <div style={{ color: '#555', fontSize: 12, lineHeight: 1.6 }}>
                Graphene lattice = semi-conducting → static charge neutralized → dust doesn't electrostatically bond
              </div>
              <div style={{ marginTop: 10, color: C, fontSize: 10 }}>Stays cleaner ↓</div>
            </div>
          </div>

          {/* Box copy idea */}
          <div style={{ padding: 16, border: '1px solid #111', borderRadius: 6 }}>
            <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.2em', marginBottom: 8 }}>BOX COPY — ANTI-STATIC CALLOUT</div>
            <div style={{ color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', marginBottom: 6 }}>Anti-Static Surface</div>
            <div style={{ color: '#444', fontSize: 11, lineHeight: 1.7 }}>
              Graphene's unique conductivity neutralizes electrostatic charge. Dust and airborne particles don't bond to your paint — reducing between-wash contamination by up to 40%.
            </div>
          </div>
        </div>
      )}

      {style === 'before-after' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Rajdhani, sans-serif' }}>Before / After Panel — Surface Behaviour</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, maxWidth: 600, border: '1px solid #0d0d0d' }}>
            {/* Before */}
            <div style={{ padding: 24, borderRight: '1px solid #0d0d0d' }}>
              <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.25em', marginBottom: 16 }}>WITHOUT COATING</div>
              {[
                { label: 'Static charge', value: 'HIGH', bad: true },
                { label: 'Dust attraction', value: 'HIGH', bad: true },
                { label: 'Contact angle', value: '40°', bad: true },
                { label: 'Self-cleaning', value: 'NONE', bad: true },
                { label: 'Wash frequency', value: 'Weekly', bad: true },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid #0a0a0a' }}>
                  <span style={{ color: '#333', fontSize: 11 }}>{row.label}</span>
                  <span style={{ color: '#6B2D0F', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif' }}>{row.value}</span>
                </div>
              ))}
            </div>
            {/* After */}
            <div style={{ padding: 24, background: '#050505' }}>
              <div style={{ color: C, fontSize: 9, letterSpacing: '0.25em', marginBottom: 16 }}>WITH CERAPHENE</div>
              {[
                { label: 'Static charge', value: 'NEUTRAL', bad: false },
                { label: 'Dust attraction', value: 'MINIMAL', bad: false },
                { label: 'Contact angle', value: '115°', bad: false },
                { label: 'Self-cleaning', value: 'ACTIVE', bad: false },
                { label: 'Wash frequency', value: 'Monthly', bad: false },
              ].map((row, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10, paddingBottom: 10, borderBottom: '1px solid #0a0a0a' }}>
                  <span style={{ color: '#555', fontSize: 11 }}>{row.label}</span>
                  <span style={{ color: C, fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif' }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: 12, color: '#2a2a2a', fontSize: 10, fontStyle: 'italic' }}>
            Anti-static property unique to graphene-enhanced coatings. Standard SiO₂ coatings are electrically insulating.
          </div>
        </div>
      )}
    </div>
  )
}
