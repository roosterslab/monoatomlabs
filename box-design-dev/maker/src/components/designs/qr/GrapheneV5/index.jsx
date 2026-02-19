import React from 'react'
import QRCodeImage from '../../../studio/QRCodeImage'
import QRBase from '../../base/qr'
import { Layers } from 'lucide-react'

const C = '#64748B'
const WEBSITE_URL = 'https://www.monoatomlabs.com/products/ceraphene'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

// Horizontal layer stack — compact
const LAYERS = [
    { name: 'CERAPHENE', highlight: true },
    { name: 'CLEARCOAT' },
    { name: 'BASE COAT' },
    { name: 'PRIMER' },
    { name: 'STEEL' },
]

export default function QRPanel({ scale = 1, surf = DEFAULT_SURF }) {
    const fs = scale
    const qrSize = Math.round(52 * fs)

    return (
        <QRBase scale={scale} surf={surf}>

            {/* Corner marks */}
            {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h], i) => (
                <div key={i} style={{ position: 'absolute', [v]: 28 * fs, [h]: 28 * fs, width: 20 * fs, height: 20 * fs, borderTop: v === 'top' ? `1px solid ${C}50` : 'none', borderBottom: v === 'bottom' ? `1px solid ${C}50` : 'none', borderLeft: h === 'left' ? `1px solid ${C}50` : 'none', borderRight: h === 'right' ? `1px solid ${C}50` : 'none', zIndex: 3 }} />
            ))}

            <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: Math.round(18 * fs) }}>

                {/* Header */}
                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, justifyContent: 'center', marginBottom: 6 * fs }}>
                        <Layers size={18 * fs} color={C} strokeWidth={2} />
                        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 26 * fs, fontWeight: 800, letterSpacing: '0.12em', color: 'white' }}>LAYER ANALYSIS</div>
                    </div>
                    <div style={{ color: '#555', fontSize: 9 * fs, letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif", textTransform: 'uppercase' }}>Scan to view full coating cross-section</div>
                </div>

                {/* Mini layer stack */}
                <div style={{ display: 'flex', flexDirection: 'column', width: Math.round(180 * fs), gap: 0 }}>
                    {LAYERS.map((l, i) => (
                        <div key={i} style={{
                            padding: `${4 * fs}px ${10 * fs}px`, fontSize: 8 * fs,
                            fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.1em',
                            color: l.highlight ? 'white' : '#555',
                            background: l.highlight ? `rgba(100,116,139,0.2)` : 'transparent',
                            borderLeft: l.highlight ? `2px solid ${C}` : '2px solid transparent',
                            borderBottom: '1px solid rgba(255,255,255,0.04)'
                        }}>
                            {l.name}
                        </div>
                    ))}
                </div>

                {/* QR */}
                <div style={{ border: `1px solid ${C}30`, padding: 4 }}>
                    <QRCodeImage url={WEBSITE_URL} size={qrSize} />
                </div>

                <div style={{ color: '#444', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif" }}>monoatomlabs.com</div>
            </div>

        </QRBase>
    )
}
