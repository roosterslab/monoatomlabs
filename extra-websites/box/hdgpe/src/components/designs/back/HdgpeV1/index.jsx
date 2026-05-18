import React from 'react'
import BackBase from '../../base/back'
import { Zap, Layers, Package, TrendingUp } from 'lucide-react'

const C = '#06b6d4'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

// Bar chart: 3 application categories comparing Standard HDPE vs HD-G-PE
function PolymerStrengthChart({ width, height, scale }) {
  const fs = scale
  const categories = [
    { label: 'Pipes', standardTensile: 100, hdgpeTensile: 128, roi: '₹16K/ton' },
    { label: 'Films', standardTensile: 100, hdgpeTensile: 132, roi: '₹21K/ton' },
    { label: 'Molding', standardTensile: 100, hdgpeTensile: 130, roi: '₹19K/ton' },
  ]
  const maxVal = 135
  const barAreaH = height * 0.55
  const barW = 28 * fs
  const gap = 20 * fs
  const groupW = barW * 2 + gap
  const totalGroupW = groupW * categories.length + gap * (categories.length - 1)
  const startX = (width - totalGroupW) / 2
  const baselineY = height * 0.72

  return (
    <svg width={width} height={height} style={{ overflow: 'visible' }}>
      <defs>
        <linearGradient id="hdgpeBarGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={C} stopOpacity="1" />
          <stop offset="100%" stopColor={C} stopOpacity="0.6" />
        </linearGradient>
      </defs>

      {/* Title */}
      <text x={width / 2} y={20 * fs} textAnchor="middle" fill="#666" fontSize={9 * fs} fontFamily="'Rajdhani', sans-serif" letterSpacing="0.2em" fontWeight="700">MECHANICAL IMPROVEMENT BY APPLICATION</text>

      {/* Baseline */}
      <line x1={startX - 10 * fs} y1={baselineY} x2={startX + totalGroupW + 10 * fs} y2={baselineY} stroke="rgba(255,255,255,0.12)" strokeWidth={1} />

      {categories.map((cat, i) => {
        const gx = startX + i * (groupW + gap)
        const stdH = (cat.standardTensile / maxVal) * barAreaH
        const hdH = (cat.hdgpeTensile / maxVal) * barAreaH

        return (
          <g key={i}>
            {/* Standard bar */}
            <rect
              x={gx}
              y={baselineY - stdH}
              width={barW}
              height={stdH}
              rx={2}
              fill="rgba(120,120,120,0.3)"
            />
            {/* HD-G-PE bar */}
            <rect
              x={gx + barW + 6 * fs}
              y={baselineY - hdH}
              width={barW}
              height={hdH}
              rx={2}
              fill="url(#hdgpeBarGrad)"
            />
            {/* Category label */}
            <text
              x={gx + barW + 3 * fs}
              y={baselineY + 16 * fs}
              textAnchor="middle"
              fill="#aaa"
              fontSize={9 * fs}
              fontFamily="'Rajdhani', sans-serif"
              fontWeight="700"
            >{cat.label}</text>
            {/* ROI badge */}
            <text
              x={gx + barW + 3 * fs}
              y={baselineY + 28 * fs}
              textAnchor="middle"
              fill={C}
              fontSize={8 * fs}
              fontFamily="'Rajdhani', sans-serif"
              fontWeight="800"
            >{cat.roi}</text>
            {/* Improvement % label on HD-G-PE bar */}
            <text
              x={gx + barW * 1.5 + 6 * fs}
              y={baselineY - hdH - 5 * fs}
              textAnchor="middle"
              fill={C}
              fontSize={8 * fs}
              fontFamily="'Rajdhani', sans-serif"
              fontWeight="700"
            >+{cat.hdgpeTensile - cat.standardTensile}%</text>
          </g>
        )
      })}

      {/* Legend */}
      <rect x={startX} y={height - 14 * fs} width={10 * fs} height={6 * fs} rx={1} fill="rgba(120,120,120,0.3)" />
      <text x={startX + 14 * fs} y={height - 8 * fs} fill="#666" fontSize={7.5 * fs} fontFamily="'Inter', sans-serif">Standard HDPE</text>
      <rect x={startX + 90 * fs} y={height - 14 * fs} width={10 * fs} height={6 * fs} rx={1} fill={C} />
      <text x={startX + 104 * fs} y={height - 8 * fs} fill={C} fontSize={7.5 * fs} fontFamily="'Inter', sans-serif" fontWeight="600">HD-G-PE</text>
    </svg>
  )
}

function TechSpec({ icon: Icon, title, val, desc, align = 'left', scale }) {
  const isRight = align === 'right'
  const fs = scale
  return (
    <div style={{ display: 'flex', flexDirection: isRight ? 'row-reverse' : 'row', alignItems: 'flex-start', gap: 16 * fs, textAlign: isRight ? 'right' : 'left', padding: 12 * fs }}>
      <div style={{ width: 42 * fs, height: 42 * fs, borderRadius: 8, background: `rgba(6, 182, 212, 0.08)`, border: `1px solid rgba(6, 182, 212, 0.2)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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
        <PolymerStrengthChart width={Math.round(W * 0.44)} height={Math.round(H * 0.72)} scale={scale} />
        <div style={{ position: 'absolute', bottom: -20 * fs, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ fontSize: 9 * fs, color: '#444', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>ASTM D638 / ASTM D256 VALIDATED</div>
          <div style={{ width: 40 * fs, height: 2, background: C, marginTop: 4 }} />
        </div>
      </div>

      {/* Left & right specs */}
      <div style={{ position: 'absolute', inset: 0, padding: 30 * fs, display: 'flex', justifyContent: 'space-between', zIndex: 4, pointerEvents: 'none' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40 * fs }}>
          <div style={{ marginBottom: 10 * fs, borderLeft: `3px solid ${C}`, paddingLeft: 10 * fs }}>
            <div style={{ color: C, fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>Mechanical Properties</div>
          </div>
          <TechSpec icon={Zap} title="Tensile Strength" val="+28% MPa" desc="ASTM D638 validated across all HDPE grades." scale={scale} />
          <TechSpec icon={Layers} title="Impact" val="+32%" desc="ASTM D256 Izod impact resistance improvement." scale={scale} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 40 * fs, textAlign: 'right', alignItems: 'flex-end' }}>
          <div style={{ marginBottom: 10 * fs, borderRight: `3px solid ${C}`, paddingRight: 10 * fs }}>
            <div style={{ color: C, fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>Process & Economics</div>
          </div>
          <TechSpec icon={Package} title="Masterbatch Form" val="Drop-In Ready" desc="No process changes needed. Standard mixing equipment." align="right" scale={scale} />
          <TechSpec icon={TrendingUp} title="Net ROI" val="₹19,000/ton" desc="Injection molding at 0.5% dosage." align="right" scale={scale} />
        </div>
      </div>

    </BackBase>
  )
}
