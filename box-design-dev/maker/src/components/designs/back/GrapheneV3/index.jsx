import React from 'react'
import { Shield, Hexagon, Droplets, Thermometer, Clock } from 'lucide-react'
import SurfaceBg from '../../../studio/SurfaceBg'

// Reusing Protocol content from Wrap for consistency
export default function BackGrapheneV3({ scale = 1, surf }) {
    const w = Math.round(1494 * scale)
    const h = Math.round(638 * scale)
    const fs = scale
    const DIVIDER = '1px solid rgba(255,255,255,0.15)'

    // Styles
    const labelStyle = { fontSize: 9 * fs, fontFamily: "'Inter', sans-serif", letterSpacing: '0.05em', color: '#888', textTransform: 'uppercase' }
    const valueStyle = { fontSize: 12 * fs, fontFamily: "'Inter', sans-serif", fontWeight: 600, color: '#fff', letterSpacing: '0.02em' }

    return (
        <div style={{ width: w, height: h, display: 'flex', backgroundColor: '#050505', overflow: 'hidden', flexShrink: 0, userSelect: 'none', position: 'relative' }}>
            <SurfaceBg surf={surf} />
            <div style={{ position: 'absolute', inset: 0, background: '#080808', zIndex: 1 }} />

            <div style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%', display: 'flex', padding: 40 * fs }}>

                {/* Left Column: Icons & Specs */}
                <div style={{ width: '30%', borderRight: DIVIDER, paddingRight: 30 * fs, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: 24 * fs, color: '#fff', fontWeight: 700, fontFamily: "'Inter', sans-serif", marginBottom: 30 * fs }}>
                        TECHNICAL DATA
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 25 * fs }}>
                        <div>
                            <div style={labelStyle}>HARDNESS RATIO</div>
                            <div style={valueStyle}>9H+ CERTIFIED</div>
                        </div>
                        <div>
                            <div style={labelStyle}>CONTACT ANGLE</div>
                            <div style={valueStyle}>115° HYDROPHOBIC</div>
                        </div>
                        <div>
                            <div style={labelStyle}>DURABILITY</div>
                            <div style={valueStyle}>48 MONTHS+</div>
                        </div>
                    </div>

                    <div style={{ marginTop: 40 * fs, display: 'flex', gap: 15 * fs, opacity: 0.5 }}>
                        <Shield size={20 * fs} color="#fff" />
                        <Hexagon size={20 * fs} color="#fff" />
                        <Droplets size={20 * fs} color="#fff" />
                    </div>
                </div>

                {/* Right Column: Detailed Protocol */}
                <div style={{ flex: 1, paddingLeft: 40 * fs, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{ fontSize: 14 * fs, color: '#0ea5e9', fontWeight: 600, fontFamily: 'monospace', marginBottom: 30 * fs }}>
                        STANDARD OPERATING PROCEDURE (SOP)
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 30 * fs }}>
                        {[
                            { step: '01', title: 'SURFACE PREP', text: 'Thoroughly wash and decontaminate vehicle. Polish paint to remove swirls. Use Isopropyl Alcohol (IPA) wipe.' },
                            { step: '02', title: 'ACTIVATION', text: 'Shake bottle well. Apply 3 lines of product onto the provided applicator sponge.' },
                            { step: '03', title: 'APPLICATION', text: 'Work in 2x2 ft section. Cross-hatch pattern (Vertical then Horizontal). Ensure even coverage.' },
                            { step: '04', title: 'LEVELING', text: 'Wait 1-2 minutes for flash (rainbow haze). Wipe off residue with microfiber towel immediately.' },
                            { step: '05', title: 'INSPECTION', text: 'Check for high spots using a dedicated inspection light. Correct immediately if found.' },
                            { step: '06', title: 'CURING', text: 'Keep vehicle dry for 24 hours. Avoid washing with chemicals for 7 days.' },
                        ].map((s, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 15 * fs }}>
                                <div style={{ fontSize: 14 * fs, color: '#444', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>{s.step}</div>
                                <div>
                                    <div style={{ fontSize: 12 * fs, color: 'white', fontWeight: 600, fontFamily: "'Inter', sans-serif", marginBottom: 6 * fs }}>{s.title}</div>
                                    <div style={{ fontSize: 10 * fs, color: '#999', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>{s.text}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}
