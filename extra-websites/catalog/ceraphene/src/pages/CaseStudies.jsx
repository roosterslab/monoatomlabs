import React from 'react'
import { Target, Users, Factory, CheckCircle } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#64748b'

const CASES = [
  {
    id: '01',
    project: 'Corporate Fleet Coating — Pan-India Program',
    location: 'Delhi NCR / Mumbai / Bangalore',
    client: 'UrbanDrive Fleet Management (EV + ICE)',
    sector: 'Fleet / Commercial',
    type: '450 vehicles',
    scope: 'Sedan + SUV mix',
    metrics: [
      { val: '9H+', lab: 'Confirmed hardness' },
      { val: '3 YR', lab: 'Durability (active)' },
      { val: '−70%', lab: 'Panel repainting events' },
    ],
    detail: 'Pan-India fleet coating program for a ride-hailing aggregator with 450 mixed vehicles. CERAPHENE applied across 3 cities by 6 certified detailing partners. 12-month review confirmed 9H+ pencil hardness on 94% of vehicles, zero delamination events, and 70% fewer panel repainting incidents vs. prior year (uncoated fleet). ROI: ₹5,200 per vehicle in avoided repaint costs.',
    image: '/images/ceraphene_lifecycle_studio_application.png',
  },
  {
    id: '02',
    project: 'Premium Detailing Studio — Franchise Chain',
    location: 'Mumbai, Pune, Surat',
    client: 'AutoGloss Detailing Studio (3 locations)',
    sector: 'Detailing / B2C',
    type: '120 cars/month',
    scope: 'Premium + luxury segment',
    metrics: [
      { val: '₹5K', lab: 'Per vehicle upsell' },
      { val: '115°+', lab: 'Water contact angle' },
      { val: '4.9/5', lab: 'Customer satisfaction' },
    ],
    detail: 'Studio chain offering CERAPHENE as a ₹5,000 upgrade on standard detailing packages (₹2,500 base). At 120 cars/month across 3 locations, CERAPHENE generates ₹6 L/month incremental revenue. Repeat customers specifically request CERAPHENE by name — 78% retention at 2-year recoat cycle. Studio awarded Monoatom Labs Certified Partner status.',
    image: '/images/ceraphene_lifecycle_studio_buffing.png',
  },
  {
    id: '03',
    project: 'State Transport Authority — Bus Fleet',
    location: 'Bengaluru, Karnataka',
    client: 'KSRTC — Vehicle Maintenance Division',
    sector: 'Public Transport / Bus',
    type: '200 AC city buses',
    scope: 'Full exterior + interior trim',
    metrics: [
      { val: '8–12°C', lab: 'Cabin temp reduction' },
      { val: '−65%', lab: 'Graffiti removal cost' },
      { val: '2.4 YR', lab: 'Payback period' },
    ],
    detail: 'KSRTC applied CERAPHENE to 200 AC city buses — exterior panels for scratch/UV resistance, interior trim for chemical resistance and easy cleaning. Thermal measurements confirmed 8–12°C surface temperature reduction reducing AC load and fuel consumption. Graffiti removal cost fell 65% (solvents slide off ceramic surface without etching). 2.4-year payback calculated by KSRTC operations team.',
    image: '/images/ceraphene_lifecycle_result.png',
  },
]

const TRACK = [
  { val: '70+', lab: 'Projects' },
  { val: '5,000+', lab: 'Vehicles Coated' },
  { val: '13 Cities', lab: 'Deployments' },
  { val: '₹5K', lab: 'Avg ROI/Vehicle' },
]

export default function CerapheneCaseStudies() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/ceraphene-studio.png')" }}>
      <PageHeader product="CERAPHENE" title="Case Studies & Track Record" pageNum="9" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '12px 20px', gap: 12 }}>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {TRACK.map(({ val, lab }) => (
            <div key={lab} style={{
              background: '#ffffff',
              border: '1px solid #e5e7eb',
              borderRadius: 12,
              padding: '8px 12px',
              textAlign: 'center',
              boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)',
            }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 20, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{val}</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', marginTop: 3 }}>{lab}</div>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flex: 1 }}>
          {CASES.map(({ id, project, location, client, sector, type, scope, metrics, detail, image }) => (
            <div key={id} style={{ display: 'flex', gap: 0, border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', flex: 1, boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 130, flexShrink: 0, position: 'relative' }}>
                <img src={image} alt={project} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, rgba(255,255,255,0.6))' }} />
                <div style={{ position: 'absolute', top: 7, left: 7 }}>
                  <div style={{ background: COLOR, borderRadius: 6, padding: '2px 8px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.1)' }}>
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
                    {[sector, type, scope].map(t => (
                      <div key={t} style={{ background: '#f1f5f9', borderRadius: 6, padding: '2px 7px', fontSize: 8, color: '#475569', fontFamily: 'Inter, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>{t}</div>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 10 }}>
                  {metrics.map(({ val, lab }) => (
                    <div key={lab} style={{ background: `${COLOR}08`, border: `1px solid ${COLOR}22`, borderRadius: 8, padding: '4px 10px', textAlign: 'center', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
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
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>Book a Detailing Trial</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.85)' }}>
              Single vehicle trial at ₹5,000 (1 full car, full correction + CERAPHENE coat). Fleet demo: 5-vehicle pilot at ₹22,000. Includes NABL hardness report and 3-year warranty card.
            </div>
          </div>
          <div style={{ background: '#fff', padding: '10px 18px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 4, minWidth: 180 }}>
            {[['Email', 'ceraphene@monoatomlabs.com'], ['Phone', '+91 98765 43213'], ['Web', 'monoatomlabs.com/ceraphene']].map(([k, v]) => (
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
