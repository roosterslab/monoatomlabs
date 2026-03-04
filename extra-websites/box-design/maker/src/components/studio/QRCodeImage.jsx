import React from 'react'

/**
 * Shared QR code renderer used by all QR panel designs.
 * Designs import this and focus only on their layout.
 * Uses api.qrserver.com to avoid heavy client-side dependencies.
 *
 * @param {{ url: string, size: number, fgColor?: string, bgColor?: string }} props
 */
export default function QRCodeImage({ url, size, fgColor = '#ffffff', bgColor = '#000000' }) {
  const encoded = encodeURIComponent(url || 'https://monoatomlabs.com')
  const color = fgColor.replace('#', '')
  const bg = bgColor.replace('#', '')

  const src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encoded}&format=png&color=${color}&bgcolor=${bg}&ecc=M`

  return (
    <div style={{ background: bgColor, padding: 8, borderRadius: 4, display: 'inline-block' }}>
      <img
        src={src}
        alt="QR Code"
        width={size}
        height={size}
        style={{ display: 'block', imageRendering: 'pixelated' }}
      />
    </div>
  )
}
