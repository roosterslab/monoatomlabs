import React from 'react'
import Logo from '../../../brand/Logo'
import WrapBase from '../../base/wrap'
import { Shield } from 'lucide-react'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }
const DIVIDER = '1px solid rgba(255,255,255,0.06)'

function HexMini({ W, H, r = 14, color = C, opacity = 0.08 }) {
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
            hexes.push(<polygon key={`${row}-${col}`} points={pts} fill="none" stroke={color} strokeWidth="0.5" opacity={opacity} />)
        }
    }
    return (
        <svg style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }} width={W} height={H}>
            {hexes}
        </svg>
    )
}

export default function WrapPanel({ scale = 1, surfBack = DEFAULT_SURF, surfLeft = DEFAULT_SURF, surfFront = DEFAULT_SURF, surfRight = DEFAULT_SURF }) {
    const fs = scale
    const bW = Math.round(499 * scale)
    const bH = Math.round(638 * scale)
    const sW = Math.round(204 * scale)

    return (
        <WrapBase scale={scale} surfBack={surfBack} surfLeft={surfLeft} surfFront={surfFront} surfRight={surfRight}

            backContent={<>
                <HexMini W={bW} H={bH} r={Math.round(14 * fs)} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', zIndex: 3 }}>
                    <div style={{ padding: `${18 * fs}px ${22 * fs}px`, borderBottom: DIVIDER }}>
                        <Logo size={Math.round(22 * fs)} theme="dark" />
                    </div>
                    <div style={{ flex: 1, padding: `${20 * fs}px ${22 * fs}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 * fs }}>
                        <div style={{ color: C, fontSize: 8 * fs, letterSpacing: '0.25em', fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>Thickness at Work</div>
                        {[
                            { label: 'CERAPHENE layer', val: '3–4 μm' },
                            { label: 'Human hair', val: '70 μm' },
                            { label: 'Hardness rating', val: '9H+' },
                            { label: 'Lifecycle extension', val: '+40%' },
                        ].map((row, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8 * fs, borderBottom: DIVIDER }}>
                                <span style={{ color: '#555', fontSize: 9 * fs, fontFamily: "'Inter', sans-serif" }}>{row.label}</span>
                                <span style={{ color: i === 0 ? 'white' : '#888', fontSize: 11 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif" }}>{row.val}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ padding: `${12 * fs}px ${22 * fs}px`, borderTop: DIVIDER }}>
                        <div style={{ color: '#333', fontSize: 7.5 * fs, fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>Graphene-Ceramic lattice bonded at molecular level to your clearcoat</div>
                    </div>
                </div>
            </>}

            leftContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 12 * fs }}>
                        <Shield size={Math.round(16 * fs)} color={C} strokeWidth={1.5} style={{ transform: 'rotate(90deg)' }} />
                        <span style={{ color: '#888', fontSize: 14 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>INVISIBLE SHIELD</span>
                    </div>
                </div>
            </>}

            frontContent={<>
                <HexMini W={bW} H={bH} r={Math.round(18 * fs)} />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 3, gap: 6 * fs }}>
                    <Shield size={Math.round(36 * fs)} color={C} strokeWidth={1} />
                    <div style={{ color: 'transparent', WebkitTextStroke: `1px rgba(255,255,255,0.12)`, fontSize: 11 * fs, fontWeight: 800, letterSpacing: '0.5em', fontFamily: "'Rajdhani', sans-serif" }}>GRAPHENE CERAMIC</div>
                    <div style={{ color: 'white', fontSize: 54 * fs, fontWeight: 900, lineHeight: 0.9, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.02em' }}>CERAPHENE</div>
                    <div style={{ width: 50 * fs, height: 1, background: C, margin: `${8 * fs}px 0` }} />
                    <div style={{ color: C, fontSize: 9 * fs, letterSpacing: '0.3em', fontFamily: "'Rajdhani', sans-serif" }}>THE INVISIBLE SHIELD</div>
                    <div style={{ marginTop: 16 * fs, textAlign: 'center' }}>
                        <div style={{ color: 'white', fontSize: 40 * fs, fontWeight: 900, fontFamily: "'Rajdhani', sans-serif", lineHeight: 1 }}>3–4 μm</div>
                        <div style={{ color: '#444', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif" }}>1/20th the thickness of a human hair</div>
                    </div>
                </div>
            </>}

            rightContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <div style={{ writingMode: 'vertical-rl', display: 'flex', alignItems: 'center', gap: 12 * fs }}>
                        <span style={{ color: '#333', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif" }}>MOLECULAR BOND</span>
                        <span style={{ color: '#777', fontSize: 14 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>NANO PRECISION</span>
                    </div>
                </div>
            </>}
        />
    )
}
