import React from 'react'
import { Recycle, Trash2, Cpu } from 'lucide-react'
import SurfaceBg from '../../../studio/SurfaceBg'
import Logo from '../../../brand/Logo'

const CE_MARK = ({ size }) => (
    <span style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: size, letterSpacing: '-0.1em' }}>CE</span>
)

export default function FlapsGrapheneV2({ scale = 1, hideLabels, contentsFlapId, logoFlapId, surfContents, surfLogo }) {
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
                    {/* Tech decorative line */}
                    <div style={{ position: 'absolute', top: 0, left: 20 * fs, width: 2 * fs, height: '100%', background: '#0ea5e9', opacity: 0.5, zIndex: 2 }} />

                    <div style={{ position: 'relative', zIndex: 3, padding: '20px 20px 20px 40px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div>
                                <h4 style={{ color: '#0ea5e9', fontSize: 10 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.1em', marginBottom: 5 * fs }}>MANIFEST // BOX CONTENTS</h4>
                                <div style={{ width: 40 * fs, height: 1, background: '#fff', opacity: 0.2 }} />
                            </div>
                            <Cpu size={14 * fs} color="#0ea5e9" opacity={0.5} />
                        </div>

                        <ul style={{ margin: 0, paddingLeft: 0, color: '#ccc', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 5 * fs }}>
                            <li>• 1x Coating (50ml)</li>
                            <li>• 1x Sponge Block</li>
                            <li>• 1x Suede Cloth</li>
                            <li>• 1x Manual [EN]</li>
                        </ul>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 8 * fs }}>
                            <div style={{ fontSize: 8 * fs, color: '#666', fontFamily: 'monospace' }}>PN: GPH-50-V2</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, color: '#999' }}>
                                <CE_MARK size={12 * fs} />
                                <Recycle size={12 * fs} />
                                <Trash2 size={12 * fs} />
                            </div>
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
                    {/* Tech crosshairs */}
                    <div style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }}>
                        <div style={{ position: 'absolute', top: '50%', left: 20 * fs, width: 10 * fs, height: 1, background: '#0ea5e9' }} />
                        <div style={{ position: 'absolute', top: '50%', right: 20 * fs, width: 10 * fs, height: 1, background: '#0ea5e9' }} />
                        <div style={{ position: 'absolute', left: '50%', top: 20 * fs, width: 1, height: 10 * fs, background: '#0ea5e9' }} />
                        <div style={{ position: 'absolute', left: '50%', bottom: 20 * fs, width: 1, height: 10 * fs, background: '#0ea5e9' }} />
                    </div>

                    <div style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Logo size={36 * fs} theme="dark" />
                    </div>
                </div>
            </div>

        </div>
    )
}
