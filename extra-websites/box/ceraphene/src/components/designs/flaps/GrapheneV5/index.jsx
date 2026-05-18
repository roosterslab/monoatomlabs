import React from 'react'
import Logo from '../../../brand/Logo'
import FlapsBase from '../../base/flaps'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const LAYERS = [
    { name: 'CERAPHENE', role: 'Graphene-Ceramic Shield', thick: '3–4 μm', highlight: true },
    { name: 'CLEARCOAT', role: 'Clear Factory Lacquer', thick: '50–70 μm' },
    { name: 'BASE COAT', role: 'Pigment Layer', thick: '15–25 μm' },
    { name: 'PRIMER', role: 'Corrosion Barrier', thick: '15–25 μm' },
    { name: 'STEEL BODY', role: 'Body Panel', thick: 'substrate' },
]

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
                {/* Left: Contents list */}
                <div style={{ flex: 1, padding: `${14 * fs}px ${20 * fs}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 3 }}>
                    <div style={{ color: C, fontSize: Math.round(11 * fs), fontWeight: 800, letterSpacing: '0.15em', marginBottom: 10 * fs, fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>What's Included</div>
                    {CONTENTS.map((item, i) => (
                        <div key={i} style={{ color: '#888', fontSize: Math.round(9.5 * fs), lineHeight: 1.9, fontFamily: "'Inter', sans-serif", display: 'flex', alignItems: 'center', gap: 8 * fs }}>
                            <div style={{ width: 3 * fs, height: 3 * fs, background: C, borderRadius: '50%', flexShrink: 0 }} />
                            {item}
                        </div>
                    ))}
                </div>

                {/* Right: Mini layer stack */}
                <div style={{ width: Math.round(110 * fs), display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingRight: 14 * fs, position: 'relative', zIndex: 3 }}>
                    {LAYERS.map((l, i) => (
                        <div key={i} style={{ padding: `${2 * fs}px ${6 * fs}px`, fontSize: 7 * fs, fontFamily: "'Rajdhani', sans-serif", color: l.highlight ? 'white' : '#444', background: l.highlight ? `rgba(100,116,139,0.2)` : 'transparent', borderLeft: l.highlight ? `2px solid ${C}` : '2px solid transparent', borderBottom: '1px solid rgba(255,255,255,0.04)', lineHeight: 1.4 }}>
                            {l.name}
                        </div>
                    ))}
                </div>
            </>}

            logoChildren={<>
                <div style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
                    <Logo size={Math.round(40 * fs)} theme="dark" />
                    <div style={{ marginTop: 10 * fs, fontSize: 8 * fs, color: C, letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>
                        Molecular Bonding Technology
                    </div>
                    <div style={{ marginTop: 6 * fs, fontSize: 7 * fs, color: '#333', fontFamily: "'Inter', sans-serif" }}>
                        3–4 μm of Graphene-Ceramic Protection
                    </div>
                </div>
            </>}
        />
    )
}
