import React from 'react'
import SurfaceBg from '../../../studio/SurfaceBg'
import QRCodeImage from '../../../studio/QRCodeImage'
import { Scan, Smartphone, ChevronRight } from 'lucide-react'

const C = '#06b6d4'
const C_DARK = '#050505'
const DEFAULT_SURF = { time: 3200, bg: 'wave' }

const WEBSITE_URL = 'https://www.monoatomlabs.com/products/hd-g-pe'

export default function QRPanel({ scale = 1, surf = DEFAULT_SURF }) {
  const W = Math.round(605 * scale)
  const H = Math.round(492 * scale)
  const fs = scale
  const qrSize = Math.round(180 * fs)

  return (
    <div style={{ width: W, height: H, backgroundColor: C_DARK, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', flexShrink: 0, userSelect: 'none', color: 'white' }}>
      <SurfaceBg surf={surf} />

      {/* Corner frame */}
      <div style={{ position: 'absolute', inset: 30 * fs, border: '1px solid rgba(255,255,255,0.05)', zIndex: 2 }} />
      <div style={{ position: 'absolute', top: 30 * fs, left: 30 * fs, width: 24 * fs, height: 24 * fs, borderTop: `2px solid ${C}`, borderLeft: `2px solid ${C}`, zIndex: 3 }} />
      <div style={{ position: 'absolute', top: 30 * fs, right: 30 * fs, width: 24 * fs, height: 24 * fs, borderTop: `2px solid ${C}`, borderRight: `2px solid ${C}`, zIndex: 3 }} />
      <div style={{ position: 'absolute', bottom: 30 * fs, left: 30 * fs, width: 24 * fs, height: 24 * fs, borderBottom: `2px solid ${C}`, borderLeft: `2px solid ${C}`, zIndex: 3 }} />
      <div style={{ position: 'absolute', bottom: 30 * fs, right: 30 * fs, width: 24 * fs, height: 24 * fs, borderBottom: `2px solid ${C}`, borderRight: `2px solid ${C}`, zIndex: 3 }} />

      <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: Math.round(28 * fs) }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10 * fs, marginBottom: 8 * fs }}>
            <Scan size={22 * fs} color={C} strokeWidth={2.5} />
            <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 32 * fs, fontWeight: 800, letterSpacing: '0.1em' }}>DIGITAL PASSPORT</div>
          </div>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 12 * fs, color: '#999', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>
            Authentication & Support Gateway
          </div>
        </div>

        <div style={{ position: 'relative', boxShadow: `0 0 50px rgba(6, 182, 212, 0.2)`, border: '1px solid #333', padding: 4 }}>
          <QRCodeImage url={WEBSITE_URL} size={qrSize} />
          <div style={{ position: 'absolute', left: -24, right: -24, height: 3, background: C, boxShadow: `0 0 20px ${C}`, top: '50%', opacity: 0.8 }} />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 14 * fs, background: 'rgba(255,255,255,0.08)', padding: '12px 24px', borderRadius: 99, border: '1px solid rgba(255,255,255,0.1)' }}>
          <Smartphone size={18 * fs} color="#fff" />
          <div style={{ textAlign: 'left' }}>
            <div style={{ color: 'white', fontSize: 14 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.05em', lineHeight: 1 }}>Scan to Access</div>
            <div style={{ color: '#bbb', fontSize: 10 * fs, fontFamily: "'Inter', sans-serif", fontWeight: 500, marginTop: 4 }}>Dosage Calculator • Technical Specs</div>
          </div>
          <ChevronRight size={18 * fs} color="#888" />
        </div>
      </div>
    </div>
  )
}
