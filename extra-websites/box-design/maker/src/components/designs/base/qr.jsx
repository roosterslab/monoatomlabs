import React from 'react'
import SurfaceBg from '../../studio/SurfaceBg'

const DEFAULT_SURF = { time: 3200, bg: 'wave' }

/**
 * QRBase — base container for all QR panel designs.
 * Renders the correct 605×492 canvas with SurfaceBg, centered.
 * Pass your content as children — it renders above the background.
 */
export default function QRBase({ scale = 1, surf = DEFAULT_SURF, children }) {
    const px = (i) => Math.round(i * 96 * scale)
    const W = px(6.303)
    const H = px(5.123)

    return (
        <div style={{ width: W, height: H, backgroundColor: '#050505', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, userSelect: 'none' }}>
            <SurfaceBg surf={surf} />
            {children}
        </div>
    )
}
