import React from 'react'
import Logo from '../../../brand/Logo'

const C      = '#f59e0b'
const C_LIGHT= '#fcd34d'
const BOX    = { face: 5.2, side: 2.13, total: 15.567, height: 6.65 }
const TAB_W  = BOX.total - 2 * BOX.face - 2 * BOX.side

const SPECS = [
  { l: 'Power Yield Gain',       v: '+12%',    ref: 'IEC 60904' },
  { l: 'Panel Temperature Drop', v: '5–6°C',   ref: 'Field avg' },
  { l: 'Soiling Loss Reduction', v: '−40%',    ref: 'IEA PVPS' },
  { l: 'Anti-Reflective Gain',   v: '+2.4%',   ref: 'UV spectrum' },
  { l: 'UV Degradation Shield',  v: '+20%',    ref: 'Accelerated' },
  { l: 'Self-Cleaning Angle',    v: '<15°',    ref: 'Contact angle' },
  { l: 'Recoat Cycle',           v: '3–5 YR',  ref: 'Outdoor exposure' },
  { l: 'Coverage Rate',          v: '15 mL/m²', ref: 'Spray application' },
]

const DOSAGE = [
  { step: '1', txt: 'Clean panel surface — remove dust, bird droppings, grease' },
  { step: '2', txt: 'Spray 15 mL/m² evenly using HVLP gun or roller' },
  { step: '3', txt: 'Cure 4–6 hr. No washing for 24 hr. Full cure in 72 hr.' },
]

const CERTS = ['IEC 60904 Tested', '150+ MW Deployed', 'FSSAI Compatible', '26+ Solar Projects']

const APPS = [
  { icon: '☀️', label: 'Utility' },
  { icon: '🏭', label: 'Industrial' },
  { icon: '🏘', label: 'Rooftop' },
  { icon: '🌊', label: 'Floating' },
]

function Cert({ label, fs, C, C_LIGHT }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 * fs, padding: `${4 * fs}px ${8 * fs}px`, background: `rgba(245,158,11,0.1)`, border: `1px solid ${C}44`, borderRadius: 3 * fs }}>
      <div style={{ width: 5 * fs, height: 5 * fs, borderRadius: '50%', background: C_LIGHT, flexShrink: 0 }} />
      <span style={{ fontSize: 7 * fs, color: C_LIGHT, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{label}</span>
    </div>
  )
}

export default function WrapGraffisolV2({ scale = 1 }) {
  const px = (i) => Math.round(i * 96 * scale)
  const W      = px(BOX.total), H = px(BOX.height)
  const backW  = px(BOX.face), side1W = px(BOX.side)
  const frontW = px(BOX.face), side2W = px(BOX.side), tabW = px(TAB_W)
  const DIV    = '1px solid rgba(255,255,255,0.09)'
  const fs     = scale

  return (
    <div style={{ width: W, height: H, display: 'flex', backgroundColor: '#050505', overflow: 'hidden', flexShrink: 0, userSelect: 'none', fontFamily: "'Inter', sans-serif" }}>

      {/* ── BACK FACE ─────────────────────────────────── */}
      <div style={{ width: backW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRight: DIV }}>
        <img src="/images/graffisol_lifecycle_factory_coating.png"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, opacity: 0.42 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(170deg,rgba(26,10,0,0.9) 0%,rgba(5,5,5,0.6) 55%,rgba(0,0,0,0.92) 100%)', zIndex: 2 }} />

        {/* logo header */}
        <div style={{ position: 'relative', zIndex: 5, padding: `${14 * fs}px ${18 * fs}px`, borderBottom: DIV, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo size={18 * fs} theme="dark" />
          <div style={{ fontSize: 7 * fs, color: C, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>Technical Datasheet</div>
        </div>

        <div style={{ position: 'relative', zIndex: 5, padding: `${12 * fs}px ${18 * fs}px`, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>

          {/* performance table */}
          <div>
            <div style={{ fontSize: 9 * fs, color: C, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 * fs }}>
              Performance Benchmarks
            </div>
            {SPECS.map(({ l, v, ref }) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: `${5 * fs}px 0` }}>
                <div>
                  <span style={{ color: '#c0c0c0', fontSize: 8 * fs }}>{l}</span>
                  <span style={{ color: '#555', fontSize: 7 * fs, marginLeft: 5 * fs }}>({ref})</span>
                </div>
                <span style={{ color: 'white', fontSize: 11 * fs, fontWeight: 700, fontFamily: "'Rajdhani', sans-serif", letterSpacing: '0.04em' }}>{v}</span>
              </div>
            ))}
          </div>

          {/* dosage */}
          <div style={{ marginTop: 10 * fs }}>
            <div style={{ fontSize: 9 * fs, color: C, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 * fs }}>
              Application Guide
            </div>
            {DOSAGE.map(({ step, txt }) => (
              <div key={step} style={{ display: 'flex', gap: 7 * fs, marginBottom: 7 * fs }}>
                <div style={{ width: 14 * fs, height: 14 * fs, borderRadius: '50%', background: C, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontSize: 7 * fs, fontWeight: 700, color: '#000' }}>{step}</span>
                </div>
                <span style={{ fontSize: 8 * fs, color: '#bbb', lineHeight: 1.45 }}>{txt}</span>
              </div>
            ))}
          </div>

          {/* lab testing image inset */}
          <div style={{ marginTop: 8 * fs, position: 'relative', height: 52 * fs, borderRadius: 5 * fs, overflow: 'hidden', border: `1px solid ${C}33` }}>
            <img src="/images/graffisol_lifecycle_lab_making.png"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.72 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(0,0,0,0.5) 0%,transparent 100%)' }} />
            <div style={{ position: 'absolute', bottom: 5 * fs, left: 8 * fs, fontSize: 7 * fs, color: C_LIGHT, fontStyle: 'italic' }}>GNP dispersion — batch quality check</div>
          </div>

          {/* certifications */}
          <div style={{ marginTop: 10 * fs }}>
            <div style={{ fontSize: 9 * fs, color: C, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 7 * fs }}>Certifications & Track Record</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 * fs }}>
              {CERTS.map(c => <Cert key={c} label={c} fs={fs} C={C} C_LIGHT={C_LIGHT} />)}
            </div>
          </div>
        </div>

        <div style={{ position: 'relative', zIndex: 5, padding: `${10 * fs}px ${18 * fs}px`, borderTop: DIV, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: 7 * fs, color: 'rgba(255,255,255,0.35)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>monoatomlabs.com</span>
          <div style={{ display: 'flex', gap: 4 * fs, alignItems: 'center' }}>
            <div style={{ width: 5 * fs, height: 5 * fs, background: C, borderRadius: '50%' }} />
            <span style={{ fontSize: 7 * fs, color: '#666' }}>Batch certified</span>
          </div>
        </div>
      </div>

      {/* ── LEFT SIDE ─────────────────────────────────── */}
      <div style={{ width: side1W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', borderRight: DIV, padding: `${14 * fs}px 0` }}>
        <img src="/images/graffisol_lifecycle_lab_testing.png"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, opacity: 0.28 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,10,0,0.75)', zIndex: 2 }} />

        {[{ v: '+12%', l: 'Power Yield' }, { v: '5–6°C', l: 'Cooler' }, { v: '−40%', l: 'Soiling' }].map(({ v, l }) => (
          <div key={l} style={{ position: 'relative', zIndex: 5, textAlign: 'center', background: `rgba(245,158,11,0.12)`, border: `1px solid ${C}55`, borderRadius: 5 * fs, padding: `${5 * fs}px ${8 * fs}px`, width: '78%' }}>
            <div style={{ fontSize: 14 * fs, fontWeight: 700, color: C_LIGHT, fontFamily: "'Rajdhani', sans-serif", lineHeight: 1 }}>{v}</div>
            <div style={{ fontSize: 6.5 * fs, color: C, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 2 * fs }}>{l}</div>
          </div>
        ))}

        <div style={{ position: 'relative', zIndex: 5, writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 10 * fs }}>
          <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: 8 * fs, letterSpacing: '0.18em' }}>GRAPHENE-ENHANCED</span>
          <span style={{ color: '#fff', fontSize: 15 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>SOLAR COATING</span>
        </div>
      </div>

      {/* ── FRONT FACE ────────────────────────────────── */}
      <div style={{ width: frontW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIV }}>
        <img src="/images/graffisol-01.jpg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, opacity: 0.62 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(0,0,0,0.8) 0%,rgba(0,0,0,0.1) 32%,rgba(0,0,0,0.14) 58%,rgba(0,0,0,0.9) 100%)', zIndex: 2 }} />
        {/* left accent */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3 * fs, background: C, zIndex: 3, opacity: 0.8 }} />
        {/* separator */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: '28%', height: 1.5 * fs, background: C, zIndex: 3, opacity: 0.65 }} />

        {/* top bar */}
        <div style={{ position: 'absolute', top: 16 * fs, left: 18 * fs, right: 18 * fs, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 5 }}>
          <div style={{ display: 'flex', gap: 6 * fs }}>
            <div style={{ border: `1px solid ${C}66`, borderRadius: 99, padding: `${3 * fs}px ${9 * fs}px`, background: 'rgba(245,158,11,0.12)' }}>
              <span style={{ color: C_LIGHT, fontSize: 7.5 * fs, fontWeight: 700, letterSpacing: '0.06em' }}>150+ MW DEPLOYED</span>
            </div>
            <div style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: 99, padding: `${3 * fs}px ${9 * fs}px`, background: 'rgba(255,255,255,0.05)' }}>
              <span style={{ color: '#ccc', fontSize: 7.5 * fs, letterSpacing: '0.05em' }}>IEC 60904</span>
            </div>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 7.5 * fs, fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, letterSpacing: '0.15em' }}>MONOATOM LABS</span>
        </div>

        {/* center brand */}
        <div style={{ position: 'absolute', top: '16%', left: 0, right: 0, textAlign: 'center', zIndex: 5, padding: `0 ${18 * fs}px` }}>
          <div style={{ color: `${C}44`, fontSize: 11 * fs, fontWeight: 800, letterSpacing: '0.6em', marginBottom: -1 * fs, fontFamily: "'Rajdhani', sans-serif" }}>
            SOLAR PANEL
          </div>
          <div style={{ color: 'white', fontSize: 57 * fs, fontWeight: 900, letterSpacing: '0.01em', lineHeight: 0.88, fontFamily: "'Rajdhani', sans-serif", textShadow: `0 2px 40px rgba(245,158,11,0.7),0 0 80px rgba(0,0,0,0.9)` }}>
            GRAFFISOL
          </div>
          <div style={{ width: 60 * fs, height: 2.5 * fs, background: C, margin: `${10 * fs}px auto` }} />
          <div style={{ color: '#e0e0e0', fontSize: 9.5 * fs, letterSpacing: '0.08em', lineHeight: 1.5 }}>
            Graphene Nanocoating for Solar Panels
          </div>
          <div style={{ marginTop: 10 * fs, display: 'flex', flexDirection: 'column', gap: 5 * fs, textAlign: 'left', padding: `0 ${10 * fs}px` }}>
            {['Self-cleaning surface — dust rolls off below 15° tilt', 'Reduces thermal losses: panels run 5–6°C cooler', '₹1,200/kW/yr additional revenue from efficiency gain'].map(t => (
              <div key={t} style={{ display: 'flex', gap: 6 * fs, alignItems: 'flex-start' }}>
                <div style={{ width: 5 * fs, height: 5 * fs, borderRadius: '50%', background: C, marginTop: 3.5 * fs, flexShrink: 0 }} />
                <span style={{ fontSize: 8.5 * fs, color: '#d0d0d0', lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* application tags */}
        <div style={{ position: 'absolute', bottom: '29%', left: 18 * fs, right: 18 * fs, display: 'flex', gap: 6 * fs, zIndex: 5 }}>
          {APPS.map(({ icon, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 4 * fs, background: 'rgba(0,0,0,0.55)', border: `1px solid rgba(255,255,255,0.12)`, borderRadius: 4 * fs, padding: `${3 * fs}px ${7 * fs}px` }}>
              <span style={{ fontSize: 9 * fs }}>{icon}</span>
              <span style={{ fontSize: 7 * fs, color: '#bbb' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* bottom stat strip */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '28%', background: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: `${8 * fs}px ${14 * fs}px`, zIndex: 5, gap: 8 * fs }}>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {[{ val: '+12%', lab: 'POWER' }, { val: '5–6°C', lab: 'COOLER' }, { val: '−40%', lab: 'SOILING' }, { val: '₹1.2K', lab: '/KW/YR' }].map(({ val, lab }) => (
              <div key={lab} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 17 * fs, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 6.5 * fs, color: C, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: 2 * fs }}>{lab}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20 * fs, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 6 * fs }}>
            {[{ val: '26+', lab: 'Projects Deployed' }, { val: '150+ MW', lab: 'Panels Coated' }].map(({ val, lab }) => (
              <div key={lab} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 12 * fs, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: '#fff', lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 6.5 * fs, color: '#777', textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: 1.5 * fs }}>{lab}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── RIGHT SIDE ────────────────────────────────── */}
      <div style={{ width: side2W, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', borderRight: DIV, padding: `${14 * fs}px 0` }}>
        <img src="/images/graffisol_lifecycle_site_result.png"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, opacity: 0.28 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(26,10,0,0.75)', zIndex: 2 }} />

        <div style={{ position: 'relative', zIndex: 5, writingMode: 'vertical-rl', textOrientation: 'mixed', display: 'flex', alignItems: 'center', gap: 10 * fs }}>
          <span style={{ color: 'rgba(255,255,255,0.28)', fontSize: 8 * fs, letterSpacing: '0.18em' }}>HARNESS MORE · LOSE LESS</span>
          <span style={{ color: '#fff', fontSize: 15 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>SOLAR EFFICIENCY</span>
        </div>

        <div style={{ position: 'relative', zIndex: 5, writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', display: 'flex', flexDirection: 'column', gap: 8 * fs, alignItems: 'flex-start' }}>
          {['No downtime to apply', 'Spray or roller applied', '6 states · 26 sites', 'FSSAI food-grade safe'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 5 * fs }}>
              <div style={{ width: 4.5 * fs, height: 4.5 * fs, borderRadius: '50%', background: C, flexShrink: 0 }} />
              <span style={{ fontSize: 8 * fs, color: '#c0c0c0' }}>{t}</span>
            </div>
          ))}
        </div>

        <div style={{ position: 'relative', zIndex: 5 }}>
          <div style={{ fontSize: 8 * fs, color: C, writingMode: 'vertical-rl', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.7 }}>monoatomlabs.com</div>
        </div>
      </div>

      {/* ── GLUE TAB ──────────────────────────────────── */}
      <div style={{ width: tabW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', backgroundColor: 'rgba(0,0,0,0.8)' }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ color: '#333', fontSize: 6.5 * fs, writingMode: 'vertical-lr', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Adhesive</span>
        </div>
      </div>

    </div>
  )
}
