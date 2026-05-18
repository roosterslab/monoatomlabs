import React from 'react'
import { Users, TrendingUp, Target, Activity } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#d97706'

const TIERS = [
  {
    name: "Authorised Reseller",
    minOrder: "Min order 100L/month",
    margin: "20% margin on MRP",
    territory: "Territory: city-level",
    support: "Technical datasheet, samples",
    requirements: "Civil/construction materials business",
  },
  {
    name: "Regional Distributor",
    minOrder: "Min order 500L/month",
    margin: "28% margin",
    territory: "State-level exclusivity",
    support: "Co-branded marketing, dedicated account manager, technical training",
    requirements: "Existing admixture distribution network",
    featured: true,
  },
  {
    name: "Technology Partner",
    minOrder: "Joint application development",
    margin: "Revenue sharing on projects",
    territory: "Bespoke arrangement",
    support: "Full co-development support",
    requirements: "RMC plant, infrastructure contractor, or government body",
  },
]

const STEPS = [
  { n: "01", title: "Submit enquiry", desc: "at partners.monoatomlabs.com" },
  { n: "02", title: "Site/business assessment call", desc: "30-minute consultation with our partnerships team" },
  { n: "03", title: "Trial supply + training", desc: "20L trial supply with on-site technical training session" },
  { n: "04", title: "Territory agreement signed", desc: "First commercial order placed and territory confirmed" },
]

const FACTS = [
  { val: "42+", lab: "Active projects across India", icon: Target },
  { val: "14", lab: "State distribution points", icon: Activity },
  { val: "22\u201328%", lab: "Partner avg margin", icon: TrendingUp },
  { val: "4hr", lab: "Technical support response", icon: Users },
]

export default function GraphacretePartnership() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', '--dark-bg-img': "url('/images/graphacrete-01.jpg')" }}>
      <PageHeader product="GRAPHACRETE" title="PARTNERSHIP" pageNum="13" color={COLOR} dark />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>

        {/* Left column — 60% */}
        <div style={{ flex: 1, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <Users size={18} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: 'rgba(255,255,255,0.9)', textTransform: 'uppercase', letterSpacing: 0.8 }}>
              Become a GRAPHACRETE Partner
            </div>
          </div>

          {/* Tier cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {TIERS.map((tier, i) => (
              <div key={i} style={{
                background: tier.featured ? `rgba(217,119,6,0.10)` : 'rgba(255,255,255,0.03)',
                border: tier.featured ? `1.5px solid ${COLOR}60` : '1px solid rgba(255,255,255,0.08)',
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
                  fontSize: 11,
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
                      <div style={{ background: COLOR, borderRadius: 3, padding: '2px 8px', fontFamily: 'Outfit, sans-serif', fontSize: 8, fontWeight: 700, color: '#fff', letterSpacing: 0.5 }}>
                        MOST POPULAR
                      </div>
                    )}
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '3px 10px' }}>
                    {[
                      ["Order", tier.minOrder],
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
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>
              Onboarding Process
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 16px' }}>
              {STEPS.map(({ n, title, desc }) => (
                <div key={n} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: 26,
                    height: 26,
                    borderRadius: 8,
                    background: COLOR,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Rajdhani, sans-serif',
                    fontSize: 12,
                    fontWeight: 700,
                    color: '#fff',
                  }}>
                    {n}
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
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', letterSpacing: 0.8 }}>
            Key Partnership Facts
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {FACTS.map(({ val, lab, icon: Icon }) => (
              <div key={lab} style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '10px 12px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 6 }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={16} color={COLOR} />
                  </div>
                </div>
                <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: 'rgba(255,255,255,0.5)', marginTop: 3, lineHeight: 1.3 }}>{lab}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              ["Technical support", "Dedicated WhatsApp line"],
              ["Training", "Half-day workshop at partner site"],
              ["Marketing", "Co-branded collateral provided"],
              ["Reporting", "Monthly sales analytics dashboard"],
              ["Escalation", "Named technical account manager"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.45)' }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Contact block */}
          <div style={{ background: COLOR, borderRadius: 12, padding: '12px 14px', marginTop: 'auto', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              Get in touch today
            </div>
            {[
              ["Email", "partners@monoatomlabs.com"],
              ["Phone", "+91 79 XXXX XXXX"],
              ["Web", "monoatomlabs.com/graphacrete"],
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
