import React from "react";

const C = "#f59e0b";

export default function SolBifacialPanelPerformance() {
  const styles = {
    wrapper: {
      background: "#050505",
      minHeight: "100vh",
      fontFamily: "Inter, sans-serif",
      padding: "40px",
      color: "#e5e5e5",
    },
    inner: {
      maxWidth: 900,
      margin: "0 auto",
      padding: "40px",
    },
    tagline: {
      color: C,
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 13,
      fontWeight: 600,
      letterSpacing: 3,
      textTransform: "uppercase",
      marginBottom: 6,
    },
    title: {
      color: "#ffffff",
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: 1,
      margin: "0 0 8px 0",
    },
    subtitle: {
      color: "#999",
      fontSize: 14,
      marginBottom: 40,
    },
    sectionTitle: {
      color: "#ffffff",
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: 1,
      textTransform: "uppercase",
      borderLeft: "3px solid " + C,
      paddingLeft: 12,
      marginBottom: 20,
    },
    section: {
      marginBottom: 40,
    },
    cardRow: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
      marginBottom: 8,
    },
    card: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 8,
      padding: "20px 16px",
    },
    bigNum: {
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 48,
      fontWeight: 700,
      color: C,
      lineHeight: 1,
      marginBottom: 6,
    },
    cardLabel: {
      color: "#aaa",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 6,
    },
    cardDesc: {
      color: "#ccc",
      fontSize: 13,
      lineHeight: 1.5,
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: 13,
    },
    th: {
      background: C,
      color: "#050505",
      fontFamily: "Rajdhani, sans-serif",
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: 0.5,
      padding: "10px 12px",
      textAlign: "left",
      border: "1px solid #1f1f1f",
    },
    td: {
      padding: "10px 12px",
      border: "1px solid #1f1f1f",
      color: "#ccc",
      fontSize: 13,
    },
    tdHL: {
      padding: "10px 12px",
      border: "1px solid " + C,
      color: "#fff",
      fontSize: 13,
      fontWeight: 600,
      background: "#1a1200",
    },
    tdHLFirst: {
      padding: "10px 12px",
      border: "1px solid " + C,
      color: C,
      fontSize: 13,
      fontWeight: 700,
      background: "#1a1200",
    },
    badge: {
      display: "inline-block",
      background: "#1a1200",
      border: "1px solid " + C,
      borderRadius: 20,
      padding: "6px 16px",
      color: C,
      fontSize: 13,
      fontWeight: 600,
      marginTop: 12,
    },
    compRow: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 16,
    },
    compCard: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 8,
      padding: 20,
    },
    compCardHL: {
      background: "#0d0b00",
      border: "1px solid " + C,
      borderRadius: 8,
      padding: 20,
    },
    compTitle: {
      color: "#aaa",
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 10,
    },
    compTitleHL: {
      color: C,
      fontSize: 12,
      textTransform: "uppercase",
      letterSpacing: 1,
      fontWeight: 700,
      marginBottom: 10,
    },
    compText: {
      color: "#ccc",
      fontSize: 13,
      lineHeight: 1.6,
    },
    footer: {
      borderTop: "1px solid #1f1f1f",
      paddingTop: 16,
      color: "#555",
      fontSize: 11,
      lineHeight: 1.6,
      marginTop: 40,
    },
    trAlt: {
      background: "#0d0d0d",
    },
    trBase: {
      background: "#111",
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.inner}>
        <div style={styles.tagline}>MONOATOM LABS · GRAFFISOL</div>
        <h1 style={styles.title}>BIFACIAL PERFORMANCE</h1>
        <div style={styles.subtitle}>Solar Panel Coating · Front &amp; Rear Side Enhancement on Bifacial Modules</div>

        {/* Section 1 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Bifacial Gain Breakdown</div>
          <div style={styles.cardRow}>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Standard Bifacial Gain</div>
              <div style={styles.bigNum}>5-10%</div>
              <div style={styles.cardDesc}>From rear irradiance on ground-mounted bifacial modules (no coating)</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>GRAFFISOL Front Side Gain</div>
              <div style={styles.bigNum}>+10-12%</div>
              <div style={styles.cardDesc}>Anti-reflective + hydrophobic + thermal management on front glass</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>GRAFFISOL Rear Side Gain</div>
              <div style={styles.bigNum}>+2-3%</div>
              <div style={styles.cardDesc}>Coating reduces inter-row soiling on rear — bifacial factor maintained at higher value</div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Combined Performance — 1 MW Bifacial Array</div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Configuration</th>
                <th style={styles.th}>Annual Output</th>
                <th style={styles.th}>vs Monofacial Uncoated</th>
                <th style={styles.th}>Revenue (₹4/kWh)</th>
              </tr>
            </thead>
            <tbody>
              <tr style={styles.trBase}>
                <td style={styles.td}>Monofacial, uncoated</td>
                <td style={styles.td}>14,00,000 kWh</td>
                <td style={styles.td}>Baseline</td>
                <td style={styles.td}>₹56,00,000</td>
              </tr>
              <tr style={styles.trAlt}>
                <td style={styles.td}>Bifacial, uncoated</td>
                <td style={styles.td}>15,12,000 kWh</td>
                <td style={styles.td}>+8%</td>
                <td style={styles.td}>₹60,48,000</td>
              </tr>
              <tr>
                <td style={styles.tdHLFirst}>Bifacial + GRAFFISOL</td>
                <td style={styles.tdHL}>17,00,000 kWh</td>
                <td style={styles.tdHL}>+21.4%</td>
                <td style={styles.tdHL}>₹68,00,000</td>
              </tr>
            </tbody>
          </table>
          <div style={styles.badge}>Additional ₹12,00,000/yr vs uncoated monofacial</div>
        </div>

        {/* Section 3 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Application Considerations for Bifacial</div>
          <div style={styles.cardRow}>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Front Glass</div>
              <div style={styles.cardDesc}>Apply GRAFFISOL as standard HVLP spray. Same coverage rate 15 mL/m2. No special handling for bifacial vs monofacial front application.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Rear Glass (Tracking / Elevated)</div>
              <div style={styles.cardDesc}>Access from below with roller applicator. Coating prevents dust adhesion on rear glass — maintains bifacial factor at design value.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Ground Albedo Interaction</div>
              <div style={styles.cardDesc}>GRAFFISOL-enhanced front captures more diffuse irradiance, improving effective albedo utilisation by bifacial rear side.</div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Soiling Impact on Bifacial</div>
          <div style={styles.compRow}>
            <div style={styles.compCard}>
              <div style={styles.compTitle}>Uncoated Bifacial</div>
              <div style={styles.compText}>
                Front soiling reduces output 15-20%. Rear soiling from ground splash reduces bifacial gain by 20-30%. Combined: bifacial advantage largely eroded after 3 months without cleaning.
              </div>
            </div>
            <div style={styles.compCardHL}>
              <div style={styles.compTitleHL}>Coated Bifacial (GRAFFISOL)</div>
              <div style={styles.compText}>
                Front soiling &lt;4% loss. Rear stays clean on elevated mount. Bifacial gain maintained at 92% of design value throughout the year with no mid-cycle cleaning required.
              </div>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          Bifacial performance modelling per IEC TS 60904-1-2. Field data from 3MW bifacial tracker array, Anantapur (2023). Albedo 0.25 (sandy soil).
        </div>
      </div>
    </div>
  );
}
