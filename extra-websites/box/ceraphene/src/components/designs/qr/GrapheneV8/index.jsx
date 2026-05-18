import React from 'react'
import QRCodeImage from '../../../studio/QRCodeImage'
import QRBase from '../../base/qr'
import { Shield } from 'lucide-react'

const C = '#64748B'
const WEBSITE_URL = 'https://www.monoatomlabs.com/products/ceraphene'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

function HexMiniQR({ W, H, r = 12 }) {
    const dx = r * 1.5
    const dy = r * Math.sqrt(3)
    const cols = Math.ceil(W / dx) + 2
    const rows = Math.ceil(H / dy) + 2
    const hexes = []
    for (let row = -1; row < rows; row++) {
        for (let col = -1; col < cols; col++) {
            const cx = col * dx + (row % 2 === 1 ? dx * 0.5 : 0)
            const cy = row * dy
            const pts = Array.from({ length: 6 }, (_, i) => {
                const a = (i * 60 + 30) * Math.PI / 180
                return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`
            }).join(' ')
            hexes.push(<polygon key={`${row}-${col}`} points={pts} fill="none" stroke={C} strokeWidth="0.5" opacity="0.07" />)
        }
    }
    return (
        <svg style={{ position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none' }} width={W} height={H}>
            {hexes}
        </svg>
    )
}

export default function QRPanel({ scale = 1, surf = DEFAULT_SURF }) {
    const fs = scale
    const qrSize = Math.round(52 * fs)
    const W = Math.round(605 * scale)
    const H = Math.round(492 * scale)

    return (
        <QRBase scale={scale} surf={surf}>
            <HexMiniQR W={W} H={H} r={Math.round(12 * fs)} />

            {/* Corner marks */}
            {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h], i) => (
                <div key={i} style={{ position: 'absolute', [v]: 28 * fs, [h]: 28 * fs, width: 20 * fs, height: 20 * fs, borderTop: v === 'top' ? `1px solid ${C}40` : 'none', borderBottom: v === 'bottom' ? `1px solid ${C}40` : 'none', borderLeft: h === 'left' ? `1px solid ${C}40` : 'none', borderRight: h === 'right' ? `1px solid ${C}40` : 'none', zIndex: 3 }} />
            ))}

            <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: Math.round(16 * fs) }}>

                <div style={{ textAlign: 'center' }}>
                    <Shield size={Math.round(26 * fs)} color={C} strokeWidth={1.5} style={{ marginBottom: 8 * fs }} />
                    <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 26 * fs, fontWeight: 800, letterSpacing: '0.12em', color: 'white' }}>INVISIBLE SHIELD</div>
                    <div style={{ color: '#444', fontSize: 9 * fs, letterSpacing: '0.12em', fontFamily: "'Inter', sans-serif", lineHeight: 1.6, maxWidth: 180 * fs, textAlign: 'center', marginTop: 4 * fs }}>
                        3–4 microns of graphene-ceramic protection. Scan to learn the science.
                    </div>
                </div>

                {/* Scale comparison micro */}
                <div style={{ display: 'flex', gap: 20 * fs, alignItems: 'center' }}>
                    {[{ label: 'Human Hair', val: '70 μm', dim: true }, { label: 'CERAPHENE', val: '3–4 μm', dim: false }].map((item, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ color: item.dim ? '#555' : 'white', fontSize: 13 * fs, fontWeight: 800, fontFamily: "'Rajdhani', sans-serif" }}>{item.val}</div>
                            <div style={{ color: '#444', fontSize: 7.5 * fs, fontFamily: "'Inter', sans-serif" }}>{item.label}</div>
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
