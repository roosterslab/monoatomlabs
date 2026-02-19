import React from 'react'
import Logo from '../../../brand/Logo'
import WrapBase from '../../base/wrap'
import { Droplets } from 'lucide-react'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }
const DIVIDER = '1px solid rgba(255,255,255,0.06)'

export default function WrapPanel({ scale = 1, surfBack = DEFAULT_SURF, surfLeft = DEFAULT_SURF, surfFront = DEFAULT_SURF, surfRight = DEFAULT_SURF }) {
    const fs = scale
    const bW = Math.round(499 * scale)
    const bH = Math.round(638 * scale)

    return (
        <WrapBase scale={scale} surfBack={surfBack} surfLeft={surfLeft} surfFront={surfFront} surfRight={surfRight}

            backContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', zIndex: 3 }}>
                    <div style={{ padding: `${18 * fs}px ${22 * fs}px`, borderBottom: DIVIDER }}>
                        <Logo size={Math.round(22 * fs)} theme="dark" />
                    </div>
                    <div style={{ flex: 1, padding: `${20 * fs}px ${22 * fs}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 12 * fs }}>
                        <div style={{ color: C, fontSize: 8 * fs, letterSpacing: '0.25em', fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>Hydrophobic Science</div>
                        <div style={{ color: '#444', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif", lineHeight: 1.7 }}>
                            Water contact angle is the definitive measure of hydrophobicity. A higher angle means water beads up and rolls off rather than spreading and staining.
                        </div>
                        {[
                            { label: 'Bare paint surface', val: '~40°', note: 'spreads', dim: true },
                            { label: 'Standard ceramic', val: '~90°', note: 'partial bead', dim: true },
                            { label: 'CERAPHENE', val: '115°+', note: 'superhydrophobic', dim: false },
                        ].map((row, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 8 * fs, borderBottom: DIVIDER }}>
                                <div>
                                    <div style={{ color: row.dim ? '#555' : C, fontSize: 9 * fs, fontFamily: "'Inter', sans-serif" }}>{row.label}</div>
                                    <div style={{ color: '#333', fontSize: 7.5 * fs, fontFamily: "'Inter', sans-serif" }}>{row.note}</div>
                                </div>
                                <span style={{ color: row.dim ? '#555' : 'white', fontSize: 13 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif" }}>{row.val}</span>
                            </div>
                        ))}
                    </div>
                    <div style={{ padding: `${10 * fs}px ${22 * fs}px`, borderTop: DIVIDER }}>
                        <div style={{ color: '#333', fontSize: 7.5 * fs, fontFamily: "'Inter', sans-serif" }}>Higher angle = greater water repellency. Independently verified.</div>
                    </div>
                </div>
            </>}

            leftContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 12 * fs }}>
                        <Droplets size={Math.round(16 * fs)} color={C} strokeWidth={1.5} style={{ transform: 'rotate(90deg)' }} />
                        <span style={{ color: '#888', fontSize: 14 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>WATER SCIENCE</span>
                    </div>
                </div>
            </>}

            frontContent={<>
                {/* Water bead SVG illustration */}
                <svg style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }} width={bW} height={bH}>
                    {/* Surface line */}
                    <line x1={bW * 0.15} y1={bH * 0.65} x2={bW * 0.85} y2={bH * 0.65} stroke={C} strokeWidth={1 * fs} opacity="0.3" />
                    {/* Surface shimmer */}
                    <rect x={bW * 0.15} y={bH * 0.65 - 2} width={bW * 0.7} height={3} fill={C} opacity="0.12" rx="1" />
                    {/* Beaded droplet arc at 115° */}
                    {(() => {
                        const cx = bW * 0.5, sy = bH * 0.65
                        const r = bH * 0.14, θ = 115 * Math.PI / 180
                        const hw = r * Math.sin(θ)
                        const lx = cx - hw, rx = cx + hw
                        return (
                            <g>
                                <path d={`M ${lx},${sy} A ${r},${r} 0 0 1 ${rx},${sy}`} fill={`${C}18`} stroke={C} strokeWidth={1.5 * fs} />
                                {/* Angle arc */}
                                <path d={`M ${lx + 20 * fs},${sy} A ${20 * fs},${20 * fs} 0 0 1 ${lx + 20 * fs * Math.cos(Math.PI - θ)},${sy - 20 * fs * Math.sin(Math.PI - θ)}`} fill="none" stroke={C} strokeWidth={0.8 * fs} opacity="0.5" />
                            </g>
                        )
                    })()}
                </svg>

                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 3, gap: 6 * fs }}>
                    <Droplets size={Math.round(32 * fs)} color={C} strokeWidth={1} />
                    <div style={{ color: 'transparent', WebkitTextStroke: `1px rgba(255,255,255,0.12)`, fontSize: 11 * fs, fontWeight: 800, letterSpacing: '0.5em', fontFamily: "'Rajdhani', sans-serif" }}>GRAPHENE CERAMIC</div>
                    <div style={{ color: 'white', fontSize: 54 * fs, fontWeight: 900, lineHeight: 0.9, fontFamily: "'Rajdhani', sans-serif" }}>CERAPHENE</div>
                    <div style={{ width: 50 * fs, height: 1, background: C, margin: `${8 * fs}px 0` }} />
                    <div style={{ textAlign: 'center', marginTop: 10 * fs }}>
                        <div style={{ color: 'white', fontSize: 52 * fs, fontWeight: 900, fontFamily: "'Rajdhani', sans-serif", lineHeight: 1 }}>115°</div>
                        <div style={{ color: C, fontSize: 10 * fs, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.2em' }}>SUPERHYDROPHOBIC</div>
                        <div style={{ color: '#444', fontSize: 7.5 * fs, fontFamily: "'Inter', sans-serif", marginTop: 4 * fs }}>Water beads. Rolls off. Self-cleans.</div>
                    </div>
                </div>
            </>}

            rightContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <div style={{ writingMode: 'vertical-rl', display: 'flex', alignItems: 'center', gap: 12 * fs }}>
                        <span style={{ color: '#333', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif" }}>LOTUS EFFECT</span>
                        <span style={{ color: '#777', fontSize: 14 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>SELF-CLEANING</span>
                    </div>
                </div>
            </>}
        />
    )
}
