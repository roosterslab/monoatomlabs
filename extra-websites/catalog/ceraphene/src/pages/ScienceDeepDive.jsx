import React from 'react'
import { Microscope, ShieldCheck, Layers, Activity } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#64748b'

const TABLE_ROWS = [
  { property: 'Pencil hardness', result: '9H+', method: 'ASTM D3363' },
  { property: 'Nano-indentation H', result: '8\u201311 GPa', method: 'ISO 14577' },
  { property: 'Contact angle', result: '>115\u00b0', method: 'ASTM D7334' },
  { property: 'UV retention (2000h)', result: '>90% CA', method: 'ASTM G154' },
  { property: 'Chemical resistance', result: '8/8 passed', method: 'Proprietary matrix' },
  { property: 'Adhesion', result: '5B (no tape lift)', method: 'ASTM D3359' },
  { property: 'Thickness', result: '2\u20133 \u00b5m', method: 'SEM cross-section' },
  { property: 'Heat resistance', result: '200\u00b0C sustained', method: 'TGA/DSC' },
]

const PANELS = [
  {
    icon: Layers,
    label: 'A — GNP-Ceramic Co-matrix',
    rows: [
      ['GNP Specs', '2\u20136 graphene layers, <3 \u00b5m lateral, aspect ratio 500:1+'],
      ['Ceramic Matrix', 'SiO\u2082 (40%) + TiO\u2082 (15%) in organosilane carrier'],
      ['Formation', 'GNP platelets dispersed in ceramic sol. During cure, silanol condensation traps GNP within the forming ceramic network. GNP cannot migrate or agglomerate after cure.'],
      ['Result', 'Interpenetrating network \u2014 ceramic provides compression resistance, GNP provides lateral load distribution and crack arrest.'],
    ],
  },
  {
    icon: Activity,
    label: 'B — Covalent Bonding Chemistry',
    rows: [
      ['Cure Reaction', 'Si-OH (silanol) groups on carrier react with OH groups on clearcoat polymer during 60\u201380\u00b0C cure'],
      ['Bond Formed', 'Si-O-C (siloxane-carbon bond) \u2014 energy 460 kJ/mol (strong covalent bond)'],
      ['Comparison', 'Van der Waals adhesion (wax sealants): 5\u201320 kJ/mol \u2014 25\u201390\u00d7 weaker. Physical entanglement (polymer sealant): 15\u201340 kJ/mol.'],
      ['Implication', 'Wax is removed by hot water. CERAPHENE bond requires mechanical disruption at 460 kJ/mol \u2014 equivalent to grinding off clearcoat.'],
    ],
  },
  {
    icon: Microscope,
    label: 'C — GNP sp\u00b2 Carbon Properties',
    rows: [
      ['Stiffness', '\u223c1 TPa Young\u2019s modulus (in-plane) \u2014 stiffer than steel (200 GPa)'],
      ['Thermal', '\u223c2000\u20135000 W/mK thermal conductivity \u2014 distributes heat laterally'],
      ['UV Opacity', '>99% absorption below 380 nm \u2014 acts as UV shield layer'],
      ['Lattice Quality', 'Electrical conductivity 10\u2076 S/m confirms pristine lattice quality (defect concentration <0.1%)'],
    ],
  },
]

export default function CerapheneScienceDeepDive() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: "flex", flexDirection: "column", '--light-bg-img': "url('/images/ceraphene-studio.png')" }}>
      <PageHeader product="CERAPHENE" title="Science Deep Dive" pageNum="14" color={COLOR} />

      <div style={{ flex: 1, display: "flex", gap: 0, minHeight: 0 }}>

        {/* Left column — 60% */}
        <div style={{ width: "60%", borderRight: "1px solid #e5e7eb", display: "flex", flexDirection: "column", padding: "16px 20px", gap: 12, overflowY: "auto" }}>

          <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, fontWeight: 700, color: "#111827", letterSpacing: 1, textTransform: "uppercase", borderBottom: "2px solid " + COLOR, paddingBottom: 5, marginBottom: 2 }}>
            Molecular Architecture of CERAPHENE
          </div>

          {PANELS.map((panel) => (
            <div key={panel.label} style={{ background: '#ffffff', border: '1px solid #e5e7eb', borderRadius: 12, padding: "12px 14px", boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <panel.icon size={14} color={COLOR} />
                </div>
                <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 0.8, textTransform: "uppercase" }}>
                  {panel.label}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {panel.rows.map(([k, v]) => (
                  <div key={k} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 90, paddingTop: 1 }}>{k}</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

        </div>

        {/* Right column — 40% */}
        <div style={{ width: "40%", display: "flex", flexDirection: "column", padding: "16px 18px", gap: 12 }}>

          <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 700, color: "#111827", letterSpacing: 1, textTransform: "uppercase", borderBottom: "2px solid " + COLOR, paddingBottom: 5 }}>
            Test Data Summary
          </div>

          {/* Table */}
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden", fontSize: 9, boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", background: COLOR, padding: "7px 10px", gap: 0 }}>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#ffffff", letterSpacing: 0.5 }}>Property</span>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#ffffff", letterSpacing: 0.5 }}>Result</span>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#ffffff", letterSpacing: 0.5 }}>Method</span>
            </div>
            {TABLE_ROWS.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "6px 10px", background: i % 2 === 0 ? "#f8fafc" : "#ffffff", borderTop: "1px solid #e5e7eb" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", fontWeight: 600 }}>{row.property}</span>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 10, color: COLOR, fontWeight: 700 }}>{row.result}</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 8, color: "#6b7280" }}>{row.method}</span>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div style={{ marginTop: "auto", background: COLOR + "0d", border: "1px solid " + COLOR + "30", borderLeft: "4px solid " + COLOR, borderRadius: 12, padding: "12px 14px", boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 9, fontWeight: 700, color: COLOR, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
              Third-Party Validation
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.55 }}>
              DRDO Materials Lab Pune (nano-indentation) + NABL-accredited lab (adhesion, chemical, UV). Full test report available on NDA.
            </div>
          </div>

          {/* Certification badge */}
          <div style={{ background: `linear-gradient(135deg, ${COLOR}, #475569)`, borderRadius: 12, padding: "16px", color: '#fff', boxShadow: `0 8px 15px -3px ${COLOR}40`, display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <ShieldCheck size={24} color="#ffffff" />
            </div>
            <div>
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>
                NABL Accredited
              </div>
              <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9.5, color: "rgba(255,255,255,0.9)", lineHeight: 1.5 }}>
                Third-Party Independent Validation. Full test report available under NDA.
              </div>
            </div>
          </div>

        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
