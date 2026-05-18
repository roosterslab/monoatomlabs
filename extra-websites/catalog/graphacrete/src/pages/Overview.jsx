import React from 'react'
import { TrendingUp, Factory, Shield, Zap, ShieldCheck, Layers, CheckCircle } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#d97706'

const METRICS = [
  { value: '+25%', label: 'Compressive Strength', sub: 'vs Standard Mix', icon: TrendingUp },
  { value: '13%', label: 'Cement Reduction', sub: 'Cost Saving', icon: Factory },
  { value: '+30%', label: 'Flexural Strength', sub: 'Beam Tests', icon: Zap },
  { value: 'M20–M70', label: 'Grade Range', sub: 'All Mix Designs', icon: Layers },
]

const DIFFERENTIATORS = [
  { title: 'NABL-Validated Strength Gains', desc: 'Compressive and flexural strength gains independently verified by accredited third-party laboratories across M20–M60 grades.', icon: ShieldCheck },
  { title: '13% Cement Reduction', desc: "Graphene lattice filler effect allows proportional cement replacement, reducing material cost and CO\u2082 embodied energy simultaneously.", icon: TrendingUp },
  { title: 'Drop-In Compatibility', desc: 'No changes to batching plant or equipment. GRAPHACRETE is dosed as a liquid admixture at 0.05–0.1% by cement weight.', icon: CheckCircle },
]

export default function GraphacreteOverview() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/graphacrete-studio.png')" }}>
      <PageHeader product="GRAPHACRETE" title="Product Overview" pageNum="5" color={COLOR} />

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
              src="/images/graphacrete-01.jpg"
              alt="GRAPHACRETE"
              style={{ width: '100%', height: '160px', objectFit: 'cover', display: 'block' }}
            />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 24,
              fontWeight: 700,
              color: COLOR,
              letterSpacing: 3,
              textTransform: 'uppercase',
              lineHeight: 1,
            }}>GRAPHACRETE</div>
            <div style={{
              fontFamily: 'Inter, sans-serif',
              fontSize: 12,
              color: '#6b7280',
              marginTop: 4,
              letterSpacing: 0.5,
            }}>Graphene-Enhanced Concrete Additive</div>
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', justifyContent: 'center' }}>
            {['NABL Validated', 'BIS Compatible', 'IS:456 Compliant'].map(badge => (
              <div key={badge} style={{
                display: 'inline-flex', alignItems: 'center', gap: 4,
                background: '#ffffff', border: '1px solid #e5e7eb',
                borderRadius: 8, padding: '5px 10px',
                boxShadow: '0 1px 2px 0 rgba(0,0,0,0.05)',
              }}>
                <ShieldCheck size={12} color={COLOR} />
                <span style={{ fontSize: 9, color: '#374151', fontWeight: 600, letterSpacing: 0.5, fontFamily: 'Inter, sans-serif' }}>{badge}</span>
              </div>
            ))}
          </div>
          <div style={{ width: '100%', borderRadius: 12, overflow: 'hidden', border: `1px solid ${COLOR}18`, flexShrink: 0, boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)' }}>
            <img
              src="/images/graphacrete-studio.png"
              alt="GRAPHACRETE Studio"
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
              <Shield size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase' }}>About the Product</div>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#374151', lineHeight: 1.65, margin: 0 }}>
              GRAPHACRETE is a liquid graphene admixture engineered for ready-mix concrete and site-mixed batches
              across M20 to M70 grade applications. By dispersing exfoliated graphene nanoplatelets within the
              cement matrix, GRAPHACRETE creates bridging across micro-cracks, dramatically increasing both
              compressive and flexural performance. The additive is compatible with all standard cement types
              (OPC 43/53, PPC, PSC) and introduces no changes to batching or pumping procedures.
            </p>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Zap size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase' }}>Key Differentiators</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {DIFFERENTIATORS.map((d, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', background: '#ffffff', padding: '12px 14px', borderRadius: 12, border: '1px solid #e5e7eb', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.02)' }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: COLOR, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
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
