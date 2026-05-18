import React from 'react'
import BackBase from '../../base/back'
import { Building2, Package, TrendingUp, Leaf } from 'lucide-react'

const C = '#d97706'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

// Grade data: { label, standard MPa, graphacrete MPa }
const GRADES = [
    { label: 'M20', std: 20, gac: 25 },
    { label: 'M30', std: 30, gac: 37.5 },
    { label: 'M50', std: 40, gac: 50 },
    { label: 'M70', std: 55, gac: 69 },
]

function GradeBarChart({ scale }) {
    const fs = scale
    const chartW = Math.round(480 * fs)
    const chartH = Math.round(260 * fs)
    const maxVal = 75
    const barGroupW = chartW / GRADES.length
    const barW = Math.round(barGroupW * 0.25)
    const gap = Math.round(barW * 0.4)
    const padB = Math.round(36 * fs)
    const padT = Math.round(16 * fs)
    const usableH = chartH - padB - padT

    return (
        <svg width={chartW} height={chartH} style={{ overflow: 'visible' }}>
            {/* Horizontal grid lines */}
            {[0, 25, 50, 75].map(v => {
                const y = padT + usableH - (v / maxVal) * usableH
                return (
                    <g key={v}>
                        <line x1={0} y1={y} x2={chartW} y2={y} stroke="rgba(255,255,255,0.06)" strokeWidth={1} />
                        <text x={-6} y={y + 4} fill="#555" fontSize={8 * fs} textAnchor="end" fontFamily="Inter, sans-serif">{v}</text>
                    </g>
                )
            })}

            {GRADES.map((g, i) => {
                const centerX = barGroupW * i + barGroupW / 2
                const stdH = (g.std / maxVal) * usableH
                const gacH = (g.gac / maxVal) * usableH
                const stdX = centerX - gap / 2 - barW
                const gacX = centerX + gap / 2

                return (
                    <g key={g.label}>
                        {/* Standard bar */}
                        <rect
                            x={stdX} y={padT + usableH - stdH}
                            width={barW} height={stdH}
                            fill="rgba(120,120,120,0.5)"
                            rx={2}
                        />
                        {/* Graphacrete bar */}
                        <rect
                            x={gacX} y={padT + usableH - gacH}
                            width={barW} height={gacH}
                            fill={C}
                            rx={2}
                            style={{ filter: `drop-shadow(0 0 6px rgba(217,119,6,0.5))` }}
                        />
                        {/* MPa labels */}
                        <text x={stdX + barW / 2} y={padT + usableH - stdH - 4 * fs} fill="#888" fontSize={7.5 * fs} textAnchor="middle" fontFamily="Inter, sans-serif">{g.std}</text>
                        <text x={gacX + barW / 2} y={padT + usableH - gacH - 4 * fs} fill={C} fontSize={7.5 * fs} textAnchor="middle" fontFamily="Inter, sans-serif" fontWeight="700">{g.gac}</text>
                        {/* Grade label */}
                        <text x={centerX} y={chartH - 6 * fs} fill="#aaa" fontSize={10 * fs} textAnchor="middle" fontFamily="Rajdhani, sans-serif" fontWeight="700">{g.label}</text>
                    </g>
                )
            })}

            {/* Legend */}
            <rect x={0} y={chartH - 2 * fs} width={10 * fs} height={6 * fs} fill="rgba(120,120,120,0.5)" rx={1} />
            <text x={14 * fs} y={chartH + 3 * fs} fill="#888" fontSize={8 * fs} fontFamily="Inter, sans-serif">Standard</text>
            <rect x={70 * fs} y={chartH - 2 * fs} width={10 * fs} height={6 * fs} fill={C} rx={1} />
            <text x={84 * fs} y={chartH + 3 * fs} fill={C} fontSize={8 * fs} fontFamily="Inter, sans-serif" fontWeight="700">Graphacrete</text>
            <text x={chartW} y={chartH + 3 * fs} fill="#555" fontSize={7 * fs} fontFamily="Inter, sans-serif" textAnchor="end">MPa (Compressive)</text>
        </svg>
    )
}

function StatBlock({ icon: Icon, title, value, sub, scale }) {
    const fs = scale
    return (
        <div style={{ display: 'flex', gap: 14 * fs, alignItems: 'flex-start' }}>
            <div style={{
                width: 40 * fs, height: 40 * fs, borderRadius: 8 * fs, flexShrink: 0,
                backgroundColor: 'rgba(217,119,6,0.08)', border: `1px solid rgba(217,119,6,0.25)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <Icon size={20 * fs} color={C} strokeWidth={2} />
            </div>
            <div>
                <div style={{ color: '#aaa', fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif", fontWeight: 600, marginBottom: 2 * fs }}>{title}</div>
                <div style={{ color: 'white', fontSize: 16 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif", lineHeight: 1 }}>{value}</div>
                <div style={{ color: '#666', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif", marginTop: 3 * fs, lineHeight: 1.3 }}>{sub}</div>
            </div>
        </div>
    )
}

export default function BackGraphacreteV1({ scale = 1, surf = DEFAULT_SURF }) {
    const W = Math.round(1494 * scale)
    const H = Math.round(638 * scale)
    const fs = scale

    return (
        <BackBase scale={scale} surf={surf}>

            {/* Subtle crosshair guides */}
            <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
                <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: 1, background: 'rgba(255,255,255,0.04)' }} />
                <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 1, background: 'rgba(255,255,255,0.04)' }} />
            </div>

            <div style={{ position: 'absolute', inset: 0, padding: `${30 * fs}px`, zIndex: 3, display: 'flex', gap: `${32 * fs}px`, alignItems: 'center' }}>

                {/* Left panel: specs */}
                <div style={{ width: Math.round(220 * fs), flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 28 * fs }}>
                    <div style={{ borderLeft: `3px solid ${C}`, paddingLeft: 10 * fs, marginBottom: 4 * fs }}>
                        <div style={{ color: C, fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>Structural Performance</div>
                    </div>
                    <StatBlock icon={Building2} title="Compressive Strength" value="+25% Min" sub="Validated across all grades" scale={scale} />
                    <StatBlock icon={Package} title="Cement Reduction" value="13% Less" sub="Same or better strength" scale={scale} />
                </div>

                {/* Center: bar chart */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 * fs }}>
                    <div style={{ textAlign: 'center', marginBottom: 4 * fs }}>
                        <div style={{ color: '#666', fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>Grade Performance Comparison</div>
                        <div style={{ width: 40 * fs, height: 2, background: C, margin: `${6 * fs}px auto 0` }} />
                    </div>
                    <GradeBarChart scale={scale} />
                </div>

                {/* Right panel: sustainability */}
                <div style={{ width: Math.round(220 * fs), flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 28 * fs }}>
                    <div style={{ borderRight: `3px solid ${C}`, paddingRight: 10 * fs, textAlign: 'right', marginBottom: 4 * fs }}>
                        <div style={{ color: C, fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>Sustainability &amp; ROI</div>
                    </div>
                    <StatBlock icon={Leaf} title="CO₂ Savings" value="~130 kg/m³" sub="Per ton of cement replaced, avoided" scale={scale} />
                    <StatBlock icon={TrendingUp} title="ROI" value="6–9 Months" sub="Payback period" scale={scale} />
                </div>

            </div>

        </BackBase>
    )
}
