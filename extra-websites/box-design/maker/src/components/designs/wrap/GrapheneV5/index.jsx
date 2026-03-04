import React from 'react'
import Logo from '../../../brand/Logo'
import WrapBase from '../../base/wrap'
import { Layers } from 'lucide-react'

const C = '#64748B'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }
const DIVIDER = '1px solid rgba(255,255,255,0.06)'

const LAYERS = [
    { name: 'CERAPHENE', thick: '3–4 μm', role: 'Graphene-Ceramic Shield', highlight: true },
    { name: 'CLEARCOAT', thick: '50–70 μm', role: 'Factory Clear Lacquer' },
    { name: 'BASE COAT', thick: '15–25 μm', role: 'Colour & Pigment' },
    { name: 'PRIMER', thick: '15–25 μm', role: 'Corrosion Barrier' },
    { name: 'STEEL BODY', thick: 'substrate', role: 'Body Panel' },
]

const SPECS = [
    { l: 'Layer Thickness', v: '3–4 Microns' },
    { l: 'Cure Time', v: '24 Hours' },
    { l: 'Durability', v: '4+ Years' },
    { l: 'Hardness', v: '9H+' },
    { l: 'Application', v: 'Single Coat' },
]

export default function WrapPanel({ scale = 1, surfBack = DEFAULT_SURF, surfLeft = DEFAULT_SURF, surfFront = DEFAULT_SURF, surfRight = DEFAULT_SURF }) {
    const px = (i) => Math.round(i * 96 * scale)
    const H = px(6.65)
    const fs = scale

    return (
        <WrapBase scale={scale} surfBack={surfBack} surfLeft={surfLeft} surfFront={surfFront} surfRight={surfRight}

            backContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', zIndex: 3 }}>
                    <div style={{ padding: `${20 * fs}px ${24 * fs}px`, borderBottom: DIVIDER, display: 'flex', alignItems: 'center', gap: 10 * fs }}>
                        <Logo size={Math.round(24 * fs)} theme="dark" />
                        <div style={{ color: '#333', fontSize: 8 * fs, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.2em' }}>APPLICATION SPECS</div>
                    </div>
                    <div style={{ flex: 1, padding: 24 * fs, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 14 * fs }}>
                        <div style={{ color: C, fontSize: 9 * fs, textTransform: 'uppercase', letterSpacing: '0.2em', marginBottom: 4 * fs, fontFamily: "'Rajdhani', sans-serif" }}>Technical Specifications</div>
                        {SPECS.map((s, i) => (
                            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderBottom: '1px solid rgba(255,255,255,0.04)', paddingBottom: 6 * fs }}>
                                <span style={{ color: '#555', fontSize: 9 * fs, fontFamily: "'Inter', sans-serif" }}>{s.l}</span>
                                <span style={{ color: '#ccc', fontSize: 11 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif" }}>{s.v}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </>}

            leftContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <div style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 14 * fs }}>
                        <Layers size={20 * fs} color={C} style={{ transform: 'rotate(90deg)' }} />
                        <span style={{ color: '#ccc', fontSize: 16 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>LAYER TECH</span>
                        <span style={{ color: '#333', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif" }}>3–4 MICRONS</span>
                    </div>
                </div>
            </>}

            frontContent={<>
                {/* Layer stack diagram — left edge */}
                <div style={{ position: 'absolute', left: 0, top: '12%', bottom: '12%', width: Math.round(54 * fs), display: 'flex', flexDirection: 'column', zIndex: 3 }}>
                    {LAYERS.map((l, i) => (
                        <div key={i} style={{ flex: 1, display: 'flex', alignItems: 'center', background: l.highlight ? `rgba(100,116,139,0.2)` : `rgba(255,255,255,${0.01 + i * 0.005})`, borderTop: '1px solid rgba(255,255,255,0.04)', borderLeft: l.highlight ? `3px solid ${C}` : '3px solid transparent' }}>
                            <div style={{ color: l.highlight ? C : '#2a2a2a', fontSize: 6 * fs, fontFamily: "'Rajdhani', sans-serif", writingMode: 'vertical-lr', transform: 'rotate(180deg)', paddingLeft: 4 * fs, letterSpacing: '0.08em' }}>{l.name}</div>
                        </div>
                    ))}
                </div>

                {/* Main title */}
                <div style={{ position: 'absolute', top: '22%', left: '14%', right: '5%', textAlign: 'center', zIndex: 3 }}>
                    <div style={{ color: '#333', fontSize: 12 * fs, fontWeight: 800, letterSpacing: '0.6em', fontFamily: "'Rajdhani', sans-serif", marginBottom: -4 * fs }}>THE FUTURE OF</div>
                    <div style={{ color: 'white', fontSize: 58 * fs, fontWeight: 900, letterSpacing: '0.02em', lineHeight: 0.9, fontFamily: "'Rajdhani', sans-serif" }}>CERAPHENE</div>
                    <div style={{ width: 70 * fs, height: 2, background: C, margin: `${14 * fs}px auto` }} />
                    <div style={{ color: '#666', fontSize: 11 * fs, fontFamily: "'Inter', sans-serif", lineHeight: 1.5 }}>
                        Graphene-Ceramic Coating.<br />
                        <span style={{ color: '#888' }}>Bonded at the molecular level.</span>
                    </div>
                </div>

                {/* Bottom: layer count */}
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '18%', background: 'rgba(8,8,8,0.9)', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-around', zIndex: 3 }}>
                    {[{ n: '5', l: 'Protection Layers' }, { n: '3-4μm', l: 'Coat Thickness' }, { n: '9H+', l: 'Surface Hardness' }, { n: '4Yrs', l: 'Durability' }].map((s, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ color: 'white', fontSize: 14 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif" }}>{s.n}</div>
                            <div style={{ color: '#444', fontSize: 7 * fs, fontFamily: "'Inter', sans-serif", textTransform: 'uppercase' }}>{s.l}</div>
                        </div>
                    ))}
                </div>
            </>}

            rightContent={<>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 3 }}>
                    <div style={{ writingMode: 'vertical-rl', display: 'flex', alignItems: 'center', gap: 14 * fs }}>
                        <span style={{ color: '#333', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif" }}>MONOATOM LABS</span>
                        <span style={{ color: '#aaa', fontSize: 16 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>MOLECULAR GRADE</span>
                    </div>
                </div>
            </>}
        />
    )
}
