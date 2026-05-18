import React from 'react'
import BackBase from '../../base/back'
import { Sun, Thermometer, Droplets, TrendingUp } from 'lucide-react'

const C = '#f59e0b'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

// Solar panel power output comparison bars
function SolarOutputChart({ width, height, scale }) {
  const fs = scale
  const systems = [
    { label: '10 kW', base: 10, graffisol: 11.1 },
    { label: '100 kW', base: 100, graffisol: 111 },
    { label: '1 MW', base: 1000, graffisol: 1110 },
    { label: '10 MW', base: 10000, graffisol: 11100 },
  ]
  const maxVal = 11100
  const barAreaW = width * 0.8
  const barH = 18 * fs
  const rowH = 56 * fs
  const startX = width * 0.1

  return (
    <svg width={width} height={height} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="solarBarGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={C} stopOpacity="0.7" />
          <stop offset="100%" stopColor={C} stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* Title */}
      <text x={width / 2} y={22 * fs} textAnchor="middle" fill="#666" fontSize={9 * fs} fontFamily="'Rajdhani', sans-serif" letterSpacing="0.2em" fontWeight="700">POWER OUTPUT COMPARISON</text>

      {systems.map((sys, i) => {
        const y = 40 * fs + i * rowH
        const baseW = (sys.base / maxVal) * barAreaW
        const grafW = (sys.graffisol / maxVal) * barAreaW
        return (
          <g key={i}>
            {/* System label */}
            <text x={startX - 6 * fs} y={y + barH * 0.75} textAnchor="end" fill="#888" fontSize={8.5 * fs} fontFamily="'Rajdhani', sans-serif" fontWeight="600">{sys.label}</text>
            {/* Base bar */}
            <rect x={startX} y={y} width={baseW} height={barH * 0.85} rx={2} fill="rgba(120,120,120,0.35)" />
            {/* Graffisol bar */}
            <rect x={startX} y={y + barH * 0.9} width={grafW} height={barH * 0.85} rx={2} fill="url(#solarBarGrad)" />
            {/* Value labels */}
            <text x={startX + grafW + 5 * fs} y={y + barH * 1.5} fill={C} fontSize={8 * fs} fontFamily="'Rajdhani', sans-serif" fontWeight="700">
              {sys.graffisol >= 1000 ? `${sys.graffisol / 1000}MW` : `${sys.graffisol}kW`}
            </text>
          </g>
        )
      })}

      {/* Legend */}
      <rect x={startX} y={height - 18 * fs} width={12 * fs} height={6 * fs} rx={1} fill="rgba(120,120,120,0.35)" />
      <text x={startX + 16 * fs} y={height - 12 * fs} fill="#666" fontSize={7.5 * fs} fontFamily="'Inter', sans-serif">Standard</text>
      <rect x={startX + 80 * fs} y={height - 18 * fs} width={12 * fs} height={6 * fs} rx={1} fill={C} />
      <text x={startX + 96 * fs} y={height - 12 * fs} fill={C} fontSize={7.5 * fs} fontFamily="'Inter', sans-serif" fontWeight="600">With Graffisol</text>
    </svg>
  )
}

function TechSpec({ icon: Icon, title, val, desc, align = 'left', scale }) {
  const isRight = align === 'right'
  const fs = scale
  return (
    <div style={{ display: 'flex', flexDirection: isRight ? 'row-reverse' : 'row', alignItems: 'flex-start', gap: 16 * fs, textAlign: isRight ? 'right' : 'left', padding: 12 * fs }}>
      <div style={{ width: 42 * fs, height: 42 * fs, borderRadius: 8, background: `rgba(245, 158, 11, 0.08)`, border: `1px solid rgba(245, 158, 11, 0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon size={22 * fs} color={C} strokeWidth={2.5} />
      </div>
      <div>
        <div style={{ color: C, fontSize: 13 * fs, fontWeight: 800, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase', marginBottom: 4 }}>{title}</div>
        <div style={{ color: 'white', fontSize: 18 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif", margin: '4px 0', textShadow: '0 0 15px rgba(0,0,0,0.6)', letterSpacing: '0.05em' }}>{val}</div>
        <div style={{ color: '#ccc', fontSize: 12 * fs, maxWidth: 190 * fs, lineHeight: 1.35, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{desc}</div>
      </div>
    </div>
  )
}

export default function BackPanel({ scale = 1, surf = DEFAULT_SURF }) {
  const W = Math.round(1494 * scale)
  const H = Math.round(638 * scale)
  const fs = scale

  return (
    <BackBase scale={scale} surf={surf}>

      {/* Crosshair guides */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(255,255,255,0.04)' }} />
        <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'rgba(255,255,255,0.04)' }} />
      </div>

      {/* Center chart */}
      <div style={{ position: 'absolute', left: Math.round(W * 0.28), right: Math.round(W * 0.28), top: Math.round(H * 0.1), bottom: Math.round(H * 0.1), display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
        <SolarOutputChart width={Math.round(W * 0.44)} height={Math.round(H * 0.72)} scale={scale} />
        <div style={{ position: 'absolute', bottom: -20 * fs, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 9 * fs, color: '#444', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>CONSISTENT ACROSS ALL SYSTEM SIZES</div>
          <div style={{ width: 40 * fs, height: 2, background: C, marginTop: 4 }} />
        </div>
      </div>

      {/* Left specs */}
      <div style={{ position: 'absolute', inset: 0, padding: 30 * fs, display: 'flex', justifyContent: 'space-between', zIndex: 4, pointerEvents: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40 * fs }}>
          <div style={{ marginBottom: 10 * fs, borderLeft: `3px solid ${C}`, paddingLeft: 10 * fs }}>
            <div style={{ color: C, fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>Solar Performance</div>
          </div>
          <TechSpec icon={Sun} title="Power Gain" val="+10–12%" desc="Consistent across all system sizes, from residential to utility scale." scale={scale} />
          <TechSpec icon={Thermometer} title="Temperature" val="5–6°C Drop" desc="Direct efficiency boost from reduced panel operating temperature." scale={scale} />
        </div>

        {/* Right specs */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40 * fs, textAlign: 'right', alignItems: 'flex-end' }}>
          <div style={{ marginBottom: 10 * fs, borderRight: `3px solid ${C}`, paddingRight: 10 * fs }}>
            <div style={{ color: C, fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>Maintenance & ROI</div>
          </div>
          <TechSpec icon={Droplets} title="Soiling Control" val="30–40% Less" desc="Self-cleaning lotus effect keeps panels clear longer." align="right" scale={scale} />
          <TechSpec icon={TrendingUp} title="ROI" val="< 2 months" desc="On coating cost at current solar tariffs." align="right" scale={scale} />
        </div>
      </div>

    </BackBase>
  )
}
