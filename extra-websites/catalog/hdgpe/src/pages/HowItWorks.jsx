import React from 'react'
import { Cpu, Layers, Shield, Zap, Target, CheckCircle } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#06b6d4'

const MECHANISM_STEPS = [
  {
    num: '01',
    title: 'Masterbatch Formulation',
    body: 'GNP (5–15 layers, 2–6 µm lateral size) is compounded with HDPE carrier resin at 5–10 wt% concentrate using twin-screw extrusion. The resulting masterbatch pellets are surface-treated to prevent platelet reaggregation during downstream processing — confirmed by XRD interlayer spacing analysis.',
    icon: Cpu,
  },
  {
    num: '02',
    title: 'Platelet Intercalation During Processing',
    body: 'At standard HDPE processing temperatures (180–240°C), shear forces in the extruder cause GNP platelets to align within the flowing polymer melt. Alignment along the primary stress axis means platelets are correctly oriented before the melt solidifies — maximising mechanical reinforcement efficiency.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Crack-Arrest Network in Solid HDPE',
    body: 'In the solid matrix, GNP platelets with aspect ratio >800:1 create a percolating network that arrests crack propagation. When tensile or impact stress initiates a crack, the platelet must be pulled out or broken rather than bypassed — dramatically increasing energy-to-failure (toughness) and yield strength.',
    icon: Shield,
  },
  {
    num: '04',
    title: 'UV & Chemical Resistance Enhancement',
    body: "GNP's sp\u00B2 carbon lattice is opaque to UV (absorptance >99% below 380 nm). Platelets within the surface layer act as a UV barrier, slowing photo-oxidative chain scission in HDPE. UV lifespan increases +20% in accelerated weathering tests (ISO 4892-3), directly extending field service life.",
    icon: Zap,
  },
]

const PROCESS_STEPS = [
  { step: '1', label: 'Calculate masterbatch quantity', detail: 'Target loading: 0.5–2% GNP in final part. Masterbatch is 5–10% GNP, so blend 5–20 kg MB per 100 kg base HDPE.' },
  { step: '2', label: 'Blend in hopper / silo', detail: 'Tumble-blend masterbatch pellets with base HDPE resin for 5 min. No liquid handling, no dust. Fully dry process.' },
  { step: '3', label: 'Process at standard parameters', detail: 'Extrusion, blow moulding, or injection — no changes to temperature, screw speed, or tooling. HD-G-PE is drop-in compatible.' },
  { step: '4', label: 'QC sample first run', detail: 'Pull dumbbell specimens (ASTM D638) from first run. Confirm tensile + elongation vs. baseline. Adjust loading if needed.' },
  { step: '5', label: 'Scale to production', detail: 'After QC sign-off, blend continuously in-line. Masterbatch metered by gravimetric dosing unit for precision ±0.05%.' },
]

export default function HdgpeHowItWorks() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/hd-g-pe-01.jpg')" }}>
      <PageHeader product="HD-G-PE" title="How It Works" pageNum="8" color={COLOR} dark />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>

        {/* LEFT — mechanism */}
        <div style={{ flex: 1, padding: '14px 16px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <Cpu size={18} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
              Mechanism — From Masterbatch to Molecular Reinforcement
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {[
              { src: '/images/hdgpe_lifecycle_lab_making.png', caption: 'GNP masterbatch compounding lab' },
              { src: '/images/hdgpe_lifecycle_factory_extrusion.png', caption: 'HD-G-PE pipe extrusion line' },
            ].map(({ src, caption }) => (
              <div key={src} style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: `1px solid ${COLOR}25`, boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)' }}>
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
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', lineHeight: 1.55 }}>{body}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: `rgba(6,182,212,0.08)`, border: `1px solid ${COLOR}33`, borderRadius: 12, padding: '8px 12px', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: COLOR, marginTop: 2, flexShrink: 0 }} />
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: `${COLOR}cc`, lineHeight: 1.5 }}>
              <strong style={{ color: COLOR }}>ASTM Validation:</strong> Tensile (D638), notched Izod impact (D256), and flex modulus (D790) tests on HD-G-PE specimens at 1% GNP loading confirm consistent property gains across 8 polymer lots — FSSAI food-grade compliance additionally verified for pipe applications.
            </div>
          </div>
        </div>

        {/* RIGHT — application process */}
        <div style={{ width: '34%', borderLeft: '1px solid rgba(255,255,255,0.08)', padding: '14px 14px', display: 'flex', flexDirection: 'column', gap: 12, background: 'rgba(255,255,255,0.02)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <Target size={18} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#fff', letterSpacing: 1, textTransform: 'uppercase' }}>
              Integration Process
            </div>
          </div>

          <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: `1px solid ${COLOR}25`, boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)' }}>
            <img src="/images/hdgpe_lifecycle_lab_testing.png" alt="lab testing" style={{ width: '100%', height: 80, objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'rgba(0,0,0,0.65)', padding: '3px 7px' }}>
              <span style={{ fontSize: 8, color: 'rgba(255,255,255,0.75)', fontStyle: 'italic' }}>ASTM D638 tensile specimen QC testing</span>
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
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#9ca3af', lineHeight: 1.5, marginTop: 1 }}>{detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: `1px solid ${COLOR}25`, marginTop: 'auto', boxShadow: '0 4px 12px -2px rgba(0,0,0,0.1)' }}>
            <img src="/images/hdgpe_lifecycle_result.png" alt="result" style={{ width: '100%', height: 72, objectFit: 'cover', display: 'block' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right,rgba(0,0,0,0.55),transparent)' }} />
            <div style={{ position: 'absolute', bottom: 6, left: 8 }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: COLOR }}>+30%</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, color: 'rgba(255,255,255,0.7)' }}>Tensile strength — ASTM D638</div>
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '8px 10px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 5 }}>
              <CheckCircle size={14} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, letterSpacing: 1, textTransform: 'uppercase' }}>Quick Reference</div>
            </div>
            {[['Loading range', '0.5–2% by weight'], ['MB concentrate', '5–10% GNP in HDPE'], ['Processing temps', '180–240°C'], ['FSSAI compliant', 'Yes (food-grade)'], ['Pack sizes', '10 kg, 25 kg bags']].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '3px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#9ca3af' }}>{k}</span>
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
