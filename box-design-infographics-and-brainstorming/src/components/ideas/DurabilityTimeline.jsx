import React from 'react'

const C = '#64748B'

const YEARS = [0, 1, 2, 3, 4, 5]

const BARE_CONDITION = [100, 82, 65, 50, 38, 28]
const CERAPHENE_CONDITION = [100, 98, 96, 94, 91, 88]

const EVENTS_BARE = [
  { year: 0.5, label: 'First swirl marks', y: 88 },
  { year: 1.2, label: 'UV fade begins', y: 76 },
  { year: 2, label: 'Oxidation visible', y: 62 },
  { year: 3.5, label: 'Paint pitting', y: 45 },
]

const EVENTS_CERA = [
  { year: 1, label: 'Still glossy', y: 98 },
  { year: 2.5, label: 'Self-cleaning active', y: 95 },
  { year: 4, label: '91% condition', y: 91 },
]

export default function DurabilityTimeline() {
  const W = 560, H = 280
  const padL = 60, padR = 30, padT = 30, padB = 50
  const innerW = W - padL - padR
  const innerH = H - padT - padB

  const toX = (year) => padL + (year / 5) * innerW
  const toY = (pct) => padT + innerH - (pct / 100) * innerH

  const barePath = YEARS.map((y, i) => `${i === 0 ? 'M' : 'L'} ${toX(y)},${toY(BARE_CONDITION[i])}`).join(' ')
  const ceraPath = YEARS.map((y, i) => `${i === 0 ? 'M' : 'L'} ${toX(y)},${toY(CERAPHENE_CONDITION[i])}`).join(' ')

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Data Arrangement — Durability</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>4+ Year Durability Timeline</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>Condition index over 5 years — bare paint vs CERAPHENE protected. Visualises the +25–40% lifecycle extension.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 32 }}>

        {/* Chart */}
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 16 }}>
          <div style={{ color: '#444', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Paint Condition Over Time (%)</div>
          <svg width="100%" viewBox={`0 0 ${W} ${H}`}>
            {/* Grid lines */}
            {[25, 50, 75, 100].map(pct => (
              <g key={pct}>
                <line x1={padL} y1={toY(pct)} x2={W - padR} y2={toY(pct)} stroke="#1a1a1a" strokeWidth="1" />
                <text x={padL - 6} y={toY(pct) + 4} fill="#333" fontSize="9" textAnchor="end" fontFamily="Inter, sans-serif">{pct}</text>
              </g>
            ))}

            {/* Year axis */}
            {YEARS.map(yr => (
              <g key={yr}>
                <line x1={toX(yr)} y1={padT} x2={toX(yr)} y2={padT + innerH} stroke="#111" strokeWidth="1" />
                <text x={toX(yr)} y={padT + innerH + 16} fill="#333" fontSize="9" textAnchor="middle" fontFamily="Inter, sans-serif">Yr {yr}</text>
              </g>
            ))}

            {/* Bare line */}
            <path d={barePath} fill="none" stroke="#2a2a2a" strokeWidth="2" strokeDasharray="4 4" />
            {BARE_CONDITION.map((v, i) => (
              <circle key={i} cx={toX(YEARS[i])} cy={toY(v)} r="3" fill="#2a2a2a" />
            ))}

            {/* CERAPHENE line */}
            <path d={ceraPath} fill="none" stroke={C} strokeWidth="2.5" />
            {CERAPHENE_CONDITION.map((v, i) => (
              <circle key={i} cx={toX(YEARS[i])} cy={toY(v)} r="4" fill={C} />
            ))}

            {/* Legend */}
            <line x1={padL} y1={H - 12} x2={padL + 20} y2={H - 12} stroke="#2a2a2a" strokeWidth="2" strokeDasharray="4 4" />
            <text x={padL + 26} y={H - 8} fill="#444" fontSize="9" fontFamily="Inter, sans-serif">Bare Paint</text>
            <line x1={padL + 100} y1={H - 12} x2={padL + 120} y2={H - 12} stroke={C} strokeWidth="2.5" />
            <text x={padL + 126} y={H - 8} fill={C} fontSize="9" fontFamily="Inter, sans-serif">CERAPHENE</text>
          </svg>
        </div>

        {/* Events + stats */}
        <div>
          <div style={{ marginBottom: 16 }}>
            <div style={{ color: '#444', fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10 }}>Bare Paint — Key Events</div>
            {EVENTS_BARE.map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                <div style={{ color: '#333', fontSize: 10, fontFamily: 'Rajdhani, sans-serif', width: 36, flexShrink: 0 }}>Yr {e.year}</div>
                <div style={{ color: '#444', fontSize: 11, lineHeight: 1.3 }}>{e.label}</div>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #1a1a1a', paddingTop: 16 }}>
            <div style={{ color: C, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 10 }}>CERAPHENE — Key Events</div>
            {EVENTS_CERA.map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                <div style={{ color: C, fontSize: 10, fontFamily: 'Rajdhani, sans-serif', width: 36, flexShrink: 0 }}>Yr {e.year}</div>
                <div style={{ color: '#777', fontSize: 11, lineHeight: 1.3 }}>{e.label}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, padding: 14, background: '#111', border: `1px solid ${C}30`, borderRadius: 8 }}>
            <div style={{ color: 'white', fontSize: 22, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>+40%</div>
            <div style={{ color: C, fontSize: 10, letterSpacing: '0.15em', marginBottom: 4 }}>LIFECYCLE EXTENSION</div>
            <div style={{ color: '#444', fontSize: 11, lineHeight: 1.5 }}>vs unprotected clearcoat under identical conditions</div>
          </div>
        </div>
      </div>
    </div>
  )
}
