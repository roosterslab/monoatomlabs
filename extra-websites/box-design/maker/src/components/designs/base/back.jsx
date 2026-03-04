import React from 'react'
import SurfaceBg from '../../studio/SurfaceBg'

const DEFAULT_SURF = { time: 3200, bg: 'wave' }

/**
 * BackBase — base container for all back panel designs.
 * Renders the correct 1494×638 canvas with SurfaceBg.
 * Pass your content as children — it renders above the background.
 * All children should be position:absolute or position:relative with zIndex ≥ 3.
 */
export default function BackBase({ scale = 1, surf = DEFAULT_SURF, children }) {
    const W = Math.round(1494 * scale)
    const H = Math.round(638 * scale)

    return (
        <div style={{ width: W, height: H, backgroundColor: '#050505', position: 'relative', overflow: 'hidden', flexShrink: 0, userSelect: 'none' }}>
            <SurfaceBg surf={surf} />
            {children}
        </div>
    )
}
