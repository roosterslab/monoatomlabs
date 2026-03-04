import React from 'react'
import SurfaceBg from '../../studio/SurfaceBg'

const BOX = { face: 5.2, side: 2.13, total: 15.567, height: 6.65 }
const TAB_W = BOX.total - 2 * BOX.face - 2 * BOX.side
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

/**
 * WrapBase — base container for all wrap panel designs.
 * Renders the full flat-lay wrap (back + left + front + right + tab),
 * each section with its own SurfaceBg.
 *
 * Content slots (rendered inside each section above the background):
 *   backContent   — Back face    (5.2" wide)
 *   leftContent   — Left spine   (2.13" wide)
 *   frontContent  — Front face   (5.2" wide)
 *   rightContent  — Right spine  (2.13" wide)
 *
 * Each section is position:relative, overflow:hidden.
 * Your content should use position:relative/absolute with zIndex ≥ 3.
 */
export default function WrapBase({ scale = 1, surfBack = DEFAULT_SURF, surfLeft = DEFAULT_SURF, surfFront = DEFAULT_SURF, surfRight = DEFAULT_SURF, backContent, leftContent, frontContent, rightContent }) {
    const px = (i) => Math.round(i * 96 * scale)
    const W = px(BOX.total), H = px(BOX.height)
    const backW = px(BOX.face), side1W = px(BOX.side)
    const frontW = px(BOX.face), side2W = px(BOX.side), tabW = px(TAB_W)
    const DIVIDER = '1px solid rgba(255,255,255,0.08)'

    return (
        <div style={{ width: W, height: H, display: 'flex', backgroundColor: '#050505', overflow: 'hidden', flexShrink: 0, userSelect: 'none' }}>

            {/* Back Face */}
            <div style={{ width: backW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER }}>
                <SurfaceBg surf={surfBack} />
                {backContent}
            </div>

            {/* Left Spine */}
            <div style={{ width: side1W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER }}>
                <SurfaceBg surf={surfLeft} />
                {leftContent}
            </div>

            {/* Front Face */}
            <div style={{ width: frontW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER }}>
                <SurfaceBg surf={surfFront} />
                {frontContent}
            </div>

            {/* Right Spine */}
            <div style={{ width: side2W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER }}>
                <SurfaceBg surf={surfRight} />
                {rightContent}
            </div>

            {/* Glue Tab */}
            <div style={{ width: tabW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', backgroundColor: '#141414' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#333', fontSize: 8 * scale, writingMode: 'vertical-lr', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Adhesive</span>
                </div>
            </div>

        </div>
    )
}
