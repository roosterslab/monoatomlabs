import React from 'react'
import { Package, Layers, Wrench, BarChart2, ShieldCheck, CheckCircle } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#06b6d4'

const METRICS = [
  { value: '+30%', label: 'Tensile Strength', sub: 'vs Base HDPE', icon: BarChart2 },
  { value: '20×', label: 'Wear Resistance', sub: 'Improvement', icon: ShieldCheck },
  { value: '0.5–2%', label: 'Dosage Range', sub: 'By Weight', icon: Layers },
  { value: '₹19k/t', label: 'Additive Cost', sub: 'Per Ton HDPE', icon: Package },
]

const DIFFERENTIATORS = [
  { title: 'Drop-In Masterbatch Format', desc: 'Pre-dispersed graphene in HDPE carrier resin — no equipment changes, no special handling. Direct feed to hopper like any standard masterbatch.', icon: Package },
  { title: 'Multi-Property Enhancement', desc: 'Simultaneously improves tensile, flexural, impact, elongation, and barrier properties — unlike fillers that trade off one property for another.', icon: Layers },
  { title: 'Processing Versatility', desc: 'Compatible with extrusion, injection molding, blow molding, and film blowing — covers the full spectrum of HDPE processing routes.', icon: Wrench },
]

export default function HdgpeOverview() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/hd-g-pe-studio.png')" }}>
      <PageHeader product="HD-G-PE" title="Product Overview" pageNum="11" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>
        {/* Left column — product image */}
        <div style={{
          width: '42%',
          borderRight: '1px solid #e5e7eb',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          padding: '20px 20px',
          background: '#f8fafc',
          gap: 14,
        }}>
          <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', border: `1px solid ${COLOR}22`, flexShrink: 0, boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)' }}>
            <img
              src="/images/hd-g-pe-01.jpg"
              alt="HD-G-PE"
              style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 28,
              fontWeight: 700,
              color: COLOR,
              letterSpacing: 3,
              textTransform: 'uppercase',
              lineHeight: 1,
            }}>HD-G-PE</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              color: '#6b7280',
              marginTop: 4,
              letterSpacing: 0.5,
            }}>Graphene-Enhanced HDPE Masterbatch</div>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[{ label: 'Masterbatch Format', icon: Package }, { label: 'Multi-Property', icon: Layers }, { label: 'Drop-In', icon: CheckCircle }].map(badge => (
              <div key={badge.label} style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                background: '#ffffff', border: '1px solid #e5e7eb',
                borderRadius: 8, padding: '5px 10px',
                boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
              }}>
                <badge.icon size={12} color={COLOR} />
                <span style={{ fontSize: 9, color: '#374151', fontWeight: 600, letterSpacing: 0.5, fontFamily: 'Inter, sans-serif' }}>{badge.label}</span>
              </div>
            ))}
          </div>
          <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', border: `1px solid ${COLOR}18`, flexShrink: 0, boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)' }}>
            <img
              src="/images/hdgpe-studio.png"
              alt="HD-G-PE Studio"
              style={{ width: '100%', height: '90px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 24px', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {METRICS.map(m => (
              <div key={m.label} style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: '12px 14px',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)',
              }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <m.icon size={18} color={COLOR} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 16, fontWeight: 700, color: '#111827', lineHeight: 1 }}>{m.value}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, fontWeight: 600, color: COLOR, marginTop: 3 }}>{m.label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#6b7280', marginTop: 1 }}>{m.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: 12, border: '1px solid #e5e7eb' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <Package size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase' }}>About the Product</div>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10.5, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
              HD-G-PE is a pre-dispersed graphene masterbatch designed for HDPE compounders, pipe manufacturers,
              film producers, and injection molders. The masterbatch format eliminates dispersion challenges —
              graphene is uniformly distributed in an HDPE carrier at concentrations optimized for 0.5–2%
              let-down ratios. The result is a dramatic, simultaneous improvement across tensile strength (+30%),
              flexural modulus, impact resistance, elongation at break, and moisture barrier properties, without
              affecting processability or melt flow.
            </p>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Layers size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase' }}>Key Differentiators</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {DIFFERENTIATORS.map((d, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: '#ffffff', padding: '12px 14px', borderRadius: 12, border: '1px solid #e5e7eb', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.02)' }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: COLOR,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <d.icon size={16} color="#ffffff" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827' }}>{d.title}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#6b7280', lineHeight: 1.5, marginTop: 3 }}>{d.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
