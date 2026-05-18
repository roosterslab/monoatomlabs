import React from 'react'

const C = '#64748b'

const steps = [
  {
    time: "08:00",
    duration: "90 min",
    title: "Decontamination Wash",
    detail: "Iron remover spray, 2-bucket wash method, clay bar decontamination.",
    materials: "Materials: pH-neutral shampoo, iron fallout remover, detailing clay.",
  },
  {
    time: "09:30",
    duration: "120 min",
    optional: true,
    title: "Paint Inspection & Correction",
    detail: "Swirl mark assessment under LED inspection lamp. Machine polish if correction needed.",
    materials: "DA polisher + cutting/finishing pad.",
  },
  {
    time: "11:30",
    duration: "30 min",
    title: "Panel Wipe",
    detail: "IPA 70% panel wipe in cross-pattern. Removes polishing oils, waxes, silicones.",
    materials: "Critical: no residue.",
  },
  {
    time: "12:00",
    duration: "90 min",
    title: "Coating Application",
    detail: "3-4 drops per suede applicator block. Linear overlapping passes per panel. Work panel by panel. Flash 60-90 sec then level with microfibre.",
    materials: "Materials: suede applicator block, premium microfibre cloths.",
  },
  {
    time: "13:30",
    duration: "30 min",
    title: "Initial Cure (IR Lamp)",
    detail: "IR lamp cure at 60-80\u00b0C per panel. Confirms Si-O bond formation.",
    materials: "No water contact for next 24 hr.",
  },
  {
    time: "14:00",
    duration: "30 min",
    title: "Quality Inspection",
    detail: "Water beading test on each panel. Visual check for high-spots or streaks.",
    materials: "Rectify any issues immediately.",
  },
  {
    time: "14:30",
    duration: "7-day cure",
    title: "Vehicle Return",
    detail: "No wash for 7 days, no automated car wash for 30 days, no wax/polish for 60 days.",
    materials: "Advise customer on care instructions.",
  },
]

const checklist = [
  "pH neutral shampoo (500 mL)",
  "Iron fallout remover spray (500 mL)",
  "Detailing clay bar",
  "IPA 70% solution (1L)",
  "Suede applicator block x3",
  "Premium microfibre cloths x12",
  "IR curing lamp (professional)",
  "CERAPHENE coating (30 mL)",
]

export default function CerApplicationTimeline() {
  return (
    <div style={{ background: "#050505", fontFamily: "Inter, sans-serif", padding: "40px", maxWidth: 900, margin: "0 auto" }}>

      {/* Header */}
      <div style={{ marginBottom: 28, borderBottom: "1px solid #1f1f1f", paddingBottom: 20 }}>
        <div style={{ fontSize: 11, letterSpacing: 4, color: C, fontWeight: 700, marginBottom: 6, textTransform: "uppercase" }}>MONOATOM LABS · CERAPHENE</div>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 40, fontWeight: 700, color: "#fff", letterSpacing: 2 }}>APPLICATION TIMELINE</div>
        <div style={{ color: "#64748b", fontSize: 13, marginTop: 4 }}>Graphene-Enhanced Ceramic Coating · Step-by-Step Professional Installation Guide</div>
      </div>

      {/* Section 1: Full-Day Schedule */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28, marginBottom: 24 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 24 }}>Full-Day Application Schedule</div>

        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div style={{ position: "absolute", left: 68, top: 0, bottom: 0, width: 2, background: "#1f2937" }} />

          {steps.map((s, i) => (
            <div key={i} style={{ display: "flex", gap: 0, marginBottom: i < steps.length - 1 ? 28 : 0, position: "relative" }}>
              {/* Timestamp */}
              <div style={{ width: 56, flexShrink: 0, textAlign: "right", paddingTop: 2 }}>
                <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 15, fontWeight: 700, color: C }}>{s.time}</div>
                <div style={{ fontSize: 9, color: "#334155", marginTop: 2 }}>{s.duration}</div>
              </div>

              {/* Dot */}
              <div style={{ width: 26, flexShrink: 0, display: "flex", justifyContent: "center", paddingTop: 4 }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: s.optional ? "#1f2937" : C, border: `2px solid ${C}`, flexShrink: 0, zIndex: 1 }} />
              </div>

              {/* Content */}
              <div style={{ flex: 1, background: "#0d0d0d", borderRadius: 8, border: "1px solid #1a1a1a", padding: "12px 16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 700 }}>{s.title}</span>
                  {s.optional && (
                    <span style={{ fontSize: 9, background: "#1e293b", color: "#64748b", padding: "2px 6px", borderRadius: 4, letterSpacing: 1, textTransform: "uppercase" }}>optional</span>
                  )}
                </div>
                <div style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.6, marginBottom: 4 }}>{s.detail}</div>
                <div style={{ color: "#475569", fontSize: 11, fontStyle: "italic" }}>{s.materials}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Total bar */}
        <div style={{ marginTop: 24, padding: "12px 18px", background: "#0a0f1a", border: "1px solid #1e3a5f", borderRadius: 8 }}>
          <span style={{ color: "#60a5fa", fontSize: 12, fontWeight: 600 }}>
            Total workshop time: ~6.5 hours for sedan/hatchback. SUV/4x4: add 1.5-2 hours.
          </span>
        </div>
      </div>

      {/* Section 2: Checklist */}
      <div style={{ background: "#111", border: "1px solid #1f1f1f", borderRadius: 12, padding: 28 }}>
        <div style={{ color: C, fontSize: 11, letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>Tools & Materials Checklist</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
          {checklist.map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, background: "#0d0d0d", border: "1px solid #1a1a1a", borderRadius: 8, padding: "10px 14px" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#0f2a1a", border: "1px solid #166534", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: "#4ade80", fontSize: 11, fontWeight: 700 }}>&#10003;</span>
              </div>
              <span style={{ color: "#cbd5e1", fontSize: 12 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ marginTop: 20, textAlign: "right", color: "#333", fontSize: 10, letterSpacing: 2 }}>MONOATOM LABS · CERAPHENE · APPLICATION TIMELINE</div>
    </div>
  )
}
