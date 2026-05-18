import React from "react";

const C = "#06b6d4";

export default function PolyCircularEconomyRecycling() {
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
    bigNumMd: {
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 32,
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
    statDesc: {
      color: "#666",
      fontSize: 11,
      lineHeight: 1.4,
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
    noteBox: {
      background: "#001a1f",
      border: "1px solid " + C,
      borderRadius: 6,
      padding: "12px 16px",
      color: C,
      fontSize: 13,
      lineHeight: 1.5,
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
      background: "#00111a",
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
      lineHeight: 1.7,
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
        <h1 style={styles.title}>CIRCULAR ECONOMY</h1>
        <div style={styles.subtitle}>Graphene HDPE Masterbatch · Recyclability, rHDPE Compatibility &amp; Sustainability Profile</div>

        {/* Section 1 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Recyclability of HD-G-PE</div>
          <div style={styles.statRow}>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>GNP Content in Final Part</div>
              <div style={styles.bigNumMd}>0.5-2.0%</div>
              <div style={styles.statDesc}>by weight — very low additive fraction</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>GNP is Inert Carbon</div>
              <div style={{ fontFamily: "Rajdhani, sans-serif", fontSize: 28, fontWeight: 700, color: C, lineHeight: 1, marginBottom: 4 }}>No contamination</div>
              <div style={styles.statDesc}>No chemical contamination of recyclate stream</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>rHDPE with GNP</div>
              <div style={styles.bigNumMd}>Maintained</div>
              <div style={styles.statDesc}>Properties maintained or improved over virgin rHDPE baseline</div>
            </div>
            <div style={styles.statCard}>
              <div style={styles.statLabel}>Mechanical Recycling Cycles</div>
              <div style={styles.bigNum}>85%</div>
              <div style={styles.statDesc}>Properties retained after 3 reprocessing cycles</div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>rHDPE Blending Performance</div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>rHDPE Content</th>
                <th style={styles.th}>Standard rHDPE Tensile</th>
                <th style={styles.th}>HD-G-PE rHDPE Tensile</th>
                <th style={styles.th}>Recovery vs Virgin</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>100% virgin</td>
                <td style={styles.td}>24 MPa baseline</td>
                <td style={styles.tdAcc}>31 MPa (+GNP)</td>
                <td style={styles.tdAcc}>129% of virgin</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>25% rHDPE blend</td>
                <td style={styles.tdAlt}>22 MPa (-8%)</td>
                <td style={styles.tdAccAlt}>29 MPa</td>
                <td style={styles.tdAccAlt}>121% of virgin</td>
              </tr>
              <tr>
                <td style={styles.td}>50% rHDPE blend</td>
                <td style={styles.td}>19 MPa (-21%)</td>
                <td style={styles.tdAcc}>27 MPa</td>
                <td style={styles.tdAcc}>113% of virgin</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>75% rHDPE blend</td>
                <td style={styles.tdAlt}>16 MPa (-33%)</td>
                <td style={styles.tdAccAlt}>24 MPa</td>
                <td style={styles.tdAccAlt}>100% of virgin</td>
              </tr>
            </tbody>
          </table>
          <div style={styles.noteBox}>
            75% rHDPE + HD-G-PE masterbatch achieves same strength as 100% virgin HDPE — enabling high recycled content without performance penalty.
          </div>
        </div>

        {/* Section 3 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Downgauging + Recycling — Combined Benefit</div>
          <div style={styles.compRow}>
            <div style={styles.compCard}>
              <div style={styles.compTitle}>Standard HDPE Product</div>
              <div style={styles.compText}>
                30µm agricultural film. Produced and landfilled after 1 season. 100% virgin polymer required per production run.
              </div>
            </div>
            <div style={styles.compCardHL}>
              <div style={styles.compTitleHL}>HD-G-PE Approach</div>
              <div style={styles.compText}>
                <strong style={{ color: C }}>25µm film</strong> (-17% material per run).<br />
                Lasts <strong style={{ color: C }}>2-3 seasons</strong> (UV stability improvement).<br />
                End-of-life: recyclable into rHDPE stream.<br />
                Net: 25µm x 1 run vs 30µm x 3 seasons comparable.
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>EPR (Extended Producer Responsibility) — India</div>
          <div style={styles.cardRow}>
            <div style={styles.card}>
              <div style={styles.cardLabel}>CPCB EPR Notification 2022</div>
              <div style={styles.cardDesc}>Plastic producers and importers must fulfil EPR obligations. HD-G-PE films can be registered as recyclable Category I plastic under the framework.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>EPR Credit Value</div>
              <div style={styles.cardDesc}>Recyclability certificates (RCs) trade at ₹1-6/kg. HD-G-PE producers are eligible for RCs — creating an additional revenue stream per tonne.</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Downgauging EPR Benefit</div>
              <div style={styles.cardDesc}>Fewer kg produced per unit of end-use = lower EPR obligation per product unit. Downgauging directly reduces compliance cost.</div>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          Recyclability testing: ISO 15270 classification. rHDPE tensile data on injection-moulded specimens (ASTM D638). EPR: CPCB Draft EPR Guidelines for Plastics, 2022.
        </div>
      </div>
    </div>
  );
}
