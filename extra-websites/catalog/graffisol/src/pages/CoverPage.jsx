import React from 'react'
import Logo from '../components/Logo'

const PRODUCT = {
  label: 'GRAFFISOL',
  sub: 'Solar Panel Coating',
  color: '#f59e0b',
  heroImage: '/images/graffisol-01.jpg',
  tagline: 'Graphene Nano-Coating for Photovoltaic Solar Panels',
  keyMetrics: [
    { value: '+10–12%', label: 'Power Gain' },
    { value: '5–6°C', label: 'Temp Drop' },
    { value: '26+', label: 'Projects' },
  ],
}

export default function CoverPage() {
  const C = PRODUCT.color

  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', overflow: 'hidden', background: '#050505' }}>
      {/* Left panel — branding */}
      <div style={{
        width: '45%',
        background: 'linear-gradient(135deg, #0a0a0a 0%, #111827 100%)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '48px 40px',
        position: 'relative',
        zIndex: 1,
        boxShadow: '20px 0 40px rgba(0,0,0,0.5)',
      }}>
        {/* Subtle hex grid background */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.05,
          backgroundImage: 'repeating-linear-gradient(60deg, #fff 0, #fff 1px, transparent 0, transparent 50%), repeating-linear-gradient(120deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '24px 24px',
        }} />

        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: -100, left: -100, width: 300, height: 300, background: C, filter: 'blur(150px)', opacity: 0.08, zIndex: 0, borderRadius: '50%' }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* Logo + brand */}
          <Logo size={24} theme="dark" />

          {/* Divider */}
          <div style={{ width: 48, height: 2, background: 'rgba(255,255,255,0.1)', borderRadius: 2 }} />

          {/* Product name */}
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 900, fontSize: 48, color: '#fff', letterSpacing: 2, lineHeight: 1, textTransform: 'uppercase', marginBottom: 6 }}>
              {PRODUCT.label}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: C, fontWeight: 500, letterSpacing: 1, lineHeight: 1.5, textTransform: 'uppercase' }}>
              {PRODUCT.tagline}
            </div>
          </div>

          {/* Key metrics */}
          <div style={{ display: 'flex', gap: 14 }}>
            {PRODUCT.keyMetrics.map(m => (
              <div key={m.label} style={{ flex: 1, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '16px 10px', display: 'flex', flexDirection: 'column', alignItems: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 800, fontSize: 22, color: '#fff', lineHeight: 1, textShadow: `0 0 10px ${C}40` }}>{m.value}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: C, marginTop: 4, textTransform: 'uppercase', letterSpacing: 1, fontWeight: 600 }}>{m.label}</div>
              </div>
            ))}
          </div>

          {/* Catalog label */}
          <div style={{ display: 'flex', alignItems: 'center', justifyBetween: 'space-between', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: 24, marginTop: 8 }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#e5e7eb', letterSpacing: 2, textTransform: 'uppercase', fontWeight: 600 }}>Product Catalog 2025</div>
          </div>
        </div>
      </div>

      {/* Right panel — product image */}
      <div style={{ flex: 1, position: 'relative', overflow: 'hidden' }}>
        <img
          src={PRODUCT.heroImage}
          alt={PRODUCT.label}
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.9 }}
        />
        {/* Left fade overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #111827 0%, transparent 40%)' }} />
        {/* Bottom overlay */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '40px 32px', background: 'linear-gradient(to top, rgba(0,0,0,0.9) 0%, transparent 100%)' }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, color: C, letterSpacing: 2, textTransform: 'uppercase', fontWeight: 800, marginBottom: 6 }}>
            {PRODUCT.sub}
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#9ca3af', letterSpacing: 0.5 }}>
            www.monoatomlabs.com &nbsp;·&nbsp; Confidential Document
          </div>
        </div>
        {/* Top-right badge */}
        <div style={{ position: 'absolute', top: 24, right: 24, background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(12px)', border: `1px solid ${C}50`, borderRadius: 8, padding: '8px 16px', boxShadow: `0 4px 12px ${C}20` }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: C, boxShadow: `0 0 6px ${C}` }} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, color: '#fff', letterSpacing: 1, textTransform: 'uppercase', fontWeight: 800 }}>IEC 60904 Validated</div>
          </div>
        </div>
      </div>
    </div>
  )
}
