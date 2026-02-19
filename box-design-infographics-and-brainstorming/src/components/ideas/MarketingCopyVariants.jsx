import React, { useState } from 'react'

const C = '#64748B'

const VARIANTS = [
  {
    id: 'technical',
    label: 'A — Technical',
    tone: 'Credibility / Precision',
    headline: 'CERAPHENE Graphene Ceramic Coating',
    body: `Graphene nano-platelets (aspect ratio 2,000–4,000:1) embedded in a dense inorganic ceramic matrix. Covalently bonded to your clearcoat at 3–4 microns. 9H+ hardness rating. 115° water contact angle verified by independent laboratory testing. Chemical resistance pH 2–12. Rated for 700°C continuous exposure.`,
    footer: '50ml · Covers one standard vehicle · 4+ year coverage',
  },
  {
    id: 'emotional',
    label: 'B — Emotional',
    tone: 'Fear + Relief',
    headline: 'Your paint is under attack.',
    body: `Every road you drive, nine threats are working against your finish. Acid rain. UV radiation. Brake heat. Bird droppings. Road chemicals. Rock chips. Industrial fallout. Water spotting. Oxidation.\n\nCERAPHENE stops all of them. One application. Four years of invisible protection.`,
    footer: 'Because the road doesn\'t care how new your car is.',
  },
  {
    id: 'story',
    label: 'C — Brand Story',
    tone: 'Origin / Heritage',
    headline: 'Born from the Nobel Prize.',
    body: `In 2004, graphene was isolated at the University of Manchester and awarded the Nobel Prize in Physics in 2010 — the strongest material ever measured. We spent years engineering it into a form that bonds to your clearcoat at the molecular level.\n\nCERAPHENE is graphene science, made practical.`,
    footer: 'Monoatom Labs · Advanced Materials for the 4th Industrial Revolution',
  },
  {
    id: 'value',
    label: 'D — Value Proof',
    tone: 'Price Comparison',
    headline: 'Premium protection. Not premium pricing.',
    body: `Competing graphene ceramic coatings charge ₹12,000 to ₹18,000 for 50ml. CERAPHENE delivers the same 9H+ hardness and a superior 115° superhydrophobic contact angle — at ₹5,000.\n\n60–70% cheaper. Same or better protection. No compromise.`,
    footer: '*Price comparison based on market survey 2024. Performance independently verified.',
  },
  {
    id: 'bullet',
    label: 'E — Bullet List',
    tone: 'Scannable / Retail',
    headline: 'What CERAPHENE does:',
    bullets: [
      '9H+ hardness — stops scratches, swirls, and rock chips',
      '115° superhydrophobic — water beads and rolls off instantly',
      '700°C heat resistant — even near brake rotors',
      '4+ year durability — one application, years of protection',
      'pH 2–12 chemical resistant — acid rain, road salt, fallout',
    ],
    footer: 'CERAPHENE — ₹5,000 · 50ml · One vehicle · 4+ years',
  },
]

export default function MarketingCopyVariants() {
  const [active, setActive] = useState('technical')
  const v = VARIANTS.find(x => x.id === active)

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Marketing Ideas — Copy</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Back Panel Copy — 5 Tone Variations</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>Five different voices for the back panel body text. Each targets a different buyer mindset.</p>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
        {VARIANTS.map(vr => (
          <button key={vr.id} onClick={() => setActive(vr.id)} style={{
            padding: '7px 14px', borderRadius: 6, border: `1px solid ${active === vr.id ? C : '#1f1f1f'}`,
            background: active === vr.id ? '#111' : 'transparent', color: active === vr.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12, fontWeight: active === vr.id ? 700 : 400, transition: 'all 0.2s',
          }}>
            {vr.label}
          </button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: 24 }}>

        {/* Copy preview */}
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>Tone: {v.tone}</div>
          <div style={{ color: 'white', fontSize: 18, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em', marginBottom: 16, lineHeight: 1.2 }}>{v.headline}</div>
          {v.bullets ? (
            <ul style={{ margin: '0 0 20px', padding: '0 0 0 0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
              {v.bullets.map((b, i) => (
                <li key={i} style={{ color: '#666', fontSize: 13, lineHeight: 1.5, display: 'flex', gap: 10 }}>
                  <span style={{ color: C, flexShrink: 0, marginTop: 2 }}>▸</span>
                  {b}
                </li>
              ))}
            </ul>
          ) : (
            <div style={{ color: '#555', fontSize: 13, lineHeight: 1.9, marginBottom: 20, whiteSpace: 'pre-line' }}>{v.body}</div>
          )}
          <div style={{ color: '#2a2a2a', fontSize: 11, borderTop: '1px solid #111', paddingTop: 14, fontStyle: 'italic' }}>{v.footer}</div>
        </div>

        {/* Notes */}
        <div>
          <div style={{ padding: 16, background: '#111', border: '1px solid #1f1f1f', borderRadius: 8, marginBottom: 12 }}>
            <div style={{ color: C, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Best For</div>
            <div style={{ color: '#555', fontSize: 12, lineHeight: 1.6 }}>
              {active === 'technical' && 'Automotive detailers, professional buyers, and technically-minded enthusiasts.'}
              {active === 'emotional' && 'Consumer retail — triggers loss aversion (paint damage fear) and offers relief.'}
              {active === 'story' && 'Premium and gift market. Buyers who value heritage and scientific credibility.'}
              {active === 'value' && 'Price-sensitive buyers in competitive retail environments. Direct comparison.'}
              {active === 'bullet' && 'Shelf retail with 3-second browsing time. Skimmable, benefit-first format.'}
            </div>
          </div>

          <div style={{ padding: 16, background: '#111', border: '1px solid #1f1f1f', borderRadius: 8 }}>
            <div style={{ color: C, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Word Count</div>
            <div style={{ color: 'white', fontSize: 28, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>
              {v.bullets
                ? v.bullets.join(' ').split(' ').length + v.headline.split(' ').length
                : (v.body || '').split(' ').length + v.headline.split(' ').length
              }
            </div>
            <div style={{ color: '#444', fontSize: 11, marginTop: 4 }}>words total</div>
          </div>
        </div>
      </div>
    </div>
  )
}
