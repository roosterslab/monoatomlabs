import React from "react"

const C = "#06b6d4"

const colourRows = [
  ["Black (pipes, bags)", "0.5–2.0%", "None", "None required"],
  ["Grey / charcoal", "0.5–2.0%", "None", "None required"],
  ["Natural / translucent", "0.5–0.75%", "Minimal grey tint", "Keep loading low"],
  ["White (TiO₂ opaque)", "0.5–1.0%", "None at <1%", "Standard TiO₂ loading"],
  ["Bright colours (red, blue)", "0.5% max", "Slight darkening", "Increase pigment +5%"],
]

const skus = [
  { code: "HG-NAT-05", desc: "Natural carrier, 5% GNP", note: "For natural/translucent products" },
  { code: "HG-BLK-10", desc: "Black carrier (carbon black), 10% GNP", note: "For black pipe/bag" },
  { code: "HG-WHT-05", desc: "White carrier (TiO₂), 5% GNP", note: "For white/opaque products" },
  { code: "HG-CUST", desc: "Custom carrier on request", note: "Min 500 kg MOQ" },
]

export default function PolyColorCompatibility() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1f1f1f", paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>MONOATOM LABS · HD-G-PE</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: 2 }}>COLOR COMPATIBILITY</div>
        <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 6 }}>Graphene HDPE Masterbatch · Colour Neutrality, OBA Interaction & Pigment Guide</div>
      </div>

      {/* Section 1 — Colour Impact */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Colour Impact of HD-G-PE</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {[
            { title: "GNP Appearance", body: "Translucent grey at 0.5% loading · Light grey at 1% · Medium grey at 2%" },
            { title: "Natural / Clear Product Impact", body: "Slight grey tint at >0.5% loading — acceptable for most clear applications." },
            { title: "Black Product", body: "Zero visual impact — fully masked by carbon black at any GNP loading." },
            { title: "Coloured Product", body: "Compatible with all TiO₂ opaque pigments — slight saturation reduction at >1% loading." },
          ].map((c, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 20 }}>
              <div style={{ color: C, fontSize: 13, fontWeight: 700, marginBottom: 8 }}>{c.title}</div>
              <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{c.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — Recommended Loading Table */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Recommended Loading by Colour Requirement</div>
        <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.2fr 1.5fr", background: C, padding: "12px 16px", gap: 8 }}>
            {["Product Colour", "GNP Loading", "Visual Impact", "Mitigation"].map((h, i) => (
              <div key={i} style={{ color: "#000", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{h}</div>
            ))}
          </div>
          {colourRows.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1.2fr 1.5fr", padding: "12px 16px", gap: 8, borderTop: "1px solid #1f1f1f", background: i % 2 === 0 ? "#111" : "#0d0d0d" }}>
              {row.map((cell, j) => (
                <div key={j} style={{ color: j === 2 && cell === "None" ? "#4ade80" : "#cbd5e1", fontSize: 13 }}>{cell}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — OBA Interaction */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>OBA (Optical Brightening Agent) Interaction</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            {
              title: "Impact",
              body: "GNP UV absorption (>99% below 380nm) suppresses OBA fluorescence — OBAs become ineffective at >0.5% GNP loading.",
            },
            {
              title: "Solution",
              body: "Replace OBA with higher TiO₂ loading (+0.3%) to maintain whiteness. Alternatively use HD-G-PE at 0.3–0.5% loading.",
            },
            {
              title: "Recommendation",
              body: "OBA-containing white HDPE films — limit GNP to 0.3–0.4% for colour-neutral result.",
            },
          ].map((c, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 20 }}>
              <div style={{ color: C, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>{c.title}</div>
              <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{c.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — SKUs */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Masterbatch SKUs Available</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
          {skus.map((s, i) => (
            <div key={i} style={{ background: "#111", border: `1px solid ${C}`, borderRadius: 10, padding: "12px 18px", minWidth: 180 }}>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 16, fontWeight: 700, color: C, marginBottom: 4 }}>{s.code}</div>
              <div style={{ color: "#e2e8f0", fontSize: 12, marginBottom: 4 }}>{s.desc}</div>
              <div style={{ color: "#475569", fontSize: 11 }}>{s.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 16, color: "#333", fontSize: 11, letterSpacing: 1 }}>
        Colour compatibility assessed on blown film (50µm) and injection moulded plaques at 1.0mm thickness. CIE L*a*b* measurements by spectrophotometer.
      </div>
    </div>
  )
}
