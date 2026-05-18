import React from 'react'
import { Briefcase, PanelTop, Map, IndianRupee, TrendingUp, Droplets, ThermometerSnowflake, Activity, CalendarCheck, ArrowRight, Banknote } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#f59e0b'

const CASES = [
  {
    id: '01',
    project: 'Badla Solar Farm — Phase 2',
    location: 'Jodhpur, Rajasthan',
    client: 'Rajasthan Renewables Ltd.',
    sector: 'Utility-Scale Solar',
    type: '50 MW AC',
    area: '1.2 lakh m²',
    metrics: [
      { val: '+11.8%', lab: 'Power yield gain', icon: TrendingUp },
      { val: '−38%', lab: 'Soiling loss', icon: Droplets },
      { val: '₹1.4 Cr', lab: 'Annual revenue gain', icon: Banknote },
    ],
    detail: 'Largest single-site GRAFFISOL deployment. 1.2 lakh m² of mono-PERC panels coated using HVLP sprayer rigs. IEC 60904-1 monitoring over 90 days confirmed +11.8% yield vs. uncoated reference strings. Soiling measurement system recorded 38% fewer I-V curve losses during dust storm season.',
    image: '/images/graffisol_lifecycle_site_result.png',
  },
  {
    id: '02',
    project: 'Pavagada Cluster — O&M Retrofit',
    location: 'Anantapur, Andhra Pradesh',
    client: 'SunGrid O&M Services Pvt. Ltd.',
    sector: 'IPP O&M Contract',
    type: '30 MW AC',
    area: '78,000 m²',
    metrics: [
      { val: '5.2°C', lab: 'Panel temp reduction', icon: ThermometerSnowflake },
      { val: '+9.4%', lab: 'CUF improvement', icon: Activity },
      { val: '3-YR', lab: 'O&M contract signed', icon: CalendarCheck },
    ],
    detail: 'Retrofit coating applied during annual O&M shutdown — zero panel downtime. Thermal imaging (FLIR) confirmed 5.2°C average temperature reduction at peak irradiance. CUF improved from 24.1% to 26.4% (9.4% relative gain). SunGrid signed 3-year recoat O&M contract.',
    image: '/images/graffisol_lifecycle_factory_coating.png',
  },
  {
    id: '03',
    project: 'Jebel Ali Rooftop Industrial Park',
    location: 'Dubai, UAE',
    client: 'DEWA-Accredited Contractor',
    sector: 'Commercial Rooftop',
    type: '10 MW AC',
    area: '32,000 m²',
    metrics: [
      { val: '+13.1%', lab: 'Yield (extreme dust)', icon: TrendingUp },
      { val: '<15°', lab: 'Water contact angle', icon: Droplets },
      { val: '1× recoat', lab: 'In 36-month period', icon: CalendarCheck },
    ],
    detail: 'High-sand-loading desert environment — conventional cleaning required fortnightly. Post-GRAFFISOL, cleaning frequency reduced to once per quarter with no yield penalty. DEWA performance audit confirmed 13.1% yield uplift. Only one recoat required in 36 months of operation.',
    image: '/images/graffisol_lifecycle_site_cleaning.png',
  },
]

const TRACK = [
  { val: '26+', lab: 'Projects Deployed', icon: Briefcase },
  { val: '150+ MW', lab: 'Panels Coated', icon: PanelTop },
  { val: '6', lab: 'States + UAE', icon: Map },
  { val: '₹12 Cr+', lab: 'Revenue Generated', icon: IndianRupee },
]

export default function GraffisolCaseStudies() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/graffisol_lifecycle_site_result.png')" }}>
      <PageHeader product="GRAFFISOL" title="Case Studies & Track Record" pageNum="9" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '20px 24px', gap: 20 }}>

        {/* Top Track Record Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12 }}>
          {TRACK.map(({ val, lab, icon: Icon }) => (
            <div key={lab} style={{ display: 'flex', alignItems: 'center', gap: 12, background: '#ffffff', border: `1px solid #e5e7eb`, borderRadius: 12, padding: '14px 16px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
              <div style={{ width: 44, height: 44, borderRadius: 10, background: `${COLOR}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={20} color={COLOR} />
              </div>
              <div>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 22, fontWeight: 700, color: '#111827', lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, fontWeight: 500, color: '#6b7280', marginTop: 4 }}>{lab}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, flex: 1 }}>
          {CASES.map(({ id, project, location, client, sector, type, area, metrics, detail, image }) => (
            <div key={id} style={{ display: 'flex', gap: 0, background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.04)', flex: 1 }}>
              
              <div style={{ width: 150, flexShrink: 0, position: 'relative' }}>
                <img src={image} alt={project} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 50%, #ffffff)' }} />
                <div style={{ position: 'absolute', top: 12, left: 12 }}>
                  <div style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)', borderRadius: 6, padding: '4px 8px', border: '1px solid rgba(255,255,255,0.2)' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>CASE {id}</span>
                  </div>
                </div>
              </div>
              
              <div style={{ flex: 1, padding: '16px 20px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 700, color: '#111827', letterSpacing: 0.5 }}>{project}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#6b7280', marginTop: 3, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Map size={12} /> {location} <span style={{ color: '#cbd5e1' }}>|</span> {client}
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexShrink: 0 }}>
                    {[sector, type, area].map(t => (
                      <div key={t} style={{ background: '#f1f5f9', border: '1px solid #e2e8f0', borderRadius: 6, padding: '4px 8px', fontSize: 8.5, color: '#475569', fontFamily: 'Inter, sans-serif', fontWeight: 600, whiteSpace: 'nowrap' }}>{t}</div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 12 }}>
                  {metrics.map(({ val, lab, icon: MIcon }) => (
                    <div key={lab} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: 10, background: '#f8fafc', border: `1px solid #e5e7eb`, borderRadius: 8, padding: '8px 12px' }}>
                      <div style={{ width: 32, height: 32, borderRadius: 6, background: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 1px 2px rgba(0,0,0,0.05)', border: `1px solid ${COLOR}30` }}>
                        <MIcon size={16} color={COLOR} />
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 700, color: '#111827', lineHeight: 1 }}>{val}</div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#6b7280', marginTop: 3, fontWeight: 500 }}>{lab}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#4b5563', lineHeight: 1.6, background: '#ffffff', borderTop: '1px dashed #e5e7eb', paddingTop: 10, marginTop: 16 }}>
                  {detail}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* CTA Footer inside page */}
        <div style={{ display: 'flex', gap: 0, borderRadius: 16, overflow: 'hidden', border: `1px solid ${COLOR}40`, boxShadow: `0 8px 16px -4px ${COLOR}20` }}>
          <div style={{ flex: 1, background: `linear-gradient(135deg, ${COLOR}, #d97706)`, padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16 }}>
             <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowRight size={24} color="#fff" />
             </div>
             <div>
               <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 16, fontWeight: 700, color: '#fff', letterSpacing: 1 }}>Pilot Your Solar Plant</div>
               <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.9)', marginTop: 4, lineHeight: 1.4, maxWidth: '90%' }}>
                 Small array pilot (500 m² / ~250 kW) from ₹18,000. Includes IEC-compliant before/after yield comparison, FLIR thermal scan, and 12-month soiling log.
               </div>
             </div>
          </div>
          <div style={{ background: '#ffffff', padding: '16px 24px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 6, minWidth: 220 }}>
            {[['Email', 'graffisol@monoatomlabs.com'], ['Phone', '+91 98765 43211'], ['Web', 'monoatomlabs.com/graffisol']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', fontWeight: 500 }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#111827', fontWeight: 700 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
