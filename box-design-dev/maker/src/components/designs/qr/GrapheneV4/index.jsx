import React from 'react'
import { QrCode, ScanLine } from 'lucide-react'
import SurfaceBg from '../../../studio/SurfaceBg'
import QRCodeImage from '../../../studio/QRCodeImage'

const WEBSITE_URL = "https://www.monoatomlabs.com/products/ceraphene"

export default function QRGrapheneV4({ scale = 1, surf }) {
    const w = Math.round(605 * scale)
    const h = Math.round(492 * scale)
    const fs = scale

    const qrSize = 160 * fs
    const stencilFont = "'Black Ops One', 'Impact', sans-serif"

    return (
        <div style={{ width: w, height: h, display: 'flex', backgroundColor: '#1a1a1a', overflow: 'hidden', flexShrink: 0, userSelect: 'none', position: 'relative' }}>
            <SurfaceBg surf={surf} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(20,20,20,0.95)', zIndex: 1 }} />

            {/* Corner screws */}
            <div style={{ position: 'absolute', top: 10 * fs, left: 10 * fs, width: 8 * fs, height: 8 * fs, borderRadius: '50%', background: '#555', zIndex: 4 }} />
            <div style={{ position: 'absolute', top: 10 * fs, right: 10 * fs, width: 8 * fs, height: 8 * fs, borderRadius: '50%', background: '#555', zIndex: 4 }} />
            <div style={{ position: 'absolute', bottom: 10 * fs, left: 10 * fs, width: 8 * fs, height: 8 * fs, borderRadius: '50%', background: '#555', zIndex: 4 }} />
            <div style={{ position: 'absolute', bottom: 10 * fs, right: 10 * fs, width: 8 * fs, height: 8 * fs, borderRadius: '50%', background: '#555', zIndex: 4 }} />

            <div style={{ position: 'relative', zIndex: 3, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>

                <div style={{
                    background: '#eee',
                    padding: 30 * fs,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 20 * fs,
                    boxShadow: '0 5px 15px rgba(0,0,0,0.5)',
                    transform: 'rotate(-2deg)', // Sticker look
                    border: '1px solid #ccc'
                }}>

                    <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '2px solid #000', paddingBottom: 10 * fs }}>
                        <span style={{ fontSize: 14 * fs, fontFamily: stencilFont, fontWeight: 700, color: '#000' }}>ASSET TAG</span>
                        <ScanLine size={16 * fs} color="#000" />
                    </div>

                    <QRCodeImage url={WEBSITE_URL} size={qrSize} fgColor="#000000" bgColor="transparent" />

                    <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: 10 * fs, fontFamily: 'monospace', color: '#000', fontWeight: 700 }}>PROPERTY OF MONOATOM LABS</div>
                        <div style={{ fontSize: 8 * fs, color: '#666', fontFamily: 'monospace' }}>SCAN FOR INTEL & MANUAL</div>
                    </div>

                    {/* Barcode strip */}
                    <div style={{ height: 10 * fs, width: '100%', background: `repeating-linear-gradient(90deg, #000, #000 2px, #fff 2px, #fff 4px)` }} />

                </div>

            </div>
        </div>
    )
}
