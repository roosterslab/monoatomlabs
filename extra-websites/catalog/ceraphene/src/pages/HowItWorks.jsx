import React from 'react'
import { Layers, Zap, ShieldCheck, Droplets } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#64748b'

const MECHANISM_STEPS = [
  {
    num: '01',
    title: 'GNP-Ceramic Nanolayer Formulation',
    body: 'GNP (2–6 layers, <3 µm lateral) is co-dispersed with SiO₂ and TiO₂ nanoparticles in an organosilane carrier. The hybrid matrix forms a covalently bonded ceramic network on cure — GNP provides lattice reinforcement within the ceramic framework, raising hardness from 7H (ceramic alone) to 9H+ (GNP-ceramic composite).',
    icon: Layers,
  },
  {
    num: '02',
    title: 'Covalent Bonding to Automotive Clear Coat',
    body: 'Silanol groups from the carrier react with hydroxyl groups on the clear coat surface, forming Si–O–C bonds during 60–80°C cure. GNP platelets are trapped within this cross-linked network — covalent attachment means CERAPHENE cannot be washed off, UV-degraded, or detached by car wash brushes.',
    icon: Zap,
  },
  {
    num: '03',
    title: 'Thermal Barrier & IR Reflection',
    body: "GNP's in-plane thermal conductivity (~2000 W/mK) combined with its near-perfect IR reflectivity disperses localised heat from sunlight across the panel surface. Panel surface temperatures measured 8–12°C lower under identical irradiance — preventing thermal softening of the clear coat polymer and reducing paint fade.",
    icon: ShieldCheck,
  },
  {
    num: '04',
    title: 'Hydrophobicity & Self-Cleaning Durability',
    body: "The cured GNP-ceramic surface exhibits contact angle >115° with 9H+ scratch resistance. Water beads and rolls off sub-3° panel angles, carrying embedded particulates. Unlike polymer sealants (6–12 months), CERAPHENE's inorganic Si-O network is not degraded by UV, acidic rain, or bird drop etching — 3–4 year durability confirmed.",
    icon: Droplets,
  },
]

const PROCESS_STEPS = [
  { step: '1', label: 'Full decontamination wash', detail: 'Two-bucket wash, iron fallout remover spray, clay bar full panel decontamination. Ensure zero surface contamination.' },
  { step: '2', label: 'Paint correction (optional)', detail: 'Machine polish to remove swirl marks and oxidation. CERAPHENE locks in the corrected finish — prep quality determines final gloss depth.' },
  { step: '3', label: 'Panel wipe with IPA carrier', detail: 'Isopropyl alcohol (70%) panel wipe removes polishing oils and residue. Apply in cross pattern, buff off residue. Surface is now coating-ready.' },
  { step: '4', label: 'Coat application — 1 panel at a time', detail: '3–4 drops on suede applicator block. Apply in overlapping linear passes per panel. Flash 60–90 sec until "high spots" appear, then level with clean microfibre.' },
  { step: '5', label: 'Cure & quality inspection', detail: 'Controlled humidity cure 60–80°C (IR lamp or heated bay) for 30 min. Full 7-day ambient cure thereafter. Water test at 24 hr to confirm beading.' },
]

export default function CerapheneHowItWorks() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/ceraphene-01.jpg')" }}>
      <PageHeader product="CERAPHENE" title="How It Works" pageNum="8" color={COLOR} dark />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>

        {/* LEFT — mechanism */}
        <div style={{ flex: 1, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.9)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 2 }}>
            Mechanism — From GNP-Ceramic to 9H+ Protection
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { src: '/images/ceraphene_lifecycle_lab_making.png', caption: 'GNP-ceramic formulation lab' },
              { src: '/images/ceraphene_lifecycle_studio_application.png', caption: 'Professional studio application' },
            ].map(({ src, caption }) => (
              <div key={src} style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)' }}>
                <img src={src} alt={caption} style={{ width: '100%', height: 72, objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.65)', padding: '3px 7px' }}>
                  <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif', fontStyle: 'italic' }}>{caption}</span>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, flex: 1 }}>
            {MECHANISM_STEPS.map(({ num, title, body, icon: Icon }) => (
              <div key={num} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '8px 10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: COLOR, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={16} color="#ffffff" />
                </div>
                <div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, marginBottom: 2 }}>{title}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.5)', lineHeight: 1.55 }}>{body}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: `rgba(100,116,139,0.1)`, border: `1px solid ${COLOR}33`, borderRadius: 12, padding: '8px 12px', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: COLOR, marginTop: 2, flexShrink: 0 }} />
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: `${COLOR}cc`, lineHeight: 1.5 }}>
              <strong style={{ color: COLOR }}>Hardness Validation:</strong> Pencil hardness (ASTM D3363) and nano-indentation (ISO 14577) tests on cured CERAPHENE confirm 9H+ pencil hardness and 8–11 GPa nano-indentation hardness — 3–4× harder than conventional ceramic coatings at 7H.
            </div>
          </div>
        </div>

        {/* RIGHT — application process */}
        <div style={{ width: '34%', borderLeft: '1px solid rgba(255,255,255,0.08)', padding: '14px 14px', display: 'flex', flexDirection: 'column', gap: 12, background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.9)', letterSpacing: 1, textTransform: 'uppercase' }}>
            Application Process
          </div>

          <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)' }}>
            <img src="/images/ceraphene_lifecycle_lab_testing.png" alt="lab testing" style={{ width: '100%', height: 80, objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.65)', padding: '3px 7px' }}>
              <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.75)', fontStyle: 'italic' }}>Pencil hardness & water contact angle QC test</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESS_STEPS.map(({ step, label, detail }, i) => (
              <div key={step} style={{ display: 'flex', gap: 10, paddingBottom: 10, borderBottom: i < PROCESS_STEPS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', marginBottom: i < PROCESS_STEPS.length - 1 ? 10 : 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${COLOR}20`, border: `1.5px solid ${COLOR}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9, fontWeight: 700, color: COLOR }}>{step}</span>
                  </div>
                  {i < PROCESS_STEPS.length - 1 && <div style={{ width: 1, flex: 1, background: `${COLOR}30`, minHeight: 8, marginTop: 3 }} />}
                </div>
                <div style={{ paddingTop: 2 }}>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.82)' }}>{label}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: 'rgba(255,255,255,0.42)', lineHeight: 1.5, marginTop: 1 }}>{detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)', marginTop: 'auto' }}>
            <img src="/images/ceraphene_lifecycle_result.png" alt="result" style={{ width: '100%', height: 72, objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,rgba(0,0,0,0.55),transparent)' }} />
            <div style={{ position: 'absolute', bottom: 6, left: 8 }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#e2e8f0' }}>9H+</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, color: 'rgba(255,255,255,0.7)' }}>Pencil hardness — ASTM D3363</div>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '8px 10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, letterSpacing: 1, textTransform: 'uppercase', marginBottom: 5 }}>Quick Reference</div>
            {[['Hardness', '9H+ (ASTM D3363)'], ['Durability', '3–4 years'], ['Hydrophobicity', '>115° contact angle'], ['Heat resistance', '200°C sustained'], ['Pack', '30 mL (1 full car), 100 mL']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: 'rgba(255,255,255,0.4)' }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: 'rgba(255,255,255,0.78)', fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} dark />
    </div>
  )
}
