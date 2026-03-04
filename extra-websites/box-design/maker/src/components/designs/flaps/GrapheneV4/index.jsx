import React from 'react'
import { Lock, Unlock } from 'lucide-react'
import SurfaceBg from '../../../studio/SurfaceBg'
import Logo from '../../../brand/Logo'

const CautionStripe = ({ width, height, scale }) => (
    <div style={{ width, height, background: `repeating-linear-gradient(45deg, #eab308, #eab308 ${10 * scale}px, #000 ${10 * scale}px, #000 ${20 * scale}px)`, borderBottom: '2px solid #000' }} />
)

export default function FlapsGrapheneV4({ scale = 1, hideLabels, contentsFlapId, logoFlapId, surfContents, surfLogo }) {
    const w = Math.round(499 * scale)
    const h = Math.round(204 * scale)
    const fs = scale
    const stencilFont = "'Black Ops One', 'Impact', sans-serif"

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* --- CONTENTS FLAP --- */}
            <div>
                {!hideLabels && <div style={{ marginBottom: 5, color: '#666', fontSize: 10 }}>TOP FLAP (Contents)</div>}
                <div id={contentsFlapId} style={{
                    width: w, height: h,
                    position: 'relative', overflow: 'hidden',
                    backgroundColor: '#111', flexShrink: 0
                }}>
                    <SurfaceBg surf={surfContents} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1 }} />

                    {/* Border */}
                    <div style={{ position: 'absolute', inset: 5 * fs, border: '2px dashed #444', zIndex: 2 }} />

                    <div style={{ position: 'relative', zIndex: 3, padding: 25 * fs, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                        <Unlock size={24 * fs} color="#eab308" style={{ marginBottom: 10 * fs }} />

                        <div style={{ fontSize: 18 * fs, fontFamily: stencilFont, color: '#eab308', letterSpacing: '0.05em' }}>
                            BREAK SEAL TO DEPLOY
                        </div>

                        <div style={{ marginTop: 10 * fs, display: 'flex', gap: 10 * fs }}>
                            <div style={{ fontSize: 10 * fs, color: '#888', fontFamily: 'monospace' }}>[1] AGENT</div>
                            <div style={{ fontSize: 10 * fs, color: '#888', fontFamily: 'monospace' }}>[2] APPLICATOR</div>
                            <div style={{ fontSize: 10 * fs, color: '#888', fontFamily: 'monospace' }}>[3] INTEL</div>
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
                    backgroundColor: '#111', flexShrink: 0
                }}>
                    <SurfaceBg surf={surfLogo} />
                    <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1 }} />

                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
                        <CautionStripe width="100%" height={8 * fs} scale={scale} />
                    </div>

                    <div style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 15 * fs, border: '2px solid #555', padding: '10px 20px', borderRadius: 4 * fs, background: '#222' }}>
                            <Logo size={24 * fs} theme="dark" />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span style={{ fontSize: 12 * fs, fontWeight: 700, color: '#fff', fontFamily: stencilFont }}>MONOATOM</span>
                                <span style={{ fontSize: 8 * fs, color: '#888', fontFamily: 'monospace' }}>DEFENSE DIVISION</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
