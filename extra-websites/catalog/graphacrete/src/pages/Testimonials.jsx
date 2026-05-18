import React from 'react'
import { Users, Activity, Target, TrendingUp } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#d97706'

const QUOTES = [
  {
    text: "We specified GRAPHACRETE on the M50 pile caps for the Ahmedabad elevated metro viaduct. At 0.1% dosage, our 28-day cubes consistently hit 58\u201362 MPa against a 50 MPa target. The cement saving of 50 kg/m\u00b3 across 8,200 m\u00b3 of pile cap concrete added up to \u20b91.24 Cr in direct material savings.",
    attribution: "P.V. Srinivasan, Project Director, L&T Infrastructure (Metro Viaduct, Ahmedabad)",
  },
  {
    text: "We were losing competitive bids on government road tenders because our M40 cost was \u20b9300/m\u00b3 above the L1 bidder. After trialling GRAPHACRETE, we could specify M40-equivalent strength from an M30 mix. That \u20b9950/m\u00b3 saving gave us the margin to win 3 state highway contracts.",
    attribution: "Manoj Patel, MD, Patel Constructions (Rajkot-based contractor)",
  },
  {
    text: "Our precast factory produces over 3,000 pre-stressed sleepers per month. Formwork turnaround was our bottleneck. With GRAPHACRETE, 3-day compressive strength exceeded our 7-day target on standard mix. We stripped moulds 18 hours earlier \u2014 adding 12% more production capacity without new equipment.",
    attribution: "Suresh Nair, Plant Manager, Southern Precast Industries (Chennai)",
  },
]

const STATS = [
  { value: "42+", label: "Active Projects", icon: Target },
  { value: "50,000+", label: "m\u00b3 Poured", icon: Activity },
  { value: "8+1", label: "Indian States + UAE", icon: Users },
  { value: "+38%", label: "Avg 28d Strength Gain", icon: TrendingUp },
]

const SATISFACTION = [
  { label: "Mix compatibility", score: 4.8, total: 5, note: "" },
  { label: "Technical support", score: 4.9, total: 5, note: "" },
  { label: "QC documentation", score: 4.7, total: 5, note: "" },
]

export default function GraphacreteTestimonials() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', '--dark-bg-img': "url('/images/graphacrete-01.jpg')" }}>
      <PageHeader product="GRAPHACRETE" title="Client Stories" pageNum="15" color={COLOR} dark={true} />

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
              Sardar Bridge Expansion \u2014 Surat
            </div>
            <div style={{ display: 'flex', gap: 10, marginBottom: 8, flexWrap: 'wrap' }}>
              {["M50 grade", "420 m\u00b3", "3-month pour", "\u20b958.4L material saving"].map((s, i) => (
                <span key={i} style={{
                  background: `${COLOR}22`,
                  border: `1px solid ${COLOR}55`,
                  borderRadius: 4,
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
              Bridge deck pour for 420m\u00b3 M50 specification. GRAPHACRETE achieved 58+ MPa at 28 days consistently. Cement reduction: 52 kg/m\u00b3 \u00d7 420m\u00b3 = 21,840 kg saved. At \u20b9380/50kg bag = \u20b958.4L direct material saving. Project completed 2 weeks ahead of schedule.
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
              <Activity size={16} color={COLOR} />
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
                  textAlign: 'center',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 4 }}>
                    <div style={{ width: 28, height: 28, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <s.icon size={14} color={COLOR} />
                    </div>
                  </div>
                  <div style={{ fontFamily: 'Rajdhani, sans-serif', fontSize: 22, fontWeight: 700, color: COLOR, lineHeight: 1 }}>{s.value}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: 'rgba(255,255,255,0.5)', marginTop: 3, lineHeight: 1.3 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
              <TrendingUp size={16} color={COLOR} />
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
              Start your GRAPHACRETE project
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: COLOR }}>
              contact@graphacrete.monoatomlabs.com
            </div>
          </div>

        </div>
      </div>

      <PageFooter color={COLOR} dark={true} />
    </div>
  )
}
