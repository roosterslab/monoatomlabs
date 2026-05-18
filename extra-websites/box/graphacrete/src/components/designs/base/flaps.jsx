import React from 'react'
import SurfaceBg from '../../studio/SurfaceBg'

const DEFAULT_SURF = { time: 3200, bg: 'wave' }

/**
 * FlapsBase — base container for all flap panel designs.
 * Renders two 499×204 canvases stacked vertically, each with SurfaceBg.
 *
 * Content slots:
 *   contentsChildren — rendered inside the Contents flap (zIndex ≥ 3)
 *   logoChildren     — rendered inside the Logo flap (zIndex ≥ 3)
 */
export default function FlapsBase({ scale = 1, hideLabels = false, contentsFlapId, logoFlapId, surfContents = DEFAULT_SURF, surfLogo = DEFAULT_SURF, contentsChildren, logoChildren }) {
    const W = Math.round(499 * scale)
    const H = Math.round(204 * scale)

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>

            {/* Contents Flap */}
            <div>
                {!hideLabels && (
                    <p style={{ color: '#6b7280', fontSize: 11, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>
                        Contents Flap
                    </p>
                )}
                <div id={contentsFlapId} style={{ width: W, height: H, backgroundColor: '#050505', position: 'relative', overflow: 'hidden', display: 'flex', flexShrink: 0, userSelect: 'none' }}>
                    <SurfaceBg surf={surfContents} />
                    {contentsChildren}
                </div>
            </div>

            {/* Logo Flap */}
            <div>
                {!hideLabels && (
                    <p style={{ color: '#6b7280', fontSize: 11, marginBottom: 6, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'Inter, sans-serif' }}>
                        Logo Flap
                    </p>
                )}
                <div id={logoFlapId} style={{ width: W, height: H, backgroundColor: '#050505', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, userSelect: 'none' }}>
                    <SurfaceBg surf={surfLogo} />
                    {logoChildren}
                </div>
            </div>

        </div>
    )
}
