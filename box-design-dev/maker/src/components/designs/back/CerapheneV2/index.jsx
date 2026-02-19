import React from 'react'
import BackBase from '../../base/back'
import {
    CloudRain, Bug, Disc, Flame, Wind, Zap, Sun, Droplets, Shield,
    CheckCircle2, AlertOctagon, Check, Ban, Info, Clock, ChevronRight, Mail,
    Thermometer, Atom, Layers, AlertTriangle, Sparkles, X, Target, Construction, ArrowDown
} from 'lucide-react'

// --- CONSTANTS ---
const BOX = {
    panel1: 5.2,  // Glue Surface
    panel2: 2.13, // Left (Narrow)
    panel3: 5.2,  // Center (Wide)
    panel4: 2.13, // Right (Narrow)
    glue: 0.907,  // Glue Tab
    total: 15.567 // Total
}

const GLUE = (BOX.glue / BOX.total) * 100
const P4 = (BOX.panel4 / BOX.total) * 100
const P3 = (BOX.panel3 / BOX.total) * 100
const P2 = (BOX.panel2 / BOX.total) * 100
const P1 = (BOX.panel1 / BOX.total) * 100

// --- HIGH VISIBILITY COLORS ---
const C = '#cbd5e1' // Slate 300 (Base Text)
const C_DIM = '#94a3b8' // Slate 400 (Secondary)
const C_BRIGHT = '#ffffff' // White (Primary)
const BLUE = '#3b82f6' // Blue 500 (Base Accent)
const BLUE_LIGHT = '#60a5fa' // Blue 400 (Bright Accent)
const BLUE_BG = 'rgba(59, 130, 246, 0.15)'

// --- DATA ---

const THREATS = [
    { icon: CloudRain, label: 'Acid Rain', angle: 0 },
    { icon: Bug, label: 'Bird Droppings', angle: 40 },
    { icon: Disc, label: 'Rock Chips', angle: 80 },
    { icon: Flame, label: 'Brake Heat', angle: 120 },
    { icon: Wind, label: 'Fallout', angle: 160 },
    { icon: Zap, label: 'Road Chemicals', angle: 200 },
    { icon: Sun, label: 'UV Radiation', angle: 240 },
    { icon: Droplets, label: 'Water Spots', angle: 280 },
    { icon: Shield, label: 'Oxidation', angle: 320 },
]

const COMPETITORS = [
    { label: 'Hardness', cera: '9H+', gt: '9H', cp: '9H', pro: '9H', win: true },
    { label: 'Contact Angle', cera: '115°', gt: '104°', cp: '108°', pro: '110°', win: true },
    { label: 'Durability', cera: '3–4+ yr', gt: '3–5 yr', cp: '2–3 yr', pro: 'Lifetime*', win: false },
    { label: 'Price (50ml)', cera: '₹5k', gt: '₹15k+', cp: '₹12k+', pro: '₹25k+', win: true },
    { label: 'Graphene?', cera: 'Yes', gt: 'No', cp: 'No', pro: 'No', win: true },
]


// --- COMPONENTS ---

const SectionLabel = ({ label, scale }) => (
    <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 9 * scale, letterSpacing: '0.1em', textTransform: 'uppercase',
        color: '#cbd5e1', marginBottom: 10 * scale, borderBottom: '1px solid rgba(255,255,255,0.2)',
        paddingBottom: 6 * scale, fontWeight: 900
    }}>
        {label}
    </div>
)

const ThreatWheel = ({ scale }) => {
    const fs = scale
    const W = 180 * fs, H = 180 * fs
    const cx = W / 2, cy = H / 2
    const outerR = Math.min(W, H) * 0.38
    const innerR = Math.min(W, H) * 0.14

    return (
        <div style={{ position: 'relative', width: W, height: H, margin: '0 0' }}>
            <svg style={{ position: 'absolute', inset: 0 }} width={W} height={H}>
                <circle cx={cx} cy={cy} r={outerR + 8 * fs} fill="none" stroke={C} strokeWidth={0.8} opacity="0.3" strokeDasharray="4 4" />
                <circle cx={cx} cy={cy} r={innerR + 3 * fs} fill="none" stroke={C} strokeWidth={0.8} opacity="0.4" />
                {THREATS.map((t, i) => {
                    const a = (t.angle - 90) * Math.PI / 180
                    const x1 = cx + (innerR + 4 * fs) * Math.cos(a), y1 = cy + (innerR + 4 * fs) * Math.sin(a)
                    const x2 = cx + (outerR - 3 * fs) * Math.cos(a), y2 = cy + (outerR - 3 * fs) * Math.sin(a)
                    return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={C} strokeWidth={0.8} opacity={0.4} strokeDasharray="2 2" />
                })}
            </svg>
            <div style={{ position: 'absolute', left: cx - innerR, top: cy - innerR, width: innerR * 2, height: innerR * 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: BLUE_BG, border: `2px solid ${BLUE}60`, borderRadius: '50%' }}>
                <Shield size={innerR * 0.8} color="white" strokeWidth={2} />
            </div>
            {THREATS.map((t, i) => {
                const Icon = t.icon
                const a = (t.angle - 90) * Math.PI / 180
                const x = cx + (outerR + 5 * fs) * Math.cos(a)
                const y = cy + (outerR + 5 * fs) * Math.sin(a)
                const isLeft = x < cx - 10 * fs
                const isRight = x > cx + 10 * fs
                return (
                    <div key={i} style={{ position: 'absolute', left: x - 40 * fs, top: y - 10 * fs, width: 80 * fs, display: 'flex', flexDirection: 'column', alignItems: isLeft ? 'flex-end' : isRight ? 'flex-start' : 'center', gap: 2 * fs, zIndex: 2 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 4 * fs, flexDirection: isLeft ? 'row-reverse' : 'row' }}>
                            <Icon size={12 * fs} color={C_BRIGHT} strokeWidth={2} />
                            <div style={{ color: '#e2e8f0', fontSize: 7.5 * fs, textAlign: isLeft ? 'right' : isRight ? 'left' : 'center', whiteSpace: 'nowrap', fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{t.label}</div>
                        </div>
                    </div>
                )
            })}
            <div style={{ position: 'absolute', bottom: -14 * fs, left: 0, right: 0, textAlign: 'center', color: '#e2e8f0', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Rajdhani', sans-serif", fontWeight: 700 }}>
                9 THREATS · ZERO DAMAGE
            </div>
        </div>
    )
}

const PricingPanel = ({ scale }) => {
    const fs = scale
    const BLUE_LIGHT = '#60a5fa' // Defined locally or passed in
    const BLUE = '#3b82f6'

    return (
        <div style={{ border: '1px solid #475569', borderRadius: 6 * fs, padding: 8 * fs, display: 'flex', gap: 10 * fs, alignItems: 'center', background: 'linear-gradient(145deg, #0f172a, #020617)' }}>

            {/* Left: Compact Headline */}
            <div style={{ flex: 1, borderRight: '1px solid #475569', paddingRight: 10 * fs }}>
                <h3 style={{ color: 'white', fontSize: 13 * fs, fontWeight: 900, fontFamily: "'Inter', sans-serif", margin: 0, lineHeight: 1 }}>
                    PREMIUM PERFORMANCE.<br /><span style={{ color: BLUE_LIGHT }}>SMARTER PRICING.</span>
                </h3>
                <div style={{ fontSize: 7.5 * fs, color: '#94a3b8', marginTop: 4 * fs, fontWeight: 500 }}>
                    Direct-to-Consumer Model. <span style={{ color: '#fff' }}>No Import Markup.</span>
                </div>
            </div>

            {/* Middle: Data Comparison */}
            <div style={{ display: 'flex', gap: 12 * fs, alignItems: 'center' }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: 7 * fs, color: '#cbd5e1', fontWeight: 700, textTransform: 'uppercase' }}>Competitors</div>
                    <div style={{ fontSize: 10 * fs, color: '#94a3b8', textDecoration: 'line-through', fontWeight: 600 }}>₹15,000+</div>
                </div>

                <ChevronRight size={12 * fs} color="#475569" />

                <div style={{ textAlign: 'center', background: 'rgba(59, 130, 246, 0.15)', padding: '4px 10px', borderRadius: 4 * fs, border: `1px solid ${BLUE}60` }}>
                    <div style={{ fontSize: 7 * fs, color: BLUE_LIGHT, fontWeight: 800, textTransform: 'uppercase' }}>Ceraphene</div>
                    <div style={{ fontSize: 12 * fs, color: '#fff', fontWeight: 900 }}>₹5,000</div>
                </div>
            </div>

            {/* Right: Savings Badge */}
            <div style={{ width: 44 * fs, height: 44 * fs, borderRadius: '50%', background: '#3b82f6', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
                <div style={{ color: 'white', fontSize: 11 * fs, fontWeight: 900, fontFamily: "'Rajdhani', sans-serif", lineHeight: 0.9 }}>60%</div>
                <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: 5 * fs, textTransform: 'uppercase', fontWeight: 800 }}>LESS</div>
            </div>
        </div>
    )
}

const FeatureFocus = ({ scale }) => {
    const fs = scale
    return (
        <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #475569', padding: 12 * fs, borderRadius: 6 * fs, marginBottom: 10 * fs }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 * fs }}>
                {[
                    { icon: Zap, label: 'Anti-Static', desc: 'Repels dust build-up.' },
                    { icon: Sparkles, label: 'Self-Cleaning', desc: 'Dirt slides off.' },
                    { icon: Droplets, label: 'Hydrophobic', desc: '115° Water Beading.' }
                ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 * fs }}>
                        <div style={{ background: 'rgba(37, 99, 235, 0.25)', padding: 6 * fs, borderRadius: 4 * fs }}>
                            <item.icon size={14 * fs} color={BLUE_LIGHT} strokeWidth={2.5} />
                        </div>
                        <div>
                            <div style={{ fontSize: 9 * fs, color: '#fff', fontWeight: 800 }}>{item.label}</div>
                            <div style={{ fontSize: 7.5 * fs, color: '#e2e8f0', fontWeight: 500 }}>{item.desc}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

const HexCard = ({ icon: Icon, label, title, desc, scale }) => {
    const fs = scale
    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 * fs, marginBottom: 12 * fs }}>
            <div style={{ width: 30 * fs, height: 30 * fs, borderRadius: 8 * fs, background: '#1e293b', border: '1px solid #475569', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={16 * fs} strokeWidth={2.5} />
            </div>
            <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5 * fs, marginBottom: 3 * fs }}>
                    <span style={{ fontSize: 7.5 * fs, fontFamily: "'JetBrains Mono', monospace", color: '#94a3b8', fontWeight: 700 }}>{label}</span>
                    <h4 style={{ color: 'white', fontWeight: 800, fontSize: 10 * fs, textTransform: 'uppercase', margin: 0 }}>{title}</h4>
                </div>
                <p style={{ fontSize: 8.5 * fs, color: '#e2e8f0', lineHeight: 1.4, margin: 0, fontWeight: 500 }}>{desc}</p>
            </div>
        </div>
    )
}

const GaugeBox = ({ label, value, sub, percent, scale }) => {
    const fs = scale
    return (
        <div style={{ marginBottom: 10 * fs }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 * fs }}>
                <span style={{ fontSize: 8 * fs, color: '#e2e8f0', fontWeight: 800, textTransform: 'uppercase' }}>{label}</span>
                <span style={{ fontSize: 8 * fs, color: '#94a3b8', marginLeft: 'auto', fontWeight: 600 }}>{sub}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 * fs }}>
                <div style={{ fontSize: 12 * fs, fontWeight: 900, color: 'white' }}>{value}</div>
                <div style={{ flex: 1, height: 5 * fs, background: '#334155', borderRadius: 2.5 * fs, overflow: 'hidden' }}>
                    <div style={{ height: '100%', background: '#fff', width: `${percent}%`, opacity: 1 }}></div>
                </div>
            </div>
        </div>
    )
}

const ProcessPhase = ({ step, title, time, desc, isLast, scale }) => {
    const fs = scale
    return (
        <div style={{ display: 'flex', gap: 12 * fs, position: 'relative', paddingBottom: isLast ? 0 : 20 * fs }}>
            {/* Timeline Line */}
            {!isLast && <div style={{ position: 'absolute', left: 9 * fs, top: 20 * fs, bottom: 0, width: 2, background: 'linear-gradient(to bottom, #3b82f6, #1e293b)' }}></div>}

            {/* Node */}
            <div style={{
                width: 20 * fs, height: 20 * fs, borderRadius: '50%', background: '#0f172a', border: `2px solid ${BLUE}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: 9 * fs, fontWeight: 800,
                zIndex: 2, boxShadow: `0 0 10px ${BLUE}40`
            }}>
                {step}
            </div>

            {/* Content */}
            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 * fs }}>
                    <h4 style={{ color: 'white', fontSize: 10 * fs, fontWeight: 900, textTransform: 'uppercase', margin: 0 }}>{title}</h4>
                    <span style={{ color: BLUE_LIGHT, fontSize: 8 * fs, fontWeight: 700, background: 'rgba(59,130,246,0.1)', padding: '2px 6px', borderRadius: 4 }}>{time}</span>
                </div>
                <p style={{ color: '#e2e8f0', fontSize: 8 * fs, lineHeight: 1.4, margin: 0, fontWeight: 500 }}>{desc}</p>
            </div>
        </div>
    )
}

const FoldLine = ({ left, scale }) => (
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${left}%`, width: 1, borderLeft: '1px dashed rgba(255,255,255,0.2)', zIndex: 10 }}>
        <div style={{ position: 'absolute', top: 10 * scale, left: 4 * scale, fontSize: 6.5 * scale, color: 'rgba(255,255,255,0.4)', transform: 'rotate(90deg)', transformOrigin: 'top left', fontFamily: 'monospace', fontWeight: 700 }}>FOLD</div>
    </div>
)

export default function BackCerapheneV2({ scale = 1, surf }) {
    const fs = scale

    return (
        <BackBase scale={scale} surf={surf}>
            {/* Fold Lines */}
            <FoldLine left={GLUE} scale={scale} />
            <FoldLine left={GLUE + P4} scale={scale} />
            <FoldLine left={GLUE + P4 + P3} scale={scale} />
            <FoldLine left={GLUE + P4 + P3 + P2} scale={scale} />

            <div style={{ position: 'absolute', inset: 0, padding: 24 * fs, zIndex: 3, display: 'flex' }}>

                {/* 1. GLUE AREA */}
                <div style={{ width: `${GLUE}%`, borderRight: '1px dashed #475569', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ transform: 'rotate(-90deg)', whiteSpace: 'nowrap', fontSize: 8 * fs, color: '#475569', fontFamily: 'monospace', fontWeight: 700 }}>GLUE AREA</div>
                </div>

                {/* 2. LEFT PANEL (P4 Slot) - INNOVATED PROCESS DESIGN */}
                {/* Visual Logic: Phased approach (Prep -> Coat -> Cure) with clear hierarchy */}
                <div style={{ width: `${P4}%`, padding: `0 ${10 * fs}px`, display: 'flex', flexDirection: 'column' }}>

                    <SectionLabel label="03 | Application" scale={scale} />

                    {/* Phase 1: PREP (80% of result) */}
                    <div style={{ marginBottom: 16 * fs }}>
                        <div style={{ fontSize: 7 * fs, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 * fs, fontWeight: 700 }}>Phase 1: Surface Prep</div>
                        <ProcessPhase step="1" title="Decon" time="30m" desc="Clay bar & Iron Remover. Strip all wax." scale={scale} />
                        <ProcessPhase step="2" title="Polish" time="1h+" desc="Remove swirls. Creates mechanical bond." scale={scale} />
                        <ProcessPhase step="3" title="IPA Wipe" time="15m" desc="Remove oils. Surface must be naked." isLast={true} scale={scale} />
                    </div>

                    {/* Phase 2: COAT (The Event) */}
                    <div style={{ marginBottom: 16 * fs, background: 'linear-gradient(145deg, rgba(59,130,246,0.1), transparent)', padding: 10 * fs, borderRadius: 8 * fs, border: `1px solid ${BLUE}40` }}>
                        <div style={{ fontSize: 7 * fs, color: BLUE_LIGHT, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 8 * fs, fontWeight: 700 }}>Phase 2: Coating</div>
                        <ProcessPhase step="4" title="Apply" time="1h" desc="Cross-hatch pattern. Flash 1-2m. Level immediately." isLast={true} scale={scale} />
                    </div>

                    {/* Phase 3: CURE (The Lock) */}
                    <div style={{ padding: `0 ${10 * fs}px` }}>
                        <ProcessPhase step="5" title="Initial Cure" time="24h" desc="Keep dry. Full hardness in 7 days." isLast={true} scale={scale} />
                    </div>

                    {/* Care & Safety - Elaborated */}
                    <div style={{ marginTop: 'auto', borderTop: '1px solid #475569', paddingTop: 12 * fs }}>

                        {/* Maintenance Guide */}
                        <div style={{ marginBottom: 12 * fs }}>
                            <div style={{ fontSize: 8 * fs, fontWeight: 900, color: '#fff', marginBottom: 6 * fs, display: 'flex', alignItems: 'center', gap: 6 * fs }}>
                                <CheckCircle2 size={10 * fs} color={BLUE_LIGHT} />
                                MAINTENANCE
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 4 * fs }}>
                                <div style={{ fontSize: 7.5 * fs, color: '#e2e8f0', display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #334155', paddingBottom: 2 * fs }}>
                                    <span>Wash Cycle</span> <span style={{ fontWeight: 700, color: '#cbd5e1' }}>Weekly (2-Bucket)</span>
                                </div>
                                <div style={{ fontSize: 7.5 * fs, color: '#e2e8f0', display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #334155', paddingBottom: 2 * fs }}>
                                    <span>Soap Type</span> <span style={{ fontWeight: 700, color: '#34d399' }}>pH Neutral Only</span>
                                </div>
                                <div style={{ fontSize: 7.5 * fs, color: '#e2e8f0', display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #334155', paddingBottom: 2 * fs }}>
                                    <span>Inspection</span> <span style={{ fontWeight: 700, color: '#cbd5e1' }}>Every 12 Months</span>
                                </div>
                                <div style={{ fontSize: 7.5 * fs, color: '#f87171', fontWeight: 600, marginTop: 2 * fs }}>
                                    🚫 No Auto-Washes / Clay Bars
                                </div>
                            </div>
                        </div>

                        {/* Safety Warnings */}
                        <div>
                            <div style={{ fontSize: 8 * fs, fontWeight: 900, color: '#fff', marginBottom: 6 * fs, display: 'flex', alignItems: 'center', gap: 6 * fs }}>
                                <AlertTriangle size={10 * fs} color="#f87171" />
                                SAFETY PROTOCOLS
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 * fs }}>
                                {['Wear Gloves', 'Ventilated Area', 'Eye Protection', 'Vapor Mask'].map((s, i) => (
                                    <div key={i} style={{
                                        fontSize: 6.5 * fs, color: '#94a3b8',
                                        background: 'rgba(255,255,255,0.03)', padding: '4px 6px', borderRadius: 4,
                                        textAlign: 'center', border: '1px solid #334155'
                                    }}>
                                        {s}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* 3. CENTER PANEL (P3) - MAIN HERO */}
                <div style={{ width: `${P3}%`, padding: `0 ${20 * fs}px`, display: 'flex', flexDirection: 'column' }}>
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20 * fs, borderBottom: '1px solid #475569', paddingBottom: 14 * fs }}>
                        <div>
                            <h1 style={{ fontSize: 36 * fs, fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', color: 'white', lineHeight: 0.9, marginBottom: 8 * fs, fontFamily: "'Inter', sans-serif" }}>Ceraphene™</h1>
                            <div style={{ fontSize: 9 * fs, color: '#cbd5e1', fontFamily: 'monospace', fontWeight: 700 }}>TECHNICAL MANUAL</div>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <div style={{ fontSize: 12 * fs, color: 'white', fontWeight: 800 }}>Gloss & Color Depth</div>
                            <div style={{ fontSize: 8 * fs, color: '#94a3b8', fontWeight: 600 }}>9H+ Hardness Verified</div>
                        </div>
                    </div>

                    {/* Top Split: Science & Threats */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 0.8fr', gap: 20 * fs, marginBottom: 20 * fs }}>
                        {/* Left Col: Science */}
                        <div>
                            <SectionLabel label="01 | Architecture" scale={scale} />
                            <h2 style={{ fontSize: 12 * fs, fontWeight: 800, color: 'white', marginBottom: 10 * fs, lineHeight: 1.2 }}>
                                Graphene Matrix <span style={{ color: '#94a3b8' }}>Reinforcement</span>
                            </h2>
                            <p style={{ fontSize: 9 * fs, color: '#e2e8f0', lineHeight: 1.5, marginBottom: 14 * fs, fontWeight: 500 }}>
                                Embeds <strong>Graphene Nano-Platelets</strong>. Reduces porosity = blocked contaminants.
                            </p>

                            <HexCard icon={Shield} label="BOND" title="Covalent" desc="Permanent chemical adhesion." scale={scale} />
                            <HexCard icon={Thermometer} label="HEAT" title="Thermal" desc="Dissipates heat. No spots." scale={scale} />
                        </div>

                        {/* Right Col: Threat Wheel */}
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <ThreatWheel scale={scale} />
                        </div>
                    </div>

                    {/* Middle: Competitor Matrix (Wide Clean Table) */}
                    <SectionLabel label="02 | Benchmark" scale={scale} />
                    <div style={{ marginBottom: 24 * fs }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr', paddingBottom: 10 * fs, borderBottom: '1px solid #475569', marginBottom: 10 * fs }}>
                            <div style={{ fontSize: 7 * fs, color: '#94a3b8', textTransform: 'uppercase', fontWeight: 700 }}>Metric</div>
                            <div style={{ fontSize: 8 * fs, color: 'white', fontWeight: 900, textAlign: 'center' }}>CERA.</div>
                            <div style={{ fontSize: 8 * fs, color: '#94a3b8', textAlign: 'center', fontWeight: 600 }}>CSL</div>
                            <div style={{ fontSize: 8 * fs, color: '#94a3b8', textAlign: 'center', fontWeight: 600 }}>CQuartz</div>
                            <div style={{ fontSize: 8 * fs, color: '#94a3b8', textAlign: 'center', fontWeight: 600 }}>Pro 9H</div>
                        </div>
                        {COMPETITORS.map((row, i) => (
                            <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr 1fr', alignItems: 'center', marginBottom: 10 * fs }}>
                                <div style={{ fontSize: 8 * fs, color: '#e2e8f0', fontWeight: 600 }}>{row.label}</div>
                                <div style={{ fontSize: 9 * fs, color: row.win ? '#fff' : '#e2e8f0', fontWeight: 800, textAlign: 'center' }}>{row.cera}</div>
                                <div style={{ fontSize: 8 * fs, color: '#94a3b8', textAlign: 'center', fontWeight: 500 }}>{row.gt}</div>
                                <div style={{ fontSize: 8 * fs, color: '#94a3b8', textAlign: 'center', fontWeight: 500 }}>{row.cp}</div>
                                <div style={{ fontSize: 8 * fs, color: '#94a3b8', textAlign: 'center', fontWeight: 500 }}>{row.pro}</div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom: Pricing Panel */}
                    <div style={{ marginTop: 'auto' }}>
                        <PricingPanel scale={scale} />
                    </div>
                </div>

                {/* 4. RIGHT PANEL (P2 Slot) - FLIGHT DECK / TECH / TROUBLESHOOTING */}
                <div style={{ width: `${P2}%`, padding: `0 ${10 * fs}px`, display: 'flex', flexDirection: 'column' }}>

                    {/* Feature Focus */}
                    <SectionLabel label="04 | Focus" scale={scale} />
                    <FeatureFocus scale={scale} />

                    {/* Flight Deck */}
                    {/* Flight Deck - Header Removed for Space */}
                    <div style={{ marginBottom: 10 * fs }}>
                        <GaugeBox label="Temp" value="20°C" sub="15-25°C" percent={60} scale={scale} />
                        <GaugeBox label="Humidity" value="<70%" sub="Max" percent={70} scale={scale} />
                        <GaugeBox label="Cure (Dry)" value="24H" percent={100} scale={scale} />
                    </div>

                    {/* Advanced Protocols - Elaborated */}
                    <SectionLabel label="05 | Advanced Protocols" scale={scale} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10 * fs, marginBottom: 10 * fs }}>
                        {/* Layering Architecture */}
                        <div style={{ border: '1px solid #475569', borderRadius: 4 * fs, padding: 8 * fs, background: 'rgba(15,23,42,0.4)', position: 'relative' }}>
                            <div style={{ fontSize: 8 * fs, color: '#fff', fontWeight: 800, marginBottom: 6 * fs, display: 'flex', justifyContent: 'space-between' }}>
                                LAYER ARCHITECTURE
                                <Layers size={10 * fs} color={BLUE_LIGHT} />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 2 * fs }}>
                                <div style={{ background: 'linear-gradient(90deg, #1e293b, #334155)', padding: '4px 8px', borderRadius: 2 * fs, fontSize: 7 * fs, color: '#e2e8f0', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>TOP COAT</span> <span style={{ color: BLUE_LIGHT, fontWeight: 700 }}>Hydrophobicity + Gloss</span>
                                </div>
                                <div style={{ height: 2, background: BLUE, opacity: 0.5, margin: '2px 0' }}></div>
                                <div style={{ background: 'linear-gradient(90deg, #0f172a, #1e293b)', padding: '4px 8px', borderRadius: 2 * fs, fontSize: 7 * fs, color: '#94a3b8', display: 'flex', justifyContent: 'space-between' }}>
                                    <span>BASE COAT</span> <span style={{ color: '#cbd5e1', fontWeight: 700 }}>9H+ Hardness + Bond</span>
                                </div>
                            </div>
                        </div>

                        {/* IR Curing Dynamics */}
                        <div style={{ border: '1px solid #475569', borderRadius: 4 * fs, padding: 8 * fs, background: 'rgba(15,23,42,0.4)' }}>
                            <div style={{ fontSize: 8 * fs, color: '#fff', fontWeight: 800, marginBottom: 6 * fs, display: 'flex', justifyContent: 'space-between' }}>
                                IR CURING DYNAMICS
                                <Thermometer size={10 * fs} color="#f87171" />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 4 * fs }}>
                                <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)', padding: 4 * fs, borderRadius: 3 * fs }}>
                                    <div style={{ fontSize: 6.5 * fs, color: '#94a3b8' }}>TEMP</div>
                                    <div style={{ fontSize: 8 * fs, color: '#fff', fontWeight: 700 }}>65°C</div>
                                </div>
                                <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)', padding: 4 * fs, borderRadius: 3 * fs }}>
                                    <div style={{ fontSize: 6.5 * fs, color: '#94a3b8' }}>DIST</div>
                                    <div style={{ fontSize: 8 * fs, color: '#fff', fontWeight: 700 }}>60cm</div>
                                </div>
                                <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.03)', padding: 4 * fs, borderRadius: 3 * fs }}>
                                    <div style={{ fontSize: 6.5 * fs, color: '#94a3b8' }}>TIME</div>
                                    <div style={{ fontSize: 8 * fs, color: '#fff', fontWeight: 700 }}>15m</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Troubleshooting */}
                    <div style={{ marginTop: 'auto', background: '#1e293b', padding: 10 * fs, borderRadius: 3 * fs }}>
                        <div style={{ fontSize: 7.5 * fs, fontWeight: 800, color: '#fff', marginBottom: 4 * fs }}>TROUBLESHOOTING</div>
                        <div style={{ fontSize: 7 * fs, color: '#e2e8f0', marginBottom: 2 * fs, fontWeight: 500 }}><strong>High Spots:</strong> Level ASAP. Polish if dry.</div>
                        <div style={{ fontSize: 7 * fs, color: '#e2e8f0', fontWeight: 500 }}><strong>Hazing:</strong> Check humidity. Buff damp.</div>
                    </div>
                </div>

            </div>
        </BackBase>
    )
}
