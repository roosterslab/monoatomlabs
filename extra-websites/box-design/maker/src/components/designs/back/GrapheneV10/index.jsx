import React from 'react'
import BackBase from '../../base/back'
import { Droplets, Sun, Wind, Flame, CloudRain, Zap, Bug, Shield, Disc } from 'lucide-react'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const THREATS = [
    { icon: CloudRain, label: 'Acid Rain', angle: 0 },
    { icon: Bug, label: 'Bird Droppings', angle: 45 },
    { icon: Disc, label: 'Rock Chips', angle: 90 },
    { icon: Flame, label: 'Brake Heat', angle: 135 },
    { icon: Wind, label: 'Industrial Fallout', angle: 180 },
    { icon: Zap, label: 'Road Chemicals', angle: 225 },
    { icon: Sun, label: 'UV Radiation', angle: 270 },
    { icon: Droplets, label: 'Water Spotting', angle: 315 },
]

export default function BackPanel({ scale = 1, surf = DEFAULT_SURF }) {
    const W = Math.round(1494 * scale)
    const H = Math.round(638 * scale)
    const fs = scale
    const cx = W / 2
    const cy = H / 2
    const outerR = Math.min(W, H) * 0.36
    const innerR = Math.min(W, H) * 0.14

    return (
        <BackBase scale={scale} surf={surf}>

            {/* Header */}
            <div style={{ position: 'absolute', top: 28 * fs, left: 0, right: 0, textAlign: 'center', zIndex: 3 }}>
                <div style={{ color: C, fontSize: 9 * fs, letterSpacing: '0.4em', fontFamily: "'Rajdhani', sans-serif" }}>9 THREATS. ZERO DAMAGE.</div>
            </div>

            {/* SVG: rings + connector lines */}
            <svg style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }} width={W} height={H}>
                {/* Outer ring */}
                <circle cx={cx} cy={cy} r={outerR + 20 * fs} fill="none" stroke={C} strokeWidth="0.5" opacity="0.15" strokeDasharray={`${4 * fs} ${4 * fs}`} />
                {/* Inner ring */}
                <circle cx={cx} cy={cy} r={innerR + 6 * fs} fill="none" stroke={C} strokeWidth="0.5" opacity="0.25" />

                {/* Connector lines */}
                {THREATS.map((t, i) => {
                    const a = (t.angle - 90) * Math.PI / 180
                    const x1 = cx + (innerR + 8 * fs) * Math.cos(a)
                    const y1 = cy + (innerR + 8 * fs) * Math.sin(a)
                    const x2 = cx + (outerR - 8 * fs) * Math.cos(a)
                    const y2 = cy + (outerR - 8 * fs) * Math.sin(a)
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C} strokeWidth="0.8" opacity="0.3" strokeDasharray={`${3 * fs} ${3 * fs}`} />
                })}
            </svg>

            {/* Center: CERAPHENE shield */}
            <div style={{ position: 'absolute', left: cx - innerR, top: cy - innerR, width: innerR * 2, height: innerR * 2, zIndex: 4, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'rgba(100,116,139,0.08)', border: `1px solid ${C}40`, borderRadius: '50%' }}>
                <Shield size={Math.round(innerR * 0.55)} color={C} strokeWidth={1.5} />
                <div style={{ color: 'white', fontSize: 8 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.1em', marginTop: 3 * fs, textAlign: 'center' }}>CERAPHENE</div>
                <div style={{ color: '#333', fontSize: 6 * fs, fontFamily: "'Inter', sans-serif", textAlign: 'center' }}>ALL THREATS<br />BLOCKED</div>
            </div>

            {/* Threats positioned around the wheel */}
            {THREATS.map((t, i) => {
                const Icon = t.icon
                const a = (t.angle - 90) * Math.PI / 180
                const x = cx + outerR * Math.cos(a)
                const y = cy + outerR * Math.sin(a)
                const isLeft = x < cx - 20 * fs
                const isRight = x > cx + 20 * fs
                return (
                    <div key={i} style={{
                        position: 'absolute',
                        left: x - 40 * fs,
                        top: y - 28 * fs,
                        width: 80 * fs,
                        zIndex: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: isLeft ? 'flex-end' : isRight ? 'flex-start' : 'center',
                        gap: 4 * fs,
                    }}>
                        <Icon size={Math.round(16 * fs)} color={C} strokeWidth={1.5} />
                        <div style={{ color: '#666', fontSize: 7 * fs, fontFamily: "'Inter', sans-serif", textAlign: isLeft ? 'right' : isRight ? 'left' : 'center', lineHeight: 1.2 }}>{t.label}</div>
                    </div>
                )
            })}

            {/* Bottom */}
            <div style={{ position: 'absolute', bottom: 22 * fs, left: 0, right: 0, textAlign: 'center', zIndex: 4 }}>
                <div style={{ color: '#2a2a2a', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em' }}>Comprehensive protection engineered for every road condition</div>
            </div>

        </BackBase>
    )
}
