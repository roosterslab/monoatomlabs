import React from 'react'
import Logo from '../../../brand/Logo'
import FlapsBase from '../../base/flaps'

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

                {/* Timeline snippet */}
                <div style={{ width: Math.round(100 * fs), display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 6 * fs, paddingRight: 12 * fs, position: 'relative', zIndex: 3 }}>
                    {['2004', '2010', '2024'].map((yr, i) => (
                        <div key={i} style={{ textAlign: 'center', opacity: 0.3 + i * 0.35 }}>
                            <div style={{ color: 'white', fontSize: 9 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif" }}>{yr}</div>
                            {i < 2 && <div style={{ width: 1, height: 8 * fs, background: C, margin: '2px auto', opacity: 0.4 }} />}
                        </div>
                    ))}
                </div>
            </>}

            logoChildren={<>
                <div style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
                    <Logo size={Math.round(38 * fs)} theme="dark" />
                    <div style={{ marginTop: 10 * fs, fontSize: 7 * fs, color: '#444', fontFamily: "'Inter', sans-serif", lineHeight: 1.6, maxWidth: 200 * fs, textAlign: 'center', padding: `0 ${10 * fs}px` }}>
                        Born from the Nobel Prize discovery of graphene — the strongest material ever measured.
                    </div>
                </div>
            </>}
        />
    )
}
