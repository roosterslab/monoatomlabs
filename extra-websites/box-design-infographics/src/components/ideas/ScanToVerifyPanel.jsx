import React, { useState } from 'react'

const C = '#64748B'
const BLUE = '#1E40AF'
const BLUE_LIGHT = '#3B82F6'

const BOX_CONTENTS = [
  { item: 'Batch Level QC Report', included: true },
  { item: 'Lab Test Certifications', included: true },
  { item: 'Lab Test Certificate', included: true },
  { item: 'Application Guide', included: true },
  { item: 'Safety Data Sheet', included: true },
  { item: 'Authenticity Verification', included: true },
  { item: 'Premium Suede Applicator', included: true },
  { item: 'Levelling Microfibre', included: true },
]

const STYLES = [
  { id: 'qr-primary', name: 'QR Primary (ref style)' },
  { id: 'auth-card', name: 'Auth Card Inset' },
  { id: 'minimal-qr', name: 'Minimal QR Strip' },
]

// Simple QR pattern SVG (visual approximation)
function FakeQR({ size }) {
  const cells = 25
  const cs = size / cells
  // Generate a pseudo-random but consistent QR-like grid
  const grid = Array.from({ length: cells }, (_, r) =>
    Array.from({ length: cells }, (_, c) => {
      // Corner squares
      if ((r < 7 && c < 7) || (r < 7 && c >= cells - 7) || (r >= cells - 7 && c < 7)) return true
      // Timing patterns
      if (r === 6 || c === 6) return (r + c) % 2 === 0
      // Random data
      return (r * 37 + c * 13 + r * c) % 3 !== 0
    })
  )

  return (
    <svg width={size} height={size} style={{ display: 'block' }}>
      <rect width={size} height={size} fill="white" />
      {grid.map((row, r) =>
        row.map((cell, c) =>
          cell ? <rect key={`${r}-${c}`} x={c * cs} y={r * cs} width={cs} height={cs} fill="black" /> : null
        )
      )}
    </svg>
  )
}

export default function ScanToVerifyPanel() {
  const [style, setStyle] = useState('qr-primary')
  const [showSwatch, setShowSwatch] = useState(true)

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Brand Widgets — Authentication</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Scan to Verify + Box Contents</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          QR panel that doubles as authentication + unboxing guide. "Scan to Verify" header, contents checklist, and optional swatch/sample. Three layout approaches.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap', alignItems: 'center' }}>
        {STYLES.map(s => (
          <button key={s.id} onClick={() => setStyle(s.id)} style={{
            padding: '7px 14px', borderRadius: 6,
            border: `1px solid ${style === s.id ? C : '#1f1f1f'}`,
            background: style === s.id ? '#111' : 'transparent',
            color: style === s.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12,
          }}>{s.name}</button>
        ))}
        <button onClick={() => setShowSwatch(!showSwatch)} style={{
          padding: '7px 14px', borderRadius: 6,
          border: `1px solid ${showSwatch ? C : '#1f1f1f'}`,
          background: 'transparent', color: showSwatch ? 'white' : '#555',
          cursor: 'pointer', fontSize: 12,
        }}>Swatch {showSwatch ? 'ON' : 'OFF'}</button>
      </div>

      {style === 'qr-primary' && (
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
          {/* Panel mockup — QR panel format 605×492 */}
          <div style={{ width: 380, background: '#030303', border: '1px solid #0d0d0d', borderRadius: 4, padding: 28, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
            {/* Blue top accent */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${BLUE}, ${BLUE_LIGHT}, ${BLUE})` }} />

            {/* Header */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ color: 'white', fontSize: 22, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em', marginBottom: 4 }}>SCAN TO VERIFY</div>
              <div style={{ color: '#2a2a2a', fontSize: 9, letterSpacing: '0.2em' }}>AUTHENTICITY · BATCH TRACEABILITY</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: `${showSwatch ? '1fr 100px' : '1fr 1fr'}`, gap: 20, alignItems: 'start' }}>
              {/* QR + URL */}
              <div>
                <div style={{ width: 120, height: 120, background: 'white', padding: 6, marginBottom: 10 }}>
                  <FakeQR size={108} />
                </div>
                <div style={{ color: '#444', fontSize: 9, marginBottom: 2 }}>Made by Monoatom Labs</div>
                <div style={{ color: '#333', fontSize: 9 }}>Visit: www.monoatomlabs.com</div>
              </div>

              {/* Contents list */}
              <div>
                <div style={{ color: C, fontSize: 9, letterSpacing: '0.2em', marginBottom: 10, fontFamily: 'Rajdhani, sans-serif' }}>BOX CONTAINS:</div>
                {BOX_CONTENTS.slice(0, showSwatch ? 6 : 8).map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 6, marginBottom: 7, alignItems: 'flex-start' }}>
                    <span style={{ color: BLUE_LIGHT, fontSize: 9, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <span style={{ color: '#555', fontSize: 10, lineHeight: 1.3 }}>{item.item}</span>
                  </div>
                ))}
              </div>
            </div>

            {showSwatch && (
              <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 48, height: 48, background: '#1a1a1a', border: '1px solid #2a2a2a', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 36, height: 36, background: 'linear-gradient(135deg, #888 0%, #ccc 50%, #888 100%)', borderRadius: 1 }} />
                </div>
                <div>
                  <div style={{ color: '#444', fontSize: 9, marginBottom: 2 }}>Product Swatch · Premium Suede</div>
                  <div style={{ color: '#2a2a2a', fontSize: 9 }}>UV tested: ASTM G154</div>
                </div>
              </div>
            )}
          </div>

          {/* Notes */}
          <div style={{ flex: 1, minWidth: 200 }}>
            <div style={{ color: '#333', fontSize: 10, letterSpacing: '0.2em', marginBottom: 12 }}>STRATEGY NOTES</div>
            {[
              { label: 'Scan to Verify', note: 'QR links to batch-specific page — real-time authentication, anti-counterfeit.' },
              { label: 'Contents checklist', note: 'Box contents list builds perceived value before opening. Customers know exactly what they\'re getting.' },
              { label: 'Swatch', note: 'Felt/suede swatch allows tactile product preview. Premium positioning signal.' },
              { label: 'Blue accent', note: 'Blue suggests trust, technology, precision. Works well on dark matte box.' },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: 12, paddingBottom: 12, borderBottom: '1px solid #0a0a0a' }}>
                <div style={{ color: C, fontSize: 11, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, marginBottom: 3 }}>{item.label}</div>
                <div style={{ color: '#444', fontSize: 11, lineHeight: 1.5 }}>{item.note}</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {style === 'auth-card' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 560 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Rajdhani, sans-serif' }}>Authentication Insert Card</div>

          {/* Card shape with notch */}
          <div style={{ position: 'relative', width: 320, background: '#030303', border: '1px solid #111', padding: '28px 24px' }}>
            {/* Top notch suggestion */}
            <div style={{ position: 'absolute', top: -1, left: '50%', transform: 'translateX(-50%)', width: 40, height: 10, background: '#050505', border: '1px solid #111', borderTop: 'none', borderRadius: '0 0 20px 20px' }} />

            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <div style={{ color: 'white', fontSize: 20, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.1em' }}>CERAPHENE™</div>
              <div style={{ color: BLUE_LIGHT, fontSize: 9, letterSpacing: '0.2em', marginTop: 4 }}>9H+ GRAPHENE SHIELD TECHNOLOGY</div>
              {/* Silver strip */}
              <div style={{ height: 18, background: 'linear-gradient(90deg, #333 0%, #999 30%, #ddd 50%, #999 70%, #333 100%)', margin: '12px 0', borderRadius: 2 }} />
            </div>

            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginBottom: 16 }}>
              <FakeQR size={80} />
              <div style={{ flex: 1 }}>
                {BOX_CONTENTS.slice(0, 5).map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 6, marginBottom: 5 }}>
                    <span style={{ color: BLUE_LIGHT, fontSize: 8 }}>✓</span>
                    <span style={{ color: '#444', fontSize: 9 }}>{item.item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ textAlign: 'center', borderTop: '1px solid #0d0d0d', paddingTop: 12 }}>
              <div style={{ color: '#2a2a2a', fontSize: 8 }}>Made by Monoatom Labs · www.monoatomlabs.com</div>
            </div>
          </div>
        </div>
      )}

      {style === 'minimal-qr' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 600 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Rajdhani, sans-serif' }}>Minimal QR Strip — Back Panel Bottom</div>

          {/* Strip format — goes at bottom of back panel */}
          <div style={{ borderTop: '1px solid #111', paddingTop: 16, display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ width: 64, height: 64, background: 'white', padding: 4 }}>
              <FakeQR size={56} />
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#444', fontSize: 10, marginBottom: 4 }}>Scan to verify authenticity · Access batch QC report · Application guides</div>
              <div style={{ color: '#2a2a2a', fontSize: 9 }}>www.monoatomlabs.com/verify · Made by Monoatom Labs, iHub Gujarat, Ahmedabad</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ color: '#2a2a2a', fontSize: 9, marginBottom: 4 }}>CE ♻</div>
              <div style={{ color: '#1a1a1a', fontSize: 8 }}>For professional use only</div>
            </div>
          </div>

          <div style={{ marginTop: 20, padding: 14, background: '#080808', border: '1px solid #111', borderRadius: 6 }}>
            <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.15em', marginBottom: 6 }}>WHY THIS WORKS</div>
            <div style={{ color: '#444', fontSize: 11, lineHeight: 1.6 }}>
              Bottom strip QR is always visible regardless of shelf orientation. Minimal format doesn't compete with main panel content. Professional/clinical aesthetic.
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
