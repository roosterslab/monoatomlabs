import React from 'react'
import { Hexagon, Activity, Shield, Zap, Maximize, Layers, BarChart3, Scan, Cpu, Droplets } from 'lucide-react'
import SurfaceBg from '../../../studio/SurfaceBg'
import Logo from '../../../brand/Logo'

const BOX = { face: 5.2, side: 2.13, total: 15.567, height: 6.65 }
const TAB_W = BOX.total - 2 * BOX.face - 2 * BOX.side

// --- SUB-COMPONENTS ---

function ReactorCore({ scale }) {
    const s = scale
    return (
        <div style={{ position: 'relative', width: 140 * s, height: 140 * s, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Outer rotating ring */}
            <div style={{ position: 'absolute', inset: 0, border: '1px dashed rgba(14, 165, 233, 0.3)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', inset: -10 * s, border: '1px solid rgba(14, 165, 233, 0.1)', borderRadius: '50%' }} />

            {/* Core Hexagon */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                <Hexagon size={60 * s} color="#0ea5e9" strokeWidth={1} fill="rgba(14, 165, 233, 0.1)" />
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Cpu size={30 * s} color="#fff" />
                </div>
            </div>

            {/* Glowing center */}
            <div style={{ position: 'absolute', inset: 30 * s, background: 'radial-gradient(circle, rgba(14,165,233,0.4) 0%, transparent 70%)', zIndex: 1 }} />

            {/* Decorative orbital markers */}
            <div style={{ position: 'absolute', top: 0, left: '50%', width: 2 * s, height: 6 * s, background: '#0ea5e9', transform: 'translateX(-50%)' }} />
            <div style={{ position: 'absolute', bottom: 0, left: '50%', width: 2 * s, height: 6 * s, background: '#0ea5e9', transform: 'translateX(-50%)' }} />
            <div style={{ position: 'absolute', left: 0, top: '50%', width: 6 * s, height: 2 * s, background: '#0ea5e9', transform: 'translateY(-50%)' }} />
            <div style={{ position: 'absolute', right: 0, top: '50%', width: 6 * s, height: 2 * s, background: '#0ea5e9', transform: 'translateY(-50%)' }} />
        </div>
    )
}

function StatModule({ label, value, sub, scale, icon: Icon }) {
    const s = scale
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 * s }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 * s, opacity: 0.7 }}>
                {Icon && <Icon size={10 * s} color="#0ea5e9" />}
                <span style={{ fontSize: 8 * s, fontFamily: "'Inter', sans-serif", letterSpacing: '0.1em', color: '#fff' }}>{label}</span>
            </div>
            <div style={{ fontSize: 18 * s, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: '#fff', letterSpacing: '0.05em' }}>
                {value}
            </div>
            {sub && <div style={{ fontSize: 7 * s, color: '#666', fontFamily: "'Inter', sans-serif" }}>{sub}</div>}
        </div>
    )
}

function BarGraph({ scale }) {
    const s = scale
    return (
        <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 8 * s }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <span style={{ fontSize: 9 * s, color: '#fff', fontWeight: 700, fontFamily: "'Rajdhani', sans-serif" }}>DURABILITY (YRS)</span>
                <span style={{ fontSize: 8 * s, color: '#0ea5e9' }}>+60% LIFESPAN</span>
            </div>
            {/* Ceraphene Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 * s }}>
                <div style={{ width: 40 * s, fontSize: 8 * s, color: '#aaa', textAlign: 'right' }}>CN-X</div>
                <div style={{ flex: 1, height: 6 * s, background: 'rgba(255,255,255,0.1)', borderRadius: 2 * s }}>
                    <div style={{ width: '90%', height: '100%', background: 'linear-gradient(90deg, #0ea5e9, #38bdf8)', borderRadius: 2 * s }} />
                </div>
                <div style={{ width: 20 * s, fontSize: 8 * s, color: '#fff' }}>4+</div>
            </div>
            {/* Competitor Bar */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 * s }}>
                <div style={{ width: 40 * s, fontSize: 8 * s, color: '#aaa', textAlign: 'right' }}>OTHER</div>
                <div style={{ flex: 1, height: 6 * s, background: 'rgba(255,255,255,0.1)', borderRadius: 2 * s }}>
                    <div style={{ width: '55%', height: '100%', background: '#444', borderRadius: 2 * s }} />
                </div>
                <div style={{ width: 20 * s, fontSize: 8 * s, color: '#666' }}>2.5</div>
            </div>
        </div>
    )
}

// --- MAIN COMPONENT ---

export default function WrapGrapheneV2({ scale = 1, surfBack = { time: 3200, bg: 'wave' }, surfLeft, surfFront, surfRight }) {
    const px = (i) => Math.round(i * 96 * scale)
    const W = px(BOX.total), H = px(BOX.height)
    const backW = px(BOX.face), side1W = px(BOX.side)
    const frontW = px(BOX.face), side2W = px(BOX.side), tabW = px(TAB_W)
    const DIVIDER = '1px solid rgba(255,255,255,0.1)'
    const SUBTLE_BORDER = '1px solid rgba(255,255,255,0.05)'

    const fs = scale

    return (
        <div style={{ width: W, height: H, display: 'flex', backgroundColor: '#050505', overflow: 'hidden', flexShrink: 0, userSelect: 'none' }}>

            {/* --- BACK FACE: THE SPEC SHEET (Bento Grid) --- */}
            <div style={{ width: backW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER }}>
                <SurfaceBg surf={surfBack} />

                {/* Header Area */}
                <div style={{ position: 'relative', zIndex: 3, padding: 24 * fs, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 * fs, borderBottom: SUBTLE_BORDER, paddingBottom: 15 * fs }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs }}>
                            <Activity size={16 * fs} color="#0ea5e9" />
                            <span style={{ fontSize: 12 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.1em', color: '#fff' }}>PERFORMANCE DATA</span>
                        </div>
                        <div style={{ fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", color: '#666' }}>REF: G2-SPEC</div>
                    </div>

                    {/* Bento Grid */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: 'auto auto', gap: 15 * fs, flex: 1 }}>

                        {/* Large graph module spanning full width */}
                        <div style={{ gridColumn: 'span 2', background: 'rgba(0,0,0,0.4)', border: SUBTLE_BORDER, padding: 15 * fs, borderRadius: 8 * fs, display: 'flex', alignItems: 'center' }}>
                            <BarGraph scale={scale} />
                        </div>

                        {/* Stat Modules */}
                        <div style={{ background: 'rgba(0,0,0,0.4)', border: SUBTLE_BORDER, padding: 15 * fs, borderRadius: 8 * fs }}>
                            <StatModule label="HARDNESS" value="9H+" sub="ISO CERTIFIED" scale={scale} icon={Shield} />
                        </div>
                        <div style={{ background: 'rgba(0,0,0,0.4)', border: SUBTLE_BORDER, padding: 15 * fs, borderRadius: 8 * fs }}>
                            <StatModule label="H2O ANGLE" value="115°" sub="SUPERHYDROPHOBIC" scale={scale} icon={Droplets} />
                        </div>
                        <div style={{ background: 'rgba(0,0,0,0.4)', border: SUBTLE_BORDER, padding: 15 * fs, borderRadius: 8 * fs }}>
                            <StatModule label="LAYER" value="3-4µm" sub="THICKNESS" scale={scale} icon={Layers} />
                        </div>
                        <div style={{ background: 'rgba(0,0,0,0.4)', border: SUBTLE_BORDER, padding: 15 * fs, borderRadius: 8 * fs }}>
                            <StatModule label="RESIST" value="700°C" sub="THERMAL SHIELD" scale={scale} icon={Zap} />
                        </div>
                    </div>

                    <div style={{ marginTop: 20 * fs, fontSize: 8 * fs, color: '#555', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
                        *Comparative data based on standard gloss unit retention tests over 24 months. Ceraphene proprietary matrix reduces surface porosity by 40% vs traditional SiO2.
                    </div>
                </div>
            </div>

            {/* --- LEFT SPINE: BARCODE / ID --- */}
            <div style={{ width: side1W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <SurfaceBg surf={surfLeft || surfBack} />
                <div style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 * fs }}>
                    <div style={{ flex: 1, writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 10 * fs }}>
                        <span style={{ fontSize: 28 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif", color: 'white', letterSpacing: '0.05em' }}>MONOATOM</span>
                        <span style={{ width: 1, height: 40 * fs, background: '#444' }} />
                        <span style={{ fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", color: '#0ea5e9', letterSpacing: '0.2em' }}>LABORATORIES</span>
                    </div>

                    <div style={{ marginTop: 20 * fs, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 * fs }}>
                        {/* Mock Barcode */}
                        <div style={{ display: 'flex', gap: 2 * fs, height: 30 * fs }}>
                            {[...Array(12)].map((_, i) => <div key={i} style={{ width: Math.random() > 0.5 ? 2 * fs : 1 * fs, background: '#fff', opacity: 0.8 }} />)}
                        </div>
                        <span style={{ fontSize: 6 * fs, color: '#666', fontFamily: 'monospace' }}>890-MX-22</span>
                    </div>
                </div>
            </div>

            {/* --- FRONT FACE: THE MONOLITH --- */}
            <div style={{ width: frontW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER, display: 'flex', flexDirection: 'column' }}>
                <SurfaceBg surf={surfFront || surfBack} />

                {/* Tech decorative corners */}
                <div style={{ position: 'absolute', top: 20 * fs, left: 20 * fs, width: 20 * fs, height: 20 * fs, borderTop: '2px solid #0ea5e9', borderLeft: '2px solid #0ea5e9', zIndex: 3 }} />
                <div style={{ position: 'absolute', bottom: 20 * fs, right: 20 * fs, width: 20 * fs, height: 20 * fs, borderBottom: '2px solid #0ea5e9', borderRight: '2px solid #0ea5e9', zIndex: 3 }} />

                <div style={{ position: 'relative', zIndex: 3, flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

                    {/* Top Version Number */}
                    <div style={{ width: '100%', padding: 24 * fs, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <span style={{ fontSize: 10 * fs, color: '#666', fontFamily: "'Inter', sans-serif" }}>SERIES.02</span>
                        <Logo size={16 * fs} theme="dark" />
                    </div>

                    {/* Main Title Area */}
                    <div style={{ marginTop: 10 * fs, marginBottom: 20 * fs }}>
                        <h1 style={{
                            fontSize: 54 * fs, fontWeight: 900, fontFamily: "'Rajdhani', sans-serif",
                            color: 'white', lineHeight: 0.8, letterSpacing: '-0.02em',
                            textShadow: '0 0 20px rgba(0,0,0,0.8)'
                        }}>
                            GRAPHENE
                        </h1>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 * fs, marginTop: 10 * fs }}>
                            <div style={{ height: 1, width: 30 * fs, background: '#0ea5e9' }} />
                            <span style={{ fontSize: 12 * fs, color: '#0ea5e9', fontWeight: 700, letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>CERAMIC COATING</span>
                            <div style={{ height: 1, width: 30 * fs, background: '#0ea5e9' }} />
                        </div>
                    </div>

                    {/* Central Reactor Visual */}
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 * fs }}>
                        <ReactorCore scale={scale} />
                    </div>

                    {/* Footer Tech Specs */}
                    <div style={{ width: '100%', padding: '0 30px', marginBottom: 30 * fs }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: SUBTLE_BORDER, paddingTop: 15 * fs }}>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontSize: 8 * fs, color: '#666' }}>BOND TYPE</div>
                                <div style={{ fontSize: 10 * fs, color: '#fff', fontWeight: 600 }}>NANO-PLATELET</div>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: 8 * fs, color: '#666' }}>PROTECTION</div>
                                <div style={{ fontSize: 10 * fs, color: '#fff', fontWeight: 600 }}>IND. GRADE</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* --- RIGHT SPINE: PRODUCT ID --- */}
            <div style={{ width: side2W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SurfaceBg surf={surfRight || surfBack} />
                <div style={{ position: 'relative', zIndex: 3, writingMode: 'vertical-rl', display: 'flex', alignItems: 'center', gap: 15 * fs }}>
                    <span style={{ fontSize: 32 * fs, fontWeight: 800, color: 'rgba(255,255,255,0.1)', fontFamily: "'Rajdhani', sans-serif" }}>02</span>
                    <span style={{ fontSize: 14 * fs, fontWeight: 700, color: '#fff', letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>CERAPHENE</span>
                </div>
            </div>

            {/* --- GLUE TAB --- */}
            <div style={{ width: tabW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', backgroundColor: '#0a0a0a' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#333', fontSize: 8 * fs, writingMode: 'vertical-lr', textTransform: 'uppercase' }}>Adhesive</span>
                </div>
            </div>

        </div>
    )
}
