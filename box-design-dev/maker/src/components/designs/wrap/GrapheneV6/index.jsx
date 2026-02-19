import React from 'react'
import Logo from '../../../brand/Logo'
import WrapBase from '../../base/wrap'
import { TrendingUp } from 'lucide-react'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }
const DIVIDER = '1px solid rgba(255,255,255,0.06)'

const METRICS = [
    { label: 'Hardness', val: '9H+', score: 95 },
    { label: 'Heat Shield', val: '700°C', score: 90 },
    { label: 'Hydrophobic', val: '115° Angle', score: 98 },
    { label: 'Durability', val: '4+ Years', score: 85 },
    { label: 'Chemical', val: 'pH 2–12', score: 88 },
]

const BIG_NUMBERS = [
    { n: '9H+', l: 'Hardness' },
    { n: '700°C', l: 'Heat Shield' },
    { n: '115°', l: 'Water Angle' },
    { n: '4 YRS', l: 'Durability' },
]

export default function WrapPanel({ scale = 1, surfBack = DEFAULT_SURF, surfLeft = DEFAULT_SURF, surfFront = DEFAULT_SURF, surfRight = DEFAULT_SURF }) {
    const px = (i) => Math.round(i * 96 * scale)
    const fs = scale
    const barMaxW = Math.round(160 * fs)

    return (
        <WrapBase scale={scale} surfBack={surfBack} surfLeft={surfLeft} surfFront={surfFront} surfRight={surfRight}

            backContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', zIndex: 3 }}>
                    <div style={{ padding: `${20 * fs}px ${24 * fs}px`, borderBottom: DIVIDER }}>
                        <Logo size={Math.round(24 * fs)} theme="dark" />
                    </div>
                    <div style={{ flex: 1, padding: 24 * fs, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18 * fs }}>
                        <div style={{ color: C, fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>Performance Index</div>
                        {METRICS.map((m, i) => (
                            <div key={i}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 * fs }}>
                                    <span style={{ color: '#666', fontSize: 9 * fs, fontFamily: "'Inter', sans-serif" }}>{m.label}</span>
                                    <span style={{ color: '#ccc', fontSize: 9 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif" }}>{m.val}</span>
                                </div>
                                <div style={{ height: 2, background: 'rgba(255,255,255,0.06)' }}>
                                    <div style={{ width: `${m.score}%`, height: '100%', background: C, opacity: 0.7 }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>}

            leftContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 14 * fs }}>
                        <TrendingUp size={20 * fs} color={C} style={{ transform: 'rotate(90deg)' }} />
                        <span style={{ color: '#bbb', fontSize: 16 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>CERTIFIED DATA</span>
                    </div>
                </div>
            </>}

            frontContent={<>
                {/* Big number grid top */}
                <div style={{ position: 'absolute', top: '10%', left: 0, right: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: `${2 * fs}px`, padding: `0 ${20 * fs}px`, zIndex: 3 }}>
                    {BIG_NUMBERS.map((b, i) => (
                        <div key={i} style={{ padding: `${10 * fs}px`, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)', textAlign: 'center' }}>
                            <div style={{ color: 'white', fontSize: 20 * fs, fontWeight: 900, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.03em' }}>{b.n}</div>
                            <div style={{ color: '#444', fontSize: 7 * fs, fontFamily: "'Inter', sans-serif", textTransform: 'uppercase', letterSpacing: '0.1em' }}>{b.l}</div>
                        </div>
                    ))}
                </div>

                {/* Main product name */}
                <div style={{ position: 'absolute', top: '52%', left: 0, right: 0, textAlign: 'center', zIndex: 3 }}>
                    <div style={{ color: 'transparent', WebkitTextStroke: `1px rgba(255,255,255,0.15)`, fontSize: 14 * fs, fontWeight: 800, letterSpacing: '0.6em', fontFamily: "'Rajdhani', sans-serif" }}>GRAPHENE CERAMIC</div>
                    <div style={{ color: 'white', fontSize: 52 * fs, fontWeight: 900, lineHeight: 0.9, fontFamily: "'Rajdhani', sans-serif" }}>CERAPHENE</div>
                    <div style={{ width: 60 * fs, height: 1, background: C, margin: `${12 * fs}px auto` }} />
                    <div style={{ color: '#555', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif" }}>Performance Verified. Independently Tested.</div>
                </div>
            </>}

            rightContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <div style={{ writingMode: 'vertical-rl', display: 'flex', alignItems: 'center', gap: 14 * fs }}>
                        <span style={{ color: '#333', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif" }}>INDEPENDENTLY TESTED</span>
                        <span style={{ color: '#aaa', fontSize: 16 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>DATA PROVEN</span>
                    </div>
                </div>
            </>}
        />
    )
}
