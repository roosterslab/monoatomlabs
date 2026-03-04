import React from 'react'
import QRCodeImage from '../../../studio/QRCodeImage'
import QRBase from '../../base/qr'
import { BarChart3 } from 'lucide-react'

const C = '#64748B'
const WEBSITE_URL = 'https://www.monoatomlabs.com/products/ceraphene'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const STATS = [
    { label: 'Hardness', val: '9H+', bar: 95 },
    { label: 'Heat Shield', val: '700°C', bar: 90 },
    { label: 'Hydrophobic', val: '115°', bar: 98 },
    { label: 'Durability', val: '4+ Yrs', bar: 85 },
]

export default function QRPanel({ scale = 1, surf = DEFAULT_SURF }) {
    const fs = scale
    const qrSize = Math.round(50 * fs)
    const barW = Math.round(160 * fs)

    return (
        <QRBase scale={scale} surf={surf}>

            {/* Corner ticks */}
            {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h], i) => (
                <div key={i} style={{ position: 'absolute', [v]: 28 * fs, [h]: 28 * fs, width: 20 * fs, height: 20 * fs, borderTop: v === 'top' ? `1px solid ${C}40` : 'none', borderBottom: v === 'bottom' ? `1px solid ${C}40` : 'none', borderLeft: h === 'left' ? `1px solid ${C}40` : 'none', borderRight: h === 'right' ? `1px solid ${C}40` : 'none', zIndex: 3 }} />
            ))}

            <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: Math.round(16 * fs) }}>

                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, justifyContent: 'center', marginBottom: 4 * fs }}>
                        <BarChart3 size={18 * fs} color={C} strokeWidth={2} />
                        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 26 * fs, fontWeight: 800, letterSpacing: '0.12em', color: 'white' }}>TEST DATA</div>
                    </div>
                    <div style={{ color: '#555', fontSize: 9 * fs, letterSpacing: '0.2em', fontFamily: "'Rajdhani', sans-serif" }}>SCAN FOR FULL REPORT</div>
                </div>

                {/* Mini bar chart */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 * fs, width: barW }}>
                    {STATS.map((s, i) => (
                        <div key={i}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 3 * fs }}>
                                <span style={{ color: '#666', fontSize: 8 * fs, fontFamily: "'Inter', sans-serif" }}>{s.label}</span>
                                <span style={{ color: 'white', fontSize: 8 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif" }}>{s.val}</span>
                            </div>
                            <div style={{ height: 2, background: 'rgba(255,255,255,0.06)', borderRadius: 1 }}>
                                <div style={{ width: `${s.bar}%`, height: '100%', background: C, borderRadius: 1 }} />
                            </div>
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
