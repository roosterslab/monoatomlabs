import React, { useState } from 'react'

const C = '#64748B'

function WaterDrop({ cx, cy, surfY, angle, r, color, scale, label, dim }) {
  const fs = scale || 1
  const θ = angle * Math.PI / 180
  const hw = r * Math.sin(θ)
  const lx = cx - hw, rx = cx + hw
  return (
    <g>
      <path d={`M ${lx},${surfY} A ${r},${r} 0 0 1 ${rx},${surfY}`}
        fill={dim ? `${color}0a` : `${color}22`}
        stroke={dim ? '#444' : color}
        strokeWidth={1.5 * fs} />
      {/* Angle arc */}
      <path d={`M ${lx + 18 * fs},${surfY} A ${18 * fs},${18 * fs} 0 0 1 ${lx + 18 * fs * Math.cos(Math.PI - θ)},${surfY - 18 * fs * Math.sin(Math.PI - θ)}`}
        fill="none" stroke={dim ? '#333' : color} strokeWidth={0.8 * fs} opacity="0.6" />
      {/* Label */}
      <text x={cx} y={surfY - (dim ? r * 0.3 : r * 0.75)} fill={dim ? '#444' : 'white'} fontSize={16 * fs} textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontWeight="800">{label}</text>
    </g>
  )
}

const STYLES = [
  { id: 'split', name: 'Split Panel', desc: 'Side-by-side surface comparison' },
  { id: 'overlay', name: 'Overlay Text', desc: 'Data overlaid on the visual' },
  { id: 'minimal', name: 'Minimal', desc: 'Just the drop — let the angle speak' },
]

export default function WaterBeadScience() {
  const [style, setStyle] = useState('split')
  const W = 700, H = 280, surfY = H * 0.78, r = H * 0.35

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Infographic Idea — Water Science</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Contact Angle Visualization Styles</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>Three ways to show the 40° vs 115° contact angle story. Key science that proves superhydrophobicity.</p>
      </div>

      {/* Style selector */}
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

      {/* Preview area */}
      <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, marginBottom: 24 }}>
        {style === 'split' && (
          <div style={{ display: 'flex', gap: 0 }}>
            {/* Left: bare */}
            <div style={{ flex: 1, borderRight: '1px solid #1a1a1a', paddingRight: 32, textAlign: 'center' }}>
              <div style={{ color: '#444', fontSize: 11, letterSpacing: '0.25em', marginBottom: 16, fontFamily: 'Rajdhani, sans-serif' }}>BARE SURFACE</div>
              <svg width="100%" viewBox={`0 0 ${W / 2} ${H}`}>
                <line x1={W * 0.04} y1={surfY} x2={W * 0.46} y2={surfY} stroke="#333" strokeWidth={1.5} />
                {Array.from({ length: 6 }, (_, i) => (
                  <line key={i} x1={W * 0.04 + i * W * 0.07} y1={surfY} x2={W * 0.04 + i * W * 0.07 + 8} y2={surfY + 8} stroke="#222" strokeWidth={0.8} />
                ))}
                <WaterDrop cx={W * 0.25} cy={surfY} surfY={surfY} angle={40} r={r * 0.6} color={C} scale={1} label="40°" dim />
                <text x={W * 0.05} y={surfY + 22} fill="#333" fontSize={9} fontFamily="Inter, sans-serif">Spreads. Stains. Absorbs.</text>
              </svg>
            </div>
            {/* Right: CERAPHENE */}
            <div style={{ flex: 1, paddingLeft: 32, textAlign: 'center' }}>
              <div style={{ color: C, fontSize: 11, letterSpacing: '0.25em', marginBottom: 16, fontFamily: 'Rajdhani, sans-serif' }}>CERAPHENE COATED</div>
              <svg width="100%" viewBox={`0 0 ${W / 2} ${H}`}>
                <line x1={W * 0.04} y1={surfY} x2={W * 0.46} y2={surfY} stroke={C} strokeWidth={1.5} opacity="0.5" />
                <rect x={W * 0.04} y={surfY - 2} width={W * 0.42} height={3} fill={C} opacity="0.15" rx="1" />
                <WaterDrop cx={W * 0.25} cy={surfY} surfY={surfY} angle={115} r={r * 0.75} color={C} scale={1} label="115°" />
                <text x={W * 0.05} y={surfY + 22} fill={C} fontSize={9} fontFamily="Inter, sans-serif">Beads. Rolls off. Self-cleans.</text>
              </svg>
            </div>
          </div>
        )}

        {style === 'overlay' && (
          <svg width="100%" viewBox={`0 0 ${W} ${H}`}>
            <line x1={W * 0.08} y1={surfY} x2={W * 0.92} y2={surfY} stroke="#333" strokeWidth={1} />
            {/* Left drop */}
            <WaterDrop cx={W * 0.28} cy={surfY} surfY={surfY} angle={40} r={r * 0.55} color={C} scale={1} label="40°" dim />
            {/* Arrow */}
            <text x={W * 0.5} y={surfY - r * 0.3} fill="#2a2a2a" fontSize={22} textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontWeight="900">VS</text>
            {/* Right drop */}
            <WaterDrop cx={W * 0.72} cy={surfY} surfY={surfY} angle={115} r={r * 0.72} color={C} scale={1} label="115°" />
            {/* Labels */}
            <text x={W * 0.28} y={H * 0.92} fill="#333" fontSize={9} textAnchor="middle" fontFamily="Inter, sans-serif">Bare Paint</text>
            <text x={W * 0.72} y={H * 0.92} fill="white" fontSize={9} textAnchor="middle" fontFamily="Inter, sans-serif">CERAPHENE</text>
            {/* Bottom note */}
            <text x={W * 0.5} y={H - 6} fill={C} fontSize={8} textAnchor="middle" fontFamily="Rajdhani, sans-serif" letterSpacing="3">SUPERHYDROPHOBIC — LOTUS EFFECT</text>
          </svg>
        )}

        {style === 'minimal' && (
          <div style={{ textAlign: 'center' }}>
            <svg width="320" height="200" style={{ display: 'block', margin: '0 auto' }}>
              <line x1={10} y1={160} x2={310} y2={160} stroke={C} strokeWidth={1.5} opacity="0.4" />
              <rect x={10} y={158} width={300} height={3} fill={C} opacity="0.1" rx="1" />
              {(() => {
                const cx = 160, sy = 160, r = 100, θ = 115 * Math.PI / 180
                const hw = r * Math.sin(θ)
                return (
                  <g>
                    <path d={`M ${cx - hw},${sy} A ${r},${r} 0 0 1 ${cx + hw},${sy}`} fill={`${C}18`} stroke={C} strokeWidth={2} />
                    <path d={`M ${cx - hw + 22},${sy} A ${22},${22} 0 0 1 ${cx - hw + 22 * Math.cos(Math.PI - θ)},${sy - 22 * Math.sin(Math.PI - θ)}`} fill="none" stroke={C} strokeWidth={0.8} opacity="0.6" />
                  </g>
                )
              })()}
            </svg>
            <div style={{ color: 'white', fontSize: 48, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', marginTop: 8 }}>115°</div>
            <div style={{ color: C, fontSize: 12, letterSpacing: '0.3em', fontFamily: 'Rajdhani, sans-serif', marginTop: 4 }}>SUPERHYDROPHOBIC</div>
            <div style={{ color: '#444', fontSize: 11, marginTop: 6 }}>Water beads. Rolls off. Self-cleans.</div>
          </div>
        )}
      </div>

      {/* Science notes */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
        {[
          { angle: '<90°', label: 'Hydrophilic', note: 'Water spreads. Surface is wet. Contaminants stick.', warn: true },
          { angle: '90°', label: 'Neutral', note: 'Water neither spreads nor beads significantly.', neutral: true },
          { angle: '115°+', label: 'Superhydrophobic', note: 'Water beads to >90° — rolls off carrying dirt with it.', good: true },
        ].map((row, i) => (
          <div key={i} style={{ padding: 14, background: '#111', border: `1px solid ${row.good ? C + '40' : '#1a1a1a'}`, borderRadius: 8 }}>
            <div style={{ color: row.good ? 'white' : row.warn ? '#444' : '#555', fontSize: 22, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{row.angle}</div>
            <div style={{ color: row.good ? C : '#444', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', margin: '4px 0' }}>{row.label}</div>
            <div style={{ color: '#444', fontSize: 11, lineHeight: 1.5 }}>{row.note}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
