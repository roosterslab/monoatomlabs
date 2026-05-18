import React from "react"

const C = "#64748b"

const uvData = [
  {
    name: "Standard Wax",
    before: 95,
    after: 42,
    degradation: "56%",
  },
  {
    name: "Standard Ceramic 7H",
    before: 105,
    after: 78,
    degradation: "26%",
  },
  {
    name: "CERAPHENE 9H+",
    before: 115,
    after: 108,
    degradation: "6%",
    highlight: true,
  },
]

const MAX_ANGLE = 130

const chemicalRows = [
  { chemical: "Sulphuric acid (acid rain)", conc: "pH 3.5", time: "24 hr", result: "No etching" },
  { chemical: "Sodium hydroxide", conc: "10%", time: "1 hr", result: "No damage" },
  { chemical: "Bird dropping (uric acid)", conc: "pH 3–4", time: "48 hr", result: "No staining" },
  { chemical: "Iron fallout", conc: "Full strength", time: "2 hr", result: "Removed cleanly" },
  { chemical: "Petrol / diesel", conc: "Neat", time: "30 min", result: "No softening" },
  { chemical: "IPA", conc: "70%", time: "30 min", result: "No streaking" },
  { chemical: "Brake dust", conc: "Road conditions", time: "30 days", result: "Wipe clean" },
  { chemical: "Salt spray", conc: "5% NaCl", time: "500 hr (ISO 9227)", result: "No corrosion" },
]

const scratchData = [
  { name: "CERAPHENE 9H+", pencil: "9H", gpa: "8–11 GPa", value: 11, highlight: true },
  { name: "Premium ceramic (competitor)", pencil: "7H", gpa: "4–6 GPa", value: 6 },
  { name: "Standard sealant", pencil: "2H", gpa: "0.8–1.2 GPa", value: 1.2 },
  { name: "Factory clearcoat", pencil: "B–H", gpa: "0.3–0.5 GPa", value: 0.5 },
]

const MAX_GPA = 11

export default function CerUVChemicalResistance() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: "1px solid #1f1f1f", paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>
          MONOATOM LABS · CERAPHENE
        </div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", letterSpacing: 2, lineHeight: 1 }}>
          UV & CHEMICAL RESISTANCE
        </div>
        <div style={{ color: "#64748b", fontSize: 13, marginTop: 8 }}>
          Graphene-Enhanced Ceramic Coating · Accelerated Weathering & Chemical Attack Test Data
        </div>
      </div>

      {/* Section 1 — UV Weathering Test */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>
          UV Weathering Test — ASTM G154 (2000 hours)
        </div>
        <div style={{ color: "#475569", fontSize: 11, marginBottom: 20 }}>Contact angle retention (degrees) · Before vs After</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {uvData.map((row, i) => (
            <div key={i}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6 }}>
                <div style={{ color: row.highlight ? "#e2e8f0" : "#94a3b8", fontSize: 13, fontWeight: row.highlight ? 700 : 400 }}>{row.name}</div>
                <div style={{
                  background: row.highlight ? C : "#1f2937",
                  color: row.highlight ? "#fff" : "#6b7280",
                  fontSize: 10, fontWeight: 700, padding: "2px 10px", borderRadius: 20, letterSpacing: 1,
                }}>
                  {row.degradation} degraded
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                {/* Before bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 48, flexShrink: 0, color: "#475569", fontSize: 10, textAlign: "right" }}>0 hrs</div>
                  <div style={{ flex: 1, height: 26, background: "#0d0d0d", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{
                      width: `${(row.before / MAX_ANGLE) * 100}%`, height: "100%",
                      background: row.highlight ? C : "#334155",
                      borderRadius: 4, display: "flex", alignItems: "center", paddingLeft: 10,
                    }}>
                      <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 13, fontWeight: 700, color: "#fff" }}>{row.before}°</span>
                    </div>
                  </div>
                </div>
                {/* After bar */}
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{ width: 48, flexShrink: 0, color: "#475569", fontSize: 10, textAlign: "right" }}>2000 hrs</div>
                  <div style={{ flex: 1, height: 26, background: "#0d0d0d", borderRadius: 4, overflow: "hidden" }}>
                    <div style={{
                      width: `${(row.after / MAX_ANGLE) * 100}%`, height: "100%",
                      background: row.highlight ? "#334155" : "#1e293b",
                      borderRadius: 4, display: "flex", alignItems: "center", paddingLeft: 10,
                      opacity: 0.8,
                    }}>
                      <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 13, fontWeight: 700, color: row.highlight ? "#94a3b8" : "#475569" }}>{row.after}°</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — Chemical Resistance Rating */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
          Chemical Resistance Rating
        </div>
        <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid #1f1f1f" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1.2fr 1.4fr", background: C, padding: "10px 14px" }}>
            {["Chemical", "Concentration", "Exposure Time", "Result"].map((h, i) => (
              <div key={i} style={{ color: "#fff", fontSize: 11, fontWeight: 700, letterSpacing: 0.5 }}>{h}</div>
            ))}
          </div>
          {chemicalRows.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "2fr 1.2fr 1.2fr 1.4fr",
              padding: "10px 14px",
              background: i % 2 === 0 ? "#111" : "#0d0d0d",
              borderTop: "1px solid #1a1a1a",
            }}>
              <div style={{ color: "#d1d5db", fontSize: 12 }}>{row.chemical}</div>
              <div style={{ color: "#94a3b8", fontSize: 12 }}>{row.conc}</div>
              <div style={{ color: "#94a3b8", fontSize: 12 }}>{row.time}</div>
              <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <span style={{ color: C, fontSize: 13, fontWeight: 700 }}>✓</span>
                <span style={{ color: "#6ee7b7", fontSize: 11, fontWeight: 600 }}>{row.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — Scratch Resistance vs Competitors */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>
          Scratch Resistance vs Competitors
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {scratchData.map((row, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 200, flexShrink: 0 }}>
                <div style={{ color: row.highlight ? "#e2e8f0" : "#94a3b8", fontSize: 12, fontWeight: row.highlight ? 700 : 400 }}>{row.name}</div>
                <div style={{ color: "#475569", fontSize: 10, marginTop: 2 }}>Pencil: {row.pencil}</div>
              </div>
              <div style={{ flex: 1, height: 34, background: "#0d0d0d", borderRadius: 5, overflow: "hidden" }}>
                <div style={{
                  width: `${(row.value / MAX_GPA) * 100}%`, height: "100%",
                  background: row.highlight ? C : "#1e293b",
                  borderRadius: 5, display: "flex", alignItems: "center", paddingLeft: 10,
                  minWidth: 60,
                }}>
                  <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 14, fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>{row.gpa}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 14, color: "#374151", fontSize: 10 }}>Scale: 0 to 11 GPa nano-indentation hardness</div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ color: "#374151", fontSize: 10, lineHeight: 1.6, maxWidth: 620 }}>
          Tests conducted per ASTM D3363 (pencil hardness), ISO 14577 (nano-indentation), ASTM G154 (UV). Third-party NABL lab report available.
        </div>
        <div style={{ color: "#333", fontSize: 10, letterSpacing: 2, flexShrink: 0 }}>MONOATOM LABS · CERAPHENE · UV & CHEMICAL</div>
      </div>

    </div>
  )
}
