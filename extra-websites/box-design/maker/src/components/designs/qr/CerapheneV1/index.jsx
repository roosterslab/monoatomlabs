import React from 'react'
import QRBase from '../../base/qr'
import QRCodeImage from '../../../studio/QRCodeImage'
import { CheckCircle2 } from 'lucide-react'

const PRODUCT_URL = 'https://www.monoatomlabs.com/products/ceraphene'

export default function QRCerapheneV1({ scale = 1, surf }) {
    const fs = scale

    return (
        <QRBase scale={scale} surf={surf}>
            <div style={{ position: 'absolute', inset: 0, padding: 32 * fs, zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>

                <div style={{ backgroundColor: '#fff', padding: 24 * fs, borderRadius: 16 * fs, boxShadow: '0 10px 30px rgba(0,0,0,0.5)', marginBottom: 24 * fs }}>
                    <QRCodeImage url={PRODUCT_URL} size={200 * fs} fgColor="#000" bgColor="#fff" />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, marginBottom: 16 * fs }}>
                    <CheckCircle2 size={16 * fs} color="#10b981" strokeWidth={2.5} />
                    <span style={{ color: '#10b981', fontSize: 10 * fs, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Inter', sans-serif" }}>Authentic Product</span>
                </div>

                <div style={{ marginBottom: 16 * fs }}>
                    <p style={{ color: '#fff', fontSize: 14 * fs, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 4 * fs, fontFamily: "'Inter', sans-serif" }}>Scan to Verify</p>
                    <p style={{ color: '#aaa', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif" }}>Access Batch QC, Lab Reports & SDS</p>
                </div>

                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '8px 16px', borderRadius: 99 * fs, border: '1px solid rgba(255,255,255,0.1)' }}>
                    <span style={{ color: '#666', fontSize: 9 * fs, fontFamily: "'JetBrains Mono', monospace" }}>www.monoatomlabs.com</span>
                </div>

            </div>
        </QRBase>
    )
}
