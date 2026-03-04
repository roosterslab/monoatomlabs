import React from 'react'
import { Scan, ArrowRight } from 'lucide-react'
import SurfaceBg from '../../../studio/SurfaceBg'
import QRCodeImage from '../../../studio/QRCodeImage'
const WEBSITE_URL = "https://www.monoatomlabs.com/products/ceraphene"

export default function QRGrapheneV2({ scale = 1, surf }) {
    const w = Math.round(605 * scale)
    const h = Math.round(492 * scale)
    const fs = scale

    const qrSize = 180 * fs

    return (
        <div style={{ width: w, height: h, display: 'flex', backgroundColor: '#050505', overflow: 'hidden', flexShrink: 0, userSelect: 'none', position: 'relative' }}>
            <SurfaceBg surf={surf} />

            <div style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 40 * fs }}>

                {/* Left Side: Instructions */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 * fs, textAlign: 'right' }}>
                    <Scan size={32 * fs} color="#0ea5e9" strokeWidth={1.5} />
                    <div>
                        <div style={{ color: '#fff', fontSize: 16 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif" }}>ACCESS PROTOCOL</div>
                        <div style={{ color: '#0ea5e9', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif" }}>SCAN TO AUTHENTICATE</div>
                    </div>
                    <div style={{ width: 40 * fs, height: 2 * fs, background: '#0ea5e9' }} />
                </div>

                {/* Center: QR Code Frame */}
                <div style={{ position: 'relative', padding: 15 * fs, border: '1px solid rgba(14, 165, 233, 0.3)', borderRadius: 12 * fs, background: 'rgba(0,0,0,0.4)' }}>
                    {/* Corner accents */}
                    <div style={{ position: 'absolute', top: -1, left: -1, width: 10 * fs, height: 10 * fs, borderTop: '2px solid #0ea5e9', borderLeft: '2px solid #0ea5e9', borderTopLeftRadius: 12 * fs }} />
                    <div style={{ position: 'absolute', bottom: -1, right: -1, width: 10 * fs, height: 10 * fs, borderBottom: '2px solid #0ea5e9', borderRight: '2px solid #0ea5e9', borderBottomRightRadius: 12 * fs }} />

                    <QRCodeImage url={WEBSITE_URL} size={qrSize} fgColor="#ffffff" bgColor="transparent" />
                </div>

                {/* Right Side: Link Text */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 * fs }}>
                    <div style={{ writingMode: 'vertical-rl', color: 'rgba(255,255,255,0.5)', fontSize: 10 * fs, fontFamily: 'monospace' }}>
                        SECURE::LINK
                    </div>
                    <ArrowRight size={20 * fs} color="#fff" />
                </div>

            </div>
        </div>
    )
}
