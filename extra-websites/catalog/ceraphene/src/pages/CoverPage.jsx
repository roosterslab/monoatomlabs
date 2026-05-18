import React from 'react'
import Logo from '../components/Logo'

const PRODUCT = {
  label: 'CERAPHENE',
  sub: 'Ceramic Car Coating',
  color: '#64748b',
  heroImage: '/images/ceraphene-01.jpg',
  tagline: 'Graphene-Ceramic Automotive Protection',
  keyMetrics: [
    { value: '9H+', label: 'Hardness' },
    { value: '115°', label: 'Contact Angle' },
    { value: '4+ Yrs', label: 'Durability' },
  ],
}

export default function CoverPage() {
  const C = PRODUCT.color

  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/ceraphene-01.jpg')", overflow: 'hidden' }}>
      {/* Inner layout */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
        {/* Left panel — branding */}
        <div style={{
          width: '45%',
          background: 'linear-gradient(135deg, #1a1a1a 0%, #0a0a0a 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px 36px',
          position: 'relative',
          zIndex: 1,
        }}>
          {/* Subtle hex grid background */}
          <div style={{
            position: 'absolute', inset: 0, opacity: 0.04,
            backgroundImage: 'repeating-linear-gradient(60deg, #fff 0, #fff 1px, transparent 0, transparent 50%), repeating-linear-gradient(120deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
            backgroundSize: '20px 20px',
          }} />

          <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 28 }}>
            {/* Logo + brand */}
            <Logo size={22} theme="dark" />

            {/* Divider */}
            <div style={{ width: 40, height: 1, background: '#1e293b' }} />

            {/* Product name */}
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 48, color: C, letterSpacing: '0.06em', lineHeight: 1, textTransform: 'uppercase' }}>{PRODUCT.label}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: 'rgba(255,255,255,0.55)', marginTop: 8, letterSpacing: '0.02em', lineHeight: 1.5 }}>{PRODUCT.tagline}</div>
            </div>

            {/* Key metrics */}
            <div style={{ display: 'flex', gap: 12 }}>
              {PRODUCT.keyMetrics.map(m => (
                <div key={m.label} style={{
                  flex: 1,
                  background: 'rgba(255,255,255,0.03)',
                  border: `1px solid rgba(255,255,255,0.08)`,
                  borderRadius: 12,
                  padding: '10px 8px',
                  textAlign: 'center',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 20, color: C, lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.4)', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* Catalog label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 20, height: 1, background: '#1e293b' }} />
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Product Catalog 2025</div>
            </div>
          </div>
        </div>

        {/* Right panel — product image */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <img
            src={PRODUCT.heroImage}
            alt={PRODUCT.label}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
          />
          {/* Left fade overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0a0a0a 0%, transparent 35%)' }} />
          {/* Bottom overlay with product sub label */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 28px', background: 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 100%)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: C, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>
              {PRODUCT.sub}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}>
              www.monoatomlabs.com &nbsp;·&nbsp; Confidential
            </div>
          </div>
          {/* Top-right badge */}
          <div style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(5,5,5,0.7)', backdropFilter: 'blur(8px)', border: `1px solid ${C}33`, borderRadius: 12, padding: '6px 12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9, color: C, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>NABL Validated</div>
          </div>
        </div>
      </div>
    </div>
  )
}
