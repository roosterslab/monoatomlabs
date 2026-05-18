import React from "react"

const C = "#06b6d4"

const barrierRows = [
  ["WVTR (water vapour)", "ASTM E96", "0.55 g/m²/day", "0.38 g/m²/day", "−31%"],
  ["OTR (oxygen)", "ASTM D3985", "150 cc/m²/day", "98 cc/m²/day", "−35%"],
  ["CO₂ transmission", "ASTM D1434", "380 cc/m²/day", "241 cc/m²/day", "−37%"],
  ["Hydrocarbon permeation", "ASTM D814", "8.2 g/m²/day", "4.9 g/m²/day", "−40%"],
  ["Chemical resistance (HCl 10%)", "ISO 175", "Mass gain 1.8%", "Mass gain 0.9%", "−50%"],
]

export default function PolyCrystallinityBarrier() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1f1f1f", paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>MONOATOM LABS · HD-G-PE</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: 2 }}>CRYSTALLINITY & BARRIER</div>
        <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 6 }}>Graphene HDPE Masterbatch · Oxygen, Moisture & Chemical Barrier Enhancement</div>
      </div>

      {/* Section 1 — Crystallinity Improvement */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Crystallinity Improvement</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 16 }}>
          {[
            { value: "65–70%", label: "Standard HDPE Crystallinity", sub: "DSC measured baseline" },
            { value: "74–78%", label: "HD-G-PE at 1% Loading", sub: "DSC measured with GNP" },
            { value: "+10–12%", label: "Relative Improvement", sub: "Crystallinity increase" },
          ].map((s, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24 }}>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 44, fontWeight: 700, color: C, lineHeight: 1 }}>{s.value}</div>
              <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600, marginTop: 10 }}>{s.label}</div>
              <div style={{ color: "#475569", fontSize: 11, marginTop: 4 }}>{s.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 10, padding: "14px 20px" }}>
          <span style={{ color: C, fontSize: 12, fontWeight: 600 }}>Mechanism: </span>
          <span style={{ color: "#94a3b8", fontSize: 13 }}>GNP platelets act as nucleating agents — faster, more uniform crystal growth produces a denser spherulite structure, delivering better barrier performance across all transmission metrics.</span>
        </div>
      </div>

      {/* Section 2 — Barrier Properties Table */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Barrier Properties Improvement</div>
        <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, overflow: "hidden" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1.2fr 1.2fr 0.8fr", background: C, padding: "12px 16px", gap: 8 }}>
            {["Property", "Test Method", "Standard HDPE", "HD-G-PE (1%)", "Improvement"].map((h, i) => (
              <div key={i} style={{ color: "#000", fontSize: 11, fontWeight: 700, letterSpacing: 1 }}>{h}</div>
            ))}
          </div>
          {barrierRows.map((row, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "2fr 1.2fr 1.2fr 1.2fr 0.8fr", padding: "12px 16px", gap: 8, borderTop: "1px solid #1f1f1f", background: i % 2 === 0 ? "#111" : "#0d0d0d" }}>
              {row.map((cell, j) => (
                <div key={j} style={{ color: j === 4 ? C : "#cbd5e1", fontSize: 13, fontWeight: j === 4 ? 700 : 400 }}>{cell}</div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — Packaging Shelf Life Implications */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Packaging Shelf Life Implications</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {[
            {
              title: "Food Packaging (WVTR Critical)",
              body: "31% moisture barrier improvement extends bakery film shelf life from 6 to 8+ weeks.",
            },
            {
              title: "Industrial Chemical Packaging (OTR)",
              body: "35% oxygen barrier extends shelf life of oxidation-sensitive chemicals.",
            },
            {
              title: "Agricultural Film (Hydrocarbon)",
              body: "Fumigant retention improved — soil treatment efficacy extended by 40%.",
            },
          ].map((c, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 20 }}>
              <div style={{ color: C, fontSize: 13, fontWeight: 700, marginBottom: 10 }}>{c.title}</div>
              <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.6 }}>{c.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — XRD & DSC Analysis */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>XRD & DSC Analysis Summary</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 22 }}>
            <div style={{ color: C, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>XRD</div>
            <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.7 }}>
              Bragg peak at 2θ = 21.6° (110 plane) intensified by <span style={{ color: "#e2e8f0", fontWeight: 600 }}>12%</span> — confirms increased crystalline fraction with GNP addition.
            </div>
          </div>
          <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 22 }}>
            <div style={{ color: C, fontSize: 12, fontWeight: 700, letterSpacing: 2, marginBottom: 12 }}>DSC</div>
            <div style={{ color: "#94a3b8", fontSize: 13, lineHeight: 1.7 }}>
              Tm <span style={{ color: "#e2e8f0", fontWeight: 600 }}>132–134°C → 135–137°C</span>. ΔHm <span style={{ color: "#e2e8f0", fontWeight: 600 }}>185 J/g → 204 J/g</span>. Higher melt enthalpy confirms crystallinity gain.
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 16, color: "#333", fontSize: 11, letterSpacing: 1 }}>
        WVTR/OTR tested at 38°C, 90% RH (ASTM E96 method B) on 50 µm blown film samples. XRD/DSC on compression-moulded plaques.
      </div>
    </div>
  )
}
