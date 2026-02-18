import React from 'react'
import QRCodeImage from '../../../studio/QRCodeImage'
import QRBase from '../../base/qr'
import { Shield, CloudRain, Bug, Disc, Flame, Wind, Zap, Sun, Droplets } from 'lucide-react'

const C = '#64748B'
const WEBSITE_URL = 'https://www.monoatomlabs.com/products/ceraphene'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const THREAT_ICONS = [CloudRain, Bug, Disc, Flame, Wind, Zap, Sun, Droplets, Shield]

export default function QRPanel({ scale = 1, surf = DEFAULT_SURF }) {
    const fs = scale
    const qrSize = Math.round(52 * fs)

    return (
        <QRBase scale={scale} surf={surf}>

            {/* Corner marks */}
            {[['top', 'left'], ['top', 'right'], ['bottom', 'left'], ['bottom', 'right']].map(([v, h], i) => (
                <div key={i} style={{ position: 'absolute', [v]: 28 * fs, [h]: 28 * fs, width: 20 * fs, height: 20 * fs, borderTop: v === 'top' ? `1px solid ${C}40` : 'none', borderBottom: v === 'bottom' ? `1px solid ${C}40` : 'none', borderLeft: h === 'left' ? `1px solid ${C}40` : 'none', borderRight: h === 'right' ? `1px solid ${C}40` : 'none', zIndex: 3 }} />
            ))}

            <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: Math.round(14 * fs) }}>

                <div style={{ textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8 * fs, justifyContent: 'center', marginBottom: 6 * fs }}>
                        <Shield size={18 * fs} color={C} strokeWidth={2} />
                        <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 26 * fs, fontWeight: 800, letterSpacing: '0.12em', color: 'white' }}>ZERO DAMAGE</div>
                    </div>
                    <div style={{ color: '#444', fontSize: 9 * fs, letterSpacing: '0.12em', fontFamily: "'Inter', sans-serif", lineHeight: 1.6, maxWidth: 180 * fs, textAlign: 'center' }}>
                        9 threats. Comprehensive protection. Scan to learn more.
                    </div>
                </div>

                {/* 3×3 threat icon grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 * fs }}>
                    {THREAT_ICONS.map((Icon, i) => (
                        <div key={i} style={{ width: 28 * fs, height: 28 * fs, border: `1px solid ${C}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 4 * fs }}>
                            <Icon size={Math.round(14 * fs)} color={C} strokeWidth={1.5} />
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
