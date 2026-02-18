import React from 'react'
import BackBase from '../../base/back'
import { Shield, Droplet, User, Calendar, CheckSquare, AlertOctagon } from 'lucide-react'

function DataRow({ label, value, method, scale }) {
    const fs = scale
    return (
        <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
            <td style={{ padding: 8 * fs, color: '#aaa', fontSize: 9 * fs, fontFamily: "'Inter', sans-serif" }}>{label}</td>
            <td style={{ padding: 8 * fs, color: 'white', fontWeight: 700, fontSize: 10 * fs, fontFamily: "'Inter', sans-serif" }}>{value}</td>
            <td style={{ padding: 8 * fs, color: '#666', fontSize: 8 * fs, fontFamily: "'JetBrains Mono', monospace" }}>{method}</td>
        </tr>
    )
}

function SectionHeader({ title, icon: Icon, scale }) {
    const fs = scale
    return (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, marginBottom: 16 * fs, borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 8 * fs }}>
            <Icon size={16 * fs} color="#64748B" />
            <h4 style={{ color: 'white', fontSize: 11 * fs, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Inter', sans-serif", margin: 0 }}>{title}</h4>
        </div>
    )
}

export default function BackCerapheneV1({ scale = 1, surf }) {
    const fs = scale

    return (
        <BackBase scale={scale} surf={surf}>
            <div style={{ position: 'absolute', inset: 0, padding: 32 * fs, zIndex: 3, display: 'flex', gap: 32 * fs }}>

                {/* Left Column: Technical Data Sheet (Panel D) */}
                <div style={{ flex: 2, display: 'flex', flexDirection: 'column' }}>
                    <SectionHeader title="Technical Data Sheet (Rev. 2.2)" icon={CheckSquare} scale={scale} />

                    <div style={{ overflow: 'hidden', borderRadius: 8 * fs, border: '1px solid rgba(255,255,255,0.1)', flex: 1 }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ backgroundColor: 'rgba(255,255,255,0.05)', textAlign: 'left' }}>
                                    <th style={{ padding: 8 * fs, color: '#888', fontSize: 9 * fs, textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>Parameter</th>
                                    <th style={{ padding: 8 * fs, color: '#888', fontSize: 9 * fs, textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>Value</th>
                                    <th style={{ padding: 8 * fs, color: '#888', fontSize: 9 * fs, textTransform: 'uppercase', fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>Test Method / Basis</th>
                                </tr>
                            </thead>
                            <tbody>
                                <DataRow label="Hardness" value="9H+" method="ASTM D3363" scale={scale} />
                                <DataRow label="Durability" value="3–4+ Years" method="Field Validation" scale={scale} />
                                <DataRow label="Hydrophobicity" value="115°–118°" method="JIS R3257" scale={scale} />
                                <DataRow label="Slide Angle" value="<10°" method="Lab Measurement" scale={scale} />
                                <DataRow label="Film Thickness" value="3–4 µm" method="Coating Test" scale={scale} />
                                <DataRow label="Heat Resistance" value="700°C" method="Thermal Test" scale={scale} />
                                <DataRow label="UV Resistance" value=">1000 hrs" method="ASTM G154" scale={scale} />
                                <DataRow label="Chemical Resist" value="pH 2–12" method="ASTM D1308" scale={scale} />
                                <DataRow label="Wash Cycles" value="200+" method="Validation" scale={scale} />
                                <DataRow label="Initial Cure" value="12–24 hrs" method="Lab Protocol" scale={scale} />
                                <DataRow label="Full Cure" value="5–7 days" method="Lab Protocol" scale={scale} />
                                <DataRow label="Coverage" value="30–40 ml" method="Application Test" scale={scale} />
                                <DataRow label="Shelf Life" value="24 months" method="Sealed Storage" scale={scale} />
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Right Column: Safety & Traceability (Panel I & J) */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24 * fs }}>

                    {/* Certifications (Panel I) */}
                    <div>
                        <SectionHeader title="Quality Standards" icon={Shield} scale={scale} />
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 * fs }}>
                            {[
                                { title: 'ISO 9001:2015', sub: 'Quality Management' },
                                { title: 'ASTM D3363', sub: 'Hardness Testing' },
                                { title: 'JIS R3257', sub: 'Hydrophobicity' },
                                { title: 'ASTM G154', sub: 'UV Resistance' }
                            ].map((c, i) => (
                                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: 8 * fs }}>
                                    <div>
                                        <div style={{ color: 'white', fontSize: 10 * fs, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>{c.title}</div>
                                        <div style={{ color: '#666', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif" }}>{c.sub}</div>
                                    </div>
                                    <div style={{ color: '#10b981' }}>✓</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Safety & Traceability (Panel J) */}
                    <div style={{ marginTop: 'auto' }}>
                        <SectionHeader title="Safety & Traceability" icon={AlertOctagon} scale={scale} />
                        <div style={{ marginBottom: 16 * fs }}>
                            <p style={{ color: '#aaa', fontSize: 9 * fs, fontFamily: "'Inter', sans-serif", lineHeight: 1.4, marginBottom: 8 * fs }}>
                                <strong>Professional Use Only.</strong> Use in well-ventilated area. Avoid skin/eye contact.
                            </p>
                            <p style={{ color: '#aaa', fontSize: 9 * fs, fontFamily: "'Inter', sans-serif", lineHeight: 1.4 }}>
                                <strong>Storage:</strong> {'<'}30°C. Away from sunlight. Keep sealed.
                            </p>
                        </div>

                        <div style={{ backgroundColor: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4 * fs, padding: 12 * fs }}>
                            <div style={{ color: '#666', fontSize: 8 * fs, fontWeight: 700, textTransform: 'uppercase', marginBottom: 8 * fs, fontFamily: "'Inter', sans-serif" }}>Batch Control</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 * fs }}>
                                {['Batch', 'MFG', 'EXP'].map(label => (
                                    <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                        <span style={{ color: '#888', fontSize: 9 * fs, fontFamily: "'JetBrains Mono', monospace" }}>{label}:</span>
                                        <div style={{ width: 60 * fs, height: 1, backgroundColor: '#444' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </BackBase>
    )
}
