import React from 'react'
import Logo from '../../../brand/Logo'
import WrapBase from '../../base/wrap'
import { Droplets, Sun, Wind, Flame, CloudRain, Zap, Bug, Shield, Disc } from 'lucide-react'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }
const DIVIDER = '1px solid rgba(255,255,255,0.06)'

const THREATS = [
    { icon: CloudRain, label: 'Acid Rain' },
    { icon: Bug, label: 'Bird Droppings' },
    { icon: Disc, label: 'Rock Chips' },
    { icon: Flame, label: 'Brake Heat' },
    { icon: Wind, label: 'Industrial Fallout' },
    { icon: Zap, label: 'Road Chemicals' },
    { icon: Sun, label: 'UV Radiation' },
    { icon: Droplets, label: 'Water Spotting' },
    { icon: Shield, label: 'Oxidation' },
]

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
                    <div style={{ flex: 1, padding: `${16 * fs}px ${22 * fs}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 8 * fs }}>
                        <div style={{ color: C, fontSize: 8 * fs, letterSpacing: '0.25em', fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase', marginBottom: 4 * fs }}>Threats Neutralised</div>
                        {THREATS.map((t, i) => {
                            const Icon = t.icon
                            return (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 * fs, paddingBottom: 7 * fs, borderBottom: DIVIDER }}>
                                    <Icon size={Math.round(12 * fs)} color={C} strokeWidth={1.5} />
                                    <span style={{ color: '#555', fontSize: 9 * fs, fontFamily: "'Inter', sans-serif", flex: 1 }}>{t.label}</span>
                                    <div style={{ width: 14 * fs, height: 14 * fs, borderRadius: '50%', border: `1px solid ${C}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <div style={{ color: C, fontSize: 8 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif" }}>✓</div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </>}

            leftContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 12 * fs }}>
                        <Shield size={Math.round(16 * fs)} color={C} strokeWidth={1.5} style={{ transform: 'rotate(90deg)' }} />
                        <span style={{ color: '#888', fontSize: 14 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>9 THREATS</span>
                    </div>
                </div>
            </>}

            frontContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 3, gap: 8 * fs }}>
                    <Shield size={Math.round(32 * fs)} color={C} strokeWidth={1} />
                    <div style={{ color: 'transparent', WebkitTextStroke: `1px rgba(255,255,255,0.12)`, fontSize: 11 * fs, fontWeight: 800, letterSpacing: '0.5em', fontFamily: "'Rajdhani', sans-serif" }}>GRAPHENE CERAMIC</div>
                    <div style={{ color: 'white', fontSize: 54 * fs, fontWeight: 900, lineHeight: 0.9, fontFamily: "'Rajdhani', sans-serif" }}>CERAPHENE</div>
                    <div style={{ width: 50 * fs, height: 1, background: C, margin: `${8 * fs}px 0` }} />
                    <div style={{ textAlign: 'center' }}>
                        <div style={{ color: C, fontSize: 10 * fs, letterSpacing: '0.3em', fontFamily: "'Rajdhani', sans-serif" }}>9 THREATS</div>
                        <div style={{ color: 'white', fontSize: 48 * fs, fontWeight: 900, fontFamily: "'Rajdhani', sans-serif", lineHeight: 1 }}>ZERO</div>
                        <div style={{ color: 'white', fontSize: 20 * fs, fontWeight: 900, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.15em', lineHeight: 1 }}>DAMAGE</div>
                    </div>
                    {/* Mini threat icons row */}
                    <div style={{ display: 'flex', gap: 10 * fs, marginTop: 10 * fs, flexWrap: 'wrap', justifyContent: 'center', maxWidth: bW * 0.7 }}>
                        {THREATS.map((t, i) => {
                            const Icon = t.icon
                            return <Icon key={i} size={Math.round(12 * fs)} color={C} strokeWidth={1.5} opacity={0.7} />
                        })}
                    </div>
                </div>
            </>}

            rightContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <div style={{ writingMode: 'vertical-rl', display: 'flex', alignItems: 'center', gap: 12 * fs }}>
                        <span style={{ color: '#333', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif" }}>ZERO DAMAGE</span>
                        <span style={{ color: '#777', fontSize: 14 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>FULL SHIELD</span>
                    </div>
                </div>
            </>}
        />
    )
}
