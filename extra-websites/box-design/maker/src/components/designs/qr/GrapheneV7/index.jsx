import React from 'react'
import QRCodeImage from '../../../studio/QRCodeImage'
import QRBase from '../../base/qr'
import { BookOpen } from 'lucide-react'

const C = '#64748B'
const WEBSITE_URL = 'https://www.monoatomlabs.com/products/ceraphene'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

export default function QRPanel({ scale = 1, surf = DEFAULT_SURF }) {
    const fs = scale
    const qrSize = Math.round(52 * fs)

    return (
        <QRBase scale={scale} surf={surf}>

            {/* Corner marks */}
            {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h], i) => (
                <div key={i} style={{ position: 'absolute', [v]: 28 * fs, [h]: 28 * fs, width: 20 * fs, height: 20 * fs, borderTop: v === 'top' ? `1px solid ${C}40` : 'none', borderBottom: v === 'bottom' ? `1px solid ${C}40` : 'none', borderLeft: h === 'left' ? `1px solid ${C}40` : 'none', borderRight: h === 'right' ? `1px solid ${C}40` : 'none', zIndex: 3 }} />
            ))}

            <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: Math.round(20 * fs) }}>

                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, justifyContent: 'center', marginBottom: 6 * fs }}>
                        <BookOpen size={18 * fs} color={C} strokeWidth={2} />
                        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 26 * fs, fontWeight: 800, letterSpacing: '0.12em', color: 'white' }}>THE CHRONICLE</div>
                    </div>
                    <div style={{ color: '#444', fontSize: 9 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif", lineHeight: 1.6, maxWidth: 180 * fs, textAlign: 'center' }}>
                        From the Nobel Prize laboratory to your vehicle. Scan to read the full story.
                    </div>
                </div>

                {/* Mini timeline */}
                <div style={{ display: 'flex', gap: 16 * fs, alignItems: 'flex-start' }}>
                    {['2004', '2010', '2024'].map((yr, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ color: i === 2 ? 'white' : '#555', fontSize: 11 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif" }}>{yr}</div>
                            <div style={{ width: 1, height: 12 * fs, background: C, opacity: 0.4, margin: '3px auto' }} />
                            <div style={{ width: 5 * fs, height: 5 * fs, borderRadius: '50%', background: i === 2 ? 'white' : C, margin: '0 auto' }} />
                        </div>
                    ))}
                </div>

                <div style={{ border: `1px solid ${C}30`, padding: 4 }}>
                    <QRCodeImage url={WEBSITE_URL} size={qrSize} />
                </div>

                <div style={{ color: '#444', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif" }}>monoatomlabs.com</div>
            </div>

        </QRBase>
    )
}
