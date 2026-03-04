import React from 'react'
import { PackageOpen } from 'lucide-react'
import SurfaceBg from '../../../studio/SurfaceBg'
import Logo from '../../../brand/Logo'

export default function FlapsGrapheneV3({ scale = 1, hideLabels, contentsFlapId, logoFlapId, surfContents, surfLogo }) {
    const w = Math.round(499 * scale)
    const h = Math.round(204 * scale)
    const fs = scale

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* --- CONTENTS FLAP --- */}
            <div>
                {!hideLabels && <div style={{ marginBottom: 5, color: '#666', fontSize: 10 }}>TOP FLAP (Contents)</div>}
                <div id={contentsFlapId} style={{
                    width: w, height: h,
                    position: 'relative', overflow: 'hidden',
                    backgroundColor: '#050505', flexShrink: 0
                }}>
                    <SurfaceBg surf={surfContents} />
                    <div style={{ position: 'absolute', inset: 0, background: '#080808', zIndex: 1 }} />

                    <div style={{ position: 'relative', zIndex: 3, padding: 25 * fs, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 * fs, marginBottom: 15 * fs }}>
                            <PackageOpen size={14 * fs} color="#0ea5e9" />
                            <span style={{ color: '#0ea5e9', fontSize: 10 * fs, fontFamily: 'monospace' }}>CONTENTS::VERIFIED</span>
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 * fs }}>
                            <div style={{ color: '#fff', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", borderLeft: '2px solid #333', paddingLeft: 8 * fs }}>1. COATING AGENT</div>
                            <div style={{ color: '#fff', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", borderLeft: '2px solid #333', paddingLeft: 8 * fs }}>2. BLOCK SPONGE</div>
                            <div style={{ color: '#fff', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", borderLeft: '2px solid #333', paddingLeft: 8 * fs }}>3. SUEDE CLOTH</div>
                            <div style={{ color: '#fff', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", borderLeft: '2px solid #333', paddingLeft: 8 * fs }}>4. MANUAL</div>
                        </div>

                    </div>
                </div>
            </div>

            {/* --- LOGO FLAP --- */}
            <div>
                {!hideLabels && <div style={{ marginBottom: 5, color: '#666', fontSize: 10 }}>BOTTOM FLAP (Logo)</div>}
                <div id={logoFlapId} style={{
                    width: w, height: h,
                    position: 'relative', overflow: 'hidden',
                    backgroundColor: '#050505', flexShrink: 0
                }}>
                    <SurfaceBg surf={surfLogo} />
                    <div style={{ position: 'absolute', inset: 0, background: '#080808', zIndex: 1 }} />

                    <div style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Minimalist Centered Logo */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 * fs }}>
                            <Logo size={24 * fs} theme="dark" />
                            <div style={{ fontSize: 8 * fs, color: '#444', fontFamily: "'Inter', sans-serif", letterSpacing: '0.2em' }}>MONOATOM LABS</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
