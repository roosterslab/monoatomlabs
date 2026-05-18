import React from "react"

const C = "#06b6d4"

const weatheringRows = [
  { label: "Standard HDPE", tensile: "58%", elongation: "32%", cracking: "Visible at 800h", highlight: false },
  { label: "UV-stabilised HDPE (HALS only)", tensile: "74%", elongation: "61%", cracking: "Visible at 1400h", highlight: false },
  { label: "HD-G-PE at 1% loading", tensile: "89%", elongation: "78%", cracking: "No visible cracking at 2000h", highlight: true },
]

const fieldRows = [
  ["Season 1 (0–4 months)", "Intact, 92% tensile", "Intact, 95% tensile", "Intact, 97% tensile"],
  ["Season 2 (4–8 months)", "Brittle, tears", "Moderate degradation", "Intact, 88% tensile"],
  ["Season 3 (8–12 months)", "Failed/removed", "Brittle, replaced", "Still functional"],
  ["Cost/season/hectare", "₹4,500 (replaced)", "₹4,200 (replaced)", "₹3,800 (3 seasons)"],
]

const mechanisms = [
  {
    title: "UV Absorption",
    body: "GNP sp² lattice absorbs >99% UV below 380nm — primary shield layer at film surface.",
  },
  {
    title: "Radical Scavenging",
    body: "Edge defect sites in GNP act as radical traps — supplements HALS mechanism.",
  },
  {
    title: "Oxygen Barrier",
    body: "Reduced oxygen permeability slows photo-oxidative chain scission — secondary protection.",
  },
]

export default function PolyUVStabilization() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1f1f1f", paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>MONOATOM LABS · HD-G-PE</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: 2 }}>UV STABILIZATION</div>
        <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 6 }}>Graphene HDPE Masterbatch · Accelerated Weathering & Outdoor Lifespan Data</div>
      </div>

      {/* Section 1 — Weathering Test */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>UV Weathering Test — ISO 4892-3 (Xenon Arc, 2000 Hours)</div>
        <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 2fr", background: "#1f1f1f", padding: "12px 16px", gap: 8 }}>
            {["Material", "Tensile Retention", "Elongation Retention", "Surface Cracking"].map((h, i) => (
              <div key={i} style={{ color: "#94a3b8", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{h}</div>
            ))}
          </div>
          {weatheringRows.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 2fr", padding: "14px 16px", gap: 8, borderTop: "1px solid #1f1f1f", background: row.highlight ? "rgba(6,182,212,0.06)" : (i % 2 === 0 ? "#111" : "#0d0d0d"), border: row.highlight ? `1px solid ${C}` : undefined }}>
              <div style={{ color: row.highlight ? C : "#cbd5e1", fontSize: 13, fontWeight: row.highlight ? 700 : 400 }}>{row.label}</div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 18, fontWeight: 700, color: row.highlight ? C : "#cbd5e1" }}>{row.tensile}</div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 18, fontWeight: 700, color: row.highlight ? C : "#cbd5e1" }}>{row.elongation}</div>
              <div style={{ color: row.highlight ? C : "#94a3b8", fontSize: 13, fontWeight: row.highlight ? 700 : 400 }}>{row.cracking}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — Outdoor Field Data */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Outdoor Field Data — Agricultural Mulch Film</div>
        <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", background: "#1f1f1f", padding: "12px 16px", gap: 8 }}>
            {["Season", "Standard 30µm", "HALS-only 30µm", "HD-G-PE 25µm"].map((h, i) => (
              <div key={i} style={{ color: i === 3 ? C : "#94a3b8", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{h}</div>
            ))}
          </div>
          {fieldRows.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1fr", padding: "12px 16px", gap: 8, borderTop: "1px solid #1f1f1f", background: i % 2 === 0 ? "#111" : "#0d0d0d" }}>
              {row.map((cell, j) => (
                <div key={j} style={{
                  color: j === 3
                    ? (cell === "Still functional" ? C : C)
                    : (cell === "Failed/removed" || cell === "Brittle, tears" || cell === "Brittle, replaced" ? "#f87171" : "#cbd5e1"),
                  fontSize: 13,
                  fontWeight: j === 3 || i === 3 ? 600 : 400,
                }}>{cell}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — Mechanism */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Mechanism — GNP as UV Shield</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {mechanisms.map((m, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 20 }}>
              <div style={{ color: C, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>{m.title}</div>
              <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{m.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — Pipe Lifespan */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Pipe Lifespan Data</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 22 }}>
            <div style={{ color: "#94a3b8", fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>STANDARD HDPE PE80 PIPE</div>
            {[
              ["Rated life", "50 yr at 20°C"],
              ["UV surface embrittlement", "8–12 yr outdoor exposure"],
              ["Effective outdoor life", "12–15 yr"],
            ].map(([label, val], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid #1f1f1f" }}>
                <span style={{ color: "#94a3b8", fontSize: 12 }}>{label}</span>
                <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{val}</span>
              </div>
            ))}
          </div>
          <div style={{ background: "#111", border: `1px solid ${C}`, borderRadius: 12, padding: 22 }}>
            <div style={{ color: C, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>HD-G-PE PE80 PIPE</div>
            {[
              ["Rated life", "50 yr at 20°C"],
              ["Projected surface integrity", "18–22 yr outdoor exposure"],
              ["Outdoor life extension", "50% improvement"],
            ].map(([label, val], i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "9px 0", borderBottom: "1px solid #1f1f1f" }}>
                <span style={{ color: "#94a3b8", fontSize: 12 }}>{label}</span>
                <span style={{ color: i === 2 ? C : "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 16, color: "#333", fontSize: 11, letterSpacing: 1 }}>
        ISO 4892-3 xenon arc weathering at 60 W/m² irradiance, 38°C BPT. Agricultural film field data from 3 Punjab farms (2022–2024 rabi/kharif cycles).
      </div>
    </div>
  )
}
