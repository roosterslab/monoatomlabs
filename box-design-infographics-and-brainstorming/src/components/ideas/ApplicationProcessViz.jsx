import React, { useState } from 'react'

const C = '#64748B'

const STEPS = [
  {
    num: '01',
    title: 'Surface Decontamination',
    short: 'Decon',
    desc: 'Clay bar + iron remover. Remove all embedded fallout, tar, industrial contamination. Surface must be chemically clean.',
    time: '30–60 min',
    tools: 'Clay bar, iron remover, IPA wipe',
    warning: 'No wax or oil residue',
  },
  {
    num: '02',
    title: 'Paint Correction',
    short: 'Polish',
    desc: 'Machine polish to remove swirls, scratches, oxidation. CERAPHENE locks in — not over — your paint condition.',
    time: '1–3 hrs',
    tools: 'DA polisher, cutting pad, compound',
    warning: 'Do not skip — coating is permanent',
  },
  {
    num: '03',
    title: 'Panel Wipe (IPA)',
    short: 'Wipe',
    desc: '70% isopropyl alcohol panel wipe. Removes all polish oils. Surface must be chemically bare before application.',
    time: '15–20 min',
    tools: '70% IPA, lint-free towels',
    warning: 'Work in clean environment',
  },
  {
    num: '04',
    title: 'CERAPHENE Application',
    short: 'Apply',
    desc: 'Apply 4–5 drops to suede applicator. Cross-hatch pattern, one panel at a time. Flash 1–2 min, level with microfibre.',
    time: '45–90 min',
    tools: 'Suede applicator, levelling cloth',
    warning: 'Work indoors, 15–25°C',
  },
  {
    num: '05',
    title: 'Cure Period',
    short: 'Cure',
    desc: 'No water contact for 24 hrs. Full cure at 7 days. Coating covalently bonds to clearcoat during this period.',
    time: '24 hr – 7 days',
    tools: 'Covered garage or shade',
    warning: 'No rain, no washing',
  },
]

const STYLES = [
  { id: 'horizontal-flow', name: 'Horizontal Flow' },
  { id: 'vertical-cards', name: 'Vertical Cards' },
  { id: 'minimal-steps', name: 'Minimal Steps' },
]

export default function ApplicationProcessViz() {
  const [style, setStyle] = useState('horizontal-flow')
  const [active, setActive] = useState(null)

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Infographic Ideas — Application</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>5-Step Application Process</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>
          How-to infographic for the box back or insert card. Three layout explorations for the application guide.
        </p>
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {STYLES.map(s => (
          <button key={s.id} onClick={() => setStyle(s.id)} style={{
            padding: '7px 14px', borderRadius: 6,
            border: `1px solid ${style === s.id ? C : '#1f1f1f'}`,
            background: style === s.id ? '#111' : 'transparent',
            color: style === s.id ? 'white' : '#555',
            cursor: 'pointer', fontSize: 12, fontWeight: style === s.id ? 700 : 400,
          }}>
            {s.name}
          </button>
        ))}
      </div>

      {style === 'horizontal-flow' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 24, fontFamily: 'Rajdhani, sans-serif' }}>Application Guide · 5 Steps</div>
          <div style={{ display: 'flex', gap: 0 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ flex: 1, position: 'relative' }}>
                {i < STEPS.length - 1 && (
                  <div style={{ position: 'absolute', top: 20, left: '50%', right: '-50%', height: 1, background: '#1a1a1a', zIndex: 0 }} />
                )}
                <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 8px' }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: '50%',
                    border: `1px solid ${C}40`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 12px', background: '#050505',
                  }}>
                    <span style={{ color: C, fontSize: 13, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{step.num}</span>
                  </div>
                  <div style={{ color: 'white', fontSize: 11, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.08em', marginBottom: 4 }}>{step.short.toUpperCase()}</div>
                  <div style={{ color: '#333', fontSize: 10 }}>{step.time}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 32, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            {STEPS.map((step, i) => (
              <div key={i} onClick={() => setActive(active === i ? null : i)} style={{
                flex: 1, minWidth: 140, padding: 14, background: '#0a0a0a',
                border: `1px solid ${active === i ? C + '40' : '#111'}`,
                borderRadius: 6, cursor: 'pointer',
              }}>
                <div style={{ color: C, fontSize: 9, letterSpacing: '0.2em', marginBottom: 5 }}>STEP {step.num}</div>
                <div style={{ color: 'white', fontSize: 12, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', marginBottom: active === i ? 8 : 0 }}>{step.title}</div>
                {active === i && (
                  <>
                    <div style={{ color: '#555', fontSize: 11, lineHeight: 1.6, marginBottom: 8 }}>{step.desc}</div>
                    <div style={{ color: '#333', fontSize: 10 }}>Tools: {step.tools}</div>
                    <div style={{ color: '#6B2D0F', fontSize: 10, marginTop: 4 }}>⚠ {step.warning}</div>
                  </>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: 12, color: '#2a2a2a', fontSize: 10 }}>Click any step to expand details</div>
        </div>
      )}

      {style === 'vertical-cards' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 480 }}>
          <div style={{ color: C, fontSize: 10, letterSpacing: '0.25em', textTransform: 'uppercase', marginBottom: 20, fontFamily: 'Rajdhani, sans-serif' }}>How to Apply CERAPHENE</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, paddingBottom: 20, position: 'relative' }}>
                {i < STEPS.length - 1 && (
                  <div style={{ position: 'absolute', left: 19, top: 44, bottom: 0, width: 1, background: '#0d0d0d' }} />
                )}
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  border: `1px solid ${C}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0, background: '#0a0a0a',
                }}>
                  <span style={{ color: C, fontSize: 12, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif' }}>{step.num}</span>
                </div>
                <div style={{ flex: 1, paddingTop: 8 }}>
                  <div style={{ color: 'white', fontSize: 13, fontWeight: 700, fontFamily: 'Rajdhani, sans-serif', marginBottom: 4 }}>{step.title}</div>
                  <div style={{ color: '#444', fontSize: 11, lineHeight: 1.6, marginBottom: 6 }}>{step.desc}</div>
                  <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                    <span style={{ color: C, fontSize: 10 }}>{step.time}</span>
                    <span style={{ color: '#2a2a2a', fontSize: 10 }}>{step.tools}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {style === 'minimal-steps' && (
        <div style={{ background: '#050505', border: '1px solid #1f1f1f', borderRadius: 8, padding: 32, maxWidth: 560 }}>
          <div style={{ color: '#2a2a2a', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: 24 }}>CERAPHENE · APPLICATION IN 5 STEPS</div>
          {STEPS.map((step, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 14 }}>
              <div style={{ color: '#2a2a2a', fontSize: 10, fontFamily: 'Rajdhani, sans-serif', width: 16, textAlign: 'right', flexShrink: 0 }}>{i + 1}</div>
              <div style={{ flex: 1, height: 1, background: '#0d0d0d' }} />
              <div style={{ color: '#555', fontSize: 12, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.08em', width: 140, textAlign: 'right' }}>{step.short.toUpperCase()}</div>
              <div style={{ color: '#2a2a2a', fontSize: 10, width: 90, textAlign: 'right' }}>{step.time}</div>
            </div>
          ))}
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #0d0d0d', color: '#2a2a2a', fontSize: 10, lineHeight: 1.8, fontStyle: 'italic' }}>
            Apply in shaded environment · 15–25°C · No water contact for 24 hours
          </div>
        </div>
      )}
    </div>
  )
}
