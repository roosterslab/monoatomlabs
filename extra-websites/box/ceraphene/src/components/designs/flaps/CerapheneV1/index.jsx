import React from 'react'
import FlapsBase from '../../base/flaps'
import { Package, Droplet, Layers, Award, Recycle, Trash2, AlertTriangle, QrCode } from 'lucide-react'
import Logo from '../../../brand/Logo'

const C_DARK = '#050505'
const C_GRAY = '#64748B'

function ComplianceIcon({ children, label, scale }) {
    const fs = scale
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 * fs }}>
            <div style={{ color: '#666' }}>{children}</div>
        </div>
    )
}

export default function FlapsCerapheneV1({ scale = 1, hideLabels = false, contentsFlapId, logoFlapId, surfContents, surfLogo }) {
    const fs = scale

    // --- CONTENTS FLAP (Panel G) ---
    const ContentsChildren = (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: `0 ${32 * fs}px`, position: 'relative', zIndex: 3 }}>

            {/* Left: List */}
            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, marginBottom: 16 * fs, color: '#fff' }}>
                    <Package size={16 * fs} color={C_GRAY} />
                    <span style={{ fontSize: 12 * fs, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>Box Contains</span>
                </div>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 * fs }}>
                    {[
                        '1× Ceraphene™ (50 ml)',
                        '1× Applicator Sponge',
                        '2× Premium Suede Cloths',
                        '1× User Manual'
                    ].map((item, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, color: '#ddd', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                            <div style={{ width: 4 * fs, height: 4 * fs, borderRadius: '50%', backgroundColor: '#fff' }} />
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right: Info & Compliance */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 16 * fs }}>
                <div style={{ textAlign: 'right', fontSize: 9 * fs, color: '#888', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
                    <div>Vol: <span style={{ color: 'white' }}>50 ml</span></div>
                    <div>Origin: <span style={{ color: 'white' }}>Made in India</span></div>
                </div>

                <div style={{ display: 'flex', gap: 12 * fs, alignItems: 'center' }}>
                    <div style={{ width: 20 * fs, height: 20 * fs, border: '1px solid #666', borderRadius: 2 * fs, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 8 * fs, fontWeight: 700, color: '#888', cursor: 'default' }}>CE</div>
                    <Recycle size={18 * fs} color="#666" strokeWidth={1.5} />
                    <Trash2 size={18 * fs} color="#666" strokeWidth={1.5} />
                    <AlertTriangle size={18 * fs} color="#666" strokeWidth={1.5} />
                </div>
            </div>

        </div>
    )

    // --- LOGO FLAP (Panel K) ---
    const LogoChildren = (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', zIndex: 3, border: '1px dashed #333', backgroundColor: 'rgba(255,255,255,0.02)' }}>
            <div style={{ position: 'absolute', top: 8 * fs, left: 0, right: 0, textAlign: 'center', color: '#444', fontSize: 8 * fs, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase' }}>Panel K | Top Flap</div>

            <h2 style={{ color: 'white', fontSize: 24 * fs, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase', fontStyle: 'italic', fontFamily: "'Inter', sans-serif", marginBottom: 4 * fs }}>Ceraphene™</h2>
            <p style={{ color: '#888', fontSize: 9 * fs, fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>9H+ Graphene Shield</p>
        </div>
    )

    return (
        <FlapsBase
            scale={scale}
            hideLabels={hideLabels}
            contentsFlapId={contentsFlapId}
            logoFlapId={logoFlapId}
            surfContents={surfContents}
            surfLogo={surfLogo}
            contentsChildren={ContentsChildren}
            logoChildren={LogoChildren}
        />
    )
}
