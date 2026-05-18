import React from "react"

const C = "#d97706"

export default function GraInfraROIByType() {
  const roiCards = [
    {
      type: "Bridge / Flyover",
      additiveCost: "Rs. 2.8L",
      savings: [
        { label: "Cement saving", val: "Rs. 1.8L" },
        { label: "Strength upgrade value", val: "Rs. 4.2L" },
      ],
      netGain: "Rs. 3.2L",
      payback: "5 months",
      per: "per 100m\u00b3",
    },
    {
      type: "High-Rise RCC",
      additiveCost: "Rs. 2.8L",
      savings: [
        { label: "Cement saving", val: "Rs. 1.6L" },
        { label: "Column downsize saving", val: "Rs. 5.5L" },
      ],
      netGain: "Rs. 4.3L",
      payback: "4 months",
      per: "per 100m\u00b3",
    },
    {
      type: "Precast Factory",
      additiveCost: "Rs. 2.8L",
      savings: [
        { label: "Cement saving", val: "Rs. 1.9L" },
        { label: "Earlier demould saving", val: "Rs. 3.1L" },
      ],
      netGain: "Rs. 2.2L",
      payback: "7 months",
      per: "per 100m\u00b3",
    },
    {
      type: "Industrial Floor",
      additiveCost: "Rs. 2.8L",
      savings: [
        { label: "Cement saving", val: "Rs. 1.5L" },
        { label: "Reduced thickness saving", val: "Rs. 6.2L" },
      ],
      netGain: "Rs. 4.9L",
      payback: "3 months",
      per: "per 100m\u00b3",
    },
  ]

  const floorRows = [
    { load: "Light industrial (2 tonne/m\u00b2)", std: "150mm", gra: "125mm", saving: "Rs. 2.8L" },
    { load: "Heavy industrial (5 tonne/m\u00b2)", std: "200mm", gra: "165mm", saving: "Rs. 4.2L" },
    { load: "Very heavy (10 tonne/m\u00b2)", std: "250mm", gra: "210mm", saving: "Rs. 5.1L" },
  ]

  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1f1f1f", paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>MONOATOM LABS · GRAPHACRETE</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: 2 }}>INFRASTRUCTURE ROI</div>
        <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 6 }}>Graphene Concrete Additive · Project-Type Economics & Cost-Benefit Analysis</div>
      </div>

      {/* Section 1 — ROI Cards 2x2 */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 14 }}>ROI Summary by Project Type</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {roiCards.map((card, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 12, color: "#94a3b8", fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 14, borderBottom: "1px solid #1f1f1f", paddingBottom: 10 }}>{card.type}</div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: C, lineHeight: 1, marginBottom: 2 }}>{card.netGain}</div>
              <div style={{ color: "#64748b", fontSize: 11, marginBottom: 14 }}>net gain {card.per}</div>
              <div style={{ marginBottom: 12 }}>
                <div style={{ color: "#4b5563", fontSize: 11, marginBottom: 6 }}>Additive cost: <span style={{ color: "#9ca3af" }}>{card.additiveCost}/100m\u00b3</span></div>
                {card.savings.map((s, j) => (
                  <div key={j} style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
                    <span style={{ color: "#64748b", fontSize: 11 }}>{s.label}</span>
                    <span style={{ color: "#4ade80", fontSize: 11, fontWeight: 600 }}>{s.val}</span>
                  </div>
                ))}
              </div>
              <div style={{ background: C + "18", border: "1px solid " + C + "44", borderRadius: 6, padding: "5px 10px", display: "inline-block" }}>
                <span style={{ color: C, fontSize: 11, fontWeight: 700 }}>Payback: {card.payback}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — High-Rise Column Reduction */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28, marginBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>High-Rise: Column Section Reduction Example</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 16 }}>
          {/* Left */}
          <div style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: 10, padding: 20 }}>
            <div style={{ color: "#9ca3af", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Standard M40</div>
            <div style={{ marginBottom: 8 }}>
              <div style={{ color: "#64748b", fontSize: 11 }}>Column size</div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 28, fontWeight: 700, color: "#e2e8f0" }}>600 x 600mm</div>
            </div>
            <div style={{ marginBottom: 8 }}>
              <div style={{ color: "#64748b", fontSize: 11 }}>Reinforcement</div>
              <div style={{ color: "#9ca3af", fontSize: 13, fontWeight: 600 }}>16T20 bars</div>
            </div>
            <div>
              <div style={{ color: "#64748b", fontSize: 11 }}>Floor plan per column</div>
              <div style={{ color: "#9ca3af", fontSize: 13, fontWeight: 600 }}>1.80 m\u00b2</div>
            </div>
          </div>

          {/* Right */}
          <div style={{ background: "#0d0d0d", border: "1px solid " + C + "55", borderRadius: 10, padding: 20 }}>
            <div style={{ color: C, fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>GRAPHACRETE M50 Equivalent</div>
            <div style={{ marginBottom: 8 }}>
              <div style={{ color: "#64748b", fontSize: 11 }}>Column size</div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 28, fontWeight: 700, color: C }}>500 x 500mm</div>
            </div>
            <div style={{ marginBottom: 8 }}>
              <div style={{ color: "#64748b", fontSize: 11 }}>Reinforcement</div>
              <div style={{ color: C, fontSize: 13, fontWeight: 600 }}>12T20 bars</div>
            </div>
            <div>
              <div style={{ color: "#64748b", fontSize: 11 }}>Floor plan per column</div>
              <div style={{ color: C, fontSize: 13, fontWeight: 600 }}>1.25 m\u00b2</div>
            </div>
          </div>
        </div>

        <div style={{ background: "#0a1a10", border: "1px solid #166534", borderRadius: 8, padding: "14px 18px" }}>
          <div style={{ color: "#4ade80", fontSize: 12, fontWeight: 700, marginBottom: 6 }}>Saving per column (30 storey)</div>
          <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
            <span style={{ color: "#86efac", fontSize: 13 }}>Concrete saving: Rs. 18,500</span>
            <span style={{ color: "#86efac", fontSize: 13 }}>Steel saving: Rs. 22,000</span>
            <span style={{ color: "#4ade80", fontSize: 13, fontWeight: 700 }}>Per column: Rs. 40,500</span>
            <span style={{ color: "#4ade80", fontSize: 13, fontWeight: 700 }}>24 columns typical tower = Rs. 9.72L saving</span>
          </div>
        </div>
      </div>

      {/* Section 3 — Floor Thickness Table */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28, marginBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Industrial Floor: Thickness Optimisation</div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: C + "22", borderBottom: "2px solid " + C }}>
              <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>Load Class</th>
              <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>Standard Thickness</th>
              <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>With GRAPHACRETE</th>
              <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>Saving / 1000m\u00b2</th>
            </tr>
          </thead>
          <tbody>
            {floorRows.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#0d0d0d" : "#111", borderBottom: "1px solid #1f1f1f" }}>
                <td style={{ padding: "10px 12px", color: "#e2e8f0", fontSize: 13 }}>{row.load}</td>
                <td style={{ padding: "10px 12px", color: "#9ca3af", fontSize: 13 }}>{row.std}</td>
                <td style={{ padding: "10px 12px", color: C, fontSize: 13, fontWeight: 700 }}>{row.gra}</td>
                <td style={{ padding: "10px 12px", color: "#4ade80", fontSize: 13, fontWeight: 700 }}>{row.saving}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 16, color: "#333", fontSize: 10, letterSpacing: 1, lineHeight: 1.6 }}>
        Cost data from Ahmedabad, Pune, and Mumbai RCC construction projects 2023-24. Steel at Rs. 65/kg, concrete at Rs. 5,500/m\u00b3 (M40 RMC).
      </div>
    </div>
  )
}
