import React from 'react'
import WrapBase from '../../base/wrap'
import { Shield, Droplet, Sun, FlaskConical, Diamond, Stars, Flame, Info, CheckCircle2, TrendingUp, BarChart3, AlertTriangle, CheckSquare } from 'lucide-react'
import Logo from '../../../brand/Logo'

const BOX = { face: 5.2, side: 2.13, total: 15.567, height: 6.65 }
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

function IconBox({ icon: Icon, label, sub, scale }) {
    const fs = scale
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 * fs, textAlign: 'center' }}>
            <div style={{
                width: 32 * fs, height: 32 * fs, borderRadius: 8 * fs,
                border: '1px solid rgba(255,255,255,0.2)', backgroundColor: 'rgba(255,255,255,0.05)',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
                <Icon size={18 * fs} color="white" strokeWidth={1.5} />
            </div>
            <div>
                <div style={{ color: 'white', fontSize: 9 * fs, fontWeight: 700, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>{label}</div>
                {sub && <div style={{ color: '#888', fontSize: 7 * fs, fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>{sub}</div>}
            </div>
        </div>
    )
}

function FeatureRow({ icon: Icon, title, desc, refText, scale }) {
    const fs = scale
    return (
        <div style={{ display: 'flex', gap: 12 * fs, alignItems: 'flex-start' }}>
            <div style={{
                width: 36 * fs, height: 36 * fs, borderRadius: 8 * fs, flexShrink: 0,
                backgroundColor: '#111', border: '1px solid #333',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(0,0,0,0.5)'
            }}>
                <Icon size={18 * fs} color="white" strokeWidth={2} />
            </div>
            <div>
                <div style={{ color: 'white', fontSize: 11 * fs, fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 * fs, fontFamily: "'Inter', sans-serif" }}>#{title}</div>
                <div style={{ color: '#aaa', fontSize: 8.5 * fs, lineHeight: 1.4, fontFamily: "'Inter', sans-serif", marginBottom: 2 * fs }}>{desc}</div>
                <div style={{ color: '#666', fontSize: 7 * fs, fontFamily: "'JetBrains Mono', monospace" }}>{refText}</div>
            </div>
        </div>
    )
}

function SpecCol({ title, items, scale }) {
    const fs = scale
    return (
        <div style={{ marginBottom: 16 * fs }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 * fs, marginBottom: 8 * fs, paddingBottom: 4 * fs, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ width: 4 * fs, height: 4 * fs, backgroundColor: '#fff', borderRadius: '50%' }} />
                <h4 style={{ color: '#fff', fontSize: 10 * fs, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', margin: 0, fontFamily: "'Inter', sans-serif" }}>{title}</h4>
            </div>
            <ul style={{ padding: 0, margin: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 4 * fs }}>
                {items.map((item, i) => (
                    <li key={i} style={{ fontSize: 9 * fs, color: '#aaa', fontFamily: "'JetBrains Mono', monospace", lineHeight: 1.3 }}>
                        <strong style={{ color: 'white', fontWeight: 600 }}>{item.l}:</strong> {item.v}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function WrapCerapheneV1({ scale = 1, surfBack = DEFAULT_SURF, surfLeft = DEFAULT_SURF, surfFront = DEFAULT_SURF, surfRight = DEFAULT_SURF }) {
    const fs = scale

    // --- CONTENT DEFINITIONS ---

    // BACK FACE (Panel C)
    const BackContent = (
        <div style={{ padding: 32 * fs, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ marginBottom: 16 * fs }}>
                <div style={{ color: '#555', fontSize: 9 * fs, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 * fs, fontFamily: "'Inter', sans-serif" }}>Lab Verified Performance</div>
                <div style={{ color: '#aaa', fontSize: 10 * fs, fontStyle: 'italic', fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
                    Tested for hardness, adhesion, abrasion resistance, hydrophobicity, UV stability, and chemical durability.
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 * fs }}>
                <SpecCol title="Identity" scale={scale} items={[
                    { l: 'Type', v: 'Graphene-Oxide / Silica Matrix' },
                    { l: 'Solids', v: '>65% (High-solids)' },
                    { l: 'Viscosity', v: '8–12 cP @ 25°C' },
                    { l: 'Density', v: '0.98–1.05 g/cm³' },
                    { l: 'VOC', v: 'Low (<50g/L)' },
                    { l: 'Appearance', v: 'Clear Liquid' },
                    { l: 'SiO2 Cont', v: '>85% (Active)' },
                    { l: 'X-Link', v: '>90% Density' }
                ]} />
                <SpecCol title="Mechanical" scale={scale} items={[
                    { l: 'Hardness', v: '9H+ (ASTM D3363)' },
                    { l: 'Adhesion', v: '5B (ASTM D3359)' },
                    { l: 'Taber', v: '< 12 mg loss (1k cyc)' },
                    { l: 'Impact', v: 'Pass @ 50 kg·cm' },
                    { l: 'Elasticity', v: 'High (Resists Cracking)' },
                    { l: 'Scratch', v: '>9H (Pencil)' },
                    { l: 'Toughness', v: '3.5 J (Impact)' },
                    { l: 'Flexibility', v: '3mm Mandrel Pass' }
                ]} />
                <SpecCol title="Surface & Hydro" scale={scale} items={[
                    { l: 'Cont. Angle', v: '115°–118° (JIS)' },
                    { l: 'Slide Angle', v: '<10°' },
                    { l: 'Surf Energy', v: '<20 mN/m' },
                    { l: 'Gloss', v: '95+ GU Initial' },
                    { l: 'Roll-off', v: '<5° (Superhydrophobic)' },
                    { l: 'CoF', v: 'Ultra-Low (Slick)' },
                    { l: 'Hysteresis', v: '<5° (Adv/Rec)' },
                    { l: 'WCA Stab', v: '<2% loss (100h)' }
                ]} />
                <SpecCol title="Durability" scale={scale} items={[
                    { l: 'Field Life', v: '3–4+ Years' },
                    { l: 'Wash Cycles', v: '200+' },
                    { l: 'Salt Spray', v: '500 hrs (ASTM B117)' },
                    { l: 'Heat', v: '700°C Stable' },
                    { l: 'Weathering', v: '1500h+ (QUV)' },
                    { l: 'Acid/Alkali', v: 'pH 1–13 Resistant' },
                    { l: 'Hydrolytic', v: 'Excellent Stability' },
                    { l: 'Solvent', v: 'MEK >100 Rubs' }
                ]} />
            </div>

            {/* Panel M | Legal Notices */}
            <div style={{ marginTop: 12 * fs, paddingTop: 12 * fs, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: '#555', fontSize: 7.5 * fs, fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 * fs, fontFamily: "'Inter', sans-serif" }}>Legal Notices & Warranty Information</div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 * fs }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 * fs }}>
                        <div>
                            <h5 style={{ color: 'white', fontSize: 6.5 * fs, fontWeight: 700, textTransform: 'uppercase', marginBottom: 3 * fs, fontFamily: "'Inter', sans-serif" }}>Important Notice</h5>
                            <p style={{ color: '#aaa', fontSize: 5.8 * fs, lineHeight: 1.25, textAlign: 'justify', fontFamily: "'Inter', sans-serif" }}>
                                Monoatom Labs makes no warranties, express or implied, including but not limited to any implied warranty of merchantability or fitness for a particular purpose. The user is solely responsible for determining the suitability of this product.
                            </p>
                        </div>
                        <div>
                            <h5 style={{ color: 'white', fontSize: 6.5 * fs, fontWeight: 700, textTransform: 'uppercase', marginBottom: 3 * fs, fontFamily: "'Inter', sans-serif" }}>Limitation of Liability</h5>
                            <p style={{ color: '#aaa', fontSize: 5.8 * fs, lineHeight: 1.25, textAlign: 'justify', fontFamily: "'Inter', sans-serif" }}>
                                If proven defective, the sole remedy shall be replacement or refund at Monoatom Labs’ discretion. Monoatom Labs shall not be liable for any indirect, incidental, or consequential damages.
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 * fs }}>
                        <div>
                            <h5 style={{ color: 'white', fontSize: 6.5 * fs, fontWeight: 700, textTransform: 'uppercase', marginBottom: 3 * fs, fontFamily: "'Inter', sans-serif" }}>Storage & Handling</h5>
                            <ul style={{ paddingLeft: 8 * fs, margin: 0, color: '#aaa', fontSize: 5.8 * fs, lineHeight: 1.25, fontFamily: "'Inter', sans-serif", listStyle: 'disc' }}>
                                <li>Store cool/dry, away from sunlight.</li>
                                <li>Temp: <strong>Below 25°C</strong>. Do not freeze.</li>
                                <li>Keep tightly closed. Keep out of reach of children.</li>
                            </ul>
                        </div>
                        <div>
                            <h5 style={{ color: 'white', fontSize: 6.5 * fs, fontWeight: 700, textTransform: 'uppercase', marginBottom: 3 * fs, fontFamily: "'Inter', sans-serif" }}>Professional Use Advisory</h5>
                            <p style={{ color: '#aaa', fontSize: 5.8 * fs, lineHeight: 1.25, textAlign: 'justify', fontFamily: "'Inter', sans-serif" }}>
                                Intended for professional use. Improper prep or application may affect performance. Refer to SDS.
                            </p>
                        </div>
                        <div>
                            <h5 style={{ color: 'white', fontSize: 6.5 * fs, fontWeight: 700, textTransform: 'uppercase', marginBottom: 3 * fs, fontFamily: "'Inter', sans-serif" }}>Health & Safety</h5>
                            <p style={{ color: '#aaa', fontSize: 5.8 * fs, lineHeight: 1.25, textAlign: 'justify', fontFamily: "'Inter', sans-serif" }}>
                                Refer to the Product Safety Data Sheet (SDS/MSDS) for detailed health, safety, and handling information before use.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div style={{ marginTop: 16 * fs, paddingTop: 16 * fs, borderTop: '1px solid rgba(255,255,255,0.1)', fontSize: 7 * fs, color: '#666', fontStyle: 'italic', fontFamily: "'Inter', sans-serif" }}>
                Footnote: All tests performed as per referenced ASTM / JIS methods. Actual performance depends on substrate condition and prep.
            </div>
        </div>
    )

    // LEFT SPINE (Panel B)
    const LeftContent = (
        <div style={{ padding: 24 * fs, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#555', fontSize: 9 * fs, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 24 * fs, fontFamily: "'Inter', sans-serif" }}>Features</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 24 * fs }}>
                <FeatureRow icon={Shield} title="Scratch Protection" desc="Helps protect against light scratches, swirl marks, and daily abrasion." refText="Ref: ASTM D3363 | 9H+" scale={scale} />
                <FeatureRow icon={Flame} title="Heat Resistance" desc="Designed to withstand high temps and thermal stress." refText="Stable: 700°C | Cycle: -20/+80°C" scale={scale} />
                <FeatureRow icon={Sun} title="UV Protection" desc="UV-resistant layer helps prevent paint fading and oxidation." refText="Ref: ASTM G154 | >1000 hrs" scale={scale} />
                <FeatureRow icon={FlaskConical} title="Chemical Resist" desc="Protects from bird droppings, fuel residue, and contaminants." refText="Ref: ASTM D1308 | pH 2–12" scale={scale} />
            </div>

            {/* Panel I | Quality Standards */}
            <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 12 * fs }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, marginBottom: 8 * fs }}>
                    <CheckSquare size={14 * fs} color="#64748B" />
                    <h4 style={{ color: 'white', fontSize: 10 * fs, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Inter', sans-serif", margin: 0 }}>Quality Standards</h4>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 * fs }}>
                    {[
                        { title: 'ISO 9001:2015', sub: 'QMS' },
                        { title: 'ASTM D3363', sub: 'Hardness' },
                        { title: 'JIS R3257', sub: 'Hydro.' },
                        { title: 'ASTM G154', sub: 'UV Res.' }
                    ].map((c, i) => (
                        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: 4 * fs }}>
                            <div>
                                <div style={{ color: 'white', fontSize: 8 * fs, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>{c.title}</div>
                                <div style={{ color: '#666', fontSize: 6.5 * fs, fontFamily: "'Inter', sans-serif" }}>{c.sub}</div>
                            </div>
                            <div style={{ color: '#10b981', fontSize: 10 * fs }}>✓</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )

    // FRONT FACE (Panel A)
    const FrontContent = (
        <div style={{ padding: 32 * fs, height: '100%', display: 'flex', flexDirection: 'column', position: 'relative' }}>


            <div style={{ marginBottom: 32 * fs }}>
                <div style={{ opacity: 0.8 }}>
                    <Logo size={24 * fs} theme="dark" />
                </div>
                <div style={{ marginTop: 16 * fs }}>
                    <h1 style={{ color: 'white', fontSize: 48 * fs, fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 0.9, textTransform: 'uppercase', fontStyle: 'italic', fontFamily: "'Inter', sans-serif" }}>Ceraphene™</h1>
                    <p style={{ color: '#aaa', fontSize: 11 * fs, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 8 * fs, fontFamily: "'Inter', sans-serif" }}>Graphene-Enhanced Nano-Ceramic Coating</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 * fs, marginBottom: 32 * fs }}>
                {[
                    { l: 'HARDNESS', v: '9H+' },
                    { l: 'CONTACT ANGLE', v: '115°–118°' },
                    { l: 'SLIDE ANGLE', v: '<10°' },
                    { l: 'THERMAL', v: '700°C' }
                ].map((item, i) => (
                    <div key={i} style={{ backgroundColor: 'rgba(20,20,20,0.6)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 6 * fs, padding: 10 * fs, textAlign: 'center' }}>
                        <div style={{ color: '#666', fontSize: 8 * fs, fontWeight: 700, marginBottom: 2 * fs, fontFamily: "'Inter', sans-serif" }}>{item.l}</div>
                        <div style={{ color: 'white', fontSize: 16 * fs, fontWeight: 900, fontFamily: "'Inter', sans-serif" }}>{item.v}</div>
                    </div>
                ))}
            </div>

            <div style={{ color: '#ddd', fontSize: 12 * fs, lineHeight: 1.5, fontFamily: "'Inter', sans-serif", marginBottom: 24 * fs }}>
                <strong style={{ color: 'white' }}>Diamond-hard protection. Graphene performance.</strong><br />
                Engineered for professionals who demand extreme durability, hydrophobicity, and long-term gloss.
            </div>

            <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16 * fs }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 * fs }}>
                    <IconBox icon={Diamond} label="9H+ Hardness" scale={scale} />
                    <IconBox icon={Droplet} label="Hydrophobic" scale={scale} />
                    <IconBox icon={Shield} label="Protection" scale={scale} />
                    <IconBox icon={Stars} label="Ultra Shine" scale={scale} />
                </div>
            </div>

            <div style={{ position: 'absolute', bottom: 12 * fs, left: 12 * fs, color: '#444', fontSize: 8 * fs, fontWeight: 800, letterSpacing: '0.2em', fontFamily: "'Inter', sans-serif" }}>#DETAILINGREDEFINED</div>
        </div>
    )

    // RIGHT SPINE (Panel E & F)
    const RightContent = (
        <div style={{ padding: 24 * fs, height: '100%', display: 'flex', flexDirection: 'column' }}>
            {/* Graphene Advantage */}
            <div style={{ marginBottom: 24 * fs, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ color: '#555', fontSize: 9 * fs, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 * fs, fontFamily: "'Inter', sans-serif" }}>Graphene Advantage</div>
                <h4 style={{ color: 'white', fontSize: 12 * fs, fontWeight: 700, fontStyle: 'italic', marginBottom: 8 * fs, fontFamily: "'Inter', sans-serif" }}>Nano-engineered surface intelligence.</h4>
                <p style={{ color: '#aaa', fontSize: 9 * fs, lineHeight: 1.4, marginBottom: 12 * fs, fontFamily: "'Inter', sans-serif" }}>
                    Ceraphene integrates graphene-oxide nanotubes within a ceramic matrix.
                </p>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: 10 * fs, borderRadius: 4 * fs, border: '1px solid rgba(255,255,255,0.1)' }}>
                    <p style={{ color: '#666', fontSize: 8 * fs, fontWeight: 700, textTransform: 'uppercase', marginBottom: 4 * fs, fontFamily: "'Inter', sans-serif" }}>Why Graphene?</p>
                    <ul style={{ paddingLeft: 12 * fs, margin: 0, color: '#ccc', fontSize: 8.5 * fs, fontFamily: "'Inter', sans-serif", listStyle: 'disc' }}>
                        <li>Better hardness stability</li>
                        <li>Heat dissipation</li>
                        <li>Higher contact angle</li>
                        <li>Reduced water spotting</li>
                    </ul>
                </div>
            </div>

            {/* Cost Disruption */}
            <div style={{ flex: 1, borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 16 * fs }}>
                <div style={{ color: '#d97706', fontSize: 9 * fs, fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 * fs, fontFamily: "'Inter', sans-serif" }}>ROI</div>
                <h4 style={{ color: 'white', fontSize: 12 * fs, fontWeight: 700, marginBottom: 8 * fs, fontFamily: "'Inter', sans-serif" }}>Direct-to-Installer</h4>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 * fs, marginBottom: 12 * fs }}>
                    <div style={{ padding: 6 * fs, borderRadius: 4 * fs, backgroundColor: '#111', border: '1px solid #333' }}>
                        <p style={{ color: '#666', fontSize: 7 * fs, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>Premium Brand</p>
                        <p style={{ color: '#888', fontSize: 10 * fs, fontWeight: 700, textDecoration: 'line-through', fontFamily: "'Inter', sans-serif" }}>~₹15,000</p>
                    </div>
                    <div style={{ padding: 6 * fs, borderRadius: 4 * fs, backgroundColor: 'rgba(217, 119, 6, 0.1)', border: '1px solid rgba(217, 119, 6, 0.4)' }}>
                        <p style={{ color: '#d97706', fontSize: 7 * fs, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>Ceraphene™</p>
                        <p style={{ color: 'white', fontSize: 12 * fs, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>~₹5,000</p>
                    </div>
                </div>

                <div style={{ backgroundColor: '#000', padding: 8 * fs, borderRadius: 4 * fs, marginBottom: 16 * fs }}>
                    <p style={{ color: '#fff', fontSize: 8 * fs, fontWeight: 700, marginBottom: 4 * fs, fontFamily: "'Inter', sans-serif" }}>VALUE PROP:</p>
                    <p style={{ color: '#aaa', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif" }}>• Extended Flash Time</p>
                    <p style={{ color: '#aaa', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif" }}>• Reduced Rework</p>
                </div>

                {/* Panel J | Safety */}
                <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: 12 * fs }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 * fs, marginBottom: 4 * fs }}>
                        <AlertTriangle size={12 * fs} color="#fbbf24" strokeWidth={2} />
                        <h4 style={{ color: '#fbbf24', fontSize: 9 * fs, fontWeight: 800, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif", margin: 0 }}>Safety</h4>
                    </div>
                    <p style={{ color: '#aaa', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif", lineHeight: 1.3, marginBottom: 4 * fs }}>
                        <strong>Professional Use Only.</strong> Use in well-ventilated area. Avoid skin/eye contact.
                    </p>
                    <p style={{ color: '#666', fontSize: 7 * fs, fontFamily: "'Inter', sans-serif" }}>
                        Store: {'<'}30°C. Keep sealed. Full SDS at QR code.
                    </p>
                </div>
            </div>
        </div>
    )

    return (
        <WrapBase
            scale={scale}
            surfBack={surfBack}
            surfLeft={surfLeft}
            surfFront={surfFront}
            surfRight={surfRight}
            backContent={BackContent}
            leftContent={LeftContent}
            frontContent={FrontContent}
            rightContent={RightContent}
        />
    )
}
