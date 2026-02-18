import React from 'react'
import BackBase from '../../base/back'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const TIMELINE = [
    { year: '2004', event: 'Graphene Isolated', detail: 'First stable 2D material extracted from graphite by Geim & Novoselov.' },
    { year: '2010', event: 'Nobel Prize Physics', detail: 'The Nobel Committee recognises graphene as the strongest material ever measured.' },
    { year: '2018', event: 'Auto-Grade Formula', detail: 'Monoatom Labs begins R&D on graphene-infused ceramic coating chemistry.' },
    { year: '2024', event: 'CERAPHENE Launched', detail: 'First commercially available graphene ceramic coating engineered for enthusiasts.' },
]

export default function BackPanel({ scale = 1, surf = DEFAULT_SURF }) {
    const W = Math.round(1494 * scale)
    const H = Math.round(638 * scale)
    const fs = scale

    return (
        <BackBase scale={scale} surf={surf}>

            {/* Header */}
            <div style={{ position: 'absolute', top: 36 * fs, left: 0, right: 0, textAlign: 'center', zIndex: 3 }}>
                <div style={{ color: C, fontSize: 9 * fs, letterSpacing: '0.35em', fontFamily: "'Rajdhani', sans-serif" }}>THE GRAPHENE CHRONICLE</div>
                <div style={{ color: '#333', fontSize: 7 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif", marginTop: 4 * fs }}>From Nobel Prize Laboratory to Your Vehicle</div>
            </div>

            {/* Timeline horizontal */}
            <div style={{ position: 'absolute', left: 60 * fs, right: 60 * fs, top: '50%', transform: 'translateY(-50%)', zIndex: 3 }}>

                {/* Spine line */}
                <div style={{ position: 'absolute', top: '38%', left: 0, right: 0, height: 1, background: `linear-gradient(to right, transparent, ${C}60, ${C}60, transparent)` }} />

                {/* Events */}
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {TIMELINE.map((t, i) => (
                        <div key={i} style={{ width: `${100 / TIMELINE.length}%`, paddingRight: 24 * fs, boxSizing: 'border-box' }}>

                            {/* Year + node */}
                            <div style={{ marginBottom: 16 * fs }}>
                                <div style={{ color: 'white', fontSize: 22 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}>{t.year}</div>
                                <div style={{ width: 1, height: 20 * fs, background: C, opacity: 0.5, marginTop: 4 }} />
                                <div style={{ width: i === TIMELINE.length - 1 ? 10 * fs : 6 * fs, height: i === TIMELINE.length - 1 ? 10 * fs : 6 * fs, borderRadius: '50%', background: i === TIMELINE.length - 1 ? 'white' : C, border: `1px solid ${C}`, marginTop: 0 }} />
                            </div>

                            {/* Event title */}
                            <div style={{ color: i === TIMELINE.length - 1 ? 'white' : '#aaa', fontSize: 13 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 8 * fs }}>{t.event}</div>

                            {/* Detail */}
                            <div style={{ color: '#555', fontSize: 9 * fs, fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>{t.detail}</div>

                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom quote */}
            <div style={{ position: 'absolute', bottom: 28 * fs, left: 0, right: 0, textAlign: 'center', zIndex: 3 }}>
                <div style={{ color: '#2a2a2a', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Rajdhani', sans-serif", fontStyle: 'italic' }}>"The Strongest Material Known to Science — Now on Your Car."</div>
            </div>

        </BackBase>
    )
}
