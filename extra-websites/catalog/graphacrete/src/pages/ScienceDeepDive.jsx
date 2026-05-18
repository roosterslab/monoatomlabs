import React from 'react'
import { Microscope, BarChart2, FlaskConical, ShieldCheck } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#d97706'

const TABLE_ROWS = [
  { test: 'Compressive 28d', result: '+40%', standard: 'Baseline', method: 'IS 516' },
  { test: 'Flexural 28d', result: '+38%', standard: 'Baseline', method: 'IS 516' },
  { test: 'Split tensile 28d', result: '+46%', standard: 'Baseline', method: 'IS 5816' },
  { test: 'Porosity (MIP)', result: '\u221245%', standard: 'Baseline', method: 'ASTM C1202' },
  { test: 'Chloride permeability', result: '\u221255%', standard: 'Baseline', method: 'ASTM C1202' },
  { test: 'Carbonation depth', result: '\u221256%', standard: 'Baseline', method: 'XRD' },
  { test: 'Freeze-thaw cycles', result: '+36%', standard: 'Baseline', method: 'ASTM C666' },
  { test: 'Shrinkage', result: '\u22128%', standard: 'Baseline', method: 'IS 1199' },
]

export default function GraphacreteScienceDeepDive() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: "flex", flexDirection: "column", '--light-bg-img': "url('/images/graphacrete-studio.png')" }}>
      <PageHeader product="GRAPHACRETE" title="Science Deep Dive" pageNum="14" color={COLOR} />

      <div style={{ flex: 1, display: "flex", gap: 0, minHeight: 0 }}>

        {/* Left column — 60% */}
        <div style={{ width: "60%", borderRight: "1px solid #e5e7eb", display: "flex", flexDirection: "column", padding: "16px 20px", gap: 12, overflowY: "auto" }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: "2px solid " + COLOR, paddingBottom: 5, marginBottom: 2 }}>
            <Microscope size={18} color={COLOR} />
            <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, fontWeight: 700, color: "#111827", letterSpacing: 1, textTransform: "uppercase" }}>
              How GNP Transforms Concrete at the Nano Scale
            </div>
          </div>

          {/* Panel A */}
          <div style={{ background: '#ffffff', border: "1px solid #e5e7eb", borderLeft: "3px solid " + COLOR, borderRadius: 12, padding: "10px 12px", boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FlaskConical size={14} color={COLOR} />
              </div>
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 0.8, textTransform: "uppercase" }}>
                A &mdash; C-S-H Nucleation Effect
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>Standard C-S-H</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>Cement hydration produces C-S-H (calcium silicate hydrate) gel &mdash; the binding phase. Standard C-S-H forms large, poorly-connected crystals (5\u201320 \u00b5m).</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>GNP Surface Area</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>GNP provides 2630 m\u00b2/g theoretical surface area. C-S-H nucleates on GNP surface at nanoscale (0.5\u20132 \u00b5m crystal size).</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>Pore Filling</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>Nano-C-S-H fills intercrystalline pores &rarr; denser, less permeable matrix. Porosity reduction 30\u201345% (MIP mercury intrusion porosimetry).</span>
              </div>
            </div>
          </div>

          {/* Panel B */}
          <div style={{ background: '#ffffff', border: "1px solid #e5e7eb", borderLeft: "3px solid " + COLOR, borderRadius: 12, padding: "10px 12px", boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Microscope size={14} color={COLOR} />
              </div>
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 0.8, textTransform: "uppercase" }}>
                B &mdash; Crack Bridging &amp; Arrest
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>Crack Initiation</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>Micro-crack initiation in concrete: stress concentrations at aggregate-paste interface.</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>GNP Bridging</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>GNP platelet (aspect ratio 500:1+) bridges micro-crack tips. Platelet pullout energy = 2\u20135\u00d7 normal concrete fracture energy.</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>Result</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>Crack propagation arrests at GNP boundary. Multiple crack branching (energy dissipation) rather than single catastrophic crack.</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>Toughness</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>+45\u201360% fracture toughness (K\u1d35c) measured by SENB specimen.</span>
              </div>
            </div>
          </div>

          {/* Panel C */}
          <div style={{ background: '#ffffff', border: "1px solid #e5e7eb", borderLeft: "3px solid " + COLOR, borderRadius: 12, padding: "10px 12px", boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <BarChart2 size={14} color={COLOR} />
              </div>
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 0.8, textTransform: "uppercase" }}>
                C &mdash; Pore Structure Modification
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>Pore Size (MIP)</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>Average pore size 28 nm (standard M40) &rarr; 14 nm (GRAPHACRETE M40). 50% pore size reduction.</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>Tortuosity</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>Pore connectivity tortuosity 1.8\u00d7 higher &mdash; explains 55% chloride ion permeability reduction.</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>C/S Ratio</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>Slightly higher C/S ratio of C-S-H in GRAPHACRETE samples (XRD/EDX) &mdash; indicates more complete cement hydration due to nucleation seeding.</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right column — 40% */}
        <div style={{ width: "40%", display: "flex", flexDirection: "column", padding: "16px 18px", gap: 12 }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, borderBottom: "2px solid " + COLOR, paddingBottom: 5 }}>
            <BarChart2 size={16} color={COLOR} />
            <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 700, color: "#111827", letterSpacing: 1, textTransform: "uppercase" }}>
              ASTM/IS Test Data Summary
            </div>
          </div>

          {/* Table */}
          <div style={{ background: '#ffffff', border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden", fontSize: 9, boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.4fr 0.7fr 0.7fr 0.9fr", borderBottom: '2px solid #e5e7eb', padding: "5px 8px" }}>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#374151", fontSize: 8, letterSpacing: 0.5 }}>Test</span>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#374151", fontSize: 8, letterSpacing: 0.5 }}>Result</span>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#374151", fontSize: 8, letterSpacing: 0.5 }}>Standard</span>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#374151", fontSize: 8, letterSpacing: 0.5 }}>Method</span>
            </div>
            {TABLE_ROWS.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.4fr 0.7fr 0.7fr 0.9fr", padding: "5px 8px", background: '#ffffff', borderBottom: i < TABLE_ROWS.length - 1 ? "1px solid #f1f5f9" : 'none' }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", fontWeight: 600 }}>{row.test}</span>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 10, color: COLOR, fontWeight: 700 }}>{row.result}</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 8, color: "#6b7280" }}>{row.standard}</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 8, color: "#6b7280" }}>{row.method}</span>
              </div>
            ))}
          </div>

          {/* Callout */}
          <div style={{ marginTop: "auto", background: '#ffffff', border: "1px solid " + COLOR + "30", borderLeft: "4px solid " + COLOR, borderRadius: 12, padding: "10px 12px", boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <ShieldCheck size={16} color={COLOR} />
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 9, fontWeight: 700, color: COLOR, textTransform: "uppercase", letterSpacing: 0.8 }}>
                NABL Lab Testing
              </div>
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.55 }}>
              All data from NABL-accredited independent labs. Batch-level Certificate of Analysis available. Structural design verification per IS 456:2000.
            </div>
          </div>

        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
