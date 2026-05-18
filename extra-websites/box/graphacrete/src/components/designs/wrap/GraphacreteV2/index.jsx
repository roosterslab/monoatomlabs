import React from 'react'
import Logo from '../../../brand/Logo'

const C      = '#d97706'
const C_LIGHT= '#fbbf24'
const C_DIM  = '#92400e'
const BOX    = { face: 5.2, side: 2.13, total: 15.567, height: 6.65 }
const TAB_W  = BOX.total - 2 * BOX.face - 2 * BOX.side

const SPECS = [
  { l: 'Compressive Strength',   v: '+25%',    ref: 'ASTM C39' },
  { l: 'Flexural Strength',      v: '+18%',    ref: 'ASTM C78' },
  { l: 'Tensile Splitting',      v: '+22%',    ref: 'ASTM C496' },
  { l: 'Cement Reduction',       v: '13%',     ref: 'w/c parity' },
  { l: 'Water Permeability',     v: '−35%',    ref: 'DIN 1048' },
  { l: 'Chloride Resistance',    v: '+40%',    ref: 'ASTM C1202' },
  { l: 'Service Life Extension', v: '+30%',    ref: 'Field data' },
  { l: 'Grade Compatibility',    v: 'M20–M70', ref: 'All grades' },
]

const DOSAGE = [
  { step: '1', txt: 'Dose 100–300 g per bag cement (0.3–0.5% by wt)' },
  { step: '2', txt: 'Add to mixer with water — no pre-mixing needed' },
  { step: '3', txt: 'Cure as standard. No process changes required.' },
]

const CERTS = ['NABL Validated', 'ASTM C39/C78', 'IS 516', 'Field-Tested 42+ Projects']

const APPS = [
  { icon: '🏗', label: 'Structures' },
  { icon: '🛣', label: 'Roads' },
  { icon: '🌉', label: 'Bridges' },
  { icon: '🏠', label: 'Housing' },
]

function Cert({ label, fs, C, C_LIGHT }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 5 * fs, padding: `${4 * fs}px ${8 * fs}px`, background: `rgba(217,119,6,0.1)`, border: `1px solid ${C}44`, borderRadius: 3 * fs }}>
      <div style={{ width: 5 * fs, height: 5 * fs, borderRadius: '50%', background: C_LIGHT, flexShrink: 0 }} />
      <span style={{ fontSize: 7 * fs, color: C_LIGHT, fontFamily: "'Inter', sans-serif", fontWeight: 600 }}>{label}</span>
    </div>
  )
}

export default function WrapGraphacreteV2({ scale = 1 }) {
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
        {/* bg image */}
        <img src="/images/graphacrete_lifecycle_site_pouring.png"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, opacity: 0.45 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(170deg,rgba(15,7,0,0.88) 0%,rgba(5,5,5,0.62) 55%,rgba(0,0,0,0.92) 100%)', zIndex: 2 }} />

        {/* logo header */}
        <div style={{ position: 'relative', zIndex: 5, padding: `${14 * fs}px ${18 * fs}px`, borderBottom: DIV, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Logo size={18 * fs} theme="dark" />
          <div style={{ fontSize: 7 * fs, color: C, letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700 }}>Technical Datasheet</div>
        </div>

        {/* full specs table */}
        <div style={{ position: 'relative', zIndex: 5, padding: `${12 * fs}px ${18 * fs}px`, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          {/* section: performance */}
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

          {/* section: dosage */}
          <div style={{ marginTop: 10 * fs }}>
            <div style={{ fontSize: 9 * fs, color: C, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 8 * fs }}>
              How to Use
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

          {/* second product image inset */}
          <div style={{ marginTop: 8 * fs, position: 'relative', height: 52 * fs, borderRadius: 5 * fs, overflow: 'hidden', border: `1px solid ${C}33` }}>
            <img src="/images/graphacrete_lifecycle_site_finishing.png"
              style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.75 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg,rgba(0,0,0,0.55) 0%,transparent 100%)' }} />
            <div style={{ position: 'absolute', bottom: 5 * fs, left: 8 * fs, fontSize: 7 * fs, color: C_LIGHT, fontStyle: 'italic' }}>Site finishing — M50 grade beam pour</div>
          </div>

          {/* certifications */}
          <div style={{ marginTop: 10 * fs }}>
            <div style={{ fontSize: 9 * fs, color: C, letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: 7 * fs }}>Certifications</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 * fs }}>
              {CERTS.map(c => <Cert key={c} label={c} fs={fs} C={C} C_LIGHT={C_LIGHT} />)}
            </div>
          </div>
        </div>

        {/* footer */}
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
        <img src="/images/graphacrete_lifecycle_lab_testing.png"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,7,0,0.72)', zIndex: 2 }} />

        {/* stat pills stacked */}
        {[{ v: '+25%', l: 'Compressive' }, { v: '−13%', l: 'Cement' }, { v: '+30%', l: 'Life' }].map(({ v, l }) => (
          <div key={l} style={{ position: 'relative', zIndex: 5, textAlign: 'center', background: `rgba(217,119,6,0.12)`, border: `1px solid ${C}55`, borderRadius: 5 * fs, padding: `${5 * fs}px ${8 * fs}px`, width: '78%' }}>
            <div style={{ fontSize: 14 * fs, fontWeight: 700, color: C_LIGHT, fontFamily: "'Rajdhani', sans-serif", lineHeight: 1 }}>{v}</div>
            <div style={{ fontSize: 6.5 * fs, color: C, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: 2 * fs }}>{l}</div>
          </div>
        ))}

        {/* vertical label */}
        <div style={{ position: 'relative', zIndex: 5, writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', display: 'flex', alignItems: 'center', gap: 10 * fs }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 8 * fs, letterSpacing: '0.18em' }}>NABL VALIDATED</span>
          <span style={{ color: '#fff', fontSize: 15 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>STRONGER CONCRETE</span>
        </div>
      </div>

      {/* ── FRONT FACE ────────────────────────────────── */}
      <div style={{ width: frontW, height: H, flexShrink: 0, position: 'relative', overflow: 'hidden', borderRight: DIV }}>
        {/* hero image */}
        <img src="/images/graphacrete-01.jpg"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, opacity: 0.62 }} />
        {/* overlay: dark top + dark bottom, clear mid */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom,rgba(0,0,0,0.78) 0%,rgba(0,0,0,0.1) 32%,rgba(0,0,0,0.14) 58%,rgba(0,0,0,0.88) 100%)', zIndex: 2 }} />
        {/* left-edge amber wash */}
        <div style={{ position: 'absolute', top: 0, left: 0, bottom: 0, width: 3 * fs, background: C, zIndex: 3, opacity: 0.8 }} />
        {/* stat-strip separator line */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: '28%', height: 1.5 * fs, background: C, zIndex: 3, opacity: 0.65 }} />

        {/* ── TOP BAR ── */}
        <div style={{ position: 'absolute', top: 16 * fs, left: 18 * fs, right: 18 * fs, display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 5 }}>
          <div style={{ display: 'flex', gap: 6 * fs }}>
            <div style={{ border: `1px solid ${C}66`, borderRadius: 99, padding: `${3 * fs}px ${9 * fs}px`, background: 'rgba(217,119,6,0.12)' }}>
              <span style={{ color: C_LIGHT, fontSize: 7.5 * fs, fontWeight: 700, letterSpacing: '0.06em' }}>NABL VALIDATED</span>
            </div>
            <div style={{ border: '1px solid rgba(255,255,255,0.15)', borderRadius: 99, padding: `${3 * fs}px ${9 * fs}px`, background: 'rgba(255,255,255,0.05)' }}>
              <span style={{ color: '#ccc', fontSize: 7.5 * fs, letterSpacing: '0.05em' }}>ASTM C39</span>
            </div>
          </div>
          <span style={{ color: 'rgba(255,255,255,0.45)', fontSize: 7.5 * fs, fontFamily: "'Rajdhani', sans-serif", fontWeight: 600, letterSpacing: '0.15em' }}>MONOATOM LABS</span>
        </div>

        {/* ── CENTER BRAND BLOCK ── */}
        <div style={{ position: 'absolute', top: '16%', left: 0, right: 0, textAlign: 'center', zIndex: 5, padding: `0 ${18 * fs}px` }}>
          {/* ghost label */}
          <div style={{ color: `${C}44`, fontSize: 11 * fs, fontWeight: 800, letterSpacing: '0.6em', marginBottom: -1 * fs, fontFamily: "'Rajdhani', sans-serif" }}>
            STRUCTURAL
          </div>
          {/* product name */}
          <div style={{ color: 'white', fontSize: 54 * fs, fontWeight: 900, letterSpacing: '0.01em', lineHeight: 0.88, fontFamily: "'Rajdhani', sans-serif", textShadow: `0 2px 40px rgba(217,119,6,0.65),0 0 80px rgba(0,0,0,0.9)` }}>
            GRAPHACRETE
          </div>
          {/* amber rule */}
          <div style={{ width: 60 * fs, height: 2.5 * fs, background: C, margin: `${10 * fs}px auto ${10 * fs}px` }} />
          {/* tagline */}
          <div style={{ color: '#e0e0e0', fontSize: 9.5 * fs, letterSpacing: '0.08em', lineHeight: 1.5 }}>
            Graphene-Enhanced Concrete Admixture
          </div>
          {/* feature bullets */}
          <div style={{ marginTop: 10 * fs, display: 'flex', flexDirection: 'column', gap: 5 * fs, textAlign: 'left', padding: `0 ${10 * fs}px` }}>
            {['Drop-in liquid admixture — no equipment change', 'Works across M20–M70 grades, all mix designs', '₹12,000–18,000 net ROI per ton of cement saved'].map(t => (
              <div key={t} style={{ display: 'flex', gap: 6 * fs, alignItems: 'flex-start' }}>
                <div style={{ width: 5 * fs, height: 5 * fs, borderRadius: '50%', background: C, marginTop: 3.5 * fs, flexShrink: 0 }} />
                <span style={{ fontSize: 8.5 * fs, color: '#d0d0d0', lineHeight: 1.4 }}>{t}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── APPLICATION TAGS ── */}
        <div style={{ position: 'absolute', bottom: '29%', left: 18 * fs, right: 18 * fs, display: 'flex', gap: 6 * fs, zIndex: 5 }}>
          {APPS.map(({ icon, label }) => (
            <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 4 * fs, background: 'rgba(0,0,0,0.55)', border: `1px solid rgba(255,255,255,0.12)`, borderRadius: 4 * fs, padding: `${3 * fs}px ${7 * fs}px` }}>
              <span style={{ fontSize: 9 * fs }}>{icon}</span>
              <span style={{ fontSize: 7 * fs, color: '#bbb' }}>{label}</span>
            </div>
          ))}
        </div>

        {/* ── BOTTOM STAT STRIP ── */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '28%', background: 'rgba(0,0,0,0.88)', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: `${8 * fs}px ${14 * fs}px`, zIndex: 5, gap: 8 * fs }}>
          {/* top row: 4 big numbers */}
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            {[{ val: '+25%', lab: 'COMPRESSIVE' }, { val: '−13%', lab: 'CEMENT USE' }, { val: '+30%', lab: 'SERVICE LIFE' }, { val: '₹12K', lab: 'ROI/TON' }].map(({ val, lab }) => (
              <div key={lab} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: 17 * fs, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, color: C_LIGHT, lineHeight: 1 }}>{val}</div>
                <div style={{ fontSize: 6.5 * fs, color: C, textTransform: 'uppercase', letterSpacing: '0.04em', marginTop: 2 * fs }}>{lab}</div>
              </div>
            ))}
          </div>
          {/* bottom row: 2 secondary stats */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 20 * fs, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 6 * fs }}>
            {[{ val: '42+', lab: 'Projects Completed' }, { val: '50K+ m³', lab: 'Concrete Enhanced' }].map(({ val, lab }) => (
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
        <img src="/images/graphacrete_lifecycle_site_result.png"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 1, opacity: 0.3 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,7,0,0.72)', zIndex: 2 }} />

        {/* vertical label */}
        <div style={{ position: 'relative', zIndex: 5, writingMode: 'vertical-rl', textOrientation: 'mixed', display: 'flex', alignItems: 'center', gap: 10 * fs }}>
          <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: 8 * fs, letterSpacing: '0.18em' }}>GRAPHENE-ENHANCED</span>
          <span style={{ color: '#fff', fontSize: 15 * fs, fontWeight: 700, letterSpacing: '0.1em', fontFamily: "'Rajdhani', sans-serif" }}>CEMENT REDUCTION</span>
        </div>

        {/* feature checklist (rotated) */}
        <div style={{ position: 'relative', zIndex: 5, writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)', display: 'flex', flexDirection: 'column', gap: 8 * fs, alignItems: 'flex-start' }}>
          {['No equipment change', 'IS 516 compliant', '8 states · 42 sites', 'NABL lab validated'].map(t => (
            <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 5 * fs }}>
              <div style={{ width: 4.5 * fs, height: 4.5 * fs, borderRadius: '50%', background: C, flexShrink: 0 }} />
              <span style={{ fontSize: 8 * fs, color: '#c0c0c0' }}>{t}</span>
            </div>
          ))}
        </div>

        {/* bottom accent */}
        <div style={{ position: 'relative', zIndex: 5, textAlign: 'center' }}>
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
