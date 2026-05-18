import React from 'react'
import { Cpu, Wrench, Zap, Factory, Package, Activity } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#d97706'

const MECHANISM_STEPS = [
  {
    num: '01',
    title: 'GNP Dispersion in Carrier',
    body: 'Exfoliated Graphene Nano-Platelets (GNP, 3–10 layers, lateral size 1–5 µm) are ultrasonically dispersed in a proprietary aqueous carrier at 0.5 g/L concentration. The surfactant prevents reaggregation and ensures colloidal stability for 12 months.',
    icon: Cpu,
  },
  {
    num: '02',
    title: 'Integration into Cement Matrix',
    body: 'GRAPHACRETE is added directly to the batching water. GNP platelets distribute uniformly through the mix without flocculation. The negative surface charge of GNP attracts calcium ions from cement hydration — anchoring platelets within the forming C-S-H gel.',
    icon: Zap,
  },
  {
    num: '03',
    title: 'Platelet Alignment & Crack Bridging',
    body: 'During hardening, GNP platelets align perpendicular to the stress direction within C-S-H gel clusters. This geometry creates a multi-layered crack-bridging network — the platelet aspect ratio (>500:1) means each GNP spans thousands of micro-voids simultaneously.',
    icon: Activity,
  },
  {
    num: '04',
    title: 'Strength Gain & Cement Filler Effect',
    body: '28-day compressive results confirm 24–28% strength gains across M20–M70. Because GNP occupies pore space normally left void, a proportional cement reduction (13%) achieves parity with unreduced standard mixes — delivering simultaneous strength gain and cost savings.',
    icon: Factory,
  },
]

const PROCESS_STEPS = [
  { step: '1', label: 'Measure dosage', detail: '100–300 mL per 50 kg cement bag (0.05–0.1% by cement weight). Use graduated container.' },
  { step: '2', label: 'Add to batch water', detail: 'Pour GRAPHACRETE into mixing water before cement. Stir briefly. No pre-mixing required.' },
  { step: '3', label: 'Charge mixer', detail: 'Proceed with standard concrete batching sequence. Extend mixing by +1 min to ensure full dispersion.' },
  { step: '4', label: 'Reduce cement', detail: 'Reduce cement by 13% (or verify by trial mix). Maintain target w/c ratio. Slump as standard.' },
  { step: '5', label: 'Place & cure', detail: 'Standard curing protocol. No changes to formwork, curing compound, or finishing procedures.' },
]

export default function GraphacreteHowItWorks() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/graphacrete-01.jpg')" }}>
      <PageHeader product="GRAPHACRETE" title="How It Works" pageNum="8" color={COLOR} dark />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>

        {/* LEFT — mechanism */}
        <div style={{ flex: 1, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <Cpu size={18} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
              Mechanism — From Nanoplatelet to Structural Gain
            </div>
          </div>

          {/* Lifecycle image row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { src: '/images/graphacrete_lifecycle_lab_making.png', caption: 'GNP dispersion & QC' },
              { src: '/images/graphacrete_lifecycle_site_pouring.png', caption: 'Site placement — M50 beam pour' },
            ].map(({ src, caption }) => (
              <div key={src} style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: `1px solid ${COLOR}25`, boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)' }}>
                <img src={src} alt={caption} style={{ width: '100%', height: 72, objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.65)', padding: '3px 7px' }}>
                  <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.75)', fontFamily: 'Inter, sans-serif', fontStyle: 'italic' }}>{caption}</span>
                </div>
              </div>
            ))}
          </div>

          {/* mechanism steps */}
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

          {/* SEM note box */}
          <div style={{ background: `rgba(217,119,6,0.08)`, border: `1px solid ${COLOR}33`, borderRadius: 12, padding: '8px 12px', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: COLOR, marginTop: 2, flexShrink: 0 }} />
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: `${COLOR}cc`, lineHeight: 1.5 }}>
              <strong style={{ color: COLOR }}>SEM Validation:</strong> Cross-section electron microscopy of hardened specimens confirms dense GNP integration within C-S-H gel — no agglomeration, uniform spatial distribution. Available in NABL test certificate on request.
            </div>
          </div>
        </div>

        {/* RIGHT — application process */}
        <div style={{ width: '34%', borderLeft: '1px solid rgba(255,255,255,0.08)', padding: '14px 14px', display: 'flex', flexDirection: 'column', gap: 12, background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Wrench size={16} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
              Application Process
            </div>
          </div>

          {/* lifecycle: lab testing → site result */}
          <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: `1px solid ${COLOR}25`, boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)' }}>
            <img src="/images/graphacrete_lifecycle_lab_testing.png" alt="NABL lab testing" style={{ width: '100%', height: 80, objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.65)', padding: '3px 7px' }}>
              <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.75)', fontStyle: 'italic' }}>NABL laboratory — 7 & 28 day cube testing</span>
            </div>
          </div>

          {/* steps */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {PROCESS_STEPS.map(({ step, label, detail }, i) => (
              <div key={step} style={{ display: 'flex', gap: 10, paddingBottom: 10, borderBottom: i < PROCESS_STEPS.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none', marginBottom: i < PROCESS_STEPS.length - 1 ? 10 : 0 }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                  <div style={{ width: 22, height: 22, borderRadius: 6, background: `${COLOR}20`, border: `1.5px solid ${COLOR}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

          {/* result image */}
          <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: `1px solid ${COLOR}25`, marginTop: 'auto', boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)' }}>
            <img src="/images/graphacrete_lifecycle_site_result.png" alt="site result" style={{ width: '100%', height: 72, objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,rgba(0,0,0,0.5),transparent)' }} />
            <div style={{ position: 'absolute', bottom: 6, left: 8 }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: COLOR }}>+25%</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, color: 'rgba(255,255,255,0.7)' }}>28-day compressive gain</div>
            </div>
          </div>

          {/* dosage quick ref */}
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '8px 10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <Package size={14} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, letterSpacing: 1, textTransform: 'uppercase' }}>Quick Reference</div>
            </div>
            {[['Dosage rate', '0.05–0.1% of cement wt.'], ['Form', 'Liquid admixture'], ['Shelf life', '12 months sealed'], ['Pack sizes', '5 L, 20 L, 200 L drum']].map(([k, v]) => (
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
