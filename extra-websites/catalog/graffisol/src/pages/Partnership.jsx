import React from 'react'
import { Handshake, GraduationCap, Award, ChartArea, ArrowRight, ShieldCheck, ClipboardCheck, PhoneCall, Building2, MapPin } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#f59e0b'

const TIERS = [
  {
    name: "Associate Applicator",
    capacity: "Up to 500 kW/month",
    territory: "City-level",
    training: "1-day training",
    rate: "Standard rate",
    requirements: "Solar O&M or EPC experience",
    icon: Building2
  },
  {
    name: "Certified Installer",
    capacity: "Up to 5 MW/month",
    territory: "20 km territory",
    training: "2-day training + assessment",
    rate: "Preferred rate",
    requirements: "Active solar project pipeline",
    featured: true,
    icon: ShieldCheck
  },
  {
    name: "Master Applicator",
    capacity: "Unlimited capacity",
    territory: "50 km exclusivity",
    training: "3-day program + annual renewal",
    rate: "Wholesale tier",
    requirements: "Established solar contracting business",
    icon: Award
  },
]

const STEPS = [
  { n: "01", icon: ClipboardCheck, title: "Apply online", desc: "Submit company profile" },
  { n: "02", icon: PhoneCall, title: "Screening", desc: "Capacity & pipeline assessment" },
  { n: "03", icon: GraduationCap, title: "Training", desc: "Regional centre workshop" },
  { n: "04", icon: MapPin, title: "Certification", desc: "Territory zone mapped" },
]

const FACTS = [
  { val: "150+", lab: "MW Coated" },
  { val: "26+", lab: "Installations" },
  { val: "500 GW", lab: "India 2030 Target" },
  { val: "₹45L+", lab: "Partner Rev / MW" },
]

export default function GraffisolPartnership() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', '--light-bg-img': "url('/images/graffisol-studio.png')" }}>
      <PageHeader product="GRAFFISOL" title="Partnership Program" pageNum="16" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0, padding: '24px' }}>

        {/* Left column — 60% */}
        <div style={{ flex: 1, paddingRight: '24px', display: 'flex', flexDirection: 'column', gap: 20 }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <Handshake size={24} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 16, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 1 }}>
              Certified Applicator Network
            </div>
          </div>

          {/* Tier cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {TIERS.map((tier, i) => (
              <div key={i} style={{
                background: tier.featured ? `linear-gradient(to right, rgba(245,158,11,0.1), rgba(245,158,11,0.02))` : '#ffffff',
                border: tier.featured ? `1px solid ${COLOR}60` : '1px solid #e5e7eb',
                borderRadius: 12,
                padding: '16px 20px',
                display: 'flex',
                gap: 16,
                alignItems: 'center',
                boxShadow: tier.featured ? `0 4px 12px -2px ${COLOR}20` : '0 2px 4px -1px rgba(0,0,0,0.03)',
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: tier.featured ? COLOR : '#f8fafc',
                  border: tier.featured ? 'none' : '1px solid #e5e7eb',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <tier.icon size={24} color={tier.featured ? '#ffffff' : '#9ca3af'} />
                </div>
                
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 700, color: tier.featured ? COLOR : '#111827', letterSpacing: 0.5 }}>
                      {tier.name}
                    </div>
                    {tier.featured && (
                      <div style={{ background: COLOR, borderRadius: 6, padding: '3px 8px', fontFamily: 'Outfit, sans-serif', fontSize: 8.5, fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: 1 }}>
                        Most Popular
                      </div>
                    )}
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'minmax(100px, 1fr) minmax(100px, 1fr) minmax(120px, 1fr)', gap: '6px 16px' }}>
                    {[
                      ["Capacity", tier.capacity],
                      ["Territory", tier.territory],
                      ["Training", tier.training],
                    ].map(([k, v]) => (
                      <div key={k} style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', textTransform: 'uppercase', letterSpacing: 0.5 }}>{k}</span>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#374151', fontWeight: 600, marginTop: 2 }}>{v}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Onboarding process timeline */}
          <div style={{ marginTop: 'auto', background: '#f8fafc', border: '1px solid #e5e7eb', borderRadius: 12, padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.02)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 16 }}>
              Onboarding Process
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              {/* Timeline line */}
              <div style={{ position: 'absolute', top: 18, left: 30, right: 30, height: 2, background: '#e5e7eb', zIndex: 0 }} />
              
              {STEPS.map(({ n, icon: Icon, title, desc }) => (
                <div key={n} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: 90, position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#ffffff', border: `2px solid ${COLOR}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 10, boxShadow: `0 0 0 4px #f8fafc` }}>
                    <Icon size={16} color={COLOR} />
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827', textAlign: 'center', marginBottom: 4 }}>{title}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', textAlign: 'center', lineHeight: 1.4 }}>{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right column — 40% */}
        <div style={{
          width: '38%',
          borderLeft: '1px solid #e5e7eb',
          paddingLeft: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <ChartArea size={22} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 1 }}>
              Why Partner With Us
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            {FACTS.map(({ val, lab }) => (
              <div key={lab} style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 10, padding: '16px 14px', textAlign: 'center', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)' }}>
                <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 24, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{val}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#6b7280', marginTop: 6, fontWeight: 500 }}>{lab}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, background: '#f8fafc', borderRadius: 12, border: '1px solid #e5e7eb', padding: '16px' }}>
            {[
              ["Market Driver", "PM Surya Ghar Yojana government push"],
              ["Scale Target", "India 500 GW solar capacity by 2030"],
              ["Economics", "Typical ₹40–50L per MW applicator margin"],
              ["Recurring Revenue", "Recoat cycle required every 3–5 years"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 10, borderBottom: '1px solid #f1f5f9' }}>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, color: '#374151', fontWeight: 700 }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#6b7280', lineHeight: 1.4 }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div style={{ background: `linear-gradient(135deg, ${COLOR}, #d97706)`, borderRadius: 12, padding: '20px', color: '#fff', marginTop: 16, boxShadow: `0 10px 15px -3px ${COLOR}40` }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 15, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                Apply for Certification
              </div>
              <ArrowRight size={20} color="#fff" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {[
                ["Email", "partners.graffisol@monoatomlabs.com"],
                ["Portal", "partners.monoatomlabs.com/graffisol"],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: 'rgba(255,255,255,0.7)', width: 40, flexShrink: 0 }}>{k}</span>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#fff', fontWeight: 600 }}>{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
