import React from "react"

const C = "#64748b"

const warrantyRows = [
  {
    item: "Coating delamination",
    silver: true, gold: true, platinum: true,
  },
  {
    item: "Hardness below 7H",
    silver: true, gold: true, platinum: true,
  },
  {
    item: "Contact angle below 90\u00b0",
    silver: true, gold: true, platinum: true,
  },
  {
    item: "UV-induced discolouration",
    silver: false, gold: true, platinum: true,
  },
  {
    item: "Chemical etch (bird / acid)",
    silver: false, gold: false, platinum: true,
  },
  {
    item: "Free recoat at end",
    silver: false, gold: "50% discount", platinum: "Full recoat",
  },
]

const maintenanceSteps = [
  {
    marker: "Month 1",
    title: "Cure Period",
    detail: "No wash for 7 days post-application. No automated car wash for the first 30 days. Hand rinse only if required.",
  },
  {
    marker: "Every 3 mo",
    title: "Routine Wash",
    detail: "pH-neutral hand wash only. Do not use wax, polish, or sealant of any kind. Two-bucket method recommended.",
  },
  {
    marker: "Every 6 mo",
    title: "Booster Application",
    detail: "Ceramic booster spray application (optional). Extends hydrophobicity and refreshes contact angle to 110\u00b0+ range.",
  },
  {
    marker: "Annual",
    title: "Studio Inspection",
    detail: "Water bead test. Contact angle measurement documented. Studio issues annual coating health certificate.",
  },
]

const voidCards = [
  {
    title: "Wax, sealant, or silicone dressing",
    detail: "Application of any wax, polymer sealant, or silicone-based dressing over the coating will degrade adhesion and void the warranty.",
  },
  {
    title: "Automated brush car wash",
    detail: "Automated brush car washes within 30 days of application cause micro-abrasions during the cure phase. Touchless wash permitted after 7 days.",
  },
  {
    title: "Paint correction after application",
    detail: "Any paint correction, compounding, or wet sanding performed after coating application removes the graphene-ceramic layer.",
  },
  {
    title: "PPF over coating without notification",
    detail: "Application of paint protection film over the coating without prior studio notification voids the coverage for the affected panels.",
  },
]

const claimSteps = [
  { num: "1", title: "Contact Studio", detail: "Call or message the installing studio. Describe the issue and share photographs via WhatsApp or email." },
  { num: "2", title: "Studio Inspection", detail: "Studio visits vehicle, conducts contact angle test and hardness check, and prepares photo documentation within 7 days." },
  { num: "3", title: "Lab Sample (if disputed)", detail: "Swab sample sent to Monoatom Labs for SEM / EDX analysis. Result and decision issued within 14 working days." },
]

function Tick({ value }) {
  if (value === true) return <span style={{ color: C, fontSize: 15, fontWeight: 700 }}>✓</span>
  if (value === false) return <span style={{ color: "#475569", fontSize: 15 }}>✗</span>
  return <span style={{ color: "#94a3b8", fontSize: 11 }}>{value}</span>
}

export default function CerWarrantyServiceGuide() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: "1px solid #1f1f1f", paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>
          MONOATOM LABS · CERAPHENE
        </div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 48, fontWeight: 700, color: "#fff", letterSpacing: 2, lineHeight: 1 }}>
          WARRANTY & SERVICE
        </div>
        <div style={{ color: "#64748b", fontSize: 13, marginTop: 8 }}>
          Graphene-Enhanced Ceramic Coating · Coverage, Claims & Maintenance Guide
        </div>
      </div>

      {/* Section 1 — Warranty Coverage by Package */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
          Warranty Coverage by Package
        </div>
        <div style={{ borderRadius: 8, overflow: "hidden", border: "1px solid #1f1f1f" }}>
          {/* Header row */}
          <div style={{ display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr", background: C, padding: "10px 14px" }}>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 700 }}>Coverage Item</div>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 700, textAlign: "center" }}>Silver (3yr)</div>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 700, textAlign: "center" }}>Gold (4yr)</div>
            <div style={{ color: "#fff", fontSize: 11, fontWeight: 700, textAlign: "center" }}>Platinum (5yr)</div>
          </div>
          {warrantyRows.map((row, i) => (
            <div key={i} style={{
              display: "grid", gridTemplateColumns: "2.5fr 1fr 1fr 1fr",
              padding: "11px 14px",
              background: i % 2 === 0 ? "#111" : "#0d0d0d",
              borderTop: "1px solid #1a1a1a",
              alignItems: "center",
            }}>
              <div style={{ color: "#d1d5db", fontSize: 12 }}>{row.item}</div>
              <div style={{ textAlign: "center" }}><Tick value={row.silver} /></div>
              <div style={{ textAlign: "center" }}><Tick value={row.gold} /></div>
              <div style={{ textAlign: "center" }}><Tick value={row.platinum} /></div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 2 — Annual Maintenance Schedule */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>
          Annual Maintenance Schedule
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {maintenanceSteps.map((step, i) => (
            <div key={i} style={{ display: "flex", gap: 16, alignItems: "stretch" }}>
              {/* Left timeline */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 80, flexShrink: 0 }}>
                <div style={{
                  background: "#0d1a2a", border: `1px solid ${C}`, borderRadius: 6,
                  padding: "4px 8px", textAlign: "center",
                  fontFamily: "Rajdhani, sans-serif", fontSize: 11, fontWeight: 700, color: C,
                  whiteSpace: "nowrap",
                }}>
                  {step.marker}
                </div>
                {i < maintenanceSteps.length - 1 && (
                  <div style={{ width: 1, flex: 1, background: "#1f1f1f", margin: "4px 0" }} />
                )}
              </div>
              {/* Right content */}
              <div style={{ flex: 1, paddingBottom: i < maintenanceSteps.length - 1 ? 16 : 0 }}>
                <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{step.title}</div>
                <div style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.6 }}>{step.detail}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3 — What Voids the Warranty */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>
          What Voids the Warranty
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 12 }}>
          {voidCards.map((card, i) => (
            <div key={i} style={{
              background: "#0d0d0d",
              border: "1px solid #1f1f1f",
              borderLeft: "3px solid #d97706",
              borderRadius: "0 8px 8px 0",
              padding: 16,
            }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 6 }}>
                <span style={{ color: "#d97706", fontSize: 14, flexShrink: 0 }}>⚠</span>
                <div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 700 }}>{card.title}</div>
              </div>
              <div style={{ color: "#94a3b8", fontSize: 11, lineHeight: 1.6, paddingLeft: 24 }}>{card.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Section 4 — Claim Process */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 24, marginBottom: 20 }}>
        <div style={{ color: "#64748b", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>
          Claim Process
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, position: "relative" }}>
          {claimSteps.map((step, i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingLeft: 16, paddingRight: 16, position: "relative" }}>
              {/* Connector line */}
              {i < claimSteps.length - 1 && (
                <div style={{ position: "absolute", top: 18, left: "calc(50% + 18px)", right: "calc(-50% + 18px)", height: 1, background: "#1f1f1f", zIndex: 0 }} />
              )}
              {/* Number circle */}
              <div style={{
                width: 36, height: 36, borderRadius: "50%",
                background: "#0d1a2a", border: `2px solid ${C}`,
                display: "flex", alignItems: "center", justifyContent: "center",
                zIndex: 1, flexShrink: 0, marginBottom: 12,
              }}>
                <span style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 16, fontWeight: 700, color: C }}>{step.num}</span>
              </div>
              <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 700, marginBottom: 6 }}>{step.title}</div>
              <div style={{ color: "#94a3b8", fontSize: 11, lineHeight: 1.6 }}>{step.detail}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div style={{ color: "#374151", fontSize: 10, lineHeight: 1.6, maxWidth: 620 }}>
          Warranty is transferable with vehicle sale. New owner registers via studio. Monoatom Labs acts as guarantor for all authorised studio warranties.
        </div>
        <div style={{ color: "#333", fontSize: 10, letterSpacing: 2, flexShrink: 0 }}>MONOATOM LABS · CERAPHENE · WARRANTY</div>
      </div>

    </div>
  )
}
