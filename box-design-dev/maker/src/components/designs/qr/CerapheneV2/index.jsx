import React from 'react'
import QRBase from '../../base/qr'
import QRCodeImage from '../../../studio/QRCodeImage'
import Logo from '../../../brand/Logo'
import { Shield, Globe, CheckCircle2 } from 'lucide-react'

const PRODUCT_URL = 'https://www.monoatomlabs.com/products/ceraphene'

const BLUE       = '#3b82f6'
const BLUE_LIGHT = '#60a5fa'
const GREEN      = '#34d399'

// ── Thin horizontal rule with centered label ──────────────────────────────────
const Divider = ({ label, fs }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 * fs, width: '100%' }}>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, transparent, #475569)' }} />
        <span style={{
            color: '#64748b', fontSize: 6.5 * fs, fontWeight: 700,
            letterSpacing: '0.22em', fontFamily: "'JetBrains Mono', monospace",
            textTransform: 'uppercase', whiteSpace: 'nowrap'
        }}>
            {label}
        </span>
        <div style={{ flex: 1, height: 1, background: 'linear-gradient(to left, transparent, #475569)' }} />
    </div>
)

// ── Corner accent for the QR frame ───────────────────────────────────────────
const Corner = ({ pos, fs }) => {
    const size = 14 * fs
    const offset = -1
    const base = { position: 'absolute', width: size, height: size }
    const borders = {
        tl: { top: offset, left: offset, borderTop: `2px solid ${BLUE}`, borderLeft: `2px solid ${BLUE}`, borderTopLeftRadius: 10 * fs },
        tr: { top: offset, right: offset, borderTop: `2px solid ${BLUE}`, borderRight: `2px solid ${BLUE}`, borderTopRightRadius: 10 * fs },
        bl: { bottom: offset, left: offset, borderBottom: `2px solid ${BLUE}`, borderLeft: `2px solid ${BLUE}`, borderBottomLeftRadius: 10 * fs },
        br: { bottom: offset, right: offset, borderBottom: `2px solid ${BLUE}`, borderRight: `2px solid ${BLUE}`, borderBottomRightRadius: 10 * fs },
    }
    return <div style={{ ...base, ...borders[pos] }} />
}

export default function QRCerapheneV2({ scale = 1, surf }) {
    const fs = scale

    return (
        <QRBase scale={scale} surf={surf}>
            <div style={{
                position: 'absolute', inset: 0, zIndex: 3,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'space-between',
                padding: `${30 * fs}px ${36 * fs}px`
            }}>

                {/* ── HEADER: Logo + product divider ── */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 * fs, width: '100%' }}>
                    <Logo theme="dark" showText={true} size={26 * fs} />
                    <Divider label="Ceraphene™ · Authentication" fs={fs} />
                </div>

                {/* ── CENTER: Premium QR frame ── */}
                <div style={{ position: 'relative' }}>
                    {/* Subtle outer glow ring */}
                    <div style={{
                        position: 'absolute', inset: -4 * fs,
                        borderRadius: 16 * fs,
                        background: `radial-gradient(ellipse at center, ${BLUE}18 0%, transparent 70%)`,
                        pointerEvents: 'none'
                    }} />

                    {/* Frame card */}
                    <div style={{
                        position: 'relative',
                        background: 'rgba(8, 15, 32, 0.80)',
                        border: '1px solid #334155',
                        borderRadius: 12 * fs,
                        padding: `${16 * fs}px ${20 * fs}px`,
                        display: 'flex', flexDirection: 'column', alignItems: 'center',
                        gap: 10 * fs
                    }}>
                        <Corner pos="tl" fs={fs} />
                        <Corner pos="tr" fs={fs} />
                        <Corner pos="bl" fs={fs} />
                        <Corner pos="br" fs={fs} />

                        {/* Scan instruction */}
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 6 * fs,
                            color: BLUE_LIGHT, fontSize: 7 * fs, fontWeight: 800,
                            letterSpacing: '0.18em', textTransform: 'uppercase',
                            fontFamily: "'JetBrains Mono', monospace"
                        }}>
                            <Shield size={9 * fs} color={BLUE_LIGHT} strokeWidth={2.5} />
                            Scan to Verify
                        </div>

                        {/* QR code with white mat */}
                        <div style={{
                            background: 'white',
                            padding: 8 * fs,
                            borderRadius: 6 * fs,
                            boxShadow: '0 4px 24px rgba(0,0,0,0.5)'
                        }}>
                            <QRCodeImage url={PRODUCT_URL} size={168 * fs} fgColor="#0a0a12" bgColor="#ffffff" />
                        </div>

                        {/* Sub-label below QR */}
                        <div style={{
                            color: '#475569', fontSize: 6.5 * fs, fontWeight: 600,
                            letterSpacing: '0.1em', fontFamily: "'Inter', sans-serif",
                            textAlign: 'center'
                        }}>
                            Batch ID · Lab Report · Origin
                        </div>
                    </div>
                </div>

                {/* ── FOOTER: Verification badge + URL ── */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 * fs, width: '100%' }}>

                    {/* Green auth badge */}
                    <div style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        gap: 8 * fs, width: '100%',
                        background: 'rgba(16, 185, 129, 0.07)',
                        border: `1px solid rgba(52, 211, 153, 0.22)`,
                        borderRadius: 8 * fs,
                        padding: `${7 * fs}px ${16 * fs}px`
                    }}>
                        <CheckCircle2 size={11 * fs} color={GREEN} strokeWidth={2.5} />
                        <span style={{ color: '#e2e8f0', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif" }}>
                            <span style={{ color: 'white', fontWeight: 800 }}>Authentic Product</span>
                            <span style={{ color: '#64748b', fontWeight: 500 }}> · Verified by Monoatom Labs</span>
                        </span>
                    </div>

                    {/* Website pill */}
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: 5 * fs,
                        color: '#475569', fontSize: 7.5 * fs,
                        fontFamily: "'JetBrains Mono', monospace", fontWeight: 600,
                        letterSpacing: '0.06em'
                    }}>
                        <Globe size={8 * fs} color="#475569" strokeWidth={2} />
                        monoatomlabs.com
                    </div>
                </div>

            </div>
        </QRBase>
    )
}
