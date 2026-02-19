import React from 'react'
import BackBase from '../../base/back'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

// SVG water droplet at a given contact angle
// angle < 90 = spread (hydrophilic), angle > 90 = beaded (hydrophobic)
function WaterDropSVG({ cx, cy, surfY, contactAngle, r, color, scale }) {
    const fs = scale
    const θ = contactAngle * Math.PI / 180
    // Center of circle relative to surface:
    // at contact angle θ, the center is at height (r * cos(180-θ)) = -r*cos(θ) above surface
    // For θ=40°: center is r*cos(40°) = 0.766r BELOW surface → cap only
    // For θ=115°: center is r*cos(115°) = -0.423r → 0.423r ABOVE surface → more than hemisphere
    const centerY = surfY - r * (-Math.cos(Math.PI - θ)) // = surfY + r*cos(θ) if θ<90, surfY - r*|cos(θ)| if θ>90

    // Contact half-width: r * sin(θ) ... actually r*sin(180-θ) = r*sin(θ)
    const halfW = r * Math.sin(θ)
    const leftX = cx - halfW
    const rightX = cx + halfW

    // Arc: large-arc-flag depends on whether angle > 180
    const largeArc = contactAngle > 180 ? 1 : 0
    const sweep = 1

    const pathD = `M ${leftX},${surfY} A ${r},${r} 0 ${largeArc} ${sweep} ${rightX},${surfY}`

    return (
        <g>
            {/* Droplet fill */}
            <path d={pathD} fill={`${color}22`} stroke={color} strokeWidth={1.5 * fs} />
            {/* Contact angle arc */}
            <path
                d={`M ${leftX + 16 * fs},${surfY} A ${16 * fs},${16 * fs} 0 0 1 ${leftX + 16 * fs * Math.cos(Math.PI - θ)},${surfY - 16 * fs * Math.sin(Math.PI - θ)}`}
                fill="none" stroke={color} strokeWidth={0.8 * fs} opacity="0.6"
            />
            {/* Left tangent line */}
            <line x1={leftX} y1={surfY} x2={leftX - 18 * fs} y2={surfY - 18 * fs * Math.tan(Math.PI - θ)} stroke={color} strokeWidth={0.8 * fs} strokeDasharray={`${3 * fs} ${3 * fs}`} opacity="0.5" />
        </g>
    )
}

export default function BackPanel({ scale = 1, surf = DEFAULT_SURF }) {
    const W = Math.round(1494 * scale)
    const H = Math.round(638 * scale)
    const fs = scale
    const surfY = Math.round(H * 0.72)
    const dropR = Math.round(H * 0.16)

    return (
        <BackBase scale={scale} surf={surf}>

            {/* Header */}
            <div style={{ position: 'absolute', top: 36 * fs, left: 0, right: 0, textAlign: 'center', zIndex: 3 }}>
                <div style={{ color: C, fontSize: 9 * fs, letterSpacing: '0.4em', fontFamily: "'Rajdhani', sans-serif" }}>HYDROPHOBIC SCIENCE — CONTACT ANGLE COMPARISON</div>
            </div>

            {/* Divider line center */}
            <div style={{ position: 'absolute', left: '50%', top: '14%', bottom: '12%', width: 1, background: 'rgba(255,255,255,0.06)', zIndex: 3 }} />

            {/* LEFT half: Bare surface */}
            <div style={{ position: 'absolute', left: 0, top: '14%', width: '50%', bottom: '12%', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 20 * fs }}>
                <div style={{ color: '#444', fontSize: 8 * fs, letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>Bare Surface</div>
            </div>

            {/* RIGHT half: CERAPHENE */}
            <div style={{ position: 'absolute', right: 0, top: '14%', width: '50%', bottom: '12%', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: 20 * fs }}>
                <div style={{ color: C, fontSize: 8 * fs, letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>CERAPHENE Coated</div>
            </div>

            {/* Main SVG: droplets + surfaces + annotations */}
            <svg style={{ position: 'absolute', inset: 0, zIndex: 4, pointerEvents: 'none' }} width={W} height={H}>

                {/* LEFT: Surface line */}
                <line x1={W * 0.06} y1={surfY} x2={W * 0.46} y2={surfY} stroke="#333" strokeWidth={1.5 * fs} />
                {/* Surface texture marks */}
                {Array.from({ length: 8 }, (_, i) => (
                    <line key={i} x1={W * 0.06 + i * W * 0.05} y1={surfY} x2={W * 0.06 + i * W * 0.05 + 8 * fs} y2={surfY + 8 * fs} stroke="#2a2a2a" strokeWidth={0.8 * fs} />
                ))}

                {/* LEFT: flat water droplet (40° contact angle) */}
                <WaterDropSVG cx={W * 0.26} cy={surfY} surfY={surfY} contactAngle={40} r={dropR * 0.75} color={C} scale={scale} />

                {/* LEFT: angle label */}
                <text x={W * 0.18} y={surfY - 10 * fs} fill={C} fontSize={11 * fs} fontFamily="'Rajdhani', sans-serif" opacity="0.7">40°</text>
                <text x={W * 0.08} y={surfY + 20 * fs} fill="#444" fontSize={8 * fs} fontFamily="'Inter', sans-serif">Spreads. Stains. Absorbs contaminants.</text>

                {/* RIGHT: Surface line — smoother */}
                <line x1={W * 0.54} y1={surfY} x2={W * 0.94} y2={surfY} stroke={C} strokeWidth={1.5 * fs} opacity="0.5" />
                {/* CERAPHENE surface glow */}
                <rect x={W * 0.54} y={surfY - 2} width={W * 0.4} height={3} fill={C} opacity="0.2" rx="1" />

                {/* RIGHT: beaded water droplet (115° contact angle) */}
                <WaterDropSVG cx={W * 0.74} cy={surfY} surfY={surfY} contactAngle={115} r={dropR} color={C} scale={scale} />

                {/* RIGHT: angle label */}
                <text x={W * 0.78} y={surfY - 14 * fs} fill="white" fontSize={14 * fs} fontFamily="'Rajdhani', sans-serif" fontWeight="800">115°</text>
                <text x={W * 0.56} y={surfY + 20 * fs} fill={C} fontSize={8 * fs} fontFamily="'Inter', sans-serif">Beads. Rolls off. Self-cleans.</text>

            </svg>

            {/* Bottom labels */}
            <div style={{ position: 'absolute', bottom: 20 * fs, left: 0, right: 0, textAlign: 'center', zIndex: 4 }}>
                <div style={{ color: C, fontSize: 10 * fs, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.25em', fontWeight: 800 }}>115° SUPERHYDROPHOBIC — THE LOTUS EFFECT</div>
                <div style={{ color: '#2a2a2a', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif", marginTop: 3 * fs }}>Water contact angle independently verified. Higher angle = greater water repellency.</div>
            </div>

        </BackBase>
    )
}
