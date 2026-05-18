import React from "react"

const C = "#d97706"

export default function GraSupplyChainGuide() {
  const specCards = [
    { label: "Form", value: "Liquid dispersion", detail: "Dark grey, low-viscosity" },
    { label: "Shelf Life", value: "24 months", detail: "From manufacture date" },
    { label: "Storage", value: "5 - 35 C", detail: "Away from direct sunlight. Do not freeze." },
    { label: "Pack Sizes", value: "1L / 5L / 20L / 200L", detail: "Trial · Standard · Drum · Barrel" },
  ]

  const dosingEquip = [
    {
      name: "Peristaltic Pump",
      badge: "Recommended",
      accuracy: "+-1% accuracy",
      flow: "0-500 mL/min",
      batch: "All batch sizes",
      detail: "Drip-proof, direct connection to mixer drum",
    },
    {
      name: "Manual Measuring Cylinder",
      badge: "Small Batches",
      accuracy: "+-5mL accuracy",
      flow: "500mL graduated",
      batch: "< 3 m\u00b3 batches",
      detail: "Suitable for trial and small site pours",
    },
    {
      name: "Gravimetric Doser",
      badge: "Continuous Plants",
      accuracy: "+-0.5% accuracy",
      flow: "Automated",
      batch: "High-volume continuous",
      detail: "Suitable for continuous production plants",
    },
  ]

  const orderRows = [
    { size: "Trial (1L)", lead: "3-5 business days", moq: "1 unit", delivery: "Courier (Bluedart / Delhivery)" },
    { size: "Standard (5L - 20L)", lead: "5-7 business days", moq: "5 units", delivery: "Surface freight" },
    { size: "Bulk (200L+)", lead: "10-14 business days", moq: "1 barrel", delivery: "Road tanker / FTL" },
    { size: "Annual contract", lead: "Dedicated slot", moq: "500L / month", delivery: "Scheduled fortnightly" },
  ]

  const certs = [
    { cert: "IS 9103:2018", detail: "Admixture standard compliant" },
    { cert: "NABL-accredited", detail: "Lab testing with batch CoA" },
    { cert: "BIS-certified", detail: "Manufacturing facility" },
    { cert: "ISO 9001:2015", detail: "Quality Management System" },
  ]

  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1f1f1f", paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>MONOATOM LABS · GRAPHACRETE</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: 2 }}>SUPPLY & LOGISTICS</div>
        <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 6 }}>Graphene Concrete Additive · Shelf Life, Storage, Dosing Equipment & Lead Times</div>
      </div>

      {/* Section 1 — Product Specs 2x2 */}
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 14 }}>Product Specifications</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
          {specCards.map((card, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 22 }}>
              <div style={{ fontSize: 11, color: "#64748b", fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8 }}>{card.label}</div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 24, fontWeight: 700, color: "#e2e8f0", marginBottom: 4 }}>{card.value}</div>
              <div style={{ color: "#4b5563", fontSize: 12 }}>{card.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — Dosing Equipment */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28, marginBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Dosing Equipment Guide</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 14 }}>
          {dosingEquip.map((eq, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: "1px solid #1f1f1f", borderRadius: 10, padding: 20 }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 12 }}>
                <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 700 }}>{eq.name}</div>
                {i === 0 && (
                  <div style={{ background: C + "22", border: "1px solid " + C + "55", borderRadius: 4, padding: "2px 7px", flexShrink: 0, marginLeft: 8 }}>
                    <span style={{ color: C, fontSize: 9, fontWeight: 700 }}>REC</span>
                  </div>
                )}
              </div>
              <div style={{ background: C + "18", border: "1px solid " + C + "33", borderRadius: 6, padding: "4px 10px", marginBottom: 10, display: "inline-block" }}>
                <span style={{ color: C, fontSize: 11, fontWeight: 700 }}>{eq.accuracy}</span>
              </div>
              <div style={{ marginBottom: 6 }}>
                <div style={{ color: "#64748b", fontSize: 11, marginBottom: 2 }}>Flow / Capacity</div>
                <div style={{ color: "#9ca3af", fontSize: 12, fontWeight: 600 }}>{eq.flow}</div>
              </div>
              <div style={{ marginBottom: 8 }}>
                <div style={{ color: "#64748b", fontSize: 11, marginBottom: 2 }}>Best for</div>
                <div style={{ color: "#9ca3af", fontSize: 12, fontWeight: 600 }}>{eq.batch}</div>
              </div>
              <div style={{ color: "#374151", fontSize: 11, borderTop: "1px solid #1a1a1a", paddingTop: 8 }}>{eq.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — Ordering Table */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28, marginBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Ordering & Lead Times</div>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ background: C + "22", borderBottom: "2px solid " + C }}>
              <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>Order Size</th>
              <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>Lead Time</th>
              <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>MOQ</th>
              <th style={{ textAlign: "left", padding: "10px 12px", color: C, fontWeight: 700, letterSpacing: 1 }}>Delivery</th>
            </tr>
          </thead>
          <tbody>
            {orderRows.map((row, i) => (
              <tr key={i} style={{ background: i % 2 === 0 ? "#0d0d0d" : "#111", borderBottom: "1px solid #1f1f1f" }}>
                <td style={{ padding: "10px 12px", color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{row.size}</td>
                <td style={{ padding: "10px 12px", color: "#9ca3af", fontSize: 13 }}>{row.lead}</td>
                <td style={{ padding: "10px 12px", color: "#9ca3af", fontSize: 13 }}>{row.moq}</td>
                <td style={{ padding: "10px 12px", color: "#64748b", fontSize: 12 }}>{row.delivery}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Section 4 — Quality Certs */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 3, color: "#64748b", fontWeight: 700, textTransform: "uppercase", marginBottom: 14 }}>Quality Certifications</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
          {certs.map((item, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 10, padding: 18, textAlign: "center" }}>
              <div style={{ color: C, fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{item.cert}</div>
              <div style={{ color: "#4b5563", fontSize: 11, lineHeight: 1.5 }}>{item.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 16, color: "#333", fontSize: 10, letterSpacing: 1, lineHeight: 1.6 }}>
        For annual supply contracts and site-dedicated dosing station installation, contact supply@monoatomlabs.com. Pan-India coverage via 14 distribution hubs.
      </div>
    </div>
  )
}
