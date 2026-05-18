import React from 'react'
import BackBase from '../../base/back'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

function HexGrid({ W, H, r = 22, color = C, opacity = 0.12 }) {
    const dx = r * 1.5
    const dy = r * Math.sqrt(3)
    const cols = Math.ceil(W / dx) + 2
    const rows = Math.ceil(H / dy) + 2
    const hexes = []
    for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
            const cx = col * dx + (row % 2 === 1 ? dx * 0.5 : 0)
            const cy = row * dy
            const pts = Array.from({ length: 6 }, (_, i) => {
                const a = (i * 60 + 30) * Math.PI / 180
                return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
            }).join(' ')
            hexes.push(<polygon key={`${row}-${col}`} points={pts} fill="none" stroke={color} strokeWidth="0.6" opacity={opacity} />)
        }
    }
    return (
        <svg style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }} width={W} height={H}>
            {hexes}
        </svg>
    )
}

function SportsCar({ width, height }) {
    const color = '#1c1c1c', sw = 1.2
    return (
        <svg viewBox="0 0 700 260" fill="none" width={width} height={height}>
            <path d="M 75 195 L 75 155 Q 80 128 112 112 L 205 74 Q 255 50 335 46 L 465 44 Q 535 44 572 76 Q 598 98 614 140 L 622 195 Z" stroke={color} strokeWidth={sw} fill="rgba(100,116,139,0.04)" />
            <path d="M 205 74 Q 255 50 335 46 L 465 44 Q 515 44 548 68 L 575 107 L 225 110 Z" stroke={color} strokeWidth={sw} fill="rgba(100,116,139,0.06)" />
            <line x1="205" y1="74" x2="225" y2="110" stroke={color} strokeWidth={sw} />
            <path d="M 575 107 Q 600 107 618 125 L 622 160" stroke={color} strokeWidth={sw} />
            <circle cx="162" cy="198" r="38" stroke={color} strokeWidth={sw} />
            <circle cx="542" cy="198" r="38" stroke={color} strokeWidth={sw} />
        </svg>
    )
}

export default function BackPanel({ scale = 1, surf = DEFAULT_SURF }) {
    const W = Math.round(1494 * scale)
    const H = Math.round(638 * scale)
    const fs = scale

    return (
        <BackBase scale={scale} surf={surf}>

            {/* Hex lattice — the shield */}
            <HexGrid W={W} H={H} r={Math.round(22 * fs)} />

            {/* Header */}
            <div style={{ position: 'absolute', top: 36 * fs, left: 0, right: 0, textAlign: 'center', zIndex: 3 }}>
                <div style={{ color: C, fontSize: 9 * fs, letterSpacing: '0.4em', fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>The Invisible Shield</div>
            </div>

            {/* Car silhouette */}
            <div style={{ position: 'absolute', left: '12%', right: '12%', top: '16%', bottom: '22%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                <SportsCar width={Math.round(W * 0.76)} height={Math.round(H * 0.5)} />
            </div>

            {/* SVG: annotation callouts */}
            <svg style={{ position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none' }} width={W} height={H}>
                {/* Left annotation line */}
                <line x1={W * 0.18} y1={H * 0.42} x2={W * 0.28} y2={H * 0.48} stroke={C} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
                <circle cx={W * 0.18} cy={H * 0.42} r={3 * fs} fill={C} opacity="0.6" />
                {/* Right annotation line */}
                <line x1={W * 0.82} y1={H * 0.42} x2={W * 0.72} y2={H * 0.48} stroke={C} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
                <circle cx={W * 0.82} cy={H * 0.42} r={3 * fs} fill={C} opacity="0.6" />
                {/* Scale bar */}
                <line x1={W * 0.42} y1={H * 0.88} x2={W * 0.58} y2={H * 0.88} stroke={C} strokeWidth="1" opacity="0.4" />
                <line x1={W * 0.42} y1={H * 0.855} x2={W * 0.42} y2={H * 0.905} stroke={C} strokeWidth="1" opacity="0.4" />
                <line x1={W * 0.58} y1={H * 0.855} x2={W * 0.58} y2={H * 0.905} stroke={C} strokeWidth="1" opacity="0.4" />
            </svg>

            {/* Left callout */}
            <div style={{ position: 'absolute', left: 30 * fs, top: '36%', zIndex: 4, width: Math.round(120 * fs) }}>
                <div style={{ color: '#888', fontSize: 8 * fs, fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase', letterSpacing: '0.15em' }}>Human Hair</div>
                <div style={{ color: '#444', fontSize: 13 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif" }}>70 μm</div>
            </div>

            {/* Right callout */}
            <div style={{ position: 'absolute', right: 30 * fs, top: '36%', zIndex: 4, width: Math.round(120 * fs), textAlign: 'right' }}>
                <div style={{ color: C, fontSize: 8 * fs, fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase', letterSpacing: '0.15em' }}>CERAPHENE</div>
                <div style={{ color: 'white', fontSize: 13 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif" }}>3–4 μm</div>
            </div>

            {/* Scale label */}
            <div style={{ position: 'absolute', bottom: 24 * fs, left: 0, right: 0, textAlign: 'center', zIndex: 4 }}>
                <div style={{ color: C, fontSize: 9 * fs, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.2em' }}>3–4 MICRONS — 1/20th THE THICKNESS OF A HUMAN HAIR</div>
                <div style={{ color: '#2d2d2d', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif", marginTop: 3 * fs }}>Graphene-Ceramic lattice bonded at the molecular level to your clearcoat</div>
            </div>

        </BackBase>
    )
}
