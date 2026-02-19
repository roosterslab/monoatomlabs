import React from 'react'
import QRBase from '../../base/qr'
import QRCodeImage from '../../../studio/QRCodeImage'
import Logo from '../../../brand/Logo'
import { ArrowRight, Globe, CheckCircle2, ShieldCheck } from 'lucide-react'

const PRODUCT_URL = 'https://www.monoatomlabs.com/products/ceraphene'

// --- CONSTANTS ---
const C = '#cbd5e1' // Slate 300
const BLUE = '#3b82f6'
const BLUE_LIGHT = '#60a5fa'

export default function QRCerapheneV2({ scale = 1, surf }) {
    const fs = scale

    return (
        <QRBase scale={scale} surf={surf}>
            <div style={{ position: 'absolute', inset: 0, padding: 24 * fs, zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                {/* 1. Header: Branding */}
                <div style={{ marginBottom: 24 * fs }}>
                    <Logo theme="dark" showText={true} size={80 * fs} />
                </div>

                {/* 2. QR Container - Tech Frame */}
                <div style={{
                    position: 'relative',
                    background: 'rgba(15, 23, 42, 0.6)',
                    padding: 24 * fs,
                    borderRadius: 12 * fs,
                    border: '1px solid #475569',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
                    marginBottom: 20 * fs
                }}>
                    {/* Corner Accents */}
                    <div style={{ position: 'absolute', top: -1, left: -1, width: 10 * fs, height: 10 * fs, borderTop: `2px solid ${BLUE}`, borderLeft: `2px solid ${BLUE}`, borderTopLeftRadius: 12 * fs }}></div>
                    <div style={{ position: 'absolute', top: -1, right: -1, width: 10 * fs, height: 10 * fs, borderTop: `2px solid ${BLUE}`, borderRight: `2px solid ${BLUE}`, borderTopRightRadius: 12 * fs }}></div>
                    <div style={{ position: 'absolute', bottom: -1, left: -1, width: 10 * fs, height: 10 * fs, borderBottom: `2px solid ${BLUE}`, borderLeft: `2px solid ${BLUE}`, borderBottomLeftRadius: 12 * fs }}></div>
                    <div style={{ position: 'absolute', bottom: -1, right: -1, width: 10 * fs, height: 10 * fs, borderBottom: `2px solid ${BLUE}`, borderRight: `2px solid ${BLUE}`, borderBottomRightRadius: 12 * fs }}></div>

                    {/* QR Code */}
                    <div style={{ background: 'white', padding: 8 * fs, borderRadius: 4 * fs }}>
                        <QRCodeImage url={PRODUCT_URL} size={160 * fs} fgColor="#000" bgColor="#fff" />
                    </div>
                </div>

                {/* 3. Call to Action */}
                <div style={{ textAlign: 'center', marginBottom: 16 * fs }}>
                    <div style={{ color: 'white', fontSize: 11 * fs, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 * fs, fontFamily: "'Inter', sans-serif" }}>
                        Authentic Product
                    </div>
                    <div style={{ color: '#94a3b8', fontSize: 8 * fs, fontWeight: 500, fontFamily: "'Inter', sans-serif" }}>
                        Scan to verify batch & view lab reports
                    </div>
                </div>

                {/* 4. Website Footer */}
                <div style={{
                    display: 'flex', alignItems: 'center', gap: 6 * fs,
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: `1px solid ${BLUE}40`,
                    padding: '8px 16px', borderRadius: 99 * fs
                }}>
                    <Globe size={10 * fs} color={BLUE_LIGHT} />
                    <span style={{ color: BLUE_LIGHT, fontSize: 8 * fs, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace" }}>
                        monoatomlabs.com
                    </span>
                    <ArrowRight size={10 * fs} color={BLUE_LIGHT} />
                </div>

            </div>
        </QRBase>
    )
}
