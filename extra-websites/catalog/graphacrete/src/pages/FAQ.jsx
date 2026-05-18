import React from 'react'
import { BookOpen, Package } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#d97706'

const QAS = [
  {
    q: "Does GRAPHACRETE change the concrete mix design?",
    a: "No significant redesign required. Standard IS 10262 mix design applies. Reduce superplasticiser by 10-15% as GNP dispersion acts as mild plasticiser. Run one trial batch to calibrate slump.",
  },
  {
    q: "What is the dosage for M40 concrete?",
    a: "100 mL per 100 kg of cement (0.10% by cement weight). For M30: 75 mL/100kg. For M50+: 125-150 mL/100kg. Pre-dilute in 2L mixing water before adding to drum.",
  },
  {
    q: "Is GRAPHACRETE compatible with fly ash or GGBS blended cement?",
    a: "Yes. For PPC/PSC blended cements, increase dosage by 10-15% to account for lower clinker content. GNP nucleates on both clinker and supplementary cementitious particles.",
  },
  {
    q: "How is the 15% cement reduction achieved?",
    a: "GNP provides additional strength contribution, allowing the designer to reduce cement content while maintaining target compressive strength. NABL-verified: 15% cement reduction in M40 achieves same 28-day strength as reference M40.",
  },
  {
    q: "What certifications does GRAPHACRETE carry?",
    a: "IS 9103:2018 (concrete admixture standard), NABL-accredited test reports, IS 456 durability compliance, BIS-certified manufacturing. Batch-level Certificate of Analysis issued.",
  },
  {
    q: "How long is the shelf life?",
    a: "24 months from manufacturing date when stored at 5-35\u00B0C away from direct sunlight. Do not freeze. Shake or stir before use if stored >6 months.",
  },
  {
    q: "Can GRAPHACRETE be used in hot weather concreting?",
    a: "Yes. GNP does not accelerate or retard setting time significantly (\u00B115 min at 40\u00B0C ambient). For hot weather, follow IS 7861 guidance. Ice water or chilled aggregates standard protocol.",
  },
  {
    q: "What is the minimum order quantity for site trials?",
    a: "Trial packs of 1L available (covers approx. 1 m\u00B3 at M40 dosage). Standard project supply: 5L or 20L drums. Annual contract: 200L barrel with dedicated delivery schedule.",
  },
]

const QUICK_REF = [
  { label: "Dosage range", value: "0.05\u20130.15% by cement weight" },
  { label: "Strength gain", value: "+15\u201340%" },
  { label: "Cement reduction", value: "12\u201315%" },
  { label: "Shelf life", value: "24 months" },
  { label: "Packs", value: "1L / 5L / 20L / 200L" },
  { label: "Standard", value: "IS 9103:2018" },
]

export default function GraphacreteFAQ() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/graphacrete-studio.png')", fontFamily: 'Inter, sans-serif' }}>
      <PageHeader product="GRAPHACRETE" title="FAQ" pageNum="12" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>

        {/* Main content — 65% */}
        <div style={{ flex: 1, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <BookOpen size={18} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 0.8 }}>
              Frequently Asked Questions
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 18px', flex: 1 }}>
            {QAS.map(({ q, a }, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 10, borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: 18,
                    height: 18,
                    borderRadius: 6,
                    background: COLOR,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: 9,
                    fontWeight: 700,
                    color: '#fff',
                    marginTop: 1,
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: '#1e293b', lineHeight: 1.4 }}>{q}</div>
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#4b5563', lineHeight: 1.6, paddingLeft: 25 }}>{a}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right sidebar — 35% */}
        <div style={{
          width: '35%',
          borderLeft: '1px solid #e5e7eb',
          padding: '14px 14px',
          display: 'flex',
          flexDirection: 'column',
          gap: 14,
          background: '#fafafa',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 2 }}>
            <Package size={16} color={COLOR} />
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 0.8 }}>
              Quick Reference
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            {QUICK_REF.map(({ label, value }, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
                borderBottom: i < QUICK_REF.length - 1 ? '1px solid #f1f5f9' : 'none',
                background: '#ffffff',
              }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#64748b', fontWeight: 500 }}>{label}</span>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9, color: COLOR, fontWeight: 700 }}>{value}</span>
              </div>
            ))}
          </div>

          <div style={{ background: '#ffffff', border: `1.5px solid ${COLOR}30`, borderRadius: 12, padding: '12px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Still have questions?
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#4b5563', lineHeight: 1.6, marginBottom: 10 }}>
              Our technical team responds to field queries within 4 working hours. Site visits available for projects above 500 m\u00B3.
            </div>
            {[
              ["Email", "graphacrete@monoatomlabs.com"],
              ["Phone", "+91 98765 43210"],
              ["Web", "monoatomlabs.com/graphacrete"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#9ca3af', width: 38, flexShrink: 0 }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: COLOR, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '10px 12px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9, fontWeight: 700, color: '#374151', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Downloads Available
            </div>
            {["Technical Data Sheet (TDS)", "NABL Test Report", "IS 9103:2018 Compliance Certificate", "Safety Data Sheet (SDS)", "Trial Batch Protocol Guide"].map((d, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5, marginBottom: 3 }}>
                <div style={{ width: 4, height: 4, borderRadius: '50%', background: COLOR, flexShrink: 0 }} />
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#4b5563' }}>{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
