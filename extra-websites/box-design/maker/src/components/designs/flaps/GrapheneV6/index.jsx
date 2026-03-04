import React from 'react'
import Logo from '../../../brand/Logo'
import FlapsBase from '../../base/flaps'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const CONTENTS = [
    { item: '50ml Ceraphene Coating', code: 'SKU-CEP-50' },
    { item: 'Application Foam Block', code: 'SKU-AFB-01' },
    { item: 'Microfiber Buffing Towel ×2', code: 'SKU-MFT-02' },
    { item: 'Protective Nitrile Gloves', code: 'SKU-PNG-01' },
]

const STATS = [
    { label: '9H+', sub: 'Hardness' },
    { label: '700°C', sub: 'Heat' },
    { label: '115°', sub: 'Contact' },
    { label: '4 Yrs', sub: 'Durable' },
]

export default function FlapsPanel({ scale = 1, hideLabels = false, contentsFlapId, logoFlapId, surfContents = DEFAULT_SURF, surfLogo = DEFAULT_SURF }) {
    const fs = scale

    return (
        <FlapsBase
            scale={scale} hideLabels={hideLabels}
            contentsFlapId={contentsFlapId} logoFlapId={logoFlapId}
            surfContents={surfContents} surfLogo={surfLogo}

            contentsChildren={<>
                <div style={{ flex: 1, padding: `${12 * fs}px ${18 * fs}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 3 }}>
                    <div style={{ color: C, fontSize: Math.round(10 * fs), fontWeight: 800, letterSpacing: '0.15em', marginBottom: 10 * fs, fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>Kit Contents</div>
                    {CONTENTS.map((c, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 4 * fs }}>
                            <span style={{ color: '#888', fontSize: 9 * fs, fontFamily: "'Inter', sans-serif" }}>{c.item}</span>
                            <span style={{ color: '#333', fontSize: 7 * fs, fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em' }}>{c.code}</span>
                        </div>
                    ))}
                </div>

                {/* Right: 4 key stats */}
                <div style={{ width: Math.round(100 * fs), display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8 * fs, paddingRight: 12 * fs, position: 'relative', zIndex: 3 }}>
                    {STATS.map((s, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ color: 'white', fontSize: 12 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif", lineHeight: 1 }}>{s.label}</div>
                            <div style={{ color: '#444', fontSize: 7 * fs, fontFamily: "'Inter', sans-serif" }}>{s.sub}</div>
                        </div>
                    ))}
                </div>
            </>}

            logoChildren={<>
                <div style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
                    <Logo size={Math.round(38 * fs)} theme="dark" />
                    <div style={{ marginTop: 12 * fs, display: 'flex', gap: 16 * fs, justifyContent: 'center' }}>
                        {STATS.map((s, i) => (
                            <div key={i} style={{ textAlign: 'center' }}>
                                <div style={{ color: 'white', fontSize: 11 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif" }}>{s.label}</div>
                                <div style={{ color: '#444', fontSize: 6 * fs, fontFamily: "'Inter', sans-serif", textTransform: 'uppercase' }}>{s.sub}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </>}
        />
    )
}
