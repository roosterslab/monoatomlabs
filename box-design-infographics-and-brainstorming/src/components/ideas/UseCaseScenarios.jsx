import React, { useState } from 'react'
import { Car, Waves, Truck, Building2 } from 'lucide-react'

const C = '#64748B'

const SCENARIOS = [
  {
    id: 'automotive',
    icon: Car,
    label: 'Automotive',
    headline: 'Your Daily Driver. Armoured.',
    subhead: 'Car enthusiasts & everyday owners',
    bullets: [
      'Stops swirls, scratches and rock chips — 9H+ hardness',
      '115° superhydrophobic — water and dirt slide off',
      'UV protection — paint stays vibrant for 4+ years',
      'Anti-static — less dust between washes',
      'Brake heat safe to 700°C',
    ],
    stat: '4+ YR',
    statLabel: 'Protection',
    color: C,
  },
  {
    id: 'marine',
    icon: Waves,
    label: 'Marine',
    headline: 'Built for saltwater. Ready for everything.',
    subhead: 'Boats, jet skis, marine vessels',
    bullets: [
      'Salt spray and chloride resistance — pH 2–12 range',
      'UV protection against harsh coastal sun',
      '115° water angle — marine growth harder to adhere',
      'Anti-oxidation — keeps gelcoat and marine paint fresh',
      'Reduces hull maintenance frequency',
    ],
    stat: '700°C',
    statLabel: 'Heat safe',
    color: '#2563EB',
  },
  {
    id: 'fleet',
    icon: Truck,
    label: 'Fleet',
    headline: 'Protect at scale. Reduce cost per vehicle.',
    subhead: 'Fleet managers, logistics companies',
    bullets: [
      'One application covers a full vehicle for 4+ years',
      '₹1,250/yr per vehicle protection cost',
      'Self-cleaning reduces wash frequency — labor saving',
      'Professional fleet appearance maintained',
      'Chemical resistant — fuel spills, road salt, de-icer',
    ],
    stat: '60–70%',
    statLabel: 'Cost saving',
    color: '#10B981',
  },
  {
    id: 'architectural',
    icon: Building2,
    label: 'Architectural',
    headline: 'Surfaces that outlast the elements.',
    subhead: 'Building facades, panels, installations',
    bullets: [
      'Weather and UV resistant ceramic barrier',
      'Chemical resistance for urban pollution environments',
      'Reduces facade maintenance frequency and cost',
      "Anti-graffiti — coatings don't bond to CERAPHENE",
      'Heat stable for metal facade applications',
    ],
    stat: 'pH 2–12',
    statLabel: 'Chemical range',
    color: '#F59E0B',
  },
]

export default function UseCaseScenarios() {
  const [active, setActive] = useState('automotive')
  const scenario = SCENARIOS.find(s => s.id === active)
  const Icon = scenario.icon

  return (
    <div style={{ padding: 32, fontFamily: 'Inter, sans-serif' }}>
      <div style={{ marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 12, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Marketing Ideas — Use Cases</div>
        <h2 style={{ color: 'white', fontSize: 24, fontWeight: 700, margin: 0, fontFamily: 'Outfit, sans-serif' }}>Use-Case Buyer Panels</h2>
        <p style={{ color: '#555', fontSize: 13, marginTop: 8, lineHeight: 1.6 }}>CERAPHENE serves four distinct buyer markets. Each deserves its own message, tone, and data emphasis on the box.</p>
      </div>

      {/* Tab selector */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 28, flexWrap: 'wrap' }}>
        {SCENARIOS.map(s => {
          const SIcon = s.icon
          return (
            <button key={s.id} onClick={() => setActive(s.id)} style={{
              padding: '7px 16px', borderRadius: 6, border: `1px solid ${active === s.id ? s.color : '#1f1f1f'}`,
              background: active === s.id ? '#111' : 'transparent', color: active === s.id ? 'white' : '#555',
              cursor: 'pointer', fontSize: 12, fontWeight: active === s.id ? 700 : 400, transition: 'all 0.2s',
              display: 'flex', alignItems: 'center', gap: 6,
            }}>
              <SIcon size={12} />
              {s.label}
            </button>
          )
        })}
      </div>

      {/* Scenario panel — simulated back panel */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 240px', gap: 24 }}>
        <div style={{ background: '#050505', border: `1px solid ${scenario.color}20`, borderRadius: 8, padding: 32, position: 'relative', overflow: 'hidden' }}>
          {/* Background icon */}
          <div style={{ position: 'absolute', right: -20, bottom: -20, opacity: 0.03 }}>
            <Icon size={200} color="white" />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Icon size={20} color={scenario.color} strokeWidth={1.5} />
            <div style={{ color: scenario.color, fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{scenario.subhead}</div>
          </div>

          <div style={{ color: 'white', fontSize: 22, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', letterSpacing: '0.05em', marginBottom: 20, lineHeight: 1.2 }}>{scenario.headline}</div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 24 }}>
            {scenario.bullets.map((b, i) => (
              <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: scenario.color, flexShrink: 0, marginTop: 5 }} />
                <span style={{ color: '#666', fontSize: 13, lineHeight: 1.5 }}>{b}</span>
              </div>
            ))}
          </div>

          <div style={{ paddingTop: 20, borderTop: '1px solid #111', display: 'flex', alignItems: 'center', gap: 20 }}>
            <div>
              <div style={{ color: scenario.color, fontSize: 28, fontWeight: 900, fontFamily: 'Rajdhani, sans-serif', lineHeight: 1 }}>{scenario.stat}</div>
              <div style={{ color: '#444', fontSize: 10, letterSpacing: '0.1em' }}>{scenario.statLabel}</div>
            </div>
            <div style={{ color: '#2a2a2a', fontSize: 11, lineHeight: 1.6, flex: 1 }}>CERAPHENE Graphene Ceramic Coating · ₹5,000 · 50ml · Monoatom Labs</div>
          </div>
        </div>

        {/* Notes */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ padding: 16, background: '#111', border: '1px solid #1f1f1f', borderRadius: 8 }}>
            <div style={{ color: C, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Buyer Mindset</div>
            <div style={{ color: '#555', fontSize: 12, lineHeight: 1.6 }}>
              {active === 'automotive' && 'Enthusiast buyer. Cares about paint protection, resale value, show-car look. Price is secondary to quality.'}
              {active === 'marine' && 'Boat owner in coastal/saltwater environment. Primary pain: corrosion, salt damage, UV fading. Maintenance cost matters.'}
              {active === 'fleet' && 'Procurement manager. Primary metric: cost per vehicle, maintenance reduction, professional appearance. ROI focused.'}
              {active === 'architectural' && 'Specifier or building owner. Long warranty, low maintenance, weather performance. Treated as a building product.'}
            </div>
          </div>
          <div style={{ padding: 16, background: '#111', border: '1px solid #1f1f1f', borderRadius: 8 }}>
            <div style={{ color: C, fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 8 }}>Key Message</div>
            <div style={{ color: '#555', fontSize: 12, lineHeight: 1.6 }}>
              {active === 'automotive' && '"4-year invisible armour on your paint. One application. 9H+ hardness."'}
              {active === 'marine' && '"Built for the harshest environments. Salt, sun, spray — all blocked."'}
              {active === 'fleet' && '"₹1,250/yr per vehicle. Lower fleet maintenance cost. Professional appearance guaranteed."'}
              {active === 'architectural' && '"Long-life facade protection. Chemical resistant. Low maintenance. One application."'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
