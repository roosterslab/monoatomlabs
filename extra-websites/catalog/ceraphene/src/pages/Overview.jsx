import React from 'react'
import { ShieldCheck, Layers, CheckCircle, Zap, Droplets, ThermometerSun } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#64748b'

const METRICS = [
  { value: '9H+', label: 'Hardness', sub: 'ASTM D3363', icon: ShieldCheck },
  { value: '115°', label: 'Contact Angle', sub: 'Hydrophobic', icon: Droplets },
  { value: '4+ Yrs', label: 'Durability', sub: 'Field Tested', icon: CheckCircle },
  { value: '3–4μm', label: 'Film Thickness', sub: 'Uniform Coat', icon: Layers },
]

const DIFFERENTIATORS = [
  { title: 'NABL-Validated Performance', desc: 'All hardness and adhesion claims validated by accredited third-party labs under ASTM standards.', icon: ShieldCheck },
  { title: 'Graphene-Ceramic Matrix', desc: 'Proprietary GCM technology bonds at nanoscale — outperforming standard SiO₂ ceramic coatings.', icon: Layers },
  { title: 'Professional & DIY Ready', desc: 'Engineered for both detailing professionals and end-users; 3–4 hour cure, 24hr full bond.', icon: CheckCircle },
]

export default function CerapheneOverview() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/ceraphene-studio.png')" }}>
      <PageHeader product="CERAPHENE" title="Product Overview" pageNum="2" color={COLOR} />

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
          <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', flexShrink: 0, boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)' }}>
            <img
              src="/images/ceraphene-01.jpg"
              alt="CERAPHENE"
              style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 26,
              fontWeight: 700,
              color: COLOR,
              letterSpacing: 3,
              textTransform: 'uppercase',
              lineHeight: 1,
            }}>CERAPHENE</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              color: '#6b7280',
              marginTop: 4,
              letterSpacing: 0.5,
            }}>Graphene-Ceramic Automotive Coating</div>
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[{ label: 'NABL Validated', icon: ShieldCheck }, { label: 'Nano Ceramic', icon: Layers }, { label: '4+ Yr Durability', icon: CheckCircle }].map(badge => (
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
          <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', flexShrink: 0, boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)', marginTop: 'auto' }}>
            <img
              src="/images/ceraphene-studio.png"
              alt="CERAPHENE Studio"
              style={{ width: '100%', height: '90px', objectFit: 'cover', display: 'block' }}
            />
          </div>
        </div>

        {/* Right column */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 24px', gap: 16 }}>
          {/* Metrics */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {METRICS.map(m => (
              <div key={m.value} style={{
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

          {/* Description */}
          <div style={{ background: '#f8fafc', padding: '16px', borderRadius: 12, border: '1px solid #e5e7eb' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 6 }}>About the Product</div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 10.5, color: '#4b5563', lineHeight: 1.6, margin: 0 }}>
              CERAPHENE is a next-generation ceramic car coating engineered with Monoatom Labs' proprietary
              Graphene-Ceramic Matrix (GCM) technology. By integrating single-layer graphene into a Si–O bond
              network, CERAPHENE achieves a pencil hardness of 9H+ while maintaining exceptional flexibility —
              eliminating the micro-cracking characteristic of conventional ceramic coatings. The result is a
              coating that protects paintwork against swirl marks, chemical etching, UV degradation, and thermal
              stress across a documented service life of 4+ years.
            </p>
          </div>

          {/* Differentiators */}
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 10 }}>Key Differentiators</div>
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
