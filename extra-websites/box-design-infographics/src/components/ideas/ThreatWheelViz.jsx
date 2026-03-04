import React, { useState } from 'react'
import { CloudRain, Bug, Disc, Flame, Wind, Zap, Sun, Droplets, Shield } from 'lucide-react'

const C = '#64748B'

const THREATS = [
  { icon: CloudRain, label: 'Acid Rain', angle: 0, detail: 'pH 4.2 — etches bare paint' },
  { icon: Bug, label: 'Bird Droppings', angle: 40, detail: 'Uric acid — permanent etch within hours' },
  { icon: Disc, label: 'Rock Chips', angle: 80, detail: 'High-velocity road debris impact' },
  { icon: Flame, label: 'Brake Heat', angle: 120, detail: 'Radiant heat up to 600°C' },
  { icon: Wind, label: 'Fallout', angle: 160, detail: 'Metallic particles embed in paint' },
  { icon: Zap, label: 'Road Chemicals', angle: 200, detail: 'Salt, de-icers, petrochemicals' },
  { icon: Sun, label: 'UV Radiation', angle: 240, detail: 'Oxidation and colour fade' },
  { icon: Droplets, label: 'Water Spots', angle: 280, detail: 'Mineral deposits from rain/tap water' },
  { icon: Shield, label: 'Oxidation', angle: 320, detail: 'Clearcoat degradation from oxygen' },
]

const STYLES = [
  { id: 'polar', name: 'Polar Wheel' },
  { id: 'grid', name: '3×3 Grid' },
  { id: 'list', name: 'Numbered List' },
]

export default function ThreatWheelViz() {
  const [style, setStyle] = useState('polar')
  const [hovered, setHovered] = useState(null)

  const W = 440, H = 360
  const cx = W / 2, cy = H / 2
  const outerR = Math.min(W, H) * 0.38
  const innerR = Math.min(W, H) * 0.14

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Infographic Idea — 9 Threats</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Threat Wheel — Style Explorations</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>Three layouts for showing "9 Threats. Zero Damage." on the box — hover on the polar view to learn each threat.</p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 24 }}>
        {STYLES.map(s => (
          <button key={s.id} onClick={() => setStyle(s.id)} style={{
            padding: '8px 16px', borderRadius: 6, border: `1px solid ${style === s.id ? C : '#1f1f1f'}`,
            background: style === s.id ? '#111' : 'transparent', color: style === s.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12, fontWeight: style === s.id ? 700 : 400, transition: 'all 0.2s',
          }}>
            {s.name}
          </button>
        ))}
      </div>

      <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

        {style === 'polar' && (
          <div style={{ position: 'relative', width: W, height: H }}>
            {/* SVG rings + lines */}
            <svg style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }} width={W} height={H}>
              <circle cx={cx} cy={cy} r={outerR + 18} fill="none" stroke={C} strokeWidth="0.5" opacity="0.12" strokeDasharray="4 4" />
              <circle cx={cx} cy={cy} r={innerR + 5} fill="none" stroke={C} strokeWidth="0.5" opacity="0.2" />
              {THREATS.map((t, i) => {
                const a = (t.angle - 90) * Math.PI / 180
                const x1 = cx + (innerR + 7) * Math.cos(a), y1 = cy + (innerR + 7) * Math.sin(a)
                const x2 = cx + (outerR - 6) * Math.cos(a), y2 = cy + (outerR - 6) * Math.sin(a)
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={hovered === i ? 'white' : C} strokeWidth={hovered === i ? 1.2 : 0.6} opacity={hovered === i ? 0.6 : 0.25} strokeDasharray="3 3" />
              })}
            </svg>

            {/* Center shield */}
            <div style={{ position: 'absolute', left: cx - innerR, top: cy - innerR, width: innerR * 2, height: innerR * 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(100,116,139,0.06)', border: `1px solid ${C}30`, borderRadius: '50%' }}>
              <Shield size={Math.round(innerR * 0.5)} color={C} strokeWidth={1.5} />
              <div style={{ color: 'white', fontSize: innerR * 0.22, fontWeight: 800, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.08em', marginTop: 3, textAlign: 'center', lineHeight: 1 }}>CERAPHENE</div>
            </div>

            {/* Threats */}
            {THREATS.map((t, i) => {
              const Icon = t.icon
              const a = (t.angle - 90) * Math.PI / 180
              const x = cx + outerR * Math.cos(a)
              const y = cy + outerR * Math.sin(a)
              const isLeft = x < cx - 20
              const isRight = x > cx + 20
              const active = hovered === i
              return (
                <div key={i} style={{
                  position: 'absolute', left: x - 40, top: y - 28, width: 80,
                  display: 'flex', flexDirection: 'column', alignItems: isLeft ? 'flex-end' : isRight ? 'flex-start' : 'center',
                  gap: 3, cursor: 'pointer', zIndex: 2,
                }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <Icon size={15} color={active ? 'white' : C} strokeWidth={1.5} />
                  <div style={{ color: active ? 'white' : '#555', fontSize: 9, textAlign: isLeft ? 'right' : isRight ? 'left' : 'center', lineHeight: 1.2, transition: 'color 0.15s' }}>{t.label}</div>
                </div>
              )
            })}

            {/* Hover info */}
            {hovered !== null && (
              <div style={{ position: 'absolute', bottom: -60, left: 0, right: 0, textAlign: 'center' }}>
                <div style={{ color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif' }}>{THREATS[hovered].label}</div>
                <div style={{ color: '#555', fontSize: 11, marginTop: 2 }}>{THREATS[hovered].detail}</div>
              </div>
            )}
          </div>
        )}

        {style === 'grid' && (
          <div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 16 }}>
              {THREATS.map((t, i) => {
                const Icon = t.icon
                return (
                  <div key={i} style={{ padding: 14, background: '#111', border: '1px solid #1f1f1f', borderRadius: 8, display: 'flex', alignItems: 'center', gap: 10 }}>
                    <Icon size={16} color={C} strokeWidth={1.5} />
                    <div>
                      <div style={{ color: 'white', fontSize: 11, fontWeight: 600 }}>{t.label}</div>
                      <div style={{ width: 20, height: 1, background: '#333', marginTop: 4 }} />
                    </div>
                  </div>
                )
              })}
            </div>
            <div style={{ textAlign: 'center', color: C, fontSize: 13, letterSpacing: '0.2em', fontFamily: 'Rajdhani, sans-serif' }}>9 THREATS · ZERO DAMAGE</div>
          </div>
        )}

        {style === 'list' && (
          <div style={{ width: 400 }}>
            <div style={{ color: C, fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 16, textAlign: 'center' }}>CERAPHENE BLOCKS ALL 9</div>
            {THREATS.map((t, i) => {
              const Icon = t.icon
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '8px 0', borderBottom: '1px solid #111' }}>
                  <div style={{ color: C, fontSize: 11, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, width: 20 }}>0{i + 1}</div>
                  <Icon size={13} color={C} strokeWidth={1.5} />
                  <div style={{ color: '#888', fontSize: 12, flex: 1 }}>{t.label}</div>
                  <div style={{ color: '#333', fontSize: 10 }}>{t.detail}</div>
                  <div style={{ color: C, fontSize: 10, fontWeight: 700 }}>✓</div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
