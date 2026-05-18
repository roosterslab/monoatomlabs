import React from 'react'
import { MessageSquareQuote, Star, CheckCircle2, TrendingUp, Handshake, ShieldCheck, MapPin } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#f59e0b'

const QUOTES = [
  {
    text: "We operate a 50MW solar farm in Jodhpur and cleaning costs were eating 4.2% of our annual revenue — 52 washes per year at ₹3,000/MW/wash. After applying GRAFFISOL, we reduced washes to 6 per year. The ₹2.76 Cr annual saving paid back the coating investment in 4 months. The IEC 60904-1 measured output gain of 11.8% was an additional bonus.",
    attribution: "Vikram Singh, O&M Head, Helios Solar",
    role: "50MW Jodhpur facility",
  },
  {
    text: "Our commercial rooftop in Pune was producing 8% below design yield after 18 months due to soiling. Post-GRAFFISOL application, the next IEC measurement showed 11.2% gain over the dirty baseline — effectively 3.2% above design yield. The coating paid for itself in the first month.",
    attribution: "Ananya Rao, Facility Director, TechPark Pune",
    role: "820 kW rooftop",
  },
  {
    text: "We certified as a GRAFFISOL Master Applicator in 2023. In 12 months, we coated 14MW across Rajasthan and Gujarat. At ₹45/W, that is ₹6.3 Cr in revenue from a business that required no capital equipment — just trained crews and the product. The territory protection meant no price competition.",
    attribution: "Rajesh Gupta, CEO, SolarCare India",
    role: "Certified Master Applicator, Jaipur",
  },
]

const STATS = [
  { value: "150+", label: "MW Coated", icon: TrendingUp },
  { value: "26+", label: "Installations", icon: ShieldCheck },
  { value: "6+1", label: "States + UAE", icon: MapPin },
  { value: "+10.8%", label: "Avg Gain", icon: Star },
]

const SATISFACTION = [
  { label: "Performance delivered", score: 4.9, total: 5 },
  { label: "Application support", score: 4.8, total: 5 },
  { label: "O&M cost impact", score: 4.9, total: 5 },
]

export default function GraffisolTestimonials() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/graffisol-01.jpg')" }}>
      <PageHeader product="GRAFFISOL" title="Client Stories" pageNum="15" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0, padding: '20px 24px' }}>

        {/* Left column — 65% */}
        <div style={{ width: '60%', display: 'flex', flexDirection: 'column', gap: 16, paddingRight: 20 }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <MessageSquareQuote size={20} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase' }}>
              What Our Clients Say
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {QUOTES.map((q, i) => (
              <div key={i} style={{
                background: '#ffffff',
                border: '1px solid #e5e7eb',
                borderRadius: 12,
                padding: '16px 20px',
                position: 'relative',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.03)',
                overflow: 'hidden',
              }}>
                <div style={{ position: 'absolute', top: -10, right: 10, opacity: 0.05 }}>
                   <MessageSquareQuote size={80} color={COLOR} />
                </div>
                <div style={{ fontSize: 10.5, color: '#4b5563', fontStyle: 'italic', lineHeight: 1.6, fontFamily: 'Inter, sans-serif', position: 'relative', zIndex: 1 }}>
                  &ldquo;{q.text}&rdquo;
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12, position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: COLOR, fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700 }}>{q.attribution.charAt(0)}</span>
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 10.5, color: COLOR, fontFamily: 'Outfit, sans-serif' }}>
                      {q.attribution}
                    </div>
                    <div style={{ fontSize: 9, color: '#6b7280', fontFamily: 'Inter, sans-serif' }}>
                      {q.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — 40% */}
        <div style={{
          width: '40%',
          borderLeft: '1px solid #e5e7eb',
          paddingLeft: 20,
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>

          <div>
             <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 12 }}>
              By the Numbers
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 12,
                  padding: '12px 14px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6,
                  boxShadow: '0 2px 4px -1px rgba(0,0,0,0.02)'
                }}>
                  <s.icon size={16} color={COLOR} />
                  <div>
                    <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 20, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#6b7280', marginTop: 3 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#111827', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
              Client Satisfaction
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {SATISFACTION.map((row, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#374151', fontWeight: 500 }}>{row.label}</span>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: COLOR }}>
                      {row.score}<span style={{ color: '#9ca3af', fontSize: 10 }}>/{row.total}</span>
                    </span>
                  </div>
                  <div style={{ height: 6, background: '#e5e7eb', borderRadius: 3, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${(row.score / row.total) * 100}%`, background: COLOR, borderRadius: 3 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project highlight */}
          <div style={{
            background: `linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.02))`,
            border: `1px solid ${COLOR}40`,
            borderRadius: 12,
            padding: '16px 18px',
            marginTop: 16
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <Handshake size={18} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#111827', letterSpacing: 0.5 }}>
                Pavagada Solar Park — 30MW Block
              </div>
            </div>
            
            <div style={{ display: 'flex', gap: 6, marginBottom: 10, flexWrap: 'wrap' }}>
              {["30MW", "Karnataka", "12-month monitoring", "+11.4% yield"].map((s, i) => (
                <span key={i} style={{
                  background: '#ffffff',
                  border: '1px solid #e5e7eb',
                  borderRadius: 6,
                  padding: '3px 8px',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 8.5,
                  fontWeight: 600,
                  color: '#4b5563',
                }}>{s}</span>
              ))}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#6b7280', lineHeight: 1.5 }}>
              30MW block within the 2050MW Pavagada facility. GRAFFISOL applied across 1,20,000 panels. 12-month monitored output: <strong style={{color: '#374151'}}>11.4% gain</strong> vs uncoated reference. Annual revenue gain: <strong style={{color: COLOR}}>₹2.74 Cr</strong> at ₹4.0/kWh PPA rate.
            </div>
          </div>

          <div style={{
            background: '#ffffff',
            border: `1px solid #e5e7eb`,
            borderRadius: 12,
            padding: '14px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            boxShadow: '0 2px 4px -1px rgba(0,0,0,0.02)'
          }}>
            <div>
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827', marginBottom: 2 }}>
                Start your GRAFFISOL project
              </div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: COLOR, fontWeight: 500 }}>
                graffisol@monoatomlabs.com
              </div>
            </div>
            <CheckCircle2 size={24} color={COLOR} />
          </div>

        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
