import React, { useState } from 'react'

const C = '#64748B'

const STYLES = [
  { id: 'full-panel', name: 'Full Regulatory Panel' },
  { id: 'bottom-strip', name: 'Back Panel Bottom Strip' },
  { id: 'insert-card', name: 'Insert / Datasheet' },
]

export default function TechRegulatoryPanel() {
  const [style, setStyle] = useState('full-panel')

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Box Side Concepts — Regulatory</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Technical & Regulatory Panel</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          ISO 9001, ASTM G154 UV test, CE mark, address, contact — the mandatory back-of-box technical data. Three ways to lay it out professionally.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {STYLES.map(s => (
          <button key={s.id} onClick={() => setStyle(s.id)} style={{
            padding: '7px 14px', borderRadius: 6,
            border: `1px solid ${style === s.id ? C : '#1f1f1f'}`,
            background: style === s.id ? '#111' : 'transparent',
            color: style === s.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12,
          }}>{s.name}</button>
        ))}
      </div>

      {style === 'full-panel' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, overflow: 'hidden', maxWidth: 680 }}>
          {/* Top section */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderBottom: '1px solid #0a0a0a' }}>
            {/* Mfg details */}
            <div style={{ padding: '24px 28px', borderRight: '1px solid #0a0a0a' }}>
              <div style={{ color: '#2a2a2a', fontSize: 8, letterSpacing: '0.25em', marginBottom: 12 }}>MANUFACTURER</div>
              <div style={{ color: '#555', fontSize: 11, lineHeight: 1.8 }}>
                Monoatom Labs Pvt Ltd<br />
                3rd Floor, West Gujarat<br />
                Ahmedabad – 380015<br />
                Gujarat, India<br />
                <span style={{ color: '#333' }}>info@monoatomlabs.com</span><br />
                <span style={{ color: '#333' }}>+91 888 619 5800</span>
              </div>
            </div>

            {/* Test certifications */}
            <div style={{ padding: '24px 28px' }}>
              <div style={{ color: '#2a2a2a', fontSize: 8, letterSpacing: '0.25em', marginBottom: 12 }}>TESTED FOR</div>
              {[
                { test: 'UV Resistance', std: 'ASTM G154', pass: true },
                { test: 'Pencil Hardness', std: 'ASTM D3363', pass: true },
                { test: 'Contact Angle', std: 'ISO 15989', pass: true },
                { test: 'Chemical Resistance', std: 'ISO 2812-1', pass: true },
                { test: 'Thermal Stability', std: 'ISO 11357', pass: true },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 7 }}>
                  <span style={{ color: '#444', fontSize: 10 }}>{item.test}</span>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <span style={{ color: '#2a2a2a', fontSize: 9 }}>{item.std}</span>
                    <span style={{ color: '#1a6b1a', fontSize: 9 }}>✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ISO + swatch + marks row */}
          <div style={{ padding: '16px 28px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
              {/* ISO badge */}
              <div style={{ padding: '6px 12px', border: '1px solid #1a1a1a', borderRadius: 3, textAlign: 'center' }}>
                <div style={{ color: '#2a2a2a', fontSize: 8, letterSpacing: '0.2em' }}>ISO 9001:2015</div>
                <div style={{ color: '#1a1a1a', fontSize: 7, marginTop: 1 }}>CERTIFIED MFG</div>
              </div>
              {/* CE + Recycling marks */}
              <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                <span style={{ color: '#1a1a1a', fontSize: 20, fontWeight: 700 }}>CE</span>
                <span style={{ color: '#1a1a1a', fontSize: 16 }}>♻</span>
              </div>
            </div>

            {/* Swatch box */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 40, height: 40, background: '#1a1a1a', border: '1px solid #222', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 30, height: 30, background: 'linear-gradient(135deg, #666 0%, #ccc 50%, #666 100%)' }} />
              </div>
              <div>
                <div style={{ color: '#2a2a2a', fontSize: 8 }}>Premium Suede Cloth</div>
                <div style={{ color: '#1a1a1a', fontSize: 8 }}>Full NAIL wash resistant</div>
              </div>
            </div>

            <div style={{ color: '#1a1a1a', fontSize: 9, lineHeight: 1.6, textAlign: 'right' }}>
              For professional use only.<br />
              Store in cool, dry place.<br />
              Keep away from direct sunlight.
            </div>
          </div>
        </div>
      )}

      {style === 'bottom-strip' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 680 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Rajdhani, sans-serif' }}>Back Panel — Bottom Strip</div>

          {/* Strip — sits at very bottom of back panel */}
          <div style={{ borderTop: '1px solid #0a0a0a', paddingTop: 14, display: 'flex', gap: 20, alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: 2, minWidth: 200 }}>
              <div style={{ color: '#2a2a2a', fontSize: 8, letterSpacing: '0.2em', marginBottom: 6 }}>MANUFACTURED BY</div>
              <div style={{ color: '#333', fontSize: 9, lineHeight: 1.7 }}>
                Monoatom Labs Pvt Ltd · 3rd Floor, West Gujarat, Ahmedabad – 380015, India<br />
                info@monoatomlabs.com · +91 888 619 5800 · www.monoatomlabs.com
              </div>
            </div>
            <div style={{ flex: 1, minWidth: 140 }}>
              <div style={{ color: '#2a2a2a', fontSize: 8, letterSpacing: '0.2em', marginBottom: 6 }}>TESTED FOR</div>
              <div style={{ color: '#2a2a2a', fontSize: 9, lineHeight: 1.7 }}>
                UV Resistance – ASTM G154<br />
                Pencil Hardness – ASTM D3363
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, alignItems: 'center', paddingTop: 16 }}>
              <span style={{ color: '#1a1a1a', fontSize: 18, fontWeight: 700 }}>CE</span>
              <span style={{ color: '#1a1a1a', fontSize: 14 }}>♻</span>
              <div style={{ width: 28, height: 28, background: '#111', border: '1px solid #1a1a1a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ width: 20, height: 20, background: 'linear-gradient(135deg, #555 0%, #aaa 100%)' }} />
              </div>
            </div>
          </div>
          <div style={{ marginTop: 10, color: '#111', fontSize: 9 }}>
            For professional use only. Store in cool, dry place. Keep away from direct sunlight.
          </div>
        </div>
      )}

      {style === 'insert-card' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 500 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Rajdhani, sans-serif' }}>Technical Datasheet Insert</div>

          <div style={{ border: '1px solid #0d0d0d', padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 14, borderBottom: '1px solid #0a0a0a' }}>
              <div>
                <div style={{ color: 'white', fontSize: 16, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>CERAPHENE™</div>
                <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.2em' }}>TECHNICAL DATA SHEET</div>
              </div>
              <div style={{ color: '#1a1a1a', fontSize: 8, textAlign: 'right' }}>
                Batch: [BATCH-ID]<br />
                Date: [MFG-DATE]
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 16 }}>
              {[
                ['Product', 'CERAPHENE Graphene Ceramic Coating'],
                ['Hardness', '9H+ (ASTM D3363)'],
                ['Contact Angle', '115° (ISO 15989)'],
                ['Layer Thickness', '3–4 μm'],
                ['Chemical Range', 'pH 2–12'],
                ['Thermal', '700°C'],
                ['Durability', '4+ years field'],
                ['Coverage', '50ml / 1 vehicle'],
                ['Cure Time', '24hr initial · 7 day full'],
                ['Application Temp', '15–25°C'],
              ].map(([k, v], i) => (
                <div key={i} style={{ paddingBottom: 8, borderBottom: '1px solid #080808' }}>
                  <div style={{ color: '#2a2a2a', fontSize: 8, letterSpacing: '0.1em', marginBottom: 2 }}>{k.toUpperCase()}</div>
                  <div style={{ color: '#555', fontSize: 10 }}>{v}</div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: '1px solid #0a0a0a' }}>
              <div style={{ color: '#1a1a1a', fontSize: 8, lineHeight: 1.6 }}>
                Monoatom Labs Pvt Ltd · Ahmedabad, Gujarat<br />
                ISO 9001:2015 · CE ♻
              </div>
              <div style={{ display: 'flex', gap: 8, color: '#1a1a1a', fontSize: 8, textAlign: 'right' }}>
                <div>ASTM G154<br />UV Tested</div>
                <div>ASTM D3363<br />Hardness</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
