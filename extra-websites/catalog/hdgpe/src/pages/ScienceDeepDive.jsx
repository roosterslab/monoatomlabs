import React from 'react'
import { Microscope, BarChart2, ShieldCheck, Layers, Zap } from 'lucide-react'
import PageHeader from '../components/shared/PageHeader'
import PageFooter from '../components/shared/PageFooter'

const COLOR = '#06b6d4'

const TABLE_ROWS = [
  { property: 'Tensile strength', hdgpe: '+30%', standard: 'Baseline', method: 'ASTM D638' },
  { property: 'Elongation at break', hdgpe: '20\u00d7', standard: 'Baseline', method: 'ASTM D638' },
  { property: 'Flexural modulus', hdgpe: '+18%', standard: 'Baseline', method: 'ASTM D790' },
  { property: 'Notched Izod impact', hdgpe: '+32%', standard: 'Baseline', method: 'ASTM D256' },
  { property: 'WVTR', hdgpe: '\u221231%', standard: 'Baseline', method: 'ASTM E96' },
  { property: 'OTR', hdgpe: '\u221235%', standard: 'Baseline', method: 'ASTM D3985' },
  { property: 'UV tensile retention', hdgpe: '89% @2000h', standard: '58% @2000h', method: 'ISO 4892-3' },
  { property: 'Crystallinity (DSC)', hdgpe: '74\u201378%', standard: '65\u201370%', method: 'ISO 11357' },
]

export default function HdgpeScienceDeepDive() {
  return (
    <div className="page catalog-page-light page-break" style={{ display: "flex", flexDirection: "column", '--light-bg-img': "url('/images/hd-g-pe-studio.png')" }}>
      <PageHeader product="HD-G-PE" title="Science Deep Dive" pageNum="14" color={COLOR} />

      <div style={{ flex: 1, display: "flex", gap: 0, minHeight: 0 }}>

        {/* Left column — 60% */}
        <div style={{ width: "60%", borderRight: "1px solid #e5e7eb", display: "flex", flexDirection: "column", padding: "16px 20px", gap: 12, overflowY: "auto" }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <Microscope size={18} color={COLOR} />
            <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 13, fontWeight: 700, color: "#111827", letterSpacing: 1, textTransform: "uppercase" }}>
              GNP Reinforcement in Polymer Matrix
            </div>
          </div>

          {/* Panel A */}
          <div style={{ border: "1px solid #e5e7eb", borderLeft: "3px solid " + COLOR, borderRadius: 12, padding: "10px 12px", background: '#ffffff', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Layers size={14} color={COLOR} />
              </div>
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 0.8, textTransform: "uppercase" }}>
                A &mdash; Platelet Alignment &amp; Load Transfer
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>GNP Specs</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>5\u201315 graphene layers, 2\u20136 \u00b5m lateral, aspect ratio 300\u2013800:1. Platelets align in the direction of polymer flow during extrusion/moulding.</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>Load Transfer</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>Stress transferred from HDPE matrix to GNP via interfacial shear (Cox shear-lag model). GNP Young\u2019s modulus &sim;1 TPa vs HDPE &sim;1 GPa &mdash; 1000\u00d7 stiffer reinforcement.</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>Critical AR Theory</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>Halpin-Tsai model: GNP aspect ratio &gt;300 ensures full stress transfer before platelet pull-out. Aspect ratio &gt;800 approaches theoretical maximum reinforcement.</span>
              </div>
            </div>
          </div>

          {/* Panel B */}
          <div style={{ border: "1px solid #e5e7eb", borderLeft: "3px solid " + COLOR, borderRadius: 12, padding: "10px 12px", background: '#ffffff', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <BarChart2 size={14} color={COLOR} />
              </div>
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 0.8, textTransform: "uppercase" }}>
                B &mdash; Crystallinity &amp; Nucleation
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>Standard HDPE</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>Spherulite formation from amorphous melt during cooling. Standard HDPE: 65\u201370% crystallinity, large spherulites (50\u2013200 \u00b5m).</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>GNP Nucleation</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>C-backbone of polyethylene epitaxially aligns with graphene lattice (0.246 nm vs 0.253 nm PE unit cell &mdash; near-match). Nucleation rate 3\u20135\u00d7 faster.</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>Result</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>Smaller spherulites (10\u201330 \u00b5m), more uniform crystalline texture, higher crystallinity (74\u201378%). Denser material = better barrier, creep resistance, and chemical resistance.</span>
              </div>
            </div>
          </div>

          {/* Panel C */}
          <div style={{ border: "1px solid #e5e7eb", borderLeft: "3px solid " + COLOR, borderRadius: 12, padding: "10px 12px", background: '#ffffff', boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 28, height: 28, borderRadius: 8, background: `${COLOR}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Zap size={14} color={COLOR} />
              </div>
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 700, color: COLOR, letterSpacing: 0.8, textTransform: "uppercase" }}>
                C &mdash; UV Protection Mechanism
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>HDPE Degradation</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>UV photons (h\u03bd &lt;380 nm) cleave C-H bonds, producing radical species. Oxygen reacts &rarr; carbonyl formation &rarr; chain scission &rarr; embrittlement.</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>GNP Intervention</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>sp\u00b2 lattice absorbs &gt;99% UV below 380 nm within the surface GNP layer. Radical trap effect at edge/defect sites supplements HALS mechanism.</span>
              </div>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                <span style={{ fontFamily: "Outfit, sans-serif", fontSize: 8, fontWeight: 700, color: COLOR, textTransform: "uppercase", minWidth: 100, paddingTop: 1 }}>Measured Outcome</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.5 }}>Photo-oxidative induction period extended 2\u20133\u00d7. Carbonyl index (FTIR) after 2000h UV: HD-G-PE 0.08 vs standard HDPE 0.31 (75% reduction).</span>
              </div>
            </div>
          </div>

        </div>

        {/* Right column — 40% */}
        <div style={{ width: "40%", display: "flex", flexDirection: "column", padding: "16px 18px", gap: 12 }}>

          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
            <BarChart2 size={18} color={COLOR} />
            <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 11, fontWeight: 700, color: "#111827", letterSpacing: 1, textTransform: "uppercase" }}>
              ASTM Mechanical Data (1% GNP Loading)
            </div>
          </div>

          {/* Table */}
          <div style={{ border: "1px solid #e5e7eb", borderRadius: 12, overflow: "hidden", fontSize: 9, boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 0.8fr 0.9fr", borderBottom: '2px solid #e5e7eb', padding: "6px 8px", background: '#f8fafc' }}>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#374151", fontSize: 8, letterSpacing: 0.5 }}>Property</span>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#374151", fontSize: 8, letterSpacing: 0.5 }}>HD-G-PE</span>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#374151", fontSize: 8, letterSpacing: 0.5 }}>Std HDPE</span>
              <span style={{ fontFamily: "Outfit, sans-serif", fontWeight: 700, color: "#374151", fontSize: 8, letterSpacing: 0.5 }}>Method</span>
            </div>
            {TABLE_ROWS.map((row, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 0.8fr 0.9fr", padding: "5px 8px", background: '#ffffff', borderTop: "1px solid #f1f5f9" }}>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", fontWeight: 600 }}>{row.property}</span>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 10, color: COLOR, fontWeight: 700 }}>{row.hdgpe}</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 8, color: "#6b7280" }}>{row.standard}</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: 8, color: "#6b7280" }}>{row.method}</span>
              </div>
            ))}
          </div>

          {/* Positive value badges for key metrics */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
            {['+30% Tensile', '+32% Impact', '20× Elongation', '+20% UV Life'].map(badge => (
              <span key={badge} style={{ background: 'rgba(52,211,153,0.15)', border: '1px solid rgba(52,211,153,0.3)', color: '#059669', padding: '3px 8px', borderRadius: 12, fontSize: 9, fontWeight: 700 }}>{badge}</span>
            ))}
          </div>

          {/* Callout */}
          <div style={{ marginTop: "auto", background: '#ffffff', border: "1px solid " + COLOR + "30", borderLeft: "4px solid " + COLOR, borderRadius: 12, padding: "10px 12px", boxShadow: '0 2px 4px -1px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
              <ShieldCheck size={16} color={COLOR} />
              <div style={{ fontFamily: "Outfit, sans-serif", fontSize: 9, fontWeight: 700, color: COLOR, textTransform: "uppercase", letterSpacing: 0.8 }}>
                NABL-Accredited Testing
              </div>
            </div>
            <div style={{ fontFamily: "Inter, sans-serif", fontSize: 9, color: "#374151", lineHeight: 1.55 }}>
              All data from ASTM-standard tests at NABL-accredited lab. Minimum 5 specimens per test, COV &lt;6%. FSSAI conformity + IS 7328 certificates available per batch.
            </div>
          </div>

        </div>
      </div>

      <PageFooter color={COLOR} />
    </div>
  )
}
