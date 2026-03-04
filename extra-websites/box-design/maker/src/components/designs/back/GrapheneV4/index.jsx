import React from 'react'
import { Shield, ShieldAlert, Crosshair, AlertTriangle, Battery } from 'lucide-react'
import SurfaceBg from '../../../studio/SurfaceBg'

const CautionStripe = ({ width, height, scale }) => (
    <div style={{ width, height, background: `repeating-linear-gradient(45deg, #eab308, #eab308 ${10 * scale}px, #000 ${10 * scale}px, #000 ${20 * scale}px)`, borderBottom: '2px solid #000' }} />
)

export default function BackGrapheneV4({ scale = 1, surf }) {
    const w = Math.round(1494 * scale)
    const h = Math.round(638 * scale)
    const fs = scale

    // Tactical Styles
    const stencilFont = "'Black Ops One', 'Impact', sans-serif"
    const techFont = "'Rajdhani', sans-serif"
    const monoFont = "'Courier New', monospace"

    return (
        <div style={{ width: w, height: h, display: 'flex', backgroundColor: '#1a1a1a', color: '#e5e5e5', overflow: 'hidden', flexShrink: 0, userSelect: 'none', position: 'relative' }}>
            <SurfaceBg surf={surf} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,20,20,0.95)', zIndex: 1 }} />

            <div style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%', display: 'flex', padding: 50 * fs }}>

                {/* Left Col: Header & Warnings */}
                <div style={{ width: '35%', paddingRight: 40 * fs, display: 'flex', flexDirection: 'column', borderRight: '2px dashed #444' }}>
                    <CautionStripe width="100%" height={20 * fs} scale={scale} />

                    <h2 style={{ fontSize: 32 * fs, fontFamily: stencilFont, color: '#eab308', marginTop: 30 * fs, marginBottom: 10 * fs }}>
                        MISSION<br />READY
                    </h2>

                    <div style={{ fontSize: 12 * fs, fontFamily: monoFont, color: '#aaa', lineHeight: 1.5 }}>
                        FIELD DEPLOYMENT AUTHORIZED.
                        <br />
                        TARGET: AUTOMOTIVE CLEAR COAT.
                    </div>

                    <div style={{ marginTop: 'auto', border: '1px solid #eab308', padding: 15 * fs, background: 'rgba(234, 179, 8, 0.05)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 * fs, marginBottom: 10 * fs }}>
                            <AlertTriangle size={18 * fs} color="#eab308" />
                            <span style={{ fontSize: 12 * fs, color: '#eab308', fontWeight: 700, fontFamily: techFont }}>RESTRICTED ACCESS</span>
                        </div>
                        <div style={{ fontSize: 9 * fs, color: '#ccc', fontFamily: monoFont }}>
                            Professional application only. Requires PPE. Avoid contact with skin.
                        </div>
                    </div>
                </div>

                {/* Right Col: Grid Specs */}
                <div style={{ flex: 1, paddingLeft: 40 * fs, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 * fs }}>

                    {/* Spec Card 1 */}
                    <div style={{ background: '#111', border: '1px solid #333', padding: 20 * fs, position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, padding: '2px 6px', background: '#333', fontSize: 8 * fs, fontFamily: monoFont }}>STAT: OK</div>
                        <div style={{ fontSize: 10 * fs, color: '#666', fontFamily: techFont, fontWeight: 700, marginBottom: 5 * fs }}>PROTECTION LEVEL</div>
                        <div style={{ fontSize: 24 * fs, color: '#fff', fontFamily: stencilFont }}>MAXIMUM</div>
                        <div style={{ marginTop: 10 * fs, width: '100%', height: 4 * fs, background: '#333' }}>
                            <div style={{ width: '100%', height: '100%', background: '#eab308' }} />
                        </div>
                    </div>

                    {/* Spec Card 2 */}
                    <div style={{ background: '#111', border: '1px solid #333', padding: 20 * fs, position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, padding: '2px 6px', background: '#333', fontSize: 8 * fs, fontFamily: monoFont }}>STAT: OK</div>
                        <div style={{ fontSize: 10 * fs, color: '#666', fontFamily: techFont, fontWeight: 700, marginBottom: 5 * fs }}>HARDNESS</div>
                        <div style={{ fontSize: 24 * fs, color: '#fff', fontFamily: stencilFont }}>9H+ SCALE</div>
                        <div style={{ marginTop: 10 * fs, width: '100%', height: 4 * fs, background: '#333' }}>
                            <div style={{ width: '95%', height: '100%', background: '#22c55e' }} />
                        </div>
                    </div>

                    {/* Spec Card 3 */}
                    <div style={{ background: '#111', border: '1px solid #333', padding: 20 * fs, position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, padding: '2px 6px', background: '#333', fontSize: 8 * fs, fontFamily: monoFont }}>STAT: OK</div>
                        <div style={{ fontSize: 10 * fs, color: '#666', fontFamily: techFont, fontWeight: 700, marginBottom: 5 * fs }}>LIFESPAN</div>
                        <div style={{ fontSize: 24 * fs, color: '#fff', fontFamily: stencilFont }}>48 MONTHS</div>
                        <div style={{ marginTop: 10 * fs, width: '100%', height: 4 * fs, background: '#333' }}>
                            <div style={{ width: '90%', height: '100%', background: '#22c55e' }} />
                        </div>
                    </div>

                    {/* Spec Card 4 - Contact Angle with Visual */}
                    <div style={{ background: '#111', border: '1px solid #333', padding: 20 * fs, position: 'relative' }}>
                        <div style={{ position: 'absolute', top: 0, right: 0, padding: '2px 6px', background: '#333', fontSize: 8 * fs, fontFamily: monoFont }}>STAT: OK</div>
                        <div style={{ fontSize: 10 * fs, color: '#666', fontFamily: techFont, fontWeight: 700, marginBottom: 5 * fs }}>HYDROPHOBICITY</div>
                        <div style={{ fontSize: 24 * fs, color: '#fff', fontFamily: stencilFont }}>115 DEG</div>
                        <div style={{ marginTop: 10 * fs, width: '100%', height: 4 * fs, background: '#333' }}>
                            <div style={{ width: '100%', height: '100%', background: '#0ea5e9' }} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}
