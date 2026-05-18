import React from "react"

const C = "#06b6d4"

const certifications = [
  {
    code: "FSSAI",
    title: "Food Safety & Standards Authority",
    body: "FSS (Packaging) Regulations 2018 compliant. Food-contact approved at ≤2% GNP loading. Batch CoA issued.",
  },
  {
    code: "IS 7328",
    title: "IS 7328:2019 — Potable Water Pipes",
    body: "Compliant with IS 7328:2019 (HDPE for potable water pipes). Mandatory for IS 4984 pipe manufacture.",
  },
  {
    code: "ISO 9001",
    title: "Quality Management System",
    body: "Manufacturing facility certified ISO 9001:2015. Batch traceability from GNP raw material to finished pellet.",
  },
  {
    code: "REACH",
    title: "EU REACH Compliance",
    body: "GNP in masterbatch is REACH-compliant. SDS available. No SVHC substances above 0.1%.",
  },
]

const qcRows = [
  ["MFR (Melt Flow Rate)", "ASTM D1238", "Every batch", "±10% of target", "Batch hold, retest"],
  ["GNP loading (TGA)", "ISO 11358", "Every batch", "±0.2% of nominal", "Reblend"],
  ["Tensile (moulded test bar)", "ASTM D638", "Weekly", ">reference +25%", "Hold + investigate"],
  ["Dispersion (SEM)", "—", "Monthly", "No agglomerates >5µm", "Reprocess"],
  ["Pellet sieve", "ISO 6186", "Every batch", "<5% fines", "Regrind"],
]

const leadTimeRows = [
  ["Trial bag", "10 kg", "3–5 days", "1 bag"],
  ["Standard", "25 kg bag", "5–7 days", "4 bags (100 kg)"],
  ["Bulk", "500 kg IBC", "10–14 days", "1 IBC"],
  ["Annual contract", "Dedicated production slot", "30 days first order", "5,000 kg/yr"],
]

const docs = [
  "Certificate of Analysis (CoA) — MFR, GNP%, tensile",
  "Safety Data Sheet (SDS) — GHS-compliant",
  "FSSAI conformity declaration (if food-grade order)",
  "IS 7328 conformity letter (if pipe-grade order)",
]

export default function PolySupplyQualityAssurance() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1f1f1f", paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>MONOATOM LABS · HD-G-PE</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: 2 }}>SUPPLY & QA</div>
        <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 6 }}>Graphene HDPE Masterbatch · Certifications, Lead Times & Batch Quality Assurance</div>
      </div>

      {/* Section 1 — Certifications */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Product Certifications</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {certifications.map((cert, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 22 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                <div style={{ background: "rgba(6,182,212,0.1)", border: `1px solid ${C}`, borderRadius: 6, padding: "4px 10px" }}>
                  <span style={{ color: C, fontSize: 12, fontWeight: 700, letterSpacing: 1 }}>{cert.code}</span>
                </div>
                <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{cert.title}</div>
              </div>
              <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{cert.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — Batch QC Table */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Batch Quality Control</div>
        <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 0.8fr 1.2fr 1.2fr", background: C, padding: "12px 16px", gap: 8 }}>
            {["QC Test", "Method", "Frequency", "Specification", "Action on Fail"].map((h, i) => (
              <div key={i} style={{ color: "#000", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{h}</div>
            ))}
          </div>
          {qcRows.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 0.8fr 1.2fr 1.2fr", padding: "12px 16px", gap: 8, borderTop: "1px solid #1f1f1f", background: i % 2 === 0 ? "#111" : "#0d0d0d" }}>
              {row.map((cell, j) => (
                <div key={j} style={{ color: j === 0 ? "#e2e8f0" : "#94a3b8", fontSize: 12, fontWeight: j === 0 ? 600 : 400 }}>{cell}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — Lead Times */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Lead Times & Pack Sizes</div>
        <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr 1.2fr", background: "#1f1f1f", padding: "12px 16px", gap: 8 }}>
            {["Pack", "Size", "Lead Time", "MOQ"].map((h, i) => (
              <div key={i} style={{ color: "#94a3b8", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{h}</div>
            ))}
          </div>
          {leadTimeRows.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr 1fr 1.2fr", padding: "12px 16px", gap: 8, borderTop: "1px solid #1f1f1f", background: i % 2 === 0 ? "#111" : "#0d0d0d" }}>
              {row.map((cell, j) => (
                <div key={j} style={{ color: j === 2 ? C : "#cbd5e1", fontSize: 13, fontWeight: j === 2 ? 600 : 400 }}>{cell}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — Documents */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Documents Provided per Batch</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {docs.map((d, i) => (
            <div key={i} style={{ background: "#111", border: `1px solid ${C}`, borderRadius: 20, padding: "8px 18px", color: C, fontSize: 12, fontWeight: 600, display: "flex", alignItems: "center", gap: 8 }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: C, flexShrink: 0 }} />
              {d}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 16, color: "#333", fontSize: 11, letterSpacing: 1 }}>
        Batch samples retained for 36 months for traceability. Third-party NABL lab retesting available on request. Contact: quality@monoatomlabs.com
      </div>
    </div>
  )
}
