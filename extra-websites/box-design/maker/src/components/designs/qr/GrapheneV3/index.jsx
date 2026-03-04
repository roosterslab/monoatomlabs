import React from 'react'
import { QrCode } from 'lucide-react'
import SurfaceBg from '../../../studio/SurfaceBg'
import QRCodeImage from '../../../studio/QRCodeImage'

const WEBSITE_URL = "https://www.monoatomlabs.com/products/ceraphene"

export default function QRGrapheneV3({ scale = 1, surf }) {
    const w = Math.round(605 * scale)
    const h = Math.round(492 * scale)
    const fs = scale

    const qrSize = 160 * fs

    return (
        <div style={{ width: w, height: h, display: 'flex', backgroundColor: '#050505', overflow: 'hidden', flexShrink: 0, userSelect: 'none', position: 'relative' }}>
            <SurfaceBg surf={surf} />
            <div style={{ position: 'absolute', inset: 0, background: '#080808', zIndex: 1 }} />

            <div style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                {/* Minimalist Card Design */}
                <div style={{ background: '#fff', padding: 30 * fs, borderRadius: 2 * fs, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 * fs, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, alignSelf: 'flex-start', borderBottom: '1px solid #eee', paddingBottom: 10 * fs, width: '100%' }}>
                        <QrCode size={14 * fs} color="#000" />
                        <span style={{ fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", fontWeight: 700, letterSpacing: '0.1em' }}>DIGITAL CERTIFICATE</span>
                    </div>

                    <QRCodeImage url={WEBSITE_URL} size={qrSize} fgColor="#000000" bgColor="transparent" />

                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 12 * fs, fontWeight: 700, fontFamily: "'Inter', sans-serif", color: '#000', marginBottom: 4 * fs }}>SCAN TO VERIFY</div>
                        <div style={{ fontSize: 9 * fs, color: '#666', fontFamily: "'Inter', sans-serif" }}>Access Product Manual & Warranty</div>
                    </div>

                </div>

            </div>
        </div>
    )
}
