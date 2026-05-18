import React from 'react'
import { BookOpen, CheckCircle, Package } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#06b6d4'

const QAS = [
  {
    q: "Is HD-G-PE drop-in compatible with my existing extruder?",
    a: "Yes. HD-G-PE masterbatch is added at hopper/silo via tumble-blend or gravimetric doser. No screw design changes, no temperature profile changes. Process parameters remain identical.",
  },
  {
    q: "What GNP loading do I need in my final product?",
    a: "0.5-2.0% by weight in the final part. Masterbatch is 5-10% GNP, so blend 5-20 kg masterbatch per 100 kg base HDPE. Start at 1% and adjust based on first-run tensile results.",
  },
  {
    q: "Does HD-G-PE affect melt flow rate (MFR)?",
    a: "GNP at 1% loading reduces MFR by 5-8% (due to platelet reinforcement effect). For extrusion, this is within normal process tolerance. For injection moulding, increase melt temp by 5\u00B0C or reduce screw speed by 8% on first trial.",
  },
  {
    q: "Is HD-G-PE FSSAI compliant for food contact?",
    a: "Yes, at loading up to 2% GNP in final part. Migration testing per EU 10/2011 protocol confirms <0.1 mg/dm\u00B2 overall migration (limit: 10 mg/dm\u00B2). FSSAI conformity declaration issued per batch. IS 7328 compliant for potable water pipes.",
  },
  {
    q: "Can HD-G-PE be blended with recycled HDPE (rHDPE)?",
    a: "Yes. Blend with up to 50% rHDPE without reduction in property gains. GNP acts as compatibiliser between virgin and recycled polymer chains, partially offsetting rHDPE strength reduction.",
  },
  {
    q: "What is the minimum trial quantity?",
    a: "10 kg trial bag (covers 100 kg of HDPE at 10% masterbatch, or 500 kg at 2% loading). We recommend testing at 3 dosage levels (0.5%, 1%, 1.5%) with ASTM D638 dumbbell specimens from your production run.",
  },
  {
    q: "Does the graphene affect colour or odour?",
    a: "At 0.5-1% loading: slight grey tint in natural/translucent products. Black and grey products: unaffected. White (TiO\u2082 opaque): no visible impact at <1% loading. No odour change. Food-contact odour panel test: no detectable difference.",
  },
  {
    q: "What is the shelf life of the masterbatch?",
    a: "24 months from manufacturing date. Store in sealed original bags at 15-35\u00B0C, away from moisture and direct sunlight. Do not store on damp floors. Use within 6 months of opening.",
  },
]

const QUICK_REF = [
  { label: "Loading", value: "0.5\u20132.0% in final part" },
  { label: "MB concentrate", value: "5\u201310% GNP" },
  { label: "Processing", value: "180\u2013240\u00B0C" },
  { label: "FSSAI", value: "Compliant (\u22642%)" },
  { label: "Packs", value: "10kg / 25kg / 500kg IBC" },
  { label: "Standard", value: "IS 7328, ASTM D638" },
]

export default function HdgpeFAQ() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: 'flex', flexDirection: 'column', fontFamily: 'Inter, sans-serif', '--light-bg-img': "url('/images/hd-g-pe-studio.png')" }}>
      <PageHeader product="HD-G-PE" title="FAQ" pageNum="12" color={COLOR} />

      <div style={{ flex: 1, display: 'flex', gap: 0, minHeight: 0 }}>

        {/* Main content — 65% */}
        <div style={{ flex: 1, padding: '14px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
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
                    width: 22,
                    height: 22,
                    borderRadius: 8,
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
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#4b5563', lineHeight: 1.6, paddingLeft: 29 }}>{a}</div>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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

          <div style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: '12px', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <CheckCircle size={14} color={COLOR} />
              <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 10, fontWeight: 700, color: COLOR, textTransform: 'uppercase', letterSpacing: 0.5 }}>
                Still have questions?
              </div>
            </div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 9, color: '#4b5563', lineHeight: 1.6, marginBottom: 10 }}>
              Our polymer engineers respond within 4 working hours. Processing line assessment available for trial orders above 100 kg.
            </div>
            {[
              ["Email", "hdgpe@monoatomlabs.com"],
              ["Phone", "+91 98765 43210"],
              ["Web", "monoatomlabs.com/hdgpe"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: 'flex', gap: 6, marginBottom: 4 }}>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: '#9ca3af', width: 38, flexShrink: 0 }}>{k}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontSize: 8.5, color: COLOR, fontWeight: 600 }}>{v}</span>
              </div>
            ))}
          </div>

          <div style={{ background: '#f1f5f9', border: '1px solid #e5e7eb', borderRadius: 12, padding: '10px 12px' }}>
            <div style={{ fontFamily: 'Outfit, sans-serif', fontSize: 9, fontWeight: 700, color: '#374151', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>
              Downloads Available
            </div>
            {["Technical Data Sheet (TDS)", "FSSAI Conformity Declaration", "ASTM D638 Test Report", "Safety Data Sheet (SDS)", "Processor Integration Guide"].map((d, i) => (
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
