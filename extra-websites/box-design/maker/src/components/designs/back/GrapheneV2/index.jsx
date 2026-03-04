import React from 'react'
import { Activity, Shield, Zap, Layers, Droplets } from 'lucide-react'
import SurfaceBg from '../../../studio/SurfaceBg'
// --- SUB-COMPONENTS (Duplicated for standalone capability) ---

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

export default function BackGrapheneV2({ scale = 1, surf }) {
    const w = Math.round(1494 * scale)
    const h = Math.round(638 * scale)
    const fs = scale
    const SUBTLE_BORDER = '1px solid rgba(255,255,255,0.1)'

    return (
        <div style={{ width: w, height: h, display: 'flex', backgroundColor: '#050505', overflow: 'hidden', flexShrink: 0, userSelect: 'none', position: 'relative' }}>
            <SurfaceBg surf={surf} />

            <div style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', padding: 60 * fs }}>

                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 40 * fs, borderBottom: SUBTLE_BORDER, paddingBottom: 20 * fs }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 * fs }}>
                        <Activity size={24 * fs} color="#0ea5e9" />
                        <span style={{ fontSize: 18 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.1em', color: '#fff' }}>PERFORMANCE MANIFEST</span>
                    </div>
                    <div style={{ fontSize: 14 * fs, fontFamily: "'Inter', sans-serif", color: '#666' }}>REF: G2-SPEC-FULL</div>
                </div>

                {/* Expanded Bento Grid for Full Back Panel */}
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 2fr) 1fr 1fr', gridTemplateRows: 'auto 1fr', gap: 20 * fs, flex: 1 }}>

                    {/* Graph Module */}
                    <div style={{ gridColumn: '1', gridRow: 'span 2', background: 'rgba(0,0,0,0.4)', border: SUBTLE_BORDER, padding: 30 * fs, borderRadius: 12 * fs, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <BarGraph scale={scale * 1.5} />
                        <div style={{ marginTop: 30 * fs, fontSize: 12 * fs, color: '#888', fontFamily: "'Inter', sans-serif" }}>
                            Advanced nano-platelet bonding creates a permanent shield that outperforms traditional SiO2 coatings in longevity and hardness.
                        </div>
                    </div>

                    {/* Stat Modules */}
                    <div style={{ background: 'rgba(0,0,0,0.4)', border: SUBTLE_BORDER, padding: 25 * fs, borderRadius: 12 * fs }}>
                        <StatModule label="HARDNESS" value="9H+" sub="ISO CERTIFIED" scale={scale * 1.5} icon={Shield} />
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.4)', border: SUBTLE_BORDER, padding: 25 * fs, borderRadius: 12 * fs }}>
                        <StatModule label="H2O ANGLE" value="115°" sub="SUPERHYDROPHOBIC" scale={scale * 1.5} icon={Droplets} />
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.4)', border: SUBTLE_BORDER, padding: 25 * fs, borderRadius: 12 * fs }}>
                        <StatModule label="LAYER" value="3-4µm" sub="THICKNESS" scale={scale * 1.5} icon={Layers} />
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.4)', border: SUBTLE_BORDER, padding: 25 * fs, borderRadius: 12 * fs }}>
                        <StatModule label="RESIST" value="700°C" sub="THERMAL SHIELD" scale={scale * 1.5} icon={Zap} />
                    </div>
                </div>

            </div>
        </div>
    )
}
