import React from 'react'
import { Building2, Zap, Layers, Shield, BarChart3, CheckCircle } from 'lucide-react'
import Logo from '../../../brand/Logo'
import SurfaceBg from '../../../studio/SurfaceBg'

const C = '#d97706'
const BOX = { face: 5.2, side: 2.13, total: 15.567, height: 6.65 }
const TAB_W = BOX.total - 2 * BOX.face - 2 * BOX.side  // 0.907"
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

// Concrete pattern SVG overlay — subtle aggregate texture
function ConcretePattern({ width, height, scale }) {
    const fs = scale
    const dots = []
    const seed = 42
    let s = seed
    const rand = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff }

    for (let i = 0; i < 80; i++) {
        dots.push({
            cx: rand() * width,
            cy: rand() * height,
            r: (rand() * 3 + 1) * fs,
            op: rand() * 0.12 + 0.04
        })
    }

    return (
        <svg width={width} height={height} style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 1 }}>
            {dots.map((d, i) => (
                <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="white" opacity={d.op} />
            ))}
            <defs>
                <radialGradient id="gacGrad" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" stopColor={C} stopOpacity="0.06" />
                    <stop offset="100%" stopColor="#000" stopOpacity="0" />
                </radialGradient>
            </defs>
            <rect width={width} height={height} fill="url(#gacGrad)" />
        </svg>
    )
}

function FeatureItem({ icon: Icon, label, value, scale }) {
    const fs = scale
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 * fs }}>
            <div style={{
                width: 32 * fs, height: 32 * fs, borderRadius: '50%',
                backgroundColor: `rgba(217,119,6,0.1)`, border: `1px solid rgba(217,119,6,0.3)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <Icon size={16 * fs} color={C} strokeWidth={1.5} />
            </div>
            <div style={{ textAlign: 'center' }}>
                <div style={{ color: 'white', fontSize: 10 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}>{value}</div>
                <div style={{ color: '#888', fontSize: 7 * fs, fontFamily: "'Inter', sans-serif", textTransform: 'uppercase' }}>{label}</div>
            </div>
        </div>
    )
}

export default function WrapGraphacreteV1({
    scale = 1,
    surfBack = DEFAULT_SURF,
    surfLeft = DEFAULT_SURF,
    surfFront = DEFAULT_SURF,
    surfRight = DEFAULT_SURF
}) {
    const px = (i) => Math.round(i * 96 * scale)
    const W = px(BOX.total), H = px(BOX.height)
    const backW = px(BOX.face), side1W = px(BOX.side)
    const frontW = px(BOX.face), side2W = px(BOX.side), tabW = px(TAB_W)
    const DIVIDER = '1px solid rgba(255,255,255,0.08)'
    const fs = scale

    const SPECS = [
        { l: 'Grade Range', v: 'M20–M70' },
        { l: 'Strength Gain', v: '+25% Compressive' },
        { l: 'Cement Reduction', v: '13%' },
        { l: 'Service Life', v: '+30%' },
        { l: 'NABL Validated', v: 'Yes' },
    ]

    return (
        <div style={{ width: W, height: H, display: 'flex', backgroundColor: '#050505', overflow: 'hidden', flexShrink: 0, userSelect: 'none' }}>

            {/* BACK FACE */}
            <div style={{ width: backW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRight: DIVIDER }}>
                <SurfaceBg surf={surfBack} />

                {/* Logo top-left */}
                <div style={{ position: 'relative', zIndex: 3, padding: 20 * fs, borderBottom: DIVIDER }}>
                    <Logo size={20 * fs} theme="dark" />
                </div>

                {/* Spec table area */}
                <div style={{ position: 'relative', zIndex: 3, flex: 1, padding: 20 * fs, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    {/* Corner brackets */}
                    <div style={{ position: 'absolute', top: 14 * fs, left: 14 * fs, width: 12 * fs, height: 12 * fs, borderTop: `2px solid ${C}`, borderLeft: `2px solid ${C}` }} />
                    <div style={{ position: 'absolute', top: 14 * fs, right: 14 * fs, width: 12 * fs, height: 12 * fs, borderTop: `2px solid ${C}`, borderRight: `2px solid ${C}` }} />
                    <div style={{ position: 'absolute', bottom: 14 * fs, left: 14 * fs, width: 12 * fs, height: 12 * fs, borderBottom: `2px solid ${C}`, borderLeft: `2px solid ${C}` }} />
                    <div style={{ position: 'absolute', bottom: 14 * fs, right: 14 * fs, width: 12 * fs, height: 12 * fs, borderBottom: `2px solid ${C}`, borderRight: `2px solid ${C}` }} />

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, marginBottom: 16 * fs, borderBottom: `1px solid #333`, paddingBottom: 10 * fs }}>
                        <Building2 size={14 * fs} color={C} strokeWidth={2} />
                        <h4 style={{ color: '#fff', fontSize: 13 * fs, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif", margin: 0 }}>
                            Concrete Enhancement Data
                        </h4>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 * fs }}>
                        {SPECS.map((s, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 6 * fs }}>
                                <span style={{ color: '#999', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>{s.l}</span>
                                <span style={{ color: 'white', fontSize: 11 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em' }}>{s.v}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* LEFT SIDE */}
            <div style={{ width: side1W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: DIVIDER }}>
                <SurfaceBg surf={surfLeft} />
                <div style={{ position: 'relative', zIndex: 3, writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 16 * fs }}>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10 * fs, letterSpacing: '0.2em', fontFamily: "'Inter', sans-serif" }}>GRAPHENE-ENHANCED</span>
                    <span style={{ color: '#fff', fontSize: 18 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>STRONGER CONCRETE</span>
                    <Building2 size={24 * fs} color={C} style={{ transform: 'rotate(90deg)' }} />
                </div>
            </div>

            {/* FRONT FACE */}
            <div style={{ width: frontW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER }}>
                <SurfaceBg surf={surfFront} />
                <ConcretePattern width={frontW} height={H} scale={scale} />

                {/* Top bar */}
                <div style={{ position: 'absolute', top: 20 * fs, left: 20 * fs, right: 20 * fs, display: 'flex', justifyContent: 'space-between', zIndex: 3 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 * fs, border: `1px solid rgba(217,119,6,0.4)`, borderRadius: 99, padding: `4px ${10 * fs}px`, backgroundColor: 'rgba(217,119,6,0.08)' }}>
                        <CheckCircle size={10 * fs} color={C} strokeWidth={2} />
                        <span style={{ color: C, fontSize: 8 * fs, fontWeight: 700, letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>NABL VALIDATED</span>
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 9 * fs, fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, letterSpacing: '0.1em', display: 'flex', alignItems: 'center' }}>
                        MONOATOM LABS
                    </div>
                </div>

                {/* Center text block */}
                <div style={{ position: 'absolute', top: '24%', left: 0, right: 0, textAlign: 'center', zIndex: 3, padding: '0 5%' }}>
                    <div style={{ color: 'transparent', WebkitTextStroke: '1px rgba(255,255,255,0.15)', fontSize: 16 * fs, fontWeight: 800, letterSpacing: '0.6em', marginBottom: -4 * fs, fontFamily: "'Rajdhani', sans-serif" }}>
                        STRUCTURAL
                    </div>
                    <div style={{ color: 'white', fontSize: 62 * fs, fontWeight: 900, letterSpacing: '0.02em', lineHeight: 0.9, fontFamily: "'Rajdhani', sans-serif", textShadow: `0 0 50px rgba(217,119,6,0.45)` }}>
                        GRAPHACRETE
                    </div>
                    <div style={{ width: 80 * fs, height: 3 * fs, background: C, margin: `${16 * fs}px auto` }} />
                    <div style={{ color: '#e5e5e5', fontSize: 12 * fs, fontWeight: 500, letterSpacing: '0.04em', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
                        Graphene-Enhanced Concrete<br />
                        <span style={{ color: C, fontWeight: 700 }}>Strength Without Extra Cement</span>
                    </div>
                </div>

                {/* Bottom feature strip */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '22%', background: 'rgba(20,20,20,0.85)', backdropFilter: 'blur(10px)', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', padding: `0 ${10 * fs}px`, zIndex: 3 }}>
                    <FeatureItem icon={Zap} label="STRENGTH" value="+25%" scale={scale} />
                    <FeatureItem icon={Layers} label="CEMENT" value="-13%" scale={scale} />
                    <FeatureItem icon={Shield} label="LIFECYCLE" value="+30%" scale={scale} />
                    <FeatureItem icon={CheckCircle} label="NABL VALID" value="M20–M70" scale={scale} />
                </div>
            </div>

            {/* RIGHT SIDE */}
            <div style={{ width: side2W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderRight: DIVIDER }}>
                <SurfaceBg surf={surfRight} />
                <div style={{ position: 'relative', zIndex: 3, writingMode: 'vertical-rl', textOrientation: 'mixed', display: 'flex', alignItems: 'center', gap: 16 * fs }}>
                    <span style={{ color: 'rgba(255,255,255,0.4)', fontSize: 10 * fs, letterSpacing: '0.2em', fontFamily: "'Inter', sans-serif" }}>NABL VALIDATED</span>
                    <span style={{ color: '#fff', fontSize: 18 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>CEMENT REDUCTION</span>
                    <BarChart3 size={24 * fs} color={C} style={{ transform: 'rotate(90deg)' }} />
                </div>
            </div>

            {/* GLUE TAB */}
            <div style={{ width: tabW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.8)' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#333', fontSize: 8 * fs, writingMode: 'vertical-lr', textTransform: 'uppercase' }}>Adhesive Area</span>
                </div>
            </div>

        </div>
    )
}
