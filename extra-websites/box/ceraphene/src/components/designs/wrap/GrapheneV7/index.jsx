import React from 'react'
import Logo from '../../../brand/Logo'
import WrapBase from '../../base/wrap'
import { BookOpen } from 'lucide-react'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }
const DIVIDER = '1px solid rgba(255,255,255,0.06)'

const TIMELINE = [
    { year: '2004', event: 'Graphene Isolated', detail: 'First stable 2D material. One atom thick. 200× stronger than steel.' },
    { year: '2010', event: 'Nobel Prize', detail: 'Physics Nobel awarded for graphene. Global R&D race begins.' },
    { year: '2018', event: 'Auto-Grade R&D', detail: 'Monoatom Labs begins graphene ceramic chemistry for vehicle coatings.' },
    { year: '2024', event: 'CERAPHENE', detail: 'First commercially available graphene ceramic for enthusiasts.' },
]

export default function WrapPanel({ scale = 1, surfBack = DEFAULT_SURF, surfLeft = DEFAULT_SURF, surfFront = DEFAULT_SURF, surfRight = DEFAULT_SURF }) {
    const px = (i) => Math.round(i * 96 * scale)
    const H = px(6.65)
    const fs = scale

    return (
        <WrapBase scale={scale} surfBack={surfBack} surfLeft={surfLeft} surfFront={surfFront} surfRight={surfRight}

            backContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', zIndex: 3 }}>
                    <div style={{ padding: `${20 * fs}px ${24 * fs}px`, borderBottom: DIVIDER, display: 'flex', alignItems: 'center', gap: 10 * fs }}>
                        <Logo size={Math.round(24 * fs)} theme="dark" />
                    </div>
                    <div style={{ flex: 1, padding: 24 * fs, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16 * fs }}>
                        <div style={{ color: C, fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif", marginBottom: 4 * fs }}>The Graphene Chronicle</div>
                        {TIMELINE.map((t, i) => (
                            <div key={i} style={{ display: 'flex', gap: 12 * fs, alignItems: 'flex-start', opacity: 0.3 + i * 0.23 }}>
                                <div style={{ color: 'white', fontSize: 11 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif", minWidth: 32 * fs, lineHeight: 1 }}>{t.year}</div>
                                <div>
                                    <div style={{ color: '#aaa', fontSize: 9 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}>{t.event}</div>
                                    <div style={{ color: '#444', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif", lineHeight: 1.4, marginTop: 2 }}>{t.detail}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>}

            leftContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 14 * fs }}>
                        <BookOpen size={20 * fs} color={C} style={{ transform: 'rotate(90deg)' }} />
                        <span style={{ color: '#bbb', fontSize: 16 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>EST. GRAPHENE</span>
                        <span style={{ color: '#333', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif" }}>SINCE 2004</span>
                    </div>
                </div>
            </>}

            frontContent={<>
                {/* Quote */}
                <div style={{ position: 'absolute', top: '14%', left: '8%', right: '8%', textAlign: 'center', zIndex: 3 }}>
                    <div style={{ color: '#2a2a2a', fontSize: 10 * fs, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.3em', textTransform: 'uppercase' }}>Born From Discovery</div>
                </div>

                {/* Product name */}
                <div style={{ position: 'absolute', top: '28%', left: 0, right: 0, textAlign: 'center', zIndex: 3, padding: '0 6%' }}>
                    <div style={{ color: 'transparent', WebkitTextStroke: `1px rgba(255,255,255,0.12)`, fontSize: 16 * fs, fontWeight: 800, letterSpacing: '0.5em', marginBottom: -4 * fs, fontFamily: "'Rajdhani', sans-serif" }}>GRAPHENE CERAMIC</div>
                    <div style={{ color: 'white', fontSize: 58 * fs, fontWeight: 900, letterSpacing: '0.02em', lineHeight: 0.9, fontFamily: "'Rajdhani', sans-serif" }}>CERAPHENE</div>
                    <div style={{ width: 60 * fs, height: 1, background: C, margin: `${14 * fs}px auto` }} />
                    <div style={{ color: '#555', fontSize: 11 * fs, fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                        The strongest material ever measured.<br />
                        <span style={{ color: '#777' }}>Now protecting your vehicle.</span>
                    </div>
                </div>

                {/* Timeline strip bottom */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '20%', background: 'rgba(8,8,8,0.9)', borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: `0 ${20 * fs}px`, zIndex: 3 }}>
                    {TIMELINE.map((t, i) => (
                        <div key={i} style={{ textAlign: 'center', opacity: 0.3 + i * 0.23 }}>
                            <div style={{ color: 'white', fontSize: 14 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif" }}>{t.year}</div>
                            <div style={{ color: '#444', fontSize: 7 * fs, fontFamily: "'Inter', sans-serif", textTransform: 'uppercase' }}>{t.event}</div>
                        </div>
                    ))}
                </div>
            </>}

            rightContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <div style={{ writingMode: 'vertical-rl', display: 'flex', alignItems: 'center', gap: 14 * fs }}>
                        <span style={{ color: '#333', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif" }}>MONOATOM LABS</span>
                        <span style={{ color: '#888', fontSize: 16 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>THE CHRONICLE</span>
                    </div>
                </div>
            </>}
        />
    )
}
