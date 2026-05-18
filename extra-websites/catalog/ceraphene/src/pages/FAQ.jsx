import React from 'react'
import { CheckCircle, ShieldCheck, BookOpen } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#64748b'

const QAS = [
  {
    q: "Can I apply CERAPHENE myself (DIY)?",
    a: "CERAPHENE is formulated for professional application by trained detailing studios. Incorrect application (missed high-spots, uneven levelling) cannot be corrected without solvent removal and reapplication. DIY kits are not offered to maintain quality standards and warranty validity.",
  },
  {
    q: "How long after application before the first wash?",
    a: "No water contact for 24 hours. No automated car wash for 30 days. No wax, polish, or sealant for 60 days. After full cure (7 days), pH-neutral hand wash only.",
  },
  {
    q: "Does CERAPHENE need paint correction first?",
    a: "Paint correction is optional but recommended. CERAPHENE locks in the surface finish \u2014 swirl marks and oxidation visible before application will remain visible (sealed beneath) after application. For showroom-quality results, machine polish first.",
  },
  {
    q: "Can CERAPHENE be applied over existing ceramic coating?",
    a: "Existing ceramic coatings must be mechanically removed (light machine polish, 500-800 grit equivalent) before CERAPHENE application. Applying over existing ceramic prevents Si-O bonding to the clearcoat substrate.",
  },
  {
    q: "What is the hardness compared to standard ceramic coatings?",
    a: "CERAPHENE achieves 9H+ pencil hardness (ASTM D3363) and 8-11 GPa nano-indentation hardness (ISO 14577). Standard ceramic coatings: 7H / 4-6 GPa. CERAPHENE is 3-4 times harder due to GNP lattice reinforcement within the ceramic matrix.",
  },
  {
    q: "Is CERAPHENE safe for matte paint finishes?",
    a: "CERAPHENE is formulated for gloss and satin finishes. Application to factory matte finishes will increase gloss \u2014 this is irreversible. For matte vehicles, contact us for a matte-compatible formulation (available Q3 2025).",
  },
  {
    q: "How does CERAPHENE perform in hot climates like Rajasthan or Dubai?",
    a: "Exceptionally. GNP thermal barrier reduces panel surface temperature by 8-12\u00B0C. The Si-O inorganic network is stable to 200\u00B0C sustained \u2014 no softening or delamination in extreme summer conditions. Contact angle retention >90% after 2000h UV exposure.",
  },
  {
    q: "What if I am not satisfied after application?",
    a: "Authorised studios carry a 30-day satisfaction guarantee. If hardness or contact angle is below specification on studio QC test, free recoat is provided. Warranty claims beyond 30 days follow the standard warranty process (lab sample within 14 days).",
  },
]

const QUICK_REF = [
  { label: "Hardness", value: "9H+ (ASTM D3363)" },
  { label: "Contact angle", value: ">115\u00B0" },
  { label: "Durability", value: "3-4+ years" },
  { label: "Heat resistance", value: "200\u00B0C" },
  { label: "Pack", value: "30mL (1 car) / 100mL" },
  { label: "Price", value: "from \u20B95,000 per vehicle" },
]

export default function CerapheneFAQ() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', '--light-bg-img': "url('/images/ceraphene-studio.png')", fontFamily: 'Inter, sans-serif' }}>
      <PageHeader product="CERAPHENE" title="FAQ" pageNum="12" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>

        {/* Main content — 65% */}
        <div style={{ flex: 1, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 14, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 1 }}>
            Frequently Asked Questions
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 18px', flex: 1 }}>
            {QAS.map(({ q, a }, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: 4, paddingBottom: 10, borderBottom: '1px solid #f1f5f9' }}>
                <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
                  <div style={{
                    flexShrink: 0,
                    width: 20,
                    height: 20,
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
                    boxShadow: '0 2px 4px -1px rgba(0,0,0,0.1)',
                  }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: '#1e293b', lineHeight: 1.4 }}>{q}</div>
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#4b5563', lineHeight: 1.6, paddingLeft: 27 }}>{a}</div>
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
          background: '#f8fafc',
        }}>
          <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 11, fontWeight: 700, color: '#111827', textTransform: 'uppercase', letterSpacing: 1 }}>
            Quick Reference
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid #e5e7eb', borderRadius: 12, overflow: 'hidden', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            {QUICK_REF.map(({ label, value }, i) => (
              <div key={i} style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '8px 12px',
                borderBottom: i < QUICK_REF.length - 1 ? '1px solid #f1f5f9' : 'none',
                background: i % 2 === 0 ? '#ffffff' : '#f8fafc',
              }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#64748b', fontWeight: 500 }}>{label}</span>
                <span style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9, color: COLOR, fontWeight: 700 }}>{value}</span>
              </div>
            ))}
          </div>

          <div style={{ background: `${COLOR}0d`, border: `1.5px solid ${COLOR}30`, borderRadius: 12, padding: '12px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, marginBottom: 6, textTransform: 'uppercase', letterSpacing: 1 }}>
              Still have questions?
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#4b5563', lineHeight: 1.6, marginBottom: 10 }}>
              Our detailing experts respond within 4 working hours. Find your nearest authorised studio at monoatomlabs.com/ceraphene/studios.
            </div>
            {[
              ["Email", "ceraphene@monoatomlabs.com"],
              ["Phone", "+91 98765 43210"],
              ["Web", "monoatomlabs.com/ceraphene"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#9ca3af', width: 38, flexShrink: 0 }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: COLOR, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '10px 12px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9, fontWeight: 700, color: '#374151', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>
              Downloads Available
            </div>
            {["Technical Data Sheet (TDS)", "ASTM D3363 Hardness Report", "ISO 14577 Nano-indentation Report", "Safety Data Sheet (SDS)", "Studio Application Protocol"].map((d, i) => (
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
