import React from 'react'
import BackBase from '../../base/back'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const LAYERS = [
    { name: 'CERAPHENE', thick: '3–4 μm', role: 'Graphene-Ceramic Shield', highlight: true },
    { name: 'CLEARCOAT', thick: '50–70 μm', role: 'Factory Clear Lacquer' },
    { name: 'BASE COAT', thick: '15–25 μm', role: 'Colour & Pigment Layer' },
    { name: 'PRIMER', thick: '15–25 μm', role: 'Anti-Corrosion Adhesive' },
    { name: 'STEEL BODY', thick: 'substrate', role: 'Vehicle Body Panel' },
]

function SportsCar({ width, height }) {
    const color = '#444', sw = 1.4
    return (
        <svg viewBox="0 0 700 260" fill="none" width={width} height={height}>
            <path d="M 75 195 L 75 155 Q 80 128 112 112 L 205 74 Q 255 50 335 46 L 465 44 Q 535 44 572 76 Q 598 98 614 140 L 622 195 Z" stroke={color} strokeWidth={sw} />
            <path d="M 205 74 Q 255 50 335 46 L 465 44 Q 515 44 548 68 L 575 107 L 225 110 Z" stroke={color} strokeWidth={sw} />
            <line x1="205" y1="74" x2="225" y2="110" stroke={color} strokeWidth={sw} />
            <path d="M 575 107 Q 600 107 618 125 L 622 160" stroke={color} strokeWidth={sw} />
            <path d="M 230 110 L 575 107 L 570 155 L 220 158 Z" stroke={color} strokeWidth={sw * 0.4} />
            <circle cx="162" cy="198" r="38" stroke={color} strokeWidth={sw} />
            <circle cx="162" cy="198" r="17" stroke={color} strokeWidth={sw * 0.7} />
            <circle cx="542" cy="198" r="38" stroke={color} strokeWidth={sw} />
            <circle cx="542" cy="198" r="17" stroke={color} strokeWidth={sw * 0.7} />
        </svg>
    )
}

export default function BackPanel({ scale = 1, surf = DEFAULT_SURF }) {
    const W = Math.round(1494 * scale)
    const H = Math.round(638 * scale)
    const fs = scale
    const stackH = Math.round(H * 0.6)
    const stackW = Math.round(W * 0.22)
    const layerH = stackH / LAYERS.length

    return (
        <BackBase scale={scale} surf={surf}>

            {/* Section label */}
            <div style={{ position: 'absolute', top: 36 * fs, left: 0, right: 0, textAlign: 'center', zIndex: 3 }}>
                <div style={{ color: C, fontSize: 9 * fs, letterSpacing: '0.35em', fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>Protection Stack — Cross Section</div>
            </div>

            {/* Left: Layer diagram */}
            <div style={{ position: 'absolute', left: 60 * fs, top: '50%', transform: 'translateY(-50%)', width: stackW, height: stackH, zIndex: 3 }}>
                {LAYERS.map((l, i) => (
                    <div key={i} style={{
                        height: layerH, display: 'flex', alignItems: 'center', paddingLeft: 16 * fs,
                        background: l.highlight ? `rgba(100,116,139,0.18)` : `rgba(255,255,255,${0.015 + i * 0.008})`,
                        borderTop: l.highlight ? `1px solid ${C}80` : '1px solid rgba(255,255,255,0.06)',
                        borderLeft: l.highlight ? `3px solid ${C}` : '3px solid transparent',
                        boxSizing: 'border-box', position: 'relative'
                    }}>
                        <div>
                            <div style={{ color: l.highlight ? 'white' : '#777', fontSize: 10 * fs, fontWeight: l.highlight ? 800 : 500, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.08em' }}>{l.name}</div>
                            <div style={{ color: '#444', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif", marginTop: 1 }}>{l.thick}</div>
                        </div>
                        {l.highlight && (
                            <div style={{ position: 'absolute', right: 8 * fs, fontSize: 7 * fs, color: C, fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: '0.05em' }}>← YOU ARE HERE</div>
                        )}
                    </div>
                ))}
            </div>

            {/* Center: car */}
            <div style={{ position: 'absolute', left: '30%', right: '28%', top: '18%', bottom: '18%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                <SportsCar width={Math.round(W * 0.42)} height={Math.round(H * 0.5)} />
            </div>

            {/* Right: layer detail specs */}
            <div style={{ position: 'absolute', right: 60 * fs, top: '50%', transform: 'translateY(-50%)', width: Math.round(W * 0.22), zIndex: 3 }}>
                {LAYERS.map((l, i) => (
                    <div key={i} style={{ height: layerH, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', paddingRight: 8 * fs, boxSizing: 'border-box' }}>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ color: l.highlight ? '#ccc' : '#555', fontSize: 9 * fs, fontFamily: "'Inter', sans-serif", lineHeight: 1.3 }}>{l.role}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* SVG: connector lines car → layers */}
            <svg style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }} width={W} height={H}>
                <line x1={Math.round(W * 0.295)} y1={Math.round(H * 0.4)} x2={Math.round(W * 0.285)} y2={Math.round(H * 0.25)} stroke={C} strokeWidth="0.5" opacity="0.25" strokeDasharray="3 4" />
                <line x1={Math.round(W * 0.72)} y1={Math.round(H * 0.4)} x2={Math.round(W * 0.73)} y2={Math.round(H * 0.25)} stroke={C} strokeWidth="0.5" opacity="0.25" strokeDasharray="3 4" />
            </svg>

            {/* Bottom note */}
            <div style={{ position: 'absolute', bottom: 28 * fs, left: 0, right: 0, textAlign: 'center', zIndex: 3 }}>
                <div style={{ color: '#333', fontSize: 7 * fs, letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>CERAPHENE BONDS AT THE MOLECULAR LEVEL TO YOUR VEHICLE'S CLEARCOAT</div>
            </div>

        </BackBase>
    )
}
