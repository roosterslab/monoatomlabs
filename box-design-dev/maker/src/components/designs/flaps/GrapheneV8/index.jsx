import React from 'react'
import Logo from '../../../brand/Logo'
import FlapsBase from '../../base/flaps'
import { Shield } from 'lucide-react'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const CONTENTS = [
    '50ml Ceraphene Coating',
    'Application Foam Block',
    'Microfiber Buffing Towel (×2)',
    'Protective Nitrile Gloves',
]

function HexRow({ W, H, r = 10, color = C }) {
    const dx = r * 1.5
    const cols = Math.ceil(W / dx) + 2
    const hexes = []
    for (let col = -1; col < cols; col++) {
        const cx = col * dx
        const cy = H / 2
        const pts = Array.from({ length: 6 }, (_, i) => {
            const a = (i * 60 + 30) * Math.PI / 180
            return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
        }).join(' ')
        hexes.push(<polygon key={col} points={pts} fill="none" stroke={color} strokeWidth="0.5" opacity="0.1" />)
    }
    return (
        <svg style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }} width={W} height={H}>
            {hexes}
        </svg>
    )
}

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
                <HexRow W={fW} H={fH} r={Math.round(10 * fs)} />
                <div style={{ flex: 1, padding: `${14 * fs}px ${20 * fs}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 3 }}>
                    <div style={{ color: C, fontSize: Math.round(10 * fs), fontWeight: 800, letterSpacing: '0.15em', marginBottom: 10 * fs, fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>In The Box</div>
                    {CONTENTS.map((item, i) => (
                        <div key={i} style={{ color: '#777', fontSize: Math.round(9.5 * fs), lineHeight: 1.9, fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', gap: 8 * fs }}>
                            <div style={{ width: 3 * fs, height: 3 * fs, background: C, borderRadius: '50%', flexShrink: 0 }} />
                            {item}
                        </div>
                    ))}
                </div>

                {/* Scale callout */}
                <div style={{ width: Math.round(100 * fs), display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6 * fs, paddingRight: 12 * fs, position: 'relative', zIndex: 3 }}>
                    <Shield size={Math.round(20 * fs)} color={C} strokeWidth={1.5} />
                    <div style={{ color: 'white', fontSize: 13 * fs, fontWeight: 900, fontFamily: "'Rajdhani', sans-serif", lineHeight: 1, textAlign: 'center' }}>3–4 μm</div>
                    <div style={{ color: '#444', fontSize: 7 * fs, fontFamily: "'Inter', sans-serif", textAlign: 'center', lineHeight: 1.4 }}>Invisible<br />protection</div>
                </div>
            </>}

            logoChildren={<>
                <div style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
                    <Logo size={Math.round(38 * fs)} theme="dark" />
                    <div style={{ marginTop: 10 * fs, fontSize: 7 * fs, color: '#444', fontFamily: "'Inter', sans-serif", lineHeight: 1.6, maxWidth: 200 * fs, textAlign: 'center', padding: `0 ${10 * fs}px` }}>
                        Graphene-Ceramic lattice — molecularly bonded to your clearcoat.
                    </div>
                </div>
            </>}
        />
    )
}
