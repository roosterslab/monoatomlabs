import React from "react"

const C = "#64748b"

const perCarStats = [
  { value: "6.5 hrs", label: "Application Time", sub: "Per vehicle, professional studio" },
  { value: "₹2,200", label: "Cost of Product", sub: "30mL + consumables" },
  { value: "₹8,500", label: "Recommended MRP", sub: "Suggested studio price" },
  { value: "₹6,300", label: "Gross Margin", sub: "74% margin per car" },
]

const studioRows = [
  { size: "Solo operator", cars: 8, monthly: "₹68,000", annual: "₹8,16,000", profit: "₹6,04,800" },
  { size: "2-bay studio", cars: 20, monthly: "₹1,70,000", annual: "₹20,40,000", profit: "₹15,09,600" },
  { size: "4-bay centre", cars: 45, monthly: "₹3,82,500", annual: "₹45,90,000", profit: "₹33,96,600" },
]

const tiers = [
  {
    name: "Silver",
    price: "₹6,500",
    warranty: "3 yr warranty",
    contents: ["30mL · 1 coat application", "Full decontamination wash", "IR cure lamp finishing", "Studio certificate issued"],
  },
  {
    name: "Gold",
    price: "₹12,000",
    warranty: "4 yr warranty",
    contents: ["30mL · 2 coat application", "Paint correction stage 1", "Full decontamination", "Priority slot booking"],
  },
  {
    name: "Platinum",
    price: "₹18,000",
    warranty: "5 yr warranty",
    contents: ["30mL · 2 coat application", "Full decontamination", "PPF surface prep included", "Annual health check"],
  },
]

const pills = [
  "Wholesale pricing 35% below MRP",
  "Marketing collateral provided",
  "Certified installer badge",
  "Free training workshop",
]

export default function CerStudioBusinessModel() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: "1px solid #1f1f1f", paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>
          MONOATOM LABS · CERAPHENE
        </div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", letterSpacing: 2, lineHeight: 1 }}>
          STUDIO BUSINESS MODEL
        </div>
        <div style={{ color: "#64748b", fontSize: 13, marginTop: 8 }}>
          Graphene-Enhanced Ceramic Coating · Detailing Studio Revenue Analysis
        </div>
      </div>

      {/* Section 1 — Per-Car Economics */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>
          Per-Car Economics
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 14 }}>
          {perCarStats.map((s, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: 10, padding: 18, textAlign: "center" }}>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 36, fontWeight: 700, color: C, lineHeight: 1, marginBottom: 8 }}>
                {s.value}
              </div>
              <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
              <div style={{ color: "#475569", fontSize: 10, letterSpacing: 0.5 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — Annual Revenue Potential */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
          Annual Revenue Potential by Studio Size
        </div>
        <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid #1f1f1f" }}>
          {/* Table Header */}
          <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 1.6fr 1.4fr 1.4fr", background: C, padding: "10px 14px" }}>
            {["Studio Size", "Cars/Month", "Revenue/Month", "Annual Revenue", "Annual Profit"].map((h, i) => (
              <div key={i} style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>{h}</div>
            ))}
          </div>
          {/* Table Rows */}
          {studioRows.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "1.8fr 1fr 1.6fr 1.4fr 1.4fr",
              padding: "12px 14px",
              background: i % 2 === 0 ? "#111" : "#0d0d0d",
              borderTop: "1px solid #1a1a1a",
            }}>
              <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{row.size}</div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 22, fontWeight: 700, color: "#fff", lineHeight: 1 }}>{row.cars}</div>
              <div style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{row.monthly}</div>
              <div style={{ color: "#fff", fontSize: 13, fontWeight: 600 }}>{row.annual}</div>
              <div style={{ color: C, fontSize: 13, fontWeight: 700 }}>{row.profit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — Service Package Tiers */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
          Service Package Tiers
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {tiers.map((tier, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: 10, padding: 20, display: "flex", flexDirection: "column" }}>
              <div style={{ color: "#e2e8f0", fontSize: 15, fontWeight: 700, marginBottom: 8, fontFamily: "Outfit, sans-serif", letterSpacing: 1 }}>
                {tier.name}
              </div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 36, fontWeight: 700, color: C, lineHeight: 1, marginBottom: 12 }}>
                {tier.price}
              </div>
              <div style={{ flex: 1, marginBottom: 14 }}>
                {tier.contents.map((line, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "flex-start", gap: 8, marginBottom: 6 }}>
                    <div style={{ width: 5, height: 5, borderRadius: "50%", background: C, marginTop: 5, flexShrink: 0 }} />
                    <div style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.5 }}>{line}</div>
                  </div>
                ))}
              </div>
              <div style={{ background: "#1a1a1a", border: "1px solid #2a2a2a", borderRadius: 6, padding: "6px 10px", textAlign: "center" }}>
                <span style={{ color: C, fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{tier.warranty}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — Studio Partner Benefits */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
          Studio Partner Benefits
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          {pills.map((pill, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: 8, padding: "14px 16px", display: "flex", alignItems: "flex-start", gap: 10 }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: C, marginTop: 4, flexShrink: 0 }} />
              <div style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.5 }}>{pill}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ color: "#374151", fontSize: 10, lineHeight: 1.6, maxWidth: 620 }}>
          Authorised studio partners receive guaranteed territory protection within 5km radius. Apply: partners@monoatomlabs.com
        </div>
        <div style={{ color: "#333", fontSize: 10, letterSpacing: 2, flexShrink: 0 }}>MONOATOM LABS · CERAPHENE · STUDIO MODEL</div>
      </div>

    </div>
  )
}
