import React from "react"

const C = "#f59e0b"

const barData = [
  { year: "Year 4", value: "₹3.27 Cr", pct: 36 },
  { year: "Year 8", value: "₹6.54 Cr", pct: 71, note: "(recoat at Yr 4 deducted)" },
  { year: "Year 12", value: "₹9.81 Cr", pct: 100 },
  { year: "Year 16", value: "₹13.08 Cr", pct: 100, note: "(recoat at Yr 12 deducted)" },
  { year: "Year 20", value: "₹9.18 Cr net", pct: 70, note: "(after all 5 recoat costs)" },
]

export default function SolOMCostReduction() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1f1f1f", paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>MONOATOM LABS · GRAFFISOL</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: 2 }}>O&M COST REDUCTION</div>
        <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 6 }}>Solar Panel Coating · Full Lifecycle Operational Cost Analysis</div>
      </div>

      {/* Section 1 — 20-Year Comparison */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>20-Year O&M Cost Comparison — 10 MW Plant</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {/* Left — Without */}
          <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24 }}>
            <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>WITHOUT GRAFFISOL</div>
            {[
              ["Cleaning (52 washes/yr)", "₹6.24 Cr / 20yr"],
              ["Water (10.4M L/yr)", "₹52L / 20yr"],
              ["Output loss from soiling (avg 8%)", "₹9.6 Cr / 20yr"],
            ].map(([label, val], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #1f1f1f" }}>
                <span style={{ color: "#94a3b8", fontSize: 12, maxWidth: "60%" }}>{label}</span>
                <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{val}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0 0" }}>
              <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 700 }}>Total 20yr O&M Cost</span>
              <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 22, fontWeight: 700, color: "#f87171" }}>₹16.36 Cr</span>
            </div>
          </div>
          {/* Right — With */}
          <div style={{ background: "#111", border: `1px solid ${C}`, borderRadius: 12, padding: 24 }}>
            <div style={{ color: C, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 16 }}>WITH GRAFFISOL</div>
            {[
              ["Cleaning (4 inspections/yr)", "₹80L / 20yr"],
              ["Water (80,000 L/yr)", "₹8L / 20yr"],
              ["Output loss from soiling (avg 2%)", "₹2.4 Cr / 20yr"],
              ["Coating cost (every 4yr, 5 applications)", "₹3.9 Cr total"],
            ].map(([label, val], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid #1f1f1f" }}>
                <span style={{ color: "#94a3b8", fontSize: 12, maxWidth: "60%" }}>{label}</span>
                <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{val}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0 0" }}>
              <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 700 }}>Total 20yr O&M Cost</span>
              <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 22, fontWeight: 700, color: C }}>₹7.18 Cr</span>
            </div>
          </div>
        </div>
        {/* Savings badge */}
        <div style={{ marginTop: 16, background: "rgba(245,158,11,0.1)", border: `1px solid ${C}`, borderRadius: 10, padding: "16px 24px", textAlign: "center" }}>
          <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 36, fontWeight: 700, color: C }}>₹9.18 Cr saved</span>
          <span style={{ color: "#e2e8f0", fontSize: 14, marginLeft: 16 }}>over 20 years on a 10 MW plant</span>
        </div>
      </div>

      {/* Section 2 — Year-by-Year Bars */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Year-by-Year Cumulative Saving</div>
        <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24 }}>
          {barData.map((d, i) => (
            <div key={i} style={{ marginBottom: i < barData.length - 1 ? 16 : 0 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{d.year}</span>
                <span style={{ color: C, fontSize: 13, fontWeight: 700 }}>
                  {d.value}
                  {d.note && <span style={{ color: "#475569", fontSize: 11, fontWeight: 400, marginLeft: 8 }}>{d.note}</span>}
                </span>
              </div>
              <div style={{ background: "#1f1f1f", borderRadius: 4, height: 10, overflow: "hidden" }}>
                <div style={{ width: `${d.pct}%`, height: "100%", background: i === 4 ? "rgba(245,158,11,0.6)" : C, borderRadius: 4 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — Key Benefits Beyond Cost */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Key O&M Benefits Beyond Cost</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            {
              title: "Zero-Water Washing Periods",
              body: "Coating maintains output during water scarcity — critical in Rajasthan dry seasons and drought zones.",
            },
            {
              title: "Reduced Safety Risk",
              body: "80% fewer roof and float access events equals lower fall risk exposure for cleaning crews.",
            },
            {
              title: "Inverter Life Extension",
              body: "Lower panel temperature reduces thermal cycling stress on inverters and DC cables.",
            },
          ].map((c, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 20 }}>
              <div style={{ color: C, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>{c.title}</div>
              <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{c.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 16, color: "#333", fontSize: 11, letterSpacing: 1 }}>
        O&M cost model based on actual contractor quotes and meter data from 3 utility-scale sites (2022–2024). Cleaning: ₹300/MW/wash, 10MW × 10 sections.
      </div>
    </div>
  )
}
