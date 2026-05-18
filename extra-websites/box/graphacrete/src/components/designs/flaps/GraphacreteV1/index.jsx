import React from 'react'
import SurfaceBg from '../../../studio/SurfaceBg'
import Logo from '../../../brand/Logo'
import { Package } from 'lucide-react'

const C = '#d97706'
const C_DARK = '#050505'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const BOX_CONTENTS = [
    '1 × Graphacrete Masterbatch (500g)',
    '1 × Dosage Calculator Card',
    '1 × Application Guide',
    '1 × NABL Certificate Copy',
]

export default function FlapsGraphacreteV1({
    scale = 1,
    surfContents = DEFAULT_SURF,
    surfLogo = DEFAULT_SURF,
    hideLabels = false,
    contentsFlapId,
    logoFlapId
}) {
    const fs = scale
    const W = Math.round(499 * scale)
    const contentsH = Math.round(638 * scale)
    const logoH = Math.round(204 * scale)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: Math.round(24 * fs) }}>

            {/* Contents Flap */}
            <div>
                {!hideLabels && (
                    <p style={{ color: '#6b7280', fontSize: 11, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>
                        Contents Flap
                    </p>
                )}
                <div
                    id={contentsFlapId}
                    style={{ width: W, height: contentsH, backgroundColor: C_DARK, position: 'relative', overflow: 'hidden', display: 'flex', flexShrink: 0, userSelect: 'none' }}
                >
                    <SurfaceBg surf={surfContents} />
                    <div style={{ flex: 1, padding: `${20 * fs}px ${24 * fs}px`, display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 3, gap: 0 }}>

                        {/* Heading */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, marginBottom: 20 * fs }}>
                            <Package size={15 * fs} color={C} strokeWidth={2.5} />
                            <span style={{ color: C, fontSize: 13 * fs, fontWeight: 800, letterSpacing: '0.15em', fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>In The Bag</span>
                        </div>

                        {/* Items */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 * fs }}>
                            {BOX_CONTENTS.map((item, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 * fs }}>
                                    <div style={{ width: 5 * fs, height: 5 * fs, borderRadius: '50%', backgroundColor: C, boxShadow: `0 0 6px ${C}`, flexShrink: 0 }} />
                                    <span style={{ color: '#ddd', fontSize: 10.5 * fs, lineHeight: 1.5, fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>{item}</span>
                                </div>
                            ))}
                        </div>

                        {/* Divider + info */}
                        <div style={{ marginTop: 24 * fs, paddingTop: 16 * fs, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                            <div style={{ color: '#666', fontSize: 8.5 * fs, fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                                <div>Origin: <span style={{ color: '#aaa' }}>Made in India</span></div>
                                <div>Grades: <span style={{ color: '#aaa' }}>M20 – M70</span></div>
                                <div>NABL Lab: <span style={{ color: '#aaa' }}>Validated</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Logo Flap */}
            <div>
                {!hideLabels && (
                    <p style={{ color: '#6b7280', fontSize: 11, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>
                        Logo Flap
                    </p>
                )}
                <div
                    id={logoFlapId}
                    style={{ width: W, height: logoH, backgroundColor: C_DARK, position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, userSelect: 'none' }}
                >
                    <SurfaceBg surf={surfLogo} />
                    <div style={{ position: 'relative', zIndex: 3, textAlign: 'center' }}>
                        <Logo size={Math.round(42 * fs)} theme="dark" />
                        <div style={{ marginTop: 12 * fs, fontSize: 9 * fs, color: 'rgba(255,255,255,0.55)', letterSpacing: '0.3em', textAlign: 'center', fontFamily: 'sans-serif', textTransform: 'uppercase', fontWeight: 600 }}>
                            Engineered for Stronger Structures
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
