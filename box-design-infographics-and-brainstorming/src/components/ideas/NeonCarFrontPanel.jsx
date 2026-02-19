import React, { useState } from 'react'

const C = '#64748B'
const BLUE = '#1E40AF'
const BLUE_GLOW = '#3B82F6'

function NeonCar({ width, height }) {
  const sw = 1.4
  return (
    <svg viewBox="0 0 700 260" fill="none" xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
      <defs>
        <filter id="neonGlow">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <filter id="neonGlowStrong">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feMerge><feMergeNode in="blur" /><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
        </filter>
        <linearGradient id="carGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={BLUE_GLOW} stopOpacity="0" />
          <stop offset="50%" stopColor={BLUE_GLOW} stopOpacity="0.15" />
          <stop offset="100%" stopColor={BLUE_GLOW} stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Glow underlay */}
      <path d="M 75 195 L 75 155 Q 80 128 112 112 L 205 74 Q 255 50 335 46 L 465 44 Q 535 44 572 76 Q 598 98 614 140 L 622 195 Z"
        stroke={BLUE_GLOW} strokeWidth={8} opacity={0.15} filter="url(#neonGlowStrong)" />
      {/* Main car body */}
      <path d="M 75 195 L 75 155 Q 80 128 112 112 L 205 74 Q 255 50 335 46 L 465 44 Q 535 44 572 76 Q 598 98 614 140 L 622 195 Z"
        stroke={BLUE_GLOW} strokeWidth={sw} filter="url(#neonGlow)" />
      <path d="M 205 74 Q 255 50 335 46 L 465 44 Q 515 44 548 68 L 575 107 L 225 110 Z"
        stroke={BLUE_GLOW} strokeWidth={sw} filter="url(#neonGlow)" />
      <line x1="205" y1="74" x2="225" y2="110" stroke={BLUE_GLOW} strokeWidth={sw} />
      <path d="M 575 107 Q 600 107 618 125 L 622 160" stroke={BLUE_GLOW} strokeWidth={sw} />
      {/* Windows */}
      <path d="M 230 110 L 575 107 L 570 155 L 220 158 Z" stroke={BLUE_GLOW} strokeWidth={sw * 0.6} fill={BLUE_GLOW} fillOpacity={0.04} />
      {/* Bumpers */}
      <path d="M 75 172 L 42 168 L 40 183 L 74 187" stroke={BLUE_GLOW} strokeWidth={sw} />
      <path d="M 622 172 L 650 168 L 652 183 L 623 190" stroke={BLUE_GLOW} strokeWidth={sw} />
      {/* Wheel arches */}
      <path d="M 75 195 Q 75 152 115 132 Q 135 123 162 123 Q 195 123 212 148 Q 224 168 220 195" stroke={BLUE_GLOW} strokeWidth={sw} />
      <path d="M 468 195 Q 463 152 493 135 Q 515 124 542 124 Q 570 124 590 142 Q 610 162 608 195" stroke={BLUE_GLOW} strokeWidth={sw} />
      {/* Wheels */}
      <circle cx="162" cy="198" r="38" stroke={BLUE_GLOW} strokeWidth={sw} filter="url(#neonGlow)" />
      <circle cx="162" cy="198" r="17" stroke={BLUE_GLOW} strokeWidth={sw * 0.7} opacity={0.6} />
      <circle cx="542" cy="198" r="38" stroke={BLUE_GLOW} strokeWidth={sw} filter="url(#neonGlow)" />
      <circle cx="542" cy="198" r="17" stroke={BLUE_GLOW} strokeWidth={sw * 0.7} opacity={0.6} />
      {/* Ground line */}
      <line x1="36" y1="238" x2="666" y2="238" stroke={BLUE_GLOW} strokeWidth={sw * 0.3} opacity={0.3} />
      {/* Scan overlay */}
      <path d="M 230 110 L 575 107 L 570 155 L 220 158 Z" fill="url(#carGrad)" opacity={0.6} />
    </svg>
  )
}

const BADGE_VARIANTS = [
  { id: 'pill', name: 'Pill Badges' },
  { id: 'boxes', name: 'Box Badges' },
  { id: 'minimal', name: 'Minimal Tags' },
]

const SPECS = [
  { label: '9H+ HARDNESS', short: '9H+' },
  { label: '115° HYDROPHOBICITY', short: '115°' },
  { label: '700°C HEAT RESISTANCE', short: '700°C' },
]

export default function NeonCarFrontPanel() {
  const [badgeStyle, setBadgeStyle] = useState('pill')
  const [showHashtag, setShowHashtag] = useState(true)
  const [accentColor, setAccentColor] = useState('#1E40AF')

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Box Side Concepts — Front Panel</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Neon Car — Front Panel</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          Blue neon car illustration on dark, three spec badges, hashtag. High visual impact for automotive retail shelf.
        </p>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: 16, marginBottom: 28, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {BADGE_VARIANTS.map(v => (
            <button key={v.id} onClick={() => setBadgeStyle(v.id)} style={{
              padding: '6px 12px', borderRadius: 5,
              border: `1px solid ${badgeStyle === v.id ? C : '#1f1f1f'}`,
              background: badgeStyle === v.id ? '#111' : 'transparent',
              color: badgeStyle === v.id ? 'white' : '#555',
              cursor: 'pointer', fontSize: 11,
            }}>{v.name}</button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <span style={{ color: '#444', fontSize: 11 }}>Accent:</span>
          {['#1E40AF', '#0F172A', '#7C3AED', '#047857'].map(col => (
            <div key={col} onClick={() => setAccentColor(col)} style={{
              width: 20, height: 20, borderRadius: '50%', background: col,
              border: `2px solid ${accentColor === col ? 'white' : 'transparent'}`,
              cursor: 'pointer',
            }} />
          ))}
        </div>
        <button onClick={() => setShowHashtag(!showHashtag)} style={{
          padding: '6px 12px', borderRadius: 5,
          border: `1px solid ${showHashtag ? C : '#1f1f1f'}`,
          background: 'transparent', color: showHashtag ? 'white' : '#555',
          cursor: 'pointer', fontSize: 11,
        }}>#Hashtag {showHashtag ? 'ON' : 'OFF'}</button>
      </div>

      {/* Front panel mockup — 499×638px equivalent */}
      <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
        <div style={{
          width: 320, height: 410, background: '#050505',
          border: '1px solid #0d0d0d', position: 'relative', overflow: 'hidden',
          flexShrink: 0,
        }}>
          {/* Hex pattern bg */}
          <svg style={{ position: 'absolute', inset: 0, opacity: 0.06 }} width="320" height="410">
            {Array.from({ length: 12 }, (_, row) =>
              Array.from({ length: 8 }, (_, col) => {
                const size = 22
                const xOff = (row % 2) * size * 0.866
                const x = col * size * 1.732 + xOff
                const y = row * size * 1.5
                const pts = Array.from({ length: 6 }, (_, i) => {
                  const a = (Math.PI / 180) * (60 * i - 30)
                  return `${x + size * Math.cos(a)},${y + size * Math.sin(a)}`
                }).join(' ')
                return <polygon key={`${row}-${col}`} points={pts} fill="none" stroke="white" strokeWidth={0.5} />
              })
            )}
          </svg>

          {/* Blue glow gradient */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '60%', background: `linear-gradient(to top, ${accentColor}22 0%, transparent 100%)`, pointerEvents: 'none' }} />

          {/* Top bar */}
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, padding: '10px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 3 }}>
            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 8, letterSpacing: '0.3em', fontFamily: 'Rajdhani, sans-serif' }}>MONOATOM LABS</span>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: BLUE_GLOW, boxShadow: `0 0 6px ${BLUE_GLOW}` }} />
          </div>

          {/* Product name */}
          <div style={{ position: 'absolute', top: 28, left: 0, right: 0, textAlign: 'center', zIndex: 3, padding: '0 12px' }}>
            <div style={{ color: 'white', fontSize: 36, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.04em', lineHeight: 1, textShadow: `0 0 30px ${accentColor}80` }}>
              CERAPHENE
              <sup style={{ fontSize: 12, color: BLUE_GLOW }}>™</sup>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 7.5, letterSpacing: '0.2em', marginTop: 4, fontFamily: 'Inter, sans-serif' }}>
              GRAPHENE-ENHANCED CERAMIC COATING
            </div>
          </div>

          {/* Spec badges */}
          <div style={{ position: 'absolute', top: 88, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 4, zIndex: 3, padding: '0 10px' }}>
            {SPECS.map((s, i) => (
              badgeStyle === 'pill' ? (
                <div key={i} style={{
                  padding: '3px 8px', border: `1px solid ${accentColor}80`,
                  borderRadius: 99, background: `${accentColor}20`,
                  color: 'rgba(255,255,255,0.7)', fontSize: 6, letterSpacing: '0.1em',
                  fontFamily: 'Rajdhani, sans-serif', whiteSpace: 'nowrap',
                }}>{s.label}</div>
              ) : badgeStyle === 'boxes' ? (
                <div key={i} style={{
                  padding: '3px 8px', border: `1px solid ${accentColor}60`,
                  background: `${accentColor}15`,
                  color: 'rgba(255,255,255,0.6)', fontSize: 6, letterSpacing: '0.1em',
                  fontFamily: 'Rajdhani, sans-serif', whiteSpace: 'nowrap',
                }}>{s.label}</div>
              ) : (
                <div key={i} style={{
                  color: '#64748B', fontSize: 7, letterSpacing: '0.1em',
                  fontFamily: 'Rajdhani, sans-serif', whiteSpace: 'nowrap',
                  borderBottom: `1px solid ${accentColor}40`, paddingBottom: 2,
                }}>{s.label}</div>
              )
            ))}
          </div>

          {/* 9H+ badge circle */}
          <div style={{
            position: 'absolute', left: 14, bottom: 90, width: 44, height: 44,
            borderRadius: '50%', border: `1.5px solid ${accentColor}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: `${accentColor}20`, zIndex: 4,
          }}>
            <div style={{ color: 'white', fontSize: 13, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', textShadow: `0 0 10px ${BLUE_GLOW}` }}>9H+</div>
          </div>

          {/* Neon car */}
          <div style={{ position: 'absolute', top: 100, left: -10, right: -10, zIndex: 3 }}>
            <NeonCar width={340} height={130} />
          </div>

          {/* Bottom bar */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '12px 16px', zIndex: 4, borderTop: `1px solid ${accentColor}30`, background: `linear-gradient(to right, ${accentColor}20, transparent)` }}>
            <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: 7.5, fontFamily: 'Inter, sans-serif', lineHeight: 1.5 }}>
              Diamond-Hard Protection. Graphene Performance.<br />
              <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 7 }}>For Automotive | Marine | Aviation | Industrial</span>
            </div>
            {showHashtag && (
              <div style={{ color: accentColor === '#1E40AF' ? BLUE_GLOW : accentColor, fontSize: 7.5, marginTop: 4, fontFamily: 'Rajdhani, sans-serif', opacity: 0.7 }}>#DetailingRefined</div>
            )}
          </div>
        </div>

        {/* Notes */}
        <div style={{ flex: 1, minWidth: 220 }}>
          <div style={{ color: '#333', fontSize: 10, letterSpacing: '0.2em', marginBottom: 12 }}>DESIGN NOTES</div>
          {[
            { label: 'Car illustration', note: 'Neon SVG outline with glow filter — lightweight, scalable, no image needed. Can be swapped for motorcycle, boat.' },
            { label: 'Accent color', note: 'Royal blue creates premium tech feel. Try purple for luxury tier, green for eco angle.' },
            { label: '9H+ badge', note: 'Circle badge on lower-left — quick visual shorthand for hardness claim at shelf.' },
            { label: 'Spec badges', note: 'Three specs in a row below the name. Pill/box/minimal variants — all print-safe.' },
            { label: '#DetailingRefined', note: 'Hashtag drives social content. Positioned bottom so it\'s a call-to-action, not competing with product name.' },
            { label: 'Application line', note: '"For Automotive | Marine | Aviation | Industrial" — signals broad utility, increases buyer pool.' },
          ].map((item, i) => (
            <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid #0a0a0a' }}>
              <div style={{ color: C, fontSize: 11, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, marginBottom: 3 }}>{item.label}</div>
              <div style={{ color: '#444', fontSize: 11, lineHeight: 1.5 }}>{item.note}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
