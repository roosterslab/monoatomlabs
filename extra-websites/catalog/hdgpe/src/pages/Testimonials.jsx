import React from 'react'
import { Users, BarChart2, CheckCircle } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#06b6d4'

const QUOTES = [
  {
    text: "We manufacture IS 4984 pipes for Ahmedabad Jal Seva. After trialling HD-G-PE at 1% loading, our ASTM D638 tensile came in at 31.2 MPa \u2014 30% above our reference. We immediately specified it for the SDR 13.6 water main project. The thinner wall saved 19% HDPE material cost and we passed hydrostatic proof at 25 bar comfortably.",
    attribution: "Hemant Shah, Technical Director, Ahmedabad Pipe Industries",
  },
  {
    text: "Our stretch film line in Silvassa was running 23\u00b5m gauge. After HD-G-PE trials at 1% loading, we validated the same cling and puncture resistance at 19\u00b5m \u2014 a 17% material reduction. On 400 tonnes monthly production, that is 68 tonnes of HDPE saved per month. At current HDPE prices, that is \u20b968L monthly saving \u2014 more than we expected.",
    attribution: "Priya Nambiar, Production Manager, Flex Films Silvassa",
  },
  {
    text: "We supply HDPE geomembrane liners for aquaculture ponds in Andhra Pradesh. The ponds operate year-round in coastal UV conditions and the standard 1.5mm liner was failing at the weld seam at 18 months. HD-G-PE at 1% loading improved seam peel strength by 28%. We are now into our 3rd year on the first batch of HD-G-PE lined ponds with zero failures.",
    attribution: "K. Subramaniam, Director, Coastal Aqua Tech (Kakinada)",
  },
]

const STATS = [
  { value: "26+", label: "Commercial Runs", icon: BarChart2 },
  { value: "12,000+", label: "Tonnes Enhanced", icon: CheckCircle },
  { value: "6+1", label: "Indian States + UAE", icon: Users },
  { value: "+29%", label: "Avg Tensile Gain", icon: CheckCircle },
]

const SATISFACTION = [
  { label: "Drop-in compatibility", score: 4.8, total: 5, note: "" },
  { label: "QC documentation", score: 4.9, total: 5, note: "" },
  { label: "Property gain delivered", score: 4.7, total: 5, note: "" },
]

export default function HdgpeTestimonials() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/hd-g-pe-01.jpg')" }}>
      <PageHeader product="HD-G-PE" title="Client Stories" pageNum="15" color={COLOR} dark={true} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0, padding: '14px 16px' }}>

        {/* Left column — 65% */}
        <div style={{ width: '65%', display: 'flex', flexDirection: 'column', gap: 0, paddingRight: 14 }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            <Users size={16} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, letterSpacing: 2, textTransform: 'uppercase' }}>
              What Our Clients Say
            </div>
          </div>

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
              Mumbai Stretch Film Production \u2014 500T Trial
            </div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
              {["500 tonnes", "23\u00b5m \u2192 19\u00b5m", "17.4% saving", "\u20b985L material saving"].map((s, i) => (
                <span key={i} style={{
                  background: `${COLOR}22`,
                  border: `1px solid ${COLOR}55`,
                  borderRadius: 8,
                  padding: '2px 8px',
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: 9,
                  fontWeight: 700,
                  color: COLOR,
                  letterSpacing: 0.5,
                }}>{s}</span>
              ))}
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#9ca3af', lineHeight: 1.6 }}>
              6-month production trial at Mumbai packaging facility. HD-G-PE masterbatch at 1% loading in stretch film extrusion. Full ASTM D882/D1709 validation on downguaged film. Material saving \u20b985L across trial period. Annual projection: \u20b91.7 Cr saving. Now on rolling annual supply contract.
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

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <BarChart2 size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, letterSpacing: 2, textTransform: 'uppercase' }}>
                By the Numbers
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {STATS.map((s, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 12,
                  padding: '10px 10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <s.icon size={14} color={COLOR} />
                  </div>
                  <div>
                    <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 18, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#9ca3af', marginTop: 2, lineHeight: 1.3 }}>{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <CheckCircle size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, letterSpacing: 2, textTransform: 'uppercase' }}>
                Client Satisfaction
              </div>
            </div>
            {SATISFACTION.map((row, i) => (
              <div key={i} style={{ marginBottom: 10 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: 'rgba(255,255,255,0.7)' }}>{row.label}</span>
                  <span style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 13, fontWeight: 700, color: COLOR }}>{row.score}/{row.total}</span>
                </div>
                <div style={{ height: 5, background: 'rgba(255,255,255,0.08)', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${(row.score / row.total) * 100}%`, background: COLOR, borderRadius: 3 }} />
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.03)',
            border: `1px solid ${COLOR}`,
            borderRadius: 12,
            padding: '12px 12px',
            marginTop: 'auto',
            boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
          }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9.5, fontWeight: 700, color: 'rgba(255,255,255,0.8)', marginBottom: 4 }}>
              Start your HD-G-PE trial
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: COLOR }}>
              hdgpe@monoatomlabs.com
            </div>
          </div>

        </div>
      </div>

      <PageFooter color={COLOR} dark={true} />
    </div>
  )
}
