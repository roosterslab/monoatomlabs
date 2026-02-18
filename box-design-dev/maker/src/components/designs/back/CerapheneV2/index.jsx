import React from 'react'
import BackBase from '../../base/back'
import {
    CloudRain, Bug, Disc, Flame, Wind, Zap, Sun, Droplets, Shield,
    CheckCircle2, AlertOctagon, Check, Ban, Info, Clock, ChevronRight, Mail,
    Thermometer, Atom, Layers, AlertTriangle, Sparkles, X, Target
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

const APP_STEPS = [
    { num: '01', title: 'Decon', short: 'Clean', desc: 'Clay bar + Iron remover. Strip old wax.', time: '30m' },
    { num: '02', title: 'Polish', short: 'Correct', desc: 'Remove swirls. Lock in gloss.', time: '1h+' },
    { num: '03', title: 'Wipe', short: 'Prep', desc: 'Final IPA wipe. Surface must be bare.', time: '15m' },
    { num: '04', title: 'Apply', short: 'Coat', desc: 'Cross-hatch 2x2. Flash 1-2m. Level.', time: '1h' },
    { num: '05', title: 'Cure', short: 'Wait', desc: 'Keep dry 24h. Full hardness 1 week.', time: '24h' },
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
    return (
        <div style={{ border: '1px solid #475569', borderRadius: 6 * fs, padding: 14 * fs, display: 'flex', gap: 16 * fs, alignItems: 'center', background: 'linear-gradient(145deg, #0f172a, #020617)' }}>
            <div style={{ flex: 1 }}>
                <div style={{ color: '#cbd5e1', fontSize: 8 * fs, letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: 4 * fs, fontWeight: 700 }}>Premium Protection. Not Premium Pricing.</div>
                <h3 style={{ color: 'white', fontSize: 16 * fs, fontWeight: 900, fontFamily: "'Inter', sans-serif", margin: 0, lineHeight: 1 }}>
                    PREMIUM PERFORMANCE.<br />SMARTER PRICING.
                </h3>
                <p style={{ color: '#e2e8f0', fontSize: 9 * fs, marginTop: 8 * fs, lineHeight: 1.4, fontWeight: 500 }}>
                    Competing coatings charge <span style={{ color: '#fff', fontWeight: 800 }}>₹12k–₹18k</span>. Ceraphene delivers 9H+ at <span style={{ color: BLUE_LIGHT, fontWeight: 800 }}>₹5,000</span>.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 * fs, marginTop: 12 * fs }}>
                    {[
                        { l: 'CERAPHENE', p: '₹5,000', y: '₹1,250', s: 'Direct to You', act: true },
                        { l: 'Int\'l Brands', p: '₹12,000+', y: '₹4,000+', s: 'Import Markup' },
                        { l: 'Professional', p: '₹18,000+', y: '₹6,000+', s: 'Labor Included' }
                    ].map((item, i) => (
                        <div key={i} style={{
                            background: item.act ? 'rgba(37, 99, 235, 0.2)' : 'rgba(255,255,255,0.05)',
                            border: item.act ? `2px solid ${BLUE}` : '1px solid #475569',
                            padding: 8 * fs, borderRadius: 4 * fs, textAlign: 'center'
                        }}>
                            <div style={{ color: item.act ? BLUE_LIGHT : '#cbd5e1', fontSize: 7 * fs, fontWeight: 800, textTransform: 'uppercase' }}>{item.l}</div>
                            <div style={{ color: item.act ? 'white' : '#e2e8f0', fontSize: 11 * fs, fontWeight: 900, fontFamily: 'monospace', margin: '4px 0' }}>{item.p}</div>
                            <div style={{ fontSize: 7 * fs, color: item.act ? '#34d399' : '#94a3b8', fontWeight: 700 }}>{item.y}<span style={{ fontSize: 6 * fs, fontWeight: 500 }}>/yr</span></div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{ width: 76 * fs, height: 76 * fs, borderRadius: '50%', border: `3px solid ${BLUE}`, background: 'rgba(37, 99, 235, 0.2)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <div style={{ color: 'white', fontSize: 20 * fs, fontWeight: 900, fontFamily: "'Rajdhani', sans-serif" }}>60%</div>
                <div style={{ color: BLUE_LIGHT, fontSize: 7.5 * fs, letterSpacing: '0.05em', fontWeight: 800 }}>CHEAPER</div>
            </div>
        </div>
    )
}

const FeatureFocus = ({ scale }) => {
    const fs = scale
    return (
        <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px solid #475569', padding: 12 * fs, borderRadius: 6 * fs, marginBottom: 16 * fs }}>
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

const FoldLine = ({ left, scale }) => (
    <div style={{ position: 'absolute', top: 0, bottom: 0, left: `${left}%`, width: 1, borderLeft: '1px dashed rgba(255,255,255,0.2)', zIndex: 10 }}>
        <div style={{ position: 'absolute', top: 10 * scale, left: 4 * scale, fontSize: 7 * fs, color: 'rgba(255,255,255,0.4)', transform: 'rotate(90deg)', transformOrigin: 'top left', fontFamily: 'monospace', fontWeight: 700 }}>FOLD</div>
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

                {/* 2. PANEL 4 (Right - 2.13") - FEATURES & TECH */}
                <div style={{ width: `${P4}%`, padding: `0 ${10 * fs}px`, display: 'flex', flexDirection: 'column' }}>
                    {/* Feature Focus */}
                    <SectionLabel label="04 | Focus" scale={scale} />
                    <FeatureFocus scale={scale} />

                    {/* Advanced Protocols */}
                    <SectionLabel label="05 | Advanced" scale={scale} />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 10 * fs, marginBottom: 16 * fs }}>
                        <div style={{ border: '1px solid #475569', padding: 10 * fs, borderRadius: 4 * fs, background: 'rgba(15,23,42,0.6)' }}>
                            <div style={{ fontSize: 8 * fs, color: '#fff', fontWeight: 800, marginBottom: 3 * fs }}>IR CURE</div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 7.5 * fs, color: '#e2e8f0', fontWeight: 500 }}>
                                <span>60-70°C</span><span>@ 60cm</span><span>15m</span>
                            </div>
                        </div>
                        <div style={{ border: '1px solid #475569', padding: 10 * fs, borderRadius: 4 * fs, background: 'rgba(15,23,42,0.6)' }}>
                            <div style={{ fontSize: 8 * fs, color: '#fff', fontWeight: 800, marginBottom: 3 * fs }}>LAYERING</div>
                            <div style={{ fontSize: 7.5 * fs, color: '#e2e8f0', fontWeight: 500 }}>Base {'>'} 1hr {'>'} Top Coat</div>
                        </div>
                    </div>

                    {/* Care & Safety Composite */}
                    <SectionLabel label="06 | Care & Safety" scale={scale} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 * fs, marginBottom: 16 * fs }}>
                        <div style={{ fontSize: 7.5 * fs, background: '#1e293b', padding: 8 * fs, borderRadius: 3 * fs }}>
                            <span style={{ color: '#34d399', fontWeight: 800 }}>DO:</span> <span style={{ color: '#e2e8f0', fontWeight: 500 }}>pH Neutral Soap</span>
                        </div>
                        <div style={{ fontSize: 7.5 * fs, background: '#1e293b', padding: 8 * fs, borderRadius: 3 * fs }}>
                            <span style={{ color: '#f87171', fontWeight: 800 }}>NO:</span> <span style={{ color: '#e2e8f0', fontWeight: 500 }}>Auto Washes / Clay</span>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 * fs }}>
                        {['Eyes: Rinse', 'Skin: Soap', 'Air: Fresh', 'No Vomit'].map((s, i) => (
                            <div key={i} style={{ borderRadius: 3 * fs, fontSize: 6.5 * fs, color: '#cbd5e1', textAlign: 'center', background: 'rgba(255,255,255,0.05)', padding: 3 * fs, fontWeight: 600 }}>{s}</div>
                        ))}
                    </div>

                    <div style={{ marginTop: 'auto', textAlign: 'center', borderTop: '1px solid #475569', paddingTop: 10 * fs }}>
                        <div style={{ fontSize: 7 * fs, color: '#94a3b8', fontWeight: 600 }}>support@monoatomlabs.com</div>
                    </div>
                </div>

                {/* 3. PANEL 3 (Center - 5.2") - MAIN HERO */}
                <div style={{ width: `${P3}%`, padding: `0 ${20 * fs}px`, display: 'flex', flexDirection: 'column' }}>
                    {/* Header */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 20 * fs, borderBottom: '1px solid #475569', paddingBottom: 14 * fs }}>
                        <div>
                            <h1 style={{ fontSize: 36 * fs, fontWeight: 900, fontStyle: 'italic', textTransform: 'uppercase', color: 'white', lineHeight: 0.9, marginBottom: 8 * fs, fontFamily: "'Inter', sans-serif" }}>Ceraphene™</h1>
                            <div style={{ fontSize: 9 * fs, color: '#cbd5e1', fontFamily: 'monospace', fontWeight: 700 }}>REV 2.3 | TECHNICAL MANUAL</div>
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

                {/* 4. PANEL 2 (Left - 2.13") - FLIGHT DECK + APP PROCESS */}
                <div style={{ width: `${P2}%`, padding: `0 ${10 * fs}px`, display: 'flex', flexDirection: 'column' }}>

                    {/* Flight Deck */}
                    <SectionLabel label="02 | Flight Deck" scale={scale} />
                    <div style={{ marginBottom: 20 * fs }}>
                        <GaugeBox label="Temp" value="20°C" sub="15-25°C" percent={60} scale={scale} />
                        <GaugeBox label="Humidity" value="<70%" sub="Max" percent={70} scale={scale} />
                        <GaugeBox label="Cure (Dry)" value="24H" percent={100} scale={scale} />
                    </div>

                    {/* App Process */}
                    <SectionLabel label="03 | Process" scale={scale} />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 * fs, position: 'relative', paddingLeft: 10 * fs, flex: 1 }}>
                        <div style={{ position: 'absolute', left: 4 * fs, top: 6 * fs, bottom: 6 * fs, width: 2, background: '#475569' }}></div>
                        {APP_STEPS.map((step, i) => (
                            <div key={i} style={{ position: 'relative' }}>
                                <div style={{ position: 'absolute', left: -11 * fs, top: 1 * fs, width: 8 * fs, height: 8 * fs, borderRadius: '50%', background: '#020617', border: '1px solid #64748b', color: '#fff', fontSize: 5 * fs, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>{i + 1}</div>
                                <div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 3 * fs }}>
                                        <div style={{ fontSize: 9 * fs, color: 'white', fontWeight: 800 }}>{step.title}</div>
                                        <div style={{ fontSize: 7 * fs, color: '#94a3b8', fontWeight: 600 }}>{step.time}</div>
                                    </div>
                                    <div style={{ fontSize: 7.5 * fs, color: '#e2e8f0', lineHeight: 1.3, fontWeight: 500 }}>{step.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Troubleshooting */}
                    <div style={{ marginTop: 16 * fs, background: '#1e293b', padding: 10 * fs, borderRadius: 3 * fs }}>
                        <div style={{ fontSize: 7.5 * fs, fontWeight: 800, color: '#fff', marginBottom: 4 * fs }}>TROUBLESHOOTING</div>
                        <div style={{ fontSize: 7 * fs, color: '#e2e8f0', marginBottom: 2 * fs, fontWeight: 500 }}><strong>High Spots:</strong> Level ASAP. Polish if dry.</div>
                        <div style={{ fontSize: 7 * fs, color: '#e2e8f0', fontWeight: 500 }}><strong>Hazing:</strong> Check humidity. Buff damp.</div>
                    </div>
                </div>

            </div>
        </BackBase>
    )
}
