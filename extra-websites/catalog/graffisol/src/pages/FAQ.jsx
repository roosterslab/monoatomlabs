import React from 'react'
import { HelpCircle, ChevronRight, Download, Phone, Mail, Globe, Clock, Zap, Target, ArrowRight } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#f59e0b'

const QAS = [
  {
    q: "Does GRAFFISOL affect the panel warranty?",
    a: "GRAFFISOL is applied to the external glass surface and does not contact electrical components. Major OEM panel warranties (Jinko, LONGi, Waaree) are unaffected. Recommend written confirmation from panel supplier if requested by EPC.",
  },
  {
    q: "What surface types is GRAFFISOL compatible with?",
    a: "Tempered glass (mono/poly crystalline panels), ETFE flexible panels, and polycarbonate covers. Not recommended for back-sheet surfaces or bifacial rear glass without site trial.",
  },
  {
    q: "How is GRAFFISOL applied at scale on a utility plant?",
    a: "HVLP spray gun at 2-3 bar, 15 mL/m² in two overlapping passes. A 2-person crew can coat 300-500 m²/day. 1MW array (approximately 6,000 m²): 12-20 crew-days. Panel access via existing O&M walkways.",
  },
  {
    q: "How long before rain after application?",
    a: "No rain contact for 24 hours after application. Full GNP cross-linking and hydrophobic character develops in 72 hours. After 72 hours, rain accelerates the self-cleaning mechanism.",
  },
  {
    q: "What power gain should we expect in our location?",
    a: "Gain varies with GHI and soiling rate. Rajasthan (GHI 6.5): +11.8%. Coastal TN (GHI 5.2): +9.8%. Provide your site GHI and soiling logs for a site-specific estimate. We conduct free pre-application baseline measurement.",
  },
  {
    q: "How do you measure performance post-application?",
    a: "Per IEC 60904-1: string-level IV curve measurements before and after application on matched reference strings. Results delivered as % power gain report within 7 days of application.",
  },
  {
    q: "Is GRAFFISOL hazardous or regulated?",
    a: "No. GNP in aqueous carrier is non-toxic, non-flammable (water-based). Standard PPE (gloves, eye protection) during spray application. REACH-compliant. SDS available on request.",
  },
  {
    q: "What is the recoat interval?",
    a: "3-5 years depending on environment. Desert/coastal: 3 years. Semi-arid inland: 4-5 years. Annual inspection recommended. Contact angle test kit supplied to site for self-monitoring.",
  },
]

const QUICK_REF = [
  { label: "Coverage", value: "15 mL/m²", icon: Target },
  { label: "Application", value: "HVLP spray", icon: Zap },
  { label: "Flash time", value: "30 min", icon: Clock },
  { label: "Full cure", value: "72 hours", icon: Clock },
  { label: "Recoat", value: "3-5 years", icon: ArrowRight },
]

export default function GraffisolFAQ() {
  return (
    <div className="page catalog-page-dark page-break" style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', '--dark-bg-img': "url('/images/graffisol-studio.png')" }}>
      <PageHeader product="GRAFFISOL" title="FAQ" pageNum="13" color={COLOR} dark />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0, padding: '24px' }}>

        {/* Main content — 60% */}
        <div style={{ flex: 1, paddingRight: '24px', display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <HelpCircle size={22} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 16, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: 1 }}>
              Frequently Asked Questions
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, flex: 1, alignContent: 'start' }}>
            {QAS.map(({ q, a }, i) => (
              <div key={i} style={{ 
                display: 'flex', flexDirection: 'column', gap: 8, 
                background: 'rgba(255,255,255,0.03)', borderRadius: 12, border: '1px solid rgba(255,255,255,0.08)', padding: '16px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' 
              }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: 24,
                    height: 24,
                    borderRadius: 8,
                    background: `${COLOR}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 10,
                    fontWeight: 700,
                    color: COLOR,
                  }}>
                    Q{i + 1}
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, fontWeight: 700, color: '#e5e7eb', lineHeight: 1.3 }}>{q}</div>
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#9ca3af', lineHeight: 1.6 }}>{a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar — 40% */}
        <div style={{
          width: '38%',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '20px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 16 }}>
              Quick Reference
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {QUICK_REF.map(({ label, value, icon: Icon }, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  paddingBottom: i < QUICK_REF.length - 1 ? 12 : 0,
                  borderBottom: i < QUICK_REF.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={14} color="#9ca3af" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#9ca3af', fontWeight: 500 }}>{label}</span>
                    <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 12, color: '#fff', fontWeight: 700 }}>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: `linear-gradient(135deg, ${COLOR}, #d97706)`, borderRadius: 12, padding: '20px', color: '#fff', boxShadow: `0 10px 15px -3px ${COLOR}40` }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Still have questions?
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: 'rgba(255,255,255,0.9)', lineHeight: 1.5, marginBottom: 16 }}>
              Our solar energy specialists respond within 4 working hours. Free pre-application baseline measurement for projects above 100 kW.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { label: "graffisol@monoatomlabs.com", icon: Mail },
                { label: "+91 98765 43210", icon: Phone },
                { label: "monoatomlabs.com/graffisol", icon: Globe },
              ].map(({ label, icon: Icon }) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon size={14} color="#fff" style={{ opacity: 0.8 }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 10, color: '#fff', fontWeight: 600 }}>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '20px', marginTop: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <Download size={16} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#fff', textTransform: 'uppercase', letterSpacing: 0.5 }}>
                Downloads Available
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {["Technical Data Sheet (TDS)", "IEC 60904-1 Test Report", "REACH Compliance", "Safety Data Sheet (SDS)"].map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'rgba(255,255,255,0.05)', borderRadius: 8, border: '1px solid rgba(255,255,255,0.05)' }}>
                  <ChevronRight size={14} color="#6b7280" />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9.5, color: '#d1d5db', fontWeight: 500 }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} dark />
    </div>
  )
}
