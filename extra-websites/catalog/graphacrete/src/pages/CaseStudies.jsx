import React from 'react'
import { Target, Map, TrendingUp, Building2 } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#d97706'

const CASES = [
  {
    id: '01',
    project: 'Sardar Bridge Approach Ramps',
    location: 'Ahmedabad, Gujarat',
    client: 'State PWD — Infrastructure Division',
    sector: 'Infrastructure / Bridge',
    grade: 'M50',
    volume: '420 m³',
    metrics: [
      { val: '+26%', lab: 'Compressive (28-day)' },
      { val: '−12%', lab: 'Cement used' },
      { val: '₹2.8 L', lab: 'Saved (cement + durability)' },
    ],
    detail: 'First public-infrastructure deployment of GRAPHACRETE in Gujarat. Ramp slab and pier cap elements cast using M50 GRAPHACRETE mix. NABL cube tests confirmed 63 MPa at 28 days (standard: 50 MPa). Cement reduced by 12% with no slump or pump-ability issues.',
    image: '/images/graphacrete_lifecycle_site_pouring.png',
  },
  {
    id: '02',
    project: 'Lodha Group High-Rise Tower A',
    location: 'Thane, Maharashtra',
    client: 'Lodha Group — Residential Division',
    sector: 'Residential / High-Rise',
    grade: 'M40',
    volume: '2,200 m³',
    metrics: [
      { val: '+24%', lab: 'Compressive strength' },
      { val: '₹9.9 L', lab: 'Total cement savings' },
      { val: '44 t', lab: 'CO₂ avoided' },
    ],
    detail: 'Columns, shear walls, and floor slabs across 28 floors used M40 GRAPHACRETE. Ready-mix plant batching was unchanged except dosing line addition. ESG reporting cited 44 t CO₂ avoided per tower. Project adopted GRAPHACRETE as standard spec for remaining 5 towers.',
    image: '/images/graphacrete_lifecycle_site_finishing.png',
  },
  {
    id: '03',
    project: 'Pune Logistics Park — Industrial Floor',
    location: 'Chakan, Pune',
    client: 'GreenBase Realty (Industrial REIT)',
    sector: 'Industrial / Floor Slab',
    grade: 'M30 (VDF finish)',
    volume: '980 m³',
    metrics: [
      { val: '+22%', lab: 'Surface hardness (Mohs)' },
      { val: '−15%', lab: 'Admixture system cost' },
      { val: '0', lab: 'Re-work cycles required' },
    ],
    detail: 'Jointless industrial floor slab for a 45,000 sq ft warehouse. GRAPHACRETE replaced microsilica at equivalent strength gain with lower total admixture cost. Vacuum dewatered finish achieved Class FM3 flatness. Client reported zero crack repairs at 6-month inspection.',
    image: '/images/graphacrete_lifecycle_site_result.png',
  },
]

const TRACK = [
  { val: '42+', lab: 'Projects Completed' },
  { val: '50,000+', lab: 'm³ Enhanced' },
  { val: '8', lab: 'States Active' },
  { val: '260 t', lab: 'CO₂ Avoided' },
]

export default function GraphacreteCaseStudies() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/graphacrete-studio.png')" }}>
      <PageHeader product="GRAPHACRETE" title="Case Studies & Track Record" pageNum="9" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '12px 20px', gap: 12 }}>

        {/* Track record bar */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {TRACK.map(({ val, lab }) => (
            <div key={lab} style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '8px 12px', textAlign: 'center', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 22, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{val}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', marginTop: 3 }}>{lab}</div>
            </div>
          ))}
        </div>

        {/* Case study cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
          {CASES.map(({ id, project, location, client, sector, grade, volume, metrics, detail, image }) => (
            <div key={id} style={{ display: 'flex', gap: 0, border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', flex: 1, boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
              {/* image */}
              <div style={{ width: 130, flexShrink: 0, position: 'relative' }}>
                <img src={image} alt={project} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(255,255,255,0.6))' }} />
                <div style={{ position: 'absolute', top: 7, left: 7 }}>
                  <div style={{ background: COLOR, borderRadius: 4, padding: '2px 8px' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>#{id}</span>
                  </div>
                </div>
              </div>
              {/* content */}
              <div style={{ flex: 1, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6, background: '#ffffff' }}>
                {/* header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#111827' }}>{project}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', marginTop: 1 }}>{location} · {client}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
                    {[sector, grade, volume].map(t => (
                      <div key={t} style={{ background: '#f1f5f9', borderRadius: 3, padding: '2px 7px', fontSize: 8, color: '#475569', fontFamily: 'Inter, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>{t}</div>
                    ))}
                  </div>
                </div>
                {/* metrics */}
                <div style={{ display: 'flex', gap: 10 }}>
                  {metrics.map(({ val, lab }) => (
                    <div key={lab} style={{ background: '#f8fafc', border: `1px solid #e5e7eb`, borderRadius: 8, padding: '4px 10px', textAlign: 'center', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{val}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, color: '#6b7280', marginTop: 1 }}>{lab}</div>
                    </div>
                  ))}
                </div>
                {/* detail */}
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#4b5563', lineHeight: 1.6 }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA footer */}
        <div style={{ display: 'flex', gap: 0, borderRadius: 12, overflow: 'hidden', border: `1.5px solid ${COLOR}30`, boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
          <div style={{ flex: 1, background: COLOR, padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>Start Your Trial Today</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.8)' }}>
              Field trial kit (50 L) available at ₹25,000 — includes NABL baseline cube tests + Monoatom Labs on-site technical support.
            </div>
          </div>
          <div style={{ background: '#fff', padding: '10px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, minWidth: 180 }}>
            {[['Email', 'graphacrete@monoatomlabs.com'], ['Phone', '+91 98765 43210'], ['Web', 'monoatomlabs.com/graphacrete']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 6 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#9ca3af', width: 36 }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: COLOR, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
