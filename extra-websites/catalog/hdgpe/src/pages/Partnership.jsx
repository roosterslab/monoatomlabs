import React from 'react'
import { Users, Target, BarChart2, Zap } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#06b6d4'

const TIERS = [
  {
    name: "Authorised Dealer",
    minOrder: "Min 500 kg/month",
    margin: "18% margin",
    territory: "City-level",
    support: "Product + technical support",
    requirements: "Polymer raw material distribution experience",
  },
  {
    name: "State Distributor",
    minOrder: "Min 2,000 kg/month",
    margin: "24% margin",
    territory: "State exclusivity",
    support: "Dedicated account manager, co-branded marketing",
    requirements: "Existing HDPE/polymer supply chain",
    featured: true,
  },
  {
    name: "Industry OEM Partner",
    minOrder: "Custom volume arrangement",
    margin: "Volume-based rebate structure",
    territory: "Preferential pricing",
    support: "Custom masterbatch formulation, joint development",
    requirements: "HDPE processor: pipes, films, packaging, moulding",
  },
]

const STEPS = [
  { n: "01", title: "Submit enquiry", desc: "partners.monoatomlabs.com/hdgpe" },
  { n: "02", title: "Technical assessment", desc: "Evaluation of your processing line and product mix" },
  { n: "03", title: "Trial order + testing", desc: "100 kg trial with ASTM D638 testing support" },
  { n: "04", title: "Distribution agreement", desc: "Territory allocated and pricing finalised" },
]

const FACTS = [
  { val: "\u20B945,000 Cr", lab: "India HDPE market size", icon: BarChart2 },
  { val: "8% CAGR", lab: "Market growth rate", icon: Zap },
  { val: "26+", lab: "Commercial production runs", icon: Target },
  { val: "12,000+", lab: "MT enhanced HDPE produced", icon: Users },
]

export default function HdgpePartnership() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', '--dark-bg-img': "url('/images/hd-g-pe-01.jpg')" }}>
      <PageHeader product="HD-G-PE" title="PARTNERSHIP" pageNum="13" color={COLOR} dark />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>

        {/* Left column — 60% */}
        <div style={{ flex: 1, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <Users size={18} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: 0.8 }}>
              HD-G-PE Distribution Partnership
            </div>
          </div>

          {/* Tier cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {TIERS.map((tier, i) => (
              <div key={i} style={{
                background: tier.featured ? `rgba(6,182,212,0.10)` : 'rgba(255,255,255,0.03)',
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
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Target size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: 0.8 }}>
                Onboarding Process
              </div>
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
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#9ca3af', marginTop: 2 }}>{desc}</div>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <BarChart2 size={16} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.85)', textTransform: 'uppercase', letterSpacing: 0.8 }}>
              HD-G-PE Market Context
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {FACTS.map(({ val, lab, icon: Icon }) => (
              <div key={lab} style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 12,
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
              }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon size={16} color={COLOR} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{val}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#9ca3af', marginTop: 2, lineHeight: 1.3 }}>{lab}</div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            {[
              ["Addressable sectors", "Pipes, films, packaging, injection moulding"],
              ["Key standard", "IS 7328 potable water pipe compliance"],
              ["Food contact", "FSSAI + EU 10/2011 compliant"],
              ["rHDPE blend", "Up to 50% recycled HDPE compatible"],
              ["Technical support", "Processing line assessment included"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#9ca3af', flexShrink: 0, marginRight: 8 }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.75)', fontWeight: 500, textAlign: 'right' }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Contact block */}
          <div style={{ background: COLOR, borderRadius: 12, padding: '12px 14px', marginTop: 'auto', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#fff', marginBottom: 8 }}>
              Start your distribution partnership
            </div>
            {[
              ["Email", "hdgpe@monoatomlabs.com"],
              ["Web", "monoatomlabs.com/hdgpe"],
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
