import React from 'react'
import Logo from '../components/shared/Logo'

const PRODUCT_CARDS = [
  {
    name: 'CERAPHENE',
    sub: 'Ceramic Car Coating',
    tagline: '9H+ Hardness',
    color: '#64748b',
    lightColor: '#f1f5f9',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <ellipse cx="18" cy="22" rx="14" ry="6" stroke="#64748b" strokeWidth="1.5" fill="none" />
        <path d="M6 18 Q10 8 18 8 Q26 8 30 18" stroke="#64748b" strokeWidth="1.5" fill="none" />
        <circle cx="18" cy="8" r="2" fill="#64748b" />
        <line x1="4" y1="22" x2="32" y2="22" stroke="#64748b" strokeWidth="1" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    name: 'GRAPHACRETE',
    sub: 'Concrete Additive',
    tagline: '+25% Compressive Strength',
    color: '#d97706',
    lightColor: '#fffbeb',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="20" width="28" height="8" rx="1" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <rect x="8" y="12" width="20" height="8" rx="1" stroke="#d97706" strokeWidth="1.5" fill="none" />
        <rect x="12" y="5" width="12" height="7" rx="1" stroke="#d97706" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    name: 'GRAFFISOL',
    sub: 'Solar Enhancement Coating',
    tagline: '+10% Power Output',
    color: '#f59e0b',
    lightColor: '#fffbeb',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <rect x="4" y="10" width="28" height="18" rx="2" stroke="#f59e0b" strokeWidth="1.5" fill="none" />
        <line x1="4" y1="19" x2="32" y2="19" stroke="#f59e0b" strokeWidth="1" />
        <line x1="13" y1="10" x2="13" y2="28" stroke="#f59e0b" strokeWidth="1" />
        <line x1="23" y1="10" x2="23" y2="28" stroke="#f59e0b" strokeWidth="1" />
        <circle cx="18" cy="5" r="2.5" fill="#f59e0b" />
        <line x1="18" y1="1" x2="18" y2="3" stroke="#f59e0b" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: 'HD-G-PE',
    sub: 'HDPE Masterbatch',
    tagline: '+30% Mechanical Performance',
    color: '#06b6d4',
    lightColor: '#ecfeff',
    icon: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
        <circle cx="18" cy="18" r="12" stroke="#06b6d4" strokeWidth="1.5" fill="none" />
        <circle cx="18" cy="18" r="7" stroke="#06b6d4" strokeWidth="1" fill="none" strokeDasharray="3 2" />
        <circle cx="18" cy="18" r="2.5" fill="#06b6d4" />
        <line x1="18" y1="6" x2="18" y2="11" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="18" y1="25" x2="18" y2="30" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="6" y1="18" x2="11" y2="18" stroke="#06b6d4" strokeWidth="1.5" />
        <line x1="25" y1="18" x2="30" y2="18" stroke="#06b6d4" strokeWidth="1.5" />
      </svg>
    ),
  },
]


export default function CoverPage() {
  return (
    <div className="page page-break" style={{ display: 'flex', background: '#050505' }}>
      {/* Left panel */}
      <div style={{
        width: '40%',
        background: '#0a0a0a',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '32px 28px',
        borderRight: '1px solid #1a1a1a',
        position: 'relative',
      }}>
        {/* Subtle hex grid background */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.04,
          backgroundImage: 'repeating-linear-gradient(60deg, #fff 0, #fff 1px, transparent 0, transparent 50%), repeating-linear-gradient(120deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
          backgroundSize: '20px 20px',
        }} />

        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 }}>
          <Logo size={22} theme="dark" />
          <div style={{ width: 40, height: 1, background: '#333' }} />
          <div style={{
            textAlign: 'center',
            color: '#6b7280',
            fontSize: 11,
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            lineHeight: 1.6,
            fontFamily: 'Inter, sans-serif',
          }}>
            Advanced Graphene<br />Technology Products
          </div>

          <div style={{ marginTop: 24, textAlign: 'center' }}>
            <div style={{ color: '#374151', fontSize: 10, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 6 }}>Product Catalog</div>
            <div style={{
              fontFamily: 'Rajdhani, sans-serif',
              fontSize: 42,
              fontWeight: 700,
              color: '#1f2937',
              letterSpacing: 2,
              lineHeight: 1,
            }}>2025</div>
          </div>
        </div>
      </div>

      {/* Right panel — product cards */}
      <div style={{
        width: '60%',
        background: '#0d0d0d',
        display: 'flex',
        flexDirection: 'column',
        padding: '28px 24px',
        gap: 0,
      }}>
        <div style={{
          color: '#4b5563',
          fontSize: 10,
          letterSpacing: 2,
          textTransform: 'uppercase',
          marginBottom: 16,
          fontFamily: 'Inter, sans-serif',
        }}>Product Portfolio</div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, flex: 1 }}>
          {PRODUCT_CARDS.map(card => (
            <div key={card.name} style={{
              background: '#111',
              border: `1px solid ${card.color}22`,
              borderLeft: `3px solid ${card.color}`,
              borderRadius: 4,
              padding: '16px 18px',
              display: 'flex',
              flexDirection: 'column',
              gap: 10,
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: -10, right: -10, opacity: 0.06 }}>
                <svg width="80" height="80" viewBox="0 0 80 80">
                  <polygon points="40,4 76,24 76,56 40,76 4,56 4,24" fill={card.color} />
                </svg>
              </div>
              <div style={{ opacity: 0.9 }}>{card.icon}</div>
              <div>
                <div style={{
                  fontFamily: 'Rajdhani, sans-serif',
                  fontSize: 18,
                  fontWeight: 700,
                  color: card.color,
                  letterSpacing: 1.5,
                  lineHeight: 1,
                }}>{card.name}</div>
                <div style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 11,
                  color: '#9ca3af',
                  marginTop: 3,
                  fontWeight: 500,
                }}>{card.sub}</div>
              </div>
              <div style={{
                background: `${card.color}15`,
                border: `1px solid ${card.color}30`,
                borderRadius: 3,
                padding: '4px 8px',
                fontSize: 10,
                color: card.color,
                fontWeight: 700,
                letterSpacing: 0.5,
                display: 'inline-block',
                alignSelf: 'flex-start',
                fontFamily: 'Outfit, sans-serif',
              }}>{card.tagline}</div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          marginTop: 16,
          paddingTop: 12,
          borderTop: '1px solid #1a1a1a',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
          <div style={{ fontSize: 10, color: '#374151', letterSpacing: 1.5, textTransform: 'uppercase', fontFamily: 'Inter, sans-serif' }}>
            PRODUCT CATALOG 2025 &nbsp;·&nbsp; CONFIDENTIAL
          </div>
          <div style={{ fontSize: 10, color: '#374151', letterSpacing: 0.5, fontFamily: 'Inter, sans-serif' }}>
            www.monoatomlabs.com
          </div>
        </div>
      </div>
    </div>
  )
}
