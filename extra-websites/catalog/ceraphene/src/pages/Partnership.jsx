import React from 'react'
import { Users, Target, CheckCircle, Zap } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#64748b'

const TIERS = [
  {
    name: "Studio Partner",
    volume: "20 cars+/month",
    margin: "30% below MRP",
    territory: "City-level, no territory lock",
    support: "Marketing collateral, free training",
    requirements: "Detailing studio with professional IDA equipment",
  },
  {
    name: "Premium Studio",
    volume: "50 cars+/month",
    margin: "35% below MRP",
    territory: "5 km territory",
    support: "Certified installer badge, co-marketing campaigns",
    requirements: "Established studio with client base",
    featured: true,
  },
  {
    name: "Regional Master",
    volume: "100 cars+/month",
    margin: "40% below MRP",
    territory: "15 km exclusivity",
    support: "Sub-licensing rights, dedicated trainer, annual roadshow feature",
    requirements: "Multi-bay studio or studio network operator",
  },
]

const STEPS = [
  { n: "01", title: "Apply online", desc: "partners.monoatomlabs.com/ceraphene", icon: Target },
  { n: "02", title: "Studio inspection", desc: "Equipment check and bay assessment by our team", icon: CheckCircle },
  { n: "03", title: "Certification training", desc: "1-day workshop covering application protocol and QC testing", icon: Users },
  { n: "04", title: "Territory + launch pack", desc: "Agreement signed, launch supply package dispatched", icon: Zap },
]

const ECONOMICS = [
  { val: "65\u201374%", lab: "Product margin on MRP" },
  { val: "\u20B98,500", lab: "Avg revenue per car" },
  { val: "\u20B98.16L", lab: "Annual rev (20 cars/mo)" },
  { val: "\u20B920.4L", lab: "Annual rev (50 cars/mo)" },
]

const CITIES = ["Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune"]

export default function CeraphenePartnership() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/ceraphene-01.jpg')", fontFamily: 'Inter, sans-serif' }}>
      <PageHeader product="CERAPHENE" title="PARTNERSHIP" pageNum="13" color={COLOR} dark />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>

        {/* Left column — 60% */}
        <div style={{ flex: 1, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: 1 }}>
            CERAPHENE Studio Partner Program
          </div>

          {/* Tier cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {TIERS.map((tier, i) => (
              <div key={i} style={{
                background: tier.featured ? `rgba(100,116,139,0.14)` : 'rgba(255,255,255,0.03)',
                border: tier.featured ? `1.5px solid ${COLOR}70` : '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
                padding: '10px 14px',
                display: 'flex',
                gap: 14,
                alignItems: 'flex-start',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              }}>
                <div style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: tier.featured ? COLOR : 'rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 13,
                  fontWeight: 700,
                  color: tier.featured ? '#fff' : 'rgba(255,255,255,0.5)',
                  flexShrink: 0,
                  marginTop: 2,
                }}>
                  {i + 1}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: tier.featured ? COLOR : 'rgba(255,255,255,0.85)' }}>
                      {tier.name}
                    </div>
                    {tier.featured && (
                      <div style={{ background: COLOR, borderRadius: 4, padding: '2px 8px', fontFamily: 'Outfit, sans-serif', fontSize: 8, fontWeight: 700, color: '#fff', letterSpacing: 0.5 }}>
                        MOST POPULAR
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3px 10px' }}>
                    {[
                      ["Volume", tier.volume],
                      ["Margin", tier.margin],
                      ["Territory", tier.territory],
                      ["Support", tier.support],
                      ["Requirements", tier.requirements],
                    ].map(([k, v]) => (
                      <div key={k} style={{ gridColumn: k === "Support" || k === "Requirements" ? 'span 2' : 'span 1' }}>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, color: 'rgba(255,255,255,0.35)', marginRight: 4 }}>{k}:</span>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: 'rgba(255,255,255,0.7)' }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Onboarding steps */}
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
              Onboarding Process
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px' }}>
              {STEPS.map(({ n, title, desc, icon: Icon }) => (
                <div key={n} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: 32,
                    height: 32,
                    borderRadius: 8,
                    background: COLOR,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                  }}>
                    <Icon size={16} color="#ffffff" />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9.5, fontWeight: 700, color: 'rgba(255,255,255,0.85)', lineHeight: 1.3 }}>{title}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: 'rgba(255,255,255,0.5)', marginTop: 2 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — 40% */}
        <div style={{
          width: '40%',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          padding: '14px 14px',
          background: 'rgba(255,255,255,0.02)',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: 1 }}>
            Studio Economics
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {ECONOMICS.map(({ val, lab }) => (
              <div key={lab} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
                padding: '10px 12px',
                textAlign: 'center',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              }}>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 20, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: 'rgba(255,255,255,0.5)', marginTop: 3, lineHeight: 1.3 }}>{lab}</div>
              </div>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 8 }}>
              70+ Certified Studios
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5 }}>
              {CITIES.map(city => (
                <div key={city} style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.10)',
                  borderRadius: 6,
                  padding: '3px 9px',
                  fontFamily: 'Inter, sans-serif',
                  fontSize: 8.5,
                  color: 'rgba(255,255,255,0.65)',
                }}>
                  {city}
                </div>
              ))}
              <div style={{
                background: `${COLOR}22`,
                border: `1px solid ${COLOR}40`,
                borderRadius: 6,
                padding: '3px 9px',
                fontFamily: 'Inter, sans-serif',
                fontSize: 8.5,
                color: COLOR,
              }}>
                + more cities
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              ["Margin", "65-74% on product MRP"],
              ["Training", "1-day certification workshop"],
              ["QC tools", "Hardness + contact angle test kit"],
              ["Warranty", "Monoatom Labs backed 3-4 year warranty"],
              ["Co-marketing", "Social media + local campaign support"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.45)', flexShrink: 0, marginRight: 8 }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.75)', fontWeight: 500, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Contact block */}
          <div style={{
            background: COLOR,
            borderRadius: 12,
            padding: '12px 14px',
            marginTop: 'auto',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              Join the studio network
            </div>
            {[
              ["Email", "studio@monoatomlabs.com"],
              ["Web", "monoatomlabs.com/ceraphene"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 8, marginBottom: 4 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: 'rgba(255,255,255,0.6)', width: 36, flexShrink: 0 }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#fff', fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} dark />
    </div>
  )
}
