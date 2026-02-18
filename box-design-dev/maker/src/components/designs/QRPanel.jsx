import React from 'react'
import HexagonWave from '../brand/HexagonWave'

const C_TEAL = '#2de2c8'
const C_DARK = '#0a0a0a'

function HexBg({ time }) {
  return (
    <>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4, zIndex: 0 }}>
        <HexagonWave className="" time={time} />
      </div>
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.9) 100%)',
      }} />
    </>
  )
}

function QRCodeImage({ url, size }) {
  const encoded = encodeURIComponent(url || 'https://monoatomlabs.com')
  const src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encoded}&format=png&color=ffffff&bgcolor=000000&ecc=M`
  return (
    <img
      src={src}
      alt="QR Code"
      width={size}
      height={size}
      style={{
        imageRendering: 'pixelated',
        border: `1px solid ${C_TEAL}`,
        padding: 4,
        borderRadius: 4,
        background: 'rgba(45, 226, 200, 0.1)'
      }}
    />
  )
}

// =============================================
//  QR PANEL — 6.303" × 5.123"
// =============================================
const WEBSITE_URL = 'https://www.monoatomlabs.com/products/ceraphene'

export default function QRPanel({ scale = 1, hexTime }) {
  const W = Math.round(605 * scale)
  const H = Math.round(492 * scale)
  const fs = scale
  const qrSize = Math.round(180 * fs)

  return (
    <div
      style={{
        width: W,
        height: H,
        backgroundColor: C_DARK,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexShrink: 0,
        userSelect: 'none',
        color: 'white'
      }}
    >
      <HexBg time={hexTime} />

      {/* Frame Elements */}
      <div style={{ position: 'absolute', inset: 20 * fs, border: '1px solid rgba(255,255,255,0.1)', zIndex: 2 }} />
      <div style={{ position: 'absolute', top: 20 * fs, left: 20 * fs, width: 20 * fs, height: 20 * fs, borderTop: `2px solid ${C_TEAL}`, borderLeft: `2px solid ${C_TEAL}`, zIndex: 3 }} />
      <div style={{ position: 'absolute', bottom: 20 * fs, right: 20 * fs, width: 20 * fs, height: 20 * fs, borderBottom: `2px solid ${C_TEAL}`, borderRight: `2px solid ${C_TEAL}`, zIndex: 3 }} />

      {/* QR code + text stack */}
      <div style={{ position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: Math.round(20 * fs) }}>

        {/* Header */}
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 24 * fs, fontWeight: 700, letterSpacing: '0.1em' }}>
            DIGITAL PASSPORT
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 10 * fs, color: C_TEAL, letterSpacing: '0.2em', marginTop: 4 * fs }}>
            AUTHENTICATE PRODUCT
          </div>
        </div>

        {/* QR code box */}
        <div style={{ position: 'relative' }}>
          <QRCodeImage url={WEBSITE_URL} size={qrSize} />
          {/* Scan animation line */}
          <div style={{
            position: 'absolute', left: 0, right: 0, height: 2, background: C_TEAL, boxShadow: `0 0 10px ${C_TEAL}`,
            top: '50%', opacity: 0.8
          }} />
        </div>

        {/* Instructions */}
        <div style={{ textAlign: 'center', color: '#888', fontFamily: "'Inter', sans-serif", fontSize: 11 * fs, lineHeight: 1.5, maxWidth: 250 * fs }}>
          Scan to access professional application guide,<br />warranty registration, and support.
        </div>

      </div>
    </div>
  )
}
