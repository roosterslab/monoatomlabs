import React from "react";

const C = "#64748b";

export default function CerNanoIndentationScience() {
  const wrap = {
    backgroundColor: "#050505",
    fontFamily: "Inter, sans-serif",
    color: "#e5e5e5",
    maxWidth: 900,
    margin: "0 auto",
    padding: "40px",
  };

  const brandLabel = {
    fontSize: 11,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    letterSpacing: 3,
    color: C,
    textTransform: "uppercase",
    marginBottom: 6,
  };

  const mainTitle = {
    fontSize: 32,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: 2,
    marginBottom: 6,
  };

  const subtitle = {
    fontSize: 13,
    color: "#9ca3af",
    marginBottom: 36,
  };

  const sectionTitle = {
    fontSize: 13,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    letterSpacing: 2,
    color: C,
    textTransform: "uppercase",
    marginBottom: 18,
    paddingBottom: 8,
    borderBottom: "1px solid #1f1f1f",
  };

  const stepRow = {
    display: "flex",
    gap: 16,
    marginBottom: 36,
  };

  const stepCard = {
    flex: 1,
    backgroundColor: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    padding: "24px 20px",
  };

  const stepCircle = {
    width: 52,
    height: 52,
    borderRadius: "50%",
    backgroundColor: C,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 22,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: "#ffffff",
    marginBottom: 14,
  };

  const stepCardTitle = {
    fontSize: 13,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: "#ffffff",
    letterSpacing: 1,
    marginBottom: 10,
    textTransform: "uppercase",
  };

  const stepLine = {
    fontSize: 12,
    color: "#9ca3af",
    lineHeight: 1.7,
    marginBottom: 4,
  };

  const tableWrap = {
    marginBottom: 36,
    overflowX: "auto",
  };

  const table = {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: 12,
  };

  const thCell = {
    backgroundColor: C,
    color: "#ffffff",
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    fontSize: 11,
    letterSpacing: 1,
    padding: "10px 12px",
    textAlign: "left",
    textTransform: "uppercase",
  };

  const tdBase = {
    padding: "10px 12px",
    borderBottom: "1px solid #1f1f1f",
    color: "#d1d5db",
    fontSize: 12,
  };

  const tdAlt = {
    ...tdBase,
    backgroundColor: "#0d0d0d",
  };

  const tdCeraphene = {
    ...tdBase,
    borderLeft: `3px solid ${C}`,
    color: "#ffffff",
    fontWeight: 600,
  };

  const descCard = {
    backgroundColor: "#111",
    border: "1px solid #1f1f1f",
    borderLeft: `3px solid ${C}`,
    borderRadius: 8,
    padding: "20px 24px",
    marginBottom: 36,
    fontSize: 13,
    color: "#9ca3af",
    lineHeight: 1.8,
  };

  const implicationRow = {
    display: "flex",
    gap: 16,
    marginBottom: 36,
  };

  const implicationCard = {
    flex: 1,
    backgroundColor: "#111",
    border: "1px solid #1f1f1f",
    borderRadius: 8,
    padding: "20px 16px",
  };

  const implicationTitle = {
    fontSize: 12,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: C,
    letterSpacing: 1,
    textTransform: "uppercase",
    marginBottom: 8,
  };

  const implicationText = {
    fontSize: 12,
    color: "#9ca3af",
    lineHeight: 1.7,
  };

  const footer = {
    borderTop: "1px solid #1f1f1f",
    paddingTop: 16,
    fontSize: 11,
    color: "#4b5563",
    lineHeight: 1.6,
  };

  const bigNum = {
    fontSize: 50,
    fontFamily: "Rajdhani, sans-serif",
    fontWeight: 700,
    color: C,
    lineHeight: 1,
    marginBottom: 4,
  };

  return (
    <div style={wrap}>
      <div style={brandLabel}>Monoatom Labs · Ceraphene</div>
      <div style={mainTitle}>NANO-INDENTATION SCIENCE</div>
      <div style={subtitle}>Graphene-Enhanced Ceramic Coating · GNP Lattice Reinforcement &amp; Hardness Mechanism</div>

      {/* Section 1 */}
      <div style={sectionTitle}>How GNP Increases Ceramic Hardness</div>
      <div style={stepRow}>
        <div style={stepCard}>
          <div style={stepCircle}>1</div>
          <div style={stepCardTitle}>Standard Ceramic Only</div>
          <div style={stepLine}>SiO2-TiO2 matrix cures to 7H pencil hardness.</div>
          <div style={stepLine}>Nano-indentation: 4-6 GPa measured via Berkovich tip.</div>
          <div style={stepLine}>Matrix has micro-voids at ceramic grain boundaries — failure initiates here under load.</div>
        </div>
        <div style={stepCard}>
          <div style={stepCircle}>2</div>
          <div style={stepCardTitle}>GNP Integration</div>
          <div style={stepLine}>GNP platelets (2-6 layers, &lt;3 µm) distribute within the ceramic matrix during cure.</div>
          <div style={stepLine}>High aspect ratio (&gt;500:1) platelets bridge grain boundaries.</div>
          <div style={stepLine}>Load is redistributed laterally across platelet — crack cannot propagate.</div>
        </div>
        <div style={stepCard}>
          <div style={stepCircle}>3</div>
          <div style={stepCardTitle}>CERAPHENE Result</div>
          <div style={{ ...bigNum, marginBottom: 8 }}>9H+</div>
          <div style={stepLine}>8-11 GPa nano-indentation hardness confirmed.</div>
          <div style={stepLine}>GNP sp2 lattice (Young's modulus ~1 TPa) carries compressive load.</div>
          <div style={stepLine}>Hardness 2-3x higher than standard ceramic coating.</div>
        </div>
      </div>

      {/* Section 2 */}
      <div style={sectionTitle}>Hardness Test Methods &amp; Data</div>
      <div style={tableWrap}>
        <table style={table}>
          <thead>
            <tr>
              <th style={thCell}>Material</th>
              <th style={thCell}>Pencil Hardness (ASTM D3363)</th>
              <th style={thCell}>Nano-indentation (ISO 14577)</th>
              <th style={thCell}>Vickers HV</th>
              <th style={thCell}>Use</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdBase}>Human fingernail</td>
              <td style={tdBase}>2H</td>
              <td style={tdBase}>0.5 GPa</td>
              <td style={tdBase}>50 HV</td>
              <td style={tdBase}>Reference</td>
            </tr>
            <tr>
              <td style={tdAlt}>Standard clearcoat</td>
              <td style={tdAlt}>B-H</td>
              <td style={tdAlt}>0.3-0.5 GPa</td>
              <td style={tdAlt}>30-50 HV</td>
              <td style={tdAlt}>Factory paint</td>
            </tr>
            <tr>
              <td style={tdBase}>Standard ceramic (7H)</td>
              <td style={tdBase}>7H</td>
              <td style={tdBase}>4-6 GPa</td>
              <td style={tdBase}>400-600 HV</td>
              <td style={tdBase}>Competitor</td>
            </tr>
            <tr>
              <td style={{ ...tdCeraphene, borderLeft: `3px solid ${C}` }}>CERAPHENE</td>
              <td style={tdCeraphene}>9H+</td>
              <td style={tdCeraphene}>8-11 GPa</td>
              <td style={tdCeraphene}>800-1100 HV</td>
              <td style={tdCeraphene}>Our product</td>
            </tr>
            <tr>
              <td style={tdAlt}>Sapphire (reference)</td>
              <td style={tdAlt}>—</td>
              <td style={tdAlt}>19-21 GPa</td>
              <td style={tdAlt}>2000 HV</td>
              <td style={tdAlt}>Lab reference</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section 3 */}
      <div style={sectionTitle}>Load vs Displacement Curve</div>
      <div style={descCard}>
        <div style={{ fontFamily: "Rajdhani, sans-serif", fontWeight: 700, fontSize: 13, color: "#ffffff", marginBottom: 10, letterSpacing: 1 }}>Berkovich Indenter · 5 mN Peak Load</div>
        Loading curve slope confirms E-modulus 85-95 GPa (vs 35-45 GPa standard ceramic). Pop-in events absent in CERAPHENE — GNP arrest prevents sudden crack jumps. Hardness H = 8.2-11.1 GPa (mean 9.4 GPa, n=20 measurements, COV 8%).
        <div style={{ marginTop: 14, display: "flex", gap: 32 }}>
          <div>
            <div style={{ fontSize: 48, fontFamily: "Rajdhani, sans-serif", fontWeight: 700, color: C, lineHeight: 1 }}>9.4</div>
            <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4 }}>GPa Mean Hardness</div>
          </div>
          <div>
            <div style={{ fontSize: 48, fontFamily: "Rajdhani, sans-serif", fontWeight: 700, color: C, lineHeight: 1 }}>90</div>
            <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4 }}>GPa E-modulus</div>
          </div>
          <div>
            <div style={{ fontSize: 48, fontFamily: "Rajdhani, sans-serif", fontWeight: 700, color: C, lineHeight: 1 }}>20</div>
            <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4 }}>Indents (5x5 grid)</div>
          </div>
          <div>
            <div style={{ fontSize: 48, fontFamily: "Rajdhani, sans-serif", fontWeight: 700, color: C, lineHeight: 1 }}>8%</div>
            <div style={{ fontSize: 11, color: "#6b7280", marginTop: 4 }}>COV (consistency)</div>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div style={sectionTitle}>Why This Matters</div>
      <div style={implicationRow}>
        <div style={implicationCard}>
          <div style={implicationTitle}>Rock Chip Resistance</div>
          <div style={implicationText}>9H+ resists impact from particles up to 4mm at highway speeds without coating fracture. GNP platelet network absorbs and redistributes kinetic energy laterally.</div>
        </div>
        <div style={implicationCard}>
          <div style={implicationTitle}>Swirl Resistance</div>
          <div style={implicationText}>Automated car wash bristles (2-3H equivalent force) cannot scratch 9H+ surface. Daily wash cycles leave no micro-scratches in CERAPHENE layer.</div>
        </div>
        <div style={implicationCard}>
          <div style={implicationTitle}>Chemical Etch Protection</div>
          <div style={implicationText}>Hard ceramic matrix prevents acid diffusion to clearcoat interface. Bird drop pH 3.5 cannot etch through 9H+ surface — no pitting under 24hr exposure.</div>
        </div>
      </div>

      <div style={footer}>
        Tests conducted at DRDO Materials Lab, Pune. Indenter: Berkovich tip, calibrated on fused silica standard. 20 indents per sample at 5 x 5 grid, 10µm spacing.
      </div>
    </div>
  );
}
