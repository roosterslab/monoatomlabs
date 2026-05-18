import React from "react";

const C = "#06b6d4";

export default function PolyGeomembraneApplications() {
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
    statRow: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 12,
    },
    statCard: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 8,
      padding: "18px 14px",
    },
    bigNum: {
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 48,
      fontWeight: 700,
      color: C,
      lineHeight: 1,
      marginBottom: 4,
    },
    statLabel: {
      color: "#aaa",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 4,
    },
    statStd: {
      color: "#666",
      fontSize: 11,
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
    tdAlt: {
      padding: "10px 12px",
      border: "1px solid #1f1f1f",
      color: "#ccc",
      fontSize: 13,
      background: "#0d0d0d",
    },
    tdAcc: {
      padding: "10px 12px",
      border: "1px solid #1f1f1f",
      color: C,
      fontSize: 13,
      fontWeight: 600,
    },
    tdAccAlt: {
      padding: "10px 12px",
      border: "1px solid #1f1f1f",
      color: C,
      fontSize: 13,
      fontWeight: 600,
      background: "#0d0d0d",
    },
    cardRow: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 16,
    },
    card: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 8,
      padding: "18px 16px",
    },
    cardLabel: {
      color: "#aaa",
      fontSize: 11,
      textTransform: "uppercase",
      letterSpacing: 1,
      marginBottom: 8,
    },
    cardDesc: {
      color: "#ccc",
      fontSize: 13,
      lineHeight: 1.6,
    },
    pillRow: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: 10,
    },
    pill: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 6,
      padding: "12px 16px",
      display: "flex",
      alignItems: "flex-start",
      gap: 10,
    },
    pillDot: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: C,
      marginTop: 4,
      flexShrink: 0,
    },
    pillText: {
      color: "#ccc",
      fontSize: 13,
      lineHeight: 1.5,
    },
    footer: {
      borderTop: "1px solid #1f1f1f",
      paddingTop: 16,
      color: "#555",
      fontSize: 11,
      lineHeight: 1.6,
      marginTop: 40,
    },
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.inner}>
        <div style={styles.tagline}>MONOATOM LABS · HD-G-PE</div>
        <h1 style={styles.title}>GEOMEMBRANE APPLICATIONS</h1>
        <div style={styles.subtitle}>Graphene HDPE Masterbatch · Liner Performance Enhancement for Civil &amp; Environmental Use</div>

        {/* Section 1 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Key Performance Gains for Geomembranes</div>
          <div style={styles.statRow}>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Tensile Strength</div>
              <div style={styles.bigNum}>+30%</div>
              <div style={styles.statStd}>ASTM D6693</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Puncture Resistance</div>
              <div style={styles.bigNum}>+45%</div>
              <div style={styles.statStd}>ASTM D4833</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>UV Stabilisation</div>
              <div style={styles.bigNum}>+50%</div>
              <div style={styles.statStd}>ISO 4892-3 outdoor life</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Seam Strength</div>
              <div style={styles.bigNum}>+28%</div>
              <div style={styles.statStd}>ASTM D6392 peel + shear</div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Application Sectors</div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Application</th>
                <th style={styles.th}>Standard 1.5mm HDPE</th>
                <th style={styles.th}>HD-G-PE 1.2mm</th>
                <th style={styles.th}>Saving</th>
                <th style={styles.th}>Gain</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Pond liner (fish/shrimp)</td>
                <td style={styles.td}>18 kg/m²</td>
                <td style={{ ...styles.td, color: C }}>14.5 kg/m²</td>
                <td style={styles.tdAcc}>-19% weight</td>
                <td style={styles.td}>+30% puncture</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>Landfill lining</td>
                <td style={styles.tdAlt}>1.5mm standard</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>1.2mm HD-G-PE</td>
                <td style={styles.tdAccAlt}>-20% material</td>
                <td style={styles.tdAlt}>+45% puncture</td>
              </tr>
              <tr>
                <td style={styles.td}>Canal lining (irrigation)</td>
                <td style={styles.td}>1.0mm</td>
                <td style={{ ...styles.td, color: C }}>0.8mm</td>
                <td style={styles.tdAcc}>-20%</td>
                <td style={styles.td}>Longer UV life</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>Mine tailings containment</td>
                <td style={styles.tdAlt}>2.0mm</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>1.6mm</td>
                <td style={styles.tdAccAlt}>-20%</td>
                <td style={styles.tdAlt}>+seam strength</td>
              </tr>
              <tr>
                <td style={styles.td}>Biogas digester liner</td>
                <td style={styles.td}>1.5mm</td>
                <td style={{ ...styles.td, color: C }}>1.2mm</td>
                <td style={styles.tdAcc}>-20%</td>
                <td style={styles.td}>Better CH4 barrier</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 3 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Seam Integrity — Critical for Geomembranes</div>
          <div style={styles.cardRow}>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Hot Wedge Welding</div>
              <div style={styles.cardDesc}>HD-G-PE welds at standard temperatures (190-230°C). Seam peel strength +28% vs standard liner — critical for landfill containment integrity.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Extrusion Fillet Welding</div>
              <div style={styles.cardDesc}>Compatible with standard extrusion weld tooling. GNP in base material does not cause void formation at the weld interface.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>QC Testing</div>
              <div style={styles.cardDesc}>ASTM D6392 destructive coupon peel + shear. Accept criterion: ≥90% of parent material strength. HD-G-PE typically achieves 94-98%.</div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>BIS / CPCB Compliance</div>
          <div style={styles.pillRow}>
            <div style={styles.pill}>
              <div style={styles.pillDot}></div>
              <div style={styles.pillText}><strong style={{ color: "#fff" }}>IS 15351</strong> — HDPE geomembrane for solid waste landfill — compliant</div>
            </div>
            <div style={styles.pill}>
              <div style={styles.pillDot}></div>
              <div style={styles.pillText}><strong style={{ color: "#fff" }}>CPCB guidelines (solid waste)</strong> — 1.5mm minimum; HD-G-PE 1.2mm requires site-specific structural engineer certification</div>
            </div>
            <div style={styles.pill}>
              <div style={styles.pillDot}></div>
              <div style={styles.pillText}><strong style={{ color: "#fff" }}>Aquaculture</strong> — MPEDA food-safe liner (Marine Products Export Development Authority) — approved</div>
            </div>
            <div style={styles.pill}>
              <div style={styles.pillDot}></div>
              <div style={styles.pillText}><strong style={{ color: "#fff" }}>Water retention</strong> — CWC (Central Water Commission) canal lining specification — submitted for approval</div>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          Geomembrane data from ASTM D6693 tensile and D4833 puncture tests on 1.5mm blown film. UV from ISO 4892-3, 2000hr xenon arc. Seam: D6392 at 25mm/min peel rate.
        </div>
      </div>
    </div>
  );
}
