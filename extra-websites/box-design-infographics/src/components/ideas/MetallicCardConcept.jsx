import React, { useState } from 'react'

const C = '#64748B'

const STYLES = [
  { id: 'auth-card', name: 'Authentication Card' },
  { id: 'insert-flat', name: 'Flat Insert' },
  { id: 'seal-sticker', name: 'Seal / Hologram' },
]

const FOIL_VARIANTS = [
  { id: 'silver', label: 'Silver', gradient: 'linear-gradient(90deg, #444 0%, #bbb 25%, #eee 50%, #bbb 75%, #444 100%)' },
  { id: 'gold', label: 'Gold', gradient: 'linear-gradient(90deg, #6b4800 0%, #c8941a 25%, #f5d060 50%, #c8941a 75%, #6b4800 100%)' },
  { id: 'blue', label: 'Blue Holographic', gradient: 'linear-gradient(90deg, #1e3a8a 0%, #3b82f6 25%, #93c5fd 50%, #3b82f6 75%, #1e3a8a 100%)' },
  { id: 'graphene', label: 'Graphene (dark)', gradient: 'linear-gradient(90deg, #111 0%, #333 25%, #555 50%, #333 75%, #111 100%)' },
]

function FoilStrip({ gradient, height = 18 }) {
  return (
    <div style={{
      height, background: gradient,
      borderRadius: 2, position: 'relative', overflow: 'hidden',
    }}>
      {/* Sheen sweep */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: '30%', width: '20%',
        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
        pointerEvents: 'none',
      }} />
    </div>
  )
}

export default function MetallicCardConcept() {
  const [style, setStyle] = useState('auth-card')
  const [foil, setFoil] = useState('silver')

  const currentFoil = FOIL_VARIANTS.find(f => f.id === foil)

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Brand Widgets — Physical Inserts</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Metallic Card & Seal Concepts</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          The shaped authentication card with metallic foil strip from the reference image. Plus seal sticker and flat insert alternatives. Switch foil finish to preview variants.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 16, marginBottom: 28, flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 6 }}>
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
        <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
          <span style={{ color: '#444', fontSize: 11 }}>Foil:</span>
          {FOIL_VARIANTS.map(f => (
            <button key={f.id} onClick={() => setFoil(f.id)} style={{
              padding: '4px 10px', borderRadius: 4, fontSize: 10,
              border: `1px solid ${foil === f.id ? C : '#1a1a1a'}`,
              background: 'transparent', color: foil === f.id ? 'white' : '#555',
              cursor: 'pointer',
            }}>{f.label}</button>
          ))}
        </div>
      </div>

      {style === 'auth-card' && (
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', alignItems: 'flex-start' }}>
          {/* Card shape — with notch cut at top */}
          <div style={{ flexShrink: 0 }}>
            <div style={{ color: '#333', fontSize: 10, marginBottom: 10 }}>Authentication card (shaped die-cut)</div>
            <div style={{ position: 'relative', width: 260 }}>
              {/* Main card body */}
              <div style={{
                background: '#030303', border: '1px solid #111',
                padding: '24px 20px 20px',
                clipPath: 'polygon(0 0, 42% 0, 42% 8%, 58% 8%, 58% 0, 100% 0, 100% 100%, 0 100%)',
              }}>
                {/* Notch visual indicator */}
                <div style={{ height: 12 }} />

                {/* Top section */}
                <div style={{ textAlign: 'center', marginBottom: 16 }}>
                  <div style={{ color: 'white', fontSize: 24, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.06em', marginBottom: 2 }}>
                    CERAPHENE<sup style={{ fontSize: 10 }}>™</sup>
                  </div>
                  <div style={{ color: '#444', fontSize: 8, letterSpacing: '0.2em' }}>9H+ GRAPHENE SHIELD TECHNOLOGY</div>
                </div>

                {/* Metallic foil strip */}
                <div style={{ marginBottom: 16 }}>
                  <FoilStrip gradient={currentFoil.gradient} height={20} />
                </div>

                {/* Content area */}
                <div style={{ display: 'flex', gap: 12, marginBottom: 14 }}>
                  {/* Mini QR placeholder */}
                  <div style={{ width: 60, height: 60, background: 'white', padding: 3, flexShrink: 0 }}>
                    <div style={{ width: '100%', height: '100%', display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 0 }}>
                      {Array.from({ length: 49 }, (_, i) => (
                        <div key={i} style={{ background: ((i * 7 + i) % 3 === 0 || i < 7 || i > 41) ? 'black' : 'transparent', border: 'none' }} />
                      ))}
                    </div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: '#444', fontSize: 8, marginBottom: 4 }}>Box Contains:</div>
                    {['QC Report', 'Lab Certificate', 'App Guide', 'Safety Sheet'].map((item, i) => (
                      <div key={i} style={{ display: 'flex', gap: 4, marginBottom: 3 }}>
                        <span style={{ color: '#3B82F6', fontSize: 7 }}>✓</span>
                        <span style={{ color: '#333', fontSize: 8 }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <div style={{ borderTop: '1px solid #0a0a0a', paddingTop: 10, textAlign: 'center' }}>
                  <div style={{ color: '#1a1a1a', fontSize: 8 }}>Made by Monoatom Labs · www.monoatomlabs.com</div>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div style={{ flex: 1, minWidth: 220 }}>
            <div style={{ color: '#333', fontSize: 10, letterSpacing: '0.2em', marginBottom: 16 }}>NOTES</div>
            {[
              { label: 'Die-cut notch', note: 'Notch at top makes the card feel like a boarding pass or product key — premium tech artifact feeling.' },
              { label: `${currentFoil.label} foil strip`, note: 'Metallic foil strip is both decorative and functional — it\'s the "seal" element. Silver = trust. Gold = luxury. Blue holographic = tech.' },
              { label: 'Inside the box', note: 'Card sits on top of the product bottle. First thing you see when opening. Creates unboxing ritual.' },
              { label: 'QR on card', note: 'Unique per-batch QR links to live authentication page — anti-counterfeit, batch traceability.' },
            ].map((item, i) => (
              <div key={i} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid #0a0a0a' }}>
                <div style={{ color: C, fontSize: 11, fontFamily: 'Rajdhani, sans-serif', fontWeight: 700, marginBottom: 4 }}>{item.label}</div>
                <div style={{ color: '#444', fontSize: 11, lineHeight: 1.5 }}>{item.note}</div>
              </div>
            ))}

            {/* Foil cost note */}
            <div style={{ padding: 12, background: '#080808', border: '1px solid #111', borderRadius: 6 }}>
              <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.15em', marginBottom: 6 }}>PRINT COST</div>
              <div style={{ color: '#444', fontSize: 11, lineHeight: 1.6 }}>
                Cold foil strip on 300gsm card stock: ₹8–15 per card at 1,000 pcs. Die-cut: ₹3–5 extra. Full cost: ₹12–20/unit. High-ROI premium touchpoint.
              </div>
            </div>
          </div>
        </div>
      )}

      {style === 'insert-flat' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 560 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 20 }}>Flat Insert — No Die Cut</div>

          <div style={{ width: 320, background: '#030303', border: '1px solid #111', padding: '20px 20px' }}>
            <div style={{ marginBottom: 12 }}>
              <FoilStrip gradient={currentFoil.gradient} height={8} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
              <div>
                <div style={{ color: 'white', fontSize: 18, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.04em' }}>CERAPHENE<sup style={{ fontSize: 8 }}>™</sup></div>
                <div style={{ color: '#333', fontSize: 7, letterSpacing: '0.2em' }}>GRAPHENE CERAMIC COATING</div>
              </div>
              <div style={{ color: '#1a1a1a', fontSize: 8, textAlign: 'right' }}>Batch: XXX-2024<br />Made: 01.2025</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 12 }}>
              {['QC Report included', 'Lab Certified', 'Application Guide', 'Safety Sheet'].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 5 }}>
                  <span style={{ color: '#3B82F6', fontSize: 8 }}>✓</span>
                  <span style={{ color: '#333', fontSize: 9 }}>{item}</span>
                </div>
              ))}
            </div>
            <div style={{ borderTop: '1px solid #0a0a0a', paddingTop: 10 }}>
              <FoilStrip gradient={currentFoil.gradient} height={6} />
            </div>
          </div>
        </div>
      )}

      {style === 'seal-sticker' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24 }}>Seal / Hologram Sticker Concepts</div>

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
            {/* Round seal */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#333', fontSize: 9, marginBottom: 10 }}>Round seal sticker</div>
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: currentFoil.gradient,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%)', borderRadius: '50%' }} />
                <div style={{ color: foil === 'graphene' ? 'rgba(255,255,255,0.7)' : '#111', fontSize: 12, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1, position: 'relative' }}>9H+</div>
                <div style={{ color: foil === 'graphene' ? 'rgba(255,255,255,0.4)' : '#222', fontSize: 6, letterSpacing: '0.1em', position: 'relative' }}>VERIFIED</div>
              </div>
            </div>

            {/* Shield seal */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#333', fontSize: 9, marginBottom: 10 }}>Shield seal</div>
              <svg width={70} height={80}>
                <defs>
                  <linearGradient id="shieldFoil" x1="0" y1="0" x2="1" y2="0">
                    {currentFoil.gradient.match(/#[a-fA-F0-9]{3,6}/g)?.map((color, i, arr) => (
                      <stop key={i} offset={`${(i / (arr.length - 1)) * 100}%`} stopColor={color} />
                    ))}
                  </linearGradient>
                </defs>
                <path d="M 35 2 L 65 14 L 65 42 Q 65 68 35 78 Q 5 68 5 42 L 5 14 Z" fill="url(#shieldFoil)" />
                <text x="35" y="40" textAnchor="middle" fill={foil === 'graphene' ? 'rgba(255,255,255,0.7)' : '#111'} fontSize="14" fontFamily="Rajdhani, sans-serif" fontWeight="900">9H+</text>
                <text x="35" y="52" textAnchor="middle" fill={foil === 'graphene' ? 'rgba(255,255,255,0.4)' : '#333'} fontSize="6" letterSpacing="1">CERAPHENE</text>
              </svg>
            </div>

            {/* Rectangle hologram */}
            <div style={{ textAlign: 'center' }}>
              <div style={{ color: '#333', fontSize: 9, marginBottom: 10 }}>Rect hologram label</div>
              <div style={{
                width: 110, height: 50, background: currentFoil.gradient,
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                position: 'relative', overflow: 'hidden', borderRadius: 3,
              }}>
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 40%)' }} />
                <div style={{ color: foil === 'graphene' ? 'rgba(255,255,255,0.8)' : '#111', fontSize: 11, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', position: 'relative' }}>CERAPHENE™</div>
                <div style={{ color: foil === 'graphene' ? 'rgba(255,255,255,0.4)' : '#333', fontSize: 7, letterSpacing: '0.15em', position: 'relative' }}>AUTHENTIC · 9H+</div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 24, padding: 14, background: '#080808', border: '1px solid #111', borderRadius: 6 }}>
            <div style={{ color: '#333', fontSize: 9, letterSpacing: '0.15em', marginBottom: 6 }}>USE CASE</div>
            <div style={{ color: '#444', fontSize: 11, lineHeight: 1.6 }}>
              Hologram / foil seals go on the box flap closure (tamper evidence) or inside the card. They signal authenticity and add perceived premium value without adding significant cost (₹2–5 per unit at 1,000 pcs).
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
