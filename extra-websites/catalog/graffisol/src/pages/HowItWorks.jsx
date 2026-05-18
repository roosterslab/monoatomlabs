import React from 'react'
import { Layers, Sun, ThermometerSnowflake, Droplets, Paintbrush, Wind, SprayCan, Clock, CalendarDays, FlaskConical, Beaker, CheckCircle } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#f59e0b'

const MECHANISM_STEPS = [
  {
    num: '01',
    icon: Layers,
    title: 'GNP Nanocoating Layer Formation',
    body: 'GNP (3–8 layers, 1–4 µm lateral) dispersed in fluorine-free aqueous carrier form a self-assembling monolayer on glass and polymer PV surfaces. Surface energy measurements confirm contact angle >110° — hydrophobic character prevents dust adhesion at the molecular level.',
  },
  {
    num: '02',
    icon: Sun,
    title: 'Anti-Reflective Optical Enhancement',
    body: 'GNP platelet arrays create a graded refractive index transition between air (n=1) and glass (n=1.5). This broadband anti-reflective effect recovers 1.8–2.4% of incident irradiance normally lost to surface reflection — particularly effective in the 400–700 nm photovoltaic window.',
  },
  {
    num: '03',
    icon: ThermometerSnowflake,
    title: 'Thermal Management via IR Emissivity',
    body: "Graphene's near-perfect IR emissivity (ε≈0.96) accelerates radiative cooling of the panel surface. Coated panels measured 5–6°C cooler under identical irradiance — a 5°C reduction corresponds to a ~2.5% power recovery in silicon PV cells (−0.45%/°C coefficient).",
  },
  {
    num: '04',
    icon: Droplets,
    title: 'Self-Cleaning Through Superhydrophobicity',
    body: 'Water droplets on GRAFFISOL surfaces exhibit high contact angle (>110°) and low sliding angle (<15°). Rain or morning dew carries dust particles off the panel without manual cleaning — field data shows 40% reduction in soiling-related losses across 12-month observation cycles.',
  },
]

const PROCESS_STEPS = [
  { step: '1', icon: Paintbrush, label: 'Surface preparation', detail: 'Clean panels with water + mild surfactant. Remove bird droppings, calcium deposits, and grease. Allow to dry fully (≥2 hr after cleaning).' },
  { step: '2', icon: FlaskConical, label: 'Mix & prime spray equipment', detail: 'Dilute GRAFFISOL concentrate 1:3 (conc:DI water). Load into HVLP gun, set pressure 2–3 bar. Spray test on cardboard before panel application.' },
  { step: '3', icon: SprayCan, label: 'Apply coating', detail: 'Spray 15 mL/m² in two overlapping passes. Maintain 30 cm gun distance. Avoid application in direct sun or wind >10 km/h.' },
  { step: '4', icon: Clock, label: 'Flash & cure', detail: 'Allow 30-min flash dry. No rain contact for 24 hr. Full GNP cross-linking and hydrophobic character develops within 72 hr.' },
  { step: '5', icon: CalendarDays, label: 'Recoat schedule', detail: 'Inspect annually. Recoat every 3–5 years depending on soiling environment. No panel removal or structural changes needed.' },
]

export default function GraffisolHowItWorks() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/graffisol_lifecycle_factory_coating.png')" }}>
      <PageHeader product="GRAFFISOL" title="How It Works" pageNum="8" color={COLOR} dark />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>

        {/* LEFT — mechanism */}
        <div style={{ flex: 1, padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <Beaker size={20} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
              Mechanism — From Nanocoating to Power Gain
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            {[
              { src: '/images/graffisol_lifecycle_lab_making.png', caption: 'GNP dispersion — batch quality check' },
              { src: '/images/graffisol_lifecycle_site_cleaning.png', caption: 'Site panel surface preparation' },
            ].map(({ src, caption }) => (
              <div key={src} style={{ position: 'relative', borderRadius: 10, overflow: 'hidden', border: `1px solid rgba(255,255,255,0.1)`, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.2)' }}>
                <img src={src} alt={caption} style={{ width: '100%', height: 90, objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', padding: '16px 10px 6px 10px' }}>
                  <span style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.9)', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>{caption}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1, marginTop: 4 }}>
            {MECHANISM_STEPS.map(({ num, icon: Icon, title, body }) => (
              <div key={num} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '14px 16px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.1)' }}>
                <div style={{ position: 'relative', width: 42, height: 42, borderRadius: 10, background: `${COLOR}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={22} color={COLOR} />
                  <div style={{ position: 'absolute', top: -6, right: -6, background: COLOR, color: '#000', fontSize: 8, fontWeight: 800, padding: '2px 4px', borderRadius: 4, fontFamily: 'Outfit, sans-serif' }}>
                    {num}
                  </div>
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 11.5, fontWeight: 700, color: '#fff', marginBottom: 4 }}>{title}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#9ca3af', lineHeight: 1.55 }}>{body}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: `linear-gradient(to right, rgba(245,158,11,0.15), rgba(245,158,11,0.02))`, border: `1px solid ${COLOR}40`, borderRadius: 12, padding: '12px 14px', display: 'flex', gap: 12, alignItems: 'center' }}>
            <div style={{ width: 36, height: 36, borderRadius: 8, background: COLOR, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckCircle size={20} color="#000" />
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#e5e7eb', lineHeight: 1.5 }}>
              <strong style={{ color: COLOR }}>IEC Validation:</strong> Power yield measurements per IEC 60904-1 on coated vs. reference panels in Jodhpur confirm +11.8% yield gain across a 90-day monitoring period.
            </div>
          </div>
        </div>

        {/* RIGHT — application process */}
        <div style={{ width: '38%', borderLeft: '1px solid rgba(255,255,255,0.08)', padding: '20px 24px', display: 'flex', flexDirection: 'column', gap: 18, background: 'rgba(255,255,255,0.015)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <SprayCan size={18} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
              Application Process
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: `1px solid rgba(255,255,255,0.1)`, boxShadow: '0 4px 6px -1px rgba(0,0,0,0.2)' }}>
            <img src="/images/graffisol_lifecycle_lab_testing.png" alt="lab testing" style={{ width: '100%', height: 90, objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)', padding: '16px 10px 6px 10px' }}>
              <span style={{ fontSize: 8.5, color: 'rgba(255,255,255,0.9)', fontStyle: 'italic', fontWeight: 500 }}>Coating adhesion & hydrophobicity QC</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: 15, top: 10, bottom: 20, width: 2, background: 'rgba(255,255,255,0.1)', zIndex: 0 }} />

            {PROCESS_STEPS.map(({ step, icon: Icon, label, detail }, i) => (
              <div key={step} style={{ display: 'flex', gap: 14, paddingBottom: i < PROCESS_STEPS.length - 1 ? 16 : 0, position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#111827', border: `2px solid ${COLOR}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 4px rgba(245,158,11,0.1)' }}>
                    <Icon size={14} color={COLOR} />
                  </div>
                </div>
                <div style={{ paddingTop: 4, background: 'rgba(17,24,39,0.4)', padding: '8px 12px', borderRadius: 8, border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(4px)', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 2 }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 800, color: COLOR }}>Step {step}:</span>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700, color: '#fff' }}>{label}</span>
                  </div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', lineHeight: 1.5 }}>{detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: `1px solid ${COLOR}40`, marginTop: 16, boxShadow: `0 4px 12px -2px ${COLOR}30` }}>
            <img src="/images/graffisol_lifecycle_site_result.png" alt="site result" style={{ width: '100%', height: 85, objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.8), transparent)' }} />
            <div style={{ position: 'absolute', bottom: 10, left: 12 }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 24, fontWeight: 700, color: COLOR, lineHeight: 1 }}>+12%</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#e5e7eb', marginTop: 2 }}>Power yield — IEC 60904</div>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '12px 14px' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 8 }}>Quick Reference</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[['Coverage rate', '15 mL/m²'], ['Application', 'HVLP spray / roller'], ['Flash time', '30 min (no rain 24 hr)'], ['Recoat cycle', '3–5 years'], ['Pack sizes', '1 L, 5 L, 20 L']].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 6, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af' }}>{k}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#f3f4f6', fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} dark />
    </div>
  )
}
