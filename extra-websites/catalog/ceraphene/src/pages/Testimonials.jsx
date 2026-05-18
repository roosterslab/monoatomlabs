import React from 'react'
import { Users, BarChart2, CheckCircle } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#64748b'

const QUOTES = [
  {
    text: "We run a 50-vehicle corporate fleet. After applying CERAPHENE, our monthly car wash frequency dropped from 8 visits to 2. The savings on washing alone paid back the coating cost in 4 months. The vehicles still look showroom-fresh after 18 months.",
    attribution: "Rahul Mehta, Fleet Manager, Pune-based IT Company (52 vehicles)",
  },
  {
    text: "As a detailing studio, we were sceptical about a lower-priced ceramic coating. After testing CERAPHENE on 10 reference vehicles, the contact angle measurements at 12 months proved it outperforms coatings we were paying 3\u00d7 more for. We switched our entire studio offering.",
    attribution: "Arjun Kaur, Owner, PureDetail Studio, Bengaluru",
  },
  {
    text: "KSRTC needed a solution for 200 AC buses operating in coastal Karnataka \u2014 salt spray, humidity, and constant washing were destroying the paint within 2 years. CERAPHENE has now run 26 months on pilot buses with zero delamination and maintained hydrophobicity.",
    attribution: "R. Krishnamurthy, Technical Director, KSRTC (Karnataka State Road Transport)",
  },
]

const STATS = [
  { value: "5,000+", label: "Vehicles Coated" },
  { value: "70+", label: "Certified Studios" },
  { value: "13", label: "Cities" },
  { value: "0", label: "Unresolved Warranty Claims" },
]

const SATISFACTION = [
  { label: "Contact angle satisfaction", score: 4.9, total: 5, note: "48 studio survey responses" },
  { label: "Studio margin satisfaction", score: 4.7, total: 5, note: "" },
  { label: "Product support satisfaction", score: 4.8, total: 5, note: "" },
]

export default function CerapheneTestimonials() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/ceraphene-01.jpg')" }}>
      <PageHeader product="CERAPHENE" title="Client Stories" pageNum="15" color={COLOR} dark={true} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0, padding: '14px 16px' }}>

        {/* Left column — 65% */}
        <div style={{ width: '65%', display: 'flex', flexDirection: 'column', gap: 0, paddingRight: 14 }}>

          {/* Section label */}
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
            What Our Clients Say
          </div>

          {/* Quote cards */}
          {QUOTES.map((q, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 12,
              padding: '12px 14px',
              marginBottom: 10,
              boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
            }}>
              <div style={{ fontSize: 9.5, color: 'rgba(255,255,255,0.7)', fontStyle: 'italic', lineHeight: 1.6, fontFamily: 'Inter, sans-serif' }}>
                &ldquo;{q.text}&rdquo;
              </div>
              <div style={{ fontWeight: 700, fontSize: 9, color: COLOR, marginTop: 6, fontFamily: 'Inter, sans-serif' }}>
                &mdash; {q.attribution}
              </div>
            </div>
          ))}

          {/* Project highlight */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderTop: `3px solid ${COLOR}`,
            borderRadius: 12,
            padding: '12px 14px',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.9)', letterSpacing: 0.5, marginBottom: 8 }}>
              AutoGloss Network \u2014 3 Locations, 450 Vehicles
            </div>
            {/* Stats row */}
            <div style={{ display: 'flex', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
              {["450 vehicles", "3 cities", "26 months", "\u20b922.5L revenue generated"].map((s, i) => (
                <span key={i} style={{
                  background: `${COLOR}22`,
                  border: `1px solid ${COLOR}55`,
                  borderRadius: 6,
                  padding: '2px 8px',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 9,
                  fontWeight: 700,
                  color: COLOR,
                  letterSpacing: 0.5,
                }}>{s}</span>
              ))}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              AutoGloss certified CERAPHENE studios in Mumbai, Pune, and Hyderabad have collectively coated 450 vehicles since certification. Average studio margin: 68%. Customer retention: 82% book annual inspection. Zero warranty claims in 26 months.
            </div>
          </div>
        </div>

        {/* Right column — 35% */}
        <div style={{
          width: '35%',
          borderLeft: '1px solid rgba(255,255,255,0.08)',
          paddingLeft: 14,
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
        }}>

          {/* By the Numbers */}
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
              By the Numbers
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12,
                  padding: '10px 10px',
                  textAlign: 'center',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                }}>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: 'rgba(255,255,255,0.5)', marginTop: 3, lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Satisfaction */}
          <div>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, letterSpacing: 2, textTransform: 'uppercase', marginBottom: 10 }}>
              Client Satisfaction
            </div>
            {SATISFACTION.map((row, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.7)' }}>{row.label}</span>
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: COLOR }}>{row.score}/{row.total}</span>
                </div>
                {/* Bar */}
                <div style={{ height: 5, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(row.score / row.total) * 100}%`, background: COLOR, borderRadius: 3 }} />
                </div>
                {row.note && (
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8, color: 'rgba(255,255,255,0.3)', marginTop: 2 }}>{row.note}</div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid ${COLOR}`,
            borderRadius: 12,
            padding: '12px 12px',
            marginTop: 'auto',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9.5, fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: 4 }}>
              Start your CERAPHENE journey
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: COLOR }}>
              studio@monoatomlabs.com
            </div>
          </div>

        </div>
      </div>

      <PageFooter color={COLOR} dark={true} />
    </div>
  )
}
