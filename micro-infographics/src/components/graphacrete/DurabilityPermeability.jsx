import React from "react"

const C = "#d97706"

export default function GraDurabilityPermeability() {
  const barData = [
    { label: "Standard M40", value: 3200, max: 4000, color: "#374151", class: "HIGH Permeability", textColor: "#9ca3af" },
    { label: "GRAPHACRETE M40", value: 1450, max: 4000, color: C, class: "LOW Permeability", textColor: C },
  ]

  const tableRows = [
    { test: "Chloride permeability (ASTM C1202)", standard: "<2000 C = Low", stdResult: "3,200 C (High)", gra: "1,450 C (Low)", imp: "-55%" },
    { test: "Water absorption (IS 2386)", standard: "<2% good", stdResult: "3.8%", gra: "1.9%", imp: "-50%" },
    { test: "Carbonation depth (28d, XC4)", standard: "<20mm", stdResult: "18mm", gra: "8mm", imp: "-56%" },
    { test: "Sulphate resistance (ASTM C1012)", standard: "<0.10% expansion", stdResult: "0.08%", gra: "0.03%", imp: "-63%" },
    { test: "Freeze-thaw cycles (ASTM C666)", standard: ">300 cycles", stdResult: "280", gra: "380+", imp: "+36%" },
  ]

  const serviceCards = [
    { env: "Marine / Coastal", code: "IS 456 XS3 Environment", stdYr: "40", graYr: "60+", label: "years with GRAPHACRETE" },
    { env: "Industrial / Chemical", code: "XA2-XA3 Chemical Exposure", stdYr: "25", graYr: "38+", label: "years with GRAPHACRETE" },
    { env: "Infrastructure / Bridges", code: "IS 456 Durability Class", stdYr: "50", graYr: "75+", label: "years with GRAPHACRETE" },
  ]

  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1f1f1f", paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>MONOATOM LABS · GRAPHACRETE</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: 2 }}>DURABILITY & PERMEABILITY</div>
        <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 6 }}>Graphene Concrete Additive · Long-Term Protection & IS 456 Durability Data</div>
      </div>

      {/* Section 1 — Bar Chart */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28, marginBottom: 20 }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
          <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase" }}>Chloride Penetration Resistance — ASTM C1202</div>
          <div style={{ background: C + "22", border: "1px solid " + C + "55", borderRadius: 6, padding: "4px 12px" }}>
            <span style={{ color: C, fontSize: 12, fontWeight: 700 }}>55% reduction</span>
          </div>
        </div>
        {barData.map((row, i) => (
          <div key={i} style={{ marginBottom: i < barData.length - 1 ? 16 : 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
              <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{row.label}</span>
              <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 16, fontWeight: 700, color: row.textColor }}>{row.value.toLocaleString()} C</span>
            </div>
            <div style={{ background: "#1a1a1a", borderRadius: 6, height: 36, position: "relative", overflow: "hidden" }}>
              <div style={{ width: (row.value / row.max * 100) + "%", background: row.color, height: "100%", borderRadius: 6, display: "flex", alignItems: "center", paddingLeft: 12, transition: "width 0.3s" }}>
                <span style={{ fontSize: 11, fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>{row.class}</span>
              </div>
            </div>
          </div>
        ))}
        <div style={{ marginTop: 14, color: "#4b5563", fontSize: 11, letterSpacing: 1 }}>Scale: 0 — 4,000 coulombs · ASTM C1202 classification threshold: 2,000 C</div>
      </div>

      {/* Section 2 — Table */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28, marginBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Key Durability Metrics</div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
            <thead>
              <tr style={{ background: C + "22", borderBottom: "2px solid " + C }}>
                <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>Test</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>Standard</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>Std M40 Result</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>GRAPHACRETE M40</th>
                <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>Improvement</th>
              </tr>
            </thead>
            <tbody>
              {tableRows.map((row, i) => (
                <tr key={i} style={{ background: i % 2 === 0 ? "#0d0d0d" : "#111", borderBottom: "1px solid #1f1f1f" }}>
                  <td style={{ padding: "10px 12px", color: "#e2e8f0", fontSize: 12 }}>{row.test}</td>
                  <td style={{ padding: "10px 12px", color: "#64748b", fontSize: 12 }}>{row.standard}</td>
                  <td style={{ padding: "10px 12px", color: "#9ca3af", fontSize: 12 }}>{row.stdResult}</td>
                  <td style={{ padding: "10px 12px", color: C, fontSize: 12, fontWeight: 700 }}>{row.gra}</td>
                  <td style={{ padding: "10px 12px", color: "#4ade80", fontSize: 12, fontWeight: 700 }}>{row.imp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3 — Service Life */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 14 }}>Service Life Extension</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          {serviceCards.map((card, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 10 }}>{card.env}</div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 52, fontWeight: 700, color: C, lineHeight: 1 }}>{card.graYr}</div>
              <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 4, marginBottom: 14 }}>{card.label}</div>
              <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 12 }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                  <span style={{ color: "#4b5563", fontSize: 11 }}>Standard</span>
                  <span style={{ color: "#9ca3af", fontSize: 12, fontWeight: 600 }}>{card.stdYr} yr</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ color: "#4b5563", fontSize: 11 }}>GRAPHACRETE</span>
                  <span style={{ color: C, fontSize: 12, fontWeight: 700 }}>{card.graYr} yr</span>
                </div>
                <div style={{ marginTop: 10, fontSize: 10, color: "#374151", letterSpacing: 0.5 }}>{card.code}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — Economic Value */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 14 }}>Economic Value of Durability</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {/* Left */}
          <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 22 }}>
            <div style={{ fontSize: 12, color: "#9ca3af", fontWeight: 700, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>Without GRAPHACRETE</div>
            <div style={{ marginBottom: 10 }}>
              <div style={{ color: "#64748b", fontSize: 11, marginBottom: 2 }}>Structure</div>
              <div style={{ color: "#e2e8f0", fontSize: 13 }}>M40 bridge deck · 40 yr lifespan</div>
            </div>
            <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 10, marginBottom: 10 }}>
              <div style={{ color: "#64748b", fontSize: 11, marginBottom: 6 }}>Lifecycle Events</div>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={{ color: "#94a3b8", fontSize: 12 }}>Repair at yr 20</span>
                <span style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 600 }}>Rs. 45L</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#94a3b8", fontSize: 12 }}>Replacement at yr 40</span>
                <span style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 600 }}>Rs. 1.2Cr</span>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#64748b", fontSize: 12 }}>Total Lifecycle</span>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 20, fontWeight: 700, color: "#ef4444" }}>Rs. 1.65Cr</span>
              </div>
            </div>
          </div>

          {/* Right */}
          <div style={{ background: "#111", border: "1px solid " + C + "55", borderRadius: 12, padding: 22 }}>
            <div style={{ fontSize: 12, color: C, fontWeight: 700, marginBottom: 14, textTransform: "uppercase", letterSpacing: 1 }}>With GRAPHACRETE</div>
            <div style={{ marginBottom: 10 }}>
              <div style={{ color: "#64748b", fontSize: 11, marginBottom: 2 }}>Structure</div>
              <div style={{ color: "#e2e8f0", fontSize: 13 }}>Same deck · 65 yr lifespan</div>
            </div>
            <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: 10, marginBottom: 10 }}>
              <div style={{ color: "#64748b", fontSize: 11, marginBottom: 6 }}>Lifecycle Events</div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#94a3b8", fontSize: 12 }}>Minor maintenance at yr 35</span>
                <span style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 600 }}>Rs. 12L</span>
              </div>
            </div>
            <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 10, marginBottom: 8 }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ color: "#64748b", fontSize: 12 }}>Total</span>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 20, fontWeight: 700, color: "#4ade80" }}>Rs. 92L</span>
              </div>
            </div>
            <div style={{ background: C + "18", border: "1px solid " + C + "44", borderRadius: 8, padding: "8px 14px", textAlign: "center" }}>
              <span style={{ color: C, fontSize: 13, fontWeight: 700 }}>Saving: Rs. 73L over lifecycle</span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 16, color: "#333", fontSize: 10, letterSpacing: 1, lineHeight: 1.6 }}>
        Durability data from IS 516, ASTM C1202, IS 2386 tests. Marine bridge data from Coastal Gujarat pilot. Lifecycle cost: IS 456 Cl. 8 methodology.
      </div>
    </div>
  )
}
