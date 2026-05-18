import React from "react"

const C = "#f59e0b"

const tiers = [
  {
    name: "Associate Applicator",
    training: "1-day training",
    capacity: "Up to 500 kW/month",
    revenue: "₹50/W",
    territory: "No territory protection",
  },
  {
    name: "Certified Installer",
    training: "2-day training + on-site assessment",
    capacity: "Up to 5 MW/month",
    revenue: "₹45/W preferred pricing",
    territory: "20 km territory",
  },
  {
    name: "Master Applicator",
    training: "3-day program + annual renewal",
    capacity: "Unlimited capacity",
    revenue: "₹40/W bulk pricing",
    territory: "50 km exclusivity + sub-licensing rights",
  },
]

const curriculum = [
  {
    n: "1",
    title: "Product Chemistry & Specifications",
    time: "Half day",
    desc: "GNP mechanism, performance claims, ASTM/IEC standards",
  },
  {
    n: "2",
    title: "Surface Preparation & Application Technique",
    time: "Half day",
    desc: "Equipment setup, spray patterns, dosing, flash times",
  },
  {
    n: "3",
    title: "QC & Documentation",
    time: "Half day",
    desc: "Contact angle measurement, test kit usage, photographic report",
  },
  {
    n: "4",
    title: "Business Development & Proposal Writing",
    time: "Half day",
    desc: "ROI calculator, site survey form, proposal template",
  },
]

export default function SolCertificationPartner() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>
      {/* Header */}
      <div style={{ marginBottom: 32, borderBottom: "1px solid #1f1f1f", paddingBottom: 24 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 8, textTransform: "uppercase" }}>MONOATOM LABS · GRAFFISOL</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", lineHeight: 1, letterSpacing: 2 }}>CERTIFIED APPLICATOR</div>
        <div style={{ color: "#94a3b8", fontSize: 16, marginTop: 6 }}>Solar Panel Coating · Partner Certification Program & Business Model</div>
      </div>

      {/* Section 1 — Certification Tiers */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Certification Tiers</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {tiers.map((t, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 22 }}>
              <div style={{ color: C, fontSize: 14, fontWeight: 700, marginBottom: 14 }}>{t.name}</div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ color: "#475569", fontSize: 10, letterSpacing: 1, marginBottom: 3 }}>TRAINING</div>
                <div style={{ color: "#cbd5e1", fontSize: 12 }}>{t.training}</div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ color: "#475569", fontSize: 10, letterSpacing: 1, marginBottom: 3 }}>CAPACITY</div>
                <div style={{ color: "#cbd5e1", fontSize: 12 }}>{t.capacity}</div>
              </div>
              <div style={{ marginBottom: 10 }}>
                <div style={{ color: "#475569", fontSize: 10, letterSpacing: 1, marginBottom: 3 }}>REVENUE RATE</div>
                <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 22, fontWeight: 700, color: C }}>{t.revenue}</div>
              </div>
              <div>
                <div style={{ color: "#475569", fontSize: 10, letterSpacing: 1, marginBottom: 3 }}>TERRITORY</div>
                <div style={{ color: "#cbd5e1", fontSize: 12 }}>{t.territory}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — Revenue per Tier */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Revenue Per Certification Tier — 1 MW Project</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
          {[
            { tier: "Associate", calc: "₹50/W × 10,00,000 W", gross: "₹50,00,000", note: "Gross revenue" },
            { tier: "Certified", calc: "₹45/W × 10,00,000 W", gross: "₹45,00,000", note: "Lower rate, higher volume" },
            { tier: "Master", calc: "₹40/W × 10,00,000 W", gross: "₹40,00,000", note: "+ ₹5/W sub-licensor cut on partners" },
          ].map((r, i) => (
            <div key={i} style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 20, textAlign: "center" }}>
              <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 2, marginBottom: 8 }}>{r.tier.toUpperCase()}</div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 28, fontWeight: 700, color: C }}>{r.gross}</div>
              <div style={{ color: "#475569", fontSize: 11, marginTop: 6 }}>{r.calc}</div>
              <div style={{ color: "#94a3b8", fontSize: 11, marginTop: 4 }}>{r.note}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — Training Curriculum */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Training Curriculum</div>
        <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24 }}>
          {curriculum.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 18, alignItems: "flex-start", marginBottom: i < curriculum.length - 1 ? 20 : 0 }}>
              <div style={{ width: 32, height: 32, borderRadius: "50%", background: C, color: "#000", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Rajdhani, sans-serif", fontSize: 16, fontWeight: 700, flexShrink: 0 }}>{step.n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4 }}>
                  <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{step.title}</div>
                  <div style={{ color: "#475569", fontSize: 11, background: "#1f1f1f", borderRadius: 4, padding: "2px 8px" }}>{step.time}</div>
                </div>
                <div style={{ color: "#94a3b8", fontSize: 12 }}>{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — Certification Benefits */}
      <div style={{ marginBottom: 32 }}>
        <div style={{ color: "#94a3b8", fontSize: 11, letterSpacing: 3, fontWeight: 700, textTransform: "uppercase", marginBottom: 16 }}>Certification Benefits</div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {[
            "Listed on Monoatom Labs certified partner portal",
            "Co-branded marketing materials provided",
            "Technical support hotline access",
            "Annual performance bonus for top applicators",
          ].map((b, i) => (
            <div key={i} style={{ background: "#111", border: `1px solid ${C}`, borderRadius: 20, padding: "8px 18px", color: C, fontSize: 12, fontWeight: 600 }}>{b}</div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ borderTop: "1px solid #1f1f1f", paddingTop: 16, color: "#333", fontSize: 11, letterSpacing: 1 }}>
        Apply at partners.monoatomlabs.com. Next training cohort: monthly schedule. Requires: 2+ years solar O&M experience OR clean energy business.
      </div>
    </div>
  )
}
