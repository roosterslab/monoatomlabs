import React from 'react'
import { Map, Users, Package, TrendingUp } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#06b6d4'

const CASES = [
  {
    id: '01',
    project: 'HDPE Water Distribution Pipe Program',
    location: 'Ahmedabad Municipal Corporation',
    client: 'Jal Shakti Infrastructure — Pipe Manufacturer',
    sector: 'Water Supply / Pipes',
    type: 'DN 90–315 mm',
    volume: '500 T HDPE',
    metrics: [
      { val: '+28%', lab: 'Tensile strength' },
      { val: '15%', lab: 'Wall thickness reduced' },
      { val: '₹42 L', lab: 'Material savings' },
    ],
    detail: 'DN 90–315 mm pressure pipes for AMC water grid upgrade. Downgauging from SDR 11 to SDR 13 equivalent using HD-G-PE — 15% wall thickness reduction with pressure retention confirmed by hydrostatic burst test (ISO 1167). FSSAI food-grade compliance for potable water certified. Project adopted HD-G-PE as standard for 3 future lot orders.',
    image: '/images/hdgpe_lifecycle_factory_extrusion.png',
  },
  {
    id: '02',
    project: 'Multi-Layer Stretch Film Production Line',
    location: 'Bhiwandi, Maharashtra',
    client: 'Flexipack Industries Pvt. Ltd.',
    sector: 'Packaging / Films',
    type: '12–25 µm HDPE film',
    volume: '200 T',
    metrics: [
      { val: '20×', lab: 'Elongation at break' },
      { val: '−18%', lab: 'Film gauge reduction' },
      { val: '₹12K', lab: 'Net ROI per ton HDPE' },
    ],
    detail: 'Stretch wrap film for pallet securing — premium transparency and tear-resistance required. HD-G-PE at 1% loading enabled 18% downgauging (25 µm → 20.5 µm) with no reduction in wrap force or tear propagation resistance. Elongation increased 20× — fewer roll changes per pallet. Film commands ₹8/kg premium in market.',
    image: '/images/hdgpe_lifecycle_factory_molding.png',
  },
  {
    id: '03',
    project: 'Fish Farm Pond Geomembrane',
    location: 'Ramanathapuram, Tamil Nadu',
    client: 'BlueSea Aquaculture — Pond Lining',
    sector: 'Agriculture / Aquaculture',
    type: '0.5 mm HDPE liner',
    volume: '300 T',
    metrics: [
      { val: '+32%', lab: 'Impact strength (ASTM D256)' },
      { val: '+20%', lab: 'UV lifespan (ISO 4892)' },
      { val: 'FSSAI', lab: 'Food-grade certified' },
    ],
    detail: 'Aquaculture pond liners exposed to constant UV, saline water, and mechanical stress from fish movement. HD-G-PE at 1.5% loading demonstrated 20% UV lifespan extension (accelerated weathering ISO 4892-3) and 32% impact improvement — critical for puncture resistance during installation. FSSAI food-safe certification required and achieved.',
    image: '/images/hdgpe_lifecycle_result.png',
  },
]

const TRACK = [
  { val: '26+', lab: 'Projects', icon: Map },
  { val: '12,000+ T', lab: 'HDPE Enhanced', icon: Package },
  { val: '6 States', lab: 'Active Clients', icon: Users },
  { val: '₹19K', lab: 'Avg ROI/Ton', icon: TrendingUp },
]

export default function HdgpeCaseStudies() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/hd-g-pe-studio.png')" }}>
      <PageHeader product="HD-G-PE" title="Case Studies & Track Record" pageNum="9" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '12px 20px', gap: 12 }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {TRACK.map(({ val, lab, icon: Icon }) => (
            <div key={lab} style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: '10px 12px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)',
            }}>
              <div style={{ width: 32, height: 32, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={16} color={COLOR} />
              </div>
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 18, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', marginTop: 2 }}>{lab}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
          {CASES.map(({ id, project, location, client, sector, type, volume, metrics, detail, image }) => (
            <div key={id} style={{ display: 'flex', gap: 0, border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', flex: 1, boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 130, flexShrink: 0, position: 'relative' }}>
                <img src={image} alt={project} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(255,255,255,0.6))' }} />
                <div style={{ position: 'absolute', top: 7, left: 7 }}>
                  <div style={{ background: COLOR, borderRadius: 6, padding: '2px 8px' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>#{id}</span>
                  </div>
                </div>
              </div>
              <div style={{ flex: 1, padding: '10px 14px', display: 'flex', flexDirection: 'column', gap: 6 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#111827' }}>{project}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', marginTop: 1 }}>{location} · {client}</div>
                  </div>
                  <div style={{ display: 'flex', gap: 5, flexShrink: 0 }}>
                    {[sector, type, volume].map(t => (
                      <div key={t} style={{ background: '#f1f5f9', borderRadius: 3, padding: '2px 7px', fontSize: 8, color: '#475569', fontFamily: 'Inter, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>{t}</div>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {metrics.map(({ val, lab }) => (
                    <div key={lab} style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 8, padding: '4px 10px', textAlign: 'center', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
                      <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{val}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, color: '#6b7280', marginTop: 1 }}>{lab}</div>
                    </div>
                  ))}
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#4b5563', lineHeight: 1.6 }}>{detail}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', gap: 0, borderRadius: 12, overflow: 'hidden', border: `1.5px solid ${COLOR}30`, boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
          <div style={{ flex: 1, background: COLOR, padding: '10px 16px', display: 'flex', flexDirection: 'column', gap: 3 }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>Start a Production Trial</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.85)' }}>
              Lab-scale trial (25 kg masterbatch) from ₹60,000. Includes ASTM D638/D256 baseline + HD-G-PE specimen testing, technical visit, and full QC report for your product specification.
            </div>
          </div>
          <div style={{ background: '#fff', padding: '10px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, minWidth: 180 }}>
            {[['Email', 'hdgpe@monoatomlabs.com'], ['Phone', '+91 98765 43212'], ['Web', 'monoatomlabs.com/hd-g-pe']].map(([k, v]) => (
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
