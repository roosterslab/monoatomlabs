import React from 'react'
import QRCodeImage from '../../../studio/QRCodeImage'
import QRBase from '../../base/qr'
import { Droplets } from 'lucide-react'

const C = '#64748B'
const WEBSITE_URL = 'https://www.monoatomlabs.com/products/ceraphene'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

export default function QRPanel({ scale = 1, surf = DEFAULT_SURF }) {
    const fs = scale
    const qrSize = Math.round(52 * fs)
    const panelW = Math.round(605 * scale)
    const panelH = Math.round(492 * scale)

    return (
        <QRBase scale={scale} surf={surf}>

            {/* Corner marks */}
            {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h], i) => (
                <div key={i} style={{ position: 'absolute', [v]: 28 * fs, [h]: 28 * fs, width: 20 * fs, height: 20 * fs, borderTop: v === 'top' ? `1px solid ${C}40` : 'none', borderBottom: v === 'bottom' ? `1px solid ${C}40` : 'none', borderLeft: h === 'left' ? `1px solid ${C}40` : 'none', borderRight: h === 'right' ? `1px solid ${C}40` : 'none', zIndex: 3 }} />
            ))}

            <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: Math.round(14 * fs) }}>

                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, justifyContent: 'center', marginBottom: 6 * fs }}>
                        <Droplets size={18 * fs} color={C} strokeWidth={2} />
                        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 26 * fs, fontWeight: 800, letterSpacing: '0.12em', color: 'white' }}>WATER SCIENCE</div>
                    </div>
                    <div style={{ color: '#444', fontSize: 9 * fs, letterSpacing: '0.12em', fontFamily: "'Inter', sans-serif", lineHeight: 1.6, maxWidth: 180 * fs, textAlign: 'center' }}>
                        115° superhydrophobic contact angle. Independently tested. Scan to verify.
                    </div>
                </div>

                {/* SVG bead comparison */}
                <svg width={panelW * 0.5} height={40 * fs}>
                    {(() => {
                        const totalW = panelW * 0.5
                        const sy = 35 * fs
                        // Left bead: 40°
                        const r1 = 26 * fs, θ1 = 40 * Math.PI / 180
                        const cx1 = totalW * 0.25
                        const hw1 = r1 * Math.sin(θ1)
                        // Right bead: 115°
                        const r2 = 26 * fs, θ2 = 115 * Math.PI / 180
                        const cx2 = totalW * 0.75
                        const hw2 = r2 * Math.sin(θ2)
                        return (
                            <g>
                                <line x1={0} y1={sy} x2={totalW} y2={sy} stroke="#333" strokeWidth={1 * fs} />
                                {/* Left flat bead */}
                                <path d={`M ${cx1 - hw1},${sy} A ${r1},${r1} 0 0 1 ${cx1 + hw1},${sy}`} fill={`${C}15`} stroke="#555" strokeWidth={1 * fs} />
                                <text x={cx1} y={sy - hw1 * 0.5} fill="#555" fontSize={8 * fs} textAnchor="middle" fontFamily="'Rajdhani', sans-serif">40°</text>
                                {/* Right tall bead */}
                                <path d={`M ${cx2 - hw2},${sy} A ${r2},${r2} 0 0 1 ${cx2 + hw2},${sy}`} fill={`${C}25`} stroke={C} strokeWidth={1 * fs} />
                                <text x={cx2} y={sy - r2 * 0.8} fill="white" fontSize={10 * fs} textAnchor="middle" fontFamily="'Rajdhani', sans-serif" fontWeight="800">115°</text>
                            </g>
                        )
                    })()}
                </svg>

                <div style={{ border: `1px solid ${C}30`, padding: 4 }}>
                    <QRCodeImage url={WEBSITE_URL} size={qrSize} />
                </div>

                <div style={{ color: '#444', fontSize: 8 * fs, letterSpacing: '0.15em', fontFamily: "'Inter', sans-serif" }}>monoatomlabs.com</div>
            </div>

        </QRBase>
    )
}
