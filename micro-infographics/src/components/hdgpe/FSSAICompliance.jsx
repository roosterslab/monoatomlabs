import React from 'react'

const C = '#06b6d4'

const complianceCards = [
  {
    label: "Regulation",
    body: "FSSAI Food Safety & Standards Act 2006 + FSS (Packaging) Regulations 2018",
  },
  {
    label: "GNP Status",
    body: "Carbon black alternative — GRAS (Generally Recognised as Safe) for food-contact polymer applications at 2% loading or less.",
  },
  {
    label: "Migration Test",
    body: "< 0.1 mg/dm\u00b2 overall migration (EU 10/2011 test protocol). Below 0.01 mg/kg specific migration limit.",
  },
  {
    label: "Certificate",
    body: "Available on request. Batch-level CoA issued. Independent NABL lab tested.",
  },
]

const approvedApps = [
  { app: "Drinking water pipes (IS 4984, HDPE PE80/PE100)", limit: "Approved — all loadings" },
  { app: "Food storage containers (rigid, blow-moulded)", limit: "Approved at 1% loading or less" },
  { app: "Agricultural produce film (mulch, stretch)", limit: "Not direct food contact — approved all" },
  { app: "Milk/dairy packaging film", limit: "Approved at 0.5% loading or less (fatty food contact class)" },
  { app: "Beverage cap & closure", limit: "Approved at 1% loading or less — colourless masterbatch" },
  { app: "Frozen food bags", limit: "Approved at 1% loading or less" },
]

const prohibited = [
  {
    title: "Direct prolonged contact with high-fat liquid foods > 1% loading",
    body: "Not certified at current certification level.",
  },
  {
    title: "Microwave-safe designation",
    body: "Not certified. Note: restriction is HDPE-intrinsic and not related to GNP loading.",
  },
]

const migrationStats = [
  { val: "< 0.1 mg/dm\u00b2", label: "Overall migration", sub: "(limit 10 mg/dm\u00b2)" },
  { val: "< 0.01 mg/kg", label: "Specific migration (graphene)", sub: "(ND — not detected)" },
  { val: "No change", label: "Organoleptic", sub: "No taste or odour change confirmed" },
]

export default function PolyFSSAICompliance() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: "1px solid #1f1f1f", paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>MONOATOM LABS · HD-G-PE</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 40, fontWeight: 700, color: "#fff", letterSpacing: 2 }}>FSSAI COMPLIANCE</div>
        <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>Graphene HDPE Masterbatch · Food-Grade Application Guide</div>
      </div>

      {/* Section 1: Compliance Status Cards */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>FSSAI Compliance Status</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
          {complianceCards.map((card, i) => (
            <div key={i} style={{ background: "#0d0d0d", border: `1px solid ${C}33`, borderRadius: 10, padding: 18 }}>
              <div style={{ color: C, fontSize: 10, letterSpacing: 2, textTransform: "uppercase", marginBottom: 8, fontWeight: 700 }}>{card.label}</div>
              <div style={{ color: "#cbd5e1", fontSize: 12, lineHeight: 1.7 }}>{card.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2: Approved Applications */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Approved Food-Contact Applications</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {approvedApps.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, padding: "10px 14px", background: "#0d0d0d", borderRadius: 8, border: "1px solid #1a1a1a" }}>
              <div style={{ width: 22, height: 22, borderRadius: "50%", background: "#0f2a1a", border: "1px solid #166534", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                <span style={{ color: "#4ade80", fontSize: 12, fontWeight: 700 }}>&#10003;</span>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 500 }}>{item.app}</div>
                <div style={{ color: "#4ade80", fontSize: 11, marginTop: 3 }}>{item.limit}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Prohibited Applications */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: "#f59e0b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>Prohibited Applications (at current certification)</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 14 }}>
          {prohibited.map((p, i) => (
            <div key={i} style={{ background: "#120a00", border: "1px solid #92400e", borderRadius: 10, padding: 18 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#451a03", border: "1px solid #92400e", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <span style={{ color: "#f59e0b", fontSize: 12, fontWeight: 700 }}>!</span>
                </div>
                <span style={{ color: "#fbbf24", fontSize: 12, fontWeight: 600 }}>{p.title}</span>
              </div>
              <div style={{ color: "#78716c", fontSize: 11, lineHeight: 1.6 }}>{p.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4: Migration Testing Summary */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>Migration Testing Summary</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
          {migrationStats.map((s, i) => (
            <div key={i} style={{ background: "#03181f", border: `1px solid ${C}44`, borderRadius: 10, padding: 20, textAlign: "center" }}>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 24, fontWeight: 700, color: "#fff", marginBottom: 6 }}>{s.val}</div>
              <div style={{ color: C, fontSize: 11, fontWeight: 600, marginBottom: 4 }}>{s.label}</div>
              <div style={{ color: "#475569", fontSize: 10 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ color: "#334155", fontSize: 10, letterSpacing: 1, textAlign: "right" }}>
        Full FSSAI compliance dossier + NABL test report available on signed NDA request. Contact: regulatory@monoatomlabs.com
      </div>
    </div>
  )
}
