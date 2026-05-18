import React from 'react'
import { Shield, ShieldAlert, Crosshair, AlertTriangle, Construction } from 'lucide-react'
import SurfaceBg from '../../../studio/SurfaceBg'
import Logo from '../../../brand/Logo'

const BOX = { face: 5.2, side: 2.13, total: 15.567, height: 6.65 }
const TAB_W = BOX.total - 2 * BOX.face - 2 * BOX.side

const CautionStripe = ({ width, height, scale }) => (
    <div style={{ width, height, background: `repeating-linear-gradient(45deg, #eab308, #eab308 ${10 * scale}px, #000 ${10 * scale}px, #000 ${20 * scale}px)`, borderBottom: '2px solid #000' }} />
)

const Bolt = ({ size }) => (
    <div style={{ width: size, height: size, borderRadius: '50%', background: '#444', border: '1px solid #222', boxShadow: 'inset 1px 1px 2px rgba(255,255,255,0.2), 1px 1px 2px rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ width: '60%', height: '15%', background: '#222' }} />
    </div>
)

export default function WrapGrapheneV4({ scale = 1, surfBack = { bg: 'dark' }, surfLeft, surfFront, surfRight }) {
    const px = (i) => Math.round(i * 96 * scale)
    const W = px(BOX.total), H = px(BOX.height)
    const backW = px(BOX.face), side1W = px(BOX.side)
    const frontW = px(BOX.face), side2W = px(BOX.side), tabW = px(TAB_W)
    const DIVIDER = '2px solid #111'

    const fs = scale

    // Tactical Styles
    const stencilFont = "'Black Ops One', 'Impact', sans-serif"
    const techFont = "'Rajdhani', sans-serif"
    const monoFont = "'Courier New', monospace"

    return (
        <div style={{ width: W, height: H, display: 'flex', backgroundColor: '#1a1a1a', color: '#e5e5e5', overflow: 'hidden', flexShrink: 0, userSelect: 'none' }}>

            {/* --- BACK FACE: MISSION SPECS --- */}
            <div style={{ width: backW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER }}>
                <SurfaceBg surf={surfBack} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,20,20,0.95)', zIndex: 1 }} />

                {/* Bolt Corners */}
                <div style={{ position: 'absolute', top: 10 * fs, left: 10 * fs, zIndex: 4 }}><Bolt size={12 * fs} /></div>
                <div style={{ position: 'absolute', top: 10 * fs, right: 10 * fs, zIndex: 4 }}><Bolt size={12 * fs} /></div>
                <div style={{ position: 'absolute', bottom: 10 * fs, left: 10 * fs, zIndex: 4 }}><Bolt size={12 * fs} /></div>
                <div style={{ position: 'absolute', bottom: 10 * fs, right: 10 * fs, zIndex: 4 }}><Bolt size={12 * fs} /></div>

                <div style={{ position: 'relative', zIndex: 3, padding: 30 * fs, height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <CautionStripe width="100%" height={15 * fs} scale={scale} />

                    <div style={{ marginTop: 20 * fs, marginBottom: 20 * fs, borderBottom: '2px solid #444', paddingBottom: 10 * fs, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <h3 style={{ margin: 0, fontSize: 18 * fs, fontFamily: stencilFont, color: '#eab308', letterSpacing: '0.05em' }}>MISSION SPECS</h3>
                        <div style={{ fontSize: 10 * fs, fontFamily: monoFont, color: '#666' }}>REF: TACT-04</div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15 * fs }}>
                        {[
                            { label: 'HARDNESS', val: '9H CLS', status: 'optimal' },
                            { label: 'DURABILITY', val: '48 MO.', status: 'optimal' },
                            { label: 'HEAT RESIST', val: '700°C', status: 'optimal' },
                            { label: 'CONTACT', val: '115 DEG', status: 'optimal' },
                        ].map((item, i) => (
                            <div key={i} style={{ background: '#111', border: '1px solid #333', padding: 10 * fs, display: 'flex', flexDirection: 'column', gap: 5 * fs }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: 8 * fs, color: '#666', fontFamily: techFont, fontWeight: 700 }}>{item.label}</span>
                                    <div style={{ width: 6 * fs, height: 6 * fs, borderRadius: '50%', background: item.status === 'optimal' ? '#22c55e' : '#eab308' }} />
                                </div>
                                <div style={{ fontSize: 14 * fs, color: '#fff', fontFamily: techFont, fontWeight: 700 }}>{item.val}</div>
                            </div>
                        ))}
                    </div>

                    <div style={{ marginTop: 'auto', background: '#222', padding: 10 * fs, border: '1px dashed #444', display: 'flex', alignItems: 'center', gap: 10 * fs }}>
                        <AlertTriangle size={16 * fs} color="#eab308" />
                        <div style={{ fontSize: 8 * fs, color: '#aaa', fontFamily: monoFont }}>
                            WARNING: CONTENTS UNDER PRESSURE. FLAMMABLE LIQUID. HANDLE WITH EXTREME CAUTION.
                        </div>
                    </div>
                </div>
            </div>

            {/* --- LEFT SPINE: HAZARD --- */}
            <div style={{ width: side1W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <SurfaceBg surf={surfLeft || surfBack} />
                <div style={{ position: 'absolute', inset: 0, background: '#111', zIndex: 1 }} />

                <div style={{ position: 'relative', zIndex: 3, height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 20 * fs, justifyContent: 'space-between' }}>
                    <CautionStripe width="100%" height={10 * fs} scale={scale} />

                    <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 10 * fs }}>
                        <span style={{ color: '#eab308', fontSize: 14 * fs, fontFamily: stencilFont, letterSpacing: '0.1em' }}>HEAVY DUTY</span>
                        <span style={{ fontSize: 10 * fs, color: '#444', fontFamily: monoFont }}>CLASS 9</span>
                    </div>

                    <CautionStripe width="100%" height={10 * fs} scale={scale} />
                </div>
            </div>

            {/* --- FRONT FACE: THE ARMOR PLATE --- */}
            <div style={{ width: frontW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER, display: 'flex', flexDirection: 'column' }}>
                <SurfaceBg surf={surfFront || surfBack} />
                <div style={{ position: 'absolute', inset: 0, background: '#1a1a1a', zIndex: 1 }} />

                {/* Plate seams */}
                <div style={{ position: 'absolute', inset: 20 * fs, border: '2px solid #333', zIndex: 2, background: 'linear-gradient(135deg, #222, #181818)' }} />

                {/* Bolts */}
                <div style={{ position: 'absolute', top: 30 * fs, left: 30 * fs, zIndex: 4 }}><Bolt size={14 * fs} /></div>
                <div style={{ position: 'absolute', top: 30 * fs, right: 30 * fs, zIndex: 4 }}><Bolt size={14 * fs} /></div>
                <div style={{ position: 'absolute', bottom: 30 * fs, left: 30 * fs, zIndex: 4 }}><Bolt size={14 * fs} /></div>
                <div style={{ position: 'absolute', bottom: 30 * fs, right: 30 * fs, zIndex: 4 }}><Bolt size={14 * fs} /></div>

                <div style={{ position: 'relative', zIndex: 3, flex: 1, padding: 40 * fs, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>

                    <CautionStripe width="60%" height={10 * fs} scale={scale} />

                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Logo size={24 * fs} theme="dark" />

                        <h1 style={{
                            fontSize: 42 * fs, fontFamily: stencilFont,
                            color: '#e5e5e5', letterSpacing: '0.05em',
                            marginTop: 20 * fs, marginBottom: 5 * fs,
                            textShadow: '2px 2px 0px #000'
                        }}>
                            CERAPHENE
                        </h1>

                        <div style={{ background: '#eab308', color: '#000', padding: '4px 12px', fontSize: 12 * fs, fontWeight: 800, fontFamily: techFont, letterSpacing: '0.1em', transform: 'skew(-10deg)' }}>
                            TACTICAL COATING
                        </div>

                        <div style={{ marginTop: 30 * fs, display: 'flex', gap: 20 * fs }}>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 * fs }}>
                                <ShieldAlert size={20 * fs} color="#666" />
                                <span style={{ fontSize: 8 * fs, color: '#666', fontFamily: techFont, fontWeight: 700 }}>IMPACT</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 * fs }}>
                                <AlertTriangle size={20 * fs} color="#666" />
                                <span style={{ fontSize: 8 * fs, color: '#666', fontFamily: techFont, fontWeight: 700 }}>CHEM</span>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 5 * fs }}>
                                <Shield size={20 * fs} color="#666" />
                                <span style={{ fontSize: 8 * fs, color: '#666', fontFamily: techFont, fontWeight: 700 }}>UV</span>
                            </div>
                        </div>
                    </div>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid #444', paddingTop: 10 * fs }}>
                        <span style={{ fontSize: 10 * fs, color: '#888', fontFamily: monoFont }}>NET WT. 50ML</span>
                        <span style={{ fontSize: 10 * fs, color: '#eab308', fontFamily: monoFont, fontWeight: 700 }}>UN 1993</span>
                    </div>

                </div>
            </div>

            {/* --- RIGHT SPINE: ID --- */}
            <div style={{ width: side2W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIVIDER, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <SurfaceBg surf={surfRight || surfBack} />
                <div style={{ position: 'absolute', inset: 0, background: '#111', zIndex: 1 }} />

                <div style={{ position: 'relative', zIndex: 3, writingMode: 'vertical-rl', display: 'flex', alignItems: 'center', gap: 15 * fs }}>
                    <span style={{ fontSize: 16 * fs, fontWeight: 700, color: '#333', fontFamily: stencilFont }}>GPH-V4</span>
                    <span style={{ width: 1, height: 40 * fs, background: '#333' }} />
                    <span style={{ fontSize: 10 * fs, color: '#eab308', fontFamily: monoFont }}>SERNO: 849201</span>
                </div>
            </div>

            {/* --- GLUE TAB --- */}
            <div style={{ width: tabW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', backgroundColor: '#000' }}>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#333', fontSize: 8 * fs, writingMode: 'vertical-lr', textTransform: 'uppercase' }}>Adhesive</span>
                </div>
            </div>

        </div>
    )
}
