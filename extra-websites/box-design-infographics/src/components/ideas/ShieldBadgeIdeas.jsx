import React, { useState } from 'react'
import { Shield, Zap, Award } from 'lucide-react'

const C = '#64748B'

const BADGES = [
  {
    id: 'shield-9h',
    label: '9H+ Shield Badge',
    desc: 'Classic hardness badge. Shield + 9H+ text. Perfect corner stamp.',
    render: (size) => (
      <div style={{ width: size, height: size, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', gap: size * 0.04 }}>
        <Shield size={size} color={C} strokeWidth={0.8} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
        <div style={{ color: 'white', fontSize: size * 0.28, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1, zIndex: 1 }}>9H+</div>
        <div style={{ color: C, fontSize: size * 0.1, letterSpacing: '0.1em', fontFamily: 'Rajdhani, sans-serif', zIndex: 1 }}>HARDNESS</div>
      </div>
    )
  },
  {
    id: 'cert-circle',
    label: 'Certification Circle',
    desc: 'Circular badge with rotating text border. Test-verified feel.',
    render: (size) => (
      <div style={{ width: size, height: size, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width={size} height={size} style={{ position: 'absolute', inset: 0 }}>
          <circle cx={size / 2} cy={size / 2} r={size * 0.44} fill="none" stroke={C} strokeWidth={size * 0.02} opacity="0.3" strokeDasharray={`${size * 0.06} ${size * 0.03}`} />
          <circle cx={size / 2} cy={size / 2} r={size * 0.36} fill="none" stroke={C} strokeWidth={size * 0.01} opacity="0.15" />
          <text style={{ fontSize: size * 0.08, fontFamily: 'Rajdhani, sans-serif', fill: '#444', letterSpacing: '3' }}>
            <textPath href="#circle-path">INDEPENDENTLY VERIFIED · LAB TESTED · CERTIFIED ·</textPath>
          </text>
          <path id="circle-path" d={`M ${size / 2},${size * 0.08} A ${size * 0.42},${size * 0.42} 0 1 1 ${size / 2 - 0.01},${size * 0.08}`} fill="none" />
        </svg>
        <div style={{ textAlign: 'center', zIndex: 1 }}>
          <div style={{ color: 'white', fontSize: size * 0.24, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>115°</div>
          <div style={{ color: C, fontSize: size * 0.09, letterSpacing: '0.08em', fontFamily: 'Rajdhani, sans-serif' }}>VERIFIED</div>
        </div>
      </div>
    )
  },
  {
    id: 'corner-stamp',
    label: 'Corner Stamp',
    desc: 'Minimal rectangle stamp. Subtle corner placement on front panel.',
    render: (size) => (
      <div style={{ width: size * 0.7, height: size * 0.35, border: `${size * 0.02}px solid ${C}`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: size * 0.03 }}>
        <div style={{ color: '#333', fontSize: size * 0.1, letterSpacing: '0.2em', fontFamily: 'Inter, sans-serif' }}>GRAPHENE CERAMIC</div>
        <div style={{ color: 'white', fontSize: size * 0.22, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em', lineHeight: 1 }}>CERAPHENE</div>
        <div style={{ color: C, fontSize: size * 0.09, letterSpacing: '0.15em', fontFamily: 'Rajdhani, sans-serif' }}>9H+ · 115° · 4YR</div>
      </div>
    )
  },
  {
    id: 'hex-badge',
    label: 'Hex Badge',
    desc: 'Hexagon shape — graphene lattice reference. Distinctive geometry.',
    render: (size) => {
      const r = size * 0.42
      const cx = size / 2, cy = size / 2
      const pts = Array.from({ length: 6 }, (_, i) => {
        const a = (i * 60 + 30) * Math.PI / 180
        return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
      }).join(' ')
      return (
        <div style={{ width: size, height: size, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <svg style={{ position: 'absolute', inset: 0 }} width={size} height={size}>
            <polygon points={pts} fill="none" stroke={C} strokeWidth={size * 0.02} opacity="0.4" />
          </svg>
          <div style={{ textAlign: 'center', zIndex: 1 }}>
            <div style={{ color: C, fontSize: size * 0.09, letterSpacing: '0.15em', fontFamily: 'Rajdhani, sans-serif' }}>CERAPHENE</div>
            <div style={{ color: 'white', fontSize: size * 0.26, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>9H+</div>
          </div>
        </div>
      )
    }
  },
  {
    id: 'award-ribbon',
    label: 'Award Ribbon',
    desc: 'Award-style badge. Communicates quality achievement and prestige.',
    render: (size) => (
      <div style={{ width: size * 0.8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
        <div style={{ width: size * 0.6, height: size * 0.6, borderRadius: '50%', border: `${size * 0.02}px solid ${C}40`, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: `${C}08` }}>
          <Award size={size * 0.22} color={C} strokeWidth={1} />
          <div style={{ color: 'white', fontSize: size * 0.16, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', marginTop: size * 0.03 }}>9H+</div>
          <div style={{ color: '#333', fontSize: size * 0.08, letterSpacing: '0.1em' }}>HARDNESS</div>
        </div>
        <div style={{ background: C, color: '#0a0a0a', fontSize: size * 0.09, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em', padding: `${size * 0.04}px ${size * 0.12}px`, marginTop: -size * 0.04, clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 10% 100%)' }}>
          CERAPHENE
        </div>
      </div>
    )
  },
  {
    id: 'lightning-mark',
    label: 'Performance Mark',
    desc: 'Zap/lightning motif. High energy, sporty brand identity for automotive audience.',
    render: (size) => (
      <div style={{ width: size, height: size, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: size * 0.04, background: `${C}08`, border: `1px solid ${C}20`, borderRadius: size * 0.08 }}>
        <Zap size={size * 0.3} color={C} strokeWidth={1.5} />
        <div style={{ color: 'white', fontSize: size * 0.2, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>9H+</div>
        <div style={{ color: '#333', fontSize: size * 0.08, letterSpacing: '0.15em' }}>CERAPHENE</div>
      </div>
    )
  },
]

export default function ShieldBadgeIdeas() {
  const [selected, setSelected] = useState('shield-9h')
  const sizes = [40, 80, 120]

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Brand Widgets</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Badge & Widget Ideas</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>Small graphic elements to stamp on the box — corners, bands, certifications. Click any to see at multiple sizes.</p>
      </div>

      {/* Badge gallery */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, marginBottom: 32 }}>
        {BADGES.map(b => (
          <div key={b.id} onClick={() => setSelected(b.id)} style={{ cursor: 'pointer', textAlign: 'center' }}>
            <div style={{
              padding: 16, background: '#050505',
              border: `1px solid ${selected === b.id ? C : '#1f1f1f'}`,
              borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 120, height: 120, transition: 'border-color 0.2s',
            }}>
              {b.render(80)}
            </div>
            <div style={{ color: selected === b.id ? 'white' : '#555', fontSize: 11, marginTop: 8, fontWeight: selected === b.id ? 700 : 400, transition: 'color 0.2s', maxWidth: 120 }}>{b.label}</div>
          </div>
        ))}
      </div>

      {/* Selected — scaled preview */}
      {(() => {
        const b = BADGES.find(x => x.id === selected)
        return (
          <div style={{ background: '#050505', border: `1px solid ${C}30`, borderRadius: 8, padding: 32 }}>
            <div style={{ color: C, fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 16 }}>{b.label} — Multi-size Preview</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap' }}>
              {sizes.map(sz => (
                <div key={sz} style={{ textAlign: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: sz + 20, height: sz + 20 }}>
                    {b.render(sz)}
                  </div>
                  <div style={{ color: '#444', fontSize: 10, marginTop: 8 }}>{sz}px</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20, color: '#444', fontSize: 12, lineHeight: 1.7 }}>{b.desc}</div>
          </div>
        )
      })()}
    </div>
  )
}
