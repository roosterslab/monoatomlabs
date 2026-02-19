import React from 'react'
import QRBase from '../../base/qr'
import QRCodeImage from '../../../studio/QRCodeImage'
import Logo from '../../../brand/Logo'
import { ShieldCheck, Globe, Layers } from 'lucide-react'

const SITE_URL  = 'https://monoatomlabs.com'
const SITE_DISP = 'monoatomlabs.com'

const FEATURES = [
    { Icon: ShieldCheck, label: 'NABL\nCertified'  },
    { Icon: Globe,       label: 'Global\nExport'    },
    { Icon: Layers,      label: 'Industry\n4.0'     },
]

export default function QRCerapheneV2({ scale = 1, surf }) {
    const fs = scale

    return (
        <QRBase scale={scale} surf={surf}>

            {/* Suppress hex-wave bg → pure black, matching template */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 2,
                background: 'rgba(0,0,0,0.90)',
            }} />

            {/* ── Page ── */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 3,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center',
                padding: `${20 * fs}px ${56 * fs}px`,
                fontFamily: "'Inter','Helvetica Neue',Arial,sans-serif",
                gap: 0,
            }}>

                {/* ── BRAND HEADER ── */}
                <div style={{ textAlign: 'center', marginBottom: 10 * fs, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 7 * fs }}>
                    <Logo theme="dark" showText size={21 * fs} />

                    {/* thin rule */}
                    <div style={{
                        height: 1, width: 44 * fs,
                        background: '#374151',
                    }} />

                    <p style={{
                        margin: 0,
                        color: '#9ca3af', fontSize: 6.5 * fs,
                        fontWeight: 600, letterSpacing: '0.3em',
                        textTransform: 'uppercase',
                    }}>
                        Graphene Ceramic Coating
                    </p>
                </div>

                {/* ── SCAN TO VISIT ── */}
                <h2 style={{
                    margin: 0, marginBottom: 8 * fs,
                    color: '#ffffff', fontSize: 11 * fs,
                    fontWeight: 700, letterSpacing: '0.25em',
                    textTransform: 'uppercase', fontFamily: 'inherit',
                }}>
                    Scan to Visit
                </h2>

                {/* ── QR CODE ── */}
                <div style={{
                    background: '#ffffff',
                    padding: 11 * fs,
                    borderRadius: 2 * fs,
                    lineHeight: 0,
                    boxShadow: '0 0 48px rgba(255,255,255,0.06)',
                    marginBottom: 7 * fs,
                }}>
                    <QRCodeImage
                        url={SITE_URL}
                        size={128 * fs}
                        fgColor="#000000"
                        bgColor="#ffffff"
                    />
                </div>

                {/* ── URL ── */}
                <p style={{
                    margin: 0, marginBottom: 14 * fs,
                    color: '#6b7280', fontSize: 7.5 * fs,
                    fontFamily: "'JetBrains Mono',monospace",
                    fontWeight: 500, letterSpacing: '0.12em',
                }}>
                    {SITE_DISP}
                </p>

                {/* ── FOOTER ── */}
                <div style={{
                    width: '100%',
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: 14 * fs,
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 12 * fs,
                }}>

                    {/* Description */}
                    <p style={{
                        margin: 0,
                        color: '#9ca3af', fontSize: 7.5 * fs,
                        lineHeight: 1.65, textAlign: 'center',
                        maxWidth: 400 * fs,
                    }}>
                        Pioneering the future of industrial materials through graphene
                        innovation. Access technical specifications, NABL reports, and
                        partnership opportunities instantly.
                    </p>

                    {/* Feature icons */}
                    <div style={{
                        display: 'grid', gridTemplateColumns: '1fr 1fr 1fr',
                        gap: 16 * fs, width: '100%',
                    }}>
                        {FEATURES.map(({ Icon, label }) => (
                            <div key={label} style={{
                                display: 'flex', flexDirection: 'column',
                                alignItems: 'center', gap: 7 * fs,
                            }}>
                                <div style={{
                                    padding: 8 * fs, borderRadius: '50%',
                                    border: '1px solid rgba(255,255,255,0.18)',
                                    lineHeight: 0,
                                }}>
                                    <Icon size={14 * fs} color="#d1d5db" strokeWidth={1.5} />
                                </div>
                                <span style={{
                                    color: '#6b7280',
                                    fontSize: 5.5 * fs, fontWeight: 700,
                                    letterSpacing: '0.15em', textTransform: 'uppercase',
                                    textAlign: 'center', lineHeight: 1.4,
                                    whiteSpace: 'pre-line',
                                }}>
                                    {label}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Origin */}
                    <p style={{
                        margin: 0,
                        color: '#4b5563', fontSize: 6 * fs,
                        fontWeight: 500, letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                    }}>
                        Engineered in Ahmedabad, India
                    </p>

                </div>
            </div>
        </QRBase>
    )
}
