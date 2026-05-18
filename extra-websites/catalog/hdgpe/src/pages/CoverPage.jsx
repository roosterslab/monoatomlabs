import React from 'react'
import Logo from '../components/Logo'

const PRODUCT = {
  label: 'HD-G-PE',
  sub: 'HDPE Graphene Masterbatch',
  color: '#06b6d4',
  heroImage: '/images/hd-g-pe-01.jpg',
  tagline: 'Pre-Dispersed Graphene Masterbatch for HDPE Processing',
  keyMetrics: [
    { value: '+30%', label: 'Tensile' },
    { value: '20×', label: 'Wear Res.' },
    { value: '0.5–2%', label: 'Dosage' },
  ],
}


export default function CoverPage() {
  const C = PRODUCT.color

  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/hd-g-pe-01.jpg')" }}>
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Left panel — branding */}
        <div style={{
          width: '45%',
          background: 'rgba(7,7,16,0.85)',
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
              <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 44, color: C, letterSpacing: '0.06em', lineHeight: 1, textTransform: 'uppercase' }}>{PRODUCT.label}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#64748b', marginTop: 8, letterSpacing: '0.02em', lineHeight: 1.5 }}>{PRODUCT.tagline}</div>
            </div>

            {/* Key metrics */}
            <div style={{ display: 'flex', gap: 12 }}>
              {PRODUCT.keyMetrics.map(m => (
                <div key={m.label} style={{ flex: 1, background: `${C}0d`, border: `1px solid ${C}25`, borderRadius: 12, padding: '10px 8px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, fontSize: 18, color: C, lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#475569', marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{m.label}</div>
                </div>
              ))}
            </div>

            {/* Catalog label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 20, height: 1, background: '#1e293b' }} />
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#334155', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Product Catalog 2025</div>
            </div>
          </div>
        </div>

        {/* Right panel — product image */}
        <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
          <img
            src={PRODUCT.heroImage}
            alt={PRODUCT.label}
            style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85, borderRadius: 0 }}
          />
          {/* Left fade overlay */}
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #070710 0%, transparent 35%)' }} />
          {/* Bottom overlay */}
          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '32px 28px', background: 'linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 100%)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: C, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 4 }}>
              {PRODUCT.sub}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#475569', letterSpacing: '0.05em' }}>
              www.monoatomlabs.com &nbsp;·&nbsp; Confidential
            </div>
          </div>
          {/* Top-right badge */}
          <div style={{ position: 'absolute', top: 20, right: 20, background: 'rgba(5,5,5,0.7)', backdropFilter: 'blur(8px)', border: `1px solid ${C}33`, borderRadius: 12, padding: '6px 12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9, color: C, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700 }}>Drop-In Format</div>
          </div>
        </div>
      </div>
    </div>
  )
}
