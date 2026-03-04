import React from 'react'
import BackBase from '../../base/back'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const METRICS = [
    { label: 'Hardness', score: 95, val: '9H+' },
    { label: 'Heat Shield', score: 90, val: '700°C' },
    { label: 'Hydrophobic', score: 98, val: '115°' },
    { label: 'Chemical', score: 88, val: 'pH 2–12' },
    { label: 'Longevity', score: 85, val: '4+ Yrs' },
    { label: 'Gloss Boost', score: 92, val: '+35%' },
]

function RadarChart({ size, scale }) {
    const cx = size / 2, cy = size / 2, r = size * 0.38
    const n = METRICS.length
    const angleStep = (Math.PI * 2) / n
    const getPoint = (i, radius) => ({
        x: cx + radius * Math.sin(i * angleStep),
        y: cy - radius * Math.cos(i * angleStep),
    })

    const bgPolygons = [0.25, 0.5, 0.75, 1].map(f =>
        Array.from({ length: n }, (_, i) => getPoint(i, r * f)).map(p => `${p.x},${p.y}`).join(' ')
    )

    const dataPoints = METRICS.map((m, i) => getPoint(i, r * (m.score / 100)))
    const dataPolygon = dataPoints.map(p => `${p.x},${p.y}`).join(' ')

    const fs = scale
    return (
        <svg width={size} height={size}>
            {/* Grid polygons */}
            {bgPolygons.map((pts, i) => (
                <polygon key={i} points={pts} fill="none" stroke={C} strokeWidth="0.5" opacity={0.2 + i * 0.05} />
            ))}
            {/* Axis lines */}
            {Array.from({ length: n }, (_, i) => {
                const p = getPoint(i, r)
                return <line key={i} x1={cx} y1={cy} x2={p.x} y2={p.y} stroke={C} strokeWidth="0.5" opacity="0.25" />
            })}
            {/* Data polygon */}
            <polygon points={dataPolygon} fill={C} fillOpacity="0.15" stroke={C} strokeWidth="1.5" />
            {/* Data points */}
            {dataPoints.map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r={3 * scale} fill="white" />
            ))}
            {/* Labels */}
            {METRICS.map((m, i) => {
                const lp = getPoint(i, r * 1.22)
                return (
                    <text key={i} x={lp.x} y={lp.y} textAnchor="middle" dominantBaseline="middle"
                        fill={C} fontSize={8 * fs} fontFamily="'Rajdhani', sans-serif"
                        letterSpacing="0.1em">
                        {m.label.toUpperCase()}
                    </text>
                )
            })}
        </svg>
    )
}

export default function BackPanel({ scale = 1, surf = DEFAULT_SURF }) {
    const W = Math.round(1494 * scale)
    const H = Math.round(638 * scale)
    const fs = scale
    const radarSize = Math.round(H * 0.72)

    return (
        <BackBase scale={scale} surf={surf}>

            {/* Header */}
            <div style={{ position: 'absolute', top: 36 * fs, left: 0, right: 0, textAlign: 'center', zIndex: 3 }}>
                <div style={{ color: C, fontSize: 9 * fs, letterSpacing: '0.35em', fontFamily: "'Rajdhani', sans-serif" }}>PERFORMANCE MATRIX — CERTIFIED TEST DATA</div>
            </div>

            {/* Radar chart center */}
            <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', zIndex: 3 }}>
                <RadarChart size={radarSize} scale={scale} />
            </div>

            {/* Left metrics */}
            <div style={{ position: 'absolute', left: 50 * fs, top: '50%', transform: 'translateY(-50%)', zIndex: 4, display: 'flex', flexDirection: 'column', gap: 22 * fs }}>
                {METRICS.slice(0, 3).map((m, i) => (
                    <div key={i}>
                        <div style={{ color: C, fontSize: 8 * fs, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.15em', textTransform: 'uppercase' }}>{m.label}</div>
                        <div style={{ color: 'white', fontSize: 22 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif", lineHeight: 1 }}>{m.val}</div>
                        <div style={{ width: Math.round(80 * fs * m.score / 100), height: 2, background: C, marginTop: 4, opacity: 0.6 }} />
                    </div>
                ))}
            </div>

            {/* Right metrics */}
            <div style={{ position: 'absolute', right: 50 * fs, top: '50%', transform: 'translateY(-50%)', zIndex: 4, display: 'flex', flexDirection: 'column', gap: 22 * fs, alignItems: 'flex-end' }}>
                {METRICS.slice(3).map((m, i) => (
                    <div key={i} style={{ textAlign: 'right' }}>
                        <div style={{ color: C, fontSize: 8 * fs, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.15em', textTransform: 'uppercase' }}>{m.label}</div>
                        <div style={{ color: 'white', fontSize: 22 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif", lineHeight: 1 }}>{m.val}</div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 4 }}>
                            <div style={{ width: Math.round(80 * fs * m.score / 100), height: 2, background: C, opacity: 0.6 }} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Center label */}
            <div style={{ position: 'absolute', bottom: 28 * fs, left: 0, right: 0, textAlign: 'center', zIndex: 4 }}>
                <div style={{ color: '#333', fontSize: 7 * fs, letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>ALL RESULTS INDEPENDENTLY VERIFIED — GRAPHENE CERAMIC FORMULATION</div>
            </div>

        </BackBase>
    )
}
