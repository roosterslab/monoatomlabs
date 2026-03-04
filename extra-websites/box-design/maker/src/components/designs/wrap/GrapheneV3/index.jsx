import React from 'react'
import { Shield, Hexagon, Droplets, FlaskConical } from 'lucide-react'
import SurfaceBg from '../../../studio/SurfaceBg'
import Logo from '../../../brand/Logo'

const BOX = { face: 5.2, side: 2.13, total: 15.567, height: 6.65 }
const TAB_W = BOX.total - 2 * BOX.face - 2 * BOX.side

export default function WrapGrapheneV3({ scale = 1, surfBack = { time: 3200, bg: 'wave' }, surfLeft, surfFront, surfRight }) {
    const px = (i) => Math.round(i * 96 * scale)
    const W = px(BOX.total), H = px(BOX.height)
    const backW = px(BOX.face), side1W = px(BOX.side)
    const frontW = px(BOX.face), side2W = px(BOX.side), tabW = px(TAB_W)
    const DIVIDER = '1px solid rgba(255,255,255,0.15)'

    const fs = scale

    // Minimalist "Lab Label" style styles
    const labelStyle = { fontSize: 8 * fs, fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em', color: '#888', textTransform: 'uppercase' }
    const valueStyle = { fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#fff', letterSpacing: '0.02em' }
    const titleStyle = { fontSize: 32 * fs, fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: '-0.03em', color: 'white' }

    return (
        <div style={{ width: W, height: H, display: 'flex', backgroundColor: '#050505', overflow: 'hidden', flexShrink: 0, userSelect: 'none' }}>

            {/* --- BACK FACE: THE PROTOCOL --- */}
            <div style={{ width: backW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER }}>
                <SurfaceBg surf={surfBack} />
                {/* Dark overlay for contrast */}
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1 }} />

                <div style={{ position: 'relative', zIndex: 3, padding: 30 * fs, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ borderBottom: '1px solid white', paddingBottom: 15 * fs, marginBottom: 20 * fs }}>
                        <h3 style={{ margin: 0, color: 'white', fontSize: 14 * fs, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>APPLICATION PROTOCOL</h3>
                    </div>

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 15 * fs }}>
                        {[
                            { step: '01', title: 'PREP SURFACE', text: 'Wash, decontaminate, and polish paint to remove all defects.' },
                            { step: '02', title: 'APPLY COATING', text: 'Apply in thin, cross-hatch layers using provided sponge.' },
                            { step: '03', title: 'BUFF OFF', text: 'Wait 1-2 mins until rainbow haze appears, then buff clear.' },
                            { step: '04', title: 'CURE TIME', text: 'Keep dry for 24 hours. Full hardness in 7 days.' },
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', gap: 15 * fs }}>
                                <div style={{ fontSize: 12 * fs, color: '#0ea5e9', fontWeight: 700, fontFamily: 'monospace' }}>{s.step}</div>
                                <div>
                                    <div style={{ fontSize: 10 * fs, color: 'white', fontWeight: 600, fontFamily: "'Inter', sans-serif", marginBottom: 4 * fs }}>{s.title}</div>
                                    <div style={{ fontSize: 9 * fs, color: '#999', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>{s.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 'auto', paddingTop: 20 * fs, borderTop: DIVIDER, display: 'flex', justifyContent: 'space-between' }}>
                        <div>
                            <div style={labelStyle}>TEMP RANGE</div>
                            <div style={valueStyle}>15°C - 25°C</div>
                        </div>
                        <div>
                            <div style={labelStyle}>HUMIDITY</div>
                            <div style={valueStyle}>&lt; 70% RH</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- LEFT SPINE: WARNINGS --- */}
            <div style={{ width: side1W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <SurfaceBg surf={surfLeft || surfBack} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1 }} />

                <div style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 * fs, justifyContent: 'space-between' }}>
                    <FlaskConical size={20 * fs} color="#fff" />
                    <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', color: 'white', fontSize: 10 * fs, fontWeight: 600, letterSpacing: '0.1em', fontFamily: "'Inter', sans-serif" }}>
                        PROFESSIONAL USE ONLY
                    </div>
                    <div style={{ width: 1, height: 40 * fs, background: 'rgba(255,255,255,0.3)' }} />
                </div>
            </div>

            {/* --- FRONT FACE: THE LAB SAMPLE --- */}
            <div style={{ width: frontW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER, display: 'flex', flexDirection: 'column' }}>
                <SurfaceBg surf={surfFront || surfBack} />
                {/* Heavy dark overlay for matte black look */}
                <div style={{ position: 'absolute', inset: 0, background: '#080808', zIndex: 1 }} />

                <div style={{ position: 'relative', zIndex: 3, flex: 1, padding: 35 * fs, display: 'flex', flexDirection: 'column' }}>

                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 40 * fs }}>
                        <Logo size={12 * fs} theme="dark" />
                        <div style={{ fontSize: 9 * fs, color: '#666', fontFamily: 'monospace' }}>REF: GPH-002</div>
                    </div>

                    {/* Main Content */}
                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1 style={titleStyle}>CERAPHENE</h1>
                        <div style={{ fontSize: 11 * fs, color: '#0ea5e9', fontWeight: 500, letterSpacing: '0.1em', marginTop: 10 * fs, marginBottom: 30 * fs, fontFamily: "'Inter', sans-serif" }}>
                            GRAPHENE CERAMIC MATRIX
                        </div>

                        {/* Minimalist Divider */}
                        <div style={{ width: '40px', height: '2px', background: 'white', marginBottom: 30 * fs }} />

                        {/* Key Specs */}
                        <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', gap: 20 * fs }}>
                            <div>
                                <div style={labelStyle}>VOLUME</div>
                                <div style={valueStyle}>50ML / 1.7 FL.OZ</div>
                            </div>
                            <div>
                                <div style={labelStyle}>TYPE</div>
                                <div style={valueStyle}>NANO-COATING</div>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div style={{ marginTop: 'auto' }}>
                        <div style={{ display: 'flex', gap: 15 * fs }}>
                            <Shield size={14 * fs} color="#666" />
                            <Hexagon size={14 * fs} color="#666" />
                            <Droplets size={14 * fs} color="#666" />
                        </div>
                    </div>

                </div>
            </div>

            {/* --- RIGHT SPINE: SKU --- */}
            <div style={{ width: side2W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SurfaceBg surf={surfRight || surfBack} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1 }} />

                <div style={{ position: 'relative', zIndex: 3, writingMode: 'vertical-rl', display: 'flex', alignItems: 'center', gap: 15 * fs }}>
                    <span style={{ fontSize: 10 * fs, fontWeight: 700, color: 'white', letterSpacing: '0.05em', fontFamily: 'monospace' }}>BATCH 001 // SKU-GPH2</span>
                </div>
            </div>

            {/* --- GLUE TAB --- */}
            <div style={{ width: tabW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', backgroundColor: '#111' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#333', fontSize: 8 * fs, writingMode: 'vertical-lr', textTransform: 'uppercase' }}>Adhesive</span>
                </div>
            </div>

        </div>
    )
}
