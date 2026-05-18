import React from 'react'
import Logo from '../../../brand/Logo'
import FlapsBase from '../../base/flaps'
import { Droplets } from 'lucide-react'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const CONTENTS = [
    '50ml Ceraphene Coating',
    'Application Foam Block',
    'Microfiber Buffing Towel (×2)',
    'Protective Nitrile Gloves',
]

export default function FlapsPanel({ scale = 1, hideLabels = false, contentsFlapId, logoFlapId, surfContents = DEFAULT_SURF, surfLogo = DEFAULT_SURF }) {
    const fs = scale
    const fW = Math.round(499 * scale)
    const fH = Math.round(204 * scale)

    return (
        <FlapsBase
            scale={scale} hideLabels={hideLabels}
            contentsFlapId={contentsFlapId} logoFlapId={logoFlapId}
            surfContents={surfContents} surfLogo={surfLogo}

            contentsChildren={<>
                <div style={{ flex: 1, padding: `${14 * fs}px ${20 * fs}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 3 }}>
                    <div style={{ color: C, fontSize: Math.round(10 * fs), fontWeight: 800, letterSpacing: '0.15em', marginBottom: 10 * fs, fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>In The Box</div>
                    {CONTENTS.map((item, i) => (
                        <div key={i} style={{ color: '#777', fontSize: Math.round(9.5 * fs), lineHeight: 1.9, fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', gap: 8 * fs }}>
                            <div style={{ width: 3 * fs, height: 3 * fs, background: C, borderRadius: '50%', flexShrink: 0 }} />
                            {item}
                        </div>
                    ))}
                </div>

                {/* Droplet angle callout */}
                <div style={{ width: Math.round(110 * fs), display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 4 * fs, paddingRight: 12 * fs, position: 'relative', zIndex: 3 }}>
                    <Droplets size={Math.round(18 * fs)} color={C} strokeWidth={1.5} />
                    <div style={{ color: 'white', fontSize: 18 * fs, fontWeight: 900, fontFamily: "'Rajdhani', sans-serif", lineHeight: 1 }}>115°</div>
                    <div style={{ color: C, fontSize: 7.5 * fs, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.1em', textAlign: 'center' }}>SUPERHYDROPHOBIC</div>
                    {/* Mini SVG bead */}
                    <svg width={40 * fs} height={20 * fs}>
                        {(() => {
                            const cx = 20 * fs, sy = 18 * fs, r = 16 * fs, θ = 115 * Math.PI / 180
                            const hw = r * Math.sin(θ)
                            return (
                                <g>
                                    <line x1={0} y1={sy} x2={40 * fs} y2={sy} stroke={C} strokeWidth={0.8 * fs} opacity="0.4" />
                                    <path d={`M ${cx - hw},${sy} A ${r},${r} 0 0 1 ${cx + hw},${sy}`} fill={`${C}20`} stroke={C} strokeWidth={1 * fs} />
                                </g>
                            )
                        })()}
                    </svg>
                </div>
            </>}

            logoChildren={<>
                <div style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
                    <Logo size={Math.round(38 * fs)} theme="dark" />
                    <div style={{ marginTop: 10 * fs, fontSize: 7 * fs, color: '#444', fontFamily: "'Inter', sans-serif", lineHeight: 1.6, maxWidth: 200 * fs, textAlign: 'center', padding: `0 ${10 * fs}px` }}>
                        Water beads. Rolls off. Self-cleans. The Lotus Effect — engineered.
                    </div>
                </div>
            </>}
        />
    )
}
