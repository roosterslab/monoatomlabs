import React from "react"

const C = "#f59e0b"

export default function SolMaintenanceSchedule() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1f1f1f", paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>MONOATOM LABS · GRAFFISOL</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: 2 }}>MAINTENANCE SCHEDULE</div>
        <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 6 }}>Solar Panel Coating · Recoat Cycles, Inspection Protocol & O&M Cost Savings</div>
      </div>

      {/* Section 1 — Annual O&M Savings */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Annual O&M Savings per 1 MW</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {[
            { value: "48", unit: "/yr", label: "Manual Cleaning Trips Saved", sub: "From 52 down to 4 trips" },
            { value: "96,000", unit: " L", label: "Water Saved", sub: "Litres per year per MW" },
            { value: "₹2,88,000", unit: "", label: "Labour Cost Saved", sub: "₹300/trip × 48 trips × 20 workers" },
            { value: "₹3,50,000", unit: "", label: "O&M Contractor Saved", sub: "Annual contractor cost reduction" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 20 }}>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 38, fontWeight: 700, color: C, lineHeight: 1 }}>
                {s.value}<span style={{ fontSize: 18 }}>{s.unit}</span>
              </div>
              <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600, marginTop: 8 }}>{s.label}</div>
              <div style={{ color: "#475569", fontSize: 11, marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — Cleaning Frequency Comparison */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Cleaning Frequency Comparison</div>
        <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1.5fr 1fr 1.5fr", background: C, padding: "12px 16px", gap: 8 }}>
            {["Site Type", "Without GRAFFISOL", "With GRAFFISOL", "Trips Saved", "Annual Saving"].map((h, i) => (
              <div key={i} style={{ color: "#000", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{h}</div>
            ))}
          </div>
          {[
            ["Utility (Rajasthan)", "52 washes/yr", "4 inspections/yr", "48", "₹4,80,000/MW"],
            ["Commercial rooftop (urban)", "26 washes/yr", "2 inspections/yr", "24", "₹2,40,000/MW"],
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1.5fr 1fr 1.5fr", padding: "12px 16px", gap: 8, borderTop: "1px solid #1f1f1f", background: i % 2 === 0 ? "#111" : "#0d0d0d" }}>
              {row.map((cell, j) => (
                <div key={j} style={{ color: j === 4 ? C : "#cbd5e1", fontSize: 13, fontWeight: j === 4 ? 700 : 400 }}>{cell}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — Recoat Schedule by Environment */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Recoat Schedule by Environment</div>
        <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr 1fr 1fr", background: "#1f1f1f", padding: "12px 16px", gap: 8 }}>
            {["Environment", "GHI", "Soiling Type", "Inspection", "Recoat Cycle"].map((h, i) => (
              <div key={i} style={{ color: "#94a3b8", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{h}</div>
            ))}
          </div>
          {[
            ["Desert (Jaisalmer/Kutch)", "6.5+", "Heavy dust", "Annual", "3 years"],
            ["Semi-arid (Jodhpur/Ahmedabad)", "5.8–6.2", "Moderate dust", "Annual", "4 years"],
            ["Coastal (Tamil Nadu coast)", "5.0–5.3", "Salt + humidity", "6-monthly", "3 years"],
            ["Agricultural (Punjab)", "4.8–5.2", "Seasonal pollen", "6-monthly", "4 years"],
            ["Urban (Bangalore/Pune)", "5.0–5.5", "Low particulate", "Annual", "5 years"],
          ].map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.5fr 1fr 1fr", padding: "12px 16px", gap: 8, borderTop: "1px solid #1f1f1f", background: i % 2 === 0 ? "#111" : "#0d0d0d" }}>
              {row.map((cell, j) => (
                <div key={j} style={{ color: j === 4 ? C : "#cbd5e1", fontSize: 13, fontWeight: j === 4 ? 600 : 400 }}>{cell}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — Recoat ROI */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Recoat ROI</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24 }}>
            <div style={{ color: C, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>4-YEAR RECOAT CYCLE · 1 MW</div>
            {[
              ["Second application cost (Year 4)", "₹7,80,000"],
              ["Cumulative revenue gain (Yrs 1–8)", "₹52,80,000"],
              ["Net gain after 2 coats", "₹45,00,000"],
            ].map(([label, val], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: "1px solid #1f1f1f" }}>
                <span style={{ color: "#94a3b8", fontSize: 13 }}>{label}</span>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 18, fontWeight: 700, color: "#e2e8f0" }}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#111", border: `1px solid ${C}`, borderRadius: 12, padding: 24, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
            <div style={{ color: "#94a3b8", fontSize: 13, marginBottom: 12 }}>Still</div>
            <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 72, fontWeight: 700, color: C, lineHeight: 1 }}>5.8×</div>
            <div style={{ color: "#e2e8f0", fontSize: 15, fontWeight: 600, marginTop: 8 }}>ROI on total coating spend</div>
            <div style={{ color: "#475569", fontSize: 11, marginTop: 8 }}>After both recoat applications</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 16, color: "#333", fontSize: 11, letterSpacing: 1 }}>
        O&M savings based on contract cleaning rates (₹300/trip/MW) across 12 Rajasthan and Gujarat installations. Water: 2000L/MW/wash.
      </div>
    </div>
  )
}
