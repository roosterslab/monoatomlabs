import React from "react";

const C = "#06b6d4";

export default function PolyPipePressureRating() {
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
    },
    card: {
      background: "#111",
      border: "1px solid #1f1f1f",
      borderRadius: 8,
      padding: "20px 16px",
    },
    bigNum: {
      fontFamily: "Rajdhani, sans-serif",
      fontSize: 52,
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
      marginBottom: 8,
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
    tdAlt: {
      padding: "10px 12px",
      border: "1px solid #1f1f1f",
      color: "#ccc",
      fontSize: 13,
      background: "#0d0d0d",
    },
    tdHL: {
      padding: "10px 12px",
      border: "1px solid " + C,
      color: "#fff",
      fontSize: 13,
      fontWeight: 600,
      background: "#001a1f",
    },
    tdHLAcc: {
      padding: "10px 12px",
      border: "1px solid " + C,
      color: C,
      fontSize: 13,
      fontWeight: 700,
      background: "#001a1f",
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
    badge: {
      display: "inline-block",
      background: "#001a1f",
      border: "1px solid " + C,
      borderRadius: 20,
      padding: "6px 16px",
      color: C,
      fontSize: 13,
      fontWeight: 600,
      marginTop: 12,
    },
    noteText: {
      color: "#888",
      fontSize: 12,
      marginTop: 10,
      fontStyle: "italic",
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
        <h1 style={styles.title}>PIPE PRESSURE RATING</h1>
        <div style={styles.subtitle}>Graphene HDPE Masterbatch · SDR Series &amp; Pressure Class Enhancement</div>

        {/* Section 1 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>SDR Rating Improvement</div>
          <div style={styles.cardRow}>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Standard PE100 at SDR 11</div>
              <div style={styles.bigNum}>PN 16</div>
              <div style={styles.cardDesc}>16 bar maximum working pressure at 20°C water — standard benchmark</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>HD-G-PE PE100 at SDR 13.6 (Thinner Wall)</div>
              <div style={styles.bigNum}>PN 16</div>
              <div style={styles.cardDesc}>Equivalent PN 16 performance achieved with a thinner wall — same pressure, less material</div>
            </div>
            <div style={styles.card}>
              <div style={styles.cardLabel}>Wall Thickness Reduction</div>
              <div style={styles.bigNum}>19%</div>
              <div style={styles.cardDesc}>Thinner wall achieves the same pressure rating — direct material and cost saving per metre</div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Pressure Rating by SDR — Standard vs HD-G-PE</div>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>SDR Series</th>
                <th style={styles.th}>Standard PE100 (bar)</th>
                <th style={styles.th}>HD-G-PE PE100 (bar)</th>
                <th style={styles.th}>Gain</th>
                <th style={styles.th}>Pipe Weight Saving</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>SDR 7.4</td>
                <td style={styles.td}>25 bar</td>
                <td style={{ ...styles.td, color: C }}>31 bar</td>
                <td style={{ ...styles.td, color: C, fontWeight: 600 }}>+24%</td>
                <td style={styles.td}>—</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>SDR 9</td>
                <td style={styles.tdAlt}>20 bar</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>25 bar</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>+25%</td>
                <td style={styles.tdAlt}>—</td>
              </tr>
              <tr>
                <td style={styles.td}>SDR 11</td>
                <td style={styles.td}>16 bar</td>
                <td style={{ ...styles.td, color: C }}>20 bar</td>
                <td style={{ ...styles.td, color: C, fontWeight: 600 }}>+25%</td>
                <td style={styles.td}>—</td>
              </tr>
              <tr>
                <td style={styles.tdHLAcc}>SDR 13.6</td>
                <td style={styles.tdHL}>12.5 bar</td>
                <td style={styles.tdHLAcc}>16 bar</td>
                <td style={styles.tdHLAcc}>+28%</td>
                <td style={styles.tdHL}>19% less material</td>
              </tr>
              <tr>
                <td style={styles.tdAlt}>SDR 17</td>
                <td style={styles.tdAlt}>10 bar</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>12.5 bar</td>
                <td style={{ ...styles.tdAlt, color: C, fontWeight: 600 }}>+25%</td>
                <td style={styles.tdAlt}>25% less material</td>
              </tr>
            </tbody>
          </table>
          <div style={styles.noteText}>HD-G-PE SDR 13.6 achieves same PN 16 as standard SDR 11 — with 19% less HDPE material per metre.</div>
        </div>

        {/* Section 3 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>Economic Impact of SDR Upgrade</div>
          <div style={styles.compRow}>
            <div style={styles.compCard}>
              <div style={styles.compTitle}>Standard PE100 SDR 11 at PN 16</div>
              <div style={styles.compText}>
                Wall thickness: <strong style={{ color: "#fff" }}>10.0mm</strong> (for 110mm OD pipe)<br />
                Material: <strong style={{ color: "#fff" }}>4.2 kg/m</strong> pipe weight<br />
                Cost: <strong style={{ color: "#fff" }}>₹420/m</strong>
              </div>
            </div>
            <div style={styles.compCardHL}>
              <div style={styles.compTitleHL}>HD-G-PE at SDR 13.6 for PN 16</div>
              <div style={styles.compText}>
                Wall thickness: <strong style={{ color: C }}>8.1mm</strong> (-19%)<br />
                Material: <strong style={{ color: C }}>3.4 kg/m</strong><br />
                Cost: <strong style={{ color: C }}>₹395/m</strong> (incl. masterbatch premium)<br />
                Saving: <strong style={{ color: C }}>₹25/m</strong>
              </div>
              <div style={styles.badge}>On 10km water main: ₹2,50,000 saving</div>
            </div>
          </div>
        </div>

        {/* Section 4 */}
        <div style={styles.section}>
          <div style={styles.sectionTitle}>IS 4984 Compliance</div>
          <div style={styles.pillRow}>
            <div style={styles.pill}>
              <div style={styles.pillDot}></div>
              <div style={styles.pillText}><strong style={{ color: "#fff" }}>IS 4984:2016</strong> — Compliant for potable water supply and irrigation mains</div>
            </div>
            <div style={styles.pill}>
              <div style={styles.pillDot}></div>
              <div style={styles.pillText}><strong style={{ color: "#fff" }}>PE100 raw material grade</strong> — Borouge / Reliance / HPCL approved grades used as base polymer</div>
            </div>
            <div style={styles.pill}>
              <div style={styles.pillDot}></div>
              <div style={styles.pillText}><strong style={{ color: "#fff" }}>Hydrostatic testing</strong> — ASTM D1598 extrapolated to 50yr design life, regression line confirmed</div>
            </div>
            <div style={styles.pill}>
              <div style={styles.pillDot}></div>
              <div style={styles.pillText}><strong style={{ color: "#fff" }}>Surge pressure (water hammer)</strong> — HD-G-PE higher modulus improves surge tolerance by 15%</div>
            </div>
          </div>
        </div>

        <div style={styles.footer}>
          SDR = Standard Dimension Ratio (OD/wall thickness). PN = Pressure Nominal in bar at 20°C water. IS 4984 Table 1 standard used for base reference. HD-G-PE pressure data from ASTM D1598 regression at 1% GNP loading.
        </div>
      </div>
    </div>
  );
}
